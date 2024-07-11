import React from 'react';
import styles from './DeleteConfirmation.module.css';

const DeleteConfirmation = ({ show, onClose, onConfirm,name }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.header}>Confirm Delete</h2>
        <p>Are you sure you want to delete this item named {name}?</p>
        <button className={styles.confirmBtn} onClick={onConfirm}>Yes</button>
        <button className={styles.cancelBtn} onClick={onClose}>No</button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
