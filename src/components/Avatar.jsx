import React from 'react';

function Avatar(props) {
    return (
        <img className="Avatar"
            width={props.width}
            src={props.user.avatarUrl}
            alt={props.user.name}
        />

    );
}

export default Avatar;