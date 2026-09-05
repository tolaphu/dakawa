const fs = require('fs');
const cheerio = require('cheerio');
const root = require('path').resolve(__dirname, '..');
const source = fs.readFileSync(
  root + '/vendor/acuas-original/index.html',
  'utf8',
);
const $ = cheerio.load(source);
// Preserve upstream markup/class structure. Replace content and working destinations only.
$('script,#spinner,.modal,.carousel-indicators').remove();
$('[data-wow-delay],[data-animation],[data-delay]').each((_, e) => {
  const x = $(e);
  x.removeAttr('data-wow-delay data-animation data-delay style').removeClass(
    'wow fadeInUp fadeInLeft fadeInRight fadeIn animated',
  );
});
$('.text-capitalize').removeClass('text-capitalize');
$('h1')
  .not('.carousel h1,.navbar h1')
  .each((_, e) => {
    e.tagName = 'h2';
  });
$('img').each((_, e) => {
  const i = $(e);
  i.attr('src', '/acuas/' + i.attr('src')).attr('loading', 'lazy');
});
const slides = [
  [
    'DAKAWA · NƯỚC UỐNG TINH KHIẾT',
    'Tinh khiết từng giọt.<br>Trọn vẹn mỗi ngày.',
    'Nước uống đóng bình và đóng chai cho gia đình, doanh nghiệp và những cuộc gặp gỡ tại Hội An, Đà Nẵng.',
  ],
  [
    'ĐỒNG HÀNH CÙNG DOANH NGHIỆP',
    'Nguồn nước cho<br>mọi nhu cầu.',
    'Trao đổi phương án cung cấp nước cho văn phòng, khách sạn, nhà hàng và sự kiện cùng DAKAWA.',
  ],
];
$('.carousel-item').each((i, e) => {
  const el = $(e);
  el.find('h4').text(slides[i][0]);
  el.find('h1').html(slides[i][1]);
  el.find('p').text(slides[i][2]);
  el.find('a').eq(0).text('Khám phá sản phẩm').attr('href', '/san-pham');
  el.find('a').eq(1).text('Nhận tư vấn').attr('href', '/lien-he');
  el.find('img')
    .attr('loading', i ? 'lazy' : 'eager')
    .attr('alt', 'Dòng nước trong lành, hình ảnh minh họa từ template Acuas');
  el.append('<span class="template-photo-credit">Ảnh minh họa · Acuas</span>');
});
$('.carousel').removeAttr('data-bs-ride');
$('.carousel-inner').removeAttr('role');
$('.carousel-control-prev').attr('aria-label', 'Ảnh trước');
$('.carousel-control-next').attr('aria-label', 'Ảnh tiếp theo');
$('.carousel-control-prev .visually-hidden').text('Ảnh trước');
$('.carousel-control-next .visually-hidden').text('Ảnh tiếp theo');
$('.feature h4').first().text('DAKAWA DÀNH CHO BẠN');
$('.feature h2').text('Nước uống tinh khiết,\ngần hơn với mỗi nhu cầu');
const features = [
  [
    'fa-home',
    'Gia đình',
    'Bình lớn và chai nhỏ, phù hợp với nhịp sử dụng hằng ngày.',
    '/san-pham',
  ],
  [
    'fa-building',
    'Doanh nghiệp',
    'Nguồn nước cho văn phòng, khách sạn, nhà hàng và sự kiện.',
    '/doanh-nghiep',
  ],
  [
    'fa-handshake',
    'Đại lý phân phối',
    'Kết nối với DAKAWA để trao đổi nhu cầu nhập nước và hợp tác.',
    '/dai-ly',
  ],
  [
    'fa-microscope',
    'Thông tin chất lượng',
    'Tìm hiểu quy trình và liên hệ nhận hồ sơ sản phẩm hiện hành.',
    '/chat-luong',
  ],
];
$('.feature-item').each((i, e) => {
  const el = $(e),
    f = features[i];
  el.find('i')
    .first()
    .attr('class', 'fas ' + f[0] + ' text-white fa-3x');
  el.find('a.h4').text(f[1]).attr('href', f[3]);
  el.find('p').text(f[2]);
  el.find('a.btn')
    .html('Tìm hiểu <i class="fa fa-angle-right"></i>')
    .attr('href', f[3]);
});
$('.about-img img')
  .attr('src', '/assets/dakawa-gallery-06.jpg')
  .attr('alt', 'Thiết bị xử lý nước trong tư liệu DAKAWA');
