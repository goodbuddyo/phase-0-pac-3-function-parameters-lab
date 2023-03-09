function introduction(name) {
  console.log(`Hi, my name is ${name}.`);
  return `Hi, my name is ${name}.`;
}
introduction("Aki");
introduction("Samip");

// function logTwoValues(value_1, value_2) {
//   console.log(`The two values are ${value_1} and ${value_2}`);
// }
// logTwoValues("a", "z");

// create two params
function introductionWithLanguage(name, language) {
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Aki", "Ember.js");

introductionWithLanguage("Samip", "React");

//set default argument value
function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}`);
  return `Hello, ${firstName}`;
}
// sayHelloTo();

// set default value for second parameter
function introductionWithLanguageOptional(name, language = "JavaScript") {
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
// introductionWithLanguageOptional("Gracie");

introductionWithLanguageOptional("Gracie");
introductionWithLanguageOptional("Gracie", "Python");
