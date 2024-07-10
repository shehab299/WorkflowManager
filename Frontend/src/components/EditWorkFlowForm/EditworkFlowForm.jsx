import React, { useState, useEffect, useRef } from "react";
import styles from "./EditWorkFlowForm.module.css";
import { useNavigate } from "react-router-dom";
import StagesForm from "../StagesForm/StagesForm";

const EditWorkFlowForm = ({ workflow }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stages, setStages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (workflow) {
      setName(workflow.name || "");
      setDescription(workflow.description || "");
      setStages(workflow.stages || []);
    }
  }, [workflow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, stages });
    navigate("/workflow");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="stages" className={styles.label}>
            Stages
          </label>
          <StagesForm stages={stages} setStages={setStages}/>
        </div>
        <button type="submit" className={styles.submitButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditWorkFlowForm;
