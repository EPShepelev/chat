import React from "react";
import { connect } from "react-redux";

import { Sidebar } from "components";

const SidebarContainer = ({ user }) => {
  <div>
    <Sidebar user={user} />
  </div>;
};
export default connect(({ user }) => user.data)(Sidebar);
