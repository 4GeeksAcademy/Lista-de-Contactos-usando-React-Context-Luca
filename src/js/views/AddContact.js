import React, { useContext, useState } from "react";
import "../../styles/form.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";

import { useLocation } from "react-router-dom";

export const AddContact = () => {
  const location = useLocation();

  let contactInfo = location.state?.contact;
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: contactInfo ? contactInfo.name : "",
    email: contactInfo ? contactInfo.email : "",
    phone: contactInfo ? contactInfo.phone : "",
    address: contactInfo ? contactInfo.address : "",
  });
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      userInfo.name.trim() === "" ||
      userInfo.email.trim() === "" ||
      userInfo.phone.trim() === "" ||
      userInfo.address.trim() === ""
    ) {
      setError("Todos los campos son requeridos.");
      return;
    }
    if (contactInfo) {
      actions.putContact(contactInfo.id, userInfo);
    } else {
      actions.postContact(userInfo);
    }
    toggleModal(true);
  };

  return (
    <div className="container">
      <h2>Add a new contact</h2>
      <div className="subContainer">
        <label htmlFor="nombre">FullName:</label>
        <input
          className="input"
          type="text"
          id="nombre"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
          placeholder="Enter fullname"
        />
        <label htmlFor="email">Email:</label>
        <input
          className="input"
          type="text"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
        <label htmlFor="phone">Phone:</label>
        <input
          className="input"
          type="text"
          id="phone"
          name="phone"
          value={userInfo.phone}
          onChange={handleInputChange}
          placeholder="Enter phone"
        />
        <label htmlFor="address">Address:</label>
        <input
          className="input"
          type="text"
          id="address"
          name="address"
          value={userInfo.address}
          onChange={handleInputChange}
          placeholder="Enter address"
        />
        {error && <p className="error">{error}</p>}
        <button
          className="buttonSave"
          onClick={() => {
            handleSubmit();
          }}
        >
          {contactInfo ? "Actualizar" : "Guardar"}
        </button>
        <Link to={"/"} style={{ width: 200 }}>
          or get back to contacts
        </Link>
      </div>
      <Modal isOpen={modalOpen} onClose={toggleModal}>
        <h2>Contacto {contactInfo ? "Actualizado" : "Creado"}</h2>
        <p>El contacto se {contactInfo ? "actualizó" : "creó"} correctamente</p>
        <button
          className="close-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Regresar
        </button>
      </Modal>
    </div>
  );
};
