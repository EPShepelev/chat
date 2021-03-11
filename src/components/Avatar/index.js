import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Avatar.scss";

const Avatar = ({ user }) => {
  if (avatar) {
    return <img src={user.avatar}></img>;
  } else {
    const colors = generateAvatarFromHash(user._id);
  }
};

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;
