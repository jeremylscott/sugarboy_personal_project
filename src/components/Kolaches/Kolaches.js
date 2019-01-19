import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from '../Home/Home'
import './kolaches.scss'
import {getKolaches,getUser} from '../../ducks/reducer'


class Kolaches extends Component {

    componentDidMount() {
        this.props.getKolaches()
        this.props.getUser()
    }

    render() {
        let kolacheList = this.props.kolaches.map((kolache,i) => {
            return (
                    <div key={i}className='cardWrapper4'>
                        <img className='cardImg4' src={kolache.prodimg} alt='donut'/>
                        <span className='name4'>{kolache.prodname}</span>
                        <span className='descrip'>{kolache.proddesc}</span>
                    </div>
            )
        })

        let userKolacheList = this.props.kolaches.map((kolache,i) => {
            return (
                    <div key={i}className='cardWrapper4'>
                        <img className='cardImg4' src={kolache.prodimg} alt='donut'/>
                        <span className='name4'>{kolache.prodname}</span>
                        <span className='descrip4'>{kolache.proddesc}</span>
                        <button className='butt4'>Add to Cart</button>
                    </div>
            )
        })


        return (
            <div className='pageStructure4'>
                <div className='topStructure4'>
                    <Home/>
                    <div className='kolacheBody'>
                        <h1 className='pageTopic4'>Kolaches</h1>
                    </div>
                    <div className='mainDisplay4'>
                        <div className='leftCol4'></div>
                        <div className='kolacheDisplay'>
                        {this.props.user.username ?
                            userKolacheList
                            :
                            kolacheList   
                        }
                        </div>
                        <div className='rightCol4'></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        kolaches: state.kolaches,
        user: state.user
    }
}

export default connect(mapStateToProps,{getKolaches,getUser})(Kolaches)

