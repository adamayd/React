# Learn React.js: The Basics by Eve Porcello

This course is featured on Lynda.com.  This is my personal repo of the cumulative and completed exercise files.  Things I found out the hard way so you don't have to.  

* Since React 16 deprecates React.createClass you must use React 15 or older.  For a basics course, it's still great.
* Since Babel 6 will not run as an in browser transpiler, you must use Babel 5.8 or older.
* Use ```https``` not ```http``` when loading baconipsum api or you'll get a CORS error.

Generally I've found this course to be a nice on ramp to more in depth courses on React.

## Notes on Completion of course

The course moves at a fast past and you cover a lot of ground in under 2 hours.  The most unfortunate part is that Chapter 6 has become outdated if you use **create-react-app** without a version as the default now uses React 16.  Using the following items I was able to get the app to compile successfully and render but some of the funcionality is still wonky.  I will revisit this app at later times and debug more as I become more proficient in React.

### Conversion to React 16/ES6

* Include ```import React, { Component, PropTypes } from 'react'```
* Change ```createClass```'s to ```class YOURCLASS extends Component``` or ```React.Component``` if you just used ```React``` in your import statement
* Remove commas from ends of functions
* ```propTypes``` must be updated to ES6 to work properly
* Add a constructor(props)
* I tried unsuccessfully to bind my functions in constructor, but still received property undefined errors so I used arrow functions instead.  It worked, but I still don't know why binding didn't work.

From here on out I am just going to update progress in the README.md but I will use github's issue tracker as I find them until the application is working correctly again.