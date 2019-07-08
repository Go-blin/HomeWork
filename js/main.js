var confirmButton = document.getElementById("confirm");
confirmButton.addEventListener('click', saySmth);

function saySmth() {

var firstName = document.getElementById("firstName").value;
if (firstName.length < 5) {
    alert('Имя слишком короткое');
document.getElementById('firstName').value = ''; 
} 

  var lastName = document.getElementById('lastName').value;
  if (lastName.length < 5) {
    alert('Фамилия слишком короткая');
document.getElementById('lastName').value = ''; 
} 

var email = document.getElementById('email').value;
if (email.length < 5) {
    alert('email слишком короткий');
document.getElementById('email').value = ''; 
}

if (firstName.length > 5 && lastName.length > 5 && email.length > 5) {
alert('Успешно')
document.getElementById('firstName').value = ''; 
document.getElementById('lastName').value = ''; 
document.getElementById('email').value = '';   

var user = {
    FirstName: firstName,
    LastName: lastName,
    Email: email
};

console.log(user);
}
}