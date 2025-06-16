# E-commerce React App

Una aplicación de comercio electrónico moderna construida con React, Firebase y React Router.

## 🚀 Características

- **Catálogo de productos** con filtrado por categorías
- **Carrito de compras** persistente con localStorage
- **Sistema de checkout** integrado con Firebase
- **Navegación** con React Router
- **Diseño responsivo** con CSS personalizado
- **Gestión de estado** con Context API

## 🛠️ Tecnologías

- **Frontend**: React 18, React Router DOM
- **Backend**: Firebase Firestore
- **Estilos**: CSS3 con variables personalizadas
- **Build Tool**: Vite
- **Linting**: ESLint

## 🔧 Instalación

Clona el repositorio

- git clone "https://github.com/papudepapus/proyecto-ecommerce-1.git"
- cd proyecto-ecommerce-1

- npm install

## 🛠️ Configura Firebase

- Crea un proyecto en Firebase Console
- Crea un archivo .env con tus credenciales:

- VITE_FIREBASE_API_KEY=tu_api_key
- VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
- VITE_FIREBASE_PROJECT_ID=tu_project_id
- VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
- VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
- VITE_FIREBASE_APP_ID=tu_app_id

## 🚀 Inicia el servidor de desarrollo

- npm run dev

## 🗄️ Base de Datos

La aplicación utiliza Firebase Firestore con las siguientes colecciones:

- productos: Catálogo de productos
- pedidos: Órdenes de compra

{  
 id: "string",  
 title: "string",  
 description: "string",  
 price: number,  
 image: "string",  
 category: "string",  
 stock: number  
}

## 🛒 Funcionalidades del Carrito

El sistema de carrito incluye:

- Agregar productos con cantidad específica
- Persistencia en localStorage
- Cálculo automático de totales
- Vaciar carrito completo

## 🎨 Sistema de Estilos

Utiliza CSS personalizado con:

- Variables CSS para colores consistentes
- Diseño responsivo
- Componentes estilizados individualmente

## 📱 Rutas de la Aplicación

/ - Página principal (catálogo)
/productos - Catálogo completo
/productos/:category - Filtrado por categoría
/item/:id - Detalle del producto
/carrito - Vista del carrito
/checkout - Proceso de compra
/nosotros - Información de la empresa
/contact - Formulario de contacto

## 🚀 Scripts Disponibles

- npm run dev # Servidor de desarrollo
- npm run build # Build de producción
- npm run preview # Preview del build
- npm run lint # Linting con ESLint

## 🤝 Contribuir

Fork el proyecto

- Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
- Commit tus cambios (git commit -m 'Add some AmazingFeature')
- Push a la rama (git push origin feature/AmazingFeature)
- Abre un Pull Request

📄 Licencia

- Este proyecto está bajo la Licencia MIT
