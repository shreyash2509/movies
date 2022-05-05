var textArray = [
  'slide-up',
'slide-down','slide-left',
'slide-right'
];
var randomIndex = Math.floor(Math.random() * textArray.length); 
var randomElement = textArray[randomIndex];

export default randomElement;