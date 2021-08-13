import Interface from ".";

const Move = new Interface('Move', ['moveForward', 'moveBackward']);
const Turn = new Interface('Turn', ['turnRight', 'turnLeft']);
class Car {
    constructor (model, type) {
        Interface.implements (this, Move, Turn);

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

const myNewCar = new Car ('2001', 'Sedan');
