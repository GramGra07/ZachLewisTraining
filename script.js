const people = [
  { name: "Graden", born: 2007 ,tm:`Zach is not only a great trainer, but has become a good friend. He
    has taught me specifically about athletic training and training
    intentionally in the gym. I recommended him to everyone I know!`},
  { name: "Michelle", born: 1977 ,tm:`
              Zach is more than just a trainer, he's a friend. He's always there
              to support me and help me reach my goals. I can't recommend him
              enough.`},
    { name: "Zach", born: 1997 ,tm:`Zach's personalized approach to training has made all the
              difference. He truly cares about his clients and their success.`},
    { name: "Dylan", born: 1997 ,tm:`Zach is a great trainer! He is very knowledgeable and  has
                helped me reach my goals. I highly recommend him to anyone
                looking to improve their fitness.`},
];

function init() {
  for (let person of people) {
    let age = new Date().getFullYear() - person.born;
    document.getElementById(
      `person${people.indexOf(person) + 1}`
    ).innerHTML = `- ${person.name} (${age})`;
    document.getElementById(
      `person${people.indexOf(person) + 1}tm`
    ).innerHTML = `${person.tm}`;
  }
}
