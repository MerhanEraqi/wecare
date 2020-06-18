import React from 'react';
import { render } from 'react-dom';

class navBar extends React.Component {
    state = {
        isTop: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id='#nav'>
                {this.state.isTop ?
                    <nav className="navbar navbar-expand-lg navbar-light" id='#nav'>
                        <div className="container-md">
                            <a className="navbar-brand" href="#"><span>We</span>Care</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                </ul>
                                <input type="button" value='Sign In' className='btn btn-secondary' />
                            </div>
                        </div>
                    </nav >
                    : <nav className="navbar navbar-expand-lg navbar-light scrolled" id='#nav'>
                        <div className="container-md">
                            <a className="navbar-brand" href="#"><span>We</span>Care</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                </ul>
                                <input type="button" value='Sign In' className='btn btn-secondary' />
                            </div>
                        </div>
                    </nav >
                }
            </nav >
        )
    }
};

export default navBar;