import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import InputCSS from "../components/Input.module.css";
import UiCSS from "./UI.module.css";
import RequestForm from "../components/forms/RequestForm";

const Workflow = () => {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);

  const openRequestForm = () => {
    setIsRequestFormOpen(true);
  };

  const closeRequestForm = () => {
    setIsRequestFormOpen(false);
  };

  const submitRequestForm = () => {};

  return (
    <div className={UiCSS.body}>
      <div className={`${UiCSS.header}`}>
        <h1 className={`${UiCSS.title} josefin-sans-bold`}>Workflow</h1>
        <h1 className={`${UiCSS.info} josefin-sans-light`}>#1234124</h1>
      </div>
      {isRequestFormOpen ? (
        <RequestForm
          closeForm={closeRequestForm}
          submitForm={submitRequestForm}
        />
      ) : (
        <>
          <div className={`${UiCSS.section}`}>
            <div className={`${InputCSS.dropMenu}`}>DropMenu</div>
          </div>
          <div className={`${UiCSS.section}`}>
            <h3 className={`${UiCSS.title} josefin-sans-semibold`}>
              Description
            </h3>
            <p className={`${UiCSS.text} josefin-sans-regular`}>
              Maecenas commodo diam ac tempor rhoncus. Donec tincidunt sit amet
              erat a vulputate. Pellentesque gravida, ipsum in molestie porta,
              purus dolor dapibus arcu, sed ornare tortor orci in risus. Ut
              dignissim luctus mi in facilisis. Donec non nulla eu augue
              ultricies vehicula. Pellentesque maximus, elit ac lacinia dapibus,
              neque turpis interdum augue, non eleifend mi elit ut purus. Sed
              sit amet nulla sodales, cursus urna non, pretium nibh.
            </p>
          </div>
          <div className={`${UiCSS.section}`}>
            <h3 className={`${UiCSS.title} josefin-sans-semibold`}>
              Requirements
            </h3>
            <ul className={`${UiCSS.list}`}>
              <li className={`${UiCSS.list__item} josefin-sans-regular`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className={`${UiCSS.list__item} josefin-sans-regular`}>
                Quisque non dolor vel est porttitor porta eget sed lorem.
              </li>
              <li className={`${UiCSS.list__item} josefin-sans-regular`}>
                Sed eleifend est quis lacus eleifend faucibus.
              </li>
              <li className={`${UiCSS.list__item} josefin-sans-regular`}>
                Praesent ac ipsum at odio aliquam ullamcorper.
              </li>
              <li className={`${UiCSS.list__item} josefin-sans-regular`}>
                Vestibulum commodo elit id sem suscipit, ac feugiat diam
                efficitur.
              </li>
              <li className={`${UiCSS.list__item} josefin-sans-regular`}>
                Vestibulum a elit dapibus, consectetur orci eget, mattis lectus.
              </li>
            </ul>
          </div>
          <div className={`${UiCSS.section} ${UiCSS.btn_section}`}>
            <div
              className={`${UiCSS.btn} ${InputCSS.btn} ${InputCSS.btn_2}`}
              onClick={openRequestForm}
            >
              <p>New Request</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Workflow;
