module.exports = (function (e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  return (
    (t.m = e),
    (t.c = r),
    (t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.t = function (e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & r && 'string' != typeof e)
      )
        for (var o in e)
          t.d(
            n,
            o,
            function (r) {
              return e[r];
            }.bind(null, o)
          );
      return n;
    }),
    (t.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ''),
    t((t.s = 1))
  );
})([
  function (e, r) {
    e.exports = require('react');
  },
  function (e, r, t) {
    e.exports = t(2);
  },
  function (e, r, t) {
    'use strict';
    t.r(r);
    var n = t(0),
      o = function (e) {
        var r = e.url,
          t = e.method,
          n = e.params,
          o = e.headers,
          u = e.signal,
          i = 'POST' === t ? JSON.stringify(n) : null,
          c =
            'POST' === t
              ? r
              : r +
                (function (e) {
                  var r = '';
                  if (e && '{}' !== JSON.stringify(e)) {
                    for (var t in e)
                      [void 0, null].includes(e[t])
                        ? console.log('拦截到undefined')
                        : (r += t + '=' + e[t] + '&');
                    r = '?' + r.substr(0, r.length - 1);
                  }
                  return r;
                })(n);
        return fetch(c, { method: t, body: i, headers: o, signal: u })
          .then(function (e) {
            return e.json();
          })
          .catch(function (e) {
            return e;
          });
      };
    function u(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function i(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? u(Object(t), !0).forEach(function (r) {
              c(e, r, t[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : u(Object(t)).forEach(function (r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
      }
      return e;
    }
    function c(e, r, t) {
      return (
        r in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    function a(e, r) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, r) {
          if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var t = [],
            n = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var i, c = e[Symbol.iterator]();
              !(n = (i = c.next()).done) && (t.push(i.value), !r || t.length !== r);
              n = !0
            );
          } catch (e) {
            (o = !0), (u = e);
          } finally {
            try {
              n || null == c.return || c.return();
            } finally {
              if (o) throw u;
            }
          }
          return t;
        })(e, r) ||
        (function (e, r) {
          if (!e) return;
          if ('string' == typeof e) return f(e, r);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          'Object' === t && e.constructor && (t = e.constructor.name);
          if ('Map' === t || 'Set' === t) return Array.from(e);
          if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return f(e, r);
        })(e, r) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function f(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
      return n;
    }
    r.default = function (e) {
      var r = e.url,
        t = e.method,
        u = void 0 === t ? 'get' : t,
        c = e.params,
        f = void 0 === c ? {} : c,
        l = e.headers,
        s = e.loading,
        b = void 0 === s || s,
        d = Object(n.useRef)(),
        p = a(Object(n.useState)(!1), 2),
        y = p[0],
        O = p[1],
        v = a(Object(n.useState)(), 2),
        g = v[0],
        m = v[1],
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            (d.current = new AbortController()),
            b && O(!0),
            o({ url: r, method: u, params: i(i({}, f), e), headers: l, signal: d.current.signal })
              .then(function (e) {
                return b && O(!1), m(e), e;
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
              var e;
              null === (e = d.current) || void 0 === e || e.abort();
            }
          );
        }, []),
        [g, y, h]
      );
    };
  },
]);
//# sourceMappingURL=useFetch.js.map
