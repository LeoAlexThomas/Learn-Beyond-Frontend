import { StickyNoteOff } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <StickyNoteOff className="w-20 h-20 text-error" />
      <p className="text-xl font-medium">Page not found</p>
    </div>
  );
};

export default PageNotFound;
