const pwdInput = document.querySelector("#pwd");
const checkbox = document.querySelector("#showorhide");
checkbox.addEventListener("click", () => {
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
  } else if (pwdInput.type === "text") {
    pwdInput.type = "password";
  }
});

function myfunction() {
    let pwd = document.getElementById("pwd").value;
    let message = document.getElementById("alert").innerHTML;
    let username = document.getElementById("username").value;
    message = pwd;
    let userMessage = `Your username and password "${message}" was sent to Ibrahim`;
    document.getElementById("alert").innerHTML = userMessage;
    alert(`${username} was hacked`);
}

// const button = document.querySelector("login");
// button.addEventListener("click", () =>{
//     let userMessage = `Your username and password "${message}" was sent to Ibrahim`;
//     document.getElementById("alert").innerHTML = userMessage;
// });