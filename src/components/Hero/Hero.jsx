import React, { useState } from 'react'
import Button from '../Button/Button'
import hero from '../../assets/Banner/Infrastructure_hero.jpg'
import { motion } from 'framer-motion'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../ContactForm/ContactForm';

const Hero = () => {
    const [formVisible, setFormVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const buttonVariants = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 100 },
    };

    const handleClick = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className='flex items-center justify-center my-12'>
            <div className='bg-white w-full rounded min-h-[80%] flex items-center lg:py-6 py-12'>
                <div
                    ref={ref}
                    className='lg:mx-auto px-4 max-w-[1600px] flex xl:flex-row flex-col justify-center items-center overflow-hidden'>
                    <motion.div
                        animate={{ x: inView ? 0 : -700 }}
                        transition={{ duration: 2, ease: 'backInOut' }}
                        exit={{ opacity: 0 }}
                        className='w-full xl:w-1/2 px-6 lg:px-12 py-4 lg:py-8 bg-primary z-10 rounded'>
                        <h1 className='text-2xl xl:text-4xl font-oswald font-bold pb-4 lg:pb-8 leading-none text-white'>Building Infrastructure Solutions for a Connected World</h1>
                        <p className='text-xs xl:text-base font-light pb-3 lg:pb-6 text-white'>Bethmar is a leading infrastructure company based in the UK.
                            We specialize in providing telecom turnkey solutions, civil infrastructure solutions, traffic management, and high-speed solutions.
                            With expertise in construction of spill tanks, EV chargers installation, DNO liaison, meter installation,
                            and solar park data center solutions, we are committed to delivering exceptional services since 2013.</p>
                        <div className='gap-x-6 flex'>
                            <ScrollLink
                                to='About'
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'
                            >
                                <Button text={'Learn More'} color={'white'} />
                            </ScrollLink>
                            <ScrollLink
                                onClick={handleClick}
                                smooth={true}
                                duration={500}
                                className='cursor-pointer'
                            >
                                <motion.button
                                    className="text-xs lg:text-base group relative px-4 py-2 font-medium transition-colors duration-[400ms] font-montserrat bg-accentRed-dark  text-white shadow-md hover:bg-accentRed hover:border-accentRed transform hover:scale-105"
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={buttonVariants}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Get a Quote
                                </motion.button>
                            </ScrollLink>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1.5 : 0.5 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='xl:w-1/2 mx-12 md:h-[300px] lg:h-[75%] overflow mb-12 '>
                        <img src={hero} alt="" className='h-full w-full object-cover' />
                    </motion.div>
                </div>
            </div>
            {formVisible && (
                <ContactForm onClose={handleClick} />
            )}
        </div>

    )
}

export default Hero