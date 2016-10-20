import { h, diff } from 'virtual-dom';

export const render = (state) => {

    const {todos} = state;

    const onAddClick = () => {
        state.todos = [...state.todos,state.currentTodo];
        state.currentTodo = "";
    };

    const onInputValueChange = (event) => {
        state.currentTodo = event.target.value;
    };

    const addButton = h('button',{
        onclick:onAddClick
    },['Add Todo']);

    const input = h('input',{
        type:'text',
        value:state.currentTodo,
        oninput:onInputValueChange
    });

    const form = h('div',{},[
        input,
        addButton
    ]);

    const elements = todos.map((t) => {
        return h('li', {}, t);
    });

    const list = h('ul', {}, elements);

    return h('div', {
        style: {
            width: '100%',
            height: '100%'
        }
    }, [form,list]);
};

export const update = ({tree,state}) => {
    const newTree = render(state);
    const patches = diff(tree, newTree);

    return {
        tree:newTree,
        patches
    };
};