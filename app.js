////////////////////
// Module to take care of the budget function
////////////////////

var budgetController = (function() {
    
    // Some code
    
})(); // IIFE function - immediately invoked due to () on line 15
// Inner functions can access vars and functions of outer functions due to CLOSURES even after outer function has returned


////////////////////
// Module to take care of UI
////////////////////

var UIController = (function() {
    
    // Some code
    
})();


/////////////////////
// Global App controller
/////////////////////

var controller = (function(budgetCtrl, UICtrl) { // Can pass args into function
    
    var ctrlAddItem = function() {
        
         // 1. Get the field input data
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        console.log('YES');
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    // Happens on the whole document, not a particular var
    // keypress - any button pressed
    document.addEventListener('keypress', function(event) {
             
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        
    });
    
})(budgetController, UIController);






















