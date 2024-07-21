import React from 'react';
import WorkFlowItem from '../WorkFlowItem/WorkFlowItem';
import styles from "./WorkFlowList.module.css"

export default function WorkFlowList ({ items }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <WorkFlowItem item={item} key={index}/>
        ))}
      </ul>
    </div>
  );
};
