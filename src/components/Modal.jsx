import { Modal } from "antd";

export const ModalNote = ({ children, isOpen, onCancel, onOk }) => {


  return (
    <Modal
      centered
      title="Add note"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      okButtonProps={{
        style: {
          backgroundColor: '#1677ff'
        }
      }}
    >
      {children}
    </Modal>
  );
};
