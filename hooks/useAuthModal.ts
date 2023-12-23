import { create } from 'zustand';

interface AuthModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
// 控制modal开关
const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModal;
