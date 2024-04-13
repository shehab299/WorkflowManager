import React from "react";
import FormCSS from "./Form.module.css";
import InputCSS from "../Input.module.css";
import UiCSS from "../../pages/UI.module.css";

const RequestForm = ({ closeForm, submitForm }) => {
  return (
    <form method="POST" className={`${FormCSS.body}`}>
      <div className={`${UiCSS.section}`}>
        <div className={`${UiCSS.title} josefin-sans-semibold`}>Send to</div>
        <div className={`${InputCSS.dropMenu}`}>DropMenu</div>
      </div>
      <div className={`${UiCSS.section}`}>
        <div className={`${UiCSS.title} josefin-sans-semibold`}>Comment</div>
        <textarea className={`${InputCSS.textArea}`} rows="10"></textarea>
      </div>
      <div className={`${UiCSS.section} ${UiCSS.btn_section}`}>
        <div
          className={`${UiCSS.btn} ${InputCSS.btn} ${InputCSS.btn_3}`}
          onClick={closeForm}
        >
          <p className={`josefin-sans-bold`}>Cancel</p>
        </div>
        <div
          className={`${UiCSS.btn} ${InputCSS.btn} ${InputCSS.btn_2}`}
          onClick={submitForm}
        >
          <p className={`josefin-sans-bold`}>Create Request</p>
        </div>
      </div>
    </form>
  );
};

export default RequestForm;
