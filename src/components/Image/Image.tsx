import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Pod from '../../styles/Pod';
import bg from '../../assets/calendarBg.svg';
import links from '../../assets/links.svg';
import calendar from '../../assets/calendar.svg';
import transactions from '../../assets/transactions.svg';
import statements from '../../assets/statements.svg';
import ImageWrapper from '../../styles/ImageWrapper';

/**
 * Image and animations wrapper.
 */
const Image = () => {
    const propsBg = useSpring({ config: config.slow, opacity: 1, width: 325, from: { opacity: 0, width: 0 } });
    const propsCal = useSpring({ config: config.stiff, opacity: 1, width: 250, from: { opacity: 0, width: 0 } });
    const propsTransactions = useSpring({
        delay: 300,
        config: config.slow,
        from: { opacity: 0, width: 0, left: 100, bottom: 0 },
        to: { opacity: 1, width: 125, bottom: 60, left: -25 }
    });
    const propsStatements = useSpring({
        delay: 600,
        config: config.slow,
        from: { opacity: 0, width: 0, top: 0, right: 50 },
        to: { opacity: 1, width: 125, top: 60, right: -17 }
    });
    const propsLinks = useSpring({
        delay: 1100,
        config: config.stiff,
        from: { opacity: 0, width: 0, bottom: 146, left: 71 },
        to: { opacity: 1, width: 115, bottom: 146, left: 71 }
    });

    return <Pod shadowed>
        <ImageWrapper>
            <animated.img style={propsBg} src={bg} />
            <animated.img style={propsCal} src={calendar} />
            <animated.img style={propsTransactions} src={transactions} />
            <animated.img style={propsStatements} src={statements} />
            <animated.img style={propsLinks} src={links} />
        </ImageWrapper>
    </Pod>
}

export default Image;