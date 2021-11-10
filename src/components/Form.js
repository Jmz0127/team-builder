import React from 'react';

const Form = (props) => {

    const handleChange = (event) => {
        const { name, value } = event.target; //name and value key for event.target object
        props.change(name, value);
      }

      const handleSubmit = event => {
          event.preventDefault();
          props.submit();  // don't need to fill the () because the handleChange fills name, value to state
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input
                placeholder='Enter your name here!'
                value={props.values.name}
                name='name'
                onChange={handleChange}
            />
            </label>
            <label>Email
            <input
                placeholder='Enter your email here!!'
                value={props.values.email}
                name='email'
                onChange={handleChange}
            />
            </label>
            <label>Role
            <input
                placeholder='So, whaddya do here?'
                value={props.values.role}
                name='role'
                onChange={handleChange}
            />
            </label>
            <input disabled={!props.values.name || !props.values.email || !props.values.role}
        type='submit'
        value='Create your team!'
        />
        </form>
    )

}

export default Form;