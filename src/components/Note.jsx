import { Card } from "antd";

export const Note = ({ color, title, body }) => {
  return (
    <Card
      title={title}
      bordered={false}
      style={{
        textTransform: "capitalize",
        overflow: "hidden",
        backgroundColor: color,
      }}
      className={`${color}`}
    >
      <Card.Meta description={body} />
    </Card>
  );
};
