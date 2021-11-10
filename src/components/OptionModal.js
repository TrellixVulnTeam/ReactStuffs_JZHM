import React from "react";
import Modal from "react-modal";

//When writing a functional component in React, you can use parentheses to wrap implicitly return.
const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.handleClearSelectedOption}
		contentLabel="Selected Option"
		appElement={props.appElement}
	>
		<h3>Selected Option</h3>
		<p>{props.selectedOption}</p>
		<button onClick={props.handleClearSelectedOption}>Okay</button>
	</Modal>
);

export default OptionModal;
