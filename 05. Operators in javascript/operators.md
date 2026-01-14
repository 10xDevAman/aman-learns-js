# Operators in JS

## What are the operators ?

- Operators are the symbols that perform operations on values and variables.

### Example :-

```javascript
2 + 3;      // + is an operator, 2 and 3 is an operands.
```

## Types of operators in JS

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operator
7. typeof Operator

## Arithmetic Operators

_Used for mathematical calculations._

- ' - ' is used for Subtraction.
- ' + ' is used for Addition.
- ' \* ' is used for Multiplication.
- ' / ' is used for Division.
- ' % ' is used for Remainder / Modulus
- ' \*\* ' is used for Exponentiation.
- ' ++ ' is used for Incerement.
- ' -- ' is used for Decrement.

## Assignment Operator

_Used to assign values to variables_
- =  is used for Assigment
- +=  is used for Add and Assign
- -=  is used for Subtract and Assign
- *=  is used for Multiply and Assign
- /=  is used for Divide and Assign
- %=  is used for Modulus and Assign
- **=  is used for Exponentiation and Assign

## Comparison Operators
_Used to compare two values and return a boolean (true or false)_

- ==  is used for Equal to
- !=  is used for Not Equal to
- ===  is used for Strictly Equal to it checks value and type as well
- !==  is used for Strictly Not Equal to, it checks value and type also.
- _>_ it checks Greater than
- _<_  it checks Less than
- _>=_ it checks Greater than or Equal to
- _<==_ it checks Less than or Equal to.


## Logical Operators

_Used to combine or manipulate boolean values_

- && is used for Logical AND
- || is used for Logical OR
- ! is used for Logical NOT


## Bitwise Operators

_Perform operations on the binary representation if numbers_

- & is used for Bitwise AND
- | is used for Bitwise OR
- ^ is used for Bitwise XOR
- ~ is used for BItwise NOT
- << is used for Left Shift operator
- _>>_ is used for Right Shift operator.

## Ternary ( Conditional ) Operator

_Condition ? Expression-1 (if true) : Expression-2 (if false)_

### Example :-
```javascript
    let age = 25;
    let status = (age > 18) ? "Adult" : "Minor";    // Status is "Adult"
```


## typeof Operator

_Used to determine the data type of a variable._

### Example :-

```javascript
        let myVariable = 123;
        console.log(typeof myVariable);     // "number"
```