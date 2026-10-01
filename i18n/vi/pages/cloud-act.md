<!-- source: 2f40b8f7e8ef -->
# CLOUD Act là gì?

**Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** là một đạo luật của Hoa Kỳ trả lời một câu hỏi: cơ quan chức năng Hoa Kỳ có thể lấy dữ liệu từ một công ty Hoa Kỳ khi dữ liệu đó được lưu trữ ở quốc gia khác không? Câu trả lời là có.

## Đạo luật làm gì

1. **Vị trí không quan trọng.** Một nhà cung cấp thuộc khu vực pháp lý Hoa Kỳ phải giao nộp dữ liệu mà họ "sở hữu, lưu giữ hoặc kiểm soát" khi có quy trình pháp lý hợp lệ của Hoa Kỳ, bất kể dữ liệu được lưu trữ ở đâu trên thế giới. [Nguồn: Bộ Tư pháp Hoa Kỳ](https://www.justice.gov/criminal/cloud-act-resources)
2. **Thỏa thuận với các quốc gia khác.** Hoa Kỳ có thể ký các thỏa thuận truy cập dữ liệu cho phép chính phủ nước ngoài đáng tin cậy yêu cầu dữ liệu trực tiếp từ các nhà cung cấp Hoa Kỳ đối với các tội phạm nghiêm trọng, mà không cần thông qua quy trình hiệp định tương trợ tư pháp (MLAT) chậm hơn. [Nguồn: Bộ Tư pháp Hoa Kỳ](https://www.justice.gov/criminal/cloud-act-resources)
3. **Một cách để phản đối.** Nhà cung cấp có thể yêu cầu tòa án hủy bỏ hoặc thay đổi một yêu cầu khi yêu cầu đó mâu thuẫn với luật của một quốc gia khác đã có thỏa thuận.

Các thỏa thuận đang có hiệu lực với **Vương quốc Anh** và **Úc**. Các cuộc đàm phán đã được công bố với **Canada** và **Liên minh Châu Âu**. [Nguồn: Bộ Tư pháp Hoa Kỳ](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Đạo luật không làm gì

- Đạo luật không tạo ra quyền giám sát mới hay loại bỏ nhu cầu có lệnh khám xét. Cơ quan chức năng Hoa Kỳ vẫn cần quy trình pháp lý hợp lệ, và nội dung liên lạc nhìn chung cần có lệnh khám xét.
- Đạo luật không buộc nhà cung cấp giải mã dữ liệu mà họ không thể giải mã. Nó áp dụng cho dữ liệu mà nhà cung cấp có. Dữ liệu được mã hóa bằng khóa chỉ người dùng nắm giữ vẫn được mã hóa.
- Đạo luật không chỉ áp dụng cho các trung tâm dữ liệu ở Hoa Kỳ. Chọn vị trí máy chủ ở châu Âu không giúp ích gì nếu công ty vận hành nó thuộc khu vực pháp lý Hoa Kỳ.

## Đạo luật ảnh hưởng đến ai

Mọi công ty thuộc khu vực pháp lý Hoa Kỳ: Google, Microsoft, Apple, Amazon, Cloudflare, và các dịch vụ nhỏ hơn của Hoa Kỳ, bao gồm cả Forward Email. Xem [tất cả dịch vụ được đánh giá có trụ sở tại Hoa Kỳ](/jurisdictions/united-states/).

Đạo luật cũng có thể vươn tới **các dịch vụ ngoài Hoa Kỳ lưu trữ dữ liệu tại các nhà cung cấp đám mây Hoa Kỳ**, vì chính nhà cung cấp đám mây có thể nhận yêu cầu. Đó là lý do câu hỏi hữu ích không chỉ là "công ty ở đâu?" mà còn là "dữ liệu nào đang tồn tại, và ai nắm giữ khóa?"

## Vì sao mã hóa và dữ liệu tối thiểu quan trọng hơn vị trí

Luật pháp thay đổi, và mọi quốc gia đều có cách buộc cung cấp dữ liệu. Điều quan trọng nhất là những gì nhà cung cấp **có thể** giao nộp:

| Tình huống | Một yêu cầu có thể tiếp cận gì |
| --- | --- |
| Thư được lưu ở dạng văn bản thuần | Mọi thứ trong hộp thư |
| Thư được mã hóa khi lưu trữ bằng khóa do nhà cung cấp nắm giữ | Mọi thứ, vì nhà cung cấp có thể giải mã |
| Thư được mã hóa bằng khóa tạo ra từ mật khẩu của người dùng | Thông tin tài khoản và dữ liệu kết nối, không phải nội dung thư |
| Không lưu nhật ký | Không có gì về hoạt động |

Ví dụ thực tế:

- **Proton (Thụy Sĩ, nằm ngoài mọi thỏa thuận Eyes)** đã tuân thủ 8.313 trong số 9.301 lệnh pháp lý của Thụy Sĩ trong báo cáo thường niên gần nhất, cung cấp thông tin tài khoản mà họ nắm giữ. [Nguồn: báo cáo minh bạch của Proton](https://proton.me/legal/transparency)
- **Proton VPN (cùng công ty, cùng quốc gia)** không tuân thủ lệnh nào, vì không lưu nhật ký. [Nguồn: báo cáo minh bạch của Proton](https://proton.me/legal/transparency)
- **Tuta (Đức)** có thể bị thẩm phán Đức ra lệnh giao nộp hộp thư hoặc giám sát chúng theo thời gian thực. Thư mã hóa đầu cuối vẫn được mã hóa. [Nguồn: báo cáo minh bạch của Tuta](https://tuta.com/blog/transparency-report)

Cùng một công ty ở cùng một quốc gia có kết quả rất khác nhau tùy thuộc vào dữ liệu nào đang tồn tại. Đó là lý do Privacy Ratings hiển thị khu vực pháp lý trên mọi trang nhưng tính điểm dựa trên những gì nhà cung cấp thực sự làm. Xem [cách xử lý khu vực pháp lý](/jurisdictions/).

## CLOUD Act áp dụng cho Forward Email như thế nào

Forward Email có trụ sở tại Hoa Kỳ và chịu sự điều chỉnh của CLOUD Act. [Sách trắng kỹ thuật](https://forwardemail.net/technical-whitepaper.pdf) của Forward Email mô tả cách thiết kế của họ giới hạn những gì một yêu cầu có thể tiếp cận:

- **Hộp thư được mã hóa.** Mỗi hộp thư là một tệp SQLite được mã hóa riêng lẻ. Sách trắng nêu rằng Forward Email không thể truy cập nội dung thư.
- **Không ghi nội dung hay siêu dữ liệu email xuống đĩa.** Forward Email không lưu hồ sơ về việc người dùng viết thư cho ai.
- **Dữ liệu hạn chế.** Những gì có thể bị tiết lộ là thông tin tài khoản cơ bản (như địa chỉ email của tài khoản, ngày đăng ký và thông tin thanh toán) và nhật ký địa chỉ IP hạn chế có thể được lưu tạm thời để bảo mật và chống lạm dụng.
- **Chỉ quy trình pháp lý hợp lệ.** Yêu cầu cần có trát đòi hầu tòa, lệnh tòa hoặc lệnh khám xét. Yêu cầu từ ngoài Hoa Kỳ phải đi qua tòa án Hoa Kỳ, hiệp định tương trợ tư pháp, hoặc một thỏa thuận CLOUD Act đáp ứng các yêu cầu pháp lý của Hoa Kỳ.
- **Thông báo và phản đối.** Người dùng được thông báo khi pháp luật cho phép, và các yêu cầu quá rộng sẽ bị phản đối.

Forward Email duy trì Privacy Ratings. Đánh giá của Forward Email dùng cùng bộ tiêu chí như mọi nhà cung cấp khác. Xem [đánh giá Forward Email](/email-providers/forward-email/) và [quy tắc quản trị](/governance/).

## Đọc thêm

- [Bộ Tư pháp Hoa Kỳ: tài liệu về CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: Chia sẻ dữ liệu xuyên biên giới theo CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: Giám sát theo Mục 702](https://www.eff.org/702-spying)
- [EFF: National Security Letter](https://www.eff.org/issues/national-security-letters)
