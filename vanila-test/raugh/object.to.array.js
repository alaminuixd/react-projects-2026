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
};

const keys = Object.keys(formFields);
// console.log(keys);
const arr1 = keys.map((key) => ({
  key,
  type: formFields[key].type,
  label: formFields[key].label,
  placeholder: formFields[key],
}));
// console.log(arr1);

const arr2 = keys.map((key) => ({ key, ...formFields[key] }));
// console.log(arr2);

Object.keys(formFields).forEach((key) =>
  console.log(key, ": ", formFields[key]),
);

const arr3 = Object.entries(formFields).map(([key, val]) => {
  return { key, ...val };
});
console.log(arr3);
