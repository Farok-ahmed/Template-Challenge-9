function inchToFeet(inche) {
  const feet = parseInt(inche / 12);
  const inchfeet = inche % 12;
  console.log("Feet is =", feet + "." + inchfeet);
}

inchToFeet(75);
