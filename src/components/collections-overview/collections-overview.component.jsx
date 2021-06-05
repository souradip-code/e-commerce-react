import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectShopData } from "../redux/shop/shop.selectors";

class CollectionsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: props.shopData,
    };
  }
  render() {
    return (
      <div className="collections-overview">
        {this.state.collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shopData: selectShopData(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
