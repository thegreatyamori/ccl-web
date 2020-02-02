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
  // Quienes Somos
  public static pages: any = {
    title: "¡Tu misión es hoy!",
    bg_image: "assets/img/quienes-somos/header.jpg",
    logo_title: Settings.logo
  };

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

  // -------------------------------------------------------
  // Radio
  public static conectate: any = {
    title: "¡Somos una iglesia celular!",
    bg_image: "assets/img/bg4.jpg",
    logo_title: Settings.logo
  };
}
