import { Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { createPost } from "../api/posts";
import { useAppContext } from "../state/context";
import { useState } from "react";

export const ModalNote = ({ setPosts, color }) => {

  const [modalArea, setModalArea] = useState("");
  const [modalInput, setModalInput] = useState("");

  const context = useAppContext();

  const handleAddPost = (body, title) => {
    createPost({ title, body, color }).then(({ data }) => {
      setPosts((prev) => {
        return [
          ...prev,
          {
            ...data,
            id: context.currentId,
          },
        ];
      });

      context.setRelativeColorsToPostId((prev) => {
        return {
          ...prev,
          [context.currentId]: color,
        };
      });

      context.setCurrentId((prev) => prev + 1);
    });
  };

  const handleOk = () => {
    handleAddPost(modalArea, modalInput);
    context.toggleModal();
  };

  return (
    <Modal
      centered
      title="Add note"
      open={context.isModalOpen}
      onOk={handleOk}
      onCancel={context.toggleModal}
      okButtonProps={{
        style: {
          backgroundColor: '#1677ff'
        }
      }}
    >
      <Form>
        <Form.Item label="Title" name="title">
          <Input
            placeholder="Basic usage"
            value={modalInput}
            onChange={(e) => setModalInput(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              resize: "none",
            }}
            onChange={(e) => setModalArea(e.target.value)}
            value={modalArea}
            placeholder="disable resize"
          />
        </Form.Item>
        <Form.Item label="Selected color">
          <div className={`h-5 w-5 rounded-full ${color}`}></div>
        </Form.Item>
      </Form>
    </Modal>
  );
};
