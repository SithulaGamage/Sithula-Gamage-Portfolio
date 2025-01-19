import React from 'react';
import './Tinkering.css';
import Divider from '@mui/material/Divider';

export const Tinkering = () => {
    const dividerStyle = {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: 'var(--highlight)',
        position: 'relative',
        borderRadius: 10,
    }

    return (
        <div className='tinkering-container'>
            <div className='tinkering-title-container'>
                <div className='tinkering-title'>Tinkering</div>
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

export default Tinkering;