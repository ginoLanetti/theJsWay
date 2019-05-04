const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];

// TODO: compute the formsEndingWithCy array

// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]


const formsNames = formNames => {
return formNames.map(formName =>formName.name);
};
allForms = formsNames(governmentForms);
const cyNames = names => {
  return names.filter( name => name.indexOf('cy',name.length-2) >= 0);
};
formsEndingWithCy = cyNames(allForms);
console.log(allForms);
console.log(formsEndingWithCy);
