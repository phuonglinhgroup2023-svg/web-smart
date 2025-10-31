import { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/hooks/useCart';

const navigation = [
  { label: 'Sản phẩm', href: '#products' },
  { label: 'Cấu hình', href: '#configurator' },
  { label: 'So sánh', href: '#comparison' },
  { label: 'Trải nghiệm', href: '#testimonials' },
];

interface HeaderProps {
  onSearch: (value: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { items, toggle } = useCartStore();

  const badgeCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="flex items-center justify-between section-padding h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Smart Furniture" width={48} height={48} />
          <span className="text-xl font-semibold tracking-wide">SmartFurn</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">
          {navigation.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="group relative text-gray-200 hover:text-white"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 h-[2px] w-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              aria-label="Tìm kiếm sản phẩm"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Tìm kiếm..."
              className="bg-white/10 rounded-full py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:bg-white/20"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </form>
          <button
            type="button"
            onClick={toggle}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium"
            aria-label={`Giỏ hàng, ${badgeCount} sản phẩm`}
          >
            <span>Giỏ hàng</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-highlight text-xs text-white">
              {badgeCount}
            </span>
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white border border-white/40 rounded-full hover:bg-white hover:text-black"
          >
            Tài khoản
          </button>
        </div>
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10"
          onClick={() => setMenuOpen(true)}
          aria-label="Mở menu"
        >
          ☰
        </button>
      </div>

      <Transition show={isMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-black border-l border-white/10 p-6 space-y-8">
            <button
              type="button"
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
              onClick={() => setMenuOpen(false)}
              aria-label="Đóng menu"
            >
              ✕
            </button>
            <form onSubmit={handleSearch} className="flex">
              <input
                aria-label="Tìm kiếm sản phẩm"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm kiếm..."
                className="flex-1 bg-white/10 rounded-l-full py-3 px-4 text-sm placeholder:text-gray-400 focus:bg-white/20"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-r-full bg-white text-black text-sm font-medium"
              >
                Tìm
              </button>
            </form>
            <div className="flex flex-col gap-4 text-lg">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <button
                type="button"
                onClick={toggle}
                className="w-full rounded-full bg-white text-black py-3 text-sm font-semibold"
              >
                Mở giỏ hàng ({badgeCount})
              </button>
              <button
                type="button"
                className="w-full rounded-full border border-white/40 py-3 text-sm font-semibold"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};
