export default class Interface {
    constructor (name, methods) {
        this.name = name;
        this.methods = [];
        if (arguments.length !== 2) throw new Error(`Interface constructor called with ${arguments.length} arguments,
            expected exactly 2.
        `);


	    for (let method of methods) {
            if (typeof method !== 'string') {
                throw new Error('Interface constructor expects method names to be passed as a string');
            }

            this.methods.push(method);
        }
    }

    static ensureImplements (object) {
        if(arguments.length < 2) {
            throw new Error("Function Interface.ensureImplements called with " +
            arguments.length + "arguments, but expected at least 2.");
        }
    
        for(let i = 1, len = arguments.length; i < len; i++) {
            const interface = arguments[i];

            if (interface.constructor !== Interface) {
                throw new Error('Function Interface.ensureImplements expects arguments two and above to be instances of Interface.');
            }
    
            for(let j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
                const method = interface.methods[j];
                if(!object[method] || typeof object[method] !== 'function') {
                throw new Error(`Function Interface.ensureImplements:
                    object does not implement the ${interface.name} interface. Method ${method} was not found.`);
                }
            }
        }
    }
}