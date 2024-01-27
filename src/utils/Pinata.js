import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

export const pinJSONToIPFS = async () => {

  const JSONBody = {
    // Your JSON data here
    key1: 'value1',
    key2: 'value2',
    // ...
  };
  const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';

  // Making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl: 'https://gateway.pinata.cloud/ipfs/' + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
