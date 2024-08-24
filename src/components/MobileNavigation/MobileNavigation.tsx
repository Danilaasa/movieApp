import React, { useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { MobileButton } from '../MobileButton/MobileButton';
import "./MobileNavigation.css"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { changeTheme, startModal } from '../../store/MoviesSlice';
import { themeSwitcher } from '../../utils';
import { MailOutlined } from '@ant-design/icons';






export const MobileNavigation: React.FC = () => {
    const state = useSelector((state: RootState) => state.themeValue)
    const dispatch = useDispatch()

    const onChangeTheme = () => {
        dispatch(changeTheme(!state.themeValue))
    }

    const items: MenuProps['items'] = [
        {
          label: <Link className='menu-links' to="/favorities" >
              <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="menu-links-favorities__svg" d="M5 5.00001C5 4.07954 5.74619 3.33334 6.66667 3.33334H13.3333C14.2538 3.33334 15 4.07954 15 5.00001V17.5L10 12.5L5 17.5V5.00001Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                  <span>Избранные</span>
              </Link>,
          key: '0',
        },
        {
          label:  state.themeValue === false && (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) ? 
              <span onClick={onChangeTheme} className='menu-links' >
                  <MoonOutlined  style={{fontSize: "25px"}} />
                  Темная тема
              </span> : <span onClick={onChangeTheme} className='menu-links' >
                  <SunOutlined  style={{fontSize: "25px"}} />
                  Светлая тема
              </span> ,
          key: '1',
        },
        {
          label: <span onClick={() => dispatch(startModal(true))} className='menu-links mail' >
                  <MailOutlined />
                  Оставьте e-mail
                </span> ,
          key: '1',
        }
      ];

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
        <Dropdown className='mobile-navigation' menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <MobileButton />
          </Space>
        </a>
      </Dropdown>
    )

}