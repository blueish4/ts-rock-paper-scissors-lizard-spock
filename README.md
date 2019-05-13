# RPSLS (Rock Paper Scissors Lizard Spock)

A fun little implementation of this simple game using TypeScript.
The main game logic can be imported for any other game client type, but a simple
browser-based client is also provided.

## Building

Building the browser version is done using `browserify browser.ts -p [ tsify --no-implicit-any ] > bundle.js`.

If just the modules are required, `tsc` should suffice.