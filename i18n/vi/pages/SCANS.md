<!-- source: 16559ce369ce -->
# Kiểm tra tự động

Các dịch vụ được lưu trữ (danh mục có `type: service`) được kiểm tra tự động khi tệp đánh giá của chúng có `domain`. Nhà cung cấp email và dịch vụ chuyển tiếp có `mail_domain` cũng được kiểm tra email.

| Bài kiểm tra | Nội dung kiểm tra | Tiêu chí | Có | Một phần | Không |
| --- | --- | --- | --- | --- | --- |
| [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) | Phiên bản TLS, bộ mã hóa, chứng chỉ và các lỗ hổng TLS đã biết | `tls` | A+ hoặc A | A- hoặc B | C trở xuống |
| [Mozilla HTTP Observatory](https://developer.mozilla.org/en-US/observatory) | Header bảo mật như CSP, HSTS và X-Frame-Options, và các cờ cookie | `security_headers` | A+ hoặc A | A-, B+ hoặc B | B- trở xuống |
| [Kiểm tra trang web của Internet.nl](https://internet.nl/test-site/) | IPv6, DNSSEC, HTTPS và các tùy chọn bảo mật | `web_standards` | Từ 90% trở lên | 70% đến 89% | Dưới 70% |
| [Kiểm tra email của Internet.nl](https://internet.nl/test-mail/) | IPv6, DNSSEC, DMARC, DKIM, SPF, STARTTLS và DANE cho tên miền thư | `mail_standards` | Từ 90% trở lên | 70% đến 89% | Dưới 70% |
| [Hardenize](https://www.hardenize.com) | Cấu hình bảo mật DNS, email và web | Chỉ dẫn liên kết | | | |

## Tiêu chuẩn email

Nhà cung cấp email và dịch vụ chuyển tiếp có `mail_domain` cũng được thực hiện các bài kiểm tra sau, do [`scripts/mail-tests.js`](scripts/mail-tests.js) chạy:

| Bài kiểm tra | Nội dung kiểm tra | Tiêu chí | Có |
| --- | --- | --- | --- |
| DNS over HTTPS | SPF, chính sách DMARC, chế độ MTA-STS (RFC 8461), TLS-RPT (RFC 8460), xác thực DNSSEC, DANE TLSA trên mọi máy chủ MX (RFC 7672), cùng BIMI và bản ghi SRV theo RFC 6186 để tham khảo | `transport_security` | Cả sáu đều được thực thi |
| IMAP `CAPABILITY` | TLS ngầm định trên cổng 993 (RFC 8314), IMAP4rev1 hoặc IMAP4rev2, IDLE. Chuyển sang STARTTLS trên cổng 143 nếu cần | `imap_standards` | TLS ngầm định, IMAP4rev1/rev2 và IDLE |
| POP3 `CAPA` | TLS ngầm định trên cổng 995, CAPA (RFC 2449), UIDL. Chuyển sang STLS trên cổng 110 nếu cần | `pop3_standards` | TLS ngầm định, CAPA và UIDL |
| SMTP `EHLO` | Gửi thư qua TLS ngầm định trên cổng 465, SMTPUTF8, 8BITMIME, PIPELINING, AUTH. Chuyển sang STARTTLS trên cổng 587 nếu cần | `smtp_standards` | TLS ngầm định và cả bốn phần mở rộng |

Tên máy chủ lấy từ `imap_host`, `pop3_host` và `smtp_host` trong tệp đánh giá, hoặc từ bản ghi SRV theo RFC 6186 của nhà cung cấp. Đặt một host thành `false` khi nhà cung cấp không cung cấp giao thức đó. Khả năng là những gì mỗi máy chủ công bố trước khi đăng nhập, và danh sách đầy đủ được hiển thị trên từng trang đánh giá.

## Trình theo dõi trên trang web

Mọi mục có trang web, kể cả ứng dụng, đều được kiểm tra trình theo dõi bằng [`scripts/trackers.js`](scripts/trackers.js). Công cụ tải trang chủ mà không chạy JavaScript và so sánh mọi host của script, frame, ảnh và stylesheet, cùng mã nội tuyến, với danh sách các dịch vụ theo dõi và phân tích đã biết.

| Phát hiện | Ảnh hưởng đến `no_trackers` |
| --- | --- |
| Trình theo dõi bên thứ ba như Google Analytics, Google Tag Manager, Meta Pixel, Hotjar hoặc HubSpot | Câu trả lời thành "không", bất kể tệp đánh giá ghi gì |
| Công cụ phân tích không dùng cookie (Plausible, Fathom, Simple Analytics, Matomo Cloud, Cloudflare Web Analytics) | "Có" thành "một phần" |
| Phông chữ, nội dung nhúng, báo cáo lỗi, trò chuyện hỗ trợ hoặc công cụ quản lý đồng ý | Được liệt kê trên trang, không tính điểm |
| Không có gì | Dùng câu trả lời trong tệp đánh giá |

Khi trang web là trang lưu trữ mã hoặc trang cửa hàng ứng dụng (GitHub, GitLab, Codeberg, SourceForge, F-Droid, Google Play và tương tự), bài kiểm tra được bỏ qua, vì trang đó không do dự án vận hành.

Bài kiểm tra chỉ thấy các trình theo dõi được viết ngay trong trang. Trình theo dõi được script thêm vào sau đó, và đo lường từ xa bên trong ứng dụng, vẫn cần bằng chứng trong tệp đánh giá, chẳng hạn chính sách quyền riêng tư hoặc báo cáo của [Exodus Privacy](https://reports.exodus-privacy.eu.org).

SRS và ARC không thể được nhìn thấy từ bên ngoài nếu không gửi thư, nên chúng là các tiêu chí được trả lời bằng bằng chứng thay vì bằng kiểm tra.

Các kiểm tra tự động chưa chạy được hiển thị là "Chưa kiểm tra" và không được tính vào điểm, để nhà cung cấp không bao giờ bị trừ điểm vì một bài kiểm tra chưa diễn ra.

Với SSL Labs, hạng thấp nhất trong số tất cả các địa chỉ IP của một tên miền được sử dụng.

Hardenize không còn cung cấp API công khai, nên mỗi trang dẫn liên kết đến báo cáo công khai của nó thay vì tính điểm.

## Lịch chạy

[Quy trình Scan](.github/workflows/scan.yml) chạy mỗi ngày và kiểm tra 40 mục có kết quả cũ nhất (Internet.nl tuân theo giới hạn riêng, xem bên dưới), để mọi dịch vụ đều được kiểm tra thường xuyên mà không làm quá tải các API miễn phí. Kết quả được lưu vào [`scans/`](scans/) dưới dạng JSON, được commit vào kho mã và công bố cùng trang web. Mỗi trang hiển thị thời điểm các bài kiểm tra chạy lần cuối.

Một bài kiểm tra thất bại sẽ giữ kết quả trước đó và ghi lại lỗi, để sự cố tạm thời không làm thay đổi điểm.

### Giới hạn của Internet.nl

API batch của Internet.nl được sử dụng trong phạm vi [điều khoản sử dụng](https://github.com/internetstandards/Internet.nl-API-docs/blob/main/terms-of-use.md) của nó:

- Tối đa 2 yêu cầu batch trong bất kỳ khoảng 7 ngày nào. Bài kiểm tra trang web và bài kiểm tra email là hai yêu cầu riêng, nên một lượt đầy đủ dùng cả hai.
- Tối đa 5000 tên miền cho mỗi yêu cầu. Khi có nhiều tên miền cần kiểm tra hơn, các tên miền chưa có kết quả hoặc có kết quả cũ nhất được xử lý trước, số còn lại chờ một yêu cầu sau.
- Không có yêu cầu cho một tên miền riêng lẻ, nên `--only` bỏ qua Internet.nl.

Mọi yêu cầu đều được ghi lại trong `scans/internetnl-requests.json`, tệp này được commit cùng kết quả ngay cả khi một lần chạy thất bại. Lần chạy nào thấy đã đạt giới hạn hằng tuần sẽ bỏ qua Internet.nl và giữ nguyên kết quả hiện có. Các batch mất nhiều giờ, nên trạng thái yêu cầu được kiểm tra mỗi 5 phút, và yêu cầu vẫn đang chạy khi lần chạy kết thúc sẽ được một lần chạy sau thu kết quả thay vì gửi lại. Internet.nl bỏ qua `--limit`, và chỉ các lần chạy trên nhánh mặc định mới dùng thông tin đăng nhập Internet.nl, nên mọi lần chạy dùng chung một bản ghi.

Trang web này sử dụng lại kết quả kiểm tra do công cụ kiểm tra [Internet.nl](https://internet.nl) cung cấp.

## Cấu hình

Mọi cài đặt đều là secret tùy chọn của kho mã (Settings › Secrets and variables › Actions):

| Secret | Mục đích |
| --- | --- |
| `SSLLABS_EMAIL` | Email đã đăng ký với [SSL Labs API v4](https://github.com/ssllabs/ssllabs-scan/blob/master/ssllabs-api-docs-v4.md). Nếu không có, API v3 sẽ được dùng. Việc đăng ký cần địa chỉ email của tổ chức. |
| `INTERNETNL_USERNAME`, `INTERNETNL_PASSWORD` | Tài khoản cho [Internet.nl batch API](https://internet.nl/faqs/batch-and-dashboard/). Nếu không có, các trang dẫn liên kết đến bài kiểm tra công khai của Internet.nl và các tiêu chí Internet.nl vẫn là "không rõ". |
| `INTERNETNL_API` | URL gốc của batch API, dành cho một phiên bản [Internet.nl tự lưu trữ](https://github.com/internetstandards/Internet.nl). Mặc định là `https://batch.internet.nl/api/batch/v2`. |

Mozilla HTTP Observatory không cần tài khoản. Dữ liệu giấy phép từ GitHub dùng token tích hợp sẵn của quy trình.

## Chạy kiểm tra trên máy cục bộ

```sh
npm ci
node scripts/scan.js --only email-providers/forward-email
node scripts/scan.js --limit 5 --tests observatory
node scripts/scan.js --tests mail-dns          # email DNS checks only
npm run test:unit                              # protocol probes against local mock servers
npm run build
```

## Tên miền nào được kiểm tra

Trường `domain` nên là trang web chính hoặc ứng dụng web nơi mọi người đăng nhập, ví dụ `mail.example.com` thay vì một tên miền phụ tiếp thị trên một host khác. Nhà cung cấp có thể đề xuất tên miền chính xác hơn trong một pull request.
