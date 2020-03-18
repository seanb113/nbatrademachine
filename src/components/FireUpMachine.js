import React from 'react';
import {Link} from 'react-router-dom'
const FireUpMachine  = () => {
    return(
        <div>
        <Link to="/machine">
        <button>Ready to trade?</button>
        </Link>
        <Link to="/profile">
        <button>Go to your profile</button>
        </Link>
        </div>
    )
}

export default FireUpMachine