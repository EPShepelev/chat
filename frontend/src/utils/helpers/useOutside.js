export default (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target))
  };
};
