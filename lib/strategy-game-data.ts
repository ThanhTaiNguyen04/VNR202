export interface GameCard {
  title: string;
  description: string;
  image: string;
  effects: {
    economy: number;
    living: number;
    diplomacy: number;
    stability: number;
  };
}

export interface RandomEvent {
  title: string;
  description: string;
  effects: {
    economy: number;
    living: number;
    diplomacy: number;
    stability: number;
  };
  isFixed?: boolean;
}

export interface GameYear {
  year: number;
  label: string;
  cards: GameCard[];
  fixedEvent?: RandomEvent;
}

export const STRATEGY_GAME_DATA: GameYear[] = [
  {
    year: 1986,
    label: "Năm 1: Khởi động Đổi mới",
    cards: [
      {
        title: "Xóa bỏ 'Ngăn sông cấm chợ'",
        description: "Bãi bỏ các trạm kiểm soát nội địa. Hàng hóa lưu thông tự do.",
        image: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 150, living: 100, diplomacy: 0, stability: -50 }
      },
      {
        title: "Kinh tế 3 chương trình",
        description: "Tập trung Lương thực, Hàng tiêu dùng, Hàng xuất khẩu.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 100, living: 150, diplomacy: 0, stability: 50 }
      },
      {
        title: "Thừa nhận tư nhân",
        description: "Cho phép kinh tế tư nhân tham gia sản xuất.",
        image: "https://img.lsvn.vn/resize/th/upload/2025/07/25/kinh-te-1727246026651186254806-144-0-944-1280-crop-17403761563101998048894-14343269.jpg",
        effects: { economy: 200, living: 50, diplomacy: 0, stability: -100 }
      }
    ]
  },
  {
    year: 1988,
    label: "Năm 3: Khoán 10 Nông nghiệp",
    cards: [
      {
        title: "Giải phóng sức sản xuất",
        description: "Giao quyền tự chủ cho hộ nông dân.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 150, living: 250, diplomacy: 0, stability: 100 }
      },
      {
        title: "Rút quân quốc tế",
        description: "Giảm gánh nặng quân sự tại Campuchia.",
        image: "https://file3.qdnd.vn/data/images/0/2024/12/20/upload_2172/01.jpg?dpi=150&quality=100&w=870",
        effects: { economy: 50, living: 0, diplomacy: 300, stability: 150 }
      },
      {
        title: "Luật ĐTNN đầu tiên",
        description: "Mở cửa đón vốn ngoại một bước đi táo bạo.",
        image: "https://cdncongly.giaiphapmoipro.com/w3840/uploaded/images/2025/12/13/83c0e107-5e96-4f32-ac06-8cb036376097.jpg.avif",
        effects: { economy: 150, living: 0, diplomacy: 150, stability: -50 }
      }
    ]
  },
  {
    year: 1991,
    label: "Năm 6: Đại hội VII",
    cards: [
      {
        title: "Ổn định Vĩ mô",
        description: "Kiềm chế lạm phát hiệu quả giúp ổn định lòng dân.",
        image: "https://api.hanagold.vn/media-new/1737624154615-tien-viet-nam-duoc-in-o-dau-1jpeg.jpeg",
        effects: { economy: 100, living: 50, diplomacy: 0, stability: 250 }
      },
      {
        title: "Mở rộng thị trường",
        description: "Tìm kiếm các đối tác phi truyền thống sau khi Liên Xô sụp đổ.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 150, living: 0, diplomacy: 200, stability: 50 }
      },
      {
        title: "Tái cơ cấu DN Nhà nước",
        description: "Sắp xếp lại các tập đoàn đầu tầu.",
        image: "https://thuehaiquan.tapchikinhtetaichinh.vn/stores/news_dataimages/2026/012026/11/09/dnnn-173692880343320260111093947.png?rt=20260224180510",
        effects: { economy: 200, living: -50, diplomacy: 0, stability: -100 }
      }
    ]
  },
  {
    year: 1994,
    label: "Năm 9: Mỹ dỡ bỏ cấm vận",
    fixedEvent: {
        title: "Gỡ bỏ cấm vận thương mại",
        description: "Tổng thống Mỹ Bill Clinton tuyên bố dỡ bỏ hoàn toàn cấm vận với Việt Nam.",
        effects: { economy: 200, living: 50, diplomacy: 400, stability: 100 },
        isFixed: true
    },
    cards: [
        {
          title: "Chuẩn bị luật thương mại",
          description: "Xây dựng khung pháp lý đón làn sóng FDI Mỹ.",
          image: "https://images.unsplash.com/photo-1454165833767-131435bb4496?q=80&w=1000&auto=format&fit=crop",
          effects: { economy: 150, living: 50, diplomacy: 50, stability: -50 }
        },
        {
          title: "Đầu tư hạ tầng khu công nghiệp",
          description: "Mở rộng khu chế xuất để xuất khẩu hàng sang thị trường mới.",
          image: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=1000&auto=format&fit=crop",
          effects: { economy: 250, living: 0, diplomacy: 0, stability: -100 }
        },
        {
          title: "Ưu tiên phát triển giáo dục",
          description: "Chuẩn bị nhân lực cho thời đại hội nhập.",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
          effects: { economy: -50, living: 150, diplomacy: 50, stability: 100 }
        }
    ]
  },
  {
    year: 1995,
    label: "Năm 10: Hội nhập & Cấp tiến",
    fixedEvent: {
        title: "Gia nhập ASEAN",
        description: "Việt Nam chính thức trở thành thành viên thứ 7 của Hiệp hội các nước ĐNÁ.",
        effects: { economy: 50, living: 20, diplomacy: 500, stability: 200 },
        isFixed: true
    },
    cards: [
      {
        title: "Bình thường hóa quan hệ Mỹ",
        description: "Khép lại quá khứ, mở cửa giao thương Hoa Kỳ.",
        image: "https://image.tinnhanhchungkhoan.vn/w2400/Uploaded/2026/wpxlcdjwi/2023_09_11/7-2952.jpg",
        effects: { economy: 300, living: 100, diplomacy: 500, stability: -150 }
      },
      {
        title: "Giao dịch khoán nông nghiệp mới",
        description: "Tiếp tục đẩy mạnh quyền tự chủ cho nông thôn.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 100, living: 200, diplomacy: 50, stability: 50 }
      },
      {
        title: "Công nghiệp hóa Thủ đô",
        description: "Tập trung xây dựng các khu chế xuất lớn.",
        image: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 250, living: 50, diplomacy: 100, stability: -100 }
      }
    ]
  },
  {
    year: 1997,
    label: "Năm 12: Khủng hoảng tài chính Đông Á",
    cards: [
      {
        title: "Giảm tốc độ đầu tư",
        description: "Thắt lưng buộc bụng để bảo vệ dự trữ ngoại hối.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: -150, living: -100, diplomacy: 0, stability: 150 }
      },
      {
        title: "Hỗ trợ DN nội địa",
        description: "Ưu tiên nguồn lực cho DN trong nước trước bão FDI rút chạy.",
        image: "https://moit.gov.vn/upload/2005517/fck/files/2023_10_06_04_13_3813_4d791.jpg",
        effects: { economy: 100, living: 50, diplomacy: 0, stability: -200 }
      },
      {
        title: "Luật Doanh nghiệp 1999",
        description: "Chuẩn bị cú hích tư nhân bất chấp khủng hoảng.",
        image: "https://cdn2.tuoitre.vn/thumb_w/730/2018/3/21/anh-bac-gia-1521619035955248285522-152161972671412770146-15216224806501951961828.png",
        effects: { economy: 250, living: 150, diplomacy: 50, stability: -200 }
      }
    ]
  },
  {
    year: 2003,
    label: "Năm 18: Thử thách dịch SARS",
    fixedEvent: {
        title: "Đại dịch SARS",
        description: "Việt Nam là nước đầu tiên khống chế được dịch SARS, ghi dấu ấn y tế thế giới.",
        effects: { economy: -100, living: -150, diplomacy: 300, stability: 250 },
        isFixed: true
    },
    cards: [
        {
          title: "Đầu tư y tế dự phòng",
          description: "Xây dựng hệ thống giám sát bệnh tật toàn quốc.",
          image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1000&auto=format&fit=crop",
          effects: { economy: -50, living: 200, diplomacy: 100, stability: 150 }
        },
        {
          title: "Kích cầu du lịch nội địa",
          description: "Phục hồi ngành du lịch sau cú sốc dịch bệnh.",
          image: "https://images.unsplash.com/photo-1497942304796-b8bc2cc898f3?q=80&w=1000&auto=format&fit=crop",
          effects: { economy: 150, living: 100, diplomacy: 50, stability: 0 }
        },
        {
          title: "Mở rộng viễn thông",
          description: "Thúc đẩy liên lạc và công nghệ.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
          effects: { economy: 200, living: 150, diplomacy: 50, stability: -50 }
        }
    ]
  },
  {
    year: 2007,
    label: "Năm 22: Ra biển lớn WTO",
    fixedEvent: {
        title: "Gia nhập WTO",
        description: "Việt Nam trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới.",
        effects: { economy: 400, living: 150, diplomacy: 600, stability: -300 },
        isFixed: true
    },
    cards: [
      {
        title: "Mở cửa tài chính ngân hàng",
        description: "Đón nhận chuẩn mực quản lý quốc tế.",
        image: "https://images.unsplash.com/photo-1554224155-1696413575b8?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 300, living: 50, diplomacy: 100, stability: -200 }
      },
      {
        title: "Bùng nổ Bất động sản",
        description: "Vốn ngoại đổ vào đô thị hóa. Giá đất tăng phi mã.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 400, living: 100, diplomacy: 50, stability: -450 }
      },
      {
        title: "Phát triển công nghiệp phần mềm",
        description: "Tận dụng lợi thế vàng về dân số trẻ.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 250, living: 150, diplomacy: 50, stability: 0 }
      }
    ]
  },
  {
    year: 2011,
    label: "Năm 26: Kiềm chế Lạm phát (Nghị quyết 11)",
    cards: [
      {
        title: "Thắt chặt tín dụng",
        description: "Hy sinh tăng trưởng để cứu vãn giá trị đồng tiền.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: -450, living: -300, diplomacy: -50, stability: 250 }
      },
      {
        title: "Tái cơ cấu Ngân hàng",
        description: "Giải quyết nợ xấu hệ thống nhưng gây sốc tài chính.",
        image: "https://images.unsplash.com/photo-1554224155-1696413575b8?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 200, living: -150, diplomacy: 100, stability: -400 }
      },
      {
        title: "Xây dựng hạ tầng giao thông",
        description: "Vay vốn đầu tư cao tốc xuyên Việt để giữ nhịp tăng trưởng.",
        image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 350, living: 100, diplomacy: 50, stability: -400 }
      }
    ]
  },
  {
    year: 2014,
    label: "Năm 29: Sóng gió Biển Đông",
    fixedEvent: {
        title: "Sự kiện Giàn khoan 981",
        description: "Sức ép chủ quyền biển đảo cực lớn, tinh thần dân tộc dâng cao.",
        effects: { economy: -100, living: 0, diplomacy: 200, stability: 600 },
        isFixed: true
    },
    cards: [
      {
        title: "Tăng cường thực thi pháp luật biển",
        description: "Xây dựng lực lượng Cảnh sát biển hùng mạnh.",
        image: "https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: -150, living: -50, diplomacy: 100, stability: 400 }
      },
      {
        title: "FTA Việt Nam - Hàn Quốc",
        description: "Mở rộng đối tác kinh tế chiến lược.",
        image: "https://moit.gov.vn/upload/2005517/fck/files/2023_10_06_04_13_3813_4d791.jpg",
        effects: { economy: 350, living: 150, diplomacy: 350, stability: -100 }
      },
      {
        title: "Ưu tiên Nông nghiệp công nghệ cao",
        description: "Nâng tầm giá trị nông sản Việt.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 200, living: 150, diplomacy: 50, stability: 50 }
      }
    ]
  },
  {
    year: 2016,
    label: "Năm 31: Chỉnh đốn Đảng & Chống tham nhũng",
    fixedEvent: {
        title: "Chiến dịch 'Đốt lò'",
        description: "Tinh thần đấu tranh phòng chống tham nhũng quyết liệt không có vùng cấm.",
        effects: { economy: -100, living: 100, diplomacy: 150, stability: 750 },
        isFixed: true
    },
    cards: [
      {
        title: "Thanh lọc bộ máy nhân sự",
        description: "Xử lý nghiêm các cán bộ cấp cao sai phạm.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: -50, living: 50, diplomacy: 100, stability: 500 }
      },
      {
        title: "Khắc phục Formosa",
        description: "Xử lý khủng hoảng môi trường, khôi phục sinh kế ngư dân.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: -450, living: 200, diplomacy: -100, stability: 150 }
      },
      {
        title: "Phát triển điện gió, điện mặt trời",
        description: "Cam kết năng lượng sạch với quốc tế.",
        image: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: -250, living: 200, diplomacy: 350, stability: 100 }
      }
    ]
  },
  {
    year: 2020,
    label: "Năm 35: Đại dịch & Mục tiêu kép",
    fixedEvent: {
        title: "Đại dịch COVID-19",
        description: "Thế giới chao đảo, Việt Nam thực hiện chiến lược vừa chống dịch vừa phát triển.",
        effects: { economy: -500, living: -400, diplomacy: 150, stability: 600 },
        isFixed: true
    },
    cards: [
      {
        title: "Chiến dịch Tiêm chủng Thần tốc",
        description: "Ngoại giao vắc-xin mang lại vắc-xin cho nhân dân.",
        image: "https://images.unsplash.com/photo-1612117561869-81424314644e?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 100, living: 500, diplomacy: 750, stability: 300 }
      },
      {
        title: "Kinh tế số & Làm việc từ xa",
        description: "Chuyển đổi số cưỡng bức mang lại bước ngoặt công nghệ.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 400, living: 100, diplomacy: 100, stability: -400 }
      },
      {
        title: "Đôn đốc giải ngân đầu tư công",
        description: "Dùng dự án quy mô lớn để kéo con thuyền kinh tế.",
        image: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=1000&auto=format&fit=crop",
        effects: { economy: 450, living: 150, diplomacy: 50, stability: -300 }
      }
    ]
  }
];

