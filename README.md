# kynpmtest
A Node.js module that contains some util functions
## Installation 
```sh
npm install kynpmtest --save
yarn add kynpmtest
bower install pluralize --save
```
## Usage
### Javascript
```javascript
var util = require('kynpmtest');
var isarray = util.isArray('Boy');
```
```sh
Output should be 'false'
```
### TypeScript
```typescript
import { isArray } from 'kynpmtest';
console.log(isArray('Goose'))
```
```sh
Output should be 'false'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('kynpmtest');
});
```
## Test 
```sh
npm run test
```