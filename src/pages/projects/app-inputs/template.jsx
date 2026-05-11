const AppInputs = () => {
  // useForm custom hook

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>
      <form>
        {/* First Name */}
        <div>
          <label>First name:</label>
          <input type="text" name="firstName" placeholder="Your First Name" />
        </div>

        {/* Last Name */}
        <div>
          <label>Last name:</label>
          <input type="text" name="lastName" placeholder="Your Last Name" />
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input type="email" name="email" placeholder="example@gmail.com" />
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            placeholder="******** (8 characters)"
          />
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
