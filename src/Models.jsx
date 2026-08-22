import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const CustomModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 bg-white p-4 rounded-lg shadow-lg w-full ">
          <DialogTitle className="text-3xl font-bold mb-4 text-center">
            {title}
          </DialogTitle>

          <div className="mb-4">{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CustomModal;
