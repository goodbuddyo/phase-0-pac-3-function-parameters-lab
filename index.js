function introduction(name) {
  console.log(`Hi, my name is ${name}`);
}
introduction("Superman");

function logTwoValues(value_1, value_2) {
  console.log(`The two values are ${value_1} and ${value_2}`);
}
logTwoValues("a", "z");

// create two params
function introductionWithLanguage(name, language) {
  console.log(`Hi, my name is  ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Sven", "Go");

//set default argument value
function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}`);
}
sayHelloTo();

function introductionWithLanguageOptional(name, language = "JavaScript") {
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional("Buster");


