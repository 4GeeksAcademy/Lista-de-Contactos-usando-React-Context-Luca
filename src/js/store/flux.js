import {
	deleteContact,
	getContacts,
	postContact,
	putContact,
  } from "../../js/services/enpoints";
  
  const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		//Estado inicial
		contacts: [
		  /*  {
			name: "Mike",
			lastname: "Anamendolla",
			address: "5842 Hillcrest Rd",
			phone: "(870) 288-4149",
			email: "mike.ana@example.com",
			photo:
			  "https://imgs.search.brave.com/C9R_QiF2rz22iOEc-eES_V27FcLQsFtzWPfnDa5Ni0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODA1/MDEyMDY0L2VzL2Zv/dG8vcmV0cmF0by1k/ZS1ob21icmUtaGlz/cGFuby1tYWR1cm8u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUF0dGpfZjMtdTdG/bkNaVF8tVlF4aG93/aGRNcmdUb3lmRzNo/ZDE5QmlJbFk9",
		  },
		  {
			name: "Mike",
			lastname: "Anamendolla",
			address: "5842 Hillcrest Rd",
			phone: "(870) 288-4149",
			email: "mike.ana@example.com",
			photo:
			  "https://imgs.search.brave.com/C9R_QiF2rz22iOEc-eES_V27FcLQsFtzWPfnDa5Ni0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODA1/MDEyMDY0L2VzL2Zv/dG8vcmV0cmF0by1k/ZS1ob21icmUtaGlz/cGFuby1tYWR1cm8u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUF0dGpfZjMtdTdG/bkNaVF8tVlF4aG93/aGRNcmdUb3lmRzNo/ZDE5QmlJbFk9",
		  }, */
		],
	  },
	  actions: {
		//Obtiene todos los contactos
		getContactList: async () => {
		  const res = await getContacts();
		  setStore({ contacts: res.contacts });
		},
		//Crea un nuevo contacto
		postContact: async (contactData) => {
		  const res = await postContact(contactData);
		  const updatedContacts = [...setStore.contacts, res];
		  setStore({ contacts: updatedContacts });
		},
		//Acutaliza un contacto por si id
		putContact: async (contactId, contactData) => {
		  const res = await putContact(contactId, contactData);
		  const updatedContacts = [...setStore.contacts, res];
		  setStore({ contacts: updatedContacts });
		},
		//Elimina un contacto por su id
		deleteContact: async (contactId) => {
		  await deleteContact(contactId);
		  const res2 = await getContacts();
		  setStore({ contacts: res2.contacts });
		},
	  },
	};
  };
  
  export default getState;
  