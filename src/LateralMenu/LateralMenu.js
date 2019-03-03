import React, { useState } from 'react';
import Radium from 'radium';
import onClickOutside from 'react-onclickoutside';

import './LateralMenu.scss';

const lateralMenu = props => {
  lateralMenu.handleClickOutside = () => props.menuCloser();

  return (
    <div className={'lateral-bar ' + (props.isOpen ? 'show' : null)} id="bar">
      <div className="btn btn--done" />
      <div className="lateral-bar--bottom-section">
        <div className="btn btn--head" />
        <div className="btn btn--arms" />
        <div className="btn btn--body" />
        <div
          className="btn btn--leg"
          onClick={props.addPart.bind(this, 'legs')}
        />
      </div>
      <div
        className="btn btn--fixed"
        onClick={props.menuHandler}
        id="menu-button"
      />
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => lateralMenu.handleClickOutside
};

export default Radium(onClickOutside(lateralMenu, clickOutsideConfig));