$('.about-exp span').text('Từ Hội An');
$('.about-item>h4').text('VỀ DAKAWA');
$('.about-item>h2').text('Từ nơi sản xuất, đến cuộc sống mỗi ngày.');
$('.about-item>p').text(
  'DAKAWA là thương hiệu nước uống tinh khiết đóng bình và đóng chai, có nhà xưởng tại miền Trung. Từ Hội An, chúng tôi phục vụ nhu cầu nước uống của gia đình và doanh nghiệp tại địa phương.',
);
$('.about-item .bg-light').each((i, e) => {
  const el = $(e);
  el.find('a.h4')
    .text(i ? 'Nhiều dung tích, dễ lựa chọn' : 'Tìm hiểu quy trình sản xuất')
    .attr('href', i ? '/san-pham' : '/chat-luong');
  el.find('p').text(
    i
      ? 'Bình 20L, 7L và chai 1.5L, 500ml, 330ml.'
      : 'Xem tư liệu thiết bị, quy trình xử lý và trao đổi về hồ sơ chất lượng.',
  );
});
$('.about-item>a.btn').text('Câu chuyện DAKAWA').attr('href', '/ve-dakawa');
$('.service> .container>div>h4').text('GIẢI PHÁP NƯỚC UỐNG');
$('.service h2').text('Một lựa chọn cho\nnhiều nhịp sống.');
const services = [
  [
    'Gia đình',
    'Trao đổi số lượng, địa chỉ giao và nhu cầu đổi vỏ bình.',
    '/san-pham',
    'fa-home',
  ],
  [
    'Văn phòng',
    'Lựa chọn dung tích và lịch cung cấp theo quy mô sử dụng.',
    '/doanh-nghiep',
    'fa-building',
  ],
  [
    'Khách sạn, nhà hàng',
    'Chai nhỏ cho phòng nghỉ, bàn ăn và không gian tiếp khách.',
    '/doanh-nghiep',
    'fa-hotel',
  ],
  [
    'Hội họp, sự kiện',
    'Trao đổi dung tích, sản lượng và địa điểm tổ chức.',
    '/doanh-nghiep',
    'fa-calendar-check',
  ],
  [
    'Đại lý phân phối',
    'Chia sẻ địa bàn và mô hình kinh doanh để kết nối hợp tác.',
    '/dai-ly',
    'fa-handshake',
  ],
  [
    'Hội An, Đà Nẵng',
    'Cung cấp địa chỉ để xác nhận phương án giao nước.',
    '/lien-he',
    'fa-truck',
  ],
];
$('.service-item').each((i, e) => {
  const el = $(e),
    f = services[i];
  el.find('a.h4').text(f[0]).attr('href', f[2]);
  el.find('p').text(f[1]);
  el.find('i').attr('class', 'fas ' + f[3] + ' text-white fa-2x');
});
$('.service img')
  .attr('src', '/assets/dakawa-quality-facebook.jpg')
  .attr('alt', 'Danh mục bình và chai nước DAKAWA');
