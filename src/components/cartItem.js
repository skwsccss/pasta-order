import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Popuprp from './rpPasta';

let mapStateToProps = state => {
	return { data: state };
};

class Crtitem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false,
			numChanged: false,
		};
	}
	handler = () => {
		if (this.state.showPopup) {
			this.setState({ showPopup: false });
		} else {
			this.setState({ showPopup: true });
		}
	};
	render() {
		return (
			<div>
				{this.state.showPopup ? <Popuprp handler={this.handler} /> : null}

				<div className='crtItemWrap'>
					<div className='infoSect'>
						<h4>Alfredo Spagetti</h4>
						<p>Broccoli, Bell pepper, Mushroom Chicken sausage, Black olives, Parsley, Farm fresh salad.</p>
						<div className='tmpWrap'>
							<span>&#8377; 250</span>
							<div onClick={this.handler} className='plType'>
								{this.props.data['bow'] === '' ? 'None' : this.props.data['bow'].split(' ')[0]}
							</div>
							<div className='changeBtn'>
								<span
									onClick={() => {
										if (this.props.data.bowlsNum > 1) {
											this.props.data.bowlsNum--;
										}
										this.setState({ numChanged: !this.state.numChanged });
									}}
								>
									-
								</span>
								<div>{this.props.data.bowlsNum}</div>
								<span
									onClick={() => {
										if (this.props.data.bowlsNum < 50) {
											this.props.data.bowlsNum++;
										}
										this.setState({ numChanged: !this.state.numChanged });
									}}
								>
									+
								</span>
							</div>
						</div>
					</div>
					<div className='imgSect'>
						<img className='cartImg' src='./images/miniBowl.png' />
						<Link to='/editpasta'>
							<button className='edtPastaBtn'>Edit pasta</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps)(Crtitem);
//payment,yourcollection
