import type { Product, ProductComparisonFeature } from '@/types/product';

export const products: Product[] = [
  {
    id: 'ai-desk-pro',
    name: 'AI Desk Pro',
    category: 'desks',
    price: 32990000,
    images: [
      '/media/ai-desk-pro-1.webp',
      '/media/ai-desk-pro-2.webp',
    ],
    features: [
      'Điều chỉnh độ cao tự động theo tư thế',
      'Tích hợp sạc không dây chuẩn Qi',
      'Nhận diện giọng nói bằng AI',
    ],
    specs: {
      dimensions: '140 x 70 x 75 cm',
      weight: '28kg',
      materials: ['Nhôm tái chế', 'Gỗ óc chó FSC', 'Kính cường lực'],
      colors: ['Obsidian Black', 'Arctic White', 'Lunar Silver'],
    },
    customizations: {
      colors: [
        { name: 'Obsidian Black', hex: '#050505' },
        { name: 'Arctic White', hex: '#F9FAFB' },
        { name: 'Lunar Silver', hex: '#D1D5DB' },
        { name: 'Energy Green', hex: '#10B981' },
        { name: 'Electric Blue', hex: '#3B82F6' },
      ],
      materials: ['Gỗ óc chó', 'Tre ép', 'Nhôm tái chế'],
      addOns: [
        { name: 'Hệ thống LED Ambient', price: 2490000 },
        { name: 'Module USB-C 140W', price: 1890000 },
        { name: 'Cảm biến chất lượng không khí', price: 3290000 },
      ],
    },
    reviews: [
      {
        author: 'Minh Phạm',
        rating: 5,
        text: 'Bàn làm việc tốt nhất tôi từng dùng! AI nhớ thói quen đứng ngồi của tôi và điều chỉnh rất mượt.',
        date: '2024-01-10',
      },
      {
        author: 'Lan Nguyễn',
        rating: 4.5,
        text: 'Thiết kế tối giản, chất liệu cao cấp. Giá hơi cao nhưng xứng đáng.',
        date: '2024-02-18',
      },
    ],
  },
  {
    id: 'zen-chair-x',
    name: 'Zen Chair X',
    category: 'chairs',
    price: 19990000,
    images: ['/media/zen-chair-x-1.webp'],
    features: [
      'Tựa lưng điều chỉnh 9 vùng',
      'Massage điểm áp lực bằng AI',
      'Chất liệu memory foam tái chế',
    ],
    specs: {
      dimensions: '70 x 70 x 120 cm',
      weight: '19kg',
      materials: ['Khung nhôm tái chế', 'Memory foam', 'Da vegan'],
      colors: ['Space Gray', 'Polar White', 'Deep Sea'],
    },
    customizations: {
      colors: [
        { name: 'Space Gray', hex: '#1F2937' },
        { name: 'Polar White', hex: '#F3F4F6' },
        { name: 'Deep Sea', hex: '#0F172A' },
        { name: 'Highlight Coral', hex: '#FF6B6B' },
        { name: 'Aurora Green', hex: '#10B981' },
      ],
      materials: ['Da vegan', 'Vải tái chế', 'Lưới 3D thoáng khí'],
      addOns: [
        { name: 'Tựa đầu nâng cấp', price: 990000 },
        { name: 'Module sưởi vùng lưng', price: 1490000 },
        { name: 'Bộ bánh xe cao su chống trượt', price: 690000 },
      ],
    },
    reviews: [
      {
        author: 'Trung Hoàng',
        rating: 4.8,
        text: 'Ghế điều chỉnh cực kỳ chính xác, cảm giác như ngồi trên mây.',
        date: '2024-03-02',
      },
    ],
  },
];

export const comparisonFeatures: ProductComparisonFeature[] = [
  {
    label: 'Điều chỉnh AI theo thói quen',
    values: {
      standard: 'Cơ bản',
      pro: 'Học thói quen trong 14 ngày',
      premium: 'Cá nhân hóa thời gian thực',
    },
  },
  {
    label: 'Chất liệu',
    values: {
      standard: 'Gỗ công nghiệp',
      pro: 'Gỗ FSC + Nhôm tái chế',
      premium: 'Gỗ quý + Sợi carbon tái chế',
    },
  },
  {
    label: 'Bảo hành',
    values: {
      standard: '3 năm',
      pro: '5 năm',
      premium: '10 năm + bảo trì AI',
    },
  },
  {
    label: 'Tích hợp hệ sinh thái',
    values: {
      standard: 'Google Home',
      pro: 'Google Home + Alexa',
      premium: 'Google Home + Alexa + Apple Home',
    },
  },
];
