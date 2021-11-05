import React from "react";

//stateless functional components
const Action = (props) => {
	return (
		<div>
			<button
				color="info"
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
				what to do?
			</button>
		</div>
	);
};
export default Action;
