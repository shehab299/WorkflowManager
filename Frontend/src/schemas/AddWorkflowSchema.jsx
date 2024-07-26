import * as yup from "yup";

export const AddWorkFlowSchema = yup.object().shape({
  title: yup.string()
    .required('Title is required')
    .max(70, 'Title cannot be more than 70 characters'),
  description: yup.string()
    .required('Description is required')
    .max(150, 'Description cannot be more than 150 characters')
    .min(5,"Description cannot be less than 5 characters"),
  stages: yup.array()
    .min(2, 'At least two stages are required')
});
