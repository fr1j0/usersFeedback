import React from 'react';
import CommentsList from '../../styles/CommentsList';
import Comment from './Comment';
import store from 'store';
import { CommentData } from '../../types/types';
import Slider from 'infinite-react-carousel';

/**
 * List of Comment wrapped on a Slider.
 */
const Comments = () => {
    const commentsList = store.get('comments');

    const settings = {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        dots: false,
        duration: 100,
        pauseOnHover: true,
        adaptiveHeight: true,
        className: 'carousel',
    };

    return <CommentsList>
        <Slider {...settings}>
            {
                commentsList.map((comment: CommentData, index: number) =>
                    <Comment key={index} data={comment} />)
            }
        </Slider>
    </CommentsList>
}

export default Comments;