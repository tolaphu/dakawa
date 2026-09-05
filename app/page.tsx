'use client';
/* oxlint-disable next/no-img-element, next/no-html-link-for-pages */
import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Check,
  Plus,
} from 'lucide-react';
import { AcuasShell, products, ProductPhoto } from '@/components/acuas-shell';

export default function Home() {
  const [category, setCategory] = useState('Tất cả');
  const shown = products.filter(
    (p) =>
      category === 'Tất cả' ||
      (category === 'Nước đóng bình'
        ? p.name.startsWith('Bình')
        : p.name.startsWith('Chai')),
  );
  return (
    <AcuasShell active="/">
      <section className="studio-hero">
        <img
          className="studio-hero-image"
          src="/assets/social/day-chai-dakawa.jpg"
          alt="Chai nước DAKAWA trong ảnh đăng trên Facebook thương hiệu"
          fetchPriority="high"
        />
        <div className="studio-hero-content">
          <div className="studio-hero-top">
            <span>NƯỚC UỐNG TINH KHIẾT</span>
            <span>HỘI AN, VIỆT NAM</span>
          </div>
          <h1>
            Trong từng giọt nước,
            <br />
            một sự quan tâm.
          </h1>
          <div className="studio-hero-bottom">
            <p>
              Nước uống DAKAWA cho gia đình, doanh nghiệp
              <br />
              và những cuộc gặp gỡ mỗi ngày.
            </p>
            <a className="studio-button" href="#san-pham">
              Tìm sản phẩm của bạn <ArrowUpRight size={21} />
            </a>
          </div>
        </div>
        <span className="studio-image-note">Ảnh từ Facebook DAKAWA</span>
      </section>
      <div className="studio-contact-line studio-container">
        <span>
          <MapPin size={16} />
          33B Lý Thái Tổ, Hội An
        </span>
        <span>Phục vụ Hội An & Đà Nẵng</span>
        <a href="tel:0985959790">
          <Phone size={16} />
          0985 959 790 <ArrowUpRight size={16} />
        </a>
      </div>
      <section className="studio-products studio-container" id="san-pham">
        <div className="studio-heading">
          <div>
            <span className="studio-caption">SẢN PHẨM DAKAWA</span>
            <h2>
              Một nguồn nước.
              <br />
              Nhiều cách đồng hành.
            </h2>
          </div>
          <div>
            <p>
              Từ chai nhỏ mang theo đến bình lớn cho cả nhà.
              <br />
              Chọn dung tích phù hợp với nhu cầu của bạn.
            </p>
            <div className="studio-filters" aria-label="Lọc sản phẩm">
              {['Tất cả', 'Nước đóng bình', 'Nước đóng chai'].map((c) => (
                <button
                  key={c}
                  aria-pressed={category === c}
                  onClick={() => setCategory(c)}
                  className={category === c ? 'selected' : ''}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="studio-product-grid">
          {shown.map((p) => (
            <article className="studio-product" key={p.name}>
              <div className="studio-product-visual">
                <span>{p.size}</span>
                <ProductPhoto product={p} />
                <a
                  className="studio-product-plus"
                  href="tel:0985959790"
                  aria-label={`Tư vấn ${p.name}`}
                >
                  <Plus size={21} />
                </a>
              </div>
              <div className="studio-product-info">
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.group}</p>
                </div>
                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </div>
        <div className="studio-catalog-note">
          <span>Giá và quy cách đóng gói được xác nhận khi tư vấn.</span>
          <a href="/san-pham">
            Khám phá danh mục đầy đủ <ArrowRight size={17} />
          </a>
        </div>
      </section>
      <section className="studio-origin">
        <div className="studio-container studio-origin-grid">
          <div className="studio-origin-copy">
            <span className="studio-caption">TỪ HỘI AN</span>
            <h2>
              Gần nơi bạn sống.
              <br />
              Gần điều bạn cần.
            </h2>
            <p>
              DAKAWA là thương hiệu nước uống tinh khiết đóng bình và đóng chai,
              có nhà xưởng tại miền Trung. Chúng tôi phục vụ nhu cầu nước uống
              của gia đình và doanh nghiệp tại Hội An, Đà Nẵng.
            </p>
            <div className="studio-origin-links">
              <a href="/chat-luong">
                <Check size={18} />
                <span>Tìm hiểu quy trình & chất lượng</span>
                <ArrowUpRight size={20} />
              </a>
              <a href="/ve-dakawa">
                <Check size={18} />
                <span>Câu chuyện thương hiệu DAKAWA</span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <figure>
            <img
              src="/assets/dakawa-gallery-06.jpg"
              alt="Thiết bị xử lý nước trong tư liệu DAKAWA"
              loading="lazy"
            />
            <figcaption>
              <span>TƯ LIỆU DAKAWA</span>
              <span>Tìm hiểu từ nơi sản xuất</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="studio-audience studio-container">
        <div className="studio-heading">
          <div>
            <span className="studio-caption">GIẢI PHÁP CHO BẠN</span>
            <h2>
              Mỗi nhu cầu,
              <br />
              một cách phục vụ.
            </h2>
          </div>
          <p>
            Chia sẻ cách bạn sử dụng nước.
            <br />
            DAKAWA cùng bạn tìm phương án phù hợp.
          </p>
        </div>
        <div className="studio-audience-grid">
          <a className="studio-family" href="/san-pham">
            <img
              src="/assets/dakawa-social-product-02.jpg"
              alt="DAKAWA trong không gian gia đình"
              loading="lazy"
            />
            <div>
              <span>CHO CUỘC SỐNG MỖI NGÀY</span>
              <h3>Gia đình</h3>
              <ArrowUpRight size={27} />
            </div>
          </a>
          <div className="studio-audience-side">
            <a href="/doanh-nghiep">
              <span>VĂN PHÒNG · KHÁCH SẠN · NHÀ HÀNG</span>
              <h3>
                Đồng hành cùng
                <br />
                doanh nghiệp.
              </h3>
              <p>Trao đổi sản lượng, lịch cung cấp và địa điểm sử dụng.</p>
              <span className="studio-card-action">
                Tư vấn phương án cung cấp <ArrowUpRight size={22} />
              </span>
            </a>
            <a href="/dai-ly">
              <span>CÙNG MỞ RỘNG KẾT NỐI</span>
              <h3>
                Trở thành đối tác
                <br />
                của DAKAWA.
              </h3>
              <p>Chia sẻ địa bàn và mô hình phân phối của bạn.</p>
              <span className="studio-card-action">
                Tìm hiểu hợp tác đại lý <ArrowUpRight size={22} />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="studio-social studio-container">
        <div className="studio-heading">
          <div>
            <span className="studio-caption">
              DAKAWA QUA NHỮNG HÌNH ẢNH THẬT
            </span>
            <h2>
              Những điều gần gũi.
              <br />
              Từ chính DAKAWA.
            </h2>
          </div>
          <a
            href="https://www.facebook.com/dakawa.vn/photos"
            target="_blank"
            rel="noreferrer"
          >
            Xem Facebook DAKAWA <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="studio-social-grid">
          {[
            ['chai-nuoc-dakawa', 'Nước đóng chai DAKAWA', '1257001716233419'],
            ['binh-dakawa', 'Bình nước DAKAWA', '1257001486233442'],
            ['day-chai-dakawa', 'Sản phẩm tại điểm bán', '1257001626233428'],
          ].map(([file, title, id]) => (
            <a
              key={file}
              href={'https://www.facebook.com/photo.php?fbid=' + id}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={'/assets/social/' + file + '.jpg'}
                alt={title}
                loading="lazy"
              />
              <div>
                <h3>{title}</h3>
                <ArrowUpRight size={19} />
              </div>
              <span>Ảnh từ Facebook DAKAWA</span>
            </a>
          ))}
        </div>
      </section>
      <section className="studio-finale">
        <div className="studio-container">
          <span className="studio-caption">BẮT ĐẦU TỪ MỘT CUỘC TRÒ CHUYỆN</span>
          <div>
            <h2>
              Bạn cần nước.
              <br />
              DAKAWA ở đây.
            </h2>
            <a href="tel:0985959790">
              0985 959 790 <ArrowUpRight size={38} />
            </a>
          </div>
          <p>Trao đổi dung tích, số lượng và địa chỉ giao để được tư vấn.</p>
        </div>
      </section>
    </AcuasShell>
  );
}
