'use client'
import Button from '@mui/material/Button';
import ModalPopup from './modal';
import { useState } from 'react';

const Dashboard = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleBtnClick = () => {
        setOpenModal(true);
    }

    const handleModalClose = () => {
        setOpenModal(false);
    }
    return (
        <>
            <h2>
                Welcome to Dashboard
            </h2>
            <Button onClick={handleBtnClick}>Open modal</Button>
            <ModalPopup openModal={openModal} closeCallback={handleModalClose} />

        </>
    )
}
export default Dashboard;