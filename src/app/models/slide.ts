/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (27-oct-2019)
 * - Deleted Thumb values (5-nov-2019)
 * - Added RootObject (17-nov-2019)
 * - Deleted images, isActive (9-jul-2020)
 * ---------------------------------------
 */

export interface RootObject {
  status: boolean;
  res: Slide[];
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}
