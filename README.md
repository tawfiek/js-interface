# js-interface

This package adding capability to Javascript to mimic an interface functionality like the in strongly typed languages.

## Example

``` javascript
    import Interface from "oop-interface";

    // Define the interfaces and the method should be implemented
    const Move = new Interface('Move', ['moveForward', 'moveBackward']);
    const Turn = new Interface('Turn', ['turnRight', 'turnLeft']);

    class Car {
        constructor (model, type) {
            // Here we manually ensure that 'this' instant of the class
            // Implements the Moe and Turn Interfaces since javascript
            // dose not have implements key words
            Interface.ensureImplements (this, Move, Turn);

            console.log(`MODEL: ${model}, TYPE: ${type}`);
        }

        moveForward () {
            console.log('FORWARD ..');
        }

        moveBackward () {
            console.log('BACKWARD ..');
        }

        turnRight () {
            console.log('RIGHT ..');
        }

        turnLeft () {
            console.log('LEFT ..');
        }
    }

    // If the Car dose miss any functionality should be in the interfaces
    // This code should throw an error.
    const myNewCar = new Car ('2001', 'Sedan');
```