import { useState } from 'react';

export const usePinataState = () => {
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setURL] = useState('');

  return { walletAddress, setWallet, status, setStatus, name, setName, description, setDescription, url, setURL };
};
