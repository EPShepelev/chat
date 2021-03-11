import tinycolor from "tinycolor";

export default (hash) => {
  const [r, g, b] = hash.subst(0, 3).split("");
  const color = tinycolor({ r, g, b });
  return color;
};
