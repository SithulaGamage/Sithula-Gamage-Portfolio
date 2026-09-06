import Backdrop from '@mui/material/Backdrop';
import './Lightbox.css';

export function Lightbox({ image, onClose }) {
    return (
        <Backdrop
            className="lightbox-backdrop"
            open={Boolean(image)}
            onClick={onClose}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            {image && <img src={image} alt="Expanded view" className="lightbox-image" />}
        </Backdrop>
    );
}

export default Lightbox;
