import React from 'react';
import svgIcons from '../icons';

export default function MySubscriptionBenifits() {
    return (
        <>
            <div className='my-subscription-befits'>
                <div className="container">
                    <div className="row">
                        {/* Left column with subscription details */}
                        <div className="col-5">
                            <div className="reel-deal">
                                {/* Centered icons with a flex layout */}
                                <div style={{ textAlign: 'center', paddingTop: '20px', color: 'white' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                        {/* Icons with rotation reset */}
                                        <div style={{ transform: 'rotate(0deg)' }}>
                                            <img src={svgIcons['teenyicons_star-solid-1.svg']} alt="Star Icon 1" />
                                        </div>
                                        <div style={{ margin: '-20px 5px 20px' }}>
                                            <img src={svgIcons['teenyicons_star-solid-2.svg']} alt="Star Icon 2" />
                                        </div>
                                        <div style={{ transform: 'rotate(0deg)' }}>
                                            <img src={svgIcons['teenyicons_star-solid.svg']} alt="Star Icon 3" />
                                        </div>
                                    </div>
                                </div>
                                <h2>Reel Deal Monthly Movies</h2>
                                <p>Your flexible monthly membership to the latest movies</p>
                                <h3>What is MVP Subscription?</h3>
                            </div>
                            {/* List of subscription benefits */}
                            <ul className="numbered-list">
                                <li>MVP Subscription provides the member 1 movie credit per month</li>
                                <li>They can avail it at any Marcus theater or Movie tavern</li>
                                <li>Members earn 100 points and get a $5 reward redeemable on food & beverages + many more benefits</li>
                            </ul>
                            <div className="fixed-bottom-container">
                                <div className="d-flex align-items-center gap-5 flex-wrap">
                                    {/* Call-to-action buttons */}
                                    <button type="button" className="btn btn-danger">Get started</button>
                                    <p className='m-0'><a className="link-opacity-100" href="#">Learn more</a></p>
                                    <p className='d-lg-none'>Marcus MVP is only available for use in our Mobile app</p>
                                </div>
                            </div>
                        </div>

                        {/* Right column with benefit cards */}
                        <div className="col-7 benefit-cards">
                            <div className="card-wrapper">
                                {/* Benefit cards with icons and text */}
                                <div className="card col-sm-4 p-4 rounded-4 lg-card">
                                    <img src={svgIcons['creditPerMonth.svg']} alt="Credit Per Month" style={{ width: '50px', height: '50px' }} />
                                    <div className="card-body p-0">
                                        <h5 className="card-title pt-5 pb-0 pe-3 m-0">1 Credit per month</h5>
                                        <p className="card-text">One 2D standard movie per month<sup>1</sup></p>
                                    </div>
                                </div>
                                <div className="card col-sm-4 p-4 rounded-4 lg-card">
                                    <img src={svgIcons['rolloverOfUnusedCredits.svg']} alt="Rollover of Unused Credits" style={{ width: '63px', height: '50px' }} />
                                    <div className="card-body p-0">
                                        <h5 className="card-title pt-3 pb-0 pe-3 m-0">Free rollover of unused credits</h5>
                                        <p className="card-text">Unused credits will be combined the following month</p>
                                    </div>
                                </div>
                                <div className="card col-sm-4 p-3 rounded-4 sm-card">
                                    <img src={svgIcons['MMRPerks.svg']} alt="MMR Perks" style={{ width: '60px', height: '62px' }} />
                                    <div className="card-body p-0">
                                        <h5 className="card-title pt-5 pb-0 pe-3 m-0">All MMR perks included</h5>
                                        <p className="card-text">+benefits</p>
                                    </div>
                                </div>
                                <div className="card col-sm-4 p-4 rounded-4 sm-card">
                                    <img src={svgIcons['100Flexible.svg']} alt="100% Flexible" style={{ width: '60px', height: '70px' }} />
                                    <div className="card-body p-0">
                                        <h5 className="card-title pt-4 pb-0 pe-3 m-0">100% flexible</h5>
                                        <p className="card-text">Cancel anytime<sup>2</sup></p>
                                    </div>
                                </div>
                                <div className="card col-sm-4 p-4 rounded-4 lg-card">
                                    <img src={svgIcons['discountOnFoodAndBeverages.svg']} alt="Discount on Food and Beverages" style={{ width: '60px', height: '70px' }} />
                                    <div className="card-body p-0">
                                        <h5 className="card-title pt-4 pb-0 pe-3 m-0">20% discount on food and beverages</h5>
                                        <p className="card-text">Excluding alcohol</p>
                                    </div>
                                </div>
                                <div className="card col-sm-4 p-4 rounded-4 lg-card">
                                    <img src={svgIcons['convenienceFee.svg']} alt="0 Convenience Fees" style={{ width: '50px', height: '50px' }} />
                                    <div className="card-body p-0">
                                        <h5 className="card-title pt-3 pb-0 pe-3 m-0">0 Convenience fees</h5>
                                        <p className="card-text">Waived on all days on any tickets purchase</p>
                                    </div>
                                </div>
                            </div>
                            {/* Disclaimer notes */}
                            <p className="disclaimer"><sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to passports credit only. Other fees apply to full-priced tickets.</p>
                            <p className="disclaimer"><sup>2</sup>Excludes alcohol beverages</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
