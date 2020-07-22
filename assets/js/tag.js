!(function (t, e, n) {
  function r(t, e, n) {
    return function () {
      try {
        return t.apply(this, arguments);
      } catch (t) {
        n || i(t, e);
      }
    };
  }
  function i(t, e) {
    if (0.01 > Math.random())
      try {
        var n = (t && t.message) || '';
        -1 < n.indexOf('network error occurred') ||
          (-1 < n.indexOf('send beacon') &&
            -1 < n.indexOf('Content Security Policy')) ||
          new q().log(
            'jserrs',
            re,
            t.message,
            e,
            Gt.href,
            '',
            'string' == typeof t.stack && t.stack.replace(/\n/g, '\\n')
          );
      } catch (t) {}
  }
  function o(e, n, i, o) {
    return t.setTimeout(r(e, i || 'setTimeout', o), n);
  }
  function a(n, r, i, o, a) {
    function c(t, e) {
      (e = Math.max(0, Math.min(e, 65535))),
        v.mergeArrays(t, [e >> 8, 255 & e]);
    }
    function u(t, e) {
      v.mergeArrays(t, [255 & e]);
    }
    function l(t, e) {
      if (-1 == J.indexOf(e)) return !0;
      u(t, e);
    }
    function h(t, e) {
      for (e = Math.max(0, 0 | e); 127 < e; )
        v.mergeArrays(t, [(127 & e) | 128]), (e >>= 7);
      v.mergeArrays(t, [e]);
    }
    function f(t, e) {
      255 < e.length && (e = e.substr(0, 255)), v.mergeArrays(t, [e.length]);
      for (var n = 0; n < e.length; n++) c(t, e.charCodeAt(n));
    }
    function d(t, e) {
      h(t, e.length);
      for (var n = 0; n < e.length; n++) h(t, e.charCodeAt(n));
    }
    function p(t, e, n, r, i, o) {
      for (var a; n && (a = F.getElementSize(n)) && (!a[0] || !a[1]); )
        n = F.getElementParent(n);
      if (!n) return null;
      if (!(a = n[at]) || 0 > a) return null;
      var s = {
        mousemove: 2,
        click: 32,
        dblclick: 33,
        mousedown: 4,
        mouseup: 30,
        touch: 12,
      }[e];
      if (!s) return null;
      var c = F.getElementXY(n);
      return l((n = []), s)
        ? null
        : (h(n, t),
          h(n, a),
          h(n, Math.max(0, r[0] - c[0])),
          h(n, Math.max(0, r[1] - c[1])),
          /^mouse(up|down)|click$/.test(e) &&
            u(n, 2 > (t = i || o) ? 1 : t == (i ? 2 : 4) ? 4 : 2),
          n);
    }
    function m(t, e, n, r, i) {
      var o = [];
      return l(o, 38)
        ? null
        : (h(o, t),
          c(o, e),
          u(o, n),
          (!(t = r[at]) || 0 > t) && (t = 0),
          h(o, t),
          u(o, i ? 1 : 0),
          o);
    }
    function g(t, e) {
      var n;
      if (0 == e.length) var r = (n = '');
      else
        100 >= e.length
          ? ((n = e), (r = ''))
          : 200 >= e.length
          ? ((n = e.substr(0, 100)), (r = e.substr(100)))
          : ((n = e.substr(0, 97)), (r = e.substr(e.length - 97)));
      var i = [];
      return l(i, 29) ? null : (h(i, t), d(i, n), d(i, r), i);
    }
    function y(t) {
      var e = [];
      return l(e, 27) ? null : (h(e, t), e);
    }
    function w(t) {
      var e = [];
      return u(e, 14), h(e, t), e;
    }
    function E(t) {
      var e = [];
      return l(e, 15) ? null : (h(e, t), e);
    }
    function k(t, e) {
      var n = [];
      return l(n, 17) ? null : (h(n, t), h(n, e[at]), n);
    }
    function x(t, e) {
      var n = [];
      return l(n, 18) ? null : (h(n, t), h(n, e[at]), n);
    }
    function O(t, e, n, r) {
      var i = [];
      return l(i, 39)
        ? null
        : (h(i, t), h(i, e[at]), f(i, String(n)), u(i, r ? 1 : 0), i);
    }
    function T(t, e) {
      var n = F.getFormNumber(e);
      if (0 > n) return null;
      for (var r = e.elements, i = r.length, o = [], a = 0; a < i; a++)
        if (!F.isEmptyField(r[a])) {
          var s = r[a][at];
          s && 0 < s && v.mergeArrays(o, [s]);
        }
      if (l((r = []), 11)) return null;
      for (h(r, t), h(r, n), h(r, o.length), n = 0; n < o.length; n++)
        h(r, o[n]);
      return r;
    }
    function S(e, n, r) {
      (e = e.apply(t, n)), X.append(e, r);
    }
    function A(t) {
      if (t[at])
        t = (function (t, e) {
          var n = e[at];
          if (0 < n) {
            var r = [],
              i = F.getElementRegion(e),
              o = st[n],
              a = i[0] + 'x' + i[1],
              s = i[2] + 'x' + i[3];
            if (a != o.pos) {
              if (((o.pos = a), l(r, 9))) return null;
              h(r, t), h(r, n), h(r, i[0]), h(r, i[1]);
            }
            if (s != o.size) {
              if (((o.size = s), l(r, 10))) return null;
              h(r, t), h(r, n), h(r, i[2]), h(r, i[3]);
            }
            if (r.length) return r;
          }
          return null;
        })(_.nowEventTime(), t);
      else {
        var e = F.getElementParent(t);
        e && A(e),
          (t[at] = Q),
          (st[Q] = {}),
          Q++,
          (e = (function (t) {
            if (!t.nodeName) return (t[at] = -1), null;
            var e = +t[at];
            if (!isFinite(e) || 0 >= e) return null;
            if (t.attributes)
              for (var n = t; n; ) {
                if (n.attributes.__ym_wv_ign) return null;
                n = n.parentElement;
              }
            n = 64;
            var r = 0,
              i = F.getElementParent(t),
              o = i && i[at] ? i[at] : 0;
            0 > o && (o = 0);
            var a = t.nodeName.toUpperCase(),
              s = $[a];
            s || (n |= 2);
            var d = F.getElementNeighborPosition(t);
            d || (n |= 4);
            var p = F.getElementRegion(t);
            (i = i ? F.getElementRegion(i) : null) &&
              p[0] == i[0] &&
              p[1] == i[1] &&
              p[2] == i[2] &&
              p[3] == i[3] &&
              (n |= 8),
              (st[e].pos = p[0] + 'x' + p[1]),
              (st[e].size = p[2] + 'x' + p[3]),
              t.id && 'string' == typeof t.id && (n |= 32),
              (i = F.calcTextChecksum(t)) && (n |= 16);
            var m = F.calcAttribChecksum(t);
            m && (r |= 2);
            t: {
              for (
                var g = F.getElementChildren(F.getElementParent(t), t.tagName),
                  v = 0;
                v < g.length;
                v++
              )
                if (
                  (!g[v].id || 'string' != typeof g[v].id) &&
                  F.calcAttribChecksum(g[v]) == m &&
                  F.calcTextChecksum(g[v]) == i
                ) {
                  g = !0;
                  break t;
                }
              g = !1;
            }
            if (g) {
              n |= 1;
              var y = F.calcChildrenChecksum(t);
            }
            return l((g = []), 1)
              ? null
              : (h(g, e),
                u(g, n),
                h(g, o),
                s ? u(g, s) : f(g, a),
                d && h(g, d),
                8 & n || (h(g, p[0]), h(g, p[1]), h(g, p[2]), h(g, p[3])),
                32 & n && f(g, t.id),
                i && c(g, i),
                1 & n && c(g, y),
                u(g, r),
                m && c(g, m),
                g);
          })(t)),
          X.append(e, void 0),
          (t = (function (t) {
            var e = t[at];
            if (
              !e ||
              0 > e ||
              !/^INPUT|SELECT|TEXTAREA$/.test(t.nodeName) ||
              !t.form ||
              C(t.form)
            )
              return null;
            var n = F.getFormNumber(t.form);
            if (0 > n) return null;
            var r =
              'INPUT' == t.nodeName
                ? {
                    text: 0,
                    color: 0,
                    date: 0,
                    datetime: 0,
                    'datetime-local': 0,
                    email: 0,
                    number: 0,
                    range: 0,
                    search: 0,
                    tel: 0,
                    time: 0,
                    url: 0,
                    month: 0,
                    week: 0,
                    password: 2,
                    radio: 3,
                    checkbox: 4,
                    file: 6,
                    image: 7,
                  }[t.type]
                : { SELECT: 1, TEXTAREA: 5 }[t.nodeName];
            if ('number' != typeof r) return null;
            for (
              var i = -1, o = t.form.elements, a = o.length, s = 0, c = 0;
              s < a;
              s++
            )
              if (o[s].name == t.name) {
                if (o[s] == t) {
                  i = c;
                  break;
                }
                c++;
              }
            return 0 > i
              ? null
              : l((o = []), 7)
              ? null
              : (h(o, e), h(o, n), h(o, r), d(o, t.name || ''), h(o, i), o);
          })(t));
      }
      X.append(t, void 0);
    }
    function I(t, e) {
      var n = t && F.classNameExists(t, '(ym-disable-keys|-metrika-nokeys)');
      return (
        e &&
          t &&
          (n =
            n ||
            !!F.getElementsByClassName('(ym-disable-keys|-metrika-nokeys)', t)
              .length),
        n
      );
    }
    function C(t) {
      return t && F.classNameExists(t, '(ym-disable-submit|-metrika-noform)');
    }
    function P(t) {
      var e = At.getTarget(t);
      if (e && 'SCROLLBAR' != e.nodeName) {
        if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e.tagName))
          if (e[at]) A(e);
          else {
            var n = e.form;
            if (n)
              for (var r = (n = n.elements).length, i = 0; i < r; i++)
                /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(n[i].tagName) &&
                  !n[i][at] &&
                  A(n[i]);
            else A(e);
          }
        else A(e);
        S(p, [_.nowEventTime(), t.type, e, At.getPos(t), t.which, t.button]);
      }
    }
    function N(n) {
      P(n),
        (function () {
          if (t.getSelection) {
            try {
              var n = t.getSelection();
            } catch (t) {
              return;
            }
            var r = n.toString(),
              i = n.anchorNode;
          } else
            e.selection &&
              e.selection.createRange &&
              ((n = e.selection.createRange()),
              (r = n.text),
              (i = n.parentElement()));
          if ('string' == typeof r) {
            try {
              for (; i && 1 != i.nodeType; ) i = i.parentNode;
            } catch (t) {
              return;
            }
            if (i) {
              (n = R(i).privateFlag || I(i, !0)),
                (i = i.getElementsByTagName('*'));
              for (var o = 0; o < i.length && !n; )
                (n = R(i[o]).privateFlag || I(i[o], !0)), o++;
              r != rt &&
                ((rt = r),
                (r = n
                  ? v
                      .map(function () {
                        return Z.obfuscatedSymbol;
                      }, r.split(''))
                      .join('')
                  : r),
                S(g, [_.nowEventTime(), r]));
            }
          }
        })();
    }
    function M(t) {
      return (
        (t.shiftKey ? 2 : 0) |
        (t.ctrlKey ? 4 : 0) |
        (t.altKey ? 1 : 0) |
        (t.metaKey ? 8 : 0) |
        (t.ctrlKey || t.altKey ? 16 : 0)
      );
    }
    function R(t) {
      if (!t)
        return {
          ignore: !0,
          forceRecord: !1,
          isPrivate: !1,
          privateFlag: !1,
          recordData: !0,
        };
      var e = 'password' === t.type || tt.test(t.name) || tt.test(t.id),
        n =
          v.reduce(
            function (e, n) {
              return e || Z.generalRegex.test(t[n]);
            },
            !1,
            ['className', 'id', 'name']
          ) || Z.placeholderRegex.test(t.placeholder),
        r = Z.forceRecordRegex.test(t.className);
      return {
        forceRecord: r,
        ignore: e,
        isPrivate: n,
        privateFlag: !r && (n || e),
        recordData: r || !((n && a.get('isEU')) || e),
      };
    }
    function D(t, e, n) {
      var r = R((t = At.getTarget(t)));
      r.ignore ||
        (!r.forceRecord && ((r.isPrivate && a.get('isEU')) || I(t))) ||
        (A(t), S(m, [_.nowEventTime(), e, n, t, r.privateFlag]));
    }
    function j(t) {
      var e = t.keyCode,
        n = M(t);
      (({
        3: 1,
        8: 1,
        9: 1,
        13: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 1,
        20: 1,
        27: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        45: 1,
        46: 1,
        91: 1,
        92: 1,
        93: 1,
        106: 1,
        110: 1,
        111: 1,
        144: 1,
        145: 1,
      }[e] ||
        (112 <= e && 123 >= e) ||
        (96 <= e && 105 >= e) ||
        16 & n) &&
        (19 == e && 4 == (-17 & n) && (e = 144),
        D(t, e, 16 | n),
        (et = !1),
        v.setTimeout(
          function () {
            et = !0;
          },
          1,
          'fvl.keyDown'
        ),
        !(67 == e && 4 & n) || 1 & n || 2 & n || U()));
    }
    function L(t) {
      et &&
        !nt &&
        0 !== t.which &&
        (D(t, t.charCode || t.keyCode, M(t)),
        (nt = !0),
        v.setTimeout(
          function () {
            nt = !1;
          },
          1,
          'fvl.keyPress'
        ));
    }
    function U() {
      it ||
        ((it = !0),
        rt && S(y, [_.nowEventTime()]),
        v.setTimeout(
          function () {
            it = !1;
          },
          1,
          'fvl.copy'
        ));
    }
    function B() {
      ot || ((ot = !0), S(w, [_.nowEventTime()]));
    }
    function z() {
      ot && ((ot = !1), S(E, [_.nowEventTime()]));
    }
    function H(t) {
      (!ot || (t && !t.fromElement)) && B();
    }
    function V(t) {
      t && !t.toElement && z();
    }
    function G(t) {
      if (
        (t = At.getTarget(t)) &&
        /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(t.tagName)
      ) {
        if (t[at]) A(t);
        else {
          var e = t.form;
          if (e)
            for (var n = (e = e.elements).length, r = 0; r < n; r++)
              /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(e[r].tagName) &&
                !e[r][at] &&
                A(e[r]);
          else A(t);
        }
        S(k, [_.nowEventTime(), t]);
      }
    }
    function W(t) {
      (t = At.getTarget(t)) &&
        /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(t.tagName) &&
        (A(t), S(x, [_.nowEventTime(), t]));
    }
    function q(t) {
      if (
        (t = At.getTarget(t)) &&
        !(function (t) {
          return (
            'INPUT' == t.tagName &&
            ('password' == t.type ||
              (t.name && tt.test(t.name)) ||
              (t.id && tt.test(t.id)))
          );
        })(t) &&
        !I(t) &&
        /^INPUT|SELECT|TEXTAREA$/.test(t.tagName)
      ) {
        var e = R(t),
          n = /^(checkbox|radio)$/.test(t.type) ? t.checked : t.value;
        (n = e.recordData
          ? n
          : v
              .map(function () {
                return Z.obfuscatedSymbol;
              }, n.split(''))
              .join('')),
          A(t),
          S(O, [_.nowEventTime(), t, n, e.privateFlag]);
      }
    }
    function K(t) {
      if ((t = At.getTarget(t)) && !C(t) && 'FORM' == t.nodeName) {
        for (var e = t.elements, n = 0; n < e.length; n++)
          F.isEmptyField(e[n]) || A(e[n]);
        S(T, [_.nowEventTime(), t], !0);
      }
    }
    var X = new Y({
        protocol: n,
        counterId: r,
        globalConfig: a,
        counterType: i,
        meta: { url: s().href, hitId: o, timezone: Wt, timestamp: qt },
      }),
      $ = {
        A: 1,
        ABBR: 2,
        ACRONYM: 3,
        ADDRESS: 4,
        APPLET: 5,
        AREA: 6,
        B: 7,
        BASE: 8,
        BASEFONT: 9,
        BDO: 10,
        BIG: 11,
        BLOCKQUOTE: 12,
        BODY: 13,
        BR: 14,
        BUTTON: 15,
        CAPTION: 16,
        CENTER: 17,
        CITE: 18,
        CODE: 19,
        COL: 20,
        COLGROUP: 21,
        DD: 22,
        DEL: 23,
        DFN: 24,
        DIR: 25,
        DIV: 26,
        DL: 27,
        DT: 28,
        EM: 29,
        FIELDSET: 30,
        FONT: 31,
        FORM: 32,
        FRAME: 33,
        FRAMESET: 34,
        H1: 35,
        H2: 36,
        H3: 37,
        H4: 38,
        H5: 39,
        H6: 40,
        HEAD: 41,
        HR: 42,
        HTML: 43,
        I: 44,
        IFRAME: 45,
        IMG: 46,
        INPUT: 47,
        INS: 48,
        ISINDEX: 49,
        KBD: 50,
        LABEL: 51,
        LEGEND: 52,
        LI: 53,
        LINK: 54,
        MAP: 55,
        MENU: 56,
        META: 57,
        NOFRAMES: 58,
        NOSCRIPT: 59,
        OBJECT: 60,
        OL: 61,
        OPTGROUP: 62,
        OPTION: 63,
        P: 64,
        PARAM: 65,
        PRE: 66,
        Q: 67,
        S: 68,
        SAMP: 69,
        SCRIPT: 70,
        SELECT: 71,
        SMALL: 72,
        SPAN: 73,
        STRIKE: 74,
        STRONG: 75,
        STYLE: 76,
        SUB: 77,
        SUP: 78,
        TABLE: 79,
        TBODY: 80,
        TD: 81,
        TEXTAREA: 82,
        TFOOT: 83,
        TH: 84,
        THEAD: 85,
        TITLE: 86,
        TR: 87,
        TT: 88,
        U: 89,
        UL: 90,
        VAR: 91,
        NOINDEX: 100,
      },
      J = [17, 18, 38, 32, 39, 15, 11, 7, 1],
      Z = (function () {
        var t = 'first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state'.split(
          ' '
        );
        return {
          generalRegex: new RegExp('(' + t.join('|') + ')', 'i'),
          placeholderRegex: new RegExp(
            '(' +
              t
                .concat(
                  'имя;фамилия;отчество;индекс;телефон;адрес;паспорт;Номер(-|\\.|_|\\s){0,2}карты;дата(-|\\.|_|\\s){0,2} рождения;дом;улица;квартира;город;область'.split(
                    ';'
                  )
                )
                .join('|') +
              ')',
            'i'
          ),
          forceRecordRegex: /ym-record-keys/i,
          obfuscatedSymbol: String.fromCharCode(8226),
          obfuscatedKeyCode: 88,
        };
      })(),
      Q = 1,
      tt = /^(password|passwd|pswd)$/,
      et = !0,
      nt = !1,
      rt = '',
      it = !1,
      ot = !0;
    _.initCorrector(), _.nowTime();
    var at = 'metrikaId_' + Math.random(),
      st = {},
      ct = ':submit' + Math.random();
    return (
      v.isMetrikaPlayer() ||
        (b.on(e, 'click,dblclick,mousedown', P),
        b.on(e, 'mouseup', N),
        b.on(e, 'keydown', j),
        b.on(e, 'keypress', L),
        b.on(e, 'copy', U),
        F.getBody() &&
          b.on(e, 'mouseleave', function (t) {
            (t = At.getTarget(t)) && 'BODY' == t.tagName && X.append([], !0);
          }),
        e.attachEvent && !t.opera
          ? (b.on(e, 'focusin', H), b.on(e, 'focusout', V))
          : (b.on(t, 'focus', B), b.on(t, 'blur', z), b.on(e, 'blur', z)),
        e.addEventListener
          ? (b.on(e, 'focus', G),
            b.on(e, 'blur', W),
            b.on(e, 'change', q),
            b.on(e, 'submit', K))
          : e.attachEvent &&
            (b.on(e, 'focusin', G),
            b.on(e, 'focusout', W),
            (function () {
              for (
                var t = e.getElementsByTagName('form'), n = 0;
                n < t.length;
                n++
              ) {
                for (
                  var r = t[n].getElementsByTagName('*'), i = 0;
                  i < r.length;
                  i++
                )
                  /^INPUT|SELECT|TEXTAREA$/.test(r[i].tagName) &&
                    b.on(r[i], 'change', q);
                b.on(t[n], 'submit', K);
              }
            })()),
        (function () {
          var t = e.getElementsByTagName('form');
          if (t.length)
            for (var n = 0; n < t.length; n++) {
              var r = t[n].submit;
              ('function' == typeof r ||
                ('object' == typeof r &&
                  /^\s*function submit\(\)/.test(String(r)))) &&
                ((t[n][ct] = r),
                (t[n].submit = function () {
                  return K({ target: this }), this[ct]();
                }));
            }
        })()),
      {
        start: function () {
          X.activate();
        },
        stop: function () {
          X.clear(),
            b.un(e, 'click', P),
            b.un(e, 'dblclick', P),
            b.un(e, 'mousedown', P),
            b.un(e, 'mouseup', N),
            b.un(e, 'keydown', j),
            b.un(e, 'keypress', L),
            b.un(e, 'copy', U),
            b.un(e, 'focusin', H),
            b.un(e, 'focusout', V),
            b.un(t, 'focus', B),
            b.un(t, 'blur', z),
            b.un(e, 'blur', z),
            e.removeEventListener
              ? (b.un(e, 'focus', G),
                b.un(e, 'blur', W),
                b.un(e, 'change', q),
                b.un(e, 'submit', K))
              : e.detachEvent &&
                (b.un(e, 'focusin', G),
                b.un(e, 'focusout', W),
                (function () {
                  for (
                    var t = e.getElementsByTagName('form'), n = 0;
                    n < t.length;
                    n++
                  ) {
                    for (
                      var r = t[n].getElementsByTagName('*'), i = 0;
                      i < r.length;
                      i++
                    )
                      /^INPUT|SELECT|TEXTAREA$/.test(r[i].tagName) &&
                        b.un(r[i], 'change', q);
                    b.un(t[n], 'submit', K);
                  }
                })()),
            (function () {
              for (
                var t = e.getElementsByTagName('form'), n = 0;
                n < t.length;
                n++
              )
                t[n][ct] && (t[n].submit = t[n][ct]);
            })();
        },
      }
    );
  }
  function s() {
    for (
      var e,
        n,
        r = {},
        i = 'hash host hostname href pathname port protocol search'.split(' '),
        o = i.length,
        a = o;
      a--;

    )
      r[i[a]] = '';
    try {
      for (e = t.location, a = o; a--; ) r[(n = i[a])] = '' + e[n];
    } catch (t) {
      Gt && (r = Gt);
    }
    return r;
  }
  function c() {
    return (
      0 ==
      s().hostname.search(
        /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site)$/
      )
    );
  }
  function u(e) {
    return -1 !== ('' + t.navigator.userAgent).toLowerCase().search(e);
  }
  function l(t) {
    return (t = t && t.innerHTML && t.innerHTML.replace(/<\/?[^>]+>/gi, ''))
      ? ('' + t).replace(/^\s+/, '').replace(/\s+$/, '')
      : '';
  }
  function h(t, e) {
    var n;
    if (!t || !e) return !1;
    var r = [];
    for (n = 0; n < e.length; n++)
      r.push(
        e[n]
          .replace(/\^/g, '\\^')
          .replace(/\$/g, '\\$')
          .replace(/\./g, '\\.')
          .replace(/\[/g, '\\[')
          .replace(/\]/g, '\\]')
          .replace(/\|/g, '\\|')
          .replace(/\(/g, '\\(')
          .replace(/\)/g, '\\)')
          .replace(/\?/g, '\\?')
          .replace(/\*/g, '\\*')
          .replace(/\+/g, '\\+')
          .replace(/\{/g, '\\{')
          .replace(/\}/g, '\\}')
      );
    return new RegExp('\\.(' + r.join('|') + ')$', 'i').test(t);
  }
  function f() {
    var e,
      n = t.performance || t.webkitPerformance,
      r = n && n.timing,
      i = [];
    if (r && (e = r.navigationStart))
      for (
        (i = [
          r.domainLookupEnd - r.domainLookupStart,
          r.connectEnd - r.connectStart,
          r.responseStart - r.requestStart,
          r.responseEnd - r.responseStart,
          r.fetchStart - e,
          r.redirectEnd - r.redirectStart,
          r.redirectCount || (n.navigation && n.navigation.redirectCount),
        ]).push(
          r.domInteractive && r.domLoading
            ? r.domInteractive - r.domLoading
            : null
        ),
          i.push(
            r.domContentLoadedEventStart && r.domContentLoadedEventEnd
              ? r.domContentLoadedEventEnd - r.domContentLoadedEventStart
              : null
          ),
          i.push(r.domComplete ? r.domComplete - e : null),
          i.push(r.loadEventStart ? r.loadEventStart - e : null),
          i.push(
            r.loadEventStart && r.loadEventEnd
              ? r.loadEventEnd - r.loadEventStart
              : null
          ),
          i.push(
            r.domContentLoadedEventStart
              ? r.domContentLoadedEventStart - e
              : null
          ),
          n = 0;
        n < i.length;
        n++
      )
        null !== (r = i[n]) && (0 > r || 36e5 < r) && (i[n] = null);
    return i;
  }
  function d(t) {
    return 'first-contentful-paint' === t.name;
  }
  var p = !1,
    m =
      'undefined' != typeof Object &&
      'function' == typeof Object.defineProperty;
  try {
    if (m)
      var g = (function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var i = (n[r] = { i: r, l: !1, exports: {} });
          return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
        }
        var n = {};
        return (
          (e.m = t),
          (e.c = n),
          (e.d = function (t, n, r) {
            e.o(t, n) ||
              Object.defineProperty(t, n, { enumerable: !0, get: r });
          }),
          (e.r = function (t) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(t, '__esModule', { value: !0 });
          }),
          (e.t = function (t, n) {
            if (
              (1 & n && (t = e(t)),
              8 & n || (4 & n && 'object' == typeof t && t && t.__esModule))
            )
              return t;
            var r = Object.create(null);
            if (
              (e.r(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
              2 & n && 'string' != typeof t)
            )
              for (var i in t)
                e.d(
                  r,
                  i,
                  function (e) {
                    return t[e];
                  }.bind(null, i)
                );
            return r;
          }),
          (e.n = function (t) {
            var n =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return e.d(n, 'a', n), n;
          }),
          (e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.p = ''),
          e((e.s = 65))
        );
      })([
        function (t, e, n) {
          n.r(e),
            n.d(e, 'IterableUtils', function () {
              return h;
            });
          var r = n(29),
            i = n(20),
            o = n(27),
            a = n(8),
            s = n(12);
          t = n(9);
          var c = n(2),
            u = t.a.Map,
            l = t.a.Set,
            h = {
              binarySearch: function (t, e, n) {
                var r = 0,
                  i = t.length - 1;
                for (
                  n =
                    'function' == typeof n
                      ? n
                      : function (t) {
                          return t;
                        };
                  r <= i;

                ) {
                  var o = Math.round((r + i) / 2),
                    a = n(t[o]);
                  if (a === e) {
                    var s = t[o];
                    break;
                  }
                  e > a ? (r = o + 1) : (i = o - 1);
                }
                return s;
              },
              forof: function (t, e) {
                t instanceof a.List
                  ? t.forEach(e)
                  : t instanceof s.KeyValue
                  ? t.forEach(e)
                  : Object(r.a)(t, e);
              },
              forin: function (t, e) {
                Object(i.a)(t, e);
              },
              fastIterate: function (t, e) {
                for (var n = 0, r = t.length; n < r; n++) e(n, t[n]);
              },
              toArray: function (t) {
                return t instanceof a.List || t instanceof s.KeyValue
                  ? (l && t instanceof l) || (u && t instanceof u)
                    ? Object(o.a)(t)
                    : t.toArray()
                  : Object(o.a)(t);
              },
              toList: function (t) {
                t = this.isArray(t) ? t : this.toArray(t);
                for (var e = new a.List(), n = 0; n < t.length; n++)
                  e.add(t[n]);
                return e;
              },
              addToArray: function (t) {
                for (
                  var e,
                    n = arguments.length,
                    r = Array(1 < n ? n - 1 : 0),
                    i = 1;
                  i < n;
                  i++
                )
                  r[i - 1] = arguments[i];
                return (e = []).concat.apply(e, r).reduce(function (t, e) {
                  return 0 > t.indexOf(e) && t.push(e), t;
                }, t);
              },
              removeFromArray: function (t) {
                for (
                  var e,
                    n = arguments.length,
                    r = Array(1 < n ? n - 1 : 0),
                    i = 1;
                  i < n;
                  i++
                )
                  r[i - 1] = arguments[i];
                return (e = []).concat.apply(e, r).reduce(function (t, e) {
                  var n = t.indexOf(e);
                  return 0 <= n && t.splice(n, 1), t;
                }, t);
              },
              isArray: function (t) {
                return 'function' == typeof Array.isArray
                  ? Array.isArray(t)
                  : '[object Array]' === {}.toString.call(t);
              },
              inArray: function (t, e) {
                return (
                  !!t &&
                  ('function' == typeof t.includes
                    ? t.includes(e)
                    : 0 <= t.indexOf(e))
                );
              },
              fill: function (t, e) {
                if (Array.prototype.fill) return t.fill(e);
                for (var n = t.length; 0 < n--; ) t[n] = e;
                return t;
              },
              reduce: function (t, e, n) {
                return this.toArray(t).reduce(e, n);
              },
              reduceRight: function (t, e, n) {
                return this.toArray(t).reduceRight(e, n);
              },
              map: function (t, e) {
                var n = this.toArray(t);
                if (c.ObjectUtils.isNative(n.map, 'map')) return n.map(e);
                for (var r = [], i = 0; i < n.length; i++) r[i] = e(n[i], i, n);
                return r;
              },
              find: function (t, e) {
                return Array.prototype.find
                  ? t.find(e)
                  : (this.forof(t, function (r, i) {
                      return !0 != !!e(r, i, t) || ((n = r), !1);
                    }),
                    n);
                var n;
              },
              keys: function (t) {
                if ('function' == typeof t.keys) return t.keys();
                var e = [];
                return (
                  this.forof(t, function (t, n) {
                    e.push(n);
                  }),
                  e
                );
              },
              values: function (t) {
                if (t.hasOwnProperty('values')) return t.values();
                var e = [];
                return (
                  this.forof(t, function (t, n) {
                    e.push(t);
                  }),
                  e
                );
              },
              includes: function (t, e, n) {
                if (
                  (void 0 === n && (n = 0),
                  c.ObjectUtils.isNative(Array.prototype.includes, 'includes'))
                )
                  return t.includes(e, n);
                for (var r = t.length; n < r; n++) if (t[n] === e) return !0;
                return !1;
              },
            };
        },
        function (t, e) {
          t.exports = function (t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          };
        },
        function (t, e, r) {
          r.r(e), (t = r(5));
          var i = r.n(t),
            o = r(9),
            a =
              o.a.Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n,
                    r = arguments[e],
                    i = o.a.Object.prototype.hasOwnProperty.bind(r);
                  for (n in r) i(n) && (t[n] = r[n]);
                }
                return t;
              },
            s = r(20);
          r.d(e, 'ObjectUtils', function () {
            return c;
          });
          var c = {
            assign: function (t) {
              for (
                var e = arguments.length, n = Array(1 < e ? e - 1 : 0), r = 1;
                r < e;
                r++
              )
                n[r - 1] = arguments[r];
              return a.apply(void 0, [t].concat(n));
            },
            combine: function () {
              for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
              return e.reduce(function (t, e) {
                return null != e ? i()({}, t, e) : t;
              }, {});
            },
            findNativeImplementation: function (t) {
              if (this.isNative(o.a[t], t)) return o.a[t];
              var e = ['webkit', 'moz', 'ms', 'o'];
              t = '' + t.slice(0, 1).toUpperCase() + t.slice(1);
              for (var n = 0; n < e.length; n++) {
                var r = '' + e[n] + t;
                if (this.isNative(o.a[r], r)) return o.a[r];
              }
              return null;
            },
            isNative: function (t, e) {
              return (
                !!t &&
                new RegExp(
                  'function\\s*' +
                    e +
                    '\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}',
                  'i'
                ).test(t.toString())
              );
            },
            isMonkeyPatchedOrUndefined: function (t, e) {
              var r = o.a;
              if (r[t] === n || !this.isNative(r[t], t)) return !0;
              if (e)
                for (var i = 0; i < e.length; i++)
                  if (!this.isNative(r[t].prototype[e[i]], e[i])) return !0;
              return !1;
            },
            objectKeys: function (t) {
              var e = [];
              return (
                Object(s.a)(t, function (t) {
                  return e.push(t);
                }),
                e
              );
            },
            objectValues: function (t) {
              var e = [];
              return (
                Object(s.a)(t, function (t, n) {
                  return e.push(n);
                }),
                e
              );
            },
            safeAccess: function (t, e) {
              if (null == t || 'string' != typeof e) return n;
              for (var r = e.split('.'), i = t, o = 0, a = r.length; o < a; o++)
                if (null == (i = i[r[o]])) return n;
              return i;
            },
            objectIsWindow: function (t) {
              return (
                'undefined' != typeof Window && t && t.window && t.window === t
              );
            },
          };
        },
        function (t, e, n) {
          function r(t) {
            var e = {};
            return (
              'string' == typeof t &&
                0 < t.length &&
                '?' !== t &&
                ((t = t.replace(/^\?/, '').split('&')),
                Object(o.a)(t, function (t) {
                  var n = t.split('=');
                  (t = n[0]), (n = n[1]);
                  try {
                    e[t] = decodeURIComponent(n);
                  } catch (n) {
                    e[t] = '';
                  }
                })),
              e
            );
          }
          n.r(e);
          var i = n(2),
            o = n(29);
          t = n(20);
          var a = n(4),
            s = n(9);
          i.ObjectUtils.objectIsWindow(a.a) && r(a.a.location.search),
            (n = i.ObjectUtils.objectIsWindow(a.a) && a.a !== a.a.top);
          var c = s.a.console || a.a.console;
          'undefined' === a.a.WV_DEBUG &&
            Object.defineProperty(a.a, 'WV_DEBUG', { value: {} });
          var u = (function () {
              var t = !1,
                e = !1;
              if (i.ObjectUtils.objectIsWindow(a.a)) {
                t = '1' === r(a.a.location.search)._ym_debug;
                try {
                  e = /ym_debug=1/.test(a.a.document.cookie);
                } catch (e) {
                  return t;
                }
              }
              return t || e;
            })(),
            l = {
              __native: c,
              __debugMode: u,
              __addDebug: function (t, e) {},
              devLog: function () {},
            },
            h = ['%cWV:', 'font-weight: bold;'];
          n && h.length && (h[1] += 'color: purple'),
            Object(t.a)(
              c,
              function (t) {
                var e,
                  n = c[t] instanceof s.a.Function;
                l[t] = u
                  ? n
                    ? (e = c[t]).bind.apply(e, [c].concat(h))
                    : c[t]
                  : n
                  ? function () {}
                  : c[t];
              },
              !0
            ),
            u && (l.devLog = c.log),
            (e.default = l);
        },
        function (e, n, r) {
          n.a = void 0 !== t ? t : 'undefined' != typeof self ? self : global;
        },
        function (t, e, n) {
          var r = n(1);
          t.exports = function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
              'function' == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                  })
                )),
                i.forEach(function (e) {
                  r(t, e, n[e]);
                });
            }
            return t;
          };
        },
        function (t, e) {
          t.exports = function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          };
        },
        function (t, e, n) {
          n.r(e),
            n.d(e, 'DO_NOT_TRACK', function () {
              return o;
            }),
            n.d(e, 'IS_INCOGNITO', function () {
              return a;
            }),
            n.d(e, 'IS_MOBILE_DEVICE', function () {
              return s;
            }),
            n.d(e, 'IS_DEVELOPMENT', function () {
              return c;
            }),
            (t = n(5));
          var r = n.n(t);
          t = n(13);
          var i = n(4);
          n = r()(
            {},
            n(28).BrowserUtils,
            n(36).DocumentUtils,
            n(10).DOMUtils,
            n(23).FunctionUtils,
            n(0).IterableUtils,
            n(89).MapUtils,
            n(2).ObjectUtils,
            n(19).StringUtils,
            n(37).TimeUtils,
            n(16).Tools,
            { math: n(90).MathUtils }
          );
          try {
            var o = t.a.respectDoNotTrack && !0 === navigator.doNotTrack;
          } catch (t) {
            o = !1;
          }
          var a = (function () {
            try {
              i.a.localStorage.setItem('test', 'test');
              var t = 'test' !== i.a.localStorage.getItem('test');
              return i.a.localStorage.removeItem('test'), t;
            } catch (t) {
              return !0;
            }
          })();
          try {
            var s = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
              navigator.userAgent
            );
          } catch (t) {
            s = !1;
          }
          var c = 'development' === t.a.environment;
          Object.defineProperties(n, {
            DO_NOT_TRACK: { value: o },
            IS_INCOGNITO: { value: a },
            IS_MOBILE_DEVICE: { value: s },
            IS_DEVELOPMENT: { value: c },
          }),
            (e.default = n);
        },
        function (t, e, n) {
          n.r(e),
            n.d(e, 'List', function () {
              return s;
            }),
            (t = n(14));
          var r = n.n(t);
          t = n(1);
          var i = n.n(t),
            o = n(9);
          t = n(2);
          var a = n(0);
          (n = o.a.Set),
            (t = t.ObjectUtils.isMonkeyPatchedOrUndefined(
              'Set',
              'add has clear delete forEach toString'.split(' ')
            ));
          var s = (function () {
            function t(e) {
              i()(this, 'list', []),
                e &&
                  (e instanceof t
                    ? this.create(a.IterableUtils.toArray(e))
                    : e instanceof Array && this.create(e));
            }
            var e = t.prototype;
            return (
              (e.add = function (t) {
                return !1 === this.has(t) && this.list.push(t), this;
              }),
              (e.has = function (t) {
                return 0 <= this.list.indexOf(t);
              }),
              (e.clear = function () {
                return (this.list.length = 0), this;
              }),
              (e.delete = function (t) {
                return (
                  0 <= (t = this.list.indexOf(t)) &&
                  (this.list.splice(t, 1), !0)
                );
              }),
              (e.each = function (t) {
                if ('function' == typeof t)
                  for (var e = 0; e < this.list.length; ) {
                    var n = this.list[e];
                    2 === t.length ? t(n, n) : t(n), e++;
                  }
              }),
              (e.forEach = function (t) {
                this.each(t);
              }),
              (e.values = function () {
                return this.list.slice(0);
              }),
              (e.keys = function () {
                return this.list.slice(0);
              }),
              (e.toArray = function () {
                return this.list.slice(0);
              }),
              (e.toString = function () {
                return 'List(' + this.size + ')';
              }),
              (e.create = function (t) {
                for (var e = 0; e < t.length; ) this.add(t[e]), e++;
              }),
              r()(t, [
                {
                  key: 'size',
                  get: function () {
                    return this.list.length;
                  },
                },
              ]),
              t
            );
          })();
          e.default = t ? s : n;
        },
        function (n, r, i) {
          var o = i(13);
          r.a = (function () {
            var n =
              'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                ? self
                : t;
            if (void 0 !== e && e.body) {
              var r = e.createElement('iframe');
              (r.name = o.a.NATIVE_IFRAME_NAME),
                (r.title = o.a.NATIVE_IFRAME_NAME),
                (r.frameBorder = '0'),
                r.style.setProperty('opacity', '0', 'important'),
                r.style.setProperty('width', '0px', 'important'),
                r.style.setProperty('height', '0px', 'important'),
                r.style.setProperty('position', 'absolute', 'important'),
                r.style.setProperty('left', '100%', 'important'),
                r.style.setProperty('bottom', '100%', 'important'),
                r.style.setProperty('border', '0', 'important'),
                r.setAttribute('aria-hidden', 'true');
              try {
                /Trident|MSIE/.test(navigator.userAgent)
                  ? e.body.parentNode && e.body.parentNode.appendChild(r)
                  : e.body.appendChild(r),
                  (function (t, e) {
                    var n = t.contentWindow;
                    return (
                      !!n &&
                      e.reduce(function (t, e) {
                        return t && n.hasOwnProperty(e);
                      }, !0)
                    );
                  })(r, ['Set', 'Map']) && (n = r.contentWindow || n);
              } catch (t) {
                r.parentElement && r.parentElement.removeChild(r);
              }
            }
            return n;
          })();
        },
        function (r, i, a) {
          a.r(i),
            a.d(i, 'DOMUtils', function () {
              return h;
            });
          var s = a(4),
            c = a(0),
            u = a(2),
            l = a(19),
            h = {
              NodeTypes: {
                ELEMENT_NODE: 1,
                ATTRIBUTE_NODE: 2,
                TEXT_NODE: 3,
                CDATA_SECTION_NODE: 4,
                ENTITY_REFERENCE_NODE: 5,
                ENTITY_NODE: 6,
                PROCESSING_INSTRUCTION_NODE: 7,
                COMMENT_NODE: 8,
                DOCUMENT_NODE: 9,
                DOCUMENT_TYPE_NODE: 10,
                DOCUMENT_FRAGMENT_NODE: 11,
                NOTATION_NODE: 12,
              },
              base: function () {
                var t = e.createElement('a');
                t.href = '/';
                var n = e.querySelector('base');
                return n && n.href && (t.href = n.href), t.href;
              },
              getScroll: function (t) {
                if (null == t) return { left: 0, top: 0 };
                if (t.window === t)
                  return { top: t.scrollY || 0, left: t.scrollX || 0 };
                var e = t.ownerDocument || t,
                  n = t.documentElement,
                  r = e.defaultView || e.parentWindow,
                  i = e.body;
                return (
                  t === e && (t = this.scrollingElement(e)),
                  -1 !== [n, i].indexOf(t)
                    ? {
                        top: t.scrollTop || r.scrollY,
                        left: t.scrollLeft || r.scrollX,
                      }
                    : { top: t.scrollTop || 0, left: t.scrollLeft || 0 }
                );
              },
              documentVisible: (function () {
                if (void 0 !== e) {
                  var t =
                    void 0 !== e.msHidden
                      ? 'msHidden'
                      : void 0 !== e.webkitHidden
                      ? 'webkitHidden'
                      : 'hidden';
                  return function () {
                    return e[t];
                  };
                }
              })(),
              isDOMNode: function (t) {
                if (t)
                  try {
                    var e = t.ownerDocument;
                    if (null === e) return !1;
                    if (e.defaultView) return t instanceof e.defaultView.Node;
                  } catch (e) {
                    return (
                      'object' == typeof t &&
                      'object' == typeof t.style &&
                      'object' == typeof t.ownerDocument
                    );
                  }
                return !1;
              },
              isScrollable: function (t) {
                var e = t.scrollHeight !== t.clientHeight;
                return t.scrollWidth !== t.clientWidth || e;
              },
              scrollingElement: function (t) {
                return (
                  (t = t || e).scrollingElement ||
                  (t.documentElement.scrollHeight >= t.body.scrollHeight &&
                  0 === t.compatMode.indexOf('CSS1')
                    ? t.documentElement
                    : t.body)
                );
              },
              convertNode: function (t, n, r) {
                var i = void 0 === r ? { doc: e, saveChildren: !0 } : r;
                (r = i.doc), (i = i.saveChildren);
                var o = (r = r || t.ownerDocument).createElement(n);
                return (
                  c.IterableUtils.forof(t.attributes, function (t) {
                    o.setAttribute(t.name, t.value);
                  }),
                  i &&
                    c.IterableUtils.forof(t.childNodes, function (t) {
                      o.appendChild(t.cloneNode(!0));
                    }),
                  o
                );
              },
              isBlankOrSameOriginIframe: function (e, n) {
                var r = e.getAttribute('src'),
                  i = e.getAttribute('sandbox');
                return !(
                  (i && !i.match(/allow-same-origin/)) ||
                  (r &&
                    'about:blank' !== r &&
                    (r = l.StringUtils.parseURLNative(r).host) &&
                    (n || t).location.host !== r)
                );
              },
              nodeIsRecordable: function (t) {
                if (null !== t) {
                  var e =
                      null != t.getAttribute('metrika-ignore') ||
                      /-metrika-ignore/.test(t.className),
                    n =
                      null != t.getAttribute('metrika-force') ||
                      /-metrika-force/.test(t.className);
                  return (
                    (t = t.getAttribute('type')),
                    !!n || (!e && 'password' !== t)
                  );
                }
                return !1;
              },
              contentSizeChanged: function (e, n) {
                var r = e.ownerDocument ? e.ownerDocument.defaultView : t,
                  i = {
                    stopped: !1,
                    height: null,
                    width: null,
                    runner: function () {
                      if (!this.stopped) {
                        var t =
                            null == e
                              ? {}
                              : 'function' == typeof e
                              ? e() || {}
                              : e,
                          i = t.scrollHeight;
                        (t = t.scrollWidth),
                          (i === this.height && t === this.width) ||
                            ((this.height = i),
                            (this.width = t),
                            n({ width: t, height: i })),
                          r && r.requestAnimationFrame(this.runner.bind(this));
                      }
                    },
                    stop: function () {
                      this.stopped = !0;
                    },
                  };
                return i.runner(), i;
              },
              elementsFromPoint: function (t, n, r) {
                var i = (r = r || e).elementsFromPoint;
                if (i) return i.call(r, t, n);
                i = [];
                for (
                  var o, a = [];
                  (o = r.elementFromPoint(t, n)) && -1 === i.indexOf(o);

                ) {
                  i.push(o);
                  var s = o.style;
                  a.push({
                    value: s.getPropertyValue('pointer-events'),
                    priority: s.getPropertyPriority('pointer-events'),
                  }),
                    s.setProperty('pointer-events', 'none', 'important');
                }
                for (t = a.length; (n = a[--t]); )
                  i[t].style.setProperty(
                    'pointer-events',
                    n.value ? n.value : '',
                    n.priority
                  );
                return i;
              },
              nodeIndentLevel: function (t) {
                for (var e = 0; t.parentNode; ) (t = t.parentNode), e++;
                return e;
              },
              offsets: function (n, r) {
                var i = void 0 === r ? {} : r,
                  o = i.excludeBorder,
                  a = void 0 !== o && o,
                  s = void 0 !== (i = i.excludePadding) && i;
                !1 == 'getBoundingClientRect' in n &&
                  ('documentElement' in n
                    ? (n = n.documentElement)
                    : 'document' in n && (n = n.document.documentElement));
                var c = (n.ownerDocument || e).defaultView || t,
                  u = n.getBoundingClientRect();
                (i = u.top), (o = u.right);
                var l = u.bottom;
                if (((u = u.left), a || s)) {
                  if (((c = c.getComputedStyle(n)), a)) {
                    a = c.borderRightWidth;
                    var h = c.borderBottomWidth,
                      f = c.borderLeftWidth;
                    (i += parseInt(c.borderTopWidth || '0', 10)),
                      (o += parseInt(a || '0', 10)),
                      (l += parseInt(h || '0', 10)),
                      (u += parseInt(f || '0', 10));
                  }
                  s &&
                    ((s = c.paddingRight),
                    (a = c.paddingBottom),
                    (h = c.paddingLeft),
                    (i += parseInt(c.paddingTop || '0', 10)),
                    (o += parseInt(s || '0', 10)),
                    (l += parseInt(a || '0', 10)),
                    (u += parseInt(h || '0', 10)));
                }
                return { top: i, right: o, bottom: l, left: u };
              },
              nodeIsInTree: function (t) {
                if (this.isDOMNode(t)) {
                  var e = t.ownerDocument;
                  if (null != e) return e.documentElement.contains(t);
                }
                return !1;
              },
              waitForNode: function (t, r, i) {
                var a = this;
                void 0 === i && (i = 500);
                var s = { disconnect: function () {} };
                if (a.nodeIsInTree(t)) r(!0);
                else {
                  var c = t.ownerDocument || e,
                    u = new MutationObserver(function () {
                      a.nodeIsInTree(t) && (r(!0), u.disconnect());
                    });
                  u.observe(c.documentElement, { subtree: !0, childList: !0 });
                  var l = isFinite(i)
                    ? o(function () {
                        a.nodeIsInTree(t) || (r(!1), u.disconnect());
                      }, i)
                    : n;
                  s.disconnect = function () {
                    l && clearTimeout(l), u.disconnect();
                  };
                }
                return s;
              },
              createElement: function (t, n, r) {
                var i = (r = r || e).createElement(t);
                return (
                  c.IterableUtils.forin(n, function (t) {
                    var e = n[t];
                    'style' === t ? u.ObjectUtils.assign(i[t], e) : (i[t] = e);
                  }),
                  i
                );
              },
              matchesSelector: function (t, n) {
                var r = c.IterableUtils.find(
                  [
                    'matches',
                    'webkitMatchesSelector',
                    'mozMatchesSelector',
                    'msMatchesSelector',
                    'oMatchesSelector',
                  ],
                  function (t) {
                    return t in e.body;
                  }
                );
                return (
                  (this.matchesSelector = function (t, e) {
                    if (r) {
                      if (null == t || null == t.ownerDocument) return !1;
                      try {
                        if (r in t) return t[r](e);
                      } catch (t) {}
                    }
                    return !1;
                  }),
                  this.matchesSelector(t, n)
                );
              },
              closestParent: function (t, e, n) {
                for (
                  void 0 === n && (n = !1),
                    t = n && !this.isTextNode(t) ? t : t.parentNode;
                  t;

                ) {
                  if (t && this.matchesSelector(t, e)) return t;
                  t = t.parentNode;
                }
                return null;
              },
              isTextNode: function (t) {
                return (
                  0 <=
                  [
                    this.NodeTypes.TEXT_NODE,
                    this.NodeTypes.COMMENT_NODE,
                  ].indexOf(t.nodeType)
                );
              },
              isChildOf: function (t, e, n) {
                return (
                  void 0 === n && (n = !1), null != this.closestParent(t, e, n)
                );
              },
              copyAttributes: function (t, e) {
                return (
                  c.IterableUtils.forof(t.attributes, function (n) {
                    try {
                      e.setAttribute(n.name, n.value);
                    } catch (e) {
                      s.a.console.warn(
                        "Can't copy attribute [" + n.name + '=' + n.value + ']',
                        { sourceNode: t }
                      );
                    }
                  }),
                  e
                );
              },
              isHiddenContent: function (t) {
                if (null == t) return !1;
                if ('#text' === t.nodeName)
                  return this.isHiddenContent(t.parentNode);
                if (/ym-hidden-content/.test(t.className)) return !1;
                if (/ym-hide-content/.test(t.className)) return !0;
                var e = this.matchesSelector(t, '.ym-hide-content *');
                return (
                  (!e ||
                    (!/ym-show-content/.test(t.className) &&
                      !this.matchesSelector(
                        t,
                        '.ym-hide-content .ym-show-content *'
                      ))) &&
                  e
                );
              },
            };
        },
        function (t, r, i) {
          i.d(r, 'b', function () {
            return f;
          }),
            i.d(r, 'a', function () {
              return d;
            }),
            (t = i(32));
          var o = i.n(t);
          t = i(5);
          var a = i.n(t);
          t = i(13);
          var s = i(2),
            c = i(0),
            u = i(10),
            l = i(16),
            h = i(3),
            f = (i = t.a.DOMIndexer).IGNORED_NODES,
            d = i.IGNORED_ATTRIBUTES,
            p = i.SKIPPED_ATTRIBUTES,
            m = i.EXTRA_ATTRIBUTES,
            g = [],
            v = {},
            y = {
              INPUT: function (t, e) {
                var n = a()({}, e);
                return (
                  'checkbox' === e.type || 'radio' === e.type
                    ? t.checked
                      ? (e.checked = 'checked')
                      : delete e.checked
                    : (n.value = t.value),
                  n
                );
              },
              IMG: function (t, e) {
                var n = a()({}, e);
                return t.currentSrc && (n.src = t.currentSrc || e.src), n;
              },
            },
            b = function (t) {
              return (
                null != t &&
                ((t = t.nodeType) === u.DOMUtils.NodeTypes.TEXT_NODE ||
                  t === u.DOMUtils.NodeTypes.COMMENT_NODE)
              );
            },
            _ = function (t, n, r) {
              var i = function (t) {
                return 'function' == typeof r
                  ? r(t)
                    ? NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT
                  : NodeFilter.FILTER_ACCEPT;
              };
              if (
                'function' == typeof n &&
                i(t) === NodeFilter.FILTER_ACCEPT &&
                (n(t), !1 === b(t))
              )
                for (
                  t = e.createTreeWalker(
                    t,
                    -1,
                    r ? { acceptNode: i } : null,
                    !1
                  );
                  t.nextNode() && !1 !== n(t.currentNode);

                );
            },
            w = function (t, n) {
              var r = [];
              return (
                t &&
                  (u.DOMUtils.nodeIsInTree(t)
                    ? _(
                        null == t ? e.documentElement : t,
                        function (t) {
                          r.push(t);
                        },
                        n
                      )
                    : r.push.apply(
                        r,
                        (function t(e, n) {
                          var r = [];
                          if ('function' == typeof n) {
                            var i = n(e);
                            (null != i && i !== NodeFilter.FILTER_ACCEPT) ||
                              r.push(e);
                          } else r.push(e);
                          if (e.childNodes && 0 < e.childNodes.length)
                            for (
                              var o = 0, a = (i = e.childNodes).length;
                              o < a;
                              o++
                            )
                              r.push.apply(r, t(i[o]));
                          return r;
                        })(t, n)
                      )),
                r
              );
            },
            E = (function (t) {
              var e = t['*'],
                n = o()(t, ['*']),
                r = {},
                i = new RegExp(e.join('|'), 'i');
              return (
                c.IterableUtils.forin(n, function (t) {
                  var i,
                    o = (i = []).concat.apply(i, n[t].concat(e));
                  r[t] = new RegExp(o.join('|'), 'i');
                }),
                function (t, e) {
                  if (t && e) {
                    var n = 'string' == typeof t ? t : t.nodeName;
                    if (n)
                      return (
                        ((n = r[n.toLowerCase()]) && !!e.match(n)) ||
                        !!e.match(i)
                      );
                  }
                  return !1;
                }
              );
            })(d),
            k = [
              function (t, e, n) {
                return null == n || /^javascript/.test(n);
              },
              function (t, e) {
                return 'SCRIPT' === t.nodeName && 'src' === e;
              },
              function (t, e) {
                return 'A' === t.nodeName && 'href' === e;
              },
            ],
            x = function (t, e, n) {
              var r = n;
              if (
                (function (t, e, n) {
                  for (var r = 0, i = k.length; r < i; r++)
                    if (!0 === k[r](t, e, n)) return !1;
                  return !0;
                })(t, e, n)
              ) {
                if (
                  'string' ==
                  typeof (r = g.reduce(function (n, r) {
                    try {
                      var i = r(t, e, n);
                      return null != i ? i : n;
                    } catch (t) {
                      return h.default.warn('Filtering error', t), n;
                    }
                  }, r))
                )
                  return ((n = v[e]) && n(t, e, r)) || r;
                if (null != r && !1 !== r) return r.baseVal;
              }
              return null;
            },
            O = function (t, n) {
              t: {
                try {
                  e.createAttribute(n);
                } catch (t) {
                  var r = !1;
                  break t;
                }
                r = !0;
              }
              return !(!r || E({ nodeName: t }, n)) && n;
            },
            T = function (t, e, n) {
              if (n && n.name) {
                if (!1 !== O(e, n.name))
                  try {
                    var r,
                      i = x(t, n.name, n.value);
                    return ((r = {})[n.name] = i || ''), r;
                  } catch (e) {
                    h.default.warn('Error while reading attribute', n, t),
                      h.default.warn(e);
                  }
              } else h.default.warn('Error while reading attribute', n, t);
              return null;
            };
          i = (function (t) {
            var e = new RegExp(f.join('|'), 'gi');
            return function (t) {
              return t && !!t.nodeName.match(e);
            };
          })();
          var S = function (t) {
            return !(!t || !t.namespaceURI) && /svg/.test(t.namespaceURI);
          };
          (i = {
            all: w,
            map: function (t, e, n) {
              var r = [];
              return (
                (t = w(t, n)),
                c.IterableUtils.fastIterate(t, function (t, n) {
                  r.push(e(n));
                }),
                r
              );
            },
            walk: _,
            each: function (t, e, n) {
              t && ((t = w(t, n)), c.IterableUtils.fastIterate(t, e));
            },
            getAttributes: function (t) {
              var e = {},
                r = t.nodeName,
                i = c.IterableUtils.toArray(t.attributes);
              return (
                i &&
                  i.length &&
                  (c.IterableUtils.fastIterate(i, function (n, i) {
                    var o = T(t, r, i);
                    o && s.ObjectUtils.assign(e, o);
                  }),
                  (i = m[r] || n) &&
                    c.IterableUtils.fastIterate(i, function (n, i) {
                      T(e, r, { name: i, value: t[i] });
                    })),
                (i = y[r]) ? i(t, e) : e
              );
            },
            getContent: function (t) {
              if (null != t && b(t)) return t.textContent;
            },
            getNamespace: function (t) {
              if (S(t)) return t.namespaceURI;
            },
            normalizeAttributeValue: x,
            cloneAttributes: function (t, e) {
              var n = c.IterableUtils.toArray(t.attributes);
              return (
                c.IterableUtils.fastIterate(n, function (t, n) {
                  var r = !1 === l.Tools.isNULL(n.namespaceURI),
                    i = n.cloneNode();
                  r
                    ? e.attributes.setNamedItemNS(i)
                    : e.attributes.setNamedItem(i);
                }),
                e
              );
            },
            isSVG: S,
            isTextNode: b,
            isIgnoredNode: i,
            isIgnoredAttr: E,
            isAttributeNameValid: O,
            isSkippedAttribute: function (t) {
              return c.IterableUtils.includes(p, t);
            },
          }),
            Object.defineProperty(i, 'addAttributesFilter', {
              value: function (t) {
                'function' == typeof t && g.push(t);
              },
            }),
            (r.c = i);
        },
        function (t, e, r) {
          r.r(e),
            r.d(e, 'KeyValue', function () {
              return c;
            }),
            (t = r(14));
          var i = r.n(t);
          t = r(1);
          var o = r.n(t);
          t = r(2);
          var a = r(9),
            s = r(0);
          (r = a.a.Map),
            (t = t.ObjectUtils.isMonkeyPatchedOrUndefined(
              'Map',
              'set get has clear delete forEach toString'.split(' ')
            ));
          var c = (function () {
            function t(e) {
              o()(this, 'lastIndex', 0),
                o()(this, 'list', []),
                o()(this, 'index', []),
                e instanceof t
                  ? this.create(s.IterableUtils.toArray(e))
                  : e instanceof Array && this.create(e);
            }
            var e = t.prototype;
            return (
              (e.allocate = function (t) {
                void 0 === t && (t = 0),
                  (this.list.length = t),
                  (this.index.length = t);
              }),
              (e.set = function (t, e) {
                var n = this.indexOf(this.index, t);
                return (
                  -1 !== n
                    ? (this.list[n].value = e)
                    : ((this.list[this.lastIndex] = { key: t, value: e }),
                      (this.index[this.lastIndex] = t),
                      this.lastIndex++),
                  this
                );
              }),
              (e.get = function (t) {
                return (t = this.find(t)) ? t.value : n;
              }),
              (e.keys = function () {
                return this.list.map(function (t) {
                  return t.key;
                });
              }),
              (e.values = function () {
                return this.list.map(function (t) {
                  return t.value;
                });
              }),
              (e.has = function (t) {
                return -1 !== this.indexOf(this.index, t);
              }),
              (e.clear = function () {
                return (
                  (this.lastIndex = 0),
                  (this.list.length = 0),
                  (this.index.length = 0),
                  this
                );
              }),
              (e.delete = function (t) {
                return (
                  !(
                    !(t = this.find(t)) ||
                    ((t = this.indexOf(this.list, t)), -1 === t)
                  ) &&
                  (this.list.splice(t, 1),
                  this.index.splice(t, 1),
                  this.lastIndex--,
                  !0)
                );
              }),
              (e.each = function (t) {
                'function' == typeof t &&
                  this.loop(function (e) {
                    var n = e.key;
                    (e = e.value), 2 === t.length ? t(n, e) : t([n, e]);
                  });
              }),
              (e.forEach = function (t) {
                var e = this;
                'function' == typeof t &&
                  this.loop(function (n) {
                    t(n.value, n.key, e);
                  });
              }),
              (e.toArray = function () {
                return this.list.map(function (t) {
                  return [t.key, t.value];
                });
              }),
              (e.toString = function () {
                return 'KeyValue(' + this.size + ')';
              }),
              (e.loop = function (t) {
                if ('function' == typeof t)
                  for (var e = 0; e < this.list.length; )
                    t.call(this, this.list[e]), e++;
              }),
              (e.create = function (t) {
                var e = 0;
                if (t && 0 < t.length)
                  for (; e < t.length; ) {
                    var n = t[e];
                    this.set(n[0], n[1]), e++;
                  }
              }),
              (e.find = function (t) {
                if (-1 !== (t = this.indexOf(this.index, t)))
                  return this.list[t];
              }),
              (e.indexOf = function (t, e) {
                return [].indexOf.call(t, e);
              }),
              i()(t, [
                {
                  key: 'size',
                  get: function () {
                    return this.lastIndex;
                  },
                },
              ]),
              t
            );
          })();
          e.default = t ? c : r;
        },
        function (t, e, n) {
          (t = n(5)),
            (t = n.n(t)),
            n.d(e, 'a', function () {
              return r;
            });
          var r = t()(
            {},
            { NATIVE_IFRAME_NAME: 'ym-native-frame' },
            {
              environment: 'production',
              package: { version: '2.6.2' },
              respectDoNotTrack: !0,
              experimentalWebSocket: !0,
              captors: {
                input: !0,
                keystrokes: !0,
                media: !1,
                mouse: !0,
                focus: !0,
                mutations: !0,
                resize: !0,
                deviceRotation: !0,
                selection: !0,
                scroll: !0,
                touch: !0,
                zoom: !0,
                window: !0,
                srcset: !0,
              },
              captorsConfig: {
                input: {
                  PD: function () {
                    return {
                      delimiter: '(-|\\.|_|\\s){0,2}',
                      suspiciousWords: 'first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*'.split(
                        ' '
                      ),
                      placeholderSuspiciousWords: 'имя фамилия отчество индекс телефон адрес паспорт номер(-|\\.|_|\\s){0,2}карты дата(-|\\.|_|\\s){0,2}рождения дом улица квартира город область'.split(
                        ' '
                      ),
                    };
                  },
                },
              },
              DOMIndexer: {
                IGNORED_NODES: ['script', 'noscript', 'audio'],
                IGNORED_ATTRIBUTES: {
                  '*': ['^on.+', 'srcset', 'integrity', 'crossorigin'],
                  iframe: ['src'],
                  script: ['src', 'type'],
                },
                SKIPPED_ATTRIBUTES: [],
                EXTRA_ATTRIBUTES: { VIDEO: ['width', 'height'] },
                URL_NODES: ['link', 'img', 'svg'],
                URL_ATTRIBUTES: 'href link content poster style src srcset'.split(
                  ' '
                ),
                IGNORE_NODES_ORDER: ['HEAD'],
                HIDABLE_NODES: '#text IMG INPUT BUTTON SELECT TEXTAREA'.split(
                  ' '
                ),
                REPLACE_ATTRIBUTES: { a: { href: '#' } },
              },
            }
          );
        },
        function (t, e) {
          function n(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          t.exports = function (t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), t;
          };
        },
        function (t, e, n) {
          (function (t, r) {
            var i = n(8),
              o = n(0),
              a = n(2),
              s = (function () {
                function e(e, n) {
                  var r = void 0 === n ? {} : n,
                    i = r.context;
                  (i = void 0 === i ? null : i),
                    (r = void 0 !== (r = r.expose) && r),
                    (this.allowedEvents = o.IterableUtils.toList(
                      (this.eventsList || e || []).map(function (t) {
                        return t.split(':')[0];
                      })
                    )),
                    (this.context = i || this),
                    this._define('_events', new t())
                      ._define('_memory', new t())
                      ._define('_namespaces', new t())
                      ._define('_options', new t())
                      ._define('_once', new t()),
                    this._setupEvents(),
                    this._exposeEvents(i, r);
                }
                var n = e.prototype;
                return (
                  (n.emit = function (t) {
                    for (
                      var e = this,
                        n = arguments.length,
                        i = Array(1 < n ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      i[a - 1] = arguments[a];
                    return new r(function (n, r) {
                      var a = t.split(' ');
                      return (
                        o.IterableUtils.forof(a, function (t) {
                          e._invokeEvent(t, i, n, r);
                        }),
                        e
                      );
                    });
                  }),
                  (n.on = function (t, e) {
                    var n = this;
                    if ('function' != typeof e)
                      throw Error('Callback sould be a function');
                    var r = t.split(' ');
                    return (
                      o.IterableUtils.forof(r, function (t) {
                        n._saveEvent(t, e);
                      }),
                      this
                    );
                  }),
                  (n.off = function (t, e) {
                    var n = this,
                      r = t ? t.split(' ') : o.IterableUtils.keys(n._events);
                    return (
                      o.IterableUtils.forof(r, function (t) {
                        n._removeEvent(t, e);
                      }),
                      this
                    );
                  }),
                  (n._define = function (t, e) {
                    return (
                      Object.defineProperty(this, t, {
                        value: e,
                        writable: !1,
                      }),
                      this
                    );
                  }),
                  (n._exposeEvents = function (t, e) {
                    e &&
                      a.ObjectUtils.assign(t, {
                        on: this.on.bind(this),
                        off: this.off.bind(this),
                        emit: this.emit.bind(this),
                      });
                  }),
                  (n._getNamespace = function (t, e) {
                    var n = this._namespaces.get(t);
                    return (n && n.get(e)) || this._events.get(t);
                  }),
                  (n._hasOption = function (t, e) {
                    var n = this._options.get(t);
                    return !!n && n.has(e);
                  }),
                  (n._invokeEvent = function (t, e, n) {
                    var i = this,
                      a = (t = t.split('.'))[0];
                    t = t[1];
                    var s = this._hasOption(a, 'stop');
                    if ((t = this._getNamespace(a, t)) && 0 < t.size) {
                      var c = r.resolve();
                      (e = this._saveMemory(a, e)),
                        o.IterableUtils.forof(t, function (t) {
                          if (i._isAlreadyCalled(a, t)) return !0;
                          c = c.then(function (r) {
                            return (
                              !1 !== r &&
                              ((r = i._runCallback(a, t, e)),
                              n(r),
                              s ? r : null)
                            );
                          });
                        });
                    }
                  }),
                  (n._isAlreadyCalled = function (t, e) {
                    if (this._hasOption(t, 'once')) {
                      var n = this._once.get(t) || new i.default();
                      if (n.has(e)) return !0;
                      n.add(e), this._once.set(t, n);
                    }
                    return !1;
                  }),
                  (n._runCallback = function (t, e, n) {
                    return (
                      (n = this._saveMemory(t, n)),
                      e.call.apply(e, [this.context].concat(n))
                    );
                  }),
                  (n._saveEvent = function (t, e) {
                    var n = t.split(':'),
                      r = n[0];
                    n = n.slice(1);
                    var a = r.split('.');
                    (r = a[0]), (a = a[1]);
                    var s = this._events.get(r) || new i.default();
                    n = this._options.get(r) || o.IterableUtils.toList(n);
                    var c = this._memory.get(r) || !1;
                    s.has(e) ||
                      (s.add(e),
                      this._events.set(r, s),
                      this._options.set(r, n),
                      this._saveNamespace(r, a, e),
                      c && this._runCallback(r, e, c));
                  }),
                  (n._saveMemory = function (t, e) {
                    return this._hasOption(t, 'memory')
                      ? this._memory.has(t)
                        ? this._memory.get(t) || []
                        : this._memory.set(t, e) && e
                      : e;
                  }),
                  (n._saveNamespace = function (e, n, r) {
                    var o = this._namespaces.get(e) || new t(),
                      a = o.get(n || '__global') || new i.default();
                    a.add(r),
                      o.set(n || '__global', a),
                      this._namespaces.set(e, o);
                  }),
                  (n._setupEvents = function () {
                    var t = this;
                    this.allowedEvents.size &&
                      o.IterableUtils.forof(this.allowedEvents, function (e) {
                        var n = e.split(':');
                        (e = n[0]),
                          (n = n.slice(1)),
                          t._options.set(e, o.IterableUtils.toList(n)),
                          t._events.set(e, new i.default());
                      });
                  }),
                  (n._removeCallbacks = function (t, e) {
                    if (e instanceof i.default) {
                      var n = this._events.get(t);
                      o.IterableUtils.forof(e, function (t) {
                        n && n.delete(t);
                      });
                    }
                  }),
                  (n._removeEvent = function (t, e) {
                    var n = t.split('.'),
                      r = n[0];
                    n = n[1];
                    var o = this._events.get(r) || new i.default();
                    o.has(e)
                      ? (n || o.delete(e), this._removeNamespace(r, n, e))
                      : (n || (this._events.delete(r), this._options.delete(r)),
                        this._removeNamespace(r, n));
                  }),
                  (n._removeNamespace = function (t, e) {
                    var n = this,
                      r = this._namespaces.get(t);
                    r &&
                      (e
                        ? (this._removeCallbacks(t, r.get(e)), r.delete(e))
                        : (o.IterableUtils.forof(r, function (e) {
                            n._removeCallbacks(t, e);
                          }),
                          this._namespaces.delete(t)));
                  }),
                  e
                );
              })();
            e.a = s;
          }.call(this, n(12).default, n(22).Promise));
        },
        function (r, i, a) {
          a.r(i),
            function (r) {
              a.d(i, 'Tools', function () {
                return f;
              });
              var s = a(4),
                c = a(40),
                u = a(2),
                l = a(3),
                h = { null: null, undefined: n, true: !0, false: !1 },
                f = {
                  delay: function (t, e) {
                    return (
                      void 0 === e && (e = 0),
                      new r(function (n) {
                        o(function () {
                          n(t());
                        }, e);
                      })
                    );
                  },
                  copyText: function (t) {
                    return new r(function (n) {
                      var r = e.createElement('textarea'),
                        i = e.body;
                      (r.value = t),
                        (r.style.opacity = '0'),
                        (r.style.position = 'absolute'),
                        (r.style.top = '-99999px'),
                        (r.style.left = '-99999px'),
                        (r.onselect = function () {
                          try {
                            (r.onselect = null),
                              e.execCommand && e.execCommand('copy'),
                              n();
                          } catch (e) {
                            l.default.warn('Error while copying text ' + t, e);
                          }
                          i.removeChild(r);
                        }),
                        i.appendChild(r),
                        r.select();
                    });
                  },
                  globalize: function (t, e) {
                    void 0 !== s.a &&
                      Object.defineProperty(s.a, e, { value: t });
                  },
                  guid: function () {
                    var t = function () {
                      return Math.floor(65536 * (1 + Math.random()))
                        .toString(16)
                        .substring(1);
                    };
                    return (
                      t() +
                      t() +
                      '-' +
                      t() +
                      '-' +
                      t() +
                      '-' +
                      t() +
                      '-' +
                      t() +
                      t() +
                      t()
                    );
                  },
                  measure: function (t, e, n) {
                    if (null != e) return 'function' == typeof e ? e() : e;
                  },
                  apiMock: function (t) {
                    var e = { properties: [], methods: [] };
                    for (var n in (t = t.prototype))
                      if (t.hasOwnProperty(n))
                        try {
                          t[n] instanceof Function
                            ? e.methods.push(n)
                            : e.properties.push(n);
                        } catch (t) {
                          e.properties.push(n);
                        }
                    return e;
                  },
                  cast: function (t) {
                    if (h.hasOwnProperty(t)) return h[t];
                    var e = Number(t);
                    return String(e) === t ? e : t;
                  },
                  catch: function (t) {
                    try {
                      t();
                    } catch (t) {
                      return l.default.warn(t), t;
                    }
                  },
                  fetch: c.a,
                  promise: function (t) {
                    return new r(function (e, n) {
                      t(e, n);
                    }).catch(function (t) {
                      return l.default.warn(t);
                    });
                  },
                  isNULL: function (t) {
                    return null == t;
                  },
                  isFunction: function (t) {
                    return 'function' == typeof t;
                  },
                  promiseError: function (t) {
                    return l.default.warn(t), r.reject(t);
                  },
                  promiseExec: function (t) {
                    return new r(function (e) {
                      e(t());
                    });
                  },
                  requestAnimationFrame: function (e) {
                    var n = u.ObjectUtils.findNativeImplementation(
                        'requestAnimationFrame'
                      ),
                      r = u.ObjectUtils.findNativeImplementation(
                        'cancelAnimationFrame'
                      );
                    return n && r
                      ? ((this.requestAnimationFrame = n.bind(t)),
                        this.requestAnimationFrame(e))
                      : ((this.requestAnimationFrame = n = function (t) {
                          return o(t, 4);
                        }),
                        n(e));
                  },
                  cancelAnimationFrame: function (e) {
                    var n = u.ObjectUtils.findNativeImplementation(
                        'requestAnimationFrame'
                      ),
                      r = u.ObjectUtils.findNativeImplementation(
                        'cancelAnimationFrame'
                      );
                    n && r
                      ? ((this.cancelAnimationFrame = r.bind(t)),
                        this.cancelAnimationFrame(e))
                      : ((this.cancelAnimationFrame = function (t) {
                          clearTimeout(t);
                        }),
                        clearTimeout(e));
                  },
                  throwError: function (t) {
                    throw Error(t);
                  },
                  errorProxy: function (e, n, r) {
                    void 0 === n && (n = !1);
                    try {
                      return e();
                    } catch (i) {
                      return (
                        t.console.warn(
                          'Error while running ' + (r || e.name),
                          i
                        ),
                        n
                      );
                    }
                  },
                };
            }.call(this, a(22).Promise);
        },
        function (t, e, n) {
          n.d(e, 'a', function () {
            return l;
          }),
            (t = n(13)),
            (e = n(12));
          var r = n(10),
            i = n(19),
            o = new e.KeyValue(),
            a = String.fromCharCode(8226);
          (n = (t = t.a.captorsConfig.input.PD()).suspiciousWords),
            (t = t.placeholderSuspiciousWords);
          var s = new RegExp('(' + n.join('|') + ')', 'i'),
            c = new RegExp('(' + n.concat(t).join('|') + ')', 'i'),
            u = /color|radio|checkbox|date|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/i,
            l = {
              isValidType: function (t) {
                return u.test(t);
              },
              isValidNode: function (t) {
                var e = t.nodeName;
                return (
                  (t = t.type),
                  'INPUT' === e
                    ? !t || l.isValidType(t)
                    : /textarea|select|progress/i.test(e)
                );
              },
              isPrivateInformationField: function (t) {
                var e = t.placeholder;
                return (
                  [t.className, t.id, t.name].reduce(function (t, e) {
                    return t || s.test(e);
                  }, !1) || c.test(e)
                );
              },
              isIgnored: function (t) {
                return !!(
                  /password/i.test(t.type) ||
                  /ym-disable-keys/i.test(t.className) ||
                  r.DOMUtils.isHiddenContent(t)
                );
              },
              isRecordable: function (t) {
                return !!this.matchesClass(t.className, 'ym-record-keys');
              },
              matchesClass: function (t, e) {
                return new RegExp(e, 'i').test(t);
              },
              isAllowed: function (t, e) {
                return (
                  void 0 === e && (e = !1),
                  e ? !0 === l.isRecordable(t) : !1 === l.isIgnored(t)
                );
              },
              isChanged: function (t, e) {
                var n = !0;
                if (o.has(t)) {
                  var r = o.get(t);
                  r && (n = e !== r[0]);
                }
                return n && o.set(t, [e]), n;
              },
              validate: function (t, e) {
                var n = e || {},
                  r = n.isEU,
                  i = n.recording.keysMode;
                n = l.isRecordable(t);
                var o = l.isPrivateInformationField(t);
                return {
                  forceRecord: n,
                  isPrivate: o,
                  isAllowed: (r =
                    l.isAllowed(t, 'explicit' === i) && (!r || !o)),
                };
              },
              encode: function (t) {
                return (
                  void 0 === t && (t = ''),
                  t && 0 < t.length
                    ? t
                        .split(/\n/)
                        .map(function (t) {
                          return i.StringUtils.repeatString(a, t.length);
                        })
                        .join('\n')
                    : t
                );
              },
            };
        },
        function (t, e) {
          t.exports = function (t, e) {
            (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = e);
          };
        },
        function (t, r, i) {
          i.r(r),
            i.d(r, 'StringUtils', function () {
              return s;
            });
          var o = i(4),
            a = i(0),
            s = {
              dasherize: function (t) {
                return t.replace(/[A-Z]/g, function (e, n) {
                  var r = /[A-Z]/g.test(t[n - 1]);
                  return (0 === n || r ? '' : '-') + e.toLowerCase();
                });
              },
              pad: function (t, e, n, r) {
                return (
                  void 0 === e && (e = 2),
                  void 0 === n && (n = ' '),
                  void 0 === r && (r = !1),
                  (t = String(t)),
                  (e = a.IterableUtils.fill(
                    Array(Math.max(0, Math.min(e - t.length, e))),
                    n
                  )),
                  r ? '' + t + e.join('') : '' + e.join('') + t
                );
              },
              stringToBlobURL: function (t, e, r) {
                void 0 === r && (r = o.a.location);
                var i = (function () {
                    try {
                      return new Blob([t], { type: e });
                    } catch (r) {
                      var n = o.a;
                      return (
                        (n = new (n.BlobBuilder ||
                          n.WebKitBlobBuilder ||
                          n.MozBlobBuilder ||
                          n.MSBlobBuilder)()).append(t),
                        n.getBlob(e)
                      );
                    }
                  })(),
                  a = (function (t) {
                    return t
                      ? ((t = (URL || webkitURL).createObjectURL(t)),
                        /blob:(?!http[s]?).*/.test(t)
                          ? t.replace(
                              'blob:',
                              'blob:' + r.protocol + '//' + r.host + '/'
                            )
                          : t)
                      : n;
                  })(i);
                return i ? { blob: i, url: a } : null;
              },
              repeatString: function (t, e) {
                return void 0 === e && (e = 1), Array(e + 1).join(t);
              },
              parseURLNative: function (t) {
                var n = e.createElement('a');
                return (
                  (n.href = t),
                  {
                    protocol: n.protocol,
                    hostname: n.hostname,
                    host: n.host,
                    port: n.port,
                    pathname: n.pathname,
                    search: n.search,
                    url: t,
                  }
                );
              },
              parseURL: function (t) {
                if (!t) return n;
                if ('string' != typeof t)
                  return (
                    o.a.console.warn('URL was expected to be a string', t), n
                  );
                var e = t.match(
                  /^(http[s]?|file):\/\/([^\/\n]*)([^?\n]*)(\?[^\n]*)?/
                );
                if (e) {
                  var r = e.slice(1);
                  e = r[0];
                  var i = r[1],
                    a = r[2];
                  r = r[3];
                  var s = i
                      ? (i.match(/([^:\s]+)(:[0-9]*)?/) || []).slice(1)
                      : [],
                    c = s[0];
                  (c = void 0 === c ? n : c),
                    (s = void 0 === (s = s[1]) ? n : s);
                  var u = c ? (c.match(/\.([^.]+)$/) || [])[1] : n,
                    l = a
                      ? (function () {
                          var t = a.match(/([^\/]+)\.([^\/]*)$/);
                          return t ? t[0] : n;
                        })()
                      : n,
                    h = a && l ? a.replace('/' + l, '') : a || '/';
                  return {
                    protocol: e ? e + ':' : n,
                    hostname: i,
                    host: c,
                    port: (s || '80').replace(/:/, ''),
                    path: a || '/',
                    tld: u,
                    file: l,
                    pathname: h,
                    search: r ? r.replace(/^\?/, '') : n,
                    url: t,
                    assemble: function (t) {
                      var e = this;
                      return t
                        ? t.replace(/(\{([^}]+)\})/g, function () {
                            return e[2 >= arguments.length ? n : arguments[2]];
                          })
                        : this.url;
                    },
                  };
                }
                return n;
              },
            };
        },
        function (t, e, n) {
          e.a = function (t, e, n) {
            void 0 === n && (n = !1);
            var r = 2 === e.length;
            if (t && e instanceof Function)
              for (var i in t)
                if (t.hasOwnProperty(i) || !0 === n) {
                  var o = r ? e(i, t[i]) : e(i);
                  if (!0 !== o && !1 === o) break;
                }
          };
        },
        function (t, e, n) {
          (function (t, n) {
            var r = new t();
            e.a = {
              throttledFunctions: r,
              invokeAll: function (t) {
                n.fastIterate(r, function (e, n) {
                  n.invoke.call(t);
                });
              },
              create: function (t, e) {
                var i = void 0 === e ? {} : e,
                  a = i.timeout,
                  s = void 0 === a ? 0 : a,
                  c = void 0 !== (a = i.immediateFirstRun) && a;
                i = i.context;
                var u = !0,
                  l = null,
                  h = null,
                  f = null,
                  d = null,
                  p = !1,
                  m = null,
                  g = null;
                return (
                  (i = {
                    invoke: function () {
                      var e = this.context || this;
                      f !== l &&
                        ((d = n.now()),
                        (f = l),
                        t.call(e, {
                          object: l,
                          prevObject: null,
                          timeDifff: 0,
                          args: g,
                        }));
                    },
                    run: function (e) {
                      var r = this.context || this;
                      if (
                        (c &&
                          (clearTimeout(m),
                          (m = o(function () {
                            return (u = !0);
                          }, s))),
                        !p)
                      ) {
                        l = e;
                        for (
                          var i = arguments.length,
                            a = Array(1 < i ? i - 1 : 0),
                            v = 1;
                          v < i;
                          v++
                        )
                          a[v - 1] = arguments[v];
                        (g = a),
                          u && c
                            ? ((u = !1),
                              (f = e),
                              t.call(r, {
                                object: e,
                                prevObject: null,
                                timeDifff: 0,
                                args: g,
                              }))
                            : ((d = n.now()),
                              (p = !0),
                              o(function e() {
                                var i = parseInt(n.now() - d, 10);
                                i >= s
                                  ? ((p = !1),
                                    (d = n.now()),
                                    f !== l &&
                                      ((h = f),
                                      (f = l),
                                      t.call(r, {
                                        object: l,
                                        prevObject: h,
                                        timeDiff: i,
                                        args: g,
                                      })))
                                  : o(e);
                              }));
                      }
                    },
                    context: void 0 === i ? null : i,
                    call: function () {
                      var t;
                      (t = this.run).call.apply(t, arguments);
                    },
                  }),
                  r.set(t, i),
                  i
                );
              },
              setContext: function (t, e) {
                if (r.has(t)) {
                  var n = r.get(t);
                  null == n.context && (n.context = e);
                }
              },
            };
          }.call(this, n(12).default, n(7).default));
        },
        function (t, e, n) {
          n.r(e),
            n.d(e, 'Promise', function () {
              return r;
            });
          var r = n(4).a.Promise || n(85).Promise;
        },
        function (t, e, n) {
          n.r(e),
            n.d(e, 'FunctionUtils', function () {
              return r;
            });
          var r = {
            invoke: function (t, e, n) {
              return (
                void 0 === e && (e = []),
                'function' == typeof t
                  ? (n && (t = t.bind(n)), t.apply(void 0, e))
                  : t
              );
            },
            lazy: function (t, e) {
              var n;
              return (
                void 0 === e && (e = 0),
                function () {
                  for (
                    var r = arguments.length, i = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a];
                  clearTimeout(n),
                    (n = o(function () {
                      t.apply(void 0, i);
                    }, e));
                }
              );
            },
            once: function (t) {
              var e = function () {
                var n = t.apply(void 0, arguments);
                return (
                  (e = function () {
                    return n;
                  }),
                  n
                );
              };
              return function () {
                return e.apply(void 0, arguments);
              };
            },
            noop: function () {
              return function () {};
            },
            toFunction: function (t) {
              return 'function' == typeof t ? t : this.noop();
            },
            repeat: function (t, e) {
              var n = void 0 === e ? {} : e,
                r = n.context,
                i = void 0 === r ? null : r,
                a = void 0 === (r = n.args) ? [] : r,
                s = void 0 === (r = n.delay) ? 0 : r;
              n = void 0 === (n = n.raf) || n;
              var c = Date.now(),
                u = !1,
                l = null,
                h = n ? this.requestAnimationFrame.bind(this) : o,
                f = n ? this.cancelAnimationFrame.bind(this) : clearTimeout;
              return (
                ((n = function e() {
                  u
                    ? f(l)
                    : (Date.now() - c >= s && ((c = Date.now()), t.apply(i, a)),
                      (l = h(e)));
                }).stop = function () {
                  u = !0;
                }),
                n(),
                n
              );
            },
          };
        },
        function (t, e, n) {
          t.exports = n(87);
        },
        function (t, e, n) {
          n.r(e),
            (t = n(4).a.Symbol),
            (n = t instanceof Function && t.iterator ? t : n(66)),
            (e.default = n);
        },
        function (t, e, n) {
          var r = n(4),
            i = n(2),
            o = (function () {
              var t = !1;
              if (i.ObjectUtils.objectIsWindow(r.a))
                try {
                  r.a.addEventListener(
                    'test',
                    function () {},
                    Object.defineProperties(
                      {},
                      {
                        passive: {
                          get: function () {
                            return (t = !0);
                          },
                          configurable: !0,
                          enumerable: !0,
                        },
                      }
                    )
                  );
                } catch (t) {}
              return t;
            })(),
            a = function (t, e, n, r, i) {
              if ((void 0 === i && (i = {}), (t += 'EventListener'), e && e[t]))
                return o
                  ? e[t](n, r, i)
                  : e[t](n, r, 'boolean' == typeof i ? i : i.capture || !1);
            };
          (t = (function () {
            function t() {}
            return (
              (t.on = function (t, e, n, r) {
                return void 0 === r && (r = {}), a('add', t, e, n, r);
              }),
              (t.off = function (t, e, n, r) {
                return void 0 === r && (r = {}), a('remove', t, e, n, r);
              }),
              t
            );
          })()),
            (e.a = t);
        },
        function (t, e, n) {
          (function (t) {
            var r = n(9),
              i = n(2);
            e.a = function (e) {
              var n = [];
              if (!e) return n;
              if (e instanceof Array) return [].slice.call(e, 0);
              if (i.ObjectUtils.isNative(r.a.Array.from, 'from'))
                return r.a.Array.from(e);
              var o = 'length' in e ? e.length : 'size' in e ? e.size : 0,
                a = n.slice.call(e, 0);
              if (a.length === o) return a;
              try {
                if (e.forEach)
                  e.forEach(function (t, e) {
                    var r = t;
                    e && t && e !== t && (r = [e, t]), n.push(r);
                  });
                else
                  for (
                    var s, c, u = e[t.iterator]();
                    (c = (s = u.next()).value), !s.done;

                  )
                    n.push(c);
                return n;
              } catch (t) {
                return [];
              }
            };
          }.call(this, n(25).default));
        },
        function (n, r, i) {
          i.r(r),
            i.d(r, 'BrowserUtils', function () {
              return s;
            });
          var o = i(4),
            a = i(10),
            s = {
              isMSIE: function () {
                var t = o.a.navigator.userAgent,
                  e = t.indexOf('MSIE ');
                return 0 < e
                  ? parseInt(t.substring(e + 5, t.indexOf('.', e)), 10)
                  : 0 < t.indexOf('Trident/')
                  ? ((e = t.indexOf('rv:')),
                    parseInt(t.substring(e + 3, t.indexOf('.', e)), 10))
                  : 0 < (e = t.indexOf('Edge/')) &&
                    parseInt(t.substring(e + 5, t.indexOf('.', e)), 10);
              },
              isIframe: function (t) {
                return t.top !== t;
              },
              isMobile: function (e) {
                if (
                  null ==
                  (e = e || (t && t.navigator) ? navigator.userAgent : null)
                )
                  return !1;
                var n = !1;
                return (
                  (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                    e
                  ) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                      e.substr(0, 4)
                    )) &&
                    (n = !0),
                  n
                );
              },
              isAndroid: function () {
                return /android/i.test(navigator.userAgent);
              },
              isIOS: function () {
                return /ipad|iphone|ipod/i.test(navigator.userAgent);
              },
              orientation: function (t) {
                return null != (t = t || o.a)
                  ? t
                  : ((t =
                      t.screen.orientation ||
                      t.screen.mozOrientation ||
                      t.screen.msOrientation) &&
                      t.angle) ||
                      0;
              },
              devicePixelRatio: function () {
                return o.a.devicePixelRatio || 1;
              },
              meta: function (t) {
                return (t = e.querySelector('meta[name="ym:' + t + '"]'))
                  ? t.content
                  : null;
              },
              scaleFactor: function (t, e) {
                var n = t.clientWidth,
                  r = t.clientHeight,
                  i = e.clientWidth,
                  o = e.clientHeight;
                return i > n || o > r
                  ? ((n /= i),
                    (r /= o),
                    Math.min(1, Math.max(n > r ? 0.1 : 0.35, Math.min(n, r))))
                  : 1;
              },
              viewportGetter: function (e) {
                var n = (e = e || t.document).defaultView,
                  r = function (t) {
                    /Trident|MSIE/.test(n.navigator.userAgent)
                      ? e.body.parentNode && e.body.parentNode.appendChild(t)
                      : e.body.appendChild(t);
                  },
                  i = e.querySelector('ym-measure.ym-viewport'),
                  o = e.querySelector('ym-measure.ym-zoom');
                return (
                  null === i &&
                    r(
                      (i = a.DOMUtils.createElement('ym-measure', {
                        className: 'ym-viewport',
                        style: {
                          display: 'block',
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                          height: '100vh',
                          width: '100vw',
                          position: 'fixed',
                          transform: 'translate(0, -100%)',
                          msTransform: 'translate(0, -100%)',
                          webkitTransform: 'translate(0, -100%)',
                          transformOrigin: '0 0',
                          msTransformOrigin: '0 0',
                          webkitTransformOrigin: '0 0',
                        },
                      }))
                    ),
                  null === o &&
                    r(
                      (o = a.DOMUtils.createElement('ym-measure', {
                        className: 'ym-zoom',
                        style: {
                          bottom: '100%',
                          position: 'fixed',
                          width: '100vw',
                        },
                      }))
                    ),
                  Object.defineProperties(
                    {
                      getSize: function (t) {
                        void 0 === t && (t = 1);
                        var e = i;
                        return {
                          width: Math.round(e.clientWidth * t),
                          height: Math.round(e.clientHeight * t),
                        };
                      },
                    },
                    {
                      zoomLevel: {
                        get: function () {
                          try {
                            return parseFloat(
                              (o.clientWidth / n.innerWidth).toFixed(3)
                            );
                          } catch (t) {
                            return 1;
                          }
                        },
                        configurable: !0,
                        enumerable: !0,
                      },
                      scrollingElement: {
                        get: function () {
                          return (
                            e.scrollingElement ||
                            (e.documentElement.scrollHeight >
                              e.body.scrollHeight &&
                            0 === e.compatMode.indexOf('CSS1')
                              ? e.documentElement
                              : e.body)
                          );
                        },
                        configurable: !0,
                        enumerable: !0,
                      },
                      orientation: {
                        get: function () {
                          var t = Kt
                            ? Kt.orientation ||
                              Kt.mozOrientation ||
                              Kt.msOrientation
                            : null;
                          return (t && t.angle) || 0;
                        },
                        configurable: !0,
                        enumerable: !0,
                      },
                    }
                  )
                );
              },
            };
        },
        function (t, e, n) {
          (function (t) {
            var r = n(27);
            e.a = function (e, n) {
              var i = 2 === n.length;
              if (e && n instanceof Function)
                if (null != e[t.iterator])
                  if (i) {
                    if (e instanceof Array) {
                      i = 0;
                      for (var o = e.length; i < o; i++) {
                        var a = n(i, e[i]);
                        if (!0 !== a && !1 === a) break;
                      }
                    } else if (e[t.iterator])
                      for (
                        i = e,
                          a = 0,
                          i = (o = Array.isArray(i)) ? i : i[t.iterator]();
                        ;

                      ) {
                        if (o) {
                          if (a >= i.length) break;
                          var s = i[a++];
                        } else {
                          if ((a = i.next()).done) break;
                          s = a.value;
                        }
                        if (!0 !== (s = n(s[0], s[1])) && !1 === s) break;
                      }
                  } else
                    for (
                      i = e,
                        a = 0,
                        i = (o = Array.isArray(i)) ? i : i[t.iterator]();
                      ;

                    ) {
                      if (o) {
                        if (a >= i.length) break;
                        s = i[a++];
                      } else {
                        if ((a = i.next()).done) break;
                        s = a.value;
                      }
                      if (!0 !== (s = n(s)) && !1 === s) break;
                    }
                else if ('forEach' in e)
                  !(function (t, e, n) {
                    t.forEach(function (t, r) {
                      2 === e.length ? (n ? e(t, r) : e([t, r])) : e(t);
                    });
                  })(e, n, i);
                else if (e instanceof Array)
                  for (
                    o = Object(r.a)(e), a = 0;
                    a < o.length &&
                    ((s = o[a]),
                    !0 === (s = i ? n.apply(void 0, s) : n(s)) || !1 !== s);
                    a++
                  );
            };
          }.call(this, n(25).default));
        },
        function (t, n, r) {
          (function (t, i, a) {
            r.d(n, 'b', function () {
              return d;
            });
            var s = r(1);
            s = r.n(s);
            var c = r(15),
              u = '2d webgl experimental-webgl webgl2 experimental-webgl2 bitmaprenderer'.split(
                ' '
              ),
              l = (function () {
                var t = e.createElement('canvas');
                return (
                  (t.proxy = !1),
                  u.filter(function (e) {
                    return null != t.getContext(e);
                  })
                );
              })(),
              h = new t(),
              f = HTMLCanvasElement.prototype.getContext,
              d = function (t) {
                var n = e.createElement('canvas');
                return (
                  (n.width = t.width),
                  (n.height = t.height),
                  (n.proxy = !1),
                  n.getContext('2d').drawImage(t, 0, 0),
                  n.toDataURL('image/jpeg')
                );
              };
            (t = (function () {
              function t() {}
              return (
                (t.mock = function () {
                  if (!this.mocked) {
                    (this.mocked = !0),
                      (HTMLCanvasElement.prototype.getContext = function (e) {
                        var n = f.call(this, e);
                        if (null !== n)
                          return (
                            !1 !== this.proxy &&
                              0 <= l.indexOf(e) &&
                              t.update(n),
                            n
                          );
                      });
                    var n = e.querySelectorAll('canvas');
                    i.forof(n, function (t) {
                      i.forof(u, t.getContext.bind(t));
                    });
                  }
                }),
                (t.remove = function () {
                  this.mocked &&
                    ((this.mocked = !1),
                    this.events.off(),
                    (HTMLCanvasElement.prototype.getContext = f));
                }),
                (t.update = function (e) {
                  if (!1 === t.proxies.has(e)) {
                    var n = this,
                      r = e.canvas,
                      o = Object.getPrototypeOf(e),
                      a = (function (t) {
                        if (((t = t.constructor), h.has(t))) return h.has(t);
                        var e = i.apiMock(t);
                        return h.set(t, e), e;
                      })(e);
                    i.nodeIsRecordable(r) &&
                      a.properties &&
                      (i.forof(a.properties, function (t) {
                        var r = Object.getOwnPropertyDescriptor(o, t),
                          a = i.combine(r);
                        r.get && (a.get = r.get.bind(e)),
                          r.set &&
                            (a.set = function (i) {
                              return n.setterInvoked(e, t, i), r.set.call(e, i);
                            }),
                          Object.defineProperty(e, t, a);
                      }),
                      i.forof(a.methods, function (t) {
                        var r = e[t];
                        Object.defineProperty(e, t, {
                          configurable: !0,
                          value: function () {
                            for (
                              var i = arguments.length, o = Array(i), a = 0;
                              a < i;
                              a++
                            )
                              o[a] = arguments[a];
                            return (
                              n.methodInvoked(e, t, o),
                              r.bind.apply(r, [e].concat(o))
                            );
                          },
                        });
                      })),
                      t.proxies.add(e);
                  }
                }),
                (t.setterInvoked = function (t, e, n) {
                  var r = this;
                  this.mocked &&
                    o(function () {
                      r.send(t, 'setter', { name: e, value: String(n) });
                    });
                }),
                (t.methodInvoked = function (t, e, n) {
                  var r = this;
                  this.mocked &&
                    o(function () {
                      (n = n.map(function (t) {
                        return t instanceof Image ? d(t) : String(t);
                      })),
                        r.send(t, 'method', { name: e, args: n });
                    });
                }),
                (t.send = function () {}),
                t
              );
            })()),
              s()(t, 'proxies', new a()),
              s()(t, 'mocked', !1),
              s()(t, 'events', new c.a(['setter:memory', 'method:memory'])),
              (n.a = t);
          }.call(this, r(12).default, r(7).default, r(8).default));
        },
        function (t, e, n) {
          (function (t) {
            var r = n(14),
              i = n.n(r);
            r = n(1);
            var o = n.n(r),
              a = n(3);
            (r = (function () {
              function e() {
                o()(this, 'executionFrameId', null),
                  o()(this, 'jobExecutionStartStamp', null),
                  (this.jobs = []),
                  (this.isRunning = !1);
              }
              var n = e.prototype;
              return (
                (n.push = function (t, e) {
                  var n;
                  void 0 === e && (e = !1),
                    (n = this.jobs).push.apply(n, [].concat(t)),
                    this.start(e);
                }),
                (n.start = function (t) {
                  void 0 === t && (t = !1),
                    this.isRunning || this.executeNextJob(t);
                }),
                (n.executeNextJob = function (t) {
                  void 0 === t && (t = !1),
                    this.hasJobs &&
                      (t ? this._executeJobsSync() : this._executeJobsAsync());
                }),
                (n._executeJobsSync = function () {
                  if (this.hasJobs && this.isRunning) {
                    for (
                      t.cancelAnimationFrame(this.executionFrameId);
                      this.hasJobs;

                    )
                      this._executeJob();
                    (this.jobExecutionStartStamp = null), (this.isRunning = !1);
                  }
                }),
                (n._executeJobsAsync = function () {
                  var e,
                    n = this;
                  this.hasJobs
                    ? ((this.isRunning = !0),
                      (this.executionFrameId = t.requestAnimationFrame(
                        function () {
                          for (
                            ;
                            n.hasJobs && (!n.jobExecutionStartStamp || 150 > e);

                          )
                            e = n._executeJob(!n.jobExecutionStartStamp);
                          (n.jobExecutionStartStamp = null),
                            n._executeJobsAsync();
                        }
                      )))
                    : (this.isRunning = !1);
                }),
                (n._executeJob = function (t) {
                  void 0 === t && (t = !0),
                    t && (this.jobExecutionStartStamp = new Date().valueOf()),
                    (t = this.jobs.shift());
                  try {
                    t();
                  } catch (e) {
                    a.default.log('Error occurred when running job'),
                      a.default.log(e),
                      a.default.log(t.toString());
                  }
                  return new Date().valueOf() - this.jobExecutionStartStamp;
                }),
                i()(e, [
                  {
                    key: 'hasJobs',
                    get: function () {
                      return 0 < this.jobs.length;
                    },
                  },
                ]),
                e
              );
            })()),
              (e.a = r);
          }.call(this, n(7).default));
        },
        function (t, e) {
          t.exports = function (t, e) {
            if (null == t) return {};
            var n,
              r = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++) {
              var o = i[n];
              0 <= e.indexOf(o) || (r[o] = t[o]);
            }
            return r;
          };
        },
        function (t, e, r) {
          r.d(e, 'a', function () {
            return i;
          }),
            r.d(e, 'b', function () {
              return o;
            });
          var i = (function () {
              function t() {
                this.m = [];
              }
              var e = t.prototype;
              return (
                (e.use = function (t) {
                  this.m.push(t);
                }),
                (e.useRight = function (t) {
                  this.m.unshift(t);
                }),
                (e.run = function (t, e) {
                  this._execute(t, e);
                }),
                (e._execute = function (t, e) {
                  this.m.reduceRight(
                    function (e, n) {
                      return function (r) {
                        return n(r || t, e);
                      };
                    },
                    function (n) {
                      return e(n || t);
                    }
                  )(t);
                }),
                t
              );
            })(),
            o = (function () {
              function t() {
                this.m = [];
              }
              var e = t.prototype;
              return (
                (e.use = function (t) {
                  this.m.push(t);
                }),
                (e.useRight = function (t) {
                  this.m.unshift(t);
                }),
                (e.run = function (t, e) {
                  return this._execute(t, e);
                }),
                (e._execute = function (t) {
                  for (var e = 0, r = this.m.length; e < r; e++) {
                    var i = this.m[e](t);
                    if (i === n) break;
                    t = i;
                  }
                  return t;
                }),
                t
              );
            })();
        },
        function (t, e, r) {
          (function (e) {
            function r(t, n, r, i, o, a, s) {
              try {
                var c = t[a](s),
                  u = c.value;
              } catch (t) {
                return void r(t);
              }
              c.done ? n(u) : e.resolve(u).then(i, o);
            }
            t.exports = function (t) {
              return function () {
                var i = this,
                  o = arguments;
                return new e(function (e, a) {
                  function s(t) {
                    r(u, e, a, s, c, 'next', t);
                  }
                  function c(t) {
                    r(u, e, a, s, c, 'throw', t);
                  }
                  var u = t.apply(i, o);
                  s(n);
                });
              };
            };
          }.call(this, r(22).Promise));
        },
        function (t, e, n) {
          var r = n(76)();
          t.exports = function (t) {
            return t !== r && null !== t;
          };
        },
        function (t, n, r) {
          r.r(n),
            r.d(n, 'DocumentUtils', function () {
              return o;
            });
          var i = function (t) {
              return t
                ? 'IFRAME' === t.nodeName
                  ? t.contentDocument
                  : t
                : null;
            },
            o = {
              open: function (t) {
                (t = i(t)) && t.open();
              },
              write: function (t, e) {
                var n = i(t);
                n && n.write(e);
              },
              close: function (t) {
                (t = i(t)) && t.close();
              },
              initDocument: function (t) {
                var n = void 0 === t ? {} : t;
                t = n.html;
                var r = n.doctype;
                return (
                  (n = n.doc || e.cloneNode(!1)),
                  this.open(n),
                  this.write(
                    n,
                    t || r + '<html><head></head><body></body></html>'
                  ),
                  this.close(n),
                  n
                );
              },
            };
        },
        function (t, e, n) {
          n.r(e),
            n.d(e, 'TimeUtils', function () {
              return i;
            }),
            (t = n(41));
          var r = n(19),
            i = {
              now: function () {
                return new Date().getTime();
              },
              formatTime: function (t, e) {
                return (
                  void 0 === e && (e = !0),
                  (t = Number(t)),
                  [
                    Math.floor(t / 3600),
                    Math.floor((t / 60) % 60),
                    Math.floor(t % 60),
                  ]
                    .filter(function (t, e) {
                      return !(0 === t && 0 === e);
                    })
                    .map(function (t, n) {
                      return r.StringUtils.pad(t, 0 !== n || e ? 2 : 0, '0');
                    })
                );
              },
              formattedTime: function (t, e, n) {
                void 0 === e && (e = ['sec', 'min', 'hours']),
                  void 0 === n && (n = !0);
                var r = i.formatTime(t, n).reverse();
                return e
                  .reduce(function (t, e, n) {
                    return (
                      r[n] &&
                        parseInt(r[n], 10) &&
                        t.push(parseInt(r[n], 10) + ' ' + e),
                      t
                    );
                  }, [])
                  .reverse()
                  .join(' ');
              },
              timer: t.a,
            };
        },
        function (t, e) {
          function n() {
            throw Error('setTimeout has not been defined');
          }
          function r() {
            throw Error('clearTimeout has not been defined');
          }
          function i(t) {
            if (h === o) return o(t, 0);
            if ((h === n || !h) && o) return (h = o), o(t, 0);
            try {
              return h(t, 0);
            } catch (e) {
              try {
                return h.call(null, t, 0);
              } catch (e) {
                return h.call(this, t, 0);
              }
            }
          }
          function a() {
            m &&
              d &&
              ((m = !1),
              d.length ? (p = d.concat(p)) : (g = -1),
              p.length && s());
          }
          function s() {
            if (!m) {
              var t = i(a);
              m = !0;
              for (var e = p.length; e; ) {
                for (d = p, p = []; ++g < e; ) d && d[g].run();
                (g = -1), (e = p.length);
              }
              (d = null),
                (m = !1),
                (function (t) {
                  if (f === clearTimeout) return clearTimeout(t);
                  if ((f === r || !f) && clearTimeout)
                    return (f = clearTimeout), clearTimeout(t);
                  try {
                    f(t);
                  } catch (e) {
                    try {
                      return f.call(null, t);
                    } catch (e) {
                      return f.call(this, t);
                    }
                  }
                })(t);
            }
          }
          function c(t, e) {
            (this.fun = t), (this.array = e);
          }
          function u() {}
          var l = (t.exports = {});
          try {
            var h = o;
          } catch (t) {
            h = n;
          }
          try {
            var f = 'function' == typeof clearTimeout ? clearTimeout : r;
          } catch (t) {
            f = r;
          }
          var d,
            p = [],
            m = !1,
            g = -1;
          (l.nextTick = function (t) {
            var e = Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
            p.push(new c(t, e)), 1 !== p.length || m || i(s);
          }),
            (c.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (l.title = 'browser'),
            (l.browser = !0),
            (l.env = {}),
            (l.argv = []),
            (l.version = ''),
            (l.versions = {}),
            (l.on = u),
            (l.addListener = u),
            (l.once = u),
            (l.off = u),
            (l.removeListener = u),
            (l.removeAllListeners = u),
            (l.emit = u),
            (l.prependListener = u),
            (l.prependOnceListener = u),
            (l.listeners = function (t) {
              return [];
            }),
            (l.binding = function (t) {
              throw Error('process.binding is not supported');
            }),
            (l.cwd = function () {
              return '/';
            }),
            (l.chdir = function (t) {
              throw Error('process.chdir is not supported');
            }),
            (l.umask = function () {
              return 0;
            });
        },
        function (t, e, n) {
          function r(e, n, o) {
            return (
              !(function () {
                if (
                  'undefined' == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()
                ? (t.exports = r = function (t, e, n) {
                    var r = [null];
                    return (
                      r.push.apply(r, e),
                      (t = new (Function.bind.apply(t, r))()),
                      n && i(t, n.prototype),
                      t
                    );
                  })
                : (t.exports = r = Reflect.construct),
              r.apply(null, arguments)
            );
          }
          var i = n(86);
          t.exports = r;
        },
        function (t, e, r) {
          (function (t) {
            var i = r(36),
              o = r(2),
              a = r(20);
            e.a = function (e) {
              var r = o.ObjectUtils.assign(
                {
                  url: '',
                  headers: {},
                  method: 'get',
                  type: 'json',
                  data: null,
                },
                e
              );
              return (
                (e.headers !== n && e.headers['Content-Type'] !== n) ||
                  ((r.headers = r.headers || {}),
                  (r.headers['Content-Type'] = (function () {
                    switch (r.type) {
                      case 'json':
                        return 'application/json';
                      case 'css':
                        return 'text/css';
                      case 'html':
                        return 'text/html';
                      default:
                        return 'text/plain';
                    }
                  })())),
                new t(function (t, e) {
                  var o = new XMLHttpRequest(),
                    s = new FileReader();
                  'css' === r.type && (o.responseType = 'blob'),
                    o.addEventListener('readystatechange', function () {
                      var n = o.status;
                      4 === o.readyState &&
                        (200 <= n && 301 > n
                          ? 'css' === r.type
                            ? ((n = ((o.getResponseHeader('Content-Type') || '')
                                .split('; ')
                                .map(function (t) {
                                  return t.split('=');
                                })
                                .find(function (t) {
                                  return 'charset' === t[0];
                                }) || ['charset', 'UTF-8'])[1]),
                              s.addEventListener('load', function (e) {
                                t({ result: s.result });
                              }),
                              s.readAsText(o.response, n))
                            : ((n = (function (t) {
                                switch (r.type) {
                                  case 'json':
                                    return JSON.parse(t);
                                  case 'html':
                                    return i.DocumentUtils.initDocument({
                                      html: t,
                                    });
                                  default:
                                    return t;
                                }
                              })(o.responseText)),
                              t({ result: n }))
                          : e(Error(n + ' ' + o.statusText)));
                    }),
                    o.addEventListener('error', e),
                    o.open(r.method.toUpperCase(), r.url),
                    Object(a.a)(r.headers, function (t, e) {
                      o.setRequestHeader(t, e);
                    }),
                    o.send(r.data ? JSON.stringify(r.data) : n);
                }).catch(function (t) {
                  return {};
                })
              );
            };
          }.call(this, r(22).Promise));
        },
        function (e, n, r) {
          (function (e, r) {
            var i =
                void 0 !== t
                  ? t
                  : 'undefined' != typeof global
                  ? global
                  : 'undefined' != typeof self
                  ? self
                  : void 0,
              o = function () {
                return Date.now();
              },
              a = function (t) {
                return t
                  ? (0 > (t = this._getTime() - t) &&
                      e.warn('Invalid stamp: ' + t),
                    t)
                  : 0;
              },
              s = function (t, e) {
                var n;
                (n = i.console).log.apply(n, t.concat([e + 'ms']));
              };
            n.a = function (t) {
              void 0 === t && (t = {});
              var e = t.getStamp || a,
                n = t.printLog || s,
                r = {
                  start: function () {
                    var t = this._getTime();
                    return (
                      (this._initializedAt = this._initializedAt || t),
                      (this._startedAt = t),
                      r
                    );
                  },
                  stamp: function () {
                    return this._getStamp(this._startedAt);
                  },
                  stampSinceCreated: function () {
                    return this._getStamp(this._initializedAt);
                  },
                  reset: function () {
                    return this.start();
                  },
                  log: function () {
                    for (
                      var t = arguments.length, e = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      e[r] = arguments[r];
                    return n(e, this.stamp()), this;
                  },
                  logSinceCreated: function () {
                    for (
                      var t = arguments.length, e = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      e[r] = arguments[r];
                    return n(e, this.stampSinceCreated()), this;
                  },
                };
              return (
                Object.defineProperties(r, {
                  _getTime: { value: (t.getTime || o).bind(r) },
                  _getStamp: { value: e.bind(r) },
                }),
                r
              );
            };
          }.call(this, r(3).default, r(38)));
        },
        function (t, e, n) {
          (function (t, r) {
            var i = n(5),
              o = n.n(i),
              a = n(17);
            e.a = function () {
              var e = new t(),
                n = {
                  input: { capture: !0, passive: !0 },
                  change: { capture: !0 },
                  keyup: { capture: !0 },
                  paste: { capture: !0 },
                  cut: { capture: !0 },
                };
              return {
                inputs: {},
                events: {},
                create: function (t) {
                  var i = this;
                  (this.handleInputValueChange = this.handleInputValueChange.bind(
                    this
                  )),
                    (this.handleInputChangeValueEvent = this.handleInputChangeValueEvent.bind(
                      this
                    )),
                    (this.handleNodeIndex = this.handleNodeIndex.bind(this)),
                    (this.handleNodeRemoval = this.handleNodeRemoval.bind(
                      this
                    )),
                    (this.recorder = t),
                    this.checkInpudDescriptorOverrideAbility(t) &&
                      (t.indexer.dom.forEach(function (t) {
                        i.handleNodeIndex(t);
                      }),
                      t.indexer.on('add', this.handleNodeIndex),
                      t.indexer.on('remove', this.handleNodeRemoval)),
                    r.forin(n, function (r) {
                      e.add(
                        t.attachEvent(
                          t.document,
                          r,
                          i.handleInputChangeValueEvent,
                          n[r]
                        )
                      );
                    });
                },
                handleNodeIndex: function (t) {
                  if (
                    a.a.isValidNode(t.nativeNode) &&
                    '__ym_input_override_test' !==
                      t.nativeNode.getAttribute('class')
                  ) {
                    var e = t.nativeNode,
                      n = t.id,
                      i =
                        'radio' === t.attributes.type ||
                        'checkbox' === t.attributes.type;
                    (t = this.getPropertyName(i)),
                      (this.inputs[n] = { checkable: i, value: e[t] }),
                      (i =
                        Object.getOwnPropertyDescriptor(
                          Object.getPrototypeOf(e),
                          t
                        ) || {});
                    var s = Object.getOwnPropertyDescriptor(e, t) || {},
                      c = o()({}, i, s);
                    if (r.isNative(c.set, '((set)?(\\s?' + t + ')?)?')) {
                      var u = this;
                      try {
                        Object.defineProperty(
                          e,
                          t,
                          o()({}, c, {
                            configurable: !0,
                            set: function (t) {
                              var e = this;
                              return (
                                u.recorder.errorLogger(function () {
                                  u.handleInputValueChange(n, t, e);
                                }, 'inpVC'),
                                c.set.call(this, t)
                              );
                            },
                          })
                        );
                      } catch (t) {
                        delete this.inputs[n];
                      }
                    }
                  }
                },
                handleInputChangeValueEvent: function (t) {
                  var e = this;
                  this.recorder.errorLogger(function () {
                    var n = t.target,
                      r = e.recorder.indexer.get(n);
                    if (r) {
                      var i = r.id;
                      if (!e.inputs[i] && (e.handleNodeIndex(r), !e.inputs[i]))
                        return;
                      (r = e.getPropertyName(e.inputs[i].checkable)),
                        e.handleInputValueChange(i, n[r], n);
                    }
                  }, 'inpChV');
                },
                handleInputValueChange: function (t, e, n) {
                  var r = this.inputs[t],
                    i = r.checkable;
                  if (
                    ((r = r.value),
                    (!e ||
                      -1 !==
                        ['string', 'boolean', 'number'].indexOf(typeof e)) &&
                      e !== r)
                  ) {
                    if (i)
                      n = this.recorder._getEventObject('change', t, {
                        checked: !!e,
                      });
                    else {
                      var o = a.a.validate(n, this.recorder.options);
                      r = o.forceRecord;
                      var s = o.isPrivate;
                      (o = o.isAllowed || r ? e : a.a.encode(e)),
                        (n = this.recorder._getEventObject('change', n, {
                          value: o,
                          hidden: s && !r,
                        }));
                    }
                    (this.inputs[t] = { checkable: i, value: e }),
                      this.recorder._publishActions(n);
                  }
                },
                handleNodeRemoval: function (t) {
                  (t.nativeNode &&
                    '__ym_input_override_test' ===
                      t.nativeNode.getAttribute('class')) ||
                    delete this.inputs[t.id];
                },
                getPropertyName: function (t) {
                  return t ? 'checked' : 'value';
                },
                checkInpudDescriptorOverrideAbility: function (t) {
                  var e = !0;
                  try {
                    var n = t.document.createElement('input');
                    (n.value = 'INPUT_VALUE'),
                      n.style.setProperty('display', 'none', 'important'),
                      n.setAttribute('type', 'text'),
                      n.setAttribute('class', '__ym_input_override_test'),
                      t.document.documentElement.appendChild(n);
                    var r =
                        Object.getOwnPropertyDescriptor(
                          Object.getPrototypeOf(n),
                          'value'
                        ) || {},
                      i = Object.getOwnPropertyDescriptor(n, 'value') || {},
                      a = o()({}, r, i);
                    Object.defineProperty(
                      n,
                      'value',
                      o()({}, a, {
                        configurable: !0,
                        set: function (t) {
                          return a.set.call(n, t);
                        },
                      })
                    ),
                      'INPUT_VALUE' !== n.value && (e = !1),
                      (n.value = 'INPUT_TEST'),
                      'INPUT_TEST' !== n.value && (e = !1);
                  } catch (t) {
                    e = !1;
                  }
                  return n && t.document.documentElement.removeChild(n), e;
                },
                destroy: function (t) {
                  var e = this;
                  Object.keys(this.inputs).forEach(function (n) {
                    var r = t.indexer.findByID(n);
                    if (r) {
                      n = e.getPropertyName(e.inputs[n].checkable);
                      var i = Object.getOwnPropertyDescriptor(
                        Object.getPrototypeOf(r),
                        n
                      );
                      Object.defineProperty(r, n, i);
                    }
                  }),
                    Object.keys(this.events).forEach(function (n) {
                      t.removeEvent(e.events[n]);
                    }),
                    t.indexer.off('add', this.handleNodeIndex),
                    t.indexer.off('remove', this.handleNodeRemoval);
                },
              };
            };
          }.call(this, n(8).default, n(7).default));
        },
        function (t, e, n) {
          (function (t, r) {
            var i = n(21);
            e.a = function () {
              var e = {
                  mousemove: { capture: !0, passive: !0, lazy: 5 },
                  mousedown: { capture: !0 },
                  mouseup: { capture: !0 },
                  click: { capture: !0 },
                },
                n = new t(),
                o = function (t) {
                  var e = t.object;
                  t = t.args[0];
                  var n = e.type,
                    r = e.target,
                    i = e.clientX;
                  (i = void 0 === i ? null : i),
                    (e = void 0 === (e = e.clientY) ? null : e),
                    (r = this.document.elementFromPoint(i, e) || r),
                    (t = this._getEventObject(n, r, { x: i, y: e }, t)),
                    this._publishActions(t);
                },
                a = i.a.create(o, { timeout: 0 }),
                s = function (t) {
                  var e = this.stamp;
                  'mousemove' === t.type
                    ? a.call(this, t, e)
                    : o.call(this, { object: t, args: [e] });
                };
              return {
                create: function (t) {
                  var i = t._universalHandler(s);
                  r.forin(e, function (r) {
                    n.add(t.attachEvent(t.document, r, i, e[r]));
                  });
                },
                destroy: function (t) {
                  r.forof(n, function (e) {
                    return t.removeEvent(e);
                  }),
                    n.clear();
                },
              };
            };
          }.call(this, n(8).default, n(7).default));
        },
        function (t, e, n) {
          (function (t, n) {
            e.a = function () {
              var e = { focus: { capture: !0 }, blur: { capture: !0 } },
                r = new t(),
                i = function (t) {
                  (t = this._getEventObject(t.type, t.target)),
                    this._publishActions(t);
                };
              return {
                create: function (t) {
                  var o = t._universalHandler(i);
                  n.forin(e, function (n) {
                    r.add(t.attachEvent(t.document, n, o, e[n]));
                  });
                },
                destroy: function (t) {
                  n.forof(r, function (e) {
                    return t.removeEvent(e);
                  }),
                    r.clear();
                },
              };
            };
          }.call(this, n(8).default, n(7).default));
        },
        function (t, e, n) {
          (function (t) {
            e.a = function () {
              var e,
                n = function (e, n) {
                  var r = this,
                    i = t.now();
                  this._blockUpcomingCaptor('resize'),
                    this._executeCaptor('deviceRotation', function () {
                      o(function () {
                        var o = t.now() - i;
                        r._publishActions(n.getValue.call(r, e, o));
                      }, 300);
                    });
                };
              return {
                getValue: function (t, e) {
                  var n = this.viewport.getSize(1);
                  return (
                    ((n = this._getEventObject('deviceRotation', 0, {
                      width: n.width,
                      height: n.height,
                      orientation: this.viewport.orientation,
                    })).stamp -= e),
                    n
                  );
                },
                create: function (t) {
                  e = t.attachEvent(
                    t.window,
                    'orientationchange',
                    t._universalHandler(n, { extra: [this] }),
                    { passive: !0 }
                  );
                },
                destroy: function (t) {
                  t.removeEvent(e);
                },
              };
            };
          }.call(this, n(7).default));
        },
        function (t, e, n) {
          (function (t, r) {
            var i = n(21);
            e.a = function () {
              var e,
                n = new t(),
                o = function (t) {
                  var e = t.args[0],
                    n = this.viewport.scrollingElement;
                  t = t.object.target;
                  var i = this.document,
                    o = this.window,
                    a = r.getScroll(t);
                  (e = this._getEventObject(
                    'scroll',
                    t,
                    {
                      x: Math.max(a.left, 0),
                      y: Math.max(a.top, 0),
                      page: t === n || t === o || t === i || t === i.body,
                    },
                    e
                  )),
                    this._publishActions(e);
                },
                a = function (t) {
                  var e = t.target;
                  if (n.has(e)) e = n.get(e);
                  else {
                    var a = i.a.create(o, {
                      timeout: r.isAndroid() ? 0 : 100,
                      immediateFirstRun: !0,
                    });
                    n.set(e, a), (e = a);
                  }
                  e.call(this, t);
                };
              return {
                create: function (t) {
                  var n = t._universalHandler(a);
                  e = t.attachEvent(t.document, 'scroll', n.bind(t), {
                    capture: !0,
                    passive: !0,
                  });
                },
                destroy: function (t) {
                  t.removeEvent(e), n.clear();
                },
              };
            };
          }.call(this, n(12).default, n(7).default));
        },
        function (t, e, n) {
          (function (t, n) {
            e.a = function () {
              var e = {
                  mousemove: { capture: !0, passive: !0, lazy: 5 },
                  touchmove: { capture: !0, passive: !0, lazy: 5 },
                  mousedown: { capture: !0 },
                  touchdown: { capture: !0 },
                },
                r = new t(),
                i = !1;
              return {
                create: function (t) {
                  var o = t._universalHandler(function (e) {
                    (('mousemove' === e.type && 1 === e.which) ||
                      -1 !==
                        ['mousedown', 'touchmove', 'touchdown'].indexOf(
                          e.type
                        )) &&
                      function (t) {
                        var e =
                          'select' === t.type
                            ? this.selection.getSelectionFor(t.target)
                            : this.selection.getPageSelection();
                        e &&
                        e.start !== e.end &&
                        -1 !==
                          ['mousemove', 'touchmove', 'touchdown'].indexOf(
                            t.type
                          )
                          ? ((i = !0),
                            (t = this._getEventObject(
                              'selection',
                              'select' === t.type ? t.target : this.rootNode,
                              e
                            )),
                            this._publishActions(t))
                          : i &&
                            -1 !==
                              ['mousedown', 'touchmove', 'touchdown'].indexOf(
                                t.type
                              ) &&
                            ((i = !1),
                            (t = this._getEventObject('selection', null, {
                              start: 0,
                              end: 0,
                            })),
                            this._publishActions(t));
                      }.call(t, e);
                  });
                  n.forin(e, function (n) {
                    r.add(t.attachEvent(t.document, n, o, e[n]));
                  });
                },
                destroy: function (t) {
                  n.forof(r, function (e) {
                    return t.removeEvent(e);
                  });
                },
              };
            };
          }.call(this, n(8).default, n(7).default));
        },
        function (t, e, n) {
          (function (t, r, i) {
            var a = n(21);
            e.a = function () {
              var e = {
                  touchmove: { capture: !0, passive: !0 },
                  touchstart: { capture: !0 },
                  touchend: { capture: !0 },
                  touchcancel: { capture: !0 },
                  touchforcechange: { capture: !0 },
                },
                n = new t(),
                s = new r(),
                c = !1,
                u = function (t) {
                  var e = t.object;
                  t = t.args[0];
                  var n = e.type,
                    r = i.map(e.changedTouches, function (t) {
                      return {
                        id: t.__id,
                        x: Math.round(t.clientX),
                        y: Math.round(t.clientY),
                        force: t.force,
                      };
                    });
                  (e = this._getEventObject(n, e.target, { touches: r }, t)),
                    this._publishActions(e);
                },
                l = a.a.create(u, { timeout: i.isAndroid() ? 0 : 300 }),
                h = function (t) {
                  var e = this.stamp,
                    n = 'touchcancel' === t.type || 'touchend' === t.type;
                  t.changedTouches &&
                    0 < t.changedTouches.length &&
                    i.forof(t.changedTouches, function (t) {
                      var e = void 0 !== n && n;
                      if (s.has(t.identifier)) var r = s.get(t.identifier);
                      else (r = i.guid()), s.set(t.identifier, r);
                      e && s.delete(t.identifier), (t.__id = r);
                    }),
                    'touchmove' === t.type
                      ? c
                        ? u.call(this, { object: t, args: [e] })
                        : l.call(this, t, e)
                      : u.call(this, { object: t, args: [e] });
                };
              return {
                create: function (t) {
                  var r = t._universalHandler(h);
                  i.forin(e, function (i) {
                    n.add(t.attachEvent(t.document, i, r, e[i]));
                  });
                  var a = null,
                    s = t._universalHandler(function () {
                      clearTimeout(a),
                        (c = !0),
                        (a = o(function () {
                          return (c = !1);
                        }, 150));
                    });
                  n.add(
                    t.attachEvent(t.document, 'scroll', s, {
                      passive: !0,
                      capture: !0,
                    })
                  );
                },
                destroy: function (t) {
                  i.forof(n, function (e) {
                    return t.removeEvent(e);
                  }),
                    n.clear();
                },
              };
            };
          }.call(this, n(8).default, n(12).default, n(7).default));
        },
        function (t, e, n) {
          (function (t, n) {
            e.a = function () {
              var e = new t(),
                r = [],
                i = null,
                a = function () {
                  var t = this,
                    e = this.stamp,
                    a = this.viewport.zoomLevel;
                  if (this.zoomLevel !== a) {
                    clearTimeout(i);
                    var s = n.scrollingElement(),
                      c = s.scrollLeft;
                    (s = s.scrollTop),
                      (this.zoomLevel = a),
                      r.push([e, a, c, s]),
                      (i = o(function () {
                        var e = r[0],
                          n = r[r.length - 1],
                          i = n[0];
                        (e = t._getEventObject(
                          'zoom',
                          0,
                          {
                            zoomFrom: { level: e[1], x: e[2], y: e[3] },
                            zoomTo: { level: n[1], x: n[2], y: n[3] },
                            duration: i - e[0],
                          },
                          i
                        )),
                          (r.length = 0),
                          t._publishActions(e);
                      }, 100));
                  }
                };
              return {
                create: function (t) {
                  (t = t._universalHandler(a)), (this.captor = n.repeat(t));
                },
                destroy: function () {
                  this.captor.stop(), e.clear();
                },
              };
            };
          }.call(this, n(8).default, n(7).default));
        },
        function (t, n, r) {
          (function (t, r) {
            n.a = function () {
              var n,
                i =
                  void 0 !== e.hidden
                    ? { hidden: 'hidden', event: 'visibilitychange' }
                    : void 0 !== e.msHidden
                    ? { hidden: 'msHidden', event: 'msvisibilitychange' }
                    : void 0 !== e.webkitHidden
                    ? {
                        hidden: 'webkitHidden',
                        event: 'webkitvisibilitychange',
                      }
                    : null,
                o = i
                  ? (((n = {})[i.event] = { capture: !0 }), n)
                  : { focus: { capture: !0 }, blur: { capture: !0 } },
                a = { focus: 'windowfocus', blur: 'windowblur' },
                s = new t(),
                c = function (t) {
                  (t = i
                    ? this._getEventObject(
                        a[e[i.hidden] ? 'blur' : 'focus'],
                        this.window
                      )
                    : this._getEventObject(a[t.type], this.window)),
                    this._publishActions(t);
                };
              return {
                create: function (t) {
                  var e = t._universalHandler(c);
                  r.forin(o, function (n) {
                    s.add(t.attachEvent(t.window, n, e, o[n]));
                  });
                },
                destroy: function (t) {
                  r.forof(s, function (e) {
                    return t.removeEvent(e);
                  }),
                    s.clear();
                },
              };
            };
          }.call(this, r(8).default, r(7).default));
        },
        function (t, e, r) {
          (function (t) {
            var i = r(14),
              o = r.n(i);
            i = r(6);
            var a = r.n(i);
            i = r(18);
            var s = r.n(i);
            i = r(1);
            var c = r.n(i);
            i = r(15);
            var u = r(52),
              l = r(31),
              h = r(11);
            (i = (function (e) {
              function r(n, r, i) {
                var o = e.call(this) || this;
                return (
                  c()(a()(o), 'IGNORE_NODE_ATTRIBUTE', '__ym_wv_ign'),
                  c()(a()(o), 'eventsList', ['mutation']),
                  (o.indexer = r),
                  (o.originalHTML = o.indexer.html),
                  (o.target = n),
                  (o.watcher = new u.a(o.target, i)),
                  (o.queue = new l.a()),
                  (o._timer = t.timer()),
                  o.watcher.on('mutation', o.collectMutations.bind(a()(o))),
                  o
                );
              }
              s()(r, e);
              var i = r.prototype;
              return (
                (i.addChanges = function (e, n) {
                  for (
                    var r = arguments.length,
                      i = Array(2 < r ? r - 2 : 0),
                      o = 2;
                    o < r;
                    o++
                  )
                    i[o - 2] = arguments[o];
                  if (null != e[n] && 0 < i.length) {
                    var a,
                      s = e[n].length;
                    t.fastIterate(i, function (t, e) {
                      return (e.i = s + t);
                    }),
                      (e[n] = (a = e[n]).concat.apply(a, i));
                  }
                }),
                (i.collectMutations = function (t) {
                  var e = this;
                  this.queue.push(function () {
                    var n = e.processMutations(t.summary);
                    n.hasData &&
                      e.emit('mutation', { changes: n.store, stamp: t.stamp });
                  });
                }),
                (i.destroy = function () {
                  this.queue.start(!0),
                    this.off(),
                    this.watcher.off(),
                    this.watcher.stop();
                }),
                (i.cleanChangesObject = function (e) {
                  return (
                    t.forin(e, function (t) {
                      0 === e[t].length && delete e[t];
                    }),
                    e
                  );
                }),
                (i.initObserver = function () {
                  (this.initObserver = t.noop()),
                    this.watcher.start(),
                    this._timer.start();
                }),
                (i.processMutations = function (e) {
                  var n = this,
                    r = !1,
                    i = [];
                  return (
                    t.fastIterate(e, function (t, e) {
                      if (
                        e.target.parentNode &&
                        !h.c.isIgnoredNode(e.target.parentNode)
                      ) {
                        var o = n.changesObject;
                        !1 !==
                          (function () {
                            var t = e.type,
                              r = e.target,
                              i = n.indexer.getIndexedNodeId(r);
                            if (null == i) return !1;
                            switch (((r = [e, i, r, o]), t)) {
                              case 'childList':
                                return n.processTreeChanges.apply(n, r);
                              case 'attributes':
                                return n.processAttributesChanges.apply(n, r);
                              case 'characterData':
                                return n.processContentChanges.apply(n, r);
                            }
                          })() && ((r = !0), i.push(n.cleanChangesObject(o)));
                      }
                    }),
                    { store: i, hasData: r }
                  );
                }),
                (i.combineMutations = function (e, n) {
                  return t.reduce(
                    Object.keys(n),
                    function (t, e) {
                      var r;
                      return (
                        null == t[e] && (t[e] = []),
                        (t[e] = (r = t[e]).concat.apply(r, n[e])),
                        t
                      );
                    },
                    e
                  );
                }),
                (i.processTreeChanges = function (e, n, r, i) {
                  var o = this,
                    a = e.nextSibling,
                    s = e.previousSibling;
                  (e = (r = e.meta).addedNodes),
                    (r = void 0 === (r = r.removedNodes) ? [] : r);
                  var c = [],
                    u = [];
                  if (
                    (t.fastIterate(void 0 === e ? [] : e, function (e, r) {
                      o.indexer.reindexNodeTree(r, {
                        parentID: n,
                        callback: function (e, n) {
                          if (e) {
                            var i = t.combine(
                              { id: e.id, pa: e.parent, nm: e.name },
                              n === r
                                ? {
                                    pr: o.getIDForNode(s),
                                    nx: o.getIDForNode(a),
                                  }
                                : {}
                            );
                            e.content && (i.ct = e.content),
                              e.namespace && (i.ns = e.namespace),
                              (i.at = h.c.getAttributes(e.nativeNode)),
                              c.push(i);
                          }
                        },
                      });
                    }),
                    t.fastIterate(r, function (t, e) {
                      var r = {
                        id: o.indexer.removeNodeTree(e),
                        pa: n,
                        pr: o.getIDForNode(s),
                        nx: o.getIDForNode(a),
                      };
                      r.id && u.push(r);
                    }),
                    0 === c.length && 0 === u.length)
                  )
                    return !1;
                  this.addChanges.apply(this, [i, 'a'].concat(u)),
                    this.addChanges.apply(this, [i, 'b'].concat(c));
                }),
                (i.processAttributesChanges = function (t, e, r, i) {
                  var o,
                    a = t.meta;
                  (t = a.name), (r = a.oldValue);
                  var s = null === (a = a.newValue) || a === n;
                  this.addChanges(i, 'c', {
                    id: e,
                    at: ((o = {}), (o[t] = { n: a, o: r, r: s }), o),
                  });
                }),
                (i.processContentChanges = function (t, e, n, r) {
                  this.addChanges(r, 'd', {
                    id: e,
                    ct: { n: t.meta.newValue, o: t.meta.oldValue },
                  });
                }),
                (i.getIDForNode = function (t) {
                  if (t) {
                    var e = this.indexer.getNodeId(t);
                    return null != e
                      ? e
                      : (this.indexer.reindexNodeTree(t),
                        this.indexer.getNodeId(t));
                  }
                }),
                o()(r, [
                  {
                    key: 'changesObject',
                    get: function () {
                      return { a: [], b: [], c: [], d: [] };
                    },
                  },
                  {
                    key: 'html',
                    get: function () {
                      return this.originalHTML;
                    },
                  },
                ]),
                r
              );
            })(i.a)),
              (e.a = i);
          }.call(this, r(7).default));
        },
        function (e, n, r) {
          (function (e, i, o) {
            var a = r(6),
              s = r.n(a);
            a = r(18);
            var c = r.n(a);
            a = r(1);
            var u = r.n(a),
              l = r(11);
            (a = (function (n) {
              function r(t, e) {
                var r = n.call(this) || this;
                return (
                  u()(s()(r), 'eventsList', ['mutation']),
                  (r.recorder = e),
                  (r.paused = !0),
                  (r.element = t),
                  (r.document = t.ownerDocument),
                  (r.observer = null),
                  r.initMutationObserver(),
                  r
                );
              }
              c()(r, n);
              var a = r.prototype;
              return (
                (a.start = function () {
                  this.observer &&
                    this.observer.observe(this.element, {
                      childList: !0,
                      attributes: !0,
                      characterData: !0,
                      subtree: !0,
                      attributeOldValue: !0,
                      characterDataOldValue: !0,
                    });
                }),
                (a.stop = function () {
                  this.observer && this.observer.disconnect();
                }),
                (a.initMutationObserver = function () {
                  var n = this,
                    r = this.document.defaultView.MutationObserver;
                  r
                    ? (this.observer = new r(function () {
                        try {
                          for (
                            var t = arguments.length, e = Array(t), r = 0;
                            r < t;
                            r++
                          )
                            e[r] = arguments[r];
                          n.processMutations.apply(n, e);
                        } catch (t) {}
                      }))
                    : e.warn("Can't access MutationObserver of a window", t);
                }),
                (a.processMutations = function (t) {
                  var e = this;
                  t = i.toArray(t);
                  var n = { added: new o(), removed: new o() };
                  0 <
                    (t = i.reduceRight(
                      t,
                      function (t, r) {
                        var i = r.type,
                          o = r.target,
                          a = e.collectSummary(i, o, n, r);
                        return (
                          null != a &&
                            t.unshift({
                              target: o,
                              type: i,
                              meta: a,
                              nextSibling: r.nextSibling,
                              previousSibling: r.previousSibling,
                            }),
                          t
                        );
                      },
                      []
                    )).length &&
                    this.emit('mutation', {
                      summary: t,
                      stamp: this.recorder.stamp,
                    }),
                    n.added.clear(),
                    n.removed.clear();
                }),
                (a.collectSummary = function (t, e, n, r) {
                  switch (t) {
                    case 'childList':
                      if (
                        ((e = i.reduce(
                          r.addedNodes,
                          function (t, e) {
                            return (
                              !1 === n.added.has(e) &&
                                (t.push(e),
                                l.c.walk(e, function (t) {
                                  return (
                                    n.removed.has(t) && n.removed.delete(t),
                                    n.added.add(t)
                                  );
                                })),
                              t
                            );
                          },
                          []
                        )),
                        (r = i.reduce(
                          r.removedNodes,
                          function (t, e) {
                            return (
                              !1 === n.removed.has(e) &&
                                (t.push(e),
                                l.c.walk(e, function (t) {
                                  return n.removed.add(t);
                                })),
                              t
                            );
                          },
                          []
                        )),
                        0 < e.length || 0 < r.length)
                      )
                        return { addedNodes: e, removedNodes: r };
                      break;
                    case 'attributes':
                      (t = r.attributeName), (r = r.oldValue);
                      var o = e.getAttribute(t);
                      if (r !== o)
                        return {
                          name: t,
                          oldValue: l.c.normalizeAttributeValue(e, t, r),
                          newValue: l.c.normalizeAttributeValue(e, t, o),
                        };
                      break;
                    case 'characterData':
                      if (((r = r.oldValue), (e = e.textContent) !== r))
                        return { oldValue: r, newValue: e };
                  }
                }),
                r
              );
            })(r(15).a)),
              (n.a = a);
          }.call(this, r(3).default, r(7).default, r(8).default));
        },
        function (t, e, n) {
          (function (t) {
            var r = n(18),
              i = n.n(r);
            (r = (function (e) {
              function n(n) {
                void 0 === n && (n = []);
                var r = e.call(this) || this;
                return (
                  t.fastIterate(n, function (t, e) {
                    r.use(e);
                  }),
                  r
                );
              }
              i()(n, e);
              var r = n.prototype;
              return (
                (r.main = function (t, e) {
                  'function' == typeof e && e();
                }),
                (r.send = function (t) {
                  this.run(t, this.main.bind(this));
                }),
                n
              );
            })(n(33).a)),
              (e.a = r);
          }.call(this, n(7).default));
        },
        function (t, n, r) {
          (t = (function () {
            function t(t, n) {
              void 0 === t && (t = 'body'),
                void 0 === n && (n = {}),
                (this.root = 'string' == typeof t ? e.querySelector(t) : t),
                (this.ctx = n);
              var r =
                -1 !== navigator.appVersion.indexOf('Mac') ? 'macos' : 'other';
              (this.OS = r),
                (this.modifierCodes = {
                  91: 'super',
                  93: 'super',
                  224: 'super',
                  18: 'alt',
                  17: 'ctrl',
                  16: 'shift',
                  9: 'tab',
                  8: 'backspace',
                  46: 'delete',
                }),
                (this.keyOrder = {
                  super: 1,
                  ctrl: 2,
                  alt: 3,
                  shift: 4,
                  tab: 5,
                  delete: 6,
                  backspace: 6,
                }),
                (this.singleKeys = [4, 9, 8, 32, 37, 38, 39, 40, 46]),
                (this.keyDict = {
                  macos: {
                    91: '&#8984;',
                    93: '&#8984;',
                    224: '&#8984;',
                    18: '&#8997;',
                    17: '&#8963;',
                    16: '&#8679;',
                    9: '&#8677;',
                    8: '&#9003;',
                    46: '&#9003;',
                  },
                  other: {
                    91: '&#xff;',
                    93: '&#xff;',
                    224: '&#xff;',
                    18: 'Alt',
                    17: 'Ctrl',
                    16: 'Shift',
                    9: 'Tab',
                    8: 'Backspace',
                    46: 'Delete',
                  },
                  multi: {
                    32: 'SPACEBAR',
                    37: '&larr;',
                    38: '&uarr;',
                    39: '&rarr;',
                    40: '&darr;',
                    13: 'Enter',
                  },
                }),
                (this.initialModifier = null),
                (this.modifierPressed = 0),
                (this.events = []),
                (this.modifiers = {}),
                (this.captors = []),
                (this.filters = []),
                (this.keyStroke = []),
                (this.holding = []),
                this.initHandler();
            }
            var n = t.prototype;
            return (
              (n.onCapture = function (t) {
                'function' == typeof t &&
                  0 > this.captors.indexOf(t) &&
                  this.captors.push(t);
              }),
              (n.addElementFilter = function (t) {
                'function' == typeof t &&
                  0 > this.captors.indexOf(t) &&
                  this.filters.push(t);
              }),
              (n.applyFilters = function (t) {
                var e = this;
                return this.filters.reduce(function (n, r) {
                  return !0 === n && n && r.call(e, t);
                }, !0);
              }),
              (n.initHandler = function () {
                this.attachEvent('keydown', this.keydownHandler),
                  this.attachEvent('keyup', this.keyupHandler);
              }),
              (n.getKeystroke = function (t) {
                var e = this,
                  n = this.keyOrder;
                return t
                  .map(function (t) {
                    var n = t.keyCode,
                      r = e.modifierCodes[t.keyCode],
                      i = e.getKeySymbol(t);
                    return {
                      id: n,
                      key: e.getKeySymbol(t),
                      isMeta: !!r && /^&#/.test(i),
                      modifier: r,
                    };
                  })
                  .sort(function (t, e) {
                    return (n[t.modifier] || 100) - (n[e.modifier] || 100);
                  });
              }),
              (n.getKeySymbol = function (t) {
                return (
                  this.keyDict[this.OS][t.keyCode] ||
                  this.keyDict.multi[t.keyCode] ||
                  String.fromCharCode(t.keyCode)
                );
              }),
              (n.startCapture = function (t) {
                (this.initialModifier = t),
                  this.pushKey(t),
                  this.cancelCapture();
              }),
              (n.sendKeys = function (t, e) {
                var n = this;
                if ((void 0 === e && (e = !1), 1 < t.length || e)) {
                  var r = this.getKeystroke(t);
                  this.captors.forEach(function (t) {
                    return t.call(n, r, e);
                  });
                }
              }),
              (n.endCapture = function () {
                var t = this;
                (this._keyStroke = this.keyStroke.slice(0)),
                  clearTimeout(this._endCapture),
                  (this._endCapture = o(function () {
                    t.sendKeys(t._keyStroke);
                  }));
              }),
              (n.pushKey = function (t) {
                !1 === this.isCaptured(t) && this.keyStroke.push(t);
              }),
              (n.removeKey = function (t) {
                this.keyStroke = this.keyStroke.reduce(function (e, n) {
                  return n.keyCode !== t.keyCode && e.push(n), e;
                }, []);
              }),
              (n.cancelCapture = function () {
                this.isModifierPressed()
                  ? o(this.cancelCapture.bind(this), 100)
                  : (this.keyStroke.length = 0);
              }),
              (n.reset = function () {
                var t = this;
                this._reset = o(function () {
                  t.resetImmediate();
                }, 300);
              }),
              (n.resetImmediate = function () {
                (this.modifierPressed = 0),
                  (this.keyStroke.length = 0),
                  (this.holding.length = 0),
                  clearTimeout(this._endCapture);
              }),
              (n.cancelReset = function () {
                clearTimeout(this._reset);
              }),
              (n.keydownHandler = function (t) {
                this.applyFilters(t.target) &&
                  !1 === this.isInputWithShift(t) &&
                  !t.repeat &&
                  0 > this.held(t.keyCode) &&
                  (this.holding.push(t.keyCode),
                  this.isModifier(t.keyCode) && !this.isModifierPressed()
                    ? ((this.modifierPressed += 1),
                      this.startCapture(t),
                      this.reset())
                    : this.isModifierPressed()
                    ? (this.cancelReset(), this.pushKey(t), this.endCapture())
                    : (this.resetImmediate(), this.pushKey(t)));
              }),
              (n.keyupHandler = function (t) {
                if (this.applyFilters(t.target)) {
                  var e = this.isModifier(t.keyCode),
                    n = this.held(t.keyCode);
                  0 <= n && this.holding.splice(n, 1),
                    e &&
                      this.isModifierPressed() &&
                      ((this.modifierPressed = 0), (this.holding.length = 0)),
                    1 === this.keyStroke.length &&
                      ((e = this.keyStroke[0]),
                      0 <= this.singleKeys.indexOf(e.keyCode) &&
                        (this.sendKeys([e], !0), this.resetImmediate())),
                    this.removeKey(t),
                    clearTimeout(this._endCapture);
                }
              }),
              (n.attachEvent = function (t, e) {
                var n = this;
                if ('function' == typeof e) {
                  var r = this.ctx.attachEvent(
                    this.ctx.document,
                    t,
                    function (t) {
                      ((n.root && n.root.contains(t.target)) ||
                        t.target === n.root) &&
                        n.ctx.errorLogger(function () {
                          e.call(n, t);
                        });
                    },
                    !0
                  );
                  this.events.push(function () {
                    n.ctx.removeEvent(r);
                  });
                }
              }),
              (n.held = function (t) {
                return this.holding.indexOf(t);
              }),
              (n.isModifier = function (t) {
                return null != this.modifierCodes[t];
              }),
              (n.isModifierPressed = function () {
                return 0 < this.modifierPressed;
              }),
              (n.isInitialModifier = function (t) {
                return (
                  !!this.initialModifier &&
                  this.initialModifier.keyCode === t.keyCode
                );
              }),
              (n.isCaptured = function (t) {
                return (
                  null !=
                  this.keyStroke.reduce(function (e, n) {
                    return null == e && n.keyCode === t.keyCode && (e = n), e;
                  }, null)
                );
              }),
              (n.isInputWithShift = function (t) {
                return (
                  'INPUT' === t.target.nodeName &&
                  (t.shiftKey ||
                    32 === t.keyCode ||
                    'shift' === this.modifierCodes[t.keyCode])
                );
              }),
              (n.destroy = function () {
                var t;
                for (this.resetImmediate(); (t = this.events.pop()); ) t();
                this.filters.length = 0;
              }),
              t
            );
          })()),
            (n.a = t);
        },
        function (e, n, r) {
          (function (e) {
            var i = r(1),
              a = r.n(i),
              s = r(15),
              c = r(30),
              u = r(2),
              l = r(16),
              h = r(0);
            i = 'HTMLMediaElement' in t;
            var f = {},
              d = h.IterableUtils.toList([
                'addEventListener',
                'removeEventListener',
              ]),
              p = (function () {
                function t() {
                  a()(this, 'originalDescriptors', new e()),
                    a()(this, 'mocked', !1),
                    a()(this, 'events', new s.a(['setter', 'method'])),
                    u.ObjectUtils.assign(f, l.Tools.apiMock(HTMLMediaElement));
                }
                var n = t.prototype;
                return (
                  (n.descriptor = function (t, e) {
                    return Object.getOwnPropertyDescriptor(t, e);
                  }),
                  (n.mock = function () {
                    var t = this,
                      e = HTMLMediaElement.prototype,
                      n = this;
                    h.IterableUtils.forof(f.properties, function (r) {
                      if (d.has(r)) return !0;
                      var i = t.descriptor(e, r);
                      if (i) {
                        t.originalDescriptors.set(r, i);
                        var o = u.ObjectUtils.combine(i);
                        i.get &&
                          (o.get = function () {
                            return i.get.call(this);
                          }),
                          i.set &&
                            (o.set = function (t) {
                              return (
                                n.setterInvoked(this, r, t), i.set.call(this, t)
                              );
                            }),
                          Object.defineProperty(e, r, o);
                      }
                    }),
                      h.IterableUtils.forof(f.methods, function (r) {
                        if (d.has(r)) return !0;
                        var i = t.descriptor(e, r);
                        t.originalDescriptors.set(r, i),
                          Object.defineProperty(e, r, {
                            configurable: !0,
                            value: function () {
                              for (
                                var t,
                                  e = arguments.length,
                                  o = Array(e),
                                  a = 0;
                                a < e;
                                a++
                              )
                                o[a] = arguments[a];
                              return (
                                n.methodInvoked(this, r, o),
                                (t = i.value).call.apply(t, [this].concat(o))
                              );
                            },
                          });
                      }),
                      (this.mocked = !0);
                  }),
                  (n.remove = function () {
                    this.events.off();
                    var t = HTMLMediaElement.prototype;
                    h.IterableUtils.forof(this.originalDescriptors, function (
                      e,
                      n
                    ) {
                      delete t[n], Object.defineProperty(t, n, e);
                    }),
                      (this.mocked = !1);
                  }),
                  (n.setterInvoked = function (t, e, n) {
                    var r = this;
                    this.mocked &&
                      o(function () {
                        r.send(t, 'setter', { name: e, value: n });
                      });
                  }),
                  (n.methodInvoked = function (t, e, n) {
                    var r = this;
                    this.mocked &&
                      o(function () {
                        (n = n.map(function (t) {
                          return t instanceof Image ? Object(c.b)(t) : t;
                        })),
                          r.send(t, 'method', { name: e, args: n });
                      });
                  }),
                  (n.send = function (t, e, n) {
                    this.events.emit(e, u.ObjectUtils.combine(n, { media: t }));
                  }),
                  t
                );
              })();
            a()(p, 'supported', i), (n.a = p);
          }.call(this, r(12).default));
        },
        function (t, n, r) {
          (function (t) {
            r.d(n, 'a', function () {
              return i;
            });
            var i = function (n, r) {
              return (
                void 0 === r && (r = 'body'),
                new t(function (t) {
                  null == n.querySelector(r) ||
                  e.hidden ||
                  e.msHidden ||
                  e.webkitHidden
                    ? (function i() {
                        null == n.querySelector(r) ||
                        e.hidden ||
                        e.msHidden ||
                        e.webkitHidden
                          ? o(i, 100)
                          : t();
                      })()
                    : t();
                })
              );
            };
          }.call(this, r(22).Promise));
        },
        function (t, e, n) {
          (function (t, r) {
            var i = n(5),
              o = n.n(i);
            i = n(14);
            var a = n.n(i);
            i = n(6);
            var s = n.n(i);
            i = n(18);
            var c = n.n(i);
            i = n(1);
            var u = n.n(i),
              l = n(11);
            i = n(15);
            var h = n(33),
              f = n(0),
              d = n(2),
              p = n(23),
              m = n(16),
              g = n(3),
              v = n(17),
              y = 'attributes namespace content parent next prev hidden'.split(
                ' '
              );
            (i = (function (e) {
              function n(n, i, o) {
                var a = void 0 !== (i = (void 0 === i ? {} : i).disabled) && i;
                return (
                  (i = e.call(this) || this),
                  u()(s()(i), 'eventsList', [
                    'initialIndex:once:memory',
                    'add',
                    'remove',
                    'node',
                  ]),
                  (i.recorder = o),
                  (i.disabled = a),
                  (i.nextID = 0),
                  (i.closed = !1),
                  (i.dom = new t()),
                  (i.index = new t()),
                  (i.initialDOM = new r()),
                  (i.middleware = new h.b()),
                  (i.document = n),
                  (i.quickAccess = {}),
                  i
                );
              }
              c()(n, e);
              var i = n.prototype;
              return (
                (i.initialIndex = function () {
                  this.fastIndex(this.document.documentElement);
                }),
                (i.use = function (t) {
                  this.middleware.use(t);
                }),
                (i.initDOMCache = function () {
                  this.domCache = new t(this.index);
                }),
                (i.writeCache = function (t, e, n) {
                  this.domCache && this.domCache.set(t, { node: e, data: n });
                }),
                (i.findCache = function (t) {
                  if (this.domCache) return this.domCache.get(t);
                }),
                (i.addQuckAccessItem = function (t, e) {
                  null == this.quickAccess[t] &&
                    null == this[t] &&
                    ((this.quickAccess[t] = e),
                    Object.defineProperty(this, t, {
                      get: function () {
                        return this.quickAccess[t];
                      },
                    }));
                }),
                (i.addToIndex = function (t, e, n) {
                  if (
                    (void 0 === n && (n = null), (t = this.middleware.run(t)))
                  ) {
                    this.emit('node', t);
                    var r = t._DOMIndexerInfo;
                    if (!1 === this.dom.has(t) || null == r) {
                      n = this.generateNodeID(n);
                      var i = t.tagName || t.nodeName;
                      (r = {
                        id: n,
                        name: i,
                        parent: e,
                        nativeNode: t,
                        namespace: l.c.getNamespace(t),
                        attributes: l.c.getAttributes(t),
                        content: l.c.getContent(t),
                      }),
                        this.recorder &&
                          'INPUT' === i &&
                          ((i = (e = v.a.validate(t, this.recorder.options))
                            .forceRecord),
                          (e = !e.isAllowed && !i),
                          (i = r.attributes.value),
                          (r.attributes.value = e ? v.a.encode(i) : i),
                          e && (r.hidden = !0)),
                        this.domCache && this.writeCache(n, t, r),
                        this.dom.set(t, r),
                        this.index.set(n, t),
                        (t._DOMIndexerID = n),
                        (t._DOMIndexerInfo = r);
                    }
                    return this.emit('add', r), r;
                  }
                  g.default.warn("Can't index undefined node");
                }),
                (i.clear = function (t) {
                  void 0 === t && (t = !0),
                    f.IterableUtils.forof(
                      f.IterableUtils.keys(this.dom),
                      function (t) {
                        f.IterableUtils.forof(
                          ['_DOMIndexerID', '_DOMIndexerInfo'],
                          function (e) {
                            (t[e] = null), delete t[e];
                          }
                        );
                      }
                    ),
                    t && (this.document = null),
                    this.dom.clear(),
                    this.index.clear();
                }),
                (i.dump = function () {
                  return { dom: new t(this.dom), index: new t(this.index) };
                }),
                (i.dumpRestore = function (t) {
                  d.ObjectUtils.assign(this, t),
                    (this.document.body.innerHTML = '');
                }),
                (i.findByID = function (t) {
                  return this.find(t);
                }),
                (i.findByNode = function (t) {
                  return this.get(t);
                }),
                (i.find = function (t) {
                  if (null != t) {
                    var e = this.index.get(t);
                    return null == e && this.domCache
                      ? (t = this.findCache(t)) && t.node
                      : e;
                  }
                }),
                (i.findInfo = function (t) {
                  return this.dom.get(this.find(t));
                }),
                (i.generateNodeID = function (t) {
                  return null != t ? t : this.nextID++;
                }),
                (i.get = function (t) {
                  return this.dom.get(t);
                }),
                (i.getNodeId = function (t) {
                  return (t = this.get(t)) && t.id;
                }),
                (i.getIndexedNodeId = function (t) {
                  var e = this.getNodeId(t);
                  return null == e
                    ? (this.reindexNodeTree(t), this.getNodeId(t))
                    : e;
                }),
                (i.getNodesIds = function (t) {
                  var e = this;
                  return f.IterableUtils.toArray(t).map(function (t) {
                    return {
                      id: e.getNodeId(t),
                      nodes: e.getNodesIds(t.childNodes),
                    };
                  });
                }),
                (i.reindexNodeTree = function (t, e) {
                  var n = this,
                    r = void 0 === e ? {} : e,
                    i = r.returnAll;
                  i = void 0 !== i && i;
                  var o = r.callback,
                    a = void 0 === o ? null : o,
                    s = void 0 === (r = r.parentID) ? null : r;
                  if (t) {
                    var c = [];
                    return (
                      (t.parentNode || s) &&
                        ((a = p.FunctionUtils.toFunction(a)),
                        l.c.each(t, function (t, e) {
                          if (
                            null !=
                            (s =
                              (e.parentNode && n.getNodeId(e.parentNode)) || s)
                          ) {
                            var r = n.addToIndex(e, s);
                            c.push(r), a(r, e);
                          }
                        })),
                      i ? c : t._DOMIndexerID
                    );
                  }
                }),
                (i.removeFromIndex = function (t) {
                  var e = this.getNodeId(t);
                  return (
                    this.dom.delete(t),
                    this.index.delete(e),
                    f.IterableUtils.toArray(t.childNodes).map(
                      this.removeFromIndex.bind(this)
                    ),
                    this.emit('remove', t),
                    e
                  );
                }),
                (i.replaceBody = function (t) {
                  this.removeNodeTree(this.BODY.id);
                  var e = this.BODY.nativeNode;
                  delete e._DOMIndexerInfo,
                    delete e._DOMIndexerID,
                    this.addToIndex(e, this.HTML.id, t);
                }),
                (i.removeNodeTree = function (t, e) {
                  var n = this;
                  if ((void 0 === e && (e = !1), t)) {
                    var r = [],
                      i = this.getNodeId(t);
                    return (
                      l.c.each(t, function (t, e) {
                        var i = n.getNodeId(e);
                        n.dom.delete(e),
                          n.index.delete(i),
                          n.emit('remove', e),
                          r.push(i);
                      }),
                      e ? r : i
                    );
                  }
                }),
                (i.fastIndex = function (t) {
                  if (!this.disabled) {
                    var e = this.addToIndex.bind(this),
                      n = this.initialDOM.add.bind(this.initialDOM);
                    l.c.each(t, function (t, r) {
                      var i = e(r, r.parentNode && r.parentNode._DOMIndexerID);
                      n(o()({}, i));
                    }),
                      this.initialDOM.forEach(function (t) {
                        var e = t.nativeNode,
                          n = e.previousSibling;
                        (e = e.nextSibling),
                          n && n._DOMIndexerID && (t.prev = n._DOMIndexerID),
                          e && e._DOMIndexerID && (t.next = e._DOMIndexerID);
                      });
                  }
                }),
                (i.isIndexed = function (t) {
                  return this.dom.has(t);
                }),
                (i.showMissingNodes = function (t) {
                  var e = this;
                  void 0 === t && (t = !1),
                    t &&
                      m.Tools.measure('Show missing nodes', function () {
                        var t = l.c.all(e.document.documentElement);
                        f.IterableUtils.fastIterate(t, function (t, n) {
                          !1 === e.dom.has(n) &&
                            g.default.log('Missing node', n);
                        }),
                          g.default.log(
                            'Index diff: [DOM: ' +
                              t.length +
                              '] [INDEX: ' +
                              e.dom.size +
                              '] [DIFF: ' +
                              (e.dom.size - t.length) +
                              ']'
                          );
                      });
                }),
                (i.getCurrentHtml = function () {
                  var t = f.IterableUtils.map(this.dom, function (t) {
                    return t[1];
                  });
                  return n.simplify(t);
                }),
                (i.getDocument = function () {
                  return this.document;
                }),
                (i.setDocument = function (t) {
                  this.document = t;
                }),
                a()(n, [
                  {
                    key: 'HTML',
                    get: function () {
                      return this.document.documentElement._DOMIndexerInfo;
                    },
                  },
                  {
                    key: 'BODY',
                    get: function () {
                      return this.document.body._DOMIndexerInfo;
                    },
                  },
                  {
                    key: 'html',
                    get: function () {
                      return n.simplify(this.initialDOM);
                    },
                  },
                ]),
                n
              );
            })(i.a)),
              u()(i, 'simplify', function (t) {
                return f.IterableUtils.map(t, function (t) {
                  var e = { id: t.id, name: t.name.toLowerCase() };
                  return (
                    f.IterableUtils.forof(y, function (n) {
                      null != t[n] && (e[n] = t[n]);
                    }),
                    e
                  );
                });
              }),
              u()(i, 'toNodesTree', function (t) {
                var e = {};
                return (
                  (t = f.IterableUtils.toArray(t)),
                  f.IterableUtils.forof(t, function (t) {
                    if (null == e[t.id]) {
                      var n = d.ObjectUtils.combine(t);
                      (e[t.id] = n),
                        null != t.parent &&
                          (t = e[t.parent]) &&
                          ((t.children = t.children || []), t.children.push(n));
                    }
                  }),
                  e[0]
                );
              }),
              (e.a = i);
          }.call(this, n(12).default, n(8).default));
        },
        function (n, r, i) {
          (function (n) {
            var a = i(5),
              s = i.n(a);
            a = i(14);
            var c = i.n(a);
            a = i(1);
            var u = i.n(a),
              l = i(3),
              h = i(10);
            (a = (function () {
              function r(e) {
                if (
                  (void 0 === e && (e = t),
                  u()(this, '_cancelMainHandler', null),
                  u()(this, 'subscriptions', {}),
                  (this.window = n.isIframe(e) ? e.parent : e),
                  e.Ya || (e.Ya = {}),
                  e.Ya._metrika || (e.Ya._metrika = {}),
                  e.Ya._metrika._m)
                )
                  return e.Ya._metrika._m;
                (this.targetWindow = e),
                  (e.Ya._metrika._m = this),
                  (e = this.targetWindow.Ya._metrika);
                var r = this.targetWindow.Ya._metrika.fi || '';
                return (
                  (r = /^ym-/.test(r) ? r : 'ym-' + n.guid()),
                  (e.fi = r),
                  (this.identifier = this.targetWindow.Ya._metrika.fi),
                  this._handleMessages(),
                  this
                );
              }
              var i = r.prototype;
              return (
                (i.send = function (t, e) {
                  var n,
                    r = this,
                    i = void 0 === e ? {} : e,
                    a = i.data,
                    s = i.onResponse,
                    c = i.onTimeout,
                    u = i.receiver,
                    h = i.awaitResponse,
                    f = i.timeoutTime,
                    d = null,
                    p = !1,
                    m = !1,
                    g = [],
                    v = Date.now();
                  'function' == typeof s &&
                    ((p = !0),
                    (d = t + '.' + this.timestamp),
                    this.listenOnce(function (t) {
                      var e = t.data,
                        i = e._ym_cancel_response,
                        o = e.data;
                      if (e.type !== d) return !1;
                      i
                        ? l.default.warn(
                            'Seems like you forgot to call `answer` in a message handler. This message requires response.'
                          )
                        : ((m = !0),
                          s(o, {
                            origin: t.origin,
                            location: r.targetWindow.location.href,
                            identifier: r.identifier,
                          }),
                          clearTimeout(n));
                    }, this.targetWindow)),
                    d && g.push('response:' + d),
                    (function e() {
                      if (
                        (r._sendMessage({
                          data: a,
                          type: t,
                          target: r._getReceiver(u),
                          flags: g,
                        }),
                        h && p)
                      ) {
                        var i = f;
                        void 0 === i && (i = 3e4),
                          (i = Date.now() - v >= i),
                          !1 === m &&
                            (i
                              ? 'function' == typeof c && c()
                              : (n = o(e, 100)));
                      }
                    })();
                }),
                (i.subscribe = function (t, e) {
                  var n = this._createSubscriptionsGroup(t);
                  if (!1 !== this._isSubscribed(n, e))
                    throw Error(
                      'This callback has already been subscribed to ' + t
                    );
                  n.push(e);
                }),
                (i.unsubscribe = function (t, e) {
                  var r = this._getSubcribers(t);
                  !0 === this._isSubscribed(r, e) && n.removeFromArray(r, e);
                }),
                (i.unsubscribeAll = function (t) {
                  this._getSubcribers(t).splice(0);
                }),
                (i.listen = function (t) {
                  var e = this;
                  return (
                    this._attachEvent('message', t),
                    function () {
                      return e._removeEvent('message', t);
                    }
                  );
                }),
                (i.listenOnce = function (t, e) {
                  var n = this;
                  e = e || this.window;
                  var r = function (e) {
                      !1 !== t(e) && i();
                    },
                    i = function () {
                      n._removeEvent('message', r, e);
                    };
                  return this._attachEvent('message', r, e), i;
                }),
                (i._attachEvent = function (t, e, n) {
                  var r = this;
                  return (
                    (n || this.window).addEventListener(t, e),
                    function () {
                      return r._removeEvent(t, e);
                    }
                  );
                }),
                (i._createSubscriptionsGroup = function (t) {
                  return this._getSubcribers(t);
                }),
                (i._isSubscribed = function (t, e) {
                  return e && 0 <= t.indexOf(e);
                }),
                (i._removeEvent = function (t, e, n) {
                  (n || this.window).removeEventListener(t, e);
                }),
                (i._getSubcribers = function (t) {
                  return (
                    this.subscriptions[t] || (this.subscriptions[t] = []),
                    this.subscriptions[t]
                  );
                }),
                (i._sendMessage = function (t) {
                  var e = void 0 === t ? {} : t;
                  t = e.target;
                  var n = e.flags;
                  if (
                    ((n = void 0 === n ? [] : n),
                    (e = {
                      _ym_messenger: !0,
                      _ym_identifier: this.identifier,
                      type: e.type,
                      data: e.data,
                    }),
                    n && 0 < n.length)
                  )
                    for (var r = 0, i = n.length; r < i; r++) {
                      var o = n[r].split(':');
                      e['_ym_' + o[0]] = o[1] || !0;
                    }
                  this._postMessage(e, t);
                }),
                (i._postMessage = function (t, e) {
                  (e || this.window).postMessage(t, '*');
                }),
                (i._getReceiver = function (t) {
                  if (null != t) {
                    if (t.postMessage) return t;
                    if (t.contentWindow) return t.contentWindow;
                  }
                }),
                (i._handleMessages = function () {
                  var t = this;
                  if (null == this._cancelMainHandler) {
                    var e = this._attachEvent(
                      'message',
                      function (e) {
                        var n = e.data || {},
                          r = n._ym_response,
                          i = n._ym_identifier,
                          a = n.data,
                          c = n.type;
                        if (
                          !0 === n._ym_messenger &&
                          c &&
                          !/\.([0-9]+)$/.test(c)
                        ) {
                          n = t._getSubcribers(c) || [];
                          var u = t._findIframe(e.source, i);
                          if (null === u)
                            l.default.warn('Cannot find iframe with id ' + i);
                          else {
                            var h = { id: i, sender: u, data: a, type: c };
                            for (e = 0, i = n.length; e < i; e++) {
                              var f = n[e];
                              r
                                ? (function () {
                                    var e = {
                                        type: r,
                                        target: u.contentWindow,
                                      },
                                      n = 2 === f.length,
                                      i = null,
                                      a = function (r) {
                                        clearTimeout(i),
                                          (r = n
                                            ? s()({}, e, { data: r })
                                            : s()({}, e, {
                                                flags: ['cancel_response'],
                                              })),
                                          t._sendMessage(r);
                                      };
                                    n
                                      ? ((i = o(function () {
                                          l.default.warn(
                                            'Response has been canceled because `answer` was never called'
                                          ),
                                            (n = !1),
                                            a();
                                        }, 2e3)),
                                        f(h, a))
                                      : (f(h), a());
                                  })()
                                : f(h);
                            }
                          }
                        }
                      },
                      this.targetWindow
                    );
                    this._cancelMainHandler = function () {
                      e(), (t._cancelMainHandler = null);
                    };
                  }
                }),
                (i._findIframe = function (t, r) {
                  var i = this,
                    o = [].slice.call(e.querySelectorAll('iframe'));
                  return (
                    n.find(o, function (e) {
                      if (e.contentWindow === t) return !0;
                      if (h.DOMUtils.isBlankOrSameOriginIframe(e, i.win))
                        try {
                          return e.contentWindow.Ya._metrika.fi === r;
                        } catch (t) {}
                      return !1;
                    }) || null
                  );
                }),
                c()(r, [
                  {
                    key: 'timestamp',
                    get: function () {
                      return n.now();
                    },
                  },
                ]),
                r
              );
            })()),
              (r.a = a);
          }.call(this, i(7).default));
        },
        function (n, r, i) {
          (function (n) {
            var o = i(5),
              a = i.n(o),
              s = i(3);
            (o = (function () {
              function r(n, r, i) {
                void 0 === n && (n = t),
                  void 0 === r && (r = e),
                  Object.defineProperty(this, '_indexer', { value: i }),
                  (this.window = n),
                  (this.document = r),
                  (this.indexer = this._indexer),
                  (this.selection = this.window.getSelection());
              }
              var i = r.prototype;
              return (
                (i.getPageSelection = function () {
                  var t = this.getSelection();
                  if (t) {
                    var e = this.indexer.getNodeId(t.startNode),
                      n = this.indexer.getNodeId(t.endNode);
                    return (
                      this.restoreIndexer(),
                      a()({}, t, { startNode: e, endNode: n })
                    );
                  }
                }),
                (i.restorePageSelection = function (t) {
                  if (t) {
                    var e = this.indexer.find(t.startNode),
                      r = this.indexer.find(t.endNode);
                    this.restoreIndexer(),
                      n.isDOMNode(e) &&
                        n.isDOMNode(r) &&
                        this.restoreSelection(
                          a()({}, t, { startNode: e, endNode: r })
                        );
                  }
                }),
                (i.getSelection = function () {
                  if (0 < this.selection.rangeCount) {
                    var t =
                      this.selection.getRangeAt(0) ||
                      this.document.createRange();
                    return {
                      start: t.startOffset,
                      end: t.endOffset,
                      startNode: t.startContainer,
                      endNode: t.endContainer,
                    };
                  }
                }),
                (i.restoreSelection = function (t) {
                  var e = t.start,
                    n = t.end,
                    r = t.startNode;
                  t = t.endNode;
                  try {
                    var i = r.ownerDocument,
                      o = i.defaultView.getSelection(),
                      a = i.createRange();
                    a.setStart(r, e),
                      a.setEnd(t, n),
                      o.removeAllRanges(),
                      o.addRange(a);
                  } catch (i) {
                    s.default.log(
                      {
                        start: { startNode: r, start: e },
                        end: { endNode: t, end: n },
                      },
                      i
                    );
                  }
                }),
                (i.getSelectionFor = function (t) {
                  if (/text|search|password|tel|url/.test(t.type))
                    return { start: t.selectionStart, end: t.selectionEnd };
                }),
                (i.restoreSelectionFor = function (t, e) {
                  e &&
                    null != e.start &&
                    null != e.end &&
                    /text|search|password|tel|url/.test(t.type) &&
                    ((t.selectionStart = e.start), (t.selectionEnd = e.end));
                }),
                (i.clear = function () {
                  var t = this.document.createRange();
                  t.setStart(this.document.body, 0),
                    t.setEnd(this.document.body, 0),
                    this.selection.removeAllRanges(),
                    this.selection.addRange(t);
                }),
                (i.setIndexer = function (t) {
                  t !== this.indexer && (this.indexer = t);
                }),
                (i.restoreIndexer = function () {
                  this.indexer = this._indexer;
                }),
                r
              );
            })()),
              (r.a = o);
          }.call(this, i(7).default));
        },
        function (t, e, n) {
          (function (t) {
            var r = n(4),
              i = n(3),
              o = {
                doNotTrack: function () {
                  return !0 !== navigator.doNotTrack;
                },
                localStorage: function () {
                  try {
                    return (
                      r.a.localStorage.setItem('test', 'value'),
                      r.a.localStorage.removeItem('test'),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                },
                defineProperty: function () {
                  try {
                    return (
                      Object.defineProperty({}, 'test', { value: 123 }), !0
                    );
                  } catch (t) {
                    return !1;
                  }
                },
              };
            e.a =
              (t.forin(o, function (t) {
                if (!o[t]())
                  return i.default.log('Feature not supported: ' + t), !1;
              }),
              !0);
          }.call(this, n(7).default));
        },
        function (r, i, o) {
          (function (r) {
            var a = o(32),
              s = o.n(a);
            a = o(12);
            var c = o(0),
              u = o(19),
              l = o(2),
              h = {
                items: {
                  extnameFinder: /\.(css|png|gif|svg|jp[e]?g|mp4|ogv|webm|webp|mp3|ico|woff|ttf|eot)/gi,
                  urlPartsFinder: /([?.\/]*)/gi,
                  anchorFinder: /^(?!#).*([#]+)/g,
                  cssURLFinder: /url\(['"]?((?!#|data|blob))([^()'"]+)['"]?\)/g,
                  URLImportFinder: /@import ['"]((?!#|data|blob)([^()'"]+))['"]/g,
                  protocolMissing: /^(?!http[s]?).*/,
                  dataurlTest: /^(data|blob):/,
                  selectorTest: /^#(.*)/,
                  protocolIncomplete: /^(http[s]?)?(:?\/\/)/,
                  resourceFinder: /{{RESOURCE_URL}}/,
                  proxiedURL: /proxy([^?]*)\?url=/i,
                  relativePath: /^(?!\\)/,
                },
                get: function (t) {
                  return this.items[t];
                },
                reset: function (t) {
                  this.items[t].lastIndex = 0;
                },
                test: function (t, e) {
                  var n = this.get(t);
                  return this.reset(t), n.test(e);
                },
                resetMultiple: function () {
                  for (
                    var t, e = this, n = arguments.length, r = Array(n), i = 0;
                    i < n;
                    i++
                  )
                    r[i] = arguments[i];
                  (r = (t = []).concat.apply(t, r)),
                    c.IterableUtils.fastIterate(r, function (t, n) {
                      return e.reset(n);
                    });
                },
                resetAll: function () {
                  this.resetMultiple(c.IterableUtils.keys(this.items));
                },
              },
              f = {
                location: null,
                proxy: null,
                base: null,
                window: ('object' == typeof t && t) || null,
                document: ('object' == typeof e && e) || null,
              },
              d = new a.default(),
              p = new a.default(),
              m = function () {
                var t = (function (t) {
                  return 'string' == typeof t
                    ? URL.parse
                      ? URL.parse(t)
                      : new URL(t)
                    : t;
                })(
                  (function () {
                    if (f.base) return f.base;
                    if (f.document) {
                      var t = f.document.querySelector('base[href]');
                      return t ? t.href : f.location;
                    }
                    return f.location;
                  })()
                );
                return (f.location = {
                  host: t.host,
                  protocol: t.protocol,
                  path: (t.pathname || t.path || '').replace(/[^\/]*$/, ''),
                });
              },
              g = [];
            (a = Object.defineProperties(
              {
                regexp: h,
                patchCSS: function (t, e) {
                  var n = this,
                    r = (void 0 === e ? {} : e).location,
                    i = void 0 === r ? null : r,
                    o = {
                      cssURLFinder: function (t) {
                        return "url('" + t + "')";
                      },
                      URLImportFinder: function (t) {
                        return '@import "' + t + '"';
                      },
                    };
                  return (
                    ['cssURLFinder', 'URLImportFinder'].forEach(function (t) {
                      return h.reset(t);
                    }),
                    ['cssURLFinder', 'URLImportFinder'].reduce(function (t, e) {
                      return n.patchURLS(t, h.get(e), i, o[e]);
                    }, t)
                  );
                },
                patchURLS: function (t, e, r, i) {
                  var o = this,
                    a = t,
                    s =
                      'function' == typeof i
                        ? i
                        : function (t) {
                            return t;
                          };
                  return (
                    'string' == typeof t &&
                      t.match(e) &&
                      (a = t.replace(e, function () {
                        var t = o.patchURL(
                          2 >= arguments.length ? n : arguments[2],
                          { location: r }
                        );
                        return s(t);
                      })),
                    a
                  );
                },
                patchURL: function (t, e) {
                  var n = this,
                    r = void 0 === e ? {} : e,
                    i = r.location,
                    o = void 0 === i ? null : i,
                    a = void 0 !== (r = r.split) && r;
                  return 'string' == typeof t
                    ? (function (t) {
                        return a ? t.split(',') : [t];
                      })(t)
                        .reduce(function (t, e) {
                          var r = e.trim().split(' '),
                            i = r[0];
                          return (
                            (r = r.slice(1)),
                            (i = n.applyPatch(i, o)),
                            t.push([i].concat(r).join(' ')),
                            t
                          );
                        }, [])
                        .join(', ')
                    : t;
                },
                applyPatch: function (t, e) {
                  var n = h.test('relativePath', t),
                    i = this.getRelativeLocation(e),
                    o = i.host,
                    a = i.protocol;
                  return (
                    (i = i.path || i.pathname || ''),
                    (n = n ? this.resolvePath(t, i) : t),
                    0 <= g.indexOf(n)
                      ? n
                      : p.has(n)
                      ? d.get(n)
                      : ((i = t),
                        h.resetAll(),
                        h.test('dataurlTest', t) || h.test('selectorTest', t)
                          ? t
                          : (h.test('protocolMissing', t) &&
                              (i = h.test('protocolIncomplete', t)
                                ? t.replace(
                                    h.get('protocolIncomplete'),
                                    a + '//'
                                  )
                                : a +
                                  '//' +
                                  (o + '/' + n).replace(/\/\/+/, '/')),
                            p.set(t, i),
                            /http[s]?/.test(i)
                              ? ((o = i),
                                h.test('proxiedURL', o)
                                  ? (i = o)
                                  : (f.isWhitelisted
                                      ? (a = f.isWhitelisted(o)) &&
                                        r.warn('Whitelisted: ' + o)
                                      : (a = !1),
                                    (i = a
                                      ? o
                                      : (a = f.proxy) &&
                                        h.test('resourceFinder', a)
                                      ? a.replace(
                                          h.get('resourceFinder'),
                                          encodeURIComponent(o)
                                        )
                                      : o)),
                                g.push(i),
                                d.set(t, i),
                                (o = i))
                              : (g.push(t), d.set(t, i), (o = t)),
                            f.noEncode ? decodeURIComponent(o) : o))
                  );
                },
                getRelativeLocation: function (t) {
                  var e = h.test('relativePath', t);
                  return t
                    ? e
                      ? ((e = u.StringUtils.parseURL(
                          (function (t) {
                            return p.get(t) || t;
                          })(t)
                        )),
                        (t = this.resolvePath(
                          t,
                          this.location.protocol +
                            '//' +
                            this.location.host +
                            (this.location.path || this.location.pathname || '')
                        )),
                        e ||
                          l.ObjectUtils.assign({}, this.location, { path: t }))
                      : l.ObjectUtils.assign({}, this.location, { path: t })
                    : this.location;
                },
                resolvePath: function (t, e) {
                  if (/^\//.test(t) || /^https?:\/\//.test(t)) return t;
                  for (
                    var n = (e.replace(/\/[^\/]*$/, '') + '/' + t).split('/'),
                      r = [],
                      i = 0,
                      o = n.length;
                    i < o;
                    i++
                  ) {
                    var a = n[i];
                    '' === a
                      ? (r.length = 0)
                      : '.' !== a &&
                        ('..' === a ? 0 < r.length && --r.length : r.push(a));
                  }
                  return r.unshift(''), r.join('/');
                },
                configure: function (t) {
                  void 0 === t && (t = {});
                  var e = t;
                  if (
                    ((t = e.proxyWhitelist),
                    (e = s()(e, ['proxyWhitelist'])),
                    (f = l.ObjectUtils.assign({}, f, e)),
                    t)
                  ) {
                    t = t
                      .map(function (t) {
                        return t.replace('*', '(.*)');
                      })
                      .join('|');
                    var n = new RegExp('' + t, 'ig');
                    f.isWhitelisted = function (t) {
                      return (n.lastIndex = 0), n.test(t);
                    };
                  }
                },
                isURLLike: function (t) {
                  return (
                    h.resetMultiple([
                      'dataurlTest',
                      'selectorTest',
                      'extnameFinder',
                      'protocolMissing',
                    ]),
                    !h.test('dataurlTest', t) &&
                      !h.test('selectorTest', t) &&
                      h.test('extnameFinder', t) &&
                      h.test('protocolMissing', t)
                  );
                },
                clearCache: function () {
                  d.clear(), p.clear();
                },
                isProxiedURL: function (t) {
                  return !!t && h.test('proxiedURL', t);
                },
              },
              {
                location: {
                  get: function () {
                    return m();
                  },
                  set: function (t) {
                    return (f = l.ObjectUtils.assign({}, f, { location: t }))
                      .location;
                  },
                  configurable: !0,
                  enumerable: !0,
                },
                config: {
                  get: function () {
                    return f;
                  },
                  configurable: !0,
                  enumerable: !0,
                },
              }
            )),
              (i.a = a);
          }.call(this, o(3).default));
        },
        function (e, n, r) {
          function i() {
            try {
              if (!t.sessionStorage) return null;
              var e = t.sessionStorage.getItem(a),
                n = !1;
              try {
                var r = t.opener ? t.opener.sessionStorage : null;
                n = !!r && e === r.getItem(a);
              } catch (t) {
                n = !0;
              }
              return (
                (e && !n) ||
                  ((e = o.Tools.guid()), t.sessionStorage.setItem(a, e)),
                e
              );
            } catch (t) {
              return null;
            }
          }
          r.d(n, 'a', function () {
            return i;
          });
          var o = r(16),
            a = '__vw_tab_guid';
        },
        function (t, n, r) {
          t = r(42);
          var i = r(31),
            a = r(43),
            s = r(44),
            c = r(45),
            u = r(46),
            l = r(47),
            h = r(48),
            f = r(49);
          (r = r(50)),
            (n.a = {
              input: t.a,
              keystrokes: function () {
                return {
                  create: function (t) {
                    t.keyCapture.onCapture(function (n) {
                      ('OBJECT' === e.activeElement.nodeName &&
                        /flash/.test(e.getAttribute('type'))) ||
                        ((n = t._getEventObject('keystroke', -1, n)),
                        t._publishActions(n));
                    });
                  },
                  destroy: function (t) {
                    t.keyCapture.destroy();
                  },
                };
              },
              media: function () {
                return {
                  create: function (t) {
                    var e = new t.MediaProxy(),
                      n = t._universalHandler(function (e) {
                        (e = t._getEventObject('mediaProperty', e.media, {
                          property: e.name,
                          value: e.value,
                        })),
                          t._publishActions(e);
                      }),
                      r = t._universalHandler(function (e) {
                        (e = t._getEventObject('mediaMethod', e.media, {
                          method: e.name,
                          args: e.args,
                        })),
                          t._publishActions(e);
                      });
                    e.events.on('setter', n),
                      e.events.on('method', r),
                      e.mock();
                  },
                  destroy: function (t) {
                    t.mediaProxy.remove();
                  },
                };
              },
              mutations: function () {
                var t = new i.a(),
                  e = 0,
                  n = 0,
                  r = function (r) {
                    var i = this,
                      o = r.stamp,
                      a = r.changes;
                    t.push(function () {
                      o !== e && (n = 0),
                        (e = o),
                        i._publishMutations(i._getMutationObject(a, o, n++));
                    });
                  };
                return {
                  create: function (t) {
                    t.summary.on('mutation', t._universalHandler(r));
                  },
                  destroy: function (e) {
                    e.summary.off('mutation'), t.start(!0);
                  },
                };
              },
              mouse: a.a,
              focus: s.a,
              resize: function () {
                var t,
                  e = function (t, e) {
                    var n = 0,
                      r = function () {
                        var i = e.getValue.call(this, t);
                        i &&
                          (0 !== i.stamp
                            ? this._publishActions(i)
                            : 3 > n && (o(r, 300), (n += 1)));
                      }.bind(this);
                    r();
                  };
                return {
                  getValue: function () {
                    var t = this.viewport.getSize(1),
                      e = t.width;
                    t = t.height;
                    var n = this.viewport.scrollingElement;
                    if (0 < e && 0 < t)
                      return this._getEventObject('resize', 0, {
                        width: e,
                        height: t,
                        pageWidth: n.scrollWidth,
                        pageHeight: n.scrollHeight,
                      });
                  },
                  create: function (n) {
                    t = n.attachEvent(
                      n.window,
                      'resize',
                      n._universalHandler(e, { extra: [this] }),
                      { passive: !0 }
                    );
                  },
                  destroy: function (e) {
                    e.removeEvent(t);
                  },
                };
              },
              deviceRotation: c.a,
              scroll: u.a,
              selection: l.a,
              touch: h.a,
              zoom: f.a,
              window: r.a,
              srcset: function () {
                return {
                  create: function (t) {
                    (this.onImageLoad = this.onImageLoad.bind(this)),
                      t.document.addEventListener('load', this.onImageLoad, !0),
                      (this.recorder = t);
                  },
                  onImageLoad: function (t) {
                    var e = this;
                    this.recorder.errorLogger(function () {
                      var n = t.target;
                      'IMG' === (n.tagName || n.nodeName) &&
                        n.getAttribute('srcset') &&
                        e.recorder.summary.collectMutations({
                          summary: [
                            {
                              meta: {
                                name: 'src',
                                oldValue: null,
                                newValue: n.currentSrc,
                              },
                              target: n,
                              type: 'attributes',
                            },
                          ],
                          stamp: e.recorder.stamp,
                        });
                    });
                  },
                  destroy: function (t) {
                    t.document.removeEventListener('load', this.onImageLoad);
                  },
                };
              },
            });
        },
        function (t, e, n) {
          t = n(13);
          var r = n(12),
            i = n(10),
            o = {
              rand: function (t, e) {
                return Math.round(Math.random() * (e - t)) + t;
              },
              charFromRange: function (t, e) {
                var n = this.rand(t, e);
                return String.fromCharCode(n);
              },
              isLetter: function (t) {
                return /[\w\u0410-\u042f\u0430-\u044f]/.test(t);
              },
              isNumber: function (t) {
                return /[0-9]/.test(t);
              },
              isUpperCase: function (t) {
                return t === t.toUpperCase();
              },
              randomizeString: function (t) {
                var e = this;
                return (t || '')
                  .split('')
                  .map(function (t) {
                    return e.isNumber(t)
                      ? e.rand(0, 9)
                      : e.isLetter(t)
                      ? e.isUpperCase(t)
                        ? e.charFromRange(65, 90)
                        : e.charFromRange(97, 122)
                      : t;
                  })
                  .join('');
              },
              getNodeBounds: function (t) {
                if (t.getBoundingClientRect) return t.getBoundingClientRect();
                var e = t.ownerDocument.createRange();
                return (
                  e.selectNode(t),
                  (t = e.getBoundingClientRect()),
                  e.detach(),
                  t
                );
              },
            },
            a = t.a.DOMIndexer.HIDABLE_NODES,
            s = new r.KeyValue(),
            c = function (t, e) {
              var n = t.ownerDocument.createElement(e),
                r = o.getNodeBounds(t);
              return (
                n.setAttribute('ym-node-type', t.nodeName.toLowerCase()),
                t.attributes &&
                  (i.DOMUtils.copyAttributes(t, n),
                  (n.className = t.className)),
                (n.className += ' ym-hidden-content'),
                { placeholder: n, bounds: r }
              );
            };
          e.a = function (t) {
            if (0 <= a.indexOf(t.nodeName)) {
              var e = i.DOMUtils.isHiddenContent(t);
              if (s.has(t)) return s.get(t);
              if (e) {
                var n = t.nodeName;
                return (
                  (e = t.textContent),
                  '#text' === n && e && '' === e.trim()
                    ? t
                    : ((e = (function (t) {
                        switch (n) {
                          case '#text':
                            var e = c(t, 'span').placeholder;
                            return (
                              e.setAttribute(
                                'ym-text-content',
                                o.randomizeString(t.textContent || '')
                              ),
                              e
                            );
                          case 'IMG':
                            return (
                              (t = (e = c(t, 'img')).placeholder),
                              (e = e.bounds),
                              (t.src =
                                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='),
                              (t.width = e.width),
                              (t.height = e.height),
                              t
                            );
                          case 'TEXTAREA':
                          case 'INPUT':
                            return (
                              (t = (e = c(t, 'input')).placeholder),
                              (e = e.bounds),
                              (t.style.width = e.width + 'px'),
                              (t.style.height = e.height + 'px'),
                              t
                            );
                          default:
                            return (
                              (t = (e = c(t, 'span')).placeholder),
                              (e = e.bounds),
                              (t.style.width = e.width + 'px'),
                              (t.style.height = e.height + 'px'),
                              t
                            );
                        }
                      })(t)),
                      s.set(t, e),
                      e)
                );
              }
            }
            return t;
          };
        },
        function (r, i, a) {
          a.r(i),
            function (r, s, c) {
              a.d(i, 'default', function () {
                return Z;
              });
              var u = a(39),
                l = a.n(u);
              u = a(24);
              var h = a.n(u);
              u = a(34);
              var f = a.n(u);
              u = a(5);
              var d = a.n(u);
              u = a(14);
              var p = a.n(u);
              u = a(6);
              var m = a.n(u);
              u = a(18);
              var g = a.n(u);
              u = a(1);
              var v = a.n(u),
                y = a(16),
                b = a(23),
                _ = a(0),
                w = a(13),
                E = a(30),
                k = a(63),
                x = a(51),
                O = a(53),
                T = a(17),
                S = a(54),
                A = a(55),
                I = a(56),
                C = a(57);
              u = a(15);
              var P = a(26),
                N = a(58),
                M = a(59),
                R = a(60),
                D = a(21),
                j = a(61),
                L = a(11),
                F = a(62),
                U = a(28),
                B = a(10),
                z = a(37),
                H = a(7),
                V = a(2),
                G = a(3),
                W = a(64),
                q = {},
                K = {
                  counterId: null,
                  maxSize: 52428800,
                  maxDuration: 864e5,
                  compression: !1,
                  isEU: !1,
                  recording: { keysMode: 'explicit' },
                },
                Y = { disableIndex: !1 },
                X = !0 === R.a,
                $ =
                  H.IS_INCOGNITO ||
                  H.DO_NOT_TRACK ||
                  'disable' === U.BrowserUtils.meta('webvisor'),
                J = t !== t.top;
              t.__YM_WV_RECORDABLE__ === n &&
                Object.defineProperty(t, '__YM_WV_RECORDABLE__', { value: !0 });
              var Z = (function (n) {
                  function i(i, o) {
                    void 0 === i && (i = {}), void 0 === o && (o = {});
                    var a = n.call(this) || this;
                    return (
                      v()(m()(a), 'middlewares', []),
                      v()(m()(a), 'options', V.ObjectUtils.assign({}, K)),
                      v()(m()(a), 'initOptions', V.ObjectUtils.assign({}, Y)),
                      v()(m()(a), 'iframes', []),
                      v()(m()(a), 'waitingBody', null),
                      v()(m()(a), 'ableToStart', !1),
                      v()(m()(a), '_identifier', y.Tools.guid()),
                      v()(m()(a), 'offsets', { left: 0, top: 0 }),
                      v()(m()(a), 'fatalError', !1),
                      v()(m()(a), 'captors', new r()),
                      v()(m()(a), 'prevMutationStamp', null),
                      v()(m()(a), 'prevMutationOrderingID', 0),
                      v()(m()(a), 'inited', !1),
                      v()(m()(a), 'startOptions', null),
                      v()(m()(a), 'precache', []),
                      v()(m()(a), 'paused', !0),
                      v()(m()(a), 'started', !1),
                      v()(m()(a), 'stopped', !1),
                      v()(m()(a), 'snapshotSent', !1),
                      v()(m()(a), 'eventsList', ['error']),
                      v()(
                        m()(a),
                        '_slaveMessengerRegistrationHandler',
                        function (e, n) {
                          return function (r, i) {
                            var o = r.offsets,
                              s = r.counterId,
                              c = i.origin;
                            try {
                              var u = d()({}, a.options),
                                l = c.split('//').pop(),
                                h = s === u.counterId,
                                f = l === t.location.host,
                                p = -1 !== (u.trustedDomains || []).indexOf(l);
                              return (
                                f || (p && h)
                                  ? ((a.offsets = o),
                                    a.sender.useRight(function (t) {
                                      var e = t.data,
                                        n = {};
                                      _.IterableUtils.fastIterate(
                                        ['page', 'events', 'mutations'],
                                        function (t, r) {
                                          e[r] && (n[r] = e[r]);
                                        }
                                      ),
                                        a.messenger.send('iframe_data', {
                                          data: n,
                                        });
                                    }))
                                  : G.default.warn(
                                      'Counter or domain mismatch, iframe will be recorded as master window'
                                    ),
                                e()
                              );
                            } catch (t) {
                              n(t);
                            }
                          };
                        }
                      ),
                      v()(
                        m()(a),
                        '_sendEOF',
                        b.FunctionUtils.once(function () {
                          if (!a._EOF_SENT) {
                            var t = a._getEventObject('eof');
                            a._saveChanges({ events: [t] }), (a._EOF_SENT = !0);
                          }
                        })
                      ),
                      (a._context = (function (n) {
                        var r = {};
                        return n
                          ? ((r.window = n.window || t),
                            (r.document = n.document || e),
                            r)
                          : { window: t, document: e };
                      })(o)),
                      (a.sender = new O.a(a.middlewares.splice(0))),
                      (a.captors = new r()),
                      (a._timer = z.TimeUtils.timer()),
                      (a._tabId = Object(F.a)()),
                      (a._configOptions = d()({}, i)),
                      Object.defineProperty(a.window, '__WV_ENABLED__', {
                        value: !0,
                      }),
                      !X || $ ? m()(a) || m()(a) : a
                    );
                  }
                  g()(i, n);
                  var a = i.prototype;
                  return (
                    (a.configure = function () {
                      var t = V.ObjectUtils.combine(
                        {},
                        d()({}, K, this._configOptions)
                      );
                      (this.frames = []),
                        (this.viewport = U.BrowserUtils.viewportGetter(
                          this.document
                        )),
                        (this.zoomLevel = this.viewport.zoomLevel),
                        (this.prevMutationStamp = null),
                        (this.prevMutationOrderingID = 0),
                        (this.ableToStart = this.inited = !1),
                        (this.startOptions = this.initException = null),
                        (this.precache = []),
                        (this.options = d()({}, t)),
                        (this.canvasProxy = E.a),
                        (this.MediaProxy = A.a),
                        L.c.addAttributesFilter(function (e, n, r) {
                          if (T.a.isValidNode(e) && 'value' === n)
                            return (
                              (n = (e = T.a.validate(e, t)).forceRecord),
                              e.isAllowed || n ? r : T.a.encode(r)
                            );
                        });
                    }),
                    (a.attachEvent = function () {
                      for (
                        var t, e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return P.a.on.apply(P.a, (t = []).concat.apply(t, n)), n;
                    }),
                    (a.removeEvent = function () {
                      for (
                        var t, e = arguments.length, n = Array(e), r = 0;
                        r < e;
                        r++
                      )
                        n[r] = arguments[r];
                      return P.a.off.apply(P.a, (t = []).concat.apply(t, n)), n;
                    }),
                    (a.continue = function () {
                      $ || (this.paused = !1);
                    }),
                    (a.findNode = function (t) {
                      return this.indexer.getNodeId(t);
                    }),
                    (a.pause = function () {
                      $ || (this.paused = !0);
                    }),
                    (a.middleware = function (t) {
                      return (
                        this.sender
                          ? this.sender.use(t)
                          : this.middlewares.push(t),
                        this
                      );
                    }),
                    (a.init = function (t) {
                      var e = this;
                      void 0 === t && (t = {}),
                        (this.initOptions = V.ObjectUtils.assign(
                          {},
                          this.initOptions,
                          t || {}
                        )),
                        this.errorLogger(
                          f()(
                            h.a.mark(function t() {
                              return h.a.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (X && !$) {
                                          t.next = 2;
                                          break;
                                        }
                                        return t.abrupt('return');
                                      case 2:
                                        return (
                                          (t.prev = 2),
                                          (t.next = 5),
                                          Object(I.a)(e.document)
                                        );
                                      case 5:
                                        (e.waitingDocument = t.sent),
                                          (t.next = 11);
                                        break;
                                      case 8:
                                        (t.prev = 8),
                                          (t.t0 = t.catch(2)),
                                          e.__handleDocumentLoadError(t.t0);
                                      case 11:
                                        return (
                                          (t.next = 13),
                                          e.__handleDocumentLoad()
                                        );
                                      case 13:
                                      case 'end':
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[2, 8]]
                              );
                            })
                          ),
                          'init'
                        ).catch(function (t) {
                          clearTimeout(e.cancelIfNotStarted),
                            (e.waitingDocument = !1),
                            e.fatal('init-failed', t),
                            (e.sendErrors = o(function () {
                              e.stop(!0, !1);
                            }, 3e4));
                        });
                    }),
                    (a.__handleDocumentLoadError = function (t) {
                      var e = t;
                      'timeout' === t.message &&
                        (e = Error("No <body> found. Can't continue")),
                        this.fatal('init-failed', e);
                    }),
                    (a.__handleDocumentLoad = (function () {
                      var t = f()(
                        h.a.mark(function t() {
                          var e = this;
                          return h.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      this.configure(),
                                      this.__initIndexer(),
                                      this.__initEventHandlers(),
                                      (t.next = 5),
                                      this._initMessenger()
                                    );
                                  case 5:
                                    (this.waitingDocument = !1),
                                      (this.ableToStart = !0),
                                      (this.cancelIfNotStarted = o(function () {
                                        e.stop(!0, !1);
                                      }, 3e4)),
                                      this.emit('ready'),
                                      (this.inited = !0),
                                      this.startOptions &&
                                        this.start(this.startOptions);
                                  case 11:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })()),
                    (a.__initIndexer = function () {
                      var t = this;
                      (this.indexer = new C.a(
                        this.document,
                        { disabled: this.initOptions.disableIndex },
                        this
                      )),
                        d()({}, this.options).childIframe &&
                          this.indexer.on('node', function (e) {
                            return t.connectSlaveRecorder(e);
                          }),
                        this.indexer.use(W.a),
                        this.indexer.initialIndex();
                    }),
                    (a.__initEventHandlers = function () {
                      (this.summary = new x.a(
                        this.document.documentElement,
                        this.indexer,
                        this
                      )),
                        (this.selection = new M.a(
                          t,
                          this.document,
                          this.indexer
                        )),
                        (this.keyCapture = new S.a('body', this)),
                        this.initOptions.disableMutations ||
                          this.summary.initObserver(),
                        this._initCaptors(),
                        this._createSnapshot();
                    }),
                    (a.connectSlaveRecorder = function (t) {
                      var e = this;
                      if (
                        'IFRAME' === t.nodeName &&
                        t.name !== w.a.NATIVE_IFRAME_NAME &&
                        B.DOMUtils.isBlankOrSameOriginIframe(t, this.window)
                      ) {
                        try {
                          var n =
                            0 <
                              t.contentDocument.documentElement.childNodes
                                .length &&
                            'complete' === t.contentDocument.readyState;
                        } catch (t) {
                          n = !0;
                        }
                        var r = function (n) {
                          e.errorLogger(function () {
                            if (
                              n &&
                              n.parentElement &&
                              n.contentDocument &&
                              B.DOMUtils.isBlankOrSameOriginIframe(
                                t,
                                e.window
                              ) &&
                              !0 !== n.contentWindow.__WV_ENABLED__
                            )
                              try {
                                !(function t(n) {
                                  var r = n.contentWindow,
                                    i = n.contentDocument;
                                  if (
                                    (G.default.log('creating recorder'), r && i)
                                  )
                                    return !0 === r.__YM_WV_RECORDABLE__
                                      ? G.default.warn(
                                          'Iframe has internal counter installed'
                                        )
                                      : !0 === r.__YM_RECORDING__
                                      ? G.default.warn(
                                          "We're already recording this iframe",
                                          n
                                        )
                                      : ((n.contentWindow.__YM_RECORDING__ = !0),
                                        (r = e._createInstance(
                                          e._configOptions,
                                          { window: r, document: i }
                                        )).init(e.initOptions),
                                        r.start(e.startOptions),
                                        G.default.info(
                                          'Recorder injected into the iframe',
                                          n
                                        ));
                                  o(function () {
                                    return t(n);
                                  }, 10);
                                })(n);
                              } catch (t) {
                                G.default.error(t),
                                  G.default.warn(
                                    'Probably this iframe is cross-origin'
                                  );
                              }
                          }, 'ifLo');
                        };
                        this.attachEvent(
                          t,
                          'load',
                          function () {
                            r(t);
                          },
                          { capture: !0, passive: !0 }
                        ),
                          n && r(t);
                      }
                    }),
                    (a.start = function (t) {
                      var e = this;
                      void 0 === t && (t = {}),
                        this.errorLogger(function () {
                          if (e.ableToStart)
                            if (!1 === e.fatalError)
                              if (e.inited) {
                                if (X && !$) {
                                  clearTimeout(e.cancelIfNotStarted);
                                  var n = (t || {}).forms;
                                  (e.options.recording = V.ObjectUtils.combine(
                                    {},
                                    K.recording,
                                    {
                                      keysMode:
                                        void 0 === n || n
                                          ? 'regular'
                                          : 'explicit',
                                    }
                                  )),
                                    (e.start = b.FunctionUtils.noop()),
                                    (e.started = !0),
                                    e
                                      .sendSnapshot()
                                      .then(function (t) {
                                        t &&
                                          (e._sendInitialEvents(),
                                          e._sendPreCachedData(),
                                          e._timer.start());
                                      })
                                      .catch(function (t) {
                                        e.fatal('recording-interrupted', t),
                                          e.start();
                                      }),
                                    e.continue();
                                }
                              } else
                                e.savePageSnapshot(),
                                  e.fatal(
                                    'init-failed',
                                    Error('Unknown error')
                                  );
                            else e.stop(!0, !0);
                          else
                            !(function n() {
                              e.ableToStart ? e.start(t) : o(n, 50);
                            })();
                        }, 'start');
                    }),
                    (a.stop = function (t, e) {
                      var n = this;
                      void 0 === t && (t = !1),
                        void 0 === e && (e = !0),
                        X &&
                          !$ &&
                          ((!1 !== this.started && this.inited) || t) &&
                          !0 !== this.stopped &&
                          (clearTimeout(this.cancelIfNotStarted),
                          clearTimeout(this.sendErrors),
                          this.captors.forEach(function (t) {
                            t && t.hasOwnProperty('destroy') && t.destroy(n);
                          }),
                          this.indexer && this.indexer.clear(),
                          this.captors && this.captors.clear(),
                          D.a.invokeAll(this),
                          this.summary && this.summary.destroy(),
                          this.keyCapture && this.keyCapture.destroy(),
                          e
                            ? (this._sendEOF(),
                              !0 === this.fatalError &&
                                this._sendPreCachedData({ force: !0 }),
                              this.emit('stop'))
                            : t && this.emit('close'),
                          (this.started = !1),
                          (this.stopped = !0));
                    }),
                    (a.fatal = function (t, e) {
                      void 0 === e && (e = null),
                        G.default.error(e),
                        (this.fatal = b.FunctionUtils.noop()),
                        (e = e || {
                          message: 'Unknown exception',
                          stack: 'No stack provided',
                        }),
                        this.fatalError ||
                          ((this.fatalError = !0),
                          this.savePageSnapshot(),
                          this.sendCustomEvent('fatalError', {
                            code: t,
                            exception: e.message,
                            stack: e.stack,
                          }),
                          this.stop(!0, !0));
                    }),
                    (a.setURLProxy = function (t) {
                      j.a.proxy = (function () {
                        return 'string' == typeof t
                          ? t
                          : 'function' == typeof t
                          ? t.call(this)
                          : void 0;
                      })();
                    }),
                    (a.sendCustomEvent = function (t, e) {
                      var n = this._getEventObject(t, null, e);
                      this._saveChanges({ events: [n] });
                    }),
                    (a._initCaptors = function () {
                      var t = this;
                      this.keyCapture.addElementFilter(function (t) {
                        return (
                          'INPUT' !== t.nodeName ||
                          ('password' !== t.type &&
                            !1 === /ym-disable-keys/.test(t.className))
                        );
                      });
                      var e = V.ObjectUtils.combine(
                        {},
                        w.a.captors,
                        J ? w.a.iframeCaptors : null
                      );
                      _.IterableUtils.forin(e, function (n) {
                        if (!0 === e[n]) {
                          var r = k.a[n]();
                          t.errorLogger(function () {
                            return r.create(t);
                          }, 'init-captor-' + n),
                            t.captors.set(n, r);
                        }
                      }),
                        P.a.on(
                          this.window,
                          'beforeunload',
                          this.stop.bind(this)
                        );
                    }),
                    (a.throwError = function (t, e) {
                      void 0 === e && (e = 'recorder'),
                        this.emit('error', {
                          error: t,
                          namespace: 'recorder:' + e,
                        });
                    }),
                    (a.errorLogger = function (t, e) {
                      var n = this;
                      void 0 === e && (e = 'recorder');
                      try {
                        var r = t();
                        return r instanceof s
                          ? r.catch(function (t) {
                              n.throwError(t, e + ':async');
                            })
                          : r;
                      } catch (t) {
                        this.throwError(t, e);
                      }
                    }),
                    (a._blockUpcomingCaptor = function (t, e) {
                      var n = this;
                      void 0 === e && (e = 1 / 0),
                        t &&
                          ((this._blockedCaptors =
                            this._blockedCaptors || new c()),
                          this._blockedCaptors.add(t),
                          1 / 0 > e &&
                            o(function () {
                              return n._releaseCaptor(t);
                            }, e));
                    }),
                    (a._releaseCaptor = function (t) {
                      t &&
                        this._blockedCaptors.has(t) &&
                        this._blockedCaptors.delete(t);
                    }),
                    (a._executeCaptor = function (t, e) {
                      t &&
                        'function' == typeof e &&
                        (this._blockedCaptors && this._blockedCaptors.has(t)
                          ? this._releaseCaptor(t)
                          : e());
                    }),
                    (a._getEventObject = function (t, e, n, r) {
                      return (
                        (e =
                          'number' == typeof e
                            ? e
                            : e
                            ? this.findNode(e) || -1
                            : null),
                        {
                          stamp: this._stampForType(t, r),
                          type: t,
                          target: e,
                          meta: n || null,
                        }
                      );
                    }),
                    (a._getMutationObject = function (t, e, n) {
                      return (
                        void 0 === n && (n = 0),
                        { stamp: e, meta: { changes: t, index: n } }
                      );
                    }),
                    (a._stampForType = function (t, e) {
                      var n = e || this.stamp;
                      return (q[t] = n + (n === q[t] ? 1 : 0));
                    }),
                    (a._getInitialScroll = function () {
                      var t = [],
                        e = this.document.body,
                        n = this._getScroll(e);
                      return (
                        null != n && t.push(n),
                        t.concat(this._getScrollForEachNode(e.childNodes)),
                        t
                      );
                    }),
                    (a._getScrollForEachNode = function (t) {
                      var e = this;
                      return _.IterableUtils.toArray(t).reduce(function (t, n) {
                        var r = e._getScroll(n);
                        return (
                          null != r && t.push(r),
                          0 < n.childNodes.length &&
                            (t = t.concat(
                              e._getScrollForEachNode(n.childNodes)
                            )),
                          t
                        );
                      }, []);
                    }),
                    (a._getScroll = function (t) {
                      var e = t.scrollTop,
                        n = t.scrollLeft;
                      if (0 < e || 0 < n)
                        return { target: this.findNode(t), scroll: [e, n] };
                    }),
                    (a._initMessenger = function () {
                      var t,
                        e = this;
                      return new s(
                        ((t = f()(
                          h.a.mark(function t(n) {
                            var r;
                            return h.a.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((e.messenger = new N.a(e.window)),
                                      e._initMasterMessenger(),
                                      !U.BrowserUtils.isIframe(e.window))
                                    ) {
                                      t.next = 7;
                                      break;
                                    }
                                    return (
                                      (t.next = 5), e._initSlaveMessenger()
                                    );
                                  case 5:
                                    (r = t.sent) &&
                                      e.fatal('messenger-init-failed', r);
                                  case 7:
                                    n();
                                  case 8:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        )),
                        function (e) {
                          return t.apply(this, arguments);
                        })
                      );
                    }),
                    (a._initMasterMessenger = function () {
                      var t = this,
                        e = d()({}, this.options);
                      this.messenger.subscribe('iframe_register', function (
                        t,
                        n
                      ) {
                        var r = B.DOMUtils.offsets(t.sender);
                        n({
                          counterId: e.counterId,
                          offsets: { top: r.top, left: r.left },
                        });
                      }),
                        this.messenger.subscribe('iframe_data', function (e) {
                          var n = e.data;
                          e = e.sender;
                          var r = t.findNode(e);
                          if (null != r) {
                            var i = { frameId: r };
                            if (
                              (n.page &&
                                ((r = d()({}, n.page, i, {
                                  tabId: t.tabId,
                                  recordStamp: new Date().getTime(),
                                  stamp: t._stampForType('page'),
                                })),
                                t._request('/dump', { page: r })),
                              n.events)
                            ) {
                              var o = (e = B.DOMUtils.offsets(e, {
                                  excludeBorder: !0,
                                })).left,
                                a = e.top;
                              (e = n.events.map(function (e) {
                                return (
                                  /mouse/.test(e.type) &&
                                    ((e.meta.x = Math.round(e.meta.x + o)),
                                    (e.meta.y = Math.round(e.meta.y + a))),
                                  d()({}, e, i, {
                                    stamp: t._stampForType(e.type),
                                  })
                                );
                              })),
                                t._publishActions(e);
                            }
                            n.mutations &&
                              ((n = n.mutations.map(function (e) {
                                return d()({}, e, i, {
                                  stamp: t._stampForType('mutation'),
                                });
                              })),
                              t._publishMutations(n));
                          }
                        });
                    }),
                    (a._initSlaveMessenger = function () {
                      var t = this;
                      return new s(function (e, n) {
                        G.default.log(
                          'Awaiting subscription',
                          t.document.documentElement
                        ),
                          t.messenger.send('iframe_register', {
                            awaitResponse: !0,
                            timeoutTime: 3e3,
                            onResponse: t._slaveMessengerRegistrationHandler(
                              e,
                              n
                            ),
                            onTimeout: function () {
                              G.default.warn(
                                'Slave recorder stopped due to a timeout: no response from the parent page within 1 seconds. This frame will be used as if it is master'
                              ),
                                e();
                            },
                          });
                      }).catch(function (e) {
                        return (
                          G.default.warn('Cant init recorder in frame'),
                          t.throwError(e, 'slave-recorder'),
                          G.default.warn(e, t.document),
                          e
                        );
                      });
                    }),
                    (a._publishActions = function () {
                      var t;
                      this._saveChanges({
                        events: (t = []).concat.apply(t, arguments),
                      });
                    }),
                    (a._publishMutations = function () {
                      var t;
                      this._saveChanges({
                        mutations: (t = []).concat.apply(t, arguments),
                      });
                    }),
                    (a._request = function (t, e, n) {
                      void 0 === e && (e = {}),
                        void 0 === n && (n = !1),
                        (this._EOF_SENT && !0 !== n) ||
                          (!0 === this.started || !0 === n
                            ? ((e = V.ObjectUtils.combine(
                                { _v: w.a.package.version },
                                d()({}, e)
                              )),
                              this.sender.send({ url: t, data: d()({}, e) }))
                            : this.precache.push([t, e]));
                    }),
                    (a._saveChanges = function (t) {
                      this._request('/dump', t),
                        !this._EOF_SENT &&
                          this.started &&
                          (this.dataSent >= this.options.maxSize ||
                            this.hitDuration >= this.options.maxDuration) &&
                          this.stop();
                    }),
                    (a.sendSnapshot = function () {
                      var t = this;
                      return this.snapshot.get({
                        onSuccess: function (e) {
                          return t.savePageSnapshot(e), !0;
                        },
                        onFail: function () {
                          return !1;
                        },
                      });
                    }),
                    (a._createSnapshot = function () {
                      var t = this,
                        e = s
                          .resolve()
                          .then(function () {
                            return { content: t.summary.html };
                          })
                          .catch(function (t) {
                            return { error: t };
                          })
                          .then(function (t) {
                            return { content: t.content, error: t.error };
                          });
                      this.snapshot = {
                        get: function (n) {
                          var r = n.onSuccess,
                            i = n.onFail;
                          return e.then(function (e) {
                            var n = e.error;
                            return (
                              (e = e.content),
                              n
                                ? ((e = i.call(t, e, n)),
                                  t.fatal('invalid-snapshot', n))
                                : (e = r.call(t, e)),
                              e
                            );
                          });
                        },
                      };
                    }),
                    (a.savePageSnapshot = function (t) {
                      if (
                        this.indexer &&
                        !this.indexer.disabled &&
                        !this.snapshotSent
                      )
                        return (
                          (this.snapshotSent = !0),
                          (t = d()(
                            {
                              content: t,
                              frameId: 0,
                              tabId: this.tabId,
                              recordStamp: new Date().getTime(),
                            },
                            this.page
                          )),
                          this._saveChanges({ page: t })
                        );
                    }),
                    (a._sendInitialEvents = function () {
                      var t = this,
                        e = [],
                        n = (function () {
                          var e = t.captors.get('resize');
                          return e && e.getValue.call(t);
                        })(),
                        r = this.viewport.scrollingElement,
                        i = this._getInitialScroll().map(function (e) {
                          var n = e.scroll,
                            i = n[0];
                          return (
                            (n = n[1]),
                            (e =
                              (e = t.indexer.find(e.target)) === t.document ||
                              e === t.window
                                ? r
                                : e),
                            t._getEventObject('scroll', e, {
                              x: n,
                              y: i,
                              page: e === r,
                            })
                          );
                        });
                      n && e.push(n),
                        e.push.apply(e, i),
                        this._saveChanges({ events: e });
                    }),
                    (a._sendPreCachedData = function (t) {
                      if (
                        ((t =
                          void 0 !== (t = (void 0 === t ? {} : t).force) && t),
                        this.precache.length)
                      )
                        for (var e; null != (e = this.precache.shift()); )
                          this._request(e[0], e[1], t);
                    }),
                    (a._connectToParent = function () {
                      this._sendMessage('connect', { id: this._identifier });
                    }),
                    (a._sendMessage = function (t, e) {
                      (J ? this.window.top : this.window).postMessage(
                        { type: t, data: e },
                        '*'
                      );
                    }),
                    (a._universalHandler = function (t, e) {
                      var n = this,
                        r = (void 0 === e ? {} : e).extra,
                        i = void 0 === r ? [] : r;
                      return function () {
                        for (
                          var e = arguments.length, r = Array(e), o = 0;
                          o < e;
                          o++
                        )
                          r[o] = arguments[o];
                        n.errorLogger(function () {
                          n.paused || t.apply(n, r.concat(i));
                        }, 'universal-handler');
                      };
                    }),
                    (a._createInstance = function () {
                      for (
                        var t = arguments.length, e = Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      return l()(this.constructor, e);
                    }),
                    p()(i, [
                      {
                        key: 'window',
                        get: function () {
                          return this._context.window;
                        },
                      },
                      {
                        key: 'document',
                        get: function () {
                          return this._context.document;
                        },
                      },
                      {
                        key: 'bodyNode',
                        get: function () {
                          return (
                            this.__bodyNode ||
                            (this.__bodyNode = this.document.body)
                          );
                        },
                      },
                      {
                        key: 'fpsDelay',
                        get: function () {
                          return 1e3 / this.fps;
                        },
                      },
                      {
                        key: 'doctype',
                        get: function () {
                          if (!this.document.doctype) return '';
                          var t = this.document.doctype || {},
                            e = t.publicId,
                            n = t.systemId;
                          return (
                            '<!DOCTYPE ' +
                            [
                              t.name || 'html',
                              e ? ' PUBLIC "' + e + '"' : '',
                              !e && n ? ' SYSTEM' : '',
                              n ? ' "' + n + '"' : '',
                            ].join('') +
                            '>'
                          );
                        },
                      },
                      {
                        key: 'rootNode',
                        get: function () {
                          return (
                            this.__rootNode ||
                            (this.__rootNode = this.document.documentElement)
                          );
                        },
                      },
                      {
                        key: 'stamp',
                        get: function () {
                          return this._timer ? this._timer.stamp() : 0;
                        },
                      },
                      {
                        key: 'eventID',
                        get: function () {
                          return this._eventID
                            ? (this._eventID += 1)
                            : (this._eventID = 1);
                        },
                      },
                      {
                        key: 'page',
                        get: function () {
                          var t = this.viewport
                            ? this.viewport.getSize()
                            : { width: 0, height: 0 };
                          return {
                            meta: {
                              base: B.DOMUtils.base(),
                              hasBase: !!this.document.querySelector(
                                'base[href]'
                              ),
                              viewport: t,
                              title: this.document.title,
                              doctype: this.doctype,
                              address: Gt.href,
                              ua: navigator.userAgent,
                              referrer: this.document.referrer,
                              screen: { width: Kt.width, height: Kt.height },
                              location: {
                                host: Gt.host,
                                protocol: Gt.protocol,
                                path: Gt.pathname,
                              },
                            },
                          };
                        },
                      },
                      {
                        key: 'domain',
                        get: function () {
                          return (
                            Gt.protocol +
                            '//' +
                            (Gt.host || Gt.hostname) +
                            (Gt.port ? ':' + Gt.port : '')
                          );
                        },
                      },
                      {
                        key: 'tabId',
                        get: function () {
                          return this._tabId;
                        },
                      },
                    ]),
                    i
                  );
                })(u.a),
                Q = {
                  IS_INCOGNITO: H.IS_INCOGNITO,
                  IS_MOBILE_DEVICE: H.IS_MOBILE_DEVICE,
                  DO_NOT_TRACK: H.DO_NOT_TRACK,
                };
              _.IterableUtils.forin(Q, function (t) {
                var e = { value: Q[t] };
                Object.defineProperty(Z, t, e),
                  Object.defineProperty(Z.prototype, t, e);
              });
            }.call(this, a(12).default, a(22).Promise, a(8).default);
        },
        function (t, e, n) {
          (e = n(25).default), (t.exports = n(67)() ? e : n(68));
        },
        function (t, e, n) {
          (function (e) {
            var n = { object: !0, symbol: !0 };
            t.exports = function () {
              if ('function' != typeof e) return !1;
              var t = e('test symbol');
              try {
                String(t);
              } catch (t) {
                return !1;
              }
              return !!(
                n[typeof e.iterator] &&
                n[typeof e.toPrimitive] &&
                n[typeof e.toStringTag]
              );
            };
          }.call(this, n(25).default));
        },
        function (t, e, r) {
          (function (e) {
            var i,
              o = r(69),
              a = r(83),
              s = Object.create,
              c = Object.defineProperties,
              u = Object.defineProperty,
              l = Object.prototype,
              h = s(null);
            if ('function' == typeof e) {
              var f = e;
              try {
                String(f());
                var d = !0;
              } catch (t) {}
            }
            var p = (function () {
                var t = s(null);
                return function (e) {
                  for (var n, r, i = 0; t[e + (i || '')]; ) ++i;
                  return (
                    (t[(e += i || '')] = !0),
                    u(
                      l,
                      (n = '@@' + e),
                      o.gs(null, function (t) {
                        r || ((r = !0), u(this, n, o(t)), (r = !1));
                      })
                    ),
                    n
                  );
                };
              })(),
              m = function (t) {
                if (this instanceof m)
                  throw new TypeError('Symbol is not a constructor');
                return i(t);
              };
            (t.exports = i = function t(e) {
              if (this instanceof t)
                throw new TypeError('Symbol is not a constructor');
              if (d) return f(e);
              var r = s(m.prototype);
              return (
                (e = e === n ? '' : String(e)),
                c(r, { __description__: o('', e), __name__: o('', p(e)) })
              );
            }),
              c(i, {
                for: o(function (t) {
                  return h[t] ? h[t] : (h[t] = i(String(t)));
                }),
                keyFor: o(function (t) {
                  var e;
                  for (e in (a(t), h)) if (h[e] === t) return e;
                }),
                hasInstance: o('', (f && f.hasInstance) || i('hasInstance')),
                isConcatSpreadable: o(
                  '',
                  (f && f.isConcatSpreadable) || i('isConcatSpreadable')
                ),
                iterator: o('', (f && f.iterator) || i('iterator')),
                match: o('', (f && f.match) || i('match')),
                replace: o('', (f && f.replace) || i('replace')),
                search: o('', (f && f.search) || i('search')),
                species: o('', (f && f.species) || i('species')),
                split: o('', (f && f.split) || i('split')),
                toPrimitive: o('', (f && f.toPrimitive) || i('toPrimitive')),
                toStringTag: o('', (f && f.toStringTag) || i('toStringTag')),
                unscopables: o('', (f && f.unscopables) || i('unscopables')),
              }),
              c(m.prototype, {
                constructor: o(i),
                toString: o('', function () {
                  return this.__name__;
                }),
              }),
              c(i.prototype, {
                toString: o(function () {
                  return 'Symbol (' + a(this).__description__ + ')';
                }),
                valueOf: o(function () {
                  return a(this);
                }),
              }),
              u(
                i.prototype,
                i.toPrimitive,
                o('', function () {
                  var t = a(this);
                  return 'symbol' == typeof t ? t : t.toString();
                })
              ),
              u(i.prototype, i.toStringTag, o('c', 'Symbol')),
              u(m.prototype, i.toStringTag, o('c', i.prototype[i.toStringTag])),
              u(m.prototype, i.toPrimitive, o('c', i.prototype[i.toPrimitive]));
          }.call(this, r(25).default));
        },
        function (t, e, r) {
          var i = r(70),
            o = r(78),
            a = r(79),
            s = r(80);
          (t.exports = function (t, e) {
            var n;
            if (2 > arguments.length || 'string' != typeof t) {
              var r = e;
              (e = t), (t = null);
            } else r = arguments[2];
            if (null == t)
              var a = (n = !0),
                c = !1;
            else
              (a = s.call(t, 'c')), (c = s.call(t, 'e')), (n = s.call(t, 'w'));
            return (
              (a = { value: e, configurable: a, enumerable: c, writable: n }),
              r ? i(o(r), a) : a
            );
          }).gs = function (t, e, r, c) {
            if (
              ('string' != typeof t && ((c = r), (r = e), (e = t), (t = null)),
              null == e
                ? (e = n)
                : a(e)
                ? null == r
                  ? (r = n)
                  : a(r) || ((c = r), (r = n))
                : ((c = e), (e = r = n)),
              null == t)
            ) {
              var u = !0;
              t = !1;
            } else (u = s.call(t, 'c')), (t = s.call(t, 'e'));
            return (
              (e = { get: e, set: r, configurable: u, enumerable: t }),
              c ? i(o(c), e) : e
            );
          };
        },
        function (t, e, n) {
          t.exports = n(71)() ? Object.assign : n(72);
        },
        function (t, e, n) {
          t.exports = function () {
            var t = Object.assign;
            if ('function' != typeof t) return !1;
            var e = { foo: 'raz' };
            return (
              t(e, { bar: 'dwa' }, { trzy: 'trzy' }),
              'razdwatrzy' === e.foo + e.bar + e.trzy
            );
          };
        },
        function (t, e, r) {
          var i = r(73),
            o = r(77),
            a = Math.max;
          t.exports = function (t, e) {
            var r,
              s,
              c = a(arguments.length, 2);
            t = Object(o(t));
            var u = function (n) {
              try {
                t[n] = e[n];
              } catch (t) {
                r || (r = t);
              }
            };
            for (s = 1; s < c; ++s) (e = arguments[s]), i(e).forEach(u);
            if (r !== n) throw r;
            return t;
          };
        },
        function (t, e, n) {
          t.exports = n(74)() ? Object.keys : n(75);
        },
        function (t, e, n) {
          t.exports = function () {
            try {
              return Object.keys('primitive'), !0;
            } catch (t) {
              return !1;
            }
          };
        },
        function (t, e, n) {
          var r = n(35),
            i = Object.keys;
          t.exports = function (t) {
            return i(r(t) ? Object(t) : t);
          };
        },
        function (t, e, n) {
          t.exports = function () {};
        },
        function (t, e, n) {
          var r = n(35);
          t.exports = function (t) {
            if (!r(t)) throw new TypeError('Cannot use null or undefined');
            return t;
          };
        },
        function (t, e, n) {
          var r = n(35),
            i = Array.prototype.forEach,
            o = Object.create;
          t.exports = function (t) {
            var e = o(null);
            return (
              i.call(arguments, function (t) {
                if (r(t)) for (var n in (t = Object(t))) e[n] = t[n];
              }),
              e
            );
          };
        },
        function (t, e, n) {
          t.exports = function (t) {
            return 'function' == typeof t;
          };
        },
        function (t, e, n) {
          t.exports = n(81)() ? String.prototype.contains : n(82);
        },
        function (t, e, n) {
          t.exports = function () {
            return (
              'function' == typeof 'razdwatrzy'.contains &&
              !0 === 'razdwatrzy'.contains('dwa') &&
              !1 === 'razdwatrzy'.contains('foo')
            );
          };
        },
        function (t, e, n) {
          var r = String.prototype.indexOf;
          t.exports = function (t, e) {
            return -1 < r.call(this, t, e);
          };
        },
        function (t, e, n) {
          var r = n(84);
          t.exports = function (t) {
            if (!r(t)) throw new TypeError(t + ' is not a symbol');
            return t;
          };
        },
        function (t, e, n) {
          t.exports = function (t) {
            return (
              !!t &&
              ('symbol' == typeof t ||
                (!(!t.constructor || 'Symbol' !== t.constructor.name) &&
                  'Symbol' === t[t.constructor.toStringTag]))
            );
          };
        },
        function (r, i, a) {
          (function (i) {
            var a;
            (a = function () {
              function r(t) {
                return 'function' == typeof t;
              }
              function a() {
                return function () {
                  return o(s, 1);
                };
              }
              function s() {
                for (var t = 0; t < k; t += 2)
                  (0, C[t])(C[t + 1]), (C[t] = n), (C[t + 1] = n);
                k = 0;
              }
              function c(t, e) {
                var r = this,
                  i = new this.constructor(l);
                i[N] === n && _(i);
                var o = r._state;
                if (o) {
                  var a = arguments[o - 1];
                  T(function () {
                    return b(o, i, a, r._result);
                  });
                } else v(r, i, t, e);
                return i;
              }
              function u(t) {
                if (t && 'object' == typeof t && t.constructor === this)
                  return t;
                var e = new this(l);
                return d(e, t), e;
              }
              function l() {}
              function h(t) {
                try {
                  return t.then;
                } catch (t) {
                  return (j.error = t), j;
                }
              }
              function f(t, e, i) {
                e.constructor === t.constructor &&
                i === c &&
                e.constructor.resolve === u
                  ? (function (t, e) {
                      e._state === R
                        ? m(t, e._result)
                        : e._state === D
                        ? g(t, e._result)
                        : v(
                            e,
                            n,
                            function (e) {
                              return d(t, e);
                            },
                            function (e) {
                              return g(t, e);
                            }
                          );
                    })(t, e)
                  : i === j
                  ? (g(t, j.error), (j.error = null))
                  : i === n
                  ? m(t, e)
                  : r(i)
                  ? (function (t, e, n) {
                      T(function (t) {
                        var r = !1,
                          i = (function (t, e, n, r) {
                            try {
                              t.call(e, n, r);
                            } catch (t) {
                              return t;
                            }
                          })(
                            n,
                            e,
                            function (n) {
                              r || ((r = !0), e !== n ? d(t, n) : m(t, n));
                            },
                            function (e) {
                              r || ((r = !0), g(t, e));
                            },
                            t._label
                          );
                        !r && i && ((r = !0), g(t, i));
                      }, t);
                    })(t, e, i)
                  : m(t, e);
              }
              function d(t, e) {
                if (t === e)
                  g(
                    t,
                    new TypeError('You cannot resolve a promise with itself')
                  );
                else {
                  var n = typeof e;
                  null === e || ('object' !== n && 'function' !== n)
                    ? m(t, e)
                    : f(t, e, h(e));
                }
              }
              function p(t) {
                t._onerror && t._onerror(t._result), y(t);
              }
              function m(t, e) {
                t._state === M &&
                  ((t._result = e),
                  (t._state = R),
                  0 !== t._subscribers.length && T(y, t));
              }
              function g(t, e) {
                t._state === M && ((t._state = D), (t._result = e), T(p, t));
              }
              function v(t, e, n, r) {
                var i = t._subscribers,
                  o = i.length;
                (t._onerror = null),
                  (i[o] = e),
                  (i[o + R] = n),
                  (i[o + D] = r),
                  0 === o && t._state && T(y, t);
              }
              function y(t) {
                var e = t._subscribers,
                  n = t._state;
                if (0 !== e.length) {
                  for (var r, i, o = t._result, a = 0; a < e.length; a += 3)
                    (r = e[a]), (i = e[a + n]), r ? b(n, r, i, o) : i(o);
                  t._subscribers.length = 0;
                }
              }
              function b(t, e, n, i) {
                var o = r(n),
                  a = void 0,
                  s = void 0,
                  c = void 0,
                  u = void 0;
                if (o) {
                  try {
                    a = n(i);
                  } catch (t) {
                    (j.error = t), (a = j);
                  }
                  if (
                    (a === j
                      ? ((u = !0), (s = a.error), (a.error = null))
                      : (c = !0),
                    e === a)
                  )
                    return void g(
                      e,
                      new TypeError(
                        'A promises callback cannot return that same promise.'
                      )
                    );
                } else (a = i), (c = !0);
                e._state === M &&
                  (o && c
                    ? d(e, a)
                    : u
                    ? g(e, s)
                    : t === R
                    ? m(e, a)
                    : t === D && g(e, a));
              }
              function _(t) {
                (t[N] = L++),
                  (t._state = n),
                  (t._result = n),
                  (t._subscribers = []);
              }
              var w,
                E = Array.isArray
                  ? Array.isArray
                  : function (t) {
                      return (
                        '[object Array]' === Object.prototype.toString.call(t)
                      );
                    },
                k = 0,
                x = void 0,
                O = void 0,
                T = function (t, e) {
                  (C[k] = t),
                    (C[k + 1] = e),
                    2 === (k += 2) && (O ? O(s) : P());
                },
                S = (w = void 0 !== t ? t : n) || {},
                A = S.MutationObserver || S.WebKitMutationObserver;
              S =
                'undefined' == typeof self &&
                void 0 !== i &&
                '[object process]' === {}.toString.call(i);
              var I =
                  'undefined' != typeof Uint8ClampedArray &&
                  'undefined' != typeof importScripts &&
                  'undefined' != typeof MessageChannel,
                C = Array(1e3),
                P = void 0;
              P = S
                ? function () {
                    return i.nextTick(s);
                  }
                : A
                ? (function () {
                    var t = 0,
                      n = new A(s),
                      r = e.createTextNode('');
                    return (
                      n.observe(r, { characterData: !0 }),
                      function () {
                        r.data = t = ++t % 2;
                      }
                    );
                  })()
                : I
                ? (function () {
                    var t = new MessageChannel();
                    return (
                      (t.port1.onmessage = s),
                      function () {
                        return t.port2.postMessage(0);
                      }
                    );
                  })()
                : w === n
                ? (function () {
                    try {
                      var t = Function('return this')().require('vertx');
                      return void 0 !== (x = t.runOnLoop || t.runOnContext)
                        ? function () {
                            x(s);
                          }
                        : a();
                    } catch (t) {
                      return a();
                    }
                  })()
                : a();
              var N = Math.random().toString(36).substring(2),
                M = void 0,
                R = 1,
                D = 2,
                j = { error: null },
                L = 0,
                F = (function () {
                  function t(t, e) {
                    (this._instanceConstructor = t),
                      (this.promise = new t(l)),
                      this.promise[N] || _(this.promise),
                      E(e)
                        ? ((this._remaining = this.length = e.length),
                          (this._result = Array(this.length)),
                          0 === this.length
                            ? m(this.promise, this._result)
                            : ((this.length = this.length || 0),
                              this._enumerate(e),
                              0 === this._remaining &&
                                m(this.promise, this._result)))
                        : g(
                            this.promise,
                            Error('Array Methods must be provided an Array')
                          );
                  }
                  return (
                    (t.prototype._enumerate = function (t) {
                      for (var e = 0; this._state === M && e < t.length; e++)
                        this._eachEntry(t[e], e);
                    }),
                    (t.prototype._eachEntry = function (t, e) {
                      var n = this._instanceConstructor,
                        r = n.resolve;
                      r === u
                        ? (r = h(t)) === c && t._state !== M
                          ? this._settledAt(t._state, e, t._result)
                          : 'function' != typeof r
                          ? (this._remaining--, (this._result[e] = t))
                          : n === U
                          ? (f((n = new n(l)), t, r), this._willSettleAt(n, e))
                          : this._willSettleAt(
                              new n(function (e) {
                                return e(t);
                              }),
                              e
                            )
                        : this._willSettleAt(r(t), e);
                    }),
                    (t.prototype._settledAt = function (t, e, n) {
                      var r = this.promise;
                      r._state === M &&
                        (this._remaining--,
                        t === D ? g(r, n) : (this._result[e] = n)),
                        0 === this._remaining && m(r, this._result);
                    }),
                    (t.prototype._willSettleAt = function (t, e) {
                      var r = this;
                      v(
                        t,
                        n,
                        function (t) {
                          return r._settledAt(R, e, t);
                        },
                        function (t) {
                          return r._settledAt(D, e, t);
                        }
                      );
                    }),
                    t
                  );
                })(),
                U = (function () {
                  function t(e) {
                    if (
                      ((this[N] = L++),
                      (this._result = this._state = n),
                      (this._subscribers = []),
                      l !== e)
                    ) {
                      if ('function' != typeof e)
                        throw new TypeError(
                          'You must pass a resolver function as the first argument to the promise constructor'
                        );
                      if (!(this instanceof t))
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      !(function (t, e) {
                        try {
                          e(
                            function (e) {
                              d(t, e);
                            },
                            function (e) {
                              g(t, e);
                            }
                          );
                        } catch (e) {
                          g(t, e);
                        }
                      })(this, e);
                    }
                  }
                  return (
                    (t.prototype.catch = function (t) {
                      return this.then(null, t);
                    }),
                    (t.prototype.finally = function (t) {
                      var e = this.constructor;
                      return r(t)
                        ? this.then(
                            function (n) {
                              return e.resolve(t()).then(function () {
                                return n;
                              });
                            },
                            function (n) {
                              return e.resolve(t()).then(function () {
                                throw n;
                              });
                            }
                          )
                        : this.then(t, t);
                    }),
                    t
                  );
                })();
              return (
                (U.prototype.then = c),
                (U.all = function (t) {
                  return new F(this, t).promise;
                }),
                (U.race = function (t) {
                  var e = this;
                  return E(t)
                    ? new e(function (n, r) {
                        for (var i = t.length, o = 0; o < i; o++)
                          e.resolve(t[o]).then(n, r);
                      })
                    : new e(function (t, e) {
                        return e(
                          new TypeError('You must pass an array to race.')
                        );
                      });
                }),
                (U.resolve = u),
                (U.reject = function (t) {
                  var e = new this(l);
                  return g(e, t), e;
                }),
                (U._setScheduler = function (t) {
                  O = t;
                }),
                (U._setAsap = function (t) {
                  T = t;
                }),
                (U._asap = T),
                (U.polyfill = function () {
                  var t = void 0;
                  if ('undefined' != typeof global) t = global;
                  else if ('undefined' != typeof self) t = self;
                  else
                    try {
                      t = Function('return this')();
                    } catch (t) {
                      throw Error(
                        'polyfill failed because global object is unavailable in this environment'
                      );
                    }
                  var e = t.Promise;
                  if (e) {
                    var n = null;
                    try {
                      n = Object.prototype.toString.call(e.resolve());
                    } catch (t) {}
                    if ('[object Promise]' === n && !e.cast) return;
                  }
                  t.Promise = U;
                }),
                (U.Promise = U)
              );
            }),
              (r.exports = a());
          }.call(this, a(38)));
        },
        function (t, e) {
          function n(e, r) {
            return (
              (t.exports = n =
                Object.setPrototypeOf ||
                function (t, e) {
                  return (t.__proto__ = e), t;
                }),
              n(e, r)
            );
          }
          t.exports = n;
        },
        function (t, e, r) {
          var i =
              (e =
                (function () {
                  return this || ('object' == typeof self && self);
                })() || Function('return this')()).regeneratorRuntime &&
              0 <= Object.getOwnPropertyNames(e).indexOf('regeneratorRuntime'),
            o = i && e.regeneratorRuntime;
          if (((e.regeneratorRuntime = n), (t.exports = r(88)), i))
            e.regeneratorRuntime = o;
          else
            try {
              delete e.regeneratorRuntime;
            } catch (t) {
              e.regeneratorRuntime = n;
            }
        },
        function (t, e, n) {
          (function (e, n) {
            !(function (r) {
              function i(t, e, n, r) {
                return (
                  (e = Object.create(
                    (e && e.prototype instanceof a ? e : a).prototype
                  )),
                  (r = new m(r || [])),
                  (e._invoke = h(t, n, r)),
                  e
                );
              }
              function o(t, e, n) {
                try {
                  return { type: 'normal', arg: t.call(e, n) };
                } catch (t) {
                  return { type: 'throw', arg: t };
                }
              }
              function a() {}
              function s() {}
              function c() {}
              function u(t) {
                ['next', 'throw', 'return'].forEach(function (e) {
                  t[e] = function (t) {
                    return this._invoke(e, t);
                  };
                });
              }
              function l(t) {
                function e(r, i, a, s) {
                  if ('throw' !== (r = o(t[r], t, i)).type) {
                    var c = r.arg;
                    return (r = c.value) &&
                      'object' == typeof r &&
                      _.call(r, '__await')
                      ? n.resolve(r.__await).then(
                          function (t) {
                            e('next', t, a, s);
                          },
                          function (t) {
                            e('throw', t, a, s);
                          }
                        )
                      : n.resolve(r).then(
                          function (t) {
                            (c.value = t), a(c);
                          },
                          function (t) {
                            return e('throw', t, a, s);
                          }
                        );
                  }
                  s(r.arg);
                }
                var r;
                this._invoke = function (t, i) {
                  function o() {
                    return new n(function (n, r) {
                      e(t, i, n, r);
                    });
                  }
                  return (r = r ? r.then(o, o) : o());
                };
              }
              function h(t, e, n) {
                var r = T;
                return function (i, a) {
                  if (r === A) throw Error('Generator is already running');
                  if (r === I) {
                    if ('throw' === i) throw a;
                    return v();
                  }
                  for (n.method = i, n.arg = a; ; ) {
                    var s = n.delegate;
                    if (s && (s = f(s, n))) {
                      if (s === C) continue;
                      return s;
                    }
                    if ('next' === n.method) n.sent = n._sent = n.arg;
                    else if ('throw' === n.method) {
                      if (r === T) throw ((r = I), n.arg);
                      n.dispatchException(n.arg);
                    } else 'return' === n.method && n.abrupt('return', n.arg);
                    if (((r = A), 'normal' === (s = o(t, e, n)).type)) {
                      if (((r = n.done ? I : S), s.arg === C)) continue;
                      return { value: s.arg, done: n.done };
                    }
                    'throw' === s.type &&
                      ((r = I), (n.method = 'throw'), (n.arg = s.arg));
                  }
                };
              }
              function f(t, e) {
                var n = t.iterator[e.method];
                if (n === y) {
                  if (((e.delegate = null), 'throw' === e.method)) {
                    if (
                      t.iterator.return &&
                      ((e.method = 'return'),
                      (e.arg = y),
                      f(t, e),
                      'throw' === e.method)
                    )
                      return C;
                    (e.method = 'throw'),
                      (e.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return C;
                }
                return 'throw' === (n = o(n, t.iterator, e.arg)).type
                  ? ((e.method = 'throw'),
                    (e.arg = n.arg),
                    (e.delegate = null),
                    C)
                  : (n = n.arg)
                  ? n.done
                    ? ((e[t.resultName] = n.value),
                      (e.next = t.nextLoc),
                      'return' !== e.method &&
                        ((e.method = 'next'), (e.arg = y)),
                      (e.delegate = null),
                      C)
                    : n
                  : ((e.method = 'throw'),
                    (e.arg = new TypeError('iterator result is not an object')),
                    (e.delegate = null),
                    C);
              }
              function d(t) {
                var e = { tryLoc: t[0] };
                1 in t && (e.catchLoc = t[1]),
                  2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                  this.tryEntries.push(e);
              }
              function p(t) {
                var e = t.completion || {};
                (e.type = 'normal'), delete e.arg, (t.completion = e);
              }
              function m(t) {
                (this.tryEntries = [{ tryLoc: 'root' }]),
                  t.forEach(d, this),
                  this.reset(!0);
              }
              function g(t) {
                if (t) {
                  var e = t[E];
                  if (e) return e.call(t);
                  if ('function' == typeof t.next) return t;
                  if (!isNaN(t.length)) {
                    var n = -1;
                    return ((e = function e() {
                      for (; ++n < t.length; )
                        if (_.call(t, n))
                          return (e.value = t[n]), (e.done = !1), e;
                      return (e.value = y), (e.done = !0), e;
                    }).next = e);
                  }
                }
                return { next: v };
              }
              function v() {
                return { value: y, done: !0 };
              }
              var y,
                b = Object.prototype,
                _ = b.hasOwnProperty,
                w = 'function' == typeof e ? e : {},
                E = w.iterator || '@@iterator',
                k = w.asyncIterator || '@@asyncIterator',
                x = w.toStringTag || '@@toStringTag';
              w = 'object' == typeof t;
              var O = r.regeneratorRuntime;
              if (O) w && (t.exports = O);
              else {
                (O = r.regeneratorRuntime = w ? t.exports : {}).wrap = i;
                var T = 'suspendedStart',
                  S = 'suspendedYield',
                  A = 'executing',
                  I = 'completed',
                  C = {};
                ((r = {})[E] = function () {
                  return this;
                }),
                  (w = (w = Object.getPrototypeOf) && w(w(g([])))) &&
                    w !== b &&
                    _.call(w, E) &&
                    (r = w);
                var P = (c.prototype = a.prototype = Object.create(r));
                (s.prototype = P.constructor = c),
                  (c.constructor = s),
                  (c[x] = s.displayName = 'GeneratorFunction'),
                  (O.isGeneratorFunction = function (t) {
                    return (
                      !!(t = 'function' == typeof t && t.constructor) &&
                      (t === s ||
                        'GeneratorFunction' === (t.displayName || t.name))
                    );
                  }),
                  (O.mark = function (t) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, c)
                        : ((t.__proto__ = c),
                          x in t || (t[x] = 'GeneratorFunction')),
                      (t.prototype = Object.create(P)),
                      t
                    );
                  }),
                  (O.awrap = function (t) {
                    return { __await: t };
                  }),
                  u(l.prototype),
                  (l.prototype[k] = function () {
                    return this;
                  }),
                  (O.AsyncIterator = l),
                  (O.async = function (t, e, n, r) {
                    var o = new l(i(t, e, n, r));
                    return O.isGeneratorFunction(e)
                      ? o
                      : o.next().then(function (t) {
                          return t.done ? t.value : o.next();
                        });
                  }),
                  u(P),
                  (P[x] = 'Generator'),
                  (P[E] = function () {
                    return this;
                  }),
                  (P.toString = function () {
                    return '[object Generator]';
                  }),
                  (O.keys = function (t) {
                    var e,
                      n = [];
                    for (e in t) n.push(e);
                    return (
                      n.reverse(),
                      function e() {
                        for (; n.length; ) {
                          var r = n.pop();
                          if (r in t) return (e.value = r), (e.done = !1), e;
                        }
                        return (e.done = !0), e;
                      }
                    );
                  }),
                  (O.values = g),
                  (m.prototype = {
                    constructor: m,
                    reset: function (t) {
                      if (
                        ((this.next = this.prev = 0),
                        (this.sent = this._sent = y),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = 'next'),
                        (this.arg = y),
                        this.tryEntries.forEach(p),
                        !t)
                      )
                        for (var e in this)
                          't' === e.charAt(0) &&
                            _.call(this, e) &&
                            !isNaN(+e.slice(1)) &&
                            (this[e] = y);
                    },
                    stop: function () {
                      this.done = !0;
                      var t = this.tryEntries[0].completion;
                      if ('throw' === t.type) throw t.arg;
                      return this.rval;
                    },
                    dispatchException: function (t) {
                      function e(e, r) {
                        return (
                          (o.type = 'throw'),
                          (o.arg = t),
                          (n.next = e),
                          r && ((n.method = 'next'), (n.arg = y)),
                          !!r
                        );
                      }
                      if (this.done) throw t;
                      for (
                        var n = this, r = this.tryEntries.length - 1;
                        0 <= r;
                        --r
                      ) {
                        var i = this.tryEntries[r],
                          o = i.completion;
                        if ('root' === i.tryLoc) return e('end');
                        if (i.tryLoc <= this.prev) {
                          var a = _.call(i, 'catchLoc'),
                            s = _.call(i, 'finallyLoc');
                          if (a && s) {
                            if (this.prev < i.catchLoc)
                              return e(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                              return e(i.finallyLoc);
                          } else if (a) {
                            if (this.prev < i.catchLoc)
                              return e(i.catchLoc, !0);
                          } else {
                            if (!s)
                              throw Error(
                                'try statement without catch or finally'
                              );
                            if (this.prev < i.finallyLoc)
                              return e(i.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (t, e) {
                      for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (
                          r.tryLoc <= this.prev &&
                          _.call(r, 'finallyLoc') &&
                          this.prev < r.finallyLoc
                        ) {
                          var i = r;
                          break;
                        }
                      }
                      return (
                        i &&
                          ('break' === t || 'continue' === t) &&
                          i.tryLoc <= e &&
                          e <= i.finallyLoc &&
                          (i = null),
                        ((n = i ? i.completion : {}).type = t),
                        (n.arg = e),
                        i
                          ? ((this.method = 'next'),
                            (this.next = i.finallyLoc),
                            C)
                          : this.complete(n)
                      );
                    },
                    complete: function (t, e) {
                      if ('throw' === t.type) throw t.arg;
                      return (
                        'break' === t.type || 'continue' === t.type
                          ? (this.next = t.arg)
                          : 'return' === t.type
                          ? ((this.rval = this.arg = t.arg),
                            (this.method = 'return'),
                            (this.next = 'end'))
                          : 'normal' === t.type && e && (this.next = e),
                        C
                      );
                    },
                    finish: function (t) {
                      for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                          return (
                            this.complete(n.completion, n.afterLoc), p(n), C
                          );
                      }
                    },
                    catch: function (t) {
                      for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                          if ('throw' === (t = n.completion).type) {
                            var r = t.arg;
                            p(n);
                          }
                          return r;
                        }
                      }
                      throw Error('illegal catch attempt');
                    },
                    delegateYield: function (t, e, n) {
                      return (
                        (this.delegate = {
                          iterator: g(t),
                          resultName: e,
                          nextLoc: n,
                        }),
                        'next' === this.method && (this.arg = y),
                        C
                      );
                    },
                  });
              }
            })(
              (function () {
                return this || ('object' == typeof self && self);
              })() || Function('return this')()
            );
          }.call(this, n(25).default, n(22).Promise));
        },
        function (t, e, n) {
          n.r(e),
            n.d(e, 'MapUtils', function () {
              return r;
            });
          var r = {
            setIfNotExists: function (t, e, n) {
              !1 === t.has(e) && t.set(e, this.invoke(n));
            },
            getOrSet: function (t, e, n) {
              return t.has(e)
                ? t.get(e)
                : ((n = this.invoke(n)), t.set(e, n), n);
            },
            getAndUpdate: function (t, e, n) {
              var r = (n = this.invoke(n));
              return t.has(e) && (r = t.get(e)), t.set(e, n), r;
            },
          };
        },
        function (t, e, n) {
          n.r(e),
            n.d(e, 'MathUtils', function () {
              return i;
            });
          var r = n(3),
            i = {
              toChunks: function (t, e) {
                var n = t.slice(0),
                  i = n.length,
                  o = i === e ? Math.round : Math.floor,
                  a = 0;
                return n.reduce(function (t, s, c) {
                  var u = o(e / (i / c));
                  return (
                    0 < c &&
                      1 < u - a &&
                      r.default.warn(
                        'Invalid index ' +
                          u +
                          ': ' +
                          o(e / (i / (c - 1))) +
                          ' <=> ' +
                          o(e / (i / c)),
                        [n.length, c, e],
                        [n.length / c],
                        [e / (n.length / c)]
                      ),
                    (a = u),
                    (t[u] = t[u] || []),
                    t[u].push(s),
                    t
                  );
                }, []);
              },
              split: function (t, e) {
                return t.reduce(function (t, n, r) {
                  return (
                    (t[(r = Math.floor(r / e))] = (t[r] || []).concat(n)), t
                  );
                }, []);
              },
              avg: function (t) {
                return t.length
                  ? t.reduce(function (t, e) {
                      return t + e;
                    }) / t.length
                  : NaN;
              },
              max: function (t) {
                var e = NaN;
                if (0 < t.length) {
                  var n = t.length - 2;
                  for (e = t[t.length - 1]; 0 <= n; n--)
                    e = e > t[n] ? e : t[n];
                }
                return e;
              },
              random: function (t, e) {
                return (
                  void 0 === t && (t = 0), Math.round(Math.random() * e + t)
                );
              },
            };
        },
      ]).default;
  } catch (t) {
    p = { error: t, scope: 'recoder' };
  }
  var v = {
      mixin: function (t) {
        var e, n;
        for (e = 1; e < arguments.length; e++)
          if (arguments[e]) {
            for (n in arguments[e])
              arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
            arguments[e].hasOwnProperty('toString') &&
              (t.toString = arguments[e].toString);
          }
        return t;
      },
    },
    y = function (t) {
      (t = t || {}), v.mixin(this, t), this._initComponent();
    };
  (y.prototype._initComponent = function () {}),
    (y.inherit = function (t) {
      t = t || {};
      var e = 'function' == typeof this ? this : Object;
      t.hasOwnProperty('constructor') ||
        (t.constructor = function () {
          e.apply(this, arguments);
        });
      var n = function () {};
      return (
        (n.prototype = e.prototype),
        (t.constructor.prototype = new n()),
        v.mixin(t.constructor.prototype, t),
        (t.constructor.prototype.constructor = t.constructor),
        (t.constructor.superclass = e.prototype),
        (t.constructor.inherit = y.inherit),
        t.constructor
      );
    }),
    (v.forEachKey = function (t, e, n) {
      for (var r in t) t.hasOwnProperty(r) && e.call(n, r, t[r], t);
    }),
    (v.isEqual = function (t, e) {
      var n = !0;
      return (
        v.forEachKey(t, function (t, r) {
          (e.hasOwnProperty(t) && e[t] === r) || (n = !1);
        }),
        n
          ? (v.forEachKey(e, function (e, r) {
              (t.hasOwnProperty(e) && t[e] === r) || (n = !1);
            }),
            n)
          : n
      );
    }),
    (v.getNativeFunction = function (e, n) {
      var r =
        ((n = n || t).constructor &&
          n.constructor.prototype &&
          n.constructor.prototype[e]) ||
        n[e];
      try {
        if (r && r.apply)
          return function () {
            return r.apply(n, arguments);
          };
      } catch (t) {
        return n[e];
      }
      return r;
    }),
    (v.setTimeout = function (t, e, n) {
      return v.getNativeFunction('setTimeout')(r(t, n || 'setTimeout'), e);
    });
  var b = y.inherit({
    _initComponent: function () {
      b.superclass._initComponent.apply(this, arguments),
        (this._listeners = []);
    },
    on: function (e, n, i, o, a) {
      a = b._getOpts(a);
      var s,
        c = (n = n.split(',')).length,
        u = this._listeners;
      for (s = 0; s < c; s++) {
        var l = n[s],
          h = r(function (e) {
            i.call(o || this, e || t.event);
          }, 'on' + (l || '') + (a.name || ''));
        (u[u.length] = [e, l, i, o, a, h]),
          e.addEventListener
            ? e.addEventListener(l, h, b._prepOpts(a))
            : e.attachEvent && e.attachEvent('on' + l, h);
      }
    },
    un: function (t, e, n, r, i) {
      i = b._getOpts(i);
      var o,
        a = this._listeners,
        s = a.length;
      for (o = 0; o < s; o++) {
        var c = a[o];
        if (
          c[0] == t &&
          c[1] == e &&
          c[2] == n &&
          c[3] == r &&
          v.isEqual(c[4], i)
        ) {
          a.splice(o, 1), this._removeListener(t, e, c[5], i);
          break;
        }
      }
    },
    unAll: function () {
      var t,
        e = this._listeners,
        n = e.length;
      for (t = 0; t < n; t++) {
        var r = e[t];
        this._removeListener(r[0], r[1], r[5], r[4]);
      }
      e.length = 0;
    },
    _removeListener: function (t, e, n, r) {
      t.removeEventListener
        ? t.removeEventListener(e, n, b._prepOpts(r))
        : t.detachEvent && t.detachEvent('on' + e, n);
    },
  });
  (b.supportsPassive = function () {
    if (b._supportsPassive !== n) return b._supportsPassive;
    b._supportsPassive = !1;
    try {
      var e = Object.defineProperty({}, 'passive', {
        get: function () {
          return (b._supportsPassive = !0);
        },
      });
      t.addEventListener('test', null, e);
    } catch (t) {}
    return b._supportsPassive;
  }),
    (b._getOpts = function (t) {
      return v.mixin({ capture: !0, passive: !0 }, t || {});
    }),
    (b._prepOpts = function (t) {
      return b.supportsPassive() ? t : !!t.capture;
    }),
    (b.on = function () {
      b._instance || (b._instance = new b()),
        b._instance.on.apply(b._instance, arguments);
    }),
    (b.un = function () {
      b._instance && b._instance.un.apply(b._instance, arguments);
    });
  var _ = {
    UNLOAD_MS: 0,
    isPerfomance:
      t.performance &&
      t.performance.timing &&
      t.performance.timing.navigationStart &&
      t.performance.now,
    getMs: function () {
      return 0 < this.UNLOAD_MS
        ? this.UNLOAD_MS
        : this.isPerfomance
        ? Math.round(t.performance.timing.navigationStart + t.performance.now())
        : _.oldMs();
    },
    getFormStart: function () {
      return this.isPerfomance
        ? Math.round(t.performance.now())
        : this.getMs() - this.initTime;
    },
  };
  (_.oldMs = Date.now
    ? Date.now
    : function () {
        return new Date().getTime();
      }),
    (_.initTime = _.getMs()),
    b.on(t, 'beforeunload,unload', function () {
      0 === _.UNLOAD_MS && (_.UNLOAD_MS = _.getMs());
    }),
    (v.pad = function (t) {
      return (10 > t ? '0' : '') + t;
    }),
    (_.getTimestamp = function () {
      var t = new Date();
      t = [
        t.getFullYear(),
        t.getMonth() + 1,
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
      ];
      var e,
        n = '';
      for (e = 0; e < t.length; e++) n += v.pad(t[e]);
      return n;
    }),
    (_.getTimezone = function () {
      return -new Date().getTimezoneOffset();
    }),
    (_.getMinutes = function () {
      return Math.floor(this.getMs() / 1e3 / 60);
    }),
    (_.getSeconds = function () {
      return Math.round(this.getMs() / 1e3);
    }),
    _.isPerfomance ||
      ((_.deltaTime = 0),
      (_.lastNowTime = 0),
      (_.correctTime = 0),
      (_.timeCorrector = function (t) {
        (_.correctTime = _.getMs()),
          t &&
            _.correctTime < _.lastTime &&
            (_.deltaTime += t - _.correctTime + 20),
          v.setTimeout(
            function () {
              _.timeCorrector(_.correctTime);
            },
            20,
            'timeCorrector'
          );
      })),
    (_.initCorrector = function () {
      _.isPerfomance || _.timeCorrector(0);
    }),
    (_.nowTime = function () {
      if (this.isPerfomance) return this.getMs();
      var t = this.getMs() + _.deltaTime;
      return (
        t < _.lastNowTime && (t += _.lastNowTime + 10), (_.lastNowTime = t)
      );
    }),
    (_.nowEventTime = function () {
      return Math.round((_.nowTime() - _.initTime) / 50);
    }),
    (v.toString = function (t) {
      return Object.prototype.toString.call(t);
    }),
    (v.isFunction = function (t) {
      return 'function' == typeof t;
    }),
    (v.isArray = function (t) {
      return v.isFunction(Array.isArray)
        ? Array.isArray(t)
        : '[object Array]' === v.toString(t);
    }),
    (v.mergeArrays = function (t) {
      var e,
        n,
        r = arguments.length;
      for (e = 1; e < r; e++) {
        var i = arguments[e];
        if (v.isArray(i) || (i && '[object Arguments]' === i.toString()))
          for (n = 0; n < i.length; n++) t[t.length] = i[n];
      }
      return t;
    }),
    (v.defer = function (t, e, n, r, i) {
      return v.setTimeout(
        function () {
          t.apply(n, r || []);
        },
        e,
        i
      );
    }),
    (v.throttle = function (t, e, n, r) {
      var i, o, a;
      return function () {
        (o = arguments),
          (a = this),
          i ||
            (function () {
              (i = null),
                o &&
                  (t.apply(n || a, o),
                  (o = null),
                  (i = v.setTimeout(arguments.callee, e, r)));
            })();
      };
    });
  var w = y.inherit({
      storage: null,
      storageKey: 'dataBuffer',
      store: {
        _keys: [],
        _values: [],
        get: function (t) {
          return -1 == (t = v.arrayIndexOf(this._keys, t))
            ? null
            : this._values[t];
        },
        set: function (t, e) {
          this._keys.push(t), this._values.push(e);
        },
        pop: function (t) {
          if (-1 == (t = v.arrayIndexOf(this._keys, t))) return null;
          var e = this._values[t];
          return this._keys.splice(t, 1), this._values.splice(t, 1), e;
        },
      },
      maxBufferSize: 255,
      flushTimeout: 1e4,
      startBufferTime: 0,
      active: !0,
      meta: null,
      onFlush: function () {},
      onFlushCtx: null,
      bufferExpireTime: 864e5,
      _initComponent: function () {
        var t;
        w.superclass._initComponent.apply(this, arguments),
          (this.wrappers = []),
          (this._data = []),
          (this._packetNumber = 0),
          (this._flushTID = null),
          (this._saveToStorageThrottled = v.throttle(
            this._saveToStorage,
            300,
            this,
            'DataBuffer._saveToStorage'
          )),
          this.storage &&
            (t = this.storage.get(this.storageKey)) &&
            t.data &&
            t.meta &&
            t.time &&
            t.time + this.bufferExpireTime > +_.getMs() &&
            this.onFlush.call(
              this.onFlushCtx || this,
              this.dataFromStorage(t.data),
              t.meta,
              t.pnum
            ),
          this.clear();
      },
      setWVType: function (t) {
        (this.wvType = t), (this._sender.version = t);
      },
      getFlushSize: function () {
        return this._data.length;
      },
      mergeData: function (t, e) {
        v.mergeArrays(t, e);
      },
      updateStamp: function (t, e) {
        t.stamp !== n &&
          ((e.stamp = t.stamp), 'eof' !== t.type && delete t.stamp);
      },
      append: function (t, e) {
        this.mergeData(this._data, t),
          this._saveToStorageThrottled(),
          this.active &&
            ((e ||
              this.getFlushSize() >= this.maxBufferSize ||
              this.getFlushSize() === this.maxChunkSize) &&
              this._flush(e),
            this._flushTID ||
              (this._flushTID = v.defer(
                this._flush,
                this.flushTimeout,
                this,
                [e],
                'DataBuffer._flush'
              )));
      },
      activate: function () {
        this.active || ((this.active = !0), this.append([]));
      },
      clear: function () {
        (this._data.length = 0),
          (this._flushTID = null),
          this.storage && this.storage.remove(this.storageKey);
      },
      _flush: function (t) {
        if (!this.getFlushSize()) return this.clear(), !1;
        this.onFlush.call(
          this.onFlushCtx || this,
          this._data,
          this.meta,
          this._packetNumber,
          t
        ),
          this._packetNumber++,
          this.clear();
      },
      dataFromStorage: function (t) {
        return t;
      },
      dataToStorage: function (t) {
        return t;
      },
      _saveToStorage: function () {
        this.storage &&
          this._data.length &&
          this.storage.set(this.storageKey, {
            data: this.dataToStorage(this._data),
            meta: this.meta,
            pnum: this._packetNumber,
            time: _.getMs(),
          });
      },
    }),
    E = 'ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr'.split(
      ' '
    ),
    k = {
      storage: {},
      init: function () {
        var e = this;
        return (
          r(
            function () {
              (t.Ya = t.Ya || {}),
                (t.Ya._metrika = t.Ya._metrika || {}),
                (e.storage = t.Ya._metrika);
            },
            '',
            !0
          )(),
          this
        );
      },
      setSafe: function (t, e) {
        var i = this;
        return (
          r(
            function () {
              i.storage[t] === n && (i.storage[t] = e);
            },
            '',
            !0
          )(),
          this
        );
      },
      set: function (e, n) {
        return (
          r(
            function () {
              t.Ya._metrika[e] = n;
            },
            '',
            !0
          )(),
          this
        );
      },
      get: function (e, i) {
        return r(
          function () {
            var r = t.Ya._metrika[e];
            return r === n ? i : r;
          },
          '',
          !0
        )();
      },
    };
  v.async = function (e, n, r) {
    if (t.postMessage) {
      var i = '__ym__promise' + Math.random() + '_' + _.getMs(),
        o = function (r) {
          try {
            var a = r.data;
          } catch (t) {
            return;
          }
          a === i &&
            (r.stopPropagation && r.stopPropagation(),
            e.call(n),
            b.un(t, 'message', o, null, { passive: !1 }));
        };
      b.on(t, 'message', o, null, { passive: !1, name: '.async.' + (r || '') }),
        t.postMessage(i, '*');
    } else
      v.setTimeout(function () {
        e.call(n);
      }, 0);
  };
  var x = y.inherit({
      transports: [],
      globalConfig: k,
      postParams: [],
      isDisabled: function () {
        return this.globalConfig.get('oo');
      },
      send: function (t, e, n, r) {
        var o = [t],
          a = this,
          s = n || function () {};
        a.isDisabled()
          ? s.call(r)
          : function t(n) {
              if (n < this.transports.length)
                try {
                  var c = new this.transports[n]({
                    postParams: this.postParams,
                    queryStringParams: this.queryStringParams,
                  });
                  (e['browser-info'] = c.logInfo(e['browser-info'])),
                    function i(u) {
                      u >= o.length
                        ? c.blockNext() || t.call(this, n + 1)
                        : c.request(
                            o[u],
                            e,
                            function (t, e, n) {
                              t
                                ? s.call(r, e, n)
                                : v.async(
                                    function () {
                                      i.call(a, u + 1);
                                    },
                                    this,
                                    'senderCall'
                                  );
                            },
                            this
                          );
                    }.call(this, 0);
                } catch (e) {
                  i(e, 'send by ' + (c && c.id)), t.call(this, n + 1);
                }
            }.call(this, 0);
      },
    }),
    O = {};
  (v.keys = function (t) {
    var e,
      n = [];
    for (e in t) t.hasOwnProperty(e) && n.push(e);
    return n;
  }),
    (v.map = function (t, e) {
      var n,
        r = [];
      for (n = 0; n < e.length; n++) r.push(t(e[n], n));
      return r;
    }),
    (O.stringify = function (t, e) {
      var r,
        i,
        o = [],
        a = e || {},
        s = {},
        c = v.keys(t).length;
      if (a.lastOrdering !== n)
        for (i = 1; i <= e.lastOrdering.length; i++)
          s[e.lastOrdering[i - 1]] = c + i;
      if (a.firstOrdering !== n)
        for (i = 0; i < e.firstOrdering.length; i++) s[e.firstOrdering[i]] = i;
      for (r in t)
        if (t.hasOwnProperty(r))
          if (((a = t[r]), v.isArray(a)))
            for (i = 0; i < a.length; i++)
              o.push({
                key: r,
                value:
                  encodeURIComponent(r) +
                  '=' +
                  encodeURIComponent(String(a[i])),
              });
          else
            o.push({
              key: r,
              value:
                encodeURIComponent(r) + '=' + encodeURIComponent(String(a)),
            });
      return (
        o.sort(function (t, e) {
          var n = s[t.key],
            r = s[e.key];
          return void 0 === n && (n = c), void 0 === r && (r = c), n - r;
        }),
        v
          .map(function (t) {
            return t.value;
          }, o)
          .join('&')
      );
    }),
    (v.inArray = function (t, e) {
      var n;
      for (n = 0; n < t.length; n++) if (t[n] == e) return !0;
      return !1;
    });
  var T = y.inherit({
      postParams: [],
      index: 0,
      blockNext: function () {
        return !1;
      },
      logInfo: function (t) {
        var e;
        if (t)
          return (
            (t = (e = t.match(/^ti:\d:/)) ? t.replace(e[0], '') : t),
            'ti:' + this.index + ':' + t
          );
      },
      _buildUrl: function (t, e) {
        var n = O.stringify(e, this.queryStringParams);
        return t + (-1 < t.indexOf('?') ? '&' : n ? '?' : '') + n;
      },
      _splitParams: function (t) {
        var e = {},
          n = {};
        return (
          v.forEachKey(
            t,
            function (t, r) {
              v.inArray(this.postParams, t) ? (n[t] = r) : (e[t] = r);
            },
            this
          ),
          { get: e, post: n }
        );
      },
      _parseResp: function (t) {
        return t;
      },
    }),
    S = T.inherit({
      id: 'XHR',
      index: 7,
      method: 'POST',
      withCredentials: !0,
      request: function (e, n, r, i) {
        var o,
          a = this;
        if (
          /[^a-z0-9.:-]/.test(Gt.host) &&
          t.opera &&
          'function' == typeof t.opera.version
        ) {
          var s = t.opera.version();
          if ('string' == typeof s && '12' === s.split('.')[0])
            return r.call(i, !1);
        }
        if (t.XMLHttpRequest) {
          var c = new XMLHttpRequest();
          if ('withCredentials' in c) {
            (n = this._splitParams(n)), (e = this._buildUrl(e, n.get));
            try {
              c.open(this.method, e, !0);
            } catch (t) {
              return r.call(i, !1);
            }
            return (
              (c.withCredentials = this.withCredentials),
              this._setHeaders(c),
              c.send(this._preparePostParams(n)),
              (c.onreadystatechange = function () {
                if (4 === c.readyState) {
                  try {
                    o = a._parseResp(c.responseText);
                  } catch (t) {
                    return r.call(i, !1);
                  }
                  r.apply(i, [200 === c.status].concat(o));
                }
              }),
              void this._timeOutCheck(c, r, i)
            );
          }
        }
        r.call(i, !1);
      },
      _timeOutCheck: function (t, e, n) {
        this.timeout &&
          ((t.timeout = this.timeout),
          v.setTimeout(function () {
            t.abort ? t.abort() : e.call(n, !1);
          }, this.timeout + 100));
      },
      setMethod: function (t) {
        this.method = t;
      },
      _preparePostParams: function (t) {
        return O.stringify(t.post);
      },
      _setHeaders: function (t) {
        t.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      },
    }),
    A = {};
  (v.memorize = function (t, e) {
    var n = 'memorize';
    return function () {
      return 'memorize' === n && (n = t.apply(e || this, arguments)), n;
    };
  }),
    (A.isAndroidWebView = r(function () {
      var t = navigator.userAgent || '';
      return (
        t.match(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]/) ||
        t.match(
          /Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*/
        ) ||
        t.match(/; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
      );
    }, 'isAndroidWebView'));
  var I = T.inherit({
    id: 'beacon',
    index: 1,
    request: function (t, e, n, r) {
      'function' == typeof navigator.sendBeacon &&
      !A.isAndroidWebView() &&
      navigator.onLine
        ? (((e = this._splitParams(e)).get['force-urlencoded'] = 1),
          n.call(
            r,
            navigator.sendBeacon(this._buildUrl(t, e.get), O.stringify(e.post))
          ))
        : n.call(r, !1);
    },
  });
  v.random = function (t, e) {
    return (
      2 > arguments.length && ((e = t), (t = 0)),
      1 > arguments.length && (e = 1073741824),
      Math.floor(Math.random() * (e - t)) + t
    );
  };
  var C = T.inherit({
      id: 'form',
      index: 2,
      enctype: 'application/x-www-form-urlencoded',
      htmlfileOnly: !1,
      _initComponent: function () {
        C.superclass._initComponent.apply(this, arguments),
          '_htmlfile' in C.prototype ||
            (C.prototype._htmlfile = this._createHtmlfile()),
          (this._doc = this._htmlfile || (this.htmlfileOnly ? null : e));
      },
      request: function (t, e, n, r) {
        var i = this._doc;
        if (!i) return n.call(r, !1);
        e = this._splitParams(e);
        var o = 'ifr' + v.random(),
          a = i.createElement('div');
        (a.style.position = 'absolute'),
          (a.style.left = '-99999px'),
          (a.style.top = '-99999px');
        var s = [
          '<iframe name="',
          o,
          '"></iframe>',
          '<form action="',
          this._buildUrl(t, e.get),
          '" method="post" target="',
          o,
          '" enctype="',
          this.enctype,
          '">',
        ];
        v.forEachKey(e.post, function (t) {
          v.mergeArrays(s, [
            '<input type="hidden" autocomplete="off" autocorrect="off"',
            ' autocapitalize="off" spellcheck="false" name="',
            t,
            '"/>',
          ]);
        }),
          v.mergeArrays(s, ['</form>']),
          (a.innerHTML = s.join('')),
          i.body.appendChild(a);
        var c = a.getElementsByTagName('form')[0];
        return (
          v.forEachKey(e.post, function (t, e) {
            c[t].value = e;
          }),
          c.submit(),
          v.setTimeout(
            function () {
              i.body.removeChild(a);
            },
            1e4,
            'TransportForm.request.2'
          ),
          n.call(r, !0, 'tf.request')
        );
      },
      _createHtmlfile: function () {
        try {
          if (t.ActiveXObject) {
            var e = new ActiveXObject('htmlfile');
            return (
              e.open(), e.write('<html><body></body></html>'), e.close(), e
            );
          }
        } catch (t) {}
        return null;
      },
    }),
    P = C.inherit({ id: 'htmlfile', index: 3, htmlfileOnly: !0 }),
    N = T.inherit({
      id: 'img',
      index: 4,
      request: function (t, n, i, o) {
        t = this._buildUrl(t, n);
        var a = !1;
        (n = e.createElement('img')),
          (i = i || function () {}),
          (n.onload = r(function () {
            a || (i.call(o, !0), (a = !0));
          }, 'TransportImage.request')),
          (n.onerror = r(function () {
            a || (i.call(o, !1), (a = !0));
          }, 'TransportImage.request')),
          (n.src = t),
          this.timeout &&
            v.setTimeout(
              function () {
                a || (i.call(o, !1), (a = !0));
              },
              this.timeout,
              'ti.request'
            );
      },
    }),
    M = {
      stringify: function (t) {
        try {
          var e = JSON.stringify(t);
        } catch (t) {}
        return v.inArray(['{}', n], e) ? 'null' : e;
      },
    };
  v.toJSON = function (t) {
    var e;
    if (t === n) return '';
    if (null === t) return 'null';
    switch (t.constructor) {
      case Boolean:
        return t.toString();
      case Number:
        return isFinite(t) ? t.toString() : 'null';
      case String:
        return (
          '"' +
          t
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r') +
          '"'
        );
      case Array:
        var r = [],
          i = 0;
        for (e = t.length; i < e; i++) r[r.length] = v.toJSON(t[i]);
        return '[' + r.join(',') + ']';
      case Object:
        for (i in ((r = []), t))
          t.hasOwnProperty(i) &&
            t[i] !== n &&
            (r[r.length] = v.toJSON(i) + ':' + v.toJSON(t[i]));
        return '{' + r.join(',') + '}';
      default:
        return M.stringify(t);
    }
  };
  var R = y.inherit({
    counterId: '',
    _initComponent: function () {
      R.superclass._initComponent.apply(this, arguments), (this._ls = null);
      try {
        this._ls = t.localStorage;
      } catch (t) {}
    },
    set: function (t, e) {
      if (this.isEnabled())
        try {
          !e || (e && v.isArray(e) && !e.length)
            ? this.remove(t)
            : this._ls.setItem(this._getLsKey(t), v.toJSON(e));
        } catch (t) {}
    },
    get: function (t) {
      if (this.isEnabled())
        try {
          return JSON.parse(this._ls.getItem(this._getLsKey(t)));
        } catch (t) {}
      return null;
    },
    remove: function (t) {
      if (this.isEnabled())
        try {
          this._ls.removeItem(this._getLsKey(t));
        } catch (t) {}
    },
    isEnabled: function () {
      return (
        this._ls &&
        t.JSON &&
        'object' == typeof this._ls &&
        'object' == typeof t.JSON
      );
    },
    getStorageId: function () {
      var t = this.get('lsid');
      return (
        t || ((t = Math.round(Math.random() * _.getMs())), this.set('lsid', t)),
        t
      );
    },
    clearStorageId: function () {
      this.remove('lsid');
    },
    _getLsKey: function (t) {
      return '_ym' + this.counterId + '_' + t;
    },
  });
  (v.fnv32a = function (t) {
    var e,
      n = 2166136261,
      r = 0;
    for (e = t.length; r < e; ++r)
      (n ^= t.charCodeAt(r)),
        (n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24));
    return n >>> 0;
  }),
    (v.clearTimeout = function (t) {
      return v.getNativeFunction('clearTimeout')(t);
    }),
    (v.getTld = function () {
      if (!this._tld) {
        var t = Gt.hostname.split('.');
        this._tld = t[t.length - 1];
      }
      return this._tld;
    });
  var D = {
      abc: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      tail: '+/=',
      tailSafe: '*-_',
      encode: function (t, e) {
        var n,
          r = (D.abc + (e ? D.tailSafe : D.tail)).split(''),
          i = t.length,
          o = [],
          a = i - (i % 3);
        for (n = 0; n < a; n += 3) {
          var s = (t[n] << 16) + (t[n + 1] << 8) + t[n + 2];
          v.mergeArrays(o, [
            r[(s >> 18) & 63],
            r[(s >> 12) & 63],
            r[(s >> 6) & 63],
            r[63 & s],
          ]);
        }
        switch (i - a) {
          case 1:
            (s = t[a] << 4),
              v.mergeArrays(o, [r[(s >> 6) & 63], r[63 & s], r[64], r[64]]);
            break;
          case 2:
            (s = (t[a] << 10) + (t[a + 1] << 2)),
              v.mergeArrays(o, [
                r[(s >> 12) & 63],
                r[(s >> 6) & 63],
                r[63 & s],
                r[64],
              ]);
        }
        return o.join('');
      },
      decode: function (t, e) {
        for (
          var n,
            r,
            i,
            o,
            a,
            s = D.abc + (e ? D.tailSafe : D.tail),
            c = 0,
            u = '';
          t.length % 4;

        )
          t += '=';
        do {
          if (
            ((n = s.indexOf(t.charAt(c++))),
            (r = s.indexOf(t.charAt(c++))),
            (o = s.indexOf(t.charAt(c++))),
            (a = s.indexOf(t.charAt(c++))),
            0 > n || 0 > r || 0 > o || 0 > a)
          )
            return null;
          (n = ((i = (n << 18) | (r << 12) | (o << 6) | a) >> 16) & 255),
            (r = (i >> 8) & 255),
            (i &= 255),
            (u =
              64 == o
                ? u + String.fromCharCode(n)
                : 64 == a
                ? u + String.fromCharCode(n, r)
                : u + String.fromCharCode(n, r, i));
        } while (c < t.length);
        return u;
      },
    },
    j = {
      encode: function (t) {
        var e,
          n = [],
          r = 0;
        for (e = t.length; r < e; r++) {
          var i = t.charCodeAt(r);
          128 > i
            ? n.push(i)
            : (127 < i && 2048 > i
                ? n.push((i >> 6) | 192)
                : (n.push((i >> 12) | 224), n.push(((i >> 6) & 63) | 128)),
              n.push((63 & i) | 128));
        }
        return n;
      },
    },
    L = y.inherit({
      counterId: '',
      onlyCurrentDomain: !1,
      skipPrefix: !1,
      _initComponent: function () {
        var e;
        if (
          (L.superclass._initComponent.apply(this, arguments),
          (this._domain = null),
          !this.onlyCurrentDomain)
        ) {
          var n = t.location.host.split('.');
          for (e = 2; ; ) {
            if (!(e <= n.length)) {
              this._domain = null;
              break;
            }
            if (
              ((this._domain = '.' + n.slice(-e).join('.')),
              e++,
              this.isEnabled())
            )
              break;
          }
        }
      },
      create: function (t, n, r) {
        (t = [this._prepareName(t) + '=' + encodeURIComponent(n)]),
          r &&
            ((n = new Date()).setTime(n.getTime() + 6e4 * r),
            t.push('expires=' + n.toGMTString())),
          this._domain && t.push('domain=' + this._domain),
          t.push('path=/');
        try {
          e.cookie = t.join(';');
        } catch (t) {}
      },
      read: function (t) {
        try {
          var n = e.cookie;
        } catch (t) {}
        return n &&
          n.match(new RegExp('(?:^|;\\s*)' + this._prepareName(t) + '=([^;]*)'))
          ? decodeURIComponent(RegExp.$1)
          : null;
      },
      erase: function (t) {
        this.create(t, '', -1);
      },
      isEnabled: function () {
        this.create('metrika_enabled', '1', 60);
        var t = !!this.read('metrika_enabled');
        return this.erase('metrika_enabled'), t;
      },
      _prepareName: function (t) {
        return (
          (this.skipPrefix ? '' : '_ym_') +
          t +
          (this.counterId ? '_' + this.counterId : '')
        );
      },
    });
  (L.get = function (t) {
    return new L({ onlyCurrentDomain: !0 }).read(t);
  }),
    (L.set = function (t, e, n) {
      return new L({ onlyCurrentDomain: !0 }).create(t, e, n);
    }),
    (L.isEnabled = function () {
      return new L({ onlyCurrentDomain: !0 }).isEnabled();
    }),
    (v.isNativeFunction = function (t, e) {
      return (
        !(!t || 'function' != typeof t) &&
        new RegExp(
          'function\\s*' +
            e +
            '\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}',
          'i'
        ).test(t.toString())
      );
    });
  var F = {
    removeNode: function (t) {
      var e = t && t.parentNode;
      e && e.removeChild(t);
    },
  };
  (A.isSafariWebView = r(function () {
    var t = navigator.userAgent || '';
    return (
      navigator.vendor &&
      -1 < navigator.vendor.indexOf('Apple') &&
      ((!t.match(/Safari/) && t.match(/Mobile/)) ||
        t.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) ||
        -1 !== t.indexOf('FB_IAB') ||
        -1 !== t.indexOf('FBAV') ||
        -1 !== t.indexOf('OKApp') ||
        -1 !== t.indexOf('GSA/'))
    );
  }, 'isSafariWebView')),
    (A.isSafari = function () {
      try {
        return (
          navigator.vendor &&
          -1 < navigator.vendor.indexOf('Apple') &&
          navigator.userAgent &&
          !navigator.userAgent.match('CriOS')
        );
      } catch (t) {}
      return !1;
    }),
    (A.getMacOSVersion = r(
      function () {
        var t = navigator.userAgent.match(
          /Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/
        );
        return t ? [+t[1], +t[2], +t[2]] : [0, 0, 0];
      },
      '',
      !0
    )),
    (A.getPlatform = r(
      function () {
        return '' + navigator.platform;
      },
      '',
      !0
    )),
    (A.isIOS = r(
      function () {
        var t = A.getPlatform() || '';
        return 'iPhone' === t || 'iPad' === t;
      },
      '',
      !0
    )),
    (A.getITPYaBroVersion = function () {
      var e = /\sYptp\/\d\.(\d+)\s/,
        n = null;
      return (
        t.navigator &&
          navigator.userAgent &&
          (e = e.exec(navigator.userAgent)) &&
          1 < e.length &&
          (n = parseInt(e[1], 10)),
        n
      );
    }),
    (A.edgVersion = v.memorize(function () {
      var e = null,
        n = /Edg\/(\d+)\./;
      return (
        t.navigator &&
          navigator.userAgent &&
          (n = navigator.userAgent.match(n)) &&
          1 < n.length &&
          (e = parseInt(n[1], 10)),
        e
      );
    })),
    (A.isFF = r(function (e) {
      var n = !1;
      if (
        (t &&
          t.document &&
          t.document.documentElement &&
          t.document.documentElement.style &&
          (n =
            'MozAppearance' in t.document.documentElement.style &&
            void 0 !== t.InstallTrigger),
        n &&
          e &&
          t.navigator &&
          t.navigator.userAgent &&
          t.navigator.userAgent.match)
      ) {
        var r = t.navigator.userAgent.match(/Firefox\/([0-9]+)/);
        (n = !1), r && r.length && (n = (r = +r[1]) >= e);
      }
      return n;
    }, 'isFF'));
  var U = {
      _storage: new R(),
      globalConfig: null,
      key: 'zzlc',
      userInfo: '',
      updateInfo: function (t) {
        return (
          v.forEachKey(
            this.getInfoFlags(),
            function (e, n) {
              var r = n.call(this);
              r && (t[e] = r);
            },
            this
          ),
          t
        );
      },
      getYm: function () {
        var t = this._storage.get(this.ymKey) || {};
        return t.resp ? t.resp : this.genYm.call(this, t);
      },
      getYmD: function () {
        var t = this._storage.get(this.ymKey) || {};
        if (t.dmn) return t.dmn;
      },
      getZZ: function () {
        return this._storage.get(this.key)
          ? this._storage.get(this.key)
          : this.zz;
      },
      getPP: function () {
        return this.globalConfig && this.globalConfig.get('pp')
          ? this.globalConfig.get('pp')
          : this.pp;
      },
      getPU: function () {
        return this.globalConfig && this.globalConfig.get('pu')
          ? this.globalConfig.get('pu')
          : this.pu;
      },
      getFip: function () {
        if (this._storage.get(this.fipKey))
          return this._storage.get(this.fipKey);
      },
      getInfoFlags: function () {
        return {
          pi: this.getYm,
          pid: this.getYmD,
          zz: this.getZZ,
          pp: this.getPP,
          pu: this.getPU,
          fip: this.getFip,
        };
      },
      checkVersion: function () {
        var t = A.edgVersion(),
          e = A.getITPYaBroVersion();
        return this.globalConfig.get('isEU')
          ? 1
          : (50 <= e && 99 >= e) || (t && 79 <= t)
          ? 0
          : ((t = A.getMacOSVersion()),
            !((A.isIOS() || (10 <= t[0] && 13 <= t[2])) && A.isSafari()) ||
              A.isSafariWebView());
      },
      noop: function () {},
      genPu: function (e) {
        var n = v.fnv32a(t.location.host) + this.userInfo;
        return (this.pu = n), e.set('pu', n), n;
      },
      ymKey: 'pi',
      genYm: function (e) {
        var n = this,
          r = s(),
          i = _.getMinutes();
        if (
          !this.checkVersion() &&
          t.fetch &&
          this._storage.get('retryReqs') &&
          'yandex.ru' == r.hostname &&
          '/' == r.pathname &&
          !(e.lt && e.lt + 1440 > i)
        ) {
          e.lt = i;
          var o = (r = [
            'auto.ru/daiku',
            'thequestion.ru/daiku',
            'www.kinopoisk.ru/daiku',
            'www.maximonline.ru/_ym',
          ])[v.random(0, r.length)];
          fetch('//' + o, { credentials: 'include' })
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              t &&
                ((e.resp = t._ym_uid),
                (e.dmn = D.encode(j.encode(o))),
                n._storage.set(n.ymKey, e));
            })
            .catch(function () {
              n._storage.set(n.ymKey, e);
            });
        }
      },
      initPU: function (e, r) {
        var i = this,
          o = A.isFF(68);
        (this.globalConfig = r),
          r.get('pu') !== n ||
            (this.checkVersion() && !o) ||
            (r.setSafe('pu', null),
            e.addHandler(
              'gpu-get',
              function () {
                return { type: 'gpu-get', pu: r.get('pu') };
              },
              this
            ),
            t.opener
              ? ((o = v.setTimeout(
                  function () {
                    i.genPu(r);
                  },
                  200,
                  'pu'
                )),
                e.sendToIframe(
                  t.opener,
                  { type: 'gpu-get' },
                  this.handleGpu(o),
                  this
                ))
              : this.genPu(r));
      },
      handleGpu: function (t) {
        return function (e) {
          (e = e.pu),
            v.clearTimeout(t),
            e && ((this.pu = e), this.globalConfig.set('pu', e));
        };
      },
      onicecandidate: r(function (t) {
        var e;
        try {
          var n =
            (e = t.localDescription.sdp) &&
            e.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/);
        } catch (e) {
          return (
            (t.onicecandidate = this.noop),
            void ('closed' !== t.iceConnectionState && t.close())
          );
        }
        n &&
          0 < n.length &&
          ((this.pp = v.fnv32a(n[1])), this.globalConfig.set('pp', this.pp)),
          (t.onicecandidate = this.noop),
          t.close();
      }, 'wrt'),
      onOffer: function (t, e) {
        v.isFunction(t.setLocalDescription) &&
          t.setLocalDescription(e, this.noop, this.noop);
      },
      initPP: r(function (e) {
        var r =
          t.RTCPeerConnection ||
          t.mozRTCPeerConnection ||
          t.webkitRTCPeerConnection;
        if (
          ((this.globalConfig = e),
          t.navigator.onLine &&
            r &&
            e.get('pp') == n &&
            (this.globalConfig.setSafe('pp', null),
            r &&
              r.prototype &&
              r.prototype.constructor &&
              r.prototype.constructor.name))
        ) {
          try {
            var i = new r({ iceServers: [] });
            i.createDataChannel('y.metrika');
          } catch (t) {
            return;
          }
          if (v.isFunction(i.createOffer) && !i.createOffer.length) {
            try {
              var o = i.createOffer();
            } catch (t) {
              return;
            }
            v.isFunction(o.then) && o.then(v.bind(this.onOffer, this, i)),
              (i.onicecandidate = v.bind(this.onicecandidate, this, i));
          }
        }
      }, 'rcinit'),
      initZZ: function () {
        var n = 'ru',
          r = A.isFF(68),
          i = this;
        this.getZZ() ||
          (this.checkVersion() && !r) ||
          (r && (n = 'md'),
          ((r = v.getNativeFunction(
            'createElement',
            e
          )('iframe')).style.display = 'none'),
          (r.style.width = '1px'),
          (r.style.height = '1px'),
          (r.style.visibility = 'hidden'),
          (r.src =
            'https://mc.yandex.' + n + D.decode('L21ldHJpa2EvenpsYy5odG1s')),
          t.document.documentElement.appendChild(r),
          b.on(t, 'message', this.onMessage, this, { passive: !1 }),
          (this.frame = r),
          (this.timeout = v.setTimeout(
            function () {
              b.un(t, 'message', i.onMessage, i, { passive: !1 }),
                F.removeNode(i.frame),
                (i.zz = 'na');
            },
            3e3,
            'cd.initZZ'
          )));
      },
      onMessage: function (e) {
        e.data &&
          e.data.substr &&
          '__ym__zz' === e.data.substr(0, 8) &&
          ((this.zz = e.data.substr(8)),
          F.removeNode(this.frame),
          this._storage.set(this.key, this.zz),
          b.un(t, 'message', this.onMessage, this, { passive: !1 }),
          v.clearTimeout(this.timeout));
      },
      fipKey: 'fip',
      fpFactors: ['webGL', 'plugins', 'applePay', 'dnt'],
      initFip: function () {
        var t = 0;
        (t = A.isFF(68)),
          !Object.keys ||
            (this.checkVersion() && !t) ||
            this._storage.get(this.fipKey) ||
            ((t = (t = new X(
              v.reduce(
                function (t, e) {
                  return (t[e] = 1), t;
                },
                {},
                this.fpFactors
              )
            ))
              .toString(!1)
              .join('-')),
            this._storage.set(this.fipKey, t));
      },
    },
    B = x.inherit({
      protocol: '',
      host: 'mc.yandex.ru',
      queryStringParams: {
        firstOrdering: ['wmode', 'callback', 'cnt-class'],
        lastOrdering: ['browser-info'],
      },
      resource: '',
      counterId: '',
      counterType: 0,
      retry: !1,
      transports: [I, S, N, P],
      _initComponent: function () {
        B.superclass._initComponent.apply(this, arguments),
          this.retry && (this._storage = new R());
      },
      send: function (t, e, n, r) {
        var i = this.globalConfig.get(Mt.globalKey),
          o = this;
        i && 3 !== this.counterId
          ? i(function () {
              var i = o._registerRequest(t, e);
              o._sendSavedRequest(i, t, e, n, r);
            }, t)
          : ((i = o._registerRequest(t, e)),
            o._sendSavedRequest(i, t, e, n, r));
      },
      _sendSavedRequest: function (t, e, n, r, i) {
        var o = this.globalConfig.get('firstReqStatus'),
          a = e.forceNoRedirect;
        if ('process' != o) {
          o || this.globalConfig.set('firstReqStatus', 'process'),
            this.counterType && (e['cnt-class'] = this.counterType),
            this.globalConfig.get('pri') &&
              (n.pri = this.globalConfig.get('pri')),
            (n.st = _.getSeconds()),
            (n.u = B._userID),
            this.globalConfig.get('isEU') || (n = U.updateInfo(n)),
            (o = [
              this.protocol,
              '//',
              this.host,
              '/',
              this.resource,
              '/',
              this.counterId,
              a ? '/1' : '',
            ].join('')),
            delete e.forceNoRedirect;
          var s = [];
          return (
            n &&
              (v.forEachKey(n, function (t, e) {
                't' != t && v.mergeArrays(s, [t, e]);
              }),
              n.t && v.mergeArrays(s, ['t', n.t])),
            s.length && (e['browser-info'] = s.join(':')),
            B.superclass.send.call(
              this,
              o,
              e,
              function () {
                var e;
                this.globalConfig.set('firstReqStatus', 'complete'),
                  this._unregisterRequest(t);
                var n = this.globalConfig.get('firstReqCallbacks');
                if ((this.globalConfig.set('firstReqCallbacks', null), n))
                  for (e = 0; e < n.length; e++)
                    n[e][0]._sendSavedRequest.apply(n[e][0], n[e][1]);
                r && r.apply(i, arguments);
              },
              this
            )
          );
        }
        this.globalConfig.set(
          'firstReqCallbacks',
          v.mergeArrays(this.globalConfig.get('firstReqCallbacks') || [], [
            [this, arguments],
          ])
        );
      },
      _isRetryEnabled: function () {
        return this.retry && this._storage && this._storage.isEnabled();
      },
      _registerRequest: function (t, e) {
        var n;
        if (this._isRetryEnabled()) {
          (e.rqnl = e.rqnl || 0), e.rqnl++;
          var r = this._storage.get('retryReqs') || {};
          for (n = 1; r[n]; ) n++;
          return (
            (r[n] = {
              protocol: this.protocol,
              host: this.host,
              resource: this.resource,
              counterId: this.counterId,
              counterType: this.counterType,
              postParams: this.postParams,
              params: t,
              browserInfo: e,
              ghid: this.globalConfig.get('_globalMetrikaHitId'),
              time: _.getMs(),
            }),
            this._storage.set('retryReqs', r),
            n
          );
        }
      },
      _unregisterRequest: function (t) {
        if (t && this._isRetryEnabled()) {
          var e = this._storage.get('retryReqs') || {};
          e[t] && (delete e[t], this._storage.set('retryReqs', e));
        }
      },
      _getVersion: r(
        function () {
          return re;
        },
        '',
        !0
      ),
    });
  (B._storage = new R()),
    (B.initCookie = function (t) {
      var e = new L({ onlyCurrentDomain: 'uid' !== t }),
        n = e.read(t),
        r = B._storage.get(t),
        i = !1,
        o = e.read('d'),
        a = _.getSeconds();
      return (
        r &&
          !n &&
          ((n = r), (i = !0), e.create(t, n, 525600), e.create('d', a, 525600)),
        n
          ? (!o || 15768e3 < a - parseInt(o)) &&
            (e.create(t, n, 525600), e.create('d', a, 525600))
          : ((n = a + '' + v.random()),
            e.create(t, n, 525600),
            e.create('d', a, 525600)),
        B._storage.set(t, n),
        (B._userID = n),
        i
      );
    }),
    (B.retransmit = function (t) {
      var e = B._storage,
        n = e.get('retryReqs') || {};
      e.remove('retryReqs'),
        v.forEachKey(n, function (e, n) {
          var r = _.getMs();
          t.get('firstReqStatus') || t.set('firstReqStatus', 'complete'),
            n.ghid &&
              n.ghid != t.get('_globalMetrikaHitId') &&
              n.time &&
              n.time + 1728e5 > r &&
              500 < r - n.time &&
              2 >= n.browserInfo.rqnl &&
              new B({
                protocol: n.protocol,
                host: n.host,
                resource: n.resource,
                counterId: n.counterId,
                counterType: n.counterType,
                postParams: n.postParams || [],
                retry: !0,
              }).send(n.params, n.browserInfo);
        });
    }),
    (v.fletcher = function (t) {
      for (var e, n, r, i = t.length, o = 0, a = 255, s = 255; i; ) {
        i -= e = 21 < i ? 21 : i;
        do {
          (n = 'string' == typeof t ? t.charCodeAt(o) : t[o]),
            o++,
            255 < n && ((r = n >> 8), (n &= 255), (n ^= r)),
            (s += a += n);
        } while (--e);
        (a = (255 & a) + (a >> 8)), (s = (255 & s) + (s >> 8));
      }
      return 65535 ==
        (t = (((255 & a) + (a >> 8)) << 8) | ((255 & s) + (s >> 8)))
        ? 0
        : t;
    });
  var z = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
    H = v.memorize(function () {
      var t = new L(),
        e = s();
      return function (n) {
        return n(t, e);
      };
    }),
    V = function (t, e) {
      var n = e.search.match(z),
        r = null,
        i = t.read('turbo_uid');
      return (
        n && 2 <= n.length
          ? ((r = n[2]), t.create('turbo_uid', r, 86400))
          : i && (r = i),
        r
      );
    };
  (v.arrayEvery = function (t, e, n) {
    var r;
    for (r = 0; r < t.length; r++) if (!e.call(n, t[r], r, t)) return !1;
    return !0;
  }),
    (v.is4Bytes = function (t) {
      return !v.arrayEvery(
        (encodeURIComponent(t).match(/(%[A-F,\d]{2})+/g) || [])
          .join('')
          .split('%'),
        function (t) {
          return 240 > parseInt(t, 16);
        }
      );
    }),
    (v.trim = function (t, e) {
      return (
        (t = String(t).replace(/^\s+|\s+$/g, '')),
        e && t.length > e && (t = t.substr(0, e)),
        t
      );
    }),
    (v.isNumber = function (t) {
      return isFinite(t) && !isNaN(t) && '[object Number]' === v.toString(t);
    }),
    (v.isString = function (t) {
      return '[object String]' === v.toString(t);
    }),
    (v._hasIndexOf = [].indexOf && 0 === [n].indexOf(n)),
    (v.arrayIndexOf = v._hasIndexOf
      ? function (t, e) {
          return t.indexOf(e);
        }
      : function (t, e) {
          var n;
          for (n = 0; n < t.length; n++) if (t[n] === e) return n;
          return -1;
        }),
    (v.warning = function () {
      t.console &&
        'function' == typeof t.console.warn &&
        console.warn.apply(console, arguments);
    }),
    (v.isObject = function (t) {
      try {
        return t && null !== t && '[object Object]' === v.toString(t);
      } catch (t) {
        return !1;
      }
    }),
    (v._urlParser = null),
    (v.parseUrl = function (t) {
      if (!this._urlParser)
        try {
          this._urlParser = e.createElement('a');
        } catch (t) {}
      return this._urlParser
        ? ((this._urlParser.href = t),
          {
            protocol: this._urlParser.protocol,
            host: this._urlParser.host,
            port: this._urlParser.port,
            hostname: this._urlParser.hostname,
            hash: this._urlParser.hash,
            search: this._urlParser.search,
            query: this._urlParser.search.replace(/^\?/, ''),
            pathname: this._urlParser.pathname || '/',
            path: (this._urlParser.pathname || '/') + this._urlParser.search,
            href: this._urlParser.href,
          })
        : {};
    }),
    (v._playerRegexp = /^.+\.mtproxy\.yandex\.net$/),
    (v.isMetrikaPlayer = function () {
      return (
        'MetrikaPlayer' == t.name ||
        this._playerRegexp.test(t.location.hostname)
      );
    }),
    (F.getDocumentCharset = function () {
      return ('' + (e.characterSet || e.charset || '')).toLowerCase();
    }),
    (F.getBody = function () {
      for (var t = e.getElementsByTagName('body'); 0 < t.length; ) return t[0];
    }),
    (F.getRootElement = function () {
      var t = e.documentElement,
        n = F.getBody();
      return 'CSS1Compat' == e.compatMode ? t : n || t;
    }),
    (F.getViewportSize = function () {
      var e = F.getRootElement();
      return [e.clientWidth || t.innerWidth, e.clientHeight || t.innerHeight];
    }),
    (F.getDocumentTitle = function () {
      var t = e.title;
      return (
        'string' != typeof t &&
          (t =
            (t = e.getElementsByTagName('title')) && t.length
              ? t[0].innerHTML
              : ''),
        t
      );
    }),
    (A.getSilverlightVersion = v.memorize(function () {
      if (t.ActiveXObject)
        try {
          var e = new ActiveXObject('AgControl.AgControl'),
            n = function (t, e, n, i) {
              for (; r(t, e); ) e[n] += i;
              e[n] -= i;
            },
            r = function (t, e) {
              return t.isVersionSupported(
                e[0] + '.' + e[1] + '.' + e[2] + '.' + e[3]
              );
            },
            i = [1, 0, 0, 0];
          n(e, i, 0, 1),
            n(e, i, 1, 1),
            n(e, i, 2, 1e4),
            n(e, i, 2, 1e3),
            n(e, i, 2, 100),
            n(e, i, 2, 10),
            n(e, i, 2, 1),
            n(e, i, 3, 1);
          var o = i.join('.');
        } catch (t) {}
      else
        (n = (n = t.navigator).plugins && n.plugins['Silverlight Plug-In']) &&
          (o = n.description);
      return o || '';
    })),
    (A.getFlashVersion = v.memorize(function () {
      var e = t.navigator;
      if (
        void 0 !== e.plugins &&
        'object' == typeof e.plugins['Shockwave Flash']
      ) {
        var n = e.plugins['Shockwave Flash'],
          r = n.version;
        ((n = n.description) || r) &&
          (void 0 === (e = e.mimeTypes) ||
            !e['application/x-shockwave-flash'] ||
            e['application/x-shockwave-flash'].enabledPlugin) &&
          (r
            ? (A._flashVersion = r)
            : n &&
              (A._flashVersion = n
                .replace(/([a-zA-Z]|\s)+/, '')
                .replace(/(\s+r|\s+b[0-9]+)/, '.')));
      } else if (void 0 !== t.ActiveXObject)
        try {
          (n = (r = new ActiveXObject(
            'ShockwaveFlash.ShockwaveFlash'
          )).GetVariable('$version')) &&
            (A._flashVersion = n
              .split(' ')[1]
              .replace(/,/g, '.')
              .replace(/[^.\d]/g, ''));
        } catch (t) {}
      return A._flashVersion;
    })),
    (A.getLanguage = v.memorize(function () {
      var e = (t.navigator
        ? navigator.language ||
          navigator.userLanguage ||
          navigator.browserLanguage ||
          navigator.systemLanguage
        : ''
      ).toLowerCase();
      return v.isString(e) ? e : '';
    })),
    (A.getJavaEnabled = v.memorize(function () {
      try {
        return navigator.javaEnabled();
      } catch (t) {
        return !1;
      }
    })),
    (A.getFingerPrint = v.memorize(function () {
      var t,
        e = [];
      if (navigator.plugins && navigator.plugins.length)
        for (t = 0; t < navigator.plugins.length; t++) {
          var n = navigator.plugins[t];
          v.mergeArrays(e, [n.name, n.version, n.description, n.filename]);
        }
      if (navigator.mimeTypes && navigator.mimeTypes.length)
        for (t = 0; t < navigator.mimeTypes.length; t++)
          (n = navigator.mimeTypes[t]),
            v.mergeArrays(e, [n.type, n.description, n.suffixes]);
      return v.fnv32a(e.join(';')) + '01';
    })),
    (A.getNotificationPermission = function () {
      try {
        var t = Notification.permission;
      } catch (t) {}
      switch (t) {
        case 'denied':
          return 1;
        case 'granted':
          return 2;
      }
    }),
    (A.isIframe = v.memorize(function () {
      try {
        return t.top != t;
      } catch (t) {
        return !1;
      }
    })),
    (A._nMap = {
      other: '0',
      none: '1',
      unknown: '2',
      wifi: '3',
      ethernet: '4',
      bluetooth: '5',
      cellular: '6',
      wimax: '7',
      mixed: '8',
    }),
    (A.netType = function () {
      var t = (navigator.connection || { type: '' }).type;
      return A._nMap[t] || t;
    }),
    (A.isHeadLess = v.memorize(function () {
      var e,
        n = ['_phantom', '__nightmare', 'callPhantom'];
      for (e = 0; e < n.length; e++) if (t[n[e]]) return !0;
      return (
        !!(
          /PhantomJS/.test(t.navigator.userAgent) ||
          t.navigator.webdriver ||
          (t.isChrome && !t.chrome)
        ) || /HeadlessChrome/.test(t.navigator.userAgent)
      );
    })),
    (A.getNavigationStart = v.memorize(function () {
      var e = t.performance || t.webkitPerformance;
      return e && e.timing && e.timing.navigationStart;
    })),
    (A.isSameOriginTopFrame = function () {
      try {
        return t.top.contentWindow || !0;
      } catch (t) {
        return !1;
      }
    }),
    (A.isDesktop = function (t) {
      var e = t.get('bt', {});
      return (
        t.get('bt') === n &&
          ((e.p = navigator.getBattery ? navigator.getBattery() : null),
          t.set('bt', e),
          e.p &&
            e.p.then &&
            e.p.then(function (t) {
              e.v = t.charging && 0 === t.chargingTime;
            })),
        e.v
      );
    }),
    (A.isSelenium = v.memorize(function () {
      var e,
        n = ['_selenium', 'callSelenium', '_Selenium_IDE_Recorder'],
        r = ['selenium', 'webdriver', 'driver'],
        i = t.document,
        o = '__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped'.split(
          ' '
        );
      for (e = 0; e < n.length; e++) if (t[n[e]]) return !0;
      for (e = 0; e < o.length; e++) if (i && i[o[e]]) return !0;
      if (
        t.external &&
        t.external.toString &&
        0 <= t.external.toString().indexOf('Sequentum')
      )
        return !0;
      if (i.documentElement && i.documentElement.getAttribute)
        for (e = 0; e < r.length; e++)
          if (i.documentElement.getAttribute(r[e])) return !0;
      return !1;
    })),
    (b.ready = function (n) {
      var r = e.readyState;
      if ('interactive' === r || 'complete' === r)
        v.setTimeout(n, 0, 'evt::ready');
      else {
        var i = function () {
          b.un(e, 'DOMContentLoaded', i), b.un(t, 'load', i), n();
        };
        b.on(e, 'DOMContentLoaded', i), b.on(t, 'load', i);
      }
    });
  var G = {
    url: 'https://mc.yandex.ru/metrika/',
    _value: null,
    init: function (t) {
      var e = this._getLs().read('isad');
      (this.globalConfig = t || k),
        e ? this._set(e) : this._getReqStatus() || this._send();
    },
    getVal: function () {
      return this._value;
    },
    _set: function (t) {
      this._value = '1' == t || '2' == t ? t : null;
    },
    _send: function () {
      var t = this;
      this._setReqStatus('process'),
        b.ready(function () {
          var n = e.createElement('img');
          (n.onload = function () {
            t._saveReq(!1), F.removeNode(this);
          }),
            (n.onerror = function () {
              t._saveReq(!0), F.removeNode(this);
            }),
            (n.src =
              t.url +
              String.fromCharCode(
                97,
                100,
                118,
                101,
                114,
                116,
                46,
                103,
                105,
                102
              )),
            A.isSafari() &&
              ((n.style.position = 'absolute'),
              (n.style.visibility = 'hidden'),
              (n.style.width = '0px'),
              (n.style.height = '0px'),
              F.getRootElement().appendChild(n));
        });
    },
    _saveReq: function (t) {
      (this._value = t = t ? '1' : '2'),
        this._setReqStatus('complete'),
        this._getLs().create('isad', t, 1200);
    },
    _setReqStatus: function (t) {
      try {
        this.globalConfig.set('adStatus', t);
      } catch (t) {}
    },
    _getReqStatus: function () {
      try {
        return this.globalConfig.get('adStatus');
      } catch (t) {
        return 'complete';
      }
    },
    _getLs: function () {
      return this._ls || (this._ls = new L()), this._ls;
    },
  };
  (j.decode = function (t) {
    for (var e, n, r, i = '', o = 0; o < t.length; )
      128 > (e = t.charCodeAt(o))
        ? ((i += String.fromCharCode(e)), o++)
        : 191 < e && 224 > e
        ? ((n = t.charCodeAt(o + 1)),
          (i += String.fromCharCode(((31 & e) << 6) | (63 & n))),
          (o += 2))
        : ((n = t.charCodeAt(o + 1)),
          (r = t.charCodeAt(o + 2)),
          (i += String.fromCharCode(
            ((15 & e) << 12) | ((63 & n) << 6) | (63 & r)
          )),
          (o += 3));
    return i;
  }),
    (v.reduce = function (t, e, r) {
      var i = 0;
      for (e == n && ((e = r[0]), i++); i < r.length; ) (e = t(e, r[i])), i++;
      return e;
    }),
    (v.filter = function (t, e) {
      var n,
        r = [];
      for (n = 0; n < e.length; n++) t(e[n]) && r.push(e[n]);
      return r;
    }),
    (M.parse = function (t) {
      try {
        return JSON.parse(t);
      } catch (t) {
        return null;
      }
    });
  var W = B.inherit({
    hitId: 0,
    trackHash: !1,
    trimParams: !1,
    webvisor: !1,
    counter: null,
    counterNum: 0,
    windowName: null,
    resource: 'watch',
    retry: !0,
    paramsQueue: {
      paramsQueue: [],
      length: function () {
        return this.paramsQueue.length;
      },
      push: function (t) {
        this.paramsQueue.push(t);
      },
      _reduce: function (t) {
        return function (e, n) {
          return (
            v.arrayEvery(v.keys(n), function (r) {
              return e.hasOwnProperty(r)
                ? 1
                : (-1 == v.arrayIndexOf(t, r) && ((e[r] = n[r]), delete n[r]),
                  1);
            }),
            e
          );
        };
      },
      _filter: function (t) {
        return v.keys(t).length;
      },
      mixin: function (t) {
        var e = {};
        return (
          this.paramsQueue.length &&
            ((e = v.reduce(this._reduce(v.keys(t)), {}, this.paramsQueue)),
            (this.paramsQueue = v.filter(this._filter, this.paramsQueue))),
          v.mixin({}, t, e)
        );
      },
    },
    postParams: ['site-info'],
    countersNoTitle: '22836271 9928105 26128362 29850769 22327510 40081755 16082914 279297 23323747 16082899'.split(
      ' '
    ),
    fake: !1,
    sendTitle: !0,
    _initComponent: function () {
      W.superclass._initComponent.apply(this, arguments),
        (this._trackHash = this.trackHash),
        (this.turboState = H()),
        '0' == '' + this.counterType &&
          (this.sendTitle =
            -1 === v.arrayIndexOf(this.countersNoTitle, '' + this.counterId));
    },
    setTrackHash: function (t) {
      this._trackHash = t;
    },
    sendHit: function (t) {
      this._hitExt(
        {
          url: t.url,
          title: t.title,
          referrer: t.referrer,
          vParams: t.vParams,
          modes: v.mixin(t.modes || {}, { ar: !0, saveRef: !0, pv: !0 }),
          callback: t.callback,
          hasPrerender: t.hasPrerender,
          ctx: t.ctx,
        },
        'hit'
      );
    },
    sendExperiments: function (t) {
      this._hitExt(
        {
          url: s().href,
          title: '',
          referrer: '',
          modes: { ex: !0, ar: !0 },
          experiments: t.experiments,
          callback: t.callback,
          ctx: t.ctx,
        },
        'exp'
      );
    },
    sendPrerenderHit: function (t) {
      this._hitExt(
        {
          url: t.url,
          vParams: t.vParams,
          title: t.title,
          referrer: t.referrer,
          modes: { ar: !0, pq: !0 },
        },
        'hit'
      );
    },
    sendAjaxHit: function (t) {
      this._hitExt(
        { url: t.url, title: t.title, referrer: t.referrer, modes: t.modes },
        'hit'
      );
    },
    sendParams: function (t, e, n, r) {
      this._hitExt(
        {
          url: r || s().href,
          title: '',
          referrer: '',
          forceNoRedirect: !0,
          vParams: t,
          modes: { ar: !0, pa: !0, onlyData: !0 },
          callback: e,
          ctx: n,
        },
        'pa'
      );
    },
    sendGoal: function (t, e) {
      if (/[\/&=?#]/.test(t)) v.warning('Incorrect goal');
      else if (t) {
        var n = e.url ? v.parseUrl(e.url) : s();
        this._hitExt(
          {
            url: 'goal://' + n.hostname + '/' + encodeURIComponent(t),
            title: F.getDocumentTitle(),
            referrer: n.href,
            forceNoRedirect: !0,
            vParams: e.vParams,
            modes: { ar: !0 },
            callback: e.callback,
            ctx: e.ctx,
          },
          'go'
        );
      } else v.warning('Empty goal');
    },
    sendClickLink: function (t, e) {
      this._hitExt({
        url: t.url,
        title: t.title,
        referrer: e || s().href,
        modes: t.modes,
      });
    },
    sendExtLink: function (t, e) {
      this._hitExt(
        {
          url: t.url,
          title: t.title || '',
          referrer: e || s().href,
          vParams: t.vParams,
          modes: { ar: !0, ln: !0, ut: Qt },
          callback: t.callback,
          ctx: t.ctx,
        },
        'cl'
      );
    },
    sendFileUpload: function (t) {
      this._hitExt(
        {
          url: t.url,
          title: t.title || '',
          referrer: s().href,
          vParams: t.vParams,
          modes: { ar: !0, ln: !0, dl: !0 },
          callback: t.callback,
          ctx: t.ctx,
        },
        'fu'
      );
    },
    sendNotBounce: function (t, e) {
      this._hitExt(
        {
          url: e.url || s().href,
          title: '',
          referrer: '',
          modes: { cl: t, ar: !0, nb: !0, onlyData: !0 },
          callback: e.callback,
          ctx: e.ctx,
        },
        'nb'
      );
    },
    sendDevice: function (t) {
      this._hitExt(
        {
          browserInfo: { di: t.data, dip: t.port },
          callback: t.callback,
          ctx: t.ctx,
        },
        'de'
      );
    },
    _hitExt: function (t, e) {
      function r(t, e) {
        e && (d[t] = e);
      }
      var i,
        o,
        a,
        c = {};
      if (!v.isMetrikaPlayer()) {
        var u = t.modes || {},
          l = t.browserInfo || {},
          h = void 0 !== t.referrer ? t.referrer : It.lastReferrer,
          f = t.url || '',
          d = {};
        t.nohit && r('nohit', 1),
          u.ar &&
            !u.onlyData &&
            ((h = null === h || '' === h ? '' : this._prepareHitUrl(h)),
            (f = this._prepareHitUrl(t.url))),
          r('forceNoRedirect', t.forceNoRedirect),
          r('page-ref', v.trim(h, Xt)),
          r('page-url', v.trim(f, Xt)),
          v.is4Bytes(t.title) && r('charset', 'utf-8'),
          -1 != s().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)
            ? r('ut', Qt)
            : void 0 !== u.ut && r('ut', v.trim(u.ut, Yt)),
          r('exp', t.experiments),
          (o = t.vParams) &&
            this.counter &&
            o.__ym &&
            (v.isNumber(o.__ym.turbo_page) &&
              (this.counter.tp = o.__ym.turbo_page),
            v.isNumber(o.__ym.turbo_page_id) &&
              (this.counter.tpid = o.__ym.turbo_page_id)),
          (!o || (v.isObject(o) && !o.__ym && !o.__ymu)) &&
            this.paramsQueue.length() &&
            v.inArray(['go', 'hit', 'pa'], e) &&
            (o = this.paramsQueue.mixin(o)),
          o &&
            ((f = v.toJSON(o)),
            this.trimParams && f.length > $t
              ? (a = !0)
              : 7e5 < f
              ? v.warning('Too big params')
              : r('site-info', f)),
          u.saveRef && (It.lastReferrer = h),
          (c = (function (t, e) {
            var r = {};
            return (
              v.forEachKey(e, function (t, e) {
                -1 === v.arrayIndexOf(['', 0, n, null], e) && (r[t] = e);
              }),
              v.mixin({}, t, r)
            );
          })(c, {
            gdpr: Mt.getState(this.globalConfig),
            tp: this.counter && this.counter.tp,
            tpid: this.counter && this.counter.tpid,
            fu: this.getFu(t.url, t.referrer),
            eu: this.globalConfig.get('isEU'),
            td: this.turboState(V),
            v: this._getVersion(),
            pr: t.hasPrerender ? 1 : null,
          })),
          this.fake ||
            (i = this._getTechInfo(
              t.title,
              u,
              this.counterId,
              t.ts,
              t.tz,
              this._trackHash,
              this.hitId,
              this.webvisor,
              this.counter,
              t.nohit
            )),
          (c.wv = 2),
          v.mixin(l, i, c),
          this.send(
            d,
            l,
            function () {
              a && this.counter.params(o),
                t.userParams && this.counter.userParams(t.userParams),
                v.isFunction(t.callback) && t.callback.apply(t.ctx, arguments);
            },
            this
          );
      }
    },
    _prepareHitUrl: function (t) {
      var e = s(),
        n = e.host;
      if (((e = e.href), !v.isString(t))) return e;
      if (-1 != t.search(/^[a-z][\w.+-]+:\/\//i)) return t;
      var r = t.charAt(0);
      return '?' == r
        ? -1 == (r = e.search(/\?/))
          ? e + t
          : e.substr(0, r) + t
        : '#' == r
        ? -1 == (r = e.search(/#/))
          ? e + t
          : e.substr(0, r) + t
        : '/' != r
        ? (((n = e.split('/'))[n.length - 1] = t), n.join('/'))
        : -1 != (r = e.search(n))
        ? e.substr(0, r + n.length) + t
        : t;
    },
    getFu: function (t, n) {
      var r = t !== s().href,
        i = e.referrer.replace(/\/$/, ''),
        o = (n || '').replace(/\/$/, '');
      return (
        (i = i !== o), (o = 0), i && r ? (o = 3) : i ? (o = 1) : r && (o = 2), o
      );
    },
    _getTechInfo: function (e, r, i, o, a, s, c, u, l, h) {
      function p(t, e, n) {
        var r = '' + e;
        t && e && (n || -1 === r.indexOf(':')) && (g[t] = r);
      }
      function m(t) {
        r[t] && p(t, '1');
      }
      var g = {};
      (r = r || {}),
        (o = o || _.getTimestamp()),
        (a = a || _.getTimezone()),
        p('j', A.getJavaEnabled() ? '1' : '');
      var y = A.isDesktop(this.globalConfig);
      for (
        y !== n && p('dp', y ? '1' : '0'),
          p('nt', A.netType()),
          p('ns', A.getNavigationStart()),
          Kt &&
            p(
              's',
              Kt.width +
                'x' +
                Kt.height +
                'x' +
                (Kt.colorDepth || Kt.pixelDepth)
            ),
          t.devicePixelRatio && p('sk', t.devicePixelRatio),
          A.isSelenium() && p('iss', '1'),
          A.isHeadLess() && p('hdl', '1'),
          A.isIframe() &&
            (p('ifr', '1'), p('sti', A.isSameOriginTopFrame() ? '1' : '0')),
          t.ia_document &&
            t.ia_document.shareURL &&
            t.ia_document.referrer &&
            p('iia', '1'),
          p('adb', G.getVal()),
          p('f', A.getFlashVersion()),
          p('l', A.getSilverlightVersion()),
          p('fpr', A.getFingerPrint()),
          p('cn', this.counterNum),
          r.pa || p('w', (y = F.getViewportSize())[0] + 'x' + y[1]),
          p('z', a),
          p('i', o),
          p('et', _.getSeconds()),
          p('en', F.getDocumentCharset()),
          p('c', navigator.cookieEnabled ? '1' : ''),
          p('la', A.getLanguage()),
          p('ntf', A.getNotificationPermission()),
          v.random(100) ||
            p('np', D.encode(j.encode(v.trim(A.getPlatform(), 100)))),
          s && p('wh', '1'),
          a = 'ar ln re dl cpf ad nb pa pq pv ex'.split(' '),
          o = 0;
        o < a.length;
        o++
      )
        m(a[o]);
      for (
        a = 'va vt sn sa he pai'.split(' '), r.nb && a.push('cl'), o = 0;
        o < a.length;
        o++
      )
        p((s = a[o]), r[s]);
      if (
        ((a = new R({ counterId: i })).isEnabled() &&
          ((i = a.getStorageId()),
          (o = a.get('reqNum')),
          h || (o ? o++ : (o = 1)),
          a.set('reqNum', o),
          a.get('reqNum') == o
            ? (p('ls', i), p('rqn', o))
            : (a.remove('reqNum'),
              a.clearStorageId(),
              1 < o && (p('ls', i), p('rqn', 0)))),
        p('rn', v.random()),
        p('hid', c),
        h ||
          3 == this.counterId ||
          r.pq ||
          p(
            'ds',
            (function (t) {
              var e,
                n = [],
                r = t._lastPerformanceTiming,
                i = f();
              if (r) {
                var o = 0;
                for (e = r.length; o < e; o++)
                  null === i[o]
                    ? n.push(i[o])
                    : n.push(r[o] === i[o] ? '' : i[o]);
              } else n = i;
              return (t._lastPerformanceTiming = i), n.join(',');
            })(l)
          ),
        l._firstPaint ||
          h ||
          ((l._firstPaint = (function () {
            var e = t.performance && t.performance.getEntriesByType,
              n = e ? v.filter(d, t.performance.getEntriesByType('paint')) : [];
            if (n.length) return (n = n[0]), Math.round(n.startTime);
            if (e) return 0;
            if ('object' == typeof t.chrome && t.chrome.loadTimes) {
              if (
                (n = t.chrome.loadTimes()).requestTime &&
                n.firstPaintTime &&
                t.performance &&
                t.performance.timing
              )
                return Math.round(
                  1e3 * n.firstPaintTime - t.performance.timing.navigationStart
                );
            } else if (
              t.performance &&
              t.performance.timing &&
              (n = t.performance.timing).navigationStart &&
              n.msFirstPaint
            )
              return n.msFirstPaint - n.navigationStart;
            return null;
          })()),
          p('fp', l._firstPaint)),
        u)
      ) {
        (c = k.get('winNameNum')) ||
          ((c = +t.name || Math.round(65535 * Math.random())) &&
            (0 > c && (c *= -1), (c %= 65535)),
          (c = c || v.fletcher(t.name)),
          k.set('winNameNum', c)),
          p('wn', c);
        try {
          t.history && p('hl', String(t.history.length));
        } catch (t) {}
      }
      return (
        (c = ''), this.sendTitle && (c = this._getTitle(e)), p('t', c, !0), g
      );
    },
    _getTitle: function (t) {
      return (t =
        void 0 === t
          ? (t = F.getDocumentTitle())
            ? v.trim(t, Jt)
            : ''
          : v.trim(t, Jt));
    },
  });
  v.array2Props = function (t) {
    var e,
      n = t.length,
      r = {},
      i = r;
    for (e = 0; e < n - 1; e++) {
      var o = t[e];
      (i[o] = {}), e < n - 2 && (i = i[o]);
    }
    return (i[o] = t[n - 1]), r;
  };
  var q = y.inherit({
      sampling: 1,
      counterId: 26302566,
      _initComponent: function () {
        q.superclass._initComponent.apply(this, arguments),
          (this._sender = new W({
            protocol: 'https:',
            counterId: this.counterId,
            retry: !1,
            counter: {},
          }));
      },
      log: function () {
        this.logParams(v.array2Props(arguments));
      },
      logParams: function (t) {
        Math.random() < this.sampling &&
          this._sender.sendHit({
            url: Gt.href,
            title: '',
            referrer: '',
            vParams: t,
          });
      },
    }),
    K = B.inherit({
      resource: 'webvisor',
      retry: !0,
      postParams: ['wv-data'],
      sendPacket: function (e, n, r, i, o, a, s, c) {
        if (!e || !e.length) return !1;
        var u = D.encode(e, !0);
        0 == u.indexOf('AAAAAAAAADw') &&
          t.Error &&
          'string' == typeof Error().stack &&
          new q({ sampling: 0.1 }).log('bad visor packet 5', 1);
        return (
          (e = {
            rn: v.random(),
            'page-url': n,
            wmode: 0,
            'wv-type': 0,
            'wv-hit': r,
            'wv-part': i + 1,
            'wv-check': v.fletcher(e),
            'wv-data': u,
          }),
          (o = { v: this._getVersion(), z: o, i: a }),
          this.send(e, o, s, c)
        );
      },
    }),
    Y = w.inherit({
      protocol: '',
      counterId: '',
      counterType: '',
      meta: null,
      maxBufferSize: 7500,
      flushTimeout: 3e4,
      storageKey: 'visorbuff',
      active: !1,
      _initComponent: function () {
        (this.storage = new R({ counterId: this.counterId })),
          (this._sender = new K({
            globalConfig: this.globalConfig,
            protocol: this.protocol,
            counterId: this.counterId,
            counterType: this.counterType,
          })),
          Y.superclass._initComponent.apply(this, arguments);
      },
      onFlush: function (t, e, n) {
        this._sender.sendPacket(t, e.url, e.hitId, n, e.timezone, e.timestamp);
      },
    });
  (F.getDocumentHTML = function () {
    var t,
      n,
      r = '',
      i = e.documentElement,
      o = i.outerHTML;
    if (o) i = o;
    else {
      o = i.attributes;
      var a = '';
      for (t = 0; t < o.length; t++)
        (n = o[t]) && (a += ' ' + n.name + '="' + (n.value || '') + '"');
      i = '<html' + a + '>' + i.innerHTML + '</html>';
    }
    return (
      (o = e.doctype) &&
        ((r = o.publicId ? ' PUBLIC "' + o.publicId + '"' : ''),
        (a = o.systemId ? ' "' + o.systemId + '"' : ''),
        (r = '<!DOCTYPE ' + o.name + r + a + '>\n')),
      r + i
    );
  }),
    (F.getElementParent = function (t) {
      if (!t || t == e.documentElement) return null;
      if (t == F.getBody()) return e.documentElement;
      var n = null;
      try {
        n = t.parentNode;
      } catch (t) {}
      return n;
    }),
    (F.getElementChildren = function (t, e) {
      var n,
        r,
        i = [];
      if (t && (n = t.childNodes)) {
        var o = 0;
        for (r = n.length; o < r; o++) {
          var a = n[o];
          ('INPUT' == a.nodeName &&
            a.type &&
            'hidden' == a.type.toLocaleLowerCase()) ||
            (e && a.nodeName != e) ||
            v.mergeArrays(i, [a]);
        }
      }
      return i;
    }),
    (F.getElementNeighborPosition = function (t) {
      var e,
        n = F.getElementParent(t);
      if (n) {
        var r = 0;
        n = n.childNodes;
        var i = t && t.nodeName;
        for (e = 0; e < n.length; e++) {
          if (i == (n[e] && n[e].nodeName)) {
            if (t == n[e]) return r;
            r++;
          }
        }
      }
      return 0;
    }),
    (F.getDocumentScroll = function () {
      var n = F.getBody();
      return [
        t.pageXOffset ||
          (e.documentElement && e.documentElement.scrollLeft) ||
          (n && n.scrollLeft) ||
          0,
        t.pageYOffset ||
          (e.documentElement && e.documentElement.scrollTop) ||
          (n && n.scrollTop) ||
          0,
      ];
    }),
    (F.getElementXY = function (t) {
      var n;
      if (
        !t ||
        !t.ownerDocument ||
        'PARAM' == t.tagName ||
        t == F.getBody() ||
        t == e.documentElement
      )
        return [0, 0];
      if (t.getBoundingClientRect) {
        t = t.getBoundingClientRect();
        var r = F.getDocumentScroll();
        return [Math.round(t.left + r[0]), Math.round(t.top + r[1])];
      }
      for (n = r = 0; t; )
        (r += t.offsetLeft), (n += t.offsetTop), (t = t.offsetParent);
      return [r, n];
    }),
    (F.getDocumentSize = function () {
      var t = F.getRootElement(),
        e = F.getViewportSize();
      return [Math.max(t.scrollWidth, e[0]), Math.max(t.scrollHeight, e[1])];
    }),
    (F.getElementSize = function (t) {
      var n;
      return t == F.getBody() || t == e.documentElement
        ? F.getDocumentSize()
        : (n = t.getBoundingClientRect && t.getBoundingClientRect())
        ? [n.width, n.height]
        : [t.offsetWidth, t.offsetHeight];
    }),
    (F.getElementRegion = function (t) {
      var e = F.getElementXY(t);
      return (t = F.getElementSize(t)), [e[0], e[1], t[0], t[1]];
    }),
    (F.calcChildrenChecksum = function (t) {
      var e =
        r(
          function () {
            return t.innerHTML;
          },
          '',
          !0
        )() || '';
      return v.fletcher(e.replace(/(<[^>]*>|[\u0000-\u0020])/g, ''));
    }),
    (F.getFormNumber = function (t) {
      var n,
        r = e.getElementsByTagName('form'),
        i = 0;
      for (n = r.length; i < n; i++) if (r[i] == t) return i;
      return -1;
    }),
    (F.isEmptyField = function (t) {
      return 'INPUT' == t.nodeName &&
        'submit' != t.type &&
        'image' != t.type &&
        'hidden' != t.type
        ? 'radio' == t.type || 'checkbox' == t.type
          ? !t.checked
          : !t.value
        : 'TEXTAREA' == t.nodeName
        ? !t.value
        : 'SELECT' != t.nodeName || 0 > t.selectedIndex;
    }),
    (F.calcTextChecksum = function (t) {
      var e,
        n = '',
        r = 0;
      for (e = (t = t.childNodes).length; r < e; r++)
        t[r] && 3 == t[r].nodeType && (n += t[r].nodeValue);
      return v.fletcher(n.replace(/[\u0000-\u0020]+/g, ''));
    }),
    (F.calcAttribChecksum = function (t) {
      var e,
        n = '',
        r = 'width height align title alt name'.split(' ');
      for (
        'IMG' == t.tagName && (n += t.src.toLowerCase()),
          'A' == t.tagName && (n += t.href.toLowerCase()),
          n += String(t.className || '').toLowerCase(),
          e = 0;
        e < r.length;
        e++
      )
        t.getAttribute &&
          (n += String(t.getAttribute(r[e]) || '').toLowerCase());
      return v.fletcher(n.replace(/[\u0000-\u0020]+/g, ''));
    }),
    (F.classNameExists = function (t, e) {
      try {
        return new RegExp('(?:^|\\s)' + e + '(?:\\s|$)').test(t.className);
      } catch (t) {
        return !1;
      }
    }),
    (F.getElementsByClassName = function (t, n) {
      var r,
        i = (n = n || e).getElementsByTagName('*'),
        o = [];
      for (r = 0; r < i.length; r++) F.classNameExists(i[r], t) && o.push(i[r]);
      return o;
    });
  try {
    if (m) {
      var X = (function (t) {
        function e(r) {
          if (n[r]) return n[r].f;
          var i = (n[r] = { Z: r, L: !1, f: {} });
          return t[r].call(i.f, i, i.f, e), (i.L = !0), i.f;
        }
        var n = {};
        return (
          (e.aa = t),
          (e.W = n),
          (e.o = function (t, n, r) {
            e.D(t, n) ||
              Object.defineProperty(t, n, { enumerable: !0, get: r });
          }),
          (e.C = function (t) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(t, '__esModule', { value: !0 });
          }),
          (e.$ = function (t, n) {
            if (
              (1 & n && (t = e(t)),
              8 & n || (4 & n && 'object' == typeof t && t && t.a))
            )
              return t;
            var r = Object.create(null);
            if (
              (e.C(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
              2 & n && 'string' != typeof t)
            )
              for (var i in t)
                e.o(
                  r,
                  i,
                  function (e) {
                    return t[e];
                  }.bind(null, i)
                );
            return r;
          }),
          (e.X = function (t) {
            var n =
              t && t.a
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return e.o(n, 'a', n), n;
          }),
          (e.D = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.Y = ''),
          e((e.ba = 0))
        );
      })([
        function (t, e, n) {
          var r =
            (this && this.U) ||
            function () {
              return (r =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, i) &&
                        (t[i] = e[i]);
                  return t;
                }).apply(this, arguments);
            };
          e.a = !0;
          var i = n(1),
            o = n(2),
            a = n(4),
            s = n(5),
            c = n(6);
          (t = (function () {
            function t(t) {
              var e = this;
              (this.l = t),
                (this.H = {
                  webGL: i.B,
                  dnt: s.w,
                  plugins: o.A,
                  applePay: a.v,
                }),
                (this.l = r(
                  { webGL: !1, dnt: !1, plugins: !1, applePay: !1 },
                  t
                )),
                (this.G = Object.keys(this.l)
                  .filter(function (t) {
                    return e.l[t];
                  })
                  .map(function (t) {
                    return new e.H[t]();
                  }));
            }
            return (
              (t.prototype.toString = function (t) {
                void 0 === t && (t = !0);
                var e = this.G.map(function (t) {
                  var e = '';
                  try {
                    e = t.g();
                  } catch (t) {}
                  return e;
                });
                return t
                  ? [c.hash(e.join(''), 210)]
                  : e.map(function (t) {
                      return c.hash(t, 210);
                    });
              }),
              t
            );
          })()),
            (e.T = t),
            (e.default = t);
        },
        function (n, r) {
          var i =
            (this && this.V) ||
            (function () {
              function t(e, n) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                  })(e, n);
              }
              return function (e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n),
                  (e.prototype =
                    null === n
                      ? Object.create(n)
                      : ((r.prototype = n.prototype), new r()));
              };
            })();
          r.a = !0;
          var o = (function (e) {
            function n() {
              var t = e.call(this, 'webgl') || this;
              return t.h && !t.J() && (t.h = !1), t;
            }
            return (
              i(n, e),
              (n.prototype.J = function () {
                var e =
                  this.canvas.getContext &&
                  (this.canvas.getContext('webgl') ||
                    this.canvas.getContext('experimental-webgl'));
                return !!t.WebGLRenderingContext && !!e;
              }),
              (n.prototype.j = function (t) {
                var e = this.c;
                return (
                  e.clearColor(0, 0, 0, 1),
                  e.enable(e.DEPTH_TEST),
                  e.depthFunc(e.LEQUAL),
                  e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                  '[' + t[0] + ', ' + t[1] + ']'
                );
              }),
              (n.prototype.M = function (t) {
                var e,
                  n =
                    t.getExtension('EXT_texture_filter_anisotropic') ||
                    t.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
                    t.getExtension('MOZ_EXT_texture_filter_anisotropic');
                return n
                  ? (0 ===
                      (e = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) &&
                      (e = 2),
                    e)
                  : null;
              }),
              (n.prototype.s = function () {
                var t = this.c,
                  e = [],
                  n = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, n),
                  t.bufferData(
                    t.ARRAY_BUFFER,
                    new Float32Array([
                      -0.2,
                      -0.9,
                      0,
                      0.4,
                      -0.26,
                      0,
                      0,
                      0.732134444,
                      0,
                    ]),
                    t.STATIC_DRAW
                  ),
                  (n.K = 3),
                  (n.O = 3);
                var r = t.createProgram(),
                  i = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(
                  i,
                  'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
                ),
                  t.compileShader(i);
                var o = t.createShader(t.FRAGMENT_SHADER);
                t.shaderSource(
                  o,
                  'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
                ),
                  t.compileShader(o),
                  t.attachShader(r, i),
                  t.attachShader(r, o),
                  t.linkProgram(r),
                  t.useProgram(r),
                  (r.R = t.getAttribLocation(r, 'attrVertex')),
                  (r.P = t.getUniformLocation(r, 'uniformOffset')),
                  t.enableVertexAttribArray(r.ca),
                  t.vertexAttribPointer(r.R, n.K, t.FLOAT, !1, 0, 0),
                  t.uniform2f(r.P, 1, 1),
                  t.drawArrays(t.TRIANGLE_STRIP, 0, n.O),
                  null != t.canvas && e.push(t.canvas.toDataURL()),
                  e.push('extensions:' + t.getSupportedExtensions().join(';')),
                  e.push(
                    'webgl aliased line width range:' +
                      this.j(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE))
                  ),
                  e.push(
                    'webgl aliased point size range:' +
                      this.j(t.getParameter(t.ALIASED_POINT_SIZE_RANGE))
                  ),
                  e.push('webgl alpha bits:' + t.getParameter(t.ALPHA_BITS)),
                  e.push(
                    'webgl antialiasing:' +
                      (t.getContextAttributes().antialias ? 'yes' : 'no')
                  ),
                  e.push('webgl blue bits:' + t.getParameter(t.BLUE_BITS)),
                  e.push('webgl depth bits:' + t.getParameter(t.DEPTH_BITS)),
                  e.push('webgl green bits:' + t.getParameter(t.GREEN_BITS)),
                  e.push('webgl max anisotropy:' + this.M(t)),
                  e.push(
                    'webgl max combined texture image units:' +
                      t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
                  ),
                  e.push(
                    'webgl max cube map texture size:' +
                      t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)
                  ),
                  e.push(
                    'webgl max fragment uniform vectors:' +
                      t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)
                  ),
                  e.push(
                    'webgl max render buffer size:' +
                      t.getParameter(t.MAX_RENDERBUFFER_SIZE)
                  ),
                  e.push(
                    'webgl max texture image units:' +
                      t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
                  ),
                  e.push(
                    'webgl max texture size:' +
                      t.getParameter(t.MAX_TEXTURE_SIZE)
                  ),
                  e.push(
                    'webgl max varying vectors:' +
                      t.getParameter(t.MAX_VARYING_VECTORS)
                  ),
                  e.push(
                    'webgl max vertex attribs:' +
                      t.getParameter(t.MAX_VERTEX_ATTRIBS)
                  ),
                  e.push(
                    'webgl max vertex texture image units:' +
                      t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
                  ),
                  e.push(
                    'webgl max vertex uniform vectors:' +
                      t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)
                  ),
                  e.push(
                    'webgl max viewport dims:' +
                      this.j(t.getParameter(t.MAX_VIEWPORT_DIMS))
                  ),
                  e.push('webgl red bits:' + t.getParameter(t.RED_BITS)),
                  e.push('webgl renderer:' + t.getParameter(t.RENDERER)),
                  e.push(
                    'webgl shading language version:' +
                      t.getParameter(t.SHADING_LANGUAGE_VERSION)
                  ),
                  e.push(
                    'webgl stencil bits:' + t.getParameter(t.STENCIL_BITS)
                  ),
                  e.push('webgl vendor:' + t.getParameter(t.VENDOR)),
                  e.push('webgl version:' + t.getParameter(t.VERSION));
                try {
                  var a = t.getExtension('WEBGL_debug_renderer_info');
                  a &&
                    (e.push(
                      'webgl unmasked vendor:' +
                        t.getParameter(a.UNMASKED_VENDOR_WEBGL)
                    ),
                    e.push(
                      'webgl unmasked renderer:' +
                        t.getParameter(a.UNMASKED_RENDERER_WEBGL)
                    ));
                } catch (t) {}
                return t.getShaderPrecisionFormat
                  ? (e.push(
                      'webgl vertex shader high float precision:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.HIGH_FLOAT
                        ).precision
                    ),
                    e.push(
                      'webgl vertex shader high float precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.HIGH_FLOAT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl vertex shader high float precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.HIGH_FLOAT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl vertex shader medium float precision:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_FLOAT
                        ).precision
                    ),
                    e.push(
                      'webgl vertex shader medium float precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_FLOAT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl vertex shader medium float precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_FLOAT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl vertex shader low float precision:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT)
                          .precision
                    ),
                    e.push(
                      'webgl vertex shader low float precision rangeMin:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT)
                          .rangeMin
                    ),
                    e.push(
                      'webgl vertex shader low float precision rangeMax:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT)
                          .rangeMax
                    ),
                    e.push(
                      'webgl fragment shader high float precision:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_FLOAT
                        ).precision
                    ),
                    e.push(
                      'webgl fragment shader high float precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_FLOAT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl fragment shader high float precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_FLOAT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl fragment shader medium float precision:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_FLOAT
                        ).precision
                    ),
                    e.push(
                      'webgl fragment shader medium float precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_FLOAT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl fragment shader medium float precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_FLOAT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl fragment shader low float precision:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.LOW_FLOAT
                        ).precision
                    ),
                    e.push(
                      'webgl fragment shader low float precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.LOW_FLOAT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl fragment shader low float precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.LOW_FLOAT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl vertex shader high int precision:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT)
                          .precision
                    ),
                    e.push(
                      'webgl vertex shader high int precision rangeMin:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT)
                          .rangeMin
                    ),
                    e.push(
                      'webgl vertex shader high int precision rangeMax:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT)
                          .rangeMax
                    ),
                    e.push(
                      'webgl vertex shader medium int precision:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_INT
                        ).precision
                    ),
                    e.push(
                      'webgl vertex shader medium int precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_INT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl vertex shader medium int precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.VERTEX_SHADER,
                          t.MEDIUM_INT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl vertex shader low int precision:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT)
                          .precision
                    ),
                    e.push(
                      'webgl vertex shader low int precision rangeMin:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT)
                          .rangeMin
                    ),
                    e.push(
                      'webgl vertex shader low int precision rangeMax:' +
                        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT)
                          .rangeMax
                    ),
                    e.push(
                      'webgl fragment shader high int precision:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_INT
                        ).precision
                    ),
                    e.push(
                      'webgl fragment shader high int precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_INT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl fragment shader high int precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_INT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl fragment shader medium int precision:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_INT
                        ).precision
                    ),
                    e.push(
                      'webgl fragment shader medium int precision rangeMin:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_INT
                        ).rangeMin
                    ),
                    e.push(
                      'webgl fragment shader medium int precision rangeMax:' +
                        t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.MEDIUM_INT
                        ).rangeMax
                    ),
                    e.push(
                      'webgl fragment shader low int precision:' +
                        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT)
                          .precision
                    ),
                    e.push(
                      'webgl fragment shader low int precision rangeMin:' +
                        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT)
                          .rangeMin
                    ),
                    e.push(
                      'webgl fragment shader low int precision rangeMax:' +
                        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT)
                          .rangeMax
                    ),
                    e.join('~'))
                  : e.join('~');
              }),
              n
            );
          })(
            (n = (function () {
              function t(t) {
                (this.F = t),
                  (this.h = !0),
                  (this.canvas = e.createElement('canvas')),
                  this.I() || (this.h = !1);
              }
              return (
                (t.prototype.I = function () {
                  return (
                    (this.c = this.canvas.getContext(this.F)),
                    !(!this.canvas.getContext || !this.c)
                  );
                }),
                (t.prototype.g = function () {
                  return this.h ? this.s() : this.id;
                }),
                t
              );
            })())
          );
          (r.B = o),
            (n = (function (t) {
              function e() {
                return t.call(this, '2d') || this;
              }
              return (
                i(e, t),
                (e.prototype.s = function () {
                  var t = this.canvas,
                    e = this.c,
                    n = [];
                  return (
                    (t.width = 2e3),
                    (t.height = 200),
                    (t.style.display = 'inline'),
                    e.rect(0, 0, 10, 10),
                    e.rect(2, 2, 6, 6),
                    n.push(
                      'canvas winding:' +
                        (!1 === e.isPointInPath(5, 5, 'evenodd') ? 'yes' : 'no')
                    ),
                    (e.textBaseline = 'alphabetic'),
                    (e.fillStyle = '#f60'),
                    e.fillRect(125, 1, 62, 20),
                    (e.fillStyle = '#069'),
                    (e.font = '11pt Arial'),
                    e.fillText('Cwm fjordbank glyphs vext quiz, 😃', 2, 15),
                    (e.fillStyle = 'rgba(102, 204, 0, 0.2)'),
                    (e.font = '18pt Arial'),
                    e.fillText('Cwm fjordbank glyphs vext quiz, 😃', 4, 45),
                    (e.globalCompositeOperation = 'multiply'),
                    (e.fillStyle = 'rgb(255,0,255)'),
                    e.beginPath(),
                    e.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                    e.closePath(),
                    e.fill(),
                    (e.fillStyle = 'rgb(0,255,255)'),
                    e.beginPath(),
                    e.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                    e.closePath(),
                    e.fill(),
                    (e.fillStyle = 'rgb(255,255,0)'),
                    e.beginPath(),
                    e.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                    e.closePath(),
                    e.fill(),
                    (e.fillStyle = 'rgb(255,0,255)'),
                    e.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                    e.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                    e.fill('evenodd'),
                    n.push('canvas fp:' + t.toDataURL()),
                    n.join('~')
                  );
                }),
                e
              );
            })(n)),
            (r.S = n);
        },
        function (t, e, n) {
          e.a = !0;
          var r = n(3);
          (t = (function () {
            function t() {}
            return (
              (t.prototype.g = function () {
                return r
                  .u(navigator.plugins)
                  .sort(function (t, e) {
                    return t.name > e.name ? 1 : 2;
                  })
                  .map(function (t) {
                    return [
                      t.name,
                      t.description,
                      r
                        .u(t)
                        .map(function (t) {
                          return [t.description, t.suffixes, t.type].join();
                        })
                        .join(),
                    ].join();
                  })
                  .join();
              }),
              t
            );
          })()),
            (e.A = t);
        },
        function (t, e) {
          (e.a = !0),
            (e.u = function (t) {
              return Array.prototype.slice.call(t);
            });
        },
        function (e, n) {
          (n.a = !0),
            (e = (function () {
              function e() {
                this.m = t.ApplePaySession;
              }
              return (
                (e.prototype.g = function () {
                  var e = !1;
                  try {
                    e = t.self !== t.top;
                  } catch (t) {}
                  if (!this.m || 'https:' !== Gt.protocol || e) return '';
                  e = '';
                  for (var n = 1; 10 >= n; n++)
                    e += this.m.supportsVersion(n) ? n : '0';
                  return e + this.m.canMakePayments();
                }),
                e
              );
            })()),
            (n.v = e);
        },
        function (e, n) {
          (n.a = !0),
            (e = (function () {
              function e() {
                this.b = t.navigator;
              }
              return (
                (e.prototype.g = function () {
                  return this.b.i
                    ? this.b.i
                    : this.b.N
                    ? this.b.N
                    : this.b.i
                    ? this.b.i
                    : 'unknown';
                }),
                e
              );
            })()),
            (n.w = e);
        },
        function (t, e) {
          function n(t, e) {
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]),
              (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]);
            var n = [0, 0, 0, 0];
            return (
              (n[3] += t[3] * e[3]),
              (n[2] += n[3] >>> 16),
              (n[3] &= 65535),
              (n[2] += t[2] * e[3]),
              (n[1] += n[2] >>> 16),
              (n[2] &= 65535),
              (n[2] += t[3] * e[2]),
              (n[1] += n[2] >>> 16),
              (n[2] &= 65535),
              (n[1] += t[1] * e[3]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[1] += t[2] * e[2]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[1] += t[3] * e[1]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0]),
              (n[0] &= 65535),
              [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
            );
          }
          function r(t, e) {
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]),
              (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]);
            var n = [0, 0, 0, 0];
            return (
              (n[3] += t[3] + e[3]),
              (n[2] += n[3] >>> 16),
              (n[3] &= 65535),
              (n[2] += t[2] + e[2]),
              (n[1] += n[2] >>> 16),
              (n[2] &= 65535),
              (n[1] += t[1] + e[1]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[0] += t[0] + e[0]),
              (n[0] &= 65535),
              [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
            );
          }
          function i(t, e) {
            return 32 == (e %= 64)
              ? [t[1], t[0]]
              : 32 > e
              ? [
                  (t[0] << e) | (t[1] >>> (32 - e)),
                  (t[1] << e) | (t[0] >>> (32 - e)),
                ]
              : ((e -= 32),
                [
                  (t[1] << e) | (t[0] >>> (32 - e)),
                  (t[0] << e) | (t[1] >>> (32 - e)),
                ]);
          }
          function o(t, e) {
            return 0 == (e %= 64)
              ? t
              : 32 > e
              ? [(t[0] << e) | (t[1] >>> (32 - e)), t[1] << e]
              : [t[1] << (e - 32), 0];
          }
          function a(t, e) {
            return [t[0] ^ e[0], t[1] ^ e[1]];
          }
          function s(t) {
            return (
              (t = a(t, [0, t[0] >>> 1])),
              (t = a((t = n(t, [4283543511, 3981806797])), [0, t[0] >>> 1])),
              a((t = n(t, [3301882366, 444984403])), [0, t[0] >>> 1])
            );
          }
          (e.a = !0),
            (e.hash = function (t, e) {
              e = e || 0;
              var c = (t = t || '').length % 16,
                u = t.length - c,
                l = [0, e];
              e = [0, e];
              for (
                var h,
                  f,
                  d = [2277735313, 289559509],
                  p = [1291169091, 658871167],
                  m = 0;
                m < u;
                m += 16
              )
                (h = [
                  (255 & t.charCodeAt(m + 4)) |
                    ((255 & t.charCodeAt(m + 5)) << 8) |
                    ((255 & t.charCodeAt(m + 6)) << 16) |
                    ((255 & t.charCodeAt(m + 7)) << 24),
                  (255 & t.charCodeAt(m)) |
                    ((255 & t.charCodeAt(m + 1)) << 8) |
                    ((255 & t.charCodeAt(m + 2)) << 16) |
                    ((255 & t.charCodeAt(m + 3)) << 24),
                ]),
                  (f = [
                    (255 & t.charCodeAt(m + 12)) |
                      ((255 & t.charCodeAt(m + 13)) << 8) |
                      ((255 & t.charCodeAt(m + 14)) << 16) |
                      ((255 & t.charCodeAt(m + 15)) << 24),
                    (255 & t.charCodeAt(m + 8)) |
                      ((255 & t.charCodeAt(m + 9)) << 8) |
                      ((255 & t.charCodeAt(m + 10)) << 16) |
                      ((255 & t.charCodeAt(m + 11)) << 24),
                  ]),
                  (h = i((h = n(h, d)), 31)),
                  (l = r((l = i((l = a(l, n(h, p))), 27)), e)),
                  (l = r(n(l, [0, 5]), [0, 1390208809])),
                  (f = i((f = n(f, p)), 33)),
                  (e = r((e = i((e = a(e, n(f, d))), 31)), l)),
                  (e = r(n(e, [0, 5]), [0, 944331445]));
              switch (((h = [0, 0]), (f = [0, 0]), c)) {
                case 15:
                  f = a(f, o([0, t.charCodeAt(m + 14)], 48));
                case 14:
                  f = a(f, o([0, t.charCodeAt(m + 13)], 40));
                case 13:
                  f = a(f, o([0, t.charCodeAt(m + 12)], 32));
                case 12:
                  f = a(f, o([0, t.charCodeAt(m + 11)], 24));
                case 11:
                  f = a(f, o([0, t.charCodeAt(m + 10)], 16));
                case 10:
                  f = a(f, o([0, t.charCodeAt(m + 9)], 8));
                case 9:
                  (f = n((f = a(f, [0, t.charCodeAt(m + 8)])), p)),
                    (e = a(e, n(i(f, 33), d)));
                case 8:
                  h = a(h, o([0, t.charCodeAt(m + 7)], 56));
                case 7:
                  h = a(h, o([0, t.charCodeAt(m + 6)], 48));
                case 6:
                  h = a(h, o([0, t.charCodeAt(m + 5)], 40));
                case 5:
                  h = a(h, o([0, t.charCodeAt(m + 4)], 32));
                case 4:
                  h = a(h, o([0, t.charCodeAt(m + 3)], 24));
                case 3:
                  h = a(h, o([0, t.charCodeAt(m + 2)], 16));
                case 2:
                  h = a(h, o([0, t.charCodeAt(m + 1)], 8));
                case 1:
                  (h = n((h = a(h, [0, t.charCodeAt(m)])), d)),
                    (l = a(l, n(i(h, 31), p)));
              }
              return (
                (l = r((l = a(l, [0, t.length])), (e = a(e, [0, t.length])))),
                (e = r(e, l)),
                (l = r((l = s(l)), (e = s(e)))),
                (e = r(e, l)),
                ('00000000' + (l[0] >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (l[1] >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (e[0] >>> 0).toString(16)).slice(-8) +
                  ('00000000' + (e[1] >>> 0).toString(16)).slice(-8)
              );
            });
        },
      ]);
      X = X.default;
    }
  } catch (t) {
    p = { error: t, scope: 'fip' };
  }
  (v.toArray = function (t) {
    var e,
      n = [];
    if (t && !isNaN(t.length) && 0 <= t.length)
      for (e = 0; e < t.length; e++) n.push(t[e]);
    return n;
  }),
    (v.arrayFilter = function (t, e, n) {
      var r,
        i = [];
      for (r = 0; r < t.length; r++) e.call(n, t[r], r, t) && i.push(t[r]);
      return i;
    }),
    (v.arrDiff = function (t, e) {
      return v.arrayFilter(t, function (t) {
        return -1 === v.arrayIndexOf(e, t);
      });
    }),
    (v.encodeURIComponent = function (e, n) {
      return (
        (e = String(e)),
        n && e.length > n && (e = e.substr(0, n)),
        (t.encodeURIComponent || t.escape)(e).replace(/\+/g, '%2B')
      );
    }),
    (v.bind = function (t, e) {
      var n = [].slice.call(arguments, 2);
      return function () {
        return t.apply(e || this, n.concat([].slice.call(arguments, 0)));
      };
    }),
    (v.safeDecodeURIComponent = function (t) {
      try {
        return decodeURIComponent(t);
      } catch (t) {
        return '';
      }
    }),
    (v.isDev = function () {
      return !1;
    }),
    (v.noop = function () {}),
    !u(/webkit/) && u(/gecko/);
  var $ = {
      asyncChunk: 400,
      maxDuration: 20,
      restTime: 100,
      asyncBuffer: [],
      timeout: null,
      rest: 0,
      addAsyncItem: function (t, e, n, r, i) {
        var o = this;
        this.asyncBuffer.push({
          fn: t,
          ctx: e,
          args: r || [],
          loggerName: i || '',
        }),
          n
            ? (clearTimeout(this.timeout), o.flushAsync(!0))
            : _.getMs() - this.rest >= this.restTime && !this.timeout
            ? ((this.rest = _.getMs()), o.flushAsync())
            : this.timeout ||
              (this.timeout = v.setTimeout(function () {
                (o.rest = _.getMs()), o.flushAsync(), (o.timeout = !1);
              }, this.restTime));
      },
      chain: function (t, e, n, r) {
        var i = this;
        (t.push = function (t) {
          throw 'Try to push in Executor when it started "' + t + '"';
        }),
          (function e(n, o, a) {
            i.addAsyncItem(
              function (n, r, i) {
                (r = t[n++](r)), n <= t.length - 1 && e(n, r, i);
              },
              null,
              a,
              [n, o],
              r + '.' + n
            );
          })(0, e, n);
      },
      callByTimeout: function (t, e) {
        for (
          var n, i = _.getMs(), o = 0, a = (e || 0) + 1, s = 0, c = this;
          this.asyncBuffer.length;

        )
          if (
            ((s += 1),
            !(n = this.asyncBuffer.shift()).isExecuted &&
              (r(function () {
                n.fn.apply(n.ctx, n.args);
              }, 'AsyncExecutor.' + n.loggerName)(),
              (o = _.getMs() - i),
              (n.isExecuted = !0),
              !t && (s >= this.asyncChunk || o >= this.maxDuration)))
          ) {
            v.setTimeout(function () {
              c.callByTimeout(t, a);
            }, this.restTime);
            break;
          }
      },
      flushAsync: function (t) {
        this.asyncBuffer.length && this.callByTimeout(t);
      },
    },
    J = S.inherit({
      id: 'XHRPlain',
      index: 8,
      _splitParams: function (t) {
        var e = {},
          n = {};
        return (
          v.forEachKey(
            t,
            function (t, r) {
              v.inArray(this.postParams, t)
                ? this.postParams.isSingle
                  ? (n = r)
                  : (n[t] = r)
                : (e[t] = r);
            },
            this
          ),
          { get: e, post: n }
        );
      },
      _preparePostParams: function (t) {
        return t.post;
      },
      _setHeaders: function (t) {
        t.setRequestHeader('Content-Type', 'text/plain');
      },
    }),
    Z = B.inherit({
      resource: 'webvisor',
      version: 2,
      retry: !1,
      postParams: ['wv-data'],
      transports: [J],
      _initComponent: function () {
        Z.superclass._initComponent.apply(this, arguments),
          (this.postParams.isSingle = !0);
      },
      sendPacket: function (t, e, n, r, i, o, a, s, c) {
        var u = F.getViewportSize();
        return (
          !(!t || !t.length) &&
          ((t = {
            rn: v.random(),
            'page-url': e,
            wmode: 0,
            'wv-type': this.version,
            'wv-hit': n,
            'wv-part': r + 1,
            'wv-data': t,
          }),
          (i = {
            et: a,
            w: u[0] + 'x' + u[1],
            v: this._getVersion(),
            z: i,
            i: o,
          }),
          this.browserInfoMix && (i = v.mixin(i, this.browserInfoMix)),
          this.send(t, i, s, c))
        );
      },
    }),
    Q = w.inherit({
      protocol: '',
      chunkSize: 0,
      counterId: '',
      counterType: '',
      meta: null,
      maxBufferSize: 7e5,
      flushTimeout: 2e3,
      storageKey: 'visorbuff2',
      active: !1,
      wvType: 2,
      _v: '',
      _totalSendLimit: null,
      _totalSendedSize: 0,
      _initComponent: function () {
        (this._sender = new Z({
          version: this.wvType,
          protocol: this.protocol,
          globalConfig: this.globalConfig,
          counterId: this.counterId,
          browserInfoMix: this.browserInfoMix,
          counterType: this.counterType,
        })),
          Q.superclass._initComponent.apply(this, arguments);
      },
      append: function (t) {
        !this._data.length &&
          t &&
          t.length &&
          (this.startBufferTime = _.getSeconds()),
          Q.superclass.append.apply(this, arguments);
      },
      _getSize: function (t) {
        var e = this;
        return (
          (this.chunkSize += encodeURIComponent(t).length),
          this.wrappers.length &&
            v.reduce(
              function (t, n) {
                var r = n.getBufferData();
                r && (e.chunkSize += v.toJSON(r).length);
              },
              0,
              this.wrappers
            ),
          this.chunkSize
        );
      },
      addData: function (t, e, n, r, i) {
        var o = 0,
          a = 1,
          s = { type: t },
          c = 0.9 * this.maxBufferSize;
        if (!this.totalSendLimit || this._totalSendedSize < this.totalSendLimit)
          if (
            ((this._v = n),
            this.wrappers.length &&
              v.arrayEvery(this.wrappers, function (n) {
                return n.trigger && n.trigger(t, e), 1;
              }),
            i)
          )
            this._getSize('{}'), this.append([], r);
          else {
            if (
              (this.updateStamp(e, s),
              (n = M.stringify(e)),
              (i = this._getSize(n)) > this.maxBufferSize)
            )
              for (
                this._data.length && this._flush(), r = Math.ceil(n.length / c);
                o < n.length;

              )
                (s.partNum = a),
                  (s.end = a === r),
                  (s.data = n.slice(o, (o += c))),
                  a++,
                  this._getSize(s.data),
                  this.append([s], !0);
            else (s.data = n), this.append([s], r);
            this.store.set(s, { id: t, data: e });
          }
      },
      onFlush: function (t, e, n) {
        if (
          ((this.chunkSize = 0),
          v.arrayEvery(
            this.wrappers,
            function (e) {
              return e.onFlush
                ? (v.arrayEvery(
                    t,
                    function (t) {
                      return (t = this.store.pop(t))
                        ? (e.onFlush(t.id, t.data), 1)
                        : 1;
                    },
                    this
                  ),
                  1)
                : 1;
            },
            this
          ),
          v.arrayEvery(this.wrappers, function (e) {
            return (e = e.getBufferData())
              ? ((e.data = M.stringify(e.data)), t.push(e), 1)
              : 1;
          }),
          t.length)
        ) {
          var r = M.stringify(t);
          (this._totalSendedSize += r.length),
            this._sender.sendPacket(
              r,
              e.url,
              e.hitId,
              n,
              e.timezone,
              e.timestamp,
              this.startBufferTime
            );
        }
      },
      getFlushSize: function () {
        return this.chunkSize;
      },
    }),
    tt = {},
    et = !1;
  try {
    tt = (function (t) {
      function e(r) {
        if (n[r]) return n[r].exports;
        var i = (n[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
      }
      var n = {};
      return (
        (e.m = t),
        (e.c = n),
        (e.d = function (t, n, r) {
          e.o(t, n) ||
            Object.defineProperty(t, n, {
              configurable: !1,
              enumerable: !0,
              get: r,
            });
        }),
        (e.r = function (t) {
          Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (e.n = function (t) {
          var n =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return e.d(n, 'a', n), n;
        }),
        (e.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.p = ''),
        e((e.s = 18))
      );
    })([
      function (e, n, r) {
        function i(t, e, n) {
          for (var r = Object.keys(e), i = 0; i < r.length; ++i)
            (void 0 !== t[r[i]] && n) || (t[r[i]] = e[r[i]]);
          return t;
        }
        function o(t) {
          function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            Object.defineProperty(this, 'message', {
              get: function () {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, e)
                : Object.defineProperty(this, 'stack', {
                    value: Error().stack || '',
                  }),
              n && i(this, n);
          }
          return (
            ((e.prototype = Object.create(Error.prototype)).constructor = e),
            Object.defineProperty(e.prototype, 'name', {
              get: function () {
                return t;
              },
            }),
            (e.prototype.toString = function () {
              return this.name + ': ' + this.message;
            }),
            e
          );
        }
        (n.asPromise = r(15)),
          (n.base64 = r(14)),
          (n.EventEmitter = r(13)),
          (n.float = r(12)),
          (n.inquire = r(11)),
          (n.utf8 = r(10)),
          (n.pool = r(9)),
          (n.LongBits = r(8)),
          (n.global =
            (void 0 !== t && t) ||
            ('undefined' != typeof global && global) ||
            ('undefined' != typeof self && self) ||
            this),
          (n.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (n.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (n.isNode = !!(
            n.global.process &&
            n.global.process.versions &&
            n.global.process.versions.node
          )),
          (n.isInteger =
            Number.isInteger ||
            function (t) {
              return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
            }),
          (n.isString = function (t) {
            return 'string' == typeof t || t instanceof String;
          }),
          (n.isObject = function (t) {
            return t && 'object' == typeof t;
          }),
          (n.isset = n.isSet = function (t, e) {
            var n = t[e];
            return (
              !(null == n || !t.hasOwnProperty(e)) &&
              ('object' != typeof n ||
                0 < (Array.isArray(n) ? n.length : Object.keys(n).length))
            );
          }),
          (n.Buffer = (function () {
            try {
              var t = n.inquire('buffer').Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (t) {
              return null;
            }
          })()),
          (n._Buffer_from = null),
          (n._Buffer_allocUnsafe = null),
          (n.newBuffer = function (t) {
            return 'number' == typeof t
              ? n.Buffer
                ? n._Buffer_allocUnsafe(t)
                : new n.Array(t)
              : n.Buffer
              ? n._Buffer_from(t)
              : 'undefined' == typeof Uint8Array
              ? t
              : new Uint8Array(t);
          }),
          (n.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array),
          (n.Long =
            (n.global.dcodeIO && n.global.dcodeIO.Long) ||
            n.global.Long ||
            n.inquire('long')),
          (n.key2Re = /^true|false|0|1$/),
          (n.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (n.longToHash = function (t) {
            return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash;
          }),
          (n.longFromHash = function (t, e) {
            var r = n.LongBits.fromHash(t);
            return n.Long ? n.Long.fromBits(r.lo, r.hi, e) : r.toNumber(!!e);
          }),
          (n.merge = i),
          (n.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (n.newError = o),
          (n.ProtocolError = o('ProtocolError')),
          (n.oneOfGetter = function (t) {
            for (var e = {}, n = 0; n < t.length; ++n) e[t[n]] = 1;
            return function () {
              for (var t = Object.keys(this), n = t.length - 1; -1 < n; --n)
                if (
                  1 === e[t[n]] &&
                  void 0 !== this[t[n]] &&
                  null !== this[t[n]]
                )
                  return t[n];
            };
          }),
          (n.oneOfSetter = function (t) {
            return function (e) {
              for (var n = 0; n < t.length; ++n)
                t[n] !== e && delete this[t[n]];
            };
          }),
          (n.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (n._configure = function () {
            var t = n.Buffer;
            t
              ? ((n._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  function (e, n) {
                    return new t(e, n);
                  }),
                (n._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (e) {
                    return new t(e);
                  }))
              : (n._Buffer_from = n._Buffer_allocUnsafe = null);
          });
      },
      function (t, e, n) {
        function r(t, e) {
          return RangeError(
            'index out of range: ' + t.pos + ' + ' + (e || 1) + ' > ' + t.len
          );
        }
        function i(t) {
          (this.buf = t), (this.pos = 0), (this.len = t.length);
        }
        function o() {
          var t = new h(0, 0),
            e = 0;
          if (!(4 < this.len - this.pos)) {
            for (; 3 > e; ++e) {
              if (this.pos >= this.len) throw r(this);
              if (
                ((t.lo =
                  (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
                128 > this.buf[this.pos++])
              )
                return t;
            }
            return (
              (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * e))) >>> 0),
              t
            );
          }
          for (; 4 > e; ++e)
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
              128 > this.buf[this.pos++])
            )
              return t;
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
            (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
            128 > this.buf[this.pos++])
          )
            return t;
          if (((e = 0), 4 < this.len - this.pos)) {
            for (; 5 > e; ++e)
              if (
                ((t.hi =
                  (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
                128 > this.buf[this.pos++])
              )
                return t;
          } else
            for (; 5 > e; ++e) {
              if (this.pos >= this.len) throw r(this);
              if (
                ((t.hi =
                  (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
                128 > this.buf[this.pos++])
              )
                return t;
            }
          throw Error('invalid varint encoding');
        }
        function a(t, e) {
          return (
            (t[e - 4] |
              (t[e - 3] << 8) |
              (t[e - 2] << 16) |
              (t[e - 1] << 24)) >>>
            0
          );
        }
        function s() {
          if (this.pos + 8 > this.len) throw r(this, 8);
          return new h(
            a(this.buf, (this.pos += 4)),
            a(this.buf, (this.pos += 4))
          );
        }
        t.exports = i;
        var c,
          u,
          l = n(0),
          h = l.LongBits,
          f = l.utf8,
          d =
            'undefined' != typeof Uint8Array
              ? function (t) {
                  if (t instanceof Uint8Array || Array.isArray(t))
                    return new i(t);
                  throw Error('illegal buffer');
                }
              : function (t) {
                  if (Array.isArray(t)) return new i(t);
                  throw Error('illegal buffer');
                };
        (i.create = l.Buffer
          ? function (t) {
              return (i.create = function (t) {
                return l.Buffer.isBuffer(t) ? new c(t) : d(t);
              })(t);
            }
          : d),
          (i.prototype._slice =
            l.Array.prototype.subarray || l.Array.prototype.slice),
          (i.prototype.uint32 =
            ((u = 4294967295),
            function () {
              if (
                ((u = (127 & this.buf[this.pos]) >>> 0),
                128 > this.buf[this.pos++])
              )
                return u;
              if (
                ((u = (u | ((127 & this.buf[this.pos]) << 7)) >>> 0),
                128 > this.buf[this.pos++])
              )
                return u;
              if (
                ((u = (u | ((127 & this.buf[this.pos]) << 14)) >>> 0),
                128 > this.buf[this.pos++])
              )
                return u;
              if (
                ((u = (u | ((127 & this.buf[this.pos]) << 21)) >>> 0),
                128 > this.buf[this.pos++])
              )
                return u;
              if (
                ((u = (u | ((15 & this.buf[this.pos]) << 28)) >>> 0),
                128 > this.buf[this.pos++])
              )
                return u;
              if ((this.pos += 5) > this.len)
                throw ((this.pos = this.len), r(this, 10));
              return u;
            })),
          (i.prototype.int32 = function () {
            return 0 | this.uint32();
          }),
          (i.prototype.sint32 = function () {
            var t = this.uint32();
            return ((t >>> 1) ^ -(1 & t)) | 0;
          }),
          (i.prototype.bool = function () {
            return 0 !== this.uint32();
          }),
          (i.prototype.fixed32 = function () {
            if (this.pos + 4 > this.len) throw r(this, 4);
            return a(this.buf, (this.pos += 4));
          }),
          (i.prototype.sfixed32 = function () {
            if (this.pos + 4 > this.len) throw r(this, 4);
            return 0 | a(this.buf, (this.pos += 4));
          }),
          (i.prototype.float = function () {
            if (this.pos + 4 > this.len) throw r(this, 4);
            var t = l.float.readFloatLE(this.buf, this.pos);
            return (this.pos += 4), t;
          }),
          (i.prototype.double = function () {
            if (this.pos + 8 > this.len) throw r(this, 4);
            var t = l.float.readDoubleLE(this.buf, this.pos);
            return (this.pos += 8), t;
          }),
          (i.prototype.bytes = function () {
            var t = this.uint32(),
              e = this.pos,
              n = this.pos + t;
            if (n > this.len) throw r(this, t);
            return (
              (this.pos += t),
              Array.isArray(this.buf)
                ? this.buf.slice(e, n)
                : e === n
                ? new this.buf.constructor(0)
                : this._slice.call(this.buf, e, n)
            );
          }),
          (i.prototype.string = function () {
            var t = this.bytes();
            return f.read(t, 0, t.length);
          }),
          (i.prototype.skip = function (t) {
            if ('number' == typeof t) {
              if (this.pos + t > this.len) throw r(this, t);
              this.pos += t;
            } else
              do {
                if (this.pos >= this.len) throw r(this);
              } while (128 & this.buf[this.pos++]);
            return this;
          }),
          (i.prototype.skipType = function (t) {
            switch (t) {
              case 0:
                this.skip();
                break;
              case 1:
                this.skip(8);
                break;
              case 2:
                this.skip(this.uint32());
                break;
              case 3:
                for (; 4 != (t = 7 & this.uint32()); ) this.skipType(t);
                break;
              case 5:
                this.skip(4);
                break;
              default:
                throw Error(
                  'invalid wire type ' + t + ' at offset ' + this.pos
                );
            }
            return this;
          }),
          (i._configure = function (t) {
            c = t;
            var e = l.Long ? 'toLong' : 'toNumber';
            l.merge(i.prototype, {
              int64: function () {
                return o.call(this)[e](!1);
              },
              uint64: function () {
                return o.call(this)[e](!0);
              },
              sint64: function () {
                return o.call(this).zzDecode()[e](!1);
              },
              fixed64: function () {
                return s.call(this)[e](!0);
              },
              sfixed64: function () {
                return s.call(this)[e](!1);
              },
            });
          });
      },
      function (t, e, n) {
        function r(t, e, n) {
          (this.fn = t), (this.len = e), (this.next = void 0), (this.val = n);
        }
        function i() {}
        function o(t) {
          (this.head = t.head),
            (this.tail = t.tail),
            (this.len = t.len),
            (this.next = t.states);
        }
        function a() {
          (this.len = 0),
            (this.tail = this.head = new r(i, 0, 0)),
            (this.states = null);
        }
        function s(t, e, n) {
          e[n] = 255 & t;
        }
        function c(t, e) {
          (this.len = t), (this.next = void 0), (this.val = e);
        }
        function u(t, e, n) {
          for (; t.hi; )
            (e[n++] = (127 & t.lo) | 128),
              (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
              (t.hi >>>= 7);
          for (; 127 < t.lo; ) (e[n++] = (127 & t.lo) | 128), (t.lo >>>= 7);
          e[n++] = t.lo;
        }
        function l(t, e, n) {
          (e[n] = 255 & t),
            (e[n + 1] = (t >>> 8) & 255),
            (e[n + 2] = (t >>> 16) & 255),
            (e[n + 3] = t >>> 24);
        }
        t.exports = a;
        var h,
          f = n(0),
          d = f.LongBits,
          p = f.base64,
          m = f.utf8;
        (a.create = f.Buffer
          ? function () {
              return (a.create = function () {
                return new h();
              })();
            }
          : function () {
              return new a();
            }),
          (a.alloc = function (t) {
            return new f.Array(t);
          }),
          f.Array !== Array &&
            (a.alloc = f.pool(a.alloc, f.Array.prototype.subarray)),
          (a.prototype._push = function (t, e, n) {
            return (
              (this.tail = this.tail.next = new r(t, e, n)),
              (this.len += e),
              this
            );
          }),
          (c.prototype = Object.create(r.prototype)),
          (c.prototype.fn = function (t, e, n) {
            for (; 127 < t; ) (e[n++] = (127 & t) | 128), (t >>>= 7);
            e[n] = t;
          }),
          (a.prototype.uint32 = function (t) {
            return (
              (this.len += (this.tail = this.tail.next = new c(
                128 > (t >>>= 0)
                  ? 1
                  : 16384 > t
                  ? 2
                  : 2097152 > t
                  ? 3
                  : 268435456 > t
                  ? 4
                  : 5,
                t
              )).len),
              this
            );
          }),
          (a.prototype.int32 = function (t) {
            return 0 > t ? this._push(u, 10, d.fromNumber(t)) : this.uint32(t);
          }),
          (a.prototype.sint32 = function (t) {
            return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
          }),
          (a.prototype.uint64 = function (t) {
            return (t = d.from(t)), this._push(u, t.length(), t);
          }),
          (a.prototype.int64 = a.prototype.uint64),
          (a.prototype.sint64 = function (t) {
            return (t = d.from(t).zzEncode()), this._push(u, t.length(), t);
          }),
          (a.prototype.bool = function (t) {
            return this._push(s, 1, t ? 1 : 0);
          }),
          (a.prototype.fixed32 = function (t) {
            return this._push(l, 4, t >>> 0);
          }),
          (a.prototype.sfixed32 = a.prototype.fixed32),
          (a.prototype.fixed64 = function (t) {
            return (t = d.from(t)), this._push(l, 4, t.lo)._push(l, 4, t.hi);
          }),
          (a.prototype.sfixed64 = a.prototype.fixed64),
          (a.prototype.float = function (t) {
            return this._push(f.float.writeFloatLE, 4, t);
          }),
          (a.prototype.double = function (t) {
            return this._push(f.float.writeDoubleLE, 8, t);
          });
        var g = f.Array.prototype.set
          ? function (t, e, n) {
              e.set(t, n);
            }
          : function (t, e, n) {
              for (var r = 0; r < t.length; ++r) e[n + r] = t[r];
            };
        (a.prototype.bytes = function (t) {
          var e = t.length >>> 0;
          if (!e) return this._push(s, 1, 0);
          if (f.isString(t)) {
            var n = a.alloc((e = p.length(t)));
            p.decode(t, n, 0), (t = n);
          }
          return this.uint32(e)._push(g, e, t);
        }),
          (a.prototype.string = function (t) {
            var e = m.length(t);
            return e
              ? this.uint32(e)._push(m.write, e, t)
              : this._push(s, 1, 0);
          }),
          (a.prototype.fork = function () {
            return (
              (this.states = new o(this)),
              (this.head = this.tail = new r(i, 0, 0)),
              (this.len = 0),
              this
            );
          }),
          (a.prototype.reset = function () {
            return (
              this.states
                ? ((this.head = this.states.head),
                  (this.tail = this.states.tail),
                  (this.len = this.states.len),
                  (this.states = this.states.next))
                : ((this.head = this.tail = new r(i, 0, 0)), (this.len = 0)),
              this
            );
          }),
          (a.prototype.ldelim = function () {
            var t = this.head,
              e = this.tail,
              n = this.len;
            return (
              this.reset().uint32(n),
              n &&
                ((this.tail.next = t.next), (this.tail = e), (this.len += n)),
              this
            );
          }),
          (a.prototype.finish = function () {
            for (
              var t = this.head.next,
                e = this.constructor.alloc(this.len),
                n = 0;
              t;

            )
              t.fn(t.val, e, n), (n += t.len), (t = t.next);
            return e;
          }),
          (a._configure = function (t) {
            h = t;
          });
      },
      function (t, e, n) {
        t.exports = {};
      },
      function (t, e, n) {
        function r(t, e, n) {
          if ('function' != typeof t)
            throw TypeError('rpcImpl must be a function');
          i.EventEmitter.call(this),
            (this.rpcImpl = t),
            (this.requestDelimited = !!e),
            (this.responseDelimited = !!n);
        }
        t.exports = r;
        var i = n(0);
        ((r.prototype = Object.create(
          i.EventEmitter.prototype
        )).constructor = r),
          (r.prototype.rpcCall = function t(e, n, r, a, s) {
            if (!a) throw TypeError('request must be specified');
            var c = this;
            if (!s) return i.asPromise(t, c, e, n, r, a);
            if (c.rpcImpl)
              try {
                return c.rpcImpl(
                  e,
                  n[c.requestDelimited ? 'encodeDelimited' : 'encode'](
                    a
                  ).finish(),
                  function (t, n) {
                    if (t) return c.emit('error', t, e), s(t);
                    if (null !== n) {
                      if (!(n instanceof r))
                        try {
                          n = r[
                            c.responseDelimited ? 'decodeDelimited' : 'decode'
                          ](n);
                        } catch (t) {
                          return c.emit('error', t, e), s(t);
                        }
                      return c.emit('data', n, e), s(null, n);
                    }
                    c.end(!0);
                  }
                );
              } catch (t) {
                c.emit('error', t, e),
                  o(function () {
                    s(t);
                  }, 0);
              }
            else
              o(function () {
                s(Error('already ended'));
              }, 0);
          }),
          (r.prototype.end = function (t) {
            return (
              this.rpcImpl &&
                (t || this.rpcImpl(null, null, null),
                (this.rpcImpl = null),
                this.emit('end').off()),
              this
            );
          });
      },
      function (t, e, n) {
        e.Service = n(4);
      },
      function (t, e, n) {
        function r(t) {
          i.call(this, t);
        }
        t.exports = r;
        var i = n(1);
        ((r.prototype = Object.create(i.prototype)).constructor = r),
          (t = n(0)).Buffer && (r.prototype._slice = t.Buffer.prototype.slice),
          (r.prototype.string = function () {
            var t = this.uint32();
            return this.buf.utf8Slice(
              this.pos,
              (this.pos = Math.min(this.pos + t, this.len))
            );
          });
      },
      function (t, e, n) {
        function r() {
          o.call(this);
        }
        function i(t, e, n) {
          40 > t.length ? a.utf8.write(t, e, n) : e.utf8Write(t, n);
        }
        t.exports = r;
        var o = n(2);
        (r.prototype = Object.create(o.prototype)).constructor = r;
        var a = n(0),
          s = a.Buffer;
        r.alloc = function (t) {
          return (r.alloc = a._Buffer_allocUnsafe)(t);
        };
        var c =
          s &&
          s.prototype instanceof Uint8Array &&
          'set' === s.prototype.set.name
            ? function (t, e, n) {
                e.set(t, n);
              }
            : function (t, e, n) {
                if (t.copy) t.copy(e, n, 0, t.length);
                else for (var r = 0; r < t.length; ) e[n++] = t[r++];
              };
        (r.prototype.bytes = function (t) {
          a.isString(t) && (t = a._Buffer_from(t, 'base64'));
          var e = t.length >>> 0;
          return this.uint32(e), e && this._push(c, e, t), this;
        }),
          (r.prototype.string = function (t) {
            var e = s.byteLength(t);
            return this.uint32(e), e && this._push(i, e, t), this;
          });
      },
      function (t, e, n) {
        function r(t, e) {
          (this.lo = t >>> 0), (this.hi = e >>> 0);
        }
        t.exports = r;
        var i = n(0),
          o = (r.zero = new r(0, 0));
        (o.toNumber = function () {
          return 0;
        }),
          (o.zzEncode = o.zzDecode = function () {
            return this;
          }),
          (o.length = function () {
            return 1;
          });
        var a = (r.zeroHash = '\0\0\0\0\0\0\0\0');
        (r.fromNumber = function (t) {
          if (0 === t) return o;
          var e = 0 > t;
          e && (t = -t);
          var n = t >>> 0;
          return (
            (t = ((t - n) / 4294967296) >>> 0),
            e &&
              ((t = ~t >>> 0),
              (n = ~n >>> 0),
              4294967295 < ++n && ((n = 0), 4294967295 < ++t && (t = 0))),
            new r(n, t)
          );
        }),
          (r.from = function (t) {
            if ('number' == typeof t) return r.fromNumber(t);
            if (i.isString(t)) {
              if (!i.Long) return r.fromNumber(parseInt(t, 10));
              t = i.Long.fromString(t);
            }
            return t.low || t.high ? new r(t.low >>> 0, t.high >>> 0) : o;
          }),
          (r.prototype.toNumber = function (t) {
            if (!t && this.hi >>> 31) {
              t = (1 + ~this.lo) >>> 0;
              var e = ~this.hi >>> 0;
              return t || (e = (e + 1) >>> 0), -(t + 4294967296 * e);
            }
            return this.lo + 4294967296 * this.hi;
          }),
          (r.prototype.toLong = function (t) {
            return i.Long
              ? new i.Long(0 | this.lo, 0 | this.hi, !!t)
              : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!t };
          });
        var s = String.prototype.charCodeAt;
        (r.fromHash = function (t) {
          return t === a
            ? o
            : new r(
                (s.call(t, 0) |
                  (s.call(t, 1) << 8) |
                  (s.call(t, 2) << 16) |
                  (s.call(t, 3) << 24)) >>>
                  0,
                (s.call(t, 4) |
                  (s.call(t, 5) << 8) |
                  (s.call(t, 6) << 16) |
                  (s.call(t, 7) << 24)) >>>
                  0
              );
        }),
          (r.prototype.toHash = function () {
            return String.fromCharCode(
              255 & this.lo,
              (this.lo >>> 8) & 255,
              (this.lo >>> 16) & 255,
              this.lo >>> 24,
              255 & this.hi,
              (this.hi >>> 8) & 255,
              (this.hi >>> 16) & 255,
              this.hi >>> 24
            );
          }),
          (r.prototype.zzEncode = function () {
            var t = this.hi >> 31;
            return (
              (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
              (this.lo = ((this.lo << 1) ^ t) >>> 0),
              this
            );
          }),
          (r.prototype.zzDecode = function () {
            var t = -(1 & this.lo);
            return (
              (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
              (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
              this
            );
          }),
          (r.prototype.length = function () {
            var t = this.lo,
              e = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
              n = this.hi >>> 24;
            return 0 === n
              ? 0 === e
                ? 16384 > t
                  ? 128 > t
                    ? 1
                    : 2
                  : 2097152 > t
                  ? 3
                  : 4
                : 16384 > e
                ? 128 > e
                  ? 5
                  : 6
                : 2097152 > e
                ? 7
                : 8
              : 128 > n
              ? 9
              : 10;
          });
      },
      function (t, e, n) {
        t.exports = function (t, e, n) {
          var r = n || 8192,
            i = r >>> 1,
            o = null,
            a = r;
          return function (n) {
            return 1 > n || n > i
              ? t(n)
              : (a + n > r && ((o = t(r)), (a = 0)),
                (n = e.call(o, a, (a += n))),
                7 & a && (a = 1 + (7 | a)),
                n);
          };
        };
      },
      function (t, e, n) {
        (e.length = function (t) {
          for (var e, n = 0, r = 0; r < t.length; ++r)
            128 > (e = t.charCodeAt(r))
              ? (n += 1)
              : 2048 > e
              ? (n += 2)
              : 55296 == (64512 & e) && 56320 == (64512 & t.charCodeAt(r + 1))
              ? (++r, (n += 4))
              : (n += 3);
          return n;
        }),
          (e.read = function (t, e, n) {
            if (1 > n - e) return '';
            for (var r, i = null, o = [], a = 0; e < n; )
              128 > (r = t[e++])
                ? (o[a++] = r)
                : 191 < r && 224 > r
                ? (o[a++] = ((31 & r) << 6) | (63 & t[e++]))
                : 239 < r && 365 > r
                ? ((r =
                    (((7 & r) << 18) |
                      ((63 & t[e++]) << 12) |
                      ((63 & t[e++]) << 6) |
                      (63 & t[e++])) -
                    65536),
                  (o[a++] = 55296 + (r >> 10)),
                  (o[a++] = 56320 + (1023 & r)))
                : (o[a++] =
                    ((15 & r) << 12) | ((63 & t[e++]) << 6) | (63 & t[e++])),
                8191 < a &&
                  ((i || (i = [])).push(String.fromCharCode.apply(String, o)),
                  (a = 0));
            return i
              ? (a && i.push(String.fromCharCode.apply(String, o.slice(0, a))),
                i.join(''))
              : String.fromCharCode.apply(String, o.slice(0, a));
          }),
          (e.write = function (t, e, n) {
            for (var r, i, o = n, a = 0; a < t.length; ++a)
              128 > (r = t.charCodeAt(a))
                ? (e[n++] = r)
                : (2048 > r
                    ? (e[n++] = (r >> 6) | 192)
                    : (55296 == (64512 & r) &&
                      56320 == (64512 & (i = t.charCodeAt(a + 1)))
                        ? ((r = 65536 + ((1023 & r) << 10) + (1023 & i)),
                          ++a,
                          (e[n++] = (r >> 18) | 240),
                          (e[n++] = ((r >> 12) & 63) | 128))
                        : (e[n++] = (r >> 12) | 224),
                      (e[n++] = ((r >> 6) & 63) | 128)),
                  (e[n++] = (63 & r) | 128));
            return n - o;
          });
      },
      function (t, e, n) {
        t.exports = function (t) {
          return null;
        };
      },
      function (t, e, n) {
        function r(t) {
          return (
            'undefined' != typeof Float32Array
              ? (function () {
                  function e(t, e, n) {
                    (o[0] = t),
                      (e[n] = a[0]),
                      (e[n + 1] = a[1]),
                      (e[n + 2] = a[2]),
                      (e[n + 3] = a[3]);
                  }
                  function n(t, e, n) {
                    (o[0] = t),
                      (e[n] = a[3]),
                      (e[n + 1] = a[2]),
                      (e[n + 2] = a[1]),
                      (e[n + 3] = a[0]);
                  }
                  function r(t, e) {
                    return (
                      (a[0] = t[e]),
                      (a[1] = t[e + 1]),
                      (a[2] = t[e + 2]),
                      (a[3] = t[e + 3]),
                      o[0]
                    );
                  }
                  function i(t, e) {
                    return (
                      (a[3] = t[e]),
                      (a[2] = t[e + 1]),
                      (a[1] = t[e + 2]),
                      (a[0] = t[e + 3]),
                      o[0]
                    );
                  }
                  var o = new Float32Array([-0]),
                    a = new Uint8Array(o.buffer),
                    s = 128 === a[3];
                  (t.writeFloatLE = s ? e : n),
                    (t.writeFloatBE = s ? n : e),
                    (t.readFloatLE = s ? r : i),
                    (t.readFloatBE = s ? i : r);
                })()
              : (function () {
                  function e(t, e, n, r) {
                    var i = 0 > e ? 1 : 0;
                    if ((i && (e = -e), 0 === e))
                      t(0 < 1 / e ? 0 : 2147483648, n, r);
                    else if (isNaN(e)) t(2143289344, n, r);
                    else if (3.4028234663852886e38 < e)
                      t(((i << 31) | 2139095040) >>> 0, n, r);
                    else if (1.1754943508222875e-38 > e)
                      t(
                        ((i << 31) | Math.round(e / 1.401298464324817e-45)) >>>
                          0,
                        n,
                        r
                      );
                    else {
                      var o = Math.floor(Math.log(e) / Math.LN2);
                      t(
                        ((i << 31) |
                          ((o + 127) << 23) |
                          (8388607 &
                            Math.round(e * Math.pow(2, -o) * 8388608))) >>>
                          0,
                        n,
                        r
                      );
                    }
                  }
                  function n(t, e, n) {
                    return (
                      (n = t(e, n)),
                      (t = 2 * (n >> 31) + 1),
                      (e = (n >>> 23) & 255),
                      (n &= 8388607),
                      255 === e
                        ? n
                          ? NaN
                          : (1 / 0) * t
                        : 0 === e
                        ? 1.401298464324817e-45 * t * n
                        : t * Math.pow(2, e - 150) * (n + 8388608)
                    );
                  }
                  (t.writeFloatLE = e.bind(null, i)),
                    (t.writeFloatBE = e.bind(null, o)),
                    (t.readFloatLE = n.bind(null, a)),
                    (t.readFloatBE = n.bind(null, s));
                })(),
            'undefined' != typeof Float64Array
              ? (function () {
                  function e(t, e, n) {
                    (o[0] = t),
                      (e[n] = a[0]),
                      (e[n + 1] = a[1]),
                      (e[n + 2] = a[2]),
                      (e[n + 3] = a[3]),
                      (e[n + 4] = a[4]),
                      (e[n + 5] = a[5]),
                      (e[n + 6] = a[6]),
                      (e[n + 7] = a[7]);
                  }
                  function n(t, e, n) {
                    (o[0] = t),
                      (e[n] = a[7]),
                      (e[n + 1] = a[6]),
                      (e[n + 2] = a[5]),
                      (e[n + 3] = a[4]),
                      (e[n + 4] = a[3]),
                      (e[n + 5] = a[2]),
                      (e[n + 6] = a[1]),
                      (e[n + 7] = a[0]);
                  }
                  function r(t, e) {
                    return (
                      (a[0] = t[e]),
                      (a[1] = t[e + 1]),
                      (a[2] = t[e + 2]),
                      (a[3] = t[e + 3]),
                      (a[4] = t[e + 4]),
                      (a[5] = t[e + 5]),
                      (a[6] = t[e + 6]),
                      (a[7] = t[e + 7]),
                      o[0]
                    );
                  }
                  function i(t, e) {
                    return (
                      (a[7] = t[e]),
                      (a[6] = t[e + 1]),
                      (a[5] = t[e + 2]),
                      (a[4] = t[e + 3]),
                      (a[3] = t[e + 4]),
                      (a[2] = t[e + 5]),
                      (a[1] = t[e + 6]),
                      (a[0] = t[e + 7]),
                      o[0]
                    );
                  }
                  var o = new Float64Array([-0]),
                    a = new Uint8Array(o.buffer),
                    s = 128 === a[7];
                  (t.writeDoubleLE = s ? e : n),
                    (t.writeDoubleBE = s ? n : e),
                    (t.readDoubleLE = s ? r : i),
                    (t.readDoubleBE = s ? i : r);
                })()
              : (function () {
                  function e(t, e, n, r, i, o) {
                    var a = 0 > r ? 1 : 0;
                    if ((a && (r = -r), 0 === r))
                      t(0, i, o + e), t(0 < 1 / r ? 0 : 2147483648, i, o + n);
                    else if (isNaN(r)) t(0, i, o + e), t(2146959360, i, o + n);
                    else if (1.7976931348623157e308 < r)
                      t(0, i, o + e),
                        t(((a << 31) | 2146435072) >>> 0, i, o + n);
                    else if (2.2250738585072014e-308 > r)
                      t((r /= 5e-324) >>> 0, i, o + e),
                        t(((a << 31) | (r / 4294967296)) >>> 0, i, o + n);
                    else {
                      var s = Math.floor(Math.log(r) / Math.LN2);
                      1024 === s && (s = 1023),
                        t(
                          (4503599627370496 * (r *= Math.pow(2, -s))) >>> 0,
                          i,
                          o + e
                        ),
                        t(
                          ((a << 31) |
                            ((s + 1023) << 20) |
                            ((1048576 * r) & 1048575)) >>>
                            0,
                          i,
                          o + n
                        );
                    }
                  }
                  function n(t, e, n, r, i) {
                    return (
                      (e = t(r, i + e)),
                      (r = t(r, i + n)),
                      (t = 2 * (r >> 31) + 1),
                      (e = 4294967296 * (1048575 & r) + e),
                      2047 === (n = (r >>> 20) & 2047)
                        ? e
                          ? NaN
                          : (1 / 0) * t
                        : 0 === n
                        ? 5e-324 * t * e
                        : t * Math.pow(2, n - 1075) * (e + 4503599627370496)
                    );
                  }
                  (t.writeDoubleLE = e.bind(null, i, 0, 4)),
                    (t.writeDoubleBE = e.bind(null, o, 4, 0)),
                    (t.readDoubleLE = n.bind(null, a, 0, 4)),
                    (t.readDoubleBE = n.bind(null, s, 4, 0));
                })(),
            t
          );
        }
        function i(t, e, n) {
          (e[n] = 255 & t),
            (e[n + 1] = (t >>> 8) & 255),
            (e[n + 2] = (t >>> 16) & 255),
            (e[n + 3] = t >>> 24);
        }
        function o(t, e, n) {
          (e[n] = t >>> 24),
            (e[n + 1] = (t >>> 16) & 255),
            (e[n + 2] = (t >>> 8) & 255),
            (e[n + 3] = 255 & t);
        }
        function a(t, e) {
          return (
            (t[e] | (t[e + 1] << 8) | (t[e + 2] << 16) | (t[e + 3] << 24)) >>> 0
          );
        }
        function s(t, e) {
          return (
            ((t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]) >>> 0
          );
        }
        t.exports = r(r);
      },
      function (t, e, n) {
        function r() {
          this._listeners = {};
        }
        (t.exports = r),
          (r.prototype.on = function (t, e, n) {
            return (
              (this._listeners[t] || (this._listeners[t] = [])).push({
                fn: e,
                ctx: n || this,
              }),
              this
            );
          }),
          (r.prototype.off = function (t, e) {
            if (void 0 === t) this._listeners = {};
            else if (void 0 === e) this._listeners[t] = [];
            else
              for (var n = this._listeners[t], r = 0; r < n.length; )
                n[r].fn === e ? n.splice(r, 1) : ++r;
            return this;
          }),
          (r.prototype.emit = function (t) {
            var e = this._listeners[t];
            if (e) {
              for (var n = [], r = 1; r < arguments.length; )
                n.push(arguments[r++]);
              for (r = 0; r < e.length; ) e[r].fn.apply(e[r++].ctx, n);
            }
            return this;
          });
      },
      function (t, e, n) {
        e.length = function (t) {
          var e = t.length;
          if (!e) return 0;
          for (var n = 0; 1 < --e % 4 && '=' === t.charAt(e); ) ++n;
          return Math.ceil(3 * t.length) / 4 - n;
        };
        var r = Array(64),
          i = Array(123);
        for (t = 0; 64 > t; )
          i[
            (r[t] =
              26 > t
                ? t + 65
                : 52 > t
                ? t + 71
                : 62 > t
                ? t - 4
                : (t - 59) | 43)
          ] = t++;
        (e.encode = function (t, e, n) {
          for (var i, o = null, a = [], s = 0, c = 0; e < n; ) {
            var u = t[e++];
            switch (c) {
              case 0:
                (a[s++] = r[u >> 2]), (i = (3 & u) << 4), (c = 1);
                break;
              case 1:
                (a[s++] = r[i | (u >> 4)]), (i = (15 & u) << 2), (c = 2);
                break;
              case 2:
                (a[s++] = r[i | (u >> 6)]), (a[s++] = r[63 & u]), (c = 0);
            }
            8191 < s &&
              ((o || (o = [])).push(String.fromCharCode.apply(String, a)),
              (s = 0));
          }
          return (
            c && ((a[s++] = r[i]), (a[s++] = 61), 1 === c && (a[s++] = 61)),
            o
              ? (s && o.push(String.fromCharCode.apply(String, a.slice(0, s))),
                o.join(''))
              : String.fromCharCode.apply(String, a.slice(0, s))
          );
        }),
          (e.decode = function (t, e, n) {
            for (var r, o = n, a = 0, s = 0; s < t.length; ) {
              var c = t.charCodeAt(s++);
              if (61 === c && 1 < a) break;
              if (void 0 === (c = i[c])) throw Error('invalid encoding');
              switch (a) {
                case 0:
                  (r = c), (a = 1);
                  break;
                case 1:
                  (e[n++] = (r << 2) | ((48 & c) >> 4)), (r = c), (a = 2);
                  break;
                case 2:
                  (e[n++] = ((15 & r) << 4) | ((60 & c) >> 2)),
                    (r = c),
                    (a = 3);
                  break;
                case 3:
                  (e[n++] = ((3 & r) << 6) | c), (a = 0);
              }
            }
            if (1 === a) throw Error('invalid encoding');
            return n - o;
          }),
          (e.test = function (t) {
            return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(
              t
            );
          });
      },
      function (t, e, n) {
        t.exports = function (t, e) {
          for (
            var n = Array(arguments.length - 1), r = 0, i = 2, o = !0;
            i < arguments.length;

          )
            n[r++] = arguments[i++];
          return new Promise(function (i, a) {
            n[r] = function (t) {
              if (o)
                if (((o = !1), t)) a(t);
                else {
                  for (
                    var e = Array(arguments.length - 1), n = 0;
                    n < e.length;

                  )
                    e[n++] = arguments[n];
                  i.apply(null, e);
                }
            };
            try {
              t.apply(e || null, n);
            } catch (t) {
              o && ((o = !1), a(t));
            }
          });
        };
      },
      function (t, e, n) {
        function r() {
          i.Reader._configure(i.BufferReader), i.util._configure();
        }
        var i = e;
        (i.build = 'minimal'),
          (i.Writer = n(2)),
          (i.BufferWriter = n(7)),
          (i.Reader = n(1)),
          (i.BufferReader = n(6)),
          (i.util = n(0)),
          (i.rpc = n(5)),
          (i.roots = n(3)),
          (i.configure = r),
          i.Writer._configure(i.BufferWriter),
          r();
      },
      function (t, e, n) {
        t.exports = n(16);
      },
      function (t, e, n) {
        var r = (e = n(17)).Reader,
          i = e.Writer,
          o = e.util,
          a = e.roots.default || (e.roots.default = {});
        (a.ru = (function () {
          var t = {};
          return (
            (t.yandex = (function () {
              var t = {};
              return (
                (t.metrika = (function () {
                  var t = {};
                  return (
                    (t.wv2 = (function () {
                      var t = {};
                      return (
                        (t.proto = (function () {
                          var t = {};
                          return (
                            (t.BufferWrapper = (function () {
                              function t(t) {
                                if (((this.buffer = []), t))
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.buffer = o.emptyArray),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  if (
                                    (e || (e = i.create()),
                                    null != t.buffer && t.buffer.length)
                                  )
                                    for (var n = 0; n < t.buffer.length; ++n)
                                      a.ru.yandex.metrika.wv2.proto.Buffer.encode(
                                        t.buffer[n],
                                        e.uint32(10).fork()
                                      ).ldelim();
                                  return e;
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.BufferWrapper();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        (i.buffer && i.buffer.length) ||
                                          (i.buffer = []),
                                          i.buffer.push(
                                            a.ru.yandex.metrika.wv2.proto.Buffer.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.Buffer = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.stamp = 0),
                                (t.prototype.data = null),
                                (t.prototype.page = 0),
                                (t.prototype.chunk = o.newBuffer([])),
                                (t.prototype.end = !1),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.stamp &&
                                      Object.hasOwnProperty.call(t, 'stamp') &&
                                      e.uint32(8).int32(t.stamp),
                                    null != t.data &&
                                      Object.hasOwnProperty.call(t, 'data') &&
                                      a.ru.yandex.metrika.wv2.proto.Wrapper.encode(
                                        t.data,
                                        e.uint32(18).fork()
                                      ).ldelim(),
                                    null != t.page &&
                                      Object.hasOwnProperty.call(t, 'page') &&
                                      e.uint32(24).int32(t.page),
                                    null != t.chunk &&
                                      Object.hasOwnProperty.call(t, 'chunk') &&
                                      e.uint32(34).bytes(t.chunk),
                                    null != t.end &&
                                      Object.hasOwnProperty.call(t, 'end') &&
                                      e.uint32(40).bool(t.end),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.Buffer();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.stamp = t.int32();
                                        break;
                                      case 2:
                                        i.data = a.ru.yandex.metrika.wv2.proto.Wrapper.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 3:
                                        i.page = t.int32();
                                        break;
                                      case 4:
                                        i.chunk = t.bytes();
                                        break;
                                      case 5:
                                        i.end = t.bool();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.Wrapper = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              var e;
                              return (
                                (t.prototype.page = null),
                                (t.prototype.mutation = null),
                                (t.prototype.event = null),
                                (t.prototype.articleInfo = null),
                                (t.prototype.publishersHeader = null),
                                (t.prototype.activity = 0),
                                Object.defineProperty(t.prototype, 'data', {
                                  get: o.oneOfGetter(
                                    (e = 'page mutation event articleInfo publishersHeader activity'.split(
                                      ' '
                                    ))
                                  ),
                                  set: o.oneOfSetter(e),
                                }),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.page &&
                                      Object.hasOwnProperty.call(t, 'page') &&
                                      a.ru.yandex.metrika.wv2.proto.Page.encode(
                                        t.page,
                                        e.uint32(10).fork()
                                      ).ldelim(),
                                    null != t.mutation &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'mutation'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.Mutation.encode(
                                        t.mutation,
                                        e.uint32(18).fork()
                                      ).ldelim(),
                                    null != t.event &&
                                      Object.hasOwnProperty.call(t, 'event') &&
                                      a.ru.yandex.metrika.wv2.proto.Event.encode(
                                        t.event,
                                        e.uint32(26).fork()
                                      ).ldelim(),
                                    null != t.articleInfo &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'articleInfo'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.ArticleInfo.encode(
                                        t.articleInfo,
                                        e.uint32(34).fork()
                                      ).ldelim(),
                                    null != t.publishersHeader &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'publishersHeader'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.PublishersHeader.encode(
                                        t.publishersHeader,
                                        e.uint32(42).fork()
                                      ).ldelim(),
                                    null != t.activity &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'activity'
                                      ) &&
                                      e.uint32(48).uint32(t.activity),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.Wrapper();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.page = a.ru.yandex.metrika.wv2.proto.Page.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 2:
                                        i.mutation = a.ru.yandex.metrika.wv2.proto.Mutation.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 3:
                                        i.event = a.ru.yandex.metrika.wv2.proto.Event.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 4:
                                        i.articleInfo = a.ru.yandex.metrika.wv2.proto.ArticleInfo.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 5:
                                        i.publishersHeader = a.ru.yandex.metrika.wv2.proto.PublishersHeader.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 6:
                                        i.activity = t.uint32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.Page = (function () {
                              function t(t) {
                                if (((this.content = []), t))
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.meta = null),
                                (t.prototype.content = o.emptyArray),
                                (t.prototype.frameId = 0),
                                (t.prototype.tabId = ''),
                                (t.prototype.recordStamp = o.Long
                                  ? o.Long.fromBits(0, 0, !1)
                                  : 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  if (
                                    (e || (e = i.create()),
                                    null != t.meta &&
                                      Object.hasOwnProperty.call(t, 'meta') &&
                                      a.ru.yandex.metrika.wv2.proto.Page.Meta.encode(
                                        t.meta,
                                        e.uint32(10).fork()
                                      ).ldelim(),
                                    null != t.content && t.content.length)
                                  )
                                    for (var n = 0; n < t.content.length; ++n)
                                      a.ru.yandex.metrika.wv2.proto.Page.Content.encode(
                                        t.content[n],
                                        e.uint32(18).fork()
                                      ).ldelim();
                                  return (
                                    null != t.frameId &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'frameId'
                                      ) &&
                                      e.uint32(24).sint32(t.frameId),
                                    null != t.tabId &&
                                      Object.hasOwnProperty.call(t, 'tabId') &&
                                      e.uint32(34).string(t.tabId),
                                    null != t.recordStamp &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'recordStamp'
                                      ) &&
                                      e.uint32(40).int64(t.recordStamp),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.Page();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.meta = a.ru.yandex.metrika.wv2.proto.Page.Meta.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 2:
                                        (i.content && i.content.length) ||
                                          (i.content = []),
                                          i.content.push(
                                            a.ru.yandex.metrika.wv2.proto.Page.Content.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      case 3:
                                        i.frameId = t.sint32();
                                        break;
                                      case 4:
                                        i.tabId = t.string();
                                        break;
                                      case 5:
                                        i.recordStamp = t.int64();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                (t.Box = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.width = 0),
                                    (t.prototype.height = 0),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.width &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'width'
                                          ) &&
                                          e.uint32(8).int32(t.width),
                                        null != t.height &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'height'
                                          ) &&
                                          e.uint32(16).int32(t.height),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Page.Box();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.width = t.int32();
                                            break;
                                          case 2:
                                            i.height = t.int32();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.Location = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.host = ''),
                                    (t.prototype.protocol = ''),
                                    (t.prototype.path = ''),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.host &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'host'
                                          ) &&
                                          e.uint32(10).string(t.host),
                                        null != t.protocol &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'protocol'
                                          ) &&
                                          e.uint32(18).string(t.protocol),
                                        null != t.path &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'path'
                                          ) &&
                                          e.uint32(26).string(t.path),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Page.Location();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.host = t.string();
                                            break;
                                          case 2:
                                            i.protocol = t.string();
                                            break;
                                          case 3:
                                            i.path = t.string();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.Scroll = (function () {
                                  function t(t) {
                                    if (((this.scroll = []), t))
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.target = 0),
                                    (t.prototype.scroll = o.emptyArray),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      if (
                                        (e || (e = i.create()),
                                        null != t.target &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'target'
                                          ) &&
                                          e.uint32(8).int32(t.target),
                                        null != t.scroll && t.scroll.length)
                                      ) {
                                        e.uint32(18).fork();
                                        for (
                                          var n = 0;
                                          n < t.scroll.length;
                                          ++n
                                        )
                                          e.int32(t.scroll[n]);
                                        e.ldelim();
                                      }
                                      return e;
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Page.Scroll();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.target = t.int32();
                                            break;
                                          case 2:
                                            if (
                                              ((i.scroll && i.scroll.length) ||
                                                (i.scroll = []),
                                              2 == (7 & o))
                                            )
                                              for (
                                                o = t.uint32() + t.pos;
                                                t.pos < o;

                                              )
                                                i.scroll.push(t.int32());
                                            else i.scroll.push(t.int32());
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.Meta = (function () {
                                  function t(t) {
                                    if (((this.initialScroll = []), t))
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.doctype = ''),
                                    (t.prototype.title = ''),
                                    (t.prototype.address = ''),
                                    (t.prototype.ua = ''),
                                    (t.prototype.referrer = ''),
                                    (t.prototype.base = ''),
                                    (t.prototype.hasBase = !1),
                                    (t.prototype.screen = null),
                                    (t.prototype.viewport = null),
                                    (t.prototype.location = null),
                                    (t.prototype.initialScroll = o.emptyArray),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      if (
                                        (e || (e = i.create()),
                                        null != t.doctype &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'doctype'
                                          ) &&
                                          e.uint32(10).string(t.doctype),
                                        null != t.title &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'title'
                                          ) &&
                                          e.uint32(18).string(t.title),
                                        null != t.address &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'address'
                                          ) &&
                                          e.uint32(26).string(t.address),
                                        null != t.ua &&
                                          Object.hasOwnProperty.call(t, 'ua') &&
                                          e.uint32(34).string(t.ua),
                                        null != t.referrer &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'referrer'
                                          ) &&
                                          e.uint32(42).string(t.referrer),
                                        null != t.base &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'base'
                                          ) &&
                                          e.uint32(50).string(t.base),
                                        null != t.hasBase &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'hasBase'
                                          ) &&
                                          e.uint32(56).bool(t.hasBase),
                                        null != t.screen &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'screen'
                                          ) &&
                                          a.ru.yandex.metrika.wv2.proto.Page.Box.encode(
                                            t.screen,
                                            e.uint32(66).fork()
                                          ).ldelim(),
                                        null != t.viewport &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'viewport'
                                          ) &&
                                          a.ru.yandex.metrika.wv2.proto.Page.Box.encode(
                                            t.viewport,
                                            e.uint32(74).fork()
                                          ).ldelim(),
                                        null != t.location &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'location'
                                          ) &&
                                          a.ru.yandex.metrika.wv2.proto.Page.Location.encode(
                                            t.location,
                                            e.uint32(82).fork()
                                          ).ldelim(),
                                        null != t.initialScroll &&
                                          t.initialScroll.length)
                                      )
                                        for (
                                          var n = 0;
                                          n < t.initialScroll.length;
                                          ++n
                                        )
                                          a.ru.yandex.metrika.wv2.proto.Page.Scroll.encode(
                                            t.initialScroll[n],
                                            e.uint32(90).fork()
                                          ).ldelim();
                                      return e;
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Page.Meta();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.doctype = t.string();
                                            break;
                                          case 2:
                                            i.title = t.string();
                                            break;
                                          case 3:
                                            i.address = t.string();
                                            break;
                                          case 4:
                                            i.ua = t.string();
                                            break;
                                          case 5:
                                            i.referrer = t.string();
                                            break;
                                          case 6:
                                            i.base = t.string();
                                            break;
                                          case 7:
                                            i.hasBase = t.bool();
                                            break;
                                          case 8:
                                            i.screen = a.ru.yandex.metrika.wv2.proto.Page.Box.decode(
                                              t,
                                              t.uint32()
                                            );
                                            break;
                                          case 9:
                                            i.viewport = a.ru.yandex.metrika.wv2.proto.Page.Box.decode(
                                              t,
                                              t.uint32()
                                            );
                                            break;
                                          case 10:
                                            i.location = a.ru.yandex.metrika.wv2.proto.Page.Location.decode(
                                              t,
                                              t.uint32()
                                            );
                                            break;
                                          case 11:
                                            (i.initialScroll &&
                                              i.initialScroll.length) ||
                                              (i.initialScroll = []),
                                              i.initialScroll.push(
                                                a.ru.yandex.metrika.wv2.proto.Page.Scroll.decode(
                                                  t,
                                                  t.uint32()
                                                )
                                              );
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.Content = (function () {
                                  function t(t) {
                                    if (((this.attributes = {}), t))
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.id = 0),
                                    (t.prototype.name = ''),
                                    (t.prototype.attributes = o.emptyObject),
                                    (t.prototype.parent = 0),
                                    (t.prototype.content = ''),
                                    (t.prototype.next = 0),
                                    (t.prototype.prev = 0),
                                    (t.prototype.hidden = !1),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      if (
                                        (e || (e = i.create()),
                                        null != t.id &&
                                          Object.hasOwnProperty.call(t, 'id') &&
                                          e.uint32(8).int32(t.id),
                                        null != t.name &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'name'
                                          ) &&
                                          e.uint32(18).string(t.name),
                                        null != t.attributes &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'attributes'
                                          ))
                                      )
                                        for (
                                          var n = Object.keys(t.attributes),
                                            r = 0;
                                          r < n.length;
                                          ++r
                                        )
                                          e.uint32(26)
                                            .fork()
                                            .uint32(10)
                                            .string(n[r])
                                            .uint32(18)
                                            .string(t.attributes[n[r]])
                                            .ldelim();
                                      return (
                                        null != t.parent &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'parent'
                                          ) &&
                                          e.uint32(32).int32(t.parent),
                                        null != t.content &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'content'
                                          ) &&
                                          e.uint32(42).string(t.content),
                                        null != t.next &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'next'
                                          ) &&
                                          e.uint32(48).int32(t.next),
                                        null != t.prev &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'prev'
                                          ) &&
                                          e.uint32(56).int32(t.prev),
                                        null != t.hidden &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'hidden'
                                          ) &&
                                          e.uint32(64).bool(t.hidden),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n,
                                          i = void 0 === e ? t.len : t.pos + e,
                                          s = new a.ru.yandex.metrika.wv2.proto.Page.Content();
                                        t.pos < i;

                                      )
                                        switch (((n = t.uint32()), n >>> 3)) {
                                          case 1:
                                            s.id = t.int32();
                                            break;
                                          case 2:
                                            s.name = t.string();
                                            break;
                                          case 3:
                                            t.skip().pos++,
                                              s.attributes === o.emptyObject &&
                                                (s.attributes = {}),
                                              (n = t.string()),
                                              t.pos++,
                                              (s.attributes[n] = t.string());
                                            break;
                                          case 4:
                                            s.parent = t.int32();
                                            break;
                                          case 5:
                                            s.content = t.string();
                                            break;
                                          case 6:
                                            s.next = t.int32();
                                            break;
                                          case 7:
                                            s.prev = t.int32();
                                            break;
                                          case 8:
                                            s.hidden = t.bool();
                                            break;
                                          default:
                                            t.skipType(7 & n);
                                        }
                                      return s;
                                    }),
                                    t
                                  );
                                })()),
                                t
                              );
                            })()),
                            (t.Mutation = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.target = 0),
                                (t.prototype.stamp = 0),
                                (t.prototype.meta = null),
                                (t.prototype.frameId = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.target &&
                                      Object.hasOwnProperty.call(t, 'target') &&
                                      e.uint32(8).int32(t.target),
                                    null != t.stamp &&
                                      Object.hasOwnProperty.call(t, 'stamp') &&
                                      e.uint32(16).int32(t.stamp),
                                    null != t.meta &&
                                      Object.hasOwnProperty.call(t, 'meta') &&
                                      a.ru.yandex.metrika.wv2.proto.Mutation.Meta.encode(
                                        t.meta,
                                        e.uint32(26).fork()
                                      ).ldelim(),
                                    null != t.frameId &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'frameId'
                                      ) &&
                                      e.uint32(32).sint32(t.frameId),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.Mutation();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.target = t.int32();
                                        break;
                                      case 2:
                                        i.stamp = t.int32();
                                        break;
                                      case 3:
                                        i.meta = a.ru.yandex.metrika.wv2.proto.Mutation.Meta.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 4:
                                        i.frameId = t.sint32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                (t.Delete = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.id = 0),
                                    (t.prototype.pr = 0),
                                    (t.prototype.nx = 0),
                                    (t.prototype.pa = 0),
                                    (t.prototype.i = 0),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.id &&
                                          Object.hasOwnProperty.call(t, 'id') &&
                                          e.uint32(8).int32(t.id),
                                        null != t.pr &&
                                          Object.hasOwnProperty.call(t, 'pr') &&
                                          e.uint32(16).int32(t.pr),
                                        null != t.nx &&
                                          Object.hasOwnProperty.call(t, 'nx') &&
                                          e.uint32(24).int32(t.nx),
                                        null != t.pa &&
                                          Object.hasOwnProperty.call(t, 'pa') &&
                                          e.uint32(32).int32(t.pa),
                                        null != t.i &&
                                          Object.hasOwnProperty.call(t, 'i') &&
                                          e.uint32(40).int32(t.i),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Mutation.Delete();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.id = t.int32();
                                            break;
                                          case 2:
                                            i.pr = t.int32();
                                            break;
                                          case 3:
                                            i.nx = t.int32();
                                            break;
                                          case 4:
                                            i.pa = t.int32();
                                            break;
                                          case 5:
                                            i.i = t.int32();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.Add = (function () {
                                  function t(t) {
                                    if (((this.at = {}), t))
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.id = 0),
                                    (t.prototype.nm = ''),
                                    (t.prototype.pa = 0),
                                    (t.prototype.ns = ''),
                                    (t.prototype.pr = 0),
                                    (t.prototype.at = o.emptyObject),
                                    (t.prototype.ct = ''),
                                    (t.prototype.nx = 0),
                                    (t.prototype.i = 0),
                                    (t.prototype.h = !1),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      if (
                                        (e || (e = i.create()),
                                        null != t.id &&
                                          Object.hasOwnProperty.call(t, 'id') &&
                                          e.uint32(8).int32(t.id),
                                        null != t.nm &&
                                          Object.hasOwnProperty.call(t, 'nm') &&
                                          e.uint32(18).string(t.nm),
                                        null != t.pa &&
                                          Object.hasOwnProperty.call(t, 'pa') &&
                                          e.uint32(24).int32(t.pa),
                                        null != t.ns &&
                                          Object.hasOwnProperty.call(t, 'ns') &&
                                          e.uint32(34).string(t.ns),
                                        null != t.pr &&
                                          Object.hasOwnProperty.call(t, 'pr') &&
                                          e.uint32(40).int32(t.pr),
                                        null != t.at &&
                                          Object.hasOwnProperty.call(t, 'at'))
                                      )
                                        for (
                                          var n = Object.keys(t.at), r = 0;
                                          r < n.length;
                                          ++r
                                        )
                                          e.uint32(50)
                                            .fork()
                                            .uint32(10)
                                            .string(n[r])
                                            .uint32(18)
                                            .string(t.at[n[r]])
                                            .ldelim();
                                      return (
                                        null != t.ct &&
                                          Object.hasOwnProperty.call(t, 'ct') &&
                                          e.uint32(58).string(t.ct),
                                        null != t.nx &&
                                          Object.hasOwnProperty.call(t, 'nx') &&
                                          e.uint32(64).int32(t.nx),
                                        null != t.i &&
                                          Object.hasOwnProperty.call(t, 'i') &&
                                          e.uint32(72).int32(t.i),
                                        null != t.h &&
                                          Object.hasOwnProperty.call(t, 'h') &&
                                          e.uint32(80).bool(t.h),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n,
                                          i = void 0 === e ? t.len : t.pos + e,
                                          s = new a.ru.yandex.metrika.wv2.proto.Mutation.Add();
                                        t.pos < i;

                                      )
                                        switch (((n = t.uint32()), n >>> 3)) {
                                          case 1:
                                            s.id = t.int32();
                                            break;
                                          case 2:
                                            s.nm = t.string();
                                            break;
                                          case 3:
                                            s.pa = t.int32();
                                            break;
                                          case 4:
                                            s.ns = t.string();
                                            break;
                                          case 5:
                                            s.pr = t.int32();
                                            break;
                                          case 6:
                                            t.skip().pos++,
                                              s.at === o.emptyObject &&
                                                (s.at = {}),
                                              (n = t.string()),
                                              t.pos++,
                                              (s.at[n] = t.string());
                                            break;
                                          case 7:
                                            s.ct = t.string();
                                            break;
                                          case 8:
                                            s.nx = t.int32();
                                            break;
                                          case 9:
                                            s.i = t.int32();
                                            break;
                                          case 10:
                                            s.h = t.bool();
                                            break;
                                          default:
                                            t.skipType(7 & n);
                                        }
                                      return s;
                                    }),
                                    t
                                  );
                                })()),
                                (t.BeforeAfter = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.o = ''),
                                    (t.prototype.n = ''),
                                    (t.prototype.r = !1),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.o &&
                                          Object.hasOwnProperty.call(t, 'o') &&
                                          e.uint32(10).string(t.o),
                                        null != t.n &&
                                          Object.hasOwnProperty.call(t, 'n') &&
                                          e.uint32(18).string(t.n),
                                        null != t.r &&
                                          Object.hasOwnProperty.call(t, 'r') &&
                                          e.uint32(24).bool(t.r),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.o = t.string();
                                            break;
                                          case 2:
                                            i.n = t.string();
                                            break;
                                          case 3:
                                            i.r = t.bool();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.AttributeChange = (function () {
                                  function t(t) {
                                    if (((this.at = {}), t))
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.id = 0),
                                    (t.prototype.at = o.emptyObject),
                                    (t.prototype.i = 0),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      if (
                                        (e || (e = i.create()),
                                        null != t.id &&
                                          Object.hasOwnProperty.call(t, 'id') &&
                                          e.uint32(8).int32(t.id),
                                        null != t.at &&
                                          Object.hasOwnProperty.call(t, 'at'))
                                      )
                                        for (
                                          var n = Object.keys(t.at), r = 0;
                                          r < n.length;
                                          ++r
                                        )
                                          e
                                            .uint32(18)
                                            .fork()
                                            .uint32(10)
                                            .string(n[r]),
                                            a.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.encode(
                                              t.at[n[r]],
                                              e.uint32(18).fork()
                                            )
                                              .ldelim()
                                              .ldelim();
                                      return (
                                        null != t.i &&
                                          Object.hasOwnProperty.call(t, 'i') &&
                                          e.uint32(24).int32(t.i),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n,
                                          i = void 0 === e ? t.len : t.pos + e,
                                          s = new a.ru.yandex.metrika.wv2.proto.Mutation.AttributeChange();
                                        t.pos < i;

                                      )
                                        switch (((n = t.uint32()), n >>> 3)) {
                                          case 1:
                                            s.id = t.int32();
                                            break;
                                          case 2:
                                            t.skip().pos++,
                                              s.at === o.emptyObject &&
                                                (s.at = {}),
                                              (n = t.string()),
                                              t.pos++,
                                              (s.at[
                                                n
                                              ] = a.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.decode(
                                                t,
                                                t.uint32()
                                              ));
                                            break;
                                          case 3:
                                            s.i = t.int32();
                                            break;
                                          default:
                                            t.skipType(7 & n);
                                        }
                                      return s;
                                    }),
                                    t
                                  );
                                })()),
                                (t.TextChange = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.id = 0),
                                    (t.prototype.ct = null),
                                    (t.prototype.i = 0),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.id &&
                                          Object.hasOwnProperty.call(t, 'id') &&
                                          e.uint32(8).int32(t.id),
                                        null != t.ct &&
                                          Object.hasOwnProperty.call(t, 'ct') &&
                                          a.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.encode(
                                            t.ct,
                                            e.uint32(18).fork()
                                          ).ldelim(),
                                        null != t.i &&
                                          Object.hasOwnProperty.call(t, 'i') &&
                                          e.uint32(24).int32(t.i),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Mutation.TextChange();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.id = t.int32();
                                            break;
                                          case 2:
                                            i.ct = a.ru.yandex.metrika.wv2.proto.Mutation.BeforeAfter.decode(
                                              t,
                                              t.uint32()
                                            );
                                            break;
                                          case 3:
                                            i.i = t.int32();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.Changes = (function () {
                                  function t(t) {
                                    if (
                                      ((this.a = []),
                                      (this.b = []),
                                      (this.c = []),
                                      (this.d = []),
                                      t)
                                    )
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.a = o.emptyArray),
                                    (t.prototype.b = o.emptyArray),
                                    (t.prototype.c = o.emptyArray),
                                    (t.prototype.d = o.emptyArray),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      if (
                                        (e || (e = i.create()),
                                        null != t.a && t.a.length)
                                      )
                                        for (var n = 0; n < t.a.length; ++n)
                                          a.ru.yandex.metrika.wv2.proto.Mutation.Delete.encode(
                                            t.a[n],
                                            e.uint32(10).fork()
                                          ).ldelim();
                                      if (null != t.b && t.b.length)
                                        for (n = 0; n < t.b.length; ++n)
                                          a.ru.yandex.metrika.wv2.proto.Mutation.Add.encode(
                                            t.b[n],
                                            e.uint32(18).fork()
                                          ).ldelim();
                                      if (null != t.c && t.c.length)
                                        for (n = 0; n < t.c.length; ++n)
                                          a.ru.yandex.metrika.wv2.proto.Mutation.AttributeChange.encode(
                                            t.c[n],
                                            e.uint32(26).fork()
                                          ).ldelim();
                                      if (null != t.d && t.d.length)
                                        for (n = 0; n < t.d.length; ++n)
                                          a.ru.yandex.metrika.wv2.proto.Mutation.TextChange.encode(
                                            t.d[n],
                                            e.uint32(34).fork()
                                          ).ldelim();
                                      return e;
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Mutation.Changes();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            (i.a && i.a.length) || (i.a = []),
                                              i.a.push(
                                                a.ru.yandex.metrika.wv2.proto.Mutation.Delete.decode(
                                                  t,
                                                  t.uint32()
                                                )
                                              );
                                            break;
                                          case 2:
                                            (i.b && i.b.length) || (i.b = []),
                                              i.b.push(
                                                a.ru.yandex.metrika.wv2.proto.Mutation.Add.decode(
                                                  t,
                                                  t.uint32()
                                                )
                                              );
                                            break;
                                          case 3:
                                            (i.c && i.c.length) || (i.c = []),
                                              i.c.push(
                                                a.ru.yandex.metrika.wv2.proto.Mutation.AttributeChange.decode(
                                                  t,
                                                  t.uint32()
                                                )
                                              );
                                            break;
                                          case 4:
                                            (i.d && i.d.length) || (i.d = []),
                                              i.d.push(
                                                a.ru.yandex.metrika.wv2.proto.Mutation.TextChange.decode(
                                                  t,
                                                  t.uint32()
                                                )
                                              );
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                (t.Meta = (function () {
                                  function t(t) {
                                    if (((this.changes = []), t))
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.index = 0),
                                    (t.prototype.changes = o.emptyArray),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      if (
                                        (e || (e = i.create()),
                                        null != t.index &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'index'
                                          ) &&
                                          e.uint32(8).int32(t.index),
                                        null != t.changes && t.changes.length)
                                      )
                                        for (
                                          var n = 0;
                                          n < t.changes.length;
                                          ++n
                                        )
                                          a.ru.yandex.metrika.wv2.proto.Mutation.Changes.encode(
                                            t.changes[n],
                                            e.uint32(18).fork()
                                          ).ldelim();
                                      return e;
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.Mutation.Meta();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.index = t.int32();
                                            break;
                                          case 2:
                                            (i.changes && i.changes.length) ||
                                              (i.changes = []),
                                              i.changes.push(
                                                a.ru.yandex.metrika.wv2.proto.Mutation.Changes.decode(
                                                  t,
                                                  t.uint32()
                                                )
                                              );
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                t
                              );
                            })()),
                            (t.Event = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              var e;
                              return (
                                (t.prototype.type = 0),
                                (t.prototype.target = 0),
                                (t.prototype.frameId = 0),
                                (t.prototype.mouseEvent = null),
                                (t.prototype.scrollEvent = null),
                                (t.prototype.windowEvent = null),
                                (t.prototype.selectionEvent = null),
                                (t.prototype.changeEvent = null),
                                (t.prototype.touchEvent = null),
                                (t.prototype.methodEvent = null),
                                (t.prototype.propertyEvent = null),
                                (t.prototype.zoomEvent = null),
                                (t.prototype.resizeEvent = null),
                                (t.prototype.keystrokesEvent = null),
                                (t.prototype.deviceRotationEvent = null),
                                (t.prototype.fatalErrorEvent = null),
                                (t.prototype.hashchangeEvent = null),
                                Object.defineProperty(t.prototype, 'meta', {
                                  get: o.oneOfGetter(
                                    (e = 'mouseEvent scrollEvent windowEvent selectionEvent changeEvent touchEvent methodEvent propertyEvent zoomEvent resizeEvent keystrokesEvent deviceRotationEvent fatalErrorEvent hashchangeEvent'.split(
                                      ' '
                                    ))
                                  ),
                                  set: o.oneOfSetter(e),
                                }),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.type &&
                                      Object.hasOwnProperty.call(t, 'type') &&
                                      e.uint32(8).int32(t.type),
                                    null != t.target &&
                                      Object.hasOwnProperty.call(t, 'target') &&
                                      e.uint32(16).sint32(t.target),
                                    null != t.frameId &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'frameId'
                                      ) &&
                                      e.uint32(24).sint32(t.frameId),
                                    null != t.mouseEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'mouseEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.MouseEvent.encode(
                                        t.mouseEvent,
                                        e.uint32(34).fork()
                                      ).ldelim(),
                                    null != t.scrollEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'scrollEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.ScrollEvent.encode(
                                        t.scrollEvent,
                                        e.uint32(42).fork()
                                      ).ldelim(),
                                    null != t.windowEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'windowEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.WindowEvent.encode(
                                        t.windowEvent,
                                        e.uint32(50).fork()
                                      ).ldelim(),
                                    null != t.selectionEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'selectionEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.SelectionEvent.encode(
                                        t.selectionEvent,
                                        e.uint32(58).fork()
                                      ).ldelim(),
                                    null != t.changeEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'changeEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.ChangeEvent.encode(
                                        t.changeEvent,
                                        e.uint32(66).fork()
                                      ).ldelim(),
                                    null != t.touchEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'touchEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.TouchEvent.encode(
                                        t.touchEvent,
                                        e.uint32(74).fork()
                                      ).ldelim(),
                                    null != t.methodEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'methodEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.MethodEvent.encode(
                                        t.methodEvent,
                                        e.uint32(82).fork()
                                      ).ldelim(),
                                    null != t.propertyEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'propertyEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.PropertyEvent.encode(
                                        t.propertyEvent,
                                        e.uint32(90).fork()
                                      ).ldelim(),
                                    null != t.zoomEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'zoomEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.ZoomEvent.encode(
                                        t.zoomEvent,
                                        e.uint32(98).fork()
                                      ).ldelim(),
                                    null != t.resizeEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'resizeEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.ResizeEvent.encode(
                                        t.resizeEvent,
                                        e.uint32(106).fork()
                                      ).ldelim(),
                                    null != t.keystrokesEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'keystrokesEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.KeystrokesEvent.encode(
                                        t.keystrokesEvent,
                                        e.uint32(114).fork()
                                      ).ldelim(),
                                    null != t.deviceRotationEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'deviceRotationEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.DeviceRotationEvent.encode(
                                        t.deviceRotationEvent,
                                        e.uint32(122).fork()
                                      ).ldelim(),
                                    null != t.fatalErrorEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'fatalErrorEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.FatalErrorEvent.encode(
                                        t.fatalErrorEvent,
                                        e.uint32(130).fork()
                                      ).ldelim(),
                                    null != t.hashchangeEvent &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'hashchangeEvent'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.HashchangeEvent.encode(
                                        t.hashchangeEvent,
                                        e.uint32(138).fork()
                                      ).ldelim(),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.Event();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.type = t.int32();
                                        break;
                                      case 2:
                                        i.target = t.sint32();
                                        break;
                                      case 3:
                                        i.frameId = t.sint32();
                                        break;
                                      case 4:
                                        i.mouseEvent = a.ru.yandex.metrika.wv2.proto.MouseEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 5:
                                        i.scrollEvent = a.ru.yandex.metrika.wv2.proto.ScrollEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 6:
                                        i.windowEvent = a.ru.yandex.metrika.wv2.proto.WindowEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 7:
                                        i.selectionEvent = a.ru.yandex.metrika.wv2.proto.SelectionEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 8:
                                        i.changeEvent = a.ru.yandex.metrika.wv2.proto.ChangeEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 9:
                                        i.touchEvent = a.ru.yandex.metrika.wv2.proto.TouchEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 10:
                                        i.methodEvent = a.ru.yandex.metrika.wv2.proto.MethodEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 11:
                                        i.propertyEvent = a.ru.yandex.metrika.wv2.proto.PropertyEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 12:
                                        i.zoomEvent = a.ru.yandex.metrika.wv2.proto.ZoomEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 13:
                                        i.resizeEvent = a.ru.yandex.metrika.wv2.proto.ResizeEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 14:
                                        i.keystrokesEvent = a.ru.yandex.metrika.wv2.proto.KeystrokesEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 15:
                                        i.deviceRotationEvent = a.ru.yandex.metrika.wv2.proto.DeviceRotationEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 16:
                                        i.fatalErrorEvent = a.ru.yandex.metrika.wv2.proto.FatalErrorEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 17:
                                        i.hashchangeEvent = a.ru.yandex.metrika.wv2.proto.HashchangeEvent.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.MouseEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.x = 0),
                                (t.prototype.y = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.x &&
                                      Object.hasOwnProperty.call(t, 'x') &&
                                      e.uint32(8).int32(t.x),
                                    null != t.y &&
                                      Object.hasOwnProperty.call(t, 'y') &&
                                      e.uint32(16).int32(t.y),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.MouseEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.x = t.int32();
                                        break;
                                      case 2:
                                        i.y = t.int32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.ScrollEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.x = 0),
                                (t.prototype.y = 0),
                                (t.prototype.page = !1),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.x &&
                                      Object.hasOwnProperty.call(t, 'x') &&
                                      e.uint32(8).int32(t.x),
                                    null != t.y &&
                                      Object.hasOwnProperty.call(t, 'y') &&
                                      e.uint32(16).int32(t.y),
                                    null != t.page &&
                                      Object.hasOwnProperty.call(t, 'page') &&
                                      e.uint32(24).bool(t.page),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ScrollEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.x = t.int32();
                                        break;
                                      case 2:
                                        i.y = t.int32();
                                        break;
                                      case 3:
                                        i.page = t.bool();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.WindowEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return e || (e = i.create()), e;
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.WindowEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    t.skipType(7 & o);
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.SelectionEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.start = 0),
                                (t.prototype.end = 0),
                                (t.prototype.startNode = 0),
                                (t.prototype.endNode = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.start &&
                                      Object.hasOwnProperty.call(t, 'start') &&
                                      e.uint32(8).int32(t.start),
                                    null != t.end &&
                                      Object.hasOwnProperty.call(t, 'end') &&
                                      e.uint32(16).int32(t.end),
                                    null != t.startNode &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'startNode'
                                      ) &&
                                      e.uint32(24).int32(t.startNode),
                                    null != t.endNode &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'endNode'
                                      ) &&
                                      e.uint32(32).int32(t.endNode),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.SelectionEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.start = t.int32();
                                        break;
                                      case 2:
                                        i.end = t.int32();
                                        break;
                                      case 3:
                                        i.startNode = t.int32();
                                        break;
                                      case 4:
                                        i.endNode = t.int32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.ChangeEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.value = ''),
                                (t.prototype.checked = !1),
                                (t.prototype.hidden = !1),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.value &&
                                      Object.hasOwnProperty.call(t, 'value') &&
                                      e.uint32(10).string(t.value),
                                    null != t.checked &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'checked'
                                      ) &&
                                      e.uint32(16).bool(t.checked),
                                    null != t.hidden &&
                                      Object.hasOwnProperty.call(t, 'hidden') &&
                                      e.uint32(24).bool(t.hidden),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ChangeEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.value = t.string();
                                        break;
                                      case 2:
                                        i.checked = t.bool();
                                        break;
                                      case 3:
                                        i.hidden = t.bool();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.TouchEvent = (function () {
                              function t(t) {
                                if (((this.touches = []), t))
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.touches = o.emptyArray),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  if (
                                    (e || (e = i.create()),
                                    null != t.touches && t.touches.length)
                                  )
                                    for (var n = 0; n < t.touches.length; ++n)
                                      a.ru.yandex.metrika.wv2.proto.TouchEvent.SubMeta.encode(
                                        t.touches[n],
                                        e.uint32(10).fork()
                                      ).ldelim();
                                  return e;
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.TouchEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        (i.touches && i.touches.length) ||
                                          (i.touches = []),
                                          i.touches.push(
                                            a.ru.yandex.metrika.wv2.proto.TouchEvent.SubMeta.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                (t.SubMeta = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.id = ''),
                                    (t.prototype.x = 0),
                                    (t.prototype.y = 0),
                                    (t.prototype.force = 0),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.id &&
                                          Object.hasOwnProperty.call(t, 'id') &&
                                          e.uint32(10).string(t.id),
                                        null != t.x &&
                                          Object.hasOwnProperty.call(t, 'x') &&
                                          e.uint32(21).float(t.x),
                                        null != t.y &&
                                          Object.hasOwnProperty.call(t, 'y') &&
                                          e.uint32(29).float(t.y),
                                        null != t.force &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'force'
                                          ) &&
                                          e.uint32(37).float(t.force),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.TouchEvent.SubMeta();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.id = t.string();
                                            break;
                                          case 2:
                                            i.x = t.float();
                                            break;
                                          case 3:
                                            i.y = t.float();
                                            break;
                                          case 4:
                                            i.force = t.float();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                t
                              );
                            })()),
                            (t.ZoomEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.zoomFrom = null),
                                (t.prototype.zoomTo = null),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.zoomFrom &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'zoomFrom'
                                      ) &&
                                      a.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.encode(
                                        t.zoomFrom,
                                        e.uint32(10).fork()
                                      ).ldelim(),
                                    null != t.zoomTo &&
                                      Object.hasOwnProperty.call(t, 'zoomTo') &&
                                      a.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.encode(
                                        t.zoomTo,
                                        e.uint32(18).fork()
                                      ).ldelim(),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ZoomEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.zoomFrom = a.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      case 2:
                                        i.zoomTo = a.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint.decode(
                                          t,
                                          t.uint32()
                                        );
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                (t.ZoomPoint = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.level = 0),
                                    (t.prototype.x = 0),
                                    (t.prototype.y = 0),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.level &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'level'
                                          ) &&
                                          e.uint32(13).float(t.level),
                                        null != t.x &&
                                          Object.hasOwnProperty.call(t, 'x') &&
                                          e.uint32(16).int32(t.x),
                                        null != t.y &&
                                          Object.hasOwnProperty.call(t, 'y') &&
                                          e.uint32(24).int32(t.y),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.ZoomEvent.ZoomPoint();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.level = t.float();
                                            break;
                                          case 2:
                                            i.x = t.int32();
                                            break;
                                          case 3:
                                            i.y = t.int32();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                t
                              );
                            })()),
                            (t.ResizeEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.width = 0),
                                (t.prototype.height = 0),
                                (t.prototype.pageWidth = 0),
                                (t.prototype.pageHeight = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.width &&
                                      Object.hasOwnProperty.call(t, 'width') &&
                                      e.uint32(8).int32(t.width),
                                    null != t.height &&
                                      Object.hasOwnProperty.call(t, 'height') &&
                                      e.uint32(16).int32(t.height),
                                    null != t.pageWidth &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'pageWidth'
                                      ) &&
                                      e.uint32(24).int32(t.pageWidth),
                                    null != t.pageHeight &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'pageHeight'
                                      ) &&
                                      e.uint32(32).int32(t.pageHeight),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ResizeEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.width = t.int32();
                                        break;
                                      case 2:
                                        i.height = t.int32();
                                        break;
                                      case 3:
                                        i.pageWidth = t.int32();
                                        break;
                                      case 4:
                                        i.pageHeight = t.int32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.MethodEvent = (function () {
                              function t(t) {
                                if (((this.args = []), t))
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.method = ''),
                                (t.prototype.args = o.emptyArray),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  if (
                                    (e || (e = i.create()),
                                    null != t.method &&
                                      Object.hasOwnProperty.call(t, 'method') &&
                                      e.uint32(10).string(t.method),
                                    null != t.args && t.args.length)
                                  )
                                    for (var n = 0; n < t.args.length; ++n)
                                      e.uint32(18).string(t.args[n]);
                                  return e;
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.MethodEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.method = t.string();
                                        break;
                                      case 2:
                                        (i.args && i.args.length) ||
                                          (i.args = []),
                                          i.args.push(t.string());
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.PropertyEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.property = ''),
                                (t.prototype.value = ''),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.property &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'property'
                                      ) &&
                                      e.uint32(10).string(t.property),
                                    null != t.value &&
                                      Object.hasOwnProperty.call(t, 'value') &&
                                      e.uint32(18).string(t.value),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.PropertyEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.property = t.string();
                                        break;
                                      case 2:
                                        i.value = t.string();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.KeystrokesEvent = (function () {
                              function t(t) {
                                if (((this.keystrokes = []), t))
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.keystrokes = o.emptyArray),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  if (
                                    (e || (e = i.create()),
                                    null != t.keystrokes && t.keystrokes.length)
                                  )
                                    for (
                                      var n = 0;
                                      n < t.keystrokes.length;
                                      ++n
                                    )
                                      a.ru.yandex.metrika.wv2.proto.KeystrokesEvent.KeystrokeEvent.encode(
                                        t.keystrokes[n],
                                        e.uint32(10).fork()
                                      ).ldelim();
                                  return e;
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.KeystrokesEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        (i.keystrokes && i.keystrokes.length) ||
                                          (i.keystrokes = []),
                                          i.keystrokes.push(
                                            a.ru.yandex.metrika.wv2.proto.KeystrokesEvent.KeystrokeEvent.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                (t.KeystrokeEvent = (function () {
                                  function t(t) {
                                    if (t)
                                      for (
                                        var e = Object.keys(t), n = 0;
                                        n < e.length;
                                        ++n
                                      )
                                        null != t[e[n]] &&
                                          (this[e[n]] = t[e[n]]);
                                  }
                                  return (
                                    (t.prototype.id = 0),
                                    (t.prototype.key = ''),
                                    (t.prototype.isMeta = !1),
                                    (t.prototype.modifier = ''),
                                    (t.create = function (e) {
                                      return new t(e);
                                    }),
                                    (t.encode = function (t, e) {
                                      return (
                                        e || (e = i.create()),
                                        null != t.id &&
                                          Object.hasOwnProperty.call(t, 'id') &&
                                          e.uint32(8).int32(t.id),
                                        null != t.key &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'key'
                                          ) &&
                                          e.uint32(18).string(t.key),
                                        null != t.isMeta &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'isMeta'
                                          ) &&
                                          e.uint32(24).bool(t.isMeta),
                                        null != t.modifier &&
                                          Object.hasOwnProperty.call(
                                            t,
                                            'modifier'
                                          ) &&
                                          e.uint32(34).string(t.modifier),
                                        e
                                      );
                                    }),
                                    (t.decode = function (t, e) {
                                      t instanceof r || (t = r.create(t));
                                      for (
                                        var n =
                                            void 0 === e ? t.len : t.pos + e,
                                          i = new a.ru.yandex.metrika.wv2.proto.KeystrokesEvent.KeystrokeEvent();
                                        t.pos < n;

                                      ) {
                                        var o = t.uint32();
                                        switch (o >>> 3) {
                                          case 1:
                                            i.id = t.int32();
                                            break;
                                          case 2:
                                            i.key = t.string();
                                            break;
                                          case 3:
                                            i.isMeta = t.bool();
                                            break;
                                          case 4:
                                            i.modifier = t.string();
                                            break;
                                          default:
                                            t.skipType(7 & o);
                                        }
                                      }
                                      return i;
                                    }),
                                    t
                                  );
                                })()),
                                t
                              );
                            })()),
                            (t.DeviceRotationEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.width = 0),
                                (t.prototype.height = 0),
                                (t.prototype.orientation = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.width &&
                                      Object.hasOwnProperty.call(t, 'width') &&
                                      e.uint32(8).int32(t.width),
                                    null != t.height &&
                                      Object.hasOwnProperty.call(t, 'height') &&
                                      e.uint32(16).int32(t.height),
                                    null != t.orientation &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'orientation'
                                      ) &&
                                      e.uint32(24).int32(t.orientation),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.DeviceRotationEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.width = t.int32();
                                        break;
                                      case 2:
                                        i.height = t.int32();
                                        break;
                                      case 3:
                                        i.orientation = t.int32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.FatalErrorEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.code = ''),
                                (t.prototype.exception = ''),
                                (t.prototype.stack = ''),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.code &&
                                      Object.hasOwnProperty.call(t, 'code') &&
                                      e.uint32(10).string(t.code),
                                    null != t.exception &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'exception'
                                      ) &&
                                      e.uint32(18).string(t.exception),
                                    null != t.stack &&
                                      Object.hasOwnProperty.call(t, 'stack') &&
                                      e.uint32(26).string(t.stack),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.FatalErrorEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.code = t.string();
                                        break;
                                      case 2:
                                        i.exception = t.string();
                                        break;
                                      case 3:
                                        i.stack = t.string();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.HashchangeEvent = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.hash = ''),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.hash &&
                                      Object.hasOwnProperty.call(t, 'hash') &&
                                      e.uint32(10).string(t.hash),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.HashchangeEvent();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.hash = t.string();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.EventType = (function () {
                              var t = {},
                                e = Object.create(t);
                              return (
                                (e[(t[0] = 'mousemove')] = 0),
                                (e[(t[1] = 'mouseup')] = 1),
                                (e[(t[2] = 'mousedown')] = 2),
                                (e[(t[3] = 'click')] = 3),
                                (e[(t[4] = 'scroll')] = 4),
                                (e[(t[5] = 'windowblur')] = 5),
                                (e[(t[6] = 'windowfocus')] = 6),
                                (e[(t[7] = 'focus')] = 7),
                                (e[(t[8] = 'blur')] = 8),
                                (e[(t[9] = 'eof')] = 9),
                                (e[(t[10] = 'selection')] = 10),
                                (e[(t[11] = 'change')] = 11),
                                (e[(t[12] = 'input')] = 12),
                                (e[(t[13] = 'touchmove')] = 13),
                                (e[(t[14] = 'touchstart')] = 14),
                                (e[(t[15] = 'touchend')] = 15),
                                (e[(t[16] = 'touchcancel')] = 16),
                                (e[(t[17] = 'touchforcechange')] = 17),
                                (e[(t[18] = 'canvasMethod')] = 18),
                                (e[(t[19] = 'canvasProperty')] = 19),
                                (e[(t[20] = 'zoom')] = 20),
                                (e[(t[21] = 'resize')] = 21),
                                (e[(t[22] = 'mediaMethod')] = 22),
                                (e[(t[23] = 'mediaProperty')] = 23),
                                (e[(t[24] = 'keystroke')] = 24),
                                (e[(t[25] = 'deviceRotation')] = 25),
                                (e[(t[26] = 'fatalError')] = 26),
                                (e[(t[27] = 'hashchange')] = 27),
                                e
                              );
                            })()),
                            (t.PublishersHeader = (function () {
                              function t(t) {
                                if (((this.articleMeta = []), t))
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.articleMeta = o.emptyArray),
                                (t.prototype.involvedTime = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  if (
                                    (e || (e = i.create()),
                                    null != t.articleMeta &&
                                      t.articleMeta.length)
                                  )
                                    for (
                                      var n = 0;
                                      n < t.articleMeta.length;
                                      ++n
                                    )
                                      a.ru.yandex.metrika.wv2.proto.ArticleMeta.encode(
                                        t.articleMeta[n],
                                        e.uint32(10).fork()
                                      ).ldelim();
                                  return (
                                    null != t.involvedTime &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'involvedTime'
                                      ) &&
                                      e.uint32(16).int32(t.involvedTime),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.PublishersHeader();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        (i.articleMeta &&
                                          i.articleMeta.length) ||
                                          (i.articleMeta = []),
                                          i.articleMeta.push(
                                            a.ru.yandex.metrika.wv2.proto.ArticleMeta.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      case 2:
                                        i.involvedTime = t.int32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.ArticleMeta = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.id = 0),
                                (t.prototype.x = 0),
                                (t.prototype.y = 0),
                                (t.prototype.width = 0),
                                (t.prototype.height = 0),
                                (t.prototype.involvedTime = 0),
                                (t.prototype.maxScrolled = 0),
                                (t.prototype.chars = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.id &&
                                      Object.hasOwnProperty.call(t, 'id') &&
                                      e.uint32(8).uint32(t.id),
                                    null != t.x &&
                                      Object.hasOwnProperty.call(t, 'x') &&
                                      e.uint32(16).int32(t.x),
                                    null != t.y &&
                                      Object.hasOwnProperty.call(t, 'y') &&
                                      e.uint32(24).int32(t.y),
                                    null != t.width &&
                                      Object.hasOwnProperty.call(t, 'width') &&
                                      e.uint32(32).int32(t.width),
                                    null != t.height &&
                                      Object.hasOwnProperty.call(t, 'height') &&
                                      e.uint32(40).int32(t.height),
                                    null != t.involvedTime &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'involvedTime'
                                      ) &&
                                      e.uint32(48).int32(t.involvedTime),
                                    null != t.maxScrolled &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'maxScrolled'
                                      ) &&
                                      e.uint32(61).float(t.maxScrolled),
                                    null != t.chars &&
                                      Object.hasOwnProperty.call(t, 'chars') &&
                                      e.uint32(64).int32(t.chars),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ArticleMeta();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.id = t.uint32();
                                        break;
                                      case 2:
                                        i.x = t.int32();
                                        break;
                                      case 3:
                                        i.y = t.int32();
                                        break;
                                      case 4:
                                        i.width = t.int32();
                                        break;
                                      case 5:
                                        i.height = t.int32();
                                        break;
                                      case 6:
                                        i.involvedTime = t.int32();
                                        break;
                                      case 7:
                                        i.maxScrolled = t.float();
                                        break;
                                      case 8:
                                        i.chars = t.int32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.ArticleInfo = (function () {
                              function t(t) {
                                if (
                                  ((this.authors = []),
                                  (this.topics = []),
                                  (this.rubric = []),
                                  t)
                                )
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.id = 0),
                                (t.prototype.pageUrlCanonical = ''),
                                (t.prototype.pageTitle = ''),
                                (t.prototype.authors = o.emptyArray),
                                (t.prototype.topics = o.emptyArray),
                                (t.prototype.publicationDate = ''),
                                (t.prototype.chars = 0),
                                (t.prototype.rubric = o.emptyArray),
                                (t.prototype.updateDate = ''),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  if (
                                    (e || (e = i.create()),
                                    null != t.id &&
                                      Object.hasOwnProperty.call(t, 'id') &&
                                      e.uint32(8).uint32(t.id),
                                    null != t.pageUrlCanonical &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'pageUrlCanonical'
                                      ) &&
                                      e.uint32(18).string(t.pageUrlCanonical),
                                    null != t.pageTitle &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'pageTitle'
                                      ) &&
                                      e.uint32(26).string(t.pageTitle),
                                    null != t.authors && t.authors.length)
                                  )
                                    for (var n = 0; n < t.authors.length; ++n)
                                      a.ru.yandex.metrika.wv2.proto.ArticleAuthor.encode(
                                        t.authors[n],
                                        e.uint32(34).fork()
                                      ).ldelim();
                                  if (null != t.topics && t.topics.length)
                                    for (n = 0; n < t.topics.length; ++n)
                                      a.ru.yandex.metrika.wv2.proto.ArticleTopic.encode(
                                        t.topics[n],
                                        e.uint32(42).fork()
                                      ).ldelim();
                                  if (
                                    (null != t.publicationDate &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'publicationDate'
                                      ) &&
                                      e.uint32(50).string(t.publicationDate),
                                    null != t.chars &&
                                      Object.hasOwnProperty.call(t, 'chars') &&
                                      e.uint32(56).int32(t.chars),
                                    null != t.rubric && t.rubric.length)
                                  )
                                    for (n = 0; n < t.rubric.length; ++n)
                                      a.ru.yandex.metrika.wv2.proto.ArticleRubric.encode(
                                        t.rubric[n],
                                        e.uint32(66).fork()
                                      ).ldelim();
                                  return (
                                    null != t.updateDate &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'updateDate'
                                      ) &&
                                      e.uint32(74).string(t.updateDate),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ArticleInfo();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.id = t.uint32();
                                        break;
                                      case 2:
                                        i.pageUrlCanonical = t.string();
                                        break;
                                      case 3:
                                        i.pageTitle = t.string();
                                        break;
                                      case 4:
                                        (i.authors && i.authors.length) ||
                                          (i.authors = []),
                                          i.authors.push(
                                            a.ru.yandex.metrika.wv2.proto.ArticleAuthor.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      case 5:
                                        (i.topics && i.topics.length) ||
                                          (i.topics = []),
                                          i.topics.push(
                                            a.ru.yandex.metrika.wv2.proto.ArticleTopic.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      case 6:
                                        i.publicationDate = t.string();
                                        break;
                                      case 7:
                                        i.chars = t.int32();
                                        break;
                                      case 8:
                                        (i.rubric && i.rubric.length) ||
                                          (i.rubric = []),
                                          i.rubric.push(
                                            a.ru.yandex.metrika.wv2.proto.ArticleRubric.decode(
                                              t,
                                              t.uint32()
                                            )
                                          );
                                        break;
                                      case 9:
                                        i.updateDate = t.string();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.ArticleAuthor = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.name = ''),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.name &&
                                      Object.hasOwnProperty.call(t, 'name') &&
                                      e.uint32(10).string(t.name),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ArticleAuthor();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.name = t.string();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.ArticleTopic = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.name = ''),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.name &&
                                      Object.hasOwnProperty.call(t, 'name') &&
                                      e.uint32(10).string(t.name),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ArticleTopic();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.name = t.string();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            (t.ArticleRubric = (function () {
                              function t(t) {
                                if (t)
                                  for (
                                    var e = Object.keys(t), n = 0;
                                    n < e.length;
                                    ++n
                                  )
                                    null != t[e[n]] && (this[e[n]] = t[e[n]]);
                              }
                              return (
                                (t.prototype.name = ''),
                                (t.prototype.position = 0),
                                (t.create = function (e) {
                                  return new t(e);
                                }),
                                (t.encode = function (t, e) {
                                  return (
                                    e || (e = i.create()),
                                    null != t.name &&
                                      Object.hasOwnProperty.call(t, 'name') &&
                                      e.uint32(10).string(t.name),
                                    null != t.position &&
                                      Object.hasOwnProperty.call(
                                        t,
                                        'position'
                                      ) &&
                                      e.uint32(16).int32(t.position),
                                    e
                                  );
                                }),
                                (t.decode = function (t, e) {
                                  t instanceof r || (t = r.create(t));
                                  for (
                                    var n = void 0 === e ? t.len : t.pos + e,
                                      i = new a.ru.yandex.metrika.wv2.proto.ArticleRubric();
                                    t.pos < n;

                                  ) {
                                    var o = t.uint32();
                                    switch (o >>> 3) {
                                      case 1:
                                        i.name = t.string();
                                        break;
                                      case 2:
                                        i.position = t.int32();
                                        break;
                                      default:
                                        t.skipType(7 & o);
                                    }
                                  }
                                  return i;
                                }),
                                t
                              );
                            })()),
                            t
                          );
                        })()),
                        t
                      );
                    })()),
                    t
                  );
                })()),
                t
              );
            })()),
            t
          );
        })()),
          (t.exports = a);
      },
    ]).ru.yandex.metrika.wv2.proto;
  } catch (t) {}
  try {
    var nt = {
        ScrollEvent: { type: tt.ScrollEvent, events: ['scroll'] },
        SelectionEvent: { type: tt.SelectionEvent, events: ['selection'] },
        ChangeEvent: { type: tt.ChangeEvent, events: ['change', 'input'] },
        MethodEvent: {
          type: tt.MethodEvent,
          repeated: 'args',
          events: ['canvasMethod', 'mediaMethod'],
        },
        PropertyEvent: {
          type: tt.PropertyEvent,
          events: ['canvasProperty', 'mediaProperty'],
        },
        KeystrokesEvent: {
          type: tt.KeystrokesEvent,
          repeated: 'keystrokes',
          events: ['keystroke'],
        },
        ZoomEvent: { type: tt.ZoomEvent, events: ['zoom'] },
        ResizeEvent: { type: tt.ResizeEvent, events: ['resize'] },
        WindowEvent: {
          type: tt.WindowEvent,
          events: ['windowfocus', 'windowblur', 'focus', 'blur', 'eof'],
        },
        MouseEvent: {
          type: tt.MouseEvent,
          events: ['mousemove', 'mouseup', 'mousedown', 'click'],
        },
        DeviceRotationEvent: {
          type: tt.DeviceRotationEvent,
          events: ['deviceRotation'],
        },
        FatalErrorEvent: { type: tt.FatalErrorEvent, events: ['fatalError'] },
        TouchEvent: {
          type: tt.TouchEvent,
          repeated: 'touches',
          events: [
            'touchmove',
            'touchstart',
            'touchend',
            'touchcancel',
            'touchforcechange',
          ],
        },
      },
      rt = v.reduce(
        function (t, e) {
          return t.concat(
            v.map(function (t) {
              return {
                eventName: t,
                type: nt[e].type,
                repeated: nt[e].repeated,
                typeStr: e,
              };
            }, nt[e].events)
          );
        },
        [],
        v.keys(nt)
      ),
      it = {
        nullToStr: function (t) {
          var e = this;
          return v.isArray(t)
            ? v.map(function (t) {
                return e.nullToStr(t);
              }, t)
            : (v.isObject(t)
                ? v.forEachKey(t, function (n, r) {
                    return (t[n] = e.nullToStr(r)), !0;
                  })
                : (null !== t && t !== n) || (t = ''),
              t);
        },
        uncapitalize: function (t, e) {
          var n = t.slice(1);
          return t.charAt(0).toLowerCase() + (e ? n.toLowerCase() : n);
        },
        capitalize: function (t, e) {
          var n = t.slice(1);
          return t.charAt(0).toUpperCase() + (e ? n.toLowerCase() : n);
        },
        notNaN: function (t) {
          return isNaN(t) && 'number' == typeof t ? 0 : t;
        },
        eventSerialize: function (t) {
          var e,
            n = v.filter(function (e) {
              return e.eventName == t.type;
            }, rt);
          for (e = 0; e < n.length; e++) var r = n[e];
          if (r)
            return (
              r.repeated
                ? ((e = new r.type())[r.repeated] =
                    t.meta[r.repeated] || t.meta)
                : (e = new r.type(this.nullToStr(t.meta))),
              ((n = new tt.Event({
                type: tt.EventType[r.eventName],
                target: t.target,
                frameId: t.frameId,
              }))[this.uncapitalize(r.typeStr)] = e),
              n
            );
        },
        pageSerialize: function (t) {
          return new tt.Page(this.nullToStr(t));
        },
        articleInfoSerialize: function (t) {
          return new tt.ArticleInfo(this.nullToStr(t));
        },
        publishersHeaderSerialize: function (t) {
          return new tt.PublishersHeader(this.nullToStr(t));
        },
        mutationSerialize: function (t) {
          return new tt.Mutation(this.nullToStr(t));
        },
        initBuffer: function () {
          return new tt.BufferWrapper();
        },
        appendBuffer: function (t, e) {
          t.buffer.push(e);
        },
        serializeChunk: function (t) {
          return this.serializeBuffer(null, t);
        },
        serializeBuffer: function (t, e, r) {
          var i = new tt.Buffer(e);
          return (
            (t = t || new tt.Wrapper()),
            e || (i.data = t),
            r !== n && (i.stamp = r),
            e && e.stamp === n && (i.stamp = _.getFormStart()),
            i
          );
        },
        toTransport: function (t, e, n, r) {
          var i = e || 'BufferWrapper',
            o = this;
          if (!n) return tt[i].encode(this.nullToStr(t)).finish();
          $.chain(
            [
              function () {
                return o.nullToStr(t);
              },
              function (t) {
                return tt[i].encode(t);
              },
              function (t) {
                return t.finish();
              },
              function (t) {
                return n.call(r, t);
              },
            ],
            '',
            !1,
            'toTransportChain.' + i
          );
        },
        fromTrasport: function (t, e) {
          if ('number' == typeof t[0])
            return tt[e || 'BufferWrapper'].decode(t);
        },
        serialize: function (t, e, r) {
          var i = {},
            o = {},
            a = this[t + 'Serialize'];
          if (a) (i[t] = a.call(this, e)), (o = new tt.Wrapper(i));
          else {
            if (!r || tt.Wrapper.prototype[t] === n)
              throw 'Unrecoginze type of message';
            o[t] = e;
          }
          return r ? tt.Wrapper.encode(o).finish() : o;
        },
      };
    et = !0;
  } catch (t) {
    i(t, 'pr.in');
  }
  var ot = w.inherit({
      protocol: '',
      chunkSize: 0,
      counterId: '',
      counterType: '',
      meta: null,
      maxBufferSize: 7e5,
      serializer: it,
      _dataSize: 0,
      flushTimeout: 2e3,
      storageKey: 'visorbuff3',
      active: !1,
      wvType: 3,
      _totalSendedSize: 0,
      _v: '',
      _initComponent: function () {
        (this._sender = new Z({
          version: this.wvType,
          protocol: this.protocol,
          browserInfoMix: this.browserInfoMix,
          globalConfig: this.globalConfig,
          counterId: this.counterId,
          counterType: this.counterType,
        })),
          (this.maxChunkSize = 0.9 * this.maxBufferSize),
          Q.superclass._initComponent.apply(this, arguments);
      },
      activate: function () {
        this.active || (this.active = !0);
      },
      mergeData: function (t, e) {
        (e.data && 0 === e.data.size) ||
          (this.serializer.appendBuffer(t, e), (this._dataSize = 0));
      },
      _getSize: function (t) {
        return t.length;
      },
      sendEncoded: function (t, e, n, r, i) {
        var o = this._getSize(t),
          a = this.getFlushSize(),
          s = 0,
          c = 0,
          u = 1;
        if (
          ((n.size = o),
          a + o > this.maxBufferSize && a && this._flush(r),
          o > this.maxBufferSize)
        ) {
          for (
            a = Math.ceil(t.length / this.maxChunkSize);
            c < o &&
            ((e.page = u),
            (e.end = u === a),
            (e.chunk = t.slice(s, (s += this.maxChunkSize))),
            0 != e.chunk.length);

          )
            (e.size = this._getSize(e.chunk)),
              (c += e.size),
              (n = this.serializer.serializeChunk(e)),
              this.setToStore(n, i),
              this.append(n, r),
              u++;
          this._totalSendedSize += c;
        } else
          (n = this.serializer.serializeBuffer(n, null, e.stamp)),
            (this._totalSendedSize += o),
            this.setToStore(n, i),
            this.append(n, r);
      },
      setToStore: function (t, e) {
        this.wrappers.length && this.store.set(t, e);
      },
      addData: function (t, e, n, r, i) {
        var o = { type: t };
        if (!this.totalSendLimit || this._totalSendedSize < this.totalSendLimit)
          if (
            ((this._v = n),
            this.wrappers.length &&
              v.arrayEvery(this.wrappers, function (n) {
                return n.trigger && n.trigger(t, e), 1;
              }),
            i)
          ) {
            var a = this.serializer.serializeBuffer({ size: 0 });
            this.append(a, r);
          } else
            this._data &&
              0 == this._data.buffer.length &&
              (this.startBufferTime = _.getSeconds()),
              this.updateStamp(e, o),
              (a = this.serializer.serialize(t, e)),
              r
                ? ((n = this.serializer.toTransport(a, 'Wrapper')),
                  this.sendEncoded(n, o, a, !0, { id: t, data: e }))
                : this.serializer.toTransport(
                    a,
                    'Wrapper',
                    function (n) {
                      this.sendEncoded(n, o, a, !1, { id: t, data: e });
                    },
                    this
                  );
      },
      dataFromStorage: function (t) {
        return this.serializer.fromTrasport(t);
      },
      dataToStorage: function (t) {
        return this.serializer.toTransport(t);
      },
      getFlushSize: function () {
        var t = this,
          e = v.reduce(
            function (t, e) {
              return t + (e.data ? e.data.size : e.size);
            },
            0,
            this._data.buffer
          );
        return (
          this.wrappers.length &&
            (e += v.reduce(
              function (e, n) {
                var r = n.getBufferData();
                return r
                  ? (e += t.serializer.serialize(r.type, r.data, !0).length)
                  : e;
              },
              e,
              this.wrappers
            )),
          e
        );
      },
      onFlush: function (t, e, n, r) {
        var i = this;
        (this._dataSize = 0),
          t &&
            (this.wrappers.length &&
              (v.arrayEvery(
                this.wrappers,
                function (e) {
                  if (!e.onFlush) return 1;
                  v.arrayEvery(
                    t.buffer,
                    function (t) {
                      return (t = this.store.pop(t))
                        ? (e.onFlush(t.id, t.data), 1)
                        : 1;
                    },
                    this
                  );
                },
                this
              ),
              (t = v.reduce(
                function (t, e) {
                  var n = e.getBufferData(),
                    r = { data: {} };
                  return n
                    ? ((r.data[n.type] = n.data),
                      (n = new i.serializer.serializeBuffer(null, r)),
                      i.mergeData(t, n),
                      t)
                    : t;
                },
                t,
                this.wrappers
              ))),
            t.buffer &&
              t.buffer.length &&
              (r
                ? this._sender.sendPacket(
                    this.serializer.toTransport(t),
                    e.url,
                    e.hitId,
                    n,
                    e.timezone,
                    e.timestamp,
                    this.startBufferTime
                  )
                : this.serializer.toTransport(
                    t,
                    'BufferWrapper',
                    function (t) {
                      this._sender.sendPacket(
                        t,
                        e.url,
                        e.hitId,
                        n,
                        e.timezone,
                        e.timestamp,
                        this.startBufferTime
                      );
                    },
                    this
                  )));
      },
      clear: function () {
        (this._data = this.serializer.initBuffer()),
          (this._dataSize = 0),
          (this._flushTID = null),
          this.storage && this.storage.remove(this.storageKey);
      },
    }),
    at = {};
  (at._cookie = new L({ onlyCurrentDomain: !0 })),
    (at._check = r(function () {
      return (
        -1 < t.location.href.indexOf('_ym_debug=1') ||
        t._ym_debug ||
        '1' === at._cookie.read('debug')
      );
    })),
    (at.enabled = at._check()),
    (at.log = r(function () {
      (-1 < Gt.href.indexOf('_ym_debug=1') || t._ym_debug) &&
        this._cookie.create('debug', '1'),
        t.console &&
          console.log &&
          this._check() &&
          ((at.enabled = !0), console.log.apply(console, arguments));
    }, 'DebugConsole.log'));
  var st = y.inherit({
    eventMap: {
      mousemove: { val: 0, multiply: 1 / 0.68 },
      click: { val: 0, multiply: 1 / 0.00975 },
      input: { val: 0, multiply: 1 / 0.0116 },
      scroll: { val: 0, multiply: 1 / 0.31 },
      fatalError: { val: 0, multiply: 1 },
    },
    getBufferData: function () {
      var t = this;
      return {
        type: 'activity',
        data: v.reduce(
          function (e, n) {
            var r = t.eventMap[n];
            return Math.round(e + r.val * r.multiply);
          },
          0,
          v.keys(this.eventMap)
        ),
      };
    },
    onFlush: function (t, e) {
      var n;
      (n = this.eventMap['event' !== t ? t : e.type]) && (n.val += 1);
    },
  });
  F.closest = function (e, n) {
    var r;
    if (!(t && t.Element && t.Element.prototype)) return null;
    if (
      t.Element.prototype.closest &&
      v.isNativeFunction(t.Element.prototype.closest, 'closest')
    )
      return e.closest(n);
    if (
      t.Element.prototype.matches &&
      v.isNativeFunction(t.Element.prototype.matches, 'matches')
    )
      do {
        if (e.matches(n)) return e;
        e = e.parentElement || e.parentNode;
      } while (null !== e && 1 === e.nodeType);
    if (
      t.document.querySelectorAll &&
      v.isNativeFunction(
        t.Element.prototype.querySelectorAll,
        'querySelectorAll'
      )
    ) {
      var i = (t.document || t.ownerDocument).querySelectorAll(n);
      do {
        for (r = i.length; 0 <= --r && i.item(r) !== e; );
      } while (0 > r && (e = e.parentElement));
      return e;
    }
    return null;
  };
  var ct = {
      select: function (t, e) {
        return t ? t.querySelectorAll(e) : null;
      },
      looksLikeFullUrl: function (t) {
        return 'string' == typeof t && /^(https?:)\/\//.test(t);
      },
      selectOne: function (t, e) {
        var n = this.select(t, e);
        return n && n.length ? n[0] : null;
      },
      closest: function (t, e) {
        return F.closest(t, e);
      },
      testAttr: function (t, e, n) {
        return n.test(t.getAttribute(e));
      },
      selectPropOne: function (t, e) {
        var n = this.selectProp(t, e);
        return n && n.length ? n[0] : null;
      },
      selectProp: function (t, e) {
        var n = t.getAttribute('itemtype'),
          r = null,
          i = this.select(t, '[itemprop="' + e + '"]');
        return (
          n &&
            (r = v.filter(function (e) {
              return (
                e.parentNode && F.closest(e.parentNode, '[itemtype]') === t
              );
            }, i)),
          r || i || []
        );
      },
      getVal: function (t) {
        return t && 0 != t.length
          ? (t.length === n && (t = [t]),
            t[0].getAttribute('content') || t[0].innerText || '')
          : '';
      },
      getDate: function (t) {
        return t
          ? t.attributes && t.attributes.datetime
            ? '' + t.attributes.datetime.value
            : this.getVal(t)
          : '';
      },
    },
    ut = {},
    lt = y.inherit({
      isAuthorsInTitle: !1,
      fields: {},
      schemaEntities: {
        'schema.org': 'Article NewsArticle Movie BlogPosting Review Recipe Answer'.split(
          ' '
        ),
        opengraph: ['article'],
      },
      typesMap: { Answer: 3, Review: 2 },
      _getContentNode: function (t) {
        return t.element;
      },
      _getFieldData: function (t, e) {
        var n,
          i = this;
        return (
          r(function () {
            n = i.fields[e].call(i, t);
          }, 'P.s.' + e)(),
          n
        );
      },
      _postprocessData: function (t, e) {
        var n = this._getContentNode(e);
        if (this.isAuthorsInTitle && !t.id && v.inArray([3, 2], t.type)) {
          var r = v
            .map(function (t) {
              return t.name;
            }, t.authors)
            .join(', ');
          t.pageTitle = r + ': ' + t.pageTitle;
        }
        return (
          t.pageTitle || (t.pageTitle = this._getTitleFromContent(n)),
          t.pageUrlCanonical ||
            (t.pageUrlCanonical = ct.looksLikeFullUrl(t.id)
              ? t.id
              : this.getPageUrlCanonical()),
          t.id || (t.id = t.pageTitle || t.pageUrlCanonical),
          t
        );
      },
      _getContentData: function (t) {
        var e = {},
          n = this;
        return (
          (e.type = t.type),
          v.map(function (r) {
            e[r] = n._getFieldData(t, r);
          }, v.keys(this.fields)),
          (e.element = t.element),
          (e.stamp = _.getFormStart()),
          ((e = this._postprocessData(e, t)).id = e.id ? v.fnv32a(e.id) : 1),
          (e.update = v.bind(this._getFieldData, this, t)),
          e
        );
      },
      _getTitleFromContent: function (t) {
        var e, n;
        for (e = 1; 5 >= e; e++)
          if ((n = ct.getVal(ct.selectOne(t, 'h' + e)))) return n;
        return null;
      },
      _getType: function () {
        return 1;
      },
      getPageUrlCanonical: function () {
        var t = ct.selectOne(this.root, '[rel="canonical"]');
        if (t) return t.href;
      },
      alreadyWarned: [],
      contentSizeWarning: function (t) {
        -1 === v.arrayIndexOf(this.alreadyWarned, t.id) &&
          (at.log(
            'Warning: content has only ' +
              t.chars +
              ' chars.Required ' +
              ut[t.type],
            t
          ),
          this.alreadyWarned.push(t.id));
      },
      findContent: function () {
        var t,
          e,
          n = [],
          r = [],
          i = this._findContentDescriptionNodes(),
          o = this;
        for (t = 0; t < i.length; t++)
          (e = this._getContentData({
            element: i[t],
            type: this._getType(i[t]),
          })) &&
            (v.isArray(e) || (e = [e]),
            v.map(function (t) {
              t &&
                (t.chars <= ut[t.type]
                  ? o.contentSizeWarning(t)
                  : (t = v.mixin({ sended: !1, involvedTime: 0 }, t)) &&
                    !v.inArray(r, t.id) &&
                    ((t.index = n.push(t)), r.push(t.id)));
            }, e));
        return n;
      },
    });
  (ut[1] = 500), (ut[2] = 500), (ut[3] = 0);
  var ht = lt.inherit({
      id: 's',
      isAuthorsInTitle: !0,
      typesRegExp: new RegExp(
        'schema.org\\/(' + v.keys(lt.prototype.typesMap).join('|') + ')$'
      ),
      fields: {
        node: function (t) {
          return this._getContentNode(t);
        },
        id: function (t) {
          t = t.element;
          var e = ct.selectPropOne(t, 'identifier');
          return e
            ? ct.getVal(e)
            : (e = ct.selectPropOne(t, 'mainEntityOfPage')) &&
              e.getAttribute('itemid')
            ? e.getAttribute('itemid')
            : null;
        },
        chars: function (t) {
          var e = 0;
          t = t.element;
          var n,
            r,
            i = [
              'articleBody',
              'reviewBody',
              'recipeInstructions',
              'description',
              'text',
            ];
          for (n = 0; n < i.length; n++)
            if ((r = ct.selectPropOne(t, i[n]))) {
              e = ct.getVal(r).length;
              break;
            }
          return 0 === e && t.innerText && (e += t.innerText.length), e;
        },
        topics: function (t) {
          return (
            (t = ct.selectProp(t.element, 'about')),
            v.map(function (t) {
              var e = { name: ct.getVal(t) };
              return (
                (t = ct.selectPropOne(t, 'name')) && (e.name = ct.getVal(t)), e
              );
            }, t)
          );
        },
        rubric: function (t) {
          var e = [];
          return (
            (t = ct.selectOne(
              t.element,
              '[itemtype$="schema.org/BreadcrumbList"]'
            )) ||
              (t = ct.selectOne(
                this.root,
                '[itemtype$="schema.org/BreadcrumbList"]'
              )),
            t &&
              ((t = ct.selectProp(t, 'itemListElement')),
              (e = v.map(function (t) {
                return {
                  name: ct.getVal(ct.selectPropOne(t, 'name')),
                  position: ct.getVal(ct.selectPropOne(t, 'position')),
                };
              }, t))),
            e
          );
        },
        updateDate: function (t) {
          return (t = ct.selectPropOne(t.element, 'dateModified'))
            ? ct.getDate(t)
            : '';
        },
        publicationDate: function (t) {
          return (t = ct.selectPropOne(t.element, 'datePublished'))
            ? ct.getDate(t)
            : '';
        },
        pageUrlCanonical: function (t) {
          return (t = ct.selectProp(t.element, 'url')).length
            ? t[0].href
              ? t[0].href
              : ct.getVal(t)
            : null;
        },
        pageTitle: function (t) {
          var e = '',
            n = t.element,
            r = ct.selectPropOne(n, 'headline');
          return (
            r && (e += ct.getVal(r)),
            (r = ct.selectPropOne(n, 'alternativeHeadline')) &&
              (e += ' ' + ct.getVal(r)),
            '' === e &&
              ((r = ct.selectPropOne(n, 'name')) ||
                (r = ct.selectPropOne(n, 'itemReviewed')),
              r && (e += ct.getVal(r))),
            3 === t.type &&
              (t = ct.closest(n, '[itemtype$="schema.org/Question"]')) &&
              (r = ct.selectPropOne(t, 'text')) &&
              (e += ct.getVal(r)),
            e
          );
        },
        authors: function (t) {
          t = ct.selectProp(t.element, 'author');
          return v.map(function (t) {
            var e,
              n = {};
            return (
              ct.testAttr(
                t,
                'itemtype',
                /.+schema.org\/(Person|Organization)/
              ) &&
                (e = ct.selectPropOne(t, 'name')) &&
                (n.name = ct.getVal(e)),
              n.name ||
                (n.name =
                  t.getAttribute('content') ||
                  t.innerText ||
                  t.getAttribute('href')),
              n
            );
          }, t);
        },
      },
      _getType: function (t) {
        return (
          (t = t.getAttribute('itemtype') || ''),
          (t = this.typesRegExp.exec(t)) ? this.typesMap[t[1]] : 1
        );
      },
      _getContentData: function (t) {
        return t.element && t.element.innerText && t.element.innerText.length
          ? ht.superclass._getContentData.call(this, t)
          : null;
      },
      _findContentDescriptionNodes: function () {
        var t = v
          .map(function (t) {
            return '[itemtype$="schema.org/' + t + '"]';
          }, this.schemaEntities['schema.org'])
          .join(',');
        return ct.select(e, t);
      },
    }),
    ft = lt.inherit({
      id: 'j',
      dataNodesSelector:
        'script[type="application/ld+json"],script[type="application/json+ld"],script[type="ld+json"],script[type="json+ld"]',
      isAuthorsInTitle: !0,
      fields: {
        node: function (t) {
          return this._getContentNode(t);
        },
        id: function (t) {
          var e = t.data['@id'];
          return (
            (t = t.data.mainEntity || t.data.mainEntityOfPage),
            !e && t && (e = t['@id']),
            e
          );
        },
        chars: function (t) {
          return 'string' == typeof t.data.text
            ? t.data.text.length
            : this._getContentNode(t).innerText.length;
        },
        authors: function (t) {
          var e = [];
          return (e = (e = e.concat(
            this._extractArrayField(t.data, 'author', ['name'])
          )).concat(
            this._extractArrayField(t.data.mainEntity, 'author', ['name'])
          )).concat(
            this._extractArrayField(t.data.mainEntityOfPage, 'author', ['name'])
          );
        },
        pageTitle: function (t) {
          var e = t.data.headline || '';
          return (
            t.data.alternativeHeadline &&
              (e += ' ' + t.data.alternativeHeadline),
            '' === e &&
              (t.data.name
                ? (e = t.data.name)
                : t.data.itemReviewed && (e = t.data.itemReviewed)),
            3 === t.type && t.data.parentItem && (e = t.data.parentItem.text),
            e
          );
        },
        updateDate: function (t) {
          return t.data.dateModified || '';
        },
        publicationDate: function (t) {
          return t.data.datePublished || '';
        },
        pageUrlCanonical: function (t) {
          return t.data.url;
        },
        topics: function (t) {
          return this._extractArrayField(t.data, 'about', [
            'name',
            'alternateName',
          ]);
        },
        rubric: function (t) {
          var n = this._getContentNode(t),
            r = [];
          return (
            v.map(function (t) {
              (t = M.parse(t.innerText)) &&
                (t['@graph']
                  ? v.map(function (t) {
                      'BreadcrumbList' === t['@type'] && r.push(t);
                    }, t['@graph'])
                  : 'BreadcrumbList' === t['@type'] && r.push(t));
            }, [t.element].concat(
              v.toArray(
                ct.select(
                  e.body === n ? e.documentElement : n,
                  this.dataNodesSelector
                )
              )
            )),
            r.length && ((r = r[0].itemListElement), v.isArray(r))
              ? v.filter(
                  Boolean,
                  v.map(function (t) {
                    return t.item && !isNaN(t.position)
                      ? { name: t.item.name, position: t.position }
                      : null;
                  }, r)
                )
              : []
          );
        },
      },
      _extractArrayField: function (t, e, n) {
        return t && t[e]
          ? ((t = v.isArray(t[e]) ? t[e] : [t[e]]),
            (t = v.filter(
              Boolean,
              v.map(function (t) {
                var e = null;
                return t
                  ? 'string' == typeof t
                    ? t
                    : (v.map(function (n) {
                        e = e || t[n];
                      }, n),
                      e)
                  : e;
              }, t)
            )),
            v.map(function (t) {
              return { name: t };
            }, t))
          : [];
      },
      _getContentNode: function (e) {
        var n = e.element,
          r = e.data['@id'];
        e = e.data.url;
        var i,
          o = n.parentNode;
        return (
          e && 'string' == typeof e && (i = this._extractElementByHashedUrl(e)),
          !i &&
            r &&
            'string' == typeof r &&
            (i = this._extractElementByHashedUrl(r)),
          i ||
            (ct.closest(n, 'head') || 0 === o.innerText.length
              ? t.document.body
              : o)
        );
      },
      _extractElementByHashedUrl: function (t) {
        var n, r;
        try {
          if ((n = v.parseUrl(t).hash) && (r = ct.selectOne(e.body, n)))
            return r;
        } catch (t) {
          return null;
        }
      },
      _parseType: function (t) {
        return this.typesMap[t['@type']] || 1;
      },
      _getContentData: function (t) {
        var e,
          n = t.element,
          r = this,
          i = [];
        return t.data ||
          ((t.data = M.parse(n.innerText)),
          t.data && /schema\.org/.test(t.data['@context']))
          ? v.isArray(t.data['@graph'])
            ? v.map(function (t) {
                return v.inArray(r.schemaEntities['schema.org'], t['@type'])
                  ? ((t = { element: n, data: t, type: r._parseType(t) }),
                    ft.superclass._getContentData.call(r, t))
                  : null;
              }, t.data['@graph'])
            : ('QAPage' === t.data['@type'] &&
                (e = t.data.mainEntity || t.data.mainEntityOfPage),
              'Question' === t.data['@type'] && (e = t.data),
              e
                ? ((t = v.reduce(
                    function (t, n) {
                      var r = e[n] || [];
                      return t.concat(v.isArray(r) ? r : [r]);
                    },
                    [],
                    ['acceptedAnswer', 'suggestedAnswer']
                  )),
                  v.map(function (t) {
                    return v.inArray(r.schemaEntities['schema.org'], t['@type'])
                      ? ((t = {
                          element: n,
                          type: r._parseType(t),
                          data: v.mixin({ parentItem: e }, t),
                        }),
                        ft.superclass._getContentData.call(r, t))
                      : null;
                  }, t))
                : v.inArray(this.schemaEntities['schema.org'], t.data['@type'])
                ? ((i = this._parseType(t.data)),
                  ft.superclass._getContentData.call(
                    this,
                    v.mixin(t, { type: i })
                  ))
                : null)
          : null;
      },
      _findContentDescriptionNodes: function () {
        return ct.select(t.document, this.dataNodesSelector);
      },
    }),
    dt = lt.inherit({
      id: 'o',
      fields: {
        node: function (t) {
          return this._getContentNode(t);
        },
        chars: function (t) {
          return (t = this._getContentNode(t)).innerText
            ? t.innerText.length
            : 0;
        },
        authors: function (t) {
          return this._getArrayValue(t.data.author);
        },
        pageTitle: function (t) {
          return this._getSimpleValue(t.data.title) || '';
        },
        updateDate: function (t) {
          return this._getSimpleValue(t.data.modified_time);
        },
        publicationDate: function (t) {
          return this._getSimpleValue(t.data.published_time);
        },
        pageUrlCanonical: function (t) {
          return this._getSimpleValue(t.data.url);
        },
        topics: function (t) {
          return this._getArrayValue(t.data.tag);
        },
        rubric: function (t) {
          return this._getArrayValue(t.data.section);
        },
      },
      _getArrayValue: function (t) {
        return t
          ? v.isArray(t)
            ? v.map(function (t) {
                return { name: t };
              }, t)
            : [{ name: t }]
          : [];
      },
      _getSimpleValue: function (t) {
        return v.isArray(t) ? (t.length ? t[0] : null) : t;
      },
      _findContentDescriptionNodes: function () {
        var t = [e.head],
          n = ct.select(e.body, 'meta[property="og:type"]');
        return (
          n &&
            (t = t.concat(
              [].map.call(n, function (t) {
                return t;
              })
            )),
          t
        );
      },
      _getEntityData: function (n) {
        var r,
          i,
          o = n.element,
          a = {},
          s = this._getContentNode(n);
        o = ct.select(o === e.head ? o : s, 'meta[property]');
        var c = new RegExp(
          '^(og:)?((' + this.schemaEntities.opengraph.join('|') + '):)?'
        );
        return o && o.length
          ? (v.map(function (e) {
              try {
                (e.parentNode === s || e.parentNode === t.document.head) &&
                  ((r = e.getAttribute('property').replace(c, '')),
                  (i = e.getAttribute('content')),
                  a[r]
                    ? v.isArray(a[r])
                      ? a[r].push(i)
                      : (a[r] = [a[r], i])
                    : (a[r] = i));
              } catch (t) {}
            }, o),
            v.inArray(this.schemaEntities.opengraph, a.type)
              ? v.mixin(n, { data: a })
              : null)
          : null;
      },
      _getContentNode: function (t) {
        return (t = t.element) === e.head ? e.body : t.parentElement;
      },
      _getContentData: function (t) {
        return (t = this._getEntityData(t))
          ? dt.superclass._getContentData.call(this, t)
          : null;
      },
    }),
    pt = y.inherit({
      buffer: null,
      meta: !1,
      activeEvents: 'page resize scroll mousemove mousedown click windowfocus keystroke deviceRotation input touchmove touchstart'.split(
        ' '
      ),
      isStopped: !1,
      schemas: { json_ld: ft, schema: ht, microdata: ht, opengraph: dt },
      checkSize: function () {
        var t = this,
          e = 'pai' + this._schema.id,
          n = this.globalConfig.get(e, []);
        if (
          (n.push(function (e) {
            !t.isStopped &&
              e.length &&
              (t.findContent(e), (t.meta = t.getMeta()), t.send());
          }),
          this.globalConfig.setSafe(e, n),
          1 == n.length)
        ) {
          var r = function (n) {
            var i = t.globalConfig.get(e),
              o = t._schema.findContent();
            t.findContent(o), (t.meta = t.getMeta());
            var a = v.toJSON(t.meta);
            if (!t.isStopped) {
              if (n !== a)
                for (n = 0; n < i.length; n++) {
                  var s = v.map(function (t) {
                    return v.mixin({}, t);
                  }, o);
                  i[n](s);
                }
              t.timeout = v.setTimeout(function () {
                r(a);
              }, 1e3);
            }
          };
          r();
        }
      },
      stop: function () {
        this.isStopped = !0;
      },
      getBufferData: function () {
        return this.meta.length
          ? {
              type: 'publishersHeader',
              data: {
                articleMeta: this.meta || {},
                involvedTime: Math.max(this.involvedTime, 0),
              },
            }
          : null;
      },
      findContent: function (t) {
        var e = v.map(function (t) {
          return t.id;
        }, this.articles);
        this.articles = this.articles.concat(
          v.filter(function (t) {
            return !v.inArray(e, t.id);
          }, t)
        );
      },
      getScroll: function () {
        this.scroll = {
          x: t.pageXOffset || this.root.scrollLeft,
          y: t.pageYOffset || this.root.scrollTop,
        };
      },
      _initComponent: function () {
        var t = F.getViewportSize();
        (this.handlers = []),
          (this.events = []),
          (this.articles = []),
          (this.root = F.getRootElement()),
          this.getScroll(),
          (this.viewbox = { width: t[0], height: t[1] });
      },
      getMeta: function () {
        var t = this,
          e = [];
        this.getScroll();
        var n = v.map(function (n) {
          if (t.isRemovedFromDoc(n.element)) {
            var r = null;
            e.push(n);
          } else (r = { id: n.id, involvedTime: Math.max(n.involvedTime, 0), maxScrolled: n.maxScrolled || 0, chars: n.update ? n.update('chars') : 0 }), n.node && v.isFunction(n.node.getBoundingClientRect) && ((n = n.node.getBoundingClientRect()), (r.x = Math.round(n.left) + t.scroll.x), (r.y = Math.round(n.top) + t.scroll.y), (r.width = Math.round(n.width)), (r.height = Math.round(n.height)));
          return r;
        }, this.articles);
        return (
          v.map(function (e) {
            (e = v.arrayIndexOf(t.articles, e)), t.articles.splice(e, 1);
          }, e),
          v.filter(Boolean, n)
        );
      },
      isRemovedFromDoc: function (e) {
        return F.closest(e, 'html') !== t.document.documentElement;
      },
      getArticalsToSend: function () {
        var t,
          e = [];
        for (t = 0; t < this.articles.length; t++)
          if (!this.articles[t].sended) {
            var n = v.mixin({}, this.articles[t]);
            delete n.element,
              delete n.node,
              delete n.sended,
              delete n.index,
              delete n.involvedTime,
              delete n.visibility,
              delete n.maxScrolled,
              delete n.update,
              delete n.type,
              e.push(n);
          }
        return e;
      },
      send: function () {
        var t = this.getArticalsToSend();
        t.length &&
          (this.push({ articleInfo: t }),
          at.log('Publisher content info found:', t),
          v.arrayEvery(this.articles, function (t) {
            return (t.sended = !0), 1;
          }));
      },
      start: function (e) {
        var n = this,
          r = this.globalConfig.get('counters', {})[this.counterId + ':0'];
        e && e.schema && r && r.tp && (e.schema = 'microdata'),
          e &&
          e.schema &&
          this.schemas[e.schema] &&
          t.document &&
          v.isNativeFunction(t.document.querySelectorAll, 'querySelectorAll')
            ? (this.globalConfig.setSafe('pai', function () {
                return v.reduce(
                  function (t, e) {
                    return (t.visibility || 0) <= e.visibility && (t = e), t;
                  },
                  {},
                  n.articles
                ).id;
              }),
              (this._schema = new this.schemas[e.schema]()),
              (this._schema.root = this.root),
              at.log('Publishers analytics schema "' + e.schema + '"'),
              this.checkSize())
            : this.stop();
      },
      push: function (t) {
        v.arrayEvery(this.handlers, function (e) {
          return e(t), 1;
        }),
          this.events.push(t);
      },
      middleware: function (t) {
        this.handlers.push(t),
          v.arrayEvery(this.events, function (e) {
            t(e);
          });
      },
      lastStamp: 0,
      involvedTime: 0,
      MAX_INACTIVE: 5e3,
      trigger: function (t, e) {
        var n = 'event' !== t ? t : e.type;
        if (v.inArray(this.activeEvents, n)) {
          'scroll' == n && e.meta && e.meta.page && (this.scroll = e.meta),
            'resize' == n && 0 == e.target && (this.viewbox = e.meta);
          var r = _.getMs() - this.lastStamp;
          (r = Math.min(r, this.MAX_INACTIVE)),
            (this.involvedTime += Math.round(r)),
            (this.lastStamp = _.getMs()),
            this.meta &&
              this.scroll &&
              this.viewbox &&
              v.arrayEvery(
                this.articles,
                function (t) {
                  if (this.isRemovedFromDoc(t.element)) return 1;
                  var e = v
                    .filter(function (e) {
                      return e.id === t.id;
                    }, this.meta)
                    .pop();
                  if (!e) return i(Error("Can't find meta"), 'p.t'), 1;
                  var n = Math.max(
                      (Math.min(
                        this.scroll.y + this.viewbox.height,
                        e.y + e.height
                      ) -
                        Math.max(this.scroll.y, e.y)) /
                        this.viewbox.height,
                      0
                    ),
                    o = Math.max(
                      (this.scroll.y + this.viewbox.height - e.y) / e.height,
                      0
                    );
                  return (
                    (t.involvedTime += Math.round(n * r)),
                    (t.maxScrolled = Math.round(1e4 * o) / 1e4),
                    (t.visibility = n),
                    (e.involvedTime = t.involvedTime),
                    1
                  );
                },
                this
              );
        }
      },
    }),
    mt = y.inherit({
      hid: 0,
      tz: 0,
      ts: 0,
      counterId: 0,
      counterType: 0,
      url: '',
      protocol: '',
      executor: $,
      enabled: !1,
      _map: {
        page: { iterate: !1, name: 'page' },
        events: { iterate: !0, name: 'event' },
        mutations: { iterate: !0, name: 'mutation' },
        articleInfo: { iterate: !0, name: 'articleInfo' },
      },
      _getBufferType: function () {
        var e = Q,
          n = !1;
        if (!at.enabled && et) {
          try {
            n =
              (n = 2 === new Blob(['ä']).size) &&
              2 === new Blob([new t.Uint8Array([1, 2])]).size;
          } catch (t) {}
          n && t.Uint8Array && t.Uint8Array.prototype.slice && (e = ot);
        }
        return e;
      },
      _initComponent: r(function () {
        var t = this._getBufferType();
        this._localStorage = new R({ counterId: this.counterId });
        var e = this._localStorage.get('pai'),
          n = this._getStorage(),
          r = n.read('visorc');
        'b' !== r && 'w' !== r && (r = ''),
          (n.isEnabled() && !u('opera mini')) || (r = 'b'),
          (this._publisher = new pt({
            counterId: this.counterId,
            globalConfig: this.globalConfig,
          })),
          (this._vc = r),
          (n = {
            protocol: this.protocol,
            counterId: this.counterId,
            counterType: this.counterType,
            globalConfig: this.globalConfig,
            meta: {
              url: this.url,
              hitId: this.hid,
              timezone: this.tz,
              timestamp: this.ts,
            },
          }),
          (this._recorder = new g({
            counterId: this.counterId,
            trustedDomains: this.trustedDomains,
            childIframe: this.childIframe,
          })),
          (this._buffer = new t(
            v.mixin({}, n, {
              totalSendLimit: 31457280,
              browserInfoMix: { bt: 1 },
            })
          )),
          (this._eventsBuffer = new t(
            v.mixin(n, e && { browserInfoMix: { pai: e } })
          )),
          this._localStorage.remove('pai'),
          this._buffer.activate(),
          this._eventsBuffer.activate(),
          'b' !== r &&
            ((this._formRecorder = new a(
              this.protocol,
              this.counterId,
              this.counterType,
              this.hid,
              this.globalConfig
            )),
            this._recorder.on('error', function (t) {
              i(t.error, t.namespace);
            }),
            (this._activity = new st())),
          mt.superclass._initComponent.apply(this, arguments);
      }, 'wv2.init'),
      start: r(function (t, e) {
        var n = this,
          r = this._vc;
        if (this._recorder) {
          var i = +(t = t || {}).recp;
          (!isFinite(i) || 0 > i || 1 < i) && (r = 'w'),
            r || (r = (this.hid % 1e4) / 1e4 < i ? 'w' : 'b'),
            this._getStorage().create('visorc', r, 30),
            this._publisher.start(e),
            'w' === r &&
              this.isEnabled() &&
              this.globalConfig.setSafe('wv2Counter', this.counterId),
            'w' === r && this.isEnabled() && this._isCorrectCounter()
              ? (this._recorder.middleware(function (t) {
                  n.send(t.data);
                }),
                this._recorder.init(),
                this._eventsBuffer.wrappers.push(this._activity),
                this._recorder.start(t),
                this._formRecorder.start(),
                this.globalConfig.get('stopRecoder', function () {})(),
                this.globalConfig.set('stopRecoder', function () {
                  n.stop();
                }))
              : this._publisher && !this._publisher.isStopped
              ? (this._recorder.middleware(function (t) {
                  n.send(t.data, !0);
                }),
                this._recorder.init({ disableIndex: !0, disableMutations: !0 }),
                this._recorder.start(t))
              : this.stop(),
            this._publisher &&
              !this._publisher.isStopped &&
              (this._eventsBuffer.wrappers.push(this._publisher),
              this._eventsBuffer.setWVType(this._buffer instanceof ot ? 5 : 4),
              this._publisher.middleware(function (t) {
                n.send(t);
              }));
        }
      }, 'wv2.start'),
      stop: function () {
        this._publisher && this._publisher.stop(),
          this._recorder &&
            (this._recorder.stop(),
            this._formRecorder && this._formRecorder.stop());
      },
      isEnabled: function () {
        var e = !this.globalConfig.get('oo');
        return this.enabled && t.MutationObserver && e;
      },
      send: function (t, e) {
        var n = t._v;
        v.forEachKey(
          t,
          function (t, r) {
            var i = this._map[t],
              o = this._buffer;
            if (i) {
              var a = i.name;
              v.inArray(['event', 'articleInfo'], a) &&
                (o = this._eventsBuffer),
                i.iterate
                  ? v.forEachKey(
                      r,
                      function (t, r) {
                        var i,
                          s = 'eof' === r.type && !r.frameId,
                          c = [o];
                        for (
                          s && (c = [this._eventsBuffer, this._buffer]), i = 0;
                          i < c.length;
                          i++
                        )
                          this.executor.addAsyncItem(
                            c[i].addData,
                            c[i],
                            s,
                            [a, r, n, s, e],
                            'send.' + (r ? r.type || r.group || '' : 'empty')
                          );
                      },
                      this
                    )
                  : o.addData(a, r, n);
            }
          },
          this
        );
      },
      getVc: function () {
        return this._vc;
      },
      _getStorage: function () {
        return (
          this._storage ||
            (this._storage = new L({ counterId: this.counterId })),
          this._storage
        );
      },
      _isCorrectCounter: function () {
        return this.counterId === this.globalConfig.get('wv2Counter');
      },
    }),
    gt = {
      FN: 'ym',
      STACK: 'a',
      counters: [],
      waitPool: {},
      handle: function (e) {
        if (2 > e.length) return 1;
        var n = '' + e[0];
        v.inArray(n, ':') || (n += ':0');
        var r = n.split(':')[0],
          i = e[1],
          o = this.globalConfig.get('counters', {})[n];
        return (
          'init' == i
            ? t[(i = 'yaCounter' + r)] ||
              ((e = v.mixin(e[2] || {}, { id: +r })),
              (t[i] = new t.Ya[this.constructorName](e)))
            : v.inArray(this.counters, n) && o && o[i]
            ? ((e = [].slice.call(e, 2)), o[i].apply(o, e))
            : v.inArray(this.counters, n) ||
              (this.waitPool[n] || (this.waitPool[n] = []),
              this.waitPool[n].push(e)),
          1
        );
      },
      subscribe: function (t) {
        t &&
          (this.counters.push(t),
          this.waitPool[t] &&
            (v.arrayEvery(this.waitPool[t], this.handle, this),
            delete this.waitPool[t]));
      },
      init: function (e, n) {
        var r = this,
          i = t[this.FN];
        if (i) {
          var o = i[this.STACK];
          (this.constructorName = e),
            (this.globalConfig = n),
            o || (i[this.STACK] = o = []);
          var a = o.push;
          (o.push = function () {
            var t = a.apply(o, arguments);
            return v.arrayEvery(arguments, r.handle, r), t;
          }),
            i && v.isArray(o) && v.arrayEvery(o, this.handle, this);
        }
      },
    };
  F.loadScript = function (e, n) {
    n = n || t;
    var r = v.mixin(
        { type: 'text/javascript', charset: 'utf-8', async: !0 },
        e
      ),
      i = n.document,
      o = v.getNativeFunction('createElement', i),
      a = o('script');
    if (a) {
      (a.type = r.type),
        (a.charset = r.charset),
        (a.src = r.src),
        r.async && (a.async = !0);
      try {
        var s = i.getElementsByTagName('head')[0];
        if (!s) {
          var c = i.getElementsByTagName('html')[0];
          (s = o('head')), c && c.appendChild(s);
        }
        return s.insertBefore(a, s.firstChild), a;
      } catch (t) {}
    }
  };
  var vt = T.inherit({
      id: 'script',
      index: 6,
      request: function (i, o, a, s) {
        var c = !1,
          u = v.getNativeFunction('createElement', e)('script');
        if (
          (this.timeout &&
            v.setTimeout(
              function () {
                c || ((c = !0), F.removeNode(u), a.call(s, !1));
              },
              this.timeout,
              'ts.request'
            ),
          !u)
        )
          return (c = !0), a.call(s, !1), !1;
        var l = '_ymjsp' + v.random();
        (t[l] = r(function () {
          if (!c) {
            try {
              delete t[l];
            } catch (e) {
              t[l] = n;
            }
            a.apply(s, v.mergeArrays([!0], arguments)),
              (c = !0),
              F.removeNode(u);
          }
        }, 'transport.script')),
          (u.type = 'text/javascript'),
          (u.src = this._buildUrl(i, v.mixin({ wmode: 5, callback: l }, o))),
          (u.async = 'async');
        var h = e.getElementsByTagName('head')[0];
        return (
          h ||
            ((h = e.createElement('head')), e.documentElement.appendChild(h)),
          v.async(function () {
            h.insertBefore(u, h.firstChild);
          }),
          (u.onerror = function () {
            (c = !0), a.call(s, !1), (t[l] = n);
          }),
          !0
        );
      },
    }),
    yt = S.inherit({
      id: 'XHRhit',
      index: 10,
      _buildUrl: function (t, e) {
        return (e.wmode = 7), yt.superclass._buildUrl.apply(this, [t, e]);
      },
      _parseResp: function (t) {
        var e = M.parse(t);
        if (!e) throw '';
        return v.map(function (t) {
          return e[t];
        }, v.keys(e));
      },
    }),
    bt = W.inherit({
      transports: [yt, vt],
      trimParams: !0,
      _initComponent: function () {
        bt.superclass._initComponent.apply(this, arguments),
          (this._ilStorage = new R({ counterId: this.counterId }));
      },
      postParams: [],
      checkYandexHost: function (t) {
        t &&
          (((t = v
            .parseUrl(t)
            .host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) &&
            ((t = t[0].split('yandex').reverse()[0].substring(1)),
            -1 != v.arrayIndexOf(E, t))) ||
            (t = !1),
          t && (this.host = 'mc.yandex.' + t));
      },
      sendHit: function (t) {
        var e = {},
          n = this._ilStorage.get('il');
        t.visitColor && (e.vc = t.visitColor),
          n &&
            (this._ilStorage.remove('il'),
            (e.ilt = D.encode(j.encode(v.trim(n, Zt))))),
          this.checkYandexHost(t.referrer),
          this._hitExt(
            {
              url: t.url,
              forceNoRedirect: t.forceNoRedirect,
              nohit: t.nohit,
              hasPrerender: t.hasPrerender,
              title: t.title,
              referrer: t.referrer,
              vParams: t.vParams,
              userParams: t.userParams,
              experiments: t.experiments,
              modes: t.modes,
              browserInfo: e,
              ts: t.ts,
              tz: t.tz,
              callback: t.callback,
              ctx: t.ctx,
            },
            'hit'
          );
      },
    }),
    _t = y.inherit({
      cid: 3,
      cnt: 0,
      KEY_NAME: 'wasSynced',
      _initComponent: function () {
        (this._storage = new R()), (this._cookie = new L());
      },
      hit: function (t, e) {
        var r = this,
          i = e === n,
          o = !!i && this._storage.get(this.KEY_NAME),
          a = [],
          s = this.globalConfig.get('fakeHit');
        if (s && i)
          return s(function (e) {
            t(e);
          });
        !o && i && (o = this._cookie.read(this.KEY_NAME)) && (o = M.parse(o)),
          o && o.params && o.time + 864e5 > _.getMs()
            ? (r.globalConfig.set('isEU', o.params.eu), t(o))
            : (this.globalConfig.set('fakeHit', function (t) {
                a.push(t);
              }),
              this._getSender().sendHit({
                forceNoRedirect: this.forceNoRedirect,
                callback: function (e, n) {
                  var i = e || {};
                  (o = { time: _.getMs(), params: i, bkParams: n }),
                    r.globalConfig.set('isEU', i.eu),
                    r._storage.set(r.KEY_NAME, o),
                    r._cookie.create(r.KEY_NAME, M.stringify(o), 1728),
                    t(o),
                    r.globalConfig.set('fakeHit', function (t) {
                      t(o);
                    }),
                    v.arrayEvery(a, function (t) {
                      return t(o), 1;
                    });
                },
              }));
      },
      _getSender: function () {
        return (
          this._sender ||
            (this._sender = new bt({
              protocol: 'https:',
              counterType: this.cnt,
              counterId: this.cid,
              sendTitle: !1,
              globalConfig: this.globalConfig,
              fake: !0,
            })),
          this._sender
        );
      },
    }),
    wt = y.inherit({
      baseUrl: 'mc.yandex.',
      globalConfig: k,
      baseTld: 'ru',
      partners: {
        'mc.yandexsport.ru': {
          regex: /^([^\/]+\.)?yandexsport\.ru$/,
          tld: 'ru',
        },
        'mc.beru.ru': { regex: /^([^\/]+\.)?beru\.ru$/, tld: 'ru' },
        'mc.kinopoisk.ru': { regex: /^([^\/]+\.)?kinopoisk\.ru$/, tld: 'ru' },
      },
      _initComponent: function () {
        var e = this;
        wt.superclass._initComponent.apply(this, arguments),
          (this.syncTlds = v.reduce(
            function (t, e) {
              return e(t);
            },
            E,
            [
              v.bind(v.filter, null, function (t) {
                return t !== e.baseTld;
              }),
              v.bind(
                v.reduce,
                null,
                function (t, e) {
                  return (t[e] = [e]), t;
                },
                {}
              ),
            ]
          )),
          v.forEachKey(
            this.partners,
            function (e, n) {
              n.regex.test(t.location.hostname) &&
                (this.syncTlds[n.tld] || (this.syncTlds[n.tld] = []),
                this.syncTlds[n.tld].push(e),
                (this._replaceBase[e] = !0));
            },
            this
          );
      },
      _replaceBase: {},
      langToDomain: {
        ka: 'ge',
        ro: 'md',
        tg: 'tj',
        tk: 'tm',
        et: 'ee',
        hy: 'com.am',
        he: 'co.li',
        ky: 'kg',
        uk: 'ua',
        be: 'by',
        tr: 'com.tr',
        kk: 'kz',
      },
      sync: function (t) {
        var e = this,
          n = this._need(),
          r =
            -1 !=
            s().hostname.search(
              /(?:^|\.)(?:ya|yandex(sport)?|beru|kinopoisk)\.(?:\w+|com?\.\w+)$/
            );
        if (A.isIframe()) return t();
        this._is()
          ? t()
          : (r && e._syncAdmetrica(),
            n
              ? (this._setStatus(!0),
                r
                  ? this._getCn().hit(function () {
                      e._sync(n, t);
                    })
                  : t())
              : t()),
          r && this._addMda();
      },
      _addMda: function () {
        var t = new L({ skipPrefix: !0 }),
          e = new L(),
          n = t.read('mda');
        '0' !== n && '1' !== n && t.create('mda', '0', 1036800),
          e.read('mda') && e.erase('mda');
      },
      _is: function () {
        try {
          return !!this.globalConfig.get('startSync');
        } catch (t) {
          return !1;
        }
      },
      _setStatus: function (t) {
        try {
          this.globalConfig.set('startSync', t);
        } catch (t) {}
      },
      _need: function () {
        var t,
          e = this._getDomainByLang(),
          n = this._getTld(),
          r = [];
        (t = this.syncTlds[n]) && r.push.apply(r, t),
          (t = this.syncTlds[e]),
          e !== n && t && r.push.apply(r, t);
        var i = this._getLs().get('synced') || {};
        return (
          ((r = v.arrayFilter(r, function (t) {
            return (i[t] || 1) + 1440 < _.getMinutes();
          })).length &&
            r) ||
          !1
        );
      },
      _syncAdmetrica: function () {
        var t = new N({}),
          e = this._getLs();
        ((e.get('synced') || {}).SYNCED_ADM || 1) + 1440 < _.getMinutes() &&
          t.request(
            'https://mc.admetrica.ru/sync_cookie_image_check',
            {},
            function (t) {
              e.get('synced');
              var n = _.getMinutes();
              t || (n -= 1435),
                ((t = e.get('synced') || {}).SYNCED_ADM = n),
                e.set('synced', t);
            }
          );
      },
      _sync: function (t, e) {
        var n,
          r = 0,
          i = t.length,
          o = this;
        if (0 < i) {
          e = e || function () {};
          var a = function () {
              i === ++r && e();
            },
            s = o._getLs(),
            c = new N({});
          for (n = 0; n < i; n++)
            !(function (t) {
              c.request(
                'https://' +
                  (o._replaceBase[t] ? t : o.baseUrl + t) +
                  '/sync_cookie_image_check',
                {},
                function (e) {
                  a();
                  var n = _.getMinutes();
                  e || (n -= 1435),
                    ((e = s.get('synced') || {})[t] = n),
                    s.set('synced', e);
                }
              );
            })(t[n]);
        } else e();
      },
      _getCn: function () {
        return (
          this._cn ||
            (this._cn = new _t({ fake: !0, globalConfig: this.globalConfig })),
          this._cn
        );
      },
      _getLs: function () {
        return this._ls || (this._ls = new R()), this._ls;
      },
      _getTld: function () {
        var t = v.getTld();
        return (
          {
            am: 'com.am',
            tr: 'com.tr',
            ge: 'com.ge',
            il: 'co.il',
            рф: 'ru',
            'xn--p1ai': 'ru',
            укр: 'ua',
            'xn--j1amh': 'ua',
            бел: 'by',
            'xn--90ais': 'by',
          }[t] || t
        );
      },
      _getDomainByLang: function () {
        if (!t.navigator) return 'ru';
        try {
          var e = navigator.languages
            ? navigator.languages[0]
            : A.getLanguage();
        } catch (t) {}
        return (
          e && e.toLowerCase && (e = e.toLowerCase().split('-')[0]),
          this.langToDomain[e] || 'ru'
        );
      },
    }),
    Et = function (t) {
      (t.c._isDestructing = !0), t.c.destruct && t.c.destruct();
    },
    kt = function (t, e) {
      0 === parseFloat(t.c_recp) &&
        (Et(e), e.s.set('ymoo' + e.k, _.getMinutes()));
    },
    xt = function (t) {
      var e,
        n = _.getMinutes();
      t.s.isEnabled() && (e = t.s.get('ymoo' + t.k)) && 30 > n - e && Et(t);
    },
    Ot = S.inherit({
      id: 'RawBodyXHR',
      index: 9,
      postParams: ['body'],
      _setHeaders: function () {},
      _preparePostParams: function (t) {
        return t.post.body || '';
      },
    });
  A.isAndroid = r(
    function () {
      var t = navigator.userAgent.toLowerCase(),
        e = A.getPlatform() || '';
      return (
        -1 < t.indexOf('android') &&
        -1 < t.indexOf('mobile') &&
        e.match(/^android|linux armv/i)
      );
    },
    '',
    !0
  );
  var Tt = {
      _url: 'https://mc.yandex.ru/user_storage_set?',
      _params: {},
      init: function (t) {
        this._params = t || {};
      },
      save: function (t, e) {
        this._getReq().request(
          this._url + O.stringify({ key: t, value: v.toJSON(e) })
        ),
          this._getLs().set(t, e);
      },
      get: function (t) {
        return { remote: this._params[t], local: this._getLs().get(t) };
      },
      getNum: function (t) {
        return (t = this.get(t)), Math.max(+t.remote || 0, +t.local || 0);
      },
      _getLs: function () {
        return this._ls || (this._ls = new R()), this._ls;
      },
      _getReq: function () {
        return this._req || (this._req = new N()), this._req;
      },
    },
    St = {
      sync: r(function (t, e, n, r) {
        var i = { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' };
        if (((this.globalConfig = r || k), this._enabled(t, e, n))) {
          this._setStatus(!0);
          var o = new Ot({ method: 'GET', withCredentials: !1 }),
            a = this._getHosts(),
            s = a.length;
          (function t(e) {
            var n = a[e];
            e < s
              ? o.request(
                  n[0] + ':' + n[1] + '/p',
                  i,
                  function (r, i) {
                    r ? this._save(r, i, n[1]) : t.call(this, e + 1);
                  },
                  this
                )
              : this._save(!1);
          }.call(this, 0));
        }
      }, 'ds'),
      _getHosts: function () {
        var t = [],
          e = Gt.protocol,
          n = A.isIOS();
        return (
          (A.isAndroid() || (n && 'http:' === e)) &&
            t.push(
              ['http://127.0.0.1', '30102'],
              ['http://127.0.0.1', '29009']
            ),
          n &&
            'https:' === e &&
            t.push(
              ['https://yandexmetrica.com', '30103'],
              ['https://yandexmetrica.com', '29010']
            ),
          t
        );
      },
      _save: function (t, e, n) {
        var r = _.getMinutes();
        t
          ? new W({
              protocol: 'https:',
              counterType: 0,
              counterId: 42822899,
              sendTitle: !1,
              fake: !0,
            }).sendDevice({ data: v.trim(e), port: n })
          : (r -= 45),
          Tt.save('ds', r);
      },
      _is: function () {
        try {
          return !!this.globalConfig.get('dSync');
        } catch (t) {
          return !1;
        }
      },
      _enabled: function (t, e, n) {
        return (
          60 < _.getMinutes() - Tt.getNum('ds') &&
          !this._is() &&
          !v.isDev(this.globalConfig) &&
          ((t =
            0 === e &&
            0 <=
              v.arrayIndexOf(
                [
                  39370095,
                  1282253,
                  29302335,
                  43653484,
                  41734944,
                  31048081,
                  16443139,
                  27737346,
                  41870499,
                  33911514,
                  30744873,
                  5564395,
                  2580487,
                ],
                t
              )),
          (t = c() || (!n && 0.1 >= Math.random() && t)),
          (n = A.isIOS() && t),
          (A.isAndroid() && t) || n)
        );
      },
      _setStatus: function (t) {
        try {
          this.globalConfig.set('dSync', t);
        } catch (t) {}
      },
    },
    At = {
      getPos: function (t) {
        var e = F.getRootElement(),
          n = F.getDocumentScroll();
        return [
          t.pageX || t.clientX + n[0] - (e.clientLeft || 0) || 0,
          t.pageY || t.clientY + n[1] - (e.clientTop || 0) || 0,
        ];
      },
      getTarget: function (t) {
        var n = null;
        try {
          (n = t.target || t.srcElement) &&
            (!n.ownerDocument && n.documentElement
              ? (n = n.documentElement)
              : n.ownerDocument !== e && (n = null));
        } catch (t) {}
        return n;
      },
      getMouseButton: function (t) {
        return t.which || t.button == n
          ? t.which
          : 1 & t.button
          ? 1
          : 2 & t.button
          ? 3
          : 4 & t.button
          ? 2
          : 0;
      },
      prevent: function (e) {
        (e = e || t.event).preventDefault
          ? e.preventDefault()
          : (e.returnValue = !1);
      },
    };
  At.dispatchCustomEvent = r(function (t, n) {
    var r;
    (n = n || e),
      (r = v.getNativeFunction('createEvent', e)('Event')) &&
        (r.initEvent(t, !1, !1), v.getNativeFunction('dispatchEvent', n)(r));
  }, 'evt.dispatch');
  var It = { lastReferrer: null },
    Ct = y.inherit({
      counter: null,
      prefsEcommerce: null,
      status: { NEW: n, PENDING: 1, OK: 2, FAIL: 3 },
      overrideTimeout: null,
      dataLayerName: 'dataLayer',
      _initComponent: function () {
        Ct.superclass._initComponent.apply(this, arguments),
          this.frameConnector &&
            this.frameConnector.addHandler(
              'params',
              function (t, e) {
                this.counter &&
                  this.counter.params &&
                  this.onCookies(
                    function (t) {
                      this.counter.params(t.data);
                    },
                    this,
                    e
                  );
              },
              this
            ),
          this._overridePush(this.globalConfig.get('dataLayer'));
      },
      waitPool: [],
      destruct: function () {
        this.frameConnector &&
          this.frameConnector.destruct &&
          (this.frameConnector.destruct(),
          (this._send = function () {}),
          (this.waitPool = []),
          (this.onCookies = function () {})),
          v.clearTimeout(this.overrideTimeout);
      },
      onCookies: function (t, e) {
        this.waitPool.push({
          fn: t,
          ctx: e,
          args: [].slice.call(arguments, 2),
        });
      },
      initUserLayer: function () {
        var t = 'customArr';
        v.arrayEvery(this.waitPool, function (t) {
          return t.fn.apply(t.ctx, t.args), 1;
        }),
          (this.onCookies = function (t, e) {
            t.apply(e, [].slice.call(arguments, 2));
          }),
          (this.prefsEcommerce || this.prefsUseDataLayer) &&
            (this._overridePush(this.prefsEcommerce) ||
              (v.isString(this.prefsEcommerce) &&
                (this.dataLayerName = this.prefsEcommerce),
              (t = this.dataLayerName),
              (this._tryTimeout = v.bind(this._tryTimeout, this)),
              this._tryTimeout()),
            (this.counter._ecommerce = t));
      },
      _overridePush: function (t) {
        if (t && 'function' == typeof t.push) {
          var e = this;
          e._send(t);
          var n = t.push;
          return (
            (t.push = function () {
              var t = n.apply(this, arguments);
              return e._send([].slice.call(arguments, 0)), t;
            }),
            !0
          );
        }
        return !1;
      },
      _tryTimeout: function () {
        this._overridePush(t[this.dataLayerName]) ||
          (this.overrideTimeout = v.setTimeout(
            this._tryTimeout,
            1e3,
            'dlObserver'
          ));
      },
      _callHandlers: function (t) {
        v.arrayEvery(Ct.handlers, function (e) {
          return (
            e &&
              e.type &&
              v.arrayEvery(e.type.split(','), function (n) {
                return (
                  n.replace(' ', '') === t.type && e.callback && e.callback(t),
                  1
                );
              }),
            1
          );
        });
      },
      allowedEvents: 'currencyCode add delete remove purchase checkout detail'.split(
        ' '
      ),
      _convert: function (t, e) {
        var n = v.keys(e),
          r = !1,
          i = { transaction_id: 'id', value: 'revenue' };
        if (e.items) {
          var o = {};
          return (
            (o[t] = { products: e.items }),
            1 < n.length &&
              (o[t].actionField = v.reduce(
                function (t, n) {
                  return (
                    i[n]
                      ? (t[i[n]] = e[n])
                      : 'currency' === n
                      ? (r = e[n])
                      : 'items' !== n && e[n] && (t[n] = e[n]),
                    t
                  );
                },
                {},
                n
              )),
            r && (o.currencyCode = r),
            o
          );
        }
      },
      _checkGtag: function (t) {
        var e = {
            view_item: 'detail',
            add_to_cart: 'add',
            remove_from_cart: 'remove',
            begin_checkout: 'checkout',
            purchase: 'purchase',
          },
          n = [];
        return (
          t &&
            'event' === t[0] &&
            e[t[1]] &&
            (t = this._convert(e[t[1]], t[2])) &&
            n.push(t),
          n
        );
      },
      _send: function (e) {
        var n,
          r,
          i = [],
          o = this.allowedEvents,
          a = 0;
        for (r = e.length; a < r; a++) {
          if ((n = e[a]) && n.ymetrikaEvent) {
            var s = n.ymetrikaEvent;
            this._callHandlers(s),
              'params' === s.type &&
                s.data &&
                (s.sended || (s.sended = []),
                s.counter
                  ? this.counter &&
                    this.counter.params &&
                    this.counterId == s.counter &&
                    (this.onCookies(
                      function (t) {
                        this.counter.params(t.data);
                      },
                      this,
                      v.mixin({}, s)
                    ),
                    s.sended.push(this.counterId))
                  : this.onCookies(
                      function (t) {
                        v.forEachKey(
                          this.globalConfig.get('counters'),
                          function (e, n) {
                            var r = e.split(':')[0];
                            !v.inArray(t.sended, r) &&
                              n &&
                              n.params &&
                              (n.params(t.data), t.sended.push(r));
                          },
                          this
                        );
                      },
                      this,
                      v.mixin({}, s)
                    ),
                s.status == this.status.NEW &&
                  s.parent &&
                  this.frameConnector &&
                  this.frameConnector.checkFrame(t.parent) &&
                  t.parent !== t &&
                  (this.frameConnector.sendToParents(
                    { type: 'params', data: s.data },
                    function () {
                      s.status = this.status.OK;
                    },
                    this
                  ),
                  (s.status = this.status.PENDING)));
          }
          if (n && n.ecommerce) {
            var c = {},
              u = !1;
            v.forEachKey(n.ecommerce, function (t, e) {
              0 <= v.arrayIndexOf(o, t) && ((u = !0), (c[t] = e));
            }),
              u && i.push(c);
          }
          i = i.concat(this._checkGtag(n));
        }
        i.length &&
          this.onCookies(
            function (t) {
              this.counter.params({ __ym: { ecommerce: t } });
            },
            this,
            i
          );
      },
    });
  (Ct.handlers = []),
    (O.parse = function (t, e) {
      var n,
        r = {};
      if ((t = (t && t.replace(/^\?/, '')) || '').length) {
        var i = t.split('&');
        for (n = 0; n < i.length; n++)
          if (i[n]) {
            var o = i[n].split('=');
            if (o[0]) {
              var a = v.safeDecodeURIComponent(o[0]);
              (o = v.safeDecodeURIComponent(
                (o[1] || '').replace(/\+/g, '%20')
              )),
                e && a in r
                  ? v.isArray(r[a])
                    ? r[a].push(o)
                    : (r[a] = [r[a], o])
                  : (r[a] = o);
            }
          }
      }
      return r;
    });
  var Pt = 'GDPR-ok GDPR-cross GDPR-cancel GDPR-skip GDPR-frame-skip GDPR-frame-ya GDPR-frame-noya GDPR-open-start GDPR-eu-skip GDPR-open-fail GDPR-open-success GDPR-cookie-success GDPR-cookie-fail GDPR-skip-login GDPR-skip-domain GDPR-skip-na GDPR-skip-eu-na GDPR-skip-wv GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23'.split(
      ' '
    ),
    Nt = [
      'https://brozen.yandex.ru',
      'https://yabro1.zen-test.yandex.ru/yabro/index.html',
      'https://yabro2.zen-test.yandex.ru/yabro/index.html',
    ],
    Mt = y.inherit({
      globalKey: 'f1',
      MAX_SIZE: 1e6,
      isYAN: !1,
      trigger: function (t) {
        this.globalConfig.get('dataLayer').push({ ymetrikaEvent: { type: t } });
      },
      initCounter: function () {},
      enabled: c() && -1 < t.location.href.indexOf('yagdprcheck=1'),
      _initComponent: function () {
        (this._cookie = Mt.cookie),
          (this._sender = new _t({
            fake: !0,
            globalConfig: this.globalConfig,
            forceNoRedirect: !0,
          }));
      },
      realise: function (e, n) {
        this.initCounter.apply(t, e),
          this.globalConfig.set(this.globalKey, function (t) {
            t();
          }),
          n.length &&
            $.chain(
              n.concat([
                function () {
                  n = [];
                },
              ]),
              null,
              !1,
              'GDPR'
            );
      },
      accept: function (t, e, n) {
        n.create('gdpr', '0', 525600),
          this.realise(t, e),
          this.frameConnector.sendToChildren({ type: 'GDPR-ok' });
      },
      showPopup: function (t, e, n, i, o) {
        var a,
          s,
          c = this;
        (a =
          'https://yastatic.net/q/global-notifications/cc/_lego-cc' + t + '.'),
          (s = 'ru en kk be ky tr tt uk'.split(' ')),
          v.inArray(s, e) || (e = 'en'),
          a
            ? ((t = F.loadScript({ src: a + e + '.js' })),
              c.trigger('GDPR-open-start'),
              (t.onerror = function (t) {
                r(function () {
                  throw t;
                }, 'gdpr-popup')(),
                  c.trigger('GDPR-open-fail'),
                  c.realise(n, i),
                  c.frameConnector.sendToChildren({ type: 'GDPR-ok' });
              }),
              (t.onload = function () {
                c.trigger('GDPR-open-success'),
                  c.trigger('21'),
                  (Ct.handlers = Ct.handlers.concat([
                    {
                      type: 'GDPR-ok, GDPR-cross',
                      callback: function (t) {
                        t.once || (c.accept(n, i, o), (t.once = !0));
                      },
                    },
                    {
                      type: 'GDPR-cancel',
                      callback: function () {
                        o.create('gdpr', '1'),
                          c.logCancel(),
                          c.frameConnector.sendToChildren({
                            type: 'GDPR-cancel',
                          });
                      },
                    },
                  ]));
              }))
            : (c.trigger('GDPR-open-success'),
              c.trigger('21'),
              c.accept(n, i, o));
      },
      askGDPR: function (t, e, n, r, i, o) {
        if (v.inArray([null, ''], t)) this.showPopup(e, n, r, i, o);
        else if ('0' === t)
          this.trigger('GDPR-cookie-success'), this.realise(r, i);
        else if ('1' === t)
          return this.trigger('GDPR-cookie-fail'), this.logCancel(), !1;
      },
      logCancel: function () {
        this._sender.hit(function () {}, !1);
      },
      handle: function () {
        var e = this._sender,
          n = [],
          r = (A.getLanguage() || '').toLowerCase().split('-')[0],
          i = 'ontouchstart' in t ? '-touch' : '',
          o = this._cookie,
          a = o.read('gdpr'),
          s = o.read('yaGdprCheck'),
          u = this,
          l = this.globalConfig.get(this.globalKey),
          h = arguments;
        return (
          (n.size = 0),
          l
            ? l(function () {
                u.realise(h, n);
              })
            : !this.enabled &&
              ('0' === a ||
                A.isSafariWebView() ||
                A.isAndroidWebView() ||
                v.inArray(Nt, t.location.href.split('?')[0]) ||
                !c() ||
                o.read('yandex_login') ||
                this.disable)
            ? (o.read('yandex_login')
                ? (this.trigger('GDPR-skip-login'),
                  o.create('gdpr', '0', 525600))
                : c()
                ? '0' === a
                  ? this.trigger('GDPR-skip')
                  : A.isSafariWebView() || A.isAndroidWebView()
                  ? this.trigger('GDPR-skip-wv')
                  : this.trigger('GDPR-skip-na')
                : this.trigger('GDPR-skip-domain'),
              this.realise(h, n))
            : (this.globalConfig.set(this.globalKey, function (t, e) {
                var r = 0;
                try {
                  r = JSON.stringify(e).length || 0;
                } catch (t) {}
                n.size + r < u.MAX_SIZE
                  ? (n.push(t), (n.size += r))
                  : v.warning('GDPR buffer is exceeded');
              }),
              void e.hit(function (t) {
                if (!(t.params.eu || s || u.enabled))
                  return (
                    t.params.eu
                      ? u.trigger('GDPR-skip-eu-na')
                      : (o.create('gdpr', '0'), u.trigger('GDPR-eu-skip')),
                    u.realise(h, n)
                  );
                if (
                  (u.frameConnector &&
                    u.frameConnector.addHandler('isYandex', function () {
                      return { type: 'isYandex', isYandex: c() };
                    }),
                  u.frameConnector.isIframe)
                ) {
                  u.frameConnector.sendToParents(
                    { type: 'isYandex' },
                    function (t, r) {
                      var i = !1;
                      clearTimeout(e),
                        r[0].isYandex
                          ? (u.trigger('GDPR-frame-ya'),
                            u.frameConnector.addHandler('GDPR-ok', function () {
                              i ||
                                (o.create('gdpr', '0', 525600),
                                u.realise(r, n),
                                (i = !0));
                            }),
                            u.frameConnector.addHandler(
                              'GDPR-cancel',
                              function () {
                                o.create('gdpr', '1');
                              }
                            ))
                          : (u.trigger('GDPR-frame-noya'), u.realise(r, n));
                    }
                  );
                  var e = v.setTimeout(function () {
                    u.trigger('GDPR-frame-skip'), u.realise(h, n);
                  }, 2e3);
                } else u.askGDPR(a, i, r, h, n, o);
              }))
        );
      },
    });
  (Mt.globalKey = 'f1'),
    (Mt.cookie = new L({ skipPrefix: !0 })),
    (Mt.getState = function (t) {
      var e = Mt.cookie.read('gdpr');
      return (t = v.reduce(
        function (t, e) {
          return (
            e.ymetrikaEvent &&
              v.inArray(Pt, e.ymetrikaEvent.type) &&
              t.push(v.arrayIndexOf(Pt, e.ymetrikaEvent.type)),
            t
          );
        },
        [],
        t.get('dataLayer')
      )).length
        ? ((t = t.join(',')),
          e && (t += '-' + (v.inArray(['0', '1'], e) ? e : '2')),
          t)
        : '';
    });
  var Rt = {
    init: function (t, n, r) {
      '22663942' == r &&
        ((r = e.createElement('img')),
        t &&
          t.account &&
          t.tmsec &&
          n &&
          (r.src =
            'https://www.tns-counter.ru/V13a****' +
            t.account +
            '/ru/UTF-8/tmsec=' +
            t.tmsec +
            '/' +
            n));
    },
  };
  (A.isIE = v.memorize(function () {
    return (e && !e.addEventListener) || !1;
  })),
    (A.isChromePdf = v.memorize(function () {
      var t,
        e = navigator.plugins;
      if (e && e.length)
        for (t = 0; t < e.length; t++)
          if (/Chrome PDF Viewer/.test(e[t].name)) return !0;
      return !1;
    })),
    (A.isPrivate = r(function (e) {
      var n = v.bind(e, null, 0);
      if (
        ((e = v.bind(e, null, 1)),
        v.isFunction(t.webkitRequestFileSystem) && !A.isAndroid())
      )
        return t.webkitRequestFileSystem(0, 0, n, e);
      if (A.isFF()) return void 0 === navigator.serviceWorker ? e() : n();
      if (A.isSafari() && v.isFunction(t.openDatabase))
        try {
          t.openDatabase(null, null, null, null), n();
        } catch (t) {
          e();
        }
      else {
        if (t.indexedDB || (!t.PointerEvent && !t.MSPointerEvent)) return n();
        e();
      }
    }, 'isPrivate')),
    (A.findTarget = function (t) {
      var e;
      if (!(t = t.target || t.srcElement)) return !1;
      for (
        3 == t.nodeType && (t = t.parentNode),
          e = t && t.nodeName && t.nodeName.toString().toLowerCase();
        t &&
        t.parentNode &&
        t.parentNode.nodeName &&
        (('a' !== e && 'area' !== e) || (!t.href && !t['xlink:href']));

      )
        e =
          (t = t.parentNode) &&
          t.nodeName &&
          t.nodeName.toString().toLowerCase();
      return !!t.href && t;
    }),
    (A.getHref = function (t) {
      return t
        ? ((t = t.href),
          v.isString(t)
            ? '' + t
            : '[object SVGAnimatedString]' === v.toString(t)
            ? '' + t.baseVal
            : '')
        : '';
    }),
    (A.getLinkComponents = function (t) {
      return t && 'A' === t.nodeName
        ? {
            href: t.href,
            hostname: t.hostname || v.parseUrl(t.href).hostname || '',
            host: t.host,
            protocol: t.protocol,
            pathname: t.pathname,
            hash: t.hash,
            port: t.port,
            search: t.search,
            query: t.search.slice(Math.min(1, t.search.length)),
            path: (t.pathname || '/') + t.search,
          }
        : v.isString(t)
        ? v.parseUrl(t)
        : {
            href: '',
            hostname: '',
            host: '',
            protocol: '',
            pathname: '',
            hash: '',
            port: '',
            search: '',
            query: '',
            path: '',
          };
    });
  var Dt = B.inherit({
      resource: 'clmap',
      retry: !0,
      transports: [N],
      sendClick: function (t, e, n, r) {
        this.send({ 'page-url': t, 'pointer-click': e }, {}, n, r);
      },
    }),
    jt = y.inherit({
      filter: null,
      ignoreTags: [],
      quota: 0,
      isTrackHash: !1,
      protocol: '',
      counterId: 0,
      counterType: 0,
      startTime: 0,
      MAX_LEN_PATH: 128,
      TIMEOUT_CLICK: 50,
      TIMEOUT_SAME_CLICKS: 1e3,
      DELTA_SAME_CLICKS: 2,
      tags: 'A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title'.split(
        ' '
      ),
      _initComponent: function () {
        var t, e;
        if (
          ((this._lastClick = null),
          (this.hasQuota = !!this.quota),
          (this._quota = this.quota),
          (this._ignoreTags = []),
          this.ignoreTags)
        )
          for (t = 0; t < this.ignoreTags.length; t++)
            this.ignoreTags[t] &&
              v.mergeArrays(this._ignoreTags, [
                String(this.ignoreTags[t]).toUpperCase(),
              ]);
        (this._cacheTags = {}), (t = 59);
        var n = String.fromCharCode;
        for (e = 0; e < this.tags.length; e++)
          (this._cacheTags[this.tags[e]] = n(t)), n(t), t++;
        (this._sender = new Dt({
          globalConfig: this.globalConfig,
          protocol: this.protocol,
          counterId: this.counterId,
          counterType: this.counterType,
        })),
          (this._start = !1),
          this.start();
      },
      destroy: function () {
        this.stop();
      },
      start: function () {
        this._start || b.on(e, 'click', this._handler, this),
          (this._start = !0);
      },
      stop: function () {
        this._start && b.un(e, 'click', this._handler, this),
          (this._start = !1);
      },
      setTrackHash: function (t) {
        this.isTrackHash = t;
      },
      _isIgnore: function (t) {
        return F.classNameExists(t, '(ym-disable-clickmap|ym-clickmap-ignore)');
      },
      _handler: function (t) {
        if (
          ((t = {
            el: At.getTarget(t),
            pos: At.getPos(t),
            button: At.getMouseButton(t),
            time: +new Date(),
          }),
          this._isTrackingClick(t))
        ) {
          var e = F.getElementSize(t.el),
            n = F.getElementXY(t.el);
          (e = [
            'rn',
            v.random(),
            'x',
            Math.floor((65535 * (t.pos[0] - n[0])) / (e[0] || 1)),
            'y',
            Math.floor((65535 * (t.pos[1] - n[1])) / (e[1] || 1)),
            't',
            Math.floor((t.time - this.startTime) / 100),
            'p',
            this._getElPath(t.el),
            'X',
            t.pos[0],
            'Y',
            t.pos[1],
          ]),
            (n = s().href),
            this.isTrackHash
              ? v.mergeArrays(e, ['wh', '1'])
              : (n = n.split('#')[0]),
            this._sender.sendClick(v.trim(n, Xt), e.join(':')),
            (this._lastClick = t);
        }
      },
      _isTrackingClick: function (e) {
        var n;
        if (t.ymDisabledClickmap || v.isMetrikaPlayer() || !e.el) return !1;
        var r = e.el.tagName;
        if (
          ((2 == e.button || 3 == e.button) && 'A' != r) ||
          (this.filter && !this.filter(e.el, r))
        )
          return !1;
        for (n = 0; n < this._ignoreTags.length; n++)
          if (this._ignoreTags[n] == r) return !1;
        for (r = e.el; r; ) {
          if (this._isIgnore(r)) return !1;
          r = r.parentNode;
        }
        if (this._lastClick) {
          if (e.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
          (r = Math.abs(this._lastClick.pos[0] - e.pos[0])),
            (n = Math.abs(this._lastClick.pos[1] - e.pos[1]));
          var i = e.time - this._lastClick.time;
          if (
            this._lastClick.el == e.el &&
            r < this.DELTA_SAME_CLICKS &&
            n < this.DELTA_SAME_CLICKS &&
            i < this.TIMEOUT_SAME_CLICKS
          )
            return !1;
        }
        if (this.hasQuota) {
          if (!this._quota) return !1;
          this._quota--;
        }
        return !0;
      },
      _getElPath: function (t) {
        for (
          var e = '';
          t && t.parentNode && 'BODY' != t.tagName && 'HTML' != t.tagName;

        )
          (e += this._cacheTags[t.tagName] || '*'),
            (e += F.getElementNeighborPosition(t) || ''),
            (t = t.parentNode);
        return v.trim(e, this.MAX_LEN_PATH);
      },
    }),
    Lt = y.inherit({
      injectHash: {
        Wjw75ghm7fa7JW8p:
          'https://yastatic.net/metrika-static-watch/assessor-init.js',
        Z4RhWJNDJanzkGJa:
          'https://yastatic.net/metrika-static-watch/assessor-compare.js',
      },
      ASSESSOR_COOKIE: 'assessor',
      REMOTE_CONTROL: 'i',
      getInjectHash: function () {
        var t = {};
        return (
          v.forEachKey(
            this.injectHash,
            function (e) {
              t[re + '' + v.fnv32a(e)] = this.injectHash[e];
            },
            this
          ),
          t
        );
      },
      checkAssessor: function () {
        var e = [],
          n = this.getInjectHash();
        return (
          v.forEachKey(
            n,
            function (r) {
              (new RegExp(r).test(t.location.hash) ||
                L.get(this.ASSESSOR_COOKIE + r)) &&
                (L.set(this.ASSESSOR_COOKIE + r), e.push(n[r]));
            },
            this
          ),
          e
        );
      },
      _initComponent: function () {
        var e = this.checkAssessor();
        this.globalConfig.get(this.REMOTE_CONTROL) ||
          (this.globalConfig.set(this.REMOTE_CONTROL, !0),
          Lt.superclass._initComponent.apply(this, arguments),
          (this._executedMsgs = {}),
          b.on(t, 'message', this._onMessage, this),
          e.length &&
            (this.globalConfig.set('oo', !0),
            this.globalConfig.get('stopRecoder', function () {})(),
            v.arrayEvery(e, function (e) {
              return F.loadScript({ src: e }, t), 1;
            })));
      },
      _buildRemoteIframe: function (n) {
        var r = v.getNativeFunction('createElement', e)('div'),
          i = F.getBody() || e.documentElement;
        if (i) {
          r.innerHTML =
            '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
          var o = r.firstChild;
          (o.onload = function () {
            F.loadScript({ src: n }, o.contentWindow);
          }),
            (t._ym__remoteIframeEl = o),
            r.createShadowRoot || r.webkitCreateShadowRoot
              ? (i.appendChild(r),
                r.removeChild(o),
                (i = r.createShadowRoot
                  ? r.createShadowRoot()
                  : r.webkitCreateShadowRoot()) && i.appendChild(o),
                (t._ym__remoteIframeContainer = r))
              : (i.appendChild(o), (t._ym__remoteIframeContainer = o));
        }
      },
      _isAllowedLang: function (t) {
        return -1 !== v.arrayIndexOf('ru uk en tr es de'.split(' '), t);
      },
      _isAllowedOrigin: function (t) {
        return /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/.test(t);
      },
      _isAllowedStatic: function (t) {
        return /^(([\w\-.]+\.)?dev\.webvisor\.com|yastatic\.net|([\w\-.]+\.)?s3\.(mds\.)?yandex\.net)$/.test(
          t
        );
      },
      _onMessage: function (e) {
        try {
          var n = e.origin;
        } catch (t) {}
        n &&
          this._isAllowedOrigin(n) &&
          (n = M.parse(e.data)) &&
          'appendremote' === n.action &&
          this._isAllowedStatic(v.parseUrl(n.domain).host) &&
          this._isAllowedLang(n.lang) &&
          !this._executedMsgs[n.id] &&
          ((this._executedMsgs[n.id] = !0),
          (t._ym__postMessageEvent = e),
          (t._ym__inpageMode = n.inpageMode),
          (t._ym__initMessage = n.initMessage),
          this._buildRemoteIframe(
            n.domain +
              '/cdn/inpage-remote/' +
              (n.newScriptAddr ? '_inpage-remote_' : 'inpage-remote.') +
              n.lang +
              '.js'
          ));
      },
    }),
    Ft = {
      match: function () {
        this.enabled() &&
          b.ready(function () {
            var t = v.getNativeFunction('createElement', e)('iframe');
            (t.onload = function () {
              Tt.save('cm', _.getMinutes()), F.removeNode(t);
            }),
              (t.style.display = 'none'),
              (t.src = 'https://mc.yandex.ru/metrika/watch_match.html'),
              e.documentElement.appendChild(t);
          });
      },
      enabled: function () {
        return 1440 < _.getMinutes() - Tt.getNum('cm') && 'tr' === v.getTld();
      },
    };
  r(
    function () {
      !(function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var i = (n[r] = { i: r, l: !1, exports: {} });
          return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
        }
        var n = {};
        (e.m = t),
          (e.c = n),
          (e.d = function (t, n, r) {
            e.o(t, n) ||
              Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r,
              });
          }),
          (e.n = function (t) {
            var n =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return e.d(n, 'a', n), n;
          }),
          (e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (e.p = ''),
          e((e.s = 3));
      })({
        0: function (t, e, n) {
          (e.__esModule = !0),
            (e.listToArray = function (t) {
              return t ? [].slice.call(t) : [];
            });
        },
        1: function (t, e, n) {
          e.__esModule = !0;
          var r = ['.googlesyndication.com/', '/googleads'];
          e.isGoogleSrc = function (t) {
            return !(
              !t ||
              !r.filter(function (e) {
                return 0 < t.indexOf(e);
              }).length
            );
          };
        },
        3: function (e, n, r) {
          (n.__esModule = !0),
            (e = { detectAd: r(4).detectAd }),
            t.Ya
              ? t.Ya.AdDetector
                ? (e = t.Ya.AdDetector)
                : (t.Ya.AdDetector = e)
              : (t.Ya = { AdDetector: e }),
            (n.AdDetector = e);
        },
        34: function (t, e, n) {
          (e.__esModule = !0),
            (e.getParentElementsCount = function (t) {
              for (var e = 0; ; ) {
                if (!(t = t.parentElement)) return e;
                e++;
              }
            });
        },
        4: function (n, r, i) {
          r.__esModule = !0;
          var o = i(5),
            a = i(9),
            s = i(34),
            c = i(6),
            u = e.body,
            l = e.documentElement;
          r.detectAd = function () {
            var e = t.pageYOffset || l.scrollTop || u.scrollTop,
              n = t.pageXOffset || l.scrollLeft || u.scrollLeft,
              r = l.clientTop || u.clientTop || 0,
              i = l.clientLeft || u.clientLeft || 0,
              h = l.scrollWidth || l.offsetWidth || t.innerWidth,
              f = l.scrollHeight || l.offsetHeight || t.innerHeight,
              d = c.getFrienlyWindowsTree(t),
              p = [];
            c.windowsTreeEach(d, function (t) {
              var e = t.window,
                n = t.parent,
                r =
                  0 <
                  o.getParentFriendlyIFrames(e.document.documentElement).length,
                i = a.getAdsInWindow(e, { isInIFrame: r });
              if (((r = i.adElements), (i = i.iframeProviders), n)) {
                var s = e.frameElement,
                  c = p.filter(function (t) {
                    return t.windowsTree === n;
                  })[0].adElements;
                i.forEach(function (t) {
                  c.push({ provider: t, element: s });
                });
              }
              p.push({ windowsTree: t, adElements: r });
            }),
              p.forEach(function (t) {
                t.adElements = t.adElements.sort(function (t, e) {
                  return (
                    s.getParentElementsCount(t.element) -
                    s.getParentElementsCount(e.element)
                  );
                });
              });
            var m = [],
              g = [];
            return (
              p.forEach(function (t) {
                var e = t.windowsTree,
                  n = e.parent;
                t = t.adElements;
                var r = (e = o.getParentFriendlyIFrames(
                  e.window.document.documentElement
                ))[e.length - 1];
                t.forEach(function (t) {
                  var e = t.element;
                  g.push({ provider: t.provider, element: n ? r : e });
                });
              }),
              g.forEach(function (t) {
                var o = t.element,
                  a = o.getBoundingClientRect(),
                  s = a.top + e - r;
                a = a.left + n - i;
                var c = o.clientWidth,
                  u = a + c,
                  l = s + (o = o.clientHeight),
                  d = 0 > a ? 0 : a < h ? a : h,
                  p = 0 > s ? 0 : s < f ? s : f;
                100 <=
                  ((u > h ? h : u > d ? u : d) - d) *
                    ((l > f ? f : l > p ? l : p) - p) &&
                  m.push({
                    top: s,
                    left: a,
                    width: c,
                    height: o,
                    provider: t.provider,
                  });
              }),
              {
                page: { width: h, height: f },
                window: {
                  top: e,
                  left: n,
                  width: t.innerWidth,
                  height: t.innerHeight,
                },
                ads: m,
              }
            );
          };
        },
        5: function (t, e, n) {
          (e.__esModule = !0),
            (e.getParentFriendlyIFrames = function (t) {
              for (var e = []; ; )
                try {
                  if (!(t = t.ownerDocument.defaultView.frameElement)) return e;
                  e.push(t);
                } catch (t) {
                  return e;
                }
            });
        },
        6: function (t, e, n) {
          e.__esModule = !0;
          var r = n(7),
            i = n(0);
          (e.getFrienlyWindowsTree = function t(e, n) {
            var o = { window: e, children: [], parent: n };
            return (
              (o.children = (function (t) {
                return i
                  .listToArray(t.document.getElementsByTagName('iframe'))
                  .filter(function (t) {
                    if (r.isSafari) return !1;
                    try {
                      return t.contentWindow.document;
                    } catch (t) {
                      return !1;
                    }
                  })
                  .map(function (t) {
                    return t.contentWindow;
                  });
              })(e).map(function (e) {
                return t(e, o);
              })),
              o
            );
          }),
            (e.windowsTreeEach = function t(e, n) {
              n(e),
                e.children.forEach(function (e) {
                  return t(e, n);
                });
            });
        },
        7: function (t, e, n) {
          (e.__esModule = !0), (t = n(8)), (e.isSafari = t.isSafari());
        },
        8: function (t, e, n) {
          (e.__esModule = !0),
            (e.isSafari = function () {
              var t = navigator.userAgent.toLowerCase();
              return (
                -1 !== t.indexOf('safari') &&
                -1 === t.indexOf('chrome') &&
                -1 === t.indexOf('android')
              );
            });
        },
        9: function (t, e, n) {
          e.__esModule = !0;
          var r = n(0),
            i = n(1);
          e.getAdsInWindow = function (t, e) {
            function n(t, e) {
              e.forEach(function (e) {
                h.push({ provider: t, element: e });
              });
            }
            var o = e.isInIFrame,
              a = t.document.body,
              s = r.listToArray(a.querySelectorAll('img')),
              c = r.listToArray(a.querySelectorAll('iframe')),
              u = r.listToArray(a.querySelectorAll('script')),
              l = r.listToArray(a.querySelectorAll('div')),
              h = [],
              f = [],
              d = r.listToArray(a.querySelectorAll('yatag')),
              p = r.listToArray(a.querySelectorAll('yatag yatag'));
            return (
              n(
                'yandex',
                d.filter(function (t) {
                  return -1 === p.indexOf(t);
                })
              ),
              n(
                'adriver',
                c.filter(function (t) {
                  return (t = t.src) && -1 < t.indexOf('.adriver.ru/');
                })
              ),
              n(
                'adfox',
                c.filter(function (t) {
                  return (t = t.id) && -1 < t.toLowerCase().indexOf('adfox');
                })
              ),
              n(
                'adfox',
                s.filter(function (t) {
                  return (t = t.src) && -1 < t.indexOf('/banners.adfox.ru/');
                })
              ),
              n(
                'adfox',
                l.filter(function (t) {
                  return -1 < t.id.indexOf('AdFox_banner_');
                })
              ),
              o &&
                s.filter(function (t) {
                  return (t = t.src) && -1 < t.indexOf('.adfox.ru/');
                }).length &&
                f.push('adfox'),
              c
                .filter(function (t) {
                  return i.isGoogleSrc(t.src);
                })
                .forEach(function (t) {
                  h.push({ provider: 'google', element: t });
                }),
              o &&
                u.filter(function (t) {
                  return i.isGoogleSrc(t.src);
                }).length &&
                f.push('google'),
              n(
                'awaps',
                c.filter(function (t) {
                  return (t = t.src) && -1 < t.indexOf('awaps.yandex.net/');
                })
              ),
              n(
                'criteo',
                c.filter(function (t) {
                  var e = t.src;
                  return (
                    (t = t.id),
                    !(
                      !e ||
                      !(
                        -1 < e.indexOf('.criteo.com/') ||
                        (t && -1 < t.indexOf('cto_iframe_'))
                      )
                    )
                  );
                })
              ),
              { adElements: h, iframeProviders: f }
            );
          };
        },
      });
    },
    '',
    !0
  )();
  var Ut,
    Bt,
    zt,
    Ht = function (e, n) {
      if (Math.random() < (n || 0.005) && !k.get('adDetect')) {
        k.set('adDetect', !0);
        var i = function (n) {
            var r = t.Ya.AdDetector.detectAd(),
              i = r.window,
              o = r.page;
            e.sendParams({
              __ym: {
                ads: {
                  w: { t: i.top, l: i.left, w: i.width, h: i.height },
                  p: { w: o.width, h: o.height },
                  a: v.map(function (t) {
                    return {
                      t: t.top,
                      l: t.left,
                      w: t.width,
                      h: t.height,
                      p: t.provider,
                    };
                  }, r.ads),
                  full: n ? 1 : 0,
                },
              },
            });
          },
          o = r(
            function () {
              b.un(t, 'load', o), i(!0);
            },
            '',
            !0
          );
        b.on(t, 'load', o), v.setTimeout(i, 1e4, 'AdDetector', !0);
      }
    },
    Vt = y.inherit({
      message: t.postMessage,
      spliter: ':',
      nameSpace: '__yminfo',
      pending: {},
      childs: {},
      isIframe: !1,
      parents: {},
      dataToSend: { parents: [], childs: [] },
      checkFrame: function (t) {
        try {
          var e = t && t.postMessage;
        } catch (t) {
          return !1;
        }
        return e;
      },
      checkChildrenData: function (t, e) {
        v.arrayEvery(
          this.dataToSend.childs,
          function (n) {
            return (
              -1 == v.arrayIndexOf(n.tryTo, e.counterId) &&
                (n.tryTo.push(e.counterId),
                v.mixin(n.data, { toCounter: e.counterId }),
                this.sendToIframe(t, n.data, function () {
                  n.sendedTo.push(e.counterId),
                    n.callback && n.callback(e, arguments);
                })),
              !0
            );
          },
          this
        );
      },
      checkParentData: function (t, e) {
        v.arrayEvery(
          this.dataToSend.parents,
          function (n) {
            return (
              -1 == v.arrayIndexOf(n.tryTo, e.counterId) &&
                (n.tryTo.push(e.counterId),
                v.mixin(n.data, { toCounter: e.counterId }),
                this.sendToIframe(t, n.data, function () {
                  n.sendedTo.push(e.counterId),
                    n.callback && n.callback(e, arguments);
                })),
              !0
            );
          },
          this
        );
      },
      getHandlers: function () {
        return {
          initToChild: [
            {
              fn: function (e, n) {
                e.source === t.top && this.trigger('parentConnect', e, n);
              },
            },
          ],
          initToParent: [
            {
              fn: function (t, e) {
                (this.childs[e.counterId] = { info: e, window: t.source }),
                  this.checkChildrenData(t.source, e);
              },
            },
          ],
          parentConnect: [
            {
              fn: function (t, e) {
                (this.parents[e.counterId] = { info: e, window: t.source }),
                  this.checkParentData(t.source, e);
              },
            },
          ],
        };
      },
      genMessage: function (t, e) {
        var n = { date: _.getMs(), key: Math.random(), dir: 0 };
        e && (n = { date: e[0], key: e[1], dir: e[2] }),
          v.mixin(t, { counterId: this.counterId, hid: this.hid });
        var r = { data: t };
        return (
          (r[this.nameSpace] = [this.nameSpace, n.date, n.key, n.dir].join(
            this.spliter
          )),
          { meta: n, string: M.stringify(r) }
        );
      },
      sendToIframe: function (t, e, n, r) {
        e = this.genMessage(e);
        var i = this,
          o = [e.meta.date, e.meta.key].join(this.spliter);
        this.checkFrame(t) &&
          (t.postMessage(e.string, '*'),
          (this.pending[o] = v.bind(n, r || this)),
          v.setTimeout(
            function () {
              delete i.pending[o];
            },
            5e3,
            this,
            'fc.toSendToIframe'
          ));
      },
      sendToChildren: function (t, e, n) {
        var r = this,
          i =
            this.dataToSend.childs.push({
              sendedTo: [],
              tryTo: [],
              callback: !!e && v.bind(e, n || this),
              data: t,
            }) - 1;
        v.forEachKey(
          this.childs,
          function (t) {
            return this.dataToSend.childs[i].tryTo.push(t), 1;
          },
          this
        ),
          v.keys(this.childs).length &&
            v.forEachKey(
              this.childs,
              function (e) {
                this.sendToIframe(
                  r.childs[e].window,
                  v.mixin(t, { toCounter: e }),
                  function (t) {
                    this.dataToSend.childs[i].sendedTo.push(e),
                      this.dataToSend.childs[i].callback &&
                        this.dataToSend.childs[i].callback(t);
                  },
                  this
                );
              },
              this
            );
      },
      sendToParents: function (e, n, r) {
        var i =
          this.dataToSend.parents.push({
            sendedTo: [],
            tryTo: [],
            callback: !!n && v.bind(n, r || this),
            data: e,
          }) - 1;
        v.forEachKey(
          this.parents,
          function (t) {
            return this.dataToSend.parents[i].tryTo.push(t), 1;
          },
          this
        ),
          v.keys(this.parents).length &&
            this.sendToIframe(
              t.parent,
              e,
              function (t) {
                v.forEachKey(
                  this.parents,
                  function (e) {
                    this.dataToSend.parents[i].sendedTo.push(e),
                      this.dataToSend.parents[i].callback &&
                        this.dataToSend.parents[i].callback(t);
                  },
                  this
                );
              },
              this
            );
      },
      addHandler: function (t, e, n) {
        this.handlers[t] || (this.handlers[t] = []),
          this.handlers[t].push({ fn: e, ctx: n });
      },
      destruct: function () {
        b.un(t, 'message', this.onMessage, this, {
          passive: !1,
          name: 'FrameConnector',
        }),
          (this.sendToIframe = function () {}),
          (this.parents = []),
          (this.pending = {}),
          (this.childs = {}),
          (this.dataToSend = { parents: [], childs: [] });
      },
      _initComponent: function () {
        var e = t.document.getElementsByTagName('iframe'),
          n = 0;
        if (
          (Vt.superclass._initComponent.apply(this, arguments),
          (this.handlers = v.mixin({}, this.getHandlers())),
          (this.isIframe = A.isIframe()),
          this.message)
        ) {
          for (n = 0; n < e.length; n++) {
            !(function (t, e) {
              t.sendToIframe(
                e.contentWindow,
                { type: 'initToChild' },
                function (n) {
                  t.childs[n.counterId] = { info: n, window: e.contentWindow };
                }
              );
            })(this, e[n]);
          }
          this.isIframe &&
            this.sendToIframe(t.parent, { type: 'initToParent' }, function (e) {
              this.trigger('parentConnect', { source: t.parent }, e);
            }),
            b.on(t, 'message', this.onMessage, this, {
              passive: !1,
              name: 'FrameConnector',
            });
        }
      },
      trigger: function (t, e, n) {
        var r = this;
        return v.map(function (t) {
          return (
            (t = t.fn.call(t.ctx || r, e, n) || {}),
            v.mixin(t, { counterId: r.counterId, hid: r.hid })
          );
        }, this.handlers[t]);
      },
      DIR_INDEX: 2,
      onMessage: function (t) {
        var e,
          n = [];
        try {
          var r = t.data,
            i = (r = M.parse(t.data))[this.nameSpace];
        } catch (t) {
          return;
        }
        if (
          i &&
          i.substring &&
          i.substring(0, this.nameSpace.length) == this.nameSpace
        ) {
          for (e = 0; 3 >= e; e++) {
            var o = v.arrayIndexOf(i, this.spliter);
            -1 !== o ? n.push(i.substring(0, o)) : n.push(i),
              (i = i.substring(o + 1));
          }
          if (
            ((e = n.splice(1, 3)),
            (r = r.data) &&
              r.type &&
              this.handlers[r.type] &&
              '0' === e[this.DIR_INDEX])
          ) {
            if (!r.toCounter || r.toCounter == this.counterId) {
              try {
                t.source;
              } catch (t) {
                return;
              }
              r.counterId &&
                this.checkFrame(t.source) &&
                ((o = this.trigger(r.type, t, r)),
                t.source.postMessage(
                  this.genMessage(o, [e[0], e[1], r.counterId]).string,
                  '*'
                ));
            }
          } else
            e[this.DIR_INDEX] == this.counterId &&
              v.isArray(r) &&
              v.arrayEvery(r, function (t) {
                return t.counterId && t.hid;
              }) &&
              (t = this.pending[[e[0], e[1]].join(this.spliter)]) &&
              t.apply(this, r);
        }
      },
    }),
    Gt = s(),
    Wt = _.getTimezone(),
    qt = _.getTimestamp(),
    Kt = t.screen,
    Yt = 64,
    Xt = A.isIE() ? 512 : 2048,
    $t = A.isIE() ? 512 : 2048,
    Jt = A.isIE() ? 100 : 400,
    Zt = 100,
    Qt = 'noindex',
    te = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
    ee = new q({ sampling: 0.01 }),
    ne = +new Date(),
    re = '1892';
  k
    .init()
    .setSafe('counters', {})
    .setSafe('hitParam', {})
    .setSafe('counterNum', 0)
    .setSafe('dataLayer', [])
    .setSafe('hitId', v.random(1, 1073741824))
    .setSafe('_globalMetrikaHitId', v.random())
    .setSafe('v', re),
    (U.globalConfig = k),
    (Ut = 'Metrika2'),
    (t.Ya[Ut] = function (i, o, a, c) {
      var u = this;
      return r(function () {
        function d(t) {
          var n,
            r,
            i = e.referrer || '';
          if (new RegExp('^https?://' + Gt.host + '/').test(i)) return !1;
          var o = t.patterns;
          for (n = 0; n < o.length; n++) {
            var a = new RegExp(o[n], 'i');
            if (i.match(a)) {
              if (!(a = t.params || []).length) return !0;
              var s = v.safeDecodeURIComponent(
                (RegExp.$1 || '').replace(/\+/g, '%20')
              );
              for (r = 0; r < a.length; r++)
                if (s == v.safeDecodeURIComponent(a[r])) return !0;
            }
          }
          return !1;
        }
        function m(t, n) {
          var r,
            i = !1;
          if (t && 'string' != typeof t && t.length)
            for (r = 0; r < t.length; r++) {
              var o = t[r].selector,
                a = t[r].text,
                s = o.charAt(0);
              if (((o = o.slice(1)), '#' == s))
                (s = e.getElementById(o)) &&
                  ((i = !0),
                  n && ot.unshift([s, s.innerHTML]),
                  (s.innerHTML = a));
              else if ('.' == s)
                for (
                  s = F.getElementsByClassName(o), o = 0;
                  o < s.length;
                  o++
                ) {
                  i = !0;
                  var c = s[o],
                    u = a;
                  n && ot.unshift([c, c.innerHTML]), (c.innerHTML = u);
                }
            }
          return i;
        }
        function g() {
          var t;
          for (t = 0; t < ot.length; t++) ot[t][0].innerHTML = ot[t][1];
        }
        function y(t, e) {
          var n,
            r = '';
          if (
            ((t = t && t.replace(/^\?/, '')),
            (e = (e && e.replace(/^#/, '')) || ''),
            t)
          ) {
            var i = t.split('&');
            for (n = 0; n < i.length; n++) {
              var o = i[n].split('=');
              '_openstat' === o[0] && (r = o[1]);
            }
          }
          var a = e.split('?');
          for (n = 0; n < a.length; n++) {
            var s = a[n].split('&');
            for (i = 0; i < s.length; i++)
              '_openstat' === (o = s[i].split('='))[0] && (r = o[1]);
          }
          return (
            r &&
              (r =
                -1 < r.indexOf(';')
                  ? v.safeDecodeURIComponent(r)
                  : j.decode(
                      D.decode(
                        r.replace(/[-*_]/g, function (t) {
                          return { '*': '+', '-': '/', _: '=' }[t] || t;
                        })
                      )
                    )),
            r && 4 == (n = r.split(';')).length
              ? { service: n[0], campaign: n[1], ad: n[2], source: n[3] }
              : null
          );
        }
        function w(t, e, n) {
          return r(function () {
            if (!u.isDestructing())
              return (
                n && ee.log('privateFields', e, i, 1), t.apply(this, arguments)
              );
          }, e || '');
        }
        function E() {
          var s = !1,
            l = !1;
          if (
            (nt || ((l = B.initCookie(Z)), (U.userInfo = B._userID), G.init(k)),
            U.initPU(ut, k),
            A.isAndroidWebView() || U.initPP(k),
            B.retransmit(k),
            tt && Rt.init(tt, ct, i),
            k.get('pri') != n ||
              A.isAndroidWebView() ||
              (k.setSafe('pri', null),
              A.isPrivate(
                r(function (t) {
                  k.set('pri', t);
                }, 'privCb')
              )),
            gt.subscribe(st),
            k.get('hitParam')[st])
          ) {
            if (1 != a || k.get('counters')[st]) return !1;
            s = !0;
          }
          if (
            ((k.get('counters')[st] = u),
            (k.get('hitParam')[st] = 1),
            v.async(
              function () {
                U.initFip(k);
              },
              this,
              'initFip'
            ),
            (u._webvisor = K.webvisor || !1),
            (u._directCampaign = K.directCampaign),
            K.trackHash && P(!0),
            !s)
          ) {
            (H = new mt({
              protocol: 'https:',
              globalConfig: k,
              counterId: i,
              counterType: a,
              hid: ct,
              tz: Wt,
              ts: qt,
              url: Gt.href,
              enabled: u._webvisor,
              trustedDomains: K.trustedDomains,
              childIframe: K.childIframe,
            })),
              u.replacePhones();
            (s = new wt({ globalConfig: k })).sync(function (r) {
              var s = new bt({
                  protocol: 'https:',
                  counterType: a,
                  counterId: i,
                  trackHash: _t,
                  hitId: ct,
                  webvisor: u._webvisor,
                  counter: u,
                  globalConfig: k,
                  counterNum: lt,
                }),
                h = {
                  ut: V,
                  re: l,
                  he: ~~K.httpError,
                  ad: 1 == a && t.Ya && t.Ya.Direct,
                  pv: !0,
                  cpf: A.isChromePdf(),
                  saveRef: !0,
                };
              (Bt = +new Date()),
                s.sendHit({
                  url: rt,
                  referrer: it,
                  title: F.getDocumentTitle(),
                  vParams: o,
                  userParams: Q,
                  nohit: c,
                  experiments: et,
                  modes: h,
                  visitColor: H.getVc(),
                  hasPrerender: J,
                  ts: qt,
                  tz: Wt,
                  callback: function (s, l) {
                    zt || (zt = +new Date()), c || (J = !1);
                    var h = '0' !== (s = s || {}).pcs;
                    if (
                      (ht(v.bind(kt, null, s)),
                      h || U.initZZ(),
                      s.eu !== n && k.set('isEU', s.eu),
                      Tt.init(l),
                      Ft.match(),
                      St.sync(i, a, h, k),
                      c ||
                        at.log(
                          'PageView. Counter ',
                          i,
                          '. URL: ',
                          Gt.href,
                          '. Referrer: ' + e.referrer,
                          '. Params: ',
                          o
                        ),
                      s.webvisor && (s.webvisor.isEU = k.get('isEU')),
                      !u.isDestructing())
                    ) {
                      H.start(s.webvisor, s.publisher);
                      var f = s.mp2;
                      if (
                        ((h = new L({ counterId: i })).erase('mp2_substs'), f)
                      ) {
                        t: {
                          var p,
                            _ = f.conditions;
                          if (_ && _.length)
                            for (p = 0; p < _.length; p++) {
                              var w = _[p];
                              if ('ref' == w.type) w = d(w);
                              else if ('adv' == w.type) {
                                var E,
                                  x = w,
                                  T = t.Ya._metrika.counter._directCampaign,
                                  S = x.ServiceNamePattern,
                                  A = x.RefererPattern;
                                w = T ? x.direct_orders : x.direct_camp;
                                var I = e.referrer,
                                  C = O.parse(Gt.search),
                                  P = y(Gt.search, Gt.hash),
                                  N = {},
                                  M = [
                                    'source',
                                    'medium',
                                    'campaign',
                                    'term',
                                    'content',
                                  ];
                                for (E = 0; E < M.length; E++)
                                  C['utm_' + M[E]] &&
                                    (N[M[E]] = C['utm_' + M[E]]);
                                var R = T
                                  ? 'direct.yandex.ru'
                                  : (P && P.service) || N.source;
                                if (!(E = !1) && S && S.length)
                                  for (M = 0; M < S.length; M++)
                                    if (new RegExp(S[M], 'i').test(R)) {
                                      E = !0;
                                      break;
                                    }
                                if (!E && !x.yandex_direct && A && A.length)
                                  for (S = 0; S < A.length; S++)
                                    if (new RegExp(A[S], 'i').test(I)) {
                                      E = !0;
                                      break;
                                    }
                                if (
                                  (!E &&
                                    x.google_adwords &&
                                    C.gclid &&
                                    (E = !0),
                                  E &&
                                    w &&
                                    w.length &&
                                    ((E = !1),
                                    (T =
                                      T ||
                                      (P && P.campaign) ||
                                      (N && N.campaign))))
                                )
                                  for (x = 0; x < w.length; x++)
                                    if (w[x] == T) {
                                      E = !0;
                                      break;
                                    }
                                w = E;
                              } else w = !1;
                              if (w) {
                                _[p].track_id &&
                                  h.create('mp2_track', _[p].track_id, 43200);
                                break t;
                              }
                            }
                        }
                        (_ = h.read('mp2_track')),
                          (f = f.substs && f.substs[_]),
                          _ && f
                            ? (h.create('mp2_substs', v.toJSON(f)),
                              (h = m(f)),
                              u.params(
                                '__ym',
                                h ? 'mp_trackid' : 'mp_trackid_bad',
                                _
                              ))
                            : g();
                      } else g();
                      b.on(t, 'load', u.replacePhones, u);
                    }
                    (u._inited = !0), r && r();
                  },
                });
            });
          }
          T(!1),
            b.on(e, 'click', S, null, { name: 'extLinkClick' }),
            0 != v.keys(K).length &&
              (Pt && Pt.initUserLayer(),
              K.enableAll
                ? (T(!0), I(!0), C())
                : (K.clickmap && I(K.clickmap),
                  K.trackLinks && T(K.trackLinks),
                  K.accurateTrackBounce && C(K.accurateTrackBounce)),
              K.triggerEvent &&
                v.async(
                  function () {
                    At.dispatchCustomEvent('yacounter' + i + 'inited');
                  },
                  this,
                  'yacounterInit'
                ));
        }
        function x(t) {
          var e = new Mt({
            frameConnector: ut,
            globalConfig: k,
            initCounter: E,
            disable: K.yaDisableGDPR,
          });
          u._isDestructing || ((J = t), e.handle.apply(e, arguments));
        }
        function T(t) {
          var e = {};
          switch (typeof t) {
            case 'string':
            case 'object':
              e.on = !0;
              break;
            case 'boolean':
              e.on = t;
              break;
            default:
              return;
          }
          u._trackLinks = e;
        }
        function S(t) {
          if (u._trackLinks && u._trackLinks.on) {
            t = A.findTarget(t);
            var e = A.getLinkComponents(t),
              n = e.href,
              r = k.get('pai', v.noop)();
            if (n && !F.classNameExists(t, 'ym-disable-tracklink')) {
              var i = e.protocol + '//' + e.hostname + e.pathname;
              r = { pai: r && r + '-' + ct, ln: !0 };
              var o = l(t);
              if (
                ((o = n === o ? '' : o),
                F.classNameExists(t, 'ym-external-link'))
              )
                ft.sendClickLink({ url: n, title: o, modes: r }, rt);
              else {
                var a = K.url ? v.parseUrl(rt).hostname : s().hostname;
                (r.dl = te.test(i) || te.test(n) || h(n, vt) || h(i, vt)),
                  (e = e.hostname),
                  (a ? a.replace(/^www\./, '') : '').toLowerCase() ==
                  (e ? e.replace(/^www\./, '') : '').toLowerCase()
                    ? r.dl
                      ? ((r.ln = !1),
                        ft.sendClickLink({ url: n, title: o, modes: r }, rt))
                      : ((o = l(t)),
                        pt.set('pai', r.pai),
                        o && o !== n && pt.set('il', v.trim(o, Zt)))
                    : (n && -1 !== n.search(/^ *(data|javascript):/i)) ||
                      ((r.ut = Qt),
                      ft.sendClickLink({ url: n, title: o, modes: r }, rt));
              }
            }
          }
        }
        function I(t) {
          void 0 === t && (t = !0),
            !0 === t && (t = {}),
            u._clickmap && u._clickmap.destroy(),
            t &&
              (u._clickmap = new jt({
                globalConfig: k,
                filter: t.filter,
                ignoreTags: t.ignoreTags,
                quota: t.quota,
                isTrackHash: t.isTrackHash,
                protocol: 'https:',
                counterId: i,
                counterType: a,
                startTime: ne,
              }));
        }
        function C(n) {
          var r = K.referrer ? it : e.referrer,
            o = K.url ? rt : s().href;
          if (('number' != typeof n && (n = 15e3), !u._isAccurateTrackBounce)) {
            u._isAccurateTrackBounce = !0;
            var a = new R({ counterId: i }),
              c = a.get('lastHit');
            a.set('lastHit', _.getMs()),
              (((a = a.get('lastHit')) && (!c || c < a - 18e5)) ||
                !(function (t, e) {
                  function n(t) {
                    return (t = (t = (t = t.split(':'))[1] || '')
                      .replace(/^\/*/, '')
                      .replace(/^www\./, '')).split('/')[0];
                  }
                  return t && e ? n(t) == n(e) : !t && !e;
                })(r, o) ||
                0.1 > Math.random()) &&
                (function (n, r) {
                  function i() {
                    if (!d) {
                      f && v.clearTimeout(f);
                      var t = u ? l : l + +new Date() - h;
                      0 > (t = r - t) && (t = 0),
                        (f = v.setTimeout(
                          function () {
                            (d = !0), a(!1), n();
                          },
                          t,
                          'trackUserTime'
                        ));
                    }
                  }
                  function o() {
                    c || ((s = !0), (u = !1), (c = !0), i());
                  }
                  function a(t) {
                    var e;
                    for (e = 0; e < p.length; e += 3)
                      t
                        ? b.on(p[e], p[e + 1], p[e + 2], { name: 'tabTrack' })
                        : b.un(p[e], p[e + 1], p[e + 2]);
                  }
                  var s = !1,
                    c = !1,
                    u = !0,
                    l = 0,
                    h = +new Date(),
                    f = null,
                    d = !1;
                  if (A.isIE()) v.setTimeout(n, r, 'trackUserTime');
                  else {
                    var p = [
                      t,
                      'blur',
                      function () {
                        (u = s = c = !0),
                          (l += +new Date() - h),
                          (h = +new Date()),
                          i();
                      },
                      t,
                      'focus',
                      function () {
                        s || c || (l = 0),
                          (h = +new Date()),
                          (s = c = !0),
                          (u = !1),
                          i();
                      },
                      e,
                      'click',
                      o,
                      e,
                      'mousemove',
                      o,
                      e,
                      'keydown',
                      o,
                      e,
                      'scroll',
                      o,
                    ];
                    a(!0), i();
                  }
                })(function () {
                  u.notBounce(), dt.init(0.002, $);
                }, n);
          }
        }
        function P(e) {
          !1 === e
            ? _t &&
              ('onhashchange' in t
                ? b.un(t, 'hashchange', N)
                : v.clearTimeout(yt),
              (_t = !1))
            : ((e = N),
              _t ||
                ('onhashchange' in t
                  ? b.on(t, 'hashchange', e)
                  : (function (t) {
                      var e = function () {
                          var t = s().hash.split('#')[1];
                          if (void 0 === t) return !1;
                          var e = t.indexOf('?');
                          return 0 < e && (t = t.substring(0, e)), t;
                        },
                        n = e();
                      !(function r() {
                        var i = e();
                        i !== n && (t(), (n = i)),
                          (yt = v.setTimeout(r, 200, 'trackHash'));
                      })();
                    })(e),
                (_t = !0))),
            ft.setTrackHash(_t),
            (u._trackHash = _t);
        }
        function N() {
          var e = {
            ut: V,
            ad: 1 == a && t.Ya && t.Ya.Direct,
            wh: !0,
            saveRef: !0,
            pv: !0,
          };
          (Y = It.lastReferrer = X),
            ft.sendAjaxHit({
              url: K.url ? rt : s().href,
              title: F.getDocumentTitle(),
              referrer: Y,
              modes: e,
            }),
            (X = s().href);
        }
        function z(t, e, n) {
          (t = Et.parseValidate(t, e)),
            (e = []),
            t &&
              (e.push(t),
              (n = n || {}),
              v.isFunction(n.callback) &&
                (e.push(n.callback), n.ctx && e.push(n.ctx))),
            e.length && u.params.apply(u, e);
        }
        var H,
          V = '',
          K = {},
          Y = '',
          X = (It.lastReferrer = Gt.href),
          $ = 0.002,
          J = !1;
        if (
          (k.setSafe('counter', u),
          p &&
            r(function () {
              throw p.error;
            }, 'include.' + p.scope)(),
          'object' == typeof i)
        ) {
          (K = i), (c = i.defer), (V = i.ut);
          var Z = i.ldc || 'uid';
          (a = i.type), (o = i.params);
          var Q = i.userParams,
            tt = i.tns,
            et = K.experiments,
            nt = K.nck,
            rt = i.url,
            it = i.referrer;
          i = i.id;
        }
        if (!t['disableYaCounter' + i]) {
          var ot = [];
          (rt = rt || s().href),
            (it = it || e.referrer),
            /^\d+$/.test((i = i || 0)) || (i = 0);
          var st = i + ':' + (a = a || 0);
          if (k.get('counters')[st])
            return (
              at.log('Duplicate counter ' + st + ' initialization'),
              k.get('counters')[st]
            );
          var ct = k.get('hitId'),
            ut = new Vt({ counterId: i, hid: ct });
          k.set('counterNum', k.get('counterNum') + 1);
          var lt = k.get('counterNum'),
            ht = (function (t, e) {
              var n = { s: new R(), k: t, c: e };
              return function (t) {
                return t(n);
              };
            })(st, u);
          ht(xt);
          var ft = new W({
              protocol: 'https:',
              counterType: a,
              counterId: i,
              hitId: ct,
              counter: u,
              globalConfig: k,
              counterNum: lt,
            }),
            dt = {
              init: function (e, r) {
                if (
                  t.performance &&
                  'function' == typeof performance.getEntriesByType
                ) {
                  e === n && (e = 1), r === n && (r = 1);
                  var i = Math.random() > e,
                    o = Math.random() > r;
                  if (!i || !o) {
                    var a,
                      s = {
                        1882689622: 1,
                        2318205080: 1,
                        3115871109: 1,
                        3604875100: 1,
                        339366994: 1,
                        2890452365: 1,
                        849340123: 1,
                        173872646: 1,
                        2343947156: 1,
                        655012937: 1,
                        1996539654: 1,
                        2065498185: 1,
                        823651274: 1,
                        12282461: 1,
                        1555719328: 1,
                        1417229093: 1,
                        138396985: 1,
                      },
                      c = performance.getEntriesByType('resource'),
                      u = {},
                      l = {},
                      h = {};
                    for (a = 0; a < c.length; a++) {
                      var f = c[a],
                        d = f.name.replace(/^https?:\/\//, '').split('?')[0],
                        p = v.fnv32a(d);
                      'script' !== f.initiatorType ||
                        i ||
                        (l[d] = {
                          dns: Math.round(
                            f.domainLookupEnd - f.domainLookupStart
                          ),
                          tcp: Math.round(f.connectEnd - f.connectStart),
                          duration: Math.round(f.duration),
                          response: Math.round(f.responseEnd - f.requestStart),
                          name: f.name,
                          decodedBodySize: f.decodedBodySize,
                        }),
                        !s[p] ||
                          u[d] ||
                          o ||
                          (u[d] = {
                            dns: Math.round(
                              f.domainLookupEnd - f.domainLookupStart
                            ),
                            tcp: Math.round(f.connectEnd - f.connectStart),
                            duration: Math.round(f.duration),
                            response: Math.round(
                              f.responseEnd - f.requestStart
                            ),
                            pages: Gt.href,
                          });
                    }
                    v.keys(u).length && (h.timings8 = u),
                      v.keys(l).length && (h.scripts = l),
                      v.keys(h).length &&
                        new q({ counterId: 51533966 }).logParams(h);
                  }
                }
              },
            };
          24226447 == i && ($ = 1),
            (u.replacePhones = w(function () {
              var t, e;
              try {
                (t = new L({ counterId: i }).read('mp2_substs')) &&
                  (e = M.parse(t)) &&
                  m(e, !0);
              } catch (t) {}
              return u;
            }, 'counter.replacePhones')),
            (u.reachGoal = w(function (t, e, r, o) {
              return (
                2 <= arguments.length &&
                  'function' == typeof e &&
                  ((o = r), (r = e), (e = n)),
                at.log(
                  'Reach goal. Counter: ' +
                    i +
                    '. Goal id: ' +
                    t +
                    '. Params: ',
                  e
                ),
                ft.sendGoal(t, {
                  url: K.url ? rt : s().href,
                  vParams: e,
                  callback: r,
                  ctx: o,
                }),
                u
              );
            }, 'counter.reachGoal')),
            (u.trackLinks = w(function (t) {
              return T(t), u;
            }, 'counter.trackLinks'));
          var pt = new R({ counterId: i });
          (u.hit = w(function (t, e, n, r, o, a) {
            return (
              (t = !(!t || !v.isFunction(t.toString)) && t.toString())
                ? (v.isObject(e) &&
                    ((n = e.referer),
                    (r = e.params),
                    (o = e.callback),
                    (a = e.ctx),
                    (e = e.title)),
                  (rt = t),
                  at.log(
                    'PageView. Counter ' + i,
                    '. URL: ' + t,
                    '. Referrer: ' + n,
                    '. Params: ',
                    r
                  ),
                  ft.sendHit({
                    url: t,
                    title: e,
                    hasPrerender: J,
                    referrer: n,
                    vParams: r,
                    callback: o,
                    ctx: a,
                  }),
                  (J = !1))
                : v.warning('Empty hit url'),
              u
            );
          }, 'counter.hit')),
            (u.params = w(function (t) {
              var e = arguments.length,
                n = e,
                r = [].slice.call(arguments, 0);
              if (t) {
                if (1 < arguments.length) {
                  if (v.isFunction(arguments[e - 1])) {
                    var o = arguments[e - 1];
                    n = e - 1;
                  } else if (v.isFunction(arguments[e - 2])) {
                    o = arguments[e - 2];
                    var a = arguments[e - 1];
                    n = e - 2;
                  }
                  1 < (r = [].slice.call(r, 0, n)).length &&
                    (r = [v.array2Props(r)]);
                }
                (e = -1 !== v.arrayIndexOf(v.keys(r[0]), '__ymu')),
                  (n =
                    -1 !== v.arrayIndexOf(v.keys(r[0]), '__ym') &&
                    r[0].__ym.user_id)
                    ? at.log('Set user id "' + r[0].__ym.user_id + '"')
                    : at.log(
                        (e ? 'User p' : 'P') +
                          'arams. Counter ' +
                          i +
                          '. Params: ',
                        r[0]
                      ),
                  ft.sendParams(r[0], o, a, K.url ? rt : s().href);
              } else v.warning('Wrong params');
              return u;
            }, 'counter.params')),
            ut.addHandler(
              'pluginInfo',
              function () {
                return K;
              },
              this
            ),
            ut.addHandler(
              'parentConnect',
              function (t, e) {
                ft.paramsQueue.push({
                  __ym: {
                    parentIframe: { counterId: e.counterId, hid: e.hid },
                  },
                });
              },
              this
            ),
            (u.file = w(function (t, e) {
              return (
                t
                  ? ((e = e || {}),
                    ft.sendFileUpload({
                      url: t,
                      title: e.title,
                      vParams: e.params,
                      callback: e.callback,
                      ctx: e.ctx,
                      referrer: K.url ? rt : s().href,
                    }))
                  : v.warning('Empty file url'),
                u
              );
            }, 'counter.file')),
            (u.extLink = w(function (t, e) {
              return (
                t
                  ? ((e = e || {}),
                    ft.sendExtLink(
                      {
                        url: t,
                        title: e.title,
                        vParams: e.params,
                        callback: e.callback,
                        ctx: e.ctx,
                        referrer: K.url ? rt : s().href,
                      },
                      rt
                    ))
                  : v.warning('Empty link'),
                u
              );
            }, 'counter.extLink')),
            (u.notBounce = w(function (t) {
              var e = 0;
              return (
                (t = t || {}),
                Bt && zt && (e = zt - Bt),
                ft.sendNotBounce(e, {
                  url: K.url ? rt : s().href,
                  callback: t.callback,
                  ctx: t.ctx,
                }),
                u
              );
            }, 'counter.notBounce'));
          var vt = [];
          (u.addFileExtension = w(function (t) {
            return t
              ? ('string' == typeof t ? vt.push(t) : (vt = vt.concat(t)), u)
              : (v.warning('Empty extension'), u);
          })),
            (u.clickmap = w(function (t) {
              return I(t), u;
            }, 'that.clickmap')),
            (u.accurateTrackBounce = w(function (t) {
              return C(t), u;
            }));
          var yt = null,
            _t = !1;
          u.trackHash = w(function (t) {
            return P(t), u;
          });
          var Et = {
            requiredEcommerceFields: ['currency', 'goods'],
            parseValidate: function (t, e) {
              var n,
                r = this.validate(t, e);
              if (!r.isValid) return console && console.log(r.message), !1;
              for (n in (((r = {})[t] = {}),
              e.currency && (r.currencyCode = e.currency),
              e.goods && (r[t].products = e.goods),
              e))
                e.hasOwnProperty(n) &&
                  -1 === v.arrayIndexOf(this.requiredEcommerceFields, n) &&
                  (r[t].actionField || (r[t].actionField = {}),
                  (r[t].actionField[n] = e[n]));
              return { __ym: { ecommerce: [r] } };
            },
            validate: function (t, e) {
              var n = !1,
                r = '';
              if (v.isObject(e))
                switch (t) {
                  case 'detail':
                  case 'add':
                  case 'remove':
                    v.isArray(e.goods) && e.goods.length
                      ? (n = v.arrayEvery(e.goods, function (t) {
                          return (
                            v.isObject(t) &&
                            (v.isString(t.id) ||
                              v.isNumber(t.id) ||
                              v.isString(t.name) ||
                              v.isString(t.name))
                          );
                        })) ||
                        (r =
                          "All items in 'goods' should be objects and contain 'id' or 'name' field")
                      : (r =
                          "Ecommerce data should contain 'goods' non-empty array");
                    break;
                  case 'purchase':
                    v.isNumber(e.id) || v.isString(e.id)
                      ? (n = !0)
                      : (r =
                          "Purchase object should contain string or number 'id' field");
                }
              else r = 'Ecommerce data should be an object';
              return { isValid: n, message: r };
            },
          };
          (u.ecommerceDetail = w(
            function (t, e) {
              return z('detail', t, e), u;
            },
            'ecommerce.detail',
            !0
          )),
            (u.ecommerceAdd = w(
              function (t, e) {
                return z('add', t, e), u;
              },
              'ecommerce.add',
              !0
            )),
            (u.ecommerceRemove = w(
              function (t, e) {
                return z('remove', t, e), u;
              },
              'ecommerce.remove',
              !0
            )),
            (u.ecommercePurchase = w(
              function (t, e) {
                return z('purchase', t, e), u;
              },
              'ecommerce.purchase',
              !0
            )),
            (u.userParams = w(function (t, e, n) {
              return (
                v.isObject(t)
                  ? u.params({ __ymu: t }, e || function () {}, n)
                  : v.warning('Wrong user params'),
                u
              );
            }, 'uparams')),
            (u.experiments = w(function (t, e, n) {
              return (
                ft.sendExperiments({ callback: e, ctx: n, experiments: t }), u
              );
            }, 'exps')),
            (u.id = u.setUserID = w(function (t, e, n) {
              return (
                v.isString(t) || v.isNumber(t)
                  ? u.params({ __ym: { user_id: t } }, e || function () {}, n)
                  : v.warning('Incorrect user ID'),
                u
              );
            }, 'id'));
          var Ot = new L();
          if (
            ((u.getClientID = w(function (t) {
              var e = Ot.read(Z);
              return t && v.isFunction(t) && t(e), e;
            }, 'guid')),
            (u.enableAll = w(
              function () {
                return T(!0), I(!0), C(), u;
              },
              'enableAll',
              !0
            )),
            (u.uploadPage = function () {}),
            (u.destruct = w(function () {
              (u._isDestructing = !0),
                b.un(e, 'click', S, null, { name: 'extLinkClick' }),
                b.un(t, 'load', u.replacePhones, u),
                P(!1),
                H && H.stop(),
                k.set('stopRecoder', n),
                k.set('counter', n),
                Pt && Pt.destruct && Pt.destruct(),
                I(!1);
              try {
                delete t['yaCounter' + i],
                  delete k.get('counters')[st],
                  delete k.get('hitParam')[st];
              } catch (t) {}
            })),
            (u.isDestructing = function () {
              return !!u._isDestructing;
            }),
            Ht(ft),
            (u._performanceTiming = f),
            i)
          ) {
            var Pt = new Ct({
              counter: u,
              counterId: i,
              globalConfig: k,
              frameConnector: ut,
              prefsEcommerce: K.ecommerce,
              prefsUseDataLayer: K.useDataLayer,
            });
            if (
              'prerender' === e.webkitVisibilityState ||
              'prerender' === e.visibilityState
            ) {
              ft.sendPrerenderHit({
                url: rt,
                vParams: o,
                title: F.getDocumentTitle(),
                referrer: e.referrer,
              });
              var Nt = function () {
                'prerender' !== e.webkitVisibilityState &&
                  'prerender' !== e.visibilityState &&
                  (b.un(e, 'webkitvisibilitychange,visibilitychange', Nt),
                  x(!0));
              };
              b.on(e, 'webkitvisibilitychange,visibilitychange', Nt);
            } else x(!1);
          }
        }
      }, 'init')();
    }),
    gt.init(Ut, k),
    new Lt({ globalConfig: k }),
    (t.Ya[Ut].counters = function () {
      var e = [];
      return (
        v.forEachKey(k.get('counters'), function (n, r) {
          var i = n.split(':');
          e.push({
            id: +i[0],
            type: +i[1],
            accurateTrackBounce: r._isAccurateTrackBounce,
            clickmap: r._clickmap && r._clickmap._start,
            oldCode: !!t.ya_cid,
            trackHash: !!r._trackHash,
            trackLinks: r._trackLinks && r._trackLinks.on,
            webvisor: !!r._webvisor,
          });
        }),
        e
      );
    }),
    k.setSafe('getCounters', function () {
      var e = [];
      return (
        v.forEachKey(k.get('counters'), function (n, r) {
          var i = n.split(':');
          e.push({
            id: +i[0],
            type: +i[1],
            accurateTrackBounce: r._isAccurateTrackBounce,
            clickmap: r._clickmap && r._clickmap._start,
            oldCode: !!t.ya_cid,
            trackHash: !!r._trackHash,
            trackLinks: r._trackLinks && r._trackLinks.on,
            webvisor: !!r._webvisor,
          });
        }),
        e
      );
    }),
    t.ya_cid &&
      t.Ya.Metrika &&
      new t.Ya.Metrika(t.ya_cid, t.ya_params, t.ya_class),
    t.ya_cid &&
      !t.ya_hit &&
      (t.ya_hit = function (e, n) {
        t.Ya._metrika.counter && t.Ya._metrika.counter.reachGoal(e, n);
      }),
    (function () {
      function e(e) {
        try {
          delete t[e];
        } catch (r) {
          t[e] = n;
        }
      }
      var r, i;
      i = 'yandex_metrika_callbacks2';
      var o,
        a = t[(r = 'yandex_metrika_callback2')],
        s = t[i];
      if (('function' == typeof a && a(), 'object' == typeof s)) {
        var c = s.length;
        for (a = 0; a < c; a++) (o = s[a]) && ((s[a] = null), o());
      }
      e(r), e(i);
    })(),
    (t.Ya[Ut].informer = function (e) {
      var n = !!t.Ya[Ut]._informer;
      (Ya[Ut]._informer = e),
        (Ya[Ut]._informer.domain = 'informer.yandex.ru'),
        n ||
          F.loadScript({
            src: 'https://informer.yandex.ru/metrika/informer.js',
          });
    }),
    b.on(
      e,
      'click',
      r(function (e) {
        var n = At.getTarget(e);
        if (
          n &&
          ('ym-advanced-informer' === n.className ||
            (n.classList && n.classList.contains('ym-advanced-informer')))
        ) {
          var r = n.getAttribute('data-lang'),
            i = n.getAttribute('data-cid');
          t.Ya[Ut].informer({ i: n, id: +i, lang: r }), At.prevent(e);
        }
      }, 'adv-inf'),
      null,
      { passive: !1 }
    );
})(this, this.document);
