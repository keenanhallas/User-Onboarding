import React from "react";
import styled from "styled-components";

const UserList = ({users}) => {
    const UserCard = (user, i) => {
        return(
            <div key={i}>
                {user.name} - {user.email}
            </div>
        );
    };
    
    return (
        users.map((user, i) => {
            return (
                UserCard(user, i)
            );
        })
    );
}

export default UserList;