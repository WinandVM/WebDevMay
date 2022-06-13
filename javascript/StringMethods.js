// string methods
var result;
const MyText = 'lorem ipsum dolor sit amet intecbrussel sdjsidisjdijsidjsdj';

// length
result = MyText.length;
result = MyText[MyText.length-1] // MyText.length = 30 -1

// charAt()
result = MyText.charAt(6); // return character at index 6

// concat() method
var firstname = "John "
var lastname = "Doe"
result = firstname.concat(lastname); // return JohnDoe
result = "1234".concat("5678"); // return 12345678


console.log(result)