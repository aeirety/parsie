// Imports

    // Community
    const Promise = require("promise");

/** Option class */

class Option {

    /**
     * Create an Option
     * @param {string} name - The name of the Option
     */

    constructor(name) {
        this.name = name;
    }

    /**
     * Set Option parameters
     * @param {Array<Parameter>} parameters - The Parameter Array
     * @return {Option} The Option
     */

    set parameters(parameters) {
        this.parameters = parameters; return this;
    }

    /**
     * Parses all Parameters
     * @param {Visitor} visitor - The Visitor
     * @return {Promise<(Option | Error)>} Promise containing the parsed Option
     */

    parse(visitor) {
        return new Promise((resolve, reject) => {
            let res = new Option(this.name); // The Option to be resolve if everything goes to plan

            let i = 0; // The Parameter index

            // Function loop
            (function next() {
                let parameter = this.parameters[i]; // The current parameter

                // Parse the Parameter
                parameter.parse(visitor).then(resolved => {
                    ret.parameters[parameter.name] = resolved; // Set one of the resolve Options's Parameter to the resolved value

                    i++;
                    if (i < this.parameters.length) next(); // Continue to the next Parameter
                    else resolve(res); // All the parameters have been parsed successfully. Resolve the resolve Option
                }).catch(error => {
                    reject(error); // Forward the error
                });
            })();
        });
    }

}