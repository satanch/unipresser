# unipresser

**WARNING! Development in progress**

This library allows you to get mouse position, move mouse and perform mouse clicks from your Node.js script.

* Python is not required!
* Java is not required!
* External software is not required!

Everything is working in native way, with C++ Node.js native addons.

## Current status

This library in development status, so don't use it for production purposes.

### OS implementations

| OS | Status |
| --- | --- |
| win32 | [Implemented](https://github.com/satanch/unipresser-win32) |
| darwin | Not implemented |
| linux | Not implemented |

## Installation

This library will automatically download required native addon for your specs.

## Installation

Use `npm install unipresser` command.

## Usage

```js
    const unipresser = require('unipresser');
    console.log(unipresser.getMouseCursor());
```

## Available methods

Every method is sync, without callback or promise.

### getMouseCursor

Returns an array with current mouse coordinates.

```js
unipresser.getMouseCursor();
```

### setMouseCursor

Moves mouse cursor to specified position.

```js
unipresser.setMouseCursor(x, y);
```

### emitMouseClick

Clicks with a specified button at the current mouse position.

```js
unipresser.emitMouseClick('left');
unipresser.emitMouseClick('right');
```

### getScreenResolution

Returns an array with a primary screen resolution.

```js
unipresser.getScreenResolution();
```

### emitKeyPress

Presses a key with a given key name or character.

```js
unipresser.emitKeyPress('enter').toLowerCase(); // of course, toLowerCase is optional, but key names should be in lower case
```
