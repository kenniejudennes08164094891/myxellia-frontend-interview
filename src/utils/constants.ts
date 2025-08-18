import { MouseEventHandler } from "react";

export interface ModalProps{
    isOpen: unknown// MouseEventHandler<HTMLDivElement> | undefined, 
    onClose: MouseEventHandler<HTMLButtonElement> | undefined
}