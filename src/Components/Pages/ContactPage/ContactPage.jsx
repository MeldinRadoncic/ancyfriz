import React, { useState } from "react";
import axios from "axios";

import useForm from "../../../hooks/useForm";
import ReusableBanner from "../../ReusableBanner";
import Section from "../../Section";
import ThirdTitle from "../../Titles/ThirdTitle";
import Input from "../../Input";
import Button from "../../Button";
import Loading from "../../Loading";
import validateFormFields from "../../../utils/validateFormFields";
import SocialMediaData from "../../../AppData/SocialMediaData";
import Meta from "../../Meta";

const ContactPage = () => {
  // Validation rules
  const validationRules = {
    name: [{ rule: "required", message: "Ime je obavezno" }],
    email: [
      { rule: "required", message: "Email je obavezan" },
      { rule: "email", message: "Molimo vas ukucajte validan email" },
    ],
    phone: [
      { rule: "required", message: "Broj telefona je obavezan" },
      { rule: "pattern", message: "Samo samo su brojevi dozvoljeni", pattern: /^[0-9]*$/ },
    ],
    question: [{ rule: "required", message: "Molimo vas ukucajete vase pitanje." }],
  };

  const validate = (values) => validateFormFields(values, validationRules);

  // useForm hook for managing form state
  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", phone: "", question: "" },
    validate
  );

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    setFormError("");
    try {
      const response = await axios.post('http://localhost:5000/api/send-email', values);
      if (!response.ok) {
        setFormError(true);
      }
      setSuccess(true);
      values.name = "";
      values.email = "";
      values.phone = "";
      values.question = "";
    } catch (error) {
      console.log('ERROR: ', error);
      setFormError(true);
      setSuccess(false);
      console.error(error);
    } finally {
      setFormError(false);
      setLoading(false);
    }
  };

  const isFormValid = values.name && values.email && values.phone && values.question && !loading;

  return (
    <>
      <Meta
        title="Kontaktirajte nas"
        description="Imate pitanja? Mi smo ovdje da pomognemo."
      />
      {/* Banner */}
      <ReusableBanner
        title="Contact Us"
        description="Have questions? We're here to help."
        background="bg-indigo-600"
      />

      {/* Social Media Section */}
      <div className="flex justify-center space-x-4 py-4">
        {SocialMediaData.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className=" text-primary-charcoal hover:text-accent-rose-gold transition-transform transform hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Contact Form Section */}
      <Section>
        <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md">
          <ThirdTitle title="Send us a message" className="text-center mb-4" />

          {/* Loading State */}
          {loading && (
            <div className="text-center mb-4">
              <Loading />
              <p className="text-indigo-500 font-medium">Submitting your message...</p>
            </div>
          )}

          {/* General Form Error */}
          {formError ? (
            <div className="mb-4 text-center text-red-500">
              <p className='paragraph text-red-500'>Ups, Doslo je do greške, Pokušajte ponovo</p>
            </div>
            ) : null}

          {/* Success Message */}
          {success && (
            <div className="mb-4 text-center text-green-500">
              <p className='paragraph text-green-500'>Uspješno ste poslali poruku</p>
            </div>
          )}



          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <Input
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />

            {/* Email Input */}
            <Input
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Phone Number Input */}
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                handleChange({ target: { name: "phone", value } });
              }}
              error={errors.phone}
            />

            {/* Question Textarea */}
            <div>
              <label
                htmlFor="question"
                className="block text-gray-700 font-medium"
              >
                Question
              </label>
              <textarea
                name="question"
                id="question"
                rows="4"
                value={values.question}
                onChange={handleChange}
                className={`w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none ${
                  errors.question
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                }`}
                aria-invalid={errors.question ? "true" : "false"}
              ></textarea>
              {errors.question && (
                <p className="mt-1 text-sm text-red-500">{errors.question}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
            type="submit"
            title='Pošalji'
            disabled={!isFormValid}
            className='w-full mt-4 bg-button-yellow text-primary-charcoal'
            />
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
  Slanjem ovog obrasca slažete se s našom{" "}
  <a href="/privacy-policy" className="text-blue-500 underline">
    politikom privatnosti
  </a>.
</p>

        </div>
      </Section>
    </>
  );
};

export default ContactPage;
