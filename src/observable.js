export default ({target,listener}) => {
    let observable;

    const set = (target,name,value) => {
        target[name] = value;
        listener(observable);
        return true;
    };

    const get = (target,name) => {
        return Object.freeze(target[name]);
    };

    const handler = {
        set,
        get
    };

    observable = new Proxy(target,handler);

    return observable;
};