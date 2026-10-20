# Thiệp 20/10 dành cho Quỳnh Anh ♡

Website tĩnh với ảnh nền ngẫu nhiên, Gojo chibi, lời chúc, thư tình và tải thiệp PNG. Tên người nhận luân phiên giữa Quỳnh Anh, Amber và Bơ Chan.

## Chạy

Mở `index.html` bằng trình duyệt. Không cần cài thư viện hoặc build.

Nếu muốn chạy qua máy chủ cục bộ và đã có Python:

```sh
python -m http.server 8000
```

Sau đó mở http://localhost:8000.

## Các tệp

- `index.html`: giao diện, CSS và hình Gojo SVG.
- `app.js`: lời chúc, đổi tên, đổi ảnh nền và các tương tác.
- `photos/image0.webp` đến `photos/image4.webp`: năm ảnh nền.

Sửa mảng `names` và `wishes` trong `app.js` để thay tên và lời chúc. Thay ảnh trong `photos/` để đổi nền, giữ nguyên tên tệp.

## Commit lên Git

Giải nén toàn bộ thư mục, mở terminal tại thư mục chứa `index.html`, rồi chạy:

```sh
git init
git add .
git commit -m "Add personalized 20 October greeting card"
```

Nếu đã có repository, chép toàn bộ các tệp vào repository đó rồi chạy `git add .` và `git commit`.

Website chứa ảnh cá nhân. Chọn repository private nếu bạn muốn giữ riêng các ảnh này. Bật GitHub Pages sẽ đưa website lên mạng theo cài đặt truy cập của dịch vụ.

## Triển khai

Có thể dùng bất kỳ dịch vụ hosting website tĩnh nào. Với GitHub Pages, đặt các tệp ở thư mục gốc của repository, chọn nhánh chứa code và thư mục `/ (root)` trong phần Settings → Pages. Không cần lệnh build.
