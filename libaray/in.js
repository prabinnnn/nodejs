//create ur own module
// write a function
//export that func out of file
//require that file in server file
const getHello = () => {
  console.log("hello from libaray");
};
const getNamaste = (name) => {
  console.log("namaste ${name}");
};
const getHel = () => {
  console.log("hellll");
};
module.exports = { getHello, getNamaste, getHel };
