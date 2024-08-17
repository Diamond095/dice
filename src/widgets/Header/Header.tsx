import React from 'react';
import './Header.scss'
import logo from '@/app/assets/Logo.png'
import wallet from '@/app/assets/wallet.png'
const Header: React.FC = () => {
    return (
        <div className='header'>
            <img src={logo} className='logo'></img>
            <div className='balance-element'>
                <div className='balance'>
                    0.01
                </div>
                <div className='token'>
                    <img></img>
                </div>
            </div>
            <div className="wallet-element">
                <img src={wallet} className='wallet'></img>
            </div>
        </div>
    )
}

export default Header