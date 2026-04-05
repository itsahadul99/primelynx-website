"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { GlassCard, MaterialIcon, SectionHeading } from "@/components/ui";
import { aboutStats, teamMembers } from "@/lib/constants";

function AnimatedCounter({ value, className }: { value: string; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [display, setDisplay] = useState(0);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref} className={`text-5xl font-black ${className} mb-3`}>
      {isInView ? display : 0}{suffix}
    </span>
  );
}

const missionVisionCards = [
  {
    icon: "target",
    title: "Our Mission",
    description:
      "To bridge the gap between imagination and reality by engineering innovative digital solutions that accelerate human potential and business growth. We partner closely with clients to turn ambitious ideas into scalable products, combining design, strategy, and development to deliver measurable impact across every stage of their digital journey.",
    gradient: "from-primary to-secondary",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: "satellite",
    title: "Our Vision",
    description:
      "To be the global benchmark for technical excellence, where the most complex challenges are met with elegant, forward-thinking architecture. We envision a future where businesses of every size can confidently adopt modern technology, launch faster, and grow sustainably through resilient systems built for long-term innovation.",
    gradient: "from-secondary to-indigo-500",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
  },
];

const socialIcons: Record<string, string> = {
  github: "code",
  linkedin: "work",
  twitter: "tag",
};

function TeamSlider() {
  return (
    <div className="team-slider relative">
      {/* Custom nav buttons */}
      <div className="flex justify-end gap-3 mb-8">
        <button className="team-prev w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
          <MaterialIcon icon="chevron_left" className="text-2xl" />
        </button>
        <button className="team-next w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300">
          <MaterialIcon icon="chevron_right" className="text-2xl" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 32 },
        }}
        navigation={{
          prevEl: ".team-prev",
          nextEl: ".team-next",
        }}
        pagination={{
          el: ".team-pagination",
          clickable: true,
          bulletClass: "team-dot",
          bulletActiveClass: "team-dot-active",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        grabCursor
        loop
        speed={600}
      >
        {teamMembers.map((member, i) => (
          <SwiperSlide key={member.name} className="h-auto max-h-[450px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            //   viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="h-full pb-2"
            >
              <div className="relative group rounded-3xl p-px bg-linear-to-b from-white/10 to-transparent hover:from-primary/40 hover:to-secondary/20 transition-all duration-500 h-full">
                <div className="absolute -inset-1 bg-linear-to-b from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/5 rounded-3xl blur-xl transition-all duration-500" />

                <div className="relative rounded-3xl bg-surface overflow-hidden h-full min-h-[420px] flex flex-col">
                  {/* Photo */}
                  <div className="relative w-full h-70 sm:h-75 lg:h-60 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/40 to-transparent" />

                    {/* Social links — float up on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <div className="flex justify-center gap-3">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                          >
                            <MaterialIcon
                              icon={socialIcons[platform] || "link"}
                              className="text-white text-lg"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="relative z-10 px-5 pb-5 flex-1 flex flex-col">
                    <h4 className="text-lg font-black tracking-tight leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-sm font-semibold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                      {member.role}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-lg bg-white/5 text-text-secondary border border-white/5 group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination dots */}
      <div className="team-pagination flex justify-center gap-2 mt-8" />
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="py-32 px-8 max-w-7xl mx-auto space-y-32">
      {/* Section Heading */}
      <SectionHeading
        badge="About Us"
        title="Who we are"
        subtitle="A passionate team of creators and engineers turning bold ideas into exceptional digital experiences."
      />

      {/* About Intro + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.15]">
            We are builders, thinkers, and{" "}
            <span className="text-secondary">problem solvers</span>.
          </h2>
          <p className="text-text-secondary text-xl leading-relaxed max-w-xl">
            Our team blends creative strategy with technical excellence to deliver
            products that don&apos;t just work&mdash;they inspire. We push boundaries to
            ensure your digital presence is a competitive advantage.
          </p>
          <div className="flex items-center gap-5 text-primary">
            <span className="w-16 h-0.5 bg-primary" />
            <span className="text-sm font-black uppercase tracking-[0.3em]">
              Our Methodology
            </span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {aboutStats.map((stat) => (
            <GlassCard
              key={stat.label}
              className={`p-10 flex flex-col justify-center items-center text-center ${
                stat.offsetTop ? "mt-12" : ""
              } ${stat.offsetBottom ? "-mt-12" : ""}`}
            >
              <AnimatedCounter value={stat.value} className={stat.color} />
              <span className="text-xs uppercase tracking-[0.2em] text-text-secondary font-bold">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </motion.div>
      </div>

      {/* Row 1: Left Image — Right Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/team/team_work.png"
              alt="Primelynx Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-secondary/20 blur-[80px] -z-10" />
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-primary/20 blur-[60px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-secondary to-indigo-500" />
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0 w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <MaterialIcon icon="satellite" className="text-secondary text-4xl" />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">Our Vision</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {missionVisionCards[1].description}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Row 2: Left Mission — Right Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-primary to-secondary" />
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <MaterialIcon icon="target" className="text-primary text-4xl" />
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">Our Mission</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {missionVisionCards[0].description}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/team/team_work.png"
              alt="Primelynx Team at Work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full bg-primary/20 blur-[80px] -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-secondary/20 blur-[60px] -z-10" />
        </motion.div>
      </div>

      {/* Our Team */}
      <div>
        <SectionHeading
          badge="Our Team"
          title="We work together as a team"
          subtitle="Meet the talented people behind Primelynx who bring ideas to life through collaboration, creativity, and technical expertise."
        />

        <TeamSlider />
      </div>
    </section>
  );
}
