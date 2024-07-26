import React, { useContext, createContext, useState, useEffect } from "react";

const WorkflowsContext = createContext();

const postsPerPage = 5;
const options = ["title", "description"];
const BASE_URL = "http://localhost:3000";

function WorkflowsProvider({ children }) {
  const [workflows, setWorkflows] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchWorkflows = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const res = await fetch(
          `${BASE_URL}/workflows`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
          {
            signal: controller.signal,
          }
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to fetch workflows");
        }

        setWorkflows(data.data);
        setFilteredData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkflows();
    return () => {
      controller.abort();
    };
  }, []);

  const fetchWorkflow = async (workflowId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const res = await fetch(`${BASE_URL}/workflows/${workflowId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch workflow");
      }

      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const fetchStages = async (workflowId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const res = await fetch(`${BASE_URL}/workflows/${workflowId}/stages`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch workflow stages");
      }

      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const addWorkflow = async (newWorkflow) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const res = await fetch(`${BASE_URL}/workflows`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newWorkflow),
      });

      if (!res.ok) {
        throw new Error("Failed to add workflow");
      }

      const data = await res.json();
      setWorkflows((prevWorkflows) => [...prevWorkflows, data.data]);
      setFilteredData((prevFilteredData) => [...prevFilteredData, data.data]);
      return data.data
    } catch (error) {
      console.error(error);
    }
  };

  const deleteWorkflow = async (workflowId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const res = await fetch(`${BASE_URL}/workflows/${workflowId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete workflow");
      }

      setWorkflows((prevWorkflows) =>
        prevWorkflows.filter((workflow) => workflow.id !== workflowId)
      );
      setFilteredData((prevFilteredData) =>
        prevFilteredData.filter((workflow) => workflow.id !== workflowId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateWorkflow = async (workflowId, updatedWorkflow) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
  
      const res = await fetch(`${BASE_URL}/workflows/${workflowId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedWorkflow),
      });
  
      if (!res.ok) {
        throw new Error("Failed to update workflow");
      }
  
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const updateWorkflowStages = async (workflowId, updatedStage) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
  
      const res = await fetch(`${BASE_URL}/workflows/${workflowId}/stages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify( updatedStage ),
      });
  
      if (!res.ok) {
        throw new Error("Failed to update workflow stages");
      }
  
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };
  

  return (
    <WorkflowsContext.Provider
      value={{
        workflows,
        options,
        filteredData,
        setFilteredData,
        addWorkflow,
        deleteWorkflow,
        fetchWorkflow,
        fetchStages,
        updateWorkflow,
        updateWorkflowStages,
      }}
    >
      {children}
    </WorkflowsContext.Provider>
  );
}

function useWorkflows() {
  const context = useContext(WorkflowsContext);
  if (!context) {
    throw new Error("useWorkflows must be used within a WorkflowsProvider");
  }
  return context;
}

export { WorkflowsProvider, useWorkflows };
