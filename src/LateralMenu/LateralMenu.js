import React from 'react';
import Radium from 'radium';
import './LateralMenu.scss';

const lateralMenu = props => {
  //  styles.legWrapper.walkingAnglePure = props.walkingAnglePure;

  return (
    <div className="lateral-bar show" id="bar">
      <div className="btn btn--done" />
      <div className="lateral-bar--bottom-section">
        <div className="btn btn--head" />
        <div className="btn btn--arms" />
        <div className="btn btn--body" />
        <div className="btn btn--leg" />
      </div>
      <div className="btn btn--fixed" id="fixed" />
    </div>
  );
};
export default Radium(lateralMenu);
