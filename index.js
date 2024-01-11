// Write your solution in this file!

let employee = {
    name: 'Clay', streetAddress: 'West End',
    name: 'Carlos', streetAddress: 'Canada'
};


function updateEmployeeWithKeyAndValue(obj, key, value) {
    //: this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
    let newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    //: this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
    obj[key] = value;
    // console.log(obj);
    return obj;
}
// destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam');

function deleteFromEmployeeByKey(obj, key) {
    //: this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}


function destructivelyDeleteFromEmployeeByKey(obj, key) {
    //: this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
    delete obj[key];
    return obj;
}








































