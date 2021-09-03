import React from "react";
import { connect } from "react-redux";

import { Sidebar } from "components";

const SidebarContainer = () => {};
export default connect(({ user }) => user.data)(Sidebar);
