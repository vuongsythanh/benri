import React, { useState, useEffect} from 'react';
import firebase from './firebase/firebaseConfig';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, ColumnToggle } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';

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

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: '<<',
    prePageText: '<',
    nextPageText: '>',
    lastPageText: '>>',
    sizePerPageList: [{
      text: '50', value: 50
    }]
  };

  const columns = [{
    text: 'Từ vựng',
    dataField: 'jp',
    headerStyle: (column, colIndex) => {
      if (colIndex % 2 === 0) {
        return {
          backgroundColor: '#81c784'
        };
      }
      return {
        backgroundColor: '#c8e6c9'
      };
    }
  }, {
    text: 'Âm hán việt',
    dataField: 'vn',
    headerStyle: (column, colIndex) => {
      if (colIndex % 2 === 0) {
        return {
          backgroundColor: '#81c784'
        };
      }
      return {
        backgroundColor: '#c8e6c9'
      };
    }
  }, {
    text: 'Cách đọc',
    dataField: 'read',
    hidden: true,
    headerStyle: (column, colIndex) => {
      if (colIndex % 2 === 0) {
        return {
          backgroundColor: '#81c784'
        };
      }
      return {
        backgroundColor: '#c8e6c9'
      };
    }
  }, {
    text: 'Ý nghĩa',
    dataField: 'meaning',
    headerStyle: (column, colIndex) => {
      if (colIndex % 2 === 0) {
        return {
          backgroundColor: '#81c784'
        };
      }
      return {
        backgroundColor: '#c8e6c9'
      };
    }
  }, {
    text: 'Cách nhớ',
    dataField: 'note',
    hidden: true,
    headerStyle: (column, colIndex) => {
      if (colIndex % 2 === 0) {
        return {
          backgroundColor: '#81c784'
        };
      }
      return {
        backgroundColor: '#c8e6c9'
      };
    }
  }, {
    text: 'Trình độ',
    dataField: 'level',
    hidden: true,
    headerStyle: (column, colIndex) => {
      if (colIndex % 2 === 0) {
        return {
          backgroundColor: '#81c784'
        };
      }
      return {
        backgroundColor: '#c8e6c9'
      };
    }
  }, {
    text: 'Loại từ',
    dataField: 'type',
    hidden: true,
    headerStyle: (column, colIndex) => {
      if (colIndex % 2 === 0) {
        return {
          backgroundColor: '#81c784'
        };
      }
      return {
        backgroundColor: '#c8e6c9'
      };
    }
  }];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
        <Jumbotron className="shadow-sm p-4 mb-4 bg-white rounded">
          <h1>Chào bạn hữu!</h1>
          <br/>
          <div className="alert alert-primary">
            <a href="null" className="alert-link">Nếu bạn đang loay hoay </a>
            <a href="null">tra nghĩa từ vựng theo âm hán việt. </a>
            <a href="null">Tra nghĩa từ vựng theo cấp N2-N3-N4-N5. </a>
            <a href="null">Khó nhớ 2136 hán tự. </a>
            <a href="null" className="alert-link">Thì đây là tiện ích bạn cần!</a>
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
            columnToggle
            search
          >
            {
              props => (
                <div>
                  <p className="text-muted font-weight-light">(*) Ấn vào tên cột để ẩn bớt cột 
                    <em>(hiển thị tốt hơn đối với các thiết bị di động).</em>
                  </p>
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
                    filter={ filterFactory() }
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
