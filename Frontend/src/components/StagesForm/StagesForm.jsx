import React, { useState, useRef } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import EditIcon from "@mui/icons-material/Edit";
import { Reorder } from "framer-motion";
import { StagesSchema } from "../../schemas/StagesSchema";
import { useFormik } from "formik";
import styles from "./StagesForm.module.css";

export default function StagesForm({ stages, setStages }) {
  const onSubmit = (values, actions) => {
    setStages([
      ...stages,
      {
        id: stages.length + 1,
        name: values.stageName,
        role: values.selectedRole,
      },
    ]);
    actions.setFieldValue("stageName", "");
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      stageName: "",
      selectedRole: "Admin",
      stageEditedName: "",
    },
    validationSchema: StagesSchema,
    onSubmit,
  });

  const [editedRole, setEditedRole] = useState("Admin");
  const [editingStage, setEditingStage] = useState(null);
  const [EditErrors, setEditErrors] = useState(null);
  const SaveStageButtonRef = useRef(null);
  const [stageEditedName, setEditedStageName] = useState("");

  const handleRemoveStage = (id) => {
    const updatedStages = stages.filter((stage) => stage.id !== id);
    setStages(updatedStages);
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
      } 
    }
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
      setEditErrors(validationErrors);
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
      setEditErrors({});
    }
  };

  return (
    <div>
      <Reorder.Group
        axis="y"
        values={stages}
        onReorder={handleReorder}
        className={styles.stagesContainer}
      >
        {stages.map((item) => (
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
                    type="submit"
                    className={styles.saveButton}
                    ref={SaveStageButtonRef}
                    onClick={handleSaveStage}
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

      <form onSubmit={handleSubmit}>
        <div className={styles.addStage}>
          <div className={styles.subcontainer}>
            <input
              type="text"
              id="stageName"
              name="stageName"
              placeholder="Enter stage name"
              value={values.stageName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.stageName && touched.stageName && (
            <p className={styles.error}>{errors.stageName}</p>
          )}

          <label htmlFor="roles" className={styles.label}>
            Choose Role
          </label>
          <div className={styles.roles}>
            <div className={styles.role}>
              <input
                id="Admin"
                name="selectedRole"
                onChange={handleChange}
                checked={values.selectedRole === "Admin"}
                type="radio"
                value="Admin"
                style={{ width: "20px", margin: "5px" }}
              />
              <label className={styles.label} style={{ margin: "5px" }}>
                Admin
              </label>
            </div>
            <div className={styles.role}>
              <input
                id="User"
                name="selectedRole"
                onChange={handleChange}
                checked={values.selectedRole === "User"}
                type="radio"
                value="User"
                style={{ width: "20px", margin: "5px" }}
              />
              <label className={styles.label} style={{ margin: "5px" }}>
                User
              </label>
            </div>
            {errors.selectedRole && touched.selectedRole && (
            <p className={styles.error}>{errors.selectedRole}</p>
          )}
          </div>
          <button
            type="submit"
          >
            Add Stage
          </button>
        </div>
      </form>
    </div>
  );
}
