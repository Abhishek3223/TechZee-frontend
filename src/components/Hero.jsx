import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <main>
        <section className="hero-bar1">
          <div className="Hero-bar-text fs-1">
            Learn, teach, and grow on our all-inclusive e-learning platform for
            everyone!
            <div className="desc-herobar">
              Unlock your learning potential with TZEE's cutting-edge online
              teaching platform, designed to deliver the best learning
              experience tailored just for you!
            </div>
            <Link to="/login">
              <button className="btn btn-primary text-light p-2 getstarted">
                Get Started For Free
              </button>
            </Link>
          </div>

          <div className="hero-bar-image">
            <img
              className="hero-img"
              src="https://images.pexels.com/photos/3761513/pexels-photo-3761513.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="#"
            />
          </div>
        </section>
        {/* <div className='line'></div> */}
        <section className="featureBar">
          <p className="fs-5 pr-5">
            Learn it all, in one place! Our multi-learning platform has it all.
          </p>
          <p className="feature-text fs-2 fw-bold">There’s more than one way to earn</p>
          <div className="featureList">
            <div className="featureItem">
              <div className="featureImage">
                <img
                  className="fet"
                  src="https://png.pngtree.com/png-vector/20210329/ourlarge/pngtree-network-teaching-online-learning-illustration-png-image_3158307.jpg"
                  alt=""
                />
              </div>
              <div className="featuretext">
                <h4>Live Learning</h4>Community open to all ages, where anyone
                can teach and learn.{" "}
              </div>
            </div>
            <div className="featureItem">
              <div className="featureImage">
                <img
                  className="fet"
                  src="https://www.annexorien.com/images/service/bulk-mailing.png"
                  alt=""
                />
              </div>
              <div className="featuretext">
                <h4>Mailing Service</h4>Get personalized mailing services for
                teachers you have subscribed
              </div>
            </div>
            <div className="featureItem">
              <div className="featureImage">
                <img
                  className="fet"
                  src="https://img.freepik.com/premium-vector/online-communication-senior-elderly-people-stay-home-quarantine-isolation_313242-921.jpg"
                  alt=""
                />
              </div>
              <div className="featuretext">
                <h4>Interactive and Easy</h4>Teach and learn with ease on our
                attractive and user-friendly website!
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hero;