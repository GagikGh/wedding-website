"use client";
import { useState } from "react";

export default function ContactPage() {
    const [message,setMessage] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Ուղարկված հաղորդագրություն: ${message}`)
        setMessage("");
    };
    return (
      <div>
        <h1>Կապ</h1>
        <form onSubmit={handleSubmit}>
            <textarea
                value={message}
                onChange={(event)=> setMessage(event.target.value)}
                placeholder="Գրեք ձեր հաղորդագրությունը..."
                rows="4"/> 
            <br/>
            <button type="submit">Ուղարկել</button>
        </form>
      </div>
    );
  }