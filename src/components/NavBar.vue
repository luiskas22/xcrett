<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark py-4">
    <div class="container">
      <!-- Logo a la izquierda -->
      <router-link to="/" class="navbar-brand">
        <img src="/src/img/logoBlack.png" alt="Xcrett logo" height="300" class="logo-img" />
      </router-link>

      <!-- Hamburger Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú centrado -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto gap-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-danger fw-bold" active-class="active-link">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/servicios" class="nav-link text-danger fw-bold" active-class="active-link">
              Servicios
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/quienes-somos" class="nav-link text-danger fw-bold" active-class="active-link">
              Quiénes somos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/renting" class="nav-link text-danger fw-bold" active-class="active-link">
              Renting
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link text-danger fw-bold" active-class="active-link">
              Contacto
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Asegurar que el navbar esté perfectamente centrado en desktop */
@media (min-width: 768px) {
  .navbar .container {
    display: flex;
    align-items: center;
    position: relative;
    font-size: large;
  }

  .navbar-brand {
    position: absolute;
    left: 0;
  }

  .navbar-collapse {
    flex-grow: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .navbar-nav {
    margin: 0 auto;
  }
}

/* Estilos para mobile */
@media (max-width: 767.98px) {
  .navbar-nav {
    text-align: center;
    padding-top: 1rem;
  }

  .navbar-nav .nav-item {
    margin: 0.5rem 0;
  }

  .logo-img {
    height: 120px;
    /* Logo más grande en mobile - aumentado de 100px a 120px */
  }

  /* Aumentar el padding del navbar en mobile para acomodar el logo grande */
  .navbar {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
}

.active-link {
  border-bottom: 2px solid #f10017;
  /* Matches rgb(241, 0, 23) */
}

.logo-img {
  transition: transform 0.3s ease;
  max-height: 300px;
  /* Aumentar el max-height para permitir logos más grandes */
  width: auto;
}

/* Logo más grande en desktop */
@media (min-width: 768px) {
  .logo-img {
    height: 300px;
    /* Logo más grande en desktop - aumentado de 200px a 250px */
  }

  /* Aumentar el padding del navbar en desktop para acomodar el logo grande */
  .navbar {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}

.logo-img:hover {
  transform: scale(1.05);
}

/* Mejorar la interactividad de los enlaces */
.nav-link {
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  transform: translateY(-2px);
}

/* Animación suave para el collapse */
.navbar-collapse {
  transition: all 0.3s ease;
}

/* Espaciado mejorado para los elementos del menú */
.navbar-nav .gap-4 {
  gap: 1.5rem !important;
}

@media (max-width: 767.98px) {
  .navbar-nav .gap-4 {
    gap: 0.5rem !important;
  }
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 3.5rem !important;
}
</style>