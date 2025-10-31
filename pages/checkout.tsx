import Head from 'next/head';
import { useState } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { useCartStore } from '@/hooks/useCart';

const shippingOptions = [
  { id: 'standard', label: 'Tiêu chuẩn (3-5 ngày)', price: 0 },
  { id: 'express', label: 'Hỏa tốc (1-2 ngày)', price: 199000 },
];

const paymentMethods = [
  { id: 'stripe', label: 'Thẻ tín dụng (Stripe)' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'bank', label: 'Chuyển khoản ngân hàng' },
];

const CheckoutPage = () => {
  const { items, total } = useCartStore();
  const [shipping, setShipping] = useState(shippingOptions[0]);
  const [payment, setPayment] = useState(paymentMethods[0]);

  const subtotal = total();
  const grandTotal = subtotal + shipping.price;

  return (
    <>
      <Head>
        <title>Checkout | SmartFurn</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Header onSearch={() => undefined} />
        <main className="section-padding flex-1 py-24">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <section className="space-y-8">
              <div>
                <h1 className="text-3xl font-semibold">Thanh toán</h1>
                <p className="mt-2 text-sm text-gray-400">Hoàn tất đơn hàng của bạn với bảo mật cấp độ ngân hàng.</p>
              </div>
              <form className="space-y-8">
                <fieldset className="space-y-4">
                  <legend className="text-sm uppercase tracking-[0.4em] text-gray-400">Thông tin liên hệ</legend>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input className="rounded-2xl bg-white/10 px-4 py-3" placeholder="Họ và tên" required />
                    <input className="rounded-2xl bg-white/10 px-4 py-3" placeholder="Email" type="email" required />
                    <input className="rounded-2xl bg-white/10 px-4 py-3" placeholder="Số điện thoại" required />
                    <input className="rounded-2xl bg-white/10 px-4 py-3 md:col-span-2" placeholder="Địa chỉ" required />
                  </div>
                </fieldset>
                <fieldset className="space-y-4">
                  <legend className="text-sm uppercase tracking-[0.4em] text-gray-400">Vận chuyển</legend>
                  <div className="space-y-3">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-sm transition ${
                          shipping.id === option.id
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-white/10 text-gray-200 hover:border-white/30'
                        }`}
                      >
                        <span>{option.label}</span>
                        <input
                          type="radio"
                          name="shipping"
                          checked={shipping.id === option.id}
                          onChange={() => setShipping(option)}
                          className="h-4 w-4"
                        />
                      </label>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="space-y-4">
                  <legend className="text-sm uppercase tracking-[0.4em] text-gray-400">Thanh toán</legend>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-sm transition ${
                          payment.id === method.id
                            ? 'border-blue-500 bg-blue-500/20 text-white'
                            : 'border-white/10 text-gray-200 hover:border-white/30'
                        }`}
                      >
                        <span>{method.label}</span>
                        <input
                          type="radio"
                          name="payment"
                          checked={payment.id === method.id}
                          onChange={() => setPayment(method)}
                          className="h-4 w-4"
                        />
                      </label>
                    ))}
                  </div>
                </fieldset>
                <button type="submit" className="rounded-full bg-highlight px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white">
                  Xác nhận & thanh toán
                </button>
              </form>
            </section>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">Đơn hàng</h2>
              <div className="space-y-4 text-sm text-gray-300">
                {items.length === 0 && <p>Giỏ hàng đang trống.</p>}
                {items.map((item) => (
                  <div key={item.id} className="flex items-start justify-between">
                    <div>
                      <p className="text-white">{item.name}</p>
                      {item.customizationSummary && <p className="text-xs text-gray-500">{item.customizationSummary}</p>}
                    </div>
                    <p>{(item.price * item.quantity).toLocaleString('vi-VN')}đ</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-sm text-gray-200">
                <div className="flex justify-between">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between">
                  <span>Vận chuyển</span>
                  <span>{shipping.price === 0 ? 'Miễn phí' : `${shipping.price.toLocaleString('vi-VN')}đ`}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3 text-white">
                  <span>Tổng cộng</span>
                  <span className="text-xl font-semibold">{grandTotal.toLocaleString('vi-VN')}đ</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Thanh toán được mã hóa và bảo vệ bởi công nghệ của Stripe. Khi xác nhận bạn đồng ý với Điều khoản sử dụng.
              </p>
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
