<h1 align="center">Variables</h1>

## Declaration Rules :

Cannot starts with a number.
Variable name can only starts with letter, underscore and 
Example :
```javascript
    - ❌  let 1age = 22;            // Error
    - ✅  let agte = 22;            // Correct
```

## JavaScript is Case Sensetive

```javascript
    let name = "10xDevAman";
    let Name = "10xDeveloper"

    console.log(name); // 10xDevAman
    console.log(Name); // 10xDeveloper
```

## We cannot use reserve keywords as identifier

for example:
```javascript
    ❌ let let = 10;
    ❌ let for = 10;

// let, for, if, while etc. THese are reserved words and already have special meaning in JS
```

# Best Practices

## ✅ Use camelCase
```javascript
    let firstName = "Aman";
```
### ✅ Use meaningful names 
```javascript
     ❌     let a = 22;
     ✅     let age = 22;
```
### ✅ Don't use `$` and `_` unnecessarily ( mostly used in *frameworks* and *libraries* )