import React from 'react';

const backdrop = props => {
  return props.show ? (
    <div
      onClick={props.clicked}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '100',
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
    />
  ) : null;
};

export default backdrop;
