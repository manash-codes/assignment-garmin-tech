import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface ModalProps {
    trigger: ReactNode
    title: string
    description?: string
    children: ReactNode
    footerActions?: ReactNode
}

const Modal = ({
    trigger,
    title,
    description,
    children,
    footerActions,
}: ModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>{trigger}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold mb-1">{title}</DialogTitle>
                    {description && <DialogDescription className="text-sm font-normal mb-2">{description}</DialogDescription>}
                </DialogHeader>
                {children}
                {footerActions && <DialogFooter>{footerActions}</DialogFooter>}
                <div className="flex justify-end">
                    <DialogClose asChild>
                        <Button className="w-20" variant="outline">Close</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Modal