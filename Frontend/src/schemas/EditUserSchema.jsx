import * as yup from "yup";

const EditUserSchema = yup.object().shape({
  fullname: yup.string(),
  username: yup.string(),
  department: yup.string(),
  role: yup.string(),
  email: yup
    .string()
    .email("Please enter a valid email")
,
  phone: yup.string(),
});

export default EditUserSchema;
