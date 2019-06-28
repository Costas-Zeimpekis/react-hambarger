import React, { Fragment } from 'react';

import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return (
    <Fragment>
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(100)',
          opacity: props.show ? '1' : '0',
          display: props.show ? 'block' : 'none'
        }}
      >
        {props.children}
      </div>
      <Backdrop show={props.show} clicked={props.onClickCancelPurchase} />
    </Fragment>
  );
};

export default modal;
