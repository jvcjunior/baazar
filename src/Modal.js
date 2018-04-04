import React from 'react';
import { Modal, Carousel } from 'antd';

const ModalImages = ({ modalVisible, handleOk, handleCancel, currentItem }) => (
  <Modal
    footer={null}
    title={currentItem.titulo}
    visible={modalVisible}
    onCancel={handleCancel}
    onOk={handleOk}
    width={640}
  >
     <Carousel arrows effect="fade">
      {currentItem && currentItem.imgsModal && currentItem.imgsModal.map(imagem => (
        <div>
          <img alt={currentItem.titulo} src={imagem} />
        </div>
      ))
      }
      {/* <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div> */}
    </Carousel>
  </Modal>
);

export default ModalImages;