import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  customizationSummary?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  toggle: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          ),
        };
      }

      return {
        items: [...state.items, item],
      };
    });
  },
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
