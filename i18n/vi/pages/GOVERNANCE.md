<!-- source: 63c0d07d1a26 -->
# Quản trị

Cách đưa ra quyết định, cách chọn lựa chọn của chúng tôi và cách xử lý xung đột lợi ích.

## Người duy trì

Người duy trì xem xét và hợp nhất pull request, phân loại issue và kiểm duyệt Discussions. Người duy trì được liệt kê trong [`.github/CODEOWNERS`](.github/CODEOWNERS). Bất kỳ ai cũng có thể trở thành người duy trì sau khi có quá trình đóng góp chính xác, có nguồn tốt.

## Cách chấp nhận thay đổi

1. Mọi thay đổi đều đi qua pull request. Không ai, kể cả người duy trì, được đẩy thay đổi đánh giá thẳng lên `main`.
2. Mọi pull request phải vượt qua `npm test` (kiểm tra hợp lệ và xây dựng).
3. Ít nhất một người duy trì phê duyệt pull request.
4. Câu trả lời cần bằng chứng từ nguồn chính: tài liệu chính thức, mã nguồn, tệp giấy phép, báo cáo kiểm toán đã công bố hoặc bài kiểm tra có thể tái lập. Bài nhận xét, bài blog và tuyên bố tiếp thị không có chi tiết không phải là bằng chứng.
5. Khi các nguồn mâu thuẫn, nguồn chính mới nhất được ưu tiên. Nếu vẫn chưa rõ, câu trả lời là "không rõ".

## Thay đổi tiêu chí

Tiêu chí quyết định mọi điểm số, nên các thay đổi đối với `criteria/` cần thận trọng hơn:

- Trước tiên hãy mở một issue "Criteria change" hoặc một Discussion.
- Pull request được để mở ít nhất 7 ngày để lấy ý kiến công khai.
- Cần sự phê duyệt của hai người duy trì.
- Mã định danh tiêu chí không bao giờ được đổi tên sau khi đã công bố. Để loại bỏ một tiêu chí, hãy xóa nó trong một pull request có giải thích lý do.

## Lựa chọn của chúng tôi

- Mỗi danh mục có thể có tối đa hai lựa chọn.
- Một lựa chọn phải có `pick_reason` giải thích lý do chọn bằng ngôn ngữ dễ hiểu.
- Mỗi danh mục có tối đa hai lựa chọn, được sắp xếp bằng `pick: 1` và `pick: 2`.
- Lựa chọn mang tính biên tập. Chúng được hiển thị riêng và không bao giờ làm thay đổi điểm.
- Bất kỳ ai cũng có thể phản biện một lựa chọn trong mục "Picks" của Discussions. Các phản biện được trả lời công khai.

## Xung đột lợi ích

Privacy Ratings được duy trì bởi đội ngũ đứng sau Forward Email. Các mục có liên quan đến người duy trì là "mục có liên quan". Hiện tại, điều đó có nghĩa là Forward Email.

Quy tắc cho các mục có liên quan:

- Mỗi mục có liên quan mang một `disclosure` được hiển thị ở đầu trang của nó.
- Pull request làm tăng điểm của một mục có liên quan, hoặc biến nó thành lựa chọn của chúng tôi, phải dẫn liên kết bằng chứng cho mọi câu trả lời được thay đổi và được để mở ít nhất 7 ngày trước khi hợp nhất.
- Pull request làm giảm điểm của một mục có liên quan với bằng chứng hợp lệ được hợp nhất như mọi pull request khác.
- Người duy trì phải thêm thông tin công bố vào bất kỳ mục nào mà họ, hoặc nơi họ làm việc, có liên hệ tài chính hoặc cá nhân.

## Tiền bạc

- Không có liên kết tiếp thị liên kết. Việc kiểm tra hợp lệ từ chối các URL có tham số giới thiệu hoặc theo dõi.
- Không có vị trí trả phí, mục được tài trợ hay bài nhận xét trả phí.
- Nhà cung cấp có thể gửi đề xuất sửa như bất kỳ ai khác, kèm bằng chứng, và phải nói rõ họ là nhà cung cấp.

## Kiểm duyệt

Issue, pull request và Discussions tuân theo [Quy tắc ứng xử](CODE_OF_CONDUCT.md). Người duy trì có thể khóa hoặc ẩn các bình luận mang tính lăng mạ, lạc đề hoặc quảng cáo.
