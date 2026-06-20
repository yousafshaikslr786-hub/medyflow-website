import "../styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Swal from "sweetalert2";


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
            "service_9kzdyta",
            "template_6dvtho9",
            form.current,
            "5Cdej1cNA0yCtSDVL"
            )
            .then(() => {
            Swal.fire({
                icon: "success",
                title: "Demo Request Sent!",
                text: "Our team will contact you within 24 hours.",
                confirmButtonColor: "#11B5AE",
            });
            form.current.reset();
            })
            .catch((err) => {
            console.log(err);
            alert("Failed to send.");
        });
    };

  return (
    <section
      className="contact"
      id="contact"
      data-aos="fade-up"
    >

      <div className="contact-left">

        <span>BOOK A DEMO</span>

        <h2>
          See MedYFlow AI
          <br />
          In Action
        </h2>

        <p>
          Schedule a personalized demo and discover how MedYFlow AI
          helps hospitals recover revenue, reduce missed follow-ups
          and improve patient care.
        </p>

        <div className="contact-info">
         <p>
            <FaPhoneAlt /> Available on Demo Request
            </p>

            <p>
            <FaEnvelope /> hello@medyflow.ai
            </p>

            <p>
            <FaMapMarkerAlt /> Visakhapatnam, India
            </p>
        </div>

      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="hospital_name"
          placeholder="Hospital Name"
          required
        />

        <input
            type="text"
            name="contact_person"
            placeholder="Contact Person"
            required
        />

        <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
        />

        <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
        />

        <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your hospital..."
            required
        ></textarea>

        <button type="submit">
            Schedule Free Demo
        </button>

      </form>

    </section>
  );
}

export default Contact;