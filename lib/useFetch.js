module.exports = (function (r) {
  var e = {};
  function t(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return r[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  return (
    (t.m = r),
    (t.c = e),
    (t.d = function (r, e, n) {
      t.o(r, e) || Object.defineProperty(r, e, { enumerable: !0, get: n });
    }),
    (t.r = function (r) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(r, '__esModule', { value: !0 });
    }),
    (t.t = function (r, e) {
      if ((1 & e && (r = t(r)), 8 & e)) return r;
      if (4 & e && 'object' == typeof r && r && r.__esModule) return r;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: r }),
        2 & e && 'string' != typeof r)
      )
        for (var o in r)
          t.d(
            n,
            o,
            function (e) {
              return r[e];
            }.bind(null, o)
          );
      return n;
    }),
    (t.n = function (r) {
      var e =
        r && r.__esModule
          ? function () {
              return r.default;
            }
          : function () {
              return r;
            };
      return t.d(e, 'a', e), e;
    }),
    (t.o = function (r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }),
    (t.p = ''),
    t((t.s = 1))
  );
})([
  function (r, e) {
    r.exports = require('react');
  },
  function (r, e, t) {
    r.exports = t(2);
  },
  function (r, e, t) {
    'use strict';
    t.r(e);
    var n = t(0),
      o = function (r) {
        var e = r.url,
          t = r.method,
          n = r.params,
          o = r.headers,
          u = r.signal,
          i = 'POST' === t ? JSON.stringify(n) : null,
          c =
            'POST' === t
              ? e
              : e +
                (function (r) {
                  var e = '';
                  if (r && '{}' !== JSON.stringify(r)) {
                    for (var t in r) [void 0, null].includes(r[t]) || (e += t + '=' + r[t] + '&');
                    e = '?' + e.substr(0, e.length - 1);
                  }
                  return e;
                })(n);
        return fetch(c, { method: t, body: i, headers: o, signal: u })
          .then(function (r) {
            return r.json();
          })
          .catch(function (r) {
            return r;
          });
      };
    function u(r, e) {
      var t = Object.keys(r);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(r);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function i(r) {
      for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u(Object(t), !0).forEach(function (e) {
              c(r, e, t[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
          : u(Object(t)).forEach(function (e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
            });
      }
      return r;
    }
    function c(r, e, t) {
      return (
        e in r
          ? Object.defineProperty(r, e, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (r[e] = t),
        r
      );
    }
    function a(r, e) {
      return (
        (function (r) {
          if (Array.isArray(r)) return r;
        })(r) ||
        (function (r, e) {
          if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(r))) return;
          var t = [],
            n = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var i, c = r[Symbol.iterator]();
              !(n = (i = c.next()).done) && (t.push(i.value), !e || t.length !== e);
              n = !0
            );
          } catch (r) {
            (o = !0), (u = r);
          } finally {
            try {
              n || null == c.return || c.return();
            } finally {
              if (o) throw u;
            }
          }
          return t;
        })(r, e) ||
        (function (r, e) {
          if (!r) return;
          if ('string' == typeof r) return f(r, e);
          var t = Object.prototype.toString.call(r).slice(8, -1);
          'Object' === t && r.constructor && (t = r.constructor.name);
          if ('Map' === t || 'Set' === t) return Array.from(r);
          if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return f(r, e);
        })(r, e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function f(r, e) {
      (null == e || e > r.length) && (e = r.length);
      for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
      return n;
    }
    e.default = function (r) {
      var e = r.url,
        t = r.method,
        u = void 0 === t ? 'get' : t,
        c = r.params,
        f = void 0 === c ? {} : c,
        l = r.headers,
        s = r.loading,
        b = void 0 === s || s,
        d = Object(n.useRef)(),
        p = a(Object(n.useState)(!1), 2),
        y = p[0],
        O = p[1],
        v = a(Object(n.useState)(), 2),
        g = v[0],
        m = v[1],
        h = function () {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            (d.current = new AbortController()),
            b && O(!0),
            o({ url: e, method: u, params: i(i({}, f), r), headers: l, signal: d.current.signal })
              .then(function (r) {
                return b && O(!1), m(r), r;
              })
              .finally(function () {
                b && O(!1);
              })
          );
        };
      return (
        Object(n.useEffect)(function () {
          return (
            h(),
            function () {
              var r;
              null === (r = d.current) || void 0 === r || r.abort();
            }
          );
        }, []),
        [g, y, h]
      );
    };
  },
]);
//# sourceMappingURL=useFetch.js.map
