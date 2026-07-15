import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const CreatePost = () => {

  const [input, changeInput] = useState(
    {
      "Message": "",
      "userId": sessionStorage.getItem("userId"),

    }
  )

  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    console.log(input)

    axios.post("http://localhost:3000/create" ,input, {headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(

      (response) => {
        console.log(response.data)
        if (response.data.status == "success") {
          alert("Posted successfully")
        } else {
          alert("Something went wrong")
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

                <label htmlFor="" className="form-label">Post a Message</label>
                <textarea name="Message" value={input.Message} onChange={inputHandler} id="" className="form-control"></textarea>

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <button className="btn btn-success" onClick={readValue}>Post</button>

              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default CreatePost