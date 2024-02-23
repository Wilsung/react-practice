import { useState, useRef } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  const email = useRef();
  const password = useRef();

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword)
  }

  return (
    //METHOD 1
    // <form onSubmit={handleSubmit}>
    //   <h2>Login</h2>

    //   <div className="control-row">
    //     <div className="control no-margin">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         id="email"
    //         type="email"
    //         name="email"
    //         onChange={(e) => handleInputChange("email", e.target.value)}
    //         value={enteredValues.email}
    //       />
    //     </div>

    //     <div className="control no-margin">
    //       <label htmlFor="password">Password</label>
    //       <input id="password" type="password" name="password" />
    //     </div>
    //   </div>

    //   <p className="form-actions">
    //     <button className="button button-flat">Reset</button>
    //     <button className="button">Login</button>
    //   </p>
    // </form>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
