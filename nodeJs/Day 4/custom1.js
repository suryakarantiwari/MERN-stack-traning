const { PI } = Math;

const area = (r) => {
  return PI * r ** 2;
};
const circumference = (r) => {
  return 2 * PI * r;
};

module.exports = { area, circumference };
