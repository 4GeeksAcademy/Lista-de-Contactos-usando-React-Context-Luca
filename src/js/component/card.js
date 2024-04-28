import React, { act, useContext, useState } from "react";
import "../../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "./modal";

export const Card = ({ contact }) => {
  const { actions } = useContext(Context);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="card">
      <div className="photoContainer">
        <img
          className="photo"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQzAOKLpyXHBatylQVyAcxmc8e_RwrTLzHA&usqp=CAU"
          }
        ></img>
      </div>
      <div className="info">
        <span className="title">{contact.name}</span>
        <div className="textContainer" style={{ marginTop: 10 }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className="subtitle">{contact.address}</span>
        </div>
        <div className="textContainer">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span className="subtitle">{contact.phone}</span>
        </div>
        <div className="textContainer">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="subtitle">{contact.email}</span>
        </div>
      </div>
      <div className="icons">
        <Link
          to={"/addContact"}
          state={{ contact: contact }}
          style={{ color: "black" }}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </Link>

        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ cursor: "pointer" }}
          onClick={() => {
            toggleModal();
          }}
        />
        <Modal isOpen={modalOpen} onClose={toggleModal}>
          <h2>¿Seguro que quieres eliminar el contacto?</h2>
          <p>El contacto se eliminará</p>
          <button
            className="close-button"
            onClick={() => {
              actions.deleteContact(contact.id);
            }}
          >
            Eliminar
          </button>
        </Modal>
      </div>
    </div>
  );
};
