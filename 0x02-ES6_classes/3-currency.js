export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') throw TypeError('name must be a string');
    if (typeof code !== 'string') throw TypeError('code must be a string');

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
