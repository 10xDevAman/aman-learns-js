# Data Types ( Primitive & Reference )

## Primitive Types
- Number
- String
- BigInt
- Null
- Symbol
- Boolean
- Undefined

*Shortcut to Learn primitive datatypes : `NSB - NSB - U`"*

## Number

- Number stores integers & decimals ( in JavaScript there is no separate int/float in datatype ).
- Uses 64-bit ( 8 bytes ) IEEE 754 double precision floating point.
- Range = -(2^53 -1) to +(2^53 -1).

### Example :-
```javascript
        let score = 99.5  //it's type is Number;
```

## String

- Sequence of UTF-16 characters.
- Each character = 2 bytes.

### Example :-
```javascript
    10xdevaman = 10 characters x 2 bytes = 20 bytes.
```

## BigInt

- For integers larger than 2^53 - 1.
- Stored as arbitrary-length integers( *length can be anything* ).

### Example:-
```javascript
    let big = 12345678901234567890n;
```

## Null
- Represents "*intentional absence of value.*" <!-- If we want no values in variable then we assign it as null -->
- Fun fact: typeof null === "object" ( historical bug in JS ).

## Symbol

- Unique & immutable identifier.
- Size not fixed; optimized internally

## Boolean

- Can be true or false.
- Stored as 1 bit internally, but usually allocated in 1 byte for convenience.

## Undefined

- A variable is declared but not assigned.
- Represents "no value assigned."


---
*Note: Difference between **Null** and **Undefined** is that in case of **`null`** we explicitly say that we doesnot want any value and in case we forgot to initialised value into variable then in that case it would be **`undefined`**.*

## Object

- Stores data as key-value pairs.
- Stored in heap memory, and variables keep a reference ( pointer ).

### Example :-
```javascript
    let person = { name : "Aman" , age : 25 };
```
*Note : When the keys are static and we know already that which keys we want then We use . to access properties of object*

*Note : And if we didnot know the keys and the key is dynamic then we use string name inside square brackets*

## Array

- Technically objects with numeric keys.
- Stored in heap, variable stores reference.

### Example :-
```javascript
    let data = [1 , "Aman" , true];
```

## Function

- First-class objects in JS.
- Stored in heap, reference stored in variable.


## Difference : Stack vs Heap

- Primitive types --> stored in stack memory (fast, small values).
- Reference types --> actual data stored in heap memory, variable only stores a reference (address) in the stack.

## Difference : Stack vs Heap

| Stack  Memory               | Heap Memory                                             |
|-----------------------|---------------------------------------------------|
| const obj = "address" | "address" = {                                     |
|                       |"name": "Aman",                   |
|                       |"age" : 25,                       |
|                       |              }                                    |
