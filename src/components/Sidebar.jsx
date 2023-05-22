import { AddNote } from "./"
import { Logo } from "./Logo"

export const Sidebar = () => {
  return (
    <div className="py-6">
      <div className="mb-20">
        <Logo />
      </div>
      <AddNote />
    </div>
    
  )
}
