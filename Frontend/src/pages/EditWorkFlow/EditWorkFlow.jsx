import SideBar from "../../components/SideBar/SideBar";
import styles from "./EditWorkFlow.module.css";
import EditWorkFlowForm from "../../components/EditWorkFlowForm/EditworkFlowForm"
import React from "react";



export default function EditWorkFlow() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.pageside}>
        <h1>Edit Workflow</h1>
        <EditWorkFlowForm/>
      </div>
    </div>
  );
}
