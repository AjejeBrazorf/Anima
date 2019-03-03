import React, { useState } from 'react';
import Radium from 'radium';
import onClickOutside from 'react-onclickoutside';

import Legs from './../Legs/Legs';
import PropertyHandler from './../PropertyHandler/PropertyHandler';

const detailCard = props => {
  detailCard.handleClickOutside = () => props.cardCloser('');

  return (
    <div className="card card--fixed">
      <div className="show">
        <div
          className="btn btn--done"
          onClick={props.cardCloser.bind(this, '')}
        />
      </div>
      <div className="card--section --card-title">
        <h3 className="title">
          {props.leg.label} - {props.leg.id}
        </h3>
      </div>
      <div className="card--section card--main--section">
        <Legs legId={props.leg.id + '_CardInfo'} leg={props.leg} />
        <select
          id={props.leg.id + '_animation'}
          data-propertyname="animation"
          onChange={props.cssHandler}
          value={props.leg.animation}>
          <option value="" />
          <option value="walking">Walking</option>
        </select>
      </div>
      <div className="card--section --card--section-fixed-bottom ">
        <PropertyHandler
          change={props.cssHandler}
          propertyLabel="Angle legs"
          property={props.leg.walkingAnglePure}
          propertyName="walkingAnglePure"
          change={props.cssHandler}
          id={props.leg.id}
          min="5"
          max="70"
        />
        <PropertyHandler
          propertyLabel="Foot size"
          property={props.leg.footWidth}
          propertyName="footWidth"
          change={props.cssHandler}
          id={props.leg.id}
          min="0"
          max="15"
        />
        <PropertyHandler
          propertyLabel="Leg height"
          property={props.leg.legHeight}
          propertyName="legHeight"
          change={props.cssHandler}
          id={props.leg.id}
          min="1"
          max="50"
        />
        <PropertyHandler
          propertyLabel="Leg width"
          property={props.leg.size}
          propertyName="size"
          change={props.cssHandler}
          id={props.leg.id}
          min="1"
          max="20"
        />
        <PropertyHandler
          propertyLabel="speed"
          property={props.leg.speed}
          propertyName="speed"
          change={props.cssHandler}
          id={props.leg.id}
          min=".1"
          max="2"
        />
      </div>
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => detailCard.handleClickOutside
};

export default Radium(onClickOutside(detailCard, clickOutsideConfig));
