<!-- source: df34a6a5c6c4 -->
# Lý do Privacy Ratings tồn tại

Các hướng dẫn về quyền riêng tư giúp hàng triệu người chọn ứng dụng và dịch vụ tốt hơn. Nhiều hướng dẫn làm rất tốt. Nhưng phần lớn có chung những điểm yếu:

- **Quy tắc không rõ ràng.** Một dịch vụ được liệt kê hoặc bị loại, và lý do nằm trong một chủ đề diễn đàn, một cuộc thảo luận riêng, hoặc hoàn toàn không được công bố.
- **Chỉ có đạt hoặc không đạt.** Một danh sách ghi "được khuyến nghị" hoặc không ghi gì. Nó không cho thấy thứ gì đó đã tiến gần đến mức nào, hay điều gì sẽ thay đổi kết quả.
- **Tuyên bố không được kiểm chứng.** Mô tả ghi "được mã hóa" hoặc "không lưu nhật ký" mà không dẫn liên kết đến bất cứ thứ gì người đọc có thể kiểm chứng.
- **Không có kiểm tra.** Các dịch vụ được lưu trữ hiếm khi được kiểm tra về bảo mật cơ bản như cài đặt TLS, header bảo mật hay xác thực email.
- **Nền tảng tách biệt.** Đề xuất và tranh luận diễn ra trên một diễn đàn hoặc máy chủ trò chuyện cần tài khoản và kiểm duyệt riêng, tách khỏi nội dung thực tế.
- **Chậm thay đổi.** Khi một sản phẩm thay đổi, danh sách thường vẫn lỗi thời vì việc cập nhật phụ thuộc vào một vài người.

Privacy Ratings được xây dựng để khắc phục từng điểm này.

## Từ danh sách awesome đến một nguồn tài liệu được duy trì

