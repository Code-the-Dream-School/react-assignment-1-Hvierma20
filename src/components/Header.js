import React, { Fragment } from 'react';
import logo from '../images/logo.png';


const Header = (props) => {

  let button;
  function handleStart(){
    props.changeStart();
  }
  if(!props.start)
  button = <button className = "btn btn-dark niceFont" onClick={handleStart}> Start </button>

  return(
    <Fragment>
     <div class = "center">
          <h1 class = "niceFont" >Tic Tac Toe</h1>
          <img src={logo} alt="Tic Tac Toe" style= {{ width: '120px' }} />
          <button className="btn-primary btn-dark niceFont" type="button">{button}</button>
      </div>
     
    </Fragment>
  );
}

export default Header;
