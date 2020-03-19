////////////////////
// Module to take care of the budget function
////////////////////

// IIFE function - immediately invoked due to () on line 15
// Inner functions can access vars and functions of outer functions due to CLOSURES even after outer function has returned

var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
    
})(); 


////////////////////
// Module to take care of UI
////////////////////

var UIController = (function() {
    
    var DOMstrings = {
        // Storing all strings and retrieve and change if needed
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Reads value of the type. Either inc or exp v(+ or -)
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();


/////////////////////
// Global App controller - Tell the other modules what to do
/////////////////////

var controller = (function(budgetCtrl, UICtrl) { // Can pass args into function
    
    // Place all event listeners
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        // Happens on the whole document, not a particular var
        // keypress - any button pressed
        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    
    
    
    // Called when we want to add a new item
    var ctrlAddItem = function() {
        
        // 1. Get the field input data
        var input = UICtrl.getInput();
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
    };
    
    return {
        init: function() {
            console.log('App started');
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);

// Needed to invoke event listeners
controller.init();






















