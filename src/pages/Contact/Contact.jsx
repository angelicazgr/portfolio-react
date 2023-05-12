import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import lineArt from "../../assets/contact.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <NavBar />

      <div className="contact-form-container">
        <div className="contact-message">Let's talk</div>
        <form className="contact-form">
          <div className="contact-form-label">
            <label for="fname">First name</label>
          </div>
          <div>
            <input
              type="text"
              id="fname"
              name="fname"
              className="contact-form-input"
            />
          </div>

          <div className="contact-form-label">
            <label for="lname">Last name</label>
          </div>
          <div>
            <input
              type="text"
              id="lname"
              name="lname"
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-label">
            <label for="email">Email</label>
          </div>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              className="contact-form-input"
            />
          </div>
          <div className="contact-form-label">
            <label for="message">Message</label>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="contact-form-textarea"
            />
          </div>
          <input type="submit" value="Submit" className="contact-form-submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
