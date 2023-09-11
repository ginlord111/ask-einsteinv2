'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog"
  import { Button } from "./ui/button"
import { modalController } from "@/hooks/modal-controller"  
const AlertModal = () => {
    const modal = modalController()
    const onChange = () => {
        if (modal.isOpen) {
         modal.onClose()
        }
      };
  return (
    <Dialog open={modal.isOpen} onOpenChange={onChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="mb-4"> 🕒 Free Tier Usage Limit Reached 🕒</DialogTitle>
        <DialogDescription>
        You&apos;ve hit the limit of our free tier usage for today. Don&apos;t worry we&apos;re here to help. 
Our free tier resets every 24 hours. You&apos;ll be able to access it again tomorrow.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={() => modal.onClose()}>
          Okay
        </Button>
      </DialogFooter>
    
    </DialogContent>
  </Dialog>
  
  )
}

export default AlertModal