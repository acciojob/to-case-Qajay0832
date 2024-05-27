function toCase(text) {
		return text.toLowerCase()+"-"+text.toUpperCase()
  // write your code here
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
