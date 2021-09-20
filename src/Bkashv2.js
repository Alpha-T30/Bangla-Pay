import BkashButton, { IComponentConfig, SuccessFunction } from 'react-bkash';
import React, { CSSProperties, FC } from 'react';

export default function Bkashv2() {
    const handleClose = () => {
        window.alert("failed"); 
   };

   const handleSuccess = () =>{
       window.alert("success")
   }
	const config = {
		amount: '10000000',
         
		bkashScriptURL: 'https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js',
		createPaymentURL: 'http://localhost:4000/createRequest',
		executePaymentURL: 'http://localhost:4000/executeRequest',
		additionalHeaders: {
			Authorization: 'Bearer YOUR_TOKEN',
		},
	};
    return (<>
        <BkashButton onSuccess={handleSuccess} onClose={handleClose} config={config}>
        <button >Pay with bKash</button>
    </BkashButton>
    <button onClick={handleSuccess}>test</button>
    </>
   
    )
}




// const Example: FC = () => {
// 	const handleSuccess: SuccessFunction = (data) => {
// 		window.alert("success")

// 	};




 

// export default Example;

// const buttonStyle: CSSProperties = {
// 	minWidth: '170px',
// 	height: '38px',
// 	fontSize: '0.875rem',
// 	fontWeight: 500,
// 	lineHeight: 1.5,
// 	color: '#fff',
// 	padding: '0.375rem 0.75rem',
// 	textTransform: 'uppercase',
// 	backgroundColor: '#e2136e',
// 	border: '1px solid #e2136e',
// };


 