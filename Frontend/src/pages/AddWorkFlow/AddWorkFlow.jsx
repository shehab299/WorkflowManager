import React, { useState } from "react";
import styles from "./AddWorkFlow.module.css";

import SideBar from "../../components/SideBar/SideBar";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";

export default function AddWorkFlow() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (title.length > 50)
      newErrors.title = "Title must be less than 50 characters";
    if (!description.trim()) newErrors.description = "Description is required";
    if (description.length > 200)
      newErrors.description = "Description must be less than 200 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ title, description });
      setErrors({});
      setTitle("");
      setDescription("");
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
                <EditIcon className={styles.icon} />Title
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
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
