let si = (p: number, r: number = 10, t?: number): number => {
  return (p * r * (t || 1)) / 100;
};

console.log(si(100, 10, 2));
console.log(si(100, 10));
console.log(si(100));
