// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


// let char="R"
// Function to convert a character to lowercase using an arrow function
let toLowerCase = (char) => char.toLowerCase()
//    {return char.toLowerCase();
//   };
  
  // Function to convert an array of strings to an array of lowercase strings
  let array = ["MA", "SA", "I", "SCH", "OOL"];

  const convertArrayToLowerCase = (array) => {
    return array.map((word) => {
      return word.toLowerCase();
    });
  };
  
  const outputArray = convertArrayToLowerCase(array);
  console.log(outputArray);
  