import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";


//create your first component
const Home = ({timer}) => {
	return (
		<div className="container">
            
        <SecondsCounter seconds={timer} />
	
			
		</div>
	);
};

export default Home;