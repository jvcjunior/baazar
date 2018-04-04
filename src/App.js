import React, { Component } from 'react';
import { Row, Col, Card, Divider } from 'antd';
// import ModalImages from './Modal';
import data from './data'
import './App.css';

const { Meta } = Card;

class App extends Component {
  // state = {
  //   modalVisible: false,
  //   currentItem: {}
  // }
  // showModal = (item) => {
  //   this.setState({
  //     modalVisible: true,
  //     currentItem: item
  //   });
  // }
  // handleOk = (e) => {
  //   console.log('handle ok');
  //   this.setState({
  //     modalVisible: false,
  //   });
  // }
  // handleCancel = (e) => {
  //   console.log('handle cancel');
  //   this.setState({
  //     modalVisible: false,
  //   });
  // }
  render() {
    return (
      <div className="App" style={{padding: '50px'}}>
        <Row type="flex" >
          {data.map(item => (
            <Col 
              style={{ marginBottom: '50px'}} 
              key={item.id} md={{ span: 8, offset: 1 }} 
              lg={{ span: 5, offset: 1 }} >
              <Card
                hoverable
                style={{ width: 240 }}
                // onClick={() => this.showModal(item)}
                cover={<img alt="example" src={item.imgCapa} />}
              >
                <Meta
                  title={item.titulo}
                  description={item.subtitulo}
                />
                <Divider />
                {item.descricao}
              </Card>
            </Col>
          ))}
        </Row>
        {/* <ModalImages
          currentItem={this.state.currentItem}
          modalVisible={this.state.modalVisible}
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
        /> */}
      </div>
    );
  }
}

export default App;
