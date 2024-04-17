function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const lowerCaseStr = s1.toLowerCase();
  const lowerCaseSubStr = s2.toLowerCase();
	  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr.substring(i, i + lowerCaseSubStr.length) === lowerCaseSubStr) {
return i;
}
	  }
	return -1;
}
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
