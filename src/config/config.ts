import { StateHDB } from "../app/models/hdb";
import { BaseColors } from "src/app/models/config";

export class Settings {
  // -------------------------------------------------------
  // General
  public static title: string = "Centro Cristiano de Loja";
  public static logo: string = "assets/img/logo_cropped.png";

  // -------------------------------------------------------
  // Home

  // Slider
  public static slider: any = {
    bg_title: "Aqui va la misión de este año",
    logo_ccl: Settings.logo,
    bg: {
      default: "assets/img/home/large.jpg",
      final:
        "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?ixlib=rb-0.3.5&q=80&fm=jpg"
    }
  };

  // Pastores
  public static pastores: any = {
    bg: {
      default: "assets/img/home/large.jpg",
      final: "assets/img/home/bg-pablo-y-patricia.jpg"
    }
  };

  // Buttons bar
  public static buttons_bar: any = {
    bg_image: "assets/img/home/bg-buttons-bar.svg",
    opts: [
      {
        navLink: "/actividades",
        navImage: "assets/img/home/card-calendar.jpg",
        navText: "Calendario",
        navIcon: "calendar-alt"
      },
      {
        navLink: "/donaciones",
        navImage: "assets/img/home/card-hdb.jpg",
        navText: "Donaciones",
        navIcon: "bible"
      },
      {
        navLink: "/misiones",
        navImage: "assets/img/home/card-donations.jpg",
        navText: "Misiones",
        navIcon: "globe-americas"
      }
    ]
  };

  // Tow-dah
  public static towdah: any = {
    bg_image: "assets/img/home/bg-buttons-bar.svg",
    logo: "assets/img/home/tow-dah.jpeg",
    bg_image_tow: "assets/img/home/bg-tow-dah.jpg",
    social: [
      {
        text: "Siguenos en YouTube",
        icon: "youtube",
        typeIcon: "fab",
        link: "https://www.youtube.com/channel/UCjDgHbztvOQayUItvvhGUAg"
      },
      {
        text: "Siguenos en Instagram",
        icon: "instagram",
        typeIcon: "fab",
        link: "https://www.instagram.com/towdah.ccl"
      },
      {
        text: "Siguenos en Facebook",
        icon: "facebook",
        typeIcon: "fab",
        link: "https://www.facebook.com/Towdah.ccl"
      },
      {
        text: "Escúchanos en Deezer",
        icon: "align-left",
        typeIcon: "fas",
        link: "https://www.deezer.com/en/album/69125232"
      },
      {
        text: "Escúchanos en Apple Music",
        icon: "apple",
        typeIcon: "fab",
        link:
          "https://music.apple.com/ec/album/manifestando-su-gloria/1417446915"
      }
      // {
      //   text: "Escúchanos en Spotify",
      //   icon: "spotify",
      //   typeIcon: "fab",
      //   link:
      //     "https://open.spotify.com/artist/4YTjf9SYX6HL0eOaWEoMng?si=BoQ-1RyGSLyuQCAoLUQ_Eg"
      // }
    ]
  };

  // -------------------------------------------------------
  // Cuerpo Pastoral
  public static cuerpo_pastoral: any = {
    title: "Cuerpo Pastoral",
    bg_image: "assets/img/quienes-somos/header.jpg",
    logo_title: Settings.logo
  };

  // -------------------------------------------------------
  // Misiones
  public static misiones: any = {
    cards: [
      {
        tag: "",
        title: "Misiones",
        text: `Misiones es llevar y compartir el evangelio a toda etnia y nación; donde existen personas que ni si quiera han podido escuchar el nombre de Jesús.`,
        btnText: null,
        btnColor: null,
        link: null,
        default: "assets/img/home/large.jpg",
        bg: "assets/img/home/large.jpg"
      },
      {
        tag: "Misiones",
        title: "Transculturales",
        text: `El Centro Cristiano de Loja, actualmente cuenta con 5 proyectos misioneros en el mundo.`,
        btnText: "Ver más...",
        btnColor: "btn-neutral",
        link: "transculturales",
        default: "assets/img/home/large.jpg",
        bg: "https://placebear.com/1440/960"
      },
      {
        tag: "Obras",
        title: "Filiales",
        text: `El Centro Cristiano de Loja, actualmente posee 11 iglesias filiales en el Ecuador.`,
        btnText: "Ver más...",
        btnColor: "btn-neutral",
        link: "filiales",
        default: "assets/img/home/large.jpg",
        bg: "https://placebear.com/1440/960"
      },
      {
        tag: "Campos",
        title: "Blancos",
        text: `Los campos blancos son lugares donde existe poca población, pero se lleva el evangelio, actualmente el Centro Cristiano de Loja tiene 2, se encuentra ubicados en Cera y Chichaca.`,
        btnText: "Ver más...",
        btnColor: "btn-danger",
        link: "campos-blancos",
        default: "assets/img/home/large.jpg",
        bg: "https://placebear.com/1440/960"
      }
    ]
  };

  // -------------------------------------------------------
  // Quienes Somos
  public static pages: any = {
    title: "¡Tu misión es hoy!",
    bg_image: "assets/img/quienes-somos/header.jpg",
    logo_title: Settings.logo
  };

