let state;

const loggingHandler = {
    get: function (target,name) {
        const value = target[name];
        console.log(`getting ${name}: ${value}`);
        return value;
    },
    set: function (target,name,value) {
        console.log(`setting ${name}: ${value}`);
        return target[name] = value;
    }
};

const INITIAL_STATE = {
    left:200,
    top:0
};

export default new Proxy(INITIAL_STATE,loggingHandler);