import React, { useEffect } from 'react';
import CarouselPage from '../FeatureComponents/Carousel';
import Categories from '../FeatureComponents/Categories';

import useFetchData from '../FeatureComponents/useFetchData';

function Kids() {
    
    const {result} = useFetchData();


    return (
        <div className='kidsContainer'>
            <CarouselPage></CarouselPage>  
            <Categories/>          
        </div>
    );
}

export default Kids;