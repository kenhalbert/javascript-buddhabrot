## Overview

Generates a buddhabrot image on an HTML5 canvas.  The mandlebrot set algorithm is parallelized using web workers to speed up generation.

This is still very much a work in progress, and some parts of the app are kind of messy.  Also, validation is missing for the fields in the control panel.  Nonetheless, it's mostly done.

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

Then, open index.html in a web browser.