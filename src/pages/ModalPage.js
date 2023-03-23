import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = (
        <Button primary onClick={handleClose}>
            I Accept
        </Button>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Hey this is the Modal!!!
            </p>
        </Modal>
    );

    return (
        <div className="static">
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;