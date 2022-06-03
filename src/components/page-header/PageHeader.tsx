import React from 'react';

import bg from '../../assets/footer-bg.jpg'
import './page-header.scss';

interface PageHeaderProps {
    children: React.ReactNode;
}

const PageHeader : React.FC<PageHeaderProps> = (props) => {
    return (
        <div className='page-header' style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
        </div>
    );
};

export default PageHeader;