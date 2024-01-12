const myage = (age = 12) => {
  if (age > 18) {
    console.log("qualified");
  } else {
    console.log("no qulaified");
  }
};
module.exports = { myage };
