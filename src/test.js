import axios from 'axios';
import { useState } from 'react';

const YourComponent = () => {
    const [fileImg, setFileImg] = useState(null);
    const [ImgHash, setImgHash] = useState(null);

    const sendFileToIPFS = async (e) => {
    e.preventDefault();

    if (fileImg) {
      try {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            'pinata_api_key': process.env.REACT_APP_PINATA_API_KEY,
            'pinata_secret_api_key': process.env.REACT_APP_PINATA_API_SECRET,
            "Content-Type": "multipart/form-data"
          },
        });

        const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
        setImgHash(ImgHash);

      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    }
  };

  return (
    
    <form onSubmit={sendFileToIPFS}>
      <h1>Upload Image to IPFS Section</h1>
      <input type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
      <button type='submit'>Upload</button>
      <br/>
      <br/>
      <div>
      {fileImg && (
        <>
          <img src={URL.createObjectURL(fileImg)} alt="Selected File" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </>
      )}
      </div>
      <br/>
      <a href={ImgHash} target="_blank" rel="noopener noreferrer">
        {ImgHash}
      </a>
    </form>
  );

};

export default YourComponent;
