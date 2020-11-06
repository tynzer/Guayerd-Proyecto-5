import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Productos from './Components/Productos';
import Contacto from './Components/Contacto';
import Header from './Components/Header';
import Footer from './Components/Footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            URL_ : "https://guayerd-proyecto3-d.herokuapp.com/"

        }
    }

    componentDidMount() {
        fetch(`${this.state.URL_}productList`).then((res) => res.json())
            .then(
                (productList) => {
                    this.setState({ productList: productList });
                }
            )
        /*  fetch de productos
         this.setState(productList:productosrecibidosdel fetch) */
    }


    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/productos"><Productos productList={this.state.productList} /></Route>
                    <Route path="/contacto"><Contacto /></Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;

/*
<Route path="/"><Contacto/></Route>

*/