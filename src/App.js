import React, { Component } from 'react';
import { Row, Col, Card, Carousel, Divider } from 'antd';
import './App.css';

const { Meta } = Card;

class App extends Component {
  render() {
    return (
      <div className="App" style={{padding: '50px'}}>
        <Row gutter={16} style={{ marginBottom: '50px'}}>
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://i.imgur.com/ocDrKZc.jpg" />}
            >
              <Meta
                title="Mesinha Artesanal"
                description="R$ 50,00"
              />
              <Divider />
              Descrição: Mesinha branca de 1 metro de altura.
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://i.imgur.com/8oAzvd1.jpg" />}
            >
              <Meta
                title="Cadeira altura regulável"
                description="R$ 80,00 cada"
              />
              <Divider />
              Quantidade: 2 <br/>
              Descrição: Cadeira vermelha com altura regulável do ETNA.
            </Card>
          </Col>
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '50px'}}>
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginBottom: '50px'}}>
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
