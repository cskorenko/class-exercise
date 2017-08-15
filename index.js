const emoji = require('node-emoji');

const emojiArray = ['coffee', 'pizza', 'heart', 'diamonds', 'spades',
'clubs', 'sunrise', 'tulip', 'beer', 'custard'];

emojiArray.forEach(function(item) {
  console.log(emoji.get(item));
});

function emojiLoop (array) {
  for(let i=0; i < array.length; i++) {
    console.log(emoji.get(array[i]));
  }
}

emojiLoop(emojiArray);
