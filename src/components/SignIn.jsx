import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate=useNavigate()

    const [input, changeInput] = useState(
        {
            "email": "",
            "password": "",
  
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {




            axios.post("http://localhost:3000/signin", input).then(

                (response) => {
                    console.log(response.data)
                    if (response.data.status == "Incorrect Password") {
                        alert("Incorrect Password")
                    } else if (response.data.status == "Invalid Email Id") {
                        alert("Invalid Email Id")
                    } else {
                        let token = response.data.token
                        let userId = response.data.userId

                        console.log(userId)
                        console.log(token)

                        sessionStorage.setItem("userId", userId)
                        sessionStorage.setItem("token", token)

                        navigate("/create")
                    }
                }

            ).catch(
                (err) => (
                    console.log(err)
                )
            )


    }


    return (
        <div>

            <NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' onChange={inputHandler} value={input.email} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' onChange={inputHandler} value={input.password} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Sign In</button>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <a href="/signup" className="btn btn-primary">Register here</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn