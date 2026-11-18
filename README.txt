Este proyecto automatiza la elaboración de fichas territoriales para los establecimientos de larga estadía para adultos mayores (ELEAM) autorizados en la región Metropolitana, junto con el proyecto Condominios de Viviendas Tuteladas. A partir del listado oficial de establecimientos, el sistema geocodifica cada dirección, calcula el área caminable en 15 minutos y caracteriza el entorno inmediato en términos de acceso a servicios, transporte público y áreas verdes.

Su propósito es dejar un registro de consulta para investigadores, que complemente el análisis del Censo 2024 con una caracterización del entorno inmediato de cada establecimiento.

Para la organización de cada ficha se observa que:
Se tienen cinco dimensiones: Población, equipamiento (servicios cercanos), transporte público, espacio público e ingresos (municipales).
Cada servicio se clasifica en una de 9 categorías: Salud, Educación, Cultura, Deporte, Esparcimiento (plazas y parques), Culto, Seguridad, Servicios (bancos, correo, municipalidad) y Social (sedes vecinales, centros comunitarios).
Se cuenta en cuántas de esas 9 categorías hay al menos un servicio.
Puntaje = categorías presentes ÷ 9 × 100, sin decimales (se trunca).
solo puede dar 0, 11, 22, 33, 44, 55, 66, 77, 88 o 100
Limitaciones que conviene saber

Solo mide presencia, no cantidad ni cercanía. Una categoría con 1 servicio a 800 m pesa lo mismo que una con 40 a 100 m.
Comercio y Transporte no entran en el puntaje.
En pueblos chicos puede faltar información, y eso baja el puntaje aunque los servicios existan.
Puntaje de entorno: porcentaje de categorías de equipamiento (de 9) con al menos un servicio dentro de la isocrona peatonal de 15 minutos

Entorno a 15 minutos: isocrona peatonal de OpenRouteService + servicios de OpenStreetMap dentro de esa área.
Distancias en línea recta; el tiempo se estima a 75 m/min (4,5 km/h).
El censo agrupa las edades en 0-17, 18-59 y 60+, por eso el índice usa mayores de 60 / menores de 18.

Para los ELEAM, solo se consideran:
Nombre, dirección, comuna, número de camas y año de autorización.
Mapa con la isócrona peatonal de 15 min.
Inventario de equipamientos del área: salud, comercio, educación, cultura, deporte, culto, seguridad, servicios, sociales y transporte, con distancia y tiempo a pie.
Puntaje de entorno (0–100): categorías con presencia dentro de los 15 min sobre el total de categorías evaluadas.
Estación de Metro/Tren más cercana (distancia y tiempo a pie). Si no se encuentra, la ficha lo indica.
Entorno y áreas verdes: lista de áreas verdes cercanas.