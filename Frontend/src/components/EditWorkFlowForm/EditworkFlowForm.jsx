import React, { useState, useEffect } from "react";
import styles from "./EditWorkFlowForm.module.css";
import { useNavigate } from "react-router-dom";

const EditWorkFlowForm = ({ workflow }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stageName, setStageName] = useState("");
  const [selectedRole, setSelectedRole] = useState("Admin");
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

  const handleAddStage = () => {
    if (stageName.trim() !== "") {
      setStages([
        ...stages,
        { id: stages.length + 1, name: stageName, role: selectedRole },
      ]);
      setStageName("");
    }
  };

  const handleRemoveStage = (id) => {
    const updatedStages = stages.filter((stage) => stage.id !== id);
    setStages(updatedStages);
  };

  const handleOptionChange = (event) => {
    setSelectedRole(event.target.value);
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
          <div className={styles.stages}>
            {stages.map((stage) => (
              <div key={stage.id} className={styles.stage}>
                <span className={styles.stagename}>{stage.name}</span>
                <span>Role: {stage.role}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveStage(stage.id)}
                  className={styles.removeStageButton}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className={styles.addStage}>
            <input
              type="text"
              placeholder="Enter stage name"
              value={stageName}
              onChange={(e) => setStageName(e.target.value)}
            />

            <label htmlFor="roles" className={styles.label}>
              Choose Role
            </label>
            <div className={styles.roles}>
              <div className={styles.role}>
              <input
                    type="radio"
                    value="Admin"
                    checked={selectedRole === "Admin"}
                    onChange={handleOptionChange}
                    style={{width:"20px",margin:"5px"}}
                  />
                <label className={styles.label} style={{margin:"5px"}}>
                  Admin
                </label>
              </div>
              <div className={styles.role}>
              <input
                    type="radio"
                    value="User"
                    checked={selectedRole === "User"}
                    onChange={handleOptionChange}
                    style={{width:"20px",margin:"5px"}}
                  />
                <label className={styles.label} style={{margin:"5px"}}>
                  User
                </label>
              </div>
            </div>
            <button type="button" onClick={handleAddStage}>
              Add Stage
            </button>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditWorkFlowForm;
