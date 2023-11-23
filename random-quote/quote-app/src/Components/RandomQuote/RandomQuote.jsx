import React, { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from "../Assets/twitter.png"
import instagram_icon from "../Assets/instagram.png"
const RandomQuote = () => {
    let quotes=[];
    async function loadQuotes(){
        const response=await fetch("https://type.fit/api/quotes");
        quotes=await response.json();
    }

    const [quote,setQuote]=useState({
        text:"I have learned over the years that when one’s mind is made up, this diminishes fear.", 
        author:"Rosa Parks"
    });
    const random=()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)]
       setQuote(select);
    } 
   const twitter=()=>{
    window.open("https://twitter.com/intent/twet?text=${quote.text} - ${quote.author.split(',')[0]}");
   }
  loadQuotes();
  return (
    <div id="quote-box">
        <div id="text">{quote.text}</div>
     <div>
        <div id="author">- {quote.author.split(',')[0]}</div>
        <div className="line">
        </div>
        
        <div className="bottom">
            
        <div className="icons">
            <a href="twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}" id="tweet-quote" target="_blank"><img src={twitter_icon} alt=""/></a>
            <img src={instagram_icon} alt=""/>
            {/* <img src={twitter_icon} onClick={()=>{twitter()}} alt=""/> */}
        </div>
        <button id="newquote" onClick={()=>{random()}}>New Quote</button>
        </div>
        
        </div> 

    </div>
  )
}

export default RandomQuote
