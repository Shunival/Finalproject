var coll = document.getElementsByClassName("loadMoreBtn");

for (let i = 0; i <= coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function signup(e) { 
  e.preventDefault(); 
  var username = document.getElementById("username").value; 
  var email = document.getElementById("email").value; 
  var password = document.getElementById("password").value;
  
  var user = {
    username,
    email,
    password,
  };  

  // Convert user object to JSON string
  var json = JSON.stringify(user); 
  
  // Store user data in localStorage with email as the key
  localStorage.setItem(email, json); 

  alert("Đăng ký thành công"); 
  window.location.href = "index.html";

}

function login(e) {
  e.preventDefault(); 
  var email = document.getElementById("email1").value; 
  var password = document.getElementById("password1").value;
  
  // Retrieve user data from localStorage
  var storedUserData = localStorage.getItem(email);
  
  if (storedUserData) {
    var userData = JSON.parse(storedUserData);
    if (userData.password === password) {
      alert("Đăng nhập thành công");
      window.location.href = "index.html";
    } else {
      alert("Sai mật khẩu");
    }
  } else {
    alert("Email không tồn tại");
  }
}