import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from './Icons';
import logoImg from '../assets/logo.png';

export const Hero: React.FC = () => {
  const fadeInVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: (delay: number) => ({
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        delay,
      },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Fixed Navbar Spacer & Content */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
        {/* Left Logo */}
        <div className="liquid-glass px-4 h-12 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-md">
          <img src={logoImg} alt="DST Logo" className="h-7 object-contain" />
        </div>

        {/* Center Pill */}
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1.5">
          {[
            { label: "Quy trình", id: "quy-trinh" },
            { label: "Dịch vụ Web", id: "dich-vu-web" },
            { label: "Dự án", id: "du-an" },
            { label: "Công nghệ", id: "cong-nghe" },
            { label: "Liên hệ", id: "lien-he" }
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition font-body"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-white hover:bg-white/90 text-black px-4 py-2 text-sm font-medium font-body rounded-full flex items-center gap-1 transition-colors">
            Tư vấn thiết kế
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Right Spacer */}
        <div className="h-12 w-12" />
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
        {/* Badge */}
        <motion.div
          custom={0.4}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="liquid-glass rounded-full flex items-center gap-2 px-4 py-1.5 text-xs text-white/80 font-body mb-6"
        >
          <span className="bg-white text-black px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider">
            WEB DESIGN
          </span>
          <span>Dịch vụ Thiết kế & Lập trình Website cao cấp -- DST Media</span>
        </motion.div>

        {/* Headline */}
        <div className="mt-2 max-w-4xl px-2">
          <BlurText
            text="Thiết Kế Website Đo Ni Đóng Giày & Tối Ưu UX/UI"
            className="text-5xl md:text-6xl lg:text-[5.2rem] font-heading italic text-white leading-[0.85] tracking-[-3px] md:tracking-[-4px]"
          />
        </div>

        {/* Subtext */}
        <motion.p
          custom={0.8}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 text-sm md:text-base text-white/85 max-w-2xl font-body font-light leading-relaxed px-4"
        >
          Chúng tôi xây dựng các giao diện web độc bản, có hiệu năng vận hành vượt trội và tối ưu hóa trải nghiệm người dùng sâu sắc. Quy chuẩn thiết kế chuẩn mực, hiệu ứng chuyển động cinematic mượt mà và mã nguồn tối ưu.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={1.1}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 flex gap-6 items-center"
        >
          <button className="liquid-glass-strong hover:bg-white/5 text-white rounded-full px-5 py-2.5 flex items-center gap-1.5 transition font-body text-sm font-medium">
            Bắt đầu dự án
            <ArrowUpRight size={16} />
          </button>
          <button className="flex items-center gap-2 text-white/90 hover:text-white transition font-body text-sm font-medium">
            <span className="flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-white/5">
              <Play size={14} className="ml-0.5" />
            </span>
            Xem dự án mẫu
          </button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          custom={1.3}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap justify-center gap-4 px-4"
        >
          {/* Card 1 */}
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left h-[130px]">
            <div className="text-white/70">
              <ClockIcon size={20} />
            </div>
            <div>
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none text-white mt-4">
                6 Tuần
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-1.5 uppercase tracking-wider">
                Thời gian bàn giao trung bình
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col justify-between items-start text-left h-[130px]">
            <div className="text-white/70">
              <GlobeIcon size={20} />
            </div>
            <div>
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none text-white mt-4">
                100%
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-1.5 uppercase tracking-wider">
                Chuẩn SEO & Tối ưu di động
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Trust Bar */}
      <motion.div
        custom={1.4}
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-4 pb-8"
      >
        <div className="liquid-glass rounded-full px-5 py-1.5 text-xs text-white/70 font-body tracking-wide">
          Đồng hành cùng sự tăng trưởng của các doanh nghiệp dẫn đầu
        </div>
        <div className="flex items-center gap-10 md:gap-16 mt-2">
          {["DST Marketing", "DST Media", "DST Agency", "DST Group", "DST Digital"].map((logo) => (
            <span
              key={logo}
              className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/40 hover:text-white/90 transition-colors duration-300"
            >
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
