function factory(lib, list) {
    const result = [];

    for (let order of list) {
        const object = {};
        const template = order.template;

        for (let prop in order.template) {
            object[prop] = order.template[prop];
        }

        const parts = order.parts;

        for (let part of parts) {
            object[part] = lib[part];
        }

        result.push(object)
    }
    return result;
} 