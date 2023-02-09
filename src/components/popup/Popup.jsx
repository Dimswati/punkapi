import React from 'react';
import './popup.scss';
import Modal from '../modal/Modal';
import { Close } from '@mui/icons-material';

export default function Popup({beer, closeModal}) {
  return (
    <div className='modal-wrapper'>
      <div className="modal">
        <button className='close' onClick={closeModal}>
          <Close/>
        </button>
        <Modal beer={beer}/>
      </div>
    </div>
  )
}
