import React from "react";
import classNames from "classnames";
import "./Dialogs.scss";
import { DialogItem } from "../";

const Dialogs = ({ items }) => <div className="dialogs">{items}</div>;

export default Dialogs;
