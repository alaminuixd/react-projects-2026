const contacts = [
  {
    id: "5f544dd7-28ab-47a9-885c-da47b74632cb",
    fullName: "Jhon Doe",
    email: "jon@gmail.com",
    group: "home",
  },
  {
    id: "8344fdb8-0529-4432-8a2c-44dbe8f5df39",
    fullName: "Al Amin Khan",
    email: "alaminuixd@gmail.com",
    group: "home",
  },
  {
    id: "bc4580fc-40d0-44e8-b259-d34030b8a984",
    fullName: "Al Amin Khan",
    email: "a9bd.com@gmail.com",
    group: "office",
  },
  {
    id: "2e1c804a-ac9f-4766-aa42-0f00d0757272",
    fullName: "Al Amin Khan",
    email: "albusiness@gmail.com",
    group: "business",
  },
  {
    id: "a1c0aeec-56dd-452e-be7b-ee896fa69136",
    fullName: "Ruhul Amin Khan",
    email: "rupu@gmail.com",
    group: "home",
  },
  {
    id: "d8c4caac-5236-45e2-8061-6d2ae0ecef69",
    fullName: "Ruhul Amin Khan",
    email: "ruhulak93@gmail.com",
    group: "office",
  },
  {
    id: "04a9add3-427b-4949-90a3-28922a08d155",
    fullName: "Abrar Syed Khan",
    email: "abrar@gmai.com",
    group: "home",
  },
  {
    id: "bde21e0c-d834-4116-8f89-43b9029fc75c",
    fullName: "Abrar Syed Khan",
    email: "abraroffice@gmai.com",
    group: "office",
  },
  {
    id: "1893bf6f-54e4-451c-972e-4743cdf48ca5",
    fullName: "Abrar Syed Khan",
    email: "abrarbusiness@gmail.com",
    group: "business",
  },
  {
    id: "084df23d-3a97-42f0-b62d-55edb9646cde",
    fullName: "Sabrina Amin",
    email: "sabrina@gmai.com",
    group: "none",
  },
];

const container = document.getElementById("container");
const btnChangeData = document.createElement("button");
const buttonStyle = {
  border: "none",
  padding: "15px 40px",
  cursor: "pointer",
  borderRadius: "30px",
  backgroundColor: "#333",
  color: "#FFF",
  fontFamily: "Poppins, Arial",
  fontSize: "17px",
  fontWeight: "bold",
};
Object.assign(btnChangeData.style, buttonStyle);

function applyStyleByEvent(element, event) {
  element.addEventListener(event, (e) => {
    const theStyle = {
      backgroundColor:
        event === "mouseover"
          ? "#222"
          : event === "mouseout"
            ? "#333"
            : event === "mousedown"
              ? "#333"
              : event === "mouseup"
                ? "#222"
                : "",
      transition: "all",
    };
    Object.assign(e.target.style, theStyle);
  });
}

document.addEventListener("focus", () => {});

applyStyleByEvent(btnChangeData, "mouseover");
applyStyleByEvent(btnChangeData, "mouseout");
applyStyleByEvent(btnChangeData, "mousedown");
applyStyleByEvent(btnChangeData, "mouseup");

btnChangeData.innerText = "Change Data";

container.appendChild(btnChangeData);

const filter = "all";
