import React, { useState } from "react";
import styles from "./AddWorkFlow.module.css";

import SideBar from "../../components/SideBar/SideBar";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import LayersIcon from "@mui/icons-material/Layers";

import { useWorkflows } from "../../contexts/WorkflowsContext";
import StagesForm from "../../components/StagesForm/StagesForm";
import { useNavigate } from "react-router-dom";

export default function AddWorkFlow() {
  const { addWorkflow,updateWorkflowStages } = useWorkflows();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [stages, setStages] = useState([]);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (title.length > 50)
      newErrors.title = "Title must be less than 50 characters";
    if (!description.trim()) newErrors.description = "Description is required";
    if (description.length > 200) {
      newErrors.description = "Description must be less than 200 characters";
      console.log(description);
    }
    if(stages.length<2)
    {
      newErrors.stages="You have to add at least 2 stages";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newWorkflow = { title, description };
      const retreivedWorkflow = await addWorkflow(newWorkflow);
      console.log(retreivedWorkflow);

      const orderedStages = stages.map((stage, index) => ({
        ...stage,
        order: index + 1
      }));
      for (const stage of orderedStages) {
        console.log(stage);
        await updateWorkflowStages(retreivedWorkflow.id, stage);
      }

      setErrors({});
      setTitle("");
      setDescription("");
      setStages([]);
      navigate("/workflows");
    }
  };

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.pageside}>
        <h1>Add New Workflow</h1>
        <div className={styles.FormContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.label}>
                <EditIcon className={styles.icon} />
                Title
              </label>
              <input
                type="text"
                id="title"
                className={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <p className={styles.error}>{errors.title}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.label}>
                <DescriptionIcon className={styles.icon} />
                Description
              </label>
              <textarea
                id="description"
                className={styles.textarea}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description && (
                <p className={styles.error}>{errors.description}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.label}>
                <LayersIcon className={styles.icon} />
                Stages
              </label>
              <StagesForm stages={stages} setStages={setStages} />
              {errors.stages && <p className={styles.error}>{errors.stages}</p>}
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
