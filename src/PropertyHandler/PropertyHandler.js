import React from 'react';
import Radium from 'radium';
import './PropertyHandler.scss';
import styles from './../Leg.module.scss';

const propertyHandler = props => {
  return (
    <div className="property--section">
      <pre>
        <label>{props.propertyLabel}</label>
      </pre>
      <pre>
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.property}
          onChange={props.change}
          data-propertyname={props.propertyName}
          id={props.id + '_' + props.propertyName}
          step="0.1"
        />
      </pre>
      <pre>{props.property}</pre>
    </div>
  );
};
export default Radium(propertyHandler);
