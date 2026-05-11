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

// Add value properties to the inner objects property of the existing object.
const addValueToObj = (obj) => {
  return Object.keys(obj).reduce((accu, key) => {
    // accu[key] = obj[key].value || "";
    accu[key] = { ...obj[key], name: key, value: obj[key].value || "" };
    console.log(obj[key]);
    return accu;
  }, {});
};
const iniState = addValueToObj(formFields);

// console.log(iniState);

/* const addValueToObj2 = (obj, props = []) => {
  return Object.keys(obj).reduce((accu, key) => {
    // accu[key] = obj[key].value || "";
    if (!props.length) return "No props are provided";
    for (let i = 0; i < props.length; i++) {
      if (props[i] === "name") {
        accu[key] = { ...obj[key], name: key };
      } else if (props[i] === "value") {
        accu[key] = { ...obj[key], value: obj[key].value || "" };
      } else {
        accu[key] = { ...obj[key] };
      }
    }
    return accu;
  }, {});
}; */
const addValueToObj2 = (obj, props = []) => {
  if (!props.length) return "No props are provided";
  return Object.keys(obj).reduce((accu, key) => {
    const newObj = { ...obj[key] };
    for (let i = 0; i < props.length; i++) {
      if (props[i] === "name") {
        newObj.name = key;
      } else if (props[i] === "value") {
        newObj.value = obj[key].value || "";
      } else {
        newObj[props[i]] = "";
      }
      accu[key] = { ...newObj };
    }
    return accu;
  }, {});
};

const iniState3 = addValueToObj2(formFields, [
  "name",
  "value",
  "father",
  "mother",
]);
console.log(iniState3);

const addValueToObj3 = (obj, props = []) => {
  if (!props.length) return "No props are provided";

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      {
        ...value,
        ...Object.fromEntries(
          props.map((prop) => [
            prop,
            prop === "name" ? key : prop === "value" ? value.value || "" : "",
          ]),
        ),
      },
    ]),
  );
};
const iniState4 = addValueToObj2(formFields, [
  "name",
  "value",
  "father",
  "mother",
]);
console.log("--------iniState 4");
console.log(iniState4);
