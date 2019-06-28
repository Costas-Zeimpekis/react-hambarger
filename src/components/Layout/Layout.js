import React, { Fragment } from 'react';
import './Layout.scss';

const layout = (props) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">
      {props.children}
    </main>
    <p className="test">TEST</p>
  </Fragment>
);

export default layout;