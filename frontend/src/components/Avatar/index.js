import React from "react";
import PropTypes from "prop-types";
import "./Avatar.scss";
import { generateAvatarFromHash } from "utils/helpers";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={` Avatar ${user.fullname}`}
      ></img>
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstCharFromFullName = user.fullname[0].toUpperCase();
    return (
      <div
        className="avatar avatar--symbol"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%)`,
        }}
      >
        {firstCharFromFullName}
      </div>
    );
  }
};

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;
