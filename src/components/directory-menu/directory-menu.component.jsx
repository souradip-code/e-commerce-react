import React from "react";
import { connect } from "react-redux";

import "./directory-menu.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySection } from "../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherPropertyOptions }) => {
      return <MenuItem key={id} {...otherPropertyOptions}></MenuItem>;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  sections: selectDirectorySection(state),
});

export default connect(mapStateToProps)(Directory);
