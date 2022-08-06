import React from "react";
import Layout from "../../components/Layout/layout";
import "./homepage.css";

const HomePage = (props) => {
  return (
    <Layout>
      <div>
        <div className="home-container-top">
          <div className="home-container-mockup">
            <img
              className="home-mockup"
              src="https://source.unsplash.com/collection/190727/1600x900"
              alt=""
            />
            <div className="home-container-mockup-text">
              <h1 className="home-mockup-heading">Marketing that drives e‑commerce success</h1>
              <p className="home-mockup-subheading">
                Whether you’re getting online for the first time or scaling, Mailchimp has tools and
                insights to help you sell more stuff.
              </p>
            </div>
          </div>
        </div>
        <div className="home-container-grow-together">
          <img
            className="home-gt-mockup"
            src="https://source.unsplash.com/collection/180253/1600x900"
            alt=""
          />
          <div className="text-container">
            <h1 className="home-gt-heading">Our Public Platform</h1>
            <p className="home-gt-text">
              Where Students/Faculty can gain, learn, share their knowledge.
            </p>
          </div>
        </div>
        <div className="home-container-flowing-conversations">
          <img
            className="home-fc-mockup"
            src="https://source.unsplash.com/collection/190548/1600x900"
            alt=""
          />
          <div className="text-container">
            <h1 className="home-fc-heading">Keep community at our center</h1>
            <p className="home-fc-text">
              Community is at the heart of everything we do. Nurture healthy communities where
              everyone is encouraged to learn and give back.
            </p>
          </div>
        </div>
        <div className="home-container-your-users">
          <img
            className="home-yu-mockup"
            src="https://source.unsplash.com/collection/190728/1600x900"
            alt=""
          />
          <div className="text-container">
            <h1 className="home-yu-heading">Our Users</h1>
            <p className="home-yu-text">
              Once signed in to our app, users can start posting immediately.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
