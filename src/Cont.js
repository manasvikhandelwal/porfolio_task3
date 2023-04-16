import { useState } from "react";
import React from "react"
import axios from "axios";
const Cont = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')
 
    


    const onsubmitHandler= async() =>{

        var data={
            name,
            email,
            subject,
            message
        }
        

     await   axios.post("http://localhost:8080/contact_form",data).then(
            (response) => {
                var result = response.data;
                console.log(result);
            }
        ).catch((err)=>{
            console.log(err)
        });

    }
    return (
        <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Manasvi Khandelwal</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Jaipur,Rajasthan</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">khandelwal.manasvi20@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" name ="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required>
                           </input> </div>
                            <div class="field email">
                                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email" required>
                            </input></div>
                        </div>
                        <div class="field">
                            <input type="text" name="subject" onChange={(e)=>setSubject(e.target.value)}value={subject} placeholder="Subject" required>
                        </input></div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" name="message" onChange={(e)=>setMessage(e.target.value)}value={message} placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit" name="submit" onClick={onsubmitHandler}>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Cont;