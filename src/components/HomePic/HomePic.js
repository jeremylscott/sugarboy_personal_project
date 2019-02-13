import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './homepic.scss'
import mainpic9 from '../../images/mainpic9.jpg'
import mainpic8 from '../../images/mainpic8.jpg'
import mainpic5 from '../../images/mainpic5.jpg'
import mainpic4 from '../../images/mainpic4.jpg'
import mainpic7 from '../../images/mainpic7.jpg'
import Home from '../Home/Home'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class HomePic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggleInfo: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                toggleInfo: !this.state.toggleInfo
            })
            
        }, 15000);
    }
    
    render() {

        if(this.props.user.isadmin === true) {
            return <Redirect to='/admin'/>   //  Go to admin portal if user is an admin
        }

        return (
            <div className='homePicCont'>
                <Home/>
                <div className='mainHome'>
                    <Carousel
                        animationSpeed={2000}
                        autoPlay={5000}
                        stopAutoPlayOnHover
                        centered
                        infinite>
                        <img className='mainPic9' src={mainpic9} alt='donuts'/>
                        <img className='mainPic9' src={mainpic8} alt='donuts'/>
                        <img className='mainPic9' src={mainpic5} alt='donuts'/>
                        <img className='mainPic9' src={mainpic4} alt='donuts'/>
                        <img className='mainPic9' src={mainpic7} alt='donuts'/>
                    </Carousel>
                </div>

                {this.state.toggleInfo ? 
                <p className='site-info'>Welcome to Sugarboy Donuts!  Please browse through all of our delicious products.  If you
                 wish to purchase products online, click the drop down menu and login or create an account.  Once you do that,
                  you are able to add items to your cart, and pay for them via credit card.</p>
                :
                null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => state 

export default connect(mapStateToProps)(HomePic)