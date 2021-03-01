import axios from 'axios';
const baseURL = 'https://sqoop.ga/';

export const postDeleteAccount = async ({ reasonData, passwordData }) => {
  console.log(reasonData);
  console.log(passwordData);
  console.log(localStorage.getItem('token'));

  return await axios.post(
    `${baseURL}user/deleteAccount`,
    {
      reason: reasonData,
      inputPW: passwordData,
    },
    {
      headers: {
        jwt: localStorage.getItem('token'),
      },
    },
  );
};
