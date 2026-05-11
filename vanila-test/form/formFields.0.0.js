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
  color: {
    type: "color",
    label: "Favourite Color",
    value: "#ff0000", // default color
  },
};

const testOne = Object.fromEntries([
  ["name", "al amin"],
  ["father", "Syed ahmed"],
]);

/* const testTwo = Object.fromEntries(
  Object.entries(formFields).map(([key, val]) => {
    return key;
  }),
);
console.log(testTwo); */

console.log(
  Object.entries(formFields).map(([key, val]) => {
    return [
      key,
      {
        ...val,
        value: val.value || "",
      },
    ];
  }),
);

const addFieldsToObj = (obj, fields = []) => {
  if (!fields.length) return "Please add fields you want to add in an array";
  //   console.log(Object.entries(formFields));
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [
        key,
        {
          ...value,
          ...Object.fromEntries(
            fields.map((field) => {
              return [
                field,
                field === "name"
                  ? key
                  : field === "value"
                    ? value.value || ""
                    : "",
              ];
            }),
          ),
        },
      ];
    }),
  );
};

console.log(addFieldsToObj(formFields, ["value"]));
