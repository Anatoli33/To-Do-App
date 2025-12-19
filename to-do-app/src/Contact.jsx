import "./contact.css";

const Contact = () => {
  return (
    <section>
      <h1>Contact Us</h1>

      {/* Firm information */}
      <section>
        <h2>Company Information</h2>
        <p>
          <strong>Phone:</strong> +359 88 123 4567
        </p>
        <p>
          <strong>Email:</strong> info@company.com
        </p>
        <p>
          <strong>Address:</strong> 12 Main Street, Sofia, Bulgaria
        </p>
      </section>

      {/* Contact form */}
      <section>
        <h2>Send us a message</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" />
          </div>

          <div>
            <label>Message</label>
            <textarea rows="5"></textarea>
          </div>

          <button type="submit">Send</button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
