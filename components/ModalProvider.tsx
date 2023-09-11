'use client'
import { useEffect, useState } from 'react'
import AlertModal from './AlertModal'
const ModalProvider = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() =>{
        setMounted(true)
    }, [])

    if(!mounted){
        return null;
    }
    /// TECHNIQUE FOR DEHYDRATION IN THE COMPONENT
  return (
<>
    <AlertModal />
    </>
  )
}

export default ModalProvider