$('.product h4').first().text('SẢN PHẨM DAKAWA');
$('.product h2').text('Chọn nước phù hợp\nvới nhu cầu của bạn.');
const card = $('.product .row>div').first().clone();
$('.product .row').empty();
const productData = [
  ['Bình 20L', 'Gia đình · Văn phòng'],
  ['Bình 7L', 'Gia đình · Du lịch'],
  ['Chai 1.5L', 'Gia đình · Nhà hàng'],
  ['Chai 500ml', 'Văn phòng · Khách sạn'],
  ['Chai 330ml', 'Sự kiện · Phòng họp'],
];
productData.forEach((p, i) => {
  const c = card.clone().attr('class', 'col-md-6 col-xl-4');
  c.find('.product-item>img').replaceWith(
    `<div class="template-product-art"><div class="product-photo-window product-window-${i}"><img src="/assets/dakawa-facebook-cover.jpg" alt="${p[0]} trong danh mục DAKAWA" loading="lazy" class="product-sprite product-sprite-${i}"></div></div>`,
  );
  c.find('.product-content>p').first().text(p[1]);
  c.find('a.h4').text(p[0]).attr('href', '/san-pham');
  c.find('p.fs-4')
    .text('Liên hệ để nhận báo giá')
    .removeClass('fs-4')
    .addClass('small');
  c.find('a.btn').text('Liên hệ đặt nước').attr('href', 'tel:0985959790');
  $('.product .row').append(c);
});
$('.blog h4').first().text('KẾT NỐI CÙNG DAKAWA');
$('.blog h2').text('Những câu chuyện\ntừ thương hiệu.');
const stories = [
  [
    'dakawa-gallery-02.jpg',
    'DAKAWA và những kết nối doanh nghiệp',
    'Hình ảnh hoạt động từ kênh thương hiệu DAKAWA.',
    '/doanh-nghiep',
  ],
  [
    'dakawa-social-product-02.jpg',
    'Nước uống trong nhịp sống gia đình',
    'Tìm hiểu sản phẩm cho nhu cầu sử dụng hằng ngày.',
    '/san-pham',
  ],
  [
    'dakawa-gallery-03.jpg',
    'Gắn bó cùng Hội An',
    'Khám phá hình ảnh và câu chuyện từ địa phương.',
    '/ve-dakawa',
  ],
];
$('.blog-item').each((i, e) => {
  const el = $(e),
    d = stories[i];
  el.find('img')
    .attr('src', '/assets/' + d[0])
    .attr('alt', d[1]);
  el.find('.blog-date').remove();
  el.find('a.h4').text(d[1]).attr('href', d[3]);
  el.find('p').text(d[2]);
  el.find('a.fw-bold')
    .html('Tìm hiểu thêm <i class="fa fa-angle-right"></i>')
    .attr('href', d[3]);
});
$('.carousel-header').after(
  '<div class="local-contact-strip"><div class="container"><span><i class="fas fa-map-marker-alt" aria-hidden="true"></i>33B Lý Thái Tổ, Hội An</span><span>Phục vụ Hội An · Đà Nẵng</span><a href="tel:0985959790"><i class="fas fa-phone-alt" aria-hidden="true"></i>0985 959 790</a></div></div>',
);
const home = [
  '.carousel-header',
  '.local-contact-strip',
  '.feature',
  '.product',
  '.about',
  '.service',
  '.blog',
]
  .map((s) => $.html($(s).first()))
  .join('\n');
const nav = $('nav.navbar').first();
nav
  .find('.navbar-brand')
  .attr('href', '/')
  .html(
    '<img src="/assets/dakawa-logo.png" alt="" width="52" height="52"><span>DAKAWA<small>NƯỚC UỐNG TINH KHIẾT</small></span>',
  )
  .attr('aria-label', 'DAKAWA, trang chủ');
nav.find('.navbar-nav').html(
  [
    ['Trang chủ', '/'],
    ['Về DAKAWA', '/ve-dakawa'],
    ['Sản phẩm', '/san-pham'],
    ['Chất lượng', '/chat-luong'],
    ['Doanh nghiệp', '/doanh-nghiep'],
    ['Đại lý', '/dai-ly'],
    ['Liên hệ', '/lien-he'],
  ]
    .map(([t, h]) => `<a href="${h}" class="nav-item nav-link">${t}</a>`)
    .join(''),
);
nav.find('[data-bs-target="#searchModal"]').remove();
nav.find('.d-none.d-xl-flex').remove();
nav.find('.navbar-collapse>a').text('Đặt nước').attr('href', 'tel:0985959790');
nav
  .find('.navbar-toggler')
  .attr('aria-label', 'Mở menu')
  .attr('aria-expanded', 'false')
  .attr('aria-controls', 'navbarCollapse');
