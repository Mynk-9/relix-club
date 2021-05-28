import React from 'react';
import Styles from './CommonButton.module.scss';

const CommonButton = props => {
    return (
        <button
            className={Styles.button}
            onClick={
                props.onClick
                || (() => { })
            }
        >
            { props.text}
        </button >
    );
};

export default CommonButton;