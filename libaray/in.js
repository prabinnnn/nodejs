//create ur own module
// write a function
//export that func out of file
//require that file in server file
const gethello = () => {
  console.log("hello from libaray");
};
const getnamaste = (name) => {
  console.log("namaste $(name)");
};
module.exports = { gethello, getnamaste };
