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

    const addButton = h('button.btn.btn-default',{
        onclick:onAddClick,
        disabled:!state.currentTodo
    },['Add Todo']);

    const input = h('input.form-control',{
        placeholder:'Insert Todo Here...',
        type:'text',
        value:state.currentTodo,
        oninput:onInputValueChange
    });

    return h('nav.navbar.navbar-default',{},[
        h('div.container-fuild',{},[
            h('div.navbar-header',{},[
                h('a.navbar-brand',{},['Ego.js'])
            ]),
            h('form.navbar-form.navbar-left',{},[
                h('div.form-group',{},[
                    input
                ]),
                addButton
            ])
        ])
    ]);
};