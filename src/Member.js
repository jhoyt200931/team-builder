import React from "react";

const Member = (props) => {
    return (
        <div>
            {props.team.map((member) => {
                return (
                    <div>
                        <h4>{member.name}</h4>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Member