const loggerHandler = {
    get: function (target,name) {
        const value = target[name];
        console.log(`getting ${name}: ${value}`);
        return value;
    }
};

let obj = {
    test:1
};

obj = new Proxy(obj,loggerHandler);

console.log(obj.test);