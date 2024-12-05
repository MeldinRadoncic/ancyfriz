export default function validateFormFields(values, rules) {
  const errors = {};

  for (const [field, validations] of Object.entries(rules)) {
    const value = values[field];

    validations.forEach((validation) => {
      const { rule, message, pattern } = validation;

      if (!errors[field]) {
        if (rule === "required" && !value) {
          errors[field] = message || `${field} is required.`;
        } else if (rule === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
          errors[field] = message || "Invalid email address.";
        } else if (rule === "pattern" && value && !pattern.test(value)) {
          errors[field] = message || `${field} is invalid.`;
        }
      }
    });
  }

  return errors;
}
