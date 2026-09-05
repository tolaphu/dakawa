# DAKAWA website

Website giới thiệu nước uống DAKAWA — bản dùng ảnh thật từ Facebook thương hiệu.

## Công nghệ

React 19, TypeScript, Vite 8 và Vinext. Đây là source ứng dụng web, không phải bộ HTML tĩnh để tải trực tiếp lên hosting PHP/cPanel. Giao diện được render thành HTML khi chạy ứng dụng.

## Chạy và build

Yêu cầu Node.js >= 22.13.0.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5175
npm run build
npm start
```

`npm start` chạy bản build qua Wrangler local. Thư mục build: `dist/`. Chưa cấu hình triển khai production trong repository này.

## Nội dung

Các trang: trang chủ, sản phẩm, về DAKAWA, chất lượng, doanh nghiệp, đại lý, liên hệ. Form là demo, chưa có backend tiếp nhận dữ liệu.

Ảnh Facebook mới và đường dẫn nguồn: `public/assets/social/sources.json`. Các quyền thương hiệu và ảnh thuộc chủ sở hữu tương ứng.

CSS và thư viện nền Acuas được giữ để tương thích trang con; bản gốc và license tại `vendor/acuas-original`. Xem `docs/TEMPLATE-SOURCES.md`. Bố cục trang chủ hiện tại được viết lại trong `app/page.tsx` và `app/studio.css`.
