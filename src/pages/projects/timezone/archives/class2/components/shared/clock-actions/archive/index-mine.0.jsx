import { useState } from "react";

const defaultOffsets = [
  -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    updateClock({
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="flex gap-5 my-3">
        {isEdit ? (
          <button className="btn-update" onClick={handleUpdate}>
            Update
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
          <button className="btn-create">Create</button>
        ) : (
          <button className="btn-delete">Delete</button>
        )}
      </div>
      {isEdit && (
        <div>
          <h2>Edit Clock</h2>
          <div>
            <label htmlFor="title">Edit Title: </label>
            <input
              type="text"
              name="title"
              value={clock.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="timezone">Edit Timezone: </label>
            <select
              name="timezone"
              value={clock.timezone}
              onChange={handleChange}
            >
              <option value={"BST"}>BST</option>
              <option value={"EDT"}>EDT</option>
              <option value={"EST"}>EST</option>
              <option value={"GMT"}>GMT</option>
              <option value={"MST"}>MST</option>
              <option value={"PST"}>PST</option>
              <option value={"UTC"}>UTC</option>
            </select>
          </div>
          {(clock.timezone === "GMT" || clock.timezone === "UTC") && (
            <div>
              <label htmlFor="offset">Time Offset: </label>
              <select
                name="offset"
                value={clock.offset / 60}
                onChange={handleChange}
              >
                {defaultOffsets.length > 0 &&
                  defaultOffsets.map((offset) => (
                    <option key={offset} value={offset}>
                      {offset}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default ClockActions;
