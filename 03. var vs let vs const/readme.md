# var

- var keyword introduced in early JavaScript and it is used to declare variables.
- Function-scoped ( means it only exists inside function block and block ignores the `{ }` ).
- Allows re-declaration ( same variable name cannot be created again ).
- Allows re-assignment ( means we can change value of the variable ).

## Example :-
```javascript
    var firstname = Aman;
    var firstName = Shah; // While re-assigning there is no error in js.
    console.log(name);  // Shah
```
---

# let

- let keyword introduced in ES6 (ECMAScript) 2015.
- Block-scoped (it works inside the block {} also either its a simple block or functioned block.)
- ❌ Cannot re-declare in same scope.
- ✅ Can re-assign value.

## Example :-

```javascript
    let age = 22;
    age = 23;   // allowed
    console.log(age);   // 23


    let age = 25; // ❌ Error in same scope
```


---
# const

- const keyword is also blocked-scope ( like let keyword)
- ❌ Cannot re-declare.
- ❌ Cannot re-assigned ( once the value set, it's fixed).

## Example :-

``` javascript
    const pi = 3.14;

    pi = 3.14159 ❌ Error
```


# Summary

- var is function-scoped and allows re-declaration, which can cause bug.
- let is block-scoped and allows re-assigment nut not re-declaration or re-assignment.
---

Best practice :  **use const by default and let when you know the value will change.**