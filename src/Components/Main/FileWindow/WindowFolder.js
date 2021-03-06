import React, { Component } from "react";

import Icon from "react-icons-kit";
import { folder as folderClosed } from "react-icons-kit/fa/folder";

import SmallTooltip from "../SmallTooltip/SmallTooltip";

class WindowElement extends Component {
  constructor(props) {
    super(props);

    this.selectFolder = this.selectFolder.bind(this);

    this.state = {};
  }

  selectFolder = (f, parentFolderToken, e) => {
    e.stopPropagation();

    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
      folder: f.folders
    });

    this.props.onSelectFolder(f, parentFolderToken, true);
  };

  render() {
    const { element, parentFolderToken } = this.props;

    return (
      <div onClick={e => this.selectFolder(element, parentFolderToken, e)} className="folder-item">
        <Icon className="icon" icon={folderClosed} size={36} />
        <span className="name">{element.name}</span>
        {(!element.folders || !element.folders.length) && <SmallTooltip text="Empty" />}
      </div>
    );
  }
}

export default WindowElement;
