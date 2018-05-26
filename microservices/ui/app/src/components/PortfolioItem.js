import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import StackGrid from "react-stack-grid";

import '../css/portfolioItem.css';


//Modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '50%'
  }
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#page');
//end modal

class PortfolioItem extends Component {

  constructor(props){
      super(props);
      this.state = {
        contentLoaded: false,
        modalIsOpen: false,
        modalTitle: '',
        modalImg: '',
        modalContent: '',
        modalGithubLink: '',
        modalLivePreview1: '',
        modalLivePreview2: ''
      }
      this.closeModal = this.closeModal.bind(this);
  }

  //modal
  openModal(){
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal(){
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({
      modalIsOpen: false,
      modalTitle: '',
      modalImg: '',
      modalContent: '',
      modalGithubLink: '',
      modalLivePreview1: '',
      modalLivePreview2: ''
    });
  }

  //modal content
  val(index){
    let currItem = this.props.portfolioItems[index];

    console.log(currItem);
    this.setState({
      modalIsOpen: true,
      modalTitle: currItem.title,
      modalImg: currItem.file_id,
      modalContent: currItem.content,
      modalGithubLink: currItem.github_link,
      modalLivePreview1: currItem.website_link,
      modalLivePreview2: currItem.live_preview_link,

    })
  }
  //end modal content

  render(){
    let portfolioItems, hasLinks;
    if (this.props.portfolioItems.length > 0) {
      portfolioItems = this.props.portfolioItems.map((e, index) =>
                  <div key={e.id} onClick={this.val.bind(this, index)} className="portfolio-item">
                      <div className="card-wrapper">
                        <div className="fakeoverlay"></div>
                          <div className="card-img">
                              <img className="thumb" src={`https://filestore.deterioration37.hasura-app.io/v1/file/` + e.file_id} title={e.title} alt={e.title} media-simple="true" />
                          </div>
                          {e.content || e.title
                              ?
                              <div className="card-box">
                                  <h4 className="card-title mbr-fonts-style mbr-bold display-7 title">{e.title}</h4>
                                  <p>{e.content}</p>
                              </div>
                              :
                              null
                            }
                      </div>
                  </div>
                )
    } else {
      portfolioItems = 'No items';
    }

    if(this.state.modalGithubLink !== '' ||
       this.state.modalLivePreview1 !== '' ||
       this.state.modalLivePreview2 !== '') {
          hasLinks = <h3 className="my-3">Project Details</h3>;
    }

    return(
        <StackGrid
                    columnWidth={"25%"}
                    className="grid-main-container"
                    gutterWidth={15}
                    gutterHeight={15}
                    monitorImagesLoaded={true}
                    >
              {portfolioItems}
              <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <div className="modal-body">
                      <div className="row">
                        <button className="close-modal" onClick={this.closeModal}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>

                        <div className={hasLinks ? "col-md-8" : "col-md-12"}>
                            <img className="thumb" src={`https://filestore.deterioration37.hasura-app.io/v1/file/` + this.state.modalImg} title={this.state.modalTitle} alt={this.state.modalTitle} media-simple="true" />
                        </div>

                        <div className={hasLinks ? "col-md-4" : null}>
                          <h3 className="my-3">{this.state.modalTitle}</h3>
                          <p>{this.state.modalContent}</p>
                          {hasLinks}
                          <ul>
                            {(this.state.modalGithubLink !== '' && this.state.modalGithubLink !== null) ? <li><a href={this.state.modalGithubLink} target="_blank">on GitHub</a></li> : null}
                            {this.state.modalLivePreview1 !== '' ? <li><a href={this.state.modalLivePreview1} target="_blank">Live preview</a></li> : null }
                            {this.state.modalLivePreview2 !== '' ? <li><a href={this.state.modalLivePreview2} target="_blank">Live preview</a></li> : null }
                          </ul>
                        </div>
                      </div>
                    </div>
              </Modal>
            </StackGrid> );
  }
}

export default PortfolioItem;
