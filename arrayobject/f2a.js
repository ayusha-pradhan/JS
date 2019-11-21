
const devices = [{ name: "ayu", bar: 2}, { name: "alex", bar: 4}, { name: "ana", bar: 6} ];

const newDevices = devices.reduce((ds, d) => {
  let newD = d;
  if (d.name === 'ana') {
    newD =  {...d, bar: d.bar*2};
  }
  return ds.concat(newD);
}, []);

console.log(newDevices)