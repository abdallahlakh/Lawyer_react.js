import React from 'react';

import HeaderSection from './HeaderSection';
import Images from './Images';
import FilterSection from './FilterSection';
import Navbar from './Navbar';
const AdvancedSearch = () => {
    return (
        <div>
            <Navbar/>
            <HeaderSection />
            <Images />
            <FilterSection />
            
        </div>
    );
};

export default AdvancedSearch;
