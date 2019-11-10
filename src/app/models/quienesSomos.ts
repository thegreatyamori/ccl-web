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
    subtitle_2?: string;
    objetivos?: string[];
    principios?: Principio[];
  }
  
export interface Principio {
    title: string;
    content: string;
    verse: string;
  }