import React, { useEffect } from "react"
import { Switch } from 'antd';
import { themeSwitcher } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeTheme } from "../../store/MoviesSlice";

export const ThemeSwitcher = () => {
    const state = useSelector((state: RootState) => state.themeValue)
    const dispatch = useDispatch()
    

    const onChange = () => {
        dispatch(changeTheme(!state.themeValue))
      };
      useEffect(() => {
        if (state.themeValue === false) {
            localStorage.setItem("theme", "light")
            themeSwitcher("light")
        } else {
            localStorage.setItem("theme", "dark")
            themeSwitcher("dark")
        }
      }, [state.themeValue])

    return (
        <div className="theme-switcher" >
                <Switch defaultValue={localStorage.getItem("theme") === "light" ? false : true} onChange={onChange} />
        </div>
       
    )
}