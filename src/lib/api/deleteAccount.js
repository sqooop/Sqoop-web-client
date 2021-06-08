import axios from 'axios';
const baseURL = 'https://sqoop.kro.kr/';

export const postDeleteAccount = async ({ reasonData, passwordData }) => {
  // console.log(reasonData);
  // console.log(passwordData);
  // console.log(sessionStorage.getItem('token'));

  return await axios.post(
    `${baseURL}user/deleteAccount`,
    {
      reason: reasonData,
      inputPW: passwordData,
    },
    {
      headers: {
        jwt: sessionStorage.getItem('token'),
      },
    },
  );
};

export const getCheckPassword = async ({ passwordData }) => {
  return await axios.get(
    `${baseURL}user/checkPassword?password=${passwordData}`,
    {
      headers: {
        jwt: sessionStorage.getItem('token'),
      },
    },
  );
};
