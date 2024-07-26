import * as yup from "yup";

export const StagesSchema = yup.object().shape({
  stageName: yup.string().required("This field is required"),
  selectedRole: yup.string().required("This field is required"),
});
