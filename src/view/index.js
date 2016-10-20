import { h, diff } from 'virtual-dom';

import form from './form';
import list from './list';

export const render = (state) => {
    return h('div', {
        style: {
            width: '100%',
            height: '100%'
        }
    }, [form(state),list(state)]);
};

export const update = ({tree,state}) => {
    const newTree = render(state);
    const patches = diff(tree, newTree);

    return {
        tree:newTree,
        patches
    };
};