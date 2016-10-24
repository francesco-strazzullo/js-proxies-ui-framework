import { h, diff } from 'virtual-dom';

/*

 <nav class="navbar navbar-default">
 <div class="container-fluid">
 <div class="navbar-header">
 <a href="#" class="navbar-brand">Brand</a>
 </div>
 <form class="navbar-form navbar-left">
 <div class="form-group">
 <input class="form-control" placeholder="Search">
 </div>
 <button type="submit" class="btn btn-default">Submit</button>
 </form>
 </div>
 </nav>
 */

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