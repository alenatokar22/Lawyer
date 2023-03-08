import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5i2acbd",
      "template_h7t6h4h",
      form.current,
      "5RPmM1MQ7GH1_QBSj"
    );
    e.target.reset();
  };
  return (
    <div>
      <h2>Замовити послугу адвоката:</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Введіть Ваше им'я"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Введіть Ваш email"
          required
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Повідомлення"
          required
        ></textarea>
        <button type="submit" className="btn">
          Відправити
        </button>
      </form>
    </div>
  );
};

export default Contact;
