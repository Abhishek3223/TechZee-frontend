import React from "react";
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="cardSection">
        {/* <h1>What can you learn and teach ? Anything</h1> */}
        <h1>What can you learn and teach ? Anything</h1>
        <div className="cardWrapper">
          <div className="cards">
            <h1>Music</h1>
          </div>
          <div className="cards">
            <h1>Dance</h1>
          </div>
          <div className="cards">
            <h1>Health And Fitness</h1>
          </div>

          <div className="cards">
            <h1>Astrology</h1>
          </div>
          <div className="cards">
            <h1>Sports</h1>
          </div>
          <div className="cards">
            <h1>School and College</h1>
          </div>
          <div className="cards">
            <h1>Entrance Examination</h1>
          </div>
          <div className="cards">
            <h1>Development</h1>
          </div>
          <div className="cards">
            <h1>Carreer Guides</h1>
          </div>
          <div className="cards">
            <h1>Business And Finance</h1>
          </div>
        </div>
      </div>
      <div className="PhotoGallery">
        <img
          src="https://images.pexels.com/photos/8424983/pexels-photo-8424983.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
        <img
          src="https://images.pexels.com/photos/5212697/pexels-photo-5212697.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
        <img
          src="https://images.pexels.com/photos/4545767/pexels-photo-4545767.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
        <img
          src="https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
        <img
          src="https://images.pexels.com/photos/6817699/pexels-photo-6817699.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
        <img
          src="https://images.pexels.com/photos/7567426/pexels-photo-7567426.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
        <img
          src="https://images.pexels.com/photos/5256523/pexels-photo-5256523.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
        <img
          src="https://images.pexels.com/photos/4989166/pexels-photo-4989166.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="gallerImg"
        ></img>
            
      </div>
    </>
  );
};

export default Card;
