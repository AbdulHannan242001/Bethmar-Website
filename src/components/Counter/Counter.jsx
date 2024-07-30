import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, label }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const count = useMotionValue(0);
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        if (inView) {
            controls.start({
                count: end,
                transition: { duration: 2, ease: "easeInOut" },
            });
        }
    }, [controls, inView, end]);

    useEffect(() => {
        count.onChange((v) => {
            setDisplayCount(Math.round(v));
        });
    }, [count]);

    return (
        <div className="text-center md:pt-6">
            <motion.div
                ref={ref}
                className="text-xl lg:text-3xl font-bold text-center font-poppins bg-clip-text text-transparent bg-gradient-to-t from-accentRed-dark to-accentRed-light"
                initial={{ count: 0 }}
                animate={controls}
                style={{ count }}
            >
                {displayCount}
            </motion.div>
            <p className="text-xs lg:text-base font-medium text-primary">{label}</p>
        </div>
    );
};

const CounterSection = () => {
    const counters = [
        { end: 120, label: 'Projects Done' },
        { end: 200, label: 'Satisfied Customers' },
        { end: 50, label: 'Awards Won' },
        { end: 30, label: 'Years of Experience' },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <div className='py-2 overflow-hidden lg:mx-0 mx-4'>
                <div className='flex justify-center items-center relative '>
                    <motion.div
                        className="absolute w-[150vw] h-[28.5vh] z-10 animate-rotate-gradient"
                        style={{
                            background: 'radial-gradient(circle, #6d0a08 100%, #6d0a08 100%)',
                        }}
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear",
                        }}
                    ></motion.div>
                    <motion.div
                        className="flex items-center bg-white w-full relative z-20"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <div className="w-full mx-auto p-8 bg-white">
                            <h2 className="mx-auto font-semibold text-2xl lg:text-4xl text-center text-primary font-oswald pb-4">
                                Delivering Exceptional Results with Our Expert Infrastructure Construction Services
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-poppins">
                                {counters.map((counter, index) => (
                                    <Counter key={index} end={counter.end} label={counter.label} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CounterSection;
