import React, { Fragment } from "react";
import "./Home.css";
import BgParticles from "./particles/BgParticles";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Location from "../animation/Location.json";
import Phone from "../animation/Phone.json";
import Email from "../animation/Email.json";
import { FlipTilt } from "react-flip-tilt";
import Gallery1 from "../Assets/gallery/gallerypic1.jpeg";
import Footer from "../components/Footer";
import Hanuman from "../animation/Hanuman.json";
import Sivan from "../animation/Sivan.json";

const h1Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    x: -10,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
};

export default function Home() {
  const heading = "This is";
  const heading2 = "Shivakumar";
  return (
    <Fragment>
      <main id="home">
        <BgParticles />
        <div className="home">
          {/* <span className="cube cube1"></span>
        <span className="cube cube2"></span>
        <span className="cube cube3"></span>
        <span className="cube cube4"></span>
        <span className="cube cube5"></span>
        <span className="cube cube6"></span> */}

          <div className=" home-col1">
            <div>
              <div className="d-flex gap-1 heading-div">
                {heading.split("").map((head, index) => {
                  return head === " " ? (
                    <h1 key={index}>&nbsp;</h1>
                  ) : (
                    <motion.h1
                      className="fw-bold home-col-h1 heading-div-h11"
                      key={index}
                      variants={h1Variants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        type: "spring",
                        duration: 2,
                        delay: index * 0.1,
                        stiffness: 120,
                      }}
                    >
                      {head}
                    </motion.h1>
                  );
                })}
              </div>
              <div className="d-flex gap-1 heading-div">
                {heading2.split("").map((head, index) => {
                  return head === " " ? (
                    <h1 key={index}>&nbsp;</h1>
                  ) : (
                    <motion.h1
                      className="fw-bold home-col-h1"
                      key={index}
                      variants={h1Variants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        type: "spring",
                        duration: 2,
                        delay: index * 0.1,
                        stiffness: 120,
                      }}
                    >
                      {head}
                    </motion.h1>
                  );
                })}
              </div>
              <p>
                Rameshwaram is significant in many ways for Hindus as a
                pilgrimage to Varanasi should be started after visiting
                Rameswaram only and by taking the holy sand.
              </p>
              {/* <span className="home-col1-span"></span> */}
            </div>
          </div>
          <div className="home-col2">
            <div className="card home-col2-card">
              <img src="" className="card-img" alt="" />
            </div>
          </div>
        </div>
      </main>
      <About />
      <Services />
      <Contact />
      <Gallery />
      <Footer />
    </Fragment>
  );
}

const aboutCol2Variants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};

