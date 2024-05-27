function toCase(text) {
	let text1=text.toLowerCase();
	let text2=text.toUpperCase();
	return text1+"-"+text2
  // write your code here
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
