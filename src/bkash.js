import BkashButton, { IComponentConfig, SuccessFunction } from 'react-bkash';
import React, { CSSProperties, FC } from 'react';
import {useEffect,useState} from 'react'

const Example: FC = () => {

const [check, setCheck] =useState("") ; 

console.log(check)

	 
	const handleSuccess: SuccessFunction = (data) => {
		window.alert("success") 

	};

	const handleClose = () => {
		  
		 window.location.reload()
		  
		   
	};

	const config: IComponentConfig = {
		amount: '10',
         
		bkashScriptURL: 'https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js',
		createPaymentURL: 'https://pay-server.herokuapp.com/createRequest',
		executePaymentURL: 'https://pay-server.herokuapp.com/executeRequest',
		additionalHeaders: {
			Authorization: 'Bearer YOUR_TOKEN',
		},
	};

	return (
		<BkashButton onSuccess={handleSuccess} onClose={handleClose} config={config}>
			<button style={buttonStyle}>Pay with bKash</button>
		</BkashButton>
	);
};

export default Example;

const buttonStyle: CSSProperties = {
	minWidth: '170px',
	height: '38px',
	fontSize: '0.875rem',
	fontWeight: 500,
	lineHeight: 1.5,
	color: '#fff',
	padding: '0.375rem 0.75rem',
	textTransform: 'uppercase',
	backgroundColor: '#e2136e',
	border: '1px solid #e2136e',
};


 