import { Card } from 'antd';

export const Note = ({ color, title, body }) => {
  return (
    <Card
        title={title}
        bordered={false}
        style={{
            textTransform: 'capitalize',
            maxWidth: 300,
            minHeight: 250,
            overflow: 'hidden',
            backgroundColor: color
        }}
    >
      <Card.Meta description={body} />
    </Card>
  )
}
