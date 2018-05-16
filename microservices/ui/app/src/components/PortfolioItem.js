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
        portfolioItems: props.portfolioItems,
      }
  }

  //modal
  openModal(){
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal(){
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({ modalIsOpen: false});
  }

  render(){
    let portfolioItems;
    if (this.state.portfolioItems.length > 0) {
      portfolioItems = this.state.portfolioItems.map(e =>
                  <div key={e.id} className="card p-3 col-12 col-md-4 col-lg-3 portfolio-item">
                      <div className="card-wrapper">
                          <div className="card-img">
                              <img src={`https://filestore.deterioration37.hasura-app.io/v1/file/` + e.file_id} title={e.title} alt={e.title} media-simple="true" />
                          </div>
                          <div className="card-box">
                              <h4 className="card-title mbr-fonts-style mbr-bold display-7">{e.title}</h4>
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
                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <p>modal content</p>
              </Modal>
            </div> );

  }

}

export default PortfolioItem;
