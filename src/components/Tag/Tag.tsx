import React, { FC } from "react";
import "./Tag.css"

interface ITag {
    children: string
}

export const Tag: FC<ITag> = ({ children }) => {
    return (
        <span className="tag-movie-page" >
            {children}
        </span>
    )
}