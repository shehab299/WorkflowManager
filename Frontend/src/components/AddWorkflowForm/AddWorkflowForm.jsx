import styles from "./AddWorkflowForm.module.css";
import StagesForm from "../StagesForm/StagesForm";
import { useFormik } from "formik";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import LayersIcon from "@mui/icons-material/Layers";
import { useEffect, useState } from "react";
import { AddWorkFlowSchema } from "../../schemas/AddWorkflowSchema";
import { useWorkflows } from "../../contexts/WorkflowsContext";

export default function AddWorkflowForm() {
  const { addWorkflow, updateWorkflowStages } = useWorkflows();
  const [stages, setStages] = useState([]);

  const onSubmit = async (values, actions) => {
    const newWorkflow = {
      title: values.title,
      description: values.description,
    };
    const retreivedWorkflow = await addWorkflow(newWorkflow);
    const orderedStages = stages.map((stage, index) => ({
      ...stage,
      order: index + 1,
    }));
    for (const stage of orderedStages) {
      await updateWorkflowStages(retreivedWorkflow.id, stage);
    }

    setStages([]);
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      stages: stages,
    },
    validationSchema: AddWorkFlowSchema,
    onSubmit,
  });

  useEffect(() => {
    setFieldValue("stages", stages);
  }, [stages, setFieldValue]);

  return (
    <div className={styles.formsContainer}>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.formGroup}>
        <label htmlFor="stages" className={styles.label}>
          <LayersIcon className={styles.icon} />
          Stages
        </label>
        <StagesForm stages={stages} setStages={setStages} />
        {errors.stages && touched.stages && (
          <p className={styles.error}>{errors.stages}</p>
        )}
         </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>
              <EditIcon className={styles.icon} />
              Title
            </label>
            <input
              type="text"
              id="title"
              className={`${
                errors.title && touched.title ? styles.errorInput : ""
              } ${styles.input}`}
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter the title"
            />
            {errors.title && touched.title && (
              <p className={styles.error}>{errors.title}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>
              <DescriptionIcon className={styles.icon} />
              Description
            </label>
            <textarea
              id="description"
              className={`${
                errors.description && touched.description
                  ? styles.errorInput
                  : ""
              } ${styles.input}`}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter the description"
              rows={3}
            />
            {errors.description && touched.description && (
              <p className={styles.error}>{errors.description}</p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className={styles.submitButton}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
