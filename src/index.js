import { patch, create } from 'virtual-dom';
import { render, update } from './view';
import loggable from './loggable';
import observable from './observable';

const state = {
    todos:[],
    todoInputText:""
};

const updateDom = (state) => {
    const renderData = update({
        tree,
        state
    });

    tree = renderData.tree;
    rootNode = patch(rootNode, renderData.patches);
};

const viewState = observable({
    target:loggable(state),
    listener:updateDom
});

let tree = render(viewState);
let rootNode = create(tree);

document.body.appendChild(rootNode);