# JS Objekt

**Vervollständige den Code in `solution.js`**

## 1. isPlainObject
Schreibe eine Funktion namens 'isPlainObject', die prüft, ob ein Argument ein einfaches Objekt ist, kein Array oder null
### Erwartetes Ergebnis:
Wahr, wenn das Objekt einfach ist, sonst falsch.

`({ a: 1 }) => true`

`([1, 2, 3]) => false`
```javascript
const data = { a: 1 };
console.log(isPlainObject(data)); // true
```


## 2. makePairs
Schreibe eine Funktion namens 'makePairs', die ein verschachteltes Array wie [[Schlüssel, Wert]] zurückgibt
 
### Erwartetes Ergebnis:
`({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]`

```javascript
const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]
````

## 3. without
Schreibe eine Funktion namens 'without', die ein neues Objekt ohne die angegebenen Eigenschaften zurückgibt
 
### Erwartetes Ergebnis:
`({ a: 1, b: 2 }, 'b') => { a: 1 }`

```javascript
const data = { a: 1, b: 2 };
console.log(without(data, 'b')); // { a: 1 }
```

## 4. isEmpty
Schreibe eine Funktion namens 'isEmpty', die überprüft, ob ein Objekt leer ist.
### Erwartetes Ergebnis:
`({}) => true, ({ a: undefiniert }) => true`

`({ a: 1 }) => false`

```javascript
const data = { a: 1, b: undefiniert };
const data2 = { a:undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
```


## 5. isEqual
Schreibe eine Funktion namens 'isEqual', die einen oberflächlichen Vergleich zwischen zwei Objekten durchführt
   
### Erwartetes Ergebnis:
Wahr, wenn die Objekte identisch sind, falsch, wenn die Objekte unterschiedlich sind

`({ a: 1, b: 1 }, { a: 1, b: 1 }) => true`

```js
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
```


## 6. invoke
Schreibe eine Funktion namens 'invoke', die eine Array-Methode auf einem bestimmten Pfad aufruft
  
### Erwartetes Ergebnis:
`({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]`
  

``js
const data = { a: { b: [1, 2, 3] } }
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]
```

## 7. isEmptyDeep
Schreibe eine Funktion namens 'isEmptyDeep', die überprüft, ob ein Objekt leer ist
 
**Leere Werte:** '', null, NaN, undefiniert, [], {}
### Erwartetes Ergebnis:
`({}) => true`

`({ a: { b: undefiniert }) => true`

`({ a: { b: [] } }) => true`

``js
const data = { a: { b: undefiniert } };
console.log(isEmptyDeep(data)); //true
```


`## 8. isEqualDeep
Schreibe eine Funktion namens 'isEqualDeep', die einen tiefen Vergleich zwischen zwei Objekten durchführt

### Erwartetes Ergebnis:
True, wenn die Objekte gleich sind, false, wenn die Objekte unterschiedlich sind

`({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true`

```js
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2));// true
console.log(isEqualDeep(data, data3)); // false
  ```
## 9. Schnittpunkt
Schreibe eine Funktion namens "intersection", die flache Schnittpunkte von Objekten findet
    
### Erwartetes Ergebnis:
`({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }`

```js
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }
```


## 10. intersectionDeep
Schreibe eine Funktion namens 'intersectionDeep', die alle Schnittpunkte von Objekten findet
   
### Erwartetes Ergebnis:
`({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }`

```js
const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
```