nav.attr('aria-label', 'Điều hướng chính');
const footer = $('.footer').first();
footer
  .find('.row')
  .first()
  .html(
    '<div class="col-lg-7"><h2 class="text-white mb-0">Bạn cần nước?<br>DAKAWA sẵn sàng tư vấn.</h2></div><div class="col-lg-5 text-lg-end"><a href="tel:0985959790" class="btn btn-secondary rounded-pill py-3 px-5"><i class="fas fa-phone-alt me-2"></i>0985 959 790</a></div>',
  );
const cols = footer.find('.row').last().children();
cols
  .eq(0)
  .find('h3')
  .html(
    '<img src="/assets/dakawa-logo.png" width="42" height="42" alt=""> DAKAWA',
  );
cols
  .eq(0)
  .find('p')
  .text(
    'Nước uống tinh khiết đóng bình và đóng chai. Phục vụ Hội An, Đà Nẵng.',
  );
cols.eq(0).find('.position-relative').remove();
cols.eq(1).find('h4').text('Khám phá');
cols
  .eq(1)
  .find('a')
  .each((i, e) => {
    const d = [
      ['Về DAKAWA', '/ve-dakawa'],
      ['Sản phẩm', '/san-pham'],
      ['Chất lượng', '/chat-luong'],
      ['Doanh nghiệp', '/doanh-nghiep'],
      ['Đại lý', '/dai-ly'],
      ['Liên hệ', '/lien-he'],
    ][i];
    $(e)
      .attr('href', d[1])
      .html('<i class="fas fa-angle-right me-2"></i>' + d[0]);
  });
cols
  .eq(2)
  .find('.footer-item')
  .html(
    '<h4 class="text-white mb-4">Phục vụ địa phương</h4><p>Hội An · Đà Nẵng</p><p>Liên hệ để xác nhận thời gian, khu vực và điều kiện giao nước.</p><a href="https://www.facebook.com/nuocuongdakawa" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f me-2"></i>Facebook DAKAWA</a>',
  );
cols
  .eq(3)
  .find('.footer-item')
  .html(
    '<h4 class="text-white mb-4">Liên hệ DAKAWA</h4><p>33B Lý Thái Tổ, Hội An</p><a href="mailto:admin@dakawa.vn">admin@dakawa.vn</a><a href="tel:0985959790">0985 959 790</a><a href="tel:02356520123">0235 652 0123</a>',
  );
const copyright =
  '<div class="container-fluid copyright py-4"><div class="container d-flex flex-wrap justify-content-between gap-3"><span>© 2026 DAKAWA · Bản demo website</span><span>Thiết kế gốc <a href="https://htmlcodex.com/drinking-water-website-template/" target="_blank" rel="noreferrer">HTML Codex</a> · Phân phối bởi ThemeWagon</span></div></div>';
fs.mkdirSync(root + '/components/template', { recursive: true });
for (const [name, value] of Object.entries({
  home,
  nav: $.html(nav),
  footer: $.html(footer) + copyright,
})) {
  fs.writeFileSync(
    root + '/components/template/acuas-' + name + '.html',
    '<!-- Adapted from HTML Codex Acuas, CC BY 4.0. -->\n' + value,
  );
}
fs.writeFileSync(
  root + '/components/acuas-content.ts',
  `// Upstream Acuas HTML, localized without replacing its structural layout.
import homeMarkup from './template/acuas-home.html?raw';
import navMarkup from './template/acuas-nav.html?raw';
import footerMarkup from './template/acuas-footer.html?raw';
export { homeMarkup, navMarkup, footerMarkup };
`,
);
fs.writeFileSync(root + '/docs/acuas-adapted-home.html', home);
console.log('Adapted original HTML sections:', home.length, 'bytes');
