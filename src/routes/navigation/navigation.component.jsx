import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss';
import {ReactComponent as FnlLogo} from '../../assets/ferre-newlink-logo.svg'

const Navigation = () => {
  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <FnlLogo className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
              Tienda
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;