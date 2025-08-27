import React from "react";



const SecondsCounter = ({ seconds}) => {

    const digits = String(seconds).padStart(6,"0").split("")

    return (
        <div className="container bg-dark mt-4">
            <div className="row bg-dark justify-content-center align-items-center">
                <div className="col-auto">
                    <div className="bg-secondary rounded text-white mx-3">

                        <i class="fa-solid fa-clock fa-3x"></i>

                    </div>
                </div>
                {digits.map((el, i) => (
                    <div className="col-auto" key={i}>
                        <div className="bg-secondary text-white mx-3 d-flex rounded justify-content-center align-items-center fs-1 w-75 h-75">{el}</div>
                    </div>
                ))}


            </div>
        </div>


    )

};
export default SecondsCounter