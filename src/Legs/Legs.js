import React from 'react';
import Radium from 'radium';
import styles from './../Leg.module.scss';

const legs = props => {
  //  styles.legWrapper.walkingAnglePure = props.walkingAnglePure;
  const legWrapper = document.getElementById(props.legId);
  if (legWrapper) {
    const frontLeg = legWrapper.childNodes[0];
    const backtLeg = legWrapper.childNodes[1];

    legWrapper.style.setProperty('--legHeight', props.leg.legHeight + 'vw');
    legWrapper.style.setProperty('--footWidth', props.leg.footWidth + 'vw');

    legWrapper.childNodes.forEach(leg => {
      if (leg) {
        leg.style.setProperty('--walkingAnglePure', props.leg.walkingAnglePure);
        leg.style.setProperty(
          '--walking-angle',
          props.leg.walkingAnglePure + 'deg'
        );

        leg.style.setProperty('--size', props.leg.size + 'vw');
        leg.style.setProperty('--legHeight', props.leg.legHeight + 'vw');
        leg.style.setProperty('--durationUnit', 1 / props.leg.speed + 's');

        let footAnimationScaleProperty =
          parseFloat(props.leg.footWidth) * 0.025;
        leg.style.setProperty('--footWidth', props.leg.footWidth + 'vw');
        if (footAnimationScaleProperty < 1) {
          footAnimationScaleProperty = 1;
        } else if (footAnimationScaleProperty > 1.5) {
          footAnimationScaleProperty = 1.5;
        }
        leg.style.setProperty(
          '--foot-animation-scale-property',
          footAnimationScaleProperty
        );

        let footAnimationRotateProperty = parseFloat(
          props.leg.walkingAnglePure
        );
        if (footAnimationRotateProperty > 105) {
          footAnimationRotateProperty = 105;
        }
        leg.style.setProperty(
          '--foot-animation-rotate-property',
          footAnimationRotateProperty + 'deg'
        );
      }
    });
  }
  return (
    <div
      onClick={props.click}
      className={
        styles.legWrapper + ' legWrapper ' + styles[props.leg.animation]
      }
      id={props.legId}>
      <div className={styles.leg + ' ' + styles[props.leg.animation]} />
      <div
        className={
          styles.leg + ' ' + styles.back + ' ' + styles[props.leg.animation]
        }
      />
    </div>
  );
};
export default Radium(legs);
