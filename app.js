/*var Question = (function(){
    
    var x = ' ,are u a student?';
    
    var question = function(a){
        return ''+a + x;
    }
    return{
        askingQuestion:function(name){
            console.log(question(name));
        }
    }
})();
*/

//var myController = (function(Ctrl){
//    var budged = Ctrl.anotherPublic(-10);
//    return{
//        myBudget:function(){
//            return budged;
//        }
//    }
//})(controller);

//BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id,desription,value){
        this.id = id;
        this.description = desription;
        this.value = value;
    };
    
    var Income = function(id,desription,value){
        this.id = id;
        this.description = desription;
        this.value = value;
    };
    
    var data = {
        allItems : {
            exp: [],
            inc: []
        },
        totals:{
            exp:0,
            inc:0
        }
        
    }
    
})();


//UI CONTROLLER
var UIController = (function(){
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    
    return{
      getInput:function(){
          return {
           type: document.querySelector(DOMStrings.inputType).value,// will be either inc or exp
           desription: document.querySelector(DOMStrings.inputDescription).value,
           value: document.querySelector(DOMStrings.inputValue).value
          };
          
      },
      getDOMStrings: function(){
          return DOMStrings;
      }
    };
    
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){
    
    
    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };
    
    var ctrlAddItem = function(){
         // 1.Get the field input data
        
        var input = UICtrl.getInput();
        console.log(input);
        
        // 2.Add the item to the budget controller
        
        // 3.Add the item to the UI 
        
        // 4.Calculate the budget 
        
        // 5. Display the budget on the UI 
   
    };
    
    return{
        init:function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };
    
})(budgetController,UIController);

controller.init(); 



















