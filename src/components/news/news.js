import React from "react";
import './news.css'


const topNews = [
    {
        newsMedia: "https://m.media-amazon.com/images/M/MV5BMTEzOTA4NTAzOTReQTJeQWpwZ15BbWU4MDg1ODc4NzEx._V1_QL75_UY266_CR2,0,180,266_.jpg",
        headline: "David Tennant, Diverse Cast Power ‘Around the World in 80 Days’ Premiering at Canneseries",
        source: "Variety - TV News"
    },
    {
        newsMedia: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_QL75_UX180_CR0,0,180,266_.jpg",
        headline: "‘No Time to Die’ Box Office: James Bond Movie Eyes $60M Weekend After $23.3M Friday",
        source: "The Hollywood Reporter - Film + TV"
    },
    {
        newsMedia: "https://m.media-amazon.com/images/M/MV5BZDU5ZDIxZTctMmU4Zi00MmEzLTk5ZWUtN2ZlYTRjZDhiYTdjXkEyXkFqcGdeQXVyNDUxNjE3MA@@._V1_QL75_UY266_CR17,0,180,266_.jpg",
        headline: "Kyle Gallner, Kal Penn Join Paramount Players Horror ‘Something’s Wrong with Rose’",
        source: "Variety - TV News"
    }
]




function News() {
  return (
    <div className="news-container">
      <h4>Latest News</h4>
        {topNews.map((data, key)=> (
                <div className="news" key={key}>
                    <div className="media">
                        <img src={data.newsMedia} alt="Nes"/>
                    </div>
                    <div className="content">
                        <h4 className="headline">{data.headline}</h4>
                        <h5 className="source">{data.source}</h5>
                    </div>
                </div>
        ))}
    </div>);
}

export default News;
