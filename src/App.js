import React, { useState, useEffect, useRef } from 'react';
import firebase from './firebase/firebaseConfig';
import { Table, Container, Row, Col, Jumbotron, Button, InputGroup, FormControl } from 'react-bootstrap';

function App() {

  const [data, setData] = useState([]);
  const inputText = useRef(null);

  const fetchData = async () => {
    const result = await firebase.database().ref().child("words");
    result.on("value", snap => {
      let resData = snap.val();
      setData(resData)
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onChangeText = () => {
    let text = inputText.current.value;
    if(text!==''){
      let newData = data.filter(item => item.vn.toLowerCase().includes(text));
      setTimeout(() => {
        setData(newData);
      }, 1000);
    } else {
      setTimeout(() => {
        fetchData();
      }, 1100);
    }
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
        <Jumbotron>
          <h1>Chào bạn!</h1>
          <p>
            Nếu bạn đang gặp khó khăn trong việc loay hoay tra nghĩa từ vựng hán việt 
            thì đây là tiện ích bạn cần!
          </p>
          <p>
            <Button variant="primary">Xem về mình</Button>
          </p>
        </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Nhập từ hán việt..."
            aria-label="Nhập từ hán việt..."
            aria-describedby="basic-addon2"
            ref={inputText}
            onChange={onChangeText}
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">Tìm kiếm</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                  <th>Từ vựng</th>
                  <th>Âm hán việt</th>
                  <th>Cách đọc</th>
                  <th>Ý nghĩa</th>
                  <th>Cách nhớ</th>
                  <th>Trình độ</th>
                  <th>Loại từ</th>
                </tr>
            </thead>
            <tbody>
              {data.map(item => (
                  <tr key={item.jp}>
                    <td>{ item.jp }</td>
                    <td>{ item.vn }</td>
                    <td>{ item.read }</td>
                    <td>{ item.meaning }</td>
                    <td>{ item.note }</td>
                    <td>{ item.level }</td>
                    <td>{ item.rank }</td>
                  </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
