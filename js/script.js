function Hristo() {
  this.hair = "dark";
  this.eyes = "green";
}

Hristo.prototype.smile =
  function() {
    console.log(":)");
  };

var hristo = new Hristo();
console.log(hristo.eyes);
hristo.smile();
console.log(hristo);
