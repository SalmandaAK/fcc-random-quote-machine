import quoteList from './quote-list.js';

const utility = {
  getNewColor,
  getNewQuote,
}

//This app will get a quote which doesn't exceed the maximum length of Tweet composer so the user doesn't need to edit the text when they share the quote via Twitter.

const maxTweetLength = 280;
const extraChars = `"" -  #quote`; //extra characters from formated text: `"{quote.text}" - {quote.author}. #quote`, which will pre-populate the Tweet composer.
const maxQuoteLength = maxTweetLength - extraChars.length;
const filteredQuotes = quoteList.filter((quote) => (quote.quote.length + quote.author.length) < maxQuoteLength);

function formatQuote(quoteObj) {
  return encodeURIComponent(`"${quoteObj.text}" - ${quoteObj.author}.`);
}

function getNewQuote() {
  let index = Math.floor(Math.random() * filteredQuotes.length);
  let quoteObj = {
    text: filteredQuotes[index].quote,
    author: filteredQuotes[index].author,
    createTweetUrl() { return `https://twitter.com/intent/tweet?text=${formatQuote(quoteObj)}&hashtags=quote` }
  }
  return quoteObj;
}

function getNewColor() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
      let value = Math.floor(Math.random() * (151-75) + 75);
      rgb.push(value);
      value -= 25;
      rgb.push(value);
    };
  
    const [r, r2, g, g2, b, b2] = [...rgb];
  
    const color = {
      light: `rgba(${r}, ${g}, ${b}, 1)`,
      medium: `rgba(${r2}, ${g2}, ${b2}, 0.8)`,
      dark: `rgba(${r2}, ${g2}, ${b2}, 1)`,
      darkRgb: `${r2}, ${g2}, ${b2}`
    }
    return color;
  }  

export default utility;
