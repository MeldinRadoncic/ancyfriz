import React, { useState } from "react";
import useForm from "../../../hooks/useForm";
import ReusableBanner from "../../ReusableBanner";
import Section from "../../Section";
import ThirdTitle from "../../Titles/ThirdTitle";
import Input from "../../Input";
import Button from "../../Button";
import Error from "../../Error";

function validate(values) {
  const errors = {};
  if (!values.name) errors.name = "Name is required.";
  if (!values.email) errors.email = "Email is required.";
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Invalid email address.";
  if (!values.phone) errors.phone = "Phone number is required.";
  if (!values.question) errors.question = "Please enter your question.";
  return errors;
}

function ContactPage() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "", phone: "", question: "" },
    validate
  );

  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setFormError("");
    try {
      console.log("Form Submitted:", data);
      alert("Thank you for contacting us! We will respond shortly.");
    } catch (err) {
      setFormError("Failed to submit the form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ReusableBanner
        title="Contact Us"
        subtitle="Have questions? We're here to help."
        background="bg-indigo-600"
      />
      <Section>
        <div className="w-full lg:w-1/2 lg:px-24 bg-neutral-gray mx-auto p-8 rounded-lg shadow-lg">
          <ThirdTitle title="Send us a message" className="text-center" />

          {loading && <div className="text-center"><p>Loading...</p></div>}
          {formError && <Error message={formError} className="mb-4 text-center" />}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />
             {errors.name && console.log(errors.name) && <Error message={errors.name} />}
            </div>

            {/* Email Field */}
            <div>
              <Input
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              {errors.email && <Error message={errors.email} />}
            </div>

            {/* Phone Field */}
            <div>
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                error={errors.phone}
              />
             {errors.phone && <Error message={errors.phone} />}
            </div>

            {/* Question Field */}
            <div>
              <label htmlFor="question" className="block font-medium text-gray-700">
                Question
              </label>
              <textarea
                name="question"
                id="question"
                rows="4"
                value={values.question}
                onChange={handleChange}
                className={`w-full mt-2 p-3 border ${
                  errors.question ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                  errors.question ? "focus:ring-red-500" : "focus:ring-indigo-500"
                }`}
              ></textarea>
              <Error message={errors.question} />
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
}

export default ContactPage;
