import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const SignUp = () => {

    const [input, changeInput] = useState(
        {
            "name": "",
            "phone": "",
            "email": "",
            "password": "",
            "conpass": ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {


        if (input.password == input.conpass) {

            let newInput = {
                "name": input.name,
                "phone": input.phone,
                "email": input.email,
                "password": input.password,
            }

            axios.post("http://localhost:3000/signup", input).then(

                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Registered successfully")
                        changeInput({
                            "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "conpass": ""
                        })
                    } else {
                        alert("Email Id already exists")
                        changeInput({
                            "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "conpass": ""
                        })
                    }
                }

            ).catch(
                (err) => (
                    console.error("Error Adding User", err)
                )
            )

        }
        else {
            alert("Password not same as Confirm password")
        }


    }



    return (
        <div>
            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' onChange={inputHandler} value={input.name} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" name='phone' onChange={inputHandler} value={input.phone} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' onChange={inputHandler} value={input.email} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' onChange={inputHandler} value={input.password} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name='conpass' onChange={inputHandler} value={input.conpass} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Register</button>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <a href="" className="btn btn-primary">Back to Login</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp