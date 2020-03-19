var budgetController = (function() {
    
    var x = 23
    
    var add = function(a) {
        return x + a; // Var and function cannot be accessed from the outside
    }
    
    return {
        publicTest: function(b) {
            return add(b);
        }        
    }
    
})(); // IIFE function - immediately invoked due to () on line 15
// Inner functions can access vars and functions of outer functions due to CLOSURES even after outer function has returned



////////////////////
// Module to take care of UI
////////////////////

var UIController = (function() {
    
    // Some code
    
})();



/////////////////////
// App controller
/////////////////////

var controller = (function(budgetCtrl, UICtrl) { // Can pass args into function
    
    var z = budgetCtrl.publicTest(5);
    
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
    
})(budgetController, UIController);






















