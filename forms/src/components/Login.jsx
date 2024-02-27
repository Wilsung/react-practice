import { useState, useRef } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  const [formIsInvalid, setFormIsInvalid] = useState(false);

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
    console.log(email, password)
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsInvalid = enteredEmail.includes("@");

    if (!emailIsInvalid) {
      setFormIsInvalid(true);
      return;
    }
    setFormIsInvalid(false);
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
          <div className="control-error">
            {formIsInvalid && <p>please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
