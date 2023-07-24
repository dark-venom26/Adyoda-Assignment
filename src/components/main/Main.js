import { useState } from 'react';
import './main.scss';

function Main() {
    const [selectedOption, setSelectedOption] = useState('recommend');

    const handleOptionChange = (event) => {
        console.log(event.target.value)
        console.log(selectedOption)
      setSelectedOption(event.target.value);
    };
    
  return (
    <div className='main'>
        <div className="main__about">
            <div className="main__about__headings">
                <div className="main__about__headings__first">Access curated courses worth</div>
                <div className="main__about__headings__second">₹ <span className="main__about__headings__second__strikethrough">18,500</span> <span>at just</span> <span className='blue'>₹ 99</span> <span>per year!</span></div>
            </div>
            <div className="main__about__desc">
                <div className="main__about__desc__block">
                    <img src='/books.svg' alt='icon' className="main__about__desc__block__icon"></img>
                    <div className="main__about__desc__block__para"><span className="main__about__desc__block__para__blue">100+</span> Job relevant courses </div>
                </div>
                <div className="main__about__desc__block">
                    <img src='/clock.svg' alt='icon' className="main__about__desc__block__icon"></img>
                    <div className="main__about__desc__block__para"><span className="main__about__desc__block__para__blue">20,000+</span> Hours of content</div>
                </div>
                <div className="main__about__desc__block">
                    <img src='/live.svg' alt='icon' className="main__about__desc__block__icon"></img>
                    <div className="main__about__desc__block__para"><span className="main__about__desc__block__para__blue">Exclusive</span> webinar access</div>
                </div>
                <div className="main__about__desc__block">
                    <img src='/scholarship.svg' alt='icon' className="main__about__desc__block__icon"></img>
                    <div className="main__about__desc__block__para">Scholarship worth <span className="main__about__desc__block__para__blue">₹94,500</span></div>
                </div>
                <div className="main__about__desc__block">
                    <img src='/ads.svg' alt='icon' className="main__about__desc__block__icon"></img>
                    <div className="main__about__desc__block__para"><span className="main__about__desc__block__para__blue">Ad Free</span> learning experience</div>
                </div>
            </div>
        </div>
        <div className="main__form">
            <div className="main__form__tab">
                <div className="main__form__tab__preview">
                    <div className="main__form__tab__preview__signup">
                        <div className="main__form__tab__preview__signup__circle">1</div>
                        <p className='main__form__tab__preview__signup__para'>Sign Up</p>
                    </div>
                    <div className="main__form__tab__preview__subscribe">
                        <div className="main__form__tab__preview__subscribe__circle">2</div>
                        <p className="main__form__tab__preview__subscribe__para">Subscribe</p>
                    </div>
                </div>
            </div>
            <div className="main__form__heading">Select your subcription plan</div>
            <div className="main__form__package">
                <label className="main__form__package__block offer_block">
                    <div className="main__form__package__block__offer">Offer expired</div>
                    <div className="main__form__package__block__input_field">
                        <input type="radio" className='main__form__package__block__input_field__input' value="offer" checked={selectedOption === 'offer'} onChange={handleOptionChange} disabled/>
                        <div className="main__form__package__block__input_field__checkmark"></div>
                        <div className="main__form__package__block__input_field__title">12 Months Subscription</div>
                    </div>
                    <div className="main__form__package__block__pricing">
                        <div className="main__form__package__block__pricing__total">
                            <div className="main__form__package__block__pricing__total__title">Total</div>
                            <div className="main__form__package__block__pricing__total__amount">₹99</div>
                        </div>
                        
                        <div className="main__form__package__block__pricing__monthly">
                            <div className="main__form__package__block__pricing__monthly__amount">₹8</div>
                            <div className="main__form__package__block__pricing__monthly__title">/mo</div>
                        </div>
                    </div>
                </label>
                <label className="main__form__package__block recommend_block">
                    <div className="main__form__package__block__recommend">Recommended</div>
                    <div className="main__form__package__block__input_field">
                        <input type="radio" className='main__form__package__block__input_field__input' value="recommend" checked={selectedOption === 'recommend'} onChange={handleOptionChange} />
                        <div className="main__form__package__block__input_field__checkmark"></div>
                        <div className="main__form__package__block__input_field__title">12 Months Subscription</div>
                    </div>
                    <div className="main__form__package__block__pricing">
                        <div className="main__form__package__block__pricing__total">
                            <div className="main__form__package__block__pricing__total__title">Total</div>
                            <div className="main__form__package__block__pricing__total__amount">₹179</div>
                        </div>
                        
                        <div className="main__form__package__block__pricing__monthly">
                            <div className="main__form__package__block__pricing__monthly__amount">₹8</div>
                            <div className="main__form__package__block__pricing__monthly__title">/mo</div>
                        </div>
                    </div>
                </label>
                <label className="main__form__package__block">
                    <div className="main__form__package__block__input_field">
                        <input type="radio" className='main__form__package__block__input_field__input' value="third_option" checked={selectedOption === 'third_option'} onChange={handleOptionChange} />
                        <div className="main__form__package__block__input_field__checkmark"></div>
                        <div className="main__form__package__block__input_field__title">6 Months Subscription</div>
                    </div>
                    <div className="main__form__package__block__pricing">
                        <div className="main__form__package__block__pricing__total">
                            <div className="main__form__package__block__pricing__total__title">Total</div>
                            <div className="main__form__package__block__pricing__total__amount">₹149</div>
                        </div>
                        
                        <div className="main__form__package__block__pricing__monthly">
                            <div className="main__form__package__block__pricing__monthly__amount">₹25</div>
                            <div className="main__form__package__block__pricing__monthly__title">/mo</div>
                        </div>
                    </div>
                </label>
                <label className="main__form__package__block">
                    <div className="main__form__package__block__input_field">
                        <input type="radio" className='main__form__package__block__input_field__input' value="fourth_option" checked={selectedOption === 'fourth_option'} onChange={handleOptionChange}/>
                        <div className="main__form__package__block__input_field__checkmark"></div>
                        <div className="main__form__package__block__input_field__title">3 Months Subscription</div>
                    </div>
                    <div className="main__form__package__block__pricing">
                        <div className="main__form__package__block__pricing__total">
                            <div className="main__form__package__block__pricing__total__title">Total</div>
                            <div className="main__form__package__block__pricing__total__amount">₹99</div>
                        </div>
                        
                        <div className="main__form__package__block__pricing__monthly">
                            <div className="main__form__package__block__pricing__monthly__amount">₹33</div>
                            <div className="main__form__package__block__pricing__monthly__title">/mo</div>
                        </div>
                    </div>
                </label>
            </div>
            <div className="main__form__review">
                <div className="main__form__review__subscription_fee">
                    <div className="main__form__review__subscription_fee__title">Subscription Fee</div>
                    <div className="main__form__review__subscription_fee__amount">₹18,500</div>
                </div>
                <div className="main__form__review__limited_offer">
                    <div className="main__form__review__limited_offer__block">
                        <div className="main__form__review__limited_offer__block__title">Limited time offer</div>
                        <div className="main__form__review__limited_offer__block__amount">- ₹18,401</div>
                    </div>
                    <div className="main__form__review__limited_offer__subtitle">
                        <div className="main__form__review__limited_offer__subtitle__icon"></div>
                        <div className="main__form__review__limited_offer__subtitle__para">Offer valid till 25th March 2023 </div>
                    </div>
                </div>
                <div className="main__form__review__total_fee">
                    <div className="main__form__review__total_fee__title"><span className="bold600">Total</span> (Incl. of 18% GST)</div>
                    <div className="main__form__review__total_fee__amount">₹149</div>
                </div>
            </div>
            <div className="main__form__btns">
                <button onClick={undefined} className="main__form__btns__cancel">Cancle</button>
                <button onClick={undefined} className="main__form__btns__submit">proceed to pay</button>
            </div>
            <div className="razorpay_logo"></div>
        </div>
    </div>
  )
}

export default Main