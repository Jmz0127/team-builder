import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// add an array of info
const teamList = [
{ teamName: 'Jon', teamRole: 'front end developer' },
{ teamName: 'Hannah', teamRole: 'UX UI designer' },
{ teamName: 'William', teamRole: 'branding operations specialist' },
{ teamName: 'Lauren', teamRole: 'well-being professional' },
]

// set up form template
function SimpleForm() {
  const [formValues, setFormValues] = useState({teamName:'', teamRole:''});
  const [teams, setTeams] = useState(teamList);

// set up the submit function
const submit = (evt) => {
  evt.preventDefault(); //submit will prevent a full page refresh
  const newTeam = {
    teamName: formValues.teamName.trim(), //no extra characters here!
    teamRole: formValues.teamRole.trim()
  }
  setTeams(teams.concat(newTeam));
  setFormValues({teamName: '', teamRole:''}); //submit will clear the input fields 
}


// set up the the change of state function
const change = (evt) => {
  const {name, value} = evt.target;
  console.log(name, value)
  setFormValues({ ...formValues, [name]: value});
}

  return (
      <div className='container'>
      <h1>Enter your info here</h1>
      {teams.map((team, idx) => (
        <div key={idx}>
          {team.teamName} is a {team.teamRole}
          </div>
      ))}
      <form onSubmit={submit}>
        <input
          value={formValues.teamName}
          name="teamName"
          type="text"
          onChange={change}
          placeholder='who is the lucky new employee, eh?'
        />
        <input
          value={formValues.teamRole}
          name='teamRole'
          type='text'
          onChange={change}
          placeholder='so, what would you say they do here?'
        />
        <input
        type='submit'
        value='Add'
        />
      </form>
      </div>

      





  )
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
