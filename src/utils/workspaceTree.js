const { ObjectId } = require('mongodb');

module.exports = class WorkspaceTree {
  constructor() {
    this.OrderArray = [];
    this.root = [];
    this.isBackTrack = false;
    this.isBackTrackValue = '';
    this.S3UrlDelete = [];
  }

  // Create a new ObjectId
  _createNewId() {
    return new ObjectId();
  }

  // Find the top node and add a section to down of the node
  _findTopNodeAndInsert(value, root, topNode) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === topNode) {
        return splitObjId === topNode;
      }
      if (el.childNode.length > 0) {
        this._findTopNodeAndInsert(value, el.childNode, topNode);
      }
    });

    if (index !== -1) {
      if (root[index].childNode.length > 0) {
        value.childNode = root[index].childNode;
        root[index].childNode = [];
      }
      root.splice(index + 1, 0, value);
    }
  }

  // Show the Node With level
  _showAllNodeWithLevel(root, level) {
    for (const data of root) {
      const dataObj = {
        level: level,
        _id: data._id,
        type: data.type,
        content: data.content,
      };
      this.OrderArray.push(dataObj);
      if (data.childNode.length > 0) {
        const percentage = level.split('%')[0];
        this._showAllNodeWithLevel(data.childNode, `${percentage - 5}%`);
      }
    }
  }

  // Find the top node and add new node
  _findTopNodeAndInsertNewNode(value, root, topNode) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === topNode) {
        return splitObjId === topNode;
      }
      if (el.childNode.length > 0) {
        this._findTopNodeAndInsertNewNode(value, el.childNode, topNode);
      }
    });

    if (index !== -1) {
      root.splice(index + 1, 0, value);
    }
  }

  // Add a Section to a childNode of a parent
  _findParentAndInsert(root, child) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === child) {
        return splitObjId === child;
      }
      if (el.childNode.length > 0) {
        this._findParentAndInsert(el.childNode, child);
      }
    });

    if (index !== -1 && index !== 0) {
      root[index - 1].childNode.push(root[index]);
      root.splice(index, 1);
    }
  }

  // Add child node to a node of a parent
  _findNodeAndChangeToParentNode(root, nodeId) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === nodeId) {
        return splitObjId === nodeId;
      }
      if (el.childNode.length > 0) {
        this._findNodeAndChangeToParentNode(el.childNode, nodeId);
        if (this.isBackTrack) {
          return this.isBackTrack;
        }
      }
    });

    if (index !== -1 && this.isBackTrack) {
      const childIndex = root[index].childNode.findIndex((el) => {
        const splitObjId = String(el._id).split('"')[0];
        return splitObjId === nodeId;
      });
      root[index].childNode.splice(childIndex, 1);

      root.splice(index + 1, 0, this.isBackTrackValue);
      this.isBackTrackValue = '';
      this.isBackTrack = false;
    } else if (index !== -1 && !this.isBackTrack) {
      this.isBackTrackValue = root[index];
      this.isBackTrack = true;
    }
  }

  //  insert a Section last of 1st level
  _insertFirstNode(value) {
    this.root.push(value);
  }

  // Update the type of Section
  _findAndUpdateType(type, id, root) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === id) {
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._findAndUpdateType(type, id, el.childNode);
      }
    });

    if (index !== -1) {
      root[index].type = type;
    }
  }

  // Update the content of Section
  _findAndUpdateContent(content, id, root) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === id) {
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._findAndUpdateContent(content, id, el.childNode);
      }
    });

    if (index !== -1) {
      root[index].content = content;
    }
  }

  // Update the Section toggle open option
  _findAndUpdateToggleOption(option, id, root) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === id) {
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._findAndUpdateToggleOption(option, id, el.childNode);
      }
    });

    if (index !== -1) {
      root[index].isToggle = option;

      if (option === false) {
        this._falseAllChild(root[index].childNode, option);
      }
    }
  }

  // Change all node to false
  _falseAllChild(array, bol) {
    for (const val of array) {
      if (val.type === 'toggle') {
        val.isToggle = bol;
      }
      if (val.childNode.length > 0) {
        if (val.type === 'toggle') {
          this._falseAllChild(val.childNode, bol);
        }
      }
    }
  }

  // Remove a node with child
  _removeNodeWithChild(root, id) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === id) {
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._removeNodeWithChild(el.childNode, id);
      }
    });

    if (index !== -1) {
      this._removeS3Url([root[index]]);
      root.splice(index, 1);
    }
  }

  // Remove S3 url
  _removeS3Url(root) {
    for (const data of root) {
      if (data.type === 'image') {
        this.S3UrlDelete.push(data.content);
      }
      if (data.childNode.length > 0) {
        this._removeS3Url(data.childNode);
      }
    }
  }

  // Remove a node without child
  _removeNodeWithOutChild(root, id) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === id) {
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._removeNodeWithOutChild(el.childNode, id);
      }
    });

    if (index !== -1) {
      if (root[index].type === 'image') {
        this.S3UrlDelete.push(root[index].content);
      }
      if (root[index].childNode.length > 0) {
        const child = root[index].childNode;
        let i = index;
        root.splice(index, 1);
        for (const value of child) {
          root.splice(i, 0, value);
          i++;
        }
      } else {
        root.splice(index, 1);
      }
    }
  }

  // Update the node While image upload
  _findAndUpdateSecImage(imageUrl, id, root) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === id) {
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._findAndUpdateSecImage(imageUrl, id, el.childNode);
      }
    });

    if (index !== -1) {
      root[index].content = imageUrl;
      root[index].type = 'image';
      root[index].imgPosition = 'auto';
    }
  }

  // Update the image size
  _findAndUpdateSecImageSize(imgSize, id, root) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === id) {
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._findAndUpdateSecImageSize(imgSize, id, el.childNode);
      }
    });

    if (index !== -1) {
      root[index].imgPosition = imgSize;
    }
  }
};
