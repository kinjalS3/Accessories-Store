import React, { useState } from "react";
import './contact.styles.scss';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="fname">Name:</label>
        <input type="text" id="fname" placeholder="Name" required />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
    </select>
      </div>
      <div>
        <label htmlFor="message">Message:<br></br></label>
        <textarea id="message" name="message" placeholder="Write something.." required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;