import { h, diff } from 'virtual-dom';

export default (state) => {
    const onRemoveClick = (index) => {
        state.todos.splice(index,1);
        state.todos = [...state.todos];
    };

    const createDeleteButton = (index) => h('button',{
        onclick:() => onRemoveClick(index)
    },['Delete']);

    const elements = state.todos.map((t,index) => {
        return h('li', {}, [t,createDeleteButton(index)]);
    });

    return h('ul', {}, elements);
};