const data = [
  {
    Pais: "México",
    Ciudad: "Cancún, Quintana Roo",
    Titulo: "Descubre el paraíso: Cancún",
    "Fecha Inicio": "2023/12/11",
    "Fecha Final": "2023/12/20",
    Duracion: 10,
    Aerolinea: "Aerolíneas Argentinas",
    Ida: "Lun 11 diciembre 09:30AM Buenos Aires|Directo",
    Regreso: "Mar 20 diciembre 18:15PM CUN|Directo",
    Alojamiento: [
      {
        Hotel: "The Westin Resort & Spa, Cancún",
        Estrellas: 5,
        Calificacion: 9.4,
        RegimenComidas: "All inclusive",
        Imagenes: [
          {
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/40/82/4b/aerial-view.jpg?w=700&h=-1&s=1",
          },
          {
            Url: "https://www.atrapalo.com.ar/hoteles/picture/l/23/4/0/265495606.jpg",
          },
          {
            Url: "https://www.beach.com/wp-content/uploads/2019/01/The_Westin_Resort_Spa_Cancu%CC%81n_20-1170x600.jpg",
          },
          {
            Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUalSCaD2wbxUWqtBAy_b8RkVhay6LJQ3FsA&usqp=CAU",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación Deluxe",
            Calificacion: 9.6,
            Url: "https://www.mexicodestinos.com/blog/wp-content/uploads/2012/09/nuevas-habitaciones.jpg",
          },
          {
            Tipo: "Suite Presidencial",
            Calificacion: 9.8,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/469614366.jpg?k=92212b99ef30e5531dd748972d0b8c6947c8d924267e7ec8f1d02d4f5b92f51b&o=&hp=1",
          },
        ],
      },
    ],
    Precio: 1699.0,
    Promocion: 1499.0,
    Moneda: "USD",
    Servicios: [
      {
        Detalle: "Transporte y asistencia",
        UrlImagen: "",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Tour a la Isla Mujeres",
        Url: "https://www.turismomexico.es/wp-content/uploads/2016/12/isla-mujeresmexico.jpg",
        Precio: 45.0,
        Incluido: false,
      },
      {
        Detalle: "Tour a la Zona Arqueológica de Tulum",
        Url: "https://descubro.mx/wp-content/uploads/2022/07/Zona-arqueologica-Tulum-1-1024x576.webp",
        Precio: 55.0,
        Incluido: false,
      },
      {
        Detalle: "Tour al cenote Samaal",
        Url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/93/db/b8.jpg",
        Precio: 20.0,
        Incluido: false,
      },
    ],
    Cupos: 50,
    Imagenes: [
      {
        Url: "https://clubsolaris.com/imgs/ES/lugares-que-debes-visitar-en-cancun/el-mirador-de-cancun.png",
      },
      {
        Url: "https://img.freepik.com/fotos-premium/vista-panoramica-aerea-playa-cancun-zona-hotelera-ciudad-mexico-paisaje-costa-caribena_130111-6527.jpg",
      },
      {
        Url: "https://thebettervacation.com/wp-content/uploads/2021/07/Cancun-Hotel-Zone.jpg",
      },
    ],
    Calificacion: 9.2,
    Comentarios: [
      {
        Usuario: "Laura Gómez",
        Testimonio:
          "Cancún es un destino increíble, las playas son paradisíacas y el hotel fue perfecto. El personal brinda un servicio excepcional. ¡Definitivamente regresaré!",
        Fecha: "2023/06/20",
      },
      {
        Usuario: "Pedro López",
        Testimonio:
          "Disfruté de cada momento en Cancún. Las excursiones a la Isla Mujeres y a Tulum fueron fascinantes. El hotel ofrece todas las comodidades necesarias para una estancia de lujo. ¡Lo recomiendo ampliamente!",
        Fecha: "2023/07/05",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada a Cancún, check-in en el hotel y tarde libre para relajarse en la playa.",
      },
      {
        Dia: 2,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales.",
      },
      {
        Dia: 3,
        Descripcion:
          "Sugerencia: Visita a la Zona Arqueológica de Tulum y maravíllese con las ruinas mayas junto al mar.",
      },
      {
        Dia: 4,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales.",
      },
      {
        Dia: 5,
        Descripcion:
          "Sugerencia: Exploración de los cenotes cercanos y snorkel en aguas cristalinas. Precio incluye almuerzo en el lugar.",
      },
      {
        Dia: 6,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales.",
      },
      {
        Dia: 7,
        Descripcion:
          "Sugerencia: Excursión a la Isla Mujeres, disfrute de las hermosas playas y actividades acuáticas.",
      },
      {
        Dia: 8,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales.",
      },
      {
        Dia: 9,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales.",
      },
      {
        Dia: 10,
        Descripcion: "Check-out del hotel y regreso a su lugar de origen.",
      },
    ],
  },

  {
    Pais: "Argentina",
    Ciudad: "Ushuaia, Tierra del Fuego",
    Titulo: "Explora el fin del mundo: Ushuaia",
    "Fecha Inicio": "2023/10/08",
    "Fecha Final": "2023/10/12",
    Duracion: 5,
    Aerolinea: "Aerolíneas Argentinas",
    Ida: "Dom 08 Octubre 08:30AM Buenos Aires|Directo",
    Regreso: "Jueves 12 Octubre 16:15PM USH|Directo",
    Alojamiento: [
      {
        Hotel: "Hotel Los Cauquenes Resort & Spa",
        Estrellas: 5,
        Calificacion: 9.6,
        RegimenComidas: "Media Pensión",
        Imagenes: [
          {
            Url: "https://media-cdn.tripadvisor.com/media/photo-s/29/37/ce/c2/hotel-exterior-night.jpg",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251646649.jpg?k=8887a66e4886fd3ac31d1095f964942563e9bc6c1e9b4aa7a68f19f662ac163f&o=&hp=1",
          },
          {
            Url: "https://media.staticontent.com/media/pictures/8d362909-3b87-4269-bdb6-cf659f442bbf",
          },
          {
            Url: "https://www.loscauquenes.com/files-sbbasic/sr_loscauquenesnew_ar/cf_2020_007_cauquenes_5d4-4664.jpg?w=720&h=720",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación Deluxe",
            Calificacion: 9.5,
            Url: "https://www.loscauquenes.com/files-sbbasic/sr_loscauquenesnew_ar/habitacion-standard-cuadruple-01.jpg?undefined",
          },
          {
            Tipo: "Suite Ejecutiva",
            Calificacion: 9.7,
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/e6/6e/ed/los-cauquenes-resort.jpg?w=700&h=-1&s=1",
          },
        ],
      },
    ],
    Precio: 1099.0,
    Promocion: 999.0,
    Moneda: "USD",
    Servicios: [
      {
        Detalle: "Transporte y asistencia",
        UrlImagen: "",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Excursión al Parque Nacional Tierra del Fuego",
        Url: "https://www.brasileirosemushuaia.com.br/media/catalog/product/cache/1/image/700x460/17f82f742ffe127f42dca9de82fb58b1/i/m/img_7942_1_.jpg",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Navegación por el Canal Beagle",
        Url: "https://www.serargentino.com/public/images/2020/06/canal-del-Beagle-773x458.jpeg",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Día en cerro Castor",
        Url: "https://economixtv.com/wp-content/uploads/2021/09/Foto-Castor-4-scaled.jpg",
        Precio: 80.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en el Tren del Fin del Mundo",
        Url: "https://hablemosdeargentina.com/wp-content/uploads/2018/04/Tren-del-Fin-del-Mundo.jpg",
        Precio: 68.0,
        Incluido: false,
      },
    ],
    Cupos: 20,
    Imagenes: [
      {
        Url: "https://cnnespanol.cnn.com/wp-content/uploads/2018/02/patagonia-argentina-ushuaia-2.jpg?quality=100&strip=info&w=940&h=530&crop=1",
      },
      {
        Url: "https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-ushaia/ushuaia-694x390.jpg.image.694.390.medium.jpg",
      },
      {
        Url: "hhttps://www.howlanders.com/blog/wp-content/uploads/2020/12/ushuaia-fin-del-mundo.jpg",
      },
    ],
    Calificacion: 9.3,
    Comentarios: [
      {
        Usuario: "Carla Alcorta",
        Testimonio:
          "Ushuaia es un lugar mágico, rodeado de belleza natural. El hotel ofrece una experiencia increíble, con vistas impresionantes y un servicio de primera. ¡Volveré sin dudarlo!",
        Fecha: "2023/06/12",
      },
      {
        Usuario: "Martín Sánchez",
        Testimonio:
          "Explorar el Parque Nacional Tierra del Fuego y navegar por el Canal Beagle fue asombroso. El hotel superó todas mis expectativas, definitivamente lo recomendaré a mis amigos.",
        Fecha: "2023/07/03",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada a Ushuaia, check-in en el hotel y tarde libre para disfrutar de las vistas panorámicas.",
      },
      {
        Dia: 2,
        Descripcion:
          "Excursión al Parque Nacional Tierra del Fuego y maravíllese con la naturaleza virgen.",
      },
      {
        Dia: 3,
        Descripcion:
          "Navegación por el Canal Beagle y avistamiento de fauna marina.",
      },
      {
        Dia: 4,
        Descripcion:
          "DIA LIBRE. Sugerencia: Pase el día en cerro Castor, areas para snowboard y sky. Pruebe el tradicional cordero patagónico. O disfrute de un paseo por el Tren del Fin del Mundo.",
      },
      {
        Dia: 5,
        Descripcion: "Check-out del hotel y regreso a su lugar de origen.",
      },
    ],
  },
];

export default data;
