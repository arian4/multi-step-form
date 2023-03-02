import * as Yup from "yup";

export const FirstStepValidationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email().required("This field is required"),
  phoneNumber: Yup.string().required("This field is required"),
});
