
import { ReactNode, useMemo } from "react";
import { NavLink } from "react-router-dom";

import './CardGroup.scss';

interface IProps {
    children?: ReactNode
    title: string;
    url: string;
    type: 'line' | 'section';
}

export const CardGroup = ({ children, title, url, type = 'line' }: IProps) => {

    return (
        <div className="cardgroup">
            <div className="cardgroup__top">
                {
                    type !== "section"
                        ? (
                            <NavLink
                                to={ url }
                                className="cardgroup__link cardgroup__link--title"
                            >
                                <h2>
                                    {title}
                                </h2>
                            </ NavLink>
                        )
                        : (
                            <h2 className="cardgroup__title">
                                { title }
                            </h2>
                        )
                }

                {
                    type !== "section"
                        ? (<NavLink to={url} className="cardgroup__link">
                            Mostrar todo
                        </NavLink>)
                        : null
                }

            </div>
            <div className={`cardgroup__cards cardgroup__cards--${type}`}>
                {children}
            </div>
        </div>

    )
}
