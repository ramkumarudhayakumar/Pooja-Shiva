import React, { Fragment, useState, useRef } from "react";
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
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import translate from "../translate/translate.json";

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
  const [headingTrans, setHeadingTrans] = useState(
    "Rameshwaram is significant in many ways for Hindus as a pilgrimage to Varanasi should be started after visiting Rameswaram only and by taking the holy sand."
  );
  const [aboutTrans, setAboutTrans] = useState(
    `<b>Sharma Sankara Narayanan</b> is also well known as <b>Babaji</b>. He speaks <b>Tamil, Hindi, Telugu</b> and <b>Gujarathi</b>. Swami Sankara Narayanan alias Babaji performs the following poojas`
  );
  const [aboutLi1Trans, setAboutLi1Trans] = useState(
    "Sarpashanthi Pooja in Rameswaram"
  );
  const [aboutLi2Trans, setAboutLi2Trans] = useState(
    "Nagaprathistai Pooja in Rameswaram"
  );
  const [aboutLi3Trans, setAboutLi3Trans] = useState(
    "Pithiruhomam (Thilahomam) in Rameswaram"
  );
  const [aboutLi4Trans, setAboutLi4Trans] = useState(
    "Thithi (Pindaprathanam/Pindathanam/Srartham) Pooja in Rameswaram"
  );
  const [aboutLi5Trans, setAboutLi5Trans] = useState(
    "Puthrakamsti Yagam (Santhanagopalakrishna) Pooja in Rameswaram This Kshetra Prohit is located at Rameswaram."
  );
  const [servicesSubHeading, setServicesSubHeading] = useState({
    servicesSubHeading1: "SARPASHANTHI",
    servicesSubHeading2: "PITHIRUHOMAM",
    servicesSubHeading3: "THITHI",
    servicesSubHeading4: "NAGAPRATHISTAI",
    servicesSubHeading5: "PUTHRAKAMSTI YAGAM",
  });
  const [servicesContent, setServicesContent] = useState({
    servicesContent1:
      "Sarpapooja is done to clear the nagadosha difficulties of life.",
    servicesContent2:
      "Thila homam means homam which is done using Sesame seeds.",
    servicesContent3: "Karma is the essence of what the Pitras intend to do.",
    servicesContent4:
      "Naga Pratishta Puja is already existing snake god’s idols in temples.",
    servicesContent5:
      "Santhana Gopala Homam is done for Lord Krishna in the form of a child.",
  });
  const [footerContent, setFooterContent] = useState({
    footerAboutContent:
      "We know that honesty and transparency, coupled with reliable and friendly customer service, is what really builds customer trust.",
    footerPromotion: "Designed and Developed by deecoders Copyrights2024",
    footerButton: "Get In Touch",
  });

  return (
    <Fragment>
      <Header
        setHeadingTrans={setHeadingTrans}
        setAboutTrans={setAboutTrans}
        setAboutLi1Trans={setAboutLi1Trans}
        setAboutLi2Trans={setAboutLi2Trans}
        setAboutLi3Trans={setAboutLi3Trans}
        setAboutLi4Trans={setAboutLi4Trans}
        setAboutLi5Trans={setAboutLi5Trans}
        setServicesSubHeading={setServicesSubHeading}
        setServicesContent={setServicesContent}
        setFooterContent={setFooterContent}
      />
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
              <p>{headingTrans}</p>
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
      <About
        aboutTrans={aboutTrans}
        aboutLi1Trans={aboutLi1Trans}
        aboutLi2Trans={aboutLi2Trans}
        aboutLi3Trans={aboutLi3Trans}
        aboutLi4Trans={aboutLi4Trans}
        aboutLi5Trans={aboutLi5Trans}
      />
      <Services
        servicesSubHeading={servicesSubHeading}
        servicesContent={servicesContent}
      />
      <Contact />
      <Gallery />
      <Footer footerContent={footerContent} />
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

function About({
  aboutTrans,
  aboutLi1Trans,
  aboutLi2Trans,
  aboutLi3Trans,
  aboutLi4Trans,
  aboutLi5Trans,
}) {
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
                <h5 dangerouslySetInnerHTML={{ __html: aboutTrans }} />

                <ul>
                  <li>{aboutLi1Trans}</li>
                  <li>{aboutLi2Trans}</li>
                  <li>{aboutLi3Trans}</li>
                  <li>{aboutLi4Trans}</li>
                  <li>{aboutLi5Trans}</li>
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
function Services({ servicesSubHeading, servicesContent }) {
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
                <h5 className="servive-colums-h5">
                  {servicesSubHeading.servicesSubHeading1}
                </h5>
                <p className="servive-colums-p">
                  {servicesContent.servicesContent1}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="servive-colums-h5">
                  {servicesSubHeading.servicesSubHeading2}
                </h5>
                <p className="servive-colums-p">
                  {servicesContent.servicesContent2}
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
                <h5 className="servive-colums-h5">
                  {servicesSubHeading.servicesSubHeading3}
                </h5>
                <p className="servive-colums-p">
                  {servicesContent.servicesContent3}
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
                <h5 className="servive-colums-h5">
                  {servicesSubHeading.servicesSubHeading4}
                </h5>
                <p className="servive-colums-p">
                  {servicesContent.servicesContent4}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="servive-colums-h5">
                  {servicesSubHeading.servicesSubHeading5}
                </h5>
                <p className="servive-colums-p">
                  {servicesContent.servicesContent5}
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
  const form = useRef();
  const [inputValue, setInputValue] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  function formValueChangeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gwxyyqh", "template_6f7cu1p", form.current, {
        publicKey: "ls8y1GWDZYXwvIJ9B",
      })
      .then(
        () => {
          toast.success("Sent Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          e.target.reset();
          setInputValue({
            Name: "",
            PhoneNumber: "",
            Email: "",
            Subject: "",
            Message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed To Sent!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

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
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-name">
              <div className="form-floating">
                <input
                  type="text"
                  value={inputValue.Name}
                  name="Name"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                  required
                  onChange={formValueChangeHandler}
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
                  value={inputValue.PhoneNumber}
                  name="PhoneNumber"
                  className="form-control"
                  id="Number"
                  placeholder="Mobile Number"
                  required
                  onChange={formValueChangeHandler}
                />
                <label htmlFor="Number">Mobile Number</label>
              </div>
            </div>
            <div className="form-email">
              <div className="form-floating">
                <input
                  type="email"
                  value={inputValue.Email}
                  name="Email"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  required
                  onChange={formValueChangeHandler}
                />
                <label htmlFor="Email">Email</label>
              </div>
            </div>
            <div className="form-subject">
              <div className="form-floating">
                <input
                  type="text"
                  value={inputValue.Subject}
                  name="Subject"
                  className="form-control"
                  id="Subject"
                  placeholder="Subject"
                  required
                  onChange={formValueChangeHandler}
                />
                <label htmlFor="Subject">Subject</label>
              </div>
            </div>
            <div className="form-textarea">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  value={inputValue.Message}
                  name="Message"
                  placeholder="Enter Your Message Here"
                  id="Message"
                  onChange={formValueChangeHandler}
                ></textarea>
                <label htmlFor="Message">Message</label>
              </div>
            </div>
            <button type="submit" className="btn form-btn">
              Send
            </button>
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
const galleryCardChildVariants = {
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
          <div className="col-6 col-sm-4 gallery-col1">
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
          <motion.div
            className="col-6 col-sm-4 gallery-col2"
            variants={galleryCardChildVariants}
          >
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
          </motion.div>
          <div className="col-6 col-sm-4 gallery-col3">
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
          <div className="col-6 col-sm-4 gallery-col4">
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
          <div className="col-6 col-sm-4 gallery-col5">
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
          <div className="col-6 col-sm-4 gallery-col6">
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
          <div className="col-6 col-sm-4 gallery-col7">
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
          <div className="col-6 col-sm-4 gallery-col8">
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
          <div className="col-12 col-sm-4 gallery-col9">
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
