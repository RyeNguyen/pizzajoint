import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import Loader from "./Loader";

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255, 255, 255)',
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.2,
            duration: 1.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const Home = () => {
    return (
        <motion.div
            className="home container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            <h2>Welcome to Pizza Joint</h2>
            <Link to="/base">
                <motion.button
                    whileHover="hover"
                    variants={buttonVariants}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
            <Loader/>
        </motion.div>
    )
}

export default Home;