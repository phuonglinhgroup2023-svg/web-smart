import { motion } from 'framer-motion';

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered',
    description: 'Tự động điều chỉnh dựa trên thói quen của bạn',
  },
  {
    icon: '🌱',
    title: 'Sustainable',
    description: '100% vật liệu tái chế, carbon neutral',
  },
  {
    icon: '📱',
    title: 'Smart Integration',
    description: 'Kết nối với Alexa, Google Home, Apple Home',
  },
  {
    icon: '🎨',
    title: 'Customizable',
    description: 'Vô số tùy chọn màu sắc & vật liệu',
  },
];

export const FeaturesGrid = () => (
  <section className="section-padding py-24">
    <div className="mb-12 space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.5em] text-blue-500">Smart DNA</p>
      <h2 className="section-title">Lý do bạn sẽ yêu SmartFurn</h2>
      <p className="section-subtitle mx-auto">
        Thiết kế tối giản kết hợp công nghệ AI để tạo ra trải nghiệm sống linh hoạt, bền vững và cá nhân hóa.
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          className="card-surface group flex flex-col gap-4 p-8 text-left"
          whileHover={{ y: -8 }}
        >
          <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{feature.icon}</span>
          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
          <p className="text-sm text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
