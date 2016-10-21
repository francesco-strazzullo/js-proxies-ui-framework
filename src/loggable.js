export default (target) => {
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

    return new Proxy(target,loggingHandler);
};