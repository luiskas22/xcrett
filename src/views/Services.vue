<template>
    <div class="services">
        <div class="hero-section">
            <h1 class="main-title">Nuestros Servicios</h1>
            <p class="hero-subtitle">Creamos experiencias inolvidables en los mejores espacios</p>
        </div>
        
        <div class="services-grid">
            <div v-for="service in services" :key="service.id" class="service-card">
                <div class="service-icon">
                    <i :class="service.icon"></i>
                </div>
                <div class="service-content">
                    <h2>{{ service.name }}</h2>
                    <p>{{ service.description }}</p>
                    <ul class="service-features">
                        <li v-for="feature in service.features" :key="feature">
                            <i class="fas fa-check"></i>
                            {{ feature }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="cta-section">
            <h2>¿Listo para tu próximo evento?</h2>
            <p>Contactanos y hagamos realidad la fiesta de tus sueños</p>
            <router-link to="/contacto" class="cta-button">
                Solicitar Cotización
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                { 
                    id: 1, 
                    name: 'Eventos en Villas Exclusivas', 
                    description: 'Organizamos fiestas privadas en las villas más exclusivas con todos los servicios incluidos.',
                    icon: 'fas fa-home',
                    features: [
                        'Selección de villas premium',
                        'Decoración personalizada',
                        'Seguridad privada',
                        'Servicio de limpieza incluido'
                    ]
                },
                { 
                    id: 2, 
                    name: 'Fiestas en Clubes VIP', 
                    description: 'Acceso a los mejores clubes con reservas VIP y servicios premium para tu grupo.',
                    icon: 'fas fa-glass-cheers',
                    features: [
                        'Reservas en clubes exclusivos',
                        'Mesas VIP garantizadas',
                        'Lista de invitados personalizada',
                        'Entrada prioritaria'
                    ]
                },
                { 
                    id: 3, 
                    name: 'Catering y Bebidas Premium', 
                    description: 'Servicio completo de gastronomía y bar con las mejores bebidas y platos gourmet.',
                    icon: 'fas fa-utensils',
                    features: [
                        'Menú gourmet personalizado',
                        'Barra libre premium',
                        'Chef profesional',
                        'Servicio de meseros'
                    ]
                },
                { 
                    id: 4, 
                    name: 'DJ y Entretenimiento', 
                    description: 'Los mejores DJs y sistemas de sonido profesional para mantener la fiesta toda la noche.',
                    icon: 'fas fa-music',
                    features: [
                        'DJs reconocidos',
                        'Equipo de sonido profesional',
                        'Iluminación especializada',
                        'Playlist personalizada'
                    ]
                },
                { 
                    id: 5, 
                    name: 'Palcos y Espacios VIP', 
                    description: 'Reserva de palcos exclusivos y áreas VIP para una experiencia única y privada.',
                    icon: 'fas fa-crown',
                    features: [
                        'Palcos con vista privilegiada',
                        'Servicio personalizado',
                        'Privacidad garantizada',
                        'Mobiliario de lujo'
                    ]
                },
                { 
                    id: 6, 
                    name: 'Organización Integral', 
                    description: 'Nos encargamos de cada detalle para que solo tengas que disfrutar de tu evento.',
                    icon: 'fas fa-calendar-check',
                    features: [
                        'Planificación completa',
                        'Coordinación el día del evento',
                        'Proveedores verificados',
                        'Atención 24/7'
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.services {
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
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
    font-size: 1.3rem;
    opacity: 0.95;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.service-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #f10017, #ff4757);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.service-card:hover::before {
    transform: scaleX(1);
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(241, 0, 23, 0.2);
    border-color: rgba(241, 0, 23, 0.3);
}

.service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #f10017, #ff4757);
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: white;
}

.service-content h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    text-align: center;
    color: #ffffff;
}

.service-content p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
}

.service-features {
    list-style: none;
    padding: 0;
    margin: 0;
}

.service-features li {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
}

.service-features i {
    color: #f10017;
    margin-right: 0.75rem;
    font-size: 0.9rem;
}

.cta-section {
    text-align: center;
    padding: 4rem 2rem;
    margin-top: 4rem;
}

.cta-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #ffffff;
}

.cta-section p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
}

.cta-button {
    display: inline-block;
    background: linear-gradient(45deg, #f10017, #ff4757);
    color: white;
    padding: 1rem 2.5rem;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(241, 0, 23, 0.3);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(241, 0, 23, 0.4);
    color: white;
    text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
    .main-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        padding: 0 1rem;
    }
    
    .service-card {
        padding: 1.5rem;
    }
    
    .hero-section {
        padding: 3rem 1rem 1.5rem;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 2rem;
    }
    
    .service-content h2 {
        font-size: 1.5rem;
    }
    
    .cta-section h2 {
        font-size: 2rem;
    }
}
</style>