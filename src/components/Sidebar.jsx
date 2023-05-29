import { AddNote } from "./";
import { Logo } from "./Logo";

export const Sidebar = () => {
  return (
    <div className="py-6">
      <div className="md:mb-20 mb-16">
        <Logo />
      </div>
      <AddNote />
    </div>
  );
};
