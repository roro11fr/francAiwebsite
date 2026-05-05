"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const LOGO_W = 102;

function FLogoGlow() {
  return (
    <div
      style={{
        position: "absolute",
        left: "68%",
        top: "49%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {/* breathing glow — only animated element */}
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
      {/* static logo mark blended into hoodie fabric */}
      <img
        src="/assets/new_logo_clean.png"
        alt=""
        width={LOGO_W}
        draggable={false}
        style={{
          display: "block",
          mixBlendMode: "screen",
          opacity: 0.88,
          filter: "brightness(1.05) drop-shadow(0 0 6px rgba(168,85,247,0.45))",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Badges
// ─────────────────────────────────────────────────────────────────────────────
function AutomationLiveBadge({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "8px 14px",
        background: "rgba(10,6,22,0.72)",
        border: "1px solid rgba(139,92,246,0.26)",
        borderRadius: 999,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#a855f7",
          boxShadow: "0 0 8px #a855f7",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: "rgba(255,255,255,0.82)",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function BuildBadge({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <motion.div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 14px",
        background: "rgba(10,6,22,0.76)",
        border: "1px solid rgba(109,40,217,0.22)",
        borderRadius: 12,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          flexShrink: 0,
          background: "linear-gradient(140deg, #5b21b6, #7c3aed)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
          <path
            d="M1 9 Q3 5 5 7.5 Q7 10 9 5 Q11 0 13 3.5"
            stroke="white"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "rgba(255,255,255,0.88)",
            letterSpacing: "0.03em",
            lineHeight: 1.3,
          }}
        >
          {line1}
        </div>
        <div
          style={{
            fontSize: 10,
            color: "rgba(167,139,250,0.55)",
            marginTop: 1,
            letterSpacing: "0.04em",
          }}
        >
          {line2}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────
export function HeroCinematic() {
  const { t } = useLanguage()
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "#05050f",
          fontFamily: "'DM Sans', sans-serif",
          height: "100vh",
          minHeight: 640,
          maxHeight: 920,
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
                     grid grid-cols-1 lg:grid-cols-2 items-stretch"
        >
          {/* LEFT */}
          <div className="flex flex-col justify-center py-10 lg:py-14 pr-0 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-[11px] text-violet-300/60 uppercase tracking-[0.22em] font-medium">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white leading-[1.05] mb-6"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
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

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-violet-200/45 text-base md:text-lg leading-relaxed max-w-md mb-10"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-14"
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="flex items-start gap-10 pt-8 border-t border-white/[0.07]"
            >
              {[
                { v: t.hero.stats[0].value, l: t.hero.stats[0].label, d: 0.72 },
                { v: t.hero.stats[1].value, l: t.hero.stats[1].label, d: 0.82 },
                { v: t.hero.stats[2].value, l: t.hero.stats[2].label, d: 0.92 },
              ].map(({ v, l, d }) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: d }}
                >
                  <p
                    className="text-2xl font-bold text-white"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {v}
                  </p>
                  <p className="text-[10px] text-violet-300/50 uppercase tracking-widest mt-0.5">
                    {l}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — full column height via items-stretch; clips orbit bleed */}
          <motion.div
            className="relative hidden lg:block overflow-hidden"
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

            {/* subject — bounded container */}
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
                alt="Franc — Founder of FrancAI"
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
              {/* directional edge fades — paint exact bg color over residual color-cast pixels before mask transition */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "10%", background: "linear-gradient(to bottom, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "20%", background: "linear-gradient(to top, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "18%", background: "linear-gradient(to right, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "32%", background: "linear-gradient(to left, #05050f 0%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
              <FLogoGlow />
            </div>

            {/* "Automation live" badge */}
            <motion.div
              style={{
                position: "absolute",
                top: 80,
                right: 48,
                zIndex: 8,
                pointerEvents: "none",
              }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <AutomationLiveBadge label={t.ui.liveBadge} />
            </motion.div>

            {/* "Build. Automate. Scale." badge */}
            <motion.div
              style={{
                position: "absolute",
                bottom: 80,
                left: 48,
                zIndex: 8,
                pointerEvents: "none",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <BuildBadge line1={t.ui.taglineLine1} line2={t.ui.taglineLine2} />
            </motion.div>

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
            {["LinkedIn", "Twitter", "Email"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "rgba(196,132,252,0.22)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
                className="hover:text-violet-300/60 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}