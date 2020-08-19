export class Title {
  /**
   * Capitaliza la primera letra de una palabra
   *  @param str cadena a capitalizar
   * @returns la cadena capitalizada
   */
  static capitalize(str: string): string {
    return str.replace(/(^|\s)([a-z])/g, (_m, p1, p2) => {
      return p1 + p2.toUpperCase();
    });
  }

  /**
   * Elimina los _ del titulo
   * @param str la cadena a convertir
   * @returns eg. CADENA CONVERTIDA
   *
   */
  static convert(str: string): string {
    return str.split("_").join(" ");
  }
}
