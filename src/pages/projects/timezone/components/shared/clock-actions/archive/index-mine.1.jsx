import { useState } from "react";
import ClockForm from "../clock-form";

const defaultOffsets = [
  -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];
{
  /* <ClockActions local={true} clock={clock} updateClock={updateClock} /> */
}
const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  // const handleChange = (e) => {
  //   let { name, value } = e.target;
  //   if (name === "offset") {
  //     value = Number(value) * 60;
  //   }
  //   updateClock({
  //     [name]: value,
  //   });
  // };

  const handleClock = (value) => {
    console.log(value);
  };

  return (
    <div>
      <div className="flex gap-5 my-3">
        {isEdit ? (
          <button className="btn-update" onClick={() => setIsEdit(false)}>
            End Edit
          </button>
        ) : (
          <button
            className="btn-edit"
            onClick={() => setIsEdit((prev) => !prev)}
          >
            Edit
          </button>
        )}
        {local ? (
          <button className="btn-create" onClick={setIsCreate((prev) => !prev)}>
            Create
          </button>
        ) : (
          <button className="btn-delete">Delete</button>
        )}
      </div>
      {isCreate && (
        <>
          <h3>Create a new clock</h3>
          <ClockForm handleClock={updateClock} />
        </>
      )}
    </div>
  );
};
export default ClockActions;
