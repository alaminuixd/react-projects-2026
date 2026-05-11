const formFields = {
  name: {
    type: "text",
    label: "Your Name",
    placeholder: "John Doe",
  },
  email: {
    type: "email",
    label: "Your Email",
    placeholder: "example@gmail.com",
  },
  phone: {
    type: "tel",
    label: "Your Phone",
    placeholder: "+8801754824857",
  },
  password: {
    type: "password",
    label: "Password",
    placeholder: "xxxxxxxxxx",
  },
  re_password: {
    type: "password",
    label: "Re-Password",
    placeholder: "xxxxxxxxxx",
  },
  color: {
    type: "color",
    label: "Favourite Color",
    value: "#ff0000", // default color
  },
};

Object.entries(formFields).forEach(([key, val]) => {
  //   console.log(`Key: ${key} \n val: ${val}`);
});

const entries = Object.entries(formFields).map(([key, val]) => {
  return [key, val.value || ""];
});

const iniState = Object.fromEntries(entries);
console.log(entries);
// console.log(iniState);

const entries2 = Object.entries(formFields).map(([key, fields]) => {
  return [key, fields.value || ""];
});
console.log(entries2);
