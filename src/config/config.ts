import { BaseColors } from 'src/app/models/config';

export class Settings {
  // -------------------------------------------------------
  // General
  public static title: string = 'Centro Cristiano de Loja';
  public static logo: string = 'assets/img/logo_cropped.png';

  // -------------------------------------------------------
  // Home

  // Slider
  public static slider: any = {
    bg_title: 'Discipulado y Multiplicación',
    logo_ccl: Settings.logo,
    bg: {
      default: 'assets/img/home/large.jpg',
      final: 'assets/img/home/header.jpg',
    },
  };

  // Pastores
  public static pastores: any = {
    bg: {
      default: 'assets/img/home/large.jpg',
      final: 'assets/img/home/bg-pastores.jpg',
    },
  };

  // Buttons bar
  public static buttons_bar: any = {
    bg_image: 'assets/img/home/bg-buttons-bar.svg',
    opts: [
      {
        navLink: '/aula-virtual',
        navImage: 'assets/img/home/card-eva.jpg',
        navText: 'Aula Virtual CCL',
        navIcon: 'chalkboard',
        navTarget: '_blank',
      },
      {
        navLink: '/actividades',
        navImage: 'assets/img/home/card-calendar.jpg',
        navText: 'Calendario',
        navIcon: 'calendar-alt',
        navTarget: '_self',
      },
      {
        navLink: '/donaciones',
        navImage: 'assets/img/home/card-donations.jpg',
        navText: 'Donaciones',
        navIcon: 'donate',
        navTarget: '_self',
      },
      // {
      //   navLink: '/misiones',
      //   navImage: 'assets/img/home/card-misiones.jpg',
      //   navText: 'Misiones',
      //   navIcon: 'globe-americas',
      //   navTarget: '_self',
      // },
    ],
  };

  // Tow-dah
  public static towdah: any = {
    bg_image: 'assets/img/home/bg-buttons-bar.svg',
    logo: 'assets/img/home/tow-dah-150.png',
    bg_image_tow: 'assets/img/home/bg-tow-dah.jpg',
    social: [
      {
        text: 'Siguenos en YouTube',
        icon: 'youtube',
        typeIcon: 'fab',
        link: 'https://www.youtube.com/channel/UCjDgHbztvOQayUItvvhGUAg',
      },
      {
        text: 'Siguenos en Instagram',
        icon: 'instagram',
        typeIcon: 'fab',
        link: 'https://www.instagram.com/towdah.ccl',
      },
      {
        text: 'Siguenos en Facebook',
        icon: 'facebook',
        typeIcon: 'fab',
        link: 'https://www.facebook.com/Towdah.ccl',
      },
      {
        text: 'Escúchanos en Deezer',
        icon: 'deezer',
        typeIcon: 'fab',
        link: 'https://www.deezer.com/en/album/69125232',
      },
      {
        text: 'Escúchanos en Apple Music',
        icon: 'apple',
        typeIcon: 'fab',
        link: 'https://music.apple.com/ec/album/manifestando-su-gloria/1417446915',
      },
    ],
  };

  // -------------------------------------------------------
  // Cuerpo Pastoral
  public static cuerpo_pastoral: any = {
    title: 'Cuerpo Pastoral',
    bg_image: 'assets/img/pastores/header.jpg',
    logo_title: Settings.logo,
  };

  // -------------------------------------------------------
  // Misiones
  public static misiones: any = {
    cards: [
      {
        tag: '',
        title: 'Misiones',
        text: `Misiones es llevar y compartir el evangelio a toda etnia y nación; donde existen personas que ni si quiera han podido escuchar el nombre de Jesús.`,
        btnText: null,
        btnColor: null,
        link: null,
        default: 'assets/img/home/large.jpg',
        bg: 'assets/img/home/large.jpg',
      },
      {
        tag: 'Misiones',
        title: 'Transculturales',
        text: `2 proyectos misioneros a largo plazo, ubicados en países con persecución muy elevada y en zonas de difícil acceso.`,
        btnText: 'Ver más...',
        btnColor: 'btn-neutral',
        link: 'transculturales',
        default: 'assets/img/home/large.jpg',
        bg: 'https://placebear.com/1440/960',
      },
      {
        tag: 'Obras',
        title: 'Locales',
        text: `8 obras dentro de la provincia de Loja. Nuestro objetivo hasta el 2030 es aperturar por lo menos 70 nuevas iglesias.`,
        btnText: 'Ver más...',
        btnColor: 'btn-neutral',
        link: 'filiales',
        default: 'assets/img/home/large.jpg',
        bg: 'assets/img/misiones/local.jpg',
      },
      {
        tag: 'Campos',
        title: 'Blancos',
        text: `4 obras dentro de la provincia de Loja. Los campos blancos son lugares donde existe poca población, pero se lleva el evangelio.`,
        btnText: 'Ver más...',
        btnColor: 'btn-danger',
        link: 'campos-blancos',
        default: 'assets/img/home/large.jpg',
        bg: 'https://placebear.com/1440/960',
      },
    ],
  };

  // -------------------------------------------------------
  // Quienes Somos
  public static pages: any = {
    title: '¡Tu misión es hoy!',
    bg_image: 'assets/img/quienes-somos/header.jpg',
    logo_title: Settings.logo,
  };

  // -------------------------------------------------------
  // Conectate
  public static conectate: any = {
    title: '¡Somos una iglesia celular!',
    bg_image: 'assets/img/bg4.jpg',
    logo_title: 'assets/img/logo_cropped.png',
  };

  // mensajes del mapa
  public static msg_mapa: any = {
    click: 'Haz click en cualquier parte del mapa',
    hover: 'Coloca el mouse en cualquier parte del mapa',
  };

  /**
   * cambiar los colores y las clases tambien en:
   * src\assets\sass\hdb-colors.scss
   */
  public static base_theme: BaseColors = {
    colors: {
      jovenes: '#ff5722',
      damas: '#e91e63',
      caballeros: '#795548',
      //  caballeros: "#383838",
      matrimonios: '#4caf50',
      active: '#009688',
    },
  };

  // -------------------------------------------------------
  // Radio
  public static radio: any = {
    bg_image: 'assets/img/radio/bg.jpg',
  };

  // Sponsors
  public static sponsors: any = [
    {
      src: 'assets/img/logo_cropped.png',
      title: 'Logo',
    },
    {
      src: 'assets/img/logo_cropped.png',
      title: 'Logo',
    },
    {
      src: 'assets/img/logo_cropped.png',
      title: 'Logo',
    },
    {
      src: 'assets/img/logo_cropped.png',
      title: 'Logo',
    },
    {
      src: 'assets/img/logo_cropped.png',
      title: 'Logo',
    },
    {
      src: 'assets/img/logo_cropped.png',
      title: 'Logo',
    },
  ];
}
