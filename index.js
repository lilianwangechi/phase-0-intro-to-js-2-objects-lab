// Write your solution in this file!
const employee = {
  name : "Lilian",
  streetAdress : "Nanyuki"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
  const newObject = {...employee};
  newObject[key]=value;
  return newObject;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
 employee[key]=value;
  return employee;
}
function  deleteFromEmployeeByKey(employee, key){
 const newObj = {...employee};

  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key]
  return employee;
}