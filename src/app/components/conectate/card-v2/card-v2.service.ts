/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (12-feb-2020)
 * ---------------------------------------
 */

import { Injectable } from "@angular/core";
import { CardV2Component } from "./card-v2.component";

@Injectable({
  providedIn: "root"
})
export class BottomSheetService {
  /**
   * Permite activar el BottomSheet
   * @param modal un objeto
   */
  open(modal: CardV2Component) {
    modal.open();
  }

  /**
   * Permite desactivar el BottomSheet
   * @param modal un objeto
   */
  close(modal: CardV2Component) {
    modal.close();
  }
}
