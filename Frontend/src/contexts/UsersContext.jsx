import React, { useContext, createContext, useState, useEffect } from "react";

const UsersContext = createContext();

const postsPerPage = 5;
const options = ["name", "department", "role"];
const BASE_URL = "http://localhost:3000";

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchBy, setSearchBy] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const numPages = Math.ceil(filteredData.length / postsPerPage);

  function handleSearch(value) {
    setSearchValue(value);
    if (!searchBy || !value || value === "") {
      setFilteredData(users);
      return;
    }

    const filtered = users.filter((item) =>
      item[searchBy].toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  }

  useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      // setIsLoading(true);
      // setError("");

      try {
        const token = localStorage.getItem("token");
        console.log(token);
  
        if (!token) {
          throw new Error("No token found");
        }

        const res = await fetch(
          `${BASE_URL}/users`,
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
          throw new Error("Failed to fetch users");
        }

        console.log(data.data);
        setUsers(data.data);
        setFilteredData(data.data);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchUsers();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        searchBy,
        setSearchBy,
        options,
        searchValue,
        setSearchValue,
        handleSearch,
        postsPerPage,
        currentPage,
        filteredData,
        numPages,
        setCurrentPage,
        setFilteredData,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UsersContext);
  return context;
}

export { UsersProvider, useUsers };
