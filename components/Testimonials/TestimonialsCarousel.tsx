import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'An Phạm',
    role: 'Founder, SpaceLab',
    avatar: '/media/avatar-1.webp',
    rating: 5,
    quote: 'Thiết kế tối giản, chất liệu cao cấp và tính năng AI hoạt động chính xác như Tesla. SmartFurn là tương lai của nội thất.',
  },
  {
    name: 'Hương Lê',
    role: 'Product Designer',
    avatar: '/media/avatar-2.webp',
    rating: 4.5,
    quote: 'Trải nghiệm tùy chỉnh 3D mượt mà, tôi có thể xem từng chi tiết trong thời gian thực. Giao diện rất trực quan.',
  },
  {
    name: 'Quân Đỗ',
    role: 'Tech Entrepreneur',
    avatar: '/media/avatar-3.webp',
    rating: 5,
    quote: 'Những micro-interactions tinh tế giúp trải nghiệm giống như đang ở showroom Tesla. Tôi mê sự hoàn thiện này.',
  },
  {
    name: 'Mỹ Dung',
    role: 'Architect',
    avatar: '/media/avatar-4.webp',
    rating: 4.8,
    quote: 'Tính năng lưu cấu hình và chia sẻ giúp tôi phối hợp nhanh với khách hàng. Kết nối smart home hoạt động hoàn hảo.',
  },
];

const ratingDisplay = (rating: number) => '★★★★★☆☆☆☆☆'.slice(5 - Math.round(rating));

export const TestimonialsCarousel = () => {
  const chunks = useMemo(() => {
    const size = 2;
    const result: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += size) {
      result.push(testimonials.slice(i, i + size));
    }
    return result;
  }, []);

  return (
    <section id="testimonials" className="section-padding py-24">
      <div className="mb-12 space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-blue-500">Loved By Innovators</p>
        <h2 className="section-title">Khách hàng nói gì?</h2>
        <p className="section-subtitle mx-auto">
          Những chuyên gia công nghệ và kiến trúc đã trải nghiệm SmartFurn trong không gian của họ.
        </p>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...chunks, ...chunks].map((group, index) => (
            <div key={`group-${index}`} className="flex min-w-full gap-8">
              {group.map((testimonial) => (
                <article key={testimonial.name} className="card-surface flex-1 p-8">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full border border-white/20 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-highlight text-sm">{ratingDisplay(testimonial.rating)}</p>
                  <p className="mt-4 text-sm text-gray-200">“{testimonial.quote}”</p>
                </article>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
