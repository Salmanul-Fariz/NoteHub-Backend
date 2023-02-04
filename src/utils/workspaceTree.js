const { ObjectId } = require('mongodb');

module.exports = class WorkspaceTree {
  constructor() {
    this.OrderArray = [];
    this.root = [];
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
        this._findTopNodeAndInsert(value, el.childNode, topNode);
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

  _falseAllChild(array, bol) {
    for (const val of array) {
      val.isToggle = bol;
      if (val.childNode.length > 0) {
        this._falseAllChild(val.childNode, bol);
      }
    }
  }

  // delete the Section
  _deleteNode(id, root) {
    let childNodes;
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];

      if (splitObjId === id) {
        if (el.childNode.length > 0) {
          childNodes = el.childNode;
        }
        return splitObjId === id;
      }
      if (el.childNode.length > 0) {
        this._deleteNode(id, el.childNode);
      }
    });

    if (index !== -1) {
      if (childNodes) {
        root.splice(index, 1);
        let arrIndex = index;
        childNodes.forEach((el) => {
          root.splice(arrIndex, 0, el);
          arrIndex++;
        });
      } else {
        root.splice(index, 1);
      }
    }
  }
};
