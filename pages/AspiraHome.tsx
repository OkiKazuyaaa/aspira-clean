import React from "react";
import { motion } from "framer-motion";
import { Laptop2, Gamepad2, PhoneCall, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./aspasia.css"; // keep css filename for now

export default function AspiraHome() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-sky-50 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-lg border-b border-sky-700/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
          {/* Logo */}
          <motion.img
            src="/aspira-logo.jpg" // place the uploaded image in /public or static dir
            alt="Aspira Logo"
            className="w-24 md:w-32 glitch-img"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <nav className="space-x-6 hidden md:flex">
            {[
              { label: "サービス", href: "#services" },
              { label: "会社情報", href: "#about" },
              { label: "お問い合わせ", href: "#contact" },
            ].map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-sky-200 hover:text-sky-400 transition-colors"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-1 items-center justify-center text-center px-6 py-24 md:py-40 overflow-hidden">
        {/* animated blobs */}
        <div className="absolute inset-0 pointer-events-none animate-blob-bg" />
        <div className="absolute -top-48 -left-20 w-[60rem] h-[60rem] bg-sky-700/20 rounded-full filter blur-3xl animate-[spin_40s_linear_infinite]" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full filter blur-2xl animate-[spin_60s_linear_infinite_reverse]" />
        <div className="max-w-4xl relative z-10 flex flex-col items-center gap-8">
          <motion.img
            src="/aspira-logo.png"
            alt="Aspira Logo Big"
            className="w-40 md:w-56"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.p
            className="text-base md:text-lg text-sky-300 uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Motto
          </motion.p>
          <motion.h2
            className="text-4xl md:text-7xl font-extrabold leading-tight glitch layers"
            data-text="際限なく、カオスに"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            際限なく、カオスに
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl text-sky-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            IT × エンターテインメントで境界を越え、混沌から革新を生み出す —— Aspira は圧倒的な技術力と遊び心で、まだ誰も体験したことのないデジタル体験を設計します。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button size="lg" asChild className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/30">
              <a href="#contact">カオスを共創する</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-slate-900/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-16 text-sky-400">サービス</h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Laptop2 className="w-12 h-12 text-sky-400" />, title: "フルスタック開発", desc: "クラウドネイティブ＆高パフォーマンスなアプリを混沌の中から最速で創出。" },
              {
                icon: <Rocket className="w-12 h-12 text-sky-400" />, title: "AI / データ分析", desc: "ハイエンドAIと先端解析で、未知のインサイトを可視化し意思決定を加速。" },
              {
                icon: <Gamepad2 className="w-12 h-12 text-sky-400" />, title: "パチンコイベント", desc: "リアルタイムデータ×体験設計で胸躍るイベントをプロデュース。" },
              {
                icon: <PhoneCall className="w-12 h-12 text-sky-400" />, title: "ITコンサル", desc: "カオスな課題を技術で整理し、持続的な成長戦略へ導きます。" },
            ].map((svc, idx) => (
              <Card key={idx} className="h-full bg-slate-800/60 border border-sky-700/30 hover:shadow-sky-500/30 hover:shadow-lg transition-all">
                <CardContent className="p-8 flex flex-col items-center text-center gap-5">
                  <div className="bg-sky-500/20 rounded-full p-4">{svc.icon}</div>
                  <h4 className="text-xl font-semibold text-sky-200">{svc.title}</h4>
                  <p className="text-sm text-sky-100 leading-relaxed opacity-80">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-sky-400">会社情報</h3>
          <p className="text-lg text-sky-100 leading-8 max-w-3xl mx-auto">
            Aspira は「際限なく、カオスに」をビジョンに掲げ、テクノロジーとエンターテインメントを大胆に融合させるスタートアップです。カオスの中に潜む可能性を紐解き、クライアントと共に次世代の体験を創造します。
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900/80 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-sky-400">お問い合わせ</h3>
          <p className="mb-10 text-sky-100/80">カオスな未来を
