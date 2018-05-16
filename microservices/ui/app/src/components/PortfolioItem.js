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
                        <div className="fakeoverlay"></div>
                          <div className="card-img">
                              <img className="thumb" src={`https://filestore.deterioration37.hasura-app.io/v1/file/` + e.file_id} title={e.title} alt={e.title} media-simple="true" />
                          </div>
                          <div className="card-box">
                              <h4 className="card-title mbr-fonts-style mbr-bold display-7 title">{e.title}</h4>
                              <p>{e.content}</p>
                          </div>
                          {/* <div className="mbr-section-btn"><a href="articles.html" className="btn btn-warning display-4">Details</a></div> */}
                      </div>
                  </div>
                )
    } else {
      portfolioItems = 'No items';
    }

    return( <div className="row row-content justify-content-center p-items">
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

                        <div className="col-md-8">
                            <img className="thumb" src={`https://filestore.deterioration37.hasura-app.io/v1/file/` + this.state.modalImg} title={this.state.modalTitle} alt={this.state.modalTitle} media-simple="true" />
                        </div>

                        <div className="col-md-4">
                          <h3 className="my-3">{this.state.modalTitle}</h3>
                          <p>{this.state.modalContent}</p>
                          <h3 className="my-3">Project Details</h3>
                          <ul>
                            <li><a href="#">on GitHub</a></li>
                            <li><a href="#">Live preview</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
              </Modal>
            </div> );

  }

}

export default PortfolioItem;
