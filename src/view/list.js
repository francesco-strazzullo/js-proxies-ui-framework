import { h, diff } from 'virtual-dom';

export default (state) => {
    const onRemoveClick = (index) => {
        state.todos = [...state.todos.slice(0, index), ...state.todos.slice(index + 1)];
    };

    const createDeleteButton = (text,index) => h('button.list-group-item',{
        onclick:() => onRemoveClick(index)
    },[text + ' (click to delete)']);


    const elements = state.todos.map((t,index) => createDeleteButton(t,index));

    return h('div.container',{},[
        h('div.list-group',{},[
            elements
        ])
    ])

};