import { motion } from "framer-motion";
import { ModalNote } from "./Modal";
import { useState } from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { createPost } from "../api/posts";
import { useAppContext } from "../state/context";



const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


export function Circle({ color }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalArea, setModalArea] = useState("");
  const [modalInput, setModalInput] = useState("");
  const [error, setError] = useState("");
  const [form] = Form.useForm()
  const context = useAppContext();


  const handleAddPost = (body, title) => {
    createPost({ title, body, color }).then(({ data }) => {
      context.setNotes((prev) => {
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
    }).catch(({ message }) => {
      setError(message)
      alert(message)
    })
  };

  const handleOk = () => {
    handleAddPost(modalArea, modalInput);
    handleCancel()
  };

  const handleCancel = () => {
    form.resetFields()
    setIsModalOpen(false)
  }


  return (
    <>
      <motion.li
        whileHover={{ scale: 1.1 }}
        variants={variantsLi}
        onClick={() => setIsModalOpen(true)}
        className={`${color} h-5 w-5 rounded-full mb-5`}
      />
      <ModalNote isOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <Form
          form={form}
        >
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
      </ModalNote>
    </>
  )
}