# JavaScriptBuddhabrot

Renders a buddhabrot image on an HTML5 canvas.  Go ahead and [give it a try here on github!](https://kenhalbert.github.io/javascript-buddhabrot/)

The Mandlebrot set algorithm is [parallelized using web workers](http://kenhalbert.com/posts/parallelization-with-web-workers) to speed up generation.

With the default settings, you should let the renderer run for ten to fifteen minutes to get a high-quality image.

## Prerequisites

You need to have webpack installed to build this web app.  To install it, run this command:

```	
npm install webpack -g
```

## Setup

To build the project, run the following commands in the root directory:

```
npm install

webpack
```

Then, open index.html in a web browser or run webpack-dev-server and navigate to localhost:8080.
