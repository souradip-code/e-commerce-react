import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { selectCollection } from "../../components/redux/shop/shop.selectors";

import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match, collections }) => {
  console.log("collections==>", collections);
  // return <div className="collection-page">Collection Page!!</div>;
  return (
    <div className="collection-page">
      <h1 className="title">{collections.title.toUpperCase()}</h1>
      <div className="items">
        {collections.items.map((item) => {
          return <CollectionItem key={item.id} item={item}></CollectionItem>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const collectionId = ownProps.match.params.collectionId;
  console.log("coolection id", collectionId);

  return {
    collections: selectCollection(collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
