const contactus = document.getElementById(`contactus`);
const email = document.getElementById(`email`);
const phone = document.getElementById(`phone`);
const validEmail = document.getElementById(`validEmail`);
const validPhone = document.getElementById(`validPhone`);

contactus.addEventListener(`mouseenter`, () => {
  contactus.classList.add(`active`);
  contactus.classList.remove(`inactive`);
});

contactus.addEventListener(`mouseleave`, () => {
  contactus.classList.add(`inactive`);
  contactus.classList.remove(`active`);
});

email.addEventListener(`blur`, () => {
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.add(`is-valid`);
    email.classList.remove(`is-invalid`);
    validEmail.innerHTML = ``;
    validEmail.style.color = `Green`;
    validEmail.style.fontWeight = `Bold`;
  } else {
    email.classList.add(`is-invalid`);
    email.classList.remove(`is-valid`);
    validEmail.innerHTML = `Your Email is Invalid`;
    validEmail.style.color = `Red`;
    validEmail.style.fontWeight = `Bold`;
  }
});

phone.addEventListener(`blur`, () => {
  let regex = /^([0-9]){10}$/;
  let regex2 = /^([0-9]){12}$/;
  let str = phone.value;
  if (regex.test(str) || regex2.test(str)) {
    phone.classList.add(`is-valid`);
    phone.classList.remove(`is-invalid`);
    validPhone.innerHTML = ``;
    validPhone.style.color = `Green`;
    validPhone.style.fontWeight = `Bold`;
  } else {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    validPhone.innerHTML = `Your Phone Number is Invalid (Do Not use + with country code)`;
    validPhone.style.color = `Red`;
    validPhone.style.fontWeight = `Bold`;
  }
});
