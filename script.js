const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote')
const authorText=document.getElementById('author')
const twitterBtn=document.getElementById('twitter')
const newQuoteBtn=document.getElementById('new_quote')
const loader=document.getElementById('loader');
let apiQuotes=[];

//show loading
function loading()
{  loader.hidden=false;
    quoteContainer.hidden=true;
}
//hide loading
function complete()
{
   quoteContainer.hidden=false;
   loader.hidden=true;
}


// Show New Quote
function newQuote(){
    //pick a random quote from apiQuotes array
const quote=apiQuotes[Math.floor(Math.random() *apiQuotes.length)] ;
console.log(quote);
//check if Author field is lank and replace it with 'unknown'
if(!quote.author){
    authorText.textContent='Unknown';
}
else{
//authorText.textContent
authorText.textContent=quote.author;
}
//check quote length to determine styling
if(quote.text.length>120){
    quoteText.classList.add('long-quote');
}
else{
    quoteText.classList.remove('long-quote');
}
//set qupote,hide loader
quoteText.textContent=quote.text;
complete();

}
// quoteText.textContent=quote.text;
//}

//Get Quotes From API
async function getQuotes() {
    const apiUrl='https://type.fit/api/quotes';
try{
    
        const response=await fetch(apiUrl);
        apiQuotes=await response.json();
        //console.log(apiQuotes[12]);
        newQuote();
}
catch(error)
{
    //catch error here
}
}
//Tweet Quote
function tweetQuote()
{
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}
//event listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
// On Load
getQuotes();
//loading();