export const RANDOM_EVENTS: RandomEvent[] = [
  {
    title: "Thiên tai lũ lụt miền Trung",
    description: "Mưa lớn gây ngập lụt diện rộng, tàn phá hạ tầng.",
    effects: { economy: -150, living: -150, diplomacy: 0, stability: -100 }
  },
  {
    title: "Giá dầu thế giới biến động mạnh",
    description: "Cú sốc năng lượng toàn cầu ảnh hưởng đến chi phí sản xuất.",
    effects: { economy: -250, living: -50, diplomacy: -50, stability: -100 }
  },
  {
    title: "Tin giả gây bất ổn xã hội",
    description: "Các thông tin sai sự thật lan truyền trên mạng xã hội.",
    effects: { economy: -50, living: 0, diplomacy: 0, stability: -300 }
  },
  {
    title: "Mất mùa nông sản",
    description: "Thời tiết cực đoan ảnh hưởng đến sản lượng gạo xuất khẩu.",
    effects: { economy: -200, living: -100, diplomacy: 0, stability: -150 }
  },
  {
    title: "Cơn sốt đất ảo",
    description: "Đầu cơ đất đai gây bong bóng tài chính và khiếu kiện.",
    effects: { economy: 100, living: -50, diplomacy: 0, stability: -350 }
  }
];
