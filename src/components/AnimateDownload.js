import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/skip-forward.json"
        });

        container.current.addEventListener('click', function() {
            lottie.playSegments([0,60], true);
        });
    }, []);

    return <div ref={container} />;
};

export default LottieAnimation;
