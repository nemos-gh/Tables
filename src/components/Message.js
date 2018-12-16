import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {

  return (
    <div className={"msg " + props.type}>
      <p>{props.text}</p>
    </div>
  )
}

export default Message;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'success', 
    'info',
    'warning',
    'error',
  ])
}