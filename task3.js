let divisibleByTwo = "yu";
let divisibleByThree = "gi";
let divisibleByFive = "oh";

function divide(num) {
  let store = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      let i = `${divisibleByTwo}-${divisibleByThree}-${divisibleByFive}`;
      store.push(i);
    } else if (i % 2 === 0 && i % 3 === 0) {
      let i = `${divisibleByTwo}-${divisibleByThree}`;
      store.push(i);
    } else if (i % 2 === 0 && i % 5 === 0) {
      let i = `${divisibleByTwo}-${divisibleByFive}`;
      store.push(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
      let i = `${divisibleByThree}-${divisibleByFive};`;
      store.push(i);
    } else if (i % 2 === 0) {
      let i = divisibleByTwo;
      store.push(i);
    } else if (i % 3 === 0) {
      let i = divisibleByThree;
      store.push(i);
    } else if (i % 5 === 0) {
      let i = divisibleByFive;
      store.push(i);
    } else {
      store.push(i);
    }
  }
  return store;
}
divide(100);
divide(15);
