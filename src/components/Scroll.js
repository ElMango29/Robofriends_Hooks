import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', boxShadow: '1px 2px 9px', height: '500px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;