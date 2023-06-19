import React from 'react';
import instagramIcon from '../icons/instagramIcon.svg'
import twitterIcon from '../icons/twitterIcon.svg'
import { useState , useEffect } from "react";

const Quotes = () => {
    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");
    const [color,setColor] = useState("")
    useEffect(()=>{
        getQuote();
        getColor();
    },[]);

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                let random = Math.floor(Math.random() * data.quotes.length);
                console.log(data); // key: quotes , value: array
                setQuote(data.quotes[random].quote)
                setAuthor(data.quotes[random].author)
            })
    }

    const colors = ['#8ecd7a','#5fbcd4','#dbed81','#ecb569','#f188d8','#f16784','#67daf1']

    const getColor = () => {
        let random = Math.floor(Math.random()*colors.length);
        setColor(colors[random])
    }
    const handleClick = () => {
        getQuote() ;
        getColor();
    }
    const styleBtn = {
        padding: "8px 10px",
        borderRadius: '4px',
        borderColor: {color}.color,
        color:{color}.color
    }
    return (
        <div style={{backgroundColor:{color}.color}} id="quote-box">
            <div id="text">
                <p>
                    {quote}
                </p>
            </div>
            <div id="author">
                <p>- {author}</p>
            </div>
            <div id="button">
                <div className="social-media">
                    <a target="_blank" href='http://twitter.com/intent/tweet' id="tweet-quote">
                        <span>
                            <img className="icon" src={twitterIcon} alt=""></img>
                        </span>
                    </a>
                    <a target="_blank" href='https://www.instagram.com/namng_113/' id="instagram">
                        <span>
                            <img className='icon' src={instagramIcon} alt=""></img>
                        </span>
                    </a>
                </div>
                <button style={styleBtn} onClick={handleClick} id="new-quote">New Quote</button>
            </div>
        </div>
    );
}
export default Quotes