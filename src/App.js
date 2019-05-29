import React, { useState, useEffect} from 'react';
import firebase from './firebase/firebaseConfig';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, ColumnToggle } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

function App() {

  const [data, setData] = useState([]);

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

  const { SearchBar } = Search;
  const { ToggleList } = ColumnToggle;

  const columns = [{
    text: 'Từ vựng',
    dataField: 'jp',
    headerClasses: 'demo-row-odd'
  }, {
    text: 'Âm hán việt',
    dataField: 'vn',
  }, {
    text: 'Cách đọc',
    dataField: 'read'
  }, {
    text: 'Ý nghĩa',
    dataField: 'meaning',
  }, {
    text: 'Cách nhớ',
    dataField: 'note',
    hidden: true
  }, {
    text: 'Trình độ',
    dataField: 'level',
    hidden: true
  }, {
    text: 'Loại từ',
    dataField: 'rank',
    hidden: true
  }];

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: 'Đầu',
    prePageText: '<',
    nextPageText: '>',
    lastPageText: 'Cuối',
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }]
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
        <Jumbotron className="shadow-sm p-4 mb-4 bg-white rounded">
          <h1>Chào bạn!</h1>
          <br/>
          <div className="alert alert-primary">
            <a href="null" className="alert-link">Nếu bạn đang loay hoay tra nghĩa từ vựng hán việt, 
            thì đây là tiện ích bạn cần!</a>.
          </div>
        </Jumbotron>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="mb-5">
          <ToolkitProvider
            keyField="jp"
            data={ data }
            columns={ columns }
            search
            columnToggle
          >
            {
              props => (
                <div>
                  <p className="text-muted font-weight-light">(*) Ấn vào tên cột để ẩn bớt cột <em>(hiển thị tốt hơn đối với các thiết bị di động).</em></p>
                  <ToggleList 
                    { ...props.columnToggleProps } 
                    className="customToggleList"
                  />
                  
                  <br/>
                  <hr className="my-2" />
                  <br/>
                  <SearchBar 
                    { ...props.searchProps } 
                    className="custome-search-field mb-4"
                    placeholder="Nhập từ cần tìm..."
                    style={{padding:'1.5rem', fontWeight: 'bold'}}
                  />
                  <BootstrapTable
                    responsive
                    striped
                    hover
                    { ...props.baseProps }
                    pagination={ paginationFactory(options) }
                    noDataIndication="Lấy dữ liệu..."
                  />
                </div>
              )
            }
          </ToolkitProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
