"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AICore3D } from "@/components/AICore3D";

const LOGO_W = 102;

function FLogoGlow({ left = "68%", top = "49%", width = LOGO_W }: { left?: string; top?: string; width?: number | string }) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: -28,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(109,40,217,0.10) 45%, transparent 72%)",
          filter: "blur(18px)",
          mixBlendMode: "screen",
        }}
        animate={{ opacity: [0.18, 0.36, 0.18] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src="/assets/new_logo_clean.png"
        alt=""
        draggable={false}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          mixBlendMode: "screen",
          opacity: 0.88,
          filter: "brightness(1.05) drop-shadow(0 0 6px rgba(168,85,247,0.45))",
        }}
      />
    </div>
  );
}

export function HeroCinematic() {
  const { t } = useLanguage();
  return (
    <>

      <section
        className="relative w-full overflow-hidden pt-16 lg:max-h-[980px]"
        style={{
          background: "#05050f",
          fontFamily: "var(--font-dmsans), sans-serif",
          minHeight: "100vh",
        }}
      >
        {/* background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139,92,246,0.14) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
          }}
        />

        {/* ambient glows */}
        <div
          className="absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.20) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(76,29,149,0.16) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        <div
          className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12
                     grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ minHeight: "calc(100vh - 64px)" }}
        >
          {/* LEFT */}
          <div className="flex flex-col justify-center pt-14 pb-20 lg:py-20 pr-0 lg:pr-10">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-[11px] text-violet-300/60 uppercase tracking-[0.22em] font-medium">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-white leading-[1.05] mb-5"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "clamp(2.2rem, 3.6vw, 3.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              {t.hero.headline}
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #a855f7, #7c3aed 50%, #c084fc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t.hero.headlineAccent}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-violet-200/45 text-base md:text-lg leading-relaxed max-w-md mb-5"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="text-violet-300/60 text-sm font-medium leading-relaxed max-w-md mb-7 italic"
            >
              {t.hero.supporting}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#9333ea)",
                  boxShadow: "0 0 28px rgba(124,58,237,0.40)",
                }}
              >
                <span className="relative z-10">{t.hero.cta1}</span>
                <svg
                  className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-violet-300 border border-violet-700/50 hover:border-violet-500 hover:text-white hover:bg-violet-500/10 transition-all duration-200"
              >
                {t.hero.cta2}
              </a>
            </motion.div>

            {/* Portrait + 3D core — mobile/tablet (desktop version is the right column) */}
            <motion.div
              className="lg:hidden relative mx-auto w-full max-w-[520px] mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
            >
              {/* 3D core sits behind the head */}
              <AICore3D
                media="(max-width: 1023px)"
                className="absolute left-[52%] -translate-x-1/2"
                style={{ top: "-22%", width: "78%", aspectRatio: "1 / 1", zIndex: 0, opacity: 0.9 }}
              />

              <div
                className="relative z-10 w-full"
                style={{
                  aspectRatio: "616 / 453",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 75% 85% at 50% 45%, black 0%, black 40%, rgba(0,0,0,0.6) 62%, transparent 85%)",
                  maskImage:
                    "radial-gradient(ellipse 75% 85% at 50% 45%, black 0%, black 40%, rgba(0,0,0,0.6) 62%, transparent 85%)",
                }}
              >
                <img
                  src="/assets/rsz_poza-cutout_cleanup.png"
                  alt="Fondatorul FrancAI — creare website-uri și automatizări AI"
                  draggable={false}
                  className="absolute inset-0 w-full h-full select-none"
                  style={{ filter: "drop-shadow(0 0 32px rgba(109,40,217,0.16))" }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none" style={{ background: "linear-gradient(to top, #05050f 0%, transparent 100%)" }} />
                <FLogoGlow left="64.6%" top="49%" width="11.8%" />
              </div>

              {/* ground glow */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-[4%] w-2/3 h-10 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(109,40,217,0.40) 0%, transparent 70%)", filter: "blur(20px)" }}
              />
            </motion.div>

          </div>

          {/* RIGHT — portrait */}
          <motion.div
            className="relative hidden lg:block overflow-hidden"
            style={{ height: "calc(100vh - 64px)", maxHeight: 916 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            {/* ambient torso glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "48%",
                transform: "translate(-50%, -50%)",
                width: 460,
                height: 360,
                background:
                  "radial-gradient(ellipse 110% 85% at 46% 52%, rgba(109,40,217,0.18) 0%, rgba(76,29,149,0.05) 55%, transparent 80%)",
                filter: "blur(96px)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {/* 3D core behind the portrait */}
            <AICore3D
              media="(min-width: 1024px)"
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: "4%", width: "min(560px, 42vw)", aspectRatio: "1 / 1", zIndex: 2, opacity: 0.9 }}
            />

            {/* subject */}
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%) translateY(-10%)",
                width: "min(50vw, 700px)",
                height: "min(76%, 700px)",
                overflow: "hidden",
                zIndex: 3,
                pointerEvents: "none",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 90% at 50% 50%, black 0%, black 28%, rgba(0,0,0,0.92) 46%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0.08) 76%, transparent 88%)",
                maskImage:
                  "radial-gradient(ellipse 80% 90% at 50% 50%, black 0%, black 28%, rgba(0,0,0,0.92) 46%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0.08) 76%, transparent 88%)",
              }}
            >
              <img
                src="/assets/rsz_poza-cutout_cleanup.png"
                alt="Fondatorul FrancAI — creare website-uri și automatizări AI"
                draggable={false}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "100%",
                  width: "auto",
                  maxWidth: "none",
                  userSelect: "none",
                  filter:
                    "drop-shadow(0 0 32px rgba(109,40,217,0.16)) " +
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.75))",
                }}
              />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "10%", background: "linear-gradient(to bottom, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "20%", background: "linear-gradient(to top, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "18%", background: "linear-gradient(to right, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "32%", background: "linear-gradient(to left, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <FLogoGlow />
            </div>

            {/* ground glow */}
            <div
              style={{
                position: "absolute",
                bottom: "2%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 300,
                height: 44,
                background:
                  "radial-gradient(ellipse, rgba(109,40,217,0.40) 0%, transparent 70%)",
                filter: "blur(20px)",
                zIndex: 5,
                pointerEvents: "none",
              }}
            />

            {/* left edge blend */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 6,
                pointerEvents: "none",
                background:
                  "linear-gradient(to right, rgba(5,5,15,0.82) 0%, transparent 20%)",
              }}
            />

            {/* bottom fade */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "18%",
                background:
                  "linear-gradient(to top, #05050f 0%, rgba(5,5,15,0.58) 44%, transparent 100%)",
                zIndex: 6,
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </div>

        {/* footer bar */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p
            className="hidden sm:block"
            style={{
              color: "rgba(196,132,252,0.28)",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            FrancAI — {t.ui.tagline}
          </p>
          <div className="flex gap-5">
            {[
              { label: "Instagram", href: "https://www.instagram.com/francai.ro/" },
              { label: "Email", href: "mailto:francaiagency@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  color: "rgba(196,132,252,0.22)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
                className="hover:text-violet-300/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
