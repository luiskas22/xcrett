<template>
  <footer class="footer bg-dark text-white py-5 mt-auto">
    <div class="container">
      <div class="row gy-4">
        <!-- Logo y descripción -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-brand mb-3">
            <img
              src="/src/img/logoBlack.png"
              alt="Xcrett logo"
              height="80"
              class="footer-logo mb-3"
            />
            <h5 class="text-danger fw-bold mb-3">Xcrett</h5>
            <p class="text-muted">
              Soluciones innovadoras y servicios de calidad para impulsar tu negocio hacia el éxito.
            </p>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-danger fw-bold mb-3">Enlaces</h6>
          <ul class="list-unstyled footer-links">
            <li class="mb-2">
              <router-link to="/" class="text-muted footer-link">
                Inicio
              </router-link>
            </li>
            <li class="mb-2">
              <router-link to="/servicios" class="text-muted footer-link">
                Servicios
              </router-link>
            </li>
            <li class="mb-2">
              <router-link to="/quienes-somos" class="text-muted footer-link">
                Quiénes somos
              </router-link>
            </li>
            <li class="mb-2">
              <router-link to="/contacto" class="text-muted footer-link">
                Contacto
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Servicios -->
        <div class="col-lg-3 col-md-6">
          <h6 class="text-danger fw-bold mb-3">Servicios</h6>
          <ul class="list-unstyled footer-links">
            <li class="mb-2">
              <a href="#" class="text-muted footer-link">
                Consultoría
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-muted footer-link">
                Desarrollo Web
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-muted footer-link">
                Marketing Digital
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-muted footer-link">
                Soporte Técnico
              </a>
            </li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="col-lg-3 col-md-6">
          <h6 class="text-danger fw-bold mb-3">Contacto</h6>
          <div class="footer-contact">
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-envelope-fill text-danger me-2"></i>
              <a href="mailto:info@xcrett.com" class="text-muted footer-link">
                info@xcrett.com
              </a>
            </div>
            <div class="d-flex align-items-center mb-2">
              <i class="bi bi-telephone-fill text-danger me-2"></i>
              <a href="tel:+34123456789" class="text-muted footer-link">
                +34 123 456 789
              </a>
            </div>
            <div class="d-flex align-items-center mb-3">
              <i class="bi bi-geo-alt-fill text-danger me-2"></i>
              <span class="text-muted">Madrid, España</span>
            </div>
            
            <!-- Redes sociales -->
            <div class="social-links">
              <a href="#" class="social-link me-3">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="social-link me-3">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="social-link me-3">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-4 border-secondary">

      <!-- Copyright -->
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="text-muted mb-0 small">
            © {{ currentYear }} Xcrett. Todos los derechos reservados.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="footer-legal">
            <a href="#" class="text-muted footer-link small me-3">Política de Privacidad</a>
            <a href="#" class="text-muted footer-link small me-3">Términos de Uso</a>
            <a href="#" class="text-muted footer-link small">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #212529 !important;
}

.footer-logo {
  transition: transform 0.3s ease;
  filter: brightness(1.2);
}

.footer-logo:hover {
  transform: scale(1.05);
}

.footer-link {
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link:hover {
  color: #f10017 !important;
  transform: translateX(5px);
}

.footer-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #f10017;
  transition: width 0.3s ease;
}

.footer-link:hover::before {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #343a40;
  color: #6c757d;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.social-link:hover {
  background-color: #f10017;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(241, 0, 23, 0.3);
}

.footer-contact i {
  font-size: 1.1rem;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .footer {
    text-align: center;
  }
  
  .col-md-6.text-md-end {
    text-align: center !important;
    margin-top: 1rem;
  }
  
  .footer-legal {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .social-links {
    justify-content: center;
  }
}

/* Border and divider styling */
.border-secondary {
  border-color: #495057 !important;
}

/* Ensure footer stays at bottom */
.footer {
  margin-top: auto;
}

/* Subtle animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer > .container > .row > .col-lg-4,
.footer > .container > .row > .col-lg-2,
.footer > .container > .row > .col-lg-3 {
  animation: fadeInUp 0.6s ease forwards;
}

.footer > .container > .row > .col-lg-4 {
  animation-delay: 0.1s;
}

.footer > .container > .row > .col-lg-2 {
  animation-delay: 0.2s;
}

.footer > .container > .row > .col-lg-3:nth-child(3) {
  animation-delay: 0.3s;
}

.footer > .container > .row > .col-lg-3:nth-child(4) {
  animation-delay: 0.4s;
}
</style>