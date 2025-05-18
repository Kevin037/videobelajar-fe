import { FormEvent, useEffect } from "react";
import { ButtonPrimary, ButtonWhite } from "@/components/Elements/button";
import Modal from "@/components/Elements/Modal";
import useLesson from "@/hooks/useLesson";
import Image from "next/image";
import { ModalProps } from "@/services/types";

export default function ModalSubmitTest({ isOpen, onClose, totalAnswer, totalQuestions, testNo, orderId, type, setModalOpen }: ModalProps) {
  if (!isOpen) return null;
  const {submitTest,submitStatus} = useLesson();

  const SubmitTest = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (totalAnswer != totalQuestions) {
        alert("Jawaban belum lengkap");
        setModalOpen(false);
        return false;
    }
      submitTest({id:testNo});
  };
  useEffect(() => {
    if (submitStatus) {
        window.location.href = `/class/${orderId}/${type}/${testNo}/result`
    }
  }, [submitStatus,orderId,type,testNo]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <>
        <Image src="/assets/submitTest.svg" alt="" />
        <p className="text-center mb-4">
          Apakah kamu yakin untuk menyelesaikan pretest ini?
        </p>
        {/* BUTTONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <ButtonWhite onClick={onClose} >
            Batal
          </ButtonWhite>
          <ButtonPrimary className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick={(e) => SubmitTest(e)}>
            Selesai
          </ButtonPrimary>
        </div>
      </>
    </Modal>
  );
}
