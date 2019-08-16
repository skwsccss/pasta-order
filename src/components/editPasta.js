import React from "react";
import { connect } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

let mapStateToProps = state => {
  return { data: state };
};

class Editpasta extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contactUsWrapp">
        <div className="cnt-nav">
          <Link to="/cart">
            <img className="prevBtn" src="./images/prevBtn.png" />
          </Link>
          <h4>Edit pasta</h4>
        </div>
        <div className="editPastaItemsWrap">
          <div className="editPastaItem">
            <div className="editPastaItemLeft">
              <h5>BOWL</h5>
              <p>{this.props.data['bow'] === ''? 'Not selected' : this.props.data['bow']}</p>
            </div>
            <div className="editPastaItemRight">
			<Link to="/bowlSelect1">
            <a>CHANGE</a>
          </Link>
            </div>
          </div>
		  <div className="editPastaItem">
            <div className="editPastaItemLeft">
              <h5>SAUCE</h5>
              <p>{this.props.data['sauce'] === '' ? 'Not selected' : this.props.data['sauce']}</p>
            </div>
            <div className="editPastaItemRight">
			<Link to="/bowlSelect2">
            <a>CHANGE</a>
          </Link>
            </div>
          </div>
		  <div className="editPastaItem">
            <div className="editPastaItemLeft">
              <h5>PASTA</h5>
              <p>{this.props.data['pasta'] === '' ? 'Not selected' : this.props.data['pasta']}</p>
            </div>
            <div className="editPastaItemRight">
			<Link to="/bowlSelect3">
            <a>CHANGE</a>
          </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Editpasta);
