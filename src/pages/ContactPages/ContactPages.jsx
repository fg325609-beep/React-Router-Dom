import React from 'react'
import './ContactPages.scss' // SCSS faylini ulaymiz

const ContactPages = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Xabaringiz muvaffaqiyatli yuborildi! (Simulyatsiya)")
  }

  return (
    <div className="contact">
      {/* Sarlavha qismi */}
      <section className="contact__hero">
        <h1 className="contact__title">Biz bilan bog'laning</h1>
        <p className="contact__subtitle">
          Savollaringiz yoki takliflaringiz bormi? Quyidagi forma orqali bizga xabar qoldiring yoki to'g'ridan-to'g'ri aloqaga chiqing.
        </p>
      </section>

      {/* Asosiy qism: Forma va Ma'lumotlar */}
      <div className="contact__content">
        
        {/* Chap tomon: Kontakt ma'lumotlari */}
        <div className="contact__info">
          <div className="contact__info-item">
            <span className="contact__info-icon">📍</span>
            <div>
              <h3>Manzilimiz</h3>
              <p>Toshkent shahri, Chilonzor tumani</p>
            </div>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-icon">📞</span>
            <div>
              <h3>Telefon</h3>
              <p>+998 (90) 123-45-67</p>
            </div>
          </div>

          <div className="contact__info-item">
            <span className="contact__info-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

        {/* O'ng tomon: Aloqa formasi */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name">Ismingiz</label>
            <input type="text" id="name" placeholder="Ismingizni kiriting" required />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email">Email manzilingiz</label>
            <input type="email" id="email" placeholder="Emailingizni kiriting" required />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message">Xabaringiz</label>
            <textarea id="message" rows="5" placeholder="Xabaringizni yozing..." required></textarea>
          </div>

          {/* Headerdagi tugma dizayni bilan bir xil uslubda */}
          <button type="submit" className="contact__form-btn">Xabarni yuborish</button>
        </form>

      </div>
    </div>
  )
}

export default ContactPages