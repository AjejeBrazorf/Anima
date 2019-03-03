import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.scss';
import Legs from './Legs/Legs';
import Menu from './LateralMenu/LateralMenu';
import PropertyHandler from './PropertyHandler/PropertyHandler';
import DetailCard from './DetailCard/DetailCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: '',
      menu: {
        toggle: (...args) => {
          const menu = { ...this.state.menu };
          menu.isOpen = !menu.isOpen;
          this.setState({
            menu: menu
          });
        },
        close: () => {
          const menu = { ...this.state.menu };
          menu.isOpen = false;
          this.setState({
            menu: menu
          });
        },
        isOpen: true
      },
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
        /*
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
        */
      ]
    };
  }

  addPart = partName => {
    const part = [...this.state[partName]];
    switch (partName) {
      case 'legs':
        part.push({
          label: 'Name me!',
          id: this.ID(),
          speed: '1',
          size: '10',
          legHeight: '15',
          footWidth: '5',
          walkingAnglePure: '35',
          chamColor: '#4caf50',
          animation: ''
        });
        break;
    }
    this.setState({
      legs: part
    });
  };

  changeLegsCSSProperty = event => {
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

  toggleMenu = () => {
    this.state.menu.toggle();
  };

  showCardFromId = id => {
    this.setState({
      showCard: id
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
    const { legs, menu, showCard } = this.state;
    let appClasses = 'App ';
    let legsRender = {};
    let legsCards = null;
    if (legs) {
      if (showCard.length > 0) {
        appClasses += 'blurred ';
        legsCards = legs.map(leg => {
          if (leg.id === showCard) {
            return (
              <DetailCard
                key={leg.id + '_Card'}
                leg={leg}
                cardCloser={this.showCardFromId}
                cssHandler={this.changeLegsCSSProperty.bind(this)}
              />
            );
          } else {
            return null;
          }
        });
      }
      legsRender = legs.map(leg => {
        return (
          <Legs
            legId={leg.id}
            key={leg.id}
            leg={leg}
            click={this.showCardFromId.bind(this, leg.id)}
          />
        );
      });
    }
    /*<div className="App">{legsRender}</div>*/
    /*<div className={'App' + showCard.length > 0 ? ' blurred' : ''}>*/
    // if
    return (
      <StyleRoot>
        <div className={appClasses}>
          <Menu
            addPart={this.addPart}
            isOpen={menu.isOpen}
            menuCloser={menu.close.bind(this)}
            menuHandler={menu.toggle.bind(this)}
          />
          {legsRender}
        </div>
        {legsCards}
      </StyleRoot>
    );
  }
}

export default Radium(App);
