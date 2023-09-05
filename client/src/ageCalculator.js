const ageCalculator = (dob) => {
  const presentYear = new Date().getFullYear();
  const presentMonth = new Date().getMonth();
  const presentDay = new Date().getDay();
  const details = dob.split("-");
  for (let i in details) {
    details[i] = Number(details[i]);
  }
  let age = presentYear - details[0] - 1;
  if (presentMonth > details[1]) {
    age += 1;
    return age;
  } else if (presentMonth === details[1] && presentDay > details[2]) {
    age += 1;
    return age;
  } else {
    return age;
  }
};

export default ageCalculator;
