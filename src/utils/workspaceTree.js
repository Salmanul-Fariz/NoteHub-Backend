const { ObjectId } = require('mongodb');

module.exports = class WorkspaceTree {
  constructor() {
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
      root.splice(index + 1, 0, value);
    }
  }

  // Add a Section to a childNode of a parent
  _findParentAndInsert(value, root, parent) {
    const index = root.findIndex((el) => {
      const splitObjId = String(el._id).split('"')[0];
      if (splitObjId === parent) {
        return splitObjId === parent;
      }
      if (el.childNode.length > 0) {
        this._findParentAndInsert(value, el.childNode, parent);
      }
    });

    if (index !== -1) {
      root[index].childNode.push(value);
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
