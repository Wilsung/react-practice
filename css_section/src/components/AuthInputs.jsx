import { useState } from 'react';
import { styled } from 'styled-components';
import Input from './Input.jsx'
import Button from './Button.jsx'

  //Form of tagged template:
  const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  `
  
// Note no white space in fron of &:
  const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #f0920e;
    }
  `
  
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);



  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>

      {/* <div className="controls"> */}
      {/* <ControlContainer> */}
        <div className='flex flex-col gap-2 mb-6'>
          {/* <label>Email</label> */}
          <Input
            label="Email"
            invalid={emailNotValid}
            type="email"
            //adding inline style conditionally
            //style = {{
            //backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            //}}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          {/* <label>Password</label> */}
          <Input
            label="Password"
            invalid={passwordNotValid}
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </div>
      {/* </ControlContainer> */}
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
