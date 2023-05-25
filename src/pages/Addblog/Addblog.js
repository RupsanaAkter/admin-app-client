import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import ReactQuill from 'react-quill';

const Addblog = () => {
    const [desc,setdesc]=useState();
    const handleDesc=(e)=>{
        console.log(e);
    }
    return (
        <div>
            <h3>Add blog</h3>
            <div>
            <form action="">
            <CustomInput type="text" label="enter blog tittle"/>
            <select name="" id="">
                <option value="">Select blog category</option>
            </select>
<ReactQuill
theme="snow"
value={desc}
onChange={(evt)=>{
    handleDesc(evt);
}}
/>
            </form>
            
            </div>
          
            
            
        </div>
    );
};

export default Addblog;