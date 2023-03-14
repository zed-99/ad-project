import React, { Component } from 'react';
import './style.scss'

interface Props { }
class App extends Component<Props> {
    render() {
        return (
            <div className="box">
                Hello , World
                <span>i,am jack  im a boy</span>
            </div>
        );
    }
}

export default App;
