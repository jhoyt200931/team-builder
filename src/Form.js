import React, { useState } from "react";

const Form = (props) => {
    console.log(props);
    
    const Change = event => {
        const newMember = {
            ...props.member,
            [event.target.name]: event.target.value,
        }
        props.setMember(newMember);
    }
    const Submit = event => {
        event.preventDefault();
        props.setTeam([...props.team, props.member]);
        props.setMember({
            name: "",
            email: "",
            role: ""
        })
    }
return (
    <div>
        <h4>Add A Team Member</h4>
        <form onSubmit={Submit}> 
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Enter Name Here" onChange={Change}/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="Enter Email" onChange={Change}/>
            <label htmlFor="role">Role: </label>
            <input type="text" id="role" name="role" placeholder="Role" onChange={Change}/>
            <button type="submit">Submit</button>

        </form>
    </div>
)
}

export default Form;