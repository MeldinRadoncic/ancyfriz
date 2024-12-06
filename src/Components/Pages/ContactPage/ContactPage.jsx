import React, { useState, useEffect } from "react";
import axios from "axios";

import useForm from "../../../hooks/useForm";
import ReusableBanner from "../../ReusableBanner";
import Section from "../../Section";
import ThirdTitle from "../../Titles/ThirdTitle";
import Input from "../../Input";
import Button from "../../Button";
import Error from "../../Error";
import validateFormFields from "../../../utils/validateFormFields";
import SocialMediaData from "../../../AppData/SocialMediaData";
import Meta from "../../Meta";

const ContactPage = () => {
  // Validation rules
  const validationRules = {
    name: [{ rule: "required", message: "Name is required." }],
    email: [
      { rule: "required", message: "Email is required." },
      { rule: "email", message: "Please enter a valid email address." },
    ],
    phone: [
      { rule: "required", message: "Phone number is required." },
      { rule: "pattern", message: "Only numeric values allowed.", pattern: /^[0-9]*$/ },
    ],
    question: [{ rule: "required", message: "Please enter your question." }],
  };

  const validate = (values) => validateFormFields(values, validationRules);

  // useForm hook for managing form state
  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", phone: "", question: "" },
    validate
  );

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const onSubmit = async () => {
          setLoading(true);
          setFormError("");
          try {
           const response = await axios.post('http://localhost:5000/api/send-email', values);
            if(!response.ok){
              setFormError('Something went wrong');
            }
            console.log('RESPONSE: ', response);
            setLoading(false);
          }catch(error){
            console.log('ERROR: ', error);
            setFormError('Something went wrong');
          }finally{
            setLoading(false);
          }
  };

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
              <p className="text-indigo-500 font-medium">Submitting your message...</p>
            </div>
          )}

          {/* General Form Error */}
          {/* {formError && (
            <Error
              message={formError}
              className="mb-4 text-center text-red-500"
            />
          )} */}

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
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
