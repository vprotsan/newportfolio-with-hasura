import React, { Component } from 'react';
import Modal from 'react-modal';
import '../css/portfolioItem.css';


//Modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#page');
//end modal

class PortfolioItem extends Component {

  constructor(props){
      super(props);
      this.state = {
        modalIsOpen: false,
        modalTitle: '',
        modalImg: '',
        modalContent: ''
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
      modalContent: ''
    });
  }

  //modal content
  val(index){
    let currItem = this.props.portfolioItems[index];

    console.log(currItem.title);
    this.setState({
      modalIsOpen: true,
      modalTitle: currItem.title,
      modalImg: currItem.file_id,
      modalContent: currItem.content
    })
  }
  //end modal content

  render(){
    let portfolioItems;
    if (this.props.portfolioItems.length > 0) {
      portfolioItems = this.props.portfolioItems.map((e, index) =>
                  <div key={e.id} onClick={this.val.bind(this, index)} className="card p-3 col-12 col-md-4 col-lg-3 portfolio-item">
                      <div className="card-wrapper">
                          <div className="card-img">
                              <img className="thumb" src={`https://filestore.deterioration37.hasura-app.io/v1/file/` + e.file_id} title={e.title} alt={e.title} media-simple="true" />
                          </div>
                          <div className="card-box">
                              <h4 className="card-title mbr-fonts-style mbr-bold display-7 title">{e.title}</h4>
                              <p>{e.content}</p>
                          </div>
                          <div className="mbr-section-btn"><a href="articles.html" className="btn btn-warning display-4">Details</a></div>
                      </div>
                  </div>
                )
    } else {
      portfolioItems = 'No items';
    }

    return( <div className="row row-content justify-content-center">
              {portfolioItems}
              <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <h2>{this.state.modalTitle}</h2>
                    <button onClick={this.closeModal}>close</button>
                    <p>{this.state.modalContent}</p>
              </Modal>
            </div> );

  }

}

export default PortfolioItem;
