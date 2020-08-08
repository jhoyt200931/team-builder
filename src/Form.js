import React from "react";

const Form = () => {

return (
    <div>
        <h4>Add A Team Member</h4>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Enter Name Here" />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="Enter Email"/>
            <label htmlFor="role">Role: </label>
            <input type="text" id="role" name="role" placeholder="Role"/>

        </form>
    </div>
)
}

export default Form;