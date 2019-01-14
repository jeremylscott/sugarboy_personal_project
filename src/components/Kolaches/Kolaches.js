import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import './kolaches.scss'
import {getKolaches} from '../../ducks/reducer'


class Kolaches extends Component {

    componentDidMount() {
        this.props.getKolaches()
    }

    render() {
        let kolacheList = this.props.kolaches.map((kolache,i) => {
            return (
                <div key={i}>
                    <span>{kolache.prodName}</span>
                    <img src={kolache.prodImg}/>
                    <span>{kolache.prodDesc}</span>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <Header/>
                    <div>
                        <h1>Kolaches</h1>
                        {kolacheList}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        kolaches: state.kolaches
    }
}

export default connect(mapStateToProps,{getKolaches})(Kolaches)

