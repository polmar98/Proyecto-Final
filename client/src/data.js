const data = [
    {
    "Id":1,
    "Pais": "México",
    "Ciudad": "Cancún, Quintana Roo",
    "Titulo": "Descubre el paraíso: Cancún",
    "FechaInicio": "2023/12/11",
    "FechaFinal": "2023/12/20",
    "Duracion": 10,
    "Aerolinea": "Aerolíneas Argentinas",
    "Ida": "Lun 11 diciembre 09:30AM Buenos Aires|Directo",
    "Regreso": "Mar 20 diciembre 18:15PM CUN|Directo",
    "Alojamiento":  [
      {
        "Hotel": "The Westin Resort & Spa, Cancún",
        "Estrellas": 5,
        "Calificacion": 9.4,
        "RegimenComidas": "All inclusive",
        "Imagenes": [
          {"Url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/40/82/4b/aerial-view.jpg?w=700&h=-1&s=1"},
          {"Url": "https://www.atrapalo.com.ar/hoteles/picture/l/23/4/0/265495606.jpg"},
          {"Url": "https://www.beach.com/wp-content/uploads/2019/01/The_Westin_Resort_Spa_Cancu%CC%81n_20-1170x600.jpg"},
          {"Url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUalSCaD2wbxUWqtBAy_b8RkVhay6LJQ3FsA&usqp=CAU"}
        ],
        "Habitaciones": [
          {"Tipo": "Habitación Deluxe",
           "Calificacion": 9.6,
           "Url": "https://www.mexicodestinos.com/blog/wp-content/uploads/2012/09/nuevas-habitaciones.jpg"},
          {"Tipo": "Suite Presidencial",
           "Calificacion": 9.8,
           "Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/469614366.jpg?k=92212b99ef30e5531dd748972d0b8c6947c8d924267e7ec8f1d02d4f5b92f51b&o=&hp=1"} 
        ]
      }
    ],
    "Precio": 1699.00,
    "Promocion": 1499.00,
    "Moneda": "USD",
    "Servicios": [
      { "Detalle": "Transporte y asistencia",
        "UrlImagen": "",
        "Precio": 0,
        "Incluido": true },
      { "Detalle": "Tour a la Isla Mujeres",
        "Url": "https://www.turismomexico.es/wp-content/uploads/2016/12/isla-mujeresmexico.jpg",
        "Precio": 45.00,
        "Incluido": false },
      { "Detalle": "Tour a la Zona Arqueológica de Tulum",
        "Url": "https://descubro.mx/wp-content/uploads/2022/07/Zona-arqueologica-Tulum-1-1024x576.webp",
        "Precio": 55.00,
        "Incluido": false },
        { "Detalle": "Tour al cenote Samaal",
        "Url": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/93/db/b8.jpg",
        "Precio": 20.00,
        "Incluido": false }
    ],
    "Cupos": 50,
    "Imagenes": [
      {"Url": "https://clubsolaris.com/imgs/ES/lugares-que-debes-visitar-en-cancun/el-mirador-de-cancun.png" },
      {"Url": "https://img.freepik.com/fotos-premium/vista-panoramica-aerea-playa-cancun-zona-hotelera-ciudad-mexico-paisaje-costa-caribena_130111-6527.jpg" },
      {"Url": "https://thebettervacation.com/wp-content/uploads/2021/07/Cancun-Hotel-Zone.jpg" }
    ],
    "Calificacion": 9.2,
    "Comentarios": [
      { "Usuario": "Laura Gómez",
        "Testimonio": "Cancún es un destino increíble, las playas son paradisíacas y el hotel fue perfecto. El personal brinda un servicio excepcional. ¡Definitivamente regresaré!",
        "Fecha": "2023/06/20"},
      { "Usuario": "Pedro López",
        "Testimonio": "Disfruté de cada momento en Cancún. Las excursiones a la Isla Mujeres y a Tulum fueron fascinantes. El hotel ofrece todas las comodidades necesarias para una estancia de lujo. ¡Lo recomiendo ampliamente!",
        "Fecha": "2023/07/05"}
    ],
    "Itinerario": [
      { "Dia": 1, "Descripcion": "Llegada a Cancún, check-in en el hotel y tarde libre para relajarse en la playa."},
      { "Dia": 2, "Descripcion": "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales."},
      { "Dia": 3, "Descripcion": "Sugerencia: Visita a la Zona Arqueológica de Tulum y maravíllese con las ruinas mayas junto al mar."},
      { "Dia": 4, "Descripcion": "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales."},
      { "Dia": 5, "Descripcion": "Sugerencia: Exploración de los cenotes cercanos y snorkel en aguas cristalinas. Precio incluye almuerzo en el lugar."},
      { "Dia": 6, "Descripcion": "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales."},
      { "Dia": 7, "Descripcion": "Sugerencia: Excursión a la Isla Mujeres, disfrute de las hermosas playas y actividades acuáticas."},
      { "Dia": 8, "Descripcion": "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales."},
      { "Dia": 9, "Descripcion": "Día libre para disfrutar de las instalaciones del hotel o realizar actividades opcionales."},
      { "Dia": 10, "Descripcion": "Check-out del hotel y regreso a su lugar de origen."}
    ]
  },

  {
  "Id":2,
  "Pais": "Argentina",
  "Ciudad": "Ushuaia, Tierra del Fuego",
  "Titulo": "Explora el fin del mundo: Ushuaia",
  "FechaInicio": "2023/10/08",
  "FechaFinal": "2023/10/12",
  "Duracion": 5,
  "Aerolinea": "Aerolíneas Argentinas",
  "Ida": "Dom 08 Octubre 08:30AM EZE|Directo",
  "Regreso": "Jueves 12 Octubre 16:15PM USH|Directo",
  "Alojamiento":  [
    {
      "Hotel": "Hotel Los Cauquenes Resort & Spa",
      "Estrellas": 5,
      "Calificacion": 9.6,
      "RegimenComidas": "Media Pensión",
      "Imagenes": [
        {"Url": "https://media-cdn.tripadvisor.com/media/photo-s/29/37/ce/c2/hotel-exterior-night.jpg"},
        {"Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/251646649.jpg?k=8887a66e4886fd3ac31d1095f964942563e9bc6c1e9b4aa7a68f19f662ac163f&o=&hp=1"},
        {"Url": "https://media.staticontent.com/media/pictures/8d362909-3b87-4269-bdb6-cf659f442bbf"},
        {"Url": "https://www.loscauquenes.com/files-sbbasic/sr_loscauquenesnew_ar/cf_2020_007_cauquenes_5d4-4664.jpg?w=720&h=720"}
      ],
      "Habitaciones": [
        {"Tipo": "Habitación Deluxe",
         "Calificacion": 9.5,
         "Url": "https://www.loscauquenes.com/files-sbbasic/sr_loscauquenesnew_ar/habitacion-standard-cuadruple-01.jpg?undefined"},
        {"Tipo": "Suite Ejecutiva",
         "Calificacion": 9.7,
         "Url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/e6/6e/ed/los-cauquenes-resort.jpg?w=700&h=-1&s=1"} 
      ]
    }
  ],
  "Precio": 1099.00,
  "Promocion": 999.00,
  "Moneda": "USD",
  "Servicios": [
    { "Detalle": "Transporte y asistencia", "UrlImg": "", "Precio": 0, "Incluido": true },
    { "Detalle": "Excursión al Parque Nacional Tierra del Fuego",
      "Url": "https://www.brasileirosemushuaia.com.br/media/catalog/product/cache/1/image/700x460/17f82f742ffe127f42dca9de82fb58b1/i/m/img_7942_1_.jpg",
      "Precio": 0, "Incluido": true },
    { "Detalle": "Navegación por el Canal Beagle",
      "Url": "https://www.serargentino.com/public/images/2020/06/canal-del-Beagle-773x458.jpeg",
      "Precio": 0, "Incluido": true },
      { "Detalle": "Día en cerro Castor",
      "Url": "https://economixtv.com/wp-content/uploads/2021/09/Foto-Castor-4-scaled.jpg",
      "Precio": 80.00, "Incluido": false },
      { "Detalle": "Paseo en el Tren del Fin del Mundo",
      "Url": "https://hablemosdeargentina.com/wp-content/uploads/2018/04/Tren-del-Fin-del-Mundo.jpg",
      "Precio": 68.00, "Incluido": false },
  ],
  "Cupos": 20,
  "Imagenes": [
    {"Url": "https://cnnespanol.cnn.com/wp-content/uploads/2018/02/patagonia-argentina-ushuaia-2.jpg?quality=100&strip=info&w=940&h=530&crop=1" },
    {"Url": "https://www.costacruceros.com/content/dam/costa/costa-magazine/article-images/what-to-see-in-ushaia/ushuaia-694x390.jpg.image.694.390.medium.jpg" },
    {"Url": "hhttps://www.howlanders.com/blog/wp-content/uploads/2020/12/ushuaia-fin-del-mundo.jpg" }
  ],
  "Calificacion": 9.3,
  "Comentarios": [
    { "Usuario": "Carla Alcorta", 
      "Testimonio": "Ushuaia es un lugar mágico, rodeado de belleza natural. El hotel ofrece una experiencia increíble, con vistas impresionantes y un servicio de primera. ¡Volveré sin dudarlo!",
      "Fecha": "2023/06/12"},
    { "Usuario": "Martín Sánchez",
      "Testimonio": "Explorar el Parque Nacional Tierra del Fuego y navegar por el Canal Beagle fue asombroso. El hotel superó todas mis expectativas, definitivamente lo recomendaré a mis amigos.",
      "Fecha": "2023/07/03"}                     
  ],
  "Itinerario": [
    { "Dia": 1, "Descripcion": "Llegada a Ushuaia, check-in en el hotel y tarde libre para disfrutar de las vistas panorámicas."},
    { "Dia": 2, "Descripcion": "Excursión al Parque Nacional Tierra del Fuego y maravíllese con la naturaleza virgen."},
    { "Dia": 3, "Descripcion": "Navegación por el Canal Beagle y avistamiento de fauna marina."},
    { "Dia": 4, "Descripcion": "DIA LIBRE. Sugerencia: Pase el día en cerro Castor, areas para snowboard y sky. Pruebe el tradicional cordero patagónico. O disfrute de un paseo por el Tren del Fin del Mundo."},
    { "Dia": 5, "Descripcion": "Check-out del hotel y regreso a su lugar de origen."}
  ]
},
{
  "Id":3,
        "Pais": ["Inglaterra", "Holanda", "Alemania"],
        "Ciudad": ["Londres", "Amsterdam", "Berlin"],
        "Titulo": "Europa Luxury: Londres, Ámsterdam y Berlín",
        "FechaInicio": "2024/03/01",
        "FechaFinal": "2024/03/20",
        "Duracion": 20,
        "Aerolinea": "British Airways",
        "Ida": "Mar 01 marzo 06:00AM Buenos Aires|Llegada a Londres 02:00PM",
        "Regreso": "Jue 20 marzo 01:30PM Berlín|Escala en Ámsterdam|Llegada a Buenos Aires 08:30AM",
        "Alojamiento":  [
          {
            "Hotel": "Hampton by Hilton London Waterloo",
            "Ciudad":"Londres",
            "Estrellas": 3,
            "Calificacion": 9.5,
            "RegimenComidas": "Desayuno incluído",
            "Imagenes": [
              {"Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34022188.jpg?k=a280b24a4e90dfd4f7e2c3507ec8ae1a7d9dd064a6e4a38956c6b8d218ff6954&o=&hp=1"},
              {"Url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/60/31/d7/hampton-by-hilton-london.jpg?w=700&h=-1&s=1"},
              {"Url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/51133792.jpg?k=d34a86dff0fabde48fa4696b6eb1ba6b7de0dcb19a6ad312335b5d6afa215c48&o="},
              {"Url": "https://d.otcdn.com/imglib/hotelfotos/8/306/hotel-hampton-by-hilton-london-waterloo-londres-059-20200824135038.jpg"}
            ],
            "Habitaciones": [
              {"Tipo": "Family Room",
               "Calificacion": 9,
               "Url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/fc/ae/ed/caption.jpg?w=1200&h=-1&s=1"},
              {"Tipo": "Suite",
               "Calificacion": 9.8,
               "Url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/79/5e/21/guest-room.jpg?w=1100&h=-1&s=1"} 
            ]
          },
          {
            "Hotel": "Hotel Pulitzer Amsterdam",
            "Ciudad":"Amsterdam",
            "Estrellas": 4,
            "Calificacion": 9.2,
            "RegimenComidas": "Desayuno incluido",
            "Imagenes": [
              {"Url": "https://hospitality-on.com/sites/default/files/import/contenu/pulitzermsterdam_opt.jpg"},
              {"Url": "https://luxurycolumnist.com/wp-content/uploads/2017/10/hotel-pulitzer-amsterdam-bedroom-800x601.jpg"},
              {"Url": "https://archello.s3.eu-central-1.amazonaws.com/images/2020/07/01/Pause---Overview---Service.1593616430.9207.jpg"},
              {"Url": "https://static.dezeen.com/uploads/2019/10/pulitzer-hotel-interiors-renovation-amsterdam-netherlands_dezeen_2364_hero.jpg"}
            ],
            "Habitaciones": [
              {"Tipo": "Family Room",
               "Calificacion": 8,
               "Url": "https://www.pulitzeramsterdam.com/media/e3ho0tku/family-room-524-2.jpg?anchor=center&mode=crop&quality=70&width=2000&height=1010&rnd=133118668535570000"},
              {"Tipo": "Suite",
               "Calificacion": 9.8,
               "Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413548964.jpg?k=47340e37698f43062592a2536265e324395f6f4ec41ec3906881a6b679f780e9&o=&hp=1"} 
            ]
          },
          {
            "Hotel": "Hotel Adlon Kempinski Berlin",
            "Ciudad":"Berlin",
            "Estrellas": 5,
            "Calificacion": 9.6,
            "RegimenComidas": "Desayuno incluido",
            "Imagenes": [
              {"Url": "https://media-cdn.tripadvisor.com/media/photo-s/28/41/3b/df/exterior.jpg"},
              {"Url": "https://www.kempinski.com/var/site/storage/images/0/9/9/3/813990-1-eng-GB/847d3f4c19ad-74533624_4K.jpg"},
              {"Url": "https://www.kempinski.com/var/site/storage/images/6/1/3/7/507316-1-eng-GB/d49bd369214d-74580770_4K.jpg"},
              {"Url": "https://media.cntraveler.com/photos/61e05cebc5df30b76eb27441/16:9/w_2560,c_limit/Hotel-Adlon-Kempinski-Berlin.jpg"}
            ],
            "Habitaciones": [
              {"Tipo": "Deluxe Room",
               "Calificacion": 9.7,
               "Url": "https://storage.kempinski.com/cdn-cgi/image/w=1920,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/8/5/2/2/132258-1-eng-GB/a29e40bb2861-73666816_4K.jpg"},
              {"Tipo": "Suite",
               "Calificacion": 9.9,
               "Url": "https://www.kempinski.com/var/site/storage/images/8/8/0/1/131088-1-eng-GB/069885016c5a-73666730_4K.jpg"} 
            ]
          }
        ],
        "Precio": 3999.00,
        "Promocion": 3499.00,
        "Moneda": "USD",
        "Servicios": [
          { "Detalle": "Vuelos internacionales y traslados",
            "Url": "https://www.britishairways.com/assets/images/destinations/ldn/1x1/pretty/regular/1_1_pretty_regular_3000x3000px_london_1.jpg",
            "Precio": 0, "Incluido": true },
          { "Detalle": "Tour por Londres",
            "Ciudad":"Londres",
            "Url": "https://www.visitlondon.com/assets/iStock/london-bus-tour_550.jpg",
            "Precio": 0, "Incluido": true },
            { "Detalle": "Harry Potter Warner Bros Studio Tour",
            "Ciudad":"Londres",
            "Url": "https://www.visitlondon.com/assets/iStock/london-bus-tour_550.jpg",
            "Precio": 70, "Incluido": false },
            { "Detalle": "Windsor, Stonehenge, Bath y termas romanas",
            "Ciudad":"Londres",
            "Url": "https://www.visitlondon.com/assets/iStock/london-bus-tour_550.jpg",
            "Precio": 0, "Incluido": true },
            { "Detalle": "The London Eye",
            "Ciudad":"Londres",
            "Url": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/36/c2/60.jpg",
            "Precio": 0, "Incluido": true },
            { "Detalle": "Tower of London, St Pauls Cathedral & Westminster Abbey Tour.",
            "Ciudad":"Londres",
            "Url": "https://cdn-imgix.headout.com/tour/17553/TOUR-IMAGE/4e1afc76-4fda-4481-b29c-2fa700b48751-9701-london-4.jpg?auto=compress&fm=pjpg&w=1024&h=639&crop=faces&fit=min",
            "Precio": 200, "Incluido": false },

          { "Detalle": "Crucero por los canales de Ámsterdam",
          "Ciudad":"Amsterdam",
            "Url": "https://cdn.getyourguide.com/img/tour/53d4bc63ea5eeed0.jpeg/146.jpg",
            "Precio": 0.00, "Incluido": true },
            { "Detalle": "The Upside Down Museum",
            "Ciudad":"Amsterdam",
            "Url": "https://cdn.getyourguide.com/img/tour/6364ec7dabddd.jpeg/145.jpg",
            "Precio": 0.00, "Incluido": true },
            { "Detalle": "Giethoorn & Enclosing Dike con Tour en bote",
            "Ciudad":"Amsterdam",
            "Url": "https://cdn.getyourguide.com/img/tour/5b79b9ae7620f.jpeg/98.jpg",
            "Precio": 80, "Incluido": false },
            { "Detalle": "Van Gogh Museum",
            "Ciudad":"Amsterdam",
            "Url": "https://cdn.getyourguide.com/img/tour/57a2134e6f7f4.jpeg/98.jpg",
            "Precio": 0, "Incluido": true },
            { "Detalle": "Vida de Anne Frank y II guerra mundial Tour",
            "Ciudad":"Amsterdam",
            "Url": "https://cdn1.intriper.com/wp-content/uploads/2017/12/01133449/casa-ana-frank-amsterdam-principal-1.jpg",
            "Precio": 0, "Incluido": true },
            { "Detalle": "Campo de tulipanes Keukenhof",
            "Ciudad":"Amsterdam",
            "Url": "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/42/01.jpg",
            "Precio": 39, "Incluido": false },

          { "Detalle": "Tour por Berlín",
          "Ciudad":"Berlin",
            "Url": "https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_mobile_1x/private/image/Berlin_Touristen_L1008278_OCV_ohneo2world_c_visitBerlin_Foto_Philip_Koschel_DL_PPT_0.jpg?itok=9CkqZGpp",
            "Precio": 0, "Incluido": true },
          { "Detalle": "Visita guiada al campo de concentración Sachsenhausen Memorial",
          "Ciudad":"Berlin",
          "Url": "https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/berliner_mauer_karte_saharawagen_1.jpg?h=01d8114f&itok=0_gBGSsw",
          "Precio": 0, "Incluido": true },
          { "Detalle": "Berlin-Prague Tour",
          "Ciudad":"Berlin",
          "Url": " https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/18/53/e7.jpg",
          "Precio": 67, "Incluido": false },
          { "Detalle": "Berlin Brewery Tour",
          "Ciudad":"Berlin",
          "Url": "https://i.ytimg.com/vi/DeXa9L-jOWo/maxresdefault.jpg",
          "Precio": 0, "Incluido": true },
          { "Detalle": "Berlin khroma - Experiencia de arte inmersivo",
          "Ciudad":"Berlin",
          "Url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmzLCz45Qzl-zpiTMVBmKUSDZExHCw0HdJA&usqp=CAU",
          "Precio": 0, "Incluido": true },
          { "Detalle": "Visita a la puerta de Brandemburgo y Catedral de Berlín",
          "Ciudad":"Berlin",
          "Url": "https://www.guiadealemania.com/wp-content/uploads/2010/08/Puerta-de-Brandemburgo-Berlin-1024x682.jpg",
          "Precio": 0, "Incluido": true },
          { "Detalle": "Visita a galerías de arte",
          "Ciudad":"Berlin",
          "Url": "https://topadventure.com/__export/1659474932611/sites/laverdad/img/2022/08/02/los_11_mejores_museos_y_galerixas_de_arte_de_berlin_galerie_capitain_petzel.jpg_124593801.jpg",
          "Precio": 10, "Incluido": false },

          
          
         
        ],
        "Cupos": 25,
        "Imagenes": [
          {"Url": "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg"},
          {"Url": "https://www.amsterdam.net/es/wp-content/uploads/sites/93/amsterdam-canales-puentes-hd.jpg"},
          {"Url": "https://images.ecestaticos.com/78tfBTxAaxxz_hZv-Duwj6qgNaM=/144x0:2002x1392/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F90f%2Fe07%2Ff94%2F90fe07f943a2da54c37c2406420d12f3.jpg"}
        ],
        "Calificacion": 8.9,
        "Comentarios": [
          { "Usuario": "Carolina Ramírez", 
            "Testimonio": "Todo el viaje muy bien pensado, organizado en sus tiempos y excursiones. Con días de desancanso también. Los hoteles divinos. Un paquete super recomendable para conocer lo mas importante sin andar como locos!",
            "Fecha": "2022/09/10"},
          { "Usuario": "Luis Fernández",
            "Testimonio": "Un viaje para conocer, disfrutar, con actividades muy variadas para todos los gustos. Destacables los hoteles y su ubicación. Todo espectacular. Lo recomiendo.",
            "Fecha": "2023/03/01"}                     
        ],
        "Itinerario": [
            { "Dia": 1, "Descripcion": "Llegada a Londres, check-in en el hotel y tarde libre para explorar la ciudad."},
            { "Dia": 2, "Descripcion": "Tour por los principales lugares turísticos de Londres."},
            { "Dia": 3, "Descripcion": "Tour de todo el día por Windsor, Stonehenge, Bath y termas romanas con comidas incluídas."},
            { "Dia": 4, "Descripcion": "DIA LIBRE. Sugerencia: Harry Potter Warner Bros Studio Tour."},
            { "Dia": 5, "Descripcion": "Mañana libre para explorar los barrios y mercados de Londres. Por la tarde, London Eye."},
            { "Dia": 6, "Descripcion": "DIA LIBRE. Sugerencia: Tower of London, St Pauls Cathedral & Westminster Abbey Tour."},
            { "Dia": 7, "Descripcion": "Llegada a Ámsterdam, check-in en el hotel y tarde libre para explorar la ciudad."},
            { "Dia": 8, "Descripcion": "Tour en bicicleta por Ámsterdam y visita a los canales. Por la tarde, visita al Upside Down Museum."},
            { "Dia": 9, "Descripcion": "DIA LIBRE. Sugerencia: Giethoorn & Enclosing Dike con Tour en bote."},
            { "Dia": 10, "Descripcion": "Campo de tulipanes Keukenhof."},
            { "Dia": 11, "Descripcion": "Día libre para disfrutar de los cafés y la vida nocturna de Ámsterdam."},
            { "Dia": 12, "Descripcion": "Museo de Anna Frank y II guerra mundial. Por la tarde Van Gogh Museum."},
            { "Dia": 13, "Descripcion": "Llegada a Berlín, check-in en el hotel y tarde libre para explorar la ciudad."},
            { "Dia": 14, "Descripcion": "Tour por la ciudad. Visita al Muro de Berlín y al Checkpoint Charlie."},
            { "Dia": 15, "Descripcion": "Visita guiada al campo de concentración Sachsenhausen Memorial."},
            { "Dia": 16, "Descripcion": "Berlin khroma - Experiencia de arte inmersivo."},
            { "Dia": 17, "Descripcion": "DIA LIBRE para recorrer los parques y jardines de Berlín. Sugerencia: Tour Berlín-Praga."},
            { "Dia": 18, "Descripcion": "Visita a la Puerta de Brandenburgo y la Catedral de Berlín."},
            { "Dia": 19, "Descripcion": "Tour por los barrios alternativos de Berlín y visita a galerías de arte."},
            { "Dia": 20, "Descripcion": "Check-out del hotel y regreso a Buenos Aires."},
        ]
        },
        {
    "Id":4,
    "Pais": "Estados Unidos",
    "Ciudad": ["Nueva York", "Miami"],
    "Titulo": "Nueva York y Miami low cost.",
    "FechaInicio": "2023/08/01",
    "FechaFinal": "2023/08/10",
    "Duracion": 10,
    "Aerolinea": "Aerolíneas Argentinas",
    "Ida": "Lun 01 agosto 03:00AM Buenos Aires|Directo",
    "Regreso": "Mie 10 agosto 19:30PM Miami|Directo",
    "Alojamiento": [
      {
        "Ciudad": "Nueva York",
        "Hotel": "Citadines Connect Fifth Avenue New York",
        "Estrellas": 3,
        "Calificacion": 7.6,
        "RegimenComidas": "Desayuno incluido",
        "Imagenes": [
          {"Url": "https://q-xx.bstatic.com/xdata/images/hotel/max500/303354647.jpg?k=ec7b905351501f77e873f5000092081fc956a84898be39fec87b92781f8000fc&o="},
          {"Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149510719.jpg?k=fb5d87291716f12ac7bce273b293e8271984ecc3262f95d0817f6ac3bc87bcfa&o=&hp=1"},
          {"Url": "https://hotel-central-fifth-avenue-new-york.booked.mx/data/Photos/OriginalPhoto/11159/1115942/1115942409/Citadines-Connect-Fifth-Avenue-New-York-Hotel-Exterior.JPEG"}
        ],
        "Habitaciones": [
          {
            "Tipo": "Habitación Estándar",
            "Calificacion": 9,
            "Url": "https://www.capitaland.com/content/dam/capitaland-media-library/lodging/USA/New%20York%20City/hotel-central-fifth-avenue-new-york/SR_New%20York_Cit%20Con%20Fifth%20Avenue%20_Premier%20Room%20King%2001_LR.jpg.transform/cap-midres/image.jpg"
          },
          {
            "Tipo": "Habitación Doble",
            "Calificacion": 9,
            "Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213365450.jpg?k=42be8aa52d4c9fc28b59b02efa33ffd7d18e4bb524fba7d2dcf4ef2ecd32f2ab&o=&hp=1"
          }
        ]
      },
      {
        "Ciudad": "Miami",
        "Hotel": "Beachside Hotel",
        "Estrellas": 3,
        "Calificacion": 8.1,
        "RegimenComidas": "Desayuno incluido",
        "Imagenes": [
          {"Url": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/daytonabeach/beachside4_0CC08802-956A-562F-4DA36EB7A2DB2873-0cc087419777e78_0cc0885f-aaae-c065-e5d73c1a352ce73a.jpg"},
          {"Url": "https://ak-d.tripcdn.com/images/220q0z000000n9zo31E58_R_960_660_R5_D.jpg"},
          {"Url": "https://www.momondo.com/himg/53/31/2f/ice-93723-99983242-130486.jpg"}
        ],
        "Habitaciones": [
          {
            "Tipo": "Habitación Estándar",
            "Calificacion": 8.3,
            "Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143999480.jpg?k=dd1a81fad65fcf3973b735482b6ea6467908f90018bee1b35cf5ed7c98485d2d&o=&hp=1"
          },
          {
            "Tipo": "Habitación Doble",
            "Calificacion": 8.0,
            "Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143998769.jpg?k=9bec0187d27f80bf0ef871c4f416ee60606ca54847bdf6bb62c18fa1ce3c6543&o=&hp=1"
          }
        ]
      }
    ],
    "Precio": 1499.00,
    "Promocion": 1299.00,
    "Moneda": "USD",
    "Servicios": [
      {
        "Detalle": "Transporte y asistencia",
        "UrlImagen": "",
        "Precio": 0,
        "Incluido": true
      },
      {
        "Detalle": "Tour a pie por los principales puntos de interés de la ciudad",
        "Ciudad":"Nueva York",
        "Url": "https://media.admagazine.com/photos/61e5acc706c10ae95c71b902/16:9/pass/New-York-skyline.jpg",
        "Precio": 0,
        "Incluido": true
      },
      {
        "Detalle": "Tour a la Estatua de la Libertad",
        "Ciudad":"Nueva York",
        "Url": "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2022-10/Statue-of-Liberty.jpg",
        "Precio": 49.99,
        "Incluido": false
      },
      {
        "Detalle": "Paseo por Central Park",
        "Ciudad":"Nueva York",
        "Url": "https://images.adsttc.com/media/images/5bc8/ad3b/f197/cc6b/2200/03c9/newsletter/06_Alternative-Central-Park-6.jpg?1539878195",
        "Precio": 0,
        "Incluido": true
      },
      {
        "Detalle": "Paseo por Brooklyn Bridge",
        "Ciudad":"Nueva York",
        "Url": "https://www.nothingfamiliar.com/wp-content/uploads/2023/04/Brooklyn-Bridge-View.jpg",
        "Precio": 0,
        "Incluido": true
      },
      {
        "Detalle": "Paseo por Time Square",
        "Ciudad":"Nueva York",
        "Url": "https://statics.forbesargentina.com/2022/12/639c712a13f8c.jpeg",
        "Precio": 0,
        "Incluido": true
      },
      {
        "Detalle": "One World Observatory",
        "Ciudad":"Nueva York",
        "Url": "https://lovingnewyork.es/wp-content/uploads/2020/03/One-World-Observatory-180205093112003.jpg",
        "Precio": 65,
        "Incluido": false
      },
      {
        "Detalle": "Visita a la famosa playa de South Beach.",
        "Ciudad":"Miami",
        "Url":"https://www.miamiandbeaches.lat/getmedia/2ea8352f-9de8-408d-8cdd-83668211dcf1/south-beach-jetty-1440x900.jpg?width=800&resizemode=force",
        "Precio": 0,
        "Incluido": true
      },
      {
        "Detalle": "Tour en bicicleta por el distrito Art Deco.",
        "Ciudad":"Miami",
        "Url":"https://media.istockphoto.com/id/1074512822/es/foto/estaci%C3%B3n-de-salvavidas-de-miami-beach.jpg?s=612x612&w=0&k=20&c=59mEBv2CVsiq-O8O6c9oVSK7ePGlWPAG3pA7P2lZzFY=",
        "Precio": 25.00,
        "Incluido": false
      },
      {
          "Detalle": "Excursión a los Everglades.",
          "Ciudad":"Miami",
          "Url":"https://www.civitatis.com/f/estados-unidos/miami/excursion-everglades-589x392.jpg",
          "Precio": 50,
          "Incluido": false
      },
      {
        "Detalle": "Shopping day en los Outlets",
        "Ciudad":"Miami",
        "Url":"https://www.civitatis.com/f/estados-unidos/miami/galeria/compras-miami.jpg",
        "Precio": 0,
        "Incluido": false
    }
    
    ],
    "Cupos": 30,
    "Imagenes": [
      {"Url": "https://media.cntraveler.com/photos/56e9cfa7387602b37ac51adc/4:5/w_3736,h_4670,c_limit/the-plaza-hotel-new-york-3.jpg"},
      {"Url": "https://media.cntraveler.com/photos/56e9cfa7387602b37ac51adc/4:5/w_3736,h_4670,c_limit/the-plaza-hotel-new-york-6.jpg"},
      {"Url": "https://media.cntraveler.com/photos/54a6a4a4d2f215b5421dcf9f/master/w_775,h_465,c_limit/south-beach-miami-florida-cr-getty.jpg"}
    ],
    "Calificacion": 7.8,
    "Comentarios": [
      {
        "Usuario": "Josefina Alemann",
        "Testimonio": "El viaje a Nueva York y Miami fue económico pero satisfactorio. Los hoteles ofrecieron un desayuno básico pero suficiente. Disfruté de los tours y la playa en Miami. ¡Buena relación calidad-precio!",
        "Fecha": "2023/08/05"
      },
      {
        "Usuario": "Javier López",
        "Testimonio": "A pesar de ser un viaje low cost, pude disfrutar de lo mejor de Nueva York y Miami. Los hoteles económicos cumplían con las necesidades básicas y el desayuno era adecuado. Recomiendo este paquete para aquellos con un presupuesto ajustado.",
        "Fecha": "2023/08/12"
      }
    ],
    "Itinerario": [
      {
        "Dia": 1,
        "Descripcion": "Llegada a Nueva York, check-in en el hotel y tiempo libre para explorar la ciudad. Se sugiere One World Observatory."
      },
      {
        "Dia": 2,
        "Descripcion": "Recorrido a pie por los principales puntos de interés de Nueva York. Se sugiere Central Park, Brooklyn Bridge, Time Square."
      },
      {
        "Dia": 3,
        "Descripcion": "DIA LIBRE. Sugerencia: Excursión a la Estatua de la Libertad."
      },
      {
        "Dia": 4,
        "Descripcion": "Traslado a Miami y check-in en el hotel. Tiempo libre para disfrutar de la playa de South Beach."
      },
      {
        "Dia": 5,
        "Descripcion": "Tour en bicicleta por el distrito Art Deco en Miami."
      },
      {
        "Dia": 6,
        "Descripcion": "Día libre en Miami para explorar la ciudad a tu propio ritmo."
      },
      {
        "Dia": 7,
        "Descripcion": "DIA LIBRE. Sugerencia: Excursión a los Everglades."
      },
      {
        "Dia": 8,
        "Descripcion": "Día libre en Miami para relajarse en la playa y disfrutar del clima."
      },
      {
        "Dia": 9,
        "Descripcion": "DIA LIBRE. Sugerencia: Shopping day en los distintos Outlets."
      },
      {
        "Dia": 10,
        "Descripcion": "Traslado al aeropuerto de Miami para el vuelo de regreso a Buenos Aires. Llegada a Buenos Aires y fin del viaje."
      }
    ]
  },
    {
      "Id":5,
        "Pais": "Perú",
        "Ciudad": ["Lima", "Aguas Calientes"],
        "Titulo": "Aventurate descubriendo Lima y las ruinas de Machu Picchu",
        "FechaInicio": "2023/09/01",
        "FechaFinal": "2023/09/08",
        "Duracion": 8,
        "Aerolinea": "LATAM Airlines",
        "Ida": "Jue 01 septiembre 08:00AM Buenos Aires|Directo",
        "Regreso": "Jue 08 septiembre 15:30PM Lima|Directo",
        "Alojamiento": [

          {
            "Ciudad": "Lima",
            "Hotel": "Hotel B",
            "Estrellas": 4,
            "Calificacion": 8.9,
            "RegimenComidas": "Desayuno incluido",
            "Imagenes": [
              {"Url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2d/52/5d/hotel-b.jpg?w=700&h=-1&s=1"},
              {"Url": "https://hotelb.pe/wp-content/uploads/2020/08/the-rooftop-movil1-min.jpg"},
              {"Url": "https://www.incaexpert.com/blog/wp-content/uploads/2017/11/hotelb-1160x450.jpg"}
            ],
            "Habitaciones": [
              {
                "Tipo": "Habitación Superior",
                "Calificacion": 8.7,
                "Url": "https://cdn.audleytravel.com/1050/750/79/506855-chamber-junior-suite-hotel-b-lima.webp"
              },
              {
                "Tipo": "Suite",
                "Calificacion": 9.2,
                "Url": "https://hotelb.pe/wp-content/uploads/2020/08/paq-aposento.jpg"
              }
            ]
          },
          {
            "Ciudad": "Aguas Calientes",
            "Hotel": "Inti Punku Machu Picchu Hotel",
            "Estrellas": 3,
            "Calificacion": 8.4,
            "RegimenComidas": "Desayuno incluido",
            "Imagenes": [
              {"Url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/121566069.jpg?k=16d8251023115f2afc9541839f52ffe0a5519a27c93216ca06e126c4f64514c6&o=&hp=1"},
              {"Url": "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//itemimages/13/07/1307840_v5.jpeg"},
              {"Url": "https://inti-punku-machu-picchu-hotel.booked.mx/data/Photos/OriginalPhoto/12838/1283806/1283806570/Inti-Punku-Machupicchu-Hotel-Suites-Exterior.JPEG"}
            ],
            "Habitaciones": [
              {
                "Tipo": "Habitación Doble",
                "Calificacion": 8.6,
                "Url": "https://c.otcdn.com/imglib/hotelfotos/8/398/hotel-inti-punku-machu-picchu-005.jpg"
              },
              {
                "Tipo": "Suite",
                "Calificacion": 8.9,
                "Url": "https://a.otcdn.com/imglib/hotelfotos/8/398/hotel-inti-punku-machu-picchu-011.jpg"
              }
            ]
          }
        ],
        "Precio": 1999.00,
        "Promocion": 1799.00,
        "Moneda": "USD",
        "Servicios": [
          {
            "Detalle": "Transporte y asistencia",
            "UrlImagen": "",
            "Precio": 0,
            "Incluido": true
          },
          {
            "Detalle": "Visita guiada por el centro histórico de Lima",
            "Ciudad": "Lima",
            "Url":"https://www.peru.travel/Contenido/Atractivo/Imagen/es/14/1.1/Principal/centro-historico-de-lima.jpg",
            "Precio": 20.00,
            "Incluido": true
          },
          {
            "Detalle": "Excursion de día completo a Paracas Ica and Huacachina(todo incluído): oasis peruano.",
            "Ciudad": "Lima",
            "Url":"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/93/05/c9.jpg",
            "Precio": 129.00,
            "Incluido": false
          },
          {
            "Detalle": "Visita guiada a las Ruinas de Machu Picchu",
            "Ciudad":"Aguas Calientes",
            "Url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg",
            "Precio": 65.00,
            "Incluido": true
          }
        ],
        "Cupos": 40,
        "Imagenes": [
          {"Url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg"},
          {"Url": "https://www.clarin.com/img/2022/12/02/parques-y-jardines-enmarcan-un___Kl5Kzlrvm_2000x1500__1.jpg"},
          {"Url": "https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg"},
        ],
        "Calificacion": 8.6,
        "Comentarios": [
          {
            "Usuario": "María Rodríguez",
            "Testimonio": "El viaje a Lima y Machu Picchu fue una experiencia maravillosa. El hotel en Lima ofrecía un desayuno delicioso y las habitaciones eran cómodas. La visita a Machu Picchu fue impresionante y valió cada centavo. ¡Recomiendo este viaje!",
            "Fecha": "2023/09/05"
          },
          {
            "Usuario": "Carlos Martínez",
            "Testimonio": "El viaje a Perú fue increíble. Lima es una ciudad vibrante y las Ruinas de Machu Picchu son impresionantes. Los hoteles ofrecieron un buen servicio y el desayuno incluido fue conveniente. Recomiendo este viaje a cualquiera que quiera explorar la cultura peruana.",
            "Fecha": "2023/09/12"
          }
        ],
        "Itinerario": [
          {
            "Dia": 1,
            "Descripcion": "Llegada a Lima, check-in en el hotel y tiempo libre para explorar la ciudad."
          },
          {
            "Dia": 2,
            "Descripcion": "Visita guiada por el centro histórico de Lima y degustación de la gastronomía local."
          },
          {
            "Dia": 3,
            "Descripcion": "Traslado a Aguas Calientes, cerca de Machu Picchu, y check-in en el hotel."
          },
          {
            "Dia": 4,
            "Descripcion": "Excursión guiada de día completo a las Ruinas de Machu Picchu."
          },
          {
            "Dia": 5,
            "Descripcion": "Tiempo libre en Machu Picchu para explorar a tu propio ritmo o realizar actividades opcionales."
          },
          {
            "Dia": 6,
            "Descripcion": "Regreso a Lima y día libre para disfrutar de la ciudad, visitar museos o realizar compras."
          },
          {
            "Dia": 7,
            "Descripcion": "DIA LIBRE. Sugerencia: excursión a Paracas Ica and Huacachina: oasis peruano."
          },
          {
            "Dia": 8,
            "Descripcion": "Traslado al aeropuerto de Lima para el vuelo de regreso a Buenos Aires."
          }
        ]
      }

]

export default data