Nhiều hướng dẫn trong số này khởi đầu là các danh sách trên GitHub. Định dạng danh sách "awesome", do [Sindre Sorhus](https://github.com/sindresorhus/awesome) khởi xướng, giúp bất kỳ ai cũng dễ dàng công bố một danh sách tuyển chọn, và hàng nghìn danh sách awesome-gì-đó ra đời theo sau, nhiều danh sách là bản fork của nhau. Các danh sách như [Awesome Privacy](https://github.com/lissy93/awesome-privacy) làm công việc có giá trị, và nhiều mục ở đây lần đầu được liệt kê tại đó.

Định dạng này có một điểm yếu: phần lớn danh sách phụ thuộc vào một hoặc hai tình nguyện viên. Khi người duy trì rời đi, danh sách trở nên im ắng, bị lưu trữ, hoặc tách thành các bản fork mà mỗi bản đều dần lỗi thời. Người đọc không thể biết bản nào là hiện hành, và không có gì trong danh sách được kiểm tra hay tính điểm.

**Privacy Ratings được một doanh nghiệp, [Forward Email](https://forwardemail.net), hỗ trợ và vận hành.** Dự án không phụ thuộc vào những tình nguyện viên có thể rời đi hoặc lưu trữ kho mã. Dữ liệu có cấu trúc thay vì chỉ là một tệp README, nên có thể được kiểm tra hợp lệ, tính điểm và kiểm tra tự động mỗi ngày. Và vì mọi thứ đều là mã nguồn mở và được cấp phép CC BY-SA, cộng đồng luôn có thể sao chép, kiểm tra và cải thiện nó.

## Điểm khác biệt

**Mọi quy tắc đều công khai.** Mỗi danh mục có một danh sách ngắn các câu hỏi với trọng số từ 1 đến 3. Các câu hỏi, ý nghĩa của từng câu trả lời và cách kiểm chứng đều nằm trong thư mục [`criteria/`](criteria/). Xem [các tiêu chí](https://privacyratings.com/criteria/).

**Mọi câu trả lời đều có bằng chứng.** Một câu trả lời "có" hoặc "một phần" phải dẫn liên kết đến một nguồn mà ai cũng kiểm tra được: tài liệu, mã nguồn, tệp giấy phép hoặc báo cáo kiểm toán. Mọi thứ không có bằng chứng được tính là "không rõ" và được 0 điểm. Một mục chỉ nhận hạng chữ cái khi đủ nhiều câu trả lời của nó được hỗ trợ bởi bằng chứng.

**Điểm số, không chỉ là danh sách.** Mọi mục đều nhận điểm từ 0 đến 100, để người đọc thấy các dịch vụ so sánh với nhau ra sao và chính xác mỗi dịch vụ còn thiếu sót ở đâu.

**Kiểm tra bảo mật tự động.** Các dịch vụ được lưu trữ được kiểm tra định kỳ bằng Qualys SSL Labs, Mozilla HTTP Observatory và Internet.nl (bao gồm bài kiểm tra email của Internet.nl cho nhà cung cấp email). Kết quả được lưu trong kho mã và được dẫn liên kết từ mỗi trang. Xem [SCANS.md](SCANS.md).

**Khu vực pháp lý được công khai.** Mọi trang đều hiển thị nơi công ty đặt trụ sở, quốc gia đó có thuộc Five, Nine hay Fourteen Eyes không, GDPR có áp dụng không, và CLOUD Act của Hoa Kỳ có vươn tới không. Khu vực pháp lý được hiển thị nhưng không được tính điểm, vì những gì nhà cung cấp có thể giao nộp chủ yếu phụ thuộc vào những gì họ lưu giữ và ai nắm giữ khóa. Xem [khu vực pháp lý](https://privacyratings.com/jurisdictions/) và [CLOUD Act](https://privacyratings.com/cloud-act/).

**Mọi thứ diễn ra trên GitHub.** Đề xuất và sửa đổi là các issue trên GitHub. Thay đổi là các pull request. Tranh luận diễn ra trong GitHub Discussions. Không có diễn đàn, máy chủ trò chuyện hay hệ thống tài khoản riêng. Mọi thay đổi đối với mọi đánh giá đều có lịch sử công khai.

**Dữ liệu mở.** Đánh giá là các tệp Markdown và YAML thuần, và toàn bộ bộ dữ liệu được công bố dưới dạng JSON. Nội dung được cấp phép CC BY-SA 4.0, nên bất kỳ ai cũng có thể tái sử dụng.

**Lựa chọn được gắn nhãn là lựa chọn.** Những người duy trì chọn một hoặc hai lựa chọn cho mỗi danh mục và giải thích từng lựa chọn. Lựa chọn được hiển thị riêng và không bao giờ làm thay đổi điểm, để người đọc luôn phân biệt được nhận định biên tập với kết quả đo lường.

## Ai duy trì dự án

Privacy Ratings được hỗ trợ, tài trợ và duy trì bởi [Forward Email](https://forwardemail.net), một dịch vụ email tập trung vào quyền riêng tư và cũng được đánh giá tại đây. Điều đó giúp dự án được duy trì lâu dài, nhưng đồng thời cũng là một xung đột lợi ích, nên nó được xử lý công khai:

- Forward Email được tính điểm theo cùng bộ tiêu chí như mọi nhà cung cấp email khác.
- Mục của Forward Email mang thông tin công bố, và mọi mục có liên hệ khác với người duy trì cũng vậy.
- Các thay đổi làm tăng điểm của một mục có liên quan phải dẫn liên kết đến bằng chứng và được để mở cho công chúng xem xét trước khi hợp nhất. Xem [GOVERNANCE.md](GOVERNANCE.md).
- Không có liên kết tiếp thị liên kết, vị trí trả phí hay tài trợ. Việc kiểm tra hợp lệ từ chối các liên kết có tham số giới thiệu.

Nếu một đánh giá có vẻ sai, hãy mở một issue hoặc pull request kèm bằng chứng. Đó là toàn bộ quy trình.

## Ghi nhận

Nhiều mục lần đầu được liệt kê từ [Awesome Privacy](https://github.com/lissy93/awesome-privacy), được phát hành theo CC0. Dữ liệu về dịch vụ lưu trữ máy chủ thư đến từ [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
