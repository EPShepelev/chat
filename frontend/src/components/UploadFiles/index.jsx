import React, { useState } from "react";
import { Upload, Modal } from "antd";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const uploadFiles = () => {
  const [state, setState] = setState({
    previewVisible: false,
    previewImage: "",
    fileList: [],
  });

  handleCancel = () => setState({ ...state, previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  return (
    <div className="clearfix">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={this.handlePreview}
        onChange={this.handleChange}
      ></Upload>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={this.handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};
ReactDOM.render(<PicturesWall />, mountNode);

export default UploadFiles;
