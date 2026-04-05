"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { GlassCard, MaterialIcon } from "@/components/ui";
import { testimonials } from "@/lib/constants";
import { motion } from "framer-motion";

function StarRating() {
  return (
    <div className="flex gap-1 text-secondary mb-8">
      {[...Array(5)].map((_, i) => (
        <MaterialIcon key={i} icon="star" className="text-2xl" filled />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-40 px-8 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-black tracking-tight mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Voices of Success
        </motion.h2>

        <Swiper
        
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          grabCursor
          speed={600}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            el: ".testimonials-pagination",
            clickable: true,
            bulletClass: "team-dot",
            bulletActiveClass: "team-dot-active",
          }}
          className="pb-2"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name} className="h-auto!">
              <div className="h-full py-2 ">
                <GlassCard className="p-12 flex flex-col justify-between h-full">
                  <div>
                    <StarRating />
                    <p className="text-xl font-medium italic mb-12 leading-relaxed text-text-primary">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="rounded-full border-2 max-h-[56px] object-cover border-primary/20"
                    />
                    <div>
                      <p className="font-black text-text-primary">{testimonial.name}</p>
                      <p className="text-xs text-text-secondary uppercase tracking-widest font-black">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials-pagination flex justify-center gap-2 mt-10" />
      </div>
    </section>
  );
}
