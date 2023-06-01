import { Card } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { useAppContext } from "../state/context";
import { ModalNote } from "./Modal";
import { useState } from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import { createPost } from "../api/posts";


export const Note = ({ id, color, title, body }) => {
  const context = useAppContext()
  const [modalArea, setModalArea] = useState("");
  const [modalInput, setModalInput] = useState("");
  const [form] = Form.useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)


  const handleEdit = () => {
    setIsModalOpen(true)
  }

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

  useEffect(() => {
    if (isModalOpen) {
      form.setFieldValue("title", title)
      form.setFieldValue("description", body)
    }
  }, [isModalOpen])

  return (
    <>
      <Card
        style={{
          textTransform: 'capitalize'
        }}
        actions={[
          <EditOutlined style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "1rem"
          }} onClick={handleEdit} key="edit" />,
        ]}
        className={color}
      >
        <Card.Meta
          title={title}
          description={body}
        />
      </Card>
      <ModalNote isOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <Form
          form={form}
        >
          <Form.Item label="Title" name="title">
            <Input
              placeholder="Title note"
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
              placeholder="Description note"
            />
          </Form.Item>
          <Form.Item label="Selected color">
            <div className={`h-5 w-5 rounded-full ${color}`}></div>
          </Form.Item>
        </Form>
      </ModalNote>
    </>

  );
};
