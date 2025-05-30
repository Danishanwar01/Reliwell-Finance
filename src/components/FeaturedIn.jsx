import React from 'react';
import '../styles/Featuredin.css';

const Featurein = () => {
  // Note: the same sequence of <img> tags is duplicated twice,
  // to create a seamless infinite‐scroll marquee.
  return (
    <div className="featurein-root">
      <p className="featurein-title">Featured In</p>
      <div className="featurein-marquee-wrapper">
        <div
          className="featurein-marquee"
          style={{
            '--duration': '15s',
            '--iteration-count': 'infinite',
            '--direction': 'normal',
          }}
        >
          {/* First copy of logos */}
          <div className="featurein-logo-row">
            <img
              src={require("../assets/images/fe1.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe2.png")}
              width="120"
              alt=""
            />
            <img
              src={require("../assets/images/fe3.png")}
              width="120"
              alt=""
            />
            <img
              src={require("../assets/images/fe4.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe5.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe6.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe7.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe8.png")}
              width="120"
              alt=""
            />
            <img
              src={require("../assets/images/fe9.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe10.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe11.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe12.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe13.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe14.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe15.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe16.png")}
              width="120"
              alt=""
            />
          </div>
          {/* Second copy of logos (for seamless loop) */}
          <div className="featurein-logo-row">
            <img
               src={require("../assets/images/fe1.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe2.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe3.png")}
              width="120"
              alt=""
            />
            <img
              src={require("../assets/images/fe4.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe5.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe6.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe7.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe8.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe9.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe10.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe11.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe12.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe13.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe14.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe15.png")}
              width="120"
              alt=""
            />
            <img
               src={require("../assets/images/fe16.png")}
              width="120"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurein;
