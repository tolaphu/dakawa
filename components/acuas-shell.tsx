'use client';
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages */
import { ReactNode, useState } from 'react';

export function AcuasShell({
  children,
  active = '',
}: {
  children: ReactNode;
  active?: string;
}) {
  const [open, setOpen] = useState(false);
  const links = [
    ['Sản phẩm', '/san-pham'],
    ['Về DAKAWA', '/ve-dakawa'],
    ['Chất lượng', '/chat-luong'],
    ['Doanh nghiệp', '/doanh-nghiep'],
    ['Đại lý', '/dai-ly'],
  ];
  return (
    <div className="dakawa-studio">
      <a href="#main-content" className="skip-link">
        Đến nội dung chính
      </a>
      <header className="studio-header">
        <nav className="studio-container" aria-label="Điều hướng chính">
          <a className="studio-logo" href="/">
            <img src="/assets/dakawa-logo.png" alt="" width="44" height="44" />
            <span>
              DAKAWA<small>NƯỚC UỐNG TINH KHIẾT</small>
            </span>
          </a>
          <button
            className="studio-menu-toggle"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? 'Đóng' : 'Menu'}
          </button>
          <div className={`studio-nav-links ${open ? 'open' : ''}`}>
            {links.map(([name, url]) => (
              <a
                key={url}
                href={url}
                aria-current={active === url ? 'page' : undefined}
              >
                {name}
              </a>
            ))}
            <a className="studio-nav-contact" href="/lien-he">
              Liên hệ DAKAWA <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="studio-footer">
        <div className="studio-container">
          <div className="studio-footer-grid">
            <div>
              <a href="/" className="studio-footer-logo">
                DAKAWA
              </a>
              <p>
                Nước uống tinh khiết đóng bình và đóng chai.
                <br />
                Từ Hội An, đồng hành cùng bạn mỗi ngày.
              </p>
            </div>
            <div>
              <h3>Khám phá</h3>
              <a href="/san-pham">Sản phẩm</a>
              <a href="/ve-dakawa">Về DAKAWA</a>
              <a href="/chat-luong">Chất lượng</a>
            </div>
            <div>
              <h3>Kết nối</h3>
              <a href="/doanh-nghiep">Doanh nghiệp</a>
              <a href="/dai-ly">Hợp tác đại lý</a>
              <a
                href="https://www.facebook.com/nuocuongdakawa"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
            <div>
              <h3>Liên hệ</h3>
              <p>33B Lý Thái Tổ, Hội An</p>
              <a href="tel:0985959790">0985 959 790</a>
              <a href="mailto:admin@dakawa.vn">admin@dakawa.vn</a>
            </div>
          </div>
          <div className="studio-footer-bottom">
            <span>© 2026 DAKAWA · Bản demo website</span>
            <span>
              CSS nền kế thừa{' '}
              <a href="https://htmlcodex.com/drinking-water-website-template/">
                HTML Codex
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="studio-page-header">
      <div className="studio-container">
        <a className="studio-caption" href="/">
          DAKAWA / {title.toUpperCase()}
        </a>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}

export const products = [
  {
    name: 'Bình 20L',
    size: '20L',
    group: 'Gia đình · Văn phòng',
    crop: [75, 164, 244, 472],
    description:
      'Dung tích lớn cho góc nước gia đình và văn phòng. Trao đổi thêm về loại bình phù hợp với thiết bị đang sử dụng.',
  },
  {
    name: 'Bình 7L',
    size: '7L',
    group: 'Gia đình · Du lịch',
    crop: [552, 238, 172, 403],
    description:
      'Lựa chọn gọn hơn cho gia đình và những chuyến đi. Liên hệ để được tư vấn số lượng và cách giao nhận.',
  },
  {
    name: 'Chai 1.5L',
    size: '1.5L',
    group: 'Gia đình · Nhà hàng',
    crop: [729, 284, 99, 351],
    description:
      'Dung tích để chia sẻ trong bữa ăn, buổi gặp gỡ hoặc mang theo trong ngày.',
  },
  {
    name: 'Chai 500ml',
    size: '500ml',
    group: 'Văn phòng · Khách sạn',
    crop: [831, 369, 78, 266],
    description:
      'Chai cá nhân cho bàn làm việc, phòng nghỉ và những cuộc họp. Tư vấn đóng thùng theo nhu cầu.',
  },
  {
    name: 'Chai 330ml',
    size: '330ml',
    group: 'Sự kiện · Phòng họp',
    crop: [911, 405, 77, 231],
    description:
      'Quy cách nhỏ gọn cho phòng họp, bàn tiệc và sự kiện. Liên hệ để trao đổi sản lượng dự kiến.',
  },
];

export function ProductPhoto({
  product,
}: {
  product: (typeof products)[number];
}) {
  const index = products.indexOf(product);
  return (
    <div className="template-product-art">
      <div className={`product-photo-window product-window-${index}`}>
        <img
          src="/assets/dakawa-facebook-cover.jpg"
          alt={product.name + ' DAKAWA'}
          loading="lazy"
          className={`product-sprite product-sprite-${index}`}
        />
      </div>
    </div>
  );
}
export function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <article className="product-item">
      <ProductPhoto product={product} />
      <div className="product-content bg-light text-center rounded-bottom p-4">
        <p>{product.group}</p>
        <h3 className="h4 d-inline-block mb-3">{product.name}</h3>
        <p>{product.description}</p>
        <a
          href="tel:0985959790"
          className="btn btn-secondary rounded-pill py-2 px-4"
        >
          Liên hệ đặt nước
        </a>
      </div>
    </article>
  );
}
