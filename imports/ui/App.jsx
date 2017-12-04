import React, { Component } from 'react';
import PropTypes from 'prop-types';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './p5/sketch.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Sciencing } from '../api/sciencing.js';
import { Chemicals } from '../api/chemicals.js';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sciencing: {},
      chemicals: [],
    };
 
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>building_blocks_project</h1>
        </header>
        {/*pass the p5 sktech file into the React wrapper
        also pass the ascii prop which will updated based on withTracker below*/}
        <P5Wrapper sketch={sketch} sciencing={this.props.sciencing} chemicals={this.props.chemicals} />
      </div>
    );
  }
}

App.defaultProps = {
  sciencing: {},
  chemicals: [],
};

App.propTypes = {
  sciencing: PropTypes.object.isRequired,
  chemicals: PropTypes.array.isRequired,
};

export default withTracker(props => {
  Meteor.subscribe('allData');
  return {
    sciencing: Sciencing.find({}, { sort: { updatedAt: -1 } }).fetch()[0],
    chemicals: Chemicals.find({}).fetch(),
  };
})(App);