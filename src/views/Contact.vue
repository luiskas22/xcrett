<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="main-title">¿En qué te podemos ayudar?</h1>
      <p class="hero-subtitle">
        Si tienes alguna duda, sugerencia o simplemente quieres saludarnos, rellena el formulario y nos pondremos en
        contacto contigo lo antes posible.
      </p>
    </div>

    <!-- Formulario y información de contacto -->
    <div class="contact-container">
      <div class="contact-grid">

        <!-- Formulario -->
        <div class="form-section">
          <div class="form-card">
            <h2 class="form-title">Envíanos un mensaje</h2>
            <form @submit.prevent="submitForm" ref="contactForm" class="contact-form">
              <div class="input-group">
                <label for="name" class="form-label">Nombre</label>
                <input name="name" id="name" v-model="form.name" type="text" required placeholder="Tu nombre"
                  class="form-input" />
              </div>

              <div class="input-group">
                <label for="email" class="form-label">Email</label>
                <input name="email" id="email" v-model="form.email" type="email" required placeholder="tu@email.com"
                  class="form-input" />
              </div>

              <div class="input-group">
                <label for="message" class="form-label">Mensaje</label>
                <textarea name="message" id="message" v-model="form.message" rows="5" required
                  placeholder="Escribe tu mensaje aquí..." class="form-textarea"></textarea>
              </div>

              <!-- Campo oculto con la hora -->
              <input type="hidden" name="time" :value="currentTime" />

              <button type="submit" class="submit-btn" :class="{ 'loading': isSubmitting }">
                <span v-if="!isSubmitting">Enviar Mensaje</span>
                <span v-else>Enviando...</span>
              </button>

              <div v-if="submitted" class="success-message">
                <i class="fas fa-check-circle"></i>
                ¡Gracias por contactarnos! Te responderemos pronto.
              </div>
            </form>
          </div>
        </div>

        <!-- Información de contacto -->
        <div class="info-section">
          <div class="info-card">
            <h2 class="info-title">Información de contacto</h2>

            <div class="contact-methods">
              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">Teléfono</span>
                  <a href="tel:+34662669632" class="contact-value">+34 662 66 96 32</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">Email</span>
                  <a href="mailto:xcrettset@gmail.com" class="contact-value">xcrettset@gmail.com</a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="contact-details">
                  <span class="contact-label">Instagram</span>
                  <a href="https://www.instagram.com/xcretset" target="_blank" class="contact-value">@xcretset</a>
                </div>
              </div>
            </div>

            <div class="social-message">
              <p>También puedes seguirnos en nuestras redes sociales para estar al tanto de los próximos eventos 🎉</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false,
      isSubmitting: false,
      currentTime: new Date().toLocaleString()
    }
  },
  methods: {
    submitForm() {
      this.isSubmitting = true;

      emailjs.sendForm(
        'service_nf3lpk2',
        'template_algndyw',
        this.$refs.contactForm,
        'V3Vkv0Ia4f5s_RVwd'
      ).then(() => {
        this.submitted = true
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
        this.isSubmitting = false

        // Ocultar el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.submitted = false
        }, 5000)
      }).catch((error) => {
        console.error('Error al enviar el mensaje:', error)
        alert('Hubo un error al enviar tu mensaje. Intenta más tarde.')
        this.isSubmitting = false
      })
    }
  }
}
</script>

<style scoped>
.contact-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  min-height: 100vh;
  color: #ffffff;
}

.hero-section {
  text-align: center;
  padding: 4rem 2rem 2rem;
  background: linear-gradient(45deg, #f10017, #d40015);
  margin-bottom: 4rem;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 300;
  line-height: 1.6;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.form-card,
.info-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
}

.form-card::before,
.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #f10017, #ff4757);
}

.form-title,
.info-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #ffffff;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f10017;
  font-size: 1rem;
}

.form-input,
.form-textarea {
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #f10017;
  box-shadow: 0 0 20px rgba(241, 0, 23, 0.2);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-textarea {
  resize: none;
  font-family: inherit;
}

.submit-btn {
  background: linear-gradient(45deg, #f10017, #ff4757);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(241, 0, 23, 0.3);
  margin-top: 1rem;
}

.submit-btn:hover:not(.loading) {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(241, 0, 23, 0.4);
}

.submit-btn.loading {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 1rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(10px);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #f10017, #ff4757);
  border-radius: 50%;
  font-size: 1.2rem;
  color: white;
}

.contact-details {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.contact-value {
  font-size: 1.1rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #f10017;
}

.social-message {
  background: rgba(241, 0, 23, 0.1);
  border: 1px solid rgba(241, 0, 23, 0.2);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
}

.social-message p {
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-card,
  .info-card {
    padding: 2rem;
  }

  .hero-section {
    padding: 3rem 1rem 1.5rem;
  }

  .contact-container {
    padding: 0 1rem 4rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }

  .form-title,
  .info-title {
    font-size: 1.5rem;
  }

  .form-card,
  .info-card {
    padding: 1.5rem;
  }

  .contact-item {
    padding: 0.75rem;
  }

  .contact-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>