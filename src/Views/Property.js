import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Property.css";
import { format } from "date-fns";

export default class Property extends Component {
  static propTypes = {
    mlsId: PropTypes.number,
    property: PropTypes.object,
    photos: PropTypes.array,
    listDate: PropTypes.string,
    listPrice: PropTypes.number,
    backgroundClass: PropTypes.string
  };

  static defaultProps = {
    mlsId: -1,
    property: { stories: -1, bedrooms: -1, bathsFull: -1, bathsHalf: -1 },
    photos: [],
    listDate: "",
    listPrice: -1,
    backgroundClass: ""
  };

  saveID = () => {
    const db = document.firebaseRoot.firestore();
    const myPost = db.collection("ids").doc(localStorage.id.toString());

    myPost.get().then(doc => {
      if (doc.exists) {
        let previousData = doc.data().mlsIds;
        let newIds = [...previousData, this.props.mlsId];
        myPost.set({ mlsIds: newIds });
      } else {
        myPost.set({ mlsIds: [this.props.mlsId] });
      }
    });
  };

  render() {
    return (
      <section className={"property-root"}>
        <img
          className={"item image " + this.props.backgroundClass}
          src={this.props.photos[0]}
          alt="Property"
        />
        <section className={"property-items " + this.props.backgroundClass}>
          <span className="item number">{this.props.mlsId}</span>
          <span className="item number">{this.props.property.stories}</span>
          <span className="item number">{this.props.property.bedrooms}</span>
          <span className="item number">{this.props.property.bathsFull}</span>
          <span className="item number">{this.props.property.bathsHalf}</span>
          <span className="item date">
            {format(new Date(this.props.listDate), "MM/dd/yyyy")}
          </span>
          <span className="item number">
            {`$ ${this.props.listPrice
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
          </span>
          <button className="item save-button" onClick={this.saveID}>
            Save
          </button>
        </section>
      </section>
    );
  }
}
