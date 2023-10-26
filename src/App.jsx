import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  
  const handleFirstName = function(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }
  const handleLastName = function(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }
  const clearInputs = function() {
    setFirstName("");
    setLastName("");
    setFullName("");
  }
  return (
    <>
      <div className='container'>
        <h2>Let's check you in</h2>
        <label>
          First Name:{" "}
          <input value={firstName} onChange={handleFirstName} />
        </label>
        <label>
          Last Name:{" "}
          <input value={lastName} onChange={handleLastName} />
        </label>
        <p>Your ticket will be issued to: <span>{fullName}</span></p>
        <button className='reset-btn' onClick={clearInputs}>Reset</button>
      </div>
    </>
  )
}
export default App
