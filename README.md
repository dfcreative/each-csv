```
npm install each-csv
```

```js
eachCSV('a,b(2,3),c', function(value){
	console.log(value)
});

//> 'a', 'b(2,3)', 'c'
```
