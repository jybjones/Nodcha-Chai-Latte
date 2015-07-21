
module.exports = Animal;

function Animal (type) {
  this.isAlive = true;
  this.type = type;
};

Animal.prototype.beCute = function() {
  this.isCute = true;
};



/////Original////can't add prototypes to anonymous function
// module.exports = function(){
//   this.isAlive = true;
//   // this.isCute = false;
//   this.beCute = function() {
//     this.isCute = true;
//   };
// };

