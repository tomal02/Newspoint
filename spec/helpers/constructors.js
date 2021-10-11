const expect = (input) => {
  return new Matchers(input);
};

const describe = (label, callback) => {
  console.log(`----------Describe:  ${label}----------`);
  console.log(`---------------------------------------`);
  console.log('');
  callback();
};

const it = (label, callback) => {
  console.log(`::::It ${label} {`);
  callback();
  console.log('}::::');
};
