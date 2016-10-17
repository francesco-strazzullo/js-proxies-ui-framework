import { h, diff } from 'virtual-dom';

export const render = (state) => {

    const {left, top} = state;

    const STEP = 20;

    const onRightButton = () => {
        state.left += STEP;
    };

    const onLeftButton = () => {
        state.left -= STEP;
    };

    const onUpButton = () => {
        state.top -= STEP;
    };

    const onDownButton = () => {
        state.top += STEP;
    };

    const square = h('div',{
        style: {
            backgroundColor: 'red',
            width: '100px',
            height: '100px',
            position: 'fixed',
            left: left + 'px',
            top: top + 'px'
        }
    });

    const leftButton = h('button',{
        onclick:onLeftButton
    },['Left']);

    const rightButton = h('button',{
        onclick:onRightButton
    },['Right']);

    const upButton = h('button',{
        onclick:onUpButton
    },['Up']);

    const downButton = h('button',{
        onclick:onDownButton
    },['Down']);

    return h('div', {}, [
        leftButton,
        rightButton,
        upButton,
        downButton,
        square
    ]);
};

export const update = ({tree,state}) => {
    const newTree = render(state);
    const patches = diff(tree, newTree);

    return {
        tree:newTree,
        patches
    };
};