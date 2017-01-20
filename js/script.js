function sayHello() {
  var input = document.getElementById("name");
  var greeting = document.getElementById("greeting");
  greeting.innerHTML = "<h2>Hello " + input.value + "</h2>";

  var heading = document.querySelector("h1");
  if(input.value === 'Hristo') {
    heading.textContent = "Ssssshhh. The boss is here!";
  }
}
