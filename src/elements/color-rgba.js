import {html, IoObject} from "../io.js";

//TODO: test

export class IoColorRgba extends IoObject {
  static get style() {
    return html`<style>
    :host {
      display: flex;
      flex-direction: row;
    }
    :host > io-number {
      flex: 1 1;
    }
    </style>`;
  }
  changed() {
    this.template([
      ['io-number', {value: this.value.r, 'on-value-set': this._onValueSet, id: 'r', step: 0.01, min: 0, max: 1, strict: false, underslider: true, style: {'--slider-color': '#ff9977'}}],
      ['io-number', {value: this.value.g, 'on-value-set': this._onValueSet, id: 'g', step: 0.01, min: 0, max: 1, strict: false, underslider: true, style: {'--slider-color': '#55ff44'}}],
      ['io-number', {value: this.value.b, 'on-value-set': this._onValueSet, id: 'b', step: 0.01, min: 0, max: 1, strict: false, underslider: true, style: {'--slider-color': '#4499ff'}}],
      ['io-number', {value: this.value.a, 'on-value-set': this._onValueSet, id: 'a', step: 0.01, min: 0, max: 1, strict: false, underslider: true, style: {'--slider-color': '#000000'}}]
    ]);

  }
}

IoColorRgba.Register();
