import React, { ChangeEvent, FormEvent, useState, MouseEvent, useEffect, useRef } from "react";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { CloseOutlined } from "@ant-design/icons";
import "./ModalWindow.css"
import { startModal } from "../../store/MoviesSlice";
import { Input } from 'antd';
import { ValidateForm } from "../../utils";

export const ModalWindow = () => {
    const state = useSelector((state: RootState) => state.modalWindow)
    const [value, setValue] = useState("")
    const [error, setError] = useState<boolean>(false)
    const nodeRef = useRef<null | HTMLDivElement>(null)

    const onCloseModalWindow = () => {
        dispatch(startModal(false))
    }
    
    const dispatch = useDispatch()

    const onCloseModal = () => {
        dispatch(startModal(false))
        setValue("")
        setError(false)
    }




    const onModalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        
        
    }   

    useEffect(() => {
        if (state.modalWindow) {
            document.body.style.overflow = "hidden"
        } 
        
        if (!state.modalWindow) {
            document.body.style.overflow = "visible"
        } 


    }, [state.modalWindow])

    

    const onModalSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (ValidateForm(value)) {
            
                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    body: value
                }).then(() =>  {
                    dispatch(startModal(false))
                    setValue("")
                    setError(false)
                })
            
        } else {
            setError(true)
        }

        
        
    }


    return ( state.modalWindow ? 
        
    <div className="modal" onClick={onCloseModalWindow} >
           
    <ModalWrapper>

        
        <div ref={nodeRef} className="modal-wrapper">
            

            <div  className="modal-info" onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation() } >
                    <span className="modal-content__title">Оставь свой e-mail, чтобы знать обо всех обновлениях сайта</span>
                    <CloseOutlined onClick={onCloseModal}  className="close-modal-button" />
                
                <form className="modal-content__form" onSubmit={onModalSubmit}  >
                
                    <Input value={value} className="modal-content__input" onChange={onModalInputChange} status={error ? "error" : ""} placeholder={"Введите e-mail"} />
                
                    
                    <button className="modal-content__button" >Отправить</button>
                </form>
                </div>
            
        </div>
        
        
    </ModalWrapper>
    </div>  : null)
    
}