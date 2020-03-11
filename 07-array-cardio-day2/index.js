// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

//returns true, because there is at least one who is older than 19

console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?

const allAdults = people.every(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
//returns false, because not all of them are over 19 yo
console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(el => el.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentOnIndex = comments.findIndex(el => el.id === 823423);
console.log(commentOnIndex);

const deleteAtIndex = (array, findTheIndex) => {
  const tempArray = array.slice(0);
  tempArray.splice(findTheIndex, 1);

  return tempArray;
};

console.log(comments);
console.log(deleteAtIndex(comments, commentOnIndex));
