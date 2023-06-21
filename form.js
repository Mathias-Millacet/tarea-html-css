const body = document.querySelector("body");
const newFormulation = () => {
  console.log("newFormulation");
  const data = localStorage.getItem("data");
  const user = JSON.parse(data);
  console.log(user);

  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const company = document.getElementById("company");
  const phone = document.getElementById("phone");
  const msg = document.getElementById("msg");
  const countries = document.getElementById("countries");

  first.innerText = user.first;
  last.innerText = user.last;
  email.innerText = user.email;
  company.innerText = user.company;
  phone.innerText = user.phone;
  msg.innerText = user.msg;
  countries.innerText = user.countries;
};

const goBack = () => {
  window.history.back();
};

body.onload = newFormulation;
