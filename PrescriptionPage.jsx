import { useState } from "react";

export default function PrescriptionPage(){

const [medicine,setMedicine]=useState("");
const [dosage,setDosage]=useState("");
const [advice,setAdvice]=useState("");

const savePrescription=()=>{

alert("Prescription Saved Successfully");

}

return(

<>

<style>{`

.prescription-container{

min-height:100vh;

background:linear-gradient(135deg,#E9F5F5,#ffffff);

padding:100px 20px;

display:flex;

justify-content:center;

}

.prescription-card{

width:700px;

background:white;

padding:40px;

border-radius:25px;

box-shadow:0 20px 50px rgba(0,0,0,0.1);

}

.prescription-title{

text-align:center;

font-size:38px;

color:#005F73;

margin-bottom:30px;

}

.input-box,.textarea-box{

width:100%;

padding:15px;

margin-top:10px;

margin-bottom:25px;

border:2px solid #D0E8E8;

border-radius:12px;

font-size:16px;

}

.input-box:focus,.textarea-box:focus{

outline:none;

border-color:#0A9396;

}

.save-btn{

width:100%;

padding:15px;

border:none;

border-radius:12px;

background:#0A9396;

color:white;

font-size:18px;

font-weight:bold;

cursor:pointer;

}

.save-btn:hover{

background:#005F73;

}

`}</style>

<div className="prescription-container">

<div className="prescription-card">

<h1 className="prescription-title">

Doctor Prescription

</h1>

<label>

Medicine Name

</label>

<input

className="input-box"

type="text"

value={medicine}

onChange={(e)=>setMedicine(e.target.value)}

placeholder="Enter medicine"

/>

<label>

Dosage

</label>

<input

className="input-box"

type="text"

value={dosage}

onChange={(e)=>setDosage(e.target.value)}

placeholder="1 Tablet Twice Daily"

/>

<label>

Doctor Advice

</label>

<textarea

className="textarea-box"

rows="5"

value={advice}

onChange={(e)=>setAdvice(e.target.value)}

placeholder="Doctor advice"

/>

<button

className="save-btn"

onClick={savePrescription}

>

Save Prescription

</button>

</div>

</div>

</>

)

}