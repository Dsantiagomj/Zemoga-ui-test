import React, { Component } from 'react'

import Card from './../card';
import Submit from './../submit';

import './style.css';

export default class CardsContainer extends Component {
  render() {
    return (
      <div className="container"> 
      <section className="stars">
        <h2 className="stars__title">Votes</h2>
        <Card 
        starCard="stars__card" 
        starName ="Kanye West" 
        starCategory="in Entertainment"
        />
        <Card 
        starCard="stars__card card--2" 
        starName ="Mark Zuckerberg" 
        starCategory="in Business"
        />
        <Card 
        starCard="stars__card card--3" 
        starName ="Cristina Fernández de Kirchner" 
        starCategory="in Politics"
        />
        <Card 
        starCard="stars__card card--4" 
        starName ="Malala Yousafzai" 
        starCategory="in Entertainment"
        />
        <Submit/>
      </section>
      </div>
    )
  }
}
