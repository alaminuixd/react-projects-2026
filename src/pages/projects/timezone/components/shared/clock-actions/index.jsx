import { useState } from "react";
import ClockForm from "../clock-form";
import "./index.css";
const defaultOffsets = [
  -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleClock = (values) => {
    console.log("from clockaction handle clock: ", values);
    createClock(values);
    setIsCreate(false);
  };

  // console.log("Clock Action Clock: ", clock);
  return (
    <div>
      <div className="flex gap-5 items-center mb-5">
        {isEdit ? (
          <button className="btn-action-red" onClick={() => setIsEdit(false)}>
            Cancle Edit
          </button>
        ) : (
          <button
            className="btn-action-blue"
            onClick={() => setIsEdit((prev) => !prev)}
          >
            Edit
          </button>
        )}
        {local ? (
          <button
            className={isCreate ? "btn-action-red" : "btn-action-blue"}
            onClick={() => setIsCreate((prev) => !prev)}
          >
            {isCreate ? "Cancle Create" : "Create"}
          </button>
        ) : (
          <button
            className="btn-action-red"
            onClick={(e) => deleteClock(clock.id)}
          >
            Delete
          </button>
        )}
      </div>
      {isEdit && (
        <>
          <ClockForm
            formTitle={"Edit Clock"}
            values={clock}
            handleClock={updateClock}
            edit={true}
            setIsEdit={setIsEdit}
          />
        </>
      )}
      {isCreate && (
        <>
          <ClockForm
            formTitle={"Create a new clock"}
            values={{ ...clock, title: "" }}
            handleClock={handleClock}
            setIsCreate={setIsCreate}
          />
        </>
      )}
    </div>
  );
};
export default ClockActions;
