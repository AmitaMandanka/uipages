import React, { Component } from 'react';
import {ToastContainer, toast, Zoom, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import {ToastsContainer, ToastsStore} from 'react-toasts';

class Toast extends Component{
    handleclick = () =>{
        ToastsStore.error("hay you clicked")
        
    }
    render(){
        return(
            <div>
                <button onClick ={this.handleclick}>clickme</button>
                <ToastsContainer store={ToastsStore}/>
            </div>
        );
    }
}

export default Toast