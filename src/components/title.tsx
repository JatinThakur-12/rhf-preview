import React from 'react'
import { ArrowDown, ArrowUp } from '../assets/icons/arrow';

/**
 * A functional component that renders a clickable title
 * for the preview panel.
 * @param {Object} props Component props
 * @param {string} props.title The title to render
 * @param {Function} props.clickHandler Called when the title is clicked
 * @returns {ReactElement} The rendered title element
 */
interface TitleProps {
    title: string;
    clickHandler: () => void;
    open: boolean;
}
const Title = ({ title, clickHandler, open }: TitleProps) => {
    return (
        <div className="typeContainer__title" onClick={clickHandler}>
            <span>{title}</span>
            <span>
                {open ? <ArrowUp /> : <ArrowDown />}
            </span>
        </div>
    )
}

export default Title;