login();
function login(){let secret = prompt("What is the secret password?");

while(secret !=="Hello") {

  secret = prompt("That's not it! Try again");
}

document.write("You know the secret password. Welcome.");
}
setTimeout(function(){ alert("Hurry"); }, 15000);
function printMousePos(e) {
  let cursorX = e.pageX;
  let cursorY = e.pageY;
  alert("x: " + cursorX + ", y: " + cursorY);
}
function mouseOver() {
  console.log("touch");
}
window.onload = function() {
  inactivityTime();
};

let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function logout() {
   login();
  }

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 10000)
  }
};

document.addEventListener("click", printMousePos);
