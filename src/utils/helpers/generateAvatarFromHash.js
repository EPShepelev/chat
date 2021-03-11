import tinycolor from "tinycolor2";

const getCorrectIndex = (number) => {
  if (number > 255) {
    return 255;
  }
  if (number < 0) {
    return 0;
  }
  return number;
};

export default (hash) => {
  const [r, g, b] = hash
    .subst(0, 3)
    .split("")
    .map((char) => (char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0)));
  const color = tinycolor({ r, g, b });
  return color;
};
