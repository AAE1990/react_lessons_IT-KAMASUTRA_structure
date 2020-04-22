import React from 'react';
import s from './News.module.css';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const News = () => {
    return (
        <div className={s.column}>
            <p>News</p>
        </div>
    )
}

export default News;