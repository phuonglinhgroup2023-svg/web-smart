import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  About: [
    { label: 'Câu chuyện', href: '/about' },
    { label: 'Công nghệ', href: '/technology' },
    { label: 'Bền vững', href: '/sustainability' },
  ],
  Products: [
    { label: 'Bàn AI', href: '/category/desks' },
    { label: 'Ghế thông minh', href: '/category/chairs' },
    { label: 'Kệ tự động', href: '/category/shelves' },
  ],
  Support: [
    { label: 'Trung tâm hỗ trợ', href: '/support' },
    { label: 'Bảo hành', href: '/warranty' },
    { label: 'FAQ', href: '/faq' },
  ],
  Company: [
    { label: 'Tuyển dụng', href: '/careers' },
    { label: 'Đối tác', href: '/partners' },
    { label: 'Liên hệ', href: '/contact' },
  ],
};

export const Footer = () => (
  <footer className="section-padding border-t border-white/10 bg-black py-20 text-sm text-gray-300">
    <div className="grid gap-12 lg:grid-cols-5">
      <div className="space-y-4">
        <p className="text-lg font-semibold text-white">SmartFurn</p>
        <p className="text-sm text-gray-400">
          Nội thất thông minh lấy cảm hứng từ Tesla. Chúng tôi tối ưu không gian sống bằng công nghệ AI và thiết kế tối giản.
        </p>
        <div className="flex gap-4 text-xl">
          <Link href="https://www.facebook.com" aria-label="Facebook">
            ⓕ
          </Link>
          <Link href="https://www.instagram.com" aria-label="Instagram">
            ♡
          </Link>
          <Link href="https://www.youtube.com" aria-label="YouTube">
            ▶
          </Link>
        </div>
      </div>
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xs uppercase tracking-[0.4em] text-white/80">{category}</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.4em] text-white/80">Newsletter</h3>
        <p>Nhận cập nhật về sản phẩm mới và sự kiện đặc biệt.</p>
        <form className="flex gap-2" aria-label="Đăng ký nhận tin">
          <input
            type="email"
            required
            placeholder="Email của bạn"
            className="flex-1 rounded-full bg-white/10 px-4 py-3 text-sm placeholder:text-gray-500 focus:bg-white/20"
          />
          <motion.button
            type="submit"
            className="rounded-full bg-highlight px-5 py-3 text-sm font-semibold text-white"
            whileTap={{ scale: 0.95 }}
          >
            Gửi
          </motion.button>
        </form>
      </div>
    </div>
    <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} SmartFurn. All rights reserved.</p>
      <div className="flex gap-6">
        <Link href="/privacy" className="hover:text-white">
          Chính sách bảo mật
        </Link>
        <Link href="/terms" className="hover:text-white">
          Điều khoản sử dụng
        </Link>
        <Link href="/sitemap.xml" className="hover:text-white">
          Sitemap
        </Link>
      </div>
    </div>
  </footer>
);
