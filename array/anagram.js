/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  t = t.split("");
  s = s.split("");
  for (let i of s) {
    console.log(i);
    let index = 0;
    while (index < t.length) {
      if (i === t[index]) {
        t.splice(index, 1);
        break;
      } else {
        index++;
      }
    }
  }
  console.log(t);
  if (t.length !== 0) {
    return false;
  } else {
    return true;
  }
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  t = t.split("");
  s = s.split("");
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
    if (tt.hasOwnProperty(i)) {
      if (tt[i] !== ss[i]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
