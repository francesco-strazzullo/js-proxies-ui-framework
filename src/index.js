import { patch, create, diff } from 'virtual-dom';
import { render } from './view';
import loggable from './loggable';
import observable from './observable';

const updateDom = (state) => {
    const newTree = render(state);
    const patches = diff(tree, newTree);

    tree = newTree;
    rootNode = patch(rootNode, patches);
};

const INITIAL_STATE = {
    todos:[],
    todoInputText:""
};

const state = observable({
    target:loggable(INITIAL_STATE),
    listener:updateDom
});

let tree = render(state);
let rootNode = create(tree);

document.body.appendChild(rootNode);