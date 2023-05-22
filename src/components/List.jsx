
import { Col, Row, Skeleton } from 'antd';
import { Note } from './';


export const List = ({ status, posts }) => {

    return (
        <Row gutter={[24, 16]}>
            {
                status.loading
                    ?
                    <Skeleton loading={loading}></Skeleton>
                    :
                    posts.map(post => {
                        return (
                            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }} xxl={{ span: 6 }} key={post.id}>
                                <Note title={post.title} body={post.body} color={'#F18D31'} />
                            </Col>
                        )
                    })
            }
      </Row>
    )
}
