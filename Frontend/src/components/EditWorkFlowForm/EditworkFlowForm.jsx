import React, { useState, useEffect, useRef } from "react";
import styles from "./EditWorkFlowForm.module.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useWorkflows } from "../../contexts/WorkflowsContext";
import StagesForm from "../StagesForm/StagesForm";


const EditWorkFlowForm = () => {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [stages, setStages] = useState([]);
  const navigate = useNavigate();

  const [workflow, setWorkflow] = useState({});
  const {id} = useParams()
  const {fetchWorkflow,fetchStages,updateWorkflow,updateWorkflowStages} =useWorkflows();
  const [initialTitle, setInitialTitle] = useState('');
  const [initialDescription, setInitialDescription] = useState('');

  
  useEffect(() => {
    const fetchWorkflowById = async () => {
      try {
        const data = await fetchWorkflow(id);
        setWorkflow(data);
        setInitialTitle(data.title);
        setInitialDescription(data.description);
      } catch (error) {
        setSingleWorkflowError(error.message);
      }
    };
    fetchWorkflowById();
  }, [id]);

  useEffect(() => {
    const fetchStagesbyId = async () => {
      try {
        const data = await fetchStages(id);
        setStages(data);
      } catch (error) {
        setSingleWorkflowError(error.message);
      }
    };
    fetchStagesbyId();
  }, [id]);

  useEffect(() => {
    if (workflow) {
      settitle(workflow.title || "");
      setDescription(workflow.description || "");
    }
  }, [workflow]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(title!=initialTitle || description!=initialDescription)
      await updateWorkflow(workflow.id,{title, description})

    const orderedStages = stages.map((stage, index) => ({
      ...stage,
      order: index + 1
    }));
    for (const stage of orderedStages) {
      await updateWorkflowStages(workflow.id, stage);
    }
    
    console.log({ title, description, orderedStages });
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
            value={title}
            onChange={(e) => settitle(e.target.value)}
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
