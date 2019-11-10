/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (9-nov-2019)
 * ---------------------------------------
 */

export interface RootObject {
    title: string;
    img: string;
    tabs: Tab[];
  }
  
export interface Tab {
    title: string;
    content?: string;
    subtitle_1?: string;
    paragraph_1?: string;
    subtitle_2?: string;
    paragraph_2?: string;
    subtitle_3?: string;
    paragraph_3?: string;
    subtitle_4?: string;
    paragraph_4?: string;
    subtitle_5?: string;
    paragraph_5?: string;
    paragraph_6?: string;
    author?: string;
    objetivos?: string[];
    principios?: Principio[];
  }
  
export interface Principio {
    title: string;
    content: string;
    verse: string;
  }