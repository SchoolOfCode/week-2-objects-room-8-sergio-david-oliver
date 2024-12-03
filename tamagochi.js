let officeDog = {
  name: "tbd",
  hunger: 50,
  happiness: 50,
  energy: 50,
};

let dogName = prompt("What should the dog be called?");

officeDog.name = dogName;

while (
  officeDog.hunger < 100 &&
  officeDog.energy > 0 &&
  officeDog.happiness > 0
) {
  console.log(`${officeDog.name}'s current stats:`);
  console.log(`Hunger: ${officeDog.hunger}`);
  console.log(`Happiness: ${officeDog.happiness}`);
  console.log(`Energy: ${officeDog.energy}`);

  if (officeDog.hunger < 20) {
    console.log("the pup is hungry");
  } else if (officeDog.happiness > 80) {
    console.log("the pup is very happy");
  } else if (officeDog.energy < 20) {
    console.log("the pup is very tired");
  }
}
if (!healthyDog) {
  console.log("the dog is dead");
}