function About() {
  return (
    <section className="About-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-6 About-col1">
            <div className="Sivan-Ani">
              <Lottie
                animationData={Sivan}
                loop={true}
                className="Sivan-lottie-Ani"
              />
            </div>
          </div>
          <motion.div
            className="col-12 col-sm-12 col-md-8 col-lg-6 About-col2"
            variants={aboutCol2Variants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="card">
              <div className="card-body">
                <h1>Welcome to RAMESHWARAM POOJA</h1>
                <h5>
                  <b> Sharma Sankara Narayanan</b> is also well known as Babaji.
                  He speaks <b>Tamil, Hindi, Telugu and Gujarathi</b>. Swami
                  Sankara Narayanan alias Babaji performs the following poojas
                </h5>
                <ul>
                  <li>Sarpashanthi Pooja in Rameswaram</li>
                  <li>Nagaprathistai Pooja in Rameswaram</li>
                  <li>Pithiruhomam (Thilahomam) in Rameswaram</li>
                  <li>
                    Thithi (Pindaprathanam/Pindathanam/Srartham) Pooja in
                    Rameswaram
                  </li>
                  <li>
                    Puthrakamsti Yagam (Santhanagopalakrishna) Pooja in
                    Rameswaram This Kshetra Prohit is located at Rameswaram.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
const HeadingVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
};
const serviveRightVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};
const serviveCenterVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};
const serviveLeftVariants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};
function Services() {
  return (
    <section className="Services-section" id="services">
      <div className="Hanuman-Ani">
        <Lottie
          animationData={Hanuman}
          loop={true}
          className="Hanuman-lottie-Ani"
        />
      </div>
      <div className="container">
        <motion.h1
          className="text-center"
          variants={HeadingVariants}
          initial="hidden"
          whileInView="visible"
        >
          OUR BEST SERVICES
        </motion.h1>
        <div className="services-row">
          <motion.div
            className="services-col1"
            variants={serviveLeftVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="servive-colums-h5">SARPASHANTHI</h5>
                <p className="servive-colums-p">
                  Sarpapooja is done to clear the nagadosha difficulties of
                  life.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="servive-colums-h5">PITHIRUHOMAM</h5>
                <p className="servive-colums-p">
                  Thila homam means homam which is done using Sesame seeds.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="services-col2"
            variants={serviveCenterVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="servive-colums-h5">THITHI</h5>
                <p className="servive-colums-p">
                  Karma is the essence of what the Pitras intend to do.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="services-col3"
            variants={serviveRightVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="card">
              <div className="card-body">
                <h5 className="servive-colums-h5">NAGAPRATHISTAI</h5>
                <p className="servive-colums-p">
                  Naga Pratishta Puja is already existing snake god’s idols in
                  temples.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="servive-colums-h5">PUTHRAKAMSTI YAGAM</h5>
                <p className="servive-colums-p">
                  Santhana Gopala Homam is done for Lord Krishna in the form of
                  a child.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="Contact-section" id="contact">
      <motion.h1
        className="text-center"
        variants={HeadingVariants}
        initial="hidden"
        whileInView="visible"
      >
        CONTACT US
      </motion.h1>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 contact-col1">
          <h2 className="">Get In Touch</h2>
          <div className="getintouch-Parent">
            <div className="getintouch-Parent-subdiv1">
              <div className="Location-Ani">
                <Lottie
                  animationData={Location}
                  loop={true}
                  className="Location-lottie-Ani"
                />
              </div>
              <div className="Phone-Ani">
                <Lottie
                  animationData={Phone}
                  loop={true}
                  className="Phone-lottie-Ani"
                />
              </div>
              <div className="Email-Ani">
                <Lottie
                  animationData={Email}
                  loop={true}
                  className="Email-lottie-Ani"
                />
              </div>
            </div>
            <div className="getintouch-Parent-subdiv2">
              <div className="getInTouch-locationdiv">
                <div className="Location-content">
                  <h5>ADDRESS:</h5>
                  <p>21/81, VTPM Street, Rameswaram – 623 526.</p>
                </div>
              </div>
              <div className="getInTouch-Phonediv">
                <div className="Location-content">
                  <h5 className="">CALL US:</h5>
                  <p>
                    96778 21794, <br /> 98652 71648
                  </p>
                </div>
              </div>
              <div className="getInTouch-Emaildiv">
                <div className="Location-content">
                  <h5>EMAIL:</h5>
                  <p>baba441971@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-8 contact-col2">
          <form>
            <div className="form-name">
              <div className="form-floating">
                <input
                  type="text"
                  name="Name"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                />
                <label htmlFor="Name" className="label">
                  Name
                </label>
              </div>
            </div>
            <div className="form-number">
              <div className="form-floating">
                <input
                  type="number"
                  name="PhoneNumber"
                  className="form-control"
                  id="Number"
                  placeholder="Mobile Number"
                />
                <label htmlFor="Number">Mobile Number</label>
              </div>
            </div>
            <div className="form-email">
              <div className="form-floating">
                <input
                  type="email"
                  name="Email"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                />
                <label htmlFor="Email">Email</label>
              </div>
            </div>
            <div className="form-subject">
              <div className="form-floating">
                <input
                  type="text"
                  name="Subject"
                  className="form-control"
                  id="Subject"
                  placeholder="Subject"
                />
                <label htmlFor="Subject">Subject</label>
              </div>
            </div>
            <div className="form-textarea">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  name="Message"
                  placeholder="Enter Your Message Here"
                  id="Message"
                ></textarea>
                <label htmlFor="Message">Message</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
const galleryCardVariants = {
  hidden: {
    opacity: 0.8,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};
function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <motion.h1
          className="text-center"
          variants={HeadingVariants}
          initial="hidden"
          whileInView="visible"
        >
          GALLERY
        </motion.h1>
        <motion.div
          className="row gallery-row"
          variants={galleryCardVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="col-4 gallery-col1">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col2">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col3">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col4">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col5">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col6">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col7">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col8">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
          <div className="col-4 gallery-col9">
            <FlipTilt
              front={Gallery1}
              back={
                <div className="Flip-Content">
                  <h1 className="text-center">Content Here About This Image</h1>
                </div>
              }
              className="Gallery-card"
              stiffness="50"
              borderWidth="0px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
