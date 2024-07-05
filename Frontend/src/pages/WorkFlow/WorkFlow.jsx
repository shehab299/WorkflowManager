import React, { useEffect, useState } from "react";
import styles from "./WorkFlow.module.css";
import { useNavigate } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import WorkFlowList from "../../components/WorkFlowList/WorkFlowList";

const BASE_URL = "http://localhost:3000";

export default function WorkFlow() {
  const [workflows, setWorkflows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    async function fetchWorkflows() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/workflows`, {
          signal: controller.signal,
        });
        const data = await res.json();
        setWorkflows(data);
      } catch (error) {
        if (error.name === "AbortError") return;
      } finally {
        setIsLoading(false);
      }
    }

    fetchWorkflows();

    return () => {
      controller.abort();
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkflows = workflows.filter(
    (workflow) =>
      workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddWorkflow = () => {
    navigate('/addworkflow');
  };

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.pageside}>
        <h1 className={styles.header}>Workflows</h1>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <button className={styles.addBtn} onClick={handleAddWorkflow}>Add New Workflow</button>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <WorkFlowList items={filteredWorkflows} />
        )}
      </div>
    </div>
  );
}
