import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import science from "./images/science.png";
import aust from "./images/aust.png";
import kat from "./images/kat.png";

let data = [
  {
    img: `${science}`,
    disc: "Science and Mathematics made interactive",
    link: "https://science.fans",
  },
  {
    img: `${kat}`,
    disc: "Arabic Bible Study",
    link: "https://katameros.bible",
  },
  {
    img: `${aust}`,
    disc: "A digital consultancy",
    link: "https://sudoroux.com.au",
  },
  {
    img: `${science}`,
    disc: "Science and Mathematics made interactive",
    link: "https://science.fans",
  },
  {
    img: `${kat}`,
    disc: "Arabic Bible Study",
    link: "https://katameros.bible",
  },
  {
    img: `${aust}`,
    disc: "A digital consultancy",
    link: "https://sudoroux.com.au",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className="back"
          style={{ color: "#58d4f9", fontSize: "2rem" }}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className="next"
          style={{ color: "#58d4f9", fontSize: "2rem" }}
        >
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: #000000a1;
    cursor: pointer;
    color: ##58d4f9;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
