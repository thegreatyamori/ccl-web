/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 *
 * ---------------------------------------
 * - Creation (01-sep-2020)
 * ---------------------------------------
 */

export interface RootObject {
  ccline_name: string;
  ccline_lastname: string;
  ccline_country: string;
  ccline_email: string;
  ccline_mobile_phone: string;
  ccline_birthday: Date;
  ccline_gender: string;
  ccline_discover: string;
  ccline_terms: Number;
}

export interface FormResponse {
  status: Boolean;
  type?: String;
  message?: String;
  errors?: Errors;
}

interface Errors {
  ccline_name?: Array<string>;
  ccline_lastname?: Array<string>;
  ccline_country?: Array<string>;
  ccline_email?: Array<string>;
  ccline_mobile_phone?: Array<string>;
  ccline_birthday?: Array<string>;
  ccline_gender?: Array<string>;
  ccline_discover?: Array<string>;
  ccline_terms?: Array<string>;
}
