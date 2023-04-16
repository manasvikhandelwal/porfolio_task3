import React from "react"
const Project = () => {
    return (
        <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">My Projects</h2>
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Web Developmemt and Designing</div>
                        <p> I have created payment gateway integration dummy website.In this I have used Rosarpay for payment gateway.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-chart-line"></i>
                        <div class="text">Data Science And Business Analytics</div>
                        <p>In this project I have created a model using supervised machine learning.In this task we have to predict the percentage of marks that a student is expected to score based on the number of hours they studied</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Grocery Store Website</div>
                        <p>In this Project I have Created a Dummy Grocery Store Website using front end developmemt.</p>
                    </div>
                </div>
               </div>
            </div>
        
    </section>
     )
    }
    export default Project;