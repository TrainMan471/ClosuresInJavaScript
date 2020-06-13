

function executeCallback( callback ) {
    callback();
}

executeCallback(function () {
  console.log('Hello');
});

executeCallback(function () {
  console.log('Goodbye');
})

 /* An anonymous function is a function without a name.

function ( ) {
  //Do something
}

*/
