import React from "react";
import Modal from "react-modal";

//When writing a functional component in React, you can use parentheses to wrap implicitly return.
const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.handleClearSelectedOption}
		contentLabel="Selected Option"
		appElement={props.appElement}
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		{props.selectedOption && (
			<p className="modal__body">{props.selectedOption}</p>
		)}
		<button className="button" onClick={props.handleClearSelectedOption}>
			Okay
		</button>
	</Modal>
);

export default OptionModal;
