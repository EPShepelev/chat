export default (num) => {
  const minutes = Math.floor(num / 60);
  const seconds = (num % 60).toFixed();
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};
