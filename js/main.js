var q= document.getElementById("quote");
function newQuote(){

    var quotes = ["“Be yourself; everyone else is already taken.”","“So many books, so little time.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,"“A room without books is like a body without a soul.”" ,"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
        ,"“You only live once, but if you do it right, once is enough.”","“Be the change that you wish to see in the world.”","“In three words I can sum up everything I've learned about life: it goes on.”","“If you tell the truth, you don't have to remember anything.”","“Always forgive your enemies; nothing annoys them so much.”"]

        var author =["― Oscar Wilde","― Marilyn Monroe","― Frank Zappa","― Albert Einstein","― Marcus Tullius Cicero","― Bernard M. Baruch"
        ,"― William W. Purkey","― Dr. Seuss","― Mae West","― Mahatma Gandhi","― Robert Frost"]
       var rand = getRandomNumber(quotes.length);

       q.innerHTML = `<p>${quotes[rand]}</p>
        <p class"mt-5">${author[rand]}</p>`
        
    }
    function getRandomNumber(max) 
    { return Math.floor(Math.random() * max);

     }