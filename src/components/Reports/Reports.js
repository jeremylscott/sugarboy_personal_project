import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Line} from 'react-chartjs-2'
import './reports.scss'
import {getSalesReports} from '../../ducks/reducer'

class Reports extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataValues: '',
            labelValues: ''
        }
    }

    componentDidMount() {
        this.props.getSalesReports()
        setTimeout(() => {
            this.format(this.props.salesReports)
        }, 1000);
    }

    format = (array) => {        // used to loop thru the salesReport array and dynamically get the values for the chart.
        const dataValues = []
        const labelValues = array.map(product => {
            dataValues.push(product.count)
            return product.prodname
        })
        this.setState({
            dataValues,
            labelValues
        })
    }

    render() {
        const data = {
            labels: this.state.labelValues,
            datasets: [
                {
                    label: 'Sales By Product',
                    data: this.state.dataValues,
                    fill: false,
                    lineTension: .1,
                    borderColor: 'rgb(0, 29, 74)',
                    backgroundColor: 'rgb(0, 29, 74)',
                    pointBorderColor: 'rgb(245, 130, 32)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgb(0, 29, 74)',
                    pointHoverBorderColor: 'rgb(245, 130, 32)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 50
                }
            ]
        }

        const options = {
            maintainAspectRatio: false
        }

        return (
            <div>
                <header>
                    <h1 className='chartTitle'>Live Chart of Every Product Sold</h1>
                </header>
                <Link to='/admin' className='adminLink'>Back to Admin Page</Link>
                <article className='chartContainer'>
                    <Line data={data} options={options}/>
                </article>
                
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps,{getSalesReports})(Reports)