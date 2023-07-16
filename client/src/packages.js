const data = [
  {
    "id": 1,
    "title": "Descubre el paraíso: Cancún",
    "description": "Descubre la magia del caribe mexicano",
    "initialDate": "2023/12/11",
    "finalDate": "2023/12/20",
    "totalLimit": 100,
		"bookings": 0,
    "standarPrice": "1699.0",
		"promotionPrice": "1499.0",
    "service": "traslado aeropuerto-hotel-aeropuerto",
    "duration": 10,
    "originCity": 3,
    "outboundFlight": "Lun 11 diciembre 09:30AM Buenos Aires|Directo",
		"returnFlight": "Mar 20 diciembre 18:15PM CUN|Directo",
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/40/82/4b/aerial-view.jpg?w=700&h=-1&s=1",
    "qualification": "9.4",
    "active": true,
    "idContinent": 0,
    "idCountry": 0,
		"idCity": 0,
		"idHotel": 0,
		"idTypePackage": 0,
		"idAirline": 0,
    "TypePackage": {
			"id": 0,
			"name": "Plan Individual"
		},
		"Airline": {
			"id": 0,
			"name": "Aerolineas Argentinas"
		},
    "Continent": {
			"id": 0,
			"name": "Centroamérica"
		},
    "Country": {
			"id": 0,
			"name": "México"
		},
		"City": {
			"id": 0,
			"name": "Cancún, Quintana Roo"
		},
		"Hotel": {
			"id": 0,
			"name": "The Westin Resort & Spa, Cancún"
		},
    "Activity" : [
      {
        "id": 0,
        "description": "Tour a la Isla Mujeres",
        "URL": "https://www.turismomexico.es/wp-content/uploads/2016/12/isla-mujeresmexico.jpg",
        "price": 45.0,
        "included": false 
      },
      {
        "id": 0,
        "description": "Tour a la Zona Arqueológica de Tulum",
        "URL": "https://www.turismomexico.es/wp-content/uploads/2016/12/isla-mujeresmexico.jpg",
        "price": 45.0,
        "included": false 
      },
      {
        "id": 0,
        "description": "Tour al cenote Samaal",
        "URL": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/93/db/b8.jpg",
        "price": 55.0,
        "included": false 
      }
    ]    
  },

  {
    "id": 2,
		"title": "Explora el fin del mundo: Ushuaia",
		"description": "Una escapada fuera de este mundo",
		"initialDate": "2023/10/08",
		"finalDate": "2023/10/12",
		"totalLimit": 20,
		"bookings": 0,
		"standarPrice": "3999.0",
		"promotionPrice": "3499.0",
    "service": "traslado aeropuerto-hotel-aeropuerto",
		"duration": 5,
		"originCity": 0,
		"outboundFlight": "Dom 08 Octubre 08:30AM Buenos Aires|Directo",
			"returnFlight": "Jueves 12 Octubre 16:15PM USH|Directo",
		"image": "https://cnnespanol.cnn.com/wp-content/uploads/2018/02/patagonia-argentina-ushuaia-2.jpg?quality=100&strip=info&w=940&h=530&crop=1",
		"qualification": "9.3",
		"active": true,
		"idContinent": 0,
		"idCountry": 0,
			"idCity": 0,
			"idHotel": 0,
			"idTypePackage": 0,
			"idAirline": 0,
		"TypePackage": {
				"id": 0,
				"name": "Plan Individual"
			},
			"Airline": {
				"id": 0,
				"name": "Aerolineas Argentinas"
			},
		"Continent": {
				"id": 0,
				"name": "Suramérica"
			},
		"Country": {
				"id": 0,
				"name": "Argentina"
			},
			"City": {
				"id": 0,
				"name": "Ushuaia, Tierra del Fuego"
			},
			"Hotel": {
				"id": 0,
				"name": "Hotel Los Cauquenes Resort & Spa"
			},
		"Activity" : [
		  {
			"id": 0,
			"description": "Excursión al Parque Nacional Tierra del Fuego",
			"URL": "https://www.brasileirosemushuaia.com.br/media/catalog/product/cache/1/image/700x460/17f82f742ffe127f42dca9de82fb58b1/i/m/img_7942_1_.jpg",
			"price": 0,
			"included": true 
		  },
		  {
			"id": 0,
			"description":"Navegación por el Canal Beagle",
			"URL": "https://www.serargentino.com/public/images/2020/06/canal-del-Beagle-773x458.jpeg",
			"price": 0,
			"included": true 
		  },
		  {
			"id": 0,
			"description":"Día en cerro Castor",
			"URL": "https://economixtv.com/wp-content/uploads/2021/09/Foto-Castor-4-scaled.jpg",
			"price": 80.0,
			"included": false
		  },		  
		  {
			"id": 0,
			"description":"Paseo en el Tren del Fin del Mundo",
			"URL": "https://hablemosdeargentina.com/wp-content/uploads/2018/04/Tren-del-Fin-del-Mundo.jpg",
			"price": 68.0,
			"included": false
		  }
		  
		]    
	},

  
  // {
  //   Id: 3,
  //   Pais: ["Inglaterra", "Holanda", "Alemania"],
  //   Continente: "Europa",
  //   Ciudad: ["Londres", "Amsterdam", "Berlin"],
  //   Titulo: "Europa Luxury: Londres, Ámsterdam y Berlín",
  //   FechaInicio: "2024/03/01",
  //   FechaFinal: "2024/03/20",
  //   Duracion: 20,
  //   Aerolinea: "British Airways",
  //   Ida: "Mar 01 marzo 06:00AM Buenos Aires|Llegada a Londres 02:00PM",
  //   Regreso:
  //     "Jue 20 marzo 01:30PM Berlín|Escala en Ámsterdam|Llegada a Buenos Aires 08:30AM",
  //   Alojamiento: [
  //     {
  //       Hotel: "Hampton by Hilton London Waterloo",
  //       Ciudad: "Londres",
  //       Estrellas: 3,
  //       Calificacion: 9.5,
  //       RegimenComidas: "Desayuno incluído",
  //       Imagenes: [
  //         {
  //           Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34022188.jpg?k=a280b24a4e90dfd4f7e2c3507ec8ae1a7d9dd064a6e4a38956c6b8d218ff6954&o=&hp=1",
  //         },
  //         {
  //           Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/60/31/d7/hampton-by-hilton-london.jpg?w=700&h=-1&s=1",
  //         },
  //         {
  //           Url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/51133792.jpg?k=d34a86dff0fabde48fa4696b6eb1ba6b7de0dcb19a6ad312335b5d6afa215c48&o=",
  //         },
  //         {
  //           Url: "https://d.otcdn.com/imglib/hotelfotos/8/306/hotel-hampton-by-hilton-london-waterloo-londres-059-20200824135038.jpg",
  //         },
  //       ],
  //       Habitaciones: [
  //         {
  //           Tipo: "Family Room",
  //           Calificacion: 9,
  //           Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/fc/ae/ed/caption.jpg?w=1200&h=-1&s=1",
  //         },
  //         {
  //           Tipo: "Suite",
  //           Calificacion: 9.8,
  //           Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/79/5e/21/guest-room.jpg?w=1100&h=-1&s=1",
  //         },
  //       ],
  //     },
  //     {
  //       Hotel: "Hotel Pulitzer Amsterdam",
  //       Ciudad: "Amsterdam",
  //       Estrellas: 4,
  //       Calificacion: 9.2,
  //       RegimenComidas: "Desayuno incluido",
  //       Imagenes: [
  //         {
  //           Url: "https://hospitality-on.com/sites/default/files/import/contenu/pulitzermsterdam_opt.jpg",
  //         },
  //         {
  //           Url: "https://luxurycolumnist.com/wp-content/uploads/2017/10/hotel-pulitzer-amsterdam-bedroom-800x601.jpg",
  //         },
  //         {
  //           Url: "https://archello.s3.eu-central-1.amazonaws.com/images/2020/07/01/Pause---Overview---Service.1593616430.9207.jpg",
  //         },
  //         {
  //           Url: "https://static.dezeen.com/uploads/2019/10/pulitzer-hotel-interiors-renovation-amsterdam-netherlands_dezeen_2364_hero.jpg",
  //         },
  //       ],
  //       Habitaciones: [
  //         {
  //           Tipo: "Family Room",
  //           Calificacion: 8,
  //           Url: "https://www.pulitzeramsterdam.com/media/e3ho0tku/family-room-524-2.jpg?anchor=center&mode=crop&quality=70&width=2000&height=1010&rnd=133118668535570000",
  //         },
  //         {
  //           Tipo: "Suite",
  //           Calificacion: 9.8,
  //           Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413548964.jpg?k=47340e37698f43062592a2536265e324395f6f4ec41ec3906881a6b679f780e9&o=&hp=1",
  //         },
  //       ],
  //     },
  //     {
  //       Hotel: "Hotel Adlon Kempinski Berlin",
  //       Ciudad: "Berlin",
  //       Estrellas: 5,
  //       Calificacion: 9.6,
  //       RegimenComidas: "Desayuno incluido",
  //       Imagenes: [
  //         {
  //           Url: "https://media-cdn.tripadvisor.com/media/photo-s/28/41/3b/df/exterior.jpg",
  //         },
  //         {
  //           Url: "https://www.kempinski.com/var/site/storage/images/0/9/9/3/813990-1-eng-GB/847d3f4c19ad-74533624_4K.jpg",
  //         },
  //         {
  //           Url: "https://www.kempinski.com/var/site/storage/images/6/1/3/7/507316-1-eng-GB/d49bd369214d-74580770_4K.jpg",
  //         },
  //         {
  //           Url: "https://media.cntraveler.com/photos/61e05cebc5df30b76eb27441/16:9/w_2560,c_limit/Hotel-Adlon-Kempinski-Berlin.jpg",
  //         },
  //       ],
  //       Habitaciones: [
  //         {
  //           Tipo: "Deluxe Room",
  //           Calificacion: 9.7,
  //           Url: "https://storage.kempinski.com/cdn-cgi/image/w=1920,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/8/5/2/2/132258-1-eng-GB/a29e40bb2861-73666816_4K.jpg",
  //         },
  //         {
  //           Tipo: "Suite",
  //           Calificacion: 9.9,
  //           Url: "https://www.kempinski.com/var/site/storage/images/8/8/0/1/131088-1-eng-GB/069885016c5a-73666730_4K.jpg",
  //         },
  //       ],
  //     },
  //   ],
  //   Precio: 3999.0,
  //   Promocion: 3499.0,
  //   Moneda: "USD",
  //   Incluye: "vuelos internacionales y traslados",
  //   Servicios: [
  //     {
  //       Detalle: "Tour por Londres",
  //       Ciudad: "Londres",
  //       Url: "https://www.visitlondon.com/assets/iStock/london-bus-tour_550.jpg",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Harry Potter Warner Bros Studio Tour",
  //       Ciudad: "Londres",
  //       Url: "https://www.visitlondon.com/assets/iStock/london-bus-tour_550.jpg",
  //       Precio: 70,
  //       Incluido: false,
  //     },
  //     {
  //       Detalle: "Windsor, Stonehenge, Bath y termas romanas",
  //       Ciudad: "Londres",
  //       Url: "https://www.visitlondon.com/assets/iStock/london-bus-tour_550.jpg",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "The London Eye",
  //       Ciudad: "Londres",
  //       Url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/36/c2/60.jpg",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle:
  //         "Tower of London, St Pauls Cathedral & Westminster Abbey Tour.",
  //       Ciudad: "Londres",
  //       Url: "https://cdn-imgix.headout.com/tour/17553/TOUR-IMAGE/4e1afc76-4fda-4481-b29c-2fa700b48751-9701-london-4.jpg?auto=compress&fm=pjpg&w=1024&h=639&crop=faces&fit=min",
  //       Precio: 200,
  //       Incluido: false,
  //     },

  //     {
  //       Detalle: "Crucero por los canales de Ámsterdam",
  //       Ciudad: "Amsterdam",
  //       Url: "https://cdn.getyourguide.com/img/tour/53d4bc63ea5eeed0.jpeg/146.jpg",
  //       Precio: 0.0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "The Upside Down Museum",
  //       Ciudad: "Amsterdam",
  //       Url: "https://cdn.getyourguide.com/img/tour/6364ec7dabddd.jpeg/145.jpg",
  //       Precio: 0.0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Giethoorn & Enclosing Dike con Tour en bote",
  //       Ciudad: "Amsterdam",
  //       Url: "https://cdn.getyourguide.com/img/tour/5b79b9ae7620f.jpeg/98.jpg",
  //       Precio: 80,
  //       Incluido: false,
  //     },
  //     {
  //       Detalle: "Van Gogh Museum",
  //       Ciudad: "Amsterdam",
  //       Url: "https://cdn.getyourguide.com/img/tour/57a2134e6f7f4.jpeg/98.jpg",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Vida de Anne Frank y II guerra mundial Tour",
  //       Ciudad: "Amsterdam",
  //       Url: "https://cdn1.intriper.com/wp-content/uploads/2017/12/01133449/casa-ana-frank-amsterdam-principal-1.jpg",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Campo de tulipanes Keukenhof",
  //       Ciudad: "Amsterdam",
  //       Url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/42/01.jpg",
  //       Precio: 39,
  //       Incluido: false,
  //     },

  //     {
  //       Detalle: "Tour por Berlín",
  //       Ciudad: "Berlin",
  //       Url: "https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_mobile_1x/private/image/Berlin_Touristen_L1008278_OCV_ohneo2world_c_visitBerlin_Foto_Philip_Koschel_DL_PPT_0.jpg?itok=9CkqZGpp",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle:
  //         "Visita guiada al campo de concentración Sachsenhausen Memorial",
  //       Ciudad: "Berlin",
  //       Url: "https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/berliner_mauer_karte_saharawagen_1.jpg?h=01d8114f&itok=0_gBGSsw",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Berlin-Prague Tour",
  //       Ciudad: "Berlin",
  //       Url: " https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/18/53/e7.jpg",
  //       Precio: 67,
  //       Incluido: false,
  //     },
  //     {
  //       Detalle: "Berlin Brewery Tour",
  //       Ciudad: "Berlin",
  //       Url: "https://i.ytimg.com/vi/DeXa9L-jOWo/maxresdefault.jpg",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Berlin khroma - Experiencia de arte inmersivo",
  //       Ciudad: "Berlin",
  //       Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmzLCz45Qzl-zpiTMVBmKUSDZExHCw0HdJA&usqp=CAU",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Visita a la puerta de Brandemburgo y Catedral de Berlín",
  //       Ciudad: "Berlin",
  //       Url: "https://www.guiadealemania.com/wp-content/uploads/2010/08/Puerta-de-Brandemburgo-Berlin-1024x682.jpg",
  //       Precio: 0,
  //       Incluido: true,
  //     },
  //     {
  //       Detalle: "Visita a galerías de arte",
  //       Ciudad: "Berlin",
  //       Url: "https://topadventure.com/__export/1659474932611/sites/laverdad/img/2022/08/02/los_11_mejores_museos_y_galerixas_de_arte_de_berlin_galerie_capitain_petzel.jpg_124593801.jpg",
  //       Precio: 10,
  //       Incluido: false,
  //     },
  //   ],
  //   Cupos: 25,
  //   Imagenes: [
  //     {
  //       Url: "https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg",
  //     },
  //     {
  //       Url: "https://www.amsterdam.net/es/wp-content/uploads/sites/93/amsterdam-canales-puentes-hd.jpg",
  //     },
  //     {
  //       Url: "https://images.ecestaticos.com/78tfBTxAaxxz_hZv-Duwj6qgNaM=/144x0:2002x1392/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F90f%2Fe07%2Ff94%2F90fe07f943a2da54c37c2406420d12f3.jpg",
  //     },
  //   ],
  //   Calificacion: 8.9,
  //   Comentarios: [
  //     {
  //       Usuario: "Carolina Ramírez",
  //       Testimonio:
  //         "Todo el viaje muy bien pensado, organizado en sus tiempos y excursiones. Con días de desancanso también. Los hoteles divinos. Un paquete super recomendable para conocer lo mas importante sin andar como locos!",
  //       Fecha: "2022/09/10",
  //     },
  //     {
  //       Usuario: "Luis Fernández",
  //       Testimonio:
  //         "Un viaje para conocer, disfrutar, con actividades muy variadas para todos los gustos. Destacables los hoteles y su ubicación. Todo espectacular. Lo recomiendo.",
  //       Fecha: "2023/03/01",
  //     },
  //   ],
  //   Itinerario: [
  //     {
  //       Dia: 1,
  //       Descripcion:
  //         "Llegada a Londres, check-in en el hotel y tarde libre para explorar la ciudad.",
  //     },
  //     {
  //       Dia: 2,
  //       Descripcion: "Tour por los principales lugares turísticos de Londres.",
  //     },
  //     {
  //       Dia: 3,
  //       Descripcion:
  //         "Tour de todo el día por Windsor, Stonehenge, Bath y termas romanas con comidas incluídas.",
  //     },
  //     {
  //       Dia: 4,
  //       Descripcion:
  //         "DIA LIBRE. Sugerencia: Harry Potter Warner Bros Studio Tour.",
  //     },
  //     {
  //       Dia: 5,
  //       Descripcion:
  //         "Mañana libre para explorar los barrios y mercados de Londres. Por la tarde, London Eye.",
  //     },
  //     {
  //       Dia: 6,
  //       Descripcion:
  //         "DIA LIBRE. Sugerencia: Tower of London, St Pauls Cathedral & Westminster Abbey Tour.",
  //     },
  //     {
  //       Dia: 7,
  //       Descripcion:
  //         "Llegada a Ámsterdam, check-in en el hotel y tarde libre para explorar la ciudad.",
  //     },
  //     {
  //       Dia: 8,
  //       Descripcion:
  //         "Tour en bicicleta por Ámsterdam y visita a los canales. Por la tarde, visita al Upside Down Museum.",
  //     },
  //     {
  //       Dia: 9,
  //       Descripcion:
  //         "DIA LIBRE. Sugerencia: Giethoorn & Enclosing Dike con Tour en bote.",
  //     },
  //     { Dia: 10, Descripcion: "Campo de tulipanes Keukenhof." },
  //     {
  //       Dia: 11,
  //       Descripcion:
  //         "Día libre para disfrutar de los cafés y la vida nocturna de Ámsterdam.",
  //     },
  //     {
  //       Dia: 12,
  //       Descripcion:
  //         "Museo de Anna Frank y II guerra mundial. Por la tarde Van Gogh Museum.",
  //     },
  //     {
  //       Dia: 13,
  //       Descripcion:
  //         "Llegada a Berlín, check-in en el hotel y tarde libre para explorar la ciudad.",
  //     },
  //     {
  //       Dia: 14,
  //       Descripcion:
  //         "Tour por la ciudad. Visita al Muro de Berlín y al Checkpoint Charlie.",
  //     },
  //     {
  //       Dia: 15,
  //       Descripcion:
  //         "Visita guiada al campo de concentración Sachsenhausen Memorial.",
  //     },
  //     {
  //       Dia: 16,
  //       Descripcion: "Berlin khroma - Experiencia de arte inmersivo.",
  //     },
  //     {
  //       Dia: 17,
  //       Descripcion:
  //         "DIA LIBRE para recorrer los parques y jardines de Berlín. Sugerencia: Tour Berlín-Praga.",
  //     },
  //     {
  //       Dia: 18,
  //       Descripcion:
  //         "Visita a la Puerta de Brandenburgo y la Catedral de Berlín.",
  //     },
  //     {
  //       Dia: 19,
  //       Descripcion:
  //         "Tour por los barrios alternativos de Berlín y visita a galerías de arte.",
  //     },
  //     { Dia: 20, Descripcion: "Check-out del hotel y regreso a Buenos Aires." },
  //   ],
  // },
  {
    Id: 4,
    Pais: "Estados Unidos",
    Continente: "America",
    Ciudad: ["Nueva York", "Miami"],
    Titulo: "Nueva York y Miami low cost.",
    FechaInicio: "2023/08/01",
    FechaFinal: "2023/08/10",
    Duracion: 10,
    Aerolinea: "Aerolíneas Argentinas",
    Ida: "Lun 01 agosto 03:00AM Buenos Aires|Directo",
    Regreso: "Mie 10 agosto 19:30PM Miami|Directo",
    Alojamiento: [
      {
        Ciudad: "Nueva York",
        Hotel: "Citadines Connect Fifth Avenue New York",
        Estrellas: 3,
        Calificacion: 7.6,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/303354647.jpg?k=ec7b905351501f77e873f5000092081fc956a84898be39fec87b92781f8000fc&o=",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/149510719.jpg?k=fb5d87291716f12ac7bce273b293e8271984ecc3262f95d0817f6ac3bc87bcfa&o=&hp=1",
          },
          {
            Url: "https://hotel-central-fifth-avenue-new-york.booked.mx/data/Photos/OriginalPhoto/11159/1115942/1115942409/Citadines-Connect-Fifth-Avenue-New-York-Hotel-Exterior.JPEG",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación Estándar",
            Calificacion: 9,
            Url: "https://www.capitaland.com/content/dam/capitaland-media-library/lodging/USA/New%20York%20City/hotel-central-fifth-avenue-new-york/SR_New%20York_Cit%20Con%20Fifth%20Avenue%20_Premier%20Room%20King%2001_LR.jpg.transform/cap-midres/image.jpg",
          },
          {
            Tipo: "Habitación Doble",
            Calificacion: 9,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213365450.jpg?k=42be8aa52d4c9fc28b59b02efa33ffd7d18e4bb524fba7d2dcf4ef2ecd32f2ab&o=&hp=1",
          },
        ],
      },
      {
        Ciudad: "Miami",
        Hotel: "Beachside Hotel",
        Estrellas: 3,
        Calificacion: 8.1,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/daytonabeach/beachside4_0CC08802-956A-562F-4DA36EB7A2DB2873-0cc087419777e78_0cc0885f-aaae-c065-e5d73c1a352ce73a.jpg",
          },
          {
            Url: "https://ak-d.tripcdn.com/images/220q0z000000n9zo31E58_R_960_660_R5_D.jpg",
          },
          {
            Url: "https://www.momondo.com/himg/53/31/2f/ice-93723-99983242-130486.jpg",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación Estándar",
            Calificacion: 8.3,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143999480.jpg?k=dd1a81fad65fcf3973b735482b6ea6467908f90018bee1b35cf5ed7c98485d2d&o=&hp=1",
          },
          {
            Tipo: "Habitación Doble",
            Calificacion: 8.0,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/143998769.jpg?k=9bec0187d27f80bf0ef871c4f416ee60606ca54847bdf6bb62c18fa1ce3c6543&o=&hp=1",
          },
        ],
      },
    ],
    Precio: 1499.0,
    Promocion: 1299.0,
    Moneda: "USD",
    Incluye: "vuelos de cabotaje y traslados",
    Servicios: [
      {
        Detalle:
          "Tour a pie por los principales puntos de interés de la ciudad",
        Ciudad: "Nueva York",
        Url: "https://media.admagazine.com/photos/61e5acc706c10ae95c71b902/16:9/pass/New-York-skyline.jpg",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Tour a la Estatua de la Libertad",
        Ciudad: "Nueva York",
        Url: "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2022-10/Statue-of-Liberty.jpg",
        Precio: 49.99,
        Incluido: false,
      },
      {
        Detalle: "Paseo por Central Park",
        Ciudad: "Nueva York",
        Url: "https://images.adsttc.com/media/images/5bc8/ad3b/f197/cc6b/2200/03c9/newsletter/06_Alternative-Central-Park-6.jpg?1539878195",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Paseo por Brooklyn Bridge",
        Ciudad: "Nueva York",
        Url: "https://www.nothingfamiliar.com/wp-content/uploads/2023/04/Brooklyn-Bridge-View.jpg",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Paseo por Time Square",
        Ciudad: "Nueva York",
        Url: "https://statics.forbesargentina.com/2022/12/639c712a13f8c.jpeg",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "One World Observatory",
        Ciudad: "Nueva York",
        Url: "https://lovingnewyork.es/wp-content/uploads/2020/03/One-World-Observatory-180205093112003.jpg",
        Precio: 65,
        Incluido: false,
      },
      {
        Detalle: "Visita a la famosa playa de South Beach",
        Ciudad: "Miami",
        Url: "https://www.miamiandbeaches.lat/getmedia/2ea8352f-9de8-408d-8cdd-83668211dcf1/south-beach-jetty-1440x900.jpg?width=800&resizemode=force",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Tour en bicicleta por el distrito Art Deco",
        Ciudad: "Miami",
        Url: "https://media.istockphoto.com/id/1074512822/es/foto/estaci%C3%B3n-de-salvavidas-de-miami-beach.jpg?s=612x612&w=0&k=20&c=59mEBv2CVsiq-O8O6c9oVSK7ePGlWPAG3pA7P2lZzFY=",
        Precio: 25.0,
        Incluido: false,
      },
      {
        Detalle: "Excursión a los Everglades",
        Ciudad: "Miami",
        Url: "https://www.civitatis.com/f/estados-unidos/miami/excursion-everglades-589x392.jpg",
        Precio: 50,
        Incluido: false,
      },
      {
        Detalle: "Shopping day en los Outlets",
        Ciudad: "Miami",
        Url: "https://www.civitatis.com/f/estados-unidos/miami/galeria/compras-miami.jpg",
        Precio: 0,
        Incluido: false,
      },
    ],
    Cupos: 30,
    Imagenes: [
      {
        Url: "https://media.cntraveler.com/photos/56e9cfa7387602b37ac51adc/4:5/w_3736,h_4670,c_limit/the-plaza-hotel-new-york-3.jpg",
      },
      {
        Url: "https://media.cntraveler.com/photos/56e9cfa7387602b37ac51adc/4:5/w_3736,h_4670,c_limit/the-plaza-hotel-new-york-6.jpg",
      },
      {
        Url: "https://media.cntraveler.com/photos/54a6a4a4d2f215b5421dcf9f/master/w_775,h_465,c_limit/south-beach-miami-florida-cr-getty.jpg",
      },
    ],
    Calificacion: 7.8,
    Comentarios: [
      {
        Usuario: "Josefina Alemann",
        Testimonio:
          "El viaje a Nueva York y Miami fue económico pero satisfactorio. Los hoteles ofrecieron un desayuno básico pero suficiente. Disfruté de los tours y la playa en Miami. ¡Buena relación calidad-precio!",
        Fecha: "2023/08/05",
      },
      {
        Usuario: "Javier López",
        Testimonio:
          "A pesar de ser un viaje low cost, pude disfrutar de lo mejor de Nueva York y Miami. Los hoteles económicos cumplían con las necesidades básicas y el desayuno era adecuado. Recomiendo este paquete para aquellos con un presupuesto ajustado.",
        Fecha: "2023/08/12",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada a Nueva York, check-in en el hotel y tiempo libre para explorar la ciudad. Se sugiere One World Observatory.",
      },
      {
        Dia: 2,
        Descripcion:
          "Recorrido a pie por los principales puntos de interés de Nueva York. Se sugiere Central Park, Brooklyn Bridge, Time Square.",
      },
      {
        Dia: 3,
        Descripcion:
          "DIA LIBRE. Sugerencia: Excursión a la Estatua de la Libertad.",
      },
      {
        Dia: 4,
        Descripcion:
          "Traslado a Miami y check-in en el hotel. Tiempo libre para disfrutar de la playa de South Beach.",
      },
      {
        Dia: 5,
        Descripcion: "Tour en bicicleta por el distrito Art Deco en Miami.",
      },
      {
        Dia: 6,
        Descripcion:
          "Día libre en Miami para explorar la ciudad a tu propio ritmo.",
      },
      {
        Dia: 7,
        Descripcion: "DIA LIBRE. Sugerencia: Excursión a los Everglades.",
      },
      {
        Dia: 8,
        Descripcion:
          "Día libre en Miami para relajarse en la playa y disfrutar del clima.",
      },
      {
        Dia: 9,
        Descripcion:
          "DIA LIBRE. Sugerencia: Shopping day en los distintos Outlets.",
      },
      {
        Dia: 10,
        Descripcion:
          "Traslado al aeropuerto de Miami para el vuelo de regreso a Buenos Aires. Llegada a Buenos Aires y fin del viaje.",
      },
    ],
  },
  {
    Id: 5,
    Pais: "Perú",
    Continente: "America",
    Ciudad: ["Lima", "Aguas Calientes"],
    Titulo: "Aventurate descubriendo Lima y las ruinas de Machu Picchu",
    FechaInicio: "2023/09/01",
    FechaFinal: "2023/09/08",
    Duracion: 8,
    Aerolinea: "LATAM Airlines",
    Ida: "Jue 01 septiembre 08:00AM Buenos Aires|Directo",
    Regreso: "Jue 08 septiembre 15:30PM Lima|Directo",
    Alojamiento: [
      {
        Ciudad: "Lima",
        Hotel: "Hotel B",
        Estrellas: 4,
        Calificacion: 8.9,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2d/52/5d/hotel-b.jpg?w=700&h=-1&s=1",
          },
          {
            Url: "https://hotelb.pe/wp-content/uploads/2020/08/the-rooftop-movil1-min.jpg",
          },
          {
            Url: "https://www.incaexpert.com/blog/wp-content/uploads/2017/11/hotelb-1160x450.jpg",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación Superior",
            Calificacion: 8.7,
            Url: "https://cdn.audleytravel.com/1050/750/79/506855-chamber-junior-suite-hotel-b-lima.webp",
          },
          {
            Tipo: "Suite",
            Calificacion: 9.2,
            Url: "https://hotelb.pe/wp-content/uploads/2020/08/paq-aposento.jpg",
          },
        ],
      },
      {
        Ciudad: "Aguas Calientes",
        Hotel: "Inti Punku Machu Picchu Hotel",
        Estrellas: 3,
        Calificacion: 8.4,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/121566069.jpg?k=16d8251023115f2afc9541839f52ffe0a5519a27c93216ca06e126c4f64514c6&o=&hp=1",
          },
          {
            Url: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//itemimages/13/07/1307840_v5.jpeg",
          },
          {
            Url: "https://inti-punku-machu-picchu-hotel.booked.mx/data/Photos/OriginalPhoto/12838/1283806/1283806570/Inti-Punku-Machupicchu-Hotel-Suites-Exterior.JPEG",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación Doble",
            Calificacion: 8.6,
            Url: "https://c.otcdn.com/imglib/hotelfotos/8/398/hotel-inti-punku-machu-picchu-005.jpg",
          },
          {
            Tipo: "Suite",
            Calificacion: 8.9,
            Url: "https://a.otcdn.com/imglib/hotelfotos/8/398/hotel-inti-punku-machu-picchu-011.jpg",
          },
        ],
      },
    ],
    Precio: 1999.0,
    Promocion: 1799.0,
    Moneda: "USD",
    Incluye: "traslados ida y vuelta desde Lima hacia Machu Picchu",
    Servicios: [
      {
        Detalle: "Visita guiada por el centro histórico de Lima",
        Ciudad: "Lima",
        Url: "https://www.peru.travel/Contenido/Atractivo/Imagen/es/14/1.1/Principal/centro-historico-de-lima.jpg",
        Precio: 20.0,
        Incluido: true,
      },
      {
        Detalle:
          "Excursion de día completo a Paracas Ica and Huacachina(todo incluído): oasis peruano.",
        Ciudad: "Lima",
        Url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/93/05/c9.jpg",
        Precio: 129.0,
        Incluido: false,
      },
      {
        Detalle: "Visita guiada a las Ruinas de Machu Picchu",
        Ciudad: "Aguas Calientes",
        Url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg",
        Precio: 65.0,
        Incluido: true,
      },
    ],
    Cupos: 40,
    Imagenes: [
      {
        Url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg",
      },
      {
        Url: "https://www.clarin.com/img/2022/12/02/parques-y-jardines-enmarcan-un___Kl5Kzlrvm_2000x1500__1.jpg",
      },
      {
        Url: "https://www.peru.travel/Contenido/Destino/Imagen/es/8/1.4/Principal/lima-banner-3.jpg",
      },
    ],
    Calificacion: 8.6,
    Comentarios: [
      {
        Usuario: "María Rodríguez",
        Testimonio:
          "El viaje a Lima y Machu Picchu fue una experiencia maravillosa. El hotel en Lima ofrecía un desayuno delicioso y las habitaciones eran cómodas. La visita a Machu Picchu fue impresionante y valió cada centavo. ¡Recomiendo este viaje!",
        Fecha: "2023/09/05",
      },
      {
        Usuario: "Carlos Martínez",
        Testimonio:
          "El viaje a Perú fue increíble. Lima es una ciudad vibrante y las Ruinas de Machu Picchu son impresionantes. Los hoteles ofrecieron un buen servicio y el desayuno incluido fue conveniente. Recomiendo este viaje a cualquiera que quiera explorar la cultura peruana.",
        Fecha: "2023/09/12",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada a Lima, check-in en el hotel y tiempo libre para explorar la ciudad.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita guiada por el centro histórico de Lima y degustación de la gastronomía local.",
      },
      {
        Dia: 3,
        Descripcion:
          "Traslado a Aguas Calientes, cerca de Machu Picchu, y check-in en el hotel.",
      },
      {
        Dia: 4,
        Descripcion:
          "Excursión guiada de día completo a las Ruinas de Machu Picchu.",
      },
      {
        Dia: 5,
        Descripcion:
          "Tiempo libre en Machu Picchu para explorar a tu propio ritmo o realizar actividades opcionales.",
      },
      {
        Dia: 6,
        Descripcion:
          "Regreso a Lima y día libre para disfrutar de la ciudad, visitar museos o realizar compras.",
      },
      {
        Dia: 7,
        Descripcion:
          "DIA LIBRE. Sugerencia: excursión a Paracas Ica and Huacachina: oasis peruano.",
      },
      {
        Dia: 8,
        Descripcion:
          "Traslado al aeropuerto de Lima para el vuelo de regreso a Buenos Aires.",
      },
    ],
  },
  {
    Id: 6,
    Pais: "Suiza",
    Continente: "Europa",
    Ciudad: "Zúrich",
    Titulo: "Descubre Suiza en 15 días",
    FechaInicio: "2023/10/01",
    FechaFinal: "2023/10/15",
    Duracion: 15,
    Aerolinea: "Swiss International Air Lines",
    Ida: "Sáb 01 octubre 09:00AM Buenos Aires|Directo",
    Regreso: "Sáb 15 octubre 18:30PM Zúrich|Directo",
    Alojamiento: [
      {
        Hotel: "Baur au Lac",
        Estrellas: 5,
        Calificacion: 9.5,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/185096503.jpg?k=1dceef7a5c802f8fbdc8297ce82d2d0b25a45a03c3986e503b318a9fb51b8a5c&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428414717.jpg?k=4aec374457e36c4a2b2595b1b5f97f3e54d0a4c144dfb46728b017e5fcbc1605&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/419368022.jpg?k=72b9b9d78ca7064ed0b6be558932692c9bffca3f6ffb90b174388be1c934f746&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/419367761.jpg?k=361b1926d6039e213c0c528e2df0250a15ef9279d008adc35bf815ce9ee11e66&o=&hp=1",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Suite Deluxe",
            Calificacion: 9.8,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357719032.jpg?k=0eaf0cb275a161c599891d2f76468e10d223c90c05251f720c8a72210a1b97cc&o=&hp=1",
          },
          {
            Tipo: "Habitacion Deluxe",
            Calificacion: 10,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357718901.jpg?k=1192c3e5e52902a4731530f66845c1f9870fd27f87737c5e5079fb751c434d0d&o=&hp=1",
          },
        ],
      },
    ],
    Precio: 5500.0,
    Promocion: 4999.0,
    Moneda: "USD",
    Incluye: "transporte desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Excursión al Matterhorn en Zermatt",
        URL: "https://cdn.getyourguide.com/img/tour/5d035dc709f04.jpeg/97.jpg",
        Precio: 80.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en barco por el lago de Ginebra",
        URL: "https://www.civitatis.com/f/suiza/ginebra/paseo-barco-lago-leman-589x392.jpg",
        Precio: 50.0,
        Incluido: false,
      },
      {
        Detalle: "Visita a las Cataratas del Rin en Schaffhausen",
        URL: "https://queverenelmundo.com/guias/wp-content/uploads/Miradores-Cataratas-Rin.jpg",
        Precio: 40.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en el Tren Glacier Express",
        URL: "https://www.viajabonito.mx/wp-content/uploads/2014/06/video-descubriendo-suiza-tren-alpes-suizos.jpg",
        Precio: 120.0,
        Incluido: false,
      },
    ],
    Cupos: 40,
    Imagenes: [
      {
        Url: "https://images.hola.com/imagenes/viajes/20220609211379/que-hacer-en-zurich-en-dos-dias/1-99-67/gettyimages-1267692130-t.jpg?tx=w_680",
      },
      {
        Url: "https://tourscanner.com/blog/wp-content/uploads/2021/08/Chinese-Garden-Zurich.jpg",
      },
      {
        Url: "https://s2.abcstatics.com/media/viajar/2021/11/16/mercadillo-navidad-k99D--620x349@abc.jpg",
      },
    ],
    Calificacion: 9.4,
    Comentarios: [
      {
        Usuario: "Ana Trejo",
        Testimonio:
          "El hotel era elegante y cómodo, con un servicio impecable. Me encantó visitar el Matterhorn y disfrutar de las vistas panorámicas. ¡Una experiencia increíble!",
        Fecha: "2023/10/20",
      },
      {
        Usuario: "Javier Trianos",
        Testimonio:
          "Suiza es un país impresionante. Disfruté mucho del paseo en el Tren Glacier Express y de la belleza natural de los Alpes suizos. Recomendaría este paquete a cualquiera.",
        Fecha: "2023/11/02",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para descansar y explorar los alrededores de Zúrich.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita al casco antiguo de Zúrich y paseo por el lago de Zúrich.",
      },
      {
        Dia: 3,
        Descripcion:
          "Excursión al Matterhorn en Zermatt, una de las montañas más famosas de los Alpes.",
      },
      {
        Dia: 4,
        Descripcion:
          "Paseo en barco por el lago de Ginebra y visita a la ciudad de Ginebra.",
      },
      {
        Dia: 5,
        Descripcion:
          "Día libre para explorar Zúrich o realizar actividades opcionales.",
      },
      {
        Dia: 6,
        Descripcion:
          "Visita a las Cataratas del Rin en Schaffhausen y recorrido por la ciudad.",
      },
      {
        Dia: 7,
        Descripcion:
          "Excursión a Lucerna y paseo por el Puente de la Capilla y el casco antiguo.",
      },
      {
        Dia: 8,
        Descripcion:
          "Paseo en el Tren Glacier Express, uno de los trenes panorámicos más famosos del mundo.",
      },
      {
        Dia: 9,
        Descripcion:
          "Excursión al monte Pilatus y disfrute de las vistas panorámicas desde la cima.",
      },
      {
        Dia: 10,
        Descripcion:
          "Día libre para relajarse en el hotel o realizar actividades opcionales.",
      },
      {
        Dia: 11,
        Descripcion:
          "Visita a Berna, la capital de Suiza, y recorrido por su casco antiguo.",
      },
      {
        Dia: 12,
        Descripcion:
          "Excursión al valle de Lauterbrunnen y visita a las cascadas de Trümmelbach.",
      },
      { Dia: 13, Descripcion: "Día de compras y tiempo libre en Zúrich." },
      {
        Dia: 14,
        Descripcion:
          "Visita al Museo de Arte de Zúrich y recorrido por la Bahnhofstrasse, una famosa calle comercial.",
      },
      {
        Dia: 15,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto para el vuelo de regreso.",
      },
    ],
  },
  {
    Id: 7,
    Pais: "Emiratos Árabes Unidos",
    Continente: "Asia",
    Ciudad: "Dubái",
    Titulo: "Descubre Dubái en 7 días",
    FechaInicio: "2023/11/01",
    FechaFinal: "2023/11/07",
    Duracion: 7,
    Aerolinea: "Emirates",
    Ida: "Mar 01 noviembre 08:00AM Buenos Aires|Escalas",
    Regreso: "Mar 07 noviembre 20:30PM Dubái|Escalas",
    Alojamiento: [
      {
        Hotel: "Burj Al Arab Jumeirah",
        Estrellas: 5,
        Calificacion: 9.7,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200741260.jpg?k=95dcb53ec4077ed91e199d381f8e8a73d15fa5986928f1e07e51b354ee0ed127&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457401944.jpg?k=f554ce9e1de38e1f4ee9429356de24d274f5d87a55539a953cc8f7aeb2c54ad0&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457393159.jpg?k=13fe3f4c025e4b462d37ada229b6423b069ffc64514617b9104fc3a065c935c6&o=&hp=1",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Suite Deluxe con vistas al mar",
            Calificacion: 9.8,
            Url: "https://media-cdn.tripadvisor.com/media/photo-s/07/12/10/2c/two-bedroom-deluxe-suite--v363066.jpg",
          },
          {
            Tipo: "Suite Presidencial",
            Calificacion: 10,
            Url: "https://s.abcnews.com/images/Lifestyle/HT_club_suite_lower_level_sk_150108_3x2_1600.jpg?w=1600",
          },
        ],
      },
    ],
    Precio: 8000.0,
    Promocion: 6999.0,
    Moneda: "USD",
    Incluye: "transporte desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Visita al Burj Khalifa, el edificio más alto del mundo",
        URL: "https://www.guinnessworldrecords.es/Images/Burj-portrait-lagre_tcm29-475749.jpg",
        Precio: 50.0,
        Incluido: false,
      },
      {
        Detalle: "Safari por el desierto de Dubái",
        URL: "https://www.shore2shore.es/media/s2scms/tours/images/carousel/5_kyhJpfs.jpg",
        Precio: 80.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en barco por la Marina de Dubái",
        URL: "https://www.civitatis.com/f/emiratos-arabes-unidos/dubai/barco-dubai-marina-burj-khalifa-589x392.jpg",
        Precio: 40.0,
        Incluido: false,
      },
      {
        Detalle: "Cena en el restaurante Al Mahara",
        URL: "https://arenatours.com/wp-content/uploads/united-arab-emirates/burj-al-arab/al-mahara/al-mahara-1.jpeg",
        Precio: 150.0,
        Incluido: false,
      },
    ],
    Cupos: 30,
    Imagenes: [
      {
        Url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1225427289-1-1674411305.jpg",
      },
      {
        Url: "https://www.civitatis.com/blog/wp-content/uploads/2009/04/blog-guia-dubai.jpg",
      },
      {
        Url: "https://static.barcelo.com/content/dam/bpt/posts/2018/12/Dubai.jpg.bhgimg.square1000.jpg/1656412806199.jpg",
      },
    ],
    Calificacion: 9.6,
    Comentarios: [
      {
        Usuario: "Raquel Fernandez",
        Testimonio:
          "El hotel Burj Al Arab Jumeirah es simplemente espectacular. El servicio, las instalaciones y las vistas son de otro mundo. Una experiencia inolvidable.",
        Fecha: "2023/11/10",
      },
      {
        Usuario: "Oscar Luchetti",
        Testimonio:
          "Dubái es una ciudad fascinante llena de lujo y modernidad. Disfruté mucho de las actividades incluidas en el paquete y quedé impresionado con el Burj Khalifa.",
        Fecha: "2023/11/15",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para descansar y explorar los alrededores.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita al Burj Khalifa y disfrute de las impresionantes vistas de la ciudad desde lo más alto del edificio.",
      },
      {
        Dia: 3,
        Descripcion:
          "Safari por el desierto de Dubái con actividades como paseo en camello y sandboarding.",
      },
      {
        Dia: 4,
        Descripcion:
          "Recorrido por la ciudad, incluyendo la Mezquita de Jumeirah y el mercado de oro.",
      },
      {
        Dia: 5,
        Descripcion:
          "Paseo en barco por la Marina de Dubái y admirar los rascacielos desde el agua.",
      },
      {
        Dia: 6,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del hotel o explorar la ciudad a tu propio ritmo.",
      },
      {
        Dia: 7,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto para el vuelo de regreso.",
      },
    ],
  },
  {
    Id: 8,
    Pais: "Fiyi",
    Continente: "Oceania",
    Ciudad: "Nadi",
    Titulo: "Explora Fiyi en 12 días",
    FechaInicio: "2023/09/01",
    FechaFinal: "2023/09/12",
    Duracion: 12,
    Aerolinea: "Fiji Airways",
    Ida: "Jue 01 septiembre 09:00AM Buenos Aires|Escalas",
    Regreso: "Lun 12 septiembre 16:30PM Nadi|Escalas",
    Alojamiento: [
      {
        Hotel: "Tokoriki Island Resort",
        Estrellas: 4,
        Calificacion: 9.3,
        RegimenComidas: "Pensión completa",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/177159607.jpg?k=98ae71864b410ecf3e43eb984e65af8e328c70d0254addeae57aec757c1d9d03&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/150885344.jpg?k=e8b762ab7456d7b976f410085a1c3d62af9263ec01c28b5e959786b6341c297a&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/150879580.jpg?k=efbe9c6116c5593baa0acb896717f90dccf3ef0dbec952fdb79925e8604fea00&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/150883759.jpg?k=29c878fed4f6dc59abc869f4eb777ffe6b8768a07aa7393a7e7b1cdbea446638&o=&hp=1",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Bure frente a la playa",
            Calificacion: 9.5,
            Url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgejwKHfY7WSWmHJlkOm7W3zKjuDCgCR5HtlNgJgJQGllSLWxQr1EO0-DtlWz0jBv4d9o&usqp=CAU",
          },
          {
            Tipo: "Villa frente a la piscina",
            Calificacion: 9.2,
            Url: "https://beautiful-places.de/wp-content/uploads/2020/03/moniquedecaro-tokoriki-fiji-8065-620x413.jpg",
          },
        ],
      },
    ],
    Precio: 5000.0,
    Promocion: 4499.0,
    Moneda: "USD",
    Incluye: "Transporte desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle:
          "Excursión a la Isla de Modriki, conocida como la isla de 'Náufrago'",
        URL: "https://s2.abcstatics.com/media/play/2017/05/10/isla-naufrago-kNPE--620x349@abc.jpg",
        Precio: 100.0,
        Incluido: false,
      },
      {
        Detalle:
          "Paseo en bote por el río Sigatoka y visita a un pueblo tradicional fiyiano",
        URL: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/aa/c7.jpg",
        Precio: 50.0,
        Incluido: false,
      },
      {
        Detalle: "Snorkel en la barrera de coral de las Islas Mamanuca",
        URL: "https://www.periodistadigital.com/wp-content/uploads/2019/03/buceo-islas-fiji.jpg?width=1200&enable=upscale",
        Precio: 30.0,
        Incluido: false,
      },
      {
        Detalle: "Comida en la playa con música y danzas tradicionales",
        URL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/1b/e2/c4/beach-bbq.jpg?w=700&h=-1&s=1",
        Precio: 0,
        Incluido: true,
      },
    ],
    Cupos: 20,
    Imagenes: [
      {
        Url: "https://cdn.getyourguide.com/img/location/072817983e2a6df5.jpeg/68.jpg",
      },
      {
        Url: "https://okdiario.com/img/viajes/2017/08/03/islas-fiji-un-oasis-de-lujo-en-el-que-pasar-tus-vacaciones-4.jpg",
      },
      {
        Url: "https://dondealojarseen.com/wp-content/uploads/2019/05/Islas-Fiji.jpg",
      },
    ],
    Calificacion: 9.4,
    Comentarios: [
      {
        Usuario: "Laura Bloise",
        Testimonio:
          "El Tokoriki Island Resort es el paraíso en la tierra. Las playas son increíbles y el servicio es impecable. ¡Definitivamente volveré!",
        Fecha: "2023/09/18",
      },
      {
        Usuario: "Javier Checco",
        Testimonio:
          "Fiyi es un destino de ensueño. Me encantó la experiencia de nadar en las aguas cristalinas y relajarme en la playa. Lo recomendaría a todos.",
        Fecha: "2023/09/25",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para disfrutar de la playa y las instalaciones del resort.",
      },
      {
        Dia: 2,
        Descripcion:
          "Excursión a la Isla de Modriki, donde se filmó la película 'Náufrago'.",
      },
      {
        Dia: 3,
        Descripcion:
          "Día de snorkel en la barrera de coral de las Islas Mamanuca.",
      },
      {
        Dia: 4,
        Descripcion:
          "Visita al río Sigatoka y a un pueblo tradicional fiyiano para conocer su cultura y costumbres.",
      },
      {
        Dia: 5,
        Descripcion:
          "Día libre para disfrutar de actividades acuáticas, como kayak o paddleboarding.",
      },
      {
        Dia: 6,
        Descripcion:
          "Masaje relajante en el spa del resort y tarde de descanso en la playa.",
      },
      {
        Dia: 7,
        Descripcion:
          "Cena en la playa con música en vivo y danzas tradicionales fiyianas.",
      },
      {
        Dia: 8,
        Descripcion:
          "Día libre para explorar la isla a tu propio ritmo o relajarte en el resort.",
      },
      {
        Dia: 9,
        Descripcion:
          "Excursión en barco a una isla desierta para disfrutar de la tranquilidad y la belleza natural.",
      },
      {
        Dia: 10,
        Descripcion:
          "Clase de cocina fiyiana para aprender a preparar platos tradicionales.",
      },
      {
        Dia: 11,
        Descripcion:
          "Último día en el resort para disfrutar de las instalaciones y despedirse de Fiyi.",
      },
      {
        Dia: 12,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto para el vuelo de regreso.",
      },
    ],
  },
  {
    Id: 9,
    Pais: "Venezuela",
    Continente: "America",
    Ciudad: "Canaima",
    Titulo: "Descubre Canaima en 15 días",
    FechaInicio: "2023/11/01",
    FechaFinal: "2023/11/15",
    Duracion: 15,
    Aerolinea: "Aerolíneas Venezolanas",
    Ida: "Mié 01 noviembre 08:00AM Caracas|Directo",
    Regreso: "Mié 15 noviembre 16:30PM Caracas|Directo",
    Alojamiento: [
      {
        Hotel: "Waku Lodge",
        Estrellas: 3,
        Calificacion: 8.5,
        RegimenComidas: "Pensión completa",
        Imagenes: [
          {
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3b/a1/ea/salon.jpg?w=1100&h=-1&s=1",
          },
          {
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/3b/a1/f2/relax.jpg?w=800&h=-1&s=1",
          },
          {
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/63/76/d8/waku-lodge.jpg?w=1200&h=-1&s=1",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Cabaña",
            Calificacion: 8.2,
            Url: "https://media-cdn.tripadvisor.com/media/photo-s/05/6e/a4/1d/habitacion-waku-lodge.jpg",
          },
          {
            Tipo: "Suite Casa Kanau",
            Calificacion: 9.8,
            Url: "https://wakulodge.com/wp-content/uploads/2020/05/El_Lodge_10.jpg",
          },
        ],
      },
    ],
    Precio: 3000.0,
    Promocion: 2699.0,
    Moneda: "USD",
    Incluye: "transporte desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Visita a la Laguna de Canaima y salto El Sapo",
        URL: "https://images.mnstatic.com/f0/78/f078c3e040f8a1ceaca6279cf20d934a.jpg",
        Precio: 20.0,
        Incluido: false,
      },
      {
        Detalle: "Excursión a la cascada Salto Ángel",
        URL: "https://ospreyexpeditions.com/wp-content/uploads/2022/08/Salto-Angel-desde-el-mirador.webp",
        Precio: 150.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en bote por el río Carrao y el río Churún",
        URL: "https://upload.wikimedia.org/wikipedia/commons/6/64/Curiara.jpg",
        Precio: 30.0,
        Incluido: false,
      },
      {
        Detalle: "Cena en el campamento con música",
        URL: "https://www.conkhep.com.ve/uploads/hoteles/1655913633camcan5jpg",
        Precio: 0,
        Incluido: true,
      },
    ],
    Cupos: 30,
    Imagenes: [
      {
        Url: "https://www.101viajes.com/sites/default/files/Parque%20Canaima.jpg",
      },
      {
        Url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Canaima_6.JPG",
      },
      {
        Url: "https://www.travelsauro.com/wp-content/uploads/2016/11/lagoon-canaima.jpg",
      },
    ],
    Calificacion: 7.9,
    Comentarios: [
      {
        Usuario: "Jorge Gómez",
        Testimonio:
          "Canaima es un lugar mágico. Disfruté mucho de las vistas y las excursiones. El campamento era cómodo y el personal muy amable.",
        Fecha: "2023/11/20",
      },
      {
        Usuario: "Sabrina Rivas",
        Testimonio:
          "La cascada Salto Ángel fue una experiencia impresionante. Recomiendo esta aventura a todos los amantes de la naturaleza.",
        Fecha: "2023/11/25",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al campamento y tiempo libre para familiarizarse con el entorno.",
      },
      {
        Dia: 2,
        Descripcion: "Visita a la Laguna de Canaima y al salto El Sapo.",
      },
      {
        Dia: 3,
        Descripcion:
          "Excursión a la cascada Salto Ángel y admiración de su majestuosidad.",
      },
      {
        Dia: 4,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del campamento y relajarse.",
      },
      {
        Dia: 5,
        Descripcion:
          "Paseo en bote por los ríos Carrao y Churún, observando la belleza natural de la región.",
      },
      {
        Dia: 6,
        Descripcion:
          "Caminata por los alrededores del campamento y exploración de la flora y fauna local.",
      },
      {
        Dia: 7,
        Descripcion:
          "Visita a los tepuyes y observación de las formaciones rocosas características de la zona.",
      },
      {
        Dia: 8,
        Descripcion: "Día de descanso y disfrute de la naturaleza circundante.",
      },
      {
        Dia: 9,
        Descripcion:
          "Excursión a las cascadas de Aponwao y Kavak, con paradas para nadar en las pozas naturales.",
      },
      {
        Dia: 10,
        Descripcion:
          "Clase de artesanía indígena para aprender sobre la cultura local.",
      },
      {
        Dia: 11,
        Descripcion:
          "Día libre para relajarse en la playa y disfrutar del paisaje caribeño.",
      },
      {
        Dia: 12,
        Descripcion:
          "Participación en actividades de turismo comunitario con las comunidades indígenas de la región.",
      },
      {
        Dia: 13,
        Descripcion:
          "Excursión al Delta del Orinoco para observar la vida silvestre y las maravillas naturales.",
      },
      {
        Dia: 14,
        Descripcion:
          "Navegación por los ríos Orinoco y Caroní, explorando los canales y lagunas.",
      },
      {
        Dia: 15,
        Descripcion:
          "Check-out del campamento y traslado al aeropuerto para el vuelo de regreso.",
      },
    ],
  },
  {
    Id: 10,
    Pais: "Nueva Zelanda",
    Continente: "Oceania",
    Ciudad: "Wellington",
    Titulo: "Descubre Wellington y sus maravillas naturales",
    FechaInicio: "2023/08/17",
    FechaFinal: "2023/08/27",
    Duracion: 6,
    Aerolinea: "Aerolíneas Argentinas",
    Ida: "Jue 17 agosto 8:00AM Buenos Aires|Directo",
    Regreso: "Dom 27 agosto 16:15PM Wellington|Directo",
    Alojamiento: [
      {
        Hotel: "Gilmer Apartment Hotel",
        Estrellas: 4,
        Calificacion: 8.6,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1640000/1633900/1633802/e7324625.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1640000/1633900/1633802/3115b8ab.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1640000/1633900/1633802/36d03d47.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1640000/1633900/1633802/d1aad1f6.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Estudio Deluxe",
            Calificacion: 8.9,
            Url: "https://images.trvl-media.com/lodging/2000000/1640000/1633900/1633802/3115b8ab.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Tipo: "Habitacion estandar con 2 camas individuales",
            Calificacion: 9.5,
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/95/e3/2a/deluxe-studio-apartment.jpg?w=1200&h=-1&s=1",
          },
        ],
      },
    ],
    Precio: 1100.5,
    Promocion: 850.0,
    Moneda: "USD",
    Incluye: "traslado desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Recorrido por los jardines botánicos de Wellington",
        Url: "https://cdn.getyourguide.com/img/location/56f166cec9784.jpeg/70.jpg",
        Precio: 15.0,
        Incluido: false,
      },
      {
        Detalle: "Visita al Museo Te Papa Tongarewa",
        Url: "https://www.tepapa.govt.nz/sites/default/files/styles/card_image_700x_525/public/parking_tile.jpg?itok=iW7gY2O6",
        Precio: 30.0,
        Incluido: false,
      },
      {
        Detalle: "Tour por la bahía de Wellington en barco",
        Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/b3/a4/d7/20151208-144243-largejpg.jpg?w=1200&h=1200&s=1",
        Precio: 50.0,
        Incluido: false,
      },
      { Detalle: "Cena en el hotel", Precio: 0, Incluido: true },
    ],
    Cupos: 50,
    Imagenes: [
      {
        Url: "https://st4.depositphotos.com/1028066/39289/i/450/depositphotos_392898372-stock-photo-wellington-city-harbor-and-downtown.jpg",
      },
      {
        Url: "https://content.r9cdn.net/rimg/dimg/d1/1d/eacf72d7-lm-51676-15f8371b127.jpg?width=688&height=350&xhint=2205&yhint=1757&crop=true",
      },
    ],
    Calificacion: 8.9,
    Comentarios: [
      {
        Usuario: "Paula Sanchez",
        Testimonio:
          "El hotel está muy bien ubicado cerca del waterfront. Las habitaciones son cómodas y el desayuno es delicioso. Recomendaría este paquete sin dudarlo.",
        Fecha: "2023/06/10",
      },
      {
        Usuario: "Martín Gutierrez",
        Testimonio:
          "Wellington es una ciudad encantadora y el hotel superó mis expectativas. El personal fue amable y atento. Definitivamente, volvería a visitar Wellington.",
        Fecha: "2023/07/01",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para explorar el waterfront de Wellington.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita a los jardines botánicos de Wellington y disfrute de la naturaleza exuberante.",
      },
      {
        Dia: 3,
        Descripcion:
          "Exploración del Museo Te Papa Tongarewa para sumergirse en la historia y cultura de Nueva Zelanda.",
      },
      {
        Dia: 4,
        Descripcion:
          "Tour en barco por la bahía de Wellington para apreciar las vistas panorámicas de la ciudad.",
      },
      {
        Dia: 5,
        Descripcion:
          "Tiempo libre para disfrutar de actividades opcionales o explorar más de Wellington a su propio ritmo.",
      },
      {
        Dia: 6,
        Descripcion:
          "Check-out del hotel y regreso a Buenos Aires en el vuelo programado.",
      },
    ],
  },
  {
    Id: 11,
    Pais: "Islandia",
    Continente: "Europa",
    Ciudad: "Reikiavik",
    Titulo: "Descubre la magia de Islandia",
    FechaInicio: "2023/12/15",
    FechaFinal: "2023/12/22",
    Duracion: 8,
    Aerolinea: "Aerolíneas Argentinas",
    Ida: "Jue 15 diciembre 09:30AM Buenos Aires|Directo",
    Regreso: "Jue 22 diciembre 18:15PM Reikiavik|Directo",
    Alojamiento: [
      {
        Hotel: "Hotel Reikiavik Centrum",
        Estrellas: 4,
        Calificacion: 8.5,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://reykjavik-centrum-hotel.hotelmix.es/data/Photos/OriginalPhoto/12770/1277060/1277060836/Hotel-Reykjavik-Centrum-Exterior.JPEG",
          },
          {
            Url: "https://reykjavik-centrum.at-hotels.com/data/Pics/OriginalPhoto/12770/1277060/1277060572/pic-centrum-hotel-reykjavik-3.JPEG",
          },
          {
            Url: "https://islandshotel.vettvangur.is/media/en5lwn2s/uppsalir.jpg?width=530&height=316&rnd=133027181553500000&format=webp",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación doble",
            Calificacion: 8.1,
            Url: "https://res.cloudinary.com/lastminute/image/upload/c_scale,w_470/q_auto/v1580909505/30409171103_be4899d5fd_o_ek5fjo.jpg",
          },
          {
            Tipo: "Suite de lujo",
            Calificacion: 9.2,
            Url: "https://d19lgisewk9l6l.cloudfront.net/assetbank/Junior_Suite_Hotel_Reykjavik_Iceland_9450.jpg",
          },
        ],
      },
    ],
    Precio: 2500.0,
    Promocion: 2200.0,
    Moneda: "USD",
    Incluye: "traslado desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Tour por el Círculo Dorado",
        Url: "https://imgcap.capturetheatlas.com/wp-content/uploads/2018/11/FOM_1346-1415x540.jpg",
        Precio: 50.0,
        Incluido: false,
      },
      {
        Detalle: "Excursión a la Laguna Azul",
        Url: "https://pangea-public-content.s3-eu-west-1.amazonaws.com/files/Destiny/20/viaje-islandia-laguna-azul.jpg",
        Precio: 80.0,
        Incluido: false,
      },
      {
        Detalle: "Visita a la Península de Snæfellsnes",
        Url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/d6/01.jpg",
        Precio: 80.0,
        Incluido: false,
      },
      {
        Detalle: "Visita a la playa de Reynisfjara",
        Precio: 0,
        Incluido: true,
      },
      { Detalle: "Cena en un restaurante local", Precio: 0, Incluido: true },
    ],
    Cupos: 50,
    Imagenes: [
      {
        Url: "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/reykjavik-iceland/overview/reykjavik-iceland-city-mountan-view.jpg?$750x320$",
      },
      {
        Url: "https://images.hola.com/imagenes/viajes/20190920149726/reikiavik-islandia-48-horas/0-721-432/reikiavik-panoramica-lago-t.jpg?tx=w_680",
      },
      {
        Url: "https://guidetoiceland.imgix.net/284566/x/0/aurora-boreal-sobre-el-estanque-de-la-ciudad-en-reikiavik.jpg?ar=1.91%3A1&w=1200&fit=crop",
      },
    ],
    Calificacion: 9.4,
    Comentarios: [
      {
        Usuario: "María López",
        Testimonio:
          "Islandia es un lugar mágico. El hotel fue cómodo y el personal amable. Recomiendo este viaje a todos los amantes de la naturaleza.",
        Fecha: "2023/06/10",
      },
      {
        Usuario: "Pedro Gómez",
        Testimonio:
          "La Laguna Azul fue una experiencia única. El hotel ofrecía todas las comodidades necesarias para una estadía agradable. Definitivamente, volvería a Islandia.",
        Fecha: "2023/07/01",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion: "Llegada al hotel y tiempo libre para explorar Reikiavik.",
      },
      {
        Dia: 2,
        Descripcion:
          "Excursión al Círculo Dorado para visitar el Parque Nacional Thingvellir, las cascadas de Gullfoss y los géiseres de Geysir.",
      },
      {
        Dia: 3,
        Descripcion:
          "Visita a la Laguna Azul para disfrutar de las aguas termales y los tratamientos de spa.",
      },
      {
        Dia: 4,
        Descripcion:
          "Exploración de la playa de Reynisfjara y sus famosas formaciones rocosas.",
      },
      {
        Dia: 5,
        Descripcion:
          "Día libre para actividades opcionales, como una excursión a los glaciares o una caminata por el Parque Nacional Vatnajökull.",
      },
      {
        Dia: 6,
        Descripcion:
          "Recorrido por la Península de Snæfellsnes, conocida por su belleza natural y sus paisajes impresionantes.",
      },
      {
        Dia: 7,
        Descripcion:
          "Tiempo libre para disfrutar de Reikiavik y sus encantadores cafés y tiendas.",
      },
      {
        Dia: 8,
        Descripcion:
          "Check-out del hotel y regreso a Buenos Aires en el vuelo programado.",
      },
    ],
  },
  {
    Id: 12,
    Pais: "Grecia",
    Continente: "Europa",
    Ciudad: "Atenas",
    Titulo: "Descubre la grandeza de la antigua Atenas",
    FechaInicio: "2023/10/15",
    FechaFinal: "2023/10/20",
    Duracion: 6,
    Aerolinea: "Aegean Airlines",
    Ida: "Sáb 15 octubre 10:00AM Buenos Aires|Directo",
    Regreso: "Jue 20 octubre 18:30PM Atenas|Directo",
    Alojamiento: [
      {
        Hotel: "Hotel Grande Acropolis",
        Estrellas: 4,
        Calificacion: 8.7,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1470000/1464500/1464476/005bdd42.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Url: "https://www.oandbhotel.com/wp-content/uploads/oandb-homepage5.jpg",
          },
          {
            Url: "https://www.oandbhotel.com/wp-content/uploads/oandb-thehotel-photo1.jpg",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación doble estándar",
            Calificacion: 7.8,
            Url: "https://www.oandbhotel.com/wp-content/uploads/ob-standard-room-photo3.jpg",
          },
          {
            Tipo: "Suite con vista a la Acrópolis",
            Calificacion: 9.4,
            Url: "https://www.oandbhotel.com/wp-content/uploads/ob-acropolis-grand-suite-photo4-1024x680.jpg",
          },
        ],
      },
    ],
    Precio: 1250.0,
    Promocion: 1125.0,
    Moneda: "USD",
    Incluye: "traslado desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Visita guiada a la Acrópolis",
        URL: "https://www.grecotour.com/5668/visita-acropolis-atenas.jpg",
        Precio: 30.0,
        Incluido: false,
      },
      {
        Detalle: "Excursión a Delfos",
        URL: "https://toursgratis.com/images/data/Jul-2021/76c7098e70d1451cb9358d6d0314db81.jpg",
        Precio: 75.0,
        Incluido: false,
      },
      {
        Detalle: "Recorrido en barco por las islas del Golfo Sarónico",
        URL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/56/1b/f1/caption.jpg?w=1200&h=-1&s=1",
        Precio: 50.0,
        Incluido: false,
      },
      {
        Detalle: "Cena en un restaurante tradicional",
        URL: "https://dondealojarseen.com/wp-content/uploads/2019/02/Hotel-Grande-Bretagne-Luxury-Collection-Atenas.jpg",
        Precio: 0,
        Incluido: true,
      },
    ],
    Cupos: 60,
    Imagenes: [
      {
        Url: "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/blog/grecia_atenas_monastiraki_shutterstock_1193397715_cge2010_shutterstock.jpg?itok=F_raqWsr",
      },
      {
        Url: "https://image.jimcdn.com/app/cms/image/transf/dimension=602x1024:format=jpg/path/sa46c51114505eaab/image/i996d775dee5f4469/version/1536951366/image.jpg",
      },
      {
        Url: "https://www.vinccihoteles.com/blog/wp-content/uploads/2023/03/playa.png",
      },
    ],
    Calificacion: 9.1,
    Comentarios: [
      {
        Usuario: "Jesica López",
        Testimonio:
          "El hotel tenía una ubicación perfecta cerca de todos los lugares de interés. El personal fue amable y servicial. ¡Disfruté mucho de mi estancia!",
        Fecha: "2023/11/01",
      },
      {
        Usuario: "Juan Roldan",
        Testimonio:
          "Atenas es una ciudad increíble con tanta historia. Este paquete fue una excelente opción para explorar los sitios arqueológicos y disfrutar de la cultura griega.",
        Fecha: "2023/11/10",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para descansar y explorar los alrededores de Atenas.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita guiada a la Acrópolis y recorrido por los principales monumentos históricos de Atenas.",
      },
      {
        Dia: 3,
        Descripcion:
          "Excursión de día completo a Delfos, visitando el Oráculo de Delfos y el Teatro de Epidauro.",
      },
      {
        Dia: 4,
        Descripcion:
          "Recorrido en barco por las islas del Golfo Sarónico, visitando Hydra, Poros y Egina.",
      },
      {
        Dia: 5,
        Descripcion:
          "Tiempo libre para explorar Atenas por cuenta propia o realizar actividades opcionales.",
      },
      {
        Dia: 6,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto para el vuelo de regreso.",
      },
    ],
  },

  {
    Id: 13,
    Pais: "Sudáfrica",
    Continente: "Africa",
    Ciudad: "Ciudad del Cabo",
    Titulo: "Descubre Sudáfrica en 10 días",
    FechaInicio: "2023/10/15",
    FechaFinal: "2023/10/24",
    Duracion: 10,
    Aerolinea: "South African Airways",
    Ida: "Sáb 15 octubre 10:00AM Buenos Aires|Escalas",
    Regreso: "Mar 24 octubre 18:30PM Ciudad del Cabo|Escalas",
    Alojamiento: [
      {
        Hotel: "Lagoon Beach Hotel & Spa",
        Estrellas: 5,
        Calificacion: 9.0,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1330000/1320800/1320739/49f6232a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1330000/1320800/1320739/32dc38df.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1330000/1320800/1320739/0b365d6d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Url: "https://images.trvl-media.com/lodging/2000000/1330000/1320800/1320739/d9d0e6b4.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación deluxe con vista al mar",
            Calificacion: 9.2,
            Url: "https://images.trvl-media.com/lodging/2000000/1330000/1320800/1320739/5671ac9b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
          {
            Tipo: "Habitacion simple",
            Calificacion: 9.5,
            Url: "https://images.trvl-media.com/lodging/2000000/1330000/1320800/1320739/01ff162a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          },
        ],
      },
    ],
    Precio: 2450.0,
    Promocion: 2199.0,
    Moneda: "USD",
    Incluye: "traslado desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Visita al Parque Nacional Table Mountain",
        URL: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/06/e6/6e/caption.jpg?w=1200&h=-1&s=1",
        Precio: 40.0,
        Incluido: false,
      },
      {
        Detalle: "Safari en reserva de vida silvestre",
        URL: "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/04/Safaris-en-Suda%CC%81frica-1.jpg",
        Precio: 120.0,
        Incluido: false,
      },
      {
        Detalle: "Recorrido por los viñedos de Stellenbosch",
        URL: "https://www.civitatis.com/f/republica-sudafricana/ciudad-del-cabo/galeria/vino-ciudad-cabo.jpg",
        Precio: 50.0,
        Incluido: false,
      },
      {
        Detalle: "Cena en el hotel",
        URL: "https://images.trvl-media.com/lodging/2000000/1330000/1320800/1320739/4dd1f84c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        Precio: 0,
        Incluido: true,
      },
    ],
    Cupos: 50,
    Imagenes: [
      {
        Url: "https://youimg1.tripcdn.com/target/0104n120008x0scs094D0_C_750_350_R5.jpg?proc=source%2Ftrip",
      },
      {
        Url: "https://www.ongvoluntariado.org/wp-content/uploads/2017/06/turismo-solidario-vacaciones-en-africa-playa-lr.jpg",
      },
      {
        Url: "https://viajesbeagle.com/wp-content/uploads/2020/07/ciudad-del-cabo.jpg",
      },
    ],
    Calificacion: 8.7,
    Comentarios: [
      {
        Usuario: "Paloma Cruz",
        Testimonio:
          "La ubicación del hotel era perfecta, con vistas espectaculares. El personal fue amable y servicial en todo momento. ¡Una experiencia maravillosa!",
        Fecha: "2023/11/01",
      },
      {
        Usuario: "David Torres",
        Testimonio:
          "Sudáfrica es un país fascinante. Disfruté mucho del safari y de la belleza natural de Ciudad del Cabo. Recomendaría este paquete a cualquiera.",
        Fecha: "2023/11/10",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para descansar y explorar los alrededores de Ciudad del Cabo.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita al Parque Nacional Table Mountain y disfrute de las vistas panorámicas de la ciudad y la costa.",
      },
      {
        Dia: 3,
        Descripcion:
          "Safari en una reserva de vida silvestre cercana para observar la fauna africana en su hábitat natural.",
      },
      {
        Dia: 4,
        Descripcion:
          "Recorrido por los viñedos de Stellenbosch y degustación de vinos locales.",
      },
      {
        Dia: 5,
        Descripcion:
          "Día libre para explorar Ciudad del Cabo o realizar actividades opcionales.",
      },
      {
        Dia: 6,
        Descripcion:
          "Excursión a la Península del Cabo, visitando el Cabo de Buena Esperanza y la Reserva Natural del Cabo de Buena Esperanza.",
      },
      {
        Dia: 7,
        Descripcion:
          "Visita a las playas de Camps Bay y Clifton, y disfrute de tiempo libre en los mercados locales.",
      },
      {
        Dia: 8,
        Descripcion:
          "Recorrido por la Ruta de los Jardines, disfrutando de los paisajes naturales y visitando pueblos encantadores.",
      },
      {
        Dia: 9,
        Descripcion:
          "Día de relax en la playa o actividades opcionales en la naturaleza.",
      },
      {
        Dia: 10,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto para el vuelo de regreso.",
      },
    ],
  },
  {
    Id: 14,
    Pais: "China",
    Continente: "Asia",
    Ciudad: "Pekín",
    Titulo: "Descubre China en 10 días",
    FechaInicio: "2023/10/15",
    FechaFinal: "2023/10/24",
    Duracion: 10,
    Aerolinea: "Air China",
    Ida: "Sáb 15 octubre 10:00AM Buenos Aires|Escalas",
    Regreso: "Mar 24 octubre 18:30PM Pekín|Escalas",
    Alojamiento: [
      {
        Hotel: "Grand Hyatt Beijing",
        Estrellas: 5,
        Calificacion: 9.2,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/471815206.jpg?k=61160bfa18899f03930904e2b1ced09406ddc1bce82b87cf4d4eaf27b9d42e80&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472096884.jpg?k=8e142229e577a340ae4e4cced2e7935a1b4635d6f8f8daa147d4ec498c174d95&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472096837.jpg?k=977039796dab7092937c423109f147c97fae2935272a44c9d97366a2b37a4fd7&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472096931.jpg?k=57777b2b0d51de2bd9f3510121f943999382c7183f2fc99ffc337a616228ac3a&o=&hp=1",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Suite Club con cama twin",
            Calificacion: 9.2,
            Url: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2014/09/21/1743/BEIGH-P144-Standard-Grand-Suite-Living-Room.jpg/BEIGH-P144-Standard-Grand-Suite-Living-Room.16x9.jpg?imwidth=1280",
          },
          {
            Tipo: "Suite Club con cama twin, Premium",
            Calificacion: 9.8,
            Url: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/06/05/1936/BEIGH-P0501-Club-Suite-Twin-Living-Room.jpg/BEIGH-P0501-Club-Suite-Twin-Living-Room.16x9.jpg?imwidth=1280",
          },
        ],
      },
    ],
    Precio: 3250.0,
    Promocion: 2999.0,
    Moneda: "USD",
    Incluye: "traslado desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Visita a la Gran Muralla China",
        URL: "https://www.civitatis.com/f/china/pekin/guia/gran-muralla-china-m.jpg",
        Precio: 50.0,
        Incluido: false,
      },
      {
        Detalle: "Excursión al Palacio de Verano",
        URL: "https://studycli.org/wp-content/uploads/2021/06/summer-palace-beijing-001.jpeg",
        Precio: 30.0,
        Incluido: false,
      },
      {
        Detalle: "Visita a la Ciudad Prohibida",
        URL: "https://estaticos-cdn.prensaiberica.es/clip/e68bc1c0-162a-4603-a1d5-76682eb61fdb_16-9-discover-aspect-ratio_default_0.jpg",
        Precio: 40.0,
        Incluido: false,
      },
      {
        Detalle: "Espectáculo de la Ópera de Pekín",
        URL: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/89/f7/da.jpg",
        Precio: 60.0,
        Incluido: false,
      },
    ],
    Cupos: 30,
    Imagenes: [
      {
        Url: "https://viajes.nationalgeographic.com.es/medio/2018/02/27/pekin-china__1280x720.jpg",
      },
      {
        Url: "https://astelus.com/wp-content/viajes/pekin-la-gran-capital-de-china.jpg",
      },
      {
        Url: "https://www.elagoradiario.com/wp-content/uploads/2021/02/Pek%C3%ADn-agua.jpg",
      },
      {
        Url: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Beijing-2.jpg",
      },
    ],
    Calificacion: 9.0,
    Comentarios: [
      {
        Usuario: "Romina González",
        Testimonio:
          "El hotel era lujoso y el servicio fue excepcional. Disfruté mucho de las visitas a la Gran Muralla y la Ciudad Prohibida. ¡Una experiencia increíble!",
        Fecha: "2023/11/01",
      },
      {
        Usuario: "Carlos Martínez",
        Testimonio:
          "China es un país fascinante. Me encantó explorar los sitios históricos y disfrutar de la cultura local. Recomendaría este paquete a cualquiera.",
        Fecha: "2023/11/10",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para descansar y explorar los alrededores de Pekín.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita a la Gran Muralla China en Mutianyu y disfrute de las impresionantes vistas panorámicas.",
      },
      {
        Dia: 3,
        Descripcion:
          "Excursión al Palacio de Verano, un hermoso jardín imperial con palacios y lagos.",
      },
      {
        Dia: 4,
        Descripcion:
          "Visita a la Ciudad Prohibida, el palacio imperial más grande del mundo.",
      },
      {
        Dia: 5,
        Descripcion:
          "Día libre para explorar Pekín o realizar actividades opcionales.",
      },
      {
        Dia: 6,
        Descripcion:
          "Visita al Templo del Cielo y experiencia de la tradicional Ópera de Pekín por la noche.",
      },
      {
        Dia: 7,
        Descripcion:
          "Recorrido por los Hutongs, los antiguos callejones de Pekín, en rickshaw y visita al Parque Jingshan.",
      },
      {
        Dia: 8,
        Descripcion:
          "Excursión al Templo de los Lamas, un importante sitio budista, y paseo por la moderna calle comercial de Wangfujing.",
      },
      { Dia: 9, Descripcion: "Día de compras y tiempo libre en Pekín." },
      {
        Dia: 10,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto para el vuelo de regreso.",
      },
    ],
  },
  {
    Id: 15,
    Pais: "Argentina",
    Continente: "America",
    Ciudad: "Cataratas del Iguazú, Misiones",
    Titulo: "Maravillas naturales: Cataratas del Iguazú",
    FechaInicio: "2023/12/15",
    FechaFinal: "2023/12/20",
    Duracion: 6,
    Aerolinea: "Aerolíneas Argentinas",
    Ida: "Jue 15 diciembre 09:30AM Buenos Aires|Directo",
    Regreso: "Mar 20 diciembre 18:15PM IGR|Directo",
    Alojamiento: [
      {
        Hotel: "Gran Hotel Tourbillon Cataratas",
        Estrellas: 4,
        Calificacion: 9.2,
        RegimenComidas: "Media Pensión",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/167141418.jpg?k=3faffb36fab57a9be90db52008d5ad66c129863f8845a5dd6be52f49b667a072&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17134214.jpg?k=753daa3ee8a22d2eec462d00855853fc9fdfe7f683ddbd87f39dd80482a950ba&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/167141146.jpg?k=8ff82abb03c7ec94fd58a6183c89292b2dd00da50d2fad6e63d554f0f0647dbc&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/167140233.jpg?k=8e99749ddefe5c3bd78a47ac3f589e686a5313a5f885cc63464c18cc5ceb3cf0&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7472847.jpg?k=942f7c189ee0c67326858d85d070a2839ed8620fa24036986c4b6e4992c56e93&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/318222630.jpg?k=8fddb704feb6b30abd4acb5f0443b88350ab354349dff02197e5bc76169764a4&o=&hp=1",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación doble",
            Calificacion: 9.5,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7472814.jpg?k=c846885859ba31d926f26976ef056bcd301a79b64a2123726c8383ee154cf25e&o=&hp=1",
          },
          {
            Tipo: "Suite con vista panorámica",
            Calificacion: 9.2,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/36125877.jpg?k=971bce64a2c71768cea9dfb0b73ad36fbe571c67d779e01fefc18ce17b7c7dac&o=&hp=1",
          },
        ],
      },
    ],
    Precio: 895.5,
    Promocion: 785.0,
    Moneda: "USD",
    Incluye: "traslados desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Visita al Parque Nacional Iguazú",
        Url: "https://lh3.googleusercontent.com/p/AF1QipMsQ8zdRdMovSgibmP86UXnoIS-Ba3hqTLYyAnS=s680-w680-h510",
        Precio: 25.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en lancha bajo las cataratas",
        Url: "https://media.viajando.travel/p/905ccd70415ce67c7852048f66250a68/adjuntos/236/imagenes/000/495/0000495978/cataratas-del-iguazu-vacaciones-inviernojpg.jpg",
        Precio: 35.0,
        Incluido: false,
      },
      {
        Detalle: "Cena en el restaurante panorámico del hotel",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Tour de avistamiento de aves en la selva",
        Url: "https://example.com/avistamiento-aves",
        Precio: 45.0,
        Incluido: false,
      },
    ],
    Cupos: 80,
    Imagenes: [
      {
        Url: "https://lh3.googleusercontent.com/p/AF1QipMgG2yjlh-TPrdtu53m8AWi_uMP0337jkkcbEZ3=s680-w680-h510",
      },
      {
        Url: "https://lh3.googleusercontent.com/p/AF1QipP9bm2JgLThPUcSr78yqHPTo9IBWJvMMXmjj6Jw=s680-w680-h510",
      },
    ],
    Calificacion: 8.9,
    Comentarios: [
      {
        Usuario: "Carolina Ramírez",
        Testimonio:
          "El hotel está en una excelente ubicación, a pocos metros de las cataratas. Las habitaciones son cómodas y el personal es amable y servicial. Definitivamente, lo recomendaría.",
        Fecha: "2023/06/10",
      },
      {
        Usuario: "Luis Fernández",
        Testimonio:
          "Las cataratas son impresionantes, una experiencia inolvidable. El hotel también fue muy bueno, con vistas increíbles. Sin duda, volvería.",
        Fecha: "2023/07/01",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para descansar y explorar los alrededores.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita al Parque Nacional Iguazú y recorrido por los senderos para admirar las cataratas.",
      },
      {
        Dia: 3,
        Descripcion:
          "Excursión en lancha bajo las cataratas para experimentar su imponente belleza desde otro ángulo.",
      },
      {
        Dia: 4,
        Descripcion:
          "Tour de aventura por la selva, incluyendo rappel y caminata por senderos naturales.",
      },
      {
        Dia: 5,
        Descripcion:
          "Cena en el restaurante panorámico del hotel para disfrutar de la gastronomía local.",
      },
      {
        Dia: 6,
        Descripcion:
          "Tour de avistamiento de aves en la selva para explorar la diversidad de especies.",
      },
    ],
  },

  {
    Id: 16,
    Pais: "España",
    Continente: "Europa",
    Ciudad: "Lloret de Mar, Girona",
    Titulo: "Explorando la Costa Brava: Lloret de Mar",
    FechaInicio: "2023/08/10",
    FechaFinal: "2023/08/19",
    Duracion: 10,
    Aerolinea: "Vuelos Internacionales",
    Ida: "Mié 10 agosto 12:00PM Madrid|Directo",
    Regreso: "Vie 19 agosto 18:30PM Madrid|Directo",
    Alojamiento: [
      {
        Hotel: "Hotel Costa Brava",
        Estrellas: 3,
        Calificacion: 7.8,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/14/83/1483367922.jpeg",
          },
          {
            Url: "https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partnerimages/14/83/1483367922.jpeg",
          },
          {
            Url: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/14/83/1483367908.jpeg",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación doble",
            Calificacion: 7.5,
            Url: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/43/12/43126168.jpeg",
          },
          {
            Tipo: "Suite con vista panorámica",
            Calificacion: 9.2,
            Url: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/uploadimages/43/12/43126568.jpeg",
          },
        ],
      },
    ],
    Precio: 850.0,
    Promocion: 750.0,
    Moneda: "USD",
    Incluye: "traslados desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Excursión en barco por la Costa Brava",
        Url: "https://www.clubvillamar.es/content/lloret-de-mar/wp-content/uploads/2020/07/Catamaran-in-Lloret-de-Mar-Costa-Brava.jpg",
        Precio: 45.0,
        Incluido: false,
      },
      {
        Detalle: "Visita al Jardín Botánico de Santa Clotilde",
        Url: "https://lh3.googleusercontent.com/p/AF1QipNdsoGHYH4-dtYwjp7F8mDPZs0VLiN9BkqLbbYi=s680-w680-h510",
        Precio: 20.0,
        Incluido: false,
      },
      {
        Detalle: "Espectáculo de Flamenco en Lloret de Mar",
        Url: "https://lh3.googleusercontent.com/p/AF1QipPeOmkNm3pBaMrBMoVpQW26Zz-zpCggz96-VLPL=s680-w680-h510",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Servicio de reposera y sombrilla en la playa",
        Precio: 0,
        Incluido: true,
      },
    ],
    Cupos: 100,
    Imagenes: [
      {
        Url: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTFLe8GsXjULwlB4sdavmwy1qhO1394YxsEPJXC7-qq_2hD76OrGfF6k-e12iqVVevFJivaVKngeQee9rB-_0tAvkuvRQ",
      },
      {
        Url: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRfY7jrb5w-jaXrB_2LiuMNwJT5ALN8O6TgC7JInH4QBtQyrSbYv1YlI6zftwrRdfp41knrUmp6luoX4Ou2n4Em0ijJIw",
      },
    ],
    Calificacion: 8.2,
    Comentarios: [
      {
        Usuario: "Marta López",
        Testimonio:
          "El hotel está bien ubicado, cerca de la playa. Las habitaciones son cómodas y limpias. El personal es amable. ¡Recomendado!",
        Fecha: "2023/09/02",
      },
      {
        Usuario: "Pedro García",
        Testimonio:
          "Lloret de Mar es un lugar hermoso para relajarse y disfrutar del sol y la playa. El hotel tenía buenas instalaciones y el desayuno era abundante. ¡Volvería sin dudarlo!",
        Fecha: "2023/09/08",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel y tiempo libre para descansar y explorar los alrededores.",
      },
      {
        Dia: 2,
        Descripcion:
          "Día de playa en Lloret de Mar. Disfruta del sol y las aguas cristalinas.",
      },
      {
        Dia: 3,
        Descripcion:
          "Excursión en barco por la Costa Brava, visitando calas y playas paradisíacas.",
      },
      {
        Dia: 4,
        Descripcion:
          "Visita al Jardín Botánico de Santa Clotilde, disfrutando de la naturaleza y los hermosos paisajes.",
      },
      {
        Dia: 5,
        Descripcion:
          "Día libre para explorar el casco antiguo de Lloret de Mar y sus encantadoras calles.",
      },
      {
        Dia: 6,
        Descripcion:
          "Excursión a Tossa de Mar, un encantador pueblo costero con una impresionante fortaleza medieval.",
      },
      {
        Dia: 7,
        Descripcion:
          "Día de relax en el hotel, aprovechando las instalaciones y servicios.",
      },
      {
        Dia: 8,
        Descripcion:
          "Visita a los Jardines de Santa Clotilde, famosos por sus impresionantes vistas al mar.",
      },
      {
        Dia: 9,
        Descripcion:
          "Actividad adicional: Excursión a Girona, una ciudad histórica con hermosos monumentos y calles medievales.",
      },
      {
        Dia: 10,
        Descripcion:
          "Regreso al aeropuerto de Madrid para tomar el vuelo de regreso a casa.",
      },
    ],
  },
  {
    Id: 17,
    Pais: "Brasil",
    Continente: "America",
    Ciudad: "Maragogi, Alagoas",
    Titulo: "Paraíso Tropical: Maragogi",
    FechaInicio: "2023/09/01",
    FechaFinal: "2023/09/15",
    Duracion: 15,
    Aerolinea: "Compañía Aérea Brasileña",
    Ida: "Jue 01 septiembre 10:00AM Río de Janeiro|Directo",
    Regreso: "Jue 15 septiembre 14:30PM Río de Janeiro|Directo",
    Alojamiento: [
      {
        Hotel: "Resort Maragogi",
        Estrellas: 5,
        Calificacion: 9.4,
        RegimenComidas: "Todo incluido",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425578853.jpg?k=19dfee4051fe95dcf05a531a4402aea0454742d04bb6b35a6df10e9e007bb105&o=&hp=1",
          },
          {
            Url: "https://www.kayak.com.ar/rimg/himg/1e/c2/40/hotelsdotcom-588552-28b876d5_w-502650.jpg?width=1366&height=768&xhint=729&yhint=1080&crop=true",
          },
          {
            Url: "https://static11.com-hotel.com/uploads/hotel/275977/photo/lg_grand-oca-maragogi-all-inclusive-resort_156334124612.jpg",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación doble con vista al mar",
            Calificacion: 9.6,
            Url: "https://q-xx.bstatic.com/xdata/images/hotel/max500/263257877.jpg?k=26b59752028dd6f981e52b2ed599afdbf69df7d6138789c7b1eb8cdab5e9ff45&o=",
          },
          {
            Tipo: "Suite de lujo con jacuzzi",
            Calificacion: 9.8,
            Url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/3f/3d/2a/grand-oca-maragogi-resort.jpg?w=700&h=-1&s=1",
          },
        ],
      },
    ],
    Precio: 1299.0,
    Promocion: 1199.0,
    Moneda: "USD",
    Incluye: "traslados desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Tour a las Piscinas Naturales de Maragogi",
        Url: "https://media-cdn.tripadvisor.com/media/photo-s/01/e6/4a/16/aji-hunan.jpg",
        Precio: 35.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en catamarán por las playas de Alagoas",
        Url: "https://bomtravel.com/wp-content/uploads/2022/06/12-51.jpg",
        Precio: 40.0,
        Incluido: false,
      },
      {
        Detalle: "Clase de surf en la playa de Maragogi",
        Url: "https://example.com",
        Precio: 25.0,
        Incluido: false,
      },
      {
        Detalle: "Servicio de reposera y sombrilla en la playa",
        Precio: 0,
        Incluido: true,
      },
    ],
    Cupos: 120,
    Imagenes: [
      {
        Url: "https://www.defiestaenamerica.com/wp-content/uploads/2019/09/Maragogi-4.jpg",
      },
      { Url: "https://bomtravel.com/wp-content/uploads/2022/06/12-51.jpg" },
      { Url: "https://bomtravel.com/wp-content/uploads/2022/06/3-55.jpg" },
    ],
    Calificacion: 9.1,
    Comentarios: [
      {
        Usuario: "Ana Silva",
        Testimonio:
          "El resort es simplemente increíble. Las instalaciones son de primera clase y el servicio es impecable. Las playas de Maragogi son paradisíacas. ¡Una experiencia inolvidable!",
        Fecha: "2023/09/05",
      },
      {
        Usuario: "Carlos Santos",
        Testimonio:
          "Maragogi es un destino de ensueño. El resort cumplió todas nuestras expectativas, y las comidas all inclusive eran deliciosas. Definitivamente regresaré en el futuro.",
        Fecha: "2023/09/08",
      },
      {
        Usuario: "Laura Ferreira",
        Testimonio:
          "El personal del resort fue muy amable y servicial. Las instalaciones estaban bien mantenidas y las habitaciones eran cómodas. Disfrutamos mucho de las excursiones y actividades disponibles.",
        Fecha: "2023/09/10",
      },
      {
        Usuario: "Diego Martinez",
        Testimonio:
          "Maragogi es un paraíso tropical. El resort ofrece una experiencia de lujo con su régimen de comidas all inclusive. Las playas son espectaculares. ¡Recomendado!",
        Fecha: "2023/09/13",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al resort y día de bienvenida. Tiempo libre para explorar las instalaciones y disfrutar de la playa.",
      },
      {
        Dia: 2,
        Descripcion:
          "Excursión a las famosas Piscinas Naturales de Maragogi. Disfruta del snorkel y admira la belleza del arrecife de coral.",
      },
      {
        Dia: 3,
        Descripcion:
          "Día de relax en la playa. Disfruta del sol, el mar y las comodidades del resort.",
      },
      {
        Dia: 4,
        Descripcion:
          "Tour en catamarán por las playas de Alagoas. Descubre las costas vírgenes y las aguas cristalinas de la región.",
      },
      {
        Dia: 5,
        Descripcion:
          "Clase de surf en la playa de Maragogi. Aprende a surfear las olas bajo la guía de instructores profesionales.",
      },
      {
        Dia: 6,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del resort y participar en actividades recreativas.",
      },
      {
        Dia: 7,
        Descripcion:
          "Excursión a un pueblo pesquero cercano. Descubre la cultura local y saborea la gastronomía regional.",
      },
      {
        Dia: 8,
        Descripcion:
          "Día de relax en la playa. Disfruta de los servicios de reposera y sombrilla proporcionados por el resort.",
      },
      {
        Dia: 9,
        Descripcion:
          "Excursión a un parque nacional cercano. Explora la naturaleza exuberante y disfruta de hermosas cascadas y senderos naturales.",
      },
      {
        Dia: 10,
        Descripcion:
          "Día de relax en el resort. Aprovecha las instalaciones y actividades recreativas disponibles.",
      },
      {
        Dia: 11,
        Descripcion:
          "Visita a un mercado local. Descubre productos típicos y souvenirs artesanales para llevar a casa.",
      },
      {
        Dia: 12,
        Descripcion:
          "Día de relax en la playa. Disfruta de las aguas cálidas y el sol tropical.",
      },
      {
        Dia: 13,
        Descripcion:
          "Excursión en bicicleta por los alrededores. Descubre paisajes impresionantes y lugares pintorescos.",
      },
      {
        Dia: 14,
        Descripcion:
          "Día libre para disfrutar de las instalaciones del resort y participar en actividades recreativas.",
      },
      {
        Dia: 15,
        Descripcion:
          "Check-out del resort y traslado al aeropuerto de Río de Janeiro para tomar el vuelo de regreso.",
      },
    ],
  },

  {
    Id: 18,
    Pais: "Egipto",
    Continente: "Africa",
    Ciudad: "El Cairo",
    Titulo: "Descubre el Antiguo Egipto: El Cairo",
    FechaInicio: "2023/10/01",
    FechaFinal: "2023/10/20",
    Duracion: 20,
    Aerolinea: "EgyptAir",
    Ida: "Dom 01 octubre 08:00AM El Cairo|Directo",
    Regreso: "Jue 20 octubre 16:30PM El Cairo|Directo",
    Alojamiento: [
      {
        Hotel: "Hotel Four Season",
        Estrellas: 5,
        Calificacion: 9.2,
        RegimenComidas: "Desayuno incluido",
        Imagenes: [
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/94190040.jpg?k=ef1c7c9927dbc4c9bb8ade64114c12302c1490a01530fec267460efffb8fdf47&o=&hp=1",
          },
          {
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221462633.jpg?k=0cb0e6bb3338cd7f54230b8ad96bfcb1edacea2a273dd1791c9f4734ac297092&o=&hp=1",
          },
          {
            Url: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-0,0000-3840,0000-2160,0000/publish/content/dam/fourseasons/images/web/CAI/CAI_463_3840x2160.jpg",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Suite de Lujo con Vista al Nilo",
            Calificacion: 9.5,
            Url: "https://media-cdn.tripadvisor.com/media/photo-s/29/07/e9/58/cai-deluxe-room.jpg",
          },
          {
            Tipo: "Habitación Ejecutiva con Vista a la Ciudad",
            Calificacion: 9.0,
            Url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/221464832.jpg?k=f9d14c00881b833aa355c4b1d038359d530678bb10d393db44948f05a2f25e16&o=&hp=1",
          },
        ],
      },
    ],
    Precio: 1999.0,
    Promocion: 1899.0,
    Moneda: "USD",
    Incluye: "traslados desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Visita a las Pirámides de Giza y la Esfinge",
        Url: "https://static.nationalgeographic.es/files/styles/image_3200/public/1-pyramids-giza-NationalGeographic_911975.jpg?w=710&h=485",
        Precio: 40.0,
        Incluido: false,
      },
      {
        Detalle: "Crucero por el río Nilo con cena",
        Url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/1f/59/5f.jpg",
        Precio: 60.0,
        Incluido: false,
      },
      {
        Detalle: "Tour por el Museo Egipcio de El Cairo",
        Url: "https://img.travesiasdigital.com/2019/01/museo_del_cairo_11.jpg",
        Precio: 30.0,
        Incluido: false,
      },
      {
        Detalle: "Visita al Templo de Karnak en Luxor",
        Url: "https://img2.rtve.es/imagenes/entrada-del-templo-luxor/1636644006498.jpg",
        Precio: 45.0,
        Incluido: false,
      },
      {
        Detalle: "Degustación de comida tradicional egipcia",
        Precio: 0,
        Incluido: true,
      },
      {
        Detalle: "Tour por el mercado de Khan el Khalili",
        Url: "https://www.civitatis.com/f/egipto/egipto/guia/khan-el-khalili-m.jpg",
        Precio: 20.0,
        Incluido: false,
      },
      {
        Detalle: "Excursión a Abu Simbel",
        Url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/85/6d.jpg",
        Precio: 80.0,
        Incluido: false,
      },
    ],
    Cupos: 100,
    Imagenes: [
      {
        Url: "https://www.fourseasons.com/alt/img-opt/~70.1530.611,2000-0,0000-1777,6000-2222,0000/publish/content/dam/fourseasons/images/web/CAI/CAI_461_original.jpg",
      },
      {
        Url: "https://www.civitatis.com/f/egipto/giza/free-tour-piramides-giza-esfinge-589x392.jpg",
      },
    ],
    Calificacion: 9.3,
    Comentarios: [
      {
        Usuario: "María López",
        Testimonio:
          "El hotel era lujoso y el desayuno delicioso. Recomiendo visitar las pirámides, ¡fue una experiencia fascinante!",
        Fecha: "2023/10/03",
      },
      {
        Usuario: "Juan González",
        Testimonio:
          "El Cairo es una ciudad impresionante. El hotel superó mis expectativas y el crucero por el Nilo fue inolvidable. Definitivamente regresaré.",
        Fecha: "2023/10/07",
      },
      {
        Usuario: "Laura Torres",
        Testimonio:
          "Me encantó explorar el Museo Egipcio y aprender sobre la historia antigua. El servicio del hotel fue excelente. ¡Un viaje increíble!",
        Fecha: "2023/10/12",
      },
      {
        Usuario: "Pedro Rodríguez",
        Testimonio:
          "Egipto es mágico. El hotel tenía vistas espectaculares y la visita a Abu Simbel fue lo más destacado del viaje. ¡Altamente recomendado!",
        Fecha: "2023/10/15",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada al hotel en El Cairo y día de bienvenida. Tiempo libre para descansar y explorar los alrededores.",
      },
      {
        Dia: 2,
        Descripcion:
          "Visita a las Pirámides de Giza y la Esfinge. Admira las impresionantes construcciones del Antiguo Egipto.",
      },
      {
        Dia: 3,
        Descripcion:
          "Excursión al Museo Egipcio de El Cairo. Descubre los tesoros y artefactos históricos del antiguo Egipto.",
      },
      {
        Dia: 4,
        Descripcion:
          "Crucero por el río Nilo con cena. Disfruta de la vista panorámica y una deliciosa cena a bordo.",
      },
      {
        Dia: 5,
        Descripcion:
          "Visita al Templo de Karnak en Luxor. Explora los templos antiguos y aprende sobre la historia de la región.",
      },
      {
        Dia: 6,
        Descripcion:
          "Día de relax en el hotel. Disfruta de las comodidades y servicios del alojamiento de lujo.",
      },
      {
        Dia: 7,
        Descripcion:
          "Tour por el mercado de Khan el Khalili. Descubre la cultura y tradiciones egipcias mientras exploras los puestos de mercado.",
      },
      {
        Dia: 8,
        Descripcion:
          "Día libre para explorar El Cairo por tu cuenta. Recomendamos visitar el barrio islámico y el barrio copto.",
      },
      {
        Dia: 9,
        Descripcion:
          "Excursión a Abu Simbel. Descubre los impresionantes templos tallados en la roca y aprende sobre su historia.",
      },
      {
        Dia: 10,
        Descripcion:
          "Día de relax en el hotel. Disfruta de las instalaciones y servicios del alojamiento de lujo.",
      },
      {
        Dia: 11,
        Descripcion:
          "Visita al Barrio de los Muertos y la Ciudadela de Saladino. Conoce la historia y la arquitectura de estos lugares emblemáticos.",
      },
      {
        Dia: 12,
        Descripcion:
          "Excursión al Oasis de Bahariya. Explora el desierto y disfruta de las aguas termales y los paisajes impresionantes.",
      },
      {
        Dia: 13,
        Descripcion:
          "Día de relax en el hotel. Disfruta de las comodidades y servicios del alojamiento de lujo.",
      },
      {
        Dia: 14,
        Descripcion:
          "Tour por el Antiguo Cairo. Visita iglesias coptas y sinagogas históricas en este fascinante barrio.",
      },
      {
        Dia: 15,
        Descripcion:
          "Día libre para explorar El Cairo por tu cuenta. Recomendamos visitar el Zoológico de Giza y el Parque Al-Azhar.",
      },
      {
        Dia: 16,
        Descripcion:
          "Excursión a Alejandría. Descubre la histórica ciudad costera y visita la Biblioteca de Alejandría y el Fuerte de Qaitbay.",
      },
      {
        Dia: 17,
        Descripcion:
          "Día de relax en el hotel. Disfruta de las comodidades y servicios del alojamiento de lujo.",
      },
      {
        Dia: 18,
        Descripcion:
          "Visita al Bazar de Khan el Khalili para comprar recuerdos y disfrutar de la vibrante atmósfera del mercado.",
      },
      {
        Dia: 19,
        Descripcion:
          "Día libre para explorar El Cairo por tu cuenta. Recomendamos visitar el Museo Copto y el Museo de Arte Islámico.",
      },
      {
        Dia: 20,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto de El Cairo para tomar el vuelo de regreso.",
      },
    ],
  },

  {
    Id: 19,
    Pais: "Portugal",
    Continente: "Europa",
    Ciudad: "Lisboa",
    Titulo: "Descubre la Encantadora Lisboa",
    FechaInicio: "2023/11/01",
    FechaFinal: "2023/11/07",
    Duracion: 7,
    Aerolinea: "TAP Air Portugal",
    Ida: "Lun 01 noviembre 09:00AM Lisboa|Directo",
    Regreso: "Dom 07 noviembre 17:30PM Lisboa|Directo",
    Alojamiento: [
      {
        Hotel: "Hotel Holiday inn Lisboa",
        Estrellas: 4,
        Calificacion: 8.7,
        RegimenComidas: "Sin comidas incluidas",
        Imagenes: [
          {
            Url: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/itemimages/34/74/34740_v12.jpeg",
          },
          {
            Url: "https://cdn.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/N4.HOT1906D.jpg?itok=rk5_Wb8O",
          },
          {
            Url: "https://digital.ihg.com/is/image/ihg/holiday-inn-lisbon-5573582497-4x3",
          },
        ],
        Habitaciones: [
          {
            Tipo: "Habitación Doble Estándar",
            Calificacion: 8.5,
            Url: "https://holiday-inn-lisbon-continental.at-hotels.com/data/Photos/OriginalPhoto/12743/1274381/1274381239/photo-holiday-inn-continental-lisbon-30.JPEG",
          },
          {
            Tipo: "Habitación Superior con Vistas",
            Calificacion: 9.0,
            Url: "https://www.es.kayak.com/rimg/himg/74/83/e2/leonardo-2683671-LISPO_5645248876_O-398857.jpg?width=720&height=576&crop=true",
          },
        ],
      },
    ],
    Precio: 799.0,
    Promocion: 749.0,
    Moneda: "USD",
    Incluye: "traslados desde y hacia el aeropuerto",
    Servicios: [
      {
        Detalle: "Tour por los barrios históricos de Lisboa",
        Url: "https://consejeradeviajes.com/wp-content/uploads/2020/11/Mapa-barrios-Lisboa-300x194.jpg",
        Precio: 30.0,
        Incluido: false,
      },
      {
        Detalle: "Paseo en tranvía por la famosa línea 28",
        Url: "https://www.viajaralisboa.com/wp-content/uploads/tranvia-28.jpg",
        Precio: 15.0,
        Incluido: false,
      },
      {
        Detalle: "Visita al Castillo de San Jorge",
        Url: "https://www.civitatis.com/f/portugal/lisboa/guia/castillo-san-jorge-m.jpg",
        Precio: 20.0,
        Incluido: true,
      },
    ],
    Cupos: 80,
    Imagenes: [
      {
        Url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg",
      },
    ],
    Calificacion: 8.9,
    Comentarios: [
      {
        Usuario: "Andrés Sánchez",
        Testimonio:
          "Lisboa es una ciudad encantadora. El hotel tenía una ubicación conveniente y el personal era amable. Definitivamente volveré.",
        Fecha: "2023/11/02",
      },
      {
        Usuario: "Marta Fernández",
        Testimonio:
          "El paseo en tranvía por la línea 28 fue maravilloso. Recomiendo visitar el Castillo de San Jorge para disfrutar de las vistas panorámicas de la ciudad.",
        Fecha: "2023/11/05",
      },
    ],
    Itinerario: [
      {
        Dia: 1,
        Descripcion:
          "Llegada a Lisboa y registro en el hotel. Tiempo libre para explorar los alrededores.",
      },
      {
        Dia: 2,
        Descripcion:
          "Tour por los barrios históricos de Lisboa, incluyendo Alfama y el Barrio de Belém.",
      },
      {
        Dia: 3,
        Descripcion:
          "Visita al Castillo de San Jorge y disfrute de las vistas panorámicas de la ciudad.",
      },
      {
        Dia: 4,
        Descripcion:
          "Día libre para explorar Lisboa a tu propio ritmo. Recomendamos visitar el Mercado da Ribeira y el Parque das Nações.",
      },
      {
        Dia: 5,
        Descripcion:
          "Paseo en tranvía por la famosa línea 28, pasando por lugares emblemáticos de la ciudad.",
      },
      {
        Dia: 6,
        Descripcion:
          "Explora los museos de Lisboa, como el Museo Nacional de Arte Antiguo y el Museo Calouste Gulbenkian.",
      },
      {
        Dia: 7,
        Descripcion:
          "Check-out del hotel y traslado al aeropuerto de Lisboa para tomar el vuelo de regreso.",
      },
    ],
  },
];

export default data;
