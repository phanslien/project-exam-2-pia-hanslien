import { useState } from "react";
import { EnquiryFormUrl } from "../../constants/API";
import styles from "./Enquiry.module.css";
import HeadingLarge from "../../components/elements/heading/HeadingLarge";
import ButtonPrimary from "../../components/elements/button/ButtonPrimary";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../contact/Error";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name").min(3),
  lastName: yup.string().required("Please enter your first name").min(3),
  email: yup
    .string()
    .required("please enter an valid email address")
    .email("please enter an valid email address"),
  stays: yup.number().required("Please enter your first name").min(1),
  people: yup.number().required("Please enter your first name").min(1),
  date: yup.number().required("Please enter your first name").min(1),
});

function Enquiry() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {}

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setEmail] = useState("");
  const [stays, setStays] = useState();
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");

  function addForm(e) {
    e.preventDefault();
    let FirstName = firstName;
    let LastName = lastName;
    let Email = mail;
    let Date = date;
    let Stays = stays;
    let People = people;

    let body = {
      data: {
        FirstName,
        LastName,
        Email,
        Stays,
        Date,
        People,
      },
    };

    fetch(EnquiryFormUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(body),
    }).then(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setStays("");
      setDate("");
      setPeople("");
    });
  }

  return (
    <div onSubmit={addForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container_enquiries}>
          <HeadingLarge headingLarge="Contact us" />
          <div>
            <p>First name:</p>
            <input
              {...register("firstName")}
              className={styles.container_form__input}
              type="text"
              placeholder="Nora"
              value={firstName}
              onChange={(e) => setFirstName(e.currentTarget.value)}
            />
            {errors.firstName && (
              <ValidationError>{errors.firstName.message}</ValidationError>
            )}
            <p>Last name:</p>
            <input
              {...register("lastName")}
              className={styles.container_form__input}
              type="text"
              placeholder="Norman"
              value={lastName}
              onChange={(e) => setLastName(e.currentTarget.value)}
            />
            {errors.lastName && (
              <ValidationError>{errors.lastName.message}</ValidationError>
            )}

            <p>E-mail:</p>
            <input
              {...register("email")}
              className={styles.container_form__input}
              type="text"
              placeholder="Nora@norman.com"
              value={mail}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {errors.email && (
              <ValidationError>{errors.email.message}</ValidationError>
            )}
            <p>Nights:</p>
            <input
              {...register("stays")}
              className={styles.container_form__input}
              type="number"
              placeholder="Nora"
              value={stays}
              onChange={(e) => setStays(e.currentTarget.value)}
            />
            {errors.stays && (
              <ValidationError>{errors.stays.message}</ValidationError>
            )}
            <p>Nights:</p>
            <input
              {...register("people")}
              className={styles.container_form__input}
              type="number"
              placeholder="Nora"
              value={people}
              onChange={(e) => setPeople(e.currentTarget.value)}
            />
            {errors.firstName && (
              <ValidationError>{errors.firstName.message}</ValidationError>
            )}
            <p>Date:</p>
            <input
              {...register("date")}
              className={styles.container_form__input}
              type="date"
              placeholder="Nora"
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
            />
            {errors.firstName && (
              <ValidationError>{errors.firstName.message}</ValidationError>
            )}
            <ButtonPrimary buttonPrimary="Submit" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Enquiry;