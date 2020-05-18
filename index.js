var a, b, c, d, text;
a = document.getElementById("fname").value;
b = document.getElementById("lname").value;
c = document.getElementById("email").value;
d = document.getElementById("password").value;

function myFunction() {
  if (a == "" && b == "" && c == "" && d == "") {
    a = "First Name cannot be empty";
    b = "Last Name cannot be empty";
    c = "Looks like this is not an email";
    d = "Password cannot be empty";
  }
  document.getElementById("f-error").innerHTML = a;
  document.getElementById("l-error").innerHTML = b;
  document.getElementById("e-error").innerHTML = c;
  document.getElementById("p-error").innerHTML = d;

  ['fname', 'lname', 'email', 'password'].forEach(function(id) {
    document.getElementById(id).style.background = "url('icon-error.svg') no-repeat 232px";
    document.getElementById(id).style.border = "2px solid hsl(0, 100%, 74%)";
    document.getElementById(id).placeholder = "";
    document.getElementById(id).style.width = "230px";
    document.getElementById(id).style.paddingLeft = "40px";
  });
  function mediaQuery(x){
    if (x.matches){
      document.getElementById("fname").style.width = "460px";
      document.getElementById("lname").style.width = "460px";
      document.getElementById("email").style.width = "460px";
      document.getElementById("password").style.width = "460px";
      document.getElementById("fname").style.margin = "0";
      document.getElementById("lname").style.margin = "0";
      document.getElementById("email").style.margin = "0";
      document.getElementById("password").style.margin = "0";
      document.getElementById("form").style.height = "465px";
      document.getElementById("fname").style.background = "url('icon-error.svg') no-repeat 470px";
      document.getElementById("lname").style.background = "url('icon-error.svg') no-repeat 470px";
      document.getElementById("email").style.background = "url('icon-error.svg') no-repeat 470px";
      document.getElementById("password").style.background = "url('icon-error.svg') no-repeat 470px";
    }
  }
  var x = window.matchMedia("(min-width:760px)");
  mediaQuery(x);
  x.addListener(mediaQuery);
}
