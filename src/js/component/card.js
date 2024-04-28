import React, { useContext, useEffect } from "react";
import "../../styles/app.css";
import { Card } from "../component/card";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const contacts = store.contacts;

  useEffect(() => {
    actions.getContactList();
  }, []);

  return (
    <div className="container">
      {contacts ? (
        <>
          <Link className="link" style={{ width: "auto" }} to={"addContact"}>
            <button className="buttonAdd">Add new contact</button>
          </Link>
          {contacts.map((contact) => {
            return <Card key={contact.id} contact={contact} />;
          })}
          {contacts.length === 0 && <h4>No hay contactos en esta agenda</h4>}
        </>
      ) : (
        <h4>Error: quizás la agenda de carlosluca no exista</h4>
      )}
    </div>
  );
};
