import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems 
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside 
                        the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItems 
                        src='images/img-2.jpg'
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems 
                        src='images/img-3.jpg'
                        text='Set Sail in the Atlantic Ocean Visiting Uncharted Territories'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItems 
                        src='images/img-4.jpg'
                        text='Experience Football on top of the Himalayan Mountains'
                        label='Adrenaline'
                        path='/services'
                        />
                        <CardItems 
                        src='images/img-8.jpg'
                        text='Ride through the Sahara Desert on a Guided Camel Tour'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
