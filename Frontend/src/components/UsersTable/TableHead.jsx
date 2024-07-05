import React from "react";

export default function TableHead({ columns }) {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
  );
}
