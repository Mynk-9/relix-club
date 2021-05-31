import React from 'react';
import Styles from './CommonButton.module.scss';

const CommonButton = ({ onClick, text }) => {
    return (
        <button
            className={Styles.button}
            onClick={
                onClick
                || (() => { })
            }
        >
            { text}
        </button >
    );
};

export default CommonButton;