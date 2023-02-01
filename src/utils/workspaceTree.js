module.exports = class WorkspaceTree {
  constructor() {
    this.root = [];
  }

  // Find the top node and add a section to down of the node
  _findTopNodeAndInsert(value, root, topNode) {
    const index = root.findIndex((el) => {
      if (el._id === topNode) {
        return el._id === topNode;
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
      if (el._id === parent) {
        return el._id === parent;
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
      if (el._id === id) {
        return el._id === id;
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
      if (el._id === id) {
        return el._id === id;
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
      if (el._id === id) {
        if (el.childNode.length > 0) {
          childNodes = el.childNode;
        }
        return el._id === id;
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