  // -------------------------------------------------------
  // Conectate
  public static conectate: any = {
    title: "¡Somos una iglesia celular!",
    bg_image: "assets/img/bg4.jpg",
    logo_title: "assets/img/logo_cropped.png"
  };

  // mensajes del mapa
  public static msg_mapa: any = {
    click: "Haz click en cualquier parte del mapa",
    hover: "Coloca el mouse en cualquier parte del mapa"
  };

  /**
   * los colores van en rgb
   * cambiar los colores y las clases tambien en:
   * src\app\components\conectate\mapa\mapa.component.scss
   */
  public static base_theme: BaseColors = {
    colors: {
      jovenes: "#C56060",
      damas: "#8660C5",
      caballeros: "#383838",
      matrimonios: "#607CC5",
      title: "#343a40",
      active: "#009688"
    },
    classes: {
      jovenes: "jovenes",
      damas: "damas",
      caballeros: "caballeros",
      matrimonios: "matrimonios",
      title: "#343a40",
      active: "base"
    }
  };
  // HDBs
  public static hdbs: StateHDB[] = [
    { id: "PERPETUO_SOCORRO", state: false },
    { id: "RAMON_PINTO", state: false },
    { id: "DIECIOCHO_DE_NOVIEMBRE", state: false },
    { id: "STO_DOMINGO", state: false },
    { id: "BARRIO_CENTRAL", state: false },
    { id: "VEINTICUATRO_DE_MAYO", state: false },
    { id: "ORILLAS_DEL_ZAMORA", state: false },
    { id: "JUAN_DE_SALINAS", state: false },
    { id: "ZAMORA_HUAYCO", state: false },
    { id: "SAN_SEBASTIAN", state: false },
    { id: "PUCARA", state: false },
    { id: "GERANIOS", state: false },
    { id: "LA_PRADERA", state: false },
    { id: "LOS_ROSALES", state: false },
    { id: "YAHUARCUNA", state: false },
    { id: "CAPULI", state: false },
    { id: "SANTIAGO_FERNANDEZ", state: false },
    { id: "SAN_CAYETANO", state: false },
    { id: "LA_ESTANCIA", state: false },
    { id: "LA_PAZ", state: false },
    { id: "LA_INMACULADA", state: false },
    { id: "CHINGUILANCHI", state: false },
    { id: "AMABLE_MARIA", state: false },
    { id: "JIPIRO", state: false },
    { id: "EL_VALLE", state: false },
    { id: "SAUCES_NORTE", state: false },
    { id: "ZALAPA", state: false },
    { id: "MOTUPE", state: false },
    { id: "LA_BANDA", state: false },
    { id: "LAS_PITAS", state: false },
    { id: "CARIGAN", state: false },
    { id: "LAS_PALMAS", state: false },
    { id: "ALBORADA", state: false },
    { id: "GRAN_COLOMBIA", state: false },
    { id: "BELEN", state: false },
    { id: "TURUNUMA", state: false },
    { id: "CLODOVEO", state: false },
    { id: "SAN_JOSE", state: false },
    { id: "CELI_ROMAN", state: false },
    { id: "SAN_VICENTE", state: false },
    { id: "EL_PEDESTAL", state: false },
    { id: "BORJA", state: false },
    { id: "PLATEADO", state: false },
    { id: "BOLONIA", state: false },
    { id: "OBRAPIA", state: false },
    { id: "TIERRAS_COLORADAS", state: false },
    { id: "CAPULI_LOMA", state: false },
    { id: "MIRAFLORES", state: false },
    { id: "MENFIS", state: false },
    { id: "CHONTACRUZ", state: false },
    { id: "HEROES_DEL_CENEPA", state: false },
    { id: "DANIEL_ALVAREZ", state: false },
    { id: "JUAN_JOSE_CASTILLO", state: false },
    { id: "ST_TERESITA", state: false },
    { id: "LA_TEBAIDA", state: false },
    { id: "SAN_PEDRO", state: false },
    { id: "ISIDRO_AYORA", state: false },
    { id: "COLINAS_LOJANAS", state: false },
    { id: "SOL_DE_LOS_ANDES", state: false },
    { id: "SAN_ISIDRO", state: false },
    { id: "CIUDAD_ALEGRIA", state: false },
    { id: "LA_ARGELIA", state: false },
    { id: "FUERA_DE_LA_CIUDAD", state: false }
  ];

  // -------------------------------------------------------
  // Radio
  public static radio: any = {
    bg_image: "assets/img/bg4.jpg"
  };

  // Sponsors
  public static sponsors: any = [
    {
      src: "assets/img/logo_cropped.png",
      title: "Logo"
    },
    {
      src: "assets/img/logo_cropped.png",
      title: "Logo"
    },
    {
      src: "assets/img/logo_cropped.png",
      title: "Logo"
    },
    {
      src: "assets/img/logo_cropped.png",
      title: "Logo"
    },
    {
      src: "assets/img/logo_cropped.png",
      title: "Logo"
    },
    {
      src: "assets/img/logo_cropped.png",
      title: "Logo"
    }
  ];
}
