import { h, diff } from 'virtual-dom';

export default (state) => {
    const onAddClick = () => {
        if(state.todoInputText){
            state.todos = [...state.todos,state.todoInputText];
            state.todoInputText = "";
        }
    };

    const onInputValueChange = (event) => {
        state.todoInputText = event.target.value;
    };

    const addButton = h('button.btn.btn-default',{
        onclick:onAddClick,
        disabled:!state.todoInputText
    },['Add Todo']);

    const input = h('input.form-control',{
        placeholder:'Insert Todo Here...',
        type:'text',
        value:state.todoInputText,
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