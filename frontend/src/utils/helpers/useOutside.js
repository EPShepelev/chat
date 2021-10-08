import { useEffect } from "react";

export default (el, callback) => {
  const handleClick = (e) => {
    if (ref && !ref.contains(e.target)) {
      callback();
    }
  };
};

useEffect(() => {
  document.addEventListener("click", handleClick);
  return () => {
    document.removeEventListener("click", handleClick);
  };
});
