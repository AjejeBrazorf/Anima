import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.scss';
import Legs from './Legs/Legs';
import PropertyHandler from './PropertyHandler/PropertyHandler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getLabelName: query => {
        switch (query) {
          case 'walkingAnglePure':
            return 'Angle Legs';
            break;
          case 'footWidth':
            return 'Foot width';
            break;
          case 'legHeight':
            return 'Height Legs';
            break;
          default:
            return '';
            break;
        }
      },
      legs: [
        {
          label: 'front-legs',
          id: this.ID(),
          speed: '1',
          size: '10',
          legHeight: '15',
          footWidth: '5',
          walkingAnglePure: '35',
          chamColor: '#4caf50',
          animation: 'walking'
        },
        {
          label: 'back-legs',
          id: this.ID(),
          speed: '1',
          size: '10',
          legHeight: '15',
          footWidth: '5',
          walkingAnglePure: '35',
          chamColor: '#4caf50',
          animation: ''
        }
      ]
    };
  }

  changeCSSProperty = event => {
    const legs = [...this.state.legs];
    const legID = event.target.id;
    const legProperty = event.target.attributes.getNamedItem(
      'data-propertyname'
    ).value;
    const legs_new = legs.map(l => {
      if (l.id + '_' + legProperty === legID) {
        const tmpL = l;
        tmpL[legProperty] = event.target.value;
        return tmpL;
      }

      return l;
    });
    this.setState({
      legs: legs_new
    });
  };

  ID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  render() {
    const { legs } = this.state;
    const legsRender = legs.map(leg => {
      return (
        <div key={leg.id} className="card">
          <div className="card--section">
            <h3 className="title">{leg.label}</h3>
            <Legs leg={leg} />
            <select
              id={leg.id + '_animation'}
              data-propertyname="animation"
              onChange={this.changeCSSProperty.bind(this)}
              value={leg.animation}>
              <option value="" />
              <option value="walking">Walking</option>
            </select>
          </div>
          <div className="card--section ">
            <PropertyHandler
              change={this.changeCSSProperty.bind(this)}
              propertyLabel="Angle legs"
              property={leg.walkingAnglePure}
              propertyName="walkingAnglePure"
              change={this.changeCSSProperty.bind(this)}
              id={leg.id}
              min="5"
              max="70"
            />
            <PropertyHandler
              propertyLabel="Foot size"
              property={leg.footWidth}
              propertyName="footWidth"
              change={this.changeCSSProperty.bind(this)}
              id={leg.id}
              min="0"
              max="15"
            />
            <PropertyHandler
              propertyLabel="Leg height"
              property={leg.legHeight}
              propertyName="legHeight"
              change={this.changeCSSProperty.bind(this)}
              id={leg.id}
              min="1"
              max="50"
            />
            <PropertyHandler
              propertyLabel="Leg width"
              property={leg.size}
              propertyName="size"
              change={this.changeCSSProperty.bind(this)}
              id={leg.id}
              min="1"
              max="20"
            />
            <PropertyHandler
              propertyLabel="speed"
              property={leg.speed}
              propertyName="speed"
              change={this.changeCSSProperty.bind(this)}
              id={leg.id}
              min=".1"
              max="2"
            />
          </div>
        </div>
      );
    });
    return (
      <StyleRoot>
        <div className="App">{legsRender}</div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
