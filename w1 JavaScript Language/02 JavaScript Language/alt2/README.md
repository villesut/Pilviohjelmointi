
# JavaScript Language

This week introduces the two key data types in JS: objects and functions. Get used to their basic syntax and common use cases. This is an alternative to `alt1` exercises.

## Task List
1. Make a simple calculator.
2. Insert the needed functionality to the manipulating of cargo hold.
3. Get yourself familiar with the Module Pattern in Javascript and improve the List of People application. 

# 1 Calculator

The calculator has only ability to add and multiply numbers. It other aritmetic operations are added, you should consider also what kind of results you get from the operations. 

### TODO 1 Test Your Understanding
Open `calc.js` file. Improve the calculator with division and subtraction. Make sure that the page is usable without any instructions. The labels, buttons and texts should be enough to use it.

# 2  Cargo

The code has only templates for making new objects like bags, different stuff you can put in a bag, and a cargo hold where you can put bags. You have to implement the handling of cargo.

Remember we had Jasmine a behavior-driven development framework for testing JavaScript code in earlier courses (see [documentation](https://jasmine.github.io/2.1/introduction.html)).


### TODO 2 Test Your Understanding

Every stuff has a name and weight. You can add stuff in a bag and a bag has a maximum weight. In a cargo hold you can put bags, and also the cargo hold has a maximum weight.
You van add stuff only in a bag and bags only in a cargo.
You can't put too much stuff in a bag, or too many bags in a cargo hold (this means not more than max weight).

The boilerplate code in `docker.js` file has console.log statements for informing illegal situations, you can use this code for designing Jasmine tests for your code.
```
bag.add(stone);
console.log("laukun paino, pitäisi olla 3: " + bag.weight());
bag.add(stone); // virhe: "Stuff lisätty jo, ei onnistu!"
```
changes to 
```
describe("A spec using beforeAll", function() {
  var stone, bag; 
  beforeAll(function() {
    bag = new Bag(10);
    stone = new Stuff("stone", 3);
  });
it('laukun paino: pitäisi olla 3: ’, function(){
    expect((bag.add(stone)).weight()).toBe(3);
  });
```

# 3 List of People

The boilerplate code in `listofpersons.js` has a sketch for developing an application for people data management. The code is made according to module pattern. The only function call outside manager name area is init function.

### TODO 3 Test Your Understanding

Implement following functionalities
 
1.	The event listener for the button in the form (manager.gui.buttonPressed())
2.	Adding a person (manager.data.addPerson(person))
3.	Listing all the people (manager.data.list())

You must also consider the correct visibilities for the functions in the manager.data-module.
