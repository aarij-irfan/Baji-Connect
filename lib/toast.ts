import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title: string
  description?: string
  type?: "success" | "error" | "warning" | "info"
  duration?: number
}

export function toast({ title, description, type = "default", duration }: ToastProps) {
  const options = {
    description,
    duration,
  }

  switch (type) {
    case "success":
      return sonnerToast.success(title, options)
    case "error":
      return sonnerToast.error(title, options)
    case "warning":
      return sonnerToast.warning(title, options)
    case "info":
      return sonnerToast.info(title, options)
    default:
      return sonnerToast(title, options)
  }
}

