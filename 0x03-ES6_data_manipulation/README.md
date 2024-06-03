# 0x03. ES6 data manipulation

### Map, Filter, and Reduce
These are higher-order functions that operate on arrays. Map applies a function to each element of an array and returns a new array with the results. Filter creates a new array with all elements that pass a test implemented by a provided function. Reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.

### TypedArrays
Typed Arrays in JavaScript are array-like objects and provide a mechanism for accessing raw binary data. They come in many forms, like Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, and so on. Each one of these represents a specific number type and provides a way to read and write that type of data in an ArrayBuffer.

### Maps
Maps in JavaScript are a type of key-value pair data structure introduced in ES6. They can store any type of value as both the key and the value, unlike objects which can only have strings or symbols as keys.
Some key features of Maps include:
Order: Unlike objects, Maps maintain the insertion order of elements. So when you iterate over the elements of a Map, they will be returned in the order they were added.
Size: You can easily get the number of entries in a Map using the size property.
Iteration: Maps have built-in methods for iteration, such as forEach and for...of loops.
Performance: Map operations like get, set, has, and delete are faster in Maps than in Objects, especially when dealing with large quantities of data.

### WeakMaps
WeakMaps in JavaScript are a type of collection, similar to Maps, but with some key differences. The main difference is that in a WeakMap, keys must be objects and they are held weakly. This means that if there are no other references to the object used as a key, they can be garbage collected. This makes WeakMaps particularly useful for managing memory in your applications.


## Tasks/Files


|    Tasks       |     Files                     |
|----------------|-------------------------------|
|0. Basic list of objects|``0-get_list_students.js``|
|1. More mapping|`1-get_list_student_ids.js`|
|2. Filter|`2-get_students_by_loc.js`|
|3. Reduce|`3-get_ids_sum.js`|
|4. Combine|`4-update_grade_by_city.js`|
|5. Typed Arrays|`5-typed_arrays.js`|
|6. Set data structure|`6-set.js`|
|7. More set data structure|`7-has_array_values.js`|
|8. Clean set|`8-clean_set.js`|
|9. Map data structure|``9-groceries_list.js``|
|10. More map data structure|``10-update_uniq_items.js``|


