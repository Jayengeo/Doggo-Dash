import { Form, Formik } from "formik";
import { userSignUP } from "./signUpFormSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import axios from "axios";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";

export default function SignupForm({ userProfiles }) {
  const [currentUser, setCurrentUser] = useState({});
  const router = useRouter();
  const { user } = useUser();

  const onSubmit = async (values, actions) => {
    const data = {
      email: user.email,
      userType: values.userType,
      firstName: values.firstName,
      lastName: values.lastName,
      streetAddress: values.streetAddress,
      city: values.city,
      postalCode: values.postalCode,
      province: values.province,
    };
    axios.post("/api/signUp", { data });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    router.replace("userProfile");
  };

  const findCurrentUser = async () => {
    for (const userProfile of userProfiles) {
      if (userProfile.email === user.email) {
        setCurrentUser(userProfile);
      }
    }
  };

  useEffect(() => {
    findCurrentUser();
  }, []);


  return (
    <Formik
      initialValues={{
        userType: "",
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        postalCode: "",
        province: "",
        email: "",
      }}
      validationSchema={userSignUP}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Uses Auth0 to fill email field with current user email */}
          {user && (
            <CustomInput
              label="Email"
              name="email"
              type="text"
              value={user.email}
              disabled
            />
          )}
          <CustomSelect
            label="User Type"
            name="userType"
            placeholder="Please select a user type"
          
          >
            <option value="">Please select an account type</option>
            <option value="dogOwner">Dog Owner</option>
            <option value="dogSitter">Dog Sitter</option>
          </CustomSelect>
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
           
          />

          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
          
          />

          <CustomInput
            label="Street Address"
            name="streetAddress"
            type="text"
            placeholder="Enter your street address"
            
          />

          <CustomInput
            label="City"
            name="city"
            type="text"
            placeholder="Enter your city"
       
          />

          <CustomInput
            label="Postal Code"
            name="postalCode"
            type="text"
            placeholder="Enter your postal code"
          
          />

          <CustomSelect
            label="Province"
            name="province"
            placeholder="Please select a province"
            
          >
            <option value="">Please select a province</option>
            <option value="ON">Ontario</option>
            <option value="BC">British Columbia</option>
            <option value="QC">Quebec</option>
            <option value="NS">Nova Scotia</option>
            <option value="NB">New Brunswick</option>
            <option value="MB">Manitoba</option>
            <option value="PEI">Prince Edward Island</option>
            <option value="SK">Saskatchewan</option>
            <option value="AB">Alberta</option>
            <option value="NL">Newfoundland & Labrador</option>
          </CustomSelect>

        

          <button
            className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md flex items-center justify-center"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
