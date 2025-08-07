<template>
  <div class="home-page">
    <!-- Sección del video -->
    <div class="video-hero">
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/src/assets/xcretset02.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div class="video-overlay">
        <h1 class="hero-text">Bienvenido a Xcrett</h1>
      </div>
    </div>

    <!-- Texto sobre la empresa -->
    <section class="about-section">
      <h2>¿Quiénes somos?</h2>
      <p>
        En Xcrett organizamos eventos únicos y experiencias inolvidables. Nos apasiona crear momentos mágicos y conectar
        a personas a través de fiestas temáticas, música y diversión. Ya sea en la playa, en un local exclusivo o en una
        localización secreta... Xcrett es tu puerta a un mundo diferente.
      </p>
    </section>

    <!-- Galería de imágenes -->
    <section class="gallery-section">
      <h2>Momentos Xcrett</h2>
      <div class="gallery">
        <div 
          class="gallery-item" 
          v-for="(image, index) in images" 
          :key="index"
        >
          <img 
            :src="image" 
            :alt="`Foto Xcrett ${index + 1}`" 
            @error="onImageError" 
            @load="onImageLoad"
          />
          <div class="gallery-overlay">
            <div class="overlay-content">
              <div class="event-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <h3>Evento Xcrett</h3>
              <p>Momentos únicos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '@/assets/carrusel_01.png'
import img2 from '@/assets/carrusel_02.png'
import img3 from '@/assets/carrusel_03.png'

const images = [img1, img2, img3]

const onImageError = (event) => {
  console.error('Error cargando imagen:', event.target.src)
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  if (!parent.querySelector('.error-placeholder')) {
    const placeholder = document.createElement('div')
    placeholder.className = 'error-placeholder'
    placeholder.textContent = '❌ Error al cargar'
    placeholder.style.cssText = 'color: #f10017; font-size: 0.8rem; text-align: center; background: rgba(0,0,0,0.8); padding: 15px; border-radius: 10px;'
    parent.appendChild(placeholder)
  }
}

const onImageLoad = (event) => {
  const parent = event.target.parentElement
  const errorPlaceholder = parent.querySelector('.error-placeholder')
  if (errorPlaceholder) errorPlaceholder.remove()
}
</script>

<style scoped>
.home-page {
  font-family: 'Inter', sans-serif;
  background: #0a0a0a;
  color: white;
  min-height: 100vh;
}

.video-hero {
  position: relative;
  height: 70vh;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8) contrast(1.1);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 3rem 2rem;
}

.hero-text {
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(135deg, #ffffff 0%, #f10017 50%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(241, 0, 23, 0.3);
  letter-spacing: -0.02em;
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 20px rgba(241, 0, 23, 0.3));
  }
  to {
    filter: drop-shadow(0 0 30px rgba(241, 0, 23, 0.6));
  }
}

.about-section {
  padding: 6rem 2rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(45, 45, 45, 0.4) 100%);
  border-radius: 30px;
  margin-top: -3rem;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.about-section h2 {
  font-size: 3rem;
  color: #f10017;
  margin-bottom: 2rem;
  font-weight: 700;
  position: relative;
}

.about-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #f10017, transparent);
}

.about-section p {
  font-size: 1.3rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
}

.gallery-section {
  padding: 6rem 2rem 8rem;
  text-align: center;
}

.gallery-section h2 {
  font-size: 3rem;
  color: #f10017;
  margin-bottom: 3rem;
  font-weight: 700;
  position: relative;
}

.gallery-section h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #f10017, transparent);
}

/* Grid responsivo mejorado */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.gallery-item {
  height: 280px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.4),
    0 4px 12px rgba(241, 0, 23, 0.1);
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(241, 0, 23, 0.1) 0%,
    transparent 50%,
    rgba(241, 0, 23, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.gallery-item:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.6),
    0 10px 30px rgba(241, 0, 23, 0.3);
}

.gallery-item:hover::before {
  opacity: 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.5s ease;
  filter: brightness(0.9) contrast(1.1) saturate(1.1);
}

.gallery-item:hover img {
  transform: scale(1.15);
  filter: brightness(1.1) contrast(1.2) saturate(1.3);
}

/* Overlay elegante */
.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(241, 0, 23, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(241, 0, 23, 0.8) 100%
  );
  opacity: 0;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  z-index: 3;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
  transform: translateY(30px);
  transition: all 0.4s ease;
  padding: 1rem;
}

.gallery-item:hover .overlay-content {
  transform: translateY(0);
}

.event-number {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.overlay-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.overlay-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 300;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

/* Mensaje de error mejorado */
.error-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f10017;
  font-size: 1rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #f10017;
  z-index: 10;
}

/* Media queries mejoradas */
@media (max-width: 1200px) {
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }
  
  .gallery-item {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .hero-text {
    font-size: 2.5rem;
  }

  .about-section {
    padding: 4rem 2rem;
    margin-top: -2rem;
  }

  .about-section h2 {
    font-size: 2.2rem;
  }

  .about-section p {
    font-size: 1.1rem;
  }

  .gallery-section h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 0 0.5rem;
  }

  .gallery-item {
    height: 220px;
  }

  .gallery-item:hover {
    transform: translateY(-8px) scale(1.02);
  }

  .overlay-content h3 {
    font-size: 1.4rem;
  }

  .event-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .video-hero {
    height: 50vh;
  }

  .hero-text {
    font-size: 2rem;
  }

  .about-section {
    padding: 3rem 1.5rem;
    margin-top: -1rem;
  }

  .about-section h2 {
    font-size: 1.8rem;
  }

  .gallery-section {
    padding: 4rem 1rem 6rem;
  }

  .gallery-section h2 {
    font-size: 1.8rem;
  }

  .gallery {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0;
  }

  .gallery-item {
    height: 200px;
  }

  .gallery-item:hover {
    transform: translateY(-5px) scale(1.01);
  }

  .overlay-content h3 {
    font-size: 1.2rem;
  }

  .overlay-content p {
    font-size: 1rem;
  }

  .event-number {
    font-size: 2rem;
  }
}
</style>