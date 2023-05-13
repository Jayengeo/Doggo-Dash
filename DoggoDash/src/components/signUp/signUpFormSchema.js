import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


export const advancedSchema = yup.object().shape({
  province: yup
    .string()
    .oneOf(
      ["dogOwner", "dogSitter"],
      "select User Type"
    )
    .required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  streetAddress: yup.string().required("Required"),
  city: yup.string().required("Required"),
  postalCode: yup.string().required("Required"),
  province: yup
    .string()
    .oneOf(
      ["ON", "QC", "NS", "NB", "MB", "PEI", "SK", "AB", "NL"],
      "select province"
    )
    .required("Required"),
  email: yup.string().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});