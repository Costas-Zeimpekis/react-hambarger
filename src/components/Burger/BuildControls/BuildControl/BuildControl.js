import React from 'react';
import './BuildControl.scss'

const buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button onClick={props.removed} className="Less"
        disabled={props.disabled}
      >Less</button>
      <button onClick={props.added} className="More">More</button>
    </div>
  );
}

export default buildControl;