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
      const response = await axios.get(`${this.state.apiUrl}/candidates`);
      this.setState({
        candidates: response.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { candidates, apiUrl } = this.state;
    return (
      <div>
        <Header />
        <Popup />
        <CardsContainer
          candidates={candidates}
          apiUrl={apiUrl}
          getInfo={this.getInfo}
        />
        <Footer />
      </div>
    );
  }
}
export default HomeView;
