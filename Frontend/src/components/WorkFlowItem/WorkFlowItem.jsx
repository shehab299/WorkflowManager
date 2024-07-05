import React from 'react';
import styles from "./WorkFlowItem.module.css"
import { useNavigate } from 'react-router-dom';

export default function WorkFlowItem ({ item }) {
    const navigate=useNavigate();

    function handleEdit(id) {
        navigate(`/editworkflow/${id}`);
      }

  return (
    <div className={styles.container}>
        <h2 className={styles.header}>{item.name}</h2>
        <p className={styles.body}>{item.description}</p>
        <button className={styles.btn} onClick={()=>handleEdit(item.id)}>Edit</button>
    </div>
  );
};
