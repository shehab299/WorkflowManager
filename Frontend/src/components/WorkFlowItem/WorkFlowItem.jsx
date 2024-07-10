import React, { useState } from 'react';
import styles from "./WorkFlowItem.module.css"
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';

export default function WorkFlowItem ({ item }) {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const navigate=useNavigate();

    function handleEdit(id) {
        navigate(`/editworkflow/${id}`);
      }

    function handleDelete(id){
      setShowDeleteConfirmation(true);
    }
  
    function confirmDelete() {
      setShowDeleteConfirmation(false);
      console.log(`Deleted item with id: ${item.id}`);
    }
  
    function closeDeleteConfirmation() {
      setShowDeleteConfirmation(false);
  }

  return (
    <li key={item.id}>
    <div className={styles.container}>
        <h2 className={styles.header}>{item.name}</h2>
        <p className={styles.body}>{item.description}</p>
        <button className={styles.btn} onClick={()=>handleEdit(item.id)}>Edit</button>
        <button className={styles.delbtn} onClick={()=>handleDelete(item.id)}>Delete</button>
        <DeleteConfirmation
        show={showDeleteConfirmation}
        onClose={closeDeleteConfirmation}
        onConfirm={confirmDelete}
        name={item.name}
      />
    </div>
    </li>
  );
};
