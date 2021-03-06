/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (12-ago-2020)
 * ---------------------------------------
 */

/**
 * Envuelve la imagen en una funcion css
 * @returns string url()
 */
export const backgroundImageUrl = (image: string): string => {
  return `url('${image}')`;
};

/**
 * Retorna un objeto con la propiedad background-image
 * @returns object
 */
export const backgroundImage = (image: string): object => {
  return { 'background-image': backgroundImageUrl(image) };
};
