/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (01-sep-2020)
 * - Added NgxSpinner (02-sep-2020)
 * - Added Ng2TelInput (04-sep-2020)
 * ---------------------------------------
 */

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CclineService } from 'src/app/services/ccline.service';
import { FormResponse } from 'src/app/models/cclineForm';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  ccline_form: FormGroup;
  formRes: FormResponse;
  isValid: Boolean;

  constructor(private fb: FormBuilder, private ccls: CclineService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.ccline_form = this.fb.group({
      ccline_name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      ccline_lastname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      ccline_country: new FormControl('', [
        Validators.required,
        Validators.pattern('([a-zA-ZáéíóúñÁÉÍÓÚÑ]\\s?)+,\\s?([a-zA-ZáéíóúñÁÉÍÓÚÑ]\\s?)+'),
      ]),
      ccline_email: new FormControl('', [Validators.required, Validators.email]),
      ccline_mobile_phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(17),
      ]),
      ccline_birthday: new FormControl('', [Validators.required]),
      ccline_gender: new FormControl('', [Validators.required, Validators.pattern('(masculino|femenino)')]),
      ccline_discover: new FormControl('', [
        Validators.required,
        Validators.pattern('(redes_sociales|web|invitacion)'),
      ]),
      ccline_terms: new FormControl('', [Validators.required]),
      ccline_country_code: new FormControl(''),
    });
  }

  get name() {
    return this.ccline_form.get('ccline_name');
  }
  get lastname() {
    return this.ccline_form.get('ccline_lastname');
  }
  get country() {
    return this.ccline_form.get('ccline_country');
  }
  get country_code() {
    return this.ccline_form.get('ccline_country_code');
  }
  get email() {
    return this.ccline_form.get('ccline_email');
  }
  get phone() {
    return this.ccline_form.get('ccline_mobile_phone');
  }
  get birthday() {
    return this.ccline_form.get('ccline_birthday');
  }
  get gender() {
    return this.ccline_form.get('ccline_gender');
  }
  get discover() {
    return this.ccline_form.get('ccline_discover');
  }
  get terms() {
    return this.ccline_form.get('ccline_terms');
  }

  /**
   * Envia la data al API para suscribir a un nuevo asistente
   */
  handleSubmit(): void {
    this.spinner.show();
    this.terms.setValue(+this.terms.value);

    this.ccls.postSubscription(this.ccline_form.value).subscribe((data: FormResponse) => {
      // console.log(data);

      this.formRes = data;

      if (data.status) this.resetForm();

      this.spinner.hide();
    });
  }

  /**
   * Resetea el formulario a los valores iniciales
   */
  private resetForm(): void {
    this.ccline_form.reset();
  }

  /**
   * Verifica si un numero de telefono es valido
   */
  isValidNumber(e: Boolean) {
    this.isValid = e;
  }

  /**
   * Obtiene metadatos del numero ingresado.
   */
  getNumberData(e: { isValid: Boolean; number: String; name: String; iso2: String }): void {
    if (e.isValid) {
      this.phone.setValue(e.number);
      this.country_code.setValue(e.iso2);
    }
  }
}
