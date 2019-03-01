import React from 'react';
import Radium from 'radium';
import './LateralMenu.scss';

const lateralMenu = props => {
  //  styles.legWrapper.walkingAnglePure = props.walkingAnglePure;
  console.log(props.isOpen);
  return (
    <div className={'lateral-bar ' + (props.isOpen ? 'show' : null)} id="bar">
      <div className="btn btn--done" />
      <div className="lateral-bar--bottom-section">
        <div className="btn btn--head" />
        <div className="btn btn--arms" />
        <div className="btn btn--body" />
        <div className="btn btn--leg" />
      </div>
      <div
        className="btn btn--fixed"
        onClick={props.menuHandler}
        id="menu-button"
      />
    </div>
  );
};
export default Radium(lateralMenu);
