// ==UserScript==
// @name     Gift for github
// @version  1
// @grant    none
// @match    https://github.com/*
// ==/UserScript==

// Soruce by: https://github.com/N1ck/gifs-for-github
!function() {
    function t(t) {
      return t && t.__esModule ? t.default : t;
    }
    function e(t, e, r, n) {
      Object.defineProperty(t, e, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
      });
    }
    var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, n = {}, o = {}, i = r.parcelRequire9eac;
    null == i && ((i = function(t) {
      if (t in n) return n[t].exports;
      if (t in o) {
        let e = o[t];
        delete o[t];
        let r = {
          id: t,
          exports: {}
        };
        return n[t] = r, e.call(r.exports, r, r.exports), r.exports;
      }
      var e = new Error("Cannot find module '" + t + "'");
      throw e.code = "MODULE_NOT_FOUND", e;
    }).register = function(t, e) {
      o[t] = e;
    }, r.parcelRequire9eac = i), i.register("dDYOq", (function(e, r) {
      var n = i("OT9lv"), o = i("5ezzQ"), a = i("jT2kw"), s = i("7KF63"), c = i("gmkDX"), u = i("axquJ"), l = i("hewlE"), f = i("fnDSG"), p = i("4VlmS"), d = i("7Z2ZI"), h = i("1bMGE");
      const y = new (i("gV73L").default)("Mpy5mv1k9JRY2rt7YBME2eFRGNs7EGvQ");
      async function g(e) {
        const r = e.closest(".ghg-has-giphy-field"), n = t(f)(".ghg-giphy-results", r), i = t(f)(".ghg-search-input", r);
        if (t(l)(_.bind(this, n))(), "" === i.value && "false" === n.dataset.hasResults) {
          n.append(t(u).createElement("div", null, d.default));
          const e = await y.getTrending();
          n.innerHTML = "", e && e.length > 0 ? S(n, e) : x(n);
        } else setTimeout((() => new (t(o))(n, {
          itemSelector: ".ghg-giphy-results div",
          columnWidth: 145,
          gutter: 10,
          transitionDuration: "0.2s"
        }, 2e3)), 10);
      }
      function m() {
        for (const e of t(f).all("form:not(.ghg-has-giphy-field) markdown-toolbar")) {
          const r = e.closest("form"), n = e.closest("#review-changes-modal .SelectMenu-modal"), o = e.closest("#review-changes-modal .SelectMenu-list");
          null !== n && n.classList.add("ghg-in-review-changes-modal"), null !== o && o.classList.add("ghg-in-review-changes-list"), 
          p.default(e, (() => {
            let n = t(f).all(".toolbar-commenting .d-inline-block, .toolbar-commenting .d-md-inline-block", e);
            n = n[n.length - 1], n && (n.append(h.default.cloneNode(!0)), r.classList.add("ghg-has-giphy-field"));
          }));
        }
      }
      async function v(e) {
        e.preventDefault();
        const r = e.target.value, n = e.target.closest(".ghg-has-giphy-field"), o = t(f)(".ghg-giphy-results", n);
        o.dataset.offset = 0, o.dataset.searchQuery = r, o.append(t(u).createElement("div", null, d.default));
        const i = await ("" === r ? y.getTrending() : y.search(r));
        o.innerHTML = "", i && i.length > 0 ? S(o, i) : x(o);
      }
      function b(e) {
        const r = 5242880;
        let n;
        const o = e.images.fixed_width_downsampled.url;
        n = e.images.original.size < r ? e.images.original.url : e.images.downsized_medium.size < r ? e.images.downsized_medium.url : e.images.fixed_width.size < r ? e.images.fixed_width.url : o;
        const i = Math.floor(145 * e.images.fixed_width.height / e.images.fixed_width.width), a = `hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%,${85 + 10 * Math.random()}%)`;
        return t(u).createElement("div", {
          style: {
            width: "145px"
          }
        }, t(u).createElement("img", {
          src: o,
          height: i,
          style: {
            "background-color": a
          },
          "data-full-size-url": n,
          class: "ghg-gif-selection"
        }));
      }
      function x(e) {
        e.append(t(u).createElement("div", {
          class: "ghg-no-results-found"
        }, "No GIFs found."));
      }
      function S(e, r) {
        e.dataset.hasResults = !0;
        const n = [];
        for (const t of r) {
          const r = b(t);
          n.push(r), e.append(r);
        }
        new (t(o))(e, {
          itemSelector: ".ghg-giphy-results div",
          columnWidth: 145,
          gutter: 10,
          transitionDuration: "0.2s"
        }, 2e3);
      }
      function E(e) {
        const r = e.target.closest(".ghg-has-giphy-field"), o = t(f)(".ghg-trigger", r), i = e.target.dataset.fullSizeUrl, a = t(f)(".js-comment-field", r);
        var s, c;
        o.removeAttribute("open"), c = `![](${i})`, (s = a).focus(), n.insert(s, c);
      }
      function w(t) {
        if (13 === t.keyCode) return t.preventDefault(), !1;
      }
      function _(t) {
        t.addEventListener("scroll", O);
      }
      function O(t) {
        let e;
        const r = t.target;
        r.scrollTop + 395 + 100 > Number.parseInt(r.style.height, 10) && (clearTimeout(e), 
        e = setTimeout((async () => {
          const t = r.dataset.offset ? Number.parseInt(r.dataset.offset, 10) + 50 : 50, e = r.dataset.searchQuery;
          r.dataset.offset = t;
          const n = await (e ? y.search(e, t) : y.getTrending(t));
          S(r, n);
        }), 250));
      }
      const A = t(l)((function() {
        t(s)(".ghg-gif-selection", "click", E), t(s)(".ghg-has-giphy-field .ghg-search-input", "keydown", t(a)(v, {
          wait: 400
        })), t(s)(".ghg-has-giphy-field .ghg-search-input", "keypress", w), t(s)(".ghg-trigger:not([open]) > summary", "click", (t => {
          g(t.delegateTarget);
        }));
      }));
      t(c)((() => {
        m(), A(), function() {
          const e = t(f)(".js-discussion");
          p.default(e, (() => {
            m();
          }));
        }(), function() {
          for (const e of t(f).all(".ghg-modal")) {
            const r = t(f)(".ghg-giphy-results", e);
            t(f)(".ghg-search-input", e).value = "", r.innerHTML = "", r.dataset.offset = 0, 
            r.dataset.searchQuery = "", r.dataset.hasResults = !1;
          }
        }();
      }));
    })), i.register("OT9lv", (function(t, r) {
      function n(t, e) {
        var r = t.ownerDocument, n = r.activeElement;
        n !== t && t.focus(), r.execCommand("insertText", !1, e) || function(t, e) {
          t.setRangeText(e, t.selectionStart || 0, t.selectionEnd || 0, "end"), t.dispatchEvent(new InputEvent("input", {
            data: e,
            inputType: "insertText",
            isComposing: !1
          }));
        }(t, e), n === r.body ? t.blur() : n instanceof HTMLElement && n !== t && n.focus();
      }
      e(t.exports, "insert", (() => n));
    })), i.register("5ezzQ", (function(t, e) {
      !function(e, r) {
        "function" == typeof define && define.amd ? define([ "outlayer/outlayer", "get-size/get-size" ], r) : t.exports ? t.exports = r(i("01UYV"), i("h4CxY")) : e.Masonry = r(e.Outlayer, e.getSize);
      }(window, (function(t, e) {
        "use strict";
        var r = t.create("masonry");
        r.compatOptions.fitWidth = "isFitWidth";
        var n = r.prototype;
        return n._resetLayout = function() {
          this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), 
          this.measureColumns(), this.colYs = [];
          for (var t = 0; t < this.cols; t++) this.colYs.push(0);
          this.maxY = 0, this.horizontalColIndex = 0;
        }, n.measureColumns = function() {
          if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], r = t && t.element;
            this.columnWidth = r && e(r).outerWidth || this.containerWidth;
          }
          var n = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, i = o / n, a = n - o % n;
          i = Math[a && a < 1 ? "round" : "floor"](i), this.cols = Math.max(i, 1);
        }, n.getContainerWidth = function() {
          var t = this._getOption("fitWidth") ? this.element.parentNode : this.element, r = e(t);
          this.containerWidth = r && r.innerWidth;
        }, n._getItemLayoutPosition = function(t) {
          t.getSize();
          var e = t.size.outerWidth % this.columnWidth, r = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
          r = Math.min(r, this.cols);
          for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](r, t), o = {
            x: this.columnWidth * n.col,
            y: n.y
          }, i = n.y + t.size.outerHeight, a = r + n.col, s = n.col; s < a; s++) this.colYs[s] = i;
          return o;
        }, n._getTopColPosition = function(t) {
          var e = this._getTopColGroup(t), r = Math.min.apply(Math, e);
          return {
            col: e.indexOf(r),
            y: r
          };
        }, n._getTopColGroup = function(t) {
          if (t < 2) return this.colYs;
          for (var e = [], r = this.cols + 1 - t, n = 0; n < r; n++) e[n] = this._getColGroupY(n, t);
          return e;
        }, n._getColGroupY = function(t, e) {
          if (e < 2) return this.colYs[t];
          var r = this.colYs.slice(t, t + e);
          return Math.max.apply(Math, r);
        }, n._getHorizontalColPosition = function(t, e) {
          var r = this.horizontalColIndex % this.cols;
          r = t > 1 && r + t > this.cols ? 0 : r;
          var n = e.size.outerWidth && e.size.outerHeight;
          return this.horizontalColIndex = n ? r + t : this.horizontalColIndex, {
            col: r,
            y: this._getColGroupY(r, t)
          };
        }, n._manageStamp = function(t) {
          var r = e(t), n = this._getElementOffset(t), o = this._getOption("originLeft") ? n.left : n.right, i = o + r.outerWidth, a = Math.floor(o / this.columnWidth);
          a = Math.max(0, a);
          var s = Math.floor(i / this.columnWidth);
          s -= i % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
          for (var c = (this._getOption("originTop") ? n.top : n.bottom) + r.outerHeight, u = a; u <= s; u++) this.colYs[u] = Math.max(c, this.colYs[u]);
        }, n._getContainerSize = function() {
          this.maxY = Math.max.apply(Math, this.colYs);
          var t = {
            height: this.maxY
          };
          return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), 
          t;
        }, n._getContainerFitWidth = function() {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
          return (this.cols - t) * this.columnWidth - this.gutter;
        }, n.needsResizeLayout = function() {
          var t = this.containerWidth;
          return this.getContainerWidth(), t != this.containerWidth;
        }, r;
      }));
    })), i.register("01UYV", (function(t, e) {
      !function(e, r) {
        "function" == typeof define && define.amd ? define([ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], (function(t, n, o, i) {
          return r(e, t, n, o, i);
        })) : t.exports ? t.exports = r(e, i("2lNhc"), i("h4CxY"), i("656gu"), i("gRPq2")) : e.Outlayer = r(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item);
      }(window, (function(t, e, r, n, o) {
        "use strict";
        var i = t.console, a = t.jQuery, s = function() {}, c = 0, u = {};
        function l(t, e) {
          var r = n.getQueryElement(t);
          if (r) {
            this.element = r, a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), 
            this.option(e);
            var o = ++c;
            this.element.outlayerGUID = o, u[o] = this, this._create(), this._getOption("initLayout") && this.layout();
          } else i && i.error("Bad element for " + this.constructor.namespace + ": " + (r || t));
        }
        l.namespace = "outlayer", l.Item = o, l.defaults = {
          containerStyle: {
            position: "relative"
          },
          initLayout: !0,
          originLeft: !0,
          originTop: !0,
          resize: !0,
          resizeContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
          },
          visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
          }
        };
        var f = l.prototype;
        function p(t) {
          function e() {
            t.apply(this, arguments);
          }
          return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
        }
        n.extend(f, e.prototype), f.option = function(t) {
          n.extend(this.options, t);
        }, f._getOption = function(t) {
          var e = this.constructor.compatOptions[t];
          return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
        }, l.compatOptions = {
          initLayout: "isInitLayout",
          horizontal: "isHorizontal",
          layoutInstant: "isLayoutInstant",
          originLeft: "isOriginLeft",
          originTop: "isOriginTop",
          resize: "isResizeBound",
          resizeContainer: "isResizingContainer"
        }, f._create = function() {
          this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), 
          this._getOption("resize") && this.bindResize();
        }, f.reloadItems = function() {
          this.items = this._itemize(this.element.children);
        }, f._itemize = function(t) {
          for (var e = this._filterFindItemElements(t), r = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var i = new r(e[o], this);
            n.push(i);
          }
          return n;
        }, f._filterFindItemElements = function(t) {
          return n.filterFindElements(t, this.options.itemSelector);
        }, f.getItemElements = function() {
          return this.items.map((function(t) {
            return t.element;
          }));
        }, f.layout = function() {
          this._resetLayout(), this._manageStamps();
          var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
          this.layoutItems(this.items, e), this._isLayoutInited = !0;
        }, f._init = f.layout, f._resetLayout = function() {
          this.getSize();
        }, f.getSize = function() {
          this.size = r(this.element);
        }, f._getMeasurement = function(t, e) {
          var n, o = this.options[t];
          o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), 
          this[t] = n ? r(n)[e] : o) : this[t] = 0;
        }, f.layoutItems = function(t, e) {
          t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
        }, f._getItemsForLayout = function(t) {
          return t.filter((function(t) {
            return !t.isIgnored;
          }));
        }, f._layoutItems = function(t, e) {
          if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var r = [];
            t.forEach((function(t) {
              var n = this._getItemLayoutPosition(t);
              n.item = t, n.isInstant = e || t.isLayoutInstant, r.push(n);
            }), this), this._processLayoutQueue(r);
          }
        }, f._getItemLayoutPosition = function() {
          return {
            x: 0,
            y: 0
          };
        }, f._processLayoutQueue = function(t) {
          this.updateStagger(), t.forEach((function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }), this);
        }, f.updateStagger = function() {
          var t = this.options.stagger;
          if (null != t) return this.stagger = function(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/), r = e && e[1], n = e && e[2];
            return r.length ? (r = parseFloat(r)) * (d[n] || 1) : 0;
          }(t), this.stagger;
          this.stagger = 0;
        }, f._positionItem = function(t, e, r, n, o) {
          n ? t.goTo(e, r) : (t.stagger(o * this.stagger), t.moveTo(e, r));
        }, f._postLayout = function() {
          this.resizeContainer();
        }, f.resizeContainer = function() {
          if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
          }
        }, f._getContainerSize = s, f._setContainerMeasure = function(t, e) {
          if (void 0 !== t) {
            var r = this.size;
            r.isBorderBox && (t += e ? r.paddingLeft + r.paddingRight + r.borderLeftWidth + r.borderRightWidth : r.paddingBottom + r.paddingTop + r.borderTopWidth + r.borderBottomWidth), 
            t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
          }
        }, f._emitCompleteOnItems = function(t, e) {
          var r = this;
          function n() {
            r.dispatchEvent(t + "Complete", null, [ e ]);
          }
          var o = e.length;
          if (e && o) {
            var i = 0;
            e.forEach((function(e) {
              e.once(t, a);
            }));
          } else n();
          function a() {
            ++i == o && n();
          }
        }, f.dispatchEvent = function(t, e, r) {
          var n = e ? [ e ].concat(r) : r;
          if (this.emitEvent(t, n), a) if (this.$element = this.$element || a(this.element), 
          e) {
            var o = a.Event(e);
            o.type = t, this.$element.trigger(o, r);
          } else this.$element.trigger(t, r);
        }, f.ignore = function(t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }, f.unignore = function(t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }, f.stamp = function(t) {
          (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
        }, f.unstamp = function(t) {
          (t = this._find(t)) && t.forEach((function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t);
          }), this);
        }, f._find = function(t) {
          if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t);
        }, f._manageStamps = function() {
          this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
        }, f._getBoundingRect = function() {
          var t = this.element.getBoundingClientRect(), e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
          };
        }, f._manageStamp = s, f._getElementOffset = function(t) {
          var e = t.getBoundingClientRect(), n = this._boundingRect, o = r(t);
          return {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom
          };
        }, f.handleEvent = n.handleEvent, f.bindResize = function() {
          t.addEventListener("resize", this), this.isResizeBound = !0;
        }, f.unbindResize = function() {
          t.removeEventListener("resize", this), this.isResizeBound = !1;
        }, f.onresize = function() {
          this.resize();
        }, n.debounceMethod(l, "onresize", 100), f.resize = function() {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }, f.needsResizeLayout = function() {
          var t = r(this.element);
          return this.size && t && t.innerWidth !== this.size.innerWidth;
        }, f.addItems = function(t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }, f.appended = function(t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }, f.prepended = function(t) {
          var e = this._itemize(t);
          if (e.length) {
            var r = this.items.slice(0);
            this.items = e.concat(r), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), 
            this.reveal(e), this.layoutItems(r);
          }
        }, f.reveal = function(t) {
          if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, r) {
              t.stagger(r * e), t.reveal();
            }));
          }
        }, f.hide = function(t) {
          if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach((function(t, r) {
              t.stagger(r * e), t.hide();
            }));
          }
        }, f.revealItemElements = function(t) {
          var e = this.getItems(t);
          this.reveal(e);
        }, f.hideItemElements = function(t) {
          var e = this.getItems(t);
          this.hide(e);
        }, f.getItem = function(t) {
          for (var e = 0; e < this.items.length; e++) {
            var r = this.items[e];
            if (r.element == t) return r;
          }
        }, f.getItems = function(t) {
          t = n.makeArray(t);
          var e = [];
          return t.forEach((function(t) {
            var r = this.getItem(t);
            r && e.push(r);
          }), this), e;
        }, f.remove = function(t) {
          var e = this.getItems(t);
          this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
            t.remove(), n.removeFrom(this.items, t);
          }), this);
        }, f.destroy = function() {
          var t = this.element.style;
          t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
            t.destroy();
          })), this.unbindResize();
          var e = this.element.outlayerGUID;
          delete u[e], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace);
        }, l.data = function(t) {
          var e = (t = n.getQueryElement(t)) && t.outlayerGUID;
          return e && u[e];
        }, l.create = function(t, e) {
          var r = p(l);
          return r.defaults = n.extend({}, l.defaults), n.extend(r.defaults, e), r.compatOptions = n.extend({}, l.compatOptions), 
          r.namespace = t, r.data = l.data, r.Item = p(o), n.htmlInit(r, t), a && a.bridget && a.bridget(t, r), 
          r;
        };
        var d = {
          ms: 1,
          s: 1e3
        };
        return l.Item = o, l;
      }));
    })), i.register("2lNhc", (function(t, e) {
      !function(e, r) {
        "function" == typeof define && define.amd ? define(r) : t.exports ? t.exports = r() : e.EvEmitter = r();
      }("undefined" != typeof window ? window : t.exports, (function() {
        "use strict";
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
          if (t && e) {
            var r = this._events = this._events || {}, n = r[t] = r[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this;
          }
        }, e.once = function(t, e) {
          if (t && e) {
            this.on(t, e);
            var r = this._onceEvents = this._onceEvents || {};
            return (r[t] = r[t] || {})[e] = !0, this;
          }
        }, e.off = function(t, e) {
          var r = this._events && this._events[t];
          if (r && r.length) {
            var n = r.indexOf(e);
            return -1 != n && r.splice(n, 1), this;
          }
        }, e.emitEvent = function(t, e) {
          var r = this._events && this._events[t];
          if (r && r.length) {
            r = r.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < r.length; o++) {
              var i = r[o];
              n && n[i] && (this.off(t, i), delete n[i]), i.apply(this, e);
            }
            return this;
          }
        }, e.allOff = function() {
          delete this._events, delete this._onceEvents;
        }, t;
      }));
    })), i.register("h4CxY", (function(t, e) {
      /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */ !function(e, r) {
        "function" == typeof define && define.amd ? define(r) : t.exports ? t.exports = r() : e.getSize = r();
      }(window, (function() {
        "use strict";
        function t(t) {
          var e = parseFloat(t);
          return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        var e = "undefined" == typeof console ? function() {} : function(t) {
          console.error(t);
        }, r = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], n = r.length;
        function o(t) {
          var r = getComputedStyle(t);
          return r || e("Style returned " + r + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), 
          r;
        }
        var i, a = !1;
        function s(e) {
          if (function() {
            if (!a) {
              a = !0;
              var e = document.createElement("div");
              e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", 
              e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
              var r = document.body || document.documentElement;
              r.appendChild(e);
              var n = o(e);
              i = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = i, r.removeChild(e);
            }
          }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var c = o(e);
            if ("none" == c.display) return function() {
              for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
              }, e = 0; e < n; e++) t[r[e]] = 0;
              return t;
            }();
            var u = {};
            u.width = e.offsetWidth, u.height = e.offsetHeight;
            for (var l = u.isBorderBox = "border-box" == c.boxSizing, f = 0; f < n; f++) {
              var p = r[f], d = c[p], h = parseFloat(d);
              u[p] = isNaN(h) ? 0 : h;
            }
            var y = u.paddingLeft + u.paddingRight, g = u.paddingTop + u.paddingBottom, m = u.marginLeft + u.marginRight, v = u.marginTop + u.marginBottom, b = u.borderLeftWidth + u.borderRightWidth, x = u.borderTopWidth + u.borderBottomWidth, S = l && i, E = t(c.width);
            !1 !== E && (u.width = E + (S ? 0 : y + b));
            var w = t(c.height);
            return !1 !== w && (u.height = w + (S ? 0 : g + x)), u.innerWidth = u.width - (y + b), 
            u.innerHeight = u.height - (g + x), u.outerWidth = u.width + m, u.outerHeight = u.height + v, 
            u;
          }
        }
        return s;
      }));
    })), i.register("656gu", (function(t, e) {
      !function(e, r) {
        "function" == typeof define && define.amd ? define([ "desandro-matches-selector/matches-selector" ], (function(t) {
          return r(e, t);
        })) : t.exports ? t.exports = r(e, i("fE3tl")) : e.fizzyUIUtils = r(e, e.matchesSelector);
      }(window, (function(t, e) {
        "use strict";
        var r = {
          extend: function(t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          modulo: function(t, e) {
            return (t % e + e) % e;
          }
        }, n = Array.prototype.slice;
        r.makeArray = function(t) {
          return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [ t ];
        }, r.removeFrom = function(t, e) {
          var r = t.indexOf(e);
          -1 != r && t.splice(r, 1);
        }, r.getParent = function(t, r) {
          for (;t.parentNode && t != document.body; ) if (t = t.parentNode, e(t, r)) return t;
        }, r.getQueryElement = function(t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        }, r.handleEvent = function(t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }, r.filterFindElements = function(t, n) {
          t = r.makeArray(t);
          var o = [];
          return t.forEach((function(t) {
            if (t instanceof HTMLElement) if (n) {
              e(t, n) && o.push(t);
              for (var r = t.querySelectorAll(n), i = 0; i < r.length; i++) o.push(r[i]);
            } else o.push(t);
          })), o;
        }, r.debounceMethod = function(t, e, r) {
          r = r || 100;
          var n = t.prototype[e], o = e + "Timeout";
          t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments, i = this;
            this[o] = setTimeout((function() {
              n.apply(i, e), delete i[o];
            }), r);
          };
        }, r.docReady = function(t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
        }, r.toDashed = function(t) {
          return t.replace(/(.)([A-Z])/g, (function(t, e, r) {
            return e + "-" + r;
          })).toLowerCase();
        };
        var o = t.console;
        return r.htmlInit = function(e, n) {
          r.docReady((function() {
            var i = r.toDashed(n), a = "data-" + i, s = document.querySelectorAll("[" + a + "]"), c = document.querySelectorAll(".js-" + i), u = r.makeArray(s).concat(r.makeArray(c)), l = a + "-options", f = t.jQuery;
            u.forEach((function(t) {
              var r, i = t.getAttribute(a) || t.getAttribute(l);
              try {
                r = i && JSON.parse(i);
              } catch (e) {
                return void (o && o.error("Error parsing " + a + " on " + t.className + ": " + e));
              }
              var s = new e(t, r);
              f && f.data(t, n, s);
            }));
          }));
        }, r;
      }));
    })), i.register("fE3tl", (function(t, e) {
      !function(e, r) {
        "function" == typeof define && define.amd ? define(r) : t.exports ? t.exports = r() : e.matchesSelector = r();
      }(window, (function() {
        "use strict";
        var t = function() {
          var t = window.Element.prototype;
          if (t.matches) return "matches";
          if (t.matchesSelector) return "matchesSelector";
          for (var e = [ "webkit", "moz", "ms", "o" ], r = 0; r < e.length; r++) {
            var n = e[r] + "MatchesSelector";
            if (t[n]) return n;
          }
        }();
        return function(e, r) {
          return e[t](r);
        };
      }));
    })), i.register("gRPq2", (function(t, e) {
      !function(e, r) {
        "function" == typeof define && define.amd ? define([ "ev-emitter/ev-emitter", "get-size/get-size" ], r) : t.exports ? t.exports = r(i("2lNhc"), i("h4CxY")) : (e.Outlayer = {}, 
        e.Outlayer.Item = r(e.EvEmitter, e.getSize));
      }(window, (function(t, e) {
        "use strict";
        var r = document.documentElement.style, n = "string" == typeof r.transition ? "transition" : "WebkitTransition", o = "string" == typeof r.transform ? "transform" : "WebkitTransform", i = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend"
        }[n], a = {
          transform: o,
          transition: n,
          transitionDuration: n + "Duration",
          transitionProperty: n + "Property",
          transitionDelay: n + "Delay"
        };
        function s(t, e) {
          t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
          }, this._create());
        }
        var c = s.prototype = Object.create(t.prototype);
        c.constructor = s, c._create = function() {
          this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
          }, this.css({
            position: "absolute"
          });
        }, c.handleEvent = function(t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }, c.getSize = function() {
          this.size = e(this.element);
        }, c.css = function(t) {
          var e = this.element.style;
          for (var r in t) {
            e[a[r] || r] = t[r];
          }
        }, c.getPosition = function() {
          var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), r = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], o = t[r ? "top" : "bottom"], i = parseFloat(n), a = parseFloat(o), s = this.layout.size;
          -1 != n.indexOf("%") && (i = i / 100 * s.width), -1 != o.indexOf("%") && (a = a / 100 * s.height), 
          i = isNaN(i) ? 0 : i, a = isNaN(a) ? 0 : a, i -= e ? s.paddingLeft : s.paddingRight, 
          a -= r ? s.paddingTop : s.paddingBottom, this.position.x = i, this.position.y = a;
        }, c.layoutPosition = function() {
          var t = this.layout.size, e = {}, r = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), o = r ? "paddingLeft" : "paddingRight", i = r ? "left" : "right", a = r ? "right" : "left", s = this.position.x + t[o];
          e[i] = this.getXValue(s), e[a] = "";
          var c = n ? "paddingTop" : "paddingBottom", u = n ? "top" : "bottom", l = n ? "bottom" : "top", f = this.position.y + t[c];
          e[u] = this.getYValue(f), e[l] = "", this.css(e), this.emitEvent("layout", [ this ]);
        }, c.getXValue = function(t) {
          var e = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
        }, c.getYValue = function(t) {
          var e = this.layout._getOption("horizontal");
          return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
        }, c._transitionTo = function(t, e) {
          this.getPosition();
          var r = this.position.x, n = this.position.y, o = t == this.position.x && e == this.position.y;
          if (this.setPosition(t, e), !o || this.isTransitioning) {
            var i = t - r, a = e - n, s = {};
            s.transform = this.getTranslate(i, a), this.transition({
              to: s,
              onTransitionEnd: {
                transform: this.layoutPosition
              },
              isCleaning: !0
            });
          } else this.layoutPosition();
        }, c.getTranslate = function(t, e) {
          return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
        }, c.goTo = function(t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
          this.position.x = parseFloat(t), this.position.y = parseFloat(e);
        }, c._nonTransition = function(t) {
          for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }, c.transition = function(t) {
          if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var r in t.onTransitionEnd) e.onEnd[r] = t.onTransitionEnd[r];
            for (r in t.to) e.ingProperties[r] = !0, t.isCleaning && (e.clean[r] = !0);
            if (t.from) {
              this.css(t.from);
              this.element.offsetHeight;
              null;
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
          } else this._nonTransition(t);
        };
        var u = "opacity," + o.replace(/([A-Z])/g, (function(t) {
          return "-" + t.toLowerCase();
        }));
        c.enableTransition = function() {
          if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
              transitionProperty: u,
              transitionDuration: t,
              transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(i, this, !1);
          }
        }, c.onwebkitTransitionEnd = function(t) {
          this.ontransitionend(t);
        }, c.onotransitionend = function(t) {
          this.ontransitionend(t);
        };
        var l = {
          "-webkit-transform": "transform"
        };
        c.ontransitionend = function(t) {
          if (t.target === this.element) {
            var e = this._transn, r = l[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[r], function(t) {
              for (var e in t) return !1;
              return !0;
            }(e.ingProperties) && this.disableTransition(), r in e.clean && (this.element.style[t.propertyName] = "", 
            delete e.clean[r]), r in e.onEnd) e.onEnd[r].call(this), delete e.onEnd[r];
            this.emitEvent("transitionEnd", [ this ]);
          }
        }, c.disableTransition = function() {
          this.removeTransitionStyles(), this.element.removeEventListener(i, this, !1), this.isTransitioning = !1;
        }, c._removeStyles = function(t) {
          var e = {};
          for (var r in t) e[r] = "";
          this.css(e);
        };
        var f = {
          transitionProperty: "",
          transitionDuration: "",
          transitionDelay: ""
        };
        return c.removeTransitionStyles = function() {
          this.css(f);
        }, c.stagger = function(t) {
          t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
        }, c.removeElem = function() {
          this.element.parentNode.removeChild(this.element), this.css({
            display: ""
          }), this.emitEvent("remove", [ this ]);
        }, c.remove = function() {
          n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem();
          })), this.hide()) : this.removeElem();
        }, c.reveal = function() {
          delete this.isHidden, this.css({
            display: ""
          });
          var t = this.layout.options, e = {};
          e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, 
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
        }, c.onRevealTransitionEnd = function() {
          this.isHidden || this.emitEvent("reveal");
        }, c.getHideRevealTransitionEndProperty = function(t) {
          var e = this.layout.options[t];
          if (e.opacity) return "opacity";
          for (var r in e) return r;
        }, c.hide = function() {
          this.isHidden = !0, this.css({
            display: ""
          });
          var t = this.layout.options, e = {};
          e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, 
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
          });
        }, c.onHideTransitionEnd = function() {
          this.isHidden && (this.css({
            display: "none"
          }), this.emitEvent("hide"));
        }, c.destroy = function() {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
          });
        }, s;
      }));
    })), i.register("jT2kw", (function(t, e) {
      "use strict";
      var r = i("aqjHr");
      t.exports = (t, e) => {
        if ("function" != typeof t) throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);
        let n, o;
        e = e || {};
        const i = function() {
          const r = this, i = arguments, a = () => {
            n = null, e.immediate || (o = t.apply(r, i));
          }, s = e.immediate && !n;
          return clearTimeout(n), n = setTimeout(a, e.wait || 0), s && (o = t.apply(r, i)), 
          o;
        };
        return r(i, t), i.cancel = () => {
          n && (clearTimeout(n), n = null);
        }, i;
      };
    })), i.register("aqjHr", (function(t, e) {
      "use strict";
      t.exports = (t, e) => {
        for (const r of Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))) Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
        return t;
      };
    })), i.register("7KF63", (function(t, e) {
      var r = i("8jewa");
      function n(t, e, r, n, i) {
        var a = o.apply(this, arguments);
        return t.addEventListener(r, a, i), {
          destroy: function() {
            t.removeEventListener(r, a, i);
          }
        };
      }
      function o(t, e, n, o) {
        return function(n) {
          n.delegateTarget = r(n.target, e), n.delegateTarget && o.call(t, n);
        };
      }
      t.exports = function(t, e, r, o, i) {
        return "function" == typeof t.addEventListener ? n.apply(null, arguments) : "function" == typeof r ? n.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), 
        Array.prototype.map.call(t, (function(t) {
          return n(t, e, r, o, i);
        })));
      };
    })), i.register("8jewa", (function(t, e) {
      if ("undefined" != typeof Element && !Element.prototype.matches) {
        var r = Element.prototype;
        r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
      }
      t.exports = function(t, e) {
        for (;t && 9 !== t.nodeType; ) {
          if ("function" == typeof t.matches && t.matches(e)) return t;
          t = t.parentNode;
        }
      };
    })), i.register("gmkDX", (function(t, e) {
      "use strict";
      void 0 !== e && (e = t.exports = t => {
        if (!t) throw new Error("Missing argument callback");
        if ("function" != typeof t) throw new TypeError("Callback is not a function");
        document.addEventListener("pjax:end", t), t();
      });
    })), i.register("axquJ", (function(t, e) {
      "use strict";
      var r = i("oNEVs"), n = i("epJKa");
      const o = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, a = [ "a", "audio", "canvas", "iframe", "script", "video" ], s = r.filter((t => !a.includes(t))), c = t => (t => s.includes(t))(t) ? document.createElementNS("http://www.w3.org/2000/svg", t) : t === DocumentFragment ? document.createDocumentFragment() : document.createElement(t), u = (t, e, r) => {
        null != r && (/^xlink[AHRST]/.test(e) ? t.setAttributeNS("http://www.w3.org/1999/xlink", e.replace("xlink", "xlink:").toLowerCase(), r) : t.setAttribute(e, r));
      }, l = (t, e, r) => {
        const n = c(t);
        return Object.keys(e).forEach((t => {
          const r = e[t];
          if ("class" === t || "className" === t) u(n, "class", r); else if ("style" === t) ((t, e) => {
            Object.keys(e).forEach((r => {
              let n = e[r];
              "number" != typeof n || o.test(r) || (n += "px"), t.style[r] = n;
            }));
          })(n, r); else if (0 === t.indexOf("on")) {
            const e = t.slice(2).toLowerCase();
            n.addEventListener(e, r);
          } else "dangerouslySetInnerHTML" === t ? n.innerHTML = r.__html : "key" !== t && !1 !== r && u(n, t, !0 === r ? "" : r);
        })), e.dangerouslySetInnerHTML || n.appendChild(r), n;
      };
      function f(t, e) {
        const r = [].slice.apply(arguments, [ 2 ]), o = document.createDocumentFragment();
        return n(r).forEach((t => {
          t instanceof Node ? o.appendChild(t) : "boolean" != typeof t && null != t && o.appendChild(document.createTextNode(t));
        })), l(t, e || {}, o);
      }
      const p = {
        createElement: f,
        Fragment: "function" == typeof DocumentFragment ? DocumentFragment : () => {}
      };
      t.exports = p, t.exports.h = f, t.exports.default = p;
    })), i.register("oNEVs", (function(t, e) {
      t.exports = JSON.parse('["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"]');
    })), i.register("epJKa", (function(t, e) {
      /*!
   * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
      "use strict";
      function r(t, e) {
        for (var n, o = 0, i = t.length; o < i; o++) n = t[o], Array.isArray(n) ? r(n, e) : e.push(n);
        return e;
      }
      t.exports = function(t) {
        return r(t, []);
      };
    })), i.register("hewlE", (function(t, e) {
      "use strict";
      var r = i("aqjHr");
      t.exports = (t, e) => {
        if (!0 === e) throw new TypeError("The second argument is now an options object");
        if ("function" != typeof t) throw new TypeError("Expected a function");
        let n;
        e = e || {};
        let o = !1;
        const i = t.displayName || t.name || "<anonymous>", a = function() {
          if (o) {
            if (!0 === e.throw) throw new Error(`Function \`${i}\` can only be called once`);
            return n;
          }
          return o = !0, n = t.apply(this, arguments), t = null, n;
        };
        return r(a, t), a;
      };
    })), i.register("fnDSG", (function(t, e) {
      "use strict";
      function r(t, e) {
        return 2 !== arguments.length || e ? (e || document).querySelector(t) : null;
      }
      r.exists = function(t, e) {
        return 2 === arguments.length ? Boolean(r(t, e)) : Boolean(r(t));
      }, r.all = function(t, e) {
        if (2 === arguments.length && !e) return [];
        if (!e || "function" == typeof e.querySelectorAll) return Array.apply(null, (e || document).querySelectorAll(t));
        var r, n, o, i;
        for (n = 0; n < e.length; n++) if (r = e[n].querySelectorAll(t), i) for (o = 0; o < r.length; o++) i.indexOf(r[o]) < 0 && i.push(r[o]); else i = Array.apply(null, r);
        return i;
      }, t.exports = r;
    })), i.register("4VlmS", (function(t, r) {
      function n(t, e, r) {
        if (r = {
          ...r,
          childList: !0
        }, "string" == typeof t && (t = document.querySelector(t)), !t) return;
        const n = new MutationObserver(e);
        return n.observe(t, r), e.call(n, []), n;
      }
      e(t.exports, "default", (() => n));
    })), i.register("7Z2ZI", (function(r, n) {
      e(r.exports, "default", (() => a));
      var o = i("axquJ"), a = t(o).createElement("div", {
        class: "anim-pulse"
      }, t(o).createElement("svg", {
        class: "octicon octicon-octoface",
        viewBox: "0 0 16 16",
        version: "1.1",
        width: "16",
        height: "16",
        "aria-hidden": "true"
      }, t(o).createElement("path", {
        "fill-rule": "evenodd",
        d: "M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"
      })));
    })), i.register("1bMGE", (function(r, n) {
      e(r.exports, "default", (() => a));
      var o = i("axquJ"), a = t(o).createElement("details", {
        class: "details-reset details-overlay toolbar-item select-menu select-menu-modal-right ghg-trigger"
      }, t(o).createElement("summary", {
        class: "menu-target",
        "aria-label": "Insert a GIF",
        "aria-haspopup": "menu"
      }, "GIF"), t(o).createElement("details-menu", {
        class: "select-menu-modal position-absolute right-0 ghg-modal",
        style: {
          "z-index": 99,
          width: "480px",
          "max-height": "410px"
        },
        role: "menu"
      }, t(o).createElement("div", {
        class: "select-menu-header d-flex"
      }, t(o).createElement("span", {
        class: "select-menu-title flex-auto"
      }, "Select a GIF"), t(o).createElement("span", {
        class: "ghg-powered-by-giphy"
      })), t(o).createElement("tab-list", null, t(o).createElement("div", {
        class: "select-menu-filters"
      }, t(o).createElement("div", {
        class: "select-menu-text-filter"
      }, t(o).createElement("input", {
        type: "text",
        class: "form-control ghg-search-input",
        placeholder: "Search for a GIF…",
        "aria-label": "Search for a GIF",
        autofocus: ""
      }))), t(o).createElement("div", {
        class: "ghg-giphy-results",
        style: {
          display: "flex",
          "align-items": "center",
          "justify-content": "center"
        }
      }))));
    })), i.register("gV73L", (function(t, r) {
      e(t.exports, "default", (() => o));
      var n = i("5bn8a");
      class o {
        async search(t, e = 0) {
          const {data: r} = await this.client.search(t, {
            offset: e,
            limit: 50
          });
          return r;
        }
        async getTrending(t = 0) {
          const {data: e} = await this.client.trending({
            offset: t,
            limit: 50
          });
          return e;
        }
        constructor(t) {
          if (!t) throw new Error("[GIPHY] API Token required");
          this.client = new n.GiphyFetch(t);
        }
      }
    })), i.register("5bn8a", (function(t, e) {
      "use strict";
      var r, n = t.exports && t.exports.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
          enumerable: !0,
          get: function() {
            return e[r];
          }
        });
      } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r];
      }), o = t.exports && t.exports.__exportStar || function(t, e) {
        for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || n(e, t, r);
      }, a = t.exports && t.exports.__importDefault || function(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.gifPaginator = t.exports.GiphyFetch = void 0;
      var s = i("aiEcj"), c = i("4wtNY");
      Object.defineProperty(t.exports, "GiphyFetch", {
        enumerable: !0,
        get: function() {
          return a(c).default;
        }
      }), o(i("hvOTq"), t.exports), o(i("iknJx"), t.exports);
      var u = i("kMMoF");
      Object.defineProperty(t.exports, "gifPaginator", {
        enumerable: !0,
        get: function() {
          return u.gifPaginator;
        }
      });
      var l = i("45DIW").version;
      (null === (r = s.getGiphySDKRequestHeaders()) || void 0 === r ? void 0 : r.get("X-GIPHY-SDK-NAME")) || (s.appendGiphySDKRequestHeader("X-GIPHY-SDK-NAME", "FetchAPI"), 
      s.appendGiphySDKRequestHeader("X-GIPHY-SDK-VERSION", l));
    })), i.register("aiEcj", (function(t, e) {
      "use strict";
      var r = t.exports && t.exports.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
          enumerable: !0,
          get: function() {
            return e[r];
          }
        });
      } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r];
      }), n = t.exports && t.exports.__exportStar || function(t, e) {
        for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || r(e, t, n);
      }, o = t.exports && t.exports.__importDefault || function(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.checkIfWebP = t.exports.injectTrackingPixel = t.exports.getSpecificRendition = t.exports.getGifWidth = t.exports.getGifHeight = t.exports.getBestRenditionUrl = t.exports.getBestRendition = t.exports.getAltText = t.exports.getPingbackId = t.exports.getClientRect = t.exports.setRenditionScaleUpMaxPixels = t.exports.bestfit = void 0;
      var a = i("doDtT");
      Object.defineProperty(t.exports, "bestfit", {
        enumerable: !0,
        get: function() {
          return o(a).default;
        }
      }), Object.defineProperty(t.exports, "setRenditionScaleUpMaxPixels", {
        enumerable: !0,
        get: function() {
          return a.setRenditionScaleUpMaxPixels;
        }
      }), n(i("7b1FC"), t.exports), n(i("iyYqQ"), t.exports);
      var s = i("ent7P");
      Object.defineProperty(t.exports, "getClientRect", {
        enumerable: !0,
        get: function() {
          return o(s).default;
        }
      });
      var c = i("a2JyH");
      Object.defineProperty(t.exports, "getPingbackId", {
        enumerable: !0,
        get: function() {
          return o(c).default;
        }
      });
      var u = i("lHOwJ");
      Object.defineProperty(t.exports, "getAltText", {
        enumerable: !0,
        get: function() {
          return u.getAltText;
        }
      }), Object.defineProperty(t.exports, "getBestRendition", {
        enumerable: !0,
        get: function() {
          return u.getBestRendition;
        }
      }), Object.defineProperty(t.exports, "getBestRenditionUrl", {
        enumerable: !0,
        get: function() {
          return u.getBestRenditionUrl;
        }
      }), Object.defineProperty(t.exports, "getGifHeight", {
        enumerable: !0,
        get: function() {
          return u.getGifHeight;
        }
      }), Object.defineProperty(t.exports, "getGifWidth", {
        enumerable: !0,
        get: function() {
          return u.getGifWidth;
        }
      }), Object.defineProperty(t.exports, "getSpecificRendition", {
        enumerable: !0,
        get: function() {
          return u.getSpecificRendition;
        }
      }), n(i("fvrtg"), t.exports), n(i("cBx4X"), t.exports);
      var l = i("2nEW5");
      Object.defineProperty(t.exports, "injectTrackingPixel", {
        enumerable: !0,
        get: function() {
          return o(l).default;
        }
      });
      var f = i("9sEgL");
      Object.defineProperty(t.exports, "checkIfWebP", {
        enumerable: !0,
        get: function() {
          return f.checkIfWebP;
        }
      });
    })), i.register("doDtT", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.setRenditionScaleUpMaxPixels = void 0;
      var r = i("fvrtg"), n = 50;
      t.exports.setRenditionScaleUpMaxPixels = function(t) {
        r.Logger.debug("@giphy/js-util set rendition selection scale up max pixels to " + t), 
        n = t;
      }, t.exports.default = function(t, e, r, o) {
        void 0 === o && (o = n);
        var i = t[0], a = t.filter((function(t) {
          return t.width * t.height > i.width * i.height && (i = t), e - t.width <= o && r - t.height <= o;
        }));
        return 0 === a.length ? i : function(t, e, r) {
          var n, o = 1 / 0;
          return r.forEach((function(r) {
            var i = r.width / t * (r.height / e), a = Math.abs(1 - i);
            a < o && (o = a, n = r);
          })), n;
        }(e, r, a);
      };
    })), i.register("fvrtg", (function(t, e) {
      "use strict";
      var r, n, o = t.exports && t.exports.__spreadArrays || function() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var n = Array(t), o = 0;
        for (e = 0; e < r; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, 
        o++) n[o] = i[a];
        return n;
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.Logger = t.exports.LogLevel = void 0, (n = r = t.exports.LogLevel || (t.exports.LogLevel = {}))[n.DEBUG = 0] = "DEBUG", 
      n[n.INFO = 1] = "INFO", n[n.WARN = 2] = "WARN", n[n.ERROR = 3] = "ERROR", t.exports.Logger = {
        ENABLED: "undefined" != typeof window && location && -1 !== location.search.indexOf("giphy-debug"),
        LEVEL: 0,
        PREFIX: "GiphyJS",
        debug: function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          t.exports.Logger.ENABLED && t.exports.Logger.LEVEL <= r.DEBUG && console.debug.apply(console, o([ t.exports.Logger.PREFIX ], e));
        },
        info: function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          t.exports.Logger.ENABLED && t.exports.Logger.LEVEL <= r.INFO && console.info.apply(console, o([ t.exports.Logger.PREFIX ], e));
        },
        warn: function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          t.exports.Logger.ENABLED && t.exports.Logger.LEVEL <= r.WARN && console.warn.apply(console, o([ t.exports.Logger.PREFIX ], e));
        },
        error: function() {
          for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
          t.exports.Logger.ENABLED && t.exports.Logger.LEVEL <= r.ERROR && console.error.apply(console, o([ t.exports.Logger.PREFIX ], e));
        }
      };
    })), i.register("7b1FC", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.pick = t.exports.without = t.exports.take = t.exports.forEach = t.exports.mapValues = void 0, 
      t.exports.mapValues = function(t, e) {
        if (Array.isArray(t)) throw "This map is just for objects, just use array.map for arrays";
        return Object.keys(t).reduce((function(r, n) {
          return r[n] = e(t[n], n), r;
        }), {});
      }, t.exports.forEach = function(t, e) {
        if (Array.isArray(t)) throw "This map is just for objects, just use array.forEach for arrays";
        return Object.keys(t).forEach((function(r) {
          e(t[r], r);
        }));
      }, t.exports.take = function(t, e) {
        return void 0 === e && (e = 0), t.slice(0, e);
      }, t.exports.without = function(t, e) {
        return t.filter((function(t) {
          return -1 === e.indexOf(t);
        }));
      }, t.exports.pick = function(t, e) {
        var r = {};
        return e.forEach((function(e) {
          void 0 !== t[e] && (r[e] = t[e]);
        })), r;
      };
    })), i.register("iyYqQ", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.constructMoatData = void 0, t.exports.constructMoatData = function(t) {
        var e, r = t.tdata, n = ((null === (e = null == r ? void 0 : r.web) || void 0 === e ? void 0 : e.filter((function(t) {
          return "Moat" === t.vendor;
        }))) || [])[0];
        if (null == n ? void 0 : n.verificationParameters) {
          var o = n.verificationParameters, i = o.moatClientLevel1, a = void 0 === i ? "_ADVERTISER_" : i, s = o.moatClientLevel2, c = void 0 === s ? "_CAMPAIGN_" : s, u = o.moatClientLevel3, l = void 0 === u ? "_LINE_ITEM_" : u, f = o.moatClientLevel4, p = void 0 === f ? "_CREATIVE_" : f, d = o.moatClientSlicer1, h = void 0 === d ? "_SITE_" : d, y = o.moatClientSlicer2, g = void 0 === y ? "_PLACEMENT_" : y, m = o.zMoatPosition;
          return {
            moatClientLevel1: a,
            moatClientLevel2: c,
            moatClientLevel3: l,
            moatClientLevel4: p,
            moatClientSlicer1: h,
            moatClientSlicer2: g,
            zMoatPosition: void 0 === m ? "_POSITION_" : m
          };
        }
      };
    })), i.register("ent7P", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      });
      t.exports.default = function(t) {
        var e = 0, r = 0, n = t.offsetWidth, o = t.offsetHeight;
        do {
          e += t.offsetLeft, r += t.offsetTop, t = t.offsetParent;
        } while (t);
        return {
          left: e,
          top: r,
          width: n,
          height: o,
          right: e + n,
          bottom: r + o
        };
      };
    })), i.register("a2JyH", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      });
      var r = i("3mAph"), n = "";
      t.exports.default = function() {
        if (!n) {
          try {
            n = sessionStorage.getItem("giphyPingbackId");
          } catch (t) {}
          if (!n) {
            var t = (new Date).getTime().toString(16);
            n = ("" + t + r.default().replace(/-/g, "")).substring(0, 16);
            try {
              sessionStorage.setItem("giphyPingbackId", n);
            } catch (t) {}
          }
        }
        return n;
      };
    })), i.register("3mAph", (function(t, r) {
      e(t.exports, "default", (() => a));
      var n = i("k9caN"), o = i("4Eb65");
      var a = function(t, e, r) {
        var i = (t = t || {}).random || (t.rng || n.default)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) {
          r = r || 0;
          for (var a = 0; a < 16; ++a) e[r + a] = i[a];
          return e;
        }
        return o.default(i);
      };
    })), i.register("k9caN", (function(t, r) {
      var n;
      e(t.exports, "default", (() => i));
      var o = new Uint8Array(16);
      function i() {
        if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return n(o);
      }
    })), i.register("4Eb65", (function(t, r) {
      e(t.exports, "default", (() => s));
      for (var n = i("cyG7x"), o = [], a = 0; a < 256; ++a) o.push((a + 256).toString(16).substr(1));
      var s = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = (o[t[e + 0]] + o[t[e + 1]] + o[t[e + 2]] + o[t[e + 3]] + "-" + o[t[e + 4]] + o[t[e + 5]] + "-" + o[t[e + 6]] + o[t[e + 7]] + "-" + o[t[e + 8]] + o[t[e + 9]] + "-" + o[t[e + 10]] + o[t[e + 11]] + o[t[e + 12]] + o[t[e + 13]] + o[t[e + 14]] + o[t[e + 15]]).toLowerCase();
        if (!n.default(r)) throw TypeError("Stringified UUID is invalid");
        return r;
      };
    })), i.register("cyG7x", (function(t, r) {
      e(t.exports, "default", (() => o));
      var n = i("23kaD");
      var o = function(t) {
        return "string" == typeof t && n.default.test(t);
      };
    })), i.register("23kaD", (function(t, r) {
      e(t.exports, "default", (() => n));
      var n = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    })), i.register("lHOwJ", (function(t, e) {
      "use strict";
      var r = t.exports && t.exports.__assign || function() {
        return (r = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
      }, n = t.exports && t.exports.__importDefault || function(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.getAltText = t.exports.getGifWidth = t.exports.getGifHeight = t.exports.getBestRenditionUrl = t.exports.getBestRendition = t.exports.getSpecificRendition = void 0;
      var o = i("7b1FC"), a = n(i("doDtT")), s = i("9sEgL");
      t.exports.getSpecificRendition = function(t, e, r, n) {
        var o = t.images, i = t.is_sticker;
        if (void 0 === r && (r = !1), void 0 === n && (n = !1), !o || !e) return "";
        var a = o[e + ((r = r && !n) ? "_still" : "")];
        if (a) {
          if (i || r) return a.url;
          var c = s.SUPPORTS_WEBP && a.webp;
          return n ? a.mp4 : c || a.url;
        }
        return "";
      };
      t.exports.getBestRendition = function(t, e, n, i) {
        var s = o.pick(t, [ "original", "fixed_width", "fixed_height", "fixed_width_small", "fixed_height_small" ]), c = Object.entries(s).map((function(t) {
          var e = t[0], n = t[1];
          return r({
            renditionName: e
          }, n);
        }));
        return a.default(c, e, n, i);
      }, t.exports.getBestRenditionUrl = function(e, r, n, o) {
        var i = e.images, a = e.video, c = e.type;
        if (void 0 === o && (o = {
          isStill: !1,
          useVideo: !1
        }), !r || !n || !i) return "";
        var u = o.useVideo, l = o.isStill, f = o.scaleUpMaxPixels, p = function(t, e, r) {
          return "video" === t && r && r.previews && !Object.keys(e).length ? r.previews : e;
        }(c, i, a), d = p[t.exports.getBestRendition(p, r, n, f).renditionName + (l && !u ? "_still" : "")];
        return (u ? d.mp4 : s.SUPPORTS_WEBP && d.webp ? d.webp : d.url) || "";
      }, t.exports.getGifHeight = function(t, e) {
        var r = t.images.fixed_width;
        if (r) {
          var n = r.width / r.height;
          return Math.round(e / n);
        }
        return 0;
      }, t.exports.getGifWidth = function(t, e) {
        var r = t.images.fixed_width;
        if (r) {
          var n = r.width / r.height;
          return Math.round(e * n);
        }
        return 0;
      }, t.exports.getAltText = function(t) {
        var e = t.user, r = t.tags, n = void 0 === r ? [] : r, i = t.is_sticker, a = void 0 !== i && i, s = t.title, c = void 0 === s ? "" : s;
        if (c) return c;
        var u = e && e.username || "";
        return (u ? u + " " : "") + o.take(o.without(n, [ "transparent" ]), u ? 4 : 5).join(" ") + " " + (a ? "Sticker" : "GIF");
      };
    })), i.register("9sEgL", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.checkIfWebP = t.exports.SUPPORTS_WEBP = void 0, t.exports.SUPPORTS_WEBP = null, 
      t.exports.checkIfWebP = new Promise((function(e) {
        "undefined" == typeof Image && e(!1);
        var r = new Image;
        r.onload = function() {
          t.exports.SUPPORTS_WEBP = !0, e(t.exports.SUPPORTS_WEBP);
        }, r.onerror = function() {
          t.exports.SUPPORTS_WEBP = !1, e(t.exports.SUPPORTS_WEBP);
        }, r.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      }));
    })), i.register("cBx4X", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.appendGiphySDKRequestParam = t.exports.appendGiphySDKRequestHeader = t.exports.getGiphySDKRequestHeaders = void 0;
      var n = ("undefined" != typeof window ? window : r) || {};
      n._GIPHY_SDK_HEADERS_ = n._GIPHY_SDK_HEADERS_ || (n.Headers ? new n.Headers({
        "X-GIPHY-SDK-PLATFORM": "web"
      }) : void 0), t.exports.getGiphySDKRequestHeaders = function() {
        return n._GIPHY_SDK_HEADERS_;
      }, t.exports.appendGiphySDKRequestHeader = function(e, r) {
        var n;
        return null === (n = t.exports.getGiphySDKRequestHeaders()) || void 0 === n ? void 0 : n.set(e, r);
      }, t.exports.appendGiphySDKRequestParam = function(e, r) {
        var n;
        return null === (n = t.exports.getGiphySDKRequestHeaders()) || void 0 === n ? void 0 : n.set(e, r);
      };
    })), i.register("2nEW5", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      });
      var r = i("hkJC4");
      t.exports.default = function(t) {
        void 0 === t && (t = []), t.forEach((function(t) {
          var e, n = document.createElement("html");
          t = t.replace("%%CACHEBUSTER%%", Date.now().toString()), n.innerHTML = r.sanitize(t);
          var o = n.querySelector("img");
          o && (null === (e = null === document || void 0 === document ? void 0 : document.querySelector("head")) || void 0 === e || e.appendChild(o));
        }));
      };
    })), i.register("hkJC4", (function(t, e) {
      !function(e, r) {
        "object" == typeof t.exports ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : (e = e || self).DOMPurify = r();
      }(t.exports, (function() {
        "use strict";
        var t = Object.hasOwnProperty, e = Object.setPrototypeOf, r = Object.isFrozen, n = Object.getPrototypeOf, o = Object.getOwnPropertyDescriptor, i = Object.freeze, a = Object.seal, s = Object.create, c = "undefined" != typeof Reflect && Reflect, u = c.apply, l = c.construct;
        u || (u = function(t, e, r) {
          return t.apply(e, r);
        }), i || (i = function(t) {
          return t;
        }), a || (a = function(t) {
          return t;
        }), l || (l = function(t, e) {
          return new (Function.prototype.bind.apply(t, [ null ].concat(function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
              return r;
            }
            return Array.from(t);
          }(e))));
        });
        var f, p = E(Array.prototype.forEach), d = E(Array.prototype.pop), h = E(Array.prototype.push), y = E(String.prototype.toLowerCase), g = E(String.prototype.match), m = E(String.prototype.replace), v = E(String.prototype.indexOf), b = E(String.prototype.trim), x = E(RegExp.prototype.test), S = (f = TypeError, 
        function() {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          return l(f, e);
        });
        function E(t) {
          return function(e) {
            for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
            return u(t, e, n);
          };
        }
        function w(t, n) {
          e && e(t, null);
          for (var o = n.length; o--; ) {
            var i = n[o];
            if ("string" == typeof i) {
              var a = y(i);
              a !== i && (r(n) || (n[o] = a), i = a);
            }
            t[i] = !0;
          }
          return t;
        }
        function _(e) {
          var r = s(null), n = void 0;
          for (n in e) u(t, e, [ n ]) && (r[n] = e[n]);
          return r;
        }
        function O(t, e) {
          for (;null !== t; ) {
            var r = o(t, e);
            if (r) {
              if (r.get) return E(r.get);
              if ("function" == typeof r.value) return E(r.value);
            }
            t = n(t);
          }
          return function(t) {
            return console.warn("fallback value for", t), null;
          };
        }
        var A = i([ "a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr" ]), P = i([ "svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern" ]), T = i([ "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence" ]), R = i([ "animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use" ]), j = i([ "math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover" ]), I = i([ "maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none" ]), k = i([ "#text" ]), L = i([ "accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot" ]), M = i([ "accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan" ]), D = i([ "accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns" ]), N = i([ "xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink" ]), C = a(/\{\{[\s\S]*|[\s\S]*\}\}/gm), F = a(/<%[\s\S]*|[\s\S]*%>/gm), z = a(/^data-[\-\w.\u00B7-\uFFFF]/), W = a(/^aria-[\-\w]+$/), G = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), B = a(/^(?:\w+script|data):/i), U = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t;
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        };
        function q(t) {
          if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r;
          }
          return Array.from(t);
        }
        var V = function() {
          return "undefined" == typeof window ? null : window;
        }, Y = function(t, e) {
          if ("object" !== (void 0 === t ? "undefined" : H(t)) || "function" != typeof t.createPolicy) return null;
          var r = null, n = "data-tt-policy-suffix";
          e.currentScript && e.currentScript.hasAttribute(n) && (r = e.currentScript.getAttribute(n));
          var o = "dompurify" + (r ? "#" + r : "");
          try {
            return t.createPolicy(o, {
              createHTML: function(t) {
                return t;
              }
            });
          } catch (t) {
            return console.warn("TrustedTypes policy " + o + " could not be created."), null;
          }
        };
        return function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V(), r = function(e) {
            return t(e);
          };
          if (r.version = "2.2.9", r.removed = [], !e || !e.document || 9 !== e.document.nodeType) return r.isSupported = !1, 
          r;
          var n = e.document, o = e.document, a = e.DocumentFragment, s = e.HTMLTemplateElement, c = e.Node, u = e.Element, l = e.NodeFilter, f = e.NamedNodeMap, E = void 0 === f ? e.NamedNodeMap || e.MozNamedAttrMap : f, Q = e.Text, J = e.Comment, K = e.DOMParser, X = e.trustedTypes, $ = u.prototype, Z = O($, "cloneNode"), tt = O($, "nextSibling"), et = O($, "childNodes"), rt = O($, "parentNode");
          if ("function" == typeof s) {
            var nt = o.createElement("template");
            nt.content && nt.content.ownerDocument && (o = nt.content.ownerDocument);
          }
          var ot = Y(X, n), it = ot && Nt ? ot.createHTML("") : "", at = o, st = at.implementation, ct = at.createNodeIterator, ut = at.createDocumentFragment, lt = n.importNode, ft = {};
          try {
            ft = _(o).documentMode ? o.documentMode : {};
          } catch (t) {}
          var pt = {};
          r.isSupported = "function" == typeof rt && st && void 0 !== st.createHTMLDocument && 9 !== ft;
          var dt = C, ht = F, yt = z, gt = W, mt = B, vt = U, bt = G, xt = null, St = w({}, [].concat(q(A), q(P), q(T), q(j), q(k))), Et = null, wt = w({}, [].concat(q(L), q(M), q(D), q(N))), _t = null, Ot = null, At = !0, Pt = !0, Tt = !1, Rt = !1, jt = !1, It = !1, kt = !1, Lt = !1, Mt = !1, Dt = !0, Nt = !1, Ct = !0, Ft = !0, zt = !1, Wt = {}, Gt = w({}, [ "annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp" ]), Bt = null, Ut = w({}, [ "audio", "video", "img", "source", "image", "track" ]), Ht = null, qt = w({}, [ "alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns" ]), Vt = "http://www.w3.org/1998/Math/MathML", Yt = "http://www.w3.org/2000/svg", Qt = "http://www.w3.org/1999/xhtml", Jt = Qt, Kt = !1, Xt = null, $t = o.createElement("form"), Zt = function(t) {
            Xt && Xt === t || (t && "object" === (void 0 === t ? "undefined" : H(t)) || (t = {}), 
            t = _(t), xt = "ALLOWED_TAGS" in t ? w({}, t.ALLOWED_TAGS) : St, Et = "ALLOWED_ATTR" in t ? w({}, t.ALLOWED_ATTR) : wt, 
            Ht = "ADD_URI_SAFE_ATTR" in t ? w(_(qt), t.ADD_URI_SAFE_ATTR) : qt, Bt = "ADD_DATA_URI_TAGS" in t ? w(_(Ut), t.ADD_DATA_URI_TAGS) : Ut, 
            _t = "FORBID_TAGS" in t ? w({}, t.FORBID_TAGS) : {}, Ot = "FORBID_ATTR" in t ? w({}, t.FORBID_ATTR) : {}, 
            Wt = "USE_PROFILES" in t && t.USE_PROFILES, At = !1 !== t.ALLOW_ARIA_ATTR, Pt = !1 !== t.ALLOW_DATA_ATTR, 
            Tt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Rt = t.SAFE_FOR_TEMPLATES || !1, jt = t.WHOLE_DOCUMENT || !1, 
            Lt = t.RETURN_DOM || !1, Mt = t.RETURN_DOM_FRAGMENT || !1, Dt = !1 !== t.RETURN_DOM_IMPORT, 
            Nt = t.RETURN_TRUSTED_TYPE || !1, kt = t.FORCE_BODY || !1, Ct = !1 !== t.SANITIZE_DOM, 
            Ft = !1 !== t.KEEP_CONTENT, zt = t.IN_PLACE || !1, bt = t.ALLOWED_URI_REGEXP || bt, 
            Jt = t.NAMESPACE || Qt, Rt && (Pt = !1), Mt && (Lt = !0), Wt && (xt = w({}, [].concat(q(k))), 
            Et = [], !0 === Wt.html && (w(xt, A), w(Et, L)), !0 === Wt.svg && (w(xt, P), w(Et, M), 
            w(Et, N)), !0 === Wt.svgFilters && (w(xt, T), w(Et, M), w(Et, N)), !0 === Wt.mathMl && (w(xt, j), 
            w(Et, D), w(Et, N))), t.ADD_TAGS && (xt === St && (xt = _(xt)), w(xt, t.ADD_TAGS)), 
            t.ADD_ATTR && (Et === wt && (Et = _(Et)), w(Et, t.ADD_ATTR)), t.ADD_URI_SAFE_ATTR && w(Ht, t.ADD_URI_SAFE_ATTR), 
            Ft && (xt["#text"] = !0), jt && w(xt, [ "html", "head", "body" ]), xt.table && (w(xt, [ "tbody" ]), 
            delete _t.tbody), i && i(t), Xt = t);
          }, te = w({}, [ "mi", "mo", "mn", "ms", "mtext" ]), ee = w({}, [ "foreignobject", "desc", "title", "annotation-xml" ]), re = w({}, P);
          w(re, T), w(re, R);
          var ne = w({}, j);
          w(ne, I);
          var oe = function(t) {
            var e = rt(t);
            e && e.tagName || (e = {
              namespaceURI: Qt,
              tagName: "template"
            });
            var r = y(t.tagName), n = y(e.tagName);
            if (t.namespaceURI === Yt) return e.namespaceURI === Qt ? "svg" === r : e.namespaceURI === Vt ? "svg" === r && ("annotation-xml" === n || te[n]) : Boolean(re[r]);
            if (t.namespaceURI === Vt) return e.namespaceURI === Qt ? "math" === r : e.namespaceURI === Yt ? "math" === r && ee[n] : Boolean(ne[r]);
            if (t.namespaceURI === Qt) {
              if (e.namespaceURI === Yt && !ee[n]) return !1;
              if (e.namespaceURI === Vt && !te[n]) return !1;
              var o = w({}, [ "title", "style", "font", "a", "script" ]);
              return !ne[r] && (o[r] || !re[r]);
            }
            return !1;
          }, ie = function(t) {
            h(r.removed, {
              element: t
            });
            try {
              t.parentNode.removeChild(t);
            } catch (e) {
              try {
                t.outerHTML = it;
              } catch (e) {
                t.remove();
              }
            }
          }, ae = function(t, e) {
            try {
              h(r.removed, {
                attribute: e.getAttributeNode(t),
                from: e
              });
            } catch (t) {
              h(r.removed, {
                attribute: null,
                from: e
              });
            }
            if (e.removeAttribute(t), "is" === t && !Et[t]) if (Lt || Mt) try {
              ie(e);
            } catch (t) {} else try {
              e.setAttribute(t, "");
            } catch (t) {}
          }, se = function(t) {
            var e = void 0, r = void 0;
            if (kt) t = "<remove></remove>" + t; else {
              var n = g(t, /^[\r\n\t ]+/);
              r = n && n[0];
            }
            var i = ot ? ot.createHTML(t) : t;
            if (Jt === Qt) try {
              e = (new K).parseFromString(i, "text/html");
            } catch (t) {}
            if (!e || !e.documentElement) {
              e = st.createDocument(Jt, "template", null);
              try {
                e.documentElement.innerHTML = Kt ? "" : i;
              } catch (t) {}
            }
            var a = e.body || e.documentElement;
            return t && r && a.insertBefore(o.createTextNode(r), a.childNodes[0] || null), jt ? e.documentElement : a;
          }, ce = function(t) {
            return ct.call(t.ownerDocument || t, t, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT, null, !1);
          }, ue = function(t) {
            return !(t instanceof Q || t instanceof J) && !("string" == typeof t.nodeName && "string" == typeof t.textContent && "function" == typeof t.removeChild && t.attributes instanceof E && "function" == typeof t.removeAttribute && "function" == typeof t.setAttribute && "string" == typeof t.namespaceURI && "function" == typeof t.insertBefore);
          }, le = function(t) {
            return "object" === (void 0 === c ? "undefined" : H(c)) ? t instanceof c : t && "object" === (void 0 === t ? "undefined" : H(t)) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
          }, fe = function(t, e, n) {
            pt[t] && p(pt[t], (function(t) {
              t.call(r, e, n, Xt);
            }));
          }, pe = function(t) {
            var e = void 0;
            if (fe("beforeSanitizeElements", t, null), ue(t)) return ie(t), !0;
            if (g(t.nodeName, /[\u0080-\uFFFF]/)) return ie(t), !0;
            var n = y(t.nodeName);
            if (fe("uponSanitizeElement", t, {
              tagName: n,
              allowedTags: xt
            }), !le(t.firstElementChild) && (!le(t.content) || !le(t.content.firstElementChild)) && x(/<[/\w]/g, t.innerHTML) && x(/<[/\w]/g, t.textContent)) return ie(t), 
            !0;
            if (!xt[n] || _t[n]) {
              if (Ft && !Gt[n]) {
                var o = rt(t) || t.parentNode, i = et(t) || t.childNodes;
                if (i && o) for (var a = i.length - 1; a >= 0; --a) o.insertBefore(Z(i[a], !0), tt(t));
              }
              return ie(t), !0;
            }
            return t instanceof u && !oe(t) ? (ie(t), !0) : "noscript" !== n && "noembed" !== n || !x(/<\/no(script|embed)/i, t.innerHTML) ? (Rt && 3 === t.nodeType && (e = t.textContent, 
            e = m(e, dt, " "), e = m(e, ht, " "), t.textContent !== e && (h(r.removed, {
              element: t.cloneNode()
            }), t.textContent = e)), fe("afterSanitizeElements", t, null), !1) : (ie(t), !0);
          }, de = function(t, e, r) {
            if (Ct && ("id" === e || "name" === e) && (r in o || r in $t)) return !1;
            if (Pt && x(yt, e)) ; else if (At && x(gt, e)) ; else {
              if (!Et[e] || Ot[e]) return !1;
              if (Ht[e]) ; else if (x(bt, m(r, vt, ""))) ; else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== v(r, "data:") || !Bt[t]) {
                if (Tt && !x(mt, m(r, vt, ""))) ; else if (r) return !1;
              } else ;
            }
            return !0;
          }, he = function(t) {
            var e = void 0, n = void 0, o = void 0, i = void 0;
            fe("beforeSanitizeAttributes", t, null);
            var a = t.attributes;
            if (a) {
              var s = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: Et
              };
              for (i = a.length; i--; ) {
                var c = e = a[i], u = c.name, l = c.namespaceURI;
                if (n = b(e.value), o = y(u), s.attrName = o, s.attrValue = n, s.keepAttr = !0, 
                s.forceKeepAttr = void 0, fe("uponSanitizeAttribute", t, s), n = s.attrValue, !s.forceKeepAttr && (ae(u, t), 
                s.keepAttr)) if (x(/\/>/i, n)) ae(u, t); else {
                  Rt && (n = m(n, dt, " "), n = m(n, ht, " "));
                  var f = t.nodeName.toLowerCase();
                  if (de(f, o, n)) try {
                    l ? t.setAttributeNS(l, u, n) : t.setAttribute(u, n), d(r.removed);
                  } catch (t) {}
                }
              }
              fe("afterSanitizeAttributes", t, null);
            }
          }, ye = function t(e) {
            var r = void 0, n = ce(e);
            for (fe("beforeSanitizeShadowDOM", e, null); r = n.nextNode(); ) fe("uponSanitizeShadowNode", r, null), 
            pe(r) || (r.content instanceof a && t(r.content), he(r));
            fe("afterSanitizeShadowDOM", e, null);
          };
          return r.sanitize = function(t, o) {
            var i = void 0, s = void 0, u = void 0, l = void 0, f = void 0;
            if ((Kt = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !le(t)) {
              if ("function" != typeof t.toString) throw S("toString is not a function");
              if ("string" != typeof (t = t.toString())) throw S("dirty is not a string, aborting");
            }
            if (!r.isSupported) {
              if ("object" === H(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                if ("string" == typeof t) return e.toStaticHTML(t);
                if (le(t)) return e.toStaticHTML(t.outerHTML);
              }
              return t;
            }
            if (It || Zt(o), r.removed = [], "string" == typeof t && (zt = !1), zt) ; else if (t instanceof c) 1 === (s = (i = se("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? i = s : i.appendChild(s); else {
              if (!Lt && !Rt && !jt && -1 === t.indexOf("<")) return ot && Nt ? ot.createHTML(t) : t;
              if (!(i = se(t))) return Lt ? null : it;
            }
            i && kt && ie(i.firstChild);
            for (var p = ce(zt ? t : i); u = p.nextNode(); ) 3 === u.nodeType && u === l || pe(u) || (u.content instanceof a && ye(u.content), 
            he(u), l = u);
            if (l = null, zt) return t;
            if (Lt) {
              if (Mt) for (f = ut.call(i.ownerDocument); i.firstChild; ) f.appendChild(i.firstChild); else f = i;
              return Dt && (f = lt.call(n, f, !0)), f;
            }
            var d = jt ? i.outerHTML : i.innerHTML;
            return Rt && (d = m(d, dt, " "), d = m(d, ht, " ")), ot && Nt ? ot.createHTML(d) : d;
          }, r.setConfig = function(t) {
            Zt(t), It = !0;
          }, r.clearConfig = function() {
            Xt = null, It = !1;
          }, r.isValidAttribute = function(t, e, r) {
            Xt || Zt({});
            var n = y(t), o = y(e);
            return de(n, o, r);
          }, r.addHook = function(t, e) {
            "function" == typeof e && (pt[t] = pt[t] || [], h(pt[t], e));
          }, r.removeHook = function(t) {
            pt[t] && d(pt[t]);
          }, r.removeHooks = function(t) {
            pt[t] && (pt[t] = []);
          }, r.removeAllHooks = function() {
            pt = {};
          }, r;
        }();
      }));
    })), i.register("4wtNY", (function(t, e) {
      "use strict";
      var r = t.exports && t.exports.__assign || function() {
        return (r = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
      }, n = t.exports && t.exports.__importDefault || function(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.GiphyFetch = void 0;
      var o = i("aiEcj"), a = n(i("aOAe5")), s = i("gVDqU"), c = n(i("kJhLN")), u = function(t) {
        return t && t.type ? t.type : "gifs";
      }, l = function() {
        function t(t) {
          var e = this;
          this.getQS = function(t) {
            return void 0 === t && (t = {}), a.default.stringify(r(r({}, t), {
              api_key: e.apiKey,
              pingback_id: o.getPingbackId()
            }));
          }, this.apiKey = t;
        }
        return t.prototype.categories = function(t) {
          return c.default("gifs/categories?" + this.getQS(t));
        }, t.prototype.gif = function(t) {
          return c.default("gifs/" + t + "?" + this.getQS(), s.normalizeGif);
        }, t.prototype.gifs = function(t, e) {
          return Array.isArray(t) ? c.default("gifs?" + this.getQS({
            ids: t.join(",")
          }), s.normalizeGifs) : c.default("gifs/categories/" + t + "/" + e + "?" + this.getQS(), s.normalizeGifs);
        }, t.prototype.emoji = function(t) {
          return c.default("emoji?" + this.getQS(t), s.normalizeGifs, "EMOJI");
        }, t.prototype.search = function(t, e) {
          void 0 === e && (e = {});
          var n = e.channel ? "@" + e.channel + " " + t : t, o = this.getQS(r(r({}, e), {
            q: n
          })), i = "text" === e.type ? "TEXT_SEARCH" : e.explore ? "GIF_EXPLORE" : "GIF_SEARCH";
          return c.default(u(e) + "/search?" + o, s.normalizeGifs, i);
        }, t.prototype.subcategories = function(t, e) {
          return c.default("gifs/categories/" + t + "?" + this.getQS(e));
        }, t.prototype.trending = function(t) {
          void 0 === t && (t = {});
          var e = "text" === t.type ? "TEXT_TRENDING" : "GIF_TRENDING";
          return c.default(u(t) + "/trending?" + this.getQS(t), s.normalizeGifs, e);
        }, t.prototype.random = function(t) {
          return c.default(u(t) + "/random?" + this.getQS(t), s.normalizeGif, void 0, !0);
        }, t.prototype.related = function(t, e) {
          return c.default("gifs/related?" + this.getQS(r({
            gif_id: t
          }, e)), s.normalizeGifs, "GIF_RELATED");
        }, t;
      }();
      t.exports.GiphyFetch = l, t.exports.default = l;
    })), i.register("aOAe5", (function(t, e) {
      "use strict";
      var r = i("gS5ZW"), n = i("bKnki"), o = i("2et6M");
      t.exports = {
        formats: o,
        parse: n,
        stringify: r
      };
    })), i.register("gS5ZW", (function(t, e) {
      "use strict";
      var r = i("dkymr"), n = i("lfwk0"), o = i("2et6M"), a = Object.prototype.hasOwnProperty, s = {
        brackets: function(t) {
          return t + "[]";
        },
        comma: "comma",
        indices: function(t, e) {
          return t + "[" + e + "]";
        },
        repeat: function(t) {
          return t;
        }
      }, c = Array.isArray, u = Array.prototype.push, l = function(t, e) {
        u.apply(t, c(e) ? e : [ e ]);
      }, f = Date.prototype.toISOString, p = o.default, d = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: n.encode,
        encodeValuesOnly: !1,
        format: p,
        formatter: o.formatters[p],
        indices: !1,
        serializeDate: function(t) {
          return f.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1
      }, h = function t(e, o, i, a, s, u, f, p, h, y, g, m, v, b, x) {
        var S, E = e;
        if (x.has(e)) throw new RangeError("Cyclic object value");
        if ("function" == typeof f ? E = f(o, E) : E instanceof Date ? E = y(E) : "comma" === i && c(E) && (E = n.maybeMap(E, (function(t) {
          return t instanceof Date ? y(t) : t;
        }))), null === E) {
          if (a) return u && !v ? u(o, d.encoder, b, "key", g) : o;
          E = "";
        }
        if ("string" == typeof (S = E) || "number" == typeof S || "boolean" == typeof S || "symbol" == typeof S || "bigint" == typeof S || n.isBuffer(E)) return u ? [ m(v ? o : u(o, d.encoder, b, "key", g)) + "=" + m(u(E, d.encoder, b, "value", g)) ] : [ m(o) + "=" + m(String(E)) ];
        var w, _ = [];
        if (void 0 === E) return _;
        if ("comma" === i && c(E)) w = [ {
          value: E.length > 0 ? E.join(",") || null : void 0
        } ]; else if (c(f)) w = f; else {
          var O = Object.keys(E);
          w = p ? O.sort(p) : O;
        }
        for (var A = 0; A < w.length; ++A) {
          var P = w[A], T = "object" == typeof P && void 0 !== P.value ? P.value : E[P];
          if (!s || null !== T) {
            var R = c(E) ? "function" == typeof i ? i(o, P) : o : o + (h ? "." + P : "[" + P + "]");
            x.set(e, !0);
            var j = r();
            l(_, t(T, R, i, a, s, u, f, p, h, y, g, m, v, b, j));
          }
        }
        return _;
      };
      t.exports = function(t, e) {
        var n, i = t, u = function(t) {
          if (!t) return d;
          if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
          var e = t.charset || d.charset;
          if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var r = o.default;
          if (void 0 !== t.format) {
            if (!a.call(o.formatters, t.format)) throw new TypeError("Unknown format option provided.");
            r = t.format;
          }
          var n = o.formatters[r], i = d.filter;
          return ("function" == typeof t.filter || c(t.filter)) && (i = t.filter), {
            addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : d.addQueryPrefix,
            allowDots: void 0 === t.allowDots ? d.allowDots : !!t.allowDots,
            charset: e,
            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : d.charsetSentinel,
            delimiter: void 0 === t.delimiter ? d.delimiter : t.delimiter,
            encode: "boolean" == typeof t.encode ? t.encode : d.encode,
            encoder: "function" == typeof t.encoder ? t.encoder : d.encoder,
            encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : d.encodeValuesOnly,
            filter: i,
            format: r,
            formatter: n,
            serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : d.serializeDate,
            skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : d.skipNulls,
            sort: "function" == typeof t.sort ? t.sort : null,
            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : d.strictNullHandling
          };
        }(e);
        "function" == typeof u.filter ? i = (0, u.filter)("", i) : c(u.filter) && (n = u.filter);
        var f, p = [];
        if ("object" != typeof i || null === i) return "";
        f = e && e.arrayFormat in s ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
        var y = s[f];
        n || (n = Object.keys(i)), u.sort && n.sort(u.sort);
        for (var g = r(), m = 0; m < n.length; ++m) {
          var v = n[m];
          u.skipNulls && null === i[v] || l(p, h(i[v], v, y, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, g));
        }
        var b = p.join(u.delimiter), x = !0 === u.addQueryPrefix ? "?" : "";
        return u.charsetSentinel && ("iso-8859-1" === u.charset ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), 
        b.length > 0 ? x + b : "";
      };
    })), i.register("dkymr", (function(t, e) {
      "use strict";
      var r = i("8ONst"), n = i("kX1SP"), o = i("8VMPo"), a = r("%TypeError%"), s = r("%WeakMap%", !0), c = r("%Map%", !0), u = n("WeakMap.prototype.get", !0), l = n("WeakMap.prototype.set", !0), f = n("WeakMap.prototype.has", !0), p = n("Map.prototype.get", !0), d = n("Map.prototype.set", !0), h = n("Map.prototype.has", !0), y = function(t, e) {
        for (var r, n = t; null !== (r = n.next); n = r) if (r.key === e) return n.next = r.next, 
        r.next = t.next, t.next = r, r;
      };
      t.exports = function() {
        var t, e, r, n = {
          assert: function(t) {
            if (!n.has(t)) throw new a("Side channel does not contain " + o(t));
          },
          get: function(n) {
            if (s && n && ("object" == typeof n || "function" == typeof n)) {
              if (t) return u(t, n);
            } else if (c) {
              if (e) return p(e, n);
            } else if (r) return function(t, e) {
              var r = y(t, e);
              return r && r.value;
            }(r, n);
          },
          has: function(n) {
            if (s && n && ("object" == typeof n || "function" == typeof n)) {
              if (t) return f(t, n);
            } else if (c) {
              if (e) return h(e, n);
            } else if (r) return function(t, e) {
              return !!y(t, e);
            }(r, n);
            return !1;
          },
          set: function(n, o) {
            s && n && ("object" == typeof n || "function" == typeof n) ? (t || (t = new s), 
            l(t, n, o)) : c ? (e || (e = new c), d(e, n, o)) : (r || (r = {
              key: {},
              next: null
            }), function(t, e, r) {
              var n = y(t, e);
              n ? n.value = r : t.next = {
                key: e,
                next: t.next,
                value: r
              };
            }(r, n, o));
          }
        };
        return n;
      };
    })), i.register("8ONst", (function(t, e) {
      "use strict";
      var r, n = SyntaxError, o = Function, a = TypeError, s = function(t) {
        try {
          return o('"use strict"; return (' + t + ").constructor;")();
        } catch (t) {}
      }, c = Object.getOwnPropertyDescriptor;
      if (c) try {
        c({}, "");
      } catch (t) {
        c = null;
      }
      var u = function() {
        throw new a;
      }, l = c ? function() {
        try {
          return u;
        } catch (t) {
          try {
            return c(arguments, "callee").get;
          } catch (t) {
            return u;
          }
        }
      }() : u, f = i("bC3gN")(), p = Object.getPrototypeOf || function(t) {
        return t.__proto__;
      }, d = {}, h = "undefined" == typeof Uint8Array ? r : p(Uint8Array), y = {
        "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
        "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
        "%AsyncFromSyncIteratorPrototype%": r,
        "%AsyncFunction%": d,
        "%AsyncGenerator%": d,
        "%AsyncGeneratorFunction%": d,
        "%AsyncIteratorPrototype%": d,
        "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
        "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": "undefined" == typeof DataView ? r : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
        "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
        "%Function%": o,
        "%GeneratorFunction%": d,
        "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
        "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
        "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
        "%JSON%": "object" == typeof JSON ? JSON : r,
        "%Map%": "undefined" == typeof Map ? r : Map,
        "%MapIteratorPrototype%": "undefined" != typeof Map && f ? p((new Map)[Symbol.iterator]()) : r,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": "undefined" == typeof Promise ? r : Promise,
        "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
        "%RegExp%": RegExp,
        "%Set%": "undefined" == typeof Set ? r : Set,
        "%SetIteratorPrototype%": "undefined" != typeof Set && f ? p((new Set)[Symbol.iterator]()) : r,
        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : r,
        "%Symbol%": f ? Symbol : r,
        "%SyntaxError%": n,
        "%ThrowTypeError%": l,
        "%TypedArray%": h,
        "%TypeError%": a,
        "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
        "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
        "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
        "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
        "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
      }, g = function t(e) {
        var r;
        if ("%AsyncFunction%" === e) r = s("async function () {}"); else if ("%GeneratorFunction%" === e) r = s("function* () {}"); else if ("%AsyncGeneratorFunction%" === e) r = s("async function* () {}"); else if ("%AsyncGenerator%" === e) {
          var n = t("%AsyncGeneratorFunction%");
          n && (r = n.prototype);
        } else if ("%AsyncIteratorPrototype%" === e) {
          var o = t("%AsyncGenerator%");
          o && (r = p(o.prototype));
        }
        return y[e] = r, r;
      }, m = {
        "%ArrayBufferPrototype%": [ "ArrayBuffer", "prototype" ],
        "%ArrayPrototype%": [ "Array", "prototype" ],
        "%ArrayProto_entries%": [ "Array", "prototype", "entries" ],
        "%ArrayProto_forEach%": [ "Array", "prototype", "forEach" ],
        "%ArrayProto_keys%": [ "Array", "prototype", "keys" ],
        "%ArrayProto_values%": [ "Array", "prototype", "values" ],
        "%AsyncFunctionPrototype%": [ "AsyncFunction", "prototype" ],
        "%AsyncGenerator%": [ "AsyncGeneratorFunction", "prototype" ],
        "%AsyncGeneratorPrototype%": [ "AsyncGeneratorFunction", "prototype", "prototype" ],
        "%BooleanPrototype%": [ "Boolean", "prototype" ],
        "%DataViewPrototype%": [ "DataView", "prototype" ],
        "%DatePrototype%": [ "Date", "prototype" ],
        "%ErrorPrototype%": [ "Error", "prototype" ],
        "%EvalErrorPrototype%": [ "EvalError", "prototype" ],
        "%Float32ArrayPrototype%": [ "Float32Array", "prototype" ],
        "%Float64ArrayPrototype%": [ "Float64Array", "prototype" ],
        "%FunctionPrototype%": [ "Function", "prototype" ],
        "%Generator%": [ "GeneratorFunction", "prototype" ],
        "%GeneratorPrototype%": [ "GeneratorFunction", "prototype", "prototype" ],
        "%Int8ArrayPrototype%": [ "Int8Array", "prototype" ],
        "%Int16ArrayPrototype%": [ "Int16Array", "prototype" ],
        "%Int32ArrayPrototype%": [ "Int32Array", "prototype" ],
        "%JSONParse%": [ "JSON", "parse" ],
        "%JSONStringify%": [ "JSON", "stringify" ],
        "%MapPrototype%": [ "Map", "prototype" ],
        "%NumberPrototype%": [ "Number", "prototype" ],
        "%ObjectPrototype%": [ "Object", "prototype" ],
        "%ObjProto_toString%": [ "Object", "prototype", "toString" ],
        "%ObjProto_valueOf%": [ "Object", "prototype", "valueOf" ],
        "%PromisePrototype%": [ "Promise", "prototype" ],
        "%PromiseProto_then%": [ "Promise", "prototype", "then" ],
        "%Promise_all%": [ "Promise", "all" ],
        "%Promise_reject%": [ "Promise", "reject" ],
        "%Promise_resolve%": [ "Promise", "resolve" ],
        "%RangeErrorPrototype%": [ "RangeError", "prototype" ],
        "%ReferenceErrorPrototype%": [ "ReferenceError", "prototype" ],
        "%RegExpPrototype%": [ "RegExp", "prototype" ],
        "%SetPrototype%": [ "Set", "prototype" ],
        "%SharedArrayBufferPrototype%": [ "SharedArrayBuffer", "prototype" ],
        "%StringPrototype%": [ "String", "prototype" ],
        "%SymbolPrototype%": [ "Symbol", "prototype" ],
        "%SyntaxErrorPrototype%": [ "SyntaxError", "prototype" ],
        "%TypedArrayPrototype%": [ "TypedArray", "prototype" ],
        "%TypeErrorPrototype%": [ "TypeError", "prototype" ],
        "%Uint8ArrayPrototype%": [ "Uint8Array", "prototype" ],
        "%Uint8ClampedArrayPrototype%": [ "Uint8ClampedArray", "prototype" ],
        "%Uint16ArrayPrototype%": [ "Uint16Array", "prototype" ],
        "%Uint32ArrayPrototype%": [ "Uint32Array", "prototype" ],
        "%URIErrorPrototype%": [ "URIError", "prototype" ],
        "%WeakMapPrototype%": [ "WeakMap", "prototype" ],
        "%WeakSetPrototype%": [ "WeakSet", "prototype" ]
      }, v = i("YsAio"), b = i("g7xtr"), x = v.call(Function.call, Array.prototype.concat), S = v.call(Function.apply, Array.prototype.splice), E = v.call(Function.call, String.prototype.replace), w = v.call(Function.call, String.prototype.slice), _ = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, O = /\\(\\)?/g, A = function(t) {
        var e = w(t, 0, 1), r = w(t, -1);
        if ("%" === e && "%" !== r) throw new n("invalid intrinsic syntax, expected closing `%`");
        if ("%" === r && "%" !== e) throw new n("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return E(t, _, (function(t, e, r, n) {
          o[o.length] = r ? E(n, O, "$1") : e || t;
        })), o;
      }, P = function(t, e) {
        var r, o = t;
        if (b(m, o) && (o = "%" + (r = m[o])[0] + "%"), b(y, o)) {
          var i = y[o];
          if (i === d && (i = g(o)), void 0 === i && !e) throw new a("intrinsic " + t + " exists, but is not available. Please file an issue!");
          return {
            alias: r,
            name: o,
            value: i
          };
        }
        throw new n("intrinsic " + t + " does not exist!");
      };
      t.exports = function(t, e) {
        if ("string" != typeof t || 0 === t.length) throw new a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof e) throw new a('"allowMissing" argument must be a boolean');
        var r = A(t), o = r.length > 0 ? r[0] : "", i = P("%" + o + "%", e), s = i.name, u = i.value, l = !1, f = i.alias;
        f && (o = f[0], S(r, x([ 0, 1 ], f)));
        for (var p = 1, d = !0; p < r.length; p += 1) {
          var h = r[p], g = w(h, 0, 1), m = w(h, -1);
          if (('"' === g || "'" === g || "`" === g || '"' === m || "'" === m || "`" === m) && g !== m) throw new n("property names with quotes must have matching quotes");
          if ("constructor" !== h && d || (l = !0), b(y, s = "%" + (o += "." + h) + "%")) u = y[s]; else if (null != u) {
            if (!(h in u)) {
              if (!e) throw new a("base intrinsic for " + t + " exists, but the property is not available.");
              return;
            }
            if (c && p + 1 >= r.length) {
              var v = c(u, h);
              u = (d = !!v) && "get" in v && !("originalValue" in v.get) ? v.get : u[h];
            } else d = b(u, h), u = u[h];
            d && !l && (y[s] = u);
          }
        }
        return u;
      };
    })), i.register("bC3gN", (function(t, e) {
      "use strict";
      var n = r.Symbol, o = i("jDrOa");
      t.exports = function() {
        return "function" == typeof n && ("function" == typeof Symbol && ("symbol" == typeof n("foo") && ("symbol" == typeof Symbol("bar") && o())));
      };
    })), i.register("jDrOa", (function(t, e) {
      "use strict";
      t.exports = function() {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {}, e = Symbol("test"), r = Object(e);
        if ("string" == typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (e in t[e] = 42, t) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    })), i.register("YsAio", (function(t, e) {
      "use strict";
      var r = i("4FNlQ");
      t.exports = Function.prototype.bind || r;
    })), i.register("4FNlQ", (function(t, e) {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, o = Object.prototype.toString, i = "[object Function]";
      t.exports = function(t) {
        var e = this;
        if ("function" != typeof e || o.call(e) !== i) throw new TypeError(r + e);
        for (var a, s = n.call(arguments, 1), c = function() {
          if (this instanceof a) {
            var r = e.apply(this, s.concat(n.call(arguments)));
            return Object(r) === r ? r : this;
          }
          return e.apply(t, s.concat(n.call(arguments)));
        }, u = Math.max(0, e.length - s.length), l = [], f = 0; f < u; f++) l.push("$" + f);
        if (a = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(c), 
        e.prototype) {
          var p = function() {};
          p.prototype = e.prototype, a.prototype = new p, p.prototype = null;
        }
        return a;
      };
    })), i.register("g7xtr", (function(t, e) {
      "use strict";
      var r = i("YsAio");
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    })), i.register("kX1SP", (function(t, e) {
      "use strict";
      var r = i("8ONst"), n = i("edB93"), o = n(r("String.prototype.indexOf"));
      t.exports = function(t, e) {
        var i = r(t, !!e);
        return "function" == typeof i && o(t, ".prototype.") > -1 ? n(i) : i;
      };
    })), i.register("edB93", (function(t, e) {
      "use strict";
      var r = i("YsAio"), n = i("8ONst"), o = n("%Function.prototype.apply%"), a = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || r.call(a, o), c = n("%Object.getOwnPropertyDescriptor%", !0), u = n("%Object.defineProperty%", !0), l = n("%Math.max%");
      if (u) try {
        u({}, "a", {
          value: 1
        });
      } catch (t) {
        u = null;
      }
      t.exports = function(t) {
        var e = s(r, a, arguments);
        if (c && u) {
          var n = c(e, "length");
          n.configurable && u(e, "length", {
            value: 1 + l(0, t.length - (arguments.length - 1))
          });
        }
        return e;
      };
      var f = function() {
        return s(r, o, arguments);
      };
      u ? u(t.exports, "apply", {
        value: f
      }) : t.exports.apply = f;
    })), i.register("8VMPo", (function(t, e) {
      var r = "function" == typeof Map && Map.prototype, n = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, o = r && n && "function" == typeof n.get ? n.get : null, a = r && Map.prototype.forEach, s = "function" == typeof Set && Set.prototype, c = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, u = s && c && "function" == typeof c.get ? c.get : null, l = s && Set.prototype.forEach, f = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null, p = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null, d = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null, h = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, m = String.prototype.match, v = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, b = Object.getOwnPropertySymbols, x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, S = "function" == typeof Symbol && "object" == typeof Symbol.iterator, E = Object.prototype.propertyIsEnumerable, w = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__;
      } : null), _ = i("9VFT6").custom, O = _ && j(_) ? _ : null, A = "function" == typeof Symbol && void 0 !== Symbol.toStringTag ? Symbol.toStringTag : null;
      function P(t, e, r) {
        var n = "double" === (r.quoteStyle || e) ? '"' : "'";
        return n + t + n;
      }
      function T(t) {
        return String(t).replace(/"/g, "&quot;");
      }
      function R(t) {
        return !("[object Array]" !== L(t) || A && "object" == typeof t && A in t);
      }
      function j(t) {
        if (S) return t && "object" == typeof t && t instanceof Symbol;
        if ("symbol" == typeof t) return !0;
        if (!t || "object" != typeof t || !x) return !1;
        try {
          return x.call(t), !0;
        } catch (t) {}
        return !1;
      }
      t.exports = function t(e, r, n, i) {
        var s = r || {};
        if (k(s, "quoteStyle") && "single" !== s.quoteStyle && "double" !== s.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (k(s, "maxStringLength") && ("number" == typeof s.maxStringLength ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : null !== s.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var c = !k(s, "customInspect") || s.customInspect;
        if ("boolean" != typeof c) throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
        if (k(s, "indent") && null !== s.indent && "\t" !== s.indent && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        if ("boolean" == typeof e) return e ? "true" : "false";
        if ("string" == typeof e) return D(e, s);
        if ("number" == typeof e) return 0 === e ? 1 / 0 / e > 0 ? "0" : "-0" : String(e);
        if ("bigint" == typeof e) return String(e) + "n";
        var y = void 0 === s.depth ? 5 : s.depth;
        if (void 0 === n && (n = 0), n >= y && y > 0 && "object" == typeof e) return R(e) ? "[Array]" : "[Object]";
        var b, E = function(t, e) {
          var r;
          if ("\t" === t.indent) r = "\t"; else {
            if (!("number" == typeof t.indent && t.indent > 0)) return null;
            r = Array(t.indent + 1).join(" ");
          }
          return {
            base: r,
            prev: Array(e + 1).join(r)
          };
        }(s, n);
        if (void 0 === i) i = []; else if (M(i, e) >= 0) return "[Circular]";
        function _(e, r, o) {
          if (r && (i = i.slice()).push(r), o) {
            var a = {
              depth: s.depth
            };
            return k(s, "quoteStyle") && (a.quoteStyle = s.quoteStyle), t(e, a, n + 1, i);
          }
          return t(e, s, n + 1, i);
        }
        if ("function" == typeof e) {
          var I = function(t) {
            if (t.name) return t.name;
            var e = m.call(g.call(t), /^function\s*([\w$]+)/);
            return e ? e[1] : null;
          }(e), N = G(e, _);
          return "[Function" + (I ? ": " + I : " (anonymous)") + "]" + (N.length > 0 ? " { " + N.join(", ") + " }" : "");
        }
        if (j(e)) {
          var B = S ? String(e).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : x.call(e);
          return "object" != typeof e || S ? B : C(B);
        }
        if ((b = e) && "object" == typeof b && ("undefined" != typeof HTMLElement && b instanceof HTMLElement || "string" == typeof b.nodeName && "function" == typeof b.getAttribute)) {
          for (var U = "<" + String(e.nodeName).toLowerCase(), H = e.attributes || [], q = 0; q < H.length; q++) U += " " + H[q].name + "=" + P(T(H[q].value), "double", s);
          return U += ">", e.childNodes && e.childNodes.length && (U += "..."), U += "</" + String(e.nodeName).toLowerCase() + ">";
        }
        if (R(e)) {
          if (0 === e.length) return "[]";
          var V = G(e, _);
          return E && !function(t) {
            for (var e = 0; e < t.length; e++) if (M(t[e], "\n") >= 0) return !1;
            return !0;
          }(V) ? "[" + W(V, E) + "]" : "[ " + V.join(", ") + " ]";
        }
        if (function(t) {
          return !("[object Error]" !== L(t) || A && "object" == typeof t && A in t);
        }(e)) {
          var Y = G(e, _);
          return 0 === Y.length ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Y.join(", ") + " }";
        }
        if ("object" == typeof e && c) {
          if (O && "function" == typeof e[O]) return e[O]();
          if ("function" == typeof e.inspect) return e.inspect();
        }
        if (function(t) {
          if (!o || !t || "object" != typeof t) return !1;
          try {
            o.call(t);
            try {
              u.call(t);
            } catch (t) {
              return !0;
            }
            return t instanceof Map;
          } catch (t) {}
          return !1;
        }(e)) {
          var Q = [];
          return a.call(e, (function(t, r) {
            Q.push(_(r, e, !0) + " => " + _(t, e));
          })), z("Map", o.call(e), Q, E);
        }
        if (function(t) {
          if (!u || !t || "object" != typeof t) return !1;
          try {
            u.call(t);
            try {
              o.call(t);
            } catch (t) {
              return !0;
            }
            return t instanceof Set;
          } catch (t) {}
          return !1;
        }(e)) {
          var J = [];
          return l.call(e, (function(t) {
            J.push(_(t, e));
          })), z("Set", u.call(e), J, E);
        }
        if (function(t) {
          if (!f || !t || "object" != typeof t) return !1;
          try {
            f.call(t, f);
            try {
              p.call(t, p);
            } catch (t) {
              return !0;
            }
            return t instanceof WeakMap;
          } catch (t) {}
          return !1;
        }(e)) return F("WeakMap");
        if (function(t) {
          if (!p || !t || "object" != typeof t) return !1;
          try {
            p.call(t, p);
            try {
              f.call(t, f);
            } catch (t) {
              return !0;
            }
            return t instanceof WeakSet;
          } catch (t) {}
          return !1;
        }(e)) return F("WeakSet");
        if (function(t) {
          if (!d || !t || "object" != typeof t) return !1;
          try {
            return d.call(t), !0;
          } catch (t) {}
          return !1;
        }(e)) return F("WeakRef");
        if (function(t) {
          return !("[object Number]" !== L(t) || A && "object" == typeof t && A in t);
        }(e)) return C(_(Number(e)));
        if (function(t) {
          if (!t || "object" != typeof t || !v) return !1;
          try {
            return v.call(t), !0;
          } catch (t) {}
          return !1;
        }(e)) return C(_(v.call(e)));
        if (function(t) {
          return !("[object Boolean]" !== L(t) || A && "object" == typeof t && A in t);
        }(e)) return C(h.call(e));
        if (function(t) {
          return !("[object String]" !== L(t) || A && "object" == typeof t && A in t);
        }(e)) return C(_(String(e)));
        if (!function(t) {
          return !("[object Date]" !== L(t) || A && "object" == typeof t && A in t);
        }(e) && !function(t) {
          return !("[object RegExp]" !== L(t) || A && "object" == typeof t && A in t);
        }(e)) {
          var K = G(e, _), X = w ? w(e) === Object.prototype : e instanceof Object || e.constructor === Object, $ = e instanceof Object ? "" : "null prototype", Z = !X && A && Object(e) === e && A in e ? L(e).slice(8, -1) : $ ? "Object" : "", tt = (X || "function" != typeof e.constructor ? "" : e.constructor.name ? e.constructor.name + " " : "") + (Z || $ ? "[" + [].concat(Z || [], $ || []).join(": ") + "] " : "");
          return 0 === K.length ? tt + "{}" : E ? tt + "{" + W(K, E) + "}" : tt + "{ " + K.join(", ") + " }";
        }
        return String(e);
      };
      var I = Object.prototype.hasOwnProperty || function(t) {
        return t in this;
      };
      function k(t, e) {
        return I.call(t, e);
      }
      function L(t) {
        return y.call(t);
      }
      function M(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
        return -1;
      }
      function D(t, e) {
        if (t.length > e.maxStringLength) {
          var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
          return D(t.slice(0, e.maxStringLength), e) + n;
        }
        return P(t.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, N), "single", e);
      }
      function N(t) {
        var e = t.charCodeAt(0), r = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[e];
        return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + e.toString(16).toUpperCase();
      }
      function C(t) {
        return "Object(" + t + ")";
      }
      function F(t) {
        return t + " { ? }";
      }
      function z(t, e, r, n) {
        return t + " (" + e + ") {" + (n ? W(r, n) : r.join(", ")) + "}";
      }
      function W(t, e) {
        if (0 === t.length) return "";
        var r = "\n" + e.prev + e.base;
        return r + t.join("," + r) + "\n" + e.prev;
      }
      function G(t, e) {
        var r = R(t), n = [];
        if (r) {
          n.length = t.length;
          for (var o = 0; o < t.length; o++) n[o] = k(t, o) ? e(t[o], t) : "";
        }
        var i, a = "function" == typeof b ? b(t) : [];
        if (S) {
          i = {};
          for (var s = 0; s < a.length; s++) i["$" + a[s]] = a[s];
        }
        for (var c in t) k(t, c) && (r && String(Number(c)) === c && c < t.length || S && i["$" + c] instanceof Symbol || (/[^\w$]/.test(c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
        if ("function" == typeof b) for (var u = 0; u < a.length; u++) E.call(t, a[u]) && n.push("[" + e(a[u]) + "]: " + e(t[a[u]], t));
        return n;
      }
    })), i.register("9VFT6", (function(t, e) {})), i.register("lfwk0", (function(t, e) {
      "use strict";
      var r = i("2et6M"), n = Object.prototype.hasOwnProperty, o = Array.isArray, a = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t;
      }(), s = function(t, e) {
        for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) void 0 !== t[n] && (r[n] = t[n]);
        return r;
      };
      t.exports = {
        arrayToObject: s,
        assign: function(t, e) {
          return Object.keys(e).reduce((function(t, r) {
            return t[r] = e[r], t;
          }), t);
        },
        combine: function(t, e) {
          return [].concat(t, e);
        },
        compact: function(t) {
          for (var e = [ {
            obj: {
              o: t
            },
            prop: "o"
          } ], r = [], n = 0; n < e.length; ++n) for (var i = e[n], a = i.obj[i.prop], s = Object.keys(a), c = 0; c < s.length; ++c) {
            var u = s[c], l = a[u];
            "object" == typeof l && null !== l && -1 === r.indexOf(l) && (e.push({
              obj: a,
              prop: u
            }), r.push(l));
          }
          return function(t) {
            for (;t.length > 1; ) {
              var e = t.pop(), r = e.obj[e.prop];
              if (o(r)) {
                for (var n = [], i = 0; i < r.length; ++i) void 0 !== r[i] && n.push(r[i]);
                e.obj[e.prop] = n;
              }
            }
          }(e), t;
        },
        decode: function(t, e, r) {
          var n = t.replace(/\+/g, " ");
          if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
            return decodeURIComponent(n);
          } catch (t) {
            return n;
          }
        },
        encode: function(t, e, n, o, i) {
          if (0 === t.length) return t;
          var s = t;
          if ("symbol" == typeof t ? s = Symbol.prototype.toString.call(t) : "string" != typeof t && (s = String(t)), 
          "iso-8859-1" === n) return escape(s).replace(/%u[0-9a-f]{4}/gi, (function(t) {
            return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
          }));
          for (var c = "", u = 0; u < s.length; ++u) {
            var l = s.charCodeAt(u);
            45 === l || 46 === l || 95 === l || 126 === l || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || i === r.RFC1738 && (40 === l || 41 === l) ? c += s.charAt(u) : l < 128 ? c += a[l] : l < 2048 ? c += a[192 | l >> 6] + a[128 | 63 & l] : l < 55296 || l >= 57344 ? c += a[224 | l >> 12] + a[128 | l >> 6 & 63] + a[128 | 63 & l] : (u += 1, 
            l = 65536 + ((1023 & l) << 10 | 1023 & s.charCodeAt(u)), c += a[240 | l >> 18] + a[128 | l >> 12 & 63] + a[128 | l >> 6 & 63] + a[128 | 63 & l]);
          }
          return c;
        },
        isBuffer: function(t) {
          return !(!t || "object" != typeof t) && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
        },
        isRegExp: function(t) {
          return "[object RegExp]" === Object.prototype.toString.call(t);
        },
        maybeMap: function(t, e) {
          if (o(t)) {
            for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
            return r;
          }
          return e(t);
        },
        merge: function t(e, r, i) {
          if (!r) return e;
          if ("object" != typeof r) {
            if (o(e)) e.push(r); else {
              if (!e || "object" != typeof e) return [ e, r ];
              (i && (i.plainObjects || i.allowPrototypes) || !n.call(Object.prototype, r)) && (e[r] = !0);
            }
            return e;
          }
          if (!e || "object" != typeof e) return [ e ].concat(r);
          var a = e;
          return o(e) && !o(r) && (a = s(e, i)), o(e) && o(r) ? (r.forEach((function(r, o) {
            if (n.call(e, o)) {
              var a = e[o];
              a && "object" == typeof a && r && "object" == typeof r ? e[o] = t(a, r, i) : e.push(r);
            } else e[o] = r;
          })), e) : Object.keys(r).reduce((function(e, o) {
            var a = r[o];
            return n.call(e, o) ? e[o] = t(e[o], a, i) : e[o] = a, e;
          }), a);
        }
      };
    })), i.register("2et6M", (function(t, e) {
      "use strict";
      var r = String.prototype.replace, n = /%20/g, o = "RFC1738", i = "RFC3986";
      t.exports = {
        default: i,
        formatters: {
          RFC1738: function(t) {
            return r.call(t, n, "+");
          },
          RFC3986: function(t) {
            return String(t);
          }
        },
        RFC1738: o,
        RFC3986: i
      };
    })), i.register("bKnki", (function(t, e) {
      "use strict";
      var r = i("lfwk0"), n = Object.prototype.hasOwnProperty, o = Array.isArray, a = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
      }, s = function(t) {
        return t.replace(/&#(\d+);/g, (function(t, e) {
          return String.fromCharCode(parseInt(e, 10));
        }));
      }, c = function(t, e) {
        return t && "string" == typeof t && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
      }, u = function(t, e, r, o) {
        if (t) {
          var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, a = /(\[[^[\]]*])/g, s = r.depth > 0 && /(\[[^[\]]*])/.exec(i), u = s ? i.slice(0, s.index) : i, l = [];
          if (u) {
            if (!r.plainObjects && n.call(Object.prototype, u) && !r.allowPrototypes) return;
            l.push(u);
          }
          for (var f = 0; r.depth > 0 && null !== (s = a.exec(i)) && f < r.depth; ) {
            if (f += 1, !r.plainObjects && n.call(Object.prototype, s[1].slice(1, -1)) && !r.allowPrototypes) return;
            l.push(s[1]);
          }
          return s && l.push("[" + i.slice(s.index) + "]"), function(t, e, r, n) {
            for (var o = n ? e : c(e, r), i = t.length - 1; i >= 0; --i) {
              var a, s = t[i];
              if ("[]" === s && r.parseArrays) a = [].concat(o); else {
                a = r.plainObjects ? Object.create(null) : {};
                var u = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s, l = parseInt(u, 10);
                r.parseArrays || "" !== u ? !isNaN(l) && s !== u && String(l) === u && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (a = [])[l] = o : a[u] = o : a = {
                  0: o
                };
              }
              o = a;
            }
            return o;
          }(l, e, r, o);
        }
      };
      t.exports = function(t, e) {
        var i = function(t) {
          if (!t) return a;
          if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
          if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var e = void 0 === t.charset ? a.charset : t.charset;
          return {
            allowDots: void 0 === t.allowDots ? a.allowDots : !!t.allowDots,
            allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : a.allowPrototypes,
            allowSparse: "boolean" == typeof t.allowSparse ? t.allowSparse : a.allowSparse,
            arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : a.arrayLimit,
            charset: e,
            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : a.charsetSentinel,
            comma: "boolean" == typeof t.comma ? t.comma : a.comma,
            decoder: "function" == typeof t.decoder ? t.decoder : a.decoder,
            delimiter: "string" == typeof t.delimiter || r.isRegExp(t.delimiter) ? t.delimiter : a.delimiter,
            depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : a.depth,
            ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
            interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : a.interpretNumericEntities,
            parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : a.parameterLimit,
            parseArrays: !1 !== t.parseArrays,
            plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : a.plainObjects,
            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : a.strictNullHandling
          };
        }(e);
        if ("" === t || null == t) return i.plainObjects ? Object.create(null) : {};
        for (var l = "string" == typeof t ? function(t, e) {
          var i, u = {}, l = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, f = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit, p = l.split(e.delimiter, f), d = -1, h = e.charset;
          if (e.charsetSentinel) for (i = 0; i < p.length; ++i) 0 === p[i].indexOf("utf8=") && ("utf8=%E2%9C%93" === p[i] ? h = "utf-8" : "utf8=%26%2310003%3B" === p[i] && (h = "iso-8859-1"), 
          d = i, i = p.length);
          for (i = 0; i < p.length; ++i) if (i !== d) {
            var y, g, m = p[i], v = m.indexOf("]="), b = -1 === v ? m.indexOf("=") : v + 1;
            -1 === b ? (y = e.decoder(m, a.decoder, h, "key"), g = e.strictNullHandling ? null : "") : (y = e.decoder(m.slice(0, b), a.decoder, h, "key"), 
            g = r.maybeMap(c(m.slice(b + 1), e), (function(t) {
              return e.decoder(t, a.decoder, h, "value");
            }))), g && e.interpretNumericEntities && "iso-8859-1" === h && (g = s(g)), m.indexOf("[]=") > -1 && (g = o(g) ? [ g ] : g), 
            n.call(u, y) ? u[y] = r.combine(u[y], g) : u[y] = g;
          }
          return u;
        }(t, i) : t, f = i.plainObjects ? Object.create(null) : {}, p = Object.keys(l), d = 0; d < p.length; ++d) {
          var h = p[d], y = u(h, l[h], i, "string" == typeof t);
          f = r.merge(f, y, i);
        }
        return !0 === i.allowSparse ? f : r.compact(f);
      };
    })), i.register("gVDqU", (function(t, e) {
      "use strict";
      var r = t.exports && t.exports.__assign || function() {
        return (r = Object.assign || function(t) {
          for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.normalizeGifs = t.exports.normalizeGif = t.exports.USER_BOOL_PROPS = t.exports.BOOL_PROPS = void 0, 
      t.exports.BOOL_PROPS = [ "is_anonymous", "is_community", "is_featured", "is_hidden", "is_indexable", "is_preserve_size", "is_realtime", "is_removed", "is_sticker" ], 
      t.exports.USER_BOOL_PROPS = [ "suppress_chrome", "is_public", "is_verified" ];
      var n = function(t) {
        return function(e) {
          return t[e] = !!t[e];
        };
      }, o = function(t) {
        return "string" == typeof t ? t : t.text;
      }, i = function(e, i, a) {
        void 0 === i && (i = ""), void 0 === a && (a = "");
        var s = r({}, e);
        s.id = String(s.id), s.tags = (s.tags || []).map(o), s.bottle_data || (s.bottle_data = {}), 
        s.response_id = i, s.pingback_event_type = a, t.exports.BOOL_PROPS.forEach(n(s));
        var c = s.user;
        if (c) {
          var u = r({}, c);
          t.exports.USER_BOOL_PROPS.forEach(n(u)), s.user = u;
        }
        return s;
      };
      t.exports.normalizeGif = function(t, e) {
        var r = t.meta.response_id;
        return t.data = i(t.data, r, e), t;
      }, t.exports.normalizeGifs = function(t, e) {
        var r = t.meta.response_id;
        return t.data = t.data.map((function(t) {
          return i(t, r, e);
        })), t;
      };
    })), i.register("kJhLN", (function(t, e) {
      "use strict";
      var n = t.exports && t.exports.__awaiter || function(t, e, r, n) {
        return new (r || (r = Promise))((function(o, i) {
          function a(t) {
            try {
              c(n.next(t));
            } catch (t) {
              i(t);
            }
          }
          function s(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
              t(e);
            }))).then(a, s);
          }
          c((n = n.apply(t, e || [])).next());
        }));
      }, o = t.exports && t.exports.__generator || function(t, e) {
        var r, n, o, i, a = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
        function s(i) {
          return function(s) {
            return function(i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (;a; ) try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
                0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                switch (n = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                 case 0:
                 case 1:
                  o = i;
                  break;
  
                 case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };
  
                 case 5:
                  a.label++, n = i[1], i = [ 0 ];
                  continue;
  
                 case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;
  
                 default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
                }
                i = e.call(t, a);
              } catch (t) {
                i = [ 6, t ], n = 0;
              } finally {
                r = o = 0;
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              };
            }([ i, s ]);
          };
        }
        return i = {
          next: s(0),
          throw: s(1),
          return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this;
        }), i;
      }, a = t.exports && t.exports.__importDefault || function(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.DEFAULT_ERROR = t.exports.ERROR_PREFIX = void 0;
      var s = a(i("cLZ8I"));
      t.exports.ERROR_PREFIX = "@giphy/js-fetch-api: ", t.exports.DEFAULT_ERROR = "Error fetching";
      var c = (("undefined" != typeof window ? window : r) || {}).GIPHY_API_URL || "https://api.giphy.com/v1/", u = function(t) {
        return t;
      }, l = {};
      t.exports.default = function(e, r, i, a) {
        var f, p = this;
        if (void 0 === r && (r = u), void 0 === a && (a = !1), f = Date.now(), Object.keys(l).forEach((function(t) {
          f - l[t].ts >= 6e4 && delete l[t];
        })), !l[e] || a) {
          l[e] = {
            request: n(p, void 0, void 0, (function() {
              var n, a, u, f, p;
              return o(this, (function(o) {
                switch (o.label) {
                 case 0:
                  return o.trys.push([ 0, 9, , 10 ]), [ 4, fetch("" + c + e, {
                    method: "get"
                  }) ];
  
                 case 1:
                  return (a = o.sent()).ok ? [ 4, a.json() ] : [ 3, 3 ];
  
                 case 2:
                  return f = o.sent(), [ 2, r(f, i) ];
  
                 case 3:
                  u = t.exports.DEFAULT_ERROR, o.label = 4;
  
                 case 4:
                  return o.trys.push([ 4, 6, , 7 ]), [ 4, a.json() ];
  
                 case 5:
                  return (f = o.sent()).message && (u = f.message), [ 3, 7 ];
  
                 case 6:
                  return o.sent(), [ 3, 7 ];
  
                 case 7:
                  n = new s.default("" + t.exports.ERROR_PREFIX + u, a.status, a.statusText), o.label = 8;
  
                 case 8:
                  return [ 3, 10 ];
  
                 case 9:
                  return p = o.sent(), n = new s.default(p.message), delete l[e], [ 3, 10 ];
  
                 case 10:
                  throw n;
                }
              }));
            })),
            ts: Date.now()
          };
        }
        return l[e].request;
      };
    })), i.register("cLZ8I", (function(t, e) {
      "use strict";
      var r, n = t.exports && t.exports.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(t, e) {
          t.__proto__ = e;
        } || function(t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        })(t, e);
      }, function(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
        new n);
      });
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      });
      var o = function(t) {
        function e(e, r, n) {
          void 0 === r && (r = 0), void 0 === n && (n = "");
          var o = t.call(this, e) || this;
          return o.status = r, o.statusText = n, o;
        }
        return n(e, t), e;
      }(Error);
      t.exports.default = o;
    })), i.register("hvOTq", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      });
    })), i.register("iknJx", (function(t, e) {
      "use strict";
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      });
    })), i.register("kMMoF", (function(t, e) {
      "use strict";
      var r = t.exports && t.exports.__awaiter || function(t, e, r, n) {
        return new (r || (r = Promise))((function(o, i) {
          function a(t) {
            try {
              c(n.next(t));
            } catch (t) {
              i(t);
            }
          }
          function s(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              i(t);
            }
          }
          function c(t) {
            var e;
            t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
              t(e);
            }))).then(a, s);
          }
          c((n = n.apply(t, e || [])).next());
        }));
      }, n = t.exports && t.exports.__generator || function(t, e) {
        var r, n, o, i, a = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
        function s(i) {
          return function(s) {
            return function(i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (;a; ) try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
                0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                switch (n = 0, o && (i = [ 2 & i[0], o.value ]), i[0]) {
                 case 0:
                 case 1:
                  o = i;
                  break;
  
                 case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };
  
                 case 5:
                  a.label++, n = i[1], i = [ 0 ];
                  continue;
  
                 case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;
  
                 default:
                  if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
                }
                i = e.call(t, a);
              } catch (t) {
                i = [ 6, t ], n = 0;
              } finally {
                r = o = 0;
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              };
            }([ i, s ]);
          };
        }
        return i = {
          next: s(0),
          throw: s(1),
          return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this;
        }), i;
      }, o = t.exports && t.exports.__spreadArrays || function() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
        var n = Array(t), o = 0;
        for (e = 0; e < r; e++) for (var i = arguments[e], a = 0, s = i.length; a < s; a++, 
        o++) n[o] = i[a];
        return n;
      };
      Object.defineProperty(t.exports, "__esModule", {
        value: !0
      }), t.exports.gifPaginator = void 0, t.exports.gifPaginator = function(t, e) {
        void 0 === e && (e = []);
        var i = o(e), a = e.map((function(t) {
          return t.id;
        })), s = e.length, c = !1;
        return function() {
          return r(void 0, void 0, void 0, (function() {
            var e, r, u;
            return n(this, (function(n) {
              switch (n.label) {
               case 0:
                return c ? [ 2, i ] : [ 4, t(s) ];
  
               case 1:
                return e = n.sent(), r = e.pagination, u = e.data, s = r.count + r.offset, c = s === r.total_count, 
                u.forEach((function(t) {
                  var e = t.id;
                  a.includes(e) || (i.push(t), a.push(e));
                })), [ 2, o(i) ];
              }
            }));
          }));
        };
      };
    })), i.register("45DIW", (function(t, e) {
      t.exports = JSON.parse('{"scripts":{"clean":"rm -rf ./dist","dev":"parcel public/test.html","docs":"typedoc","prepublish":"npm run clean && tsc","build":"tsc","test":"jest --config ./jestconfig.js","test:watch":"jest --config ./jestconfig.js --watchAll"},"name":"@giphy/js-fetch-api","version":"1.8.1","main":"dist/index.js","description":"Javascript API to fetch gifs and stickers from the GIPHY API.","types":"dist/index.d.ts","files":["dist/**/*","src/**/*"],"license":"MIT","publishConfig":{"access":"public"},"dependencies":{"@giphy/js-types":"^2.1.0","@giphy/js-util":"^1.10.0","qs":"^6.9.4"},"devDependencies":{"@types/cookie":"^0.4.0","@types/qs":"^6.9.4","jest-fetch-mock":"^3.0.3","parcel-bundler":"^1.12.4","typedoc":"^0.18.0","typedoc-thunder-theme":"^0.0.2","typescript":"^4.0.2"},"gitHead":"688351c9d7bb9a5ae8799468c6611125d8da01ac"}');
    })), i("dDYOq");
  }();