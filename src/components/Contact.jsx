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
                title: "Assessment Request Received!",
                text: "Thank you. Our team will review your request and contact you within 24 hours to schedule your Hospital Executive Assessment.",
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

        <span>HOSPITAL EXECUTIVE ASSESSMENT</span>

        <h2>
          Book a Hospital
          <br />
          Executive Assessment
        </h2>

        <p>
            Meet with our healthcare technology team to evaluate your
            hospital's recovery workflow, identify hidden revenue leakage,
            and receive AI-driven recommendations tailored to your organization.
            </p>

            <div className="assessment-box">
            <h3>Executive Assessment</h3>
            <h2>₹1,999</h2>
            <p> ✓ Credited 100% toward your Pilot or First Subscription.</p>
        </div>

        

        <div className="contact-info">
         <p>
            <FaPhoneAlt /> Available by Appointment
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
            placeholder="Tell us about your hospital, specialties, current HMS, and recovery challenges..."
            required
        ></textarea>

        <button type="submit">
            Book Hospital Executive Assessment
        </button>

      </form>

    </section>
  );
}

export default Contact;