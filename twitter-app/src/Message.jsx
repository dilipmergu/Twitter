import React from 'react';

const Message = ({error}) => {
    return ( 
        <div className="error_Box">
            <span className="error_Text">{error}</span>
        </div> 
    );
}
 
export default Message;