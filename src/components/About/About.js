import React from 'react'
import Home from '../Home/Home'
import './about.scss'

function About() {
    return (
        <div>
            <Home/>
            <div className='aboutWrapper'>
                <div className='leftDiv'></div>
                <body className='bodMid'>
                    <div className='title'>
                        <h1>About Us</h1>
                    </div>
                    <div className='spacer'></div>
                    <div className='picText'>
                        <img src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/p200x200/28471477_173513783284846_3553170248628699136_n.jpg?_nc_cat=107&_nc_ht=scontent-ort2-1.xx&oh=2e1a539cbc61db5d6fc0995d23c5a8bf&oe=5CC1DD0F'/>
                        <p>
                            Opened in October of 2016, Sugarboy Donuts has become a family-run, 
                            neighborhood mainstay. Offering a wide variety of donuts, breakfast 
                            items and hand-mixed drinks, Sugarboy uses the highest quality raw 
                            materials to make their goods from scratch. Aiming to be the go-to 
                            option for donut fanatics, Sugarboy donuts is looking to expand in 
                            North Texas.
                        </p>
                    </div>
                </body>
                <div className='rightDiv'></div>
            </div>
        </div>
    )
}

export default About