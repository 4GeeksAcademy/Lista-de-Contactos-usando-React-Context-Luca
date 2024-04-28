import { BASE_URL } from "./BASE_URL";

export const getContacts = async () => {
  return await BASE_URL("/agendas/carlosluca", "GET", {});
};

export const postContact = async (data) => {
  return await BASE_URL(`/agendas/carlosluca/contacts`, "POST", data);
};

export const putContact = async (contactId, data) => {
  return await BASE_URL(
    `/agendas/carlosluca/contacts/${contactId}`,
    "PUT",
    data
  );
};

export const deleteContact = async (contactId) => {
  return await BASE_URL(
    `/agendas/carlosluca/contacts/${contactId}`,
    "DELETE",
    {}
  );
};
