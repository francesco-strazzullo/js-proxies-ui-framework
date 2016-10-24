import { patch, create, diff } from 'virtual-dom';
import { render, update } from './view';
import loggable from './loggable';
import observable from './observable';

const state = {
    todos:[],
    todoInputText:""
};

const updateDom = (state) => {
    const newTree = render(state);
    const patches = diff(tree, newTree);

    tree = newTree;
    rootNode = patch(rootNode, patches);
};

const viewState = observable({
    target:loggable(state),
    listener:updateDom
});

let tree = render(viewState);
let rootNode = create(tree);

document.body.appendChild(rootNode);