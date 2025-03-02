import React, { useState } from 'react';
import { IoIosWallet } from "react-icons/io";
import { Link } from 'react-router';

const Wallet: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [walletBalance, setWalletBalance] = useState<number>(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedText: string = e.target.value.trimStart();
    let textError: string = "";

    if (trimmedText.length > 2) {
      textError = "*** Amount Once added cannot be refunded ***";
      setMessage(textError);
      setBtnDisable(false);
    } else {
      setMessage('');
      setBtnDisable(true);
    }
    setText(trimmedText);
  };

  const handleAddMoney = () => {
    const amount = parseFloat(text);

    if (!isNaN(amount) && amount > 0) {
      if (amount > 5000) {
        const confirmAdd = window.confirm("You are adding more than $5000. Are you sure?");
        if (!confirmAdd) return; 
      }

      setWalletBalance(walletBalance + amount); 
      setText(""); 
      setBtnDisable(true);
      setMessage(""); 
    }
  };

  return (
    <div>
      <div className='container justify-content-center content_center align-items-center'>
        <div className='d-flex mt-5 gap-2 align-items-center'>
          <Link to='/homepage' className='link'>Home /</Link>
          <h5 className='mb-0'>wallet</h5>
        </div>

        <h1 className='mt-3'>Wallet</h1>
        <header className="mt-2 row align-items-center">
          <div className="col-10 pt-4">
            <img 
              src="https://cdn.nuego.co.in/greencell/assets/images/transaction-wallet-image.png" 
              alt="wallet"  
            />
          </div>

          <div className="col-lg pt-4">
            <div className="wallet_box border text-start d-flex flex-column p-2 gap-3">
              <span><IoIosWallet color='yellow' size='26px' />Starline Wallet</span>
              <span>${walletBalance}</span> 
            </div>
          </div>
        </header>

        <section className='mb-5'>
          <div className='mt-5 border shadow p-4'>
            <div className='wallet_color p-3 align-items-center d-flex justify-content-between'>
              <h2>Starline Wallet Credit</h2>
              <span className='zerotag'>${walletBalance}</span> 
            </div>
            
            <div className='mt-3 border p-3'>
              <h4> Add Money to wallet</h4>
              <div className='row gap-4 my-5'>
                <input 
                  type="number" 
                  placeholder='0' 
                  className='col-9 p-4' 
                  onChange={handleTextChange} 
                  value={text} 
                />
                <button 
                  className='btn btn-warning col-2 addMoney' 
                  disabled={btnDisable} 
                  onClick={handleAddMoney} 
                >
                  Add Money
                </button>
              </div>
              <p className='error'>{message}</p>
            </div>
            
            <div className='d-flex justify-content-between pt-5'>
              <h4>All Transactions</h4>
              <h4>Amount</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wallet;