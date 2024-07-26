import React, { useState } from "react";
import styles from "./AddWorkFlow.module.css";

import SideBar from "../../components/SideBar/SideBar";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import LayersIcon from "@mui/icons-material/Layers";

import { useWorkflows } from "../../contexts/WorkflowsContext";
import StagesForm from "../../components/StagesForm/StagesForm";
import { useNavigate } from "react-router-dom";
import AddWorkflowForm from "../../components/AddWorkflowForm/AddWorkflowForm";

export default function AddWorkFlow() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.pageside}>
        <h1>Add New Workflow</h1>
          <AddWorkflowForm/>
      </div>
    </div>
  );
}
