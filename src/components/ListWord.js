import React,{ useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import firebase from '../firebase/firebaseConfig';

function ListWord() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await firebase.database().ref().child("words");
    result.on("value", snap => {
      setData(snap.val());
    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
            <tr key={ item.jp }>
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
  ); 
}

export default ListWord;