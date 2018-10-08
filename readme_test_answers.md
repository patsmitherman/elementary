
## Explain the differences between the variable j, if any, and list where these would exist in the DOM.

```javascript
var j = 0;  
```

>This creates a variable named "j" that is visible within it's scope.  for example, if this were in a module, 
>it wouldn't be reachable from outside of that module unless exposed via export. 


```javascript
j = 0;
```

>This creates a variable name "j" that will be attached to the window object.  This is generally discouraged, since it creates a global variable which could possibly overwrite something unintentionally.


```javascript
function j(j) {
    return j + j;
}
```

>This creates a function declaration named "j".  It will be visible to it's scope as well as it's parents scope, 
>since it will be moved to the top via hoisting.


```javascript
var j = function(b) {
    return b + 10;
}
```

>This creates a anonymous function expression.  In this case, the variable "j" will be hoisted, but not defined 
>until execution gets back to this line.  As a result, if "j" is called further up in the code, the function will 
>not be available.


```javascript
function(x) {
    let j = 10;
    return j * x;
}
```

>This code would be valid if it was passed into a function as a callback perhaps, but as it stands, it's likely to 
>throw a RTE since it's going to be expecting a function name.


```javascript
//Referenced by <script src="file.js" />
var j = 10;
```

>Honestly, I'm not sure what you're asking for here.  :)


## What ways could this function be executed?

```javascript
var a = function(b) {
    return b * 10;
}
```

>It could be called directly (ex. a(some_value);), using "apply", using "call", as a callback parameter of a function, 
>and probably other ways that I'm not thinking of at the moment. :)


## What does this function do?  How would you unit test this function?

```javascript
export default function c(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (func.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

>From the looks of it, this function expects zero or more functions.  If the funcs array length equals 0, then it returns 
>an identity function (a function that takes a single parameter and simply returns that same value).  If the array length
>equals 1, then it returns the single function that was passed in.  Otherwise, it uses the reduce function to sum up (or
>package) the functions that were passed in.  For instance, if [a => a + 5, a => a + 10] is passed in, then a function will
>be returned that will take a value which will be passed into each of the functions from the array.  If you passed 5 into
>this resulting higher order function, you would get back 20 as the returned value.
>
>In order to properly unit test this function, you would need to call it at least three times.  Once with no parameters,
>where you would then asert that you have been returned an identity function.  Once with a single simple addition function
>where you would then asert that you have been given back the same function you passed in.  And finally, you would call it
>with at least two functions as parameters (again probably simple addition functions).  You would then call the returned
>higher order function, passing in a value and aserting that it returns the expected result.