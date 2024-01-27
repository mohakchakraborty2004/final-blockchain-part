require('dotenv').config();
const { REACT_APP_PINATA_API_KEY, REACT_APP_PINATA_API_SECRET } = process.env;
const pinataSDK = require('@pinata/sdk');
import { usePinataState } from '../StateManger';
const pinata = new pinataSDK(REACT_APP_PINATA_API_KEY, REACT_APP_PINATA_API_SECRET)

// sh();

// async function sh() {
//     const json = {
//       }
      
//       const res = await pinata.pinJSONToIPFS(json)
//       console.log(res);

// }

PinataJSONPinning();

const PinataJSONPinning = () => {
  console.log('hello');
  const { walletAddress, status, name, description, url } = usePinataState();

  const JSON = {
    name,
    description,
    url,
  };
  console.log(JSON);
};

export default PinataJSONPinning;