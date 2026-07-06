import { useMemo, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import roomClean from './assets/room_clean.png';
import diningClean from './assets/dining_clean.png';
import eventClean from './assets/event_clean.png';
import hotelHero from './assets/hotel_hero.png';
import pricingImg from './assets/pricing.jpg';
import agencyHero from './assets/agency_hero.png';


// Clean photographer backgrounds for category buttons
import diningImg from './assets/dining.jpg';
import beerImg from './assets/beer.jpg';
import roomImg from './assets/room.jpg';
import eventImg from './assets/event.jpg';
import servicesImg from './assets/services.jpg';

// PDF pages for sliders
import page3 from './assets/pdf/page_03.jpg';
import page4 from './assets/pdf/page_04.jpg';
import page5 from './assets/pdf/page_05.jpg';
import page6 from './assets/pdf/page_06.jpg';
import page7 from './assets/pdf/page_07.jpg';
import page8 from './assets/pdf/page_08.jpg';
import page9 from './assets/pdf/page_09.jpg';
import page10 from './assets/pdf/page_10.jpg';
import page11 from './assets/pdf/page_11.jpg';
import page12 from './assets/pdf/page_12.jpg';
import page22 from './assets/pdf/img_p22_01_1920x1080.jpeg';
import page23 from './assets/pdf/img_p23_01_1920x1080.jpeg';
import page24 from './assets/pdf/img_p24_01_1920x1080.jpeg';
import logoImg from './assets/logo.png';
import heroTeam from './assets/branding/hsnl_selected/hsnl_sel_page_05.jpg';
import heroServices from './assets/branding/hsnl_selected/hsnl_sel_page_08.jpg';
import memberQuan from './assets/member_quan.jpg';
import memberThuong from './assets/member_thuong.jpg';
import memberKham from './assets/member_kham.jpg';
import memberDuyen from './assets/member_duyen.jpg';

// Pure Valley Beach Club images
import imgValleyPure1 from './assets/branding/valley_pure/valley_p71_img1_2449x1633.jpeg';
import imgValleyPure2 from './assets/branding/valley_pure/valley_p68_img8_2048x1365.jpeg';
import imgValleyPure3 from './assets/branding/valley_pure/valley_p72_img1_781x640.jpeg';

// Pure extracted PDF images







// Spa, Land, Interior pure images
import photoSpa1 from './assets/branding/bao_gia/bao_gia_img_p05_03_1387x1386.jpeg';
import photoSpa2 from './assets/branding/bao_gia/bao_gia_img_p05_04_1387x1386.jpeg';

import photoLand1 from './assets/branding/bao_gia/bao_gia_img_p06_02_2200x2500.jpeg';
import photoLand2 from './assets/branding/bao_gia/bao_gia_img_p06_04_2400x1600.jpeg';

import imgInterior from './assets/pdf/img_p31_01_1920x1080.jpeg';

// Báo giá La Baie images
import photoLaBaie1 from './assets/branding/bao_gia/bao_gia_img_p03_02_2000x2500.jpeg';
import photoLaBaie2 from './assets/branding/bao_gia/bao_gia_img_p03_03_2000x2000.jpeg';
import photoLaBaie3 from './assets/branding/bao_gia/bao_gia_img_p03_04_2000x2000.jpeg';

import imgSeaAngelPure from './assets/branding/hsnl_selected/hsnl_sel_page_56.jpg';
import imgSeaAngelPure2 from './assets/branding/hsnl_full/hsnl_page_57.jpg';
import heroMedia from './assets/crowd.jpg';
// User supplied portfolio images
import userCanaBeerAvatar from './assets/user/cana_beer_premium_hero.png';
import userCanaBeer1 from './assets/user/cana_beer_1.jpg';
import userCanaBeer2 from './assets/user/cana_beer_2.jpg';
import userCanaBeer3 from './assets/user/cana_beer_3.jpg';
import userCanaBeer4 from './assets/user/cana_beer_4.jpg';
import userCanaBeer5 from './assets/user/cana_beer_5.jpg';
import userCanaBeer6 from './assets/user/cana_beer_6.jpg';
import userCanaBeer7 from './assets/user/cana_beer_7.jpg';
import userCanaBeer8 from './assets/user/cana_beer_8.jpg';
import userCanaBeer9 from './assets/user/cana_beer_9.jpg';
import userCanaBeerSinger from './assets/user/cana_beer_singer.jpg';
import userHoCoTienAvatar from './assets/user/hocotien_avatar.jpg';
import userHoCoTienAvatarFit from './assets/user/fit/hocotien_avatar_fit.jpg';
import userHoCoTien1 from './assets/user/hocotien_1.jpg';
import userHoCoTien2 from './assets/user/hocotien_2.jpg';
import userHoCoTien3 from './assets/user/hocotien_3.jpg';
import userHoCoTien4 from './assets/user/hocotien_4.jpg';
import userBirdsNestAvatar from './assets/user/birds_nest_avatar.jpg';
import userBirdsNestAvatarFit from './assets/user/fit/birds_nest_avatar_fit.jpg';
import userBirdsNest1 from './assets/user/birds_nest_1.jpg';
import userCabiBeachAvatar from './assets/user/cabi_beach_avatar.jpg';
import userCabiBeachAvatarFit from './assets/user/fit/cabi_beach_avatar_fit.jpg';
import userCabiBeach1 from './assets/user/cabi_beach_1.jpg';
import userCabiBeach2 from './assets/user/cabi_beach_2.jpg';
import userCabiBeach3 from './assets/user/cabi_beach_3.jpg';
import userGrandViewAvatar from './assets/user/grand_view_avatar.jpg';
import userGrandView1 from './assets/user/grand_view_1.jpg';
import userGrandView2 from './assets/user/grand_view_2.jpg';
import userGrandView3 from './assets/user/grand_view_3.jpg';
import userDiamondPalaceAvatar from './assets/user/diamond_palace_avatar.jpg';
import userDiamondPalace1 from './assets/user/diamond_palace_1.jpg';
import userDiamondPalace2 from './assets/user/diamond_palace_2.jpg';
import userDiamondPalace3 from './assets/user/diamond_palace_3.jpg';
import userThienAnhAvatar from './assets/user/thien_anh_avatar.jpg';
import userThienAnh1 from './assets/user/thien_anh_1.jpg';
import userThienAnh2 from './assets/user/thien_anh_2.jpg';
import userThanhThuAvatar from './assets/user/thanh_thu_avatar.jpg';
import userThanhThuAvatarFit from './assets/user/fit/thanh_thu_avatar_fit.jpg';
import userThanhThu1 from './assets/user/thanh_thu_1.jpg';
import userBinhBeerAvatar from './assets/user/binh_beer_avatar.jpg';
import userBinhBeer1Fit from './assets/user/fit/binh_beer_1_fit.jpg';
import userBinhBeer1 from './assets/user/binh_beer_1.jpg';

// Dynamic imports for document page sliders using Vite's glob import
const hsnlPagesMap = import.meta.glob('./assets/branding/hsnl_full/*.jpg', { eager: true, import: 'default' });
const hsnlPages = Object.values(hsnlPagesMap) as string[];

const baoGiaPagesMap = import.meta.glob('./assets/branding/bao_gia_full/*.jpg', { eager: true, import: 'default' });
const baoGiaPages = Object.values(baoGiaPagesMap) as string[];

const baoGiaSuKienPagesMap = import.meta.glob('./assets/branding/bao_gia_sukien/*.jpg', { eager: true, import: 'default' });
const baoGiaSuKienPages = Object.values(baoGiaSuKienPagesMap) as string[];

const getCategoryBg = (cat: string) => {
  switch (cat) {
    case 'Tất cả': return agencyHero;
    case 'Nhà hàng': return diningImg;
    case 'Club': return beerImg;
    case 'Khách sạn': return roomImg;
    case 'Spa': return roomClean;
    case 'BĐS': return pricingImg;
    case 'Nội thất': return servicesImg;
    case 'Sự kiện': return eventImg;
    default: return '';
  }
};

const contact = {
  hotline: '0328 247 888',
  address: 'Trụ sở chính: 7-9/1 Nguyễn An Ninh, Phường Yết Kiêu, Thành phố Hạ Long, Quảng Ninh',
  address2: 'Văn phòng: Số 2 - Ô 1 Ngõ 16 Cao Thắng, Phường Hà Lầm, Thành phố Hạ Long, Quảng Ninh',
  email: 'info@dstgroup.vn',
  website: 'dstgroup.vn',
};

const categories = ['Tất cả', 'Nhà hàng', 'Club', 'Khách sạn', 'Spa', 'BĐS', 'Nội thất', 'Sự kiện'];

const projects = [
  { 
    name: 'Nhà hàng La Baie', 
    category: 'Nhà hàng', 
    image: photoLaBaie1, 
    images: [photoLaBaie1, photoLaBaie2, photoLaBaie3],
    summary: 'Thiết kế hình ảnh, nội dung truyền thông và hệ thống nhận diện cho nhóm ngành F&B.',
    details: `1. GIỚI THIỆU:
LaBaie Restaurant – nhà hàng 5 sao nằm trên cung đường bao biển đẹp nhất Hạ Long với hương vị ẩm thực độc đáo, phong cách phục vụ chuẩn quốc tế cùng không gian thiết kế sang trọng - điểm đến hàng đầu cho tín đồ đam mê ẩm thực đích thực.

2. HƯỚNG PHÁT TRIỂN:
LaBaie luôn chú trọng xây dựng hình ảnh món ăn hấp dẫn khách hàng ngay từ cái nhìn đầu tiên và mong muốn trở thành sự lựa chọn hàng đầu trong lòng khách hàng khi cân nhắc địa điểm thưởng thức ẩm thực.

3. GIẢI PHÁP CUNG CẤP:
DST Group đồng hành cùng La Baie với các dịch vụ thiết kế hình ảnh món ăn, ấn phẩm truyền thông, quản trị nội dung Fanpage và chạy chiến dịch quảng cáo tối ưu thương hiệu.`, 
    tags: ['Branding', 'Content', 'Design'] 
  },
  { 
    name: 'Hồ Cô Tiên', 
    category: 'Nhà hàng', 
    image: userHoCoTienAvatarFit, 
    images: [userHoCoTienAvatar, userHoCoTien1, userHoCoTien2, userHoCoTien3, userHoCoTien4],
    galleryFocus: 'left-crop',
    summary: 'Chụp ảnh sản phẩm, quay review, xây dựng & quản trị fanpage, thiết kế hình ảnh chuyên nghiệp.',
    details: `1. GIỚI THIỆU:
Nhà hàng ẩm thực hải sản tươi sống Hồ Cô Tiên và ẩm thực Trung Hoa độc đáo giữa lòng Hạ Long. Nơi đánh thức vị giác với hải sản tươi ngon tuyển chọn và các món ăn Trung Hoa chế biến bởi bếp trưởng chuyên nghiệp.

2. GIẢI PHÁP CUNG CẤP:
DST Group cung cấp gói dịch vụ Marketing tổng thể cho nhà hàng: Chụp ảnh sản phẩm/món ăn truyền thông chuyên nghiệp, quay video/clip review món ăn, xây dựng & quản trị Fanpage toàn diện, thiết kế hình ảnh bài viết và triển khai các chiến dịch quảng cáo tiếp cận khách hàng tiềm năng tại Hạ Long.`, 
    tags: ['Fanpage', 'Visual', 'Media'] 
  },
  { 
    name: "Bird's Nest Cafe", 
    category: 'Nhà hàng', 
    image: userBirdsNestAvatarFit, 
    images: [userBirdsNestAvatar, userBirdsNest1],
    summary: 'Tư vấn truyền thông, xây dựng fanpage, thiết kế logo và bộ nhận diện thương hiệu.',
    details: `1. GIỚI THIỆU:
Tổ hợp Cafe và không gian thưởng thức đồ uống độc đáo tại Hạ Long. Thiết kế không gian mang phong cách hiện đại kết hợp thiên nhiên, là điểm đến lý tưởng cho giới trẻ trải nghiệm, thư giãn và lưu lại những khoảnh khắc đẹp.

2. GIẢI PHÁP CUNG CẤP:
DST Group thực hiện tư vấn chiến lược truyền thông, xây dựng và quản trị Fanpage Facebook, thiết kế Logo và bộ nhận diện thương hiệu (Menu, Voucher, Standee) đồng bộ, chuyên nghiệp.`, 
    tags: ['Logo', 'Identity', 'Ads'] 
  },
  { 
    name: 'Valley Beach Club', 
    category: 'Club', 
    image: imgValleyPure1, 
    images: [imgValleyPure1, imgValleyPure2, imgValleyPure3],
    summary: 'Quản trị fanpage, viết content, thiết kế hình ảnh và chạy ADS phủ sóng thương hiệu.',
    details: `1. GIỚI THIỆU:
Valley Beach Club - một tụ điểm ăn chơi mới mẻ, độc đáo. Một quán bar bãi biển tọa lạc tại vị trí đắc địa trên con đường ven biển Bãi Cháy, đối diện Quảng Trường Mặt Trời. Với thiết kế theo phong cách Bohemian được lấy cảm hứng từ quán bar bãi biển tại các nước Châu Âu và không gian cực kì thoáng đãng, lãng mạng, âm thanh ánh sáng hiện đại - Valley Beach Club luôn là lựa chọn giải trí bậc nhất về đêm tại Hạ Long, Quảng Ninh.

2. HƯỚNG PHÁT TRIỂN:
Valley Beach Club với định hướng phát triển trở thành một điểm ăn chơi, giải trí số 1 tại khu vực Bãi Cháy, Hạ Long chính vì thế nơi đây luôn được tổ chức những sự kiện âm nhạc lớn với sự tham gia của nhiều ca sĩ DJ đẳng cấp trong Showbiz Việt Nam và Quốc tế về biểu diễn tại Valley Beach Club.

3. GIẢI PHÁP CUNG CẤP:
DST Group đồng hành cùng Valley Beach Club với các dịch vụ Quản Trị Fanpage, viết content, thiết kế hình ảnh và chạy ADS phủ sóng thương hiệu.

4. KẾT QUẢ ĐẠT ĐƯỢC:
DST Group bước đầu đã giúp Valley Beach Club xây dựng hình ảnh chuyên nghiệp, Fanpage với nội dung và các hình ảnh, video độc đáo, thú vị, góp phần quảng bá tên tuổi hình ảnh phủ sóng rộng rãi, tiếp cận tệp khách hàng tiềm năng tại Quảng Ninh.`, 
    tags: ['Club', 'Event', 'Ads'] 
  },
  { 
    name: 'Cabi Beach Lounge', 
    category: 'Club', 
    image: userCabiBeachAvatarFit, 
    images: [userCabiBeachAvatar, userCabiBeach1, userCabiBeach2, userCabiBeach3],
    summary: 'Hệ thống nhận diện và truyền thông cho bãi biển, tối ưu hình ảnh thương hiệu dịch vụ.',
    details: `1. GIỚI THIỆU:
Cabi Beach Lounge - Không gian giải trí thư giãn bên bờ biển đầy thơ mộng. Thiết kế không gian mang phong cách phóng khoáng hiện đại, là điểm hẹn ẩm thực, âm nhạc hòa hợp cùng thiên nhiên độc đáo.

2. GIẢI PHÁP CUNG CẤP:
DST Group thực hiện thiết kế hệ thống nhận diện thương hiệu, các ấn phẩm quảng cáo, bộ tài liệu sales kit giới thiệu dịch vụ và xây dựng các chiến dịch truyền thông đa kênh tối ưu hình ảnh thương hiệu.`, 
    tags: ['Beach Lounge', 'Branding', 'Design'] 
  },
  { 
    name: 'Cana Beer Club', 
    category: 'Club', 
    image: userCanaBeerAvatar, 
    images: [userCanaBeerAvatar, userCanaBeer1, userCanaBeer2, userCanaBeer3, userCanaBeer4, userCanaBeer5, userCanaBeer6, userCanaBeer7, userCanaBeer8, userCanaBeer9, userCanaBeerSinger],
    summary: 'Thiết kế nhận diện thương hiệu, thiết kế menu bia hơi và chạy ADS định vị.',
    details: `1. GIỚI THIỆU:
Cana Beer Club & Brewery – tổ hợp bia tươi thủ công kết hợp âm nhạc cuồng nhiệt giữa lòng Hạ Long. Điểm hẹn thưởng thức ẩm thực đặc sắc và gặp gỡ giao lưu đầy sảng khoái.

2. GIẢI PHÁP CUNG CẤP:
DST Group thực hiện thiết kế menu đồ ăn bia hơi, biển quảng cáo ngoài trời, xây dựng và quản trị fanpage truyền thông trực quan cùng chạy các chiến dịch ADS tiếp thị đối tượng địa phương.`, 
    tags: ['Beer Club', 'Identity', 'Ads'] 
  },
  { 
    name: 'Grand View Palace', 
    category: 'Sự kiện', 
    image: userGrandViewAvatar, 
    images: [userGrandViewAvatar, userGrandView1, userGrandView2, userGrandView3],
    summary: 'Truyền thông và thiết kế hình ảnh cho trung tâm sự kiện, hội nghị, tiệc cưới.',
    details: `1. GIỚI THIỆU:
Grand View Palace HaLong Hotel là một trung tâm tổ chức sự kiện hiện đại và tiện nghi bậc nhất tại Hạ Long. Nơi đây chuyên tổ chức các sự kiện lớn, tiệc cưới, hội nghị, triển lãm, gala diner... với quy mô hoành tráng, vị trí thuận tiện nằm giữa trung tâm thành phố Hạ Long, không gian sảnh tiệc rộng rãi sang trọng, menu đồ ăn phong phú hấp dẫn được chế biến bởi tay nghề của những đầu bếp chuyên nghiệp, cùng với chất lượng dịch vụ đạt tiêu chuẩn 5 sao.

2. HƯỚNG PHÁT TRIỂN:
Trung tâm Grand View Palace HaLong Hotel ngay từ khi mới thành lập đã xác định mục tiêu trở thành một trung tâm tổ chức sự kiện số 1 tại Quảng Ninh. Đơn vị muốn xây dựng hình ảnh uy tín, chuyên nghiệp, giúp quảng bá tên tuổi rộng rãi không chỉ trong thị trưường Quảng Ninh mà còn là nơi tổ chức các sự kiện mang tầm quy mô lớn hơn nữa.

3. GIẢI PHÁP CUNG CẤP:
DST Group cung cấp giải pháp truyền thông quảng bá thương hiệu, thiết kế hình ảnh ấn phẩm tiếp thị sự kiện và vận hành các chiến dịch quảng cáo đa kênh.`, 
    tags: ['Event Center', 'Media', 'Design'] 
  },
  { 
    name: 'Diamond Palace - Hạ Long', 
    category: 'Sự kiện', 
    image: userDiamondPalaceAvatar, 
    images: [userDiamondPalaceAvatar, userDiamondPalace1, userDiamondPalace2, userDiamondPalace3],
    summary: 'Tư vấn truyền thông và chạy ADS cho sự kiện triển lãm tiệc cưới.',
    details: `1. GIỚI THIỆU:
Trung tâm tổ chức sự kiện và tiệc cưới Diamond Palace - một trong những không gian tổ chức sự kiện tiệc cưới sang trọng, đẳng cấp hàng đầu tại Hạ Long với kiến trúc châu Âu lộng lẫy và dịch vụ tiệc chuyên nghiệp.

2. GIẢI PHÁP CUNG CẤP:
DST Group thực hiện tư vấn truyền thông, lên kế hoạch chạy quảng cáo ADS phủ sóng rộng rãi cho sự kiện lớn 'Triển lãm tiệc cưới', thu hút đông đảo khách hàng tham gia, góp phần tổ chức sự kiện thành công rực rỡ.`, 
    tags: ['Wedding', 'Ads', 'Campaign'] 
  },
  { 
    name: 'Nhà hàng Thiên Anh', 
    category: 'Nhà hàng', 
    image: userThienAnhAvatar, 
    images: [userThienAnhAvatar, userThienAnh1, userThienAnh2],
    summary: 'Thiết kế hệ thống nhận diện thực đơn Menu, bảng hiệu và tờ gấp tiếp thị hải sản.',
    details: `1. GIỚI THIỆU:
Thương hiệu hải sản tươi sống Thiên Anh nức tiếng Cái Dăm, Hạ Long. Địa điểm F&B ẩm thực quen thuộc thu hút đông đảo thực khách và khách du lịch trải nghiệm mỗi ngày.

2. GIẢI PHÁP CUNG CẤP:
DST Group cung cấp dịch vụ chụp ảnh món ăn nghệ thuật, thiết kế bộ thực đơn Menu bìa cứng chống nước sang trọng, làm mới biển bảng quảng cáo mặt tiền và quản trị nội dung fanpage tiếp thị ẩm thực.`, 
    tags: ['Seafood', 'Menu Design', 'Fanpage'] 
  },
  { 
    name: 'Nhà hàng Thanh Thư', 
    category: 'Nhà hàng', 
    image: userThanhThuAvatarFit, 
    images: [userThanhThuAvatar, userThanhThu1],
    summary: 'Ẩm thực gia đình Việt mộc mạc tinh tế, thiết kế ấn phẩm thực đơn đặc sản.',
    details: `1. GIỚI THIỆU:
Nhà hàng Thanh Thư mang hương vị Việt truyền thống đặc trưng trong kiến trúc nhà sàn gỗ mộc mạc, đem lại trải nghiệm ẩm thực gia đình ấm cúng, đậm bản sắc quê hương.

2. GIẢI PHÁP CUNG CẤP:
DST Group đảm nhận chụp hình món ăn nghệ thuật thực tế tại bếp, thiết kế bố cục thực đơn Menu gỗ kết hợp dập nổi logo thương hiệu tinh xảo và tư vấn quảng cáo tiếp cận tệp khách hàng F&B.`, 
    tags: ['Traditional', 'Food Styling', 'Visual'] 
  },
  { 
    name: 'Bình Beer', 
    category: 'Club', 
    image: userBinhBeer1Fit, 
    images: [userBinhBeerAvatar, userBinhBeer1],
    summary: 'Bia hơi & nhậu phủi Hạ Long, quản trị bài viết và vận hành quảng cáo tiếp thị.',
    details: `1. GIỚI THIỆU:
Bình Beer – điểm hẹn tụ họp bia hơi Hà Nội mát lạnh cùng các món nhậu hải sản Quảng Ninh dân dã, bình dân và sảng khoái vào mỗi buổi chiều ven biển.

2. GIẢI PHÁP CUNG CẤP:
DST Group cung cấp dịch vụ quay video clip ngắn review thực tế quán nhậu, thiết kế bảng hiệu LED, quản trị nội dung bài đăng fanpage vui nhộn tăng lượng tương tác địa phương.`, 
    tags: ['Local Beer', 'Video review', 'Marketing'] 
  },
  { 
    name: 'Sen Vàng Massage & Spa', 
    category: 'Spa', 
    image: photoSpa1, 
    images: [photoSpa1, photoSpa2],
    summary: 'Thiết kế hình ảnh thương hiệu dịch vụ spa, massage và chăm sóc khách hàng.',
    details: `1. GIỚI THIỆU:
Sen Vàng Massage & Spa - tổ hợp chăm sóc sức khỏe và trị liệu spa cao cấp tại Hạ Long. Mang đến không gian thư giãn yên bình kết hợp các liệu trình massage chuyên sâu, trang thiết bị hiện đại cùng đội ngũ kỹ thuật viên tay nghề cao phục vụ khách hàng.

2. GIẢI PHÁP CUNG CẤP:
DST Group thực hiện xây dựng hình ảnh thương hiệu dịch vụ spa, massage chuyên nghiệp, thiết kế cẩm nang dịch vụ (menu/brochure), thiết kế bộ nhận diện thương hiệu và chạy các chiến dịch quảng cáo online.`, 
    tags: ['Spa', 'Service', 'Identity'] 
  },
  { 
    name: 'Nhat Minh Land', 
    category: 'BĐS', 
    image: photoLand1, 
    images: [photoLand1, photoLand2],
    summary: 'Hình ảnh thương hiệu bất động sản, truyền thông dự án và tài liệu bán hàng.',
    details: `1. GIỚI THIỆU:
Nhat Minh Land - đơn vị phân phối và tiếp thị bất động sản uy tín hàng đầu tại Quảng Ninh, chuyên phân phối các dự án đất nền, chung cư, biệt thự nghỉ dưỡng cao cấp.

2. GIẢI PHÁP CUNG CẤP:
DST Group thực hiện thiết kế hồ sơ năng lực công ty (Company Profile) chuyên nghiệp, catalogue giới thiệu dự án, bộ tài liệu bán hàng (Sales Kit) đồng bộ và xây dựng hình ảnh truyền thông thương hiệu bất động sản.`, 
    tags: ['Real Estate', 'Profile', 'Sales Kit'] 
  },
  { 
    name: 'Nội thất CCJ', 
    category: 'Nội thất', 
    image: imgInterior, 
    images: [imgInterior],
    summary: 'Thiết kế nhận diện, hồ sơ thương hiệu và hình ảnh truyền thông cho lĩnh vực nội thất.',
    details: `1. GIỚI THIỆU:
CCJ Interior Design & Build - đơn vị chuyên tư vấn thiết kế và thi công nội thất trọn gói uy tín hàng đầu tại Hạ Long, mang lại giải pháp không gian sống hiện đại, tiện nghi và tinh tế cho khách hàng.

2. GIẢI PHÁP CUNG CẤP:
DST Group đồng hành thiết kế hồ sơ năng lực (company profile), bộ tài liệu giới thiệu năng lực thi công, catalogue sản phẩm nội thất và chuẩn hóa hình ảnh truyền thông thương hiệu.`, 
    tags: ['Interior', 'Profile', 'Branding'] 
  },
  { 
    name: 'Khách sạn Sea Angel', 
    category: 'Khách sạn', 
    image: imgSeaAngelPure, 
    images: [imgSeaAngelPure, imgSeaAngelPure2],
    summary: 'Thiết kế nhận diện thương hiệu, thiết kế Logo và website đặt phòng cho khách sạn cao cấp.',
    details: `1. GIỚI THIỆU:
Sea Angel Hotel là khách sạn cao cấp tọa lạc tại vị trí đắc địa ven vịnh Hạ Long. Với mong muốn mang lại trải nghiệm nghỉ trú đẳng cấp, sang trọng kết hợp sự tinh tế của thiên nhiên vịnh biển, Sea Angel cần một hệ thống nhận diện xứng tầm vị thế 5 sao.

2. GIẢI PHÁP CUNG CẤP:
DST Group đã đồng hành xây dựng thương hiệu Sea Angel Hotel với các giải pháp trọn gói:
- Thiết kế Logo và Brand Guidelines chuẩn hóa.
- Sáng tạo câu chuyện thương hiệu và định vị cốt lõi.
- Thiết kế các ấn phẩm văn phòng, ấn phẩm lưu trú (thẻ phòng, thẻ hành lý, menu dịch vụ phòng).
- Thiết kế giao diện website trực quan, tích hợp đặt phòng và đặt tiệc cưới trực tuyến.

3. KẾT QUẢ ĐẠT ĐƯỢC:
Dự án hoàn thiện giúp Sea Angel Hotel sở hữu hình ảnh đồng bộ sang trọng, tạo ấn tượng mạnh mẽ cho khách hàng và đối tác thầu ngay từ những điểm chạm đầu tiên.`, 
    tags: ['Hotel Branding', 'Logo Design', 'Web Design'] 
  },
];

const services = [
  {
    title: 'Brand Strategy & Positioning',
    desc: 'Định vị thương hiệu, xây dựng câu chuyện và thông điệp truyền thông cốt lõi.',
    icon: 'strategy'
  },
  {
    title: 'Identity Design',
    desc: 'Sáng tạo Logo, Brand Guidelines và hệ thống nhận diện thương hiệu toàn diện.',
    icon: 'identity'
  },
  {
    title: 'Profile & Sales Kit',
    desc: 'Thiết kế Hồ sơ năng lực (Profile), Catalogue, Menu và tài liệu bán hàng chuyên nghiệp.',
    icon: 'profile'
  },
  {
    title: 'Digital Marketing & Media',
    desc: 'Quản trị Fanpage, chạy quảng cáo Target địa phương, sản xuất hình ảnh/video sự kiện.',
    icon: 'marketing'
  }
]; 
const steps = [
  {
    num: '01',
    title: 'Nghiên cứu & Định vị',
    desc: 'DST Group khảo sát thị trưường, đối thủ cạnh tranh và phân tích tệp khách hàng mục tiêu để tìm ra hướng đi khác biệt.'
  },
  {
    num: '02',
    title: 'Ý tưởng & Concept',
    desc: 'Xác lập moodboard hình ảnh, slogan và định hình cá tính thương hiệu trước khi triển khai thiết kế chi tiết.'
  },
  {
    num: '03',
    title: 'Thiết kế & Hoàn thiện',
    desc: 'Lập trình viên, designer tiến hành phác thảo và xuất bản các bản demo chất lượng cao, chuẩn hóa từng điểm chạm thương hiệu.'
  },
  {
    num: '04',
    title: 'Bàn giao & Đồng hành',
    desc: 'Đóng gói toàn bộ file gốc, hướng dẫn sử dụng và hỗ trợ tư vấn các chiến dịch quảng bá tối ưu doanh thu.'
  }
];

const testimonials = [
  {
    quote: "DST Group đã giúp Valley Beach Club nâng cấp hoàn hảo hình ảnh trên mạng xã hội. Các ấn phẩm thiết kế sự kiện của họ rất bắt mắt, thu hút lượng lớn khách hàng trẻ.",
    author: "Đại diện Ban Giám Đốc",
    company: "Valley Beach Club Hạ Long"
  },
  {
    quote: "Hồ sơ năng lực do DST Group thực hiện giúp chúng tôi hoàn toàn tự tin khi đấu thầu và làm việc với các đối tác lớn. Sự đồng bộ từ logo, menu đến biển bảng chỉ dẫn rất ấn tượng.",
    author: "Bếp trưởng & Quản lý",
    company: "Nhà hàng hải sản Hồ Cô Tiên"
  },
  {
    quote: "Không chỉ dừng lại ở thiết kế đẹp, giải pháp chạy quảng cáo định vị ẩm thực của DST Group mang lại lượng đặt bàn thực tế vượt ngoài mong đợi cho chúng tôi.",
    author: "Chủ đầu tư",
    company: "Nhà hàng cao cấp La Baie"
  }
];

const renderIcon = (type: string) => {
  switch (type) {
    case 'strategy':
      return (
        <lottie-player
          src="./lottie/strategy.json"
          background="transparent"
          speed="1"
          style={{ width: '48px', height: '48px', display: 'inline-block' }}
          loop="true"
          autoplay="true"
        ></lottie-player>
      );
    case 'identity':
      return (
        <lottie-player
          src="./lottie/identity.json"
          background="transparent"
          speed="1"
          style={{ width: '48px', height: '48px', display: 'inline-block' }}
          loop="true"
          autoplay="true"
        ></lottie-player>
      );
    case 'profile':
      return (
        <lottie-player
          src="./lottie/profile.json"
          background="transparent"
          speed="1"
          style={{ width: '48px', height: '48px', display: 'inline-block' }}
          loop="true"
          autoplay="true"
        ></lottie-player>
      );
    case 'marketing':
      return (
        <lottie-player
          src="./lottie/marketing.json"
          background="transparent"
          speed="1"
          style={{ width: '48px', height: '48px', display: 'inline-block' }}
          loop="true"
          autoplay="true"
        ></lottie-player>
      );
    default:
      return null;
  }
};

export default function App() {
  const [view, setView] = useState<'home' | 'catalog' | 'barclub' | 'hospitality' | 'about' | 'pricing' | 'project-detail'>('home');
  const [prevView, setPrevView] = useState<'home' | 'catalog' | 'barclub' | 'hospitality' | 'about' | 'pricing' | 'project-detail'>('catalog');
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hsnlPage, setHsnlPage] = useState(0);
  const [activeDocument, setActiveDocument] = useState<'hsnl' | 'baogia' | 'sukien'>('hsnl');


  const currentDocPages = activeDocument === 'hsnl' 
    ? hsnlPages 
    : (activeDocument === 'baogia' ? baoGiaPages : baoGiaSuKienPages);



  useEffect(() => {
    setHsnlPage(0);
  }, [activeDocument]);

  const filteredProjects = useMemo(() => activeCategory === 'Tất cả' ? projects : projects.filter((project) => project.category === activeCategory), [activeCategory]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigateTo = (newView: typeof view) => {
    setView(newView);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProjectDetail = (project: any) => {
    setPrevView(view);
    setSelectedProject(project);
    setView('project-detail');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className={`site-shell ${
      view === 'barclub' ? 'theme-club' :
      view === 'hospitality' ? 'theme-hotel' : ''
    }`}>
      <header className="topline">
        <div className="container topline-inner">
          <span>Trụ sở chính: 7-9/1 Nguyễn An Ninh, Hạ Long, Quảng Ninh</span>
          <a href={`tel:${contact.hotline.replace(/\s/g, '')}`}>Hotline: <strong>{contact.hotline}</strong></a>
        </div>
      </header>
      
      <nav className="navbar">
        <div className="container nav-inner">
          <button className="brand brand-button" onClick={() => navigateTo('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', background: 'transparent', border: 'none' }}>
            <img src={logoImg} alt="DST Group" style={{ height: '36px', width: 'auto' }} />
            <span style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '1px', color: 'var(--teal)' }}>DST GROUP</span>
          </button>
          
          {/* Desktop Nav Links */}
          <div className="nav-links">
            <button className={view === 'home' ? 'active' : ''} onClick={() => navigateTo('home')}>Trang chính</button>
            <button className={view === 'barclub' ? 'active' : ''} onClick={() => navigateTo('barclub')}>Bar & Club</button>
            <button className={view === 'hospitality' ? 'active' : ''} onClick={() => navigateTo('hospitality')}>Nhà hàng - Khách sạn</button>
            <button className={view === 'about' ? 'active' : ''} onClick={() => { setActiveDocument('hsnl'); setHsnlPage(0); navigateTo('about'); }}>Giới thiệu công ty</button>
            <button className={view === 'pricing' ? 'active' : ''} onClick={() => { setActiveDocument('baogia'); setHsnlPage(0); navigateTo('pricing'); }}>Báo giá</button>
            <button className={view === 'catalog' ? 'active' : ''} onClick={() => navigateTo('catalog')}>Danh mục dự án</button>
          </div>

          {/* Desktop CTA Button */}
          <button 
            className="btn btn-primary desktop-cta" 
            onClick={() => navigateTo('pricing')}
            style={{ minHeight: '40px', padding: '0 20px', fontSize: '14.5px' }}
          >
            Liên hệ tư vấn
          </button>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </button>
        </div>

        {/* Mobile Navigation Dropdown Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-nav-overlay">
            <button className={`mobile-nav-btn ${view === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>Trang chính</button>
            <button className={`mobile-nav-btn ${view === 'barclub' ? 'active' : ''}`} onClick={() => navigateTo('barclub')}>Bar & Club</button>
            <button className={`mobile-nav-btn ${view === 'hospitality' ? 'active' : ''}`} onClick={() => navigateTo('hospitality')}>Nhà hàng - Khách sạn</button>
            <button className={`mobile-nav-btn ${view === 'about' ? 'active' : ''}`} onClick={() => { setActiveDocument('hsnl'); setHsnlPage(0); navigateTo('about'); }}>Giới thiệu công ty</button>
            <button className={`mobile-nav-btn ${view === 'pricing' ? 'active' : ''}`} onClick={() => { setActiveDocument('baogia'); setHsnlPage(0); navigateTo('pricing'); }}>Báo giá</button>
            <button className={`mobile-nav-btn ${view === 'catalog' ? 'active' : ''}`} onClick={() => navigateTo('catalog')}>Danh mục dự án</button>
          </div>
        )}
      </nav>

      {view === 'home' && (
        <main>
          {/* Hero Slider */}
          <section className="hero-slider" id="hero">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="slide"
              >
                <div className="slide-background">
                  <img src={currentSlide === 0 ? heroTeam : (currentSlide === 1 ? heroServices : heroMedia)} alt="" />
                </div>
                <div className="slide-overlay" />
                <div className="slide-content-wrap">
                  <div className="container">
                    <div className="slide-copy">
                      {currentSlide === 0 ? (
                        <>
                          <p className="eyebrow">Digital Branding Agency</p>
                          <h1>DST GROUP kiến tạo<br />giá trị thương hiệu vững bền.</h1>
                          <p className="hero-desc">Đồng hành xây dựng bộ nhận diện chuẩn hóa, hồ sơ năng lực chuyên nghiệp và hệ thống ấn phẩm marketing định vị thị trưường.</p>
                          <div className="hero-actions">
                            <button className="btn btn-primary" onClick={() => navigateTo('about')}>Xem Hồ sơ năng lực &rarr;</button>
                            <button className="btn btn-outline" onClick={() => navigateTo('catalog')}>Dự án tiêu biểu &rarr;</button>
                          </div>
                        </>
                      ) : currentSlide === 1 ? (
                        <>
                          <p className="eyebrow">Premium Design Solutions</p>
                          <h1>Chuẩn hóa ấn phẩm<br />Bán hàng & Sales Kit chuyên nghiệp.</h1>
                          <p className="hero-desc">Từ Company Profile, Catalogue sản phẩm đến thực đơn Menu, Brochure, biển bảng chỉ dẫn và cẩm nang thương hiệu đồng bộ.</p>
                          <div className="hero-actions">
                            <button className="btn btn-primary" onClick={() => navigateTo('hospitality')}>Nhóm ngành F&B - Khách sạn &rarr;</button>
                            <button className="btn btn-outline" onClick={() => navigateTo('barclub')}>Nhóm ngành Bar & Club &rarr;</button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="eyebrow">Local Advertising & Media</p>
                          <h1>Quản trị truyền thông &<br />Quảng cáo định vị doanh thu.</h1>
                          <p className="hero-desc">Quản trị Fanpage toàn diện, chụp ảnh món ăn/sự kiện nghệ thuật, quay phim review, vận hành quảng cáo tiếp cận tệp khách hàng tiềm năng.</p>
                          <div className="hero-actions">
                            <button className="btn btn-primary" onClick={() => navigateTo('catalog')}>Danh mục dự án &rarr;</button>
                            <a href="#contact" className="btn btn-outline">Nhận tư vấn ngay &rarr;</a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="slider-dots">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`dot ${currentSlide === i ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Quick Industry Cards Section */}
          <section className="section services-summary-section">
            <div className="container">
              <div className="section-head text-center">
                <span>Giải pháp chuyên ngành</span>
                <h2>Định hình thương hiệu theo lĩnh vực</h2>
                <p>Chúng tôi nghiên cứu sâu và thiết kế chuyên biệt cho từng mô hình hoạt động nhằm tối ưu hóa điểm chạm khách hàng.</p>
              </div>
              <div className="industry-hub-grid">
                <div className="industry-hub-card card-barclub" onClick={() => navigateTo('barclub')}>
                  <div className="card-bg-overlay" style={{ backgroundImage: `url(${imgValleyPure1})` }} />
                  <div className="card-content">
                    <span className="industry-tag">GIẢI TRọ ĐÊM</span>
                    <h3>Bar, Club & Lounge Hub</h3>
                    <p>Bộ nhận diện ấn tượng, thiết kế poster sự kiện, sản xuất video recap và các ấn phẩm truyền thông sôi động.</p>
                    <span className="hub-link">Khám phá giải pháp &rarr;</span>
                  </div>
                </div>
                <div className="industry-hub-card card-hospitality" onClick={() => navigateTo('hospitality')}>
                  <div className="card-bg-overlay" style={{ backgroundImage: `url(${photoLaBaie1})` }} />
                  <div className="card-content">
                    <span className="industry-tag">ẨM THỰC - NGHỈ DƯỠNG</span>
                    <h3>Restaurant & Hotel Hub</h3>
                    <p>Thiết kế menu cao cấp, chụp ảnh món ăn nghệ thuật, biển hiệu và bộ Sales Kit chuẩn hóa cho khách sạn 5 sao.</p>
                    <span className="hub-link">Khám phá giải pháp &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="section services-section" id="services">
            <div className="container">
              <div className="section-head">
                <span>Dịch vụ cốt lõi</span>
                <h2>DST Group hỗ trợ xây dựng thương hiệu từ nền móng</h2>
                <p>Từ việc lập định hướng chiến lược đến thiết kế chi tiết và quản trị vận hành marketing thực tế.</p>
              </div>
              <div className="services-grid">
                {services.map((service) => (
                  <div className="service-card" key={service.title}>
                    <div className="service-icon-wrap">{renderIcon(service.icon)}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section process-section">
            <div className="container">
              <div className="section-head text-center">
                <span>Quy trình chuẩn hóa</span>
                <h2>Cách chúng tôi đồng hành cùng bạn</h2>
                <p>Một lộ trình làm việc khoa học, chặt chẽ nhằm bảo đảm bàn giao sản phẩm thương hiệu chất lượng cao nhất.</p>
              </div>
              <div className="process-grid">
                {steps.map((step) => (
                  <div className="process-card-wrap" key={step.num}>
                    <div className="process-card">
                      <div className="process-card-bg-number">{step.num}</div>
                      <div className="process-card-header">
                        <span className="process-step-number">{step.num}</span>
                        <h3>{step.title}</h3>
                      </div>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Project Category Section */}
          <section className="section hsnl-viewer-section project-categories-section" id="hsnl-viewer">
            <div className="container">
              <div className="section-head text-center">
                <span>Danh mục dự án</span>
                <h2>Khám phá dự án theo nhóm ngành</h2>
                <p>Chọn nhanh lĩnh vực bạn quan tâm: nhà hàng, club, khách sạn, spa, bất động sản, nội thất và sự kiện.</p>
              </div>

              <div className="project-category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className="project-category-btn"
                    onClick={() => {
                      setActiveCategory(category);
                      navigateTo('catalog');
                    }}
                    style={{ backgroundImage: `url(${getCategoryBg(category)})` }}
                  >
                    <div className="btn-overlay"></div>
                    <div className="btn-content">
                      <span>{category}</span>
                      <strong>{category === 'Tất cả' ? projects.length : projects.filter((project) => project.category === category).length}</strong>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="section testimonial-section">
            <div className="container">
              <div className="section-head text-center">
                <span>Đánh giá từ khách hàng</span>
                <h2>DST Group đã đồng hành cùng thương hiệu nào?</h2>
                <p>Sự hài lòng và phát triển bền vững của doanh nghiệp đối tác là phần thưởng cao quý nhất của chúng tôi.</p>
              </div>
              <div className="testimonial-grid">
                {testimonials.map((t, idx) => (
                  <div className="testimonial-card" key={idx}>
                    <div className="quote-icon">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.45">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h2c0 3-1 6-4 8v1zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h2c0 3-1 6-4 8v1z" />
                      </svg>
                    </div>
                    <p className="quote-text">{t.quote}</p>
                    <div className="quote-author">
                      <strong>{t.author}</strong>
                      <span>{t.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ContactSection />
        </main>
      )}

      {view === 'catalog' && (
        <main id="top">
          <section className="catalog-hero">
            <div className="container catalog-hero-grid">
              <div>
                <p className="eyebrow">Branding Portfolio</p>
                <h1>Danh mục dự án theo nhóm ngành.</h1>
                <p>Duyệt nhanh các dự án DST Group đã đồng hành theo từng lĩnh vực: nhà hàng, club, khách sạn, spa, bất động sản, nội thất và trung tâm sự kiện.</p>
              </div>
              <div className="summary-panel">
                <strong>{projects.length}</strong>
                <span>dự án / hồ sơ tiêu biểu</span>
                <small>{contact.address}</small>
              </div>
            </div>
          </section>
          
          <nav className="category-nav">
            <div className="container category-scroll">
              {categories.map((category) => (
                <button 
                  type="button" 
                  key={category} 
                  className={activeCategory === category ? 'active' : ''} 
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  <span>
                    {category === 'Tất cả' ? projects.length : projects.filter((project) => project.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </nav>

          <section className="catalog-section">
            <div className="container">
              <div className="section-title-row">
                <div>
                  <p className="eyebrow">{activeCategory}</p>
                  <h2>{activeCategory === 'Tất cả' ? 'Tất cả dự án' : `Nhóm ngành ${activeCategory}`}</h2>
                </div>
                <button className="contact-pill" onClick={() => navigateTo('home')}>Quay về trang chính</button>
              </div>
              <ProjectGrid items={filteredProjects} onProjectClick={openProjectDetail} />
            </div>
          </section>
          
          <ContactSection />
        </main>
      )}

      {view === 'barclub' && (
        <BarClubPage navigateTo={navigateTo} setActiveDocument={setActiveDocument} setHsnlPage={setHsnlPage} />
      )}

      {view === 'hospitality' && (
        <HospitalityPage navigateTo={navigateTo} setActiveDocument={setActiveDocument} setHsnlPage={setHsnlPage} />
      )}

      {view === 'about' && (
        <CompanyProfilePage 
          mode="profile"
          activeDocument={activeDocument} 
          setActiveDocument={setActiveDocument}
          hsnlPage={hsnlPage}
          setHsnlPage={setHsnlPage}
          currentDocPages={currentDocPages}
          navigateTo={navigateTo}
        />
      )}

      {view === 'pricing' && (
        <CompanyProfilePage 
          mode="pricing"
          activeDocument={activeDocument} 
          setActiveDocument={setActiveDocument}
          hsnlPage={hsnlPage}
          setHsnlPage={setHsnlPage}
          currentDocPages={currentDocPages}
        />
      )}

      {view === 'project-detail' && selectedProject && (
        <ProjectDetailPage 
          project={selectedProject} 
          onBack={() => navigateTo(prevView)} 
          navigateTo={navigateTo}
          allProjects={projects}
          onProjectClick={openProjectDetail}
        />
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-grid-layout">
          <div className="footer-col about-col">
            <div className="footer-logo-wrap">
              <img src={logoImg} alt="DST Group" />
              <span>DST GROUP</span>
            </div>
            <p className="footer-about-desc">
              Công ty Cổ phần Tập đoàn DST chuyên cung cấp các giải pháp marketing, design, media và branding trọn gói cho doanh nghiệp. Chúng tôi tự hào đồng hành cùng sự phát triển và tăng trưởng của các thương hiệu hàng đầu.
            </p>
          </div>

          <div className="footer-col links-col">
            <h4>Liên kết nhanh</h4>
            <ul>
              <li><button onClick={() => navigateTo('home')} className="footer-nav-btn-link">Trang chính</button></li>
              <li><button onClick={() => navigateTo('barclub')} className="footer-nav-btn-link">Lĩnh vực Bar & Club</button></li>
              <li><button onClick={() => navigateTo('hospitality')} className="footer-nav-btn-link">Lĩnh vực F&B - Khách sạn</button></li>
              <li><button onClick={() => {
                setActiveDocument('hsnl');
                setHsnlPage(0);
                navigateTo('about');
              }} className="footer-nav-btn-link">Giới thiệu công ty</button></li>
              <li><button onClick={() => {
                setActiveDocument('baogia');
                setHsnlPage(0);
                navigateTo('pricing');
              }} className="footer-nav-btn-link">Báo giá</button></li>
              <li><button onClick={() => navigateTo('catalog')} className="footer-nav-btn-link">Danh mục dự án</button></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Thông tin liên hệ</h4>
            <ul className="footer-contact-list">
              <li>
                <strong>Hotline:</strong>
                <span>{contact.hotline} (Mr. Thương)</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>{contact.email}</span>
              </li>
              <li>
                <strong>Địa chỉ:</strong>
                <span>{contact.address2}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>&copy; {new Date().getFullYear()} DST Group. Bảo lưu mọi quyền.</span>
            <span>Giao diện tối ưu hóa đa nền tảng.</span>
          </div>
        </div>
      </footer>


      {/* Floating Zalo Contact Widget */}
      <a 
        href="https://zalo.me/0328247888" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-zalo-btn"
        title="Liên hệ qua Zalo"
      >
        <span className="zalo-icon-ripple"></span>
        <span className="zalo-tooltip">Liên hệ Zalo</span>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" style={{ position: 'relative', zIndex: 2 }}>
          <path d="M12.002 2C6.48 2 2 6.03 2 11c0 2.81 1.45 5.3 3.73 6.84L4.5 21.5c-.1.38.28.72.66.58l4.47-1.56c1.13.31 2.37.48 3.67.48 5.52 0 10-4.03 10-9s-4.48-9-10-9zm1.18 12.38h-4.3c-.4 0-.72-.32-.72-.72v-.6c0-.25.13-.48.34-.61l2.75-3.07h-2.52c-.4 0-.72-.32-.72-.72v-.6c0-.4.32-.72.72-.72h4.3c.4 0 .72.32.72.72v.6c0 .25-.13.48-.34.61l-2.75 3.07h2.52c.4 0 .72.32.72.72v.6c0 .4-.32.72-.72.72z" />
        </svg>
      </a>
    </div>
  );
}

// Subcomponent: Bar & Club Hub Page
function BarClubPage({ navigateTo, setActiveDocument, setHsnlPage }: { 
  navigateTo: (view: any) => void;
  setActiveDocument: (doc: 'hsnl' | 'baogia' | 'sukien') => void;
  setHsnlPage: (page: number) => void;
}) {
  const clubProjects = projects.filter(p => p.category === 'Club');
  
  const viewPricing = () => {
    setActiveDocument('sukien');
    setHsnlPage(35); // Page 36 (index 35) is the start of Event/Club pricing
    navigateTo('pricing');
  };

  return (
    <main className="barclub-page">
      {/* Hero Section */}
      <section className="industry-hero-section" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)), url(${imgValleyPure2})` }}>
        <div className="container">
          <span className="eyebrow neon-gold" style={{ color: 'var(--gold)' }}>Bar, Club & Lounge Branding</span>
          <h1>ĐỘT PHÁ <span className="text-gradient-gold">DOANH THU</span><br />BẰNG HÌNH ẢNH <span className="text-gradient-teal">GIẢI TRÍ SỐ 1</span></h1>
          <p className="industry-hero-desc">DST Group kiến tạo các ấn phẩm key visual sự kiện đỉnh cao, video recap sôi động và gói truyền thông vận hành quảng cáo tối ưu cho ngành giải trí đêm tại Hạ Long.</p>
          <div className="industry-hero-actions">
            <button className="btn btn-primary btn-neon-gold" onClick={viewPricing}>Xem báo giá Bar & Club</button>
            <a href="#featured-projects" className="btn btn-secondary">Xem dự án tiêu biểu</a>
          </div>
        </div>
      </section>

      {/* Core Specialized Services */}
      <section className="section industry-services-section">
        <div className="container">
          <div className="section-head text-center">
            <span>Dịch vụ đặc thù cho Club</span>
            <h2>Bộ giải pháp truyền thông nightlife trọn gói</h2>
            <p>Chúng tôi tập trung vào trải nghiệm giác quan mạnh mẽ nhằm kích thích lượng booking và khẳng định độ hot của tụ điểm giải trí.</p>
          </div>
          <div className="services-detail-grid">
            <div className="service-detail-card dark-card">
              <div className="service-detail-icon text-purple">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <h3>Key Visual & Poster Sự Kiện Đêm</h3>
              <p>Thiết kế poster sự kiện mời DJ/ca sĩ, poster chủ đề tuần (Theme Night) với độ tương phản cực kỳ ấn tượng, tối ưu hiển thị trên các kênh social media.</p>
            </div>
            <div className="service-detail-card dark-card">
              <div className="service-detail-icon text-pink">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 7a2 2 0 0 0-2.45-1.45L12 8 3 5.55A2 2 0 0 0 1 7.5v11a2 2 0 0 0 2.45 1.95L12 18l9 2.45A2 2 0 0 0 23 18.5V7Z" />
                  <path d="M12 8v10" />
                </svg>
              </div>
              <h3>Sản xuất Video Recap & Review</h3>
              <p>Ekip quay phim chuyên nghiệp trực tiếp ghi lại các khoảnh khắc đắt giá (video recap 30s-60s sôi động), phỏng vấn cảm xúc khách hàng nhằm tạo hiệu ứng lan tỏa mạnh mẽ.</p>
            </div>
            <div className="service-detail-card dark-card">
              <div className="service-detail-icon text-cyan">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Quản trị & Chạy ADS Target Địa Phương</h3>
              <p>Xây dựng nội dung tương tác (meme, mini-game, ưu đãi), định hướng tệp đối tượng quanh khu vực Hạ Long/Quảng Ninh để phủ sóng tối đa danh tiếng của Club.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section industry-portfolio-section" id="featured-projects">
        <div className="container">
          <div className="section-head text-center">
            <span>Dự án thực tế</span>
            <h2>Dự án Club đồng hành tiêu biểu</h2>
            <p>Khám phá cách chúng tôi đồng hành xây dựng hình ảnh năng động và cá tính thương hiệu đỉnh cao.</p>
          </div>
          <div className="portfolio-showcase-row">
            {clubProjects.map((p) => (
              <div className="club-project-hero-card" key={p.name}>
                <div className="project-hero-media">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="project-hero-info">
                  <span className="tag-outline">{p.category}</span>
                  <h2>{p.name}</h2>
                  <p>{p.summary}</p>
                  <button className="btn btn-primary btn-neon-purple" style={{ marginTop: '16px' }} onClick={() => navigateTo('catalog')}>
                    Xem thư viện hình ảnh dự án &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Document Preview Banner */}
      <section className="section quick-doc-preview-section">
        <div className="container doc-preview-grid">
          <div>
            <span className="eyebrow neon-purple">Báo giá trực tuyến</span>
            <h2>Xem chi tiết Báo giá Sự kiện & Tiệc chiêu đãi</h2>
            <p>Nhấp ngay để mở trang 36 của tài liệu Báo giá Sự kiện F&B, cập nhật các gói setup trọn gói dịch vụ media và quản trị nightlife của DST Group.</p>
            <button className="btn btn-primary btn-neon-purple" onClick={clubProjects.length ? () => viewPricing() : undefined}>
              Mở báo giá online ngay
            </button>
          </div>
          <div className="doc-preview-image-box" onClick={viewPricing} style={{ cursor: 'pointer' }}>
            {baoGiaSuKienPages.length > 35 && (
              <img src={baoGiaSuKienPages[35]} alt="Báo giá Sự kiện" className="doc-page-preview-shadow" />
            )}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

// Subcomponent: Restaurant & Hotel Page
function HospitalityPage({ navigateTo, setActiveDocument, setHsnlPage }: { 
  navigateTo: (view: any) => void;
  setActiveDocument: (doc: 'hsnl' | 'baogia' | 'sukien') => void;
  setHsnlPage: (page: number) => void;
}) {
  const [hospBrand, setHospBrand] = useState('');
  const [hospPhone, setHospPhone] = useState('');
  const [hospType, setHospType] = useState('Khách sạn / Resort');
  const [hospCuisine, setHospCuisine] = useState('');

  // Sliders states
  const [canaIndex, setCanaIndex] = useState(0);
  const [cotienIndex, setCotienIndex] = useState(0);
  const [binhIndex, setBinhIndex] = useState(0);

  const canaSlides = [page3, page4, page5, page6, page7];
  const cotienSlides = [page8, page9, page10, page11, page12];
  const binhSlides = [page22, page23, page24];

  const viewPricing = () => {
    setActiveDocument('sukien');
    setHsnlPage(35); // Page 36 (index 35) is the start of Event/F&B/Hotel pricing
    navigateTo('pricing');
  };

  const handleHospitalitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hospType === 'Nhà hàng / Cafe' && !hospCuisine) {
      alert('Vui lòng chọn kiểu nhà hàng!');
      return;
    }
    let msg = `Đăng ký thành công!\nThương hiệu: ${hospBrand}\nSĐT: ${hospPhone}\nMô hình: ${hospType}`;
    if (hospCuisine) {
      msg += `\nKiểu nhà hàng: ${hospCuisine}`;
    }
    msg += `\nDST Group sẽ liên hệ gửi concept thiết kế giao diện phù hợp.`;
    alert(msg);
    setHospBrand('');
    setHospPhone('');
    setHospCuisine('');
  };

  return (
    <main className="hospitality-page">
      {/* Hero Section */}
      <section className="hospitality-hero">
        <img src={hotelHero} alt="Resort" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hospitality-hero-card">
          <span>DST Group Hospitality Portfolio</span>
          <h1>Khẳng định <span className="text-gradient-gold">Vị thế Luxury</span><br />- <span className="text-gradient-teal">Cảm xúc Khách hàng</span></h1>
          <p>DST Group mang đến các giải pháp thiết kế bộ nhận diện thương hiệu, thiết kế website cao cấp và sản xuất hình ảnh truyền thông đột phá chuyên biệt cho Khách sạn, Resort, Nhà hàng tiệc cưới &amp; Trung tâm sự kiện.</p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-neon-gold" onClick={viewPricing}>Khám phá giải pháp</button>
            <a href="#contact" className="btn btn-outline btn-outline-white">Liên hệ tư vấn concept</a>
          </div>
        </div>
      </section>

      {/* Hospitality Marketing Intro Section */}
      <section className="hospitality-intro">
        <div className="intro-content">
          <span>Hospitality Experience</span>
          <h2>Nghệ thuật chạm đến cảm xúc - <span className="text-gradient-gold">Biến hình ảnh thành doanh thu</span>.</h2>
          <p>Trong lĩnh vực dịch vụ và nghỉ dưỡng, khách hàng mua bằng mắt và quyết định bằng cảm xúc. Chúng tôi kiến tạo những trải nghiệm thị giác mãn nhãn, kết hợp khoảng thở thiết kế sang trọng và câu chuyện ẩm thực tinh tế, giúp thương hiệu của bạn chinh phục những thực khách và khách nghỉ dưỡng khó tính nhất.</p>
        </div>
      </section>

      {/* Service Categories Section */}
      <section id="categories" className="hospitality-categories-section">
        <div className="section-head">
          <span>Our Solutions</span>
          <h2>Các phân hệ giải pháp chuyên sâu</h2>
        </div>
        <div className="categories-grid">
          {/* Category 1 */}
          <article className="category-card">
            <div className="card-image-wrapper">
              <img src={roomClean} alt="Khách sạn &amp; Resort" />
            </div>
            <div className="card-info">
              <small>Stay &amp; Relax</small>
              <h3>Khách sạn &amp; Resort</h3>
              <p>Khơi gợi khao khát nghỉ dưỡng bằng hình ảnh không gian đẳng cấp. Giới thiệu tiện ích thượng lưu, cập nhật ưu đãi độc quyền theo mùa và tối ưu hành trình đặt phòng trực tuyến tiện lợi.</p>
            </div>
          </article>

          {/* Category 2 */}
          <article className="category-card">
            <div className="card-image-wrapper">
              <img src={diningClean} alt="Nhà hàng &amp; Cafe" />
            </div>
            <div className="card-info">
              <small>Gastronomy</small>
              <h3>Nhà hàng &amp; Cafe</h3>
              <p>Kích thích vị giác khách hàng qua thực đơn trực quan đầy nghệ thuật. Tận dụng hình ảnh ẩm thực chân thực để thúc đẩy lượt đặt bàn trước và quảng bá các gói combo tiệc hữu hiệu.</p>
            </div>
          </article>

          {/* Category 3 */}
          <article className="category-card">
            <div className="card-image-wrapper">
              <img src={eventClean} alt="Sảnh tiệc &amp; Sự kiện" />
            </div>
            <div className="card-info">
              <small>Meetings &amp; Events</small>
              <h3>Sảnh tiệc &amp; Sự kiện</h3>
              <p>Khắc họa không gian lễ đường lễ hội sang trọng, sảnh hội nghị đẳng cấp quốc tế. Cung cấp sơ đồ bàn tiệc thông minh, menu ẩm thực đa dạng và hệ thống báo giá nhanh chóng.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="hospitality-projects-section">
        <div className="section-head">
          <span>Featured Client Projects</span>
          <h2>Các dự án thực tế đã triển khai</h2>
          <p className="section-subtitle">DST Group trực tiếp sản xuất hình ảnh truyền thông và thiết kế ấn phẩm quảng cáo cho các thương hiệu ẩm thực.</p>
        </div>
        <div className="projects-grid">
          
          {/* Project 1: Cana Beer Club */}
          <div className="hospitality-project-card">
            <div className="project-visual-frame">
              <div className="slider-wrapper" id="slider-cana">
                <div className="slides">
                  {canaSlides.map((slide, idx) => (
                    <img 
                      key={idx} 
                      src={slide} 
                      alt={`Cana Slide ${idx + 1}`} 
                      className={`slide-img ${canaIndex === idx ? 'active' : ''}`} 
                    />
                  ))}
                </div>
                <div className="slider-controls">
                  <button className="prev" onClick={() => setCanaIndex((canaIndex - 1 + canaSlides.length) % canaSlides.length)}>&lt;</button>
                  <button className="next" onClick={() => setCanaIndex((canaIndex + 1) % canaSlides.length)}>&gt;</button>
                </div>
              </div>
            </div>
            <div className="project-details">
              <span className="project-tag">Beer Club &amp; Restaurant</span>
              <h3>Cana Beer Club</h3>
              <p className="project-desc">Quy hoạch nhận diện thị giác đỉnh cao, sản xuất các chiến dịch quảng cáo và truyền thông sự kiện khai trương hoành tráng, tạo hiệu ứng lan tỏa mạnh mẽ cho Cana Beer Club tại Hạ Long.</p>
              <ul className="project-specs">
                <li><strong>Thông điệp chính:</strong> "Lên Bọt Sảng Khoái - Cháy Trọn Đêm Nay"</li>
                <li><strong>Dịch vụ cung cấp:</strong> Brand Identity, Menu Design, Social Ads</li>
              </ul>
            </div>
          </div>

          {/* Project 2: Ẩm thực Hồ Cô Tiên */}
          <div className="hospitality-project-card">
            <div className="project-visual-frame">
              <div className="slider-wrapper" id="slider-cotien">
                <div className="slides">
                  {cotienSlides.map((slide, idx) => (
                    <img 
                      key={idx} 
                      src={slide} 
                      alt={`Hồ Cô Tiên Slide ${idx + 1}`} 
                      className={`slide-img ${cotienIndex === idx ? 'active' : ''}`} 
                    />
                  ))}
                </div>
                <div className="slider-controls">
                  <button className="prev" onClick={() => setCotienIndex((cotienIndex - 1 + cotienSlides.length) % cotienSlides.length)}>&lt;</button>
                  <button className="next" onClick={() => setCotienIndex((cotienIndex + 1) % cotienSlides.length)}>&gt;</button>
                </div>
              </div>
            </div>
            <div className="project-details">
              <span className="project-tag">Gourmet Seafood Restaurant</span>
              <h3>Ẩm thực Hồ Cô Tiên</h3>
              <p className="project-desc">Thiết kế bộ nhận diện thương hiệu nhà hàng hải sản cao cấp, chụp ảnh món ăn nghệ thuật định kỳ và thiết lập quy trình marketing đa kênh thu hút hàng ngàn lượt khách du lịch và nội địa mỗi tháng.</p>
              <ul className="project-specs">
                <li><strong>Thông điệp chính:</strong> "Tinh Hoa Hải Sản Đưường Phố Hạ Long"</li>
                <li><strong>Dịch vụ cung cấp:</strong> Logo Design, Food Photography, Fanpage Management</li>
              </ul>
            </div>
          </div>

          {/* Project 3: Bình Beer - Nhậu Phủi */}
          <div className="hospitality-project-card">
            <div className="project-visual-frame">
              <div className="slider-wrapper" id="slider-binh">
                <div className="slides">
                  {binhSlides.map((slide, idx) => (
                    <img 
                      key={idx} 
                      src={slide} 
                      alt={`Bình Beer Slide ${idx + 1}`} 
                      className={`slide-img ${binhIndex === idx ? 'active' : ''}`} 
                    />
                  ))}
                </div>
                <div className="slider-controls">
                  <button className="prev" onClick={() => setBinhIndex((binhIndex - 1 + binhSlides.length) % binhSlides.length)}>&lt;</button>
                  <button className="next" onClick={() => setBinhIndex((binhIndex + 1) % binhSlides.length)}>&gt;</button>
                </div>
              </div>
            </div>
            <div className="project-details">
              <span className="project-tag">Traditional Beer &amp; Cuisine</span>
              <h3>Bình Beer - Nhậu Phủi</h3>
              <p className="project-desc">Đồng hành phát triển chuỗi nhà hàng nhậu phủi Bình Beer, hoàn thiện ấn phẩm thiết kế từ bảng hiệu, thực đơn đến hình ảnh truyền thông mộc mạc gần gũi nhưng cực kỳ chuyên nghiệp.</p>
              <ul className="project-specs">
                <li><strong>Thông điệp chính:</strong> "Bia Ngon Mồi Bén - Anh Em Sum Vầy"</li>
                <li><strong>Dịch vụ cung cấp:</strong> Signage Design, Brand Strategy, Event Recap Video</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Offer Layout Structure Section */}
      <section id="offer" className="hospitality-offer-section">
        <div className="section-head">
          <span>Offer Structure</span>
          <h2>Bố cục tối ưu cho bán dịch vụ nhà hàng khách sạn</h2>
        </div>
        <div className="offer-grid">
          <div className="offer-card">
            <b>01</b>
            <h3>Hero banner cảm xúc</h3>
            <p>Khai thác những thước phim/hình ảnh bao cảnh mãn nhãn kết hợp thông điệp định vị thương hiệu đắt giá và nút kêu gọi hành động (CTA) kích thích tương tác đặt phòng/đặt bàn.</p>
          </div>
          <div className="offer-card">
            <b>02</b>
            <h3>Phân hệ dịch vụ thông minh</h3>
            <p>Trình bày trực quan các hạng phòng nghỉ dưỡng, menu món ăn đặc sắc và các gói combo khuyến mãi theo dạng lưới (Grid) giúp khách hàng tra cứu nhanh chóng, đặt chỗ tức thì.</p>
          </div>
          <div className="offer-card">
            <b>03</b>
            <h3>Điểm chạm niềm tin tối ưu</h3>
            <p>Cung cấp minh bạch bản đồ đường đi, hotline đặt bàn khẩn cấp, giờ mở cửa cùng hình ảnh thực tế 100%. Tăng cường niềm tin tuyệt đối cho khách hàng khi thực hiện giao dịch.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="hospitality-contact">
        <h2 style={{ color: '#ffffff', fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: '1.1', margin: '0', textAlign: 'left', letterSpacing: '-0.02em' }}>Sẵn sàng kiến tạo website Hospitality nâng tầm thương hiệu?</h2>
        <form id="hospitalityForm" onSubmit={handleHospitalitySubmit}>
          <input id="hospBrand" placeholder="Tên thương hiệu của bạn" required value={hospBrand} onChange={(e) => setHospBrand(e.target.value)} />
          <input id="hospPhone" placeholder="Số điện thoại liên hệ" required value={hospPhone} onChange={(e) => setHospPhone(e.target.value)} />
          <select id="hospType" value={hospType} onChange={(e) => {
            setHospType(e.target.value);
            if (e.target.value !== 'Nhà hàng / Cafe') setHospCuisine('');
          }}>
            <option value="Khách sạn / Resort">Mô hình Khách sạn / Resort</option>
            <option value="Nhà hàng / Cafe">Mô hình Nhà hàng / Cafe</option>
            <option value="Trung tâm tiệc cưới">Mô hình Trung tâm Tiệc cưới &amp; Sự kiện</option>
          </select>
          {hospType === 'Nhà hàng / Cafe' && (
            <div id="cuisineTagsContainer" style={{ margin: '10px 0', textAlign: 'left' }}>
              <p style={{ fontSize: '13.5px', margin: '0 0 10px 0', color: '#ebdcd0', fontWeight: '600' }}>Kiểu nhà hàng / Cafe:</p>
              <div className="cuisine-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                {[
                  'Lẩu / Nướng / Buffet',
                  'Beer Club / Pub / Lounge',
                  'Nhà hàng Hải sản',
                  'Quán nhậu / Quán bia',
                  'Nhà hàng Á / Âu / Trung Hoa',
                  'Quán Cafe / Tiệm bánh',
                  'Nhà hàng truyền thống'
                ].map((c) => (
                  <button 
                    key={c}
                    type="button" 
                    className={`cuisine-tag ${hospCuisine === c ? 'active' : ''}`} 
                    onClick={() => setHospCuisine(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button type="submit">Gửi yêu cầu tư vấn</button>
        </form>
      </section>
    </main>
  );
}
const pricingCategories = [
  {
    id: 'A',
    name: 'Quản Trị Fanpage',
    items: [
      {
        stt: 'I',
        name: 'Quản Trị Facebook I5',
        unit: 'Tháng',
        note: 'Gói quản trị nội dung content fanpage: Kế hoạch bài viết theo từng tháng (nếu chọn gói combo 3 tháng sẽ được lên kế hoạch marketing xuyên suốt 3 tháng). Bao gồm: Bài viết, Thiết kế, Poster tổng hợp theo concept tháng, Ảnh bài + avatar chủ đề theo tháng, Thiết kế in ấn, Đăng tải ảnh hằng ngày, Đăng video reel hằng ngày, Video quảng cáo chương trình khuyến mãi, Video intro giới thiệu & recap sự kiện (theo tư liệu khách cung cấp). Số lượng bài viết và thiết kế tùy thuộc vào từng gói quản trị khách hàng lựa chọn.'
      }
    ]
  },
  {
    id: 'B',
    name: 'Xây Kênh Tiktok',
    items: [
      {
        stt: 'I',
        name: 'Chi phí quay, dựng',
        unit: 'Tháng',
        note: 'Chi phí xây dựng kênh Tiktok. Bao gồm: Quay full sự kiện trong tháng (4 buổi), sản xuất 20 video xây kênh Tiktok/Reel.'
      },
      {
        stt: '2',
        name: 'Chi phí kịch bản, nội dung',
        unit: 'Tháng',
        note: 'Lên kịch bản chi tiết, định hướng nội dung video ngắn thu hút tương tác theo xu hướng.'
      },
      {
        stt: '3',
        name: 'Chi phí thuê flycamera FPV',
        unit: 'Tháng',
        note: 'Quay đèn ngoài trời chuyên nghiệp.'
      }
    ]
  },
  {
    id: 'C',
    name: 'Thiết Kế Đồ Họa',
    items: [
      {
        stt: 'I',
        name: 'Thiết kế poster chương trình lẻ',
        unit: 'Poster',
        note: 'Thiết kế ấn phẩm đơn lẻ cho sự kiện hoặc chương trình khuyến mại.'
      },
      {
        stt: '2',
        name: 'Thiết kế poster chương trình tổng hợp theo tháng',
        unit: 'Poster',
        note: 'Thiết kế poster tổng hợp toàn bộ hoạt động/chương trình trong tháng.'
      },
      {
        stt: '3',
        name: 'Concept 1 ảnh bìa + 1 avatar chủ đề theo tháng',
        unit: 'Poster',
        note: 'Định hình concept trang phục nhận diện social theo mùa hoặc chủ đề tháng.'
      },
      {
        stt: '4',
        name: 'Thiết kế video intro line up',
        unit: 'Video',
        note: '30s quảng cáo sự kiện: Video 4K Line up.'
      },
      {
        stt: '5',
        name: 'Thiết kế menu',
        unit: 'Ấn phẩm',
        note: 'Thiết kế menu món ăn, đồ uống hoặc thực đơn sự kiện cao cấp.'
      },
      {
        stt: '6',
        name: 'Video recap chương trình tư liệu có sẵn',
        unit: 'Video',
        note: 'Dựng video tổng hợp sự kiện từ nguồn tư liệu sẵn có của khách hàng.'
      },
      {
        stt: '7',
        name: 'Video nhắc chương trình tư liệu có sẵn',
        unit: 'Video',
        note: 'Dựng video teaser/reminder sự kiện từ nguồn tư liệu sẵn có.'
      }
    ]
  },
  {
    id: 'D',
    name: 'Quảng Cáo Online',
    items: [
      {
        stt: 'I',
        name: 'Quảng cáo Facebook: Tương tác, tin nhắn, view, lead, remarketing',
        unit: 'Chiến Dịch',
        note: 'Quảng cáo online trên Facebook các sự kiện của nhà hàng, cafe, bar club.'
      },
      {
        stt: '2',
        name: 'Quảng cáo Google: Tìm kiếm, Youtube, GDN, Shopping',
        unit: 'Chien Dich',
        note: 'Quang cao online tren Google: tim kiem, Youtube, GDN va Shopping theo muc tieu chien dich.'
      }
    ]
  }
]
type CompanyProfilePageProps = {
  mode: 'profile' | 'pricing';
  activeDocument: 'hsnl' | 'baogia' | 'sukien';
  setActiveDocument: (doc: 'hsnl' | 'baogia' | 'sukien') => void;
  hsnlPage: number;
  setHsnlPage: (page: number) => void;
  currentDocPages: string[];
  navigateTo?: (view: any) => void;
};

function CompanyProfilePage({ mode, activeDocument, setActiveDocument, hsnlPage, setHsnlPage, currentDocPages }: CompanyProfilePageProps) {
  const [activeCatTab, setActiveCatTab] = useState('A');
  const currentPageSrc = currentDocPages[hsnlPage] ?? currentDocPages[0];

  if (mode === 'profile') {
    return (
      <main className="about-page">
        {/* Hero Section */}
        <section className="hero" style={{ paddingTop: '100px' }}>
          <div className="copy">
            <span>DST Group Company Profile</span>
            <h1>Kiến tạo Nhận diện Đẳng cấp - Đột phá Doanh thu Số.</h1>
            <p>DST Group kết hợp tư duy chiến lược sâu sắc và năng lực sản xuất media đỉnh cao để giúp doanh nghiệp của bạn phủ sóng thương hiệu mạnh mẽ, thiết kế website chuyên nghiệp thu hút khách hàng và tối ưu hóa chuyển đổi số thực tế.</p>
            <div className="actions">
              <a href="#services" className="btn btn-primary" style={{ textDecoration: 'none' }}>Khám phá dịch vụ</a>
              <a className="btn btn-outline" href="#docs" style={{ textDecoration: 'none' }}>Xem hồ sơ thầu</a>
            </div>
          </div>
          <div className="visual">
            <img src={agencyHero} alt="Company team" className="visual-img" />
            <div className="visual-badge">
              <strong>Branding Agency</strong>
              <span>Website / Media / Ads / Event communication</span>
            </div>
          </div>
        </section>

        {/* Services Ecosystem Section */}
        <section id="services" className="services">
          <div className="section-head">
            <span>Service ecosystem</span>
            <h2>Giải Pháp Toàn Diện Nâng Tầm Giá Trị Doanh Nghiệp</h2>
          </div>
          <div className="grid">
            <article className="service-item">
              <b>01</b>
              <h3>Thiết kế nhận diện</h3>
              <p>Chuyển hóa giá trị cốt lõi thành hình ảnh trực quan đầy cảm xúc. Thiết kế Logo và hệ thống ấn phẩm bán hàng độc bản giúp thương hiệu chiếm trọn tâm trí khách hàng ngay từ cái nhìn đầu tiên.</p>
            </article>
            <article className="service-item">
              <b>02</b>
              <h3>Website & Landing Page</h3>
              <p>Kiến tạo "showroom số" đẳng cấp, chuẩn SEO, tối ưu trải nghiệm người dùng (UX/UI). Giúp doanh nghiệp chuyển hóa lượt truy cập thành khách hàng tiềm năng một cách tự động.</p>
            </article>
            <article className="service-item">
              <b>03</b>
              <h3>Content & Media</h3>
              <p>Sản xuất thước phim quảng cáo, hình ảnh chuyên nghiệp và nội dung truyền thông sâu sắc. Kể câu chuyện thương hiệu của bạn một cách hấp dẫn nhất trên mọi nền tảng số.</p>
            </article>
            <article className="service-item">
              <b>04</b>
              <h3>Quảng cáo Online</h3>
              <p>Đưa thông điệp của bạn tiếp cận chính xác tệp khách hàng mục tiêu thông qua các chiến dịch tối ưu ngân sách trên Google, Facebook, TikTok. Tối đa hóa tỷ lệ chuyển đổi đơn hàng.</p>
            </article>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="team-section">
          <div className="section-head">
            <span>DST Group Leadership</span>
            <h2>Đội ngũ nhân sự sáng tạo &amp; <span style={{ whiteSpace: 'nowrap' }}>tâm huyết</span></h2>
            <p className="section-desc">Tại DST Group, chúng tôi tin rằng mỗi dự án là một kiệt tác nghệ thuật. Đội ngũ chuyên gia trẻ trung, sáng tạo và kỷ luật của chúng tôi luôn làm việc với sự tận tâm cao nhất để mang lại giá trị tăng trưởng bền vững cho khách hàng.</p>
          </div>
          <div className="team-grid">
            {/* Member 1 */}
            <div className="team-card">
              <div className="team-avatar-frame">
                <img src={memberQuan} alt="Nguyễn Hữu Quân" className="team-avatar" />
              </div>
              <h3>Nguyễn Hữu Quân</h3>
              <span>Chủ tịch Hội đồng Quản trị</span>
              <p>Định hướng chiến lược phát triển thương hiệu toàn diện cho DST Group và các đối tác doanh nghiệp lớn.</p>
            </div>

            {/* Member 2 */}
            <div className="team-card">
              <div className="team-avatar-frame">
                <img src={memberThuong} alt="Vũ Văn Thương" className="team-avatar" />
              </div>
              <h3>Vũ Văn Thương</h3>
              <span>Tổng giám đốc</span>
              <p>Điều hành toàn bộ hoạt động marketing, kinh doanh và hoạch định hướng đi phát triển tương lai cho công ty.</p>
            </div>

            {/* Member 3 */}
            <div className="team-card">
              <div className="team-avatar-frame">
                <img src={memberKham} alt="Nguyễn Quốc Kham" className="team-avatar" />
              </div>
              <h3>Nguyễn Quốc Kham</h3>
              <span>Phó giám đốc</span>
              <p>Chịu trách nhiệm vận hành kỹ thuật, thiết lập hệ thống nhân sự và quản lý chất lượng dự án thầu.</p>
            </div>

            {/* Member 4 */}
            <div className="team-card">
              <div className="team-avatar-frame">
                <img src={memberDuyen} alt="Phan Thị Duyên" className="team-avatar" />
              </div>
              <h3>Phan Thị Duyên</h3>
              <span>Phó giám đốc điều hành</span>
              <p>Giám sát thực thi các chiến dịch marketing, quảng bá sự kiện và quản lý trực tiếp bộ phận sáng tạo.</p>
            </div>
          </div>
        </section>

        {/* Workflow Process Section */}
        <section id="process" className="process">
          <div className="process-head">
            <span>Workflow</span>
            <h2>Quy trình làm việc minh bạch, tối ưu hiệu quả</h2>
          </div>
          <ol className="process-list">
            <li>
              <b>1. Khảo sát & Phân tích</b>
              <p>Nghiên cứu thị trường, phân tích đối thủ cạnh tranh và chân dung khách hàng mục tiêu để tìm ra "điểm chạm độc bản" cho thương hiệu của bạn.</p>
            </li>
            <li>
              <b>2. Định hình chiến lược</b>
              <p>Thiết lập bản đồ định hướng mỹ thuật, lựa chọn kênh truyền thông chiến lược và xây dựng kế hoạch triển khai chi tiết, cam kết rõ ràng.</p>
            </li>
            <li>
              <b>3. Sản xuất & Lập trình</b>
              <p>Tiến hành thiết kế đồ họa, viết nội dung chuyên sâu, lập trình website tối ưu tốc độ và sản xuất hình ảnh/video chất lượng cao chuẩn quy trình.</p>
            </li>
            <li>
              <b>4. Đo lường & Tối ưu</b>
              <p>Giám sát dữ liệu thực tế, liên tục tối ưu chiến dịch quảng cáo và nâng cấp hệ thống định kỳ. Đồng hành cùng doanh nghiệp gia tăng doanh số lâu dài.</p>
            </li>
          </ol>
        </section>

        {/* Capability Profile & Price section */}
        <section id="docs" className="docs">
          <div className="docs-intro">
            <span>Capability Profile & Pricing</span>
            <h2>Hồ sơ năng lực & Báo giá chi tiết</h2>
            <p>Bản tóm tắt chi tiết năng lực triển khai dự án thầu và bảng giá dịch vụ hỗ trợ tối đa doanh nghiệp B2B ra quyết định.</p>
            
            {/* Framed Preview of Cover Slide */}
            <div className="profile-preview-container">
              <div className="profile-frame">
                <img src={pricingImg} alt="DST Profile Cover" />
              </div>
              <a href="#" className="download-btn btn btn-primary" onClick={(e) => { e.preventDefault(); alert('Đang chuẩn bị tải về Hồ sơ năng lực DST Group (PDF)...'); }}>Tải Hồ sơ năng lực (PDF)</a>
            </div>
          </div>
          
          {/* Interactive Accordion for Services */}
          <div className="pricing-details">
            <h3>Xem chi tiết các gói dịch vụ</h3>
            
            <div className="accordion-group">
              {/* Accordion 1 */}
              <details className="service-details-card" open>
                <summary><h4>Dịch vụ Quản trị Fanpage</h4></summary>
                <div className="details-content-inner">
                  <ul>
                    <li>Khởi tạo, chuẩn hóa thiết lập thông tin Fanpage chuyên nghiệp.</li>
                    <li>Cập nhật tin bài, hình ảnh đại diện, ảnh bìa theo chiến dịch.</li>
                    <li>Cấu hình bật định vị Check-in địa điểm tại doanh nghiệp.</li>
                    <li>Tư vấn chiến lược marketing ngắn hạn giúp tiếp cận khách hàng.</li>
                    <li>Hỗ trợ chuyển giao tài khoản và kết nối các đối tác cùng tệp khách hàng.</li>
                  </ul>
                </div>
              </details>

              {/* Accordion 2 */}
              <details className="service-details-card">
                <summary><h4>Thiết kế - Content - Edit Video</h4></summary>
                <div className="details-content-inner">
                  <ul>
                    <li>Thiết kế Logo thương hiệu, các ấn phẩm in ấn (voucher, tờ rơi, standee).</li>
                    <li>Viết bài content đăng bài viết, lên kịch bản hình ảnh chạy quảng cáo.</li>
                    <li>Edit video sản phẩm ngắn, dựng clip TikTok/Reels thu hút tương tác.</li>
                    <li>Chụp ảnh sản phẩm chuyên nghiệp, chụp ảnh không gian tại cơ sở.</li>
                  </ul>
                </div>
              </details>

              {/* Accordion 3 */}
              <details className="service-details-card">
                <summary><h4>Marketing & Tối ưu quảng cáo</h4></summary>
                <div className="details-content-inner">
                  <ul>
                    <li>Tư vấn và thiết kế kế hoạch triển khai marketing tổng thể.</li>
                    <li>Triển khai quảng cáo đa kênh: Facebook Ads, Google Ads, Zalo Ads.</li>
                    <li>Theo dõi, đo lường leads và liên tục tối ưu hóa chi phí quảng cáo.</li>
                    <li>Định hướng thay đổi chương trình khuyến mãi theo mùa hiệu quả.</li>
                  </ul>
                </div>
              </details>

              {/* Accordion 4 */}
              <details className="service-details-card">
                <summary><h4>Dịch vụ chuyên nghiệp (Theo yêu cầu)</h4></summary>
                <div className="details-content-inner">
                  <p>Dành riêng cho doanh nghiệp đấu thầu dự án hoặc nâng cấp hệ thống số:</p>
                  <ul>
                    <li>Xây dựng và hoàn thiện bộ hồ sơ năng lực đấu thầu doanh nghiệp.</li>
                    <li>Thiết kế & lập trình Landing Page tăng tỷ lệ chuyển đổi.</li>
                    <li>Thiết kế & lập trình Website doanh nghiệp giới thiệu dịch vụ.</li>
                    <li>Thiết kế và xây dựng ứng dụng di động (App Mobile) trên iOS & Android.</li>
                  </ul>
                </div>
              </details>

              {/* Accordion 5 */}
              <details className="service-details-card">
                <summary><h4>Gói Dịch Vụ ++ (Trị giá 10 Triệu VNĐ)</h4></summary>
                <div className="details-content-inner">
                  <p>Gói giải pháp tối ưu cho doanh nghiệp vừa và nhỏ:</p>
                  <ul>
                    <li>Thiết kế hồ sơ năng lực (Profile doanh nghiệp) chuẩn thầu.</li>
                    <li>Quay dựng và sản xuất video giới thiệu sản phẩm/dịch vụ.</li>
                    <li>Quay TVC giới thiệu doanh nghiệp cơ bản (sử dụng tư liệu sẵn có).</li>
                  </ul>
                </div>
              </details>

              {/* Accordion 6 */}
              <details className="service-details-card">
                <summary><h4>Gói Dịch Vụ VIP ++ (Trị giá 20 Triệu VNĐ)</h4></summary>
                <div className="details-content-inner">
                  <p>Gói dịch vụ marketing phủ sóng cao cấp:</p>
                  <ul>
                    <li>Sản xuất TVC giới thiệu doanh nghiệp nâng cao (gồm kịch bản chi tiết, MC chuyên nghiệp).</li>
                    <li>Chụp ảnh, quay phóng sự (recap video) sự kiện thường niên.</li>
                    <li>Quản trị đăng bài trọn gói (tối thiểu 15 bài viết chất lượng cao/tháng trên các kênh online).</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Dynamic Interactive Document Slides (rendered inline) */}
        <section className="section doc-viewer-section" id="docs-viewer" style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="section-head text-center" style={{ marginBottom: '32px' }}>
              <span style={{ color: 'var(--gold)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px', display: 'block', marginBottom: '12px' }}>DST Group Profile Viewer</span>
              <h2 style={{ fontSize: 'clamp(26px, 3.8vw, 42px)', fontWeight: '900', color: 'var(--ink)' }}>Đọc hồ sơ trực tuyến</h2>
              <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '10px' }}>Nhấp chọn tab để xem trực tuyến Hồ sơ năng lực và các tài liệu báo giá chi tiết của chúng tôi.</p>
            </div>
            <div className="doc-tabs" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button type="button" className={activeDocument === 'hsnl' ? 'active' : ''} onClick={() => setActiveDocument('hsnl')}>Hồ sơ năng lực</button>
              <button type="button" className={activeDocument === 'baogia' ? 'active' : ''} onClick={() => setActiveDocument('baogia')}>Báo giá</button>
              <button type="button" className={activeDocument === 'sukien' ? 'active' : ''} onClick={() => setActiveDocument('sukien')}>Sự kiện</button>
            </div>
            {currentPageSrc && (
              <div className="doc-page-frame" style={{ maxWidth: '980px', margin: '0 auto' }}>
                <img src={currentPageSrc} alt={`Trang ${hsnlPage + 1}`} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', boxShadow: '0 20px 50px rgba(0,0,0,0.14)' }} />
              </div>
            )}
            <div className="doc-controls" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '22px', paddingBottom: '20px' }}>
              <button type="button" onClick={() => setHsnlPage(Math.max(0, hsnlPage - 1))} disabled={hsnlPage <= 0}>Trang trước</button>
              <span>{hsnlPage + 1} / {currentDocPages.length}</span>
              <button type="button" onClick={() => setHsnlPage(Math.min(currentDocPages.length - 1, hsnlPage + 1))} disabled={hsnlPage >= currentDocPages.length - 1}>Trang sau</button>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    );
  }

  return (
    <main className="about-page">
      {/* Pricing Packages Section */}
      <section className="section pricing-packages-section">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '50px' }}>
            <span style={{ color: 'var(--gold)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px', display: 'block', marginBottom: '12px' }}>DST Group Service Packages</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.8vw, 42px)', fontWeight: '900', color: 'var(--ink)' }}>Các Gói Dịch Vụ Trọn Gói</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px', marginTop: '12px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
              Giải pháp tối ưu ngân sách giúp doanh nghiệp đột phá nhận diện thương hiệu và tăng trưởng doanh thu số.
            </p>
          </div>

          <div className="pricing-packages-grid">
            {/* Package 1 */}
            <div className="package-card">
              <div className="package-header">
                <h3>Gói Dịch Vụ ++</h3>
                <div className="package-price">
                  <span className="amount">10</span>
                  <span className="currency">Triệu VNĐ</span>
                </div>
                <p className="package-desc">Giải pháp tối ưu cho doanh nghiệp vừa &amp; nhỏ bắt đầu xây dựng hình ảnh chuyên nghiệp.</p>
              </div>
              <div className="package-features">
                <ul>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Thiết kế hồ sơ năng lực (Profile) chuẩn thầu
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Quay dựng video giới thiệu sản phẩm/dịch vụ
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Quay TVC cơ bản (sử dụng tư liệu sẵn có)
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Hỗ trợ tối ưu hóa hiển thị thương hiệu
                  </li>
                </ul>
              </div>
              <div className="package-footer">
                <a href="#contact" className="package-btn">Đăng ký tư vấn gói</a>
              </div>
            </div>

            {/* Package 2 - VIP (Best Seller) */}
            <div className="package-card VIP">
              <div className="badge-popular">BÁN CHẠY NHẤT</div>
              <div className="package-header">
                <h3>Gói Dịch Vụ VIP ++</h3>
                <div className="package-price">
                  <span className="amount">20</span>
                  <span className="currency">Triệu VNĐ</span>
                </div>
                <p className="package-desc">Gói truyền thông &amp; phủ sóng thương hiệu cao cấp giúp khẳng định vị thế vượt trội.</p>
              </div>
              <div className="package-features">
                <ul>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Sản xuất TVC nâng cao (kịch bản chi tiết, MC chuyên nghiệp)
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Chụp ảnh &amp; quay phóng sự recap sự kiện thưường niên
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Quản trị Fanpage trọn gói (tối thiểu 15 bài viết chất lượng cao/tháng)
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Tối ưu chiến dịch quảng cáo &amp; báo cáo định kỳ
                  </li>
                </ul>
              </div>
              <div className="package-footer">
                <a href="#contact" className="package-btn filled">Đăng ký tư vấn gói VIP</a>
              </div>
            </div>

            {/* Package 3 - Custom */}
            <div className="package-card">
              <div className="package-header">
                <h3>Gói Theo Yêu Cầu</h3>
                <div className="package-price-custom">
                  <span className="amount-custom">LIÊN HỆ</span>
                </div>
                <p className="package-desc">Thiết kế gói giải pháp riêng biệt, đáp ứng mọi quy mô và nhu cầu đặc thù của doanh nghiệp.</p>
              </div>
              <div className="package-features">
                <ul>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Thiết kế &amp; lập trình Website doanh nghiệp / Landing Page
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Hoạch định chiến lược marketing &amp; branding tổng thể
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Quảng cáo đa kênh (Facebook, Google, TikTok Ads)
                  </li>
                  <li>
                    <svg className="check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Tư vấn nhận diện thương hiệu độc bản cao cấp
                  </li>
                </ul>
              </div>
              <div className="package-footer">
                <a href="#contact" className="package-btn">Liên hệ gói tùy chỉnh</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Table */}
      <section className="section interactive-pricing-section">
        <div className="container">
          <div className="section-head text-center" style={{ marginBottom: '40px' }}>
            <span style={{ color: 'var(--gold)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px', display: 'block', marginBottom: '12px' }}>Interactive Pricing Catalog</span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '900', color: 'var(--ink)' }}>Bảng Tra Cứu Dịch Vụ &amp; Báo Giá Nhanh</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15.5px', marginTop: '12px', maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto' }}>Tra cứu báo giá các hạng mục marketing, quay dựng video và quảng cáo chi tiết cho Nhà hàng, Khách sạn, Cafe và Bar Club.</p>
          </div>
          
          <div className="pricing-tabs-container">
            {/* Tabs selector */}
            <div className="pricing-cat-tabs">
              {pricingCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`pricing-cat-tab-btn ${activeCatTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCatTab(cat.id)}
                >
                  <span className="cat-letter">{cat.id}</span>
                  {cat.name}
                </button>
              ))}
            </div>
            
            {/* Tab content - Table */}
            <div className="pricing-table-wrap">
              <table className="pricing-interactive-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px', textAlign: 'center' }}>STT</th>
                    <th style={{ width: '30%' }}>Nội Dung Dịch Vụ</th>
                    <th style={{ width: '15%', textAlign: 'center' }}>Đơn Vị Tính</th>
                    <th>Chi Tiết &amp; Ghi Chú</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingCategories.find(c => c.id === activeCatTab)?.items.map(item => (
                    <tr key={item.stt}>
                      <td className="text-center font-bold">{item.stt}</td>
                      <td className="font-bold text-teal">{item.name}</td>
                      <td className="text-center">{item.unit}</td>
                      <td className="note-cell">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
// Subcomponents
function ProjectGrid({ items, onProjectClick }: { items: any[]; onProjectClick: (project: any) => void }) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <article className="project-card" key={project.name} onClick={() => onProjectClick(project)} style={{ cursor: 'pointer' }}>
          <div className="project-image-wrap">
            <img src={project.image} alt={project.name} />
            <div className="project-hover-overlay">
              <span className="view-detail-btn">Xem chi tiết</span>
            </div>
          </div>
          <div className="project-body">
            <small>{project.category}</small>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <div className="tags">
              {project.tags.map((tag: string) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Liên hệ</p>
          <h2>Cần xây dựng branding cho nhóm ngành nào?</h2>
          <p>DST Group tư vấn định hướng nhận diện, hồ sơ năng lực, ấn phẩm bán hàng và hình ảnh truyền thông phù hợp từng lĩnh vực.</p>
        </div>
        <form className="lead-form" onSubmit={(e) => { e.preventDefault(); alert('Đăng ký thành công! DST Group sẽ liên hệ tư vấn sớm nhất.'); }}>
          <input placeholder="Tên doanh nghiệp / người liên hệ" required />
          <input placeholder="Số điện thoại" required />
          <select defaultValue="">
            <option value="" disabled>Chọn nhóm ngành</option>
            {categories.filter((category) => category !== 'Tất cả').map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <textarea rows={4} placeholder="Mô tả nhu cầu branding" />
          <button className="contact-pill filled" type="submit">Gửi yêu cầu tư vấn</button>
        </form>
      </div>
    </section>
  );
}

// Helper component to display image centered, scaling large ones down and keeping small ones crisp
function ProjectImageWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{
        display: 'block',
        margin: 'auto',
        borderRadius: '12px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center center'
      }}
    />
  );
}

// Subcomponent: Project Detail Page (Full Page)
function ProjectDetailPage({ 
  project, 
  onBack, 
  navigateTo, 
  allProjects,
  onProjectClick
}: { 
  project: any; 
  onBack: () => void; 
  navigateTo: (view: any) => void;
  allProjects: any[];
  onProjectClick: (project: any) => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [project]);

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  // Find 3 related projects in the same category (excluding current)
  const relatedProjects = useMemo(() => {
    return allProjects
      .filter((p) => p.category === project.category && p.name !== project.name)
      .slice(0, 3);
  }, [allProjects, project]);

  return (
    <main className="project-detail-page-view">
      {/* Hero Banner Header */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay" style={{ backgroundImage: `linear-gradient(to right, rgba(11, 23, 21, 0.95) 0%, rgba(11, 23, 21, 0.6) 50%, rgba(11, 23, 21, 0.25) 100%), url(${project.image})` }} />
        <div className="container relative z-10">
          <div className="project-detail-breadcrumbs">
            <button onClick={() => navigateTo('home')}>Trang chủ</button>
            <span>/</span>
            <button onClick={() => navigateTo('catalog')}>Dự án</button>
            <span>/</span>
            <span className="current">{project.name}</span>
          </div>
          
          <div className="project-detail-header-row">
            <div>
              <span className="project-detail-category">{project.category}</span>
              <h1>{project.name}</h1>
              <p className="project-detail-summary">{project.summary}</p>
            </div>
            <button className="btn btn-outline btn-back-to-catalog" onClick={onBack}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '8px' }}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Quay lại danh mục
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="project-detail-body-section">
        <div className="container">
          <div className="project-detail-grid-layout">
            
            {/* Gallery Area (Left) */}
            <div className="project-detail-gallery-area">
              {/* Main Image Viewer */}
              {project.images && project.images.length > 0 && (
                <div className={`project-detail-main-image-viewer ${project.galleryFocus === 'left-crop' ? 'image-focus-left' : ''}`}>
                  <ProjectImageWrapper 
                    src={project.images[activeImageIndex]} 
                    alt={`${project.name} Main View`} 
                  />
                  
                  {/* Next / Prev Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button 
                        type="button"
                        className="gallery-nav-arrow prev" 
                        onClick={prevImage}
                        aria-label="Previous image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>
                      <button 
                        type="button"
                        className="gallery-nav-arrow next" 
                        onClick={nextImage}
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Caption Overlay */}
                  <div className="main-image-caption-overlay">
                    <span className="caption-text">{project.name} - Bản thiết kế / Hình thực tế</span>
                    <span className="caption-count">
                      Ảnh {activeImageIndex + 1} / {project.images.length}
                    </span>
                  </div>
                </div>
              )}

              {/* Thumbnails strip below the main image viewer */}
              {project.images && project.images.length > 1 && (
                <div className="project-detail-thumbnails-strip">
                  {project.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      type="button"
                      className={`thumbnail-btn ${activeImageIndex === idx ? 'active' : ''} ${project.galleryFocus === 'left-crop' ? 'image-focus-left' : ''}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}

              {/* Full Stack list of all images at the bottom of the column for details */}
              {project.images && project.images.length > 1 && (
                <div className="project-detail-all-images-list">
                  <h3>Tất cả hình ảnh ({project.images.length})</h3>
                  <div className="images-stack">
                    {project.images.map((img: string, idx: number) => (
                      <div className="stacked-image-wrap" key={idx}>
                        <img src={img} alt={`${project.name} Full Showcase ${idx + 1}`} />
                        <span className="image-caption">Bản vẽ thiết kế / Hình ảnh thực tế #{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Info Area (Right) */}
            <aside className="project-detail-sidebar-area">
              <div className="project-detail-sticky-panel">
                <div className="sidebar-card">
                  <h2>Thông tin dự án</h2>
                  <div className="modal-divider" style={{ margin: '16px 0' }} />
                  
                  <div className="project-description-text">
                    {project.details}
                  </div>

                  <div className="modal-divider" style={{ margin: '20px 0' }} />
                  
                  <h3>Lĩnh vực hoạt động</h3>
                  <span className="project-detail-category-badge">{project.category}</span>
                  
                  <h3 style={{ marginTop: '20px' }}>Từ khóa liên quan</h3>
                  <div className="project-detail-tags-list">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="tag-badge">#{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Box */}
                <div className="sidebar-cta-card">
                  <h3>Tư vấn giải pháp tương tự</h3>
                  <p>DST Group sẵn sàng đồng hành cùng doanh nghiệp thiết kế bộ nhận diện thương hiệu, ấn phẩm marketing &amp; website tối ưu doanh thu.</p>
                  <a href="#contact" className="btn btn-primary btn-block-cta" onClick={(e) => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      e.preventDefault();
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}>
                    Nhận tư vấn thiết kế miễn phí
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="project-detail-related-section">
          <div className="container">
            <div className="section-head">
              <span>Khám phá thêm</span>
              <h2>Các dự án cùng nhóm ngành</h2>
            </div>
            <div className="related-projects-grid">
              {relatedProjects.map((p) => (
                <article 
                  className="related-project-card" 
                  key={p.name}
                  onClick={() => onProjectClick(p)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-image-frame">
                    <img src={p.image} alt={p.name} />
                    <div className="hover-mask">
                      <span>Xem dự án</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <small>{p.category}</small>
                    <h3>{p.name}</h3>
                    <p>{p.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}




