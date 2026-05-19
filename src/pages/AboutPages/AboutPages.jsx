import React from 'react'
import './AboutPages.scss' // SCSS faylini ulaymiz

const AboutPages = () => {
  return (
    <div className="about">
      {/* 1. Qutlov / Hero qismi */}
      <section className="about__hero">
        <h1 className="about__title">Biz haqimizda bilib oling</h1>
        <p className="about__subtitle">
          Biz zamonaviy texnologiyalar va mukammal frontend yechimlari orqali foydalanuvchilarga eng qulay raqamli mahsulotlarni taqdim etamiz.
        </p>
      </section>

      {/* 2. Ma'lumot kartalari (Afzalliklarimiz) */}
      <section className="about__grid">
        <div className="about__card">
          <div className="about__card-icon">🚀</div>
          <h3 className="about__card-title">Tezkorlik</h3>
          <p className="about__card-text">
            Bizning veb-ilovalarimiz eng so'nggi texnologiyalar (React, Vite) yordamida juda tez yuklanadi.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-icon">🎨</div>
          <h3 className="about__card-title">Zamonaviy Dizayn</h3>
          <p className="about__card-text">
            SCSS va zamonaviy UI/UX qoidalari asosida ko'zga yoqimli va moslashuvchan interfeyslar yaratamiz.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-icon">💻</div>
          <h3 className="about__card-title">Clean Code</h3>
          <p className="about__card-text">
            Kodni har doim tushunarli, komponentlarga bo'lingan va kelajakda rivojlantirishga oson qilib yozamiz.
          </p>
        </div>
      </section>

      {/* 3. Statisika / Natijalar qismi */}
      <section className="about__stats">
        <div className="about__stat-item">
          <h2 className="about__stat-number">50+</h2>
          <p className="about__stat-label">Yakunlangan Loyihalar</p>
        </div>
        <div className="about__stat-item">
          <h2 className="about__stat-number">20+</h2>
          <p className="about__stat-label">Mamnun Mijozlar</p>
        </div>
        <div className="about__stat-item">
          <h2 className="about__stat-number">5+</h2>
          <p className="about__stat-label">Yillik Tajriba</p>
        </div>
      </section>
    </div>
  )
}

export default AboutPages