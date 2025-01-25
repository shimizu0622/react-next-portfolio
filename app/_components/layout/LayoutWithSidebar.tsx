// LayoutWithSidebar.tsx
import { ReactNode } from "react"

interface LayoutWithSidebarProps {
children: ReactNode
}

const LayoutWithSidebar = async ({ children }: LayoutWithSidebarProps) => {
return (
  <div className="mx-auto max-w-screen-lg px-2 my-10">
    <div>
      {children}
    </div>
  </div>
)
}

export default LayoutWithSidebar