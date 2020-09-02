/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Created & Added radio UI (24-ene-2020)
 * ---------------------------------------
 */

import { Component, OnInit, Input } from '@angular/core';
import { RadioHelperService } from 'src/app/services/radio-helper.service';
import { audioManager } from 'src/app/models/audioManager';
import { styles } from 'src/app/models/radioMini';

@Component({
  selector: 'radio-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.scss'],
})
export class MiniComponent implements OnInit {
  style: styles;
  isActive: boolean;
  audioOptions: audioManager;

  @Input('top') top: number;
  @Input('bottom') bottom: number;
  @Input('left') left: number;
  @Input('right') right: number;

  constructor(private helper: RadioHelperService) {}

  ngOnInit() {
    this.helper.audioState.subscribe((options: audioManager) => (this.audioOptions = options));
    this.helper.miniPlayerActive.subscribe((state) => (this.isActive = state));
    this.style = {
      top: this.top ? `${this.top}px` : 'auto',
      bottom: this.bottom ? `${this.bottom}px` : 'auto',
      left: this.left ? `${this.left}px` : 'auto',
      right: this.right ? `${this.right}px` : 'auto',
      'z-index': 100,
    };
  }

  /**
   * Cambia el estado entre play/pause
   */
  switchState(): void {
    this.audioOptions.state = !this.audioOptions.state;
    this.audioOptions.id = 'mini';
    this.helper.manageAudio(this.audioOptions);
  }
}
