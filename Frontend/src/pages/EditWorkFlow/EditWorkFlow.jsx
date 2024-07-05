import SideBar from "../../components/SideBar/SideBar";
import styles from "./EditWorkFlow.module.css";
import WorkflowEditForm from "../../components/EditWorkFlowForm/EditworkFlowForm";
import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const BASE_URL = "http://localhost:3000";

export default function EditWorkFlow() {
  const [workflow, setWorkflow] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams()

  useEffect(() => {
    const controller = new AbortController();
    async function fetchWorkflow() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/workflows/${id}`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setWorkflow(data);
      } catch (error) {
        if (error.name === "AbortError") return;
      } finally {
        setIsLoading(false);
      }
    }

    fetchWorkflow();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.pageside}>
        <h1>Edit Workflow</h1>
        <WorkflowEditForm workflow={workflow}/>
      </div>
    </div>
  );
}
