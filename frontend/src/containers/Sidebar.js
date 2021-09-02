import React from "react";
import { connect } from "react-redux";

import { Sidebar } from "components";

const SidebarContainer = ({ userId }) => {
  return <Sidebar userId={uder._id} />;
};

export default connect(({ user }) => user.data)(SidebarContainer);
