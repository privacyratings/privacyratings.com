<!-- source: 38b6fc4b567c -->
# Đóng góp

Mọi hoạt động đều diễn ra trên GitHub. Không có diễn đàn, kênh trò chuyện hay tài khoản nào khác cần đăng ký.

| Để làm việc này | Hãy dùng |
| --- | --- |
| Đề xuất một ứng dụng hoặc dịch vụ | [Mở issue "Suggest"](https://github.com/privacyratings/privacyratings.com/issues/new?template=suggest.yml) |
| Báo cáo câu trả lời sai hoặc liên kết hỏng | [Mở issue "Correction"](https://github.com/privacyratings/privacyratings.com/issues/new?template=correction.yml), hoặc dùng "Báo cáo sai sót" trên bất kỳ trang đánh giá nào |
| Đề xuất hoặc thay đổi tiêu chí | [Mở issue "Criteria change"](https://github.com/privacyratings/privacyratings.com/issues/new?template=criteria.yml) |
| Tự sửa | Dùng "Chỉnh sửa trên GitHub" trên bất kỳ trang đánh giá nào, hoặc mở một pull request |
| Đặt câu hỏi hoặc tranh luận về một lựa chọn | [GitHub Discussions](https://github.com/privacyratings/privacyratings.com/discussions) |

## Chỉnh sửa một đánh giá

Mỗi ứng dụng hoặc dịch vụ là một tệp Markdown trong `ratings/<category>/<name>.md`. Phần đầu tệp là YAML. Mọi nội dung bên dưới là ghi chú Markdown tùy chọn được hiển thị trên trang.

```yaml
---
name: Example Mail
description: >-
  One or two plain sentences about what it is.
website: https://example.com
source: https://github.com/example/example      # optional
platforms: [web, android, ios]                  # optional
jurisdiction: CH                                # optional, country code from jurisdictions.yml
mainstream: true                                # optional, adds an "alternatives to" page
aliases: [Example Office, Example Docs]         # optional, other names people search for
also_in: [macos-hardening]                      # optional, also list it in another category's table
alternatives_page: true                         # optional, adds an "alternatives to" page without mainstream
domain: mail.example.com                        # services only, used for automated tests
mail_domain: example.com                        # email categories only
imap_host: imap.example.com                     # email providers only; false if not offered
pop3_host: pop3.example.com                     # optional, found from SRV records when missing
smtp_host: smtp.example.com                     # optional, found from SRV records when missing
criteria:
  open_source:
    answer: partial
    evidence: https://github.com/example/example/blob/main/LICENSE
    note: Apps are open source. The server is not.
  no_ads:
    answer: yes
    evidence: https://example.com/pricing
---

Optional notes in Markdown.
```

Quy tắc (được `npm test` kiểm tra tự động):

- `answer` là một trong các giá trị `yes`, `partial`, `no`, `unknown` hoặc `n/a`.
- `yes` và `partial` cần một liên kết `evidence`. `no` cần một `note` hoặc `evidence`.
- Bằng chứng phải là nguồn chính: tài liệu chính thức, mã nguồn, tệp giấy phép, báo cáo kiểm toán hoặc bài kiểm tra có thể tái lập. Không phải bài nhận xét, bài đăng diễn đàn hay trang tiếp thị không có chi tiết.
- Liên kết phải là `https://` và không được chứa tham số giới thiệu hoặc theo dõi.
- Các tiêu chí tự động (`tls`, `security_headers`, `web_standards`, `mail_standards`, `imap_standards`, `pop3_standards`, `smtp_standards`, `transport_security`) được điền bởi các bài kiểm tra. Không đặt chúng thủ công.
- `no_trackers` cũng được kiểm tra bởi [bài kiểm tra trình theo dõi](SCANS.md#website-trackers). Nếu trang chủ tải một trình theo dõi bên thứ ba, câu trả lời sẽ thành "no" bất kể tệp ghi gì.
- Bỏ qua mọi tiêu chí chưa có bằng chứng. Tiêu chí đó được tính là `unknown`.
- `jurisdiction` là nơi công ty đặt trụ sở pháp lý (không phải nơi đặt máy chủ). Thêm quốc gia vào [`jurisdictions.yml`](jurisdictions.yml) nếu còn thiếu. Mọi ghi chú ở đó đều cần có nguồn.
- Chỉ người duy trì mới thêm `pick`, `pick_reason` và `disclosure`. Dùng `pick: 1` và `pick: 2` để sắp xếp hai lựa chọn. Xem [GOVERNANCE.md](GOVERNANCE.md).
- `imported_name` giữ lại tên mà một mục có trong Awesome Privacy sau khi được đổi tên, để lần nhập hằng tháng không thêm lại mục đó. Để loại vĩnh viễn một mục của Awesome Privacy, hãy thêm nó vào [`import-skip.yml`](import-skip.yml) kèm lý do.

Tiêu chí cho từng danh mục, và ý nghĩa của mỗi câu trả lời, nằm trong [`criteria/`](criteria/) và trên [trang tiêu chí](https://privacyratings.com/criteria/).

## Thêm một ứng dụng hoặc dịch vụ

```sh
npm ci
npm run new -- vpns "Example VPN" https://example.com
```

Lệnh này tạo một tệp liệt kê mọi tiêu chí là `unknown`. Điền những gì bạn có thể chứng minh, xóa phần còn lại, rồi chạy `npm test`.

## Văn phong

- Ngôn ngữ đơn giản, trung lập. Mô tả thứ gì đó làm gì, không phải nó tuyệt vời ra sao.
- Câu ngắn. Mô tả dưới 300 ký tự.
- Không dùng ngôi thứ nhất, không ghi ngày tháng trong văn bản, không có tuyên bố tiếp thị.
- Gọi tên mọi thứ theo cách nhà cung cấp gọi.

## Chạy trang web trên máy cục bộ

Cần Node.js 18 trở lên.

```sh
npm ci
npm test           # validate data and build the site
npm run serve      # preview at http://localhost:8080
```

## Thêm một trang

Đặt một tệp Markdown có `title` và `description` vào [`pages/`](pages/). Trang được xuất bản tại `/<file-name>/` kèm một bản sao Markdown, dữ liệu có cấu trúc và một mục trong sơ đồ trang.

## Thêm một danh mục hoặc tiêu chí

1. Thêm danh mục vào [`categories.yml`](categories.yml) dưới nhóm phù hợp.
2. Tùy chọn thêm `criteria/<category-id>.yml` với các tiêu chí riêng của danh mục. Sao chép định dạng từ một tệp có sẵn.
3. Tạo `ratings/<category-id>/` và thêm các mục.
4. Thay đổi tiêu chí tuân theo quy tắc xem xét trong [GOVERNANCE.md](GOVERNANCE.md).

## Bản dịch

Trang web được xuất bản bằng 25 ngôn ngữ. Tiếng Anh là bản gốc, và mỗi ngôn ngữ khác nằm trong `i18n/<code>/`:

| Tệp | Chứa |
| --- | --- |
| `ui.json` | Văn bản giao diện: tiêu đề, nút và các câu có `{placeholders}` |
| `data.json` | Tên danh mục, tiêu chí, hướng dẫn và ghi chú về quốc gia |
| `entries.json` | Mô tả đánh giá, lý do lựa chọn và thông tin công bố |
| `pages/*.md` | Toàn bộ tài liệu, chẳng hạn như tài liệu này |

Mỗi tệp JSON ánh xạ văn bản tiếng Anh sang bản dịch của nó. Khi văn bản tiếng Anh thay đổi, bản dịch cũ không còn khớp nữa, nên văn bản tiếng Anh được hiển thị cho đến khi có người dịch văn bản mới. Không bao giờ hiển thị nội dung đã lỗi thời.

1. Chạy `npm run build`. Lệnh này ghi các danh sách tiếng Anh hiện tại vào `i18n/source/`.
2. Chạy `npm run i18n:check` để xem mỗi ngôn ngữ còn thiếu gì, hoặc `node scripts/i18n-check.js de ui` để xem chi tiết của một ngôn ngữ và một tệp.
3. Thêm hoặc sửa bản dịch, giữ nguyên chính xác mọi `{placeholder}`.
4. Với một tài liệu, sao chép văn bản tiếng Anh từ `i18n/source/pages/`, giữ dòng đầu tiên (`<!-- source: … -->`, dòng liên kết bản dịch với phiên bản tiếng Anh đó) và dịch phần còn lại.

Ghi chú và bằng chứng cho từng câu trả lời vẫn giữ bằng tiếng Anh. Các so sánh và phần lớn đánh giá đơn lẻ chỉ có bằng tiếng Anh; các lựa chọn, danh mục, hướng dẫn, phương án thay thế, danh sách mã nguồn mở, khu vực pháp lý và tài liệu đều được dịch. Menu ngôn ngữ và chuyển hướng tự động sử dụng các liên kết `hreflang` trên mỗi trang.

## Danh sách kiểm tra pull request

- [ ] `npm test` chạy thành công.
- [ ] Mọi câu trả lời được thay đổi đều dẫn liên kết đến bằng chứng.
- [ ] Nếu bạn làm việc cho, hoặc có liên hệ với, một dịch vụ mà bạn đã thay đổi, bạn đã nói rõ điều đó trong pull request.
