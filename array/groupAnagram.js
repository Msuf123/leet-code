/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let newArray = [];
  let index = 0;
  while (index < strs.length) {
    let indexTwo = index + 1;
    newArray.push([strs[index]]);
    while (indexTwo < strs.length) {
      if (anagrams(strs[index], strs[indexTwo])) {
        newArray[index].push(strs[indexTwo]);

        strs.splice(indexTwo, 1);

        continue;
      }

      indexTwo++;
    }
    index++;
  }
  return newArray;
};
function anagrams(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let ss = {};
  let tt = {};
  for (let i of s) {
    if (ss.hasOwnProperty(i)) {
      ss[i] = ss[i] + 1;
    } else {
      ss[i] = 1;
    }
  }
  for (let i of t) {
    if (tt.hasOwnProperty(i)) {
      tt[i] = tt[i] + 1;
    } else {
      tt[i] = 1;
    }
  }
  for (let i in ss) {
    if (ss[i] !== tt[i]) {
      return false;
    }
  }
  return true;
}
// const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(strs1));
