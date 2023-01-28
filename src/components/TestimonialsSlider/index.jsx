import React from "react";
import "./style.scss";
import { Carousel } from "react-responsive-carousel";

import avatar from "assets/images/testimonials-avatar.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestmonialsSlider = () => {
  const renderArrow =
    (direction) => (onClickHandler, shouldBeEnabled, label) => {
      if (!shouldBeEnabled) {
        return;
      }

      return direction == "next" ? (
        <button className="swipe-button right-arrow" onClick={onClickHandler}>
          <FaArrowRight />
        </button>
      ) : (
        <button
          className="swipe-button left-arrow"
          type="button"
          onClick={onClickHandler}
        >
          <FaArrowLeft />
        </button>
      );
    };
  return (
    <div className="slider">
      <Carousel
        autoPlay
        infiniteLoop
        // swipeable
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        // renderArrowPrev={renderArrow("prev")}
        renderArrowNext={renderArrow("next")}
      >
        <blockquote className="quote ">
          <h5>
            The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.
          </h5>
          <div className="profile">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <label className="name">Jenny Wilson</label>
              <br />
              <span className="title">Vice President</span>
            </div>
          </div>
        </blockquote>
        <blockquote className="quote ">
          <h5>
            The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.
          </h5>
          <div className="profile">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <label className="name">Jenny Wilson</label>
              <br />
              <span className="title">Vice President</span>
            </div>
          </div>
        </blockquote>
        <blockquote className="quote ">
          <h5>
            The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.
          </h5>
          <div className="profile">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <label className="name">Jenny Wilson</label>
              <br />
              <span className="title">Vice President</span>
            </div>
          </div>
        </blockquote>
        <blockquote className="quote ">
          <h5>
            The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.
          </h5>
          <div className="profile">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <label className="name">Jenny Wilson</label>
              <br />
              <span className="title">Vice President</span>
            </div>
          </div>
        </blockquote>
        <blockquote className="quote ">
          <h5>
            The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus.
          </h5>
          <div className="profile">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <label className="name">Jenny Wilson</label>
              <br />
              <span className="title">Vice President</span>
            </div>
          </div>
        </blockquote>
      </Carousel>
    </div>
  );
};

export default TestmonialsSlider;
