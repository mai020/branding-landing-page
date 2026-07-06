import React from 'react';
import { FadingVideo } from './FadingVideo';
import { ImageIcon, MovieIcon, LightbulbIcon } from './Icons';

interface CapabilityCard {
  title: string;
  icon: React.ReactNode;
  tags: string[];
  body: string;
}

export const Capabilities: React.FC = () => {
  const cards: CapabilityCard[] = [
    {
      title: "Định Vị Thương Hiệu",
      icon: <ImageIcon size={20} className="text-white" />,
      tags: ["Định Vị Chiến Lược", "Thiết Kế Logo", "Nhận Diện", "Bao Bì"],
      body: "Chúng tôi giúp doanh nghiệp khẳng định vị thế dẫn đầu bằng các giải pháp định vị chuyên sâu, thiết kế logo, bộ nhận diện thương hiệu và bao bì độc bản, chuyên nghiệp.",
    },
    {
      title: "Thiết Kế Web & App",
      icon: <MovieIcon size={20} className="text-white" />,
      tags: ["Giao Diện Động", "Tối Ưu Trải Nghiệm", "React/Next.js", "Tốc Độ Cao"],
      body: "Kiến tạo các sản phẩm số cao cấp, tối ưu hóa tốc độ tải trang, khả năng tiếp cận và đảm bảo hoạt động trơn tru, dễ dàng mở rộng lâu dài.",
    },
    {
      title: "Đột Phá Doanh Thu",
      icon: <LightbulbIcon size={20} className="text-white" />,
      tags: ["Chiến Lược SEO", "Phân Tích Số Liệu", "A/B Testing", "Tăng Chuyển Đổi"],
      body: "Đồng hành cùng sự phát triển lâu dài của thương hiệu thông qua các giải pháp tối ưu hóa tỷ lệ chuyển đổi, tăng trưởng tự nhiên và phân tích dữ liệu chuyên sâu.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-32 pb-16 flex-1 flex flex-col justify-between min-h-screen">
        {/* Header */}
        <div className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-4 tracking-widest uppercase">
            // Dịch vụ cốt lõi
          </div>
          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-[-3px] text-white">
            Quy chuẩn thiết kế,<br />
            bàn giao trọn gói
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300"
            >
              {/* Top Row: Icon + Tags */}
              <div className="flex justify-between items-start gap-4">
                {/* Icon Container */}
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom Row: Title + Body */}
              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-white/95 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
