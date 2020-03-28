import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import store from 'store';
import Pod from '../../styles/Pod';
import Input from '../../styles/Input';
import TextArea from '../../styles/TextArea';
import Button from '../../styles/Button';
import FeedbackSuccess from '../../styles/FeedbackSuccess';
import { FaCheckCircle } from 'react-icons/fa';
import Comments from '../Comments/Comments';
import { FormData } from '../../types/types';

/**
 * Form with the user data and comment to add to the Local Storage.
 */
const Feedback = () => {
    const [feedbackSent, sendFeedback] = useState<boolean>(false);
    const [showComments, setshowComments] = useState<boolean>(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data: FormData) => {
        store.set('comments', [...store.get('comments') || [], { ...data }]);
        sendFeedback(true);

        setTimeout(() => {
            setshowComments(true);
        }, 3000);
    }

    return <Pod shadowed>
        {
            showComments ?
                <Comments /> :
                feedbackSent ?
                    <FeedbackSuccess>
                        <h1>Feedback sent</h1>
                        <FaCheckCircle />
                    </FeedbackSuccess> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <h1>Help Us Out</h1>
                        </div>
                        <div className="row">
                            <Input name="userName" placeholder="Name" type="text" ref={register({ required: true, minLength: 2 })} error={errors.userName !== undefined} />
                        </div>
                        <div className="row">
                            <Input name="email" placeholder="Email" type="email" ref={register({ required: true, pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i })} error={errors.email !== undefined} />
                        </div>
                        <div className="row">
                            <TextArea name="comment" placeholder="Comment" ref={register({ required: true, minLength: 10 })} error={errors.comment !== undefined} maxLength={100} />
                        </div>
                        <div className="row">
                            <Button type="submit">Send</Button>
                        </div>
                    </form>
        }
    </Pod>
}

export default Feedback;