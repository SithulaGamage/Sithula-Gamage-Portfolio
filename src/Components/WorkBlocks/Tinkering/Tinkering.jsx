import React, { useState, useEffect} from 'react';
import './Tinkering.css';
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';

export const Tinkering = () => {
    const dividerStyle = {
        flex: 1,
        borderBottomWidth: 5,
        borderColor: 'var(--highlight)',
        position: 'relative',
        borderRadius: 10,
    }

    // =========================================================================
    // ============================== LOAD IMAGES ==============================
    // =========================================================================
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const loadImages = async () => {
            const images = await Promise.all([
                import('./Images/CoatHanger/CoatHangerOne.svg'),
                import('./Images/CoatHanger/CoatHangerTwo.svg'),
                import('./Images/CoatHanger/CoatHangerThree.svg'),
                import('./Images/CoatHanger/CoatHangerFour.svg'),
                import('./Images/WatchHolder/WatchHolderOne.svg'),
                import('./Images/WatchHolder/WatchHolderTwo.svg'),
                import('./Images/WatchHolder/WatchHolderThree.svg'),
                import('./Images/WatchHolder/WatchHolderFour.svg'),
                import('./Images/WatchHolder/WatchHolderFive.svg'),
            ]);

            const keys = [
                'CoatHangerOne',
                'CoatHangerTwo',
                'CoatHangerThree',
                'CoatHangerFour',
                'WatchHolderOne',
                'WatchHolderTwo',
                'WatchHolderThree',
                'WatchHolderFour',
                'WatchHolderFive',
            ];

            const loaded = keys.reduce((acc, key, index) => {
                acc[key] = images[index].default;
                return acc;
            }, {});

            setLoadedImages(loaded);
        };

        loadImages();
    }, []);

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage(null);
    };

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
                        <Divider sx={dividerStyle} />
                    </div>
                </div>
            </div>

            {/* Watch Holder */}
            <div className='tinker-project'>
                <div className='tinker-title'>Watch Holders</div>
                <div className='tinker-date'>February 2025</div>

                <div className='tinker-images-container'>
                    {[
                        { key: 'WatchHolderOne'},
                        { key: 'WatchHolderTwo'},
                        { key: 'WatchHolderThree'},
                        { key: 'WatchHolderFour'},
                        { key: 'WatchHolderFive'},
                    ].map(({ key}, index) => (
                        loadedImages[key] && (
                            <div key={index} className='watch-holder-item'>
                                <img 
                                    src={loadedImages[key]} 
                                    className='tinker-image'
                                    loading='lazy'
                                    onClick={() => handleOpen(loadedImages[key])}
                                />
                            </div>
                        )
                    ))}
                </div>

                <div className='tinker-description'>
                    Noticing my watches cluttering my desk, I designed and 3D-printed custom holders to keep them organized. Using OnShape, I took rough measurements to ensure a precise fit. Once printed, I assembled them securely, creating a sleek and functional storage solution that keeps my watches easily accessible and my workspace tidy.
                </div>
            </div>

            {/* Coat Hanger Rack */}
            <div className='tinker-project'>
                <div className='tinker-title'>Coat Hanger Rack</div>
                <div className='tinker-date'>December 2024</div>

                <div className='tinker-images-container'>
                    {[
                        { key: 'CoatHangerOne'},
                        { key: 'CoatHangerTwo'},
                        { key: 'CoatHangerThree'},
                        { key: 'CoatHangerFour'},
                    ].map(({ key}, index) => (
                        loadedImages[key] && (
                            <div key={index} className='coat-hanger-item'>
                                <img 
                                    src={loadedImages[key]} 
                                    className='tinker-image'
                                    loading='lazy'
                                    onClick={() => handleOpen(loadedImages[key])}
                                />
                            </div>
                        )
                    ))}
                </div>

                <div className='tinker-description'>
                    In my parents&apos; wardrobe, I noticed an unused space that could be better utilized. To address this, I designed and 3D-printed a coat hanger rack identical to the existing ones. Using OnShape, I took rough measurements to create a precise model that fit seamlessly into the space. Once printed, I secured the beam holders in place with M3 screws, ensuring stability while allowing the beam to be easily removed if needed.
                </div>
            </div>

            {/* Backdrop */}
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}
                onClick={handleClose}
            >
                {currentImage && <img src={currentImage} alt="Expanded View" style={{ width: '80%', maxHeight: '90%' }} />}
            </Backdrop>
        </div>
    )
}

export default Tinkering;