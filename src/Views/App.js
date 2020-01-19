import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPropertiesList } from "../Actions/propertiesWebServices";
import Property from "./Property";
import PropTypes from "prop-types";
import Header from "./Header";

export class App extends Component {
  static propTypes = {
    propertiesList: PropTypes.array
  };
  static defaultProps = {
    propertiesList: []
  };

  constructor(props) {
    super(props);

    props.getPropertiesList();

    const id = Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
    let saveDataId = JSON.parse(localStorage.id || null);
    if (saveDataId === null) {
      saveDataId = id;
      localStorage.id = JSON.stringify(saveDataId);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="spacer" />
        {this.props.propertiesList.map((property, index) => (
          <Property
            key={index}
            backgroundClass={index % 2 === 0 ? "even" : "odd"}
            {...property}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  propertiesList: state.propertiesList
});

const mapDispatchToProps = {
  getPropertiesList: getPropertiesList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
