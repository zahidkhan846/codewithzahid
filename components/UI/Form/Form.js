import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, message }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <section className={styles.formContainer}>
      <div className={styles.heading}>
        <h1 className="text-center">Contact Me</h1>
        <div className="underline"></div>
      </div>
      <article className={styles.form}>
        <form onSubmit={handleSubmit}>
          <h2>Say Hello...</h2>
          <div className={styles.formControl}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.btn}>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Form;
