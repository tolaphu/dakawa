> Hồ sơ lần thiết kế trước, đã được thay thế bởi TEMPLATE-SOURCES.md theo phản hồi của người dùng.

# Nghiên cứu UI và quyết định thiết kế DAKAWA

Ngày: 05/09/2026. Phạm vi: thiết kế lại trang chủ, điều hướng và giao diện dùng chung, phần đầu các trang con, hình ảnh danh mục sản phẩm. Giữ luồng liên hệ và biểu mẫu demo.

## Nguồn và giới hạn quan sát

| Nguồn | Bằng chứng đã xem | Bài học áp dụng |
| --- | --- | --- |
| [SAPUWA](https://sapuwa.com/) | Nội dung trang chính hiện tại và ảnh chụp trong `research_screenshots_v3/sapuwa.png` | Nhà sản xuất cần đường dẫn sản phẩm, dịch vụ, chất lượng rõ ràng. Ảnh bình lớn giúp khách nhận biết đúng phân khúc. |
| [Aquafina](https://www.aquafina.com/en-US/our-products.html) | Nội dung và cấu trúc danh mục chính thức, truy cập qua web | Giảm nhiễu trong lựa chọn sản phẩm; tách thông tin sản phẩm và FAQ. Không suy diễn hình thức giao diện từ nội dung trích xuất. |
| [evian](https://www.evian.com/en_gb/products/) | Trang sản phẩm chính thức và ảnh chụp trang chủ `research_screenshots_v3/evian.png` | Dành diện tích rõ rệt cho hình ảnh thương hiệu; điều hướng sản phẩm, câu chuyện và nguồn nước riêng biệt. |
| [VOSS](https://vosswater.com/) | Ảnh chụp có sẵn `research_screenshots_v3/voss.png` | Điều hướng ngắn gọn, hình ảnh lớn, ít thành phần phủ trên ảnh. Screenshot chưa tải rõ phần media, không dùng nó để kết luận về chất lượng ảnh. |
| [La Vie](https://www.laviewater.com/vn/) | Kết quả web và screenshot trả trang lỗi | Chỉ tham khảo phân loại thông tin; không coi screenshot lỗi là bằng chứng UI. |

SAPUWA và Aquafina gần phân khúc nước tinh khiết. evian/VOSS thuộc nhóm tham khảo cách trình bày thương hiệu nước uống, không phải căn cứ để chuyển định vị DAKAWA sang nước khoáng hay cao cấp. Không sử dụng chứng nhận, số liệu, lời hứa của thương hiệu khác cho DAKAWA.

## Vấn đề của source cũ

- Carousel dùng ảnh social cùng chữ HTML phủ lên, lặp thông tin và làm nhãn sản phẩm khó nhìn.
- Sản phẩm, câu chuyện và thông tin địa phương xuất hiện nhiều lần trong các section dài.
- Năm thẻ sản phẩm đều hiển thị nguyên một ảnh danh mục, người mua khó phân biệt dung tích.
- Header chứa nhiều thông tin cạnh tranh với CTA; typography/CSS có nhiều lớp chỉnh chồng nhau.
- Nhúng Facebook ngay khi vào trang dù khách chưa xem video.

## Hướng triển khai

1. Phần đầu hai vùng rõ: lời giới thiệu trên nền xanh sáng, ảnh DAKAWA trong gia đình bên cạnh. Không có chuyển ảnh tự động.
2. Ba đường đi ngay sau phần đầu: gia đình, doanh nghiệp, đại lý.
3. Bộ chọn dung tích tương tác. Khung crop CSS lấy đúng từng bình/chai trong ảnh danh mục hiện có, không tạo mẫu bao bì giả. Cần thay bằng ảnh packshot gốc độ phân giải cao khi khách cung cấp.
4. Một section chất lượng và nguồn gốc. Ảnh tư liệu đi kèm caption, không tự bổ sung chứng nhận.
5. Khối doanh nghiệp và đại lý khác nhau về hình thức, nội dung và điểm đến.
6. Video tải theo thao tác người xem; FAQ dùng details/summary hỗ trợ bàn phím.
7. Header, phần mở đầu trang con và danh mục sử dụng chung màu sắc, khoảng cách, typography. Giữ sáu route con.

## Giới hạn bàn giao

- Bản demo chưa có backend tiếp nhận biểu mẫu. Các thông báo demo được giữ lại.
- Giá, lịch giao, hồ sơ chất lượng và quy cách đóng thùng cần được DAKAWA xác nhận.
- Không thêm ngôn ngữ hoặc thanh toán khi chưa có phạm vi được xác nhận.
- Giữ attribution HTML Codex do source vẫn chứa CSS và thành phần kế thừa từ Acuas.
- Chưa publish phiên bản này ra website công khai.
