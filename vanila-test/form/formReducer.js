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

const entries = Object.entries(formFields);
// console.log(entries);
const iniState = entries.reduce((accu, curr) => {
  const [key, val] = curr;
  accu[key] = val.value || "";
  return accu;
}, {});

const keys = Object.keys(formFields);
// console.log(keys);
const iniState2 = keys.reduce((accu, key) => {
  // console.log(key);
  accu[key] = formFields[key].value || "";
  return accu;
}, {});
console.log(iniState2);

/* const transformObject = (obj) => {
  return Object.keys(obj).reduce((accu, key) => {
    accu[key] = { ...obj[key], value: "" };
    return accu;
  }, {});
}; */

// Add value properties to the object property of the existing object.
const transformObject = (obj) => {
  let num = 0;
  return Object.keys(obj).reduce((accu, key) => {
    console.log(++num);
    accu[key] = { ...obj[key], value: obj[key].value || "" };
    return accu;
  }, {});
};
console.log(transformObject(formFields));

const mapObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => ({
    name: key,
    value: obj[key].value || "",
    ...obj[key],
  }));
};

console.log(mapObjectToArray(formFields));
