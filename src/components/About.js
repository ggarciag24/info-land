import React from 'react';


function About(){
    return(
        <div className='about'>
            <h2> About this Project</h2>
            <p> The purpose of this project is for people to acquire information about any country that they are interested in learning about. Also this project was built to showcase my understanding of React, includine managing state, making fetch calls to an open API and displaying the data conditionally. Additionally this project is using Jest to run tests to ensure that all the data is displayed and being fetched properly. </p>

            <h4>Contact Information</h4>
            <p>Email: <a href='mailto: ggarciag.business@outlook.com'>ggarciag.business@outlook.com</a></p>
            <p>Github: <a href='https://github.com/ggarciag24/'>https://github.com/ggarciag24/</a></p>
        </div>
    )
}


export default About