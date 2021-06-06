// Coding Challenge #3
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (age) {
    return age > 2 ? 16 + age * 4 : 2 * age;
  });
  const adults = humanAge.filter(function (age) {
    return age >= 18;
  });
  const average = adults.reduce(function (acc, age, i, arr) {
    return acc + age;
  }, 0) / adults.length;  // total/ average

  // (2+3)/2
  const average1 = adults.reduce(function (acc, age, i, arr) {
    return acc + age / arr.length; // element1 / total + element2/ total
  }, 0)
  // 2/2 + 3/2

  console.log(humanAge);
  console.log(adults);
  console.log(average);
  console.log(average1);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// updated - Using Chaining

const calcAverageHumanAge1 = function (ages) {
  const humanAges = ages.map(age => (age > 2 ? 16 + age * 4 : 2 * age))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length , 0);

  return humanAges;
}

const avg = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
console.log(avg);