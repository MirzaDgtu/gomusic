import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreditCardInformation from './CreditCards';


export function BuyModalWindow(props){
    render() 
        return (
            <Modal id="buy" tabIndex="-1" role="dialog" isOpen={props.showModal} toggle={props.toggle}>
                <div role="document"> 
                    <ModalHeader toggle={props.toggle} className="bg-success text-white">
                        Buy Item
                    </ModalHeader>
                    <ModalBody>
                    <CreditCardInformation show={true} operation="Charge" toggle={props.toggle} />
                    </ModalBody>
                </div>
            </Modal>
        );    
   }

   class SignInForm extends React.Component{
    constructor(){
        super(props);
        //this method will get called whenever a user input data into our
       form
        this.handleChange = this.handleChange.bind(this);
        //this method will get called whenever the HTML form gets submitted
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
         errormessage = ''
        };
        }
       
   }
   