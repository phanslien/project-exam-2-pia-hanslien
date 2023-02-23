import { useState } from "react";
import { ContactFormURL } from "../../constants/API";
import styles from "./Contact.module.css";
import HeadingLarge from "../../components/elements/heading/HeadingLarge";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "./Error";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name").min(3),
  lastName: yup.string().required("Please enter your first name").min(3),
  email: yup.string().required("please enter an valid email address").email("please enter an valid email address"),
  message: yup.string().required("Please enter your first name").min(3),
})

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
});

function onSubmit(data) {
}

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setEmail] = useState("");
  const [messageText, setMessage] = useState("");
  const [error, setError] = useState("");

  

  function addForm(e) {


    e.preventDefault();
    let FirstName = firstName;
    let LastName = lastName;
    let email = mail;
    let message = messageText;

    let body = {
      data: {
        FirstName,
        LastName,
        email,
        message,
      },
    };

    fetch(ContactFormURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(body),
    }).then(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    });
  }


  return (
    <div onSubmit={addForm}>
<form  onSubmit={handleSubmit(onSubmit)} >
      <div className={styles.container_contact}>
        <HeadingLarge headingLarge="Contact us" />
        <div className={styles.container_contact_form}>
          <p>First name:</p> 
          <input
          {...register("firstName")}
            className={styles.container_form__input}
            type="text"
            placeholder="Nora"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
          {errors.firstName && <ValidationError>{errors.firstName.message}</ValidationError>}
          <p>Last name:</p>
          <input
          {...register("lastName")}
            className={styles.container_form__input}
            type="text"
            placeholder="Norman"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
           {errors.lastName && <ValidationError>{errors.lastName.message}</ValidationError>}

          <p>E-mail:</p>
          <input
             {...register("email")}
            className={styles.container_form__input}
            type="text"
            placeholder="Nora@norman.com"
            value={mail}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
           {errors.email && <ValidationError>{errors.email.message}</ValidationError>}

          <p>Message:</p>
          <textarea
           {...register("message")}
            className={styles.container_form__messageInput}
            type="text"
            placeholder="Enter your message"
            value={messageText}
            onChange={(e) => setMessage(e.currentTarget.value)}
          ></textarea>
           {errors.message && <ValidationError>{errors.message.message}</ValidationError>}

          <ButtonPrimary
            buttonPrimary="Submit"
            type="submit"
          />
        </div>
      </div>
    </form>
    </div>

  );
}
export default Contact;
