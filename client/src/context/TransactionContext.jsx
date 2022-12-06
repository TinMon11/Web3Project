import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import { createContext } from "react";

export const TransactionContext = createContext();

const { ethereum } = window;

//Fetch Ethereum Contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const TransactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    TransactionContract,
  });
};

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("")
     
    const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please Install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if(accounts.length) {setCurrentAccount(accounts[0])}

    console.log(accounts);
    };

    const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setCurrentAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };

    useEffect(() => {
    checkIfWalletIsConnected();
    }, []);

    return (
    <TransactionContext.Provider value={{connectWallet, currentAccount}}>
      {children}
    </TransactionContext.Provider>
    );
};