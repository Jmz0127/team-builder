import React, { useState } from 'react';

import Form from '../src/components/Form';

function App() { 
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: '', email: '', role: '', party: '' });

  /**
   * create state variables to hold team members
   * and hold form values
   * 
   * create update and submit functions
   */

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({name: '', email: '', role: '', party: ''});
  }

  const onChange = (name, value, checked, type) => {
    const valueToUse = type === 'checkbox' ? checked : value
    setValues({ ...values, [name]: valueToUse});
  }


  return (
    <div className="App">
      <h1>Team Builder App!!</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
        />
        {members.map((member, idx) => {
          return (
            <div key={idx}>
                 {member.name}, {member.role}, {member.email}, {member.party}
            </div>
          )

        })}

    </div>
  );
}

export default App;
