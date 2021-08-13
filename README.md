# js-interface

This package adding capability to Javascript to mimic an interface functionality like the in strongly typed languages.

## Example

``` javascript
    // Can be used using first class function.

    // Define the interfaces and the method should be implements
    const Move = new Interface('Move', ['moveForward', 'moveBack']);
    const Turn = new Interface('Turn', ['turnRight', 'turnLeft' ]);


    const Car = function (model, type) {
        Interface.insureImpalement(this, Move, Turn);
        ...
    }


```