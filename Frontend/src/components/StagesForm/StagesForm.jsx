import React, { useState, useEffect, useRef } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import EditIcon from "@mui/icons-material/Edit";
import { Reorder } from "framer-motion";
import styles from "./StagesForm.module.css";

export default function StagesForm({ stages,setStages }) {
  const [stageName, setStageName] = useState("");
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [editedRole, setEditedRole] = useState("Admin");
  const [editingStage, setEditingStage] = useState(null);
  const [errors, setErrors] = useState({});
  const addStageButtonRef = useRef(null);
  const SaveStageButtonRef = useRef(null);
  const [stageEditedName, setEditedStageName] = useState("");

  const handleAddStage = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (stageName.trim() !== "") {
        setStages([
          ...stages,
          {
            id: stages.length + 1,
            name: stageName,
            role: selectedRole,
            // order: stages.length + 1,
          },
        ]);
        setStageName("");
      }
    }
  };
  const handleRemoveStage = (id) => {
    const updatedStages = stages.filter((stage) => stage.id !== id);
    setStages(updatedStages);
  };

  const handleOptionChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleReorder = (newStages) => {
    setStages(newStages);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (editingStage) {
        if (SaveStageButtonRef.current) {
          SaveStageButtonRef.current.click();
        }
      } else {
        if (addStageButtonRef.current) {
          addStageButtonRef.current.click();
        }
      }
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!stageName.trim()) newErrors.title = "Stage name is required";
    if (stageName.length > 50)
      newErrors.title = "Stage name must be less than 50 characters";
    return newErrors;
  };
  const editValidate = () => {
    const newErrors = {};
    if (!stageEditedName.trim()) newErrors.edit = "Required field";
    if (stageEditedName.length > 50)
      newErrors.edit = "Stage name must be less than 50 characters";
    return newErrors;
  };
  const handleEditStage = (stage) => {
    setEditingStage(stage);
    setEditedStageName(stage.name);
    setEditedRole(stage.role);
  };

  const handleSaveStage = () => {
    const validationErrors = editValidate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const updatedStages = stages.map((stage) =>
        stage.id === editingStage.id
          ? { ...stage, name: stageEditedName, role: editedRole }
          : stage
      );
      setStages(updatedStages);
      setEditingStage(null);
      setEditedStageName("");
      setEditedRole("Admin");
      setErrors({});
    }
  };
  return (
    <div>
      <Reorder.Group axis="y" values={stages} onReorder={handleReorder}>
        {stages.map((item, key) => (
          <Reorder.Item key={item.id} value={item} className={styles.stageli}>
            <div className={styles.stage}>
              <ReorderIcon className={styles.icon} />
              {editingStage && editingStage.id === item.id ? (
                <>
                  <input
                    type="text"
                    value={stageEditedName}
                    onChange={(e) => setEditedStageName(e.target.value)}
                    className={styles.editStageInput}
                    onKeyDown={handleKeyDown}
                  />
                  {errors.edit && <p className={styles.error}>{errors.edit}</p>}

                  <select
                    value={editedRole}
                    onChange={(e) => setEditedRole(e.target.value)}
                    className={styles.editStageSelect}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                  <button
                    type="button"
                    onClick={handleSaveStage}
                    className={styles.saveButton}
                    ref={SaveStageButtonRef}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className={styles.stagename}>{item.name}</span>
                  <span>Role: {item.role}</span>
                  <EditIcon
                    className={styles.editicon}
                    onClick={() => handleEditStage(item)}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveStage(item.id)}
                    className={styles.removeStageButton}
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className={styles.addStage}>
        <div className={styles.subcontainer}>
        <input
          type="text"
          placeholder="Enter stage name"
          value={stageName}
          onChange={(e) => setStageName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleAddStage} ref={addStageButtonRef}>
          Add Stage
        </button>
        </div>
        {errors.title && <p className={styles.error}>{errors.title}</p>}

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
              style={{ width: "20px", margin: "5px" }}
            />
            <label className={styles.label} style={{ margin: "5px" }}>
              Admin
            </label>
          </div>
          <div className={styles.role}>
            <input
              type="radio"
              value="User"
              checked={selectedRole === "User"}
              onChange={handleOptionChange}
              style={{ width: "20px", margin: "5px" }}
            />
            <label className={styles.label} style={{ margin: "5px" }}>
              User
            </label>
          </div>
        </div>
        
      </div>
    </div>
  );
}
