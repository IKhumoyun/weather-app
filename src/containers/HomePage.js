import React, {Component, Fragment} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {getInitialWeather, getFutureWeather} from "../actions/weather";
import moment from 'moment';
import { weather as weatherService } from 'services';

import TopMenu from 'components/TopMenu';

class HomePage extends Component {

    constructor(props) {
        super();

        this.state = {
            activeCity: 1512569,
        }
    }

    static path = '/';

    componentDidMount(){
        const { getInitialWeather, getFutureWeather, } = this.props;
        getInitialWeather(this.state.activeCity);
        getFutureWeather(this.state.activeCity);
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevState.activeCity !== this.state.activeCity) {
            const { getInitialWeather, getFutureWeather, } = this.props;
            getInitialWeather(this.state.activeCity);
            getFutureWeather(this.state.activeCity);
        }
    }

    cityChangeHandler = (cityId) => {
        this.setState({
            activeCity: cityId
        })
    };

    render() {
        const { weather, isFetched, future } = this.props;

        const cities = [
            {
                title: 'Tashkent',
                id: 1512569,
            },
            {
                title: 'London',
                id: 2643743,
            },
            {
                title: 'New York',
                id: 5128581
            },
            {
                title: 'Tokyo',
                id: 1850147
            },
            {
                title: 'Moscow',
                id: 524901
            },
            {
                title: 'Paris',
                id: 2988507
            },
            {
                title: 'Hong Kong',
                id: 1819729
            }

        ];

        if(!isFetched)
            return(
                <div>
                    Loading...
                </div>
            );

        return (
            <Fragment>

                <TopMenu cities={cities} activeCity={this.state.activeCity} changeCity={this.cityChangeHandler}/>

                <div className="home-page">
                    <div className="weather-left">
                        <div className={`weather-logo weather-logo-${weatherService.codeFilter(weather.weather[0].id)}`}>
                        </div>
                        <h1 className="temperature"><span>{weather.main.temp.toFixed(0)}</span> &#176; C</h1>

                        <div className="forecast-block">
                            {
                                future && future.map((day)=> (
                                    <div className="forecast-item">
                                        <div className={`item-logo weather-logo-${weatherService.codeFilter(day.weather[0].id)}`}>
                                        </div>
                                        <h5>{moment.unix(day.dt).format('DD/MM')}</h5>
                                        <h6>{day.main.temp.toFixed(0)} &#176; C</h6>
                                        <h5>{day.weather[0].main}</h5>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="weather-right">
                        <h1 className="weather-title">It is fucking <span className="weather-status">{weatherService.codeFilter(weather.weather[0].id)}</span> now in <span className="weather-place">{weather.name}</span></h1>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    weather: state.weather.weather,
    future: state.weather.future,
    isFetched: state.weather.isFetched
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getInitialWeather,
        getFutureWeather
    },
    dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);