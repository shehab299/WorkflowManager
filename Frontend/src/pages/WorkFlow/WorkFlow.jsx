import React, { useEffect, useState } from "react";
import styles from "./WorkFlow.module.css";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import SideBar from "../../components/SideBar/SideBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkFlowList from "../../components/WorkFlowList/WorkFlowList";
import { useWorkflows } from "../../contexts/WorkflowsContext";

const BASE_URL = "http://localhost:3000";

export default function WorkFlow() {
  // const [workflows, setWorkflows] = useState([]);
  const navigate = useNavigate();
  const { filteredData } = useWorkflows();

  //search bar
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkflows = filteredData.filter(
    (workflow) =>
      workflow.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const itemsPerPage = 3;
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
        <div className={styles.headerSide}>
          {/* <SearchBar value={searchQuery} onChange={setSearchQuery} /> */}
          <div className={styles.searchbarContainer}>
            <SearchOutlinedIcon className={styles.icon} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchBar}
            />
          </div>
          <button className={styles.addBtn} onClick={handleAddWorkflow}>
            Add New Workflow
          </button>
        </div>

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
      </div>
    </div>
  );
}
