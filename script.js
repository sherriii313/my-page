// Toggle Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Switch Tabs (SignIn / SignUp)
const signinTab = document.getElementById("signinTab");
const signupTab = document.getElementById("signupTab");
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

signinTab?.addEventListener("click", () => {
  signinForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  signinTab.classList.add("bg-white", "text-indigo-700");
  signupTab.classList.remove("bg-white", "text-indigo-700");
  signupTab.classList.add("text-gray-600");
});

signupTab?.addEventListener("click", () => {
  signupForm.classList.remove("hidden");
  signinForm.classList.add("hidden");
  signupTab.classList.add("bg-white", "text-indigo-700");
  signinTab.classList.remove("bg-white", "text-indigo-700");
  signinTab.classList.add("text-gray-600");
});

// Form Validation (basic)
document.getElementById("signinForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value.trim();
  let valid = true;

  if (!email.includes("@")) {
    document.getElementById("signinEmailError").textContent = "Invalid email";
    document.getElementById("signinEmailError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signinEmailError").classList.add("hidden");
  }

  if (password.length < 6) {
    document.getElementById("signinPasswordError").textContent = "Password must be at least 6 characters";
    document.getElementById("signinPasswordError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signinPasswordError").classList.add("hidden");
  }

  if (valid) alert("Sign In Successful!");
});

document.getElementById("signupForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirm = document.getElementById("signupConfirm").value.trim();
  let valid = true;

  if (name.length < 3) {
    document.getElementById("signupNameError").textContent = "Enter valid name";
    document.getElementById("signupNameError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signupNameError").classList.add("hidden");
  }

  if (!email.includes("@")) {
    document.getElementById("signupEmailError").textContent = "Invalid email";
    document.getElementById("signupEmailError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signupEmailError").classList.add("hidden");
  }

  if (password.length < 6) {
    document.getElementById("signupPasswordError").textContent = "Password too short";
    document.getElementById("signupPasswordError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signupPasswordError").classList.add("hidden");
  }

  if (password !== confirm) {
    document.getElementById("signupConfirmError").textContent = "Passwords do not match";
    document.getElementById("signupConfirmError").classList.remove("hidden");
    valid = false;
  } else {
    document.getElementById("signupConfirmError").classList.add("hidden");
  }

  if (valid) alert("Account Created Successfully!");
});

// Copy Protection
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Copy disabled!");
});
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && ["u","U","s","S","c","C"].includes(e.key)) {
    e.preventDefault();
    alert("This action is disabled!");
  }
  if (e.key === "F12") {
    e.preventDefault();
    alert("Developer tools disabled!");
  }
});
var _0x1a=["hidden","classList","remove","add","bg-white","text-indigo-700","text-gray-600","signinForm","signupForm","signinTab","signupTab","menuBtn","mobileMenu","contextmenu","preventDefault","alert","keydown","F12","ctrlKey","u","U","s","S","c","C","includes","value","trim","length","textContent","Invalid email","hidden","Password must be at least 6 characters","Invalid email","Enter valid name","Password too short","Passwords do not match","Sign In Successful!","Account Created Successfully!","Copy disabled!","This action is disabled!","Developer tools disabled!"];(function(i){return _0x1a[i];});
function _0x(i){return _0x1a[i];}
(function(){try{var a=document.getElementById(_0x(11)),b=document.getElementById(_0x(12));a&&a.addEventListener("click",function(){b.classList.toggle(_0x(0))});var sT=document.getElementById(_0x(9)),sP=document.getElementById(_0x(10)),sF=document.getElementById(_0x(7)),uF=document.getElementById(_0x(8));sT&&sT.addEventListener("click",function(){sF.classList.remove(_0x(0));uF.classList.add(_0x(0));sT.classList.add(_0x(4));sT.classList.add(_0x(5));sP.classList.remove(_0x(4));sP.classList.remove(_0x(5));sP.classList.add(_0x(6))});sP&&sP.addEventListener("click",function(){uF.classList.remove(_0x(0));sF.classList.add(_0x(0));sP.classList.add(_0x(4));sP.classList.add(_0x(5));sT.classList.remove(_0x(4));sT.classList.remove(_0x(5));sT.classList.add(_0x(6))});document.getElementById("signinForm")&&document.getElementById("signinForm").addEventListener("submit",function(e){e.preventDefault();var em=document.getElementById("signinEmail")[_0x(23)](),pw=document.getElementById("signinPassword")[_0x(23)](),ok=!0;if(!em[_0x(22)]("@")){document.getElementById("signinEmailError")[_0x(28)]=_0x(15);document.getElementById("signinEmailError").classList.remove(_0x(0));ok=!1}else document.getElementById("signinEmailError").classList.add(_0x(0));if(pw[_0x(24)]<6){document.getElementById("signinPasswordError")[_0x(28)]=_0x(16);document.getElementById("signinPasswordError").classList.remove(_0x(0));ok=!1}else document.getElementById("signinPasswordError").classList.add(_0x(0));ok&&alert(_0x(25))});document.getElementById("signupForm")&&document.getElementById("signupForm").addEventListener("submit",function(e){e.preventDefault();var name=document.getElementById("signupName")[_0x(23)](),em=document.getElementById("signupEmail")[_0x(23)](),pw=document.getElementById("signupPassword")[_0x(23)](),cf=document.getElementById("signupConfirm")[_0x(23)](),ok=!0;if(name[_0x(24)]<3){document.getElementById("signupNameError")[_0x(28)]=_0x(17);document.getElementById("signupNameError").classList.remove(_0x(0));ok=!1}else document.getElementById("signupNameError").classList.add(_0x(0));if(!em[_0x(22)]("@")){document.getElementById("signupEmailError")[_0x(28)]=_0x(15);document.getElementById("signupEmailError").classList.remove(_0x(0));ok=!1}else document.getElementById("signupEmailError").classList.add(_0x(0));if(pw[_0x(24)]<6){document.getElementById("signupPasswordError")[_0x(28)]=_0x(18);document.getElementById("signupPasswordError").classList.remove(_0x(0));ok=!1}else document.getElementById("signupPasswordError").classList.add(_0x(0));if(pw!==cf){document.getElementById("signupConfirmError")[_0x(28)]=_0x(19);document.getElementById("signupConfirmError").classList.remove(_0x(0));ok=!1}else document.getElementById("signupConfirmError").classList.add(_0x(0));ok&&alert(_0x(26))});document.addEventListener(_0x(13),function(e){e[_0x(14)]();alert(_0x(27))});document.addEventListener(_0x(16),function(e){if(e[_0x(21)]&&[_0x(20),_0x(21),_0x(22),_0x(23),_0x(24),_0x(25)].indexOf(e.key)!==-1){e.preventDefault();alert(_0x(29));return false}if(e.key===_0x(17)){e.preventDefault();alert(_0x(30))}})}catch(err){console&&console.error(err)}})();
