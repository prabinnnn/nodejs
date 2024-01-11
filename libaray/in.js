//create ur own module
// write a function
//export that func out of file
//require that file in server file
const getHello = (name) => {
  console.log("helllo ${name}");
};
const getNamaste = (name) => {
  console.log("namaste ${name}");
};
const getHel = () => {
  console.log("hellll${name}");
};
module.exports = { getHello, getNamaste, getHel };
