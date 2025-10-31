import { create } from 'zustand';
import type { Product, ProductCustomizationOption, ProductColorOption } from '@/types/product';

export interface ConfiguratorState {
  product: Product | null;
  color?: ProductColorOption;
  material?: string;
  size?: 'small' | 'medium' | 'large';
  addOns: ProductCustomizationOption[];
  basePrice: number;
  totalPrice: number;
  setProduct: (product: Product) => void;
  setColor: (color: ProductColorOption) => void;
  setMaterial: (material: string) => void;
  setSize: (size: 'small' | 'medium' | 'large') => void;
  toggleAddOn: (addon: ProductCustomizationOption) => void;
  reset: () => void;
  recalcTotal: () => void;
}

const sizeMultiplier: Record<'small' | 'medium' | 'large', number> = {
  small: 0.9,
  medium: 1,
  large: 1.15,
};

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  product: null,
  color: undefined,
  material: undefined,
  size: 'medium',
  addOns: [],
  basePrice: 0,
  totalPrice: 0,
  setProduct: (product) => {
    set({
      product,
      basePrice: product.price,
      totalPrice: product.price,
      color: product.customizations.colors[0],
      material: product.customizations.materials[0],
      size: 'medium',
      addOns: [],
    });
    get().recalcTotal();
  },
  setColor: (color) => set({ color }),
  setMaterial: (material) => set({ material }),
  setSize: (size) => {
    set({ size });
    const { recalcTotal } = get();
    recalcTotal();
  },
  toggleAddOn: (addon) => {
    const state = get();
    const exists = state.addOns.find((item) => item.name === addon.name);
    const updatedAddOns = exists
      ? state.addOns.filter((item) => item.name !== addon.name)
      : [...state.addOns, addon];

    set({ addOns: updatedAddOns });
    const { recalcTotal } = get();
    recalcTotal();
  },
  reset: () => set({ product: null, color: undefined, material: undefined, size: 'medium', addOns: [], totalPrice: 0 }),
  recalcTotal: () => {
    const state = get();
    if (!state.product) return;

    const sizeFactor = sizeMultiplier[state.size ?? 'medium'];
    const addOnTotal = state.addOns.reduce((acc, addon) => acc + addon.price, 0);
    const total = Math.round((state.basePrice + addOnTotal) * sizeFactor);
    set({ totalPrice: total });
  },
}));
