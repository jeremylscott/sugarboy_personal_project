import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Line} from 'react-chartjs-2'
import './reports.scss'
import {getSalesReports} from '../../ducks/reducer'

class Reports extends Component {

    componentDidMount() {
        this.props.getSalesReports()
    }

    render() {
        console.log(this.props.getSalesReports);
        const data = {
            labels: [
                'Jalepeno','Classic','Glazed','Cinnamon Sugar','Cotton Candy','Maple Baconator','Bavarian Cream',
                'Raspberry Sugar','Cereal Rainbow','French Toast','Brawndo','Blueberry Cake','Expresso Yo Self',
                'Pistachio','Maple Bacon','Orange','Salted Caramel','Old Fashion','Chocolate Longjohn','Chocolate',
                'Donut Holes','Coconut Cream','Sausage Cheese','PB&J','Chocolate Bomb','Mountain Dew','Milk',
                'Coffee','Chocolate Milk','Fruit Filled','Bacon, Egg, and Cheese','Nutella Strawberry',
                'Vanilla Cinnamon Cream','Butter Pecan','Barney Rubble','Juan','Birthday Cake','ET','Weird Al'
            ],
            datasets: [
                {
                    label: 'Sales By Product',
                    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,
                            32,33,34,35,36,37,38,39],
                    fill: false,
                    borderColor: 'green'
                }
            ]
        }

        const options = {
            maintainAspectRatio: false
        }

        return (
            <div>
                <header>
                    <h1>Responsive Linear chart using Chart.js</h1>
                </header>
                <article className='chartContainer'>
                    <Line data={data} options={options}/>
                </article>
                
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,{getSalesReports})(Reports)