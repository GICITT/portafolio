import React from "react";
import "./Contact.css";
import logo from "../../assets/logo-sn.png";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2ff16f58-6acd-4061-804c-fffd86f67313");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>{" "}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Contáctam</h1>
          <div className="contact-details">
            <div className="contact-detail">
              <MdOutlineMail className="contact-img" />{" "}
              <p>gisela.cittadini@gmail.com</p>
            </div>
            <div className="contact-detail">
              {" "}
              <MdOutlinePhoneInTalk className="contact-img" />{" "}
              <p>+54 9 11 3142-6767</p>
            </div>
            <div className="contact-detail">
              <SlLocationPin className="contact-img" />{" "}
              <p>San Martin, Buenos Aires, Argentina</p>.
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=""> Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"></input>
          <label htmlFor=""> Your Email</label>
          <input
            type="text"
            placeholder="Enter your name"
            email="email"
          ></input>
          <label htmlFor=""> White yor menssage here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your menssager"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}
