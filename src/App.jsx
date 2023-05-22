
import { Col, Row } from 'antd';
import { Container, Sidebar } from './components/';
import { Main } from './pages/Main';
import './index.css'

function App() {

  return (
    <Container>
      <Row >
        <Col className='flex align-top items-center flex-col border-r-2' span={4}>
          <Sidebar/>
        </Col>
        <Col className='md:ps-20 px-12 text-lg font-semibold' span={20}>
          <Main />
        </Col>
      </Row>
    </Container>
  )
}

export default App
