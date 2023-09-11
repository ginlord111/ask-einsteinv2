import {create} from 'zustand'

interface ModalControllerProps{
    isOpen:boolean;
    onOpen:()=>any;
    onClose:()=>any;
}

export const modalController = create<ModalControllerProps>((set) =>({
isOpen:false,
onOpen:() => set ({isOpen:true}),
onClose:() => set({isOpen:false})
}))
