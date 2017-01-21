function sayHello() {
  var input = document.getElementById("name");
  var greeting = document.getElementById("greeting");
  greeting.innerHTML = "<h2>Hello " + input.value + "</h2>";

  var heading = document.querySelector("h1");

  console.log(this);
  this.textContent = "I said it :)";
}

document.querySelector("button").addEventListener("click", sayHello);
