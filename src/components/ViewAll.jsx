import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar';
import axios from 'axios';

const ViewAll = () => {

    const [data, changeDate] = useState([]);

    const fetchData = () => {
        axios.post("http://localhost:3000/viewall",{}, {headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
            (response) => {
                changeDate(response.data)
            }).catch(
                (err) => {
                    console.error("Error fetching entries: ", err)
                }
            )
    }

    useEffect(
        () => {
            fetchData();
        }, []
    )

    return (
        <div>
<NavigationBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            
                                {data.map(
                                    (value, index) => {
                                        return (
                                            <div key={index} className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h6 className="card-title">{value.Message}</h6>
                                                            <p className="card-text"><small className="text-body-secondary">Posted on: {value.postedDate}</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    }
                                )}


                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll