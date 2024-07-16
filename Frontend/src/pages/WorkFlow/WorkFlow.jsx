import React, { useEffect, useState } from "react";
import styles from "./WorkFlow.module.css";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import WorkFlowList from "../../components/WorkFlowList/WorkFlowList";

const BASE_URL = "http://localhost:3000";

export default function WorkFlow() {
  const [workflows, setWorkflows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const controller = new AbortController();
  //   async function fetchWorkflows() {
  //     try {
  //       const user = JSON.parse(localStorage.getItem("user"));
  //       const token = user?.token;
  //       console.log(token);
  //       if (!token) {
  //         throw new Error("No token found");
  //       }

  //       setIsLoading(true);
  //       const res = await fetch(`${BASE_URL}/workflows`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         signal: controller.signal,
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to fetch workflows");
  //       }

  //       const data = await res.json();
  //       console.log(data); // {status: 'success', data: Array(0)}
  //       setWorkflows(data.data); // Set workflows to data.data, which should be an array
  //     } catch (error) {
  //       if (error.name === "AbortError") return;
  //       console.error("Fetch Error:", error.message);
  //       // setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchWorkflows();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  //search bar
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkflows = workflows.filter(
    (workflow) =>
      workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workflow.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //navigating
  const handleAddWorkflow = () => {
    navigate("/addworkflow");
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage !== null ? parseInt(savedPage, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const itemsPerPage = 5;
  const items = filteredWorkflows;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.pageside}>
        <h1 className={styles.header}>Workflows</h1>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <button className={styles.addBtn} onClick={handleAddWorkflow}>
          Add New Workflow
        </button>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <WorkFlowList items={currentItems} />
            {items.length > 0 && (
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(items.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                subContainerClassName={`${styles.pages} ${styles.pagination}`}
                activeClassName={styles.active}
                forcePage={currentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
