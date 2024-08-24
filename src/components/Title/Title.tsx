import React, { FC } from "react";
import "./Title.css"
import classNames from "classnames";

interface ITile {
    children?: string,
    className?: string
}

export const Title: FC<ITile> = ({ className = '', children }) => {
    return <h1 className={classNames("title container", className)} >{children}</h1>
}