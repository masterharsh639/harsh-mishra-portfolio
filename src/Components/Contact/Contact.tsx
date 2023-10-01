import { Grid } from "@mui/material";
import contactImage from "../../assest/img1.svg";
import "./contact.css";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <Grid container className="contact-section">
      <Grid item xs={12} sm={12} md={12}>
        <p>
          <span className="f-36">Take As</span>{" "}
          <span className="green-text">Coffee</span>{" "}
          <span className="f-36">and</span>{" "}
          <span className="green-text">Chat</span>{" "}
          <span className="f-36">With Me</span>
        </p>
      </Grid>
      <Grid item xs={12} sm={12} md={12} className="contactForm-section">
        <Grid xs={12} sm={6} md={6}>
          <img src={contactImage} alt="contactImage" className="contactImage" />
        </Grid>
        <Grid container xs={12} sm={4} md={4} className="contactForm">
          <form>
            <Grid>
              <input
                className="input-feild"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                // onChange={handleChange}
                required
              />
            </Grid>
            <Grid>
              <input
                className="input-feild"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                // onChange={handleChange}
                required
              />
            </Grid>
            <Grid>
              <input
                className="input-feild"
                type="phone"
                id="phone"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                // onChange={handleChange}
                required
              />
            </Grid>
            <Grid>
              <textarea
                className="input-feild"
                id="message"
                name="message"
                placeholder="message"
                value={formData.message}
                // onChange={handleChange}
                required
              />
            </Grid>
            <Grid sm={4}>
              <button type="submit">Submit</button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <p>Designed and Build by Harsh Mishra , 2022 all right reserved</p>
      </Grid>
    </Grid>
  );
};

export default Contact;
