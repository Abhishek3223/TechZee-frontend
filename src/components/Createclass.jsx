import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './createCLass.css'
import { AllContext } from "../Context";

const Createclass = () => {
    const { createCLass } = useContext(AllContext);
    const [credentials, setcredentials] = useState({
        title: "",
        description: "",
        date: "",
    });
    const host = 'http://localhost:5000'
    let navigate = useNavigate();

    const handleOnChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/createclass`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('authToken')
            },
            body: JSON.stringify(
                {
                    title: credentials.title,
                    email: localStorage.getItem('userEmail'),
                    teacherName: localStorage.getItem('name'),
                    ScheduledTime: credentials.date,
                    discription: credentials.description
                }),
        });
        const json = await response.json();

        if (!json.success) {
            alert("ENTER VALID CREDENTIALS");
        } else {
            console.log(json);
            // navigate("/dashboard", {
            //     state: { useremail: localStorage.getItem("userEmail") },
            // });
        }
    };
    return (

        createCLass && <div class="container">
            <form action="#" onSubmit={handleSubmit}>
                <div className="top">
                    <div class="title">Schedule Class</div>
                    <div class="button">
                        <input type="submit" />
                    </div>
                </div>

                <div class="user__details">

                    <div class="input__box">
                        <span class="details">Title</span>
                        <input type="text" placeholder="E.g: Basic maths" value={credentials.email} name="title"
                            onChange={handleOnChange} required />
                    </div>

                    <div class="input__box">
                        <span class="details">Description</span>
                        <input type="text" className='description' placeholder="this ....." value={credentials.email} name="description"
                            onChange={handleOnChange} required
                        />
                    </div>

                    <div class="input__box">
                        <span class="details">Date</span>
                        <input type="datetime-local" id="birthdaytime" name='date' onChange={handleOnChange} />
                    </div>

                </div>
                {/* <div class="gender__details">
                    <input type="radio" name="gender" id="dot-1" />
                    <input type="radio" name="gender" id="dot-2" />
                    <input type="radio" name="gender" id="dot-3" />
                    <span class="gender__title">Gender</span>
                    <div class="category">
                        <label for="dot-1">
                            <span class="dot one"></span>
                            <span>Male</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
                            <span>Female</span>
                        </label>
                        <label for="dot-3">
                            <span class="dot three"></span>
                            <span>Prefer not to say</span>
                        </label>
                    </div>
                </div> */}

            </form>
        </div>

    )
}

export default Createclass