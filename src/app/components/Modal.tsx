import React from "react";
import FormPost from "./FormPost";
import { SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/app/types"; // Sesuaikan jalur ini dengan lokasi file type Anda

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleFormSubmit: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
    // Logika penanganan data form
  };

  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <FormPost submit={handleFormSubmit} />
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};
