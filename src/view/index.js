import { h, diff } from 'virtual-dom';

import form from './form';
import list from './list';

export const render = (state) => {
    return h('div', {}, [form(state),list(state)]);
};

export const update = ({tree,state}) => {
    const newTree = render(state);
    const patches = diff(tree, newTree);

    return {
        tree:newTree,
        patches
    };
};