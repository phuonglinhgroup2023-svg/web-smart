# Smart Furniture Store

Website thương mại điện tử nội thất thông minh lấy cảm hứng từ Tesla, xây dựng với Next.js 14, React 18, TailwindCSS, Framer Motion và Zustand.

## 📁 Cấu trúc thư mục chính
```
smart-furniture-store/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── Product/
│   ├── Configurator/
│   ├── Features/
│   ├── Comparison/
│   ├── Testimonials/
│   └── Footer/
├── hooks/
├── pages/
│   ├── index.tsx
│   ├── configurator.tsx
│   ├── compare.tsx
│   ├── checkout.tsx
│   └── products/[slug].tsx
├── public/
├── styles/
├── types/
└── utils/
```

## 🚀 Thiết lập & chạy dự án
```bash
pnpm install # hoặc npm install / yarn install
pnpm dev     # chạy dev server tại http://localhost:3000
pnpm build   # build production
pnpm start   # chạy production build
pnpm test    # chạy bộ kiểm thử Jest + React Testing Library
pnpm typecheck # kiểm tra type TypeScript
```

## 🧩 Công nghệ
- **Next.js 14 + React 18** (pages router)
- **TailwindCSS v4 alpha** + CSS Modules utility classes
- **Framer Motion** cho animation
- **Zustand** quản lý state (giỏ hàng, configurator)
- **Three.js** thông qua `@react-three/fiber` & `@react-three/drei` cho viewer 3D
- **Lenis** smooth scrolling
- **Jest + React Testing Library** cho kiểm thử

## 🔑 Thành phần chủ đạo
- `Header` – Navbar cố định với tìm kiếm, giỏ hàng, menu mobile.
- `Hero` – Video nền full width, CTA, scroll indicator, animation.
- `ProductCarousel` – Carousel ngang với `ProductCard` tương tác.
- `Configurator` – Trình tùy biến 3D real-time, chọn màu/chất liệu/kích thước/phụ kiện.
- `ComparisonTable` – Bảng so sánh 3 tier (Standard/Pro/Premium).
- `TestimonialsCarousel` – Carousel đánh giá khách hàng auto-scroll.
- `Footer` – Chứa link hệ thống, social, newsletter.

## 📐 UX & Accessibility
- Responsive 3 breakpoint: Desktop, Tablet, Mobile.
- Smooth transitions, micro-interactions (hover, tap, skeleton placeholder 3D viewer).
- ARIA labels, focus states, tương phản màu ≥ 4.5:1.
- Lazy-loading hình ảnh (`loading="lazy"`), hỗ trợ keyboard.

## 📊 Performance & SEO
- Meta tags & Open Graph trong từng page.
- Gợi ý tối ưu asset: WebP, MP4 nén, preload fonts.
- Đề xuất bật Lighthouse, mục tiêu LCP < 2.5s, CLS < 0.1.
- Tích hợp Google Analytics 4 qua `pages/_document.tsx` (thêm script khi cần).

## 🔌 API & dữ liệu
- `utils/api.ts` cung cấp hook `useApi` sử dụng SWR + Axios.
- `utils/data.ts` chứa seed data sản phẩm, cấu hình so sánh.
- Có thể thay bằng API thật (REST/GraphQL) bằng cách cập nhật fetcher.

## 🧪 Testing checklist
- Unit test components quan trọng (Hero, ProductCard, Configurator states).
- Test accessibility (axe, Storybook, manual keyboard nav).
- Test responsive (Chrome devtools iPhone 12, iPad Air, Desktop 1920px).

## 📦 Triển khai Vercel
1. `vercel login`
2. `vercel` (deploy preview)
3. `vercel --prod` (production)
4. Thiết lập ENV (API endpoint, GA4 ID, Stripe keys).

## 📝 Ghi chú & best practices
- Ưu tiên Mobile-first và lazy loading media.
- Tách logic state vào hooks (`useCartStore`, `useConfiguratorStore`).
- Sử dụng `dynamic()` cho component nặng (Three.js) để giảm bundle.
- Đảm bảo assets trong `public/media` đúng định dạng, dung lượng thấp.
- Dọn dẹp console log trước production, bật `reactStrictMode` (đã bật).

## 📂 Deliverables mở rộng
- Figma design file (liên kết ngoài dự án).
- Component library docs (Storybook/Zeroheight – chưa bao gồm).
- Báo cáo Performance/SEO/Accessibility nên chạy thủ công bằng Lighthouse + axe.
