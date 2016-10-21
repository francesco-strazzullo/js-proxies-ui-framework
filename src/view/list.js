import { h, diff } from 'virtual-dom';

export default (state) => {
    const onRemoveClick = (index) => {
        state.todos = [...state.todos.slice(0, index), ...state.todos.slice(index + 1)];
    };

    const createDeleteButton = (index) => h('button',{
        onclick:() => onRemoveClick(index)
    },['Delete']);

    const elements = state.todos.map((t,index) => {
        return h('li', {}, [t,createDeleteButton(index)]);
    });

    return h('ul', {}, elements);
};