import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import { AiFillEdit } from "react-icons/ai";

let clients = [
  {
    skill: "Designer",
    disc1:
      "I value simple content structure, clean design patterns, and thoughtful interactions.",
    disc2: `Things I enjoy designing: UX, UI, Web, Apps`,
    disc3: `Design Tools: Affinity Designer, Figma, Font Awesome, Pen & Paper, Sketch, Webflow`,
  },
  {
    skill: "Front-end Developer",
    disc1:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    disc2: `Languages I speak: HTML, CSS, JavaScript, Node.js`,
    disc3: `Dev Tools: MERN stac, Web API experience, React Redux, Express JS, MongoDB databases, Firebase, Bootstrap, GIT, Familiar with Angular framework -`,
  },
  {
    skill: "Back-end Developer",
    disc1:
      "Create, code, and improve the server, server-side applications, and databases.",
    disc2: `Creating websites from scratch using Node.js -Express framework.`,
    disc3: `Managed and maintained Front End Web Development for many sites.`,
  },
  {
    skill: "Designer",
    disc1:
      "I value simple content structure, clean design patterns, and thoughtful interactions.",
    disc2: `Things I enjoy designing: UX, UI, Web, Apps`,
    disc3: `Design Tools: Affinity Designer, Figma, Font Awesome, Pen & Paper, Sketch, Webflow`,
  },
  ,
  {
    skill: "Front-end Developer",
    disc1:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    disc2: `Languages I speak: HTML, CSS, JavaScript, Node.js`,
    disc3: `Dev Tools:Firebase, Bootstrap, GIT`,
  },
  {
    skill: "Back-end Developer",
    disc1:
      "Create, code, and improve the server, server-side applications, and databases.",
    disc2: `Creating websites from scratch using Node.js -Express framework.`,
    disc3: `Managed and maintained Front End Web Development for many sites.`,
  },
  {
    skill: "MERN stack developer",
    disc1: "MongoDB, Express, ReactReact Redux,Web API experience, and Node.",
    disc3: `Familiar with Angular framework`,
  },
];
var settings = {
  dots: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green" style={{ marginLeft: "2%" }}>
          Experience and Skills
        </span>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #58d4f9;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #58d4f9;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
