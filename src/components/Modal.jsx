import { Form, Input, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { createPost } from '../api/posts'
import { useAppContext } from '../state/context'

export const ModalNote = () => {
    const context = useAppContext()

    const handleAddPost = (body, title) => {
        const payload = {
            title,
            body,
            color: context.selectedColor
        }
        createPost(payload).then(({ data }) => {
            context.setPosts(prev => {
                return [
                    ...prev,
                    {
                        ...data,
                        id: context.currentId
                    }
                ]
            })

            context.setRelativeColorsToPostId(prev => {
                return {
                    ...prev,
                    [context.currentId]: context.color
                }
            })

            context.setCurrentId(prev => prev + 1)
        })
    }

    const handleOk = () => {
        handleAddPost(context.modalArea, context.modalInput)
        context.toggleModal();
    };

    return (
        <Modal centered title="Add note" open={context.isModalOpen} onOk={handleOk} onCancel={context.toggleModal}>
            <Form>
                <Form.Item label="Title" name="title">
                    <Input
                        placeholder="Basic usage"
                        value={context.modalInput}
                        onChange={e => context.setModalInput(e.target.value)}
                    />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{
                            height: 120,
                            resize: 'none',
                        }}
                        onChange={(e) => context.setModalArea(e.target.value)}
                        value={context.modalArea}
                        placeholder="disable resize"
                    />
                </Form.Item>
                <Form.Item label="Selected color">
                        <div className={`h-5 w-5 rounded-full bg-[${context.color}]`}></div>
                </Form.Item>
            </Form>
        </Modal>
    )
}
