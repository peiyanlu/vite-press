import {
  __publicField
} from "./chunk-T2T6Q22Z.js";

// node_modules/.pnpm/live2d-lib@1.0.2/node_modules/live2d-lib/lib/live2dWidget.esm.js
var ue = ((s) => (s[s.Max = 2] = "Max", s[s.Min = 0.8] = "Min", s))(ue || {});
var Yt = ((s) => (s[s.Left = -1] = "Left", s[s.Right = 1] = "Right", s[s.Bottom = -1] = "Bottom", s[s.Top = 1] = "Top", s))(Yt || {});
var wt = ((s) => (s[s.Left = -2] = "Left", s[s.Right = 2] = "Right", s[s.Bottom = -2] = "Bottom", s[s.Top = 2] = "Top", s))(wt || {});
var ft = ((s) => (s.Idle = "Idle", s.TapBody = "TapBody", s.TapLeft = "TapLeft", s.TapRight = "TapRight", s.Tap = "Tap", s))(ft || {});
var R = ((s) => (s.Head = "Head", s.Body = "Body", s.Left = "Left", s.Right = "Right", s.Other = "Other", s))(R || {});
var K = ((s) => (s[s.None = 0] = "None", s[s.Idle = 1] = "Idle", s[s.Normal = 2] = "Normal", s[s.Force = 3] = "Force", s))(K || {});
var ht = globalThis.document || {};
var L = { canvas: { width: 280, height: 360 }, scale: 1, debug: false, target: ht.body, source: { path: "", models: [] } };
var Ls = (s) => {
  L.target = ht.body, Object.keys(s).forEach((t) => {
    L.hasOwnProperty(t) && (L[t] = s[t]);
  });
};
var _x = class {
  constructor(t = 0) {
    __publicField(this, "_ptr");
    __publicField(this, "_size");
    __publicField(this, "_capacity");
    t < 1 ? (this._ptr = [], this._capacity = 0, this._size = 0) : (this._ptr = new Array(t), this._capacity = t, this._size = 0);
  }
  at(t) {
    return this._ptr[t];
  }
  set(t, e) {
    this._ptr[t] = e;
  }
  get(t = 0) {
    const e = new Array();
    for (let i = t; i < this._size; i++)
      e.push(this._ptr[i]);
    return e;
  }
  pushBack(t) {
    this._size >= this._capacity && this.prepareCapacity(this._capacity == 0 ? _x.s_defaultSize : this._capacity * 2), this._ptr[this._size++] = t;
  }
  clear() {
    this._ptr.length = 0, this._size = 0;
  }
  getSize() {
    return this._size;
  }
  assign(t, e) {
    this._size < t && this.prepareCapacity(t);
    for (let r = 0; r < t; r++)
      this._ptr[r] = e;
    this._size = t;
  }
  resize(t, e = null) {
    this.updateSize(t, e, true);
  }
  updateSize(t, e = null, i = true) {
    if (this._size < t)
      if (this.prepareCapacity(t), i)
        for (let a = this._size; a < t; a++)
          typeof e == "function" ? this._ptr[a] = JSON.parse(JSON.stringify(new e())) : this._ptr[a] = e;
      else
        for (let a = this._size; a < t; a++)
          this._ptr[a] = e;
    else {
      const a = this._size - t;
      this._ptr.splice(this._size - a, a);
    }
    this._size = t;
  }
  insert(t, e, i) {
    let r = t._index;
    const a = e._index, o = i._index, n = o - a;
    this.prepareCapacity(this._size + n);
    const l = this._size - r;
    if (l > 0)
      for (let u = 0; u < l; u++)
        this._ptr.splice(r + u, 0, null);
    for (let u = a; u < o; u++, r++)
      this._ptr[r] = e._vector._ptr[u];
    this._size = this._size + n;
  }
  remove(t) {
    return t < 0 || this._size <= t ? false : (this._ptr.splice(t, 1), --this._size, true);
  }
  erase(t) {
    const e = t._index;
    return e < 0 || this._size <= e ? t : (this._ptr.splice(e, 1), --this._size, new jt(this, e));
  }
  prepareCapacity(t) {
    t > this._capacity && (this._capacity == 0 ? (this._ptr = new Array(t), this._capacity = t) : (this._ptr.length = t, this._capacity = t));
  }
  begin() {
    return this._size == 0 ? this.end() : new jt(this, 0);
  }
  end() {
    return new jt(this, this._size);
  }
  getOffset(t) {
    const e = new _x();
    return e._ptr = this.get(t), e._size = this.get(t).length, e._capacity = this.get(t).length, e;
  }
};
var x = _x;
__publicField(x, "s_defaultSize", 10);
var jt = class Ee {
  constructor(t, e) {
    __publicField(this, "_index");
    __publicField(this, "_vector");
    this._vector = t ?? null, this._index = e ?? 0;
  }
  set(t) {
    return this._index = t._index, this._vector = t._vector, this;
  }
  preIncrement() {
    return ++this._index, this;
  }
  preDecrement() {
    return --this._index, this;
  }
  increment() {
    return new Ee(this._vector, this._index++);
  }
  decrement() {
    return new Ee(this._vector, this._index--);
  }
  ptr() {
    return this._vector._ptr[this._index];
  }
  substitution(t) {
    return this._index = t._index, this._vector = t._vector, this;
  }
  notEqual(t) {
    return this._index != t._index || this._vector != t._vector;
  }
};
var De;
((s) => {
  s.csmVector = x, s.iterator = jt;
})(De || (De = {}));
var U = class {
  constructor(t) {
    __publicField(this, "s");
    this.s = t;
  }
  append(t, e) {
    return this.s += e !== void 0 ? t.substr(0, e) : t, this;
  }
  expansion(t, e) {
    for (let i = 0; i < t; i++)
      this.append(e);
    return this;
  }
  getBytes() {
    return encodeURIComponent(this.s).replace(/%../g, "x").length;
  }
  getLength() {
    return this.s.length;
  }
  isLess(t) {
    return this.s < t.s;
  }
  isGreat(t) {
    return this.s > t.s;
  }
  isEqual(t) {
    return this.s == t;
  }
  isEmpty() {
    return this.s.length == 0;
  }
};
var ke;
((s) => {
  s.csmString = U;
})(ke || (ke = {}));
var Xt = class {
  constructor(t) {
    __publicField(this, "_id");
    if (typeof t == "string") {
      this._id = new U(t);
      return;
    }
    this._id = t;
  }
  getString() {
    return this._id;
  }
  isEqual(t) {
    return typeof t == "string" ? this._id.isEqual(t) : t instanceof U ? this._id.isEqual(t.s) : t instanceof Xt ? this._id.isEqual(t._id.s) : false;
  }
  isNotEqual(t) {
    return typeof t == "string" ? !this._id.isEqual(t) : t instanceof U ? !this._id.isEqual(t.s) : t instanceof Xt ? !this._id.isEqual(t._id.s) : false;
  }
};
var Oe;
((s) => {
  s.CubismId = Xt;
})(Oe || (Oe = {}));
var Ne = class {
  constructor() {
    __publicField(this, "_ids");
    this._ids = new x();
  }
  release() {
    for (let t = 0; t < this._ids.getSize(); ++t)
      this._ids.set(t, void 0);
    this._ids = null;
  }
  registerIds(t) {
    for (let e = 0; e < t.length; e++)
      this.registerId(t[e]);
  }
  registerId(t) {
    let e = null;
    if (typeof t == "string") {
      if ((e = this.findId(t)) != null)
        return e;
      e = new Xt(t), this._ids.pushBack(e);
    } else
      return this.registerId(t.s);
    return e;
  }
  getId(t) {
    return this.registerId(t);
  }
  isExist(t) {
    return typeof t == "string" ? this.findId(t) != null : this.isExist(t.s);
  }
  findId(t) {
    for (let e = 0; e < this._ids.getSize(); ++e)
      if (this._ids.at(e).getString().isEqual(t))
        return this._ids.at(e);
    return null;
  }
};
var Ue;
((s) => {
  s.CubismIdManager = Ne;
})(Ue || (Ue = {}));
var E = class {
  constructor() {
    __publicField(this, "_tr");
    this._tr = new Float32Array(16), this.loadIdentity();
  }
  static multiply(t, e, i) {
    const r = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), a = 4;
    for (let o = 0; o < a; ++o)
      for (let n = 0; n < a; ++n)
        for (let l = 0; l < a; ++l)
          r[n + o * 4] += t[l + o * 4] * e[n + l * 4];
    for (let o = 0; o < 16; ++o)
      i[o] = r[o];
  }
  loadIdentity() {
    const t = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    this.setMatrix(t);
  }
  setMatrix(t) {
    for (let e = 0; e < 16; ++e)
      this._tr[e] = t[e];
  }
  getArray() {
    return this._tr;
  }
  getScaleX() {
    return this._tr[0];
  }
  getScaleY() {
    return this._tr[5];
  }
  getTranslateX() {
    return this._tr[12];
  }
  getTranslateY() {
    return this._tr[13];
  }
  transformX(t) {
    return this._tr[0] * t + this._tr[12];
  }
  transformY(t) {
    return this._tr[5] * t + this._tr[13];
  }
  invertTransformX(t) {
    return (t - this._tr[12]) / this._tr[0];
  }
  invertTransformY(t) {
    return (t - this._tr[13]) / this._tr[5];
  }
  translateRelative(t, e) {
    const i = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]);
    E.multiply(i, this._tr, this._tr);
  }
  translate(t, e) {
    this._tr[12] = t, this._tr[13] = e;
  }
  translateX(t) {
    this._tr[12] = t;
  }
  translateY(t) {
    this._tr[13] = t;
  }
  scaleRelative(t, e) {
    const i = new Float32Array([t, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    E.multiply(i, this._tr, this._tr);
  }
  scale(t, e) {
    this._tr[0] = t, this._tr[5] = e;
  }
  multiplyByMatrix(t) {
    E.multiply(t.getArray(), this._tr, this._tr);
  }
  clone() {
    const t = new E();
    for (let e = 0; e < this._tr.length; e++)
      t._tr[e] = this._tr[e];
    return t;
  }
};
var ze;
((s) => {
  s.CubismMatrix44 = E;
})(ze || (ze = {}));
var Gt = class {
  constructor() {
    __publicField(this, "_mvpMatrix4x4");
    __publicField(this, "_modelColor");
    __publicField(this, "_isCulling");
    __publicField(this, "_isPremultipliedAlpha");
    __publicField(this, "_anisotropy");
    __publicField(this, "_model");
    __publicField(this, "_useHighPrecisionMask");
    this._isCulling = false, this._isPremultipliedAlpha = false, this._anisotropy = 0, this._model = null, this._modelColor = new Z(), this._useHighPrecisionMask = false, this._mvpMatrix4x4 = new E(), this._mvpMatrix4x4.loadIdentity();
  }
  static create() {
    return null;
  }
  static delete(t) {
  }
  initialize(t) {
    this._model = t;
  }
  drawModel() {
    this.getModel() != null && (this.saveProfile(), this.doDrawModel(), this.restoreProfile());
  }
  setMvpMatrix(t) {
    this._mvpMatrix4x4.setMatrix(t.getArray());
  }
  getMvpMatrix() {
    return this._mvpMatrix4x4;
  }
  setModelColor(t, e, i, r) {
    t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), r < 0 ? r = 0 : r > 1 && (r = 1), this._modelColor.R = t, this._modelColor.G = e, this._modelColor.B = i, this._modelColor.A = r;
  }
  getModelColor() {
    return JSON.parse(JSON.stringify(this._modelColor));
  }
  setIsPremultipliedAlpha(t) {
    this._isPremultipliedAlpha = t;
  }
  isPremultipliedAlpha() {
    return this._isPremultipliedAlpha;
  }
  setIsCulling(t) {
    this._isCulling = t;
  }
  isCulling() {
    return this._isCulling;
  }
  setAnisotropy(t) {
    this._anisotropy = t;
  }
  getAnisotropy() {
    return this._anisotropy;
  }
  getModel() {
    return this._model;
  }
  useHighPrecisionMask(t) {
    this._useHighPrecisionMask = t;
  }
  isUsingHighPrecisionMask() {
    return this._useHighPrecisionMask;
  }
};
__publicField(Gt, "staticRelease");
var G = ((s) => (s[s.CubismBlendMode_Normal = 0] = "CubismBlendMode_Normal", s[s.CubismBlendMode_Additive = 1] = "CubismBlendMode_Additive", s[s.CubismBlendMode_Multiplicative = 2] = "CubismBlendMode_Multiplicative", s))(G || {});
var Z = class {
  constructor() {
    __publicField(this, "R");
    __publicField(this, "G");
    __publicField(this, "B");
    __publicField(this, "A");
    this.R = 1, this.G = 1, this.B = 1, this.A = 1;
  }
};
var Xe;
((s) => {
  s.CubismBlendMode = G, s.CubismRenderer = Gt, s.CubismTextureColor = Z;
})(Xe || (Xe = {}));
var Ds = (s, t, e) => {
  Ye.print(s, "[CSM]" + t, e);
};
var Ht = (s, t, e) => {
  Ds(s, t + `
`, e);
};
var H = (s) => {
  console.assert(s);
};
var Rt;
var Q;
var st;
var k;
Rt = (s, ...t) => {
  Ht(Mt.LogLevel_Debug, "[D]" + s, t);
}, Q = (s, ...t) => {
  Ht(Mt.LogLevel_Info, "[I]" + s, t);
}, st = (s, ...t) => {
  Ht(Mt.LogLevel_Warning, "[W]" + s, t);
}, k = (s, ...t) => {
  Ht(Mt.LogLevel_Error, "[E]" + s, t);
};
var Ye = class {
  static print(t, e, i) {
    if (t < I.getLoggingLevel())
      return;
    const r = I.coreLogFunction;
    if (!r)
      return;
    const a = e.replace(/\{(\d+)\}/g, (o, n) => i[n]);
    r(a);
  }
  static dumpBytes(t, e, i) {
    for (let r = 0; r < i; r++)
      r % 16 == 0 && r > 0 ? this.print(t, `
`) : r % 8 == 0 && r > 0 && this.print(t, "  "), this.print(t, "{0} ", [e[r] & 255]);
    this.print(t, `
`);
  }
  constructor() {
  }
};
var je;
((s) => {
  s.CubismDebug = Ye;
})(je || (je = {}));
var Ge = class {
  constructor(t, e) {
    __publicField(this, "first");
    __publicField(this, "second");
    this.first = t ?? null, this.second = e ?? null;
  }
};
var _O = class {
  constructor(t) {
    __publicField(this, "_keyValues");
    __publicField(this, "_dummyValue");
    __publicField(this, "_size");
    t != null ? t < 1 ? (this._keyValues = [], this._dummyValue = null, this._size = 0) : (this._keyValues = new Array(t), this._size = t) : (this._keyValues = [], this._dummyValue = null, this._size = 0);
  }
  release() {
    this.clear();
  }
  appendKey(t) {
    this.prepareCapacity(this._size + 1, false), this._keyValues[this._size] = new Ge(t), this._size += 1;
  }
  getValue(t) {
    let e = -1;
    for (let i = 0; i < this._size; i++)
      if (this._keyValues[i].first == t) {
        e = i;
        break;
      }
    return e >= 0 ? this._keyValues[e].second : (this.appendKey(t), this._keyValues[this._size - 1].second);
  }
  setValue(t, e) {
    let i = -1;
    for (let r = 0; r < this._size; r++)
      if (this._keyValues[r].first == t) {
        i = r;
        break;
      }
    i >= 0 ? this._keyValues[i].second = e : (this.appendKey(t), this._keyValues[this._size - 1].second = e);
  }
  isExist(t) {
    for (let e = 0; e < this._size; e++)
      if (this._keyValues[e].first == t)
        return true;
    return false;
  }
  clear() {
    this._keyValues = void 0, this._keyValues = null, this._keyValues = [], this._size = 0;
  }
  getSize() {
    return this._size;
  }
  prepareCapacity(t, e) {
    t > this._keyValues.length && (this._keyValues.length == 0 ? (!e && t < _O.DefaultSize && (t = _O.DefaultSize), this._keyValues.length = t) : (!e && t < this._keyValues.length * 2 && (t = this._keyValues.length * 2), this._keyValues.length = t));
  }
  begin() {
    return new mt(this, 0);
  }
  end() {
    return new mt(this, this._size);
  }
  erase(t) {
    const e = t._index;
    return e < 0 || this._size <= e ? t : (this._keyValues.splice(e, 1), --this._size, new mt(this, e));
  }
  dumpAsInt() {
    for (let t = 0; t < this._size; t++)
      Rt("{0} ,", this._keyValues[t]), Rt(`
`);
  }
};
var O = _O;
__publicField(O, "DefaultSize", 10);
var mt = class {
  constructor(t, e) {
    __publicField(this, "_index");
    __publicField(this, "_map");
    this._map = t ?? new O(), this._index = e ?? 0;
  }
  set(t) {
    return this._index = t._index, this._map = t._map, this;
  }
  preIncrement() {
    return ++this._index, this;
  }
  preDecrement() {
    return --this._index, this;
  }
  increment() {
    return new mt(this._map, this._index++);
  }
  decrement() {
    const t = new mt(this._map, this._index);
    return this._map = t._map, this._index = t._index, this;
  }
  ptr() {
    return this._map._keyValues[this._index];
  }
  notEqual(t) {
    return this._index != t._index || this._map != t._map;
  }
};
var He;
((s) => {
  s.csmMap = O, s.csmPair = Ge, s.iterator = mt;
})(He || (He = {}));
var re = class {
  static parseJsonObject(t, e) {
    return Object.keys(t).forEach((i) => {
      typeof t[i] == "boolean" ? e.put(i, new X(t[i])) : typeof t[i] == "string" ? e.put(i, new yt(t[i])) : typeof t[i] == "number" ? e.put(i, new $t(t[i])) : t[i] instanceof Array ? e.put(i, re.parseJsonArray(t[i])) : t[i] instanceof Object ? e.put(i, re.parseJsonObject(t[i], new xt())) : t[i] == null ? e.put(i, new St()) : e.put(i, t[i]);
    }), e;
  }
  static parseJsonArray(t) {
    const e = new he();
    return Object.keys(t).forEach((i) => {
      const r = Number(i);
      if (typeof r == "number")
        typeof t[r] == "boolean" ? e.add(new X(t[r])) : typeof t[r] == "string" ? e.add(new yt(t[r])) : typeof t[r] == "number" ? e.add(new $t(t[r])) : t[i] instanceof Array ? e.add(this.parseJsonArray(t[i])) : t[i] instanceof Object ? e.add(this.parseJsonObject(t[i], new xt())) : t[i] == null ? e.add(new St()) : e.add(t[i]);
      else if (t[i] instanceof Array)
        e.add(this.parseJsonArray(t[i]));
      else if (t[i] instanceof Object)
        e.add(this.parseJsonObject(t[i], new xt()));
      else if (t[i] == null)
        e.add(new St());
      else
        for (let a = 0; a < t[i].length; a++)
          e.add(t[i][a]);
    }), e;
  }
};
var Wt = "Error: type mismatch";
var ks = "Error: index out of bounds";
var _a;
var F = (_a = class {
  constructor() {
    __publicField(this, "_stringBuffer");
  }
  getRawString(t, e) {
    return this.getString(t, e);
  }
  toInt(t = 0) {
    return t;
  }
  toFloat(t = 0) {
    return t;
  }
  toBoolean(t = false) {
    return t;
  }
  getSize() {
    return 0;
  }
  getArray(t = null) {
    return t;
  }
  getVector(t = new x()) {
    return t;
  }
  getMap(t) {
    return t;
  }
  getValueByIndex(t) {
    return _a.errorValue.setErrorNotForClientCall(Wt);
  }
  getValueByString(t) {
    return _a.nullValue.setErrorNotForClientCall(Wt);
  }
  getKeys() {
    return _a.s_dummyKeys;
  }
  isError() {
    return false;
  }
  isNull() {
    return false;
  }
  isBool() {
    return false;
  }
  isFloat() {
    return false;
  }
  isString() {
    return false;
  }
  isArray() {
    return false;
  }
  isMap() {
    return false;
  }
  equals(t) {
    return false;
  }
  isStatic() {
    return false;
  }
  setErrorNotForClientCall(t) {
    return Et.errorValue;
  }
  static staticInitializeNotForClientCall() {
    X.trueValue = new X(true), X.falseValue = new X(false), _a.errorValue = new Et("ERROR", true), _a.nullValue = new St(), _a.s_dummyKeys = new x();
  }
  static staticReleaseNotForClientCall() {
    X.trueValue = null, X.falseValue = null, _a.errorValue = null, _a.nullValue = null, _a.s_dummyKeys = null;
  }
}, __publicField(_a, "s_dummyKeys"), __publicField(_a, "errorValue"), __publicField(_a, "nullValue"), _a);
var A = class {
  constructor(t, e) {
    __publicField(this, "_parseCallback", re.parseJsonObject);
    __publicField(this, "_error");
    __publicField(this, "_lineCount");
    __publicField(this, "_root");
    this._error = null, this._lineCount = 0, this._root = null, t != null && this.parseBytes(t, e, this._parseCallback);
  }
  static create(t, e) {
    const i = new A();
    return i.parseBytes(t, e, i._parseCallback) ? i : (A.delete(i), null);
  }
  static delete(t) {
  }
  getRoot() {
    return this._root;
  }
  static arrayBufferToString(t) {
    const e = new Uint8Array(t);
    let i = "";
    for (let r = 0, a = e.length; r < a; ++r)
      i += "%" + this.pad(e[r].toString(16));
    return i = decodeURIComponent(i), i;
  }
  static pad(t) {
    return t.length < 2 ? "0" + t : t;
  }
  parseBytes(t, e, i) {
    const r = new Array(1), a = A.arrayBufferToString(t);
    if (i == null ? this._root = this.parseValue(a, e, 0, r) : this._root = i(JSON.parse(a), new xt()), this._error) {
      let o = "\0";
      return o = "Json parse error : @line " + (this._lineCount + 1) + `
`, this._root = new yt(o), Q("{0}", this._root.getRawString()), false;
    } else if (this._root == null)
      return this._root = new Et(new U(this._error), false), false;
    return true;
  }
  getParseError() {
    return this._error;
  }
  checkEndOfFile() {
    return this._root.getArray()[1].equals("EOF");
  }
  parseValue(t, e, i, r) {
    if (this._error)
      return null;
    let a = null, o = i, n;
    for (; o < e; o++)
      switch (t[o]) {
        case "-":
        case ".":
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          const u = new Array(1);
          return n = Os(t.slice(o), u), r[0] = t.indexOf(u[0]), new $t(n);
        }
        case '"':
          return new yt(this.parseString(t, e, o + 1, r));
        case "[":
          return a = this.parseArray(t, e, o + 1, r), a;
        case "{":
          return a = this.parseObject(t, e, o + 1, r), a;
        case "n":
          return o + 3 < e ? (a = new St(), r[0] = o + 4) : this._error = "parse null", a;
        case "t":
          return o + 3 < e ? (a = X.trueValue, r[0] = o + 4) : this._error = "parse true", a;
        case "f":
          return o + 4 < e ? (a = X.falseValue, r[0] = o + 5) : this._error = "illegal ',' position", a;
        case ",":
          return this._error = "illegal ',' position", null;
        case "]":
          return r[0] = o, null;
        case `
`:
          this._lineCount++;
      }
    return this._error = "illegal end of value", null;
  }
  parseString(t, e, i, r) {
    if (this._error)
      return null;
    let a = i, o, n;
    const l = new U("");
    let u = i;
    for (; a < e; a++)
      switch (o = t[a], o) {
        case '"':
          return r[0] = a + 1, l.append(t.slice(u), a - u), l.s;
        case "//":
          if (a++, a - 1 > u && l.append(t.slice(u), a - u), u = a + 1, a < e)
            switch (n = t[a], n) {
              case "\\":
                l.expansion(1, "\\");
                break;
              case '"':
                l.expansion(1, '"');
                break;
              case "/":
                l.expansion(1, "/");
                break;
              case "b":
                l.expansion(1, "\b");
                break;
              case "f":
                l.expansion(1, "\f");
                break;
              case "n":
                l.expansion(1, `
`);
                break;
              case "r":
                l.expansion(1, "\r");
                break;
              case "t":
                l.expansion(1, "	");
                break;
              case "u":
                this._error = "parse string/unicord escape not supported";
                break;
            }
          else
            this._error = "parse string/escape error";
      }
    return this._error = "parse string/illegal end", null;
  }
  parseObject(t, e, i, r) {
    if (this._error)
      return null;
    const a = new xt();
    let o = "", n = i, l = "";
    const u = Array(1);
    let h = false;
    for (; n < e; n++) {
      t:
        for (; n < e; n++)
          switch (l = t[n], l) {
            case '"':
              if (o = this.parseString(t, e, n + 1, u), this._error)
                return null;
              n = u[0], h = true;
              break t;
            case "}":
              return r[0] = n + 1, a;
            case ":":
              this._error = "illegal ':' position";
              break;
            case `
`:
              this._lineCount++;
          }
      if (!h)
        return this._error = "key not found", null;
      h = false;
      t:
        for (; n < e; n++)
          switch (l = t[n], l) {
            case ":":
              h = true, n++;
              break t;
            case "}":
              this._error = "illegal '}' position";
              break;
            case `
`:
              this._lineCount++;
          }
      if (!h)
        return this._error = "':' not found", null;
      const m = this.parseValue(t, e, n, u);
      if (this._error)
        return null;
      n = u[0], a.put(o, m);
      t:
        for (; n < e; n++)
          switch (l = t[n], l) {
            case ",":
              break t;
            case "}":
              return r[0] = n + 1, a;
            case `
`:
              this._lineCount++;
          }
    }
    return this._error = "illegal end of perseObject", null;
  }
  parseArray(t, e, i, r) {
    if (this._error)
      return null;
    let a = new he(), o = i, n;
    const l = new Array(1);
    for (; o < e; o++) {
      const u = this.parseValue(t, e, o, l);
      if (this._error)
        return null;
      o = l[0], u && a.add(u);
      t:
        for (; o < e; o++)
          switch (n = t[o], n) {
            case ",":
              break t;
            case "]":
              return r[0] = o + 1, a;
            case `
`:
              ++this._lineCount;
          }
    }
    return a = void 0, this._error = "illegal end of parseObject", null;
  }
};
var $t = class extends F {
  constructor(t) {
    super();
    __publicField(this, "_value");
    this._value = t;
  }
  isFloat() {
    return true;
  }
  getString(t, e) {
    const i = "\0";
    return this._value = parseFloat(i), this._stringBuffer = i, this._stringBuffer;
  }
  toInt(t = 0) {
    return parseInt(this._value.toString());
  }
  toFloat(t = 0) {
    return this._value;
  }
  equals(t) {
    return typeof t == "number" ? Math.round(t) ? false : t == this._value : false;
  }
};
var X = class extends F {
  constructor(t) {
    super();
    __publicField(this, "_boolValue");
    this._boolValue = t;
  }
  isBool() {
    return true;
  }
  toBoolean(t = false) {
    return this._boolValue;
  }
  getString(t, e) {
    return this._stringBuffer = this._boolValue ? "true" : "false", this._stringBuffer;
  }
  equals(t) {
    return typeof t == "boolean" ? t == this._boolValue : false;
  }
  isStatic() {
    return true;
  }
};
__publicField(X, "trueValue");
__publicField(X, "falseValue");
var yt = class extends F {
  constructor(t) {
    super(), typeof t == "string" && (this._stringBuffer = t), t instanceof U && (this._stringBuffer = t.s);
  }
  isString() {
    return true;
  }
  getString(t, e) {
    return this._stringBuffer;
  }
  equals(t) {
    return typeof t == "string" ? this._stringBuffer == t : t instanceof U ? this._stringBuffer == t.s : false;
  }
};
var Et = class extends yt {
  constructor(t, e) {
    var __super = (...args) => {
      super(...args);
      __publicField(this, "_isStatic");
    };
    typeof t == "string" ? __super(t) : __super(t), this._isStatic = e;
  }
  isStatic() {
    return this._isStatic;
  }
  setErrorNotForClientCall(t) {
    return this._stringBuffer = t, this;
  }
  isError() {
    return true;
  }
};
var St = class extends F {
  isNull() {
    return true;
  }
  getString(t, e) {
    return this._stringBuffer;
  }
  isStatic() {
    return true;
  }
  setErrorNotForClientCall(t) {
    return this._stringBuffer = t, Et.nullValue;
  }
  constructor() {
    super(), this._stringBuffer = "NullValue";
  }
};
var he = class extends F {
  constructor() {
    super();
    __publicField(this, "_array");
    this._array = new x();
  }
  release() {
    for (let t = this._array.begin(); t.notEqual(this._array.end()); t.preIncrement()) {
      let e = t.ptr();
      e && !e.isStatic() && (e = void 0, e = null);
    }
  }
  isArray() {
    return true;
  }
  getValueByIndex(t) {
    if (t < 0 || this._array.getSize() <= t)
      return F.errorValue.setErrorNotForClientCall(ks);
    const e = this._array.at(t);
    return e ?? F.nullValue;
  }
  getValueByString(t) {
    return F.errorValue.setErrorNotForClientCall(Wt);
  }
  getString(t, e) {
    const i = e + `[
`;
    for (let r = this._array.begin(); r.notEqual(this._array.end()); r.increment()) {
      const a = r.ptr();
      this._stringBuffer += e + "" + a.getString(e + " ") + `
`;
    }
    return this._stringBuffer = i + e + `]
`, this._stringBuffer;
  }
  add(t) {
    this._array.pushBack(t);
  }
  getVector(t = null) {
    return this._array;
  }
  getSize() {
    return this._array.getSize();
  }
};
var xt = class extends F {
  constructor() {
    super();
    __publicField(this, "_map");
    __publicField(this, "_keys");
    this._map = new O();
  }
  release() {
    const t = this._map.begin();
    for (; t.notEqual(this._map.end()); ) {
      let e = t.ptr().second;
      e && !e.isStatic() && (e = void 0, e = null), t.preIncrement();
    }
  }
  isMap() {
    return true;
  }
  getValueByString(t) {
    if (t instanceof U) {
      const e = this._map.getValue(t.s);
      return e ?? F.nullValue;
    }
    for (let e = this._map.begin(); e.notEqual(this._map.end()); e.preIncrement())
      if (e.ptr().first == t)
        return e.ptr().second == null ? F.nullValue : e.ptr().second;
    return F.nullValue;
  }
  getValueByIndex(t) {
    return F.errorValue.setErrorNotForClientCall(Wt);
  }
  getString(t, e) {
    this._stringBuffer = e + `{
`;
    const i = this._map.begin();
    for (; i.notEqual(this._map.end()); ) {
      const r = i.ptr().first, a = i.ptr().second;
      this._stringBuffer += e + " " + r + " : " + a.getString(e + "   ") + ` 
`, i.preIncrement();
    }
    return this._stringBuffer += e + `}
`, this._stringBuffer;
  }
  getMap(t) {
    return this._map;
  }
  put(t, e) {
    this._map.setValue(t, e);
  }
  getKeys() {
    if (!this._keys) {
      this._keys = new x();
      const t = this._map.begin();
      for (; t.notEqual(this._map.end()); ) {
        const e = t.ptr().first;
        this._keys.pushBack(e), t.preIncrement();
      }
    }
    return this._keys;
  }
  getSize() {
    return this._keys.getSize();
  }
};
var We;
((s) => {
  s.CubismJson = A, s.JsonArray = he, s.JsonBoolean = X, s.JsonError = Et, s.JsonFloat = $t, s.JsonMap = xt, s.JsonNullvalue = St, s.JsonString = yt, s.Value = F;
})(We || (We = {}));
function Os(s, t) {
  let e = 0;
  for (let r = 1; ; r++) {
    const a = s.slice(r - 1, r);
    if (a == "e" || a == "-" || a == "E")
      continue;
    const o = s.substring(0, r), n = Number(o);
    if (isNaN(n))
      break;
    e = r;
  }
  let i = parseFloat(s);
  return isNaN(i) && (i = NaN), t[0] = s.slice(e), i;
}
var Y = false;
var Ct = false;
var Bt = null;
var At = null;
var rt = Object.freeze({ vertexOffset: 0, vertexStep: 2 });
function Ns(s) {
  s && (s = void 0);
}
var I = class {
  static startUp(t = null) {
    if (Y)
      return Q("CubismFramework.startUp() is already done."), Y;
    if (Bt = t, Bt != null && Live2DCubismCore.Logging.csmSetLogFunction(Bt.logFunction), Y = true, Y) {
      const e = Live2DCubismCore.Version.csmGetVersion(), i = (e & 4278190080) >> 24, r = (e & 16711680) >> 16, a = e & 65535, o = e;
      Q("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ("00" + i).slice(-2), ("00" + r).slice(-2), ("0000" + a).slice(-4), o);
    }
    return Q("CubismFramework.startUp() is complete."), Y;
  }
  static cleanUp() {
    Y = false, Ct = false, Bt = null, At = null;
  }
  static initialize(t = 0) {
    if (H(Y), !Y) {
      st("CubismFramework is not started.");
      return;
    }
    if (Ct) {
      st("CubismFramework.initialize() skipped, already initialized.");
      return;
    }
    F.staticInitializeNotForClientCall(), At = new Ne(), Live2DCubismCore.Memory.initializeAmountOfMemory(t), Ct = true, Q("CubismFramework.initialize() is complete.");
  }
  static dispose() {
    if (H(Y), !Y) {
      st("CubismFramework is not started.");
      return;
    }
    if (!Ct) {
      st("CubismFramework.dispose() skipped, not initialized.");
      return;
    }
    F.staticReleaseNotForClientCall(), At.release(), At = null, Gt.staticRelease(), Ct = false, Q("CubismFramework.dispose() is complete.");
  }
  static isStarted() {
    return Y;
  }
  static isInitialized() {
    return Ct;
  }
  static coreLogFunction(t) {
    Live2DCubismCore.Logging.csmGetLogFunction() && Live2DCubismCore.Logging.csmGetLogFunction()(t);
  }
  static getLoggingLevel() {
    return Bt != null ? Bt.loggingLevel : 5;
  }
  static getIdManager() {
    return At;
  }
  constructor() {
  }
};
var Us = class {
  constructor() {
    __publicField(this, "logFunction");
    __publicField(this, "loggingLevel");
  }
};
var Mt = ((s) => (s[s.LogLevel_Verbose = 0] = "LogLevel_Verbose", s[s.LogLevel_Debug = 1] = "LogLevel_Debug", s[s.LogLevel_Info = 2] = "LogLevel_Info", s[s.LogLevel_Warning = 3] = "LogLevel_Warning", s[s.LogLevel_Error = 4] = "LogLevel_Error", s[s.LogLevel_Off = 5] = "LogLevel_Off", s))(Mt || {});
var $e;
((s) => {
  s.Constant = rt, s.csmDelete = Ns, s.CubismFramework = I;
})($e || ($e = {}));
function qe(s, t) {
  for (var e = 0, i = s.length - 1; i >= 0; i--) {
    var r = s[i];
    r === "." ? s.splice(i, 1) : r === ".." ? (s.splice(i, 1), e++) : e && (s.splice(i, 1), e--);
  }
  if (t)
    for (; e--; e)
      s.unshift("..");
  return s;
}
var zs = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var ge = function(s) {
  return zs.exec(s).slice(1);
};
function ce() {
  for (var s = "", t = false, e = arguments.length - 1; e >= -1 && !t; e--) {
    var i = e >= 0 ? arguments[e] : "/";
    if (typeof i != "string")
      throw new TypeError("Arguments to path.resolve must be strings");
    if (!i)
      continue;
    s = i + "/" + s, t = i.charAt(0) === "/";
  }
  return s = qe(de(s.split("/"), function(r) {
    return !!r;
  }), !t).join("/"), (t ? "/" : "") + s || ".";
}
function Je(s) {
  var t = Ke(s), e = qs(s, -1) === "/";
  return s = qe(de(s.split("/"), function(i) {
    return !!i;
  }), !t).join("/"), !s && !t && (s = "."), s && e && (s += "/"), (t ? "/" : "") + s;
}
function Ke(s) {
  return s.charAt(0) === "/";
}
function Xs() {
  var s = Array.prototype.slice.call(arguments, 0);
  return Je(de(s, function(t, e) {
    if (typeof t != "string")
      throw new TypeError("Arguments to path.join must be strings");
    return t;
  }).join("/"));
}
function Ys(s, t) {
  s = ce(s).substr(1), t = ce(t).substr(1);
  function e(u) {
    for (var h = 0; h < u.length && u[h] === ""; h++)
      ;
    for (var m = u.length - 1; m >= 0 && u[m] === ""; m--)
      ;
    return h > m ? [] : u.slice(h, m - h + 1);
  }
  for (var i = e(s.split("/")), r = e(t.split("/")), a = Math.min(i.length, r.length), o = a, n = 0; n < a; n++)
    if (i[n] !== r[n]) {
      o = n;
      break;
    }
  for (var l = [], n = o; n < i.length; n++)
    l.push("..");
  return l = l.concat(r.slice(o)), l.join("/");
}
var js = "/";
var Gs = ":";
function Hs(s) {
  var t = ge(s), e = t[0], i = t[1];
  return !e && !i ? "." : (i && (i = i.substr(0, i.length - 1)), e + i);
}
function Ws(s, t) {
  var e = ge(s)[2];
  return t && e.substr(-1 * t.length) === t && (e = e.substr(0, e.length - t.length)), e;
}
function $s(s) {
  return ge(s)[3];
}
var W = { extname: $s, basename: Ws, dirname: Hs, sep: js, delimiter: Gs, relative: Ys, join: Xs, isAbsolute: Ke, normalize: Je, resolve: ce };
function de(s, t) {
  if (s.filter)
    return s.filter(t);
  for (var e = [], i = 0; i < s.length; i++)
    t(s[i], i, s) && e.push(s[i]);
  return e;
}
var qs = "ab".substr(-1) === "b" ? function(s, t, e) {
  return s.substr(t, e);
} : function(s, t, e) {
  return t < 0 && (t = s.length + t), s.substr(t, e);
};
var S = Object.freeze({ HitAreaPrefix: "HitArea", HitAreaHead: "Head", HitAreaBody: "Body", PartsIdCore: "Parts01Core", PartsArmPrefix: "Parts01Arm_", PartsArmLPrefix: "Parts01ArmL_", PartsArmRPrefix: "Parts01ArmR_", ParamAngleX: "ParamAngleX", ParamAngleY: "ParamAngleY", ParamAngleZ: "ParamAngleZ", ParamEyeLOpen: "ParamEyeLOpen", ParamEyeLSmile: "ParamEyeLSmile", ParamEyeROpen: "ParamEyeROpen", ParamEyeRSmile: "ParamEyeRSmile", ParamEyeBallX: "ParamEyeBallX", ParamEyeBallY: "ParamEyeBallY", ParamEyeBallForm: "ParamEyeBallForm", ParamBrowLY: "ParamBrowLY", ParamBrowRY: "ParamBrowRY", ParamBrowLX: "ParamBrowLX", ParamBrowRX: "ParamBrowRX", ParamBrowLAngle: "ParamBrowLAngle", ParamBrowRAngle: "ParamBrowRAngle", ParamBrowLForm: "ParamBrowLForm", ParamBrowRForm: "ParamBrowRForm", ParamMouthForm: "ParamMouthForm", ParamMouthOpenY: "ParamMouthOpenY", ParamCheek: "ParamCheek", ParamBodyAngleX: "ParamBodyAngleX", ParamBodyAngleY: "ParamBodyAngleY", ParamBodyAngleZ: "ParamBodyAngleZ", ParamBreath: "ParamBreath", ParamArmLA: "ParamArmLA", ParamArmRA: "ParamArmRA", ParamArmLB: "ParamArmLB", ParamArmRB: "ParamArmRB", ParamHandL: "ParamHandL", ParamHandR: "ParamHandR", ParamHairFront: "ParamHairFront", ParamHairSide: "ParamHairSide", ParamHairBack: "ParamHairBack", ParamHairFluffy: "ParamHairFluffy", ParamShoulderY: "ParamShoulderY", ParamBustX: "ParamBustX", ParamBustY: "ParamBustY", ParamBaseX: "ParamBaseX", ParamBaseY: "ParamBaseY", ParamNONE: "NONE:" });
var Ze;
((s) => {
  s.HitAreaBody = S.HitAreaBody, s.HitAreaHead = S.HitAreaHead, s.HitAreaPrefix = S.HitAreaPrefix, s.ParamAngleX = S.ParamAngleX, s.ParamAngleY = S.ParamAngleY, s.ParamAngleZ = S.ParamAngleZ, s.ParamArmLA = S.ParamArmLA, s.ParamArmLB = S.ParamArmLB, s.ParamArmRA = S.ParamArmRA, s.ParamArmRB = S.ParamArmRB, s.ParamBaseX = S.ParamBaseX, s.ParamBaseY = S.ParamBaseY, s.ParamBodyAngleX = S.ParamBodyAngleX, s.ParamBodyAngleY = S.ParamBodyAngleY, s.ParamBodyAngleZ = S.ParamBodyAngleZ, s.ParamBreath = S.ParamBreath, s.ParamBrowLAngle = S.ParamBrowLAngle, s.ParamBrowLForm = S.ParamBrowLForm, s.ParamBrowLX = S.ParamBrowLX, s.ParamBrowLY = S.ParamBrowLY, s.ParamBrowRAngle = S.ParamBrowRAngle, s.ParamBrowRForm = S.ParamBrowRForm, s.ParamBrowRX = S.ParamBrowRX, s.ParamBrowRY = S.ParamBrowRY, s.ParamBustX = S.ParamBustX, s.ParamBustY = S.ParamBustY, s.ParamCheek = S.ParamCheek, s.ParamEyeBallForm = S.ParamEyeBallForm, s.ParamEyeBallX = S.ParamEyeBallX, s.ParamEyeBallY = S.ParamEyeBallY, s.ParamEyeLOpen = S.ParamEyeLOpen, s.ParamEyeLSmile = S.ParamEyeLSmile, s.ParamEyeROpen = S.ParamEyeROpen, s.ParamEyeRSmile = S.ParamEyeRSmile, s.ParamHairBack = S.ParamHairBack, s.ParamHairFluffy = S.ParamHairFluffy, s.ParamHairFront = S.ParamHairFront, s.ParamHairSide = S.ParamHairSide, s.ParamHandL = S.ParamHandL, s.ParamHandR = S.ParamHandR, s.ParamMouthForm = S.ParamMouthForm, s.ParamMouthOpenY = S.ParamMouthOpenY, s.ParamNONE = S.ParamNONE, s.ParamShoulderY = S.ParamShoulderY, s.PartsArmLPrefix = S.PartsArmLPrefix, s.PartsArmPrefix = S.PartsArmPrefix, s.PartsArmRPrefix = S.PartsArmRPrefix, s.PartsIdCore = S.PartsIdCore;
})(Ze || (Ze = {}));
var Qe = class {
};
var ti;
((s) => {
  s.ICubismModelSetting = Qe;
})(ti || (ti = {}));
var at = "FileReferences";
var Js = "Groups";
var Ks = "Layout";
var Zs = "HitAreas";
var Qs = "Moc";
var tr = "Textures";
var er = "Physics";
var ir = "Pose";
var sr = "Expressions";
var rr = "Motions";
var ei = "UserData";
var nt = "Name";
var ii = "File";
var ar = "Id";
var qt = "Ids";
var si = "Sound";
var ri = "FadeInTime";
var ai = "FadeOutTime";
var _e = "LipSync";
var me = "EyeBlink";
var ni = class extends Qe {
  constructor(t, e) {
    super();
    __publicField(this, "_json");
    __publicField(this, "_jsonValue");
    this._json = A.create(t, e), this._json && (this._jsonValue = new x(), this._jsonValue.pushBack(this._json.getRoot().getValueByString(Js)), this._jsonValue.pushBack(this._json.getRoot().getValueByString(at).getValueByString(Qs)), this._jsonValue.pushBack(this._json.getRoot().getValueByString(at).getValueByString(rr)), this._jsonValue.pushBack(this._json.getRoot().getValueByString(at).getValueByString(sr)), this._jsonValue.pushBack(this._json.getRoot().getValueByString(at).getValueByString(tr)), this._jsonValue.pushBack(this._json.getRoot().getValueByString(at).getValueByString(er)), this._jsonValue.pushBack(this._json.getRoot().getValueByString(at).getValueByString(ir)), this._jsonValue.pushBack(this._json.getRoot().getValueByString(Zs)));
  }
  release() {
    A.delete(this._json), this._jsonValue = null;
  }
  GetJson() {
    return this._json;
  }
  getModelFileName() {
    return this.isExistModelFile() ? this._jsonValue.at(1).getRawString() : "";
  }
  getTextureCount() {
    return this.isExistTextureFiles() ? this._jsonValue.at(4).getSize() : 0;
  }
  getTextureDirectory() {
    const e = this._jsonValue.at(4).getValueByIndex(0).getRawString().split("/"), i = e.length - 1;
    let r = "";
    for (let a = 0; a < i; a++)
      r += e[a], a < i - 1 && (r += "/");
    return r;
  }
  getTextureFileName(t) {
    return this._jsonValue.at(4).getValueByIndex(t).getRawString();
  }
  getHitAreasCount() {
    return this.isExistHitAreas() ? this._jsonValue.at(7).getSize() : 0;
  }
  getHitAreaId(t) {
    return I.getIdManager().getId(this._jsonValue.at(7).getValueByIndex(t).getValueByString(ar).getRawString());
  }
  getHitAreaName(t) {
    return this._jsonValue.at(7).getValueByIndex(t).getValueByString(nt).getRawString();
  }
  getPhysicsFileName() {
    return this.isExistPhysicsFile() ? this._jsonValue.at(5).getRawString() : "";
  }
  getPoseFileName() {
    return this.isExistPoseFile() ? this._jsonValue.at(6).getRawString() : "";
  }
  getExpressionCount() {
    return this.isExistExpressionFile() ? this._jsonValue.at(3).getSize() : 0;
  }
  getExpressionName(t) {
    return this._jsonValue.at(3).getValueByIndex(t).getValueByString(nt).getRawString();
  }
  getExpressionFileName(t) {
    return this._jsonValue.at(3).getValueByIndex(t).getValueByString(ii).getRawString();
  }
  getMotionGroupCount() {
    return this.isExistMotionGroups() ? this._jsonValue.at(2).getKeys().getSize() : 0;
  }
  getMotionGroupName(t) {
    return this.isExistMotionGroups() ? this._jsonValue.at(2).getKeys().at(t) : null;
  }
  getMotionCount(t) {
    return this.isExistMotionGroupName(t) ? this._jsonValue.at(2).getValueByString(t).getSize() : 0;
  }
  getMotionFileName(t, e) {
    return this.isExistMotionGroupName(t) ? this._jsonValue.at(2).getValueByString(t).getValueByIndex(e).getValueByString(ii).getRawString() : "";
  }
  getMotionSoundFileName(t, e) {
    return this.isExistMotionSoundFile(t, e) ? this._jsonValue.at(2).getValueByString(t).getValueByIndex(e).getValueByString(si).getRawString() : "";
  }
  getMotionFadeInTimeValue(t, e) {
    return this.isExistMotionFadeIn(t, e) ? this._jsonValue.at(2).getValueByString(t).getValueByIndex(e).getValueByString(ri).toFloat() : -1;
  }
  getMotionFadeOutTimeValue(t, e) {
    return this.isExistMotionFadeOut(t, e) ? this._jsonValue.at(2).getValueByString(t).getValueByIndex(e).getValueByString(ai).toFloat() : -1;
  }
  getUserDataFile() {
    return this.isExistUserDataFile() ? this._json.getRoot().getValueByString(at).getValueByString(ei).getRawString() : "";
  }
  getLayoutMap(t) {
    const e = this._json.getRoot().getValueByString(Ks).getMap();
    if (e == null)
      return false;
    let i = false;
    for (const r = e.begin(); r.notEqual(e.end()); r.preIncrement())
      t.setValue(r.ptr().first, r.ptr().second.toFloat()), i = true;
    return i;
  }
  getEyeBlinkParameterCount() {
    if (!this.isExistEyeBlinkParameters())
      return 0;
    let t = 0;
    for (let e = 0; e < this._jsonValue.at(0).getSize(); e++) {
      const i = this._jsonValue.at(0).getValueByIndex(e);
      if (!(i.isNull() || i.isError()) && i.getValueByString(nt).getRawString() == me) {
        t = i.getValueByString(qt).getVector().getSize();
        break;
      }
    }
    return t;
  }
  getEyeBlinkParameterId(t) {
    if (!this.isExistEyeBlinkParameters())
      return null;
    for (let e = 0; e < this._jsonValue.at(0).getSize(); e++) {
      const i = this._jsonValue.at(0).getValueByIndex(e);
      if (!(i.isNull() || i.isError()) && i.getValueByString(nt).getRawString() == me)
        return I.getIdManager().getId(i.getValueByString(qt).getValueByIndex(t).getRawString());
    }
    return null;
  }
  getLipSyncParameterCount() {
    if (!this.isExistLipSyncParameters())
      return 0;
    let t = 0;
    for (let e = 0; e < this._jsonValue.at(0).getSize(); e++) {
      const i = this._jsonValue.at(0).getValueByIndex(e);
      if (!(i.isNull() || i.isError()) && i.getValueByString(nt).getRawString() == _e) {
        t = i.getValueByString(qt).getVector().getSize();
        break;
      }
    }
    return t;
  }
  getLipSyncParameterId(t) {
    if (!this.isExistLipSyncParameters())
      return null;
    for (let e = 0; e < this._jsonValue.at(0).getSize(); e++) {
      const i = this._jsonValue.at(0).getValueByIndex(e);
      if (!(i.isNull() || i.isError()) && i.getValueByString(nt).getRawString() == _e)
        return I.getIdManager().getId(i.getValueByString(qt).getValueByIndex(t).getRawString());
    }
    return null;
  }
  isExistModelFile() {
    const t = this._jsonValue.at(1);
    return !t.isNull() && !t.isError();
  }
  isExistTextureFiles() {
    const t = this._jsonValue.at(4);
    return !t.isNull() && !t.isError();
  }
  isExistHitAreas() {
    const t = this._jsonValue.at(7);
    return !t.isNull() && !t.isError();
  }
  isExistPhysicsFile() {
    const t = this._jsonValue.at(5);
    return !t.isNull() && !t.isError();
  }
  isExistPoseFile() {
    const t = this._jsonValue.at(6);
    return !t.isNull() && !t.isError();
  }
  isExistExpressionFile() {
    const t = this._jsonValue.at(3);
    return !t.isNull() && !t.isError();
  }
  isExistMotionGroups() {
    const t = this._jsonValue.at(2);
    return !t.isNull() && !t.isError();
  }
  isExistMotionGroupName(t) {
    const e = this._jsonValue.at(2).getValueByString(t);
    return !e.isNull() && !e.isError();
  }
  isExistMotionSoundFile(t, e) {
    const i = this._jsonValue.at(2).getValueByString(t).getValueByIndex(e).getValueByString(si);
    return !i.isNull() && !i.isError();
  }
  isExistMotionFadeIn(t, e) {
    const i = this._jsonValue.at(2).getValueByString(t).getValueByIndex(e).getValueByString(ri);
    return !i.isNull() && !i.isError();
  }
  isExistMotionFadeOut(t, e) {
    const i = this._jsonValue.at(2).getValueByString(t).getValueByIndex(e).getValueByString(ai);
    return !i.isNull() && !i.isError();
  }
  isExistUserDataFile() {
    const t = this._json.getRoot().getValueByString(at).getValueByString(ei);
    return !t.isNull() && !t.isError();
  }
  isExistEyeBlinkParameters() {
    if (this._jsonValue.at(0).isNull() || this._jsonValue.at(0).isError())
      return false;
    for (let t = 0; t < this._jsonValue.at(0).getSize(); ++t)
      if (this._jsonValue.at(0).getValueByIndex(t).getValueByString(nt).getRawString() == me)
        return true;
    return false;
  }
  isExistLipSyncParameters() {
    if (this._jsonValue.at(0).isNull() || this._jsonValue.at(0).isError())
      return false;
    for (let t = 0; t < this._jsonValue.at(0).getSize(); ++t)
      if (this._jsonValue.at(0).getValueByIndex(t).getValueByString(nt).getRawString() == _e)
        return true;
    return false;
  }
};
var oi;
((s) => {
  s.CubismModelSettingJson = ni;
})(oi || (oi = {}));
var kt = class {
  constructor() {
    __publicField(this, "_breathParameters");
    __publicField(this, "_currentTime");
    this._currentTime = 0;
  }
  static create() {
    return new kt();
  }
  static delete(t) {
  }
  setParameters(t) {
    this._breathParameters = t;
  }
  getParameters() {
    return this._breathParameters;
  }
  updateParameters(t, e) {
    this._currentTime += e;
    const i = this._currentTime * 2 * 3.14159;
    for (let r = 0; r < this._breathParameters.getSize(); ++r) {
      const a = this._breathParameters.at(r);
      t.addParameterValueById(a.parameterId, a.offset + a.peak * Math.sin(i / a.cycle), a.weight);
    }
  }
};
var Pt = class {
  constructor(t, e, i, r, a) {
    __publicField(this, "parameterId");
    __publicField(this, "offset");
    __publicField(this, "peak");
    __publicField(this, "cycle");
    __publicField(this, "weight");
    this.parameterId = t ?? null, this.offset = e ?? 0, this.peak = i ?? 0, this.cycle = r ?? 0, this.weight = a ?? 0;
  }
};
var li;
((s) => {
  s.BreathParameterData = Pt, s.CubismBreath = kt;
})(li || (li = {}));
var _Vt = class {
  constructor(t) {
    __publicField(this, "_blinkingState");
    __publicField(this, "_parameterIds");
    __publicField(this, "_nextBlinkingTime");
    __publicField(this, "_stateStartTimeSeconds");
    __publicField(this, "_blinkingIntervalSeconds");
    __publicField(this, "_closingSeconds");
    __publicField(this, "_closedSeconds");
    __publicField(this, "_openingSeconds");
    __publicField(this, "_userTimeSeconds");
    if (this._blinkingState = 0, this._nextBlinkingTime = 0, this._stateStartTimeSeconds = 0, this._blinkingIntervalSeconds = 4, this._closingSeconds = 0.1, this._closedSeconds = 0.05, this._openingSeconds = 0.15, this._userTimeSeconds = 0, this._parameterIds = new x(), t != null)
      for (let e = 0; e < t.getEyeBlinkParameterCount(); ++e)
        this._parameterIds.pushBack(t.getEyeBlinkParameterId(e));
  }
  static create(t = null) {
    return new _Vt(t);
  }
  static delete(t) {
  }
  setBlinkingInterval(t) {
    this._blinkingIntervalSeconds = t;
  }
  setBlinkingSetting(t, e, i) {
    this._closingSeconds = t, this._closedSeconds = e, this._openingSeconds = i;
  }
  setParameterIds(t) {
    this._parameterIds = t;
  }
  getParameterIds() {
    return this._parameterIds;
  }
  updateParameters(t, e) {
    this._userTimeSeconds += e;
    let i, r = 0;
    switch (this._blinkingState) {
      case 2:
        r = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds, r >= 1 && (r = 1, this._blinkingState = 3, this._stateStartTimeSeconds = this._userTimeSeconds), i = 1 - r;
        break;
      case 3:
        r = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds, r >= 1 && (this._blinkingState = 4, this._stateStartTimeSeconds = this._userTimeSeconds), i = 0;
        break;
      case 4:
        r = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds, r >= 1 && (r = 1, this._blinkingState = 1, this._nextBlinkingTime = this.determinNextBlinkingTiming()), i = r;
        break;
      case 1:
        this._nextBlinkingTime < this._userTimeSeconds && (this._blinkingState = 2, this._stateStartTimeSeconds = this._userTimeSeconds), i = 1;
        break;
      case 0:
      default:
        this._blinkingState = 1, this._nextBlinkingTime = this.determinNextBlinkingTiming(), i = 1;
        break;
    }
    _Vt.CloseIfZero || (i = -i);
    for (let a = 0; a < this._parameterIds.getSize(); ++a)
      t.setParameterValueById(this._parameterIds.at(a), i);
  }
  determinNextBlinkingTiming() {
    const t = Math.random();
    return this._userTimeSeconds + t * (2 * this._blinkingIntervalSeconds - 1);
  }
};
var Vt = _Vt;
__publicField(Vt, "CloseIfZero", true);
var ui = ((s) => (s[s.EyeState_First = 0] = "EyeState_First", s[s.EyeState_Interval = 1] = "EyeState_Interval", s[s.EyeState_Closing = 2] = "EyeState_Closing", s[s.EyeState_Closed = 3] = "EyeState_Closed", s[s.EyeState_Opening = 4] = "EyeState_Opening", s))(ui || {});
var hi;
((s) => {
  s.CubismEyeBlink = Vt, s.EyeState = ui;
})(hi || (hi = {}));
var nr = 1e-3;
var pe = 0.5;
var gi = "FadeInTime";
var ci = "Link";
var or = "Groups";
var lr = "Id";
var Ot = class {
  constructor() {
    __publicField(this, "_partGroups");
    __publicField(this, "_partGroupCounts");
    __publicField(this, "_fadeTimeSeconds");
    __publicField(this, "_lastModel");
    this._fadeTimeSeconds = pe, this._lastModel = null, this._partGroups = new x(), this._partGroupCounts = new x();
  }
  static create(t, e) {
    const i = new Ot(), r = A.create(t, e), a = r.getRoot();
    a.getValueByString(gi).isNull() || (i._fadeTimeSeconds = a.getValueByString(gi).toFloat(pe), i._fadeTimeSeconds <= 0 && (i._fadeTimeSeconds = pe));
    const o = a.getValueByString(or), n = o.getSize();
    for (let l = 0; l < n; ++l) {
      const u = o.getValueByIndex(l), h = u.getSize();
      let m = 0;
      for (let d = 0; d < h; ++d) {
        const g = u.getValueByIndex(d), c = new Nt(), p = I.getIdManager().getId(g.getValueByString(lr).getRawString());
        if (c.partId = p, !g.getValueByString(ci).isNull()) {
          const _ = g.getValueByString(ci), M = _.getSize();
          for (let P = 0; P < M; ++P) {
            const y = new Nt(), f = I.getIdManager().getId(_.getValueByIndex(P).getString());
            y.partId = f, c.link.pushBack(y);
          }
        }
        i._partGroups.pushBack(c.clone()), ++m;
      }
      i._partGroupCounts.pushBack(m);
    }
    return A.delete(r), i;
  }
  static delete(t) {
  }
  updateParameters(t, e) {
    t != this._lastModel && this.reset(t), this._lastModel = t, e < 0 && (e = 0);
    let i = 0;
    for (let r = 0; r < this._partGroupCounts.getSize(); r++) {
      const a = this._partGroupCounts.at(r);
      this.doFade(t, e, i, a), i += a;
    }
    this.copyPartOpacities(t);
  }
  reset(t) {
    let e = 0;
    for (let i = 0; i < this._partGroupCounts.getSize(); ++i) {
      const r = this._partGroupCounts.at(i);
      for (let a = e; a < e + r; ++a) {
        this._partGroups.at(a).initialize(t);
        const o = this._partGroups.at(a).partIndex, n = this._partGroups.at(a).parameterIndex;
        if (!(o < 0)) {
          t.setPartOpacityByIndex(o, a == e ? 1 : 0), t.setParameterValueByIndex(n, a == e ? 1 : 0);
          for (let l = 0; l < this._partGroups.at(a).link.getSize(); ++l)
            this._partGroups.at(a).link.at(l).initialize(t);
        }
      }
      e += r;
    }
  }
  copyPartOpacities(t) {
    for (let e = 0; e < this._partGroups.getSize(); ++e) {
      const i = this._partGroups.at(e);
      if (i.link.getSize() == 0)
        continue;
      const r = this._partGroups.at(e).partIndex, a = t.getPartOpacityByIndex(r);
      for (let o = 0; o < i.link.getSize(); ++o) {
        const l = i.link.at(o).partIndex;
        l < 0 || t.setPartOpacityByIndex(l, a);
      }
    }
  }
  doFade(t, e, i, r) {
    let a = -1, o = 1;
    const n = 0.5, l = 0.15;
    for (let u = i; u < i + r; ++u) {
      const h = this._partGroups.at(u).partIndex, m = this._partGroups.at(u).parameterIndex;
      if (t.getParameterValueByIndex(m) > nr) {
        if (a >= 0)
          break;
        a = u, o = t.getPartOpacityByIndex(h), o += e / this._fadeTimeSeconds, o > 1 && (o = 1);
      }
    }
    a < 0 && (a = 0, o = 1);
    for (let u = i; u < i + r; ++u) {
      const h = this._partGroups.at(u).partIndex;
      if (a == u)
        t.setPartOpacityByIndex(h, o);
      else {
        let m = t.getPartOpacityByIndex(h), d;
        o < n ? d = o * (n - 1) / n + 1 : d = (1 - o) * n / (1 - n), (1 - d) * (1 - o) > l && (d = 1 - l / (1 - o)), m > d && (m = d), t.setPartOpacityByIndex(h, m);
      }
    }
  }
};
var Nt = class {
  constructor(t) {
    __publicField(this, "partId");
    __publicField(this, "parameterIndex");
    __publicField(this, "partIndex");
    __publicField(this, "link");
    if (this.parameterIndex = 0, this.partIndex = 0, this.link = new x(), t != null) {
      this.partId = t.partId;
      for (const e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement())
        this.link.pushBack(e.ptr().clone());
    }
  }
  assignment(t) {
    this.partId = t.partId;
    for (const e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement())
      this.link.pushBack(e.ptr().clone());
    return this;
  }
  initialize(t) {
    this.parameterIndex = t.getParameterIndex(this.partId), this.partIndex = t.getPartIndex(this.partId), t.setParameterValueByIndex(this.parameterIndex, 1);
  }
  clone() {
    const t = new Nt();
    t.partId = this.partId, t.parameterIndex = this.parameterIndex, t.partIndex = this.partIndex, t.link = new x();
    for (let e = this.link.begin(); e.notEqual(this.link.end()); e.increment())
      t.link.pushBack(e.ptr().clone());
    return t;
  }
};
var di;
((s) => {
  s.CubismPose = Ot, s.PartData = Nt;
})(di || (di = {}));
var _i = class extends E {
  constructor(t, e) {
    super();
    __publicField(this, "_width");
    __publicField(this, "_height");
    this._width = t !== void 0 ? t : 0, this._height = e !== void 0 ? e : 0, this.setHeight(2);
  }
  setWidth(t) {
    const e = t / this._width, i = e;
    this.scale(e, i);
  }
  setHeight(t) {
    const e = t / this._height, i = e;
    this.scale(e, i);
  }
  setPosition(t, e) {
    this.translate(t, e);
  }
  setCenterPosition(t, e) {
    this.centerX(t), this.centerY(e);
  }
  top(t) {
    this.setY(t);
  }
  bottom(t) {
    const e = this._height * this.getScaleY();
    this.translateY(t - e);
  }
  left(t) {
    this.setX(t);
  }
  right(t) {
    const e = this._width * this.getScaleX();
    this.translateX(t - e);
  }
  centerX(t) {
    const e = this._width * this.getScaleX();
    this.translateX(t - e / 2);
  }
  setX(t) {
    this.translateX(t);
  }
  centerY(t) {
    const e = this._height * this.getScaleY();
    this.translateY(t - e / 2);
  }
  setY(t) {
    this.translateY(t);
  }
  setupFromLayout(t) {
    const e = "width", i = "height", r = "x", a = "y", o = "center_x", n = "center_y", l = "top", u = "bottom", h = "left", m = "right";
    for (const d = t.begin(); d.notEqual(t.end()); d.preIncrement()) {
      const g = d.ptr().first, c = d.ptr().second;
      g == e ? this.setWidth(c) : g == i && this.setHeight(c);
    }
    for (const d = t.begin(); d.notEqual(t.end()); d.preIncrement()) {
      const g = d.ptr().first, c = d.ptr().second;
      g == r ? this.setX(c) : g == a ? this.setY(c) : g == o ? this.centerX(c) : g == n ? this.centerY(c) : g == l ? this.top(c) : g == u ? this.bottom(c) : g == h ? this.left(c) : g == m && this.right(c);
    }
  }
};
var mi;
((s) => {
  s.CubismModelMatrix = _i;
})(mi || (mi = {}));
var C = class {
  constructor(t, e) {
    this.x = t, this.y = e, this.x = t ?? 0, this.y = e ?? 0;
  }
  add(t) {
    const e = new C(0, 0);
    return e.x = this.x + t.x, e.y = this.y + t.y, e;
  }
  substract(t) {
    const e = new C(0, 0);
    return e.x = this.x - t.x, e.y = this.y - t.y, e;
  }
  multiply(t) {
    const e = new C(0, 0);
    return e.x = this.x * t.x, e.y = this.y * t.y, e;
  }
  multiplyByScaler(t) {
    return this.multiply(new C(t, t));
  }
  division(t) {
    const e = new C(0, 0);
    return e.x = this.x / t.x, e.y = this.y / t.y, e;
  }
  divisionByScalar(t) {
    return this.division(new C(t, t));
  }
  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  getDistanceWith(t) {
    return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y));
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  normalize() {
    const t = Math.pow(this.x * this.x + this.y * this.y, 0.5);
    this.x = this.x / t, this.y = this.y / t;
  }
  isEqual(t) {
    return this.x == t.x && this.y == t.y;
  }
  isNotEqual(t) {
    return !this.isEqual(t);
  }
};
var pi;
((s) => {
  s.CubismVector2 = C;
})(pi || (pi = {}));
var _v = class {
  static range(t, e, i) {
    return t < e ? t = e : t > i && (t = i), t;
  }
  static sin(t) {
    return Math.sin(t);
  }
  static cos(t) {
    return Math.cos(t);
  }
  static abs(t) {
    return Math.abs(t);
  }
  static sqrt(t) {
    return Math.sqrt(t);
  }
  static cbrt(t) {
    if (t === 0)
      return t;
    let e = t;
    const i = e < 0;
    i && (e = -e);
    let r;
    return e === 1 / 0 ? r = 1 / 0 : (r = Math.exp(Math.log(e) / 3), r = (e / (r * r) + 2 * r) / 3), i ? -r : r;
  }
  static getEasingSine(t) {
    return t < 0 ? 0 : t > 1 ? 1 : 0.5 - 0.5 * this.cos(t * Math.PI);
  }
  static max(t, e) {
    return t > e ? t : e;
  }
  static min(t, e) {
    return t > e ? e : t;
  }
  static degreesToRadian(t) {
    return t / 180 * Math.PI;
  }
  static radianToDegrees(t) {
    return t * 180 / Math.PI;
  }
  static directionToRadian(t, e) {
    const i = Math.atan2(e.y, e.x), r = Math.atan2(t.y, t.x);
    let a = i - r;
    for (; a < -Math.PI; )
      a += Math.PI * 2;
    for (; a > Math.PI; )
      a -= Math.PI * 2;
    return a;
  }
  static directionToDegrees(t, e) {
    const i = this.directionToRadian(t, e);
    let r = this.radianToDegrees(i);
    return e.x - t.x > 0 && (r = -r), r;
  }
  static radianToDirection(t) {
    const e = new C();
    return e.x = this.sin(t), e.y = this.cos(t), e;
  }
  static quadraticEquation(t, e, i) {
    return this.abs(t) < _v.Epsilon ? this.abs(e) < _v.Epsilon ? -i : -i / e : -(e + this.sqrt(e * e - 4 * t * i)) / (2 * t);
  }
  static cardanoAlgorithmForBezier(t, e, i, r) {
    if (this.sqrt(t) < _v.Epsilon)
      return this.range(this.quadraticEquation(e, i, r), 0, 1);
    const a = e / t, o = i / t, n = r / t, l = (3 * o - a * a) / 3, u = l / 3, h = (2 * a * a * a - 9 * a * o + 27 * n) / 27, m = h / 2, d = m * m + u * u * u, g = 0.5, c = g + 0.01;
    if (d < 0) {
      const y = -l / 3, f = y * y * y, V = this.sqrt(f), b = -h / (2 * V), D = this.range(b, -1, 1), it = Math.acos(D), pt = 2 * this.cbrt(V), Fe = pt * this.cos(it / 3) - a / 3;
      if (this.abs(Fe - g) < c)
        return this.range(Fe, 0, 1);
      const Le = pt * this.cos((it + 2 * Math.PI) / 3) - a / 3;
      if (this.abs(Le - g) < c)
        return this.range(Le, 0, 1);
      const Fs = pt * this.cos((it + 4 * Math.PI) / 3) - a / 3;
      return this.range(Fs, 0, 1);
    }
    if (d == 0) {
      let y;
      m < 0 ? y = this.cbrt(-m) : y = -this.cbrt(m);
      const f = 2 * y - a / 3;
      if (this.abs(f - g) < c)
        return this.range(f, 0, 1);
      const V = -y - a / 3;
      return this.range(V, 0, 1);
    }
    const p = this.sqrt(d), _ = this.cbrt(p - m), M = this.cbrt(p + m), P = _ - M - a / 3;
    return this.range(P, 0, 1);
  }
  constructor() {
  }
};
var v = _v;
__publicField(v, "Epsilon", 1e-5);
var fi;
((s) => {
  s.CubismMath = v;
})(fi || (fi = {}));
var fe = 30;
var yi = 0.01;
var Si = class {
  constructor() {
    __publicField(this, "_faceTargetX");
    __publicField(this, "_faceTargetY");
    __publicField(this, "_faceX");
    __publicField(this, "_faceY");
    __publicField(this, "_faceVX");
    __publicField(this, "_faceVY");
    __publicField(this, "_lastTimeSeconds");
    __publicField(this, "_userTimeSeconds");
    this._faceTargetX = 0, this._faceTargetY = 0, this._faceX = 0, this._faceY = 0, this._faceVX = 0, this._faceVY = 0, this._lastTimeSeconds = 0, this._userTimeSeconds = 0;
  }
  update(t) {
    this._userTimeSeconds += t;
    const i = 40 / 10 * 1 / fe;
    if (this._lastTimeSeconds == 0) {
      this._lastTimeSeconds = this._userTimeSeconds;
      return;
    }
    const r = (this._userTimeSeconds - this._lastTimeSeconds) * fe;
    this._lastTimeSeconds = this._userTimeSeconds;
    const o = 0.15 * fe, n = r * i / o, l = this._faceTargetX - this._faceX, u = this._faceTargetY - this._faceY;
    if (v.abs(l) <= yi && v.abs(u) <= yi)
      return;
    const h = v.sqrt(l * l + u * u), m = i * l / h, d = i * u / h;
    let g = m - this._faceVX, c = d - this._faceVY;
    const p = v.sqrt(g * g + c * c);
    (p < -n || p > n) && (g *= n / p, c *= n / p), this._faceVX += g, this._faceVY += c;
    {
      const _ = 0.5 * (v.sqrt(n * n + 16 * n * h - 8 * n * h) - n), M = v.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
      M > _ && (this._faceVX *= _ / M, this._faceVY *= _ / M);
    }
    this._faceX += this._faceVX, this._faceY += this._faceVY;
  }
  getX() {
    return this._faceX;
  }
  getY() {
    return this._faceY;
  }
  set(t, e) {
    this._faceTargetX = t, this._faceTargetY = e;
  }
};
var xi;
((s) => {
  s.CubismTargetPoint = Si;
})(xi || (xi = {}));
var vt = class {
  constructor() {
    __publicField(this, "setFinishedMotionHandler", (t) => this._onFinishedMotion = t);
    __publicField(this, "getFinishedMotionHandler", () => this._onFinishedMotion);
    __publicField(this, "_fadeInSeconds");
    __publicField(this, "_fadeOutSeconds");
    __publicField(this, "_weight");
    __publicField(this, "_offsetSeconds");
    __publicField(this, "_firedEventValues");
    __publicField(this, "_onFinishedMotion");
    this._fadeInSeconds = -1, this._fadeOutSeconds = -1, this._weight = 1, this._offsetSeconds = 0, this._firedEventValues = new x();
  }
  static delete(t) {
    t.release(), t = null;
  }
  release() {
    this._weight = 0;
  }
  updateParameters(t, e, i) {
    if (!e.isAvailable() || e.isFinished())
      return;
    if (!e.isStarted()) {
      e.setIsStarted(true), e.setStartTime(i - this._offsetSeconds), e.setFadeInStartTime(i);
      const n = this.getDuration();
      e.getEndTime() < 0 && e.setEndTime(n <= 0 ? -1 : e.getStartTime() + n);
    }
    let r = this._weight;
    const a = this._fadeInSeconds == 0 ? 1 : v.getEasingSine((i - e.getFadeInStartTime()) / this._fadeInSeconds), o = this._fadeOutSeconds == 0 || e.getEndTime() < 0 ? 1 : v.getEasingSine((e.getEndTime() - i) / this._fadeOutSeconds);
    r = r * a * o, e.setState(i, r), H(0 <= r && r <= 1), this.doUpdateParameters(t, i, r, e), e.getEndTime() > 0 && e.getEndTime() < i && e.setIsFinished(true);
  }
  setFadeInTime(t) {
    this._fadeInSeconds = t;
  }
  setFadeOutTime(t) {
    this._fadeOutSeconds = t;
  }
  getFadeOutTime() {
    return this._fadeOutSeconds;
  }
  getFadeInTime() {
    return this._fadeInSeconds;
  }
  setWeight(t) {
    this._weight = t;
  }
  getWeight() {
    return this._weight;
  }
  getDuration() {
    return -1;
  }
  getLoopDuration() {
    return -1;
  }
  setOffsetTime(t) {
    this._offsetSeconds = t;
  }
  getFiredEvent(t, e) {
    return this._firedEventValues;
  }
};
var Ci;
((s) => {
  s.ACubismMotion = vt;
})(Ci || (Ci = {}));
var ur = "FadeInTime";
var hr = "FadeOutTime";
var Bi = "Parameters";
var gr = "Id";
var cr = "Value";
var Jt = "Blend";
var dr = "Add";
var _r = "Multiply";
var mr = "Overwrite";
var Mi = 1;
var ae = class extends vt {
  constructor() {
    super();
    __publicField(this, "_parameters");
    this._parameters = new x();
  }
  static create(t, e) {
    const i = new ae(), r = A.create(t, e), a = r.getRoot();
    i.setFadeInTime(a.getValueByString(ur).toFloat(Mi)), i.setFadeOutTime(a.getValueByString(hr).toFloat(Mi));
    const o = a.getValueByString(Bi).getSize();
    i._parameters.prepareCapacity(o);
    for (let n = 0; n < o; ++n) {
      const l = a.getValueByString(Bi).getValueByIndex(n), u = I.getIdManager().getId(l.getValueByString(gr).getRawString()), h = l.getValueByString(cr).toFloat();
      let m;
      l.getValueByString(Jt).isNull() || l.getValueByString(Jt).getString() == dr ? m = 0 : l.getValueByString(Jt).getString() == _r ? m = 1 : l.getValueByString(Jt).getString() == mr ? m = 2 : m = 0;
      const d = new vi();
      d.parameterId = u, d.blendType = m, d.value = h, i._parameters.pushBack(d);
    }
    return A.delete(r), i;
  }
  doUpdateParameters(t, e, i, r) {
    for (let a = 0; a < this._parameters.getSize(); ++a) {
      const o = this._parameters.at(a);
      switch (o.blendType) {
        case 0: {
          t.addParameterValueById(o.parameterId, o.value, i);
          break;
        }
        case 1: {
          t.multiplyParameterValueById(o.parameterId, o.value, i);
          break;
        }
        case 2: {
          t.setParameterValueById(o.parameterId, o.value, i);
          break;
        }
      }
    }
  }
};
var Pi = ((s) => (s[s.ExpressionBlendType_Add = 0] = "ExpressionBlendType_Add", s[s.ExpressionBlendType_Multiply = 1] = "ExpressionBlendType_Multiply", s[s.ExpressionBlendType_Overwrite = 2] = "ExpressionBlendType_Overwrite", s))(Pi || {});
var vi = class {
  constructor() {
    __publicField(this, "parameterId");
    __publicField(this, "blendType");
    __publicField(this, "value");
  }
};
var bi;
((s) => {
  s.CubismExpressionMotion = ae, s.ExpressionBlendType = Pi, s.ExpressionParameter = vi;
})(bi || (bi = {}));
var ot = ((s) => (s[s.CubismMotionCurveTarget_Model = 0] = "CubismMotionCurveTarget_Model", s[s.CubismMotionCurveTarget_Parameter = 1] = "CubismMotionCurveTarget_Parameter", s[s.CubismMotionCurveTarget_PartOpacity = 2] = "CubismMotionCurveTarget_PartOpacity", s))(ot || {});
var j = ((s) => (s[s.CubismMotionSegmentType_Linear = 0] = "CubismMotionSegmentType_Linear", s[s.CubismMotionSegmentType_Bezier = 1] = "CubismMotionSegmentType_Bezier", s[s.CubismMotionSegmentType_Stepped = 2] = "CubismMotionSegmentType_Stepped", s[s.CubismMotionSegmentType_InverseStepped = 3] = "CubismMotionSegmentType_InverseStepped", s))(j || {});
var ye = class {
  constructor() {
    __publicField(this, "time", 0);
    __publicField(this, "value", 0);
  }
};
var Ii = class {
  constructor() {
    __publicField(this, "evaluate");
    __publicField(this, "basePointIndex");
    __publicField(this, "segmentType");
    this.evaluate = null, this.basePointIndex = 0, this.segmentType = 0;
  }
};
var Ti = class {
  constructor() {
    __publicField(this, "type");
    __publicField(this, "id");
    __publicField(this, "segmentCount");
    __publicField(this, "baseSegmentIndex");
    __publicField(this, "fadeInTime");
    __publicField(this, "fadeOutTime");
    this.type = 0, this.segmentCount = 0, this.baseSegmentIndex = 0, this.fadeInTime = 0, this.fadeOutTime = 0;
  }
};
var Vi = class {
  constructor() {
    __publicField(this, "fireTime", 0);
    __publicField(this, "value");
  }
};
var wi = class {
  constructor() {
    __publicField(this, "duration");
    __publicField(this, "loop");
    __publicField(this, "curveCount");
    __publicField(this, "eventCount");
    __publicField(this, "fps");
    __publicField(this, "curves");
    __publicField(this, "segments");
    __publicField(this, "points");
    __publicField(this, "events");
    this.duration = 0, this.loop = false, this.curveCount = 0, this.eventCount = 0, this.fps = 0, this.curves = new x(), this.segments = new x(), this.points = new x(), this.events = new x();
  }
};
var Ri;
((s) => {
  s.CubismMotionCurve = Ti, s.CubismMotionCurveTarget = ot, s.CubismMotionData = wi, s.CubismMotionEvent = Vi, s.CubismMotionPoint = ye, s.CubismMotionSegment = Ii, s.CubismMotionSegmentType = j;
})(Ri || (Ri = {}));
var N = "Meta";
var pr = "Duration";
var fr = "Loop";
var yr = "AreBeziersRestricted";
var Sr = "CurveCount";
var xr = "Fps";
var Cr = "TotalSegmentCount";
var Br = "TotalPointCount";
var lt = "Curves";
var Mr = "Target";
var Pr = "Id";
var Kt = "FadeInTime";
var Zt = "FadeOutTime";
var Ei = "Segments";
var Ai = "UserData";
var vr = "UserDataCount";
var br = "TotalUserDataSize";
var Ir = "Time";
var Tr = "Value";
var Fi = class {
  constructor(t, e) {
    __publicField(this, "_json");
    this._json = A.create(t, e);
  }
  release() {
    A.delete(this._json);
  }
  getMotionDuration() {
    return this._json.getRoot().getValueByString(N).getValueByString(pr).toFloat();
  }
  isMotionLoop() {
    return this._json.getRoot().getValueByString(N).getValueByString(fr).toBoolean();
  }
  getEvaluationOptionFlag(t) {
    return t == 0 ? this._json.getRoot().getValueByString(N).getValueByString(yr).toBoolean() : false;
  }
  getMotionCurveCount() {
    return this._json.getRoot().getValueByString(N).getValueByString(Sr).toInt();
  }
  getMotionFps() {
    return this._json.getRoot().getValueByString(N).getValueByString(xr).toFloat();
  }
  getMotionTotalSegmentCount() {
    return this._json.getRoot().getValueByString(N).getValueByString(Cr).toInt();
  }
  getMotionTotalPointCount() {
    return this._json.getRoot().getValueByString(N).getValueByString(Br).toInt();
  }
  isExistMotionFadeInTime() {
    return !this._json.getRoot().getValueByString(N).getValueByString(Kt).isNull();
  }
  isExistMotionFadeOutTime() {
    return !this._json.getRoot().getValueByString(N).getValueByString(Zt).isNull();
  }
  getMotionFadeInTime() {
    return this._json.getRoot().getValueByString(N).getValueByString(Kt).toFloat();
  }
  getMotionFadeOutTime() {
    return this._json.getRoot().getValueByString(N).getValueByString(Zt).toFloat();
  }
  getMotionCurveTarget(t) {
    return this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Mr).getRawString();
  }
  getMotionCurveId(t) {
    return I.getIdManager().getId(this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Pr).getRawString());
  }
  isExistMotionCurveFadeInTime(t) {
    return !this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Kt).isNull();
  }
  isExistMotionCurveFadeOutTime(t) {
    return !this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Zt).isNull();
  }
  getMotionCurveFadeInTime(t) {
    return this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Kt).toFloat();
  }
  getMotionCurveFadeOutTime(t) {
    return this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Zt).toFloat();
  }
  getMotionCurveSegmentCount(t) {
    return this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Ei).getVector().getSize();
  }
  getMotionCurveSegment(t, e) {
    return this._json.getRoot().getValueByString(lt).getValueByIndex(t).getValueByString(Ei).getValueByIndex(e).toFloat();
  }
  getEventCount() {
    return this._json.getRoot().getValueByString(N).getValueByString(vr).toInt();
  }
  getTotalEventValueSize() {
    return this._json.getRoot().getValueByString(N).getValueByString(br).toInt();
  }
  getEventTime(t) {
    return this._json.getRoot().getValueByString(Ai).getValueByIndex(t).getValueByString(Ir).toFloat();
  }
  getEventValue(t) {
    return new U(this._json.getRoot().getValueByString(Ai).getValueByIndex(t).getValueByString(Tr).getRawString());
  }
};
var Li = ((s) => (s[s.EvaluationOptionFlag_AreBeziersRistricted = 0] = "EvaluationOptionFlag_AreBeziersRistricted", s))(Li || {});
var Di;
((s) => {
  s.CubismMotionJson = Fi;
})(Di || (Di = {}));
var Vr = "EyeBlink";
var wr = "LipSync";
var Rr = "Model";
var Er = "Parameter";
var Ar = "PartOpacity";
var Fr = false;
function z(s, t, e) {
  const i = new ye();
  return i.time = s.time + (t.time - s.time) * e, i.value = s.value + (t.value - s.value) * e, i;
}
function Lr(s, t) {
  let e = (t - s[0].time) / (s[1].time - s[0].time);
  return e < 0 && (e = 0), s[0].value + (s[1].value - s[0].value) * e;
}
function Dr(s, t) {
  let e = (t - s[0].time) / (s[3].time - s[0].time);
  e < 0 && (e = 0);
  const i = z(s[0], s[1], e), r = z(s[1], s[2], e), a = z(s[2], s[3], e), o = z(i, r, e), n = z(r, a, e);
  return z(o, n, e).value;
}
function kr(s, t) {
  const e = t, i = s[0].time, r = s[3].time, a = s[1].time, o = s[2].time, n = r - 3 * o + 3 * a - i, l = 3 * o - 6 * a + 3 * i, u = 3 * a - 3 * i, h = i - e, m = v.cardanoAlgorithmForBezier(n, l, u, h), d = z(s[0], s[1], m), g = z(s[1], s[2], m), c = z(s[2], s[3], m), p = z(d, g, m), _ = z(g, c, m);
  return z(p, _, m).value;
}
function Or(s, t) {
  return s[0].value;
}
function Nr(s, t) {
  return s[1].value;
}
function Se(s, t, e) {
  const i = s.curves.at(t);
  let r = -1;
  const a = i.baseSegmentIndex + i.segmentCount;
  let o = 0;
  for (let l = i.baseSegmentIndex; l < a; ++l)
    if (o = s.segments.at(l).basePointIndex + (s.segments.at(l).segmentType == j.CubismMotionSegmentType_Bezier ? 3 : 1), s.points.at(o).time > e) {
      r = l;
      break;
    }
  if (r == -1)
    return s.points.at(o).value;
  const n = s.segments.at(r);
  return n.evaluate(s.points.get(n.basePointIndex), e);
}
var ne = class extends vt {
  constructor() {
    super();
    __publicField(this, "_sourceFrameRate");
    __publicField(this, "_loopDurationSeconds");
    __publicField(this, "_isLoop");
    __publicField(this, "_isLoopFadeIn");
    __publicField(this, "_lastWeight");
    __publicField(this, "_motionData");
    __publicField(this, "_eyeBlinkParameterIds");
    __publicField(this, "_lipSyncParameterIds");
    __publicField(this, "_modelCurveIdEyeBlink");
    __publicField(this, "_modelCurveIdLipSync");
    this._sourceFrameRate = 30, this._loopDurationSeconds = -1, this._isLoop = false, this._isLoopFadeIn = true, this._lastWeight = 0, this._motionData = null, this._modelCurveIdEyeBlink = null, this._modelCurveIdLipSync = null, this._eyeBlinkParameterIds = null, this._lipSyncParameterIds = null;
  }
  static create(t, e, i) {
    const r = new ne();
    return r.parse(t, e), r._sourceFrameRate = r._motionData.fps, r._loopDurationSeconds = r._motionData.duration, r._onFinishedMotion = i, r;
  }
  doUpdateParameters(t, e, i, r) {
    this._modelCurveIdEyeBlink == null && (this._modelCurveIdEyeBlink = I.getIdManager().getId(Vr)), this._modelCurveIdLipSync == null && (this._modelCurveIdLipSync = I.getIdManager().getId(wr));
    let a = e - r.getStartTime();
    a < 0 && (a = 0);
    let o = Number.MAX_VALUE, n = Number.MAX_VALUE;
    const l = 64;
    let u = 0, h = 0;
    this._eyeBlinkParameterIds.getSize() > l && Rt("too many eye blink targets : {0}", this._eyeBlinkParameterIds.getSize()), this._lipSyncParameterIds.getSize() > l && Rt("too many lip sync targets : {0}", this._lipSyncParameterIds.getSize());
    const m = this._fadeInSeconds <= 0 ? 1 : v.getEasingSine((e - r.getFadeInStartTime()) / this._fadeInSeconds), d = this._fadeOutSeconds <= 0 || r.getEndTime() < 0 ? 1 : v.getEasingSine((r.getEndTime() - e) / this._fadeOutSeconds);
    let g, c, p, _ = a;
    if (this._isLoop)
      for (; _ > this._motionData.duration; )
        _ -= this._motionData.duration;
    const M = this._motionData.curves;
    for (c = 0; c < this._motionData.curveCount && M.at(c).type == ot.CubismMotionCurveTarget_Model; ++c)
      g = Se(this._motionData, c, _), M.at(c).id == this._modelCurveIdEyeBlink ? n = g : M.at(c).id == this._modelCurveIdLipSync && (o = g);
    for (; c < this._motionData.curveCount && M.at(c).type == ot.CubismMotionCurveTarget_Parameter; ++c) {
      if (p = t.getParameterIndex(M.at(c).id), p == -1)
        continue;
      const P = t.getParameterValueByIndex(p);
      if (g = Se(this._motionData, c, _), n != Number.MAX_VALUE) {
        for (let f = 0; f < this._eyeBlinkParameterIds.getSize() && f < l; ++f)
          if (this._eyeBlinkParameterIds.at(f) == M.at(c).id) {
            g *= n, h |= 1 << f;
            break;
          }
      }
      if (o != Number.MAX_VALUE) {
        for (let f = 0; f < this._lipSyncParameterIds.getSize() && f < l; ++f)
          if (this._lipSyncParameterIds.at(f) == M.at(c).id) {
            g += o, u |= 1 << f;
            break;
          }
      }
      let y;
      if (M.at(c).fadeInTime < 0 && M.at(c).fadeOutTime < 0)
        y = P + (g - P) * i;
      else {
        let f, V;
        M.at(c).fadeInTime < 0 ? f = m : f = M.at(c).fadeInTime == 0 ? 1 : v.getEasingSine((e - r.getFadeInStartTime()) / M.at(c).fadeInTime), M.at(c).fadeOutTime < 0 ? V = d : V = M.at(c).fadeOutTime == 0 || r.getEndTime() < 0 ? 1 : v.getEasingSine((r.getEndTime() - e) / M.at(c).fadeOutTime);
        const b = this._weight * f * V;
        y = P + (g - P) * b;
      }
      t.setParameterValueByIndex(p, y, 1);
    }
    {
      if (n != Number.MAX_VALUE)
        for (let P = 0; P < this._eyeBlinkParameterIds.getSize() && P < l; ++P) {
          const y = t.getParameterValueById(this._eyeBlinkParameterIds.at(P));
          if (h >> P & 1)
            continue;
          const f = y + (n - y) * i;
          t.setParameterValueById(this._eyeBlinkParameterIds.at(P), f);
        }
      if (o != Number.MAX_VALUE)
        for (let P = 0; P < this._lipSyncParameterIds.getSize() && P < l; ++P) {
          const y = t.getParameterValueById(this._lipSyncParameterIds.at(P));
          if (u >> P & 1)
            continue;
          const f = y + (o - y) * i;
          t.setParameterValueById(this._lipSyncParameterIds.at(P), f);
        }
    }
    for (; c < this._motionData.curveCount && M.at(c).type == ot.CubismMotionCurveTarget_PartOpacity; ++c)
      p = t.getParameterIndex(M.at(c).id), p != -1 && (g = Se(this._motionData, c, _), t.setParameterValueByIndex(p, g));
    a >= this._motionData.duration && (this._isLoop ? (r.setStartTime(e), this._isLoopFadeIn && r.setFadeInStartTime(e)) : (this._onFinishedMotion && this._onFinishedMotion(this), r.setIsFinished(true))), this._lastWeight = i;
  }
  setIsLoop(t) {
    this._isLoop = t;
  }
  isLoop() {
    return this._isLoop;
  }
  setIsLoopFadeIn(t) {
    this._isLoopFadeIn = t;
  }
  isLoopFadeIn() {
    return this._isLoopFadeIn;
  }
  getDuration() {
    return this._isLoop ? -1 : this._loopDurationSeconds;
  }
  getLoopDuration() {
    return this._loopDurationSeconds;
  }
  setParameterFadeInTime(t, e) {
    const i = this._motionData.curves;
    for (let r = 0; r < this._motionData.curveCount; ++r)
      if (t == i.at(r).id) {
        i.at(r).fadeInTime = e;
        return;
      }
  }
  setParameterFadeOutTime(t, e) {
    const i = this._motionData.curves;
    for (let r = 0; r < this._motionData.curveCount; ++r)
      if (t == i.at(r).id) {
        i.at(r).fadeOutTime = e;
        return;
      }
  }
  getParameterFadeInTime(t) {
    const e = this._motionData.curves;
    for (let i = 0; i < this._motionData.curveCount; ++i)
      if (t == e.at(i).id)
        return e.at(i).fadeInTime;
    return -1;
  }
  getParameterFadeOutTime(t) {
    const e = this._motionData.curves;
    for (let i = 0; i < this._motionData.curveCount; ++i)
      if (t == e.at(i).id)
        return e.at(i).fadeOutTime;
    return -1;
  }
  setEffectIds(t, e) {
    this._eyeBlinkParameterIds = t, this._lipSyncParameterIds = e;
  }
  release() {
    this._motionData = void 0, this._motionData = null;
  }
  parse(t, e) {
    this._motionData = new wi();
    let i = new Fi(t, e);
    this._motionData.duration = i.getMotionDuration(), this._motionData.loop = i.isMotionLoop(), this._motionData.curveCount = i.getMotionCurveCount(), this._motionData.fps = i.getMotionFps(), this._motionData.eventCount = i.getEventCount();
    const r = i.getEvaluationOptionFlag(Li.EvaluationOptionFlag_AreBeziersRistricted);
    i.isExistMotionFadeInTime() ? this._fadeInSeconds = i.getMotionFadeInTime() < 0 ? 1 : i.getMotionFadeInTime() : this._fadeInSeconds = 1, i.isExistMotionFadeOutTime() ? this._fadeOutSeconds = i.getMotionFadeOutTime() < 0 ? 1 : i.getMotionFadeOutTime() : this._fadeOutSeconds = 1, this._motionData.curves.updateSize(this._motionData.curveCount, Ti, true), this._motionData.segments.updateSize(i.getMotionTotalSegmentCount(), Ii, true), this._motionData.points.updateSize(i.getMotionTotalPointCount(), ye, true), this._motionData.events.updateSize(this._motionData.eventCount, Vi, true);
    let a = 0, o = 0;
    for (let n = 0; n < this._motionData.curveCount; ++n) {
      i.getMotionCurveTarget(n) == Rr ? this._motionData.curves.at(n).type = ot.CubismMotionCurveTarget_Model : i.getMotionCurveTarget(n) == Er ? this._motionData.curves.at(n).type = ot.CubismMotionCurveTarget_Parameter : i.getMotionCurveTarget(n) == Ar ? this._motionData.curves.at(n).type = ot.CubismMotionCurveTarget_PartOpacity : st('Warning : Unable to get segment type from Curve! The number of "CurveCount" may be incorrect!'), this._motionData.curves.at(n).id = i.getMotionCurveId(n), this._motionData.curves.at(n).baseSegmentIndex = o, this._motionData.curves.at(n).fadeInTime = i.isExistMotionCurveFadeInTime(n) ? i.getMotionCurveFadeInTime(n) : -1, this._motionData.curves.at(n).fadeOutTime = i.isExistMotionCurveFadeOutTime(n) ? i.getMotionCurveFadeOutTime(n) : -1;
      for (let l = 0; l < i.getMotionCurveSegmentCount(n); ) {
        switch (l == 0 ? (this._motionData.segments.at(o).basePointIndex = a, this._motionData.points.at(a).time = i.getMotionCurveSegment(n, l), this._motionData.points.at(a).value = i.getMotionCurveSegment(n, l + 1), a += 1, l += 2) : this._motionData.segments.at(o).basePointIndex = a - 1, i.getMotionCurveSegment(n, l)) {
          case j.CubismMotionSegmentType_Linear: {
            this._motionData.segments.at(o).segmentType = j.CubismMotionSegmentType_Linear, this._motionData.segments.at(o).evaluate = Lr, this._motionData.points.at(a).time = i.getMotionCurveSegment(n, l + 1), this._motionData.points.at(a).value = i.getMotionCurveSegment(n, l + 2), a += 1, l += 3;
            break;
          }
          case j.CubismMotionSegmentType_Bezier: {
            this._motionData.segments.at(o).segmentType = j.CubismMotionSegmentType_Bezier, r || Fr ? this._motionData.segments.at(o).evaluate = Dr : this._motionData.segments.at(o).evaluate = kr, this._motionData.points.at(a).time = i.getMotionCurveSegment(n, l + 1), this._motionData.points.at(a).value = i.getMotionCurveSegment(n, l + 2), this._motionData.points.at(a + 1).time = i.getMotionCurveSegment(n, l + 3), this._motionData.points.at(a + 1).value = i.getMotionCurveSegment(n, l + 4), this._motionData.points.at(a + 2).time = i.getMotionCurveSegment(n, l + 5), this._motionData.points.at(a + 2).value = i.getMotionCurveSegment(n, l + 6), a += 3, l += 7;
            break;
          }
          case j.CubismMotionSegmentType_Stepped: {
            this._motionData.segments.at(o).segmentType = j.CubismMotionSegmentType_Stepped, this._motionData.segments.at(o).evaluate = Or, this._motionData.points.at(a).time = i.getMotionCurveSegment(n, l + 1), this._motionData.points.at(a).value = i.getMotionCurveSegment(n, l + 2), a += 1, l += 3;
            break;
          }
          case j.CubismMotionSegmentType_InverseStepped: {
            this._motionData.segments.at(o).segmentType = j.CubismMotionSegmentType_InverseStepped, this._motionData.segments.at(o).evaluate = Nr, this._motionData.points.at(a).time = i.getMotionCurveSegment(n, l + 1), this._motionData.points.at(a).value = i.getMotionCurveSegment(n, l + 2), a += 1, l += 3;
            break;
          }
          default: {
            H(0);
            break;
          }
        }
        ++this._motionData.curves.at(n).segmentCount, ++o;
      }
    }
    for (let n = 0; n < i.getEventCount(); ++n)
      this._motionData.events.at(n).fireTime = i.getEventTime(n), this._motionData.events.at(n).value = i.getEventValue(n);
    i.release(), i = void 0, i = null;
  }
  getFiredEvent(t, e) {
    this._firedEventValues.updateSize(0);
    for (let i = 0; i < this._motionData.eventCount; ++i)
      this._motionData.events.at(i).fireTime > t && this._motionData.events.at(i).fireTime <= e && this._firedEventValues.pushBack(new U(this._motionData.events.at(i).value.s));
    return this._firedEventValues;
  }
};
var ki;
((s) => {
  s.CubismMotion = ne;
})(ki || (ki = {}));
var Oi = class {
  constructor() {
    __publicField(this, "_autoDelete");
    __publicField(this, "_motion");
    __publicField(this, "_available");
    __publicField(this, "_finished");
    __publicField(this, "_started");
    __publicField(this, "_startTimeSeconds");
    __publicField(this, "_fadeInStartTimeSeconds");
    __publicField(this, "_endTimeSeconds");
    __publicField(this, "_stateTimeSeconds");
    __publicField(this, "_stateWeight");
    __publicField(this, "_lastEventCheckSeconds");
    __publicField(this, "_fadeOutSeconds");
    __publicField(this, "_isTriggeredFadeOut");
    __publicField(this, "_motionQueueEntryHandle");
    this._autoDelete = false, this._motion = null, this._available = true, this._finished = false, this._started = false, this._startTimeSeconds = -1, this._fadeInStartTimeSeconds = 0, this._endTimeSeconds = -1, this._stateTimeSeconds = 0, this._stateWeight = 0, this._lastEventCheckSeconds = 0, this._motionQueueEntryHandle = this, this._fadeOutSeconds = 0, this._isTriggeredFadeOut = false;
  }
  release() {
    this._autoDelete && this._motion && vt.delete(this._motion);
  }
  setFadeOut(t) {
    this._fadeOutSeconds = t, this._isTriggeredFadeOut = true;
  }
  startFadeOut(t, e) {
    const i = e + t;
    this._isTriggeredFadeOut = true, (this._endTimeSeconds < 0 || i < this._endTimeSeconds) && (this._endTimeSeconds = i);
  }
  isFinished() {
    return this._finished;
  }
  isStarted() {
    return this._started;
  }
  getStartTime() {
    return this._startTimeSeconds;
  }
  getFadeInStartTime() {
    return this._fadeInStartTimeSeconds;
  }
  getEndTime() {
    return this._endTimeSeconds;
  }
  setStartTime(t) {
    this._startTimeSeconds = t;
  }
  setFadeInStartTime(t) {
    this._fadeInStartTimeSeconds = t;
  }
  setEndTime(t) {
    this._endTimeSeconds = t;
  }
  setIsFinished(t) {
    this._finished = t;
  }
  setIsStarted(t) {
    this._started = t;
  }
  isAvailable() {
    return this._available;
  }
  setIsAvailable(t) {
    this._available = t;
  }
  setState(t, e) {
    this._stateTimeSeconds = t, this._stateWeight = e;
  }
  getStateTime() {
    return this._stateTimeSeconds;
  }
  getStateWeight() {
    return this._stateWeight;
  }
  getLastCheckEventSeconds() {
    return this._lastEventCheckSeconds;
  }
  setLastCheckEventSeconds(t) {
    this._lastEventCheckSeconds = t;
  }
  isTriggeredFadeOut() {
    return this._isTriggeredFadeOut;
  }
  getFadeOutSeconds() {
    return this._fadeOutSeconds;
  }
};
var Ni;
((s) => {
  s.CubismMotionQueueEntry = Oi;
})(Ni || (Ni = {}));
var Ui = class {
  constructor() {
    __publicField(this, "_userTimeSeconds");
    __publicField(this, "_motions");
    __publicField(this, "_eventCallBack");
    __publicField(this, "_eventCustomData");
    this._userTimeSeconds = 0, this._eventCallBack = null, this._eventCustomData = null, this._motions = new x();
  }
  release() {
    for (let t = 0; t < this._motions.getSize(); ++t)
      this._motions.at(t) && (this._motions.at(t).release(), this._motions.set(t, null));
    this._motions = null;
  }
  startMotion(t, e, i) {
    if (t == null)
      return gt;
    let r = null;
    for (let a = 0; a < this._motions.getSize(); ++a)
      r = this._motions.at(a), r == null ? void 0 : r.setFadeOut(r._motion.getFadeOutTime());
    return r = new Oi(), r._autoDelete = e, r._motion = t, this._motions.pushBack(r), r._motionQueueEntryHandle;
  }
  isFinished() {
    for (let t = this._motions.begin(); t.notEqual(this._motions.end()); ) {
      let e = t.ptr();
      if (e == null) {
        t = this._motions.erase(t);
        continue;
      }
      if (e._motion == null) {
        e.release(), e = null, t = this._motions.erase(t);
        continue;
      }
      if (e.isFinished())
        t.preIncrement();
      else
        return false;
    }
    return true;
  }
  isFinishedByHandle(t) {
    for (let e = this._motions.begin(); e.notEqual(this._motions.end()); e.increment()) {
      const i = e.ptr();
      if (i != null && i._motionQueueEntryHandle == t && !i.isFinished())
        return false;
    }
    return true;
  }
  stopAllMotions() {
    for (let t = this._motions.begin(); t.notEqual(this._motions.end()); ) {
      let e = t.ptr();
      if (e == null) {
        t = this._motions.erase(t);
        continue;
      }
      e.release(), e = null, t = this._motions.erase(t);
    }
  }
  getCubismMotionQueueEntry(t) {
    for (let e = this._motions.begin(); e.notEqual(this._motions.end()); e.preIncrement()) {
      const i = e.ptr();
      if (i != null && i._motionQueueEntryHandle == t)
        return i;
    }
    return null;
  }
  setEventCallback(t, e = null) {
    this._eventCallBack = t, this._eventCustomData = e;
  }
  doUpdateMotion(t, e) {
    let i = false;
    for (let r = this._motions.begin(); r.notEqual(this._motions.end()); ) {
      let a = r.ptr();
      if (a == null) {
        r = this._motions.erase(r);
        continue;
      }
      const o = a._motion;
      if (o == null) {
        a.release(), a = null, r = this._motions.erase(r);
        continue;
      }
      o.updateParameters(t, a, e), i = true;
      const n = o.getFiredEvent(a.getLastCheckEventSeconds() - a.getStartTime(), e - a.getStartTime());
      for (let l = 0; l < n.getSize(); ++l)
        this._eventCallBack(this, n.at(l), this._eventCustomData);
      a.setLastCheckEventSeconds(e), a.isFinished() ? (a.release(), a = null, r = this._motions.erase(r)) : (a.isTriggeredFadeOut() && a.startFadeOut(a.getFadeOutSeconds(), e), r.preIncrement());
    }
    return i;
  }
};
var gt = -1;
var zi;
((s) => {
  s.CubismMotionQueueManager = Ui, s.InvalidMotionQueueEntryHandleValue = gt;
})(zi || (zi = {}));
var Ft = class extends Ui {
  constructor() {
    super();
    __publicField(this, "_currentPriority");
    __publicField(this, "_reservePriority");
    this._currentPriority = 0, this._reservePriority = 0;
  }
  getCurrentPriority() {
    return this._currentPriority;
  }
  getReservePriority() {
    return this._reservePriority;
  }
  setReservePriority(t) {
    this._reservePriority = t;
  }
  startMotionPriority(t, e, i) {
    return i == this._reservePriority && (this._reservePriority = 0), this._currentPriority = i, super.startMotion(t, e, this._userTimeSeconds);
  }
  updateMotion(t, e) {
    this._userTimeSeconds += e;
    const i = super.doUpdateMotion(t, this._userTimeSeconds);
    return this.isFinished() && (this._currentPriority = 0), i;
  }
  reserveMotion(t) {
    return t <= this._reservePriority || t <= this._currentPriority ? false : (this._reservePriority = t, true);
  }
};
var Xi;
((s) => {
  s.CubismMotionManager = Ft;
})(Xi || (Xi = {}));
var Qt = ((s) => (s[s.CubismPhysicsTargetType_Parameter = 0] = "CubismPhysicsTargetType_Parameter", s))(Qt || {});
var ut = ((s) => (s[s.CubismPhysicsSource_X = 0] = "CubismPhysicsSource_X", s[s.CubismPhysicsSource_Y = 1] = "CubismPhysicsSource_Y", s[s.CubismPhysicsSource_Angle = 2] = "CubismPhysicsSource_Angle", s))(ut || {});
var Ur = class {
  constructor() {
    __publicField(this, "gravity");
    __publicField(this, "wind");
    this.gravity = new C(0, 0), this.wind = new C(0, 0);
  }
};
var xe = class {
  constructor() {
    __publicField(this, "id");
    __publicField(this, "targetType");
  }
};
var Ce = class {
  constructor() {
    __publicField(this, "minimum");
    __publicField(this, "maximum");
    __publicField(this, "defalut");
  }
};
var Yi = class {
  constructor() {
    __publicField(this, "initialPosition");
    __publicField(this, "mobility");
    __publicField(this, "delay");
    __publicField(this, "acceleration");
    __publicField(this, "radius");
    __publicField(this, "position");
    __publicField(this, "lastPosition");
    __publicField(this, "lastGravity");
    __publicField(this, "force");
    __publicField(this, "velocity");
    this.initialPosition = new C(0, 0), this.position = new C(0, 0), this.lastPosition = new C(0, 0), this.lastGravity = new C(0, 0), this.force = new C(0, 0), this.velocity = new C(0, 0);
  }
};
var ji = class {
  constructor() {
    __publicField(this, "inputCount");
    __publicField(this, "outputCount");
    __publicField(this, "particleCount");
    __publicField(this, "baseInputIndex");
    __publicField(this, "baseOutputIndex");
    __publicField(this, "baseParticleIndex");
    __publicField(this, "normalizationPosition");
    __publicField(this, "normalizationAngle");
    this.normalizationPosition = new Ce(), this.normalizationAngle = new Ce();
  }
};
var Gi = class {
  constructor() {
    __publicField(this, "source");
    __publicField(this, "sourceParameterIndex");
    __publicField(this, "weight");
    __publicField(this, "type");
    __publicField(this, "reflect");
    __publicField(this, "getNormalizedParameterValue");
    this.source = new xe();
  }
};
var Hi = class {
  constructor() {
    __publicField(this, "destination");
    __publicField(this, "destinationParameterIndex");
    __publicField(this, "vertexIndex");
    __publicField(this, "translationScale");
    __publicField(this, "angleScale");
    __publicField(this, "weight");
    __publicField(this, "type");
    __publicField(this, "reflect");
    __publicField(this, "valueBelowMinimum");
    __publicField(this, "valueExceededMaximum");
    __publicField(this, "getValue");
    __publicField(this, "getScale");
    this.destination = new xe(), this.translationScale = new C(0, 0);
  }
};
var Wi = class {
  constructor() {
    __publicField(this, "subRigCount");
    __publicField(this, "settings");
    __publicField(this, "inputs");
    __publicField(this, "outputs");
    __publicField(this, "particles");
    __publicField(this, "gravity");
    __publicField(this, "wind");
    __publicField(this, "fps");
    this.settings = new x(), this.inputs = new x(), this.outputs = new x(), this.particles = new x(), this.gravity = new C(0, 0), this.wind = new C(0, 0), this.fps = 0;
  }
};
var $i;
((s) => {
  s.CubismPhysicsInput = Gi, s.CubismPhysicsNormalization = Ce, s.CubismPhysicsOutput = Hi, s.CubismPhysicsParameter = xe, s.CubismPhysicsParticle = Yi, s.CubismPhysicsRig = Wi, s.CubismPhysicsSource = ut, s.CubismPhysicsSubRig = ji, s.CubismPhysicsTargetType = Qt, s.PhysicsJsonEffectiveForces = Ur;
})($i || ($i = {}));
var Lt = "Position";
var Be = "X";
var Me = "Y";
var Pe = "Angle";
var qi = "Type";
var Ji = "Id";
var tt = "Meta";
var te = "EffectiveForces";
var zr = "TotalInputCount";
var Xr = "TotalOutputCount";
var Yr = "PhysicsSettingCount";
var Ki = "Gravity";
var Zi = "Wind";
var jr = "VertexCount";
var Gr = "Fps";
var w = "PhysicsSettings";
var bt = "Normalization";
var Qi = "Minimum";
var ts = "Maximum";
var es = "Default";
var is = "Reflect";
var ss = "Weight";
var Dt = "Input";
var Hr = "Source";
var ct = "Output";
var Wr = "Scale";
var $r = "VertexIndex";
var qr = "Destination";
var dt = "Vertices";
var Jr = "Mobility";
var Kr = "Delay";
var Zr = "Radius";
var Qr = "Acceleration";
var rs = class {
  constructor(t, e) {
    __publicField(this, "_json");
    this._json = A.create(t, e);
  }
  release() {
    A.delete(this._json);
  }
  getGravity() {
    const t = new C(0, 0);
    return t.x = this._json.getRoot().getValueByString(tt).getValueByString(te).getValueByString(Ki).getValueByString(Be).toFloat(), t.y = this._json.getRoot().getValueByString(tt).getValueByString(te).getValueByString(Ki).getValueByString(Me).toFloat(), t;
  }
  getWind() {
    const t = new C(0, 0);
    return t.x = this._json.getRoot().getValueByString(tt).getValueByString(te).getValueByString(Zi).getValueByString(Be).toFloat(), t.y = this._json.getRoot().getValueByString(tt).getValueByString(te).getValueByString(Zi).getValueByString(Me).toFloat(), t;
  }
  getFps() {
    return this._json.getRoot().getValueByString(tt).getValueByString(Gr).toFloat(0);
  }
  getSubRigCount() {
    return this._json.getRoot().getValueByString(tt).getValueByString(Yr).toInt();
  }
  getTotalInputCount() {
    return this._json.getRoot().getValueByString(tt).getValueByString(zr).toInt();
  }
  getTotalOutputCount() {
    return this._json.getRoot().getValueByString(tt).getValueByString(Xr).toInt();
  }
  getVertexCount() {
    return this._json.getRoot().getValueByString(tt).getValueByString(jr).toInt();
  }
  getNormalizationPositionMinimumValue(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(bt).getValueByString(Lt).getValueByString(Qi).toFloat();
  }
  getNormalizationPositionMaximumValue(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(bt).getValueByString(Lt).getValueByString(ts).toFloat();
  }
  getNormalizationPositionDefaultValue(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(bt).getValueByString(Lt).getValueByString(es).toFloat();
  }
  getNormalizationAngleMinimumValue(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(bt).getValueByString(Pe).getValueByString(Qi).toFloat();
  }
  getNormalizationAngleMaximumValue(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(bt).getValueByString(Pe).getValueByString(ts).toFloat();
  }
  getNormalizationAngleDefaultValue(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(bt).getValueByString(Pe).getValueByString(es).toFloat();
  }
  getInputCount(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(Dt).getVector().getSize();
  }
  getInputWeight(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(Dt).getValueByIndex(e).getValueByString(ss).toFloat();
  }
  getInputReflect(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(Dt).getValueByIndex(e).getValueByString(is).toBoolean();
  }
  getInputType(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(Dt).getValueByIndex(e).getValueByString(qi).getRawString();
  }
  getInputSourceId(t, e) {
    return I.getIdManager().getId(this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(Dt).getValueByIndex(e).getValueByString(Hr).getValueByString(Ji).getRawString());
  }
  getOutputCount(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(ct).getVector().getSize();
  }
  getOutputVertexIndex(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(ct).getValueByIndex(e).getValueByString($r).toInt();
  }
  getOutputAngleScale(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(ct).getValueByIndex(e).getValueByString(Wr).toFloat();
  }
  getOutputWeight(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(ct).getValueByIndex(e).getValueByString(ss).toFloat();
  }
  getOutputDestinationId(t, e) {
    return I.getIdManager().getId(this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(ct).getValueByIndex(e).getValueByString(qr).getValueByString(Ji).getRawString());
  }
  getOutputType(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(ct).getValueByIndex(e).getValueByString(qi).getRawString();
  }
  getOutputReflect(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(ct).getValueByIndex(e).getValueByString(is).toBoolean();
  }
  getParticleCount(t) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(dt).getVector().getSize();
  }
  getParticleMobility(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(dt).getValueByIndex(e).getValueByString(Jr).toFloat();
  }
  getParticleDelay(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(dt).getValueByIndex(e).getValueByString(Kr).toFloat();
  }
  getParticleAcceleration(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(dt).getValueByIndex(e).getValueByString(Qr).toFloat();
  }
  getParticleRadius(t, e) {
    return this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(dt).getValueByIndex(e).getValueByString(Zr).toFloat();
  }
  getParticlePosition(t, e) {
    const i = new C(0, 0);
    return i.x = this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(dt).getValueByIndex(e).getValueByString(Lt).getValueByString(Be).toFloat(), i.y = this._json.getRoot().getValueByString(w).getValueByIndex(t).getValueByString(dt).getValueByIndex(e).getValueByString(Lt).getValueByString(Me).toFloat(), i;
  }
};
var as;
((s) => {
  s.CubismPhysicsJson = rs;
})(as || (as = {}));
var ns = "X";
var os = "Y";
var ls = "Angle";
var ta = 5;
var ve = 100;
var us = 1e-3;
var ea = 5;
var Ut = class {
  constructor() {
    __publicField(this, "_physicsRig");
    __publicField(this, "_options");
    __publicField(this, "_currentRigOutputs");
    __publicField(this, "_previousRigOutputs");
    __publicField(this, "_currentRemainTime");
    __publicField(this, "_parameterCaches");
    __publicField(this, "_parameterInputCaches");
    this._physicsRig = null, this._options = new hs(), this._options.gravity.y = -1, this._options.gravity.x = 0, this._options.wind.x = 0, this._options.wind.y = 0, this._currentRigOutputs = new x(), this._previousRigOutputs = new x(), this._currentRemainTime = 0, this._parameterCaches = null, this._parameterInputCaches = null;
  }
  static create(t, e) {
    const i = new Ut();
    return i.parse(t, e), i._physicsRig.gravity.y = 0, i;
  }
  static delete(t) {
    t != null && (t.release(), t = null);
  }
  parse(t, e) {
    this._physicsRig = new Wi();
    let i = new rs(t, e);
    this._physicsRig.gravity = i.getGravity(), this._physicsRig.wind = i.getWind(), this._physicsRig.subRigCount = i.getSubRigCount(), this._physicsRig.fps = i.getFps(), this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, ji, true), this._physicsRig.inputs.updateSize(i.getTotalInputCount(), Gi, true), this._physicsRig.outputs.updateSize(i.getTotalOutputCount(), Hi, true), this._physicsRig.particles.updateSize(i.getVertexCount(), Yi, true), this._currentRigOutputs.clear(), this._previousRigOutputs.clear();
    let r = 0, a = 0, o = 0;
    for (let n = 0; n < this._physicsRig.settings.getSize(); ++n) {
      this._physicsRig.settings.at(n).normalizationPosition.minimum = i.getNormalizationPositionMinimumValue(n), this._physicsRig.settings.at(n).normalizationPosition.maximum = i.getNormalizationPositionMaximumValue(n), this._physicsRig.settings.at(n).normalizationPosition.defalut = i.getNormalizationPositionDefaultValue(n), this._physicsRig.settings.at(n).normalizationAngle.minimum = i.getNormalizationAngleMinimumValue(n), this._physicsRig.settings.at(n).normalizationAngle.maximum = i.getNormalizationAngleMaximumValue(n), this._physicsRig.settings.at(n).normalizationAngle.defalut = i.getNormalizationAngleDefaultValue(n), this._physicsRig.settings.at(n).inputCount = i.getInputCount(n), this._physicsRig.settings.at(n).baseInputIndex = r;
      for (let h = 0; h < this._physicsRig.settings.at(n).inputCount; ++h)
        this._physicsRig.inputs.at(r + h).sourceParameterIndex = -1, this._physicsRig.inputs.at(r + h).weight = i.getInputWeight(n, h), this._physicsRig.inputs.at(r + h).reflect = i.getInputReflect(n, h), i.getInputType(n, h) == ns ? (this._physicsRig.inputs.at(r + h).type = ut.CubismPhysicsSource_X, this._physicsRig.inputs.at(r + h).getNormalizedParameterValue = sa) : i.getInputType(n, h) == os ? (this._physicsRig.inputs.at(r + h).type = ut.CubismPhysicsSource_Y, this._physicsRig.inputs.at(r + h).getNormalizedParameterValue = ra) : i.getInputType(n, h) == ls && (this._physicsRig.inputs.at(r + h).type = ut.CubismPhysicsSource_Angle, this._physicsRig.inputs.at(r + h).getNormalizedParameterValue = aa), this._physicsRig.inputs.at(r + h).source.targetType = Qt.CubismPhysicsTargetType_Parameter, this._physicsRig.inputs.at(r + h).source.id = i.getInputSourceId(n, h);
      r += this._physicsRig.settings.at(n).inputCount, this._physicsRig.settings.at(n).outputCount = i.getOutputCount(n), this._physicsRig.settings.at(n).baseOutputIndex = a;
      const l = new gs();
      l.outputs.resize(this._physicsRig.settings.at(n).outputCount);
      const u = new gs();
      u.outputs.resize(this._physicsRig.settings.at(n).outputCount);
      for (let h = 0; h < this._physicsRig.settings.at(n).outputCount; ++h)
        l.outputs[h] = 0, u.outputs[h] = 0, this._physicsRig.outputs.at(a + h).destinationParameterIndex = -1, this._physicsRig.outputs.at(a + h).vertexIndex = i.getOutputVertexIndex(n, h), this._physicsRig.outputs.at(a + h).angleScale = i.getOutputAngleScale(n, h), this._physicsRig.outputs.at(a + h).weight = i.getOutputWeight(n, h), this._physicsRig.outputs.at(a + h).destination.targetType = Qt.CubismPhysicsTargetType_Parameter, this._physicsRig.outputs.at(a + h).destination.id = i.getOutputDestinationId(n, h), i.getOutputType(n, h) == ns ? (this._physicsRig.outputs.at(a + h).type = ut.CubismPhysicsSource_X, this._physicsRig.outputs.at(a + h).getValue = na, this._physicsRig.outputs.at(a + h).getScale = ga) : i.getOutputType(n, h) == os ? (this._physicsRig.outputs.at(a + h).type = ut.CubismPhysicsSource_Y, this._physicsRig.outputs.at(a + h).getValue = oa, this._physicsRig.outputs.at(a + h).getScale = ca) : i.getOutputType(n, h) == ls && (this._physicsRig.outputs.at(a + h).type = ut.CubismPhysicsSource_Angle, this._physicsRig.outputs.at(a + h).getValue = la, this._physicsRig.outputs.at(a + h).getScale = da), this._physicsRig.outputs.at(a + h).reflect = i.getOutputReflect(n, h);
      this._currentRigOutputs.pushBack(l), this._previousRigOutputs.pushBack(u), a += this._physicsRig.settings.at(n).outputCount, this._physicsRig.settings.at(n).particleCount = i.getParticleCount(n), this._physicsRig.settings.at(n).baseParticleIndex = o;
      for (let h = 0; h < this._physicsRig.settings.at(n).particleCount; ++h)
        this._physicsRig.particles.at(o + h).mobility = i.getParticleMobility(n, h), this._physicsRig.particles.at(o + h).delay = i.getParticleDelay(n, h), this._physicsRig.particles.at(o + h).acceleration = i.getParticleAcceleration(n, h), this._physicsRig.particles.at(o + h).radius = i.getParticleRadius(n, h), this._physicsRig.particles.at(o + h).position = i.getParticlePosition(n, h);
      o += this._physicsRig.settings.at(n).particleCount;
    }
    this.initialize(), i.release(), i = void 0, i = null;
  }
  stabilization(t) {
    var _a3, _b;
    let e, i, r, a;
    const o = new C();
    let n, l, u, h, m, d, g, c;
    m = t.getModel().parameters.values, d = t.getModel().parameters.maximumValues, g = t.getModel().parameters.minimumValues, c = t.getModel().parameters.defaultValues, (((_a3 = this._parameterCaches) == null ? void 0 : _a3.length) ?? 0) < t.getParameterCount() && (this._parameterCaches = new Float32Array(t.getParameterCount())), (((_b = this._parameterInputCaches) == null ? void 0 : _b.length) ?? 0) < t.getParameterCount() && (this._parameterInputCaches = new Float32Array(t.getParameterCount()));
    for (let p = 0; p < t.getParameterCount(); ++p)
      this._parameterCaches[p] = m[p], this._parameterInputCaches[p] = m[p];
    for (let p = 0; p < this._physicsRig.subRigCount; ++p) {
      e = { angle: 0 }, o.x = 0, o.y = 0, n = this._physicsRig.settings.at(p), l = this._physicsRig.inputs.get(n.baseInputIndex), u = this._physicsRig.outputs.get(n.baseOutputIndex), h = this._physicsRig.particles.get(n.baseParticleIndex);
      for (let _ = 0; _ < n.inputCount; ++_)
        i = l[_].weight / ve, l[_].sourceParameterIndex == -1 && (l[_].sourceParameterIndex = t.getParameterIndex(l[_].source.id)), l[_].getNormalizedParameterValue(o, e, m[l[_].sourceParameterIndex], g[l[_].sourceParameterIndex], d[l[_].sourceParameterIndex], c[l[_].sourceParameterIndex], n.normalizationPosition, n.normalizationAngle, l[_].reflect, i), this._parameterCaches[l[_].sourceParameterIndex] = m[l[_].sourceParameterIndex];
      r = v.degreesToRadian(-e.angle), o.x = o.x * v.cos(r) - o.y * v.sin(r), o.y = o.x * v.sin(r) + o.y * v.cos(r), ma(h, n.particleCount, o, e.angle, this._options.wind, us * n.normalizationPosition.maximum);
      for (let _ = 0; _ < n.outputCount; ++_) {
        const M = u[_].vertexIndex;
        if (u[_].destinationParameterIndex == -1 && (u[_].destinationParameterIndex = t.getParameterIndex(u[_].destination.id)), M < 1 || M >= n.particleCount)
          continue;
        let P = new C();
        P = h[M].position.substract(h[M - 1].position), a = u[_].getValue(P, h, M, u[_].reflect, this._options.gravity), this._currentRigOutputs.at(p).outputs[_] = a, this._previousRigOutputs.at(p).outputs[_] = a;
        const y = u[_].destinationParameterIndex, f = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(m.subarray(y))) : m.slice(y);
        be(f, g[y], d[y], a, u[_]);
        for (let V = y, b = 0; V < this._parameterCaches.length; V++, b++)
          m[V] = this._parameterCaches[V] = f[b];
      }
    }
  }
  evaluate(t, e) {
    var _a3, _b;
    let i, r, a, o;
    const n = new C();
    let l, u, h, m;
    if (0 >= e)
      return;
    let d, g, c, p, _;
    if (this._currentRemainTime += e, this._currentRemainTime > ea && (this._currentRemainTime = 0), d = t.getModel().parameters.values, g = t.getModel().parameters.maximumValues, c = t.getModel().parameters.minimumValues, p = t.getModel().parameters.defaultValues, (((_a3 = this._parameterCaches) == null ? void 0 : _a3.length) ?? 0) < t.getParameterCount() && (this._parameterCaches = new Float32Array(t.getParameterCount())), (((_b = this._parameterInputCaches) == null ? void 0 : _b.length) ?? 0) < t.getParameterCount()) {
      this._parameterInputCaches = new Float32Array(t.getParameterCount());
      for (let P = 0; P < t.getParameterCount(); ++P)
        this._parameterInputCaches[P] = d[P];
    }
    for (this._physicsRig.fps > 0 ? _ = 1 / this._physicsRig.fps : _ = e; this._currentRemainTime >= _; ) {
      for (let y = 0; y < this._physicsRig.subRigCount; ++y) {
        l = this._physicsRig.settings.at(y), h = this._physicsRig.outputs.get(l.baseOutputIndex);
        for (let f = 0; f < l.outputCount; ++f)
          this._previousRigOutputs.at(y).outputs[f] = this._currentRigOutputs.at(y).outputs[f];
      }
      const P = _ / this._currentRemainTime;
      for (let y = 0; y < t.getParameterCount(); ++y)
        this._parameterCaches[y] = this._parameterInputCaches[y] * (1 - P) + d[y] * P, this._parameterInputCaches[y] = this._parameterCaches[y];
      for (let y = 0; y < this._physicsRig.subRigCount; ++y) {
        i = { angle: 0 }, n.x = 0, n.y = 0, l = this._physicsRig.settings.at(y), u = this._physicsRig.inputs.get(l.baseInputIndex), h = this._physicsRig.outputs.get(l.baseOutputIndex), m = this._physicsRig.particles.get(l.baseParticleIndex);
        for (let f = 0; f < l.inputCount; ++f)
          r = u[f].weight / ve, u[f].sourceParameterIndex == -1 && (u[f].sourceParameterIndex = t.getParameterIndex(u[f].source.id)), u[f].getNormalizedParameterValue(n, i, this._parameterCaches[u[f].sourceParameterIndex], c[u[f].sourceParameterIndex], g[u[f].sourceParameterIndex], p[u[f].sourceParameterIndex], l.normalizationPosition, l.normalizationAngle, u[f].reflect, r);
        a = v.degreesToRadian(-i.angle), n.x = n.x * v.cos(a) - n.y * v.sin(a), n.y = n.x * v.sin(a) + n.y * v.cos(a), _a2(m, l.particleCount, n, i.angle, this._options.wind, us * l.normalizationPosition.maximum, _, ta);
        for (let f = 0; f < l.outputCount; ++f) {
          const V = h[f].vertexIndex;
          if (h[f].destinationParameterIndex == -1 && (h[f].destinationParameterIndex = t.getParameterIndex(h[f].destination.id)), V < 1 || V >= l.particleCount)
            continue;
          const b = new C();
          b.x = m[V].position.x - m[V - 1].position.x, b.y = m[V].position.y - m[V - 1].position.y, o = h[f].getValue(b, m, V, h[f].reflect, this._options.gravity), this._currentRigOutputs.at(y).outputs[f] = o;
          const D = h[f].destinationParameterIndex, it = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(this._parameterCaches.subarray(D))) : this._parameterCaches.slice(D);
          be(it, c[D], g[D], o, h[f]);
          for (let J = D, pt = 0; J < this._parameterCaches.length; J++, pt++)
            this._parameterCaches[J] = it[pt];
        }
      }
      this._currentRemainTime -= _;
    }
    const M = this._currentRemainTime / _;
    this.interpolate(t, M);
  }
  interpolate(t, e) {
    let i, r, a, o, n;
    a = t.getModel().parameters.values, o = t.getModel().parameters.maximumValues, n = t.getModel().parameters.minimumValues;
    for (let l = 0; l < this._physicsRig.subRigCount; ++l) {
      r = this._physicsRig.settings.at(l), i = this._physicsRig.outputs.get(r.baseOutputIndex);
      for (let u = 0; u < r.outputCount; ++u) {
        if (i[u].destinationParameterIndex == -1)
          continue;
        const h = i[u].destinationParameterIndex, m = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(a.subarray(h))) : a.slice(h);
        be(m, n[h], o[h], this._previousRigOutputs.at(l).outputs[u] * (1 - e) + this._currentRigOutputs.at(l).outputs[u] * e, i[u]);
        for (let d = h, g = 0; d < a.length; d++, g++)
          a[d] = m[g];
      }
    }
  }
  setOptions(t) {
    this._options = t;
  }
  getOption() {
    return this._options;
  }
  release() {
    this._physicsRig = void 0, this._physicsRig = null;
  }
  initialize() {
    let t, e, i;
    for (let r = 0; r < this._physicsRig.subRigCount; ++r) {
      e = this._physicsRig.settings.at(r), t = this._physicsRig.particles.get(e.baseParticleIndex), t[0].initialPosition = new C(0, 0), t[0].lastPosition = new C(t[0].initialPosition.x, t[0].initialPosition.y), t[0].lastGravity = new C(0, -1), t[0].lastGravity.y *= -1, t[0].velocity = new C(0, 0), t[0].force = new C(0, 0);
      for (let a = 1; a < e.particleCount; ++a)
        i = new C(0, 0), i.y = t[a].radius, t[a].initialPosition = new C(t[a - 1].initialPosition.x + i.x, t[a - 1].initialPosition.y + i.y), t[a].position = new C(t[a].initialPosition.x, t[a].initialPosition.y), t[a].lastPosition = new C(t[a].initialPosition.x, t[a].initialPosition.y), t[a].lastGravity = new C(0, -1), t[a].lastGravity.y *= -1, t[a].velocity = new C(0, 0), t[a].force = new C(0, 0);
    }
  }
};
var hs = class {
  constructor() {
    __publicField(this, "gravity");
    __publicField(this, "wind");
    this.gravity = new C(0, 0), this.wind = new C(0, 0);
  }
};
var gs = class {
  constructor() {
    __publicField(this, "outputs");
    this.outputs = new x(0);
  }
};
function ia(s) {
  let t = 0;
  return s > 0 ? t = 1 : s < 0 && (t = -1), t;
}
function sa(s, t, e, i, r, a, o, n, l, u) {
  s.x += Ie(e, i, r, a, o.minimum, o.maximum, o.defalut, l) * u;
}
function ra(s, t, e, i, r, a, o, n, l, u) {
  s.y += Ie(e, i, r, a, o.minimum, o.maximum, o.defalut, l) * u;
}
function aa(s, t, e, i, r, a, o, n, l, u) {
  t.angle += Ie(e, i, r, a, n.minimum, n.maximum, n.defalut, l) * u;
}
function na(s, t, e, i, r) {
  let a = s.x;
  return i && (a *= -1), a;
}
function oa(s, t, e, i, r) {
  let a = s.y;
  return i && (a *= -1), a;
}
function la(s, t, e, i, r) {
  let a;
  return e >= 2 ? r = t[e - 1].position.substract(t[e - 2].position) : r = r.multiplyByScaler(-1), a = v.directionToRadian(r, s), i && (a *= -1), a;
}
function ua(s, t) {
  const e = v.max(s, t), i = v.min(s, t);
  return v.abs(e - i);
}
function ha(s, t) {
  return v.min(s, t) + ua(s, t) / 2;
}
function ga(s, t) {
  return JSON.parse(JSON.stringify(s.x));
}
function ca(s, t) {
  return JSON.parse(JSON.stringify(s.y));
}
function da(s, t) {
  return JSON.parse(JSON.stringify(t));
}
function _a2(s, t, e, i, r, a, o, n) {
  let l, u, h, m, d = new C(0, 0), g = new C(0, 0), c = new C(0, 0), p = new C(0, 0);
  s[0].position = new C(e.x, e.y), l = v.degreesToRadian(i), m = v.radianToDirection(l), m.normalize();
  for (let _ = 1; _ < t; ++_)
    s[_].force = m.multiplyByScaler(s[_].acceleration).add(r), s[_].lastPosition = new C(s[_].position.x, s[_].position.y), u = s[_].delay * o * 30, d = s[_].position.substract(s[_ - 1].position), h = v.directionToRadian(s[_].lastGravity, m) / n, d.x = v.cos(h) * d.x - d.y * v.sin(h), d.y = v.sin(h) * d.x + d.y * v.cos(h), s[_].position = s[_ - 1].position.add(d), g = s[_].velocity.multiplyByScaler(u), c = s[_].force.multiplyByScaler(u).multiplyByScaler(u), s[_].position = s[_].position.add(g).add(c), p = s[_].position.substract(s[_ - 1].position), p.normalize(), s[_].position = s[_ - 1].position.add(p.multiplyByScaler(s[_].radius)), v.abs(s[_].position.x) < a && (s[_].position.x = 0), u != 0 && (s[_].velocity = s[_].position.substract(s[_].lastPosition), s[_].velocity = s[_].velocity.divisionByScalar(u), s[_].velocity = s[_].velocity.multiplyByScaler(s[_].mobility)), s[_].force = new C(0, 0), s[_].lastGravity = new C(m.x, m.y);
}
function ma(s, t, e, i, r, a) {
  let o, n, l = new C(0, 0);
  s[0].position = new C(e.x, e.y), o = v.degreesToRadian(i), n = v.radianToDirection(o), n.normalize();
  for (let u = 1; u < t; ++u)
    s[u].force = n.multiplyByScaler(s[u].acceleration).add(r), s[u].lastPosition = new C(s[u].position.x, s[u].position.y), s[u].velocity = new C(0, 0), l = s[u].force, l.normalize(), l = l.multiplyByScaler(s[u].radius), s[u].position = s[u - 1].position.add(l), v.abs(s[u].position.x) < a && (s[u].position.x = 0), s[u].force = new C(0, 0), s[u].lastGravity = new C(n.x, n.y);
}
function be(s, t, e, i, r) {
  let a, o, n;
  a = r.getScale(r.translationScale, r.angleScale), o = i * a, o < t ? (o < r.valueBelowMinimum && (r.valueBelowMinimum = o), o = t) : o > e && (o > r.valueExceededMaximum && (r.valueExceededMaximum = o), o = e), n = r.weight / ve, n >= 1 || (o = s[0] * (1 - n) + o * n), s[0] = o;
}
function Ie(s, t, e, i, r, a, o, n) {
  let l = 0;
  const u = v.max(e, t);
  u < s && (s = u);
  const h = v.min(e, t);
  h > s && (s = h);
  const m = v.min(r, a), d = v.max(r, a), g = o, c = ha(h, u), p = s - c;
  switch (ia(p)) {
    case 1: {
      const _ = d - g, M = u - c;
      M != 0 && (l = p * (_ / M), l += g);
      break;
    }
    case -1: {
      const _ = m - g, M = h - c;
      M != 0 && (l = p * (_ / M), l += g);
      break;
    }
    case 0: {
      l = g;
      break;
    }
  }
  return n ? l : l * -1;
}
var cs;
((s) => {
  s.CubismPhysics = Ut, s.Options = hs;
})(cs || (cs = {}));
var ee = class {
  constructor(t, e, i, r) {
    __publicField(this, "x");
    __publicField(this, "y");
    __publicField(this, "width");
    __publicField(this, "height");
    this.x = t, this.y = e, this.width = i, this.height = r;
  }
  getCenterX() {
    return this.x + 0.5 * this.width;
  }
  getCenterY() {
    return this.y + 0.5 * this.height;
  }
  getRight() {
    return this.x + this.width;
  }
  getBottom() {
    return this.y + this.height;
  }
  setRect(t) {
    this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
  }
  expand(t, e) {
    this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2;
  }
};
var ds;
((s) => {
  s.csmRect = ee;
})(ds || (ds = {}));
var ie = 4;
var pa = 36;
var fa = 32;
var ya = 10;
var _t;
var et;
var se;
var Te = class {
  constructor() {
    __publicField(this, "_currentMaskRenderTexture");
    __publicField(this, "_maskRenderTextures");
    __publicField(this, "_maskColorBuffers");
    __publicField(this, "_currentFrameNo");
    __publicField(this, "_channelColors");
    __publicField(this, "_maskTexture");
    __publicField(this, "_clippingContextListForMask");
    __publicField(this, "_clippingContextListForDraw");
    __publicField(this, "_clippingMaskBufferSize");
    __publicField(this, "_renderTextureCount");
    __publicField(this, "_tmpMatrix");
    __publicField(this, "_tmpMatrixForMask");
    __publicField(this, "_tmpMatrixForDraw");
    __publicField(this, "_tmpBoundsOnModel");
    __publicField(this, "_clearedFrameBufferflags");
    __publicField(this, "gl");
    this._currentMaskRenderTexture = null, this._maskColorBuffers = null, this._currentFrameNo = 0, this._renderTextureCount = 0, this._clippingMaskBufferSize = 256, this._clippingContextListForMask = new x(), this._clippingContextListForDraw = new x(), this._channelColors = new x(), this._tmpBoundsOnModel = new ee(), this._tmpMatrix = new E(), this._tmpMatrixForMask = new E(), this._tmpMatrixForDraw = new E(), this._maskTexture = null;
    let t = new Z();
    t.R = 1, t.G = 0, t.B = 0, t.A = 0, this._channelColors.pushBack(t), t = new Z(), t.R = 0, t.G = 1, t.B = 0, t.A = 0, this._channelColors.pushBack(t), t = new Z(), t.R = 0, t.G = 0, t.B = 1, t.A = 0, this._channelColors.pushBack(t), t = new Z(), t.R = 0, t.G = 0, t.B = 0, t.A = 1, this._channelColors.pushBack(t);
  }
  getChannelFlagAsColor(t) {
    return this._channelColors.at(t);
  }
  getMaskRenderTexture() {
    if (this._maskTexture && this._maskTexture.textures != null)
      this._maskTexture.frameNo = this._currentFrameNo;
    else {
      this._maskRenderTextures != null && this._maskRenderTextures.clear(), this._maskRenderTextures = new x(), this._maskColorBuffers != null && this._maskColorBuffers.clear(), this._maskColorBuffers = new x();
      const t = this._clippingMaskBufferSize;
      for (let e = 0; e < this._renderTextureCount; e++)
        this._maskColorBuffers.pushBack(this.gl.createTexture()), this.gl.bindTexture(this.gl.TEXTURE_2D, this._maskColorBuffers.at(e)), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, t, t, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this._maskRenderTextures.pushBack(this.gl.createFramebuffer()), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTextures.at(e)), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._maskColorBuffers.at(e), 0);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, se), this._maskTexture = new _s(this._currentFrameNo, this._maskRenderTextures);
    }
    return this._maskTexture.textures;
  }
  setGL(t) {
    this.gl = t;
  }
  calcClippedDrawTotalBounds(t, e) {
    let i = Number.MAX_VALUE, r = Number.MAX_VALUE, a = Number.MIN_VALUE, o = Number.MIN_VALUE;
    const n = e._clippedDrawableIndexList.length;
    for (let l = 0; l < n; l++) {
      const u = e._clippedDrawableIndexList[l], h = t.getDrawableVertexCount(u), m = t.getDrawableVertices(u);
      let d = Number.MAX_VALUE, g = Number.MAX_VALUE, c = -Number.MAX_VALUE, p = -Number.MAX_VALUE;
      const _ = h * rt.vertexStep;
      for (let M = rt.vertexOffset; M < _; M += rt.vertexStep) {
        const P = m[M], y = m[M + 1];
        P < d && (d = P), P > c && (c = P), y < g && (g = y), y > p && (p = y);
      }
      if (d != Number.MAX_VALUE)
        if (d < i && (i = d), g < r && (r = g), c > a && (a = c), p > o && (o = p), i == Number.MAX_VALUE)
          e._allClippedDrawRect.x = 0, e._allClippedDrawRect.y = 0, e._allClippedDrawRect.width = 0, e._allClippedDrawRect.height = 0, e._isUsing = false;
        else {
          e._isUsing = true;
          const M = a - i, P = o - r;
          e._allClippedDrawRect.x = i, e._allClippedDrawRect.y = r, e._allClippedDrawRect.width = M, e._allClippedDrawRect.height = P;
        }
    }
  }
  release() {
    for (let t = 0; t < this._clippingContextListForMask.getSize(); t++)
      this._clippingContextListForMask.at(t) && (this._clippingContextListForMask.at(t).release(), this._clippingContextListForMask.set(t, void 0)), this._clippingContextListForMask.set(t, null);
    this._clippingContextListForMask = null;
    for (let t = 0; t < this._clippingContextListForDraw.getSize(); t++)
      this._clippingContextListForDraw.set(t, null);
    if (this._clippingContextListForDraw = null, this._maskTexture) {
      for (let t = 0; t < this._maskTexture.textures.getSize(); t++)
        this.gl.deleteFramebuffer(this._maskTexture.textures.at(t));
      this._maskTexture.textures.clear(), this._maskTexture.textures = null, this._maskTexture = null;
    }
    for (let t = 0; t < this._channelColors.getSize(); t++)
      this._channelColors.set(t, null);
    if (this._channelColors = null, this._maskColorBuffers != null) {
      for (let t = 0; t < this._maskColorBuffers.getSize(); t++)
        this.gl.deleteTexture(this._maskColorBuffers.at(t));
      this._maskColorBuffers.clear();
    }
    this._maskColorBuffers = null, this._maskRenderTextures != null && this._maskRenderTextures.clear(), this._maskRenderTextures = null, this._clearedFrameBufferflags != null && this._clearedFrameBufferflags.clear(), this._clearedFrameBufferflags = null;
  }
  initialize(t, e, i, r, a) {
    a % 1 != 0 && (st("The number of render textures must be specified as an integer. The decimal point is rounded down and corrected to an integer."), a = ~~a), a < 1 && st("The number of render textures must be an integer greater than or equal to 1. Set the number of render textures to 1."), this._renderTextureCount = a < 1 ? 1 : a, this._clearedFrameBufferflags = new x(this._renderTextureCount);
    for (let o = 0; o < e; o++) {
      if (r[o] <= 0) {
        this._clippingContextListForDraw.pushBack(null);
        continue;
      }
      let n = this.findSameClip(i[o], r[o]);
      n == null && (n = new ms(this, i[o], r[o]), this._clippingContextListForMask.pushBack(n)), n.addClippedDrawable(o), this._clippingContextListForDraw.pushBack(n);
    }
  }
  setupClippingContext(t, e) {
    this._currentFrameNo++;
    let i = 0;
    for (let r = 0; r < this._clippingContextListForMask.getSize(); r++) {
      const a = this._clippingContextListForMask.at(r);
      this.calcClippedDrawTotalBounds(t, a), a._isUsing && i++;
    }
    if (i > 0) {
      this.setupLayoutBounds(e.isUsingHighPrecisionMask() ? 0 : i), e.isUsingHighPrecisionMask() || (this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize), this._currentMaskRenderTexture = this.getMaskRenderTexture().at(0), e.preDraw(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._currentMaskRenderTexture)), this._clearedFrameBufferflags.getSize() != this._renderTextureCount && (this._clearedFrameBufferflags.clear(), this._clearedFrameBufferflags = new x(this._renderTextureCount));
      for (let r = 0; r < this._clearedFrameBufferflags.getSize(); r++)
        this._clearedFrameBufferflags[r] = false;
      for (let r = 0; r < this._clippingContextListForMask.getSize(); r++) {
        const a = this._clippingContextListForMask.at(r), o = a._allClippedDrawRect, n = a._layoutBounds, l = 0.05;
        let u = 0, h = 0;
        const m = this.getMaskRenderTexture().at(a._bufferIndex);
        if (this._currentMaskRenderTexture != m && !e.isUsingHighPrecisionMask() && (this._currentMaskRenderTexture = m, e.preDraw(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._currentMaskRenderTexture)), e.isUsingHighPrecisionMask()) {
          const d = t.getPixelsPerUnit(), g = a.getClippingManager()._clippingMaskBufferSize, c = n.width * g, p = n.height * g;
          this._tmpBoundsOnModel.setRect(o), this._tmpBoundsOnModel.width * d > c ? (this._tmpBoundsOnModel.expand(o.width * l, 0), u = n.width / this._tmpBoundsOnModel.width) : u = d / c, this._tmpBoundsOnModel.height * d > p ? (this._tmpBoundsOnModel.expand(0, o.height * l), h = n.height / this._tmpBoundsOnModel.height) : h = d / p;
        } else
          this._tmpBoundsOnModel.setRect(o), this._tmpBoundsOnModel.expand(o.width * l, o.height * l), u = n.width / this._tmpBoundsOnModel.width, h = n.height / this._tmpBoundsOnModel.height;
        if (this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(-1, -1), this._tmpMatrix.scaleRelative(2, 2), this._tmpMatrix.translateRelative(n.x, n.y), this._tmpMatrix.scaleRelative(u, h), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray()), this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(n.x, n.y), this._tmpMatrix.scaleRelative(u, h), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray()), a._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), a._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray()), !e.isUsingHighPrecisionMask()) {
          const d = a._clippingIdCount;
          for (let g = 0; g < d; g++) {
            const c = a._clippingIdList[g];
            t.getDrawableDynamicFlagVertexPositionsDidChange(c) && (e.setIsCulling(t.getDrawableCulling(c) != false), this._clearedFrameBufferflags[a._bufferIndex] || (this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this._clearedFrameBufferflags[a._bufferIndex] = true), e.setClippingContextBufferForMask(a), e.drawMesh(t.getDrawableTextureIndex(c), t.getDrawableVertexIndexCount(c), t.getDrawableVertexCount(c), t.getDrawableVertexIndices(c), t.getDrawableVertices(c), t.getDrawableVertexUvs(c), t.getMultiplyColor(c), t.getScreenColor(c), t.getDrawableOpacity(c), G.CubismBlendMode_Normal, false));
          }
        }
      }
      e.isUsingHighPrecisionMask() || (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, se), e.setClippingContextBufferForMask(null), this.gl.viewport(et[0], et[1], et[2], et[3]));
    }
  }
  findSameClip(t, e) {
    for (let i = 0; i < this._clippingContextListForMask.getSize(); i++) {
      const r = this._clippingContextListForMask.at(i), a = r._clippingIdCount;
      if (a != e)
        continue;
      let o = 0;
      for (let n = 0; n < a; n++) {
        const l = r._clippingIdList[n];
        for (let u = 0; u < a; u++)
          if (t[u] == l) {
            o++;
            break;
          }
      }
      if (o == a)
        return r;
    }
    return null;
  }
  setupLayoutBounds(t) {
    const e = this._renderTextureCount <= 1 ? pa : fa * this._renderTextureCount;
    if (t <= 0 || t > e) {
      t > e && k(`not supported mask count : {0}
[Details] render texture count : {1}, mask count : {2}`, t - e, this._renderTextureCount, t);
      for (let u = 0; u < this._clippingContextListForMask.getSize(); u++) {
        const h = this._clippingContextListForMask.at(u);
        h._layoutChannelNo = 0, h._layoutBounds.x = 0, h._layoutBounds.y = 0, h._layoutBounds.width = 1, h._layoutBounds.height = 1, h._bufferIndex = 0;
      }
      return;
    }
    const i = this._renderTextureCount <= 1 ? 9 : 8;
    let r = t / this._renderTextureCount, a = t % this._renderTextureCount;
    r = ~~r, a = ~~a;
    let o = r / ie, n = r % ie;
    o = ~~o, n = ~~n;
    let l = 0;
    for (let u = 0; u < this._renderTextureCount; u++)
      for (let h = 0; h < ie; h++) {
        let m = o + (h < n ? 1 : 0);
        const d = n + 1 >= ie ? 0 : n + 1;
        if (m < i && h == d && (m += u < a ? 1 : 0), m != 0)
          if (m == 1) {
            const g = this._clippingContextListForMask.at(l++);
            g._layoutChannelNo = h, g._layoutBounds.x = 0, g._layoutBounds.y = 0, g._layoutBounds.width = 1, g._layoutBounds.height = 1, g._bufferIndex = u;
          } else if (m == 2)
            for (let g = 0; g < m; g++) {
              let c = g % 2;
              c = ~~c;
              const p = this._clippingContextListForMask.at(l++);
              p._layoutChannelNo = h, p._layoutBounds.x = c * 0.5, p._layoutBounds.y = 0, p._layoutBounds.width = 0.5, p._layoutBounds.height = 1, p._bufferIndex = u;
            }
          else if (m <= 4)
            for (let g = 0; g < m; g++) {
              let c = g % 2, p = g / 2;
              c = ~~c, p = ~~p;
              const _ = this._clippingContextListForMask.at(l++);
              _._layoutChannelNo = h, _._layoutBounds.x = c * 0.5, _._layoutBounds.y = p * 0.5, _._layoutBounds.width = 0.5, _._layoutBounds.height = 0.5, _._bufferIndex = u;
            }
          else if (m <= i)
            for (let g = 0; g < m; g++) {
              let c = g % 3, p = g / 3;
              c = ~~c, p = ~~p;
              const _ = this._clippingContextListForMask.at(l++);
              _._layoutChannelNo = h, _._layoutBounds.x = c / 3, _._layoutBounds.y = p / 3, _._layoutBounds.width = 1 / 3, _._layoutBounds.height = 1 / 3, _._bufferIndex = u;
            }
          else {
            k(`not supported mask count : {0}
[Details] render texture count : {1}, mask count : {2}`, t - e, this._renderTextureCount, t);
            for (let g = 0; g < m; g++) {
              const c = this._clippingContextListForMask.at(l++);
              c._layoutChannelNo = 0, c._layoutBounds.x = 0, c._layoutBounds.y = 0, c._layoutBounds.width = 1, c._layoutBounds.height = 1, c._bufferIndex = 0;
            }
          }
      }
  }
  getColorBuffer() {
    return this._maskColorBuffers;
  }
  getClippingContextListForDraw() {
    return this._clippingContextListForDraw;
  }
  getClippingMaskCount() {
    return this._clippingContextListForMask.getSize();
  }
  setClippingMaskBufferSize(t) {
    this._clippingMaskBufferSize = t;
  }
  getClippingMaskBufferSize() {
    return this._clippingMaskBufferSize;
  }
  getRenderTextureCount() {
    return this._renderTextureCount;
  }
};
var _s = class {
  constructor(t, e) {
    __publicField(this, "frameNo");
    __publicField(this, "textures");
    this.frameNo = t, this.textures = e;
  }
};
var ms = class {
  constructor(t, e, i) {
    __publicField(this, "_isUsing");
    __publicField(this, "_clippingIdList");
    __publicField(this, "_clippingIdCount");
    __publicField(this, "_layoutChannelNo");
    __publicField(this, "_layoutBounds");
    __publicField(this, "_allClippedDrawRect");
    __publicField(this, "_matrixForMask");
    __publicField(this, "_matrixForDraw");
    __publicField(this, "_clippedDrawableIndexList");
    __publicField(this, "_bufferIndex");
    __publicField(this, "_owner");
    this._owner = t, this._clippingIdList = e, this._clippingIdCount = i, this._allClippedDrawRect = new ee(), this._layoutBounds = new ee(), this._clippedDrawableIndexList = [], this._matrixForMask = new E(), this._matrixForDraw = new E(), this._bufferIndex = 0;
  }
  release() {
    this._layoutBounds != null && (this._layoutBounds = null), this._allClippedDrawRect != null && (this._allClippedDrawRect = null), this._clippedDrawableIndexList != null && (this._clippedDrawableIndexList = null);
  }
  addClippedDrawable(t) {
    this._clippedDrawableIndexList.push(t);
  }
  getClippingManager() {
    return this._owner;
  }
  setGl(t) {
    this._owner.setGL(t);
  }
};
var Sa = class {
  constructor() {
    __publicField(this, "_lastArrayBufferBinding");
    __publicField(this, "_lastElementArrayBufferBinding");
    __publicField(this, "_lastProgram");
    __publicField(this, "_lastActiveTexture");
    __publicField(this, "_lastTexture0Binding2D");
    __publicField(this, "_lastTexture1Binding2D");
    __publicField(this, "_lastVertexAttribArrayEnabled");
    __publicField(this, "_lastScissorTest");
    __publicField(this, "_lastBlend");
    __publicField(this, "_lastStencilTest");
    __publicField(this, "_lastDepthTest");
    __publicField(this, "_lastCullFace");
    __publicField(this, "_lastFrontFace");
    __publicField(this, "_lastColorMask");
    __publicField(this, "_lastBlending");
    __publicField(this, "_lastFBO");
    __publicField(this, "_lastViewport");
    __publicField(this, "gl");
    this._lastVertexAttribArrayEnabled = new Array(4), this._lastColorMask = new Array(4), this._lastBlending = new Array(4), this._lastViewport = new Array(4);
  }
  setGlEnable(t, e) {
    e ? this.gl.enable(t) : this.gl.disable(t);
  }
  setGlEnableVertexAttribArray(t, e) {
    e ? this.gl.enableVertexAttribArray(t) : this.gl.disableVertexAttribArray(t);
  }
  save() {
    if (this.gl == null) {
      k(`'gl' is null. WebGLRenderingContext is required.
Please call 'CubimRenderer_WebGL.startUp' function.`);
      return;
    }
    this._lastArrayBufferBinding = this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING), this._lastElementArrayBufferBinding = this.gl.getParameter(this.gl.ELEMENT_ARRAY_BUFFER_BINDING), this._lastProgram = this.gl.getParameter(this.gl.CURRENT_PROGRAM), this._lastActiveTexture = this.gl.getParameter(this.gl.ACTIVE_TEXTURE), this.gl.activeTexture(this.gl.TEXTURE1), this._lastTexture1Binding2D = this.gl.getParameter(this.gl.TEXTURE_BINDING_2D), this.gl.activeTexture(this.gl.TEXTURE0), this._lastTexture0Binding2D = this.gl.getParameter(this.gl.TEXTURE_BINDING_2D), this._lastVertexAttribArrayEnabled[0] = this.gl.getVertexAttrib(0, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastVertexAttribArrayEnabled[1] = this.gl.getVertexAttrib(1, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastVertexAttribArrayEnabled[2] = this.gl.getVertexAttrib(2, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastVertexAttribArrayEnabled[3] = this.gl.getVertexAttrib(3, this.gl.VERTEX_ATTRIB_ARRAY_ENABLED), this._lastScissorTest = this.gl.isEnabled(this.gl.SCISSOR_TEST), this._lastStencilTest = this.gl.isEnabled(this.gl.STENCIL_TEST), this._lastDepthTest = this.gl.isEnabled(this.gl.DEPTH_TEST), this._lastCullFace = this.gl.isEnabled(this.gl.CULL_FACE), this._lastBlend = this.gl.isEnabled(this.gl.BLEND), this._lastFrontFace = this.gl.getParameter(this.gl.FRONT_FACE), this._lastColorMask = this.gl.getParameter(this.gl.COLOR_WRITEMASK), this._lastBlending[0] = this.gl.getParameter(this.gl.BLEND_SRC_RGB), this._lastBlending[1] = this.gl.getParameter(this.gl.BLEND_DST_RGB), this._lastBlending[2] = this.gl.getParameter(this.gl.BLEND_SRC_ALPHA), this._lastBlending[3] = this.gl.getParameter(this.gl.BLEND_DST_ALPHA), this._lastFBO = this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING), this._lastViewport = this.gl.getParameter(this.gl.VIEWPORT);
  }
  restore() {
    if (this.gl == null) {
      k(`'gl' is null. WebGLRenderingContext is required.
Please call 'CubimRenderer_WebGL.startUp' function.`);
      return;
    }
    this.gl.useProgram(this._lastProgram), this.setGlEnableVertexAttribArray(0, this._lastVertexAttribArrayEnabled[0]), this.setGlEnableVertexAttribArray(1, this._lastVertexAttribArrayEnabled[1]), this.setGlEnableVertexAttribArray(2, this._lastVertexAttribArrayEnabled[2]), this.setGlEnableVertexAttribArray(3, this._lastVertexAttribArrayEnabled[3]), this.setGlEnable(this.gl.SCISSOR_TEST, this._lastScissorTest), this.setGlEnable(this.gl.STENCIL_TEST, this._lastStencilTest), this.setGlEnable(this.gl.DEPTH_TEST, this._lastDepthTest), this.setGlEnable(this.gl.CULL_FACE, this._lastCullFace), this.setGlEnable(this.gl.BLEND, this._lastBlend), this.gl.frontFace(this._lastFrontFace), this.gl.colorMask(this._lastColorMask[0], this._lastColorMask[1], this._lastColorMask[2], this._lastColorMask[3]), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this._lastArrayBufferBinding), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this._lastElementArrayBufferBinding), this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, this._lastTexture1Binding2D), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, this._lastTexture0Binding2D), this.gl.activeTexture(this._lastActiveTexture), this.gl.blendFuncSeparate(this._lastBlending[0], this._lastBlending[1], this._lastBlending[2], this._lastBlending[3]);
  }
  setGl(t) {
    this.gl = t;
  }
};
var Tt = class {
  constructor() {
    __publicField(this, "_shaderSets");
    __publicField(this, "gl");
    this._shaderSets = new x();
  }
  static getInstance() {
    return _t == null && (_t = new Tt()), _t;
  }
  static deleteInstance() {
    _t && (_t.release(), _t = null);
  }
  release() {
    this.releaseShaderProgram();
  }
  setupShaderProgram(t, e, i, r, a, o, n, l, u, h, m, d, g, c, p) {
    g || k("NoPremultipliedAlpha is not allowed"), this._shaderSets.getSize() == 0 && this.generateShaders();
    let _, M, P, y;
    if (t.getClippingContextBufferForMask() != null) {
      const f = this._shaderSets.at(0);
      this.gl.useProgram(f.shaderProgram), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(f.samplerTexture0Location, 0), n.vertex == null && (n.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, r, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(f.attributePositionLocation), this.gl.vertexAttribPointer(f.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0), n.uv == null && (n.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(f.attributeTexCoordLocation), this.gl.vertexAttribPointer(f.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
      const V = t.getClippingContextBufferForMask()._layoutChannelNo, b = t.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor(V);
      this.gl.uniform4f(f.uniformChannelFlagLocation, b.R, b.G, b.B, b.A), this.gl.uniformMatrix4fv(f.uniformClipMatrixLocation, false, t.getClippingContextBufferForMask()._matrixForMask.getArray());
      const D = t.getClippingContextBufferForMask()._layoutBounds;
      this.gl.uniform4f(f.uniformBaseColorLocation, D.x * 2 - 1, D.y * 2 - 1, D.getRight() * 2 - 1, D.getBottom() * 2 - 1), this.gl.uniform4f(f.uniformMultiplyColorLocation, m.R, m.G, m.B, m.A), this.gl.uniform4f(f.uniformScreenColorLocation, d.R, d.G, d.B, d.A), _ = this.gl.ZERO, M = this.gl.ONE_MINUS_SRC_COLOR, P = this.gl.ZERO, y = this.gl.ONE_MINUS_SRC_ALPHA;
    } else {
      const f = t.getClippingContextBufferForDraw() != null, V = f ? p ? 2 : 1 : 0;
      let b = new Ve();
      switch (u) {
        case G.CubismBlendMode_Normal:
        default:
          b = this._shaderSets.at(1 + V), _ = this.gl.ONE, M = this.gl.ONE_MINUS_SRC_ALPHA, P = this.gl.ONE, y = this.gl.ONE_MINUS_SRC_ALPHA;
          break;
        case G.CubismBlendMode_Additive:
          b = this._shaderSets.at(4 + V), _ = this.gl.ONE, M = this.gl.ONE, P = this.gl.ZERO, y = this.gl.ONE;
          break;
        case G.CubismBlendMode_Multiplicative:
          b = this._shaderSets.at(7 + V), _ = this.gl.DST_COLOR, M = this.gl.ONE_MINUS_SRC_ALPHA, P = this.gl.ZERO, y = this.gl.ONE;
          break;
      }
      if (this.gl.useProgram(b.shaderProgram), n.vertex == null && (n.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, r, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(b.attributePositionLocation), this.gl.vertexAttribPointer(b.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0), n.uv == null && (n.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(b.attributeTexCoordLocation), this.gl.vertexAttribPointer(b.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0), f) {
        this.gl.activeTexture(this.gl.TEXTURE1);
        const D = t.getClippingContextBufferForDraw().getClippingManager().getColorBuffer().at(t.getClippingContextBufferForDraw()._bufferIndex);
        this.gl.bindTexture(this.gl.TEXTURE_2D, D), this.gl.uniform1i(b.samplerTexture1Location, 1), this.gl.uniformMatrix4fv(b.uniformClipMatrixLocation, false, t.getClippingContextBufferForDraw()._matrixForDraw.getArray());
        const it = t.getClippingContextBufferForDraw()._layoutChannelNo, J = t.getClippingContextBufferForDraw().getClippingManager().getChannelFlagAsColor(it);
        this.gl.uniform4f(b.uniformChannelFlagLocation, J.R, J.G, J.B, J.A);
      }
      this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(b.samplerTexture0Location, 0), this.gl.uniformMatrix4fv(b.uniformMatrixLocation, false, c.getArray()), this.gl.uniform4f(b.uniformBaseColorLocation, h.R, h.G, h.B, h.A), this.gl.uniform4f(b.uniformMultiplyColorLocation, m.R, m.G, m.B, m.A), this.gl.uniform4f(b.uniformScreenColorLocation, d.R, d.G, d.B, d.A);
    }
    n.index == null && (n.index = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, n.index), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, a, this.gl.DYNAMIC_DRAW), this.gl.blendFuncSeparate(_, M, P, y);
  }
  releaseShaderProgram() {
    for (let t = 0; t < this._shaderSets.getSize(); t++)
      this.gl.deleteProgram(this._shaderSets.at(t).shaderProgram), this._shaderSets.at(t).shaderProgram = 0, this._shaderSets.set(t, void 0), this._shaderSets.set(t, null);
  }
  generateShaders() {
    for (let t = 0; t < ya; t++)
      this._shaderSets.pushBack(new Ve());
    this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(xa, Ca), this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(Ba, Ma), this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(fs, Pa), this._shaderSets.at(3).shaderProgram = this.loadShaderProgram(fs, va), this._shaderSets.at(4).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(5).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(6).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(7).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(8).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(9).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_position"), this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_texCoord"), this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "s_texture0"), this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_clipMatrix"), this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_channelFlag"), this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_baseColor"), this._shaderSets.at(0).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_multiplyColor"), this._shaderSets.at(0).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_screenColor"), this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_position"), this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_texCoord"), this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "s_texture0"), this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_matrix"), this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_baseColor"), this._shaderSets.at(1).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_multiplyColor"), this._shaderSets.at(1).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_screenColor"), this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_position"), this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_texCoord"), this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture0"), this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture1"), this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_matrix"), this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_clipMatrix"), this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_channelFlag"), this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_baseColor"), this._shaderSets.at(2).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_multiplyColor"), this._shaderSets.at(2).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_screenColor"), this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_position"), this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_texCoord"), this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture0"), this._shaderSets.at(3).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture1"), this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_matrix"), this._shaderSets.at(3).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_clipMatrix"), this._shaderSets.at(3).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_channelFlag"), this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_baseColor"), this._shaderSets.at(3).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_multiplyColor"), this._shaderSets.at(3).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_screenColor"), this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_position"), this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_texCoord"), this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture0"), this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_matrix"), this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_baseColor"), this._shaderSets.at(4).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_multiplyColor"), this._shaderSets.at(4).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_screenColor"), this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_position"), this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_texCoord"), this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture0"), this._shaderSets.at(5).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture1"), this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_matrix"), this._shaderSets.at(5).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_clipMatrix"), this._shaderSets.at(5).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_channelFlag"), this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_baseColor"), this._shaderSets.at(5).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_multiplyColor"), this._shaderSets.at(5).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_screenColor"), this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_position"), this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_texCoord"), this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture0"), this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture1"), this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_matrix"), this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_clipMatrix"), this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_channelFlag"), this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_baseColor"), this._shaderSets.at(6).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_multiplyColor"), this._shaderSets.at(6).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_screenColor"), this._shaderSets.at(7).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_position"), this._shaderSets.at(7).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_texCoord"), this._shaderSets.at(7).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "s_texture0"), this._shaderSets.at(7).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_matrix"), this._shaderSets.at(7).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_baseColor"), this._shaderSets.at(7).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_multiplyColor"), this._shaderSets.at(7).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_screenColor"), this._shaderSets.at(8).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_position"), this._shaderSets.at(8).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_texCoord"), this._shaderSets.at(8).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture0"), this._shaderSets.at(8).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture1"), this._shaderSets.at(8).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_matrix"), this._shaderSets.at(8).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_clipMatrix"), this._shaderSets.at(8).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_channelFlag"), this._shaderSets.at(8).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_baseColor"), this._shaderSets.at(8).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_multiplyColor"), this._shaderSets.at(8).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_screenColor"), this._shaderSets.at(9).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_position"), this._shaderSets.at(9).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_texCoord"), this._shaderSets.at(9).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture0"), this._shaderSets.at(9).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture1"), this._shaderSets.at(9).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_matrix"), this._shaderSets.at(9).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_clipMatrix"), this._shaderSets.at(9).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_channelFlag"), this._shaderSets.at(9).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_baseColor"), this._shaderSets.at(9).uniformMultiplyColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_multiplyColor"), this._shaderSets.at(9).uniformScreenColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_screenColor");
  }
  loadShaderProgram(t, e) {
    let i = this.gl.createProgram(), r = this.compileShaderSource(this.gl.VERTEX_SHADER, t);
    if (!r)
      return k("Vertex shader compile error!"), 0;
    let a = this.compileShaderSource(this.gl.FRAGMENT_SHADER, e);
    return a ? (this.gl.attachShader(i, r), this.gl.attachShader(i, a), this.gl.linkProgram(i), this.gl.getProgramParameter(i, this.gl.LINK_STATUS) ? (this.gl.deleteShader(r), this.gl.deleteShader(a), i) : (k("Failed to link program: {0}", i), this.gl.deleteShader(r), r = 0, this.gl.deleteShader(a), a = 0, i && (this.gl.deleteProgram(i), i = 0), 0)) : (k("Vertex shader compile error!"), 0);
  }
  compileShaderSource(t, e) {
    const i = e, r = this.gl.createShader(t);
    if (this.gl.shaderSource(r, i), this.gl.compileShader(r), !r) {
      const o = this.gl.getShaderInfoLog(r);
      k("Shader compile log: {0} ", o);
    }
    return this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (this.gl.deleteShader(r), null);
  }
  setGl(t) {
    this.gl = t;
  }
};
var Ve = class {
  constructor() {
    __publicField(this, "shaderProgram");
    __publicField(this, "attributePositionLocation");
    __publicField(this, "attributeTexCoordLocation");
    __publicField(this, "uniformMatrixLocation");
    __publicField(this, "uniformClipMatrixLocation");
    __publicField(this, "samplerTexture0Location");
    __publicField(this, "samplerTexture1Location");
    __publicField(this, "uniformBaseColorLocation");
    __publicField(this, "uniformChannelFlagLocation");
    __publicField(this, "uniformMultiplyColorLocation");
    __publicField(this, "uniformScreenColorLocation");
  }
};
var ps = ((s) => (s[s.ShaderNames_SetupMask = 0] = "ShaderNames_SetupMask", s[s.ShaderNames_NormalPremultipliedAlpha = 1] = "ShaderNames_NormalPremultipliedAlpha", s[s.ShaderNames_NormalMaskedPremultipliedAlpha = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha", s[s.ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha", s[s.ShaderNames_AddPremultipliedAlpha = 4] = "ShaderNames_AddPremultipliedAlpha", s[s.ShaderNames_AddMaskedPremultipliedAlpha = 5] = "ShaderNames_AddMaskedPremultipliedAlpha", s[s.ShaderNames_AddMaskedPremultipliedAlphaInverted = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted", s[s.ShaderNames_MultPremultipliedAlpha = 7] = "ShaderNames_MultPremultipliedAlpha", s[s.ShaderNames_MultMaskedPremultipliedAlpha = 8] = "ShaderNames_MultMaskedPremultipliedAlpha", s[s.ShaderNames_MultMaskedPremultipliedAlphaInverted = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted", s))(ps || {});
var xa = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_myPos;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_clipMatrix * a_position;   v_myPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}";
var Ca = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_myPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;void main(){   float isInside =        step(u_baseColor.x, v_myPos.x/v_myPos.w)       * step(u_baseColor.y, v_myPos.y/v_myPos.w)       * step(v_myPos.x/v_myPos.w, u_baseColor.z)       * step(v_myPos.y/v_myPos.w, u_baseColor.w);   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;}";
var Ba = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;uniform mat4       u_matrix;void main(){   gl_Position = u_matrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}";
var fs = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform mat4       u_matrix;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_matrix * a_position;   v_clipPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}";
var Ma = "precision mediump float;varying vec2       v_texCoord;uniform vec4       u_baseColor;uniform sampler2D  s_texture0;uniform vec4       u_multiplyColor;uniform vec4       u_screenColor;void main(){   vec4 texColor = texture2D(s_texture0, v_texCoord);   texColor.rgb = texColor.rgb * u_multiplyColor.rgb;   texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);   vec4 color = texColor * u_baseColor;   gl_FragColor = vec4(color.rgb, color.a);}";
var Pa = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_multiplyColor;uniform vec4       u_screenColor;void main(){   vec4 texColor = texture2D(s_texture0, v_texCoord);   texColor.rgb = texColor.rgb * u_multiplyColor.rgb;   texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);   vec4 col_formask = texColor * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * maskVal;   gl_FragColor = col_formask;}";
var va = "precision mediump float;varying vec2      v_texCoord;varying vec4      v_clipPos;uniform sampler2D s_texture0;uniform sampler2D s_texture1;uniform vec4      u_channelFlag;uniform vec4      u_baseColor;uniform vec4      u_multiplyColor;uniform vec4      u_screenColor;void main(){   vec4 texColor = texture2D(s_texture0, v_texCoord);   texColor.rgb = texColor.rgb * u_multiplyColor.rgb;   texColor.rgb = (texColor.rgb + u_screenColor.rgb * texColor.a) - (texColor.rgb * u_screenColor.rgb);   vec4 col_formask = texColor * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * (1.0 - maskVal);   gl_FragColor = col_formask;}";
var we = class extends Gt {
  constructor() {
    super();
    __publicField(this, "_textures");
    __publicField(this, "_sortedDrawableIndexList");
    __publicField(this, "_clippingManager");
    __publicField(this, "_clippingContextBufferForMask");
    __publicField(this, "_clippingContextBufferForDraw");
    __publicField(this, "_rendererProfile");
    __publicField(this, "firstDraw");
    __publicField(this, "_bufferData");
    __publicField(this, "_extension");
    __publicField(this, "gl");
    this._clippingContextBufferForMask = null, this._clippingContextBufferForDraw = null, this._rendererProfile = new Sa(), this.firstDraw = true, this._textures = new O(), this._sortedDrawableIndexList = new x(), this._bufferData = { vertex: WebGLBuffer = null, uv: WebGLBuffer = null, index: WebGLBuffer = null }, this._textures.prepareCapacity(32, true);
  }
  initialize(t, e = 1) {
    t.isUsingMasking() && (this._clippingManager = new Te(), this._clippingManager.initialize(t, t.getDrawableCount(), t.getDrawableMasks(), t.getDrawableMaskCounts(), e)), this._sortedDrawableIndexList.resize(t.getDrawableCount(), 0), super.initialize(t);
  }
  bindTexture(t, e) {
    this._textures.setValue(t, e);
  }
  getBindedTextures() {
    return this._textures;
  }
  setClippingMaskBufferSize(t) {
    if (!this._model.isUsingMasking())
      return;
    const e = this._clippingManager.getRenderTextureCount();
    this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null, this._clippingManager = new Te(), this._clippingManager.setClippingMaskBufferSize(t), this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts(), e);
  }
  getClippingMaskBufferSize() {
    return this._model.isUsingMasking() ? this._clippingManager.getClippingMaskBufferSize() : -1;
  }
  getRenderTextureCount() {
    return this._model.isUsingMasking() ? this._clippingManager.getRenderTextureCount() : -1;
  }
  release() {
    this._clippingManager && (this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null), this.gl != null && (this.gl.deleteBuffer(this._bufferData.vertex), this._bufferData.vertex = null, this.gl.deleteBuffer(this._bufferData.uv), this._bufferData.uv = null, this.gl.deleteBuffer(this._bufferData.index), this._bufferData.index = null, this._bufferData = null, this._textures = null);
  }
  doDrawModel() {
    if (this.gl == null) {
      k(`'gl' is null. WebGLRenderingContext is required.
Please call 'CubimRenderer_WebGL.startUp' function.`);
      return;
    }
    this._clippingManager != null && (this.preDraw(), this._clippingManager.setupClippingContext(this.getModel(), this)), this.preDraw();
    const t = this.getModel().getDrawableCount(), e = this.getModel().getDrawableRenderOrders();
    for (let i = 0; i < t; ++i) {
      const r = e[i];
      this._sortedDrawableIndexList.set(r, i);
    }
    for (let i = 0; i < t; ++i) {
      const r = this._sortedDrawableIndexList.at(i);
      if (!this.getModel().getDrawableDynamicFlagIsVisible(r))
        continue;
      const a = this._clippingManager != null ? this._clippingManager.getClippingContextListForDraw().at(r) : null;
      if (a != null && this.isUsingHighPrecisionMask()) {
        a._isUsing && (this.gl.viewport(0, 0, this._clippingManager.getClippingMaskBufferSize(), this._clippingManager.getClippingMaskBufferSize()), this.preDraw(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, a.getClippingManager().getMaskRenderTexture().at(a._bufferIndex)), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT));
        {
          const o = a._clippingIdCount;
          for (let n = 0; n < o; n++) {
            const l = a._clippingIdList[n];
            this._model.getDrawableDynamicFlagVertexPositionsDidChange(l) && (this.setIsCulling(this._model.getDrawableCulling(l) != false), this.setClippingContextBufferForMask(a), this.drawMesh(this.getModel().getDrawableTextureIndex(l), this.getModel().getDrawableVertexIndexCount(l), this.getModel().getDrawableVertexCount(l), this.getModel().getDrawableVertexIndices(l), this.getModel().getDrawableVertices(l), this.getModel().getDrawableVertexUvs(l), this.getModel().getMultiplyColor(l), this.getModel().getScreenColor(l), this.getModel().getDrawableOpacity(l), G.CubismBlendMode_Normal, false));
          }
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, se), this.setClippingContextBufferForMask(null), this.gl.viewport(et[0], et[1], et[2], et[3]), this.preDraw();
      }
      this.setClippingContextBufferForDraw(a), this.setIsCulling(this.getModel().getDrawableCulling(r)), this.drawMesh(this.getModel().getDrawableTextureIndex(r), this.getModel().getDrawableVertexIndexCount(r), this.getModel().getDrawableVertexCount(r), this.getModel().getDrawableVertexIndices(r), this.getModel().getDrawableVertices(r), this.getModel().getDrawableVertexUvs(r), this.getModel().getMultiplyColor(r), this.getModel().getScreenColor(r), this.getModel().getDrawableOpacity(r), this.getModel().getDrawableBlendMode(r), this.getModel().getDrawableInvertedMaskBit(r));
    }
  }
  drawMesh(t, e, i, r, a, o, n, l, u, h, m) {
    this.isCulling() ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this.gl.frontFace(this.gl.CCW);
    const d = this.getModelColor();
    this.getClippingContextBufferForMask() == null && (d.A *= u, this.isPremultipliedAlpha() && (d.R *= d.A, d.G *= d.A, d.B *= d.A));
    let g;
    this._textures.getValue(t) != null ? g = this._textures.getValue(t) : g = null, Tt.getInstance().setupShaderProgram(this, g, i, a, r, o, this._bufferData, u, h, d, n, l, this.isPremultipliedAlpha(), this.getMvpMatrix(), m), this.gl.drawElements(this.gl.TRIANGLES, e, this.gl.UNSIGNED_SHORT, 0), this.gl.useProgram(null), this.setClippingContextBufferForDraw(null), this.setClippingContextBufferForMask(null);
  }
  saveProfile() {
    this._rendererProfile.save();
  }
  restoreProfile() {
    this._rendererProfile.restore();
  }
  static doStaticRelease() {
    Tt.deleteInstance();
  }
  setRenderState(t, e) {
    se = t, et = e;
  }
  preDraw() {
    if (this.firstDraw && (this.firstDraw = false), this.gl.disable(this.gl.SCISSOR_TEST), this.gl.disable(this.gl.STENCIL_TEST), this.gl.disable(this.gl.DEPTH_TEST), this.gl.frontFace(this.gl.CW), this.gl.enable(this.gl.BLEND), this.gl.colorMask(true, true, true, true), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null), this.getAnisotropy() > 0 && this._extension)
      for (let t = 0; t < this._textures.getSize(); ++t)
        this.gl.bindTexture(this.gl.TEXTURE_2D, this._textures.getValue(t)), this.gl.texParameterf(this.gl.TEXTURE_2D, this._extension.TEXTURE_MAX_ANISOTROPY_EXT, this.getAnisotropy());
  }
  setClippingContextBufferForMask(t) {
    this._clippingContextBufferForMask = t;
  }
  getClippingContextBufferForMask() {
    return this._clippingContextBufferForMask;
  }
  setClippingContextBufferForDraw(t) {
    this._clippingContextBufferForDraw = t;
  }
  getClippingContextBufferForDraw() {
    return this._clippingContextBufferForDraw;
  }
  startUp(t) {
    this.gl = t, this._clippingManager && this._clippingManager.setGL(t), Tt.getInstance().setGl(t), this._rendererProfile.setGl(t), this._extension = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
  }
};
Gt.staticRelease = () => {
  we.doStaticRelease();
};
var ys;
((s) => {
  s.CubismClippingContext = ms, s.CubismClippingManager_WebGL = Te, s.CubismRenderTextureResource = _s, s.CubismRenderer_WebGL = we, s.CubismShaderSet = Ve, s.CubismShader_WebGL = Tt, s.ShaderNames = ps;
})(ys || (ys = {}));
var Ss = class {
  constructor() {
    __publicField(this, "isOverwritten", false);
    __publicField(this, "Color", new Z());
  }
};
var xs = class {
  constructor(t = false, e = false) {
    __publicField(this, "isOverwritten");
    __publicField(this, "isCulling");
    t = this.isOverwritten, e = this.isCulling;
  }
};
var Cs = class {
  constructor(t) {
    __publicField(this, "_notExistPartOpacities");
    __publicField(this, "_notExistPartId");
    __publicField(this, "_notExistParameterValues");
    __publicField(this, "_notExistParameterId");
    __publicField(this, "_savedParameters");
    __publicField(this, "_isOverwrittenModelMultiplyColors");
    __publicField(this, "_isOverwrittenModelScreenColors");
    __publicField(this, "_userMultiplyColors");
    __publicField(this, "_userScreenColors");
    __publicField(this, "_model");
    __publicField(this, "_parameterValues");
    __publicField(this, "_parameterMaximumValues");
    __publicField(this, "_parameterMinimumValues");
    __publicField(this, "_partOpacities");
    __publicField(this, "_parameterIds");
    __publicField(this, "_partIds");
    __publicField(this, "_drawableIds");
    __publicField(this, "_isOverwrittenCullings");
    __publicField(this, "_userCullings");
    this._model = t, this._parameterValues = null, this._parameterMaximumValues = null, this._parameterMinimumValues = null, this._partOpacities = null, this._savedParameters = new x(), this._parameterIds = new x(), this._drawableIds = new x(), this._partIds = new x(), this._isOverwrittenModelMultiplyColors = false, this._isOverwrittenModelScreenColors = false, this._isOverwrittenCullings = false, this._userMultiplyColors = null, this._userScreenColors = null, this._notExistPartId = new O(), this._notExistParameterId = new O(), this._notExistParameterValues = new O(), this._notExistPartOpacities = new O();
  }
  update() {
    this._model.update(), this._model.drawables.resetDynamicFlags();
  }
  getPixelsPerUnit() {
    return this._model == null ? 0 : this._model.canvasinfo.PixelsPerUnit;
  }
  getCanvasWidth() {
    return this._model == null ? 0 : this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit;
  }
  getCanvasHeight() {
    return this._model == null ? 0 : this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit;
  }
  saveParameters() {
    const t = this._model.parameters.count, e = this._savedParameters.getSize();
    for (let i = 0; i < t; ++i)
      i < e ? this._savedParameters.set(i, this._parameterValues[i]) : this._savedParameters.pushBack(this._parameterValues[i]);
  }
  getMultiplyColor(t) {
    return this.getOverwriteFlagForModelMultiplyColors() || this.getOverwriteFlagForDrawableMultiplyColors(t) ? this._userMultiplyColors.at(t).Color : this.getDrawableMultiplyColor(t);
  }
  getScreenColor(t) {
    return this.getOverwriteFlagForModelScreenColors() || this.getOverwriteFlagForDrawableScreenColors(t) ? this._userScreenColors.at(t).Color : this.getDrawableScreenColor(t);
  }
  setMultiplyColorByTextureColor(t, e) {
    this.setMultiplyColorByRGBA(t, e.R, e.G, e.B, e.A);
  }
  setMultiplyColorByRGBA(t, e, i, r, a = 1) {
    this._userMultiplyColors.at(t).Color.R = e, this._userMultiplyColors.at(t).Color.G = i, this._userMultiplyColors.at(t).Color.B = r, this._userMultiplyColors.at(t).Color.A = a;
  }
  setScreenColorByTextureColor(t, e) {
    this.setScreenColorByRGBA(t, e.R, e.G, e.B, e.A);
  }
  setScreenColorByRGBA(t, e, i, r, a = 1) {
    this._userScreenColors.at(t).Color.R = e, this._userScreenColors.at(t).Color.G = i, this._userScreenColors.at(t).Color.B = r, this._userScreenColors.at(t).Color.A = a;
  }
  getOverwriteFlagForModelMultiplyColors() {
    return this._isOverwrittenModelMultiplyColors;
  }
  getOverwriteFlagForModelScreenColors() {
    return this._isOverwrittenModelScreenColors;
  }
  setOverwriteFlagForModelMultiplyColors(t) {
    this._isOverwrittenModelMultiplyColors = t;
  }
  setOverwriteFlagForModelScreenColors(t) {
    this._isOverwrittenModelScreenColors = t;
  }
  getOverwriteFlagForDrawableMultiplyColors(t) {
    return this._userMultiplyColors.at(t).isOverwritten;
  }
  getOverwriteFlagForDrawableScreenColors(t) {
    return this._userMultiplyColors.at(t).isOverwritten;
  }
  setOverwriteFlagForDrawableMultiplyColors(t, e) {
    this._userMultiplyColors.at(t).isOverwritten = e;
  }
  setOverwriteFlagForDrawableScreenColors(t, e) {
    this._userScreenColors.at(t).isOverwritten = e;
  }
  getDrawableCulling(t) {
    if (this.getOverwriteFlagForModelCullings() || this.getOverwriteFlagForDrawableCullings(t))
      return this._userCullings.at(t).isCulling;
    const e = this._model.drawables.constantFlags;
    return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t]);
  }
  setDrawableCulling(t, e) {
    this._userCullings.at(t).isCulling = e;
  }
  getOverwriteFlagForModelCullings() {
    return this._isOverwrittenCullings;
  }
  setOverwriteFlagForModelCullings(t) {
    this._isOverwrittenCullings = t;
  }
  getOverwriteFlagForDrawableCullings(t) {
    return this._userCullings.at(t).isOverwritten;
  }
  setOverwriteFlagForDrawableCullings(t, e) {
    this._userCullings.at(t).isOverwritten = e;
  }
  getModel() {
    return this._model;
  }
  getPartIndex(t) {
    let e;
    const i = this._model.parts.count;
    for (e = 0; e < i; ++e)
      if (t == this._partIds.at(e))
        return e;
    return this._notExistPartId.isExist(t) ? this._notExistPartId.getValue(t) : (e = i + this._notExistPartId.getSize(), this._notExistPartId.setValue(t, e), this._notExistPartOpacities.appendKey(e), e);
  }
  getPartCount() {
    return this._model.parts.count;
  }
  setPartOpacityByIndex(t, e) {
    if (this._notExistPartOpacities.isExist(t)) {
      this._notExistPartOpacities.setValue(t, e);
      return;
    }
    H(0 <= t && t < this.getPartCount()), this._partOpacities[t] = e;
  }
  setPartOpacityById(t, e) {
    const i = this.getPartIndex(t);
    i < 0 || this.setPartOpacityByIndex(i, e);
  }
  getPartOpacityByIndex(t) {
    return this._notExistPartOpacities.isExist(t) ? this._notExistPartOpacities.getValue(t) : (H(0 <= t && t < this.getPartCount()), this._partOpacities[t]);
  }
  getPartOpacityById(t) {
    const e = this.getPartIndex(t);
    return e < 0 ? 0 : this.getPartOpacityByIndex(e);
  }
  getParameterIndex(t) {
    let e;
    const i = this._model.parameters.count;
    for (e = 0; e < i; ++e)
      if (t == this._parameterIds.at(e))
        return e;
    return this._notExistParameterId.isExist(t) ? this._notExistParameterId.getValue(t) : (e = this._model.parameters.count + this._notExistParameterId.getSize(), this._notExistParameterId.setValue(t, e), this._notExistParameterValues.appendKey(e), e);
  }
  getParameterCount() {
    return this._model.parameters.count;
  }
  getParameterType(t) {
    return this._model.parameters.types[t];
  }
  getParameterMaximumValue(t) {
    return this._model.parameters.maximumValues[t];
  }
  getParameterMinimumValue(t) {
    return this._model.parameters.minimumValues[t];
  }
  getParameterDefaultValue(t) {
    return this._model.parameters.defaultValues[t];
  }
  getParameterValueByIndex(t) {
    return this._notExistParameterValues.isExist(t) ? this._notExistParameterValues.getValue(t) : (H(0 <= t && t < this.getParameterCount()), this._parameterValues[t]);
  }
  getParameterValueById(t) {
    const e = this.getParameterIndex(t);
    return this.getParameterValueByIndex(e);
  }
  setParameterValueByIndex(t, e, i = 1) {
    if (this._notExistParameterValues.isExist(t)) {
      this._notExistParameterValues.setValue(t, i == 1 ? e : this._notExistParameterValues.getValue(t) * (1 - i) + e * i);
      return;
    }
    H(0 <= t && t < this.getParameterCount()), this._model.parameters.maximumValues[t] < e && (e = this._model.parameters.maximumValues[t]), this._model.parameters.minimumValues[t] > e && (e = this._model.parameters.minimumValues[t]), this._parameterValues[t] = i == 1 ? e : this._parameterValues[t] = this._parameterValues[t] * (1 - i) + e * i;
  }
  setParameterValueById(t, e, i = 1) {
    const r = this.getParameterIndex(t);
    this.setParameterValueByIndex(r, e, i);
  }
  addParameterValueByIndex(t, e, i = 1) {
    this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) + e * i);
  }
  addParameterValueById(t, e, i = 1) {
    const r = this.getParameterIndex(t);
    this.addParameterValueByIndex(r, e, i);
  }
  multiplyParameterValueById(t, e, i = 1) {
    const r = this.getParameterIndex(t);
    this.multiplyParameterValueByIndex(r, e, i);
  }
  multiplyParameterValueByIndex(t, e, i = 1) {
    this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) * (1 + (e - 1) * i));
  }
  getDrawableIndex(t) {
    const e = this._model.drawables.count;
    for (let i = 0; i < e; ++i)
      if (this._drawableIds.at(i) == t)
        return i;
    return -1;
  }
  getDrawableCount() {
    return this._model.drawables.count;
  }
  getDrawableId(t) {
    const e = this._model.drawables.ids;
    return I.getIdManager().getId(e[t]);
  }
  getDrawableRenderOrders() {
    return this._model.drawables.renderOrders;
  }
  getDrawableTextureIndices(t) {
    return this.getDrawableTextureIndex(t);
  }
  getDrawableTextureIndex(t) {
    return this._model.drawables.textureIndices[t];
  }
  getDrawableDynamicFlagVertexPositionsDidChange(t) {
    const e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(e[t]);
  }
  getDrawableVertexIndexCount(t) {
    return this._model.drawables.indexCounts[t];
  }
  getDrawableVertexCount(t) {
    return this._model.drawables.vertexCounts[t];
  }
  getDrawableVertices(t) {
    return this.getDrawableVertexPositions(t);
  }
  getDrawableVertexIndices(t) {
    return this._model.drawables.indices[t];
  }
  getDrawableVertexPositions(t) {
    return this._model.drawables.vertexPositions[t];
  }
  getDrawableVertexUvs(t) {
    return this._model.drawables.vertexUvs[t];
  }
  getDrawableOpacity(t) {
    return this._model.drawables.opacities[t];
  }
  getDrawableMultiplyColor(t) {
    const e = this._model.drawables.multiplyColors, i = t * 4, r = new Z();
    return r.R = e[i], r.G = e[i + 1], r.B = e[i + 2], r.A = e[i + 3], r;
  }
  getDrawableScreenColor(t) {
    const e = this._model.drawables.screenColors, i = t * 4, r = new Z();
    return r.R = e[i], r.G = e[i + 1], r.B = e[i + 2], r.A = e[i + 3], r;
  }
  getDrawableParentPartIndex(t) {
    return this._model.drawables.parentPartIndices[t];
  }
  getDrawableBlendMode(t) {
    const e = this._model.drawables.constantFlags;
    return Live2DCubismCore.Utils.hasBlendAdditiveBit(e[t]) ? G.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(e[t]) ? G.CubismBlendMode_Multiplicative : G.CubismBlendMode_Normal;
  }
  getDrawableInvertedMaskBit(t) {
    const e = this._model.drawables.constantFlags;
    return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t]);
  }
  getDrawableMasks() {
    return this._model.drawables.masks;
  }
  getDrawableMaskCounts() {
    return this._model.drawables.maskCounts;
  }
  isUsingMasking() {
    for (let t = 0; t < this._model.drawables.count; ++t)
      if (!(this._model.drawables.maskCounts[t] <= 0))
        return true;
    return false;
  }
  getDrawableDynamicFlagIsVisible(t) {
    const e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasIsVisibleBit(e[t]);
  }
  getDrawableDynamicFlagVisibilityDidChange(t) {
    const e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(e[t]);
  }
  getDrawableDynamicFlagOpacityDidChange(t) {
    const e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasOpacityDidChangeBit(e[t]);
  }
  getDrawableDynamicFlagRenderOrderDidChange(t) {
    const e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(e[t]);
  }
  getDrawableDynamicFlagBlendColorDidChange(t) {
    const e = this._model.drawables.dynamicFlags;
    return Live2DCubismCore.Utils.hasBlendColorDidChangeBit(e[t]);
  }
  loadParameters() {
    let t = this._model.parameters.count;
    const e = this._savedParameters.getSize();
    t > e && (t = e);
    for (let i = 0; i < t; ++i)
      this._parameterValues[i] = this._savedParameters.at(i);
  }
  initialize() {
    H(this._model), this._parameterValues = this._model.parameters.values, this._partOpacities = this._model.parts.opacities, this._parameterMaximumValues = this._model.parameters.maximumValues, this._parameterMinimumValues = this._model.parameters.minimumValues;
    {
      const t = this._model.parameters.ids, e = this._model.parameters.count;
      this._parameterIds.prepareCapacity(e);
      for (let i = 0; i < e; ++i)
        this._parameterIds.pushBack(I.getIdManager().getId(t[i]));
    }
    {
      const t = this._model.parts.ids, e = this._model.parts.count;
      this._partIds.prepareCapacity(e);
      for (let i = 0; i < e; ++i)
        this._partIds.pushBack(I.getIdManager().getId(t[i]));
    }
    {
      const t = this._model.drawables.ids, e = this._model.drawables.count;
      this._userMultiplyColors = new x(), this._userMultiplyColors.updateSize(e, Ss, true), this._userScreenColors = new x(), this._userScreenColors.updateSize(e, Ss, true), this._userCullings = new x(), this._userCullings.updateSize(e, xs, true);
      const i = new xs(false, false);
      this._drawableIds.prepareCapacity(e);
      for (let r = 0; r < e; ++r)
        this._drawableIds.pushBack(I.getIdManager().getId(t[r])), this.setMultiplyColorByRGBA(r, 1, 1, 1, 1), this.setScreenColorByRGBA(r, 0, 0, 0, 1), this._userCullings.pushBack(i);
    }
  }
  release() {
    this._model.release(), this._model = null;
  }
};
var Bs;
((s) => {
  s.CubismModel = Cs;
})(Bs || (Bs = {}));
var oe = class {
  constructor(t) {
    __publicField(this, "_moc");
    __publicField(this, "_modelCount");
    __publicField(this, "_mocVersion");
    this._moc = t, this._modelCount = 0, this._mocVersion = 0;
  }
  static create(t) {
    let e = null;
    const i = Live2DCubismCore.Moc.fromArrayBuffer(t);
    return i && (e = new oe(i), e._mocVersion = Live2DCubismCore.Version.csmGetMocVersion(i, t)), e;
  }
  static delete(t) {
    t._moc._release(), t._moc = null, t = null;
  }
  createModel() {
    let t = null;
    const e = Live2DCubismCore.Model.fromMoc(this._moc);
    return e && (t = new Cs(e), t.initialize(), ++this._modelCount), t;
  }
  deleteModel(t) {
    t != null && (t.release(), t = null, --this._modelCount);
  }
  release() {
    H(this._modelCount == 0), this._moc._release(), this._moc = null;
  }
  getLatestMocVersion() {
    return Live2DCubismCore.Version.csmGetLatestMocVersion();
  }
  getMocVersion() {
    return this._mocVersion;
  }
  static hasMocConsistency(t) {
    return Live2DCubismCore.Moc.prototype.hasMocConsistency(t) === 1;
  }
};
var Ms;
((s) => {
  s.CubismMoc = oe;
})(Ms || (Ms = {}));
var Ps = "Meta";
var ba = "UserDataCount";
var Ia = "TotalUserDataSize";
var Re = "UserData";
var Ta = "Target";
var Va = "Id";
var wa = "Value";
var vs = class {
  constructor(t, e) {
    __publicField(this, "_json");
    this._json = A.create(t, e);
  }
  release() {
    A.delete(this._json);
  }
  getUserDataCount() {
    return this._json.getRoot().getValueByString(Ps).getValueByString(ba).toInt();
  }
  getTotalUserDataSize() {
    return this._json.getRoot().getValueByString(Ps).getValueByString(Ia).toInt();
  }
  getUserDataTargetType(t) {
    return this._json.getRoot().getValueByString(Re).getValueByIndex(t).getValueByString(Ta).getRawString();
  }
  getUserDataId(t) {
    return I.getIdManager().getId(this._json.getRoot().getValueByString(Re).getValueByIndex(t).getValueByString(Va).getRawString());
  }
  getUserDataValue(t) {
    return this._json.getRoot().getValueByString(Re).getValueByIndex(t).getValueByString(wa).getRawString();
  }
};
var bs;
((s) => {
  s.CubismModelUserDataJson = vs;
})(bs || (bs = {}));
var Ra = "ArtMesh";
var Is = class {
  constructor() {
    __publicField(this, "targetType");
    __publicField(this, "targetId");
    __publicField(this, "value");
  }
};
var zt = class {
  constructor() {
    __publicField(this, "_userDataNodes");
    __publicField(this, "_artMeshUserDataNode");
    this._userDataNodes = new x(), this._artMeshUserDataNode = new x();
  }
  static create(t, e) {
    const i = new zt();
    return i.parseUserData(t, e), i;
  }
  static delete(t) {
    t != null && (t.release(), t = null);
  }
  getArtMeshUserDatas() {
    return this._artMeshUserDataNode;
  }
  parseUserData(t, e) {
    let i = new vs(t, e);
    const r = I.getIdManager().getId(Ra), a = i.getUserDataCount();
    for (let o = 0; o < a; o++) {
      const n = new Is();
      n.targetId = i.getUserDataId(o), n.targetType = I.getIdManager().getId(i.getUserDataTargetType(o)), n.value = new U(i.getUserDataValue(o)), this._userDataNodes.pushBack(n), n.targetType == r && this._artMeshUserDataNode.pushBack(n);
    }
    i.release(), i = void 0;
  }
  release() {
    for (let t = 0; t < this._userDataNodes.getSize(); ++t)
      this._userDataNodes.set(t, null);
    this._userDataNodes = null;
  }
};
var Ts;
((s) => {
  s.CubismModelUserData = zt, s.CubismModelUserDataNode = Is;
})(Ts || (Ts = {}));
var le = class {
  constructor() {
    __publicField(this, "loadMotion", (t, e, i, r) => ne.create(t, e, r));
    __publicField(this, "_moc");
    __publicField(this, "_model");
    __publicField(this, "_motionManager");
    __publicField(this, "_expressionManager");
    __publicField(this, "_eyeBlink");
    __publicField(this, "_breath");
    __publicField(this, "_modelMatrix");
    __publicField(this, "_pose");
    __publicField(this, "_dragManager");
    __publicField(this, "_physics");
    __publicField(this, "_modelUserData");
    __publicField(this, "_initialized");
    __publicField(this, "_updating");
    __publicField(this, "_opacity");
    __publicField(this, "_lipsync");
    __publicField(this, "_lastLipSyncValue");
    __publicField(this, "_dragX");
    __publicField(this, "_dragY");
    __publicField(this, "_accelerationX");
    __publicField(this, "_accelerationY");
    __publicField(this, "_accelerationZ");
    __publicField(this, "_debugMode");
    __publicField(this, "_renderer");
    this._moc = null, this._model = null, this._motionManager = null, this._expressionManager = null, this._eyeBlink = null, this._breath = null, this._modelMatrix = null, this._pose = null, this._dragManager = null, this._physics = null, this._modelUserData = null, this._initialized = false, this._updating = false, this._opacity = 1, this._lipsync = true, this._lastLipSyncValue = 0, this._dragX = 0, this._dragY = 0, this._accelerationX = 0, this._accelerationY = 0, this._accelerationZ = 0, this._debugMode = false, this._renderer = null, this._motionManager = new Ft(), this._motionManager.setEventCallback(le.cubismDefaultMotionEventCallback, this), this._expressionManager = new Ft(), this._dragManager = new Si();
  }
  isInitialized() {
    return this._initialized;
  }
  setInitialized(t) {
    this._initialized = t;
  }
  isUpdating() {
    return this._updating;
  }
  setUpdating(t) {
    this._updating = t;
  }
  setDragging(t, e) {
    this._dragManager.set(t, e);
  }
  setAcceleration(t, e, i) {
    this._accelerationX = t, this._accelerationY = e, this._accelerationZ = i;
  }
  getModelMatrix() {
    return this._modelMatrix;
  }
  setOpacity(t) {
    this._opacity = t;
  }
  getOpacity() {
    return this._opacity;
  }
  loadModel(t) {
    if (this._moc = oe.create(t), this._moc == null) {
      k("Failed to CubismMoc.create().");
      return;
    }
    if (this._model = this._moc.createModel(), this._model == null) {
      k("Failed to CreateModel().");
      return;
    }
    this._model.saveParameters(), this._modelMatrix = new _i(this._model.getCanvasWidth(), this._model.getCanvasHeight());
  }
  loadExpression(t, e, i) {
    return ae.create(t, e);
  }
  loadPose(t, e) {
    this._pose = Ot.create(t, e);
  }
  loadUserData(t, e) {
    this._modelUserData = zt.create(t, e);
  }
  loadPhysics(t, e) {
    this._physics = Ut.create(t, e);
  }
  isHit(t, e, i) {
    const r = this._model.getDrawableIndex(t);
    if (r < 0)
      return false;
    const a = this._model.getDrawableVertexCount(r), o = this._model.getDrawableVertices(r);
    let n = o[0], l = o[0], u = o[1], h = o[1];
    for (let g = 1; g < a; ++g) {
      const c = o[rt.vertexOffset + g * rt.vertexStep], p = o[rt.vertexOffset + g * rt.vertexStep + 1];
      c < n && (n = c), c > l && (l = c), p < u && (u = p), p > h && (h = p);
    }
    const m = this._modelMatrix.invertTransformX(e), d = this._modelMatrix.invertTransformY(i);
    return n <= m && m <= l && u <= d && d <= h;
  }
  getModel() {
    return this._model;
  }
  getRenderer() {
    return this._renderer;
  }
  createRenderer(t = 1) {
    this._renderer && this.deleteRenderer(), this._renderer = new we(), this._renderer.initialize(this._model, t);
  }
  deleteRenderer() {
    this._renderer != null && (this._renderer.release(), this._renderer = null);
  }
  motionEventFired(t) {
    Q("{0}", t.s);
  }
  static cubismDefaultMotionEventCallback(t, e, i) {
    const r = i;
    r == null ? void 0 : r.motionEventFired(e);
  }
  release() {
    this._motionManager != null && (this._motionManager.release(), this._motionManager = null), this._expressionManager != null && (this._expressionManager.release(), this._expressionManager = null), this._moc != null && (this._moc.deleteModel(this._model), this._moc.release(), this._moc = null), this._modelMatrix = null, Ot.delete(this._pose), Vt.delete(this._eyeBlink), kt.delete(this._breath), this._dragManager = null, Ut.delete(this._physics), zt.delete(this._modelUserData), this.deleteRenderer();
  }
};
var Vs;
((s) => {
  s.CubismUserModel = le;
})(Vs || (Vs = {}));
var T = class {
  static loadFileAsBytes(t, e) {
    fetch(t).then((i) => i.arrayBuffer()).then((i) => e(i, i.byteLength));
  }
  static getDeltaTime() {
    return this._deltaTime;
  }
  static updateTime() {
    this._currentFrame = Date.now(), this._deltaTime = (this._currentFrame - this._lastFrame) / 1e3, this._lastFrame = this._currentFrame;
  }
  static printMessage(t) {
    L.debug && console.log(t);
  }
};
__publicField(T, "_currentFrame", 0);
__publicField(T, "_lastFrame", 0);
__publicField(T, "_deltaTime", 0);
var _Ae = class {
  constructor() {
    __publicField(this, "pcmData");
    __publicField(this, "userTimeSeconds");
    __publicField(this, "lastRms");
    __publicField(this, "sampleOffset");
    __publicField(this, "wavFileInfo");
    __publicField(this, "byteReader");
    __publicField(this, "audio");
    __publicField(this, "audioPlayPromise");
    __publicField(this, "loadFileToBytes", (t) => {
      this.byteReader._fileByte = t, this.byteReader._fileDataView = new DataView(this.byteReader._fileByte), this.byteReader._fileSize = this.byteReader._fileByte.byteLength, this.byteReader._readOffset = 0;
    });
    this.pcmData = null, this.userTimeSeconds = 0, this.lastRms = 0, this.sampleOffset = 0, this.wavFileInfo = new Ea(), this.byteReader = new Aa(), this.audio = new Audio();
  }
  static getInstance() {
    return this._instance == null && (this._instance = new _Ae()), this._instance;
  }
  static releaseInstance() {
    this._instance != null && (this._instance = void 0), this._instance = null;
  }
  update(t) {
    let e, i;
    if (this.pcmData == null || this.sampleOffset >= this.wavFileInfo._samplesPerChannel)
      return this.lastRms = 0, false;
    this.userTimeSeconds += t, e = Math.floor(this.userTimeSeconds * this.wavFileInfo._samplingRate), e > this.wavFileInfo._samplesPerChannel && (e = this.wavFileInfo._samplesPerChannel), i = 0;
    for (let r = 0; r < this.wavFileInfo._numberOfChannels; r++)
      for (let a = this.sampleOffset; a < e; a++) {
        const o = this.pcmData[r][a];
        i += o * o;
      }
    return i = Math.sqrt(i / (this.wavFileInfo._numberOfChannels * (e - this.sampleOffset))), this.lastRms = i, this.sampleOffset = e, true;
  }
  async start(t) {
    return this.sampleOffset = 0, this.userTimeSeconds = 0, this.lastRms = 0, this.playWavFile(t), await this.loadWavFile(t);
  }
  getRms() {
    return this.lastRms;
  }
  async loadWavFile(t) {
    let e = false;
    this.pcmData != null && this.releasePcmData();
    const i = async () => fetch(t).then((r) => r.arrayBuffer());
    if (this.loadFileToBytes(await i()), this.byteReader._fileSize < 4)
      return false;
    this.wavFileInfo._fileName = t;
    try {
      if (!this.byteReader.getCheckSignature("RIFF"))
        throw e = false, new Error('Cannot find Signeture "RIFF".');
      if (this.byteReader.get32LittleEndian(), !this.byteReader.getCheckSignature("WAVE"))
        throw e = false, new Error('Cannot find Signeture "WAVE".');
      if (!this.byteReader.getCheckSignature("fmt "))
        throw e = false, new Error('Cannot find Signeture "fmt".');
      const r = this.byteReader.get32LittleEndian();
      if (this.byteReader.get16LittleEndian() != 1)
        throw e = false, new Error("File is not linear PCM.");
      for (this.wavFileInfo._numberOfChannels = this.byteReader.get16LittleEndian(), this.wavFileInfo._samplingRate = this.byteReader.get32LittleEndian(), this.byteReader.get32LittleEndian(), this.byteReader.get16LittleEndian(), this.wavFileInfo._bitsPerSample = this.byteReader.get16LittleEndian(), r > 16 && (this.byteReader._readOffset += r - 16); !this.byteReader.getCheckSignature("data") && this.byteReader._readOffset < this.byteReader._fileSize; )
        this.byteReader._readOffset += this.byteReader.get32LittleEndian() + 4;
      if (this.byteReader._readOffset >= this.byteReader._fileSize)
        throw e = false, new Error('Cannot find "data" Chunk.');
      {
        const a = this.byteReader.get32LittleEndian();
        this.wavFileInfo._samplesPerChannel = a * 8 / (this.wavFileInfo._bitsPerSample * this.wavFileInfo._numberOfChannels);
      }
      this.pcmData = new Array(this.wavFileInfo._numberOfChannels);
      for (let a = 0; a < this.wavFileInfo._numberOfChannels; a++)
        this.pcmData[a] = new Float32Array(this.wavFileInfo._samplesPerChannel);
      for (let a = 0; a < this.wavFileInfo._samplesPerChannel; a++)
        for (let o = 0; o < this.wavFileInfo._numberOfChannels; o++)
          this.pcmData[o][a] = this.getPcmSample();
      e = true;
    } catch (r) {
      console.error(r);
    }
    return e;
  }
  playWavFile(t) {
    this.audio.src = t, this.audioPlayPromise = this.audio.play();
  }
  getPcmSample() {
    let t;
    switch (this.wavFileInfo._bitsPerSample) {
      case 8:
        t = this.byteReader.get8() - 128, t <<= 24;
        break;
      case 16:
        t = this.byteReader.get16LittleEndian() << 16;
        break;
      case 24:
        t = this.byteReader.get24LittleEndian() << 8;
        break;
      default:
        t = 0;
        break;
    }
    return t / 2147483647;
  }
  releasePcmData() {
    for (let t = 0; t < this.wavFileInfo._numberOfChannels; t++)
      delete this.pcmData[t];
    delete this.pcmData, this.pcmData = null;
  }
  release() {
    var _a3;
    (_a3 = this.audioPlayPromise) == null ? void 0 : _a3.then(() => this.audio.pause());
  }
};
var Ae = _Ae;
__publicField(Ae, "_instance", null);
var Ea = class {
  constructor() {
    __publicField(this, "_fileName");
    __publicField(this, "_numberOfChannels");
    __publicField(this, "_bitsPerSample");
    __publicField(this, "_samplingRate");
    __publicField(this, "_samplesPerChannel");
    this._fileName = "", this._numberOfChannels = 0, this._bitsPerSample = 0, this._samplingRate = 0, this._samplesPerChannel = 0;
  }
};
var Aa = class {
  constructor() {
    __publicField(this, "_fileByte");
    __publicField(this, "_fileDataView");
    __publicField(this, "_fileSize");
    __publicField(this, "_readOffset");
    this._fileByte = null, this._fileDataView = null, this._fileSize = 0, this._readOffset = 0;
  }
  get8() {
    const t = this._fileDataView.getUint8(this._readOffset);
    return this._readOffset++, t;
  }
  get16LittleEndian() {
    const t = this._fileDataView.getUint8(this._readOffset + 1) << 8 | this._fileDataView.getUint8(this._readOffset);
    return this._readOffset += 2, t;
  }
  get24LittleEndian() {
    const t = this._fileDataView.getUint8(this._readOffset + 2) << 16 | this._fileDataView.getUint8(this._readOffset + 1) << 8 | this._fileDataView.getUint8(this._readOffset);
    return this._readOffset += 3, t;
  }
  get32LittleEndian() {
    const t = this._fileDataView.getUint8(this._readOffset + 3) << 24 | this._fileDataView.getUint8(this._readOffset + 2) << 16 | this._fileDataView.getUint8(this._readOffset + 1) << 8 | this._fileDataView.getUint8(this._readOffset);
    return this._readOffset += 4, t;
  }
  getCheckSignature(t) {
    const e = new Uint8Array(4), i = new TextEncoder().encode(t);
    if (t.length != 4)
      return false;
    for (let r = 0; r < 4; r++)
      e[r] = this.get8();
    return e[0] == i[0] && e[1] == i[1] && e[2] == i[2] && e[3] == i[3];
  }
};
var Fa = class extends le {
  constructor() {
    super();
    __publicField(this, "modelSetting");
    __publicField(this, "modelHomeDir");
    __publicField(this, "userTimeSeconds");
    __publicField(this, "eyeBlinkIds");
    __publicField(this, "lipSyncIds");
    __publicField(this, "motions");
    __publicField(this, "expressions");
    __publicField(this, "_hitArea");
    __publicField(this, "_userArea");
    __publicField(this, "idParamAngleX");
    __publicField(this, "idParamAngleY");
    __publicField(this, "idParamAngleZ");
    __publicField(this, "idParamEyeBallX");
    __publicField(this, "idParamEyeBallY");
    __publicField(this, "idParamBodyAngleX");
    __publicField(this, "state");
    __publicField(this, "expressionCount");
    __publicField(this, "textureCount");
    __publicField(this, "motionCount");
    __publicField(this, "allMotionCount");
    __publicField(this, "wavFileHandler");
    __publicField(this, "_rightArmMotionManager");
    __publicField(this, "_leftArmMotionManager");
    this.modelSetting = null, this.modelHomeDir = null, this.userTimeSeconds = 0, this.eyeBlinkIds = new x(), this.lipSyncIds = new x(), this.motions = new O(), this.expressions = new O(), this._hitArea = new x(), this._userArea = new x(), this.idParamAngleX = I.getIdManager().getId(S.ParamAngleX), this.idParamAngleY = I.getIdManager().getId(S.ParamAngleY), this.idParamAngleZ = I.getIdManager().getId(S.ParamAngleZ), this.idParamEyeBallX = I.getIdManager().getId(S.ParamEyeBallX), this.idParamEyeBallY = I.getIdManager().getId(S.ParamEyeBallY), this.idParamBodyAngleX = I.getIdManager().getId(S.ParamBodyAngleX), this.state = 0, this.expressionCount = 0, this.textureCount = 0, this.motionCount = 0, this.allMotionCount = 0, this.wavFileHandler = new Ae(), this._rightArmMotionManager = new Ft(), this._leftArmMotionManager = new Ft();
  }
  get model() {
    return this._model;
  }
  loadAssets(t, e) {
    this.modelHomeDir = t, fetch(W.join(t, e)).then((i) => i.arrayBuffer()).then((i) => {
      const r = new ni(i, i.byteLength);
      this.state = 1, this.setupModel(r);
    });
  }
  setupModel(t) {
    if (this._updating = true, this._initialized = false, this.modelSetting = t, this.modelSetting.getModelFileName() != "") {
      const d = this.modelSetting.getModelFileName();
      fetch(W.join(this.modelHomeDir, d)).then((g) => g.arrayBuffer()).then((g) => {
        this.loadModel(g), this.state = 3, e();
      }), this.state = 2;
    } else
      T.printMessage("Model data does not exist.");
    const e = () => {
      if (this.modelSetting.getExpressionCount() > 0) {
        const d = this.modelSetting.getExpressionCount();
        for (let g = 0; g < d; g++) {
          const c = this.modelSetting.getExpressionName(g), p = this.modelSetting.getExpressionFileName(g);
          fetch(W.join(this.modelHomeDir, p)).then((_) => _.arrayBuffer()).then((_) => {
            const M = this.loadExpression(_, _.byteLength, c);
            this.expressions.getValue(c) != null && (vt.delete(this.expressions.getValue(c)), this.expressions.setValue(c, null)), this.expressions.setValue(c, M), this.expressionCount++, this.expressionCount >= d && (this.state = 5, i());
          });
        }
        this.state = 4;
      } else
        this.state = 5, i();
    }, i = () => {
      if (this.modelSetting.getPhysicsFileName() != "") {
        const d = this.modelSetting.getPhysicsFileName();
        fetch(W.join(this.modelHomeDir, d)).then((g) => g.arrayBuffer()).then((g) => {
          this.loadPhysics(g, g.byteLength), this.state = 7, r();
        }), this.state = 6;
      } else
        this.state = 7, r();
    }, r = () => {
      if (this.modelSetting.getPoseFileName() != "") {
        const d = this.modelSetting.getPoseFileName();
        fetch(W.join(this.modelHomeDir, d)).then((g) => g.arrayBuffer()).then((g) => {
          this.loadPose(g, g.byteLength), this.state = 9, a();
        }), this.state = 8;
      } else
        this.state = 9, a();
    }, a = () => {
      this.modelSetting.getEyeBlinkParameterCount() > 0 && (this._eyeBlink = Vt.create(this.modelSetting), this.state = 10), o();
    }, o = () => {
      this._breath = kt.create();
      const d = new x();
      d.pushBack(new Pt(this.idParamAngleX, 0, 15, 6.5345, 0.5)), d.pushBack(new Pt(this.idParamAngleY, 0, 8, 3.5345, 0.5)), d.pushBack(new Pt(this.idParamAngleZ, 0, 10, 5.5345, 0.5)), d.pushBack(new Pt(this.idParamBodyAngleX, 0, 4, 15.5345, 0.5)), d.pushBack(new Pt(I.getIdManager().getId(S.ParamBreath), 0.5, 0.5, 3.2345, 1)), this._breath.setParameters(d), this.state = 11, n();
    }, n = () => {
      if (this.modelSetting.getUserDataFile() !== "") {
        const d = this.modelSetting.getUserDataFile();
        fetch(W.join(this.modelHomeDir, d)).then((g) => g.arrayBuffer()).then((g) => {
          this.loadUserData(g, g.byteLength), this.state = 13, l();
        }), this.state = 12;
      } else
        this.state = 13, l();
    }, l = () => {
      const d = this.modelSetting.getEyeBlinkParameterCount();
      for (let g = 0; g < d; ++g)
        this.eyeBlinkIds.pushBack(this.modelSetting.getEyeBlinkParameterId(g));
      this.state = 14, u();
    }, u = () => {
      const d = this.modelSetting.getLipSyncParameterCount();
      for (let g = 0; g < d; ++g)
        this.lipSyncIds.pushBack(this.modelSetting.getLipSyncParameterId(g));
      this.state = 15, h();
    }, h = () => {
      const d = new O();
      if (this.modelSetting === null || this._modelMatrix === null) {
        k("Failed to setupLayout().");
        return;
      }
      this.modelSetting.getLayoutMap(d), this._modelMatrix.setupFromLayout(d), this.state = 16, m();
    }, m = () => {
      this.state = 17, this.model.saveParameters(), this.allMotionCount = 0, this.motionCount = 0;
      const d = [], g = this.modelSetting.getMotionGroupCount();
      for (let c = 0; c < g; c++)
        d[c] = this.modelSetting.getMotionGroupName(c), this.allMotionCount += this.modelSetting.getMotionCount(d[c]);
      for (let c = 0; c < g; c++)
        this.preLoadMotionGroup(d[c]);
      g == 0 && this.reloadTextures();
    };
  }
  setupTextures() {
    var _a3;
    if (this.state === 20) {
      const e = this.modelSetting.getTextureCount();
      for (let i = 0; i < e; i++) {
        if (this.modelSetting.getTextureFileName(i) === "") {
          T.printMessage("getTextureFileName null");
          continue;
        }
        const r = this.modelSetting.getTextureFileName(i), a = W.join(this.modelHomeDir, r), o = (n) => {
          var _a4;
          (_a4 = this.getRenderer()) == null ? void 0 : _a4.bindTexture(i, n.id), this.textureCount++, this.textureCount >= e && (this.state = 22);
        };
        B.instance.textureManager.createTextureFromPngFile(a, true, o), (_a3 = this.getRenderer()) == null ? void 0 : _a3.setIsPremultipliedAlpha(true);
      }
      this.state = 21;
    }
  }
  reloadRenderer() {
    this.deleteRenderer(), this.createRenderer(), this.setupTextures();
  }
  update() {
    var _a3, _b, _c, _d, _e2, _f;
    if (this.state != 22)
      return;
    const t = T.getDeltaTime();
    this.userTimeSeconds += t, this._dragManager.update(t), this._dragX = this._dragManager.getX(), this._dragY = this._dragManager.getY();
    let e = false;
    if (this.model.loadParameters(), this._motionManager.isFinished())
      this.startRandomMotion(ft.Idle, K.Idle);
    else {
      const i = this._motionManager.updateMotion(this.model, t), r = this._rightArmMotionManager.updateMotion(this.model, t), a = this._leftArmMotionManager.updateMotion(this.model, t);
      e = [i, r, a].some((o) => o);
    }
    if (this.model.saveParameters(), e || ((_a3 = this._eyeBlink) == null ? void 0 : _a3.updateParameters(this.model, t)), (_b = this._expressionManager) == null ? void 0 : _b.updateMotion(this.model, t), this.model.addParameterValueById(this.idParamAngleX, this._dragX * 30), this.model.addParameterValueById(this.idParamAngleY, this._dragY * 30), this.model.addParameterValueById(this.idParamAngleZ, this._dragX * this._dragY * -30), this.model.addParameterValueById(this.idParamBodyAngleX, this._dragX * 10), this.model.addParameterValueById(this.idParamEyeBallX, this._dragX), this.model.addParameterValueById(this.idParamEyeBallY, this._dragY), (_c = this._breath) == null ? void 0 : _c.updateParameters(this.model, t), (_d = this._physics) == null ? void 0 : _d.evaluate(this.model, t), this._lipsync) {
      (_e2 = this.wavFileHandler) == null ? void 0 : _e2.update(t);
      const i = this.wavFileHandler.getRms();
      for (let r = 0; r < this.lipSyncIds.getSize(); ++r)
        this.model.addParameterValueById(this.lipSyncIds.at(r), i, 0.8);
    }
    (_f = this._pose) == null ? void 0 : _f.updateParameters(this.model, t), this.model.update();
  }
  startMotion(t, e, i, r) {
    if (i == K.Force)
      this._motionManager.setReservePriority(i);
    else if (!this._motionManager.reserveMotion(i))
      return this._debugMode && T.printMessage("[APP]can't start motion."), gt;
    const { motion: a, autoDelete: o } = this.getMotion(t, e, r), n = this.modelSetting.getMotionSoundFileName(t, e);
    if (n.localeCompare("") != 0) {
      let l = this.modelHomeDir + n;
      this.wavFileHandler.start(l).catch();
    }
    return this._debugMode && T.printMessage(`[APP]start motion: [${t}_${e}`), this._motionManager.startMotionPriority(a, o, i);
  }
  startRandomMotion(t, e, i) {
    if (this.modelSetting.getMotionCount(t) == 0)
      return gt;
    const r = Math.floor(Math.random() * this.modelSetting.getMotionCount(t));
    return this.startMotion(t, r, e, i);
  }
  getMotion(t, e, i) {
    const r = this.modelSetting.getMotionFileName(t, e), a = `${t}_${e}`;
    let o = this.motions.getValue(a), n = false;
    const l = W.join(this.modelHomeDir, r);
    return o == null ? fetch(l).then((u) => u.arrayBuffer()).then((u) => {
      o = this.loadMotion(u, u.byteLength, null, i);
      let h = this.modelSetting.getMotionFadeInTimeValue(t, e);
      h >= 0 && o.setFadeInTime(h), h = this.modelSetting.getMotionFadeOutTimeValue(t, e), h >= 0 && o.setFadeOutTime(h), o.setEffectIds(this.eyeBlinkIds, this.lipSyncIds), n = true;
    }) : o.setFinishedMotionHandler(i), { motion: o, autoDelete: n };
  }
  startHandMotion(t, e, i, r, a) {
    if (r == K.Force)
      t.setReservePriority(r);
    else if (!t.reserveMotion(r))
      return this._debugMode && T.printMessage("[APP]can't start motion."), gt;
    const { motion: o, autoDelete: n } = this.getMotion(e, i, a), l = this.modelSetting.getMotionSoundFileName(e, i);
    if (l.localeCompare("") != 0) {
      let u = this.modelHomeDir + l;
      this.wavFileHandler.start(u).catch();
    }
    return this._debugMode && T.printMessage(`[APP]start motion: ${name}`), t.startMotionPriority(o, n, r);
  }
  startRandomRightHandMotion(t, e, i) {
    if (this.modelSetting.getMotionCount(t) == 0)
      return gt;
    let r = Math.floor(Math.random() * this.modelSetting.getMotionCount(t));
    return this.startHandMotion(this._rightArmMotionManager, t, r, e, i);
  }
  startRandomLeftHandMotion(t, e, i) {
    if (this.modelSetting.getMotionCount(t) == 0)
      return gt;
    let r = Math.floor(Math.random() * this.modelSetting.getMotionCount(t));
    return this.startHandMotion(this._leftArmMotionManager, t, r, e, i);
  }
  setExpression(t) {
    const e = this.expressions.getValue(t);
    this._debugMode && T.printMessage(`[APP]expression: [${t}]`), e != null ? this._expressionManager.startMotionPriority(e, false, K.Force) : this._debugMode && T.printMessage(`[APP]expression[${t}] is null`);
  }
  setRandomExpression() {
    if (this.expressions.getSize() == 0)
      return;
    const t = Math.floor(Math.random() * this.expressions.getSize());
    for (let e = 0; e < this.expressions.getSize(); e++)
      if (e == t) {
        const i = this.expressions._keyValues[e].first;
        this.setExpression(i);
        return;
      }
  }
  motionEventFired(t) {
    Q("{0} is fired on LAppModel!!", t.s);
  }
  hitOpacity() {
    return this._opacity < 1;
  }
  hitTest(t, e, i) {
    if (this.hitOpacity())
      return false;
    const r = this.modelSetting.getHitAreasCount();
    for (let a = 0; a < r; a++)
      if (this.modelSetting.getHitAreaName(a) == t) {
        const o = this.modelSetting.getHitAreaId(a);
        return this.isHit(o, e, i);
      }
    return false;
  }
  preLoadMotionGroup(t) {
    for (let e = 0; e < this.modelSetting.getMotionCount(t); e++) {
      const i = this.modelSetting.getMotionFileName(t, e), r = `${t}_${e}`;
      this._debugMode && T.printMessage(`[APP]load motion: ${i} => [${r}]`), fetch(W.join(this.modelHomeDir, i)).then((a) => a.arrayBuffer()).then((a) => {
        const o = this.loadMotion(a, a.byteLength, r);
        let n = this.modelSetting.getMotionFadeInTimeValue(t, e);
        n >= 0 && o.setFadeInTime(n), n = this.modelSetting.getMotionFadeOutTimeValue(t, e), n >= 0 && o.setFadeOutTime(n), o.setEffectIds(this.eyeBlinkIds, this.lipSyncIds), this.motions.getValue(r) != null && vt.delete(this.motions.getValue(r)), this.motions.setValue(r, o), this.motionCount++, this.motionCount >= this.allMotionCount && this.reloadTextures();
      });
    }
  }
  reloadTextures() {
    var _a3;
    this.state = 20, (_a3 = this._motionManager) == null ? void 0 : _a3.stopAllMotions(), this._updating = false, this._initialized = true, this.createRenderer(), this.setupTextures(), this.getRenderer().startUp(B.gl);
  }
  releaseMotions() {
    this.motions.clear();
  }
  releaseExpressions() {
    this.expressions.clear();
  }
  doDraw() {
    if (this.model == null)
      return;
    const t = [0, 0, B.canvas.width, B.canvas.height];
    this.getRenderer().setRenderState(B.frameBuffer, t), this.getRenderer().drawModel();
  }
  draw(t) {
    this.model !== null && this.state == 22 && (t.multiplyByMatrix(this._modelMatrix), this.getRenderer().setMvpMatrix(t), this.doDraw());
  }
  release() {
    this._leftArmMotionManager.release(), this._rightArmMotionManager.release(), this.wavFileHandler.release(), super.release();
  }
};
var _q = class {
  constructor() {
    __publicField(this, "viewMatrix");
    __publicField(this, "models");
    __publicField(this, "sceneIndex");
    __publicField(this, "_finishedMotion", (t) => {
      T.printMessage("Motion Finished: OK");
    });
    this.viewMatrix = new E(), this.models = new x(), this.sceneIndex = 0, this.changeScene(0);
  }
  static get instance() {
    return this.initialize();
  }
  static initialize() {
    return this._instance == null && (this._instance = new _q()), this._instance;
  }
  static releaseInstance() {
    this._instance != null && (this._instance = void 0), this._instance = null;
  }
  getModel(t) {
    return t < this.models.getSize() ? this.models.at(t) : null;
  }
  releaseAllModel() {
    for (let t = 0; t < this.models.getSize(); t++)
      this.models.at(t).release(), this.models.set(t, null);
    this.models.clear();
  }
  onDrag(t, e) {
    for (let i = 0; i < this.models.getSize(); i++) {
      const r = this.getModel(i);
      r && r.setDragging(t, e);
    }
  }
  onTap(t, e) {
    T.printMessage(`[APP]tap point: {x: ${t.toFixed(2)} y: ${e.toFixed(2)}}`);
    for (let i = 0; i < this.models.getSize(); i++) {
      const r = this.models.at(i);
      if (r.modelSetting.getHitAreasCount() === 0) {
        T.printMessage(`[APP]hit area: [${R.Other}]`), r.startRandomMotion(ft.Tap, K.Normal, this._finishedMotion), It.emit(R.Other);
        return;
      }
      r.hitTest(R.Head, t, e) ? (T.printMessage(`[APP]hit area: [${R.Head}]`), r.setRandomExpression(), It.emit(R.Head)) : r.hitTest(R.Left, t, e) ? (T.printMessage(`[APP]hit area: [${R.Body + R.Left}]`), r.startRandomLeftHandMotion(ft.TapLeft, K.Normal, this._finishedMotion), It.emit(R.Left)) : r.hitTest(R.Right, t, e) ? (T.printMessage(`[APP]hit area: [${R.Body + R.Right}]`), r.startRandomRightHandMotion(ft.TapRight, K.Normal, this._finishedMotion), It.emit(R.Right)) : r.hitTest(R.Body, t, e) && (T.printMessage(`[APP]hit area: [${R.Body}]`), r.startRandomMotion(ft.TapBody, K.Normal, this._finishedMotion), It.emit(R.Body));
    }
  }
  onUpdate() {
    const { width: t, height: e } = B.canvas, i = this.models.getSize();
    for (let r = 0; r < i; ++r) {
      const a = new E(), o = this.getModel(r);
      o.getModel() && (o.getModel().getCanvasWidth() > 1 && t < e ? (o.getModelMatrix().setWidth(2), a.scale(1, t / e)) : a.scale(e / t, 1), a.multiplyByMatrix(this.viewMatrix)), o.update(), o.draw(a);
    }
  }
  prevScene() {
    const t = (this.sceneIndex - 1) % L.source.models.length;
    this.changeScene(t);
  }
  nextScene() {
    const t = (this.sceneIndex + 1) % L.source.models.length;
    this.changeScene(t);
  }
  changeScene(t) {
    this.sceneIndex = t, T.printMessage(`[APP]model index: ${this.sceneIndex}`);
    const e = L.source.models.at(t), i = W.join(L.source.path, e);
    let r = `${e}.model3.json`;
    this.releaseAllModel(), this.models.pushBack(new Fa()), this.models.at(0).loadAssets(i, r);
  }
  setViewMatrix(t) {
    for (let e = 0; e < 16; e++)
      this.viewMatrix.getArray()[e] = t.getArray()[e];
  }
};
var q = _q;
__publicField(q, "_instance", null);
var La = class {
  constructor() {
    __publicField(this, "textures");
    this.textures = new x();
  }
  release() {
    for (let t = this.textures.begin(); t.notEqual(this.textures.end()); t.preIncrement())
      B.gl.deleteTexture(t.ptr().id);
    this.textures = new x();
  }
  createTextureFromPngFile(t, e, i) {
    for (let a = this.textures.begin(); a.notEqual(this.textures.end()); a.preIncrement())
      if (a.ptr().fileName == t && a.ptr().usePremultply == e) {
        a.ptr().img = new Image(), a.ptr().img.onload = () => i(a.ptr()), a.ptr().img.src = t;
        return;
      }
    const r = new Image();
    r.onload = () => {
      const a = B.gl, o = a.createTexture();
      a.bindTexture(a.TEXTURE_2D, o), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR_MIPMAP_LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), e && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, r), a.generateMipmap(a.TEXTURE_2D), a.bindTexture(a.TEXTURE_2D, null);
      const n = new Da();
      n != null && (n.fileName = t, n.width = r.width, n.height = r.height, n.id = o, n.img = r, n.usePremultply = e, this.textures.pushBack(n)), i(n);
    }, r.src = t;
  }
  releaseTextures() {
    for (let t = 0; t < this.textures.getSize(); t++)
      this.textures.set(t, null);
    this.textures.clear();
  }
  releaseTextureByTexture(t) {
    for (let e = 0; e < this.textures.getSize(); e++)
      if (this.textures.at(e).id == t) {
        this.textures.set(e, null), this.textures.remove(e);
        break;
      }
  }
  releaseTextureByFilePath(t) {
    for (let e = 0; e < this.textures.getSize(); e++)
      if (this.textures.at(e).fileName == t) {
        this.textures.set(e, null), this.textures.remove(e);
        break;
      }
  }
};
var Da = class {
  constructor() {
    __publicField(this, "img");
    __publicField(this, "id", null);
    __publicField(this, "width", 0);
    __publicField(this, "height", 0);
    __publicField(this, "usePremultply");
    __publicField(this, "fileName");
  }
};
var ws = class extends E {
  constructor() {
    super();
    __publicField(this, "_screenLeft");
    __publicField(this, "_screenRight");
    __publicField(this, "_screenTop");
    __publicField(this, "_screenBottom");
    __publicField(this, "_maxLeft");
    __publicField(this, "_maxRight");
    __publicField(this, "_maxTop");
    __publicField(this, "_maxBottom");
    __publicField(this, "_maxScale");
    __publicField(this, "_minScale");
    this._screenLeft = 0, this._screenRight = 0, this._screenTop = 0, this._screenBottom = 0, this._maxLeft = 0, this._maxRight = 0, this._maxTop = 0, this._maxBottom = 0, this._maxScale = 0, this._minScale = 0;
  }
  adjustTranslate(t, e) {
    this._tr[0] * this._maxLeft + (this._tr[12] + t) > this._screenLeft && (t = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12]), this._tr[0] * this._maxRight + (this._tr[12] + t) < this._screenRight && (t = this._screenRight - this._tr[0] * this._maxRight - this._tr[12]), this._tr[5] * this._maxTop + (this._tr[13] + e) < this._screenTop && (e = this._screenTop - this._tr[5] * this._maxTop - this._tr[13]), this._tr[5] * this._maxBottom + (this._tr[13] + e) > this._screenBottom && (e = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13]);
    const i = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]);
    E.multiply(i, this._tr, this._tr);
  }
  adjustScale(t, e, i) {
    const r = this.getMaxScale(), a = this.getMinScale(), o = i * this._tr[0];
    o < a ? this._tr[0] > 0 && (i = a / this._tr[0]) : o > r && this._tr[0] > 0 && (i = r / this._tr[0]);
    const n = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]), l = new Float32Array([i, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), u = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -e, 0, 1]);
    E.multiply(u, this._tr, this._tr), E.multiply(l, this._tr, this._tr), E.multiply(n, this._tr, this._tr);
  }
  setScreenRect(t, e, i, r) {
    this._screenLeft = t, this._screenRight = e, this._screenBottom = i, this._screenTop = r;
  }
  setMaxScreenRect(t, e, i, r) {
    this._maxLeft = t, this._maxRight = e, this._maxTop = r, this._maxBottom = i;
  }
  setMaxScale(t) {
    this._maxScale = t;
  }
  setMinScale(t) {
    this._minScale = t;
  }
  getMaxScale() {
    return this._maxScale;
  }
  getMinScale() {
    return this._minScale;
  }
  isMaxScale() {
    return this.getScaleX() >= this._maxScale;
  }
  isMinScale() {
    return this.getScaleX() <= this._minScale;
  }
  getScreenLeft() {
    return this._screenLeft;
  }
  getScreenRight() {
    return this._screenRight;
  }
  getScreenBottom() {
    return this._screenBottom;
  }
  getScreenTop() {
    return this._screenTop;
  }
  getMaxLeft() {
    return this._maxLeft;
  }
  getMaxRight() {
    return this._maxRight;
  }
  getMaxBottom() {
    return this._maxBottom;
  }
  getMaxTop() {
    return this._maxTop;
  }
};
var Rs;
((s) => {
  s.CubismViewMatrix = ws;
})(Rs || (Rs = {}));
var ka = class {
  constructor(t, e, i, r, a, o) {
    __publicField(this, "texture");
    __publicField(this, "vertexBuffer");
    __publicField(this, "uvBuffer");
    __publicField(this, "indexBuffer");
    __publicField(this, "rect");
    __publicField(this, "positionLocation");
    __publicField(this, "uvLocation");
    __publicField(this, "textureLocation");
    __publicField(this, "positionArray");
    __publicField(this, "uvArray");
    __publicField(this, "indexArray");
    __publicField(this, "firstDraw");
    __publicField(this, "hitCallback");
    this.rect = new Oa(), this.rect.left = t - i * 0.5, this.rect.right = t + i * 0.5, this.rect.up = e + r * 0.5, this.rect.down = e - r * 0.5, this.texture = a, this.vertexBuffer = null, this.uvBuffer = null, this.indexBuffer = null, this.positionLocation = null, this.uvLocation = null, this.textureLocation = null, this.positionArray = null, this.uvArray = null, this.indexArray = null, this.firstDraw = true, this.hitCallback = o;
  }
  release() {
    this.rect = null;
    const t = B.gl;
    t.deleteTexture(this.texture), this.texture = null, t.deleteBuffer(this.uvBuffer), this.uvBuffer = null, t.deleteBuffer(this.vertexBuffer), this.vertexBuffer = null, t.deleteBuffer(this.indexBuffer), this.indexBuffer = null;
  }
  getTexture() {
    return this.texture;
  }
  render(t) {
    if (this.texture == null)
      return;
    const e = B.gl;
    if (this.firstDraw) {
      this.positionLocation = e.getAttribLocation(t, "position"), e.enableVertexAttribArray(this.positionLocation), this.uvLocation = e.getAttribLocation(t, "uv"), e.enableVertexAttribArray(this.uvLocation), this.textureLocation = e.getUniformLocation(t, "texture"), e.uniform1i(this.textureLocation, 0), this.uvArray = new Float32Array([1, 0, 0, 0, 0, 1, 1, 1]), this.uvBuffer = e.createBuffer();
      {
        const i = B.canvas.width, r = B.canvas.height;
        this.positionArray = new Float32Array([(this.rect.right - i * 0.5) / (i * 0.5), (this.rect.up - r * 0.5) / (r * 0.5), (this.rect.left - i * 0.5) / (i * 0.5), (this.rect.up - r * 0.5) / (r * 0.5), (this.rect.left - i * 0.5) / (i * 0.5), (this.rect.down - r * 0.5) / (r * 0.5), (this.rect.right - i * 0.5) / (i * 0.5), (this.rect.down - r * 0.5) / (r * 0.5)]), this.vertexBuffer = e.createBuffer();
      }
      this.indexArray = new Uint16Array([0, 1, 2, 3, 2, 0]), this.indexBuffer = e.createBuffer(), this.firstDraw = false;
    }
    e.bindBuffer(e.ARRAY_BUFFER, this.uvBuffer), e.bufferData(e.ARRAY_BUFFER, this.uvArray, e.STATIC_DRAW), e.vertexAttribPointer(this.uvLocation, 2, e.FLOAT, false, 0, 0), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.positionArray, e.STATIC_DRAW), e.vertexAttribPointer(this.positionLocation, 2, e.FLOAT, false, 0, 0), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indexArray, e.DYNAMIC_DRAW), e.bindTexture(e.TEXTURE_2D, this.texture), e.drawElements(e.TRIANGLES, this.indexArray.length, e.UNSIGNED_SHORT, 0);
  }
  isHit(t, e) {
    const { height: i } = B.canvas, r = i - e;
    return t >= this.rect.left && t <= this.rect.right && r <= this.rect.up && r >= this.rect.down;
  }
};
var Oa = class {
  constructor() {
    __publicField(this, "left");
    __publicField(this, "right");
    __publicField(this, "up");
    __publicField(this, "down");
  }
};
var Na = class {
  constructor() {
    __publicField(this, "startY");
    __publicField(this, "startX");
    __publicField(this, "lastX");
    __publicField(this, "lastY");
    __publicField(this, "lastX1");
    __publicField(this, "lastY1");
    __publicField(this, "lastX2");
    __publicField(this, "lastY2");
    __publicField(this, "lastTouchDistance");
    __publicField(this, "deltaX");
    __publicField(this, "deltaY");
    __publicField(this, "scale");
    __publicField(this, "touchSingle");
    __publicField(this, "flipAvailable");
    this.startX = 0, this.startY = 0, this.lastX = 0, this.lastY = 0, this.lastX1 = 0, this.lastY1 = 0, this.lastX2 = 0, this.lastY2 = 0, this.lastTouchDistance = 0, this.deltaX = 0, this.deltaY = 0, this.scale = 1, this.touchSingle = false, this.flipAvailable = false;
  }
  getCenterX() {
    return this.lastX;
  }
  getCenterY() {
    return this.lastY;
  }
  getDeltaX() {
    return this.deltaX;
  }
  getDeltaY() {
    return this.deltaY;
  }
  getStartX() {
    return this.startX;
  }
  getStartY() {
    return this.startY;
  }
  getScale() {
    return this.scale;
  }
  getX() {
    return this.lastX;
  }
  getY() {
    return this.lastY;
  }
  getX1() {
    return this.lastX1;
  }
  getY1() {
    return this.lastY1;
  }
  getX2() {
    return this.lastX2;
  }
  getY2() {
    return this.lastY2;
  }
  isSingleTouch() {
    return this.touchSingle;
  }
  isFlickAvailable() {
    return this.flipAvailable;
  }
  disableFlick() {
    this.flipAvailable = false;
  }
  touchesBegan(t, e) {
    this.lastX = t, this.lastY = e, this.startX = t, this.startY = e, this.lastTouchDistance = -1, this.flipAvailable = true, this.touchSingle = true;
  }
  touchesMoved(t, e) {
    this.lastX = t, this.lastY = e, this.lastTouchDistance = -1, this.touchSingle = true;
  }
  getFlickDistance() {
    return this.calculateDistance(this.startX, this.startY, this.lastX, this.lastY);
  }
  calculateDistance(t, e, i, r) {
    return Math.sqrt((t - i) * (t - i) + (e - r) * (e - r));
  }
  calculateMovingAmount(t, e) {
    if (t > 0 != e > 0)
      return 0;
    const i = t > 0 ? 1 : -1, r = Math.abs(t), a = Math.abs(e);
    return i * (r < a ? r : a);
  }
};
var Ua = class {
  constructor() {
    __publicField(this, "touchManager");
    __publicField(this, "deviceToScreen");
    __publicField(this, "viewMatrix");
    __publicField(this, "sprites", []);
    __publicField(this, "programId");
    __publicField(this, "released", false);
    this.programId = null, this.released = false, this.touchManager = new Na(), this.deviceToScreen = new E(), this.viewMatrix = new ws();
  }
  initialize() {
    const { width: t, height: e } = B.canvas, i = t / e, r = -i, a = i ?? Yt.Right, o = Yt.Bottom, n = Yt.Top;
    if (this.viewMatrix.setScreenRect(r, a, o, n), this.viewMatrix.scale(L.scale, L.scale), this.deviceToScreen.loadIdentity(), t > e) {
      const l = Math.abs(a - r);
      this.deviceToScreen.scaleRelative(l / t, -l / t);
    } else {
      const l = Math.abs(n - o);
      this.deviceToScreen.scaleRelative(l / e, -l / e);
    }
    this.deviceToScreen.translateRelative(-t * 0.5, -e * 0.5), this.viewMatrix.setMaxScale(ue.Max), this.viewMatrix.setMinScale(ue.Min), this.viewMatrix.setMaxScreenRect(wt.Left, wt.Right, wt.Bottom, wt.Top);
  }
  release() {
    this.sprites.forEach((t) => t.release()), this.sprites.length = 0, B.gl.deleteProgram(this.programId), this.released = true;
  }
  render() {
    const t = B.gl;
    t.useProgram(this.programId), this.sprites.forEach((e) => e.render(this.programId)), t.flush(), q.instance.setViewMatrix(this.viewMatrix), q.instance.onUpdate();
  }
  addSprite(t, e, i, r) {
    B.instance.textureManager.createTextureFromPngFile(t, false, (a) => {
      const { width: o, height: n } = B.canvas, l = e ? e.x : o - a.width * 0.5, u = e ? e.y : n - a.height * 0.5, h = i ? i.width : a.width, m = i ? i.height : a.height, d = new ka(l, u, h, m, a.id, r);
      this.sprites.push(d);
    });
  }
  initializeSprite() {
    this.programId = B.instance.createShader();
  }
  onTouchesBegan(t, e) {
    this.touchManager.touchesBegan(t, e);
  }
  onTouchesMoved(t, e) {
    const i = this.transformViewX(this.touchManager.getX()), r = this.transformViewY(this.touchManager.getY());
    this.touchManager.touchesMoved(t, e), q.instance.onDrag(i, r);
  }
  onTouchesEnded(t, e) {
    q.instance.onDrag(0, 0);
    {
      const i = this.deviceToScreen.transformX(this.touchManager.getX()), r = this.deviceToScreen.transformY(this.touchManager.getY());
      "ontouchend" in B.canvas && T.printMessage(`[APP]touchesEnded x: ${i} y: ${r}`), q.instance.onTap(i, r), this.sprites.forEach((a) => {
        a.isHit(t, e) && a.hitCallback();
      });
    }
  }
  transformViewX(t) {
    const e = this.deviceToScreen.transformX(t);
    return this.viewMatrix.invertTransformX(e);
  }
  transformViewY(t) {
    const e = this.deviceToScreen.transformY(t);
    return this.viewMatrix.invertTransformY(e);
  }
  transformScreenX(t) {
    return this.deviceToScreen.transformX(t);
  }
  transformScreenY(t) {
    return this.deviceToScreen.transformY(t);
  }
};
var _B = class {
  constructor() {
    __publicField(this, "cubismOption");
    __publicField(this, "view");
    __publicField(this, "captured");
    __publicField(this, "textureManager");
    __publicField(this, "canvasId", "live2d-canvas");
    this.captured = false, this.cubismOption = new Us(), this.view = new Ua(), this.textureManager = new La();
  }
  static get instance() {
    return this._instance == null && (this._instance = new _B()), this._instance;
  }
  static releaseInstance() {
    this._instance != null && this._instance.release(), this._instance = null;
  }
  initialize() {
    const t = _B.canvas = this.getCanvas(), e = _B.gl = t.getContext("webgl") || t.getContext("experimental-webgl");
    return e ? (_B.frameBuffer || (_B.frameBuffer = e.getParameter(e.FRAMEBUFFER_BINDING)), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), this.onEvent(), this.view.initialize(), this.initializeCubism(), true) : (alert("Cannot initialize WebGL. This browser does not support."), _B.gl = null, ht.body.innerHTML = "This browser does not support the <code>&lt;canvas&gt;</code> element.", false);
  }
  getCanvas() {
    let t = ht.querySelector(`#${this.canvasId}`);
    return t ? this.release() : (t = ht.createElement("canvas"), t.setAttribute("id", this.canvasId)), L.canvas === "auto" ? this._resizeCanvas() : (t.width = L.canvas.width || t.width, t.height = L.canvas.height || t.height), L.target.appendChild(t), t;
  }
  onEvent() {
    const t = _B.canvas;
    "ontouchend" in t ? (t.ontouchstart = ja, t.ontouchmove = Ga, t.ontouchend = Es, t.ontouchcancel = Es) : (t.onmousedown = za, t.onmousemove = Xa, t.onmouseup = Ya);
  }
  onResize() {
    this._resizeCanvas(), this.view.initialize(), this.view.initializeSprite();
    const { width: t, height: e } = _B.canvas;
    _B.gl.viewport(0, 0, t, e);
  }
  release() {
    this.textureManager.release(), this.view.release(), q.releaseInstance(), I.dispose();
  }
  run() {
    const t = () => {
      if (_B.instance == null)
        return;
      T.updateTime();
      const e = _B.gl;
      e.clearColor(0, 0, 0, 0), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.clearDepth(1), e.enable(e.BLEND), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA), this.view.render(), requestAnimationFrame(t);
    };
    t();
  }
  createShader() {
    const t = _B.gl, e = t.createShader(t.VERTEX_SHADER);
    if (e === null)
      return T.printMessage("failed to create vertexShader"), null;
    const i = `
        precision mediump float;
        attribute vec3 position;
        attribute vec2 uv;
        varying vec2 vuv;
        void main(void)
        {
           gl_Position = vec4(position, 1.0);
           vuv = uv;
        }
      `;
    t.shaderSource(e, i), t.compileShader(e);
    const r = t.createShader(t.FRAGMENT_SHADER);
    if (r == null)
      return T.printMessage("failed to create fragmentShader"), null;
    const a = `
        precision mediump float;
        varying vec2 vuv;
        uniform sampler2D texture;
        void main(void)
        {
           gl_FragColor = texture2D(texture, vuv);
        }
      `;
    t.shaderSource(r, a), t.compileShader(r);
    const o = t.createProgram();
    return t.attachShader(o, e), t.attachShader(o, r), t.deleteShader(e), t.deleteShader(r), t.linkProgram(o), t.useProgram(o), o;
  }
  initializeCubism() {
    this.cubismOption.logFunction = T.printMessage, this.cubismOption.loggingLevel = Mt.LogLevel_Error, I.startUp(this.cubismOption), I.initialize(), q.initialize(), T.updateTime(), this.view.initializeSprite();
  }
  _resizeCanvas() {
    _B.canvas.width = window.innerWidth, _B.canvas.height = window.innerHeight;
  }
};
var B = _B;
__publicField(B, "_instance", null);
__publicField(B, "frameBuffer", null);
__publicField(B, "canvas", null);
__publicField(B, "gl", null);
function za(s) {
  if (B.instance.captured = true, B.instance.view.released) {
    T.printMessage("view released");
    return;
  }
  const t = s.target.getBoundingClientRect(), e = s.pageX - t.left, i = s.pageY - t.top;
  B.instance.view.onTouchesBegan(e, i);
}
function Xa(s) {
  if (!B.instance.captured)
    return;
  if (B.instance.view.released) {
    T.printMessage("view released");
    return;
  }
  const t = s.target.getBoundingClientRect(), e = s.clientX - t.left, i = s.clientY - t.top;
  B.instance.view.onTouchesMoved(e, i);
}
function Ya(s) {
  if (B.instance.captured = false, B.instance.view.released) {
    T.printMessage("view released");
    return;
  }
  const t = s.target.getBoundingClientRect(), e = s.clientX - t.left, i = s.clientY - t.top;
  B.instance.view.onTouchesEnded(e, i);
}
function ja(s) {
  if (B.instance.captured = true, B.instance.view.released) {
    T.printMessage("view released");
    return;
  }
  const t = s.target.getBoundingClientRect(), e = s.changedTouches[0].clientX - t.left, i = s.changedTouches[0].clientY - t.top;
  B.instance.view.onTouchesBegan(e, i);
}
function Ga(s) {
  if (!B.instance.captured)
    return;
  if (B.instance.view.released) {
    T.printMessage("view released");
    return;
  }
  const t = s.target.getBoundingClientRect(), e = s.changedTouches[0].clientX - t.left, i = s.changedTouches[0].clientY - t.top;
  B.instance.view.onTouchesMoved(e, i);
}
function Es(s) {
  if (B.instance.captured = false, B.instance.view.released) {
    T.printMessage("view released");
    return;
  }
  const t = s.target.getBoundingClientRect(), e = s.changedTouches[0].clientX - t.left, i = s.changedTouches[0].clientY - t.top;
  B.instance.view.onTouchesEnded(e, i);
}
var As = class {
  static get model() {
    return B.instance;
  }
  static get scene() {
    return q.instance;
  }
  static get view() {
    return this.model.view;
  }
  static async loadScript() {
    return new Promise((t) => {
      globalThis.Live2DCubismCore && t(globalThis.Live2DCubismCore);
      const e = ht.createElement("script");
      e.src = "live2d/core/live2dCubismCore.min.js", ht.body.appendChild(e), e.onload = () => t(globalThis.Live2DCubismCore);
    });
  }
  static async init(t) {
    Ls(t), await this.loadScript(), this.model.initialize() && (this.model.run(), this.listener());
  }
  static async release() {
    return this.model.release();
  }
  static listener() {
    window.addEventListener("beforeunload", () => B.releaseInstance()), window.addEventListener("resize", () => L.canvas === "auto" && this.model.onResize());
  }
  static on(t, e) {
    var _a3;
    (_a3 = this.eventListener[t]) == null ? void 0 : _a3.push(e);
  }
  static emit(t) {
    var _a3;
    (_a3 = this.eventListener[t]) == null ? void 0 : _a3.forEach((e) => e());
  }
};
__publicField(As, "eventListener", { [R.Head]: [], [R.Body]: [], [R.Left]: [], [R.Right]: [], [R.Other]: [] });
var It = As;
export {
  R as HitArea,
  As as Live2dWidget,
  It as default
};
//# sourceMappingURL=live2d-lib.js.map
