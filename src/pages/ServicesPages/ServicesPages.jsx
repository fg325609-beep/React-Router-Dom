import React from 'react'
import './ServicesPages.scss' // SCSS faylini ulaymiz

const ServicesPages = () => {
  // Xizmatlar ro'yxati (Kelajakda ma'lumotlarni ko'paytirish oson bo'lishi uchun array ko'rinishida)
  const servicesData = [
    {
      id: 1,
      icon: "🌐",
      title: "Veb Dasturlash",
      description: "React va zamonaviy texnologiyalar yordamida har qanday murakkablikdagi tezkor, xavfsiz va mukammal veb-saytlarni yaratamiz."
    },
    {
      id: 2,
      icon: "📱",
      title: "Responsive UI/UX",
      description: "Saytingiz barcha turdagi qurilmalarda (mobil telefonlar, planshetlar va kompyuterlar) bir xil chiroyli va qulay ko'rinishini ta'minlaymiz."
    },
    {
      id: 3,
      icon: "⚡",
      title: "Tezlikni Optimallashtirish",
      description: "Mavjud loyihalaringiz yuklanish tezligini oshirish, kodlarni tozalash va SEO qoidalariga moslashtirish xizmatlarini taklif etamiz."
    }
  ]

  return (
    <div className="services">
      {/* Sarlavha qismi */}
      <section className="services__hero">
        <h1 className="services__title">Bizning Xizmatlarimiz</h1>
        <p className="services__subtitle">
          Biz sizning biznesingizni raqamli dunyoda rivojlanishi uchun eng zamonaviy va sifatli frontend yechimlarini taklif qilamiz.
        </p>
      </section>

      {/* Xizmatlar ro'yxati (Grid) */}
      <div className="services__grid">
        {servicesData.map((service) => (
          <div key={service.id} className="services__card">
            <div className="services__card-icon">{service.icon}</div>
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__card-text">{service.description}</p>
            <button type="button" className="services__card-btn">Batafsil</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesPages