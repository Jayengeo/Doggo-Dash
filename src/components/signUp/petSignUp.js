import { Form, Formik } from "formik";
import { petSignUP } from "./signUpFormSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import MyDatePicker from "./SelectDate";
import axios from "axios";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function PetSignUpForm({ breeds }) {
  const router = useRouter();
  const { user } = useUser(); 
 
 
  const onSubmit = async (values, actions) => {
    const data = {
      name: values.name,
      date: values.date,
      weight: Number(values.weight),
      temperament: values.temperament,
      breedId: Number(values.breed),
      comments: values.comments,
      userEmail: user.email
    };
    console.log(data)
    axios.post("/api/petSignUp", { data });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    router.replace("petProfile");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        date: new Date(),
        weight: "",
        temperament: "",
        breedId: "",
        comments: "",
      }}
      validationSchema={petSignUP}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your pet's name"
          />

          <MyDatePicker 
          label="Date of birth"
          name="date" 
          type="text"
          placeholder="MM-DD-YYYY"
          />
          
          
          <CustomInput
            label="Weight(lbs)"
            name="weight"
            type="text"
            placeholder="Please indicate your pet's weight"
          />

          <CustomSelect
            label="Energy Level"
            name="temperament"
            type="text"
            placeholder="Select an option"
          >
            <option value="">Please select an option</option>
            <option value="high">High</option>
            <option value="moderate">Moderate</option>
            <option value="low">Low</option>
          </CustomSelect>

          <CustomSelect
            label="Breed"
            name="breed"
            type="text"
            placeholder="Select an option"
          >
            <option value="">Please select a breed</option>
            {breeds.map((breed) => {
              return <option value={breed.id}>{breed.name}</option>;
            })}
            ;
          </CustomSelect>

          <CustomInput
            label="Additional Comments (Optional)"
            name="comments"
            type="text"
            placeholder=""
          />

          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
