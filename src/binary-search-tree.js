const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

	constructor() {
		this._root = null;
	}

	root() {
		return this._root;
	}

	add(data) {
		let newN = new Node(data);

		if (!this._root) {
			this._root = newN;
			return;
		}

		let actNode = this._root;

		while (actNode) {
			if (data < actNode.data) {
				if (!actNode.left) {
					actNode.left = newN;
					return;
				}
				actNode = actNode.left;
			} else {
				if (!actNode.right) {
					actNode.right = newN;
					return;
				}
				actNode = actNode.right;
			}
		}
	}

	has(data) {
		if (this.find(data)) {
			return true
		} else {
			return false
		}

	}

	find(data) {
		let actNode = this._root;

		while (actNode) {
			if (data === actNode.data) {
				return actNode;
			} else if (data < actNode.data) {
				actNode = actNode.left;
			} else {
				actNode = actNode.right;
			}
		}

		return null;
	}

	remove(data) {

		let deleteNode = (el, data) => {

			if (data === el.data) {
				if (!el.left && !el.right) {
					return null;
				}
				if (!el.left) {
					return el.right;
				}
				if (!el.right) {
					return el.left;
				}

				let tempNode = el.right;
				while (tempNode.left) {
					tempNode = tempNode.left;
				}

				el.data = tempNode.data;
				el.right = deleteNode(el.right, tempNode.data);
				return el;
			} else if (data < el.data) {
				el.left = deleteNode(el.left, data);
				return el;
			} else {
				el.right = deleteNode(el.right, data);
				return el;
			}

		};

		this._root = deleteNode(this._root, data);
	}

	min() {
		let actNode = this._root;

		while (actNode && actNode.left) {
			actNode = actNode.left;
		}

		if (actNode) {
			return actNode.data
		} else {
			return null
		}

	}

	max() {
		let actNode = this._root;

		while (actNode && actNode.right) {
			actNode = actNode.right;
		}

		if (actNode) {
			return actNode.data
		} else {
			return null
		}

	}

}

module.exports = {
	BinarySearchTree
};