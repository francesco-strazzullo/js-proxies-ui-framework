import { patch, create } from 'virtual-dom';
import { render, update } from './view';
import state from './state';

const domHandler = {
    set: function (target,name,value) {
        const toReturn = target[name] = value;
        updateDom(viewState);
        return toReturn;
    }
};

let viewState = new Proxy(state,domHandler);
let tree = render(viewState);
let rootNode = create(tree);

const updateDom = (state) => {
    const renderData = update({
        tree,
        state
    });

    tree = renderData.tree;
    rootNode = patch(rootNode, renderData.patches);
};

document.body.appendChild(rootNode);