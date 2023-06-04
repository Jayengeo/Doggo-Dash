import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


export const userSignUP = yup.object().shape({
  userType: yup
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
      ["ON", "BC", "QC", "NS", "NB", "MB", "PEI", "SK", "AB", "NL"],
      "select province"
    )
    .required("Required"),
});


export const petSignUP = yup.object().shape({
 
  name: yup.string().required("Required"),
  weight: yup.number().required("Required"),
  temperament: yup
    .string()
    .oneOf(
      ["high", "moderate", "low"],
      "select an option"
    )
    .required("Required"),
  breed: yup.string().required("Required"),
  date:yup.string().required("Required")
});
