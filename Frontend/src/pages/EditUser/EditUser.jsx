import styles from "./EditUser.module.css";
import SideBar from "../../components/SideBar/SideBar";
import EditUserForm from "./EditUserForm";

function EditUser() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.editSide}>
        <h2>Edit User</h2>
        <EditUserForm />
      </div>
    </div>
  );
}
export default EditUser;
