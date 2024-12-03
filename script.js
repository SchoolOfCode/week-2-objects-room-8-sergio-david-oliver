let ourTeam = {
  member1: {
    name: "Sergio",
    age: 28,
    height: 178 + "" + "cm",
    favourite_food: "fried chicken",
  },
  member2: {
    name: "David",
    age: 29,
    height: 180 + "" + "cm",
    favourite_food: "tacos",
  },

  member3: {
    name: "Oliver",
    age: 30,
    height: 178 + "" + "cm",
    favourite_food: "pasta",
  },
};

for (let key in ourTeam) {
  console.log(
    `${ourTeam[key].name}'s favourite food is ${ourTeam[key].favourite_food}`
  );
}

/* Key represents the property name of each item in the object
Objects in javascript are collections of key-value pairs. The for..in loop iterates over the keys of the object
Key holds the current property name (like "member1", "member2", etc.) 
ourTeam[key] accesses the value associated with that key.
  ourTeam["member1"] retrieves the object for "member1".
  ourTeam["member2"] retrieves the object for "member2".

Objects don’t have numeric indices like arrays. Instead, they have named keys (member1, member2, etc.).
The for...in loop traverses these keys, and key holds each key's name as a string.
*/

module.exports = { ourTeam };
