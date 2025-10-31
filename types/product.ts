export interface ProductReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface ProductCustomizationOption {
  name: string;
  price: number;
}

export interface ProductColorOption {
  name: string;
  hex: string;
}

export interface ProductSpecs {
  dimensions: string;
  weight: string;
  materials: string[];
  colors: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'tables' | 'chairs' | 'shelves' | 'desks';
  price: number;
  images: string[];
  features: string[];
  specs: ProductSpecs;
  customizations: {
    colors: ProductColorOption[];
    materials: string[];
    addOns: ProductCustomizationOption[];
  };
  reviews: ProductReview[];
}

export interface ProductComparisonFeature {
  label: string;
  values: Record<'standard' | 'pro' | 'premium', string | boolean>;
}
