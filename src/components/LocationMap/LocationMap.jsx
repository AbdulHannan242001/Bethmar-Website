import React, { useState, useEffect } from 'react';

const LocationMap = () => {
    const [ctrlPressed, setCtrlPressed] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey || event.metaKey) {
                setCtrlPressed(true);
            }
        };

        const handleKeyUp = (event) => {
            if (!event.ctrlKey && !event.metaKey) {
                setCtrlPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div className="w-full h-auto relative">
            <iframe
                style={{ pointerEvents: ctrlPressed ? 'auto' : 'none' }}
                src="https://www.google.com/maps/d/embed?mid=1IuKsDO4XYpsAIrz1fcTg0Jz8dpYTsK0&ehbc=2E312F&noprof=1"
                width="100%"
                height="600px"
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default LocationMap;