# UserReplay Client Capture Candidate Test

## Instructions

Please write a module, that exposes two methods in a pre-defined namespace within Global scope...

1. A method named watchForAddedElements that accepts a CSS selector and a callback as arguments.
watchForAddedElements( selector, callback );
1. A method named watchForRemovedElements that accepts a CSS selector and a callback as arguments.
watchForRemovedElements( selector, callback );
- Both methods will accept a CSS selector, in order to identify one or more elements on the page.
- The first method will fire the callback for each element, matching the CSS selector, when it is added to the DOM at any point during the lifecycle of the page.
- The second method will fire the callback for each element, that matches the CSS selector, when it is removed from the DOM at any point during the lifecycle of the page.
- Callbacks should be executed in the context of the matched DOM element.
- Both methods should be exposed into Global scope within the namespace urCapture.

For the purpose of this exercise, and to provide a fixture for testing, please use the attached HTML file for the page that your code will run on. The module should, however, be designed to run on any web page.

The HTML file is a very basic mock of how a web page may load search results from a stream and will automatically generate a random number of items (between 1 and 10) over a range of time upon load. On completion, the page will update to show successful completion.


## Criteria for Success
- [ ] The supplied HTML file has a number of calls to the expected, namespaced methods. 
- [ ] Each supplied callback should successfully print the desired output to the console each time the page is refreshed.
- [ ] Embed your minified code as an IIFE so it self initializes.
- [ ] All code is to be written to ES5 standards.
- [ ] No 3rd party libraries are to be used, other than tools for minification/build.
- [ ] Submit your solution to GitHub ensuring your full source code, and final HTML file with minified code, embedded as an IIFE, are included.