import { h, diff } from 'virtual-dom';

export default (state) => {
    const onAddClick = () => {
        if(state.currentTodo){
            state.todos = [...state.todos,state.currentTodo];
            state.currentTodo = "";
        }
    };

    const onInputValueChange = (event) => {
        state.currentTodo = event.target.value;
    };

    const addButton = h('button',{
        onclick:onAddClick,
        disabled:!state.currentTodo
    },['Add Todo']);

    const input = h('input',{
        type:'text',
        value:state.currentTodo,
        oninput:onInputValueChange
    });

    return h('div',{},[
        input,
        addButton
    ]);
};