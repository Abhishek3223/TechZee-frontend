import "./intro.css";

const Intro = () => {
  return (
    <div className="introContainer">
      <div className="introWrapper">
         <div className="introStatement">
            <h2 className="introH2">Unlock your learning potential with TZEE's cutting-edge online teaching platform, 
            designed to deliver the best learning experience tailored just for you!</h2>
         </div>
         <div className="introImage">
            <img src="https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="introImg"></img>
         </div>
      </div>

      <div className="introSecondSection">
         <div className="featureIntro">
           <p>Learn it all, in one place! Our multi-learning platform has it all.</p>
           <h1>Revolutionizing education through an innovative platform for teaching and learning.</h1>
           {/* <h3>Embark on a journey of infinite knowledge with our comprehensive multi-learning platform. Immerse yourself in diverse subjects, teach in your unique style, and achieve mastery across all domains!</h3> */}
         </div>
         <div className="featureSection">
        <div className="introFeatures"> 
          <div className="introFeaturesImg">
            <img src="https://images.pexels.com/photos/4491452/pexels-photo-4491452.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="introFImg" alt=""></img> 
          </div>
          <div className="features">
            <h1>Feature1</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div> 
        </div>
        <div className="introFeatures"> 
          <div className="introFeaturesImg">
            <img src="https://images.pexels.com/photos/4491452/pexels-photo-4491452.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="introFImg" alt=""></img> 
          </div>
          <div className="features">
            <h1>Feature1</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div> 
        </div>
        <div className="introFeatures"> 
          <div className="introFeaturesImg">
            <img src="https://images.pexels.com/photos/4491452/pexels-photo-4491452.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="introFImg" alt=""></img> 
          </div>
          <div className="features">
            <h1>Feature1</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div> 
        </div>
        </div>
       </div>
     </div>
  )
}

export default Intro

// A platform for all ages to teach and learn!
// Our website is open to all ages, fostering a community where anyone can teach and learn. Join us today and embrace the joy of lifelong education!
// Mailing Service
// Our website enables teachers to host live classes for students and easily communicate with them via email, providing all the necessary details for a seamless learning experience.
// Interactive and Easy
// Teach and learn with ease on our attractive and user-friendly website!