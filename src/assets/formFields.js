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

export default formFields;
