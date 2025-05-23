"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Laptop2, Rocket, Gamepad2, PhoneCall, Cpu, Cloud,
  ShieldCheck, Hammer, CalendarClock, HelpCircle, Mail,
  Menu, X,
} from "lucide-react";

const Starfield = dynamic(() => import("../components/Starfield"), { ssr: false });

/* -------------------- ヘルパー -------------------- */
const navLinks = [
  ["Vision", "#vision"],
  ["Services", "#services"],
  ["Tech", "#tech"],
  ["Roadmap", "#roadmap"],
  ["Values", "#values"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const SectionTitle = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <h2 className="relative w-fit mx-auto mb-12 text-3xl md:text-4xl font-bold text-sky-400 flex items-center gap-2">
    {icon} {children}
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-500" />
  </h2>
);

const Button = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-sky-500 hover:bg-sky-600 transition-colors text-sky-50 shadow-lg shadow-sky-500/30"
  >
    {children}
  </a>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="glass neon-hover rounded-2xl p-6 transition-all">{children}</div>
);

/* -------------------- ページ -------------------- */
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Starfield />
      <main className="relative z-10 min-h-screen flex flex-col text-sky-50 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-sky-900/60 font-sans">

        {/* ── Header ───────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-sky-700/20">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

            {/* Hamburger */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Brand */}
            <span className="text-lg font-bold text-sky-200 select-none">Aspira</span>

            {/* Desktop Nav */}
            <nav className="space-x-6 hidden md:flex text-sm">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} className="hover:text-sky-400">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="md:hidden overflow-hidden bg-slate-950/90 border-t border-sky-700/20"
              >
                <ul className="flex flex-col list-none">
                  {navLinks.map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block px-6 py-4 border-b border-slate-800 hover:bg-slate-900 hover:text-sky-400 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* ── Hero ────────────────────────────────────── */}
        <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-28 md:py-40">
          <motion.h1
            className="kaleido-text text-5xl md:text-8xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            境界を越える<br className="hidden md:block" />デジタル体験を
          </motion.h1>
          <p className="mt-6 text-lg md:text-2xl max-w-3xl text-sky-200">
            技術と遊び心で「まだ無い体験」を創造し、<br className="hidden md:block" />
            混沌の中から“ワクワク”をカタチにします。
          </p>
          <Button href="#contact">今すぐ相談する</Button>
        </section>

        {/* ── Vision ─────────────────────────────────── */}
        <section id="vision" className="py-24 px-6 bg-slate-900/80 backdrop-blur-lg">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <SectionTitle icon={<Rocket className="w-7 h-7" />}>
              Vision & Mission
            </SectionTitle>
            <ul className="space-y-4 text-left text-sky-100 leading-relaxed mx-auto max-w-2xl list-disc list-inside">
              <li>
                テクノロジーとエンタメの<b>“あいだ”</b>に潜む価値を可視化し、人々の生活を豊かにする
              </li>
              <li>
                アイデアを<b>高速プロトタイピング</b>し、市場フィードバックを循環させながら最適解へ到達
              </li>
              <li>
                <b>オープンな対話</b>と共創を通じ、持続的なエコシステムを育む
              </li>
            </ul>
          </div>
        </section>

        {/* ── Services ──────────────────────────────── */}
        <section id="services" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-6xl mx-auto text-center">
            <SectionTitle icon={<Laptop2 className="w-7 h-7" />}>Services</SectionTitle>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                [<Laptop2 />, "フルスタック開発", "クラウドネイティブでスケールするアプリを最速提供。"],
                [<Rocket />, "AI / ML Lab", "PoC から運用まで伴走する AI チーム。"],
                [<Gamepad2 />, "データ × エンタメ", "体験設計を分析データで継続的に改善。"],
                [<PhoneCall />, "Tech コンサル", "混沌を整理し、持続成長戦略へ導きます。"],
              ].map(([icon, title, desc], i) => (
                <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <Card>
                    <div className="flex flex-col items-center text-center gap-5">
                      <div className="bg-sky-500/20 rounded-full p-4">{icon as React.ReactNode}</div>
                      <h3 className="text-xl font-semibold text-sky-200">{title as string}</h3>
                      <p className="text-sm text-sky-100 opacity-80">{desc as string}</p>
                    </div>
                  </Card>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Pillars ───────────────────────────── */}
        <section id="tech" className="py-24 px-6 bg-slate-900/80 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto text-center">
            <SectionTitle icon={<Cpu className="w-7 h-7" />}>Technology Pillars</SectionTitle>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                [<ShieldCheck className="w-10 h-10 text-sky-400" />, "Security by Design", "ゼロトラスト設計を開発初期から適用。"],
                [<Cloud className="w-10 h-10 text-sky-400" />, "Cloud Native", "Kubernetes & Serverless による自動スケール。"],
                [<Hammer className="w-10 h-10 text-sky-400" />, "DevEx First", "CI/CD & IaC で開発者体験を最適化。"],
              ].map(([icon, title, body], i) => (
                <Card key={i}>
                  <div className="flex flex-col items-center gap-4">
                    {icon as React.ReactNode}
                    <h4 className="font-semibold text-sky-200">{title as string}</h4>
                    <p className="text-sm text-sky-100 opacity-80 text-center">{body as string}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roadmap ────────────────────────────────── */}
        <section id="roadmap" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-5xl mx-auto text-center">
            <SectionTitle icon={<CalendarClock className="w-7 h-7" />}>Public Roadmap</SectionTitle>
            <ol className="relative border-l border-sky-700/40 mx-auto max-w-md text-left space-y-10 list-none">
              {[
                ["2025 Q3", "AI Recommendation Engine βリリース"],
                ["2025 Q4", "自社 SaaS 公開ベータ & 料金公開"],
                ["2026 H1", "グローバル多言語対応"],
              ].map(([time, desc], i) => (
                <li key={i} className="pl-6">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500" />
                  <h4 className="font-semibold text-sky-200">{time}</h4>
                  <p className="text-sm text-sky-100 opacity-80">{desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Values ─────────────────────────────────── */}
        <section id="values" className="py-24 px-6 bg-slate-900/80 backdrop-blur-lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <SectionTitle icon={<ShieldCheck className="w-7 h-7" />}>Core Values</SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                ["Exploration", "未知を恐れず挑戦する文化"],
                ["Transparency", "情報をオープンに共有し合う"],
                ["Craftsmanship", "徹底的に品質を磨く姿勢"],
                ["Playfulness", "遊び心を忘れない"],
              ].map(([title, desc], i) => (
                <Card key={i}>
                  <h4 className="font-semibold text-sky-200">{title}</h4>
                  <p className="text-sm text-sky-100 opacity-80">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────── */}
        <section id="faq" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto">
            <SectionTitle icon={<HelpCircle className="w-7 h-7" />}>FAQ</SectionTitle>
            <div className="space-y-10 text-left text-sky-100 leading-relaxed">
              {[
                ["導入まではどのくらい？", "仕様確定後、平均 4〜8 週間で本番稼働します。"],
                ["費用感は？", "モジュール単位月額＋初期構築費用。見積は無料です。"],
                ["オンプレ対応は？", "プライベートクラウド / オンプレ環境へもデプロイ可能です。"],
                ["見積は無料？", "オンライン面談・概算見積は無償対応しています。"],
              ].map(([q, a], i) => (
                <div key={i}>
                  <p className="font-semibold">Q. {q}</p>
                  <p className="ml-4 mt-1 opacity-90">A. {a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────── */}
        <section id="contact" className="py-32 px-6 bg-slate-900/80 backdrop-blur-lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <SectionTitle icon={<Mail className="w-7 h-7" />}>Contact</SectionTitle>
            <p className="text-lg text-sky-100 leading-relaxed">
              企画相談・コラボ提案などお気軽にご連絡ください。
            </p>
            <Button href="mailto:info@example.com">info@example.com</Button>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────── */}
        <footer className="bg-slate-950 border-t border-sky-700/20 py-6 text-center text-sm text-sky-500">
          © {new Date().getFullYear()} Aspira Inc.
        </footer>
      </main>
    </>
  );
}
"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Laptop2, Rocket, Gamepad2, PhoneCall, Cpu, Cloud,
  ShieldCheck, Hammer, CalendarClock, HelpCircle, Mail,
  Menu, X,
} from "lucide-react";

const Starfield = dynamic(() => import("../components/Starfield"), { ssr: false });

/* -------------------- ヘルパー -------------------- */
const navLinks = [
  ["Vision", "#vision"],
  ["Services", "#services"],
  ["Tech", "#tech"],
  ["Roadmap", "#roadmap"],
  ["Values", "#values"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
  ["電子公告", "#announcement"],
];

const SectionTitle = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <h2 className="relative w-fit mx-auto mb-12 text-3xl md:text-4xl font-bold text-sky-400 flex items-center gap-2">
    {icon} {children}
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sky-500" />
  </h2>
);

const Button = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-sky-500 hover:bg-sky-600 transition-colors text-sky-50 shadow-lg shadow-sky-500/30"
  >
    {children}
  </a>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="glass neon-hover rounded-2xl p-6 transition-all">{children}</div>
);

/* -------------------- ページ -------------------- */
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Starfield />
      <main className="relative z-10 min-h-screen flex flex-col text-sky-50 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-sky-900/60 font-sans">
        <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-sky-700/20">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <span className="text-lg font-bold text-sky-200 select-none">Aspira</span>
            <nav className="space-x-6 hidden md:flex text-sm">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} className="hover:text-sky-400">
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="md:hidden overflow-hidden bg-slate-950/90 border-t border-sky-700/20"
              >
                <ul className="flex flex-col list-none">
                  {navLinks.map(([label, href]) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block px-6 py-4 border-b border-slate-800 hover:bg-slate-900 hover:text-sky-400 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* ── Announcement ────────────────────────────────── */}
        <section id="announcement" className="py-24 px-6 bg-slate-900/80 backdrop-blur-lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <SectionTitle icon={<ShieldCheck className="w-7 h-7" />}>電子公告</SectionTitle>
            <p className="text-lg text-sky-100">
              当社の法定公告はこのページに掲載いたします。
            </p>
            <ul className="text-left max-w-xl mx-auto text-sky-100 space-y-4">
              <li>
                <strong>2024年度 決算公告：</strong>
                <a
                  href="/documents/2024_kessan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline hover:text-sky-300"
                >
                  PDFを表示
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer className="bg-slate-950 border-t border-sky-700/20 py-6 text-center text-sm text-sky-500">
          © {new Date().getFullYear()} Aspira Inc.
        </footer>
      </main>
    </>
  );
}
