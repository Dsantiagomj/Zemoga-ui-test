import React, { Component } from "react";
import { CardsContainer, Footer, Header, Popup } from "../../components";

class HomeView extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popup />
        <CardsContainer />
        <Footer />
      </div>
    );
  }
}
export default HomeView;
