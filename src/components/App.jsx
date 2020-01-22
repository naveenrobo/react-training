import React from 'react';

import Comment from './Comment';

const abc = {
    avatarUrl: "https://www.gravatar.com/avatar/00000000000000000000000000000000?s=50",
    name: "Naveen Sakthivel"
}

function App() {
    return (
        <div>
            <Comment author={abc} text="My Comment" date="2020-01-22" />
            
        </div>
    )
}

export default App;