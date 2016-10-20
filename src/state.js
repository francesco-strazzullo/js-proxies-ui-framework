let state;

const loggingHandler = {
    get: function (target,name) {
        const value = target[name];
        console.log(`getting ${name}: ${value}`);
        return value;
    },
    set: function (target,name,value) {
        console.log(`setting ${name}: ${value}`);
        target[name] = value;
        return true;
    }
};

const INITIAL_STATE = {
    todos:['first','second'],
    currentTodo:""
};

export default new Proxy(INITIAL_STATE,loggingHandler);