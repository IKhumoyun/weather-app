import React, {Component} from 'react';


class TopMenu extends Component {

    render() {
        const { cities, activeCity, changeCity } = this.props;

        return (
            <div className="top-menu">
                {
                    cities && cities.map((city)=> (
                        <a href="#" className={(activeCity === city.id) ? 'active' : ''} key={city.id} onClick={()=> changeCity(city.id)}>{city.title}</a>
                    ))
                }
            </div>
        );
    }
}

export default TopMenu;