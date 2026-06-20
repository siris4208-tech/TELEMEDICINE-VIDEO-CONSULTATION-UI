import { useState } from "react";

export default function SymptomsPage() {

  const [symptoms, setSymptoms] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    alert("Symptoms Submitted Successfully");
  };

  return (

    <>
    <style>{`

      .symptoms-container{
        min-height:100vh;
        background:linear-gradient(135deg,#E9F5F5,#ffffff);
        padding:100px 20px;
        display:flex;
        justify-content:center;
      }

      .symptoms-card{
        width:700px;
        background:white;
        padding:40px;
        border-radius:25px;
        box-shadow:0 20px 50px rgba(0,0,0,0.1);
      }

      .symptoms-title{
        text-align:center;
        color:#005F73;
        font-size:38px;
        margin-bottom:30px;
      }

      .label{
        font-weight:600;
        color:#1A2B3C;
      }

      textarea{

        width:100%;
        padding:15px;
        margin-top:10px;
        margin-bottom:25px;

        border:2px solid #D0E8E8;
        border-radius:12px;

        font-size:16px;
        resize:none;

      }

      textarea:focus{

        outline:none;
        border-color:#0A9396;

      }

      .submit-btn{

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

      .submit-btn:hover{

        background:#005F73;

      }

    `}</style>

    <div className="symptoms-container">

      <div className="symptoms-card">

        <h1 className="symptoms-title">
          Patient Symptoms Notes
        </h1>

        <label className="label">
          Symptoms
        </label>

        <textarea

        rows="5"

        value={symptoms}

        onChange={(e)=>setSymptoms(e.target.value)}

        placeholder="Enter symptoms here..."

        />

        <label className="label">

          Additional Notes

        </label>

        <textarea

        rows="5"

        value={notes}

        onChange={(e)=>setNotes(e.target.value)}

        placeholder="Additional information..."

        />

        <button

        className="submit-btn"

        onClick={handleSubmit}

        >

          Submit Symptoms

        </button>

      </div>

    </div>

    </>

  );
}