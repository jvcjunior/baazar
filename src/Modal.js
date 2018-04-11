import React from 'react';
import { Modal, Row, Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

class ModalImages extends React.Component {
  state = {
    index: 0,
    size: 0
  }

  constructor(props) {
    super(props);
    this.goToNextIndex = this.goToNextIndex.bind(this);
    this.goToPreviousIndex = this.goToPreviousIndex.bind(this);
  } 

  goToNextIndex() {
    var nextIndex = this.state.index + 1;
    if (nextIndex === this.state.size) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: nextIndex })
    }
  }
  goToPreviousIndex() {
      var previousIndex = this.state.index - 1;
      if (previousIndex === -1) {
        this.setState({ index: this.state.size - 1 })
      } else {
        this.setState({ index: previousIndex })
      }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentItem && nextProps.currentItem.imgsModal) {
      console.log('nextPRops', nextProps);
      this.setState({ size: nextProps.currentItem.imgsModal.length })
    }
  }

  render() {
    const { modalVisible, handleOk, handleCancel, currentItem } = this.props;
    
    return (
      <Modal
        footer={null}
        title={currentItem.titulo}
        visible={modalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        width={640}
      > 
          <Row>
            {currentItem.imgsModal && <img style={{ width: '100%' }} alt={currentItem.titulo} src={currentItem.imgsModal[this.state.index]} /> }
          </Row>
          <Row type="flex" justify="center" align="top">
          <ButtonGroup>
            <Button onClick={this.goToPreviousIndex} type="primary">
              <Icon type="left" />Anterior
            </Button>
            <Button onClick={this.goToNextIndex} type="primary">
              Próxima<Icon type="right" />
            </Button>
          </ButtonGroup>
          </Row>
      </Modal>
    );
  }
}

export default ModalImages;