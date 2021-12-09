/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  for (let i = 0; i < data.length ; i++){
    if(data[i].classes.length){
      for(let j = 0; j < data[i].classes.length ; j++){
        if(!data[i].classes[j].class_name){
          delete data[i].classes[j].class_name;
        }
      }
    }
    if(!data[i].session_name){
      delete data[i].session_name;
    }
  }

  return data;
}

console.log(result(data));
