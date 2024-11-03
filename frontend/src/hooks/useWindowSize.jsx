import { useEffect, useState } from 'react';

const useWindowSize = ({ direction }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    if (direction === 'width') {
        useEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return width;
    }

    if (direction === 'height') {
        useEffect(() => {
            const handleResize = () => {
                setheight(window.innerHeight);
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return height;
    }

};

export default useWindowSize;