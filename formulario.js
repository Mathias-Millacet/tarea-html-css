const form = document.querySelector("form");

const handleFormData = (e) => {
  e.preventDefault();
  const firstInput = document.getElementById("first");
  const lastInput = document.getElementById("last");
  const emailInput = document.getElementById("email");
  const companyInput = document.getElementById("company");
  const phoneInput = document.getElementById("phone");
  const msgInput = document.getElementById("msg");
  const countriesInput = document.getElementById("countries");

  const first = firstInput.value.trim();
  const last = lastInput.value.trim();
  const email = emailInput.value.trim();
  const company = companyInput.value.trim();
  const phone = phoneInput.value.trim();
  const msg = msgInput.value.trim();
  const countries = countriesInput.value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (first === "") {
    console.log("El nombre esta vacio");
  }
  if (last === "") {
    console.log("El apellido esta vacio");

    if (!emailPattern.test(email)) {
      console.log("El mail no es valido");
    }
    if (company === "") {
      console.log("El password esta vacio");
    }
    if (phone === "") {
      console.log("El numero de telefono esta vacio");
    }
    if (msg === "") {
      console.log("El message esta vacio");
    }
  }

  const data = {
    first,
    last,
    email,
    company,
    phone,
    msg,
    countries,
  };

  localStorage.setItem("data", JSON.stringify(data));

  form.submit();
};

form.addEventListener("submit", handleFormData);
