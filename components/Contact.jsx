import React from "react";
import Image from "next/image";
import imgDiv1 from "../assets/contact-div-1-img.png";
import imgDiv2 from "../assets/contact-div-2-img.png";
import instaLogo from "../assets/1.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
const { motion } = require("framer-motion");


const Contact = ({ contact }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 10 }}
      transition={{ duration: 0.7 }}
      className="contact-container container"
    >
      <div className="contact-div-1">
        <div className="contact-div-1-img">
          <Image width="300px" height="300px" src={imgDiv1} />
        </div>
        <div className="contact-div-1-text"> Contact </div>
      </div>

      <div className="contact-div-2">
        <Image width="350px" height="637px" src={imgDiv2} />
      </div>

      <div className="contact-div-3">
        <div className="contact-div-3-item">
          <div>
            {" "}
            <FmdGoodOutlinedIcon />{" "}
          </div>
          <div>
            <h3>Adresse</h3>
            <p>{contact.contactAdress}</p>
          </div>
        </div>
        <div className="contact-div-3-item">
          <div>
            {" "}
            <EmailOutlinedIcon />{" "}
          </div>
          <div>
            <h3>Email</h3>
            <p>{contact.contactMail}</p>
          </div>
        </div>
        <div className="contact-div-3-item">
          <div>
            {" "}
            <PhoneAndroidOutlinedIcon />{" "}
          </div>
          <div>
            <h3>Tél</h3>
            <p>{contact.contactNumber}</p>
          </div>
        </div>
        <div className="contact-div-3-item">
          <div>
            {" "}
            <Image width="20px" height="20px" src={instaLogo} />{" "}
          </div>
          <div>
            <p>@kamalsafar_</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
