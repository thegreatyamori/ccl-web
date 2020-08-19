export class Timeout {
  /**
   * Implementacion de settimeout con promesas
   * @param t segundos en ms
   * @returns una promesa a resolver
   */
  static delay(t: number) {
    return new Promise(resolve => setTimeout(resolve, t));
  }
}
