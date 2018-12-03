import React, {Component, Fragment} from 'react';
import 'assets/styles/main.scss';

class App extends Component {
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}

export default App;