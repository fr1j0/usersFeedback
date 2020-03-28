import React from 'react';
import CommentElement from '../../styles/CommentElement';
import { CommentData } from '../../types/types';

interface Props {
    readonly data: CommentData;
};

/**
 * One single block of commment
 * 
 * @param {CommentData} data Object containing the data to display in the comment
 */
const Comment = ({ data }: Props) => {
    return <CommentElement>
        <p className='comment'>{data.comment}</p>
        <p className='user'>{data.userName} - {data.email}</p>
    </CommentElement>
}

export default Comment;