---
name: "UNIR Design System"
description: "Sistema de Diseño y Guía de Estilos Visuales de UNIR"
colors:
  primary: "#0066CC"
  secondary: "#00A4E4"
  tertiary: "#F26522"
  dark: "#1A232F"
  light: "#F5F6F8"
  neutral: "#FFFFFF"
  text-dark: "#333333"
  border: "#E0E0E0"
typography:
  h1:
    fontFamily: "Open Sans"
    fontWeight: "800"
  h2:
    fontFamily: "Open Sans"
    fontWeight: "700"
  h3:
    fontFamily: "Open Sans"
    fontWeight: "600"
  body:
    fontFamily: "Open Sans"
    fontWeight: "400"
rounded:
  sm: "4px"
  md: "8px"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral}"
    fontWeight: "700"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
---
## Introducción

Este documento define los principios visuales y los componentes de la interfaz de usuario (UI) extraídos del ecosistema digital de UNIR, adaptado al estándar `design.md` para agentes de programación. Su propósito es servir como referencia única para diseñadores y desarrolladores, garantizando la coherencia visual en todos los activos digitales de la institución.

## Colores

La paleta de colores de UNIR transmite profesionalidad, confianza institucional y dinamismo. Se compone de tonos fríos como base principal, contrastados con un color de acento cálido para las llamadas a la acción (CTAs).

- **Primary (#0066CC):** Azul Institucional. Azul medio-oscuro, utilizado en encabezados, fondos de banners principales (con degradado) y texto destacado. Transmite rigor académico.
- **Secondary (#00A4E4):** Azul Claro / Cian. Utilizado en degradados junto al azul institucional, elementos de interfaz secundarios y botones de navegación.
- **Tertiary (#F26522):** Naranja Coral. Color cálido y vibrante. Se reserva exclusivamente para botones de alta prioridad (e.g., "Pide Información").
- **Dark (#1A232F):** Azul Marino / Pizarra. Utilizado en el pie de página (footer) y para el texto principal de lectura, asegurando un alto contraste.
- **Light (#F5F6F8):** Gris Perla. Utilizado para separar secciones de contenido en el layout, proporcionando descanso visual.
- **Neutral (#FFFFFF):** Blanco. Color de fondo principal para el cuerpo de la página y el interior de las tarjetas de contenido.

## Tipografía

La marca emplea una tipografía *sans-serif* (palo seco) moderna, limpia y altamente legible, optimizada para pantallas. Se recomienda utilizar fuentes como *Open Sans*, *Lato* o *Roboto*.

- **H1 (Títulos de Banner):** Peso *Bold* o *Extra Bold*, tamaño grande, color Blanco (sobre fondo azul).
- **H2 (Títulos de Sección):** Peso *Bold*, color Azul Institucional o Azul Marino.
- **H3 (Títulos de Tarjetas/Noticias):** Peso *Semi-Bold* o *Bold*, color Azul Institucional (actuando como enlace).
- **Cuerpo de Texto (Body):** Peso *Regular*, color Azul Marino o Gris Oscuro (#333333) para maximizar la legibilidad.

## Sistema de Cuadrícula y Layout (Grid)

El diseño se basa en una estructura organizada y modular, orientada a facilitar el escaneo de la información.

- **Estructura de Bloques:** La página se divide en franjas horizontales de ancho completo (full-width) que alternan colores de fondo (Blanco, Gris Perla, Azul, Oscuro) para delimitar las áreas temáticas.
- **Contenedor Central:** El contenido principal está restringido a un contenedor central de ancho máximo fijo (max-width), asegurando márgenes laterales consistentes en pantallas de escritorio.
- **Diseño Basado en Tarjetas (Cards):** La información se agrupa en módulos rectangulares (tarjetas) organizados en cuadrículas de 2, 3 o 4 columnas dependiendo de la sección (e.g., Noticias, Eventos, Facultades).

## Elementos de Interfaz (UI Components)

### Botones (Buttons)

Los botones presentan esquinas ligeramente redondeadas o rectas, manteniendo un aspecto formal.

- **Botón Primario (CTA):** Fondo Naranja Coral, texto Blanco en peso *Bold*.
- **Botón Secundario:** Fondo Azul Institucional o Azul Claro, texto Blanco.
- **Botón Terciario (Outline/Ghost):** Fondo transparente, borde visible, texto del color del borde.
- **Enlaces de Texto:** Color Azul Institucional, a menudo acompañados de un icono de flecha sutil >.

### Tarjetas de Contenido (Cards)

- **Fondo:** Generalmente Blanco, superpuestas sobre fondos ligeramente grises para generar contraste.
- **Estructura Interna:**
  - Imagen superior (proporción horizontal, aprox. 16:9).
  - Categoría o Etiqueta (texto pequeño superior).
  - Título de la noticia/evento (azul, destacado).
  - Breve extracto descriptivo (gris/negro, regular).
  - Enlace de "Leer más" o similar.
- **Bordes/Sombras:** Uso de bordes muy sutiles (#E0E0E0) o sombras directas suaves para separar la tarjeta del fondo.

### Navegación y Búsqueda

- **Barra de Navegación (Navbar):** Limpia, texto oscuro sobre fondo blanco, con el logotipo alineado a la izquierda y utilidades (búsqueda, login) a la derecha.
- **Buscador Principal:** Elemento prominente de forma rectangular, con fondo blanco, bordes finos, y divisiones internas para filtros (ej. tipo de estudio, área), finalizando en un botón de acción azul.

## Estilo Fotográfico e Iconografía

### Fotografía

Las imágenes deben reflejar el entorno educativo y profesional.

- **Temática:** Estudiantes y profesionales reales en entornos de estudio, oficinas o contextos laborales aplicados.
- **Iluminación:** Luz natural, brillante y optimista. Evitar filtros dramáticos o colores sobresaturados.
- **Composición:** Encuadres limpios con espacio negativo que permita la superposición de texto o gradientes cuando sea necesario.
- **Tratamiento Adicional:** En los banners principales, la imagen principal se integra a menudo sobre un fondo azul corporativo, a veces recortando al sujeto (silueteado) para que interactúe con el fondo.

### Iconografía

- **Estilo:** Lineal (Line-art), minimalista y de grosor uniforme.
- **Uso:** Se utilizan para ilustrar de forma esquemática las ventajas de la universidad, el acceso al campus y la información de contacto en el pie de página.
- **Color:** Se adaptan al fondo (ej. dorados/amarillos sobre fondo blanco en secciones de características, blancos sobre el fondo oscuro del footer).
