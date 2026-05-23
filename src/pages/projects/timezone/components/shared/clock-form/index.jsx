import { useEffect, useState } from "react";
import { getOffset } from "../../../utils/timezone";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import "./index.css";

/**
 * For local clock the title is unchangeable.
 * A public clock will have- title, timezone and offset
 * The edit section includes title, timezone and offset
 */
const ClockForm = ({
  formTitle = "",
  values = { id: "", title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
  setIsEdit,
  setIsCreate,
}) => {
  const [formState, setFormState] = useState({ ...values });

  useEffect(() => {
    // console.log(formState);
  }, [formState]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    edit ? setIsEdit((prev) => !prev) : setIsCreate((prev) => !prev);
    handleClock(formState);
  };

  // console.log("clock form: ", formTitle);

  useEffect(() => {
    if (TIMEZONE_OFFSET[formState.timezone]) {
      setFormState((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formState.timezone],
      }));
    }
  }, [formState.timezone]);
  return (
    <div className="clock-form-wrapper">
      <h3>{formTitle}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            disabled={!title}
          />
        </div>
        <div>
          <label htmlFor="timezone">Edit Timezone: </label>
          <select
            name="timezone"
            id="timezone"
            value={formState.timezone}
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
        {(formState.timezone === "GMT" || formState.timezone === "UTC") && (
          <div>
            <label htmlFor="offset">Offset</label>
            <select
              name="offset"
              id="offset"
              value={formState.offset / 60}
              onChange={handleChange}
            >
              {getOffset().length > 0 &&
                getOffset().map((offset) => (
                  <option key={offset} value={offset}>
                    {offset}
                  </option>
                ))}
            </select>
          </div>
        )}

        <button className="btn-form-blue">{edit ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};
export default ClockForm;
