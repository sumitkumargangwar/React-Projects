// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css';
import Bodymid from './components/Bodymid';
import MySubscriptionBenifits from './components/MySubscriptionBenifits';
import CollapseComponent from './components/CollapseComponent';

function App() {
  return (
    <div className='my-influx-app'>
      {/* Background for header section */}
      <div className='header-bg-full'>
        {/* Header component includes the navigation and logo */}
        <Header />
        {/* Bodymid component for the main content */}
        <Bodymid />
      </div>
      {/* Subscription benefits section */}
      <MySubscriptionBenifits />
      {/* FAQ section with collapsible items */}
      <div className="faq-cont">
        <div className="container">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          {/* Each CollapseComponent represents a collapsible FAQ item */}
          <CollapseComponent title="What is MVP Subscription?" defaultOpen={true}>
            <p>MVP Subscription provides the member with 1 movie credit per month. Members earn 100 points and get a $5 reward redeemable on food & beverages plus many more benefits. <br /> <br /> Members earn 100 points and get a $5 reward redeemable on food & beverages plus many more benefits. Members earn 100 points and get a $5 reward redeemable on food & beverages plus many more benefits.</p>
          </CollapseComponent>
          <CollapseComponent title="Where can I use the credits?">
            <p>They can avail it at any Marcus Theater or Movie Tavern.</p>
          </CollapseComponent>
          <CollapseComponent title="What are the rewards?">
            <p>Members earn 100 points and get a $5 reward redeemable on food & beverages plus many more benefits.</p>
          </CollapseComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
