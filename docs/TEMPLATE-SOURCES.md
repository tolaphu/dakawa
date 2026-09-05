# Nguồn UI và code sử dụng

Ngày 05/09/2026. Thay thế hướng UI tự thiết kế của lần trước theo yêu cầu người dùng.

| Mẫu | Bằng chứng đã xem | Cách sử dụng |
| --- | --- | --- |
| [Acuas](https://htmlcodex.com/drinking-water-website-template/) | Toàn bộ source, CSS, ảnh và screenshot gốc | **Code nền thực tế**: giữ bố cục HTML/CSS, Việt hóa và thay dữ liệu DAKAWA. |
| [Aguapure](https://themeforest.net/item/aguapure-drinking-water-company-html-template/47406577) | Trang giới thiệu và ảnh catalog nhiều thiết bị | Đối chiếu cách bố trí hero nước uống, menu và nội dung doanh nghiệp. Không sao chép code trả phí. |
| [Acuasafe](https://themeforest.net/item/acuasafe-drinking-mineral-water-delivery-html-template/33589067) | Ảnh catalog: nền xanh, bình nước làm trọng tâm, bố cục giới thiệu | Tham khảo trực quan. Không sao chép code trả phí. |
| [Uaques](https://themeforest.net/item/uaques-drinking-mineral-water-delivery-html-template/25340230) | Ảnh catalog: serif, nền sáng, bình nước, hệ thống feature | Tham khảo trực quan. Không sao chép code trả phí. |

Ảnh catalog ba mẫu bổ sung được xem trực tiếp trên [bài tổng hợp freshDesignweb](https://www.freshdesignweb.com/drinking-water-website-template.html) và lưu ảnh chụp trong `qa-template/references/*-catalog.png`. Trang live preview ThemeForest trả màn hình xác minh; không dùng các ảnh chụp màn hình xác minh làm bằng chứng UI.

## Source tải về

- Repository: https://github.com/themewagon/acuas
- Revision: `652c7312f29f82732f97a2026d47ce3843314591`.
- Bản gốc: `vendor/acuas-original/`.
- License có hiệu lực lấy từ `LICENSE.txt`: CC BY 4.0 có yêu cầu giữ liên kết tác giả. README repo có nhãn MIT không thống nhất, vì vậy thực hiện theo LICENSE.txt.
- `public/acuas/css/style.css` và Bootstrap giữ nguyên từ bản gốc.
- HTML được điều chỉnh bằng script `scripts/adapt-acuas.cjs`, đọc được trực tiếp tại `components/template/`.

## Đã thay so với template gốc

Logo, tên thương hiệu, câu chữ, sản phẩm, địa chỉ, số điện thoại, đường dẫn, ảnh nhà sản xuất và hoạt động địa phương. Bỏ số năm kinh nghiệm, thống kê khách hàng, giá và đánh giá giả của mẫu. Thay script carousel/menu bằng các listener nhỏ để hoạt động trong ứng dụng hiện tại; giữ nguyên markup và class của mẫu.

## Kiểm tra và giới hạn

Build production và lint file sửa. Kiểm tra 320–1920px, sáu route con, menu mobile, chuyển banner và lọc sản phẩm. Kết quả tại `qa-template/checks.json`.

Ảnh hero của template được ghi rõ minh họa. Ảnh sản phẩm thật hiện được cắt bằng CSS từ ảnh danh mục DAKAWA. Chưa kết nối backend cho các biểu mẫu demo, chưa publish công khai.
