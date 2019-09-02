import React, { Component } from "react";
import axios from "axios";

import { CardsContainer, Footer, Header, Popup } from "../../components";

class HomeView extends Component {
  state = {
    apiUrl: "http://localhost:3000/api",
    candidates: [],
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo = async () => {
    try {
      await axios.get(`${this.state.apiUrl}/candidates`).then(response => {
        this.setState({
          candidates: response.data.data,
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { candidates } = this.state;
    return (
      <div>
        <Header />
        <Popup />
        <CardsContainer candidates={candidates} />
        <Footer />
      </div>
    );
  }
}
export default HomeView;
