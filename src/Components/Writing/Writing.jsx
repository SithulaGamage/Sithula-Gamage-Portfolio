import React from 'react';
import './Writing.css';
import Divider from '@mui/material/Divider';

export const Writing = () => {
    const dividerStyle = {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: 'var(--highlight)',
        position: 'relative',
        borderRadius: 10,
    }

    return (
        <div className='writing-container'>
            <div className='writing-title-container'>
                <div className='writing-title'>Writing</div>
                <div className="underline">
                    <div className="divider-container">
                        <Divider sx={dividerStyle} />
                        <div className="small-circle" />
                        <div className="circle" />
                        <div className="small-circle" />
                        <Divider sx={dividerStyle}
                        />
                    </div>
                </div>
            </div>

            <div className='coming-soon'>
                Coming Soon...
            </div>
        </div>
    )
}

export default Writing;