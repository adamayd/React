# Learn React.js: The Basics by Eve Porcello

This course is featured on Lynda.com.  This is my personal repo of the cumulative and completed exercise files.  Things I found out the hard way so you don't have to.  

* Since React 16 deprecates React.createClass you must use React 15 or older.  For a basics course, it's still great.
* Since Babel 6 will not run as an in browser transpiler, you must use Babel 5.8 or older.
* Use ```https``` not ```http``` when loading baconipsum api or you'll get a CORS error.

Generally I've found this course to be a nice on ramp to more in depth courses on React.

## Notes on Completion of course

The course moves at a fast past and you cover a lot of ground in under 2 hours.  The most unfortunate part is that Chapter 6 has become outdated because **create-react-app** now uses React 16.  Using the following items I was able to get the app to compile successfully, but the render keeps failing.  I will revisit this app at later times and debug more as I become more proficient in React 16.

### Conversion to React 16

* Include ```import React, { Component } from 'react'```
* Change ```createClass```'s to ```class YOURCLASS extends Component```
* Remove commas from functions
* ```propTypes``` doesn't work.  I commented it out for the time being.


