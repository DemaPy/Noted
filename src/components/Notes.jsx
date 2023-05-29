import { Title, Note } from "./";
import { Skeleton, Col, Row } from "antd";

export const Notes = ({ notes, status, relativeColorsToPostId }) => {

  return (
    <div className="mt-14">
      <div className="md:mb-20 mb-14">
        <Title />
      </div>
      <Skeleton loading={status.loading}>
        <Row gutter={[32, 32]}>
          {notes.map((post) => {
            return (
              <Col
                xs={{ span: 24 }}
                md={{ span: 12 }}
                // xl={{ span: 8 }}
                // xxl={{ span: 6 }}
                key={post.id}
              >
                <Note
                  title={post.title}
                  body={post.body}
                  color={
                    relativeColorsToPostId[post.id]
                      ? relativeColorsToPostId[post.id]
                      : "#eee"
                  }
                />
              </Col>
            );
          })}
        </Row>
      </Skeleton>
    </div>
  );
};
