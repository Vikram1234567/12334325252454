! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 21)
}([function(t, e, n) {
    var r = e.global = n(24),
        i = e.hasBuffer = r && !!r.isBuffer,
        a = e.hasArrayBuffer = "undefined" != typeof ArrayBuffer,
        o = e.isArray = n(1);
    e.isArrayBuffer = a ? function(t) {
        return t instanceof ArrayBuffer || p(t)
    } : y;
    var s = e.isBuffer = i ? r.isBuffer : y,
        l = e.isView = a ? ArrayBuffer.isView || v("ArrayBuffer", "buffer") : y;
    e.alloc = d, e.concat = function(t, n) {
        n || (n = 0, Array.prototype.forEach.call(t, function(t) {
            n += t.length
        }));
        var r = this !== e && this || t[0],
            i = d.call(r, n),
            a = 0;
        return Array.prototype.forEach.call(t, function(t) {
            a += f.copy.call(t, i, a)
        }), i
    }, e.from = function(t) {
        return "string" == typeof t ? function(t) {
            var e = 3 * t.length,
                n = d.call(this, e),
                r = f.write.call(n, t);
            return e !== r && (n = f.slice.call(n, 0, r)), n
        }.call(this, t) : m(this).from(t)
    };
    var c = e.Array = n(26),
        h = e.Buffer = n(27),
        u = e.Uint8Array = n(28),
        f = e.prototype = n(6);

    function d(t) {
        return m(this).alloc(t)
    }
    var p = v("ArrayBuffer");

    function m(t) {
        return s(t) ? h : l(t) ? u : o(t) ? c : i ? h : a ? u : c
    }

    function y() {
        return !1
    }

    function v(t, e) {
        return t = "[object " + t + "]",
            function(n) {
                return null != n && {}.toString.call(e ? n[e] : n) === t
            }
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == n.call(t)
    }
}, function(t, e, n) {
    var r = n(1);
    e.createCodec = s, e.install = function(t) {
        for (var e in t) a.prototype[e] = o(a.prototype[e], t[e])
    }, e.filter = function(t) {
        return r(t) ? function(t) {
            return t = t.slice(),
                function(n) {
                    return t.reduce(e, n)
                };

            function e(t, e) {
                return e(t)
            }
        }(t) : t
    };
    var i = n(0);

    function a(t) {
        if (!(this instanceof a)) return new a(t);
        this.options = t, this.init()
    }

    function o(t, e) {
        return t && e ? function() {
            return t.apply(this, arguments), e.apply(this, arguments)
        } : t || e
    }

    function s(t) {
        return new a(t)
    }
    a.prototype.init = function() {
        var t = this.options;
        return t && t.uint8array && (this.bufferish = i.Uint8Array), this
    }, e.preset = s({
        preset: !0
    })
}, function(t, e, n) {
    var r = n(4).ExtBuffer,
        i = n(30),
        a = n(31),
        o = n(2);

    function s() {
        var t = this.options;
        return this.encode = function(t) {
            var e = a.getWriteType(t);
            return function(t, n) {
                var r = e[typeof n];
                if (!r) throw new Error('Unsupported type "' + typeof n + '": ' + n);
                r(t, n)
            }
        }(t), t && t.preset && i.setExtPackers(this), this
    }
    o.install({
        addExtPacker: function(t, e, n) {
            n = o.filter(n);
            var i = e.name;
            i && "Object" !== i ? (this.extPackers || (this.extPackers = {}))[i] = a : (this.extEncoderList || (this.extEncoderList = [])).unshift([e, a]);

            function a(e) {
                return n && (e = n(e)), new r(e, t)
            }
        },
        getExtPacker: function(t) {
            var e = this.extPackers || (this.extPackers = {}),
                n = t.constructor,
                r = n && n.name && e[n.name];
            if (r) return r;
            for (var i = this.extEncoderList || (this.extEncoderList = []), a = i.length, o = 0; o < a; o++) {
                var s = i[o];
                if (n === s[0]) return s[1]
            }
        },
        init: s
    }), e.preset = s.call(o.preset)
}, function(t, e, n) {
    e.ExtBuffer = function t(e, n) {
        if (!(this instanceof t)) return new t(e, n);
        this.buffer = r.from(e), this.type = n
    };
    var r = n(0)
}, function(t, e) {
    e.read = function(t, e, n, r, i) {
        var a, o, s = 8 * i - r - 1,
            l = (1 << s) - 1,
            c = l >> 1,
            h = -7,
            u = n ? i - 1 : 0,
            f = n ? -1 : 1,
            d = t[e + u];
        for (u += f, a = d & (1 << -h) - 1, d >>= -h, h += s; h > 0; a = 256 * a + t[e + u], u += f, h -= 8);
        for (o = a & (1 << -h) - 1, a >>= -h, h += r; h > 0; o = 256 * o + t[e + u], u += f, h -= 8);
        if (0 === a) a = 1 - c;
        else {
            if (a === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
            o += Math.pow(2, r), a -= c
        }
        return (d ? -1 : 1) * o * Math.pow(2, a - r)
    }, e.write = function(t, e, n, r, i, a) {
        var o, s, l, c = 8 * a - i - 1,
            h = (1 << c) - 1,
            u = h >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : a - 1,
            p = r ? 1 : -1,
            m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, o = h) : (o = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), (e += o + u >= 1 ? f / l : f * Math.pow(2, 1 - u)) * l >= 2 && (o++, l /= 2), o + u >= h ? (s = 0, o = h) : o + u >= 1 ? (s = (e * l - 1) * Math.pow(2, i), o += u) : (s = e * Math.pow(2, u - 1) * Math.pow(2, i), o = 0)); i >= 8; t[n + d] = 255 & s, d += p, s /= 256, i -= 8);
        for (o = o << i | s, c += i; c > 0; t[n + d] = 255 & o, d += p, o /= 256, c -= 8);
        t[n + d - p] |= 128 * m
    }
}, function(t, e, n) {
    var r = n(29);
    e.copy = l, e.slice = c, e.toString = function(t, e, n) {
        return (!o && i.isBuffer(this) ? this.toString : r.toString).apply(this, arguments)
    }, e.write = function(t) {
        return function() {
            return (this[t] || r[t]).apply(this, arguments)
        }
    }("write");
    var i = n(0),
        a = i.global,
        o = i.hasBuffer && "TYPED_ARRAY_SUPPORT" in a,
        s = o && !a.TYPED_ARRAY_SUPPORT;

    function l(t, e, n, a) {
        var o = i.isBuffer(this),
            l = i.isBuffer(t);
        if (o && l) return this.copy(t, e, n, a);
        if (s || o || l || !i.isView(this) || !i.isView(t)) return r.copy.call(this, t, e, n, a);
        var h = n || null != a ? c.call(this, n, a) : this;
        return t.set(h, e), h.length
    }

    function c(t, e) {
        var n = this.slice || !s && this.subarray;
        if (n) return n.call(this, t, e);
        var r = i.alloc.call(this, e - t);
        return l.call(this, r, 0, t, e), r
    }
}, function(t, e, n) {
    (function(t) {
        ! function(e) {
            var n, r = "undefined",
                i = r !== typeof t && t,
                a = r !== typeof Uint8Array && Uint8Array,
                o = r !== typeof ArrayBuffer && ArrayBuffer,
                s = [0, 0, 0, 0, 0, 0, 0, 0],
                l = Array.isArray || function(t) {
                    return !!t && "[object Array]" == Object.prototype.toString.call(t)
                },
                c = 4294967296,
                h = 16777216;

            function u(t, l, u) {
                var S = l ? 0 : 4,
                    k = l ? 4 : 0,
                    M = l ? 0 : 3,
                    E = l ? 1 : 2,
                    I = l ? 2 : 1,
                    C = l ? 3 : 0,
                    A = l ? g : w,
                    T = l ? x : b,
                    P = _.prototype,
                    O = "is" + t,
                    B = "_" + O;
                return P.buffer = void 0, P.offset = 0, P[B] = !0, P.toNumber = R, P.toString = function(t) {
                    var e = this.buffer,
                        n = this.offset,
                        r = D(e, n + S),
                        i = D(e, n + k),
                        a = "",
                        o = !u && 2147483648 & r;
                    for (o && (r = ~r, i = c - i), t = t || 10;;) {
                        var s = r % t * c + i;
                        if (r = Math.floor(r / t), i = Math.floor(s / t), a = (s % t).toString(t) + a, !r && !i) break
                    }
                    return o && (a = "-" + a), a
                }, P.toJSON = R, P.toArray = f, i && (P.toBuffer = d), a && (P.toArrayBuffer = p), _[O] = function(t) {
                    return !(!t || !t[B])
                }, e[t] = _, _;

                function _(t, e, i, l) {
                    return this instanceof _ ? function(t, e, i, l, h) {
                        if (a && o && (e instanceof o && (e = new a(e)), l instanceof o && (l = new a(l))), e || i || l || n) {
                            if (!m(e, i)) h = i, l = e, i = 0, e = new(n || Array)(8);
                            t.buffer = e, t.offset = i |= 0, r !== typeof l && ("string" == typeof l ? function(t, e, n, r) {
                                var i = 0,
                                    a = n.length,
                                    o = 0,
                                    s = 0;
                                "-" === n[0] && i++;
                                for (var l = i; i < a;) {
                                    var h = parseInt(n[i++], r);
                                    if (!(h >= 0)) break;
                                    s = s * r + h, o = o * r + Math.floor(s / c), s %= c
                                }
                                l && (o = ~o, s ? s = c - s : o++), L(t, e + S, o), L(t, e + k, s)
                            }(e, i, l, h || 10) : m(l, h) ? y(e, i, l, h) : "number" == typeof h ? (L(e, i + S, l), L(e, i + k, h)) : l > 0 ? A(e, i, l) : l < 0 ? T(e, i, l) : y(e, i, s, 0))
                        } else t.buffer = v(s, 0)
                    }(this, t, e, i, l) : new _(t, e, i, l)
                }

                function R() {
                    var t = this.buffer,
                        e = this.offset,
                        n = D(t, e + S),
                        r = D(t, e + k);
                    return u || (n |= 0), n ? n * c + r : r
                }

                function L(t, e, n) {
                    t[e + C] = 255 & n, n >>= 8, t[e + I] = 255 & n, n >>= 8, t[e + E] = 255 & n, n >>= 8, t[e + M] = 255 & n
                }

                function D(t, e) {
                    return t[e + M] * h + (t[e + E] << 16) + (t[e + I] << 8) + t[e + C]
                }
            }

            function f(t) {
                var e = this.buffer,
                    r = this.offset;
                return n = null, !1 !== t && 0 === r && 8 === e.length && l(e) ? e : v(e, r)
            }

            function d(e) {
                var r = this.buffer,
                    a = this.offset;
                if (n = i, !1 !== e && 0 === a && 8 === r.length && t.isBuffer(r)) return r;
                var o = new i(8);
                return y(o, 0, r, a), o
            }

            function p(t) {
                var e = this.buffer,
                    r = this.offset,
                    i = e.buffer;
                if (n = a, !1 !== t && 0 === r && i instanceof o && 8 === i.byteLength) return i;
                var s = new a(8);
                return y(s, 0, e, r), s.buffer
            }

            function m(t, e) {
                var n = t && t.length;
                return e |= 0, n && e + 8 <= n && "string" != typeof t[e]
            }

            function y(t, e, n, r) {
                e |= 0, r |= 0;
                for (var i = 0; i < 8; i++) t[e++] = 255 & n[r++]
            }

            function v(t, e) {
                return Array.prototype.slice.call(t, e, e + 8)
            }

            function g(t, e, n) {
                for (var r = e + 8; r > e;) t[--r] = 255 & n, n /= 256
            }

            function x(t, e, n) {
                var r = e + 8;
                for (n++; r > e;) t[--r] = 255 & -n ^ 255, n /= 256
            }

            function w(t, e, n) {
                for (var r = e + 8; e < r;) t[e++] = 255 & n, n /= 256
            }

            function b(t, e, n) {
                var r = e + 8;
                for (n++; e < r;) t[e++] = 255 & -n ^ 255, n /= 256
            }
            u("Uint64BE", !0, !0), u("Int64BE", !0, !1), u("Uint64LE", !1, !0), u("Int64LE", !1, !1)
        }("object" == typeof e && "string" != typeof e.nodeName ? e : this || {})
    }).call(this, n(12).Buffer)
}, function(t, e, n) {
    var r = n(4).ExtBuffer,
        i = n(33),
        a = n(18).readUint8,
        o = n(34),
        s = n(2);

    function l() {
        var t = this.options;
        return this.decode = function(t) {
            var e = o.getReadToken(t);
            return function(t) {
                var n = a(t),
                    r = e[n];
                if (!r) throw new Error("Invalid type: " + (n ? "0x" + n.toString(16) : n));
                return r(t)
            }
        }(t), t && t.preset && i.setExtUnpackers(this), this
    }
    s.install({
        addExtUnpacker: function(t, e) {
            (this.extUnpackers || (this.extUnpackers = []))[t] = s.filter(e)
        },
        getExtUnpacker: function(t) {
            return (this.extUnpackers || (this.extUnpackers = []))[t] || function(e) {
                return new r(e, t)
            }
        },
        init: l
    }), e.preset = l.call(s.preset)
}, function(t, e) {
    t.exports.randInt = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }, t.exports.randFloat = function(t, e) {
        return Math.random() * (e - t) + t
    }, t.exports.getDistance = function(t, e, n, r) {
        return Math.sqrt((n -= t) * n + (r -= e) * r)
    }, t.exports.getDirection = function(t, e, n, r) {
        return Math.atan2(e - r, t - n)
    }, t.exports.getAngleDist = function(t, e) {
        var n = Math.abs(e - t) % (2 * Math.PI);
        return n > Math.PI ? 2 * Math.PI - n : n
    }, t.exports.getRectCorner = function(t, e, n, r) {
        r[0] = t.x + (e * Math.cos(t.dir) - n * Math.sin(t.dir)), r[1] = t.y + (e * Math.sin(t.dir) + n * Math.cos(t.dir))
    };
    var n = [];
    t.exports.lineInRect = function(e, r, i, a, o, s) {
        n.length = 0;
        var l = !1;
        return (l = t.exports.getCollisionsOnLine(e, r, i, a, o.topRight[0], o.topRight[1], o.bottomRight[0], o.bottomRight[1], s ? n : null)) && !s || (l = t.exports.getCollisionsOnLine(e, r, i, a, o.topLeft[0], o.topLeft[1], o.topRight[0], o.topRight[1], s ? n : null)), l && !s || (l = t.exports.getCollisionsOnLine(e, r, i, a, o.topLeft[0], o.topLeft[1], o.bottomLeft[0], o.bottomLeft[1], s ? n : null)), l && !s || (l = t.exports.getCollisionsOnLine(e, r, i, a, o.bottomLeft[0], o.bottomLeft[1], o.bottomRight[0], o.bottomRight[1], s ? n : null)), s ? n : l
    }, t.exports.getCollisionsOnLine = function(t, e, n, r, i, a, o, s, l) {
        var c, h, u = (s - a) * (n - t) - (o - i) * (r - e);
        return 0 != u && (h = ((n - t) * (e - a) - (r - e) * (t - i)) / u, (c = ((o - i) * (e - a) - (s - a) * (t - i)) / u) >= 0 && c <= 1 && h >= 0 && h <= 1 && (!l || l.push(t + c * (n - t), e + c * (r - e))))
    }, t.exports.lerp = function(t, e, n) {
        return t + (e - t) * n
    }, t.exports.orderByScore = function(t, e) {
        return e.score - t.score
    }, t.exports.orderByRarity = function(t, e) {
        return e.rarity - t.rarity
    }, t.exports.truncateText = function(t, e) {
        return t.length > e ? t.substring(0, e) + "..." : t
    }, t.exports.randomString = function(t) {
        for (var e = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < 5; r++) e += n.charAt(Math.floor(Math.random() * n.length));
        return e
    }, t.exports.formatNumCash = function(t) {
        return parseFloat(Math.round(100 * t) / 100).toFixed(2)
    }, t.exports.fixTo = function(t, e) {
        return parseFloat(t.toFixed(e))
    }, t.exports.isNumber = function(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }, t.exports.isString = function(t) {
        return t && "string" == typeof t
    }
}, function(t, e, n) {
    e.encode = function(t, e) {
        var n = new r(e);
        return n.write(t), n.read()
    };
    var r = n(11).EncodeBuffer
}, function(t, e, n) {
    e.EncodeBuffer = i;
    var r = n(3).preset;

    function i(t) {
        if (!(this instanceof i)) return new i(t);
        if (t && (this.options = t, t.codec)) {
            var e = this.codec = t.codec;
            e.bufferish && (this.bufferish = e.bufferish)
        }
    }
    n(15).FlexEncoder.mixin(i.prototype), i.prototype.codec = r, i.prototype.write = function(t) {
        this.codec.encode(this, t)
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(25),
            i = n(5),
            a = n(1);

        function o() {
            return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(t, e) {
            if (o() < e) throw new RangeError("Invalid typed array length");
            return l.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = l.prototype : (null === t && (t = new l(e)), t.length = e), t
        }

        function l(t, e, n) {
            if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(t, e, n);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return u(this, t)
            }
            return c(this, t, e, n)
        }

        function c(t, e, n, r) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), l.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = l.prototype : t = f(t, e), t
            }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | p(e, n),
                    i = (t = s(t, r)).write(e, n);
                return i !== r && (t = t.slice(0, i)), t
            }(t, e, n) : function(t, e) {
                if (l.isBuffer(e)) {
                    var n = 0 | d(e.length);
                    return 0 === (t = s(t, n)).length ? t : (e.copy(t, 0, 0, n), t)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function(t) {
                        return t != t
                    }(e.length) ? s(t, 0) : f(t, e);
                    if ("Buffer" === e.type && a(e.data)) return f(t, e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }

        function h(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function u(t, e) {
            if (h(e), t = s(t, e < 0 ? 0 : 0 | d(e)), !l.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < e; ++n) t[n] = 0;
            return t
        }

        function f(t, e) {
            var n = e.length < 0 ? 0 : 0 | d(e.length);
            t = s(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t
        }

        function d(t) {
            if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
            return 0 | t
        }

        function p(t, e) {
            if (l.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return Y(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return W(t).length;
                default:
                    if (r) return Y(t).length;
                    e = ("" + e).toLowerCase(), r = !0
            }
        }

        function m(t, e, n) {
            var r = t[e];
            t[e] = t[n], t[n] = r
        }

        function y(t, e, n, r, i) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (i) return -1;
                n = t.length - 1
            } else if (n < 0) {
                if (!i) return -1;
                n = 0
            }
            if ("string" == typeof e && (e = l.from(e, r)), l.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, n, r, i);
            if ("number" == typeof e) return e &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function v(t, e, n, r, i) {
            var a, o = 1,
                s = t.length,
                l = e.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (t.length < 2 || e.length < 2) return -1;
                o = 2, s /= 2, l /= 2, n /= 2
            }

            function c(t, e) {
                return 1 === o ? t[e] : t.readUInt16BE(e * o)
            }
            if (i) {
                var h = -1;
                for (a = n; a < s; a++)
                    if (c(t, a) === c(e, -1 === h ? 0 : a - h)) {
                        if (-1 === h && (h = a), a - h + 1 === l) return h * o
                    } else -1 !== h && (a -= a - h), h = -1
            } else
                for (n + l > s && (n = s - l), a = n; a >= 0; a--) {
                    for (var u = !0, f = 0; f < l; f++)
                        if (c(t, a + f) !== c(e, f)) {
                            u = !1;
                            break
                        }
                    if (u) return a
                }
            return -1
        }

        function g(t, e, n, r) {
            n = Number(n) || 0;
            var i = t.length - n;
            r ? (r = Number(r)) > i && (r = i) : r = i;
            var a = e.length;
            if (a % 2 != 0) throw new TypeError("Invalid hex string");
            r > a / 2 && (r = a / 2);
            for (var o = 0; o < r; ++o) {
                var s = parseInt(e.substr(2 * o, 2), 16);
                if (isNaN(s)) return o;
                t[n + o] = s
            }
            return o
        }

        function x(t, e, n, r) {
            return N(Y(e, t.length - n), t, n, r)
        }

        function w(t, e, n, r) {
            return N(function(t) {
                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                return e
            }(e), t, n, r)
        }

        function b(t, e, n, r) {
            return w(t, e, n, r)
        }

        function S(t, e, n, r) {
            return N(W(e), t, n, r)
        }

        function k(t, e, n, r) {
            return N(function(t, e) {
                for (var n, r, i, a = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) r = (n = t.charCodeAt(o)) >> 8, i = n % 256, a.push(i), a.push(r);
                return a
            }(e, t.length - n), t, n, r)
        }

        function M(t, e, n) {
            return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
        }

        function E(t, e, n) {
            n = Math.min(t.length, n);
            for (var r = [], i = e; i < n;) {
                var a, o, s, l, c = t[i],
                    h = null,
                    u = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + u <= n) switch (u) {
                    case 1:
                        c < 128 && (h = c);
                        break;
                    case 2:
                        128 == (192 & (a = t[i + 1])) && (l = (31 & c) << 6 | 63 & a) > 127 && (h = l);
                        break;
                    case 3:
                        a = t[i + 1], o = t[i + 2], 128 == (192 & a) && 128 == (192 & o) && (l = (15 & c) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (h = l);
                        break;
                    case 4:
                        a = t[i + 1], o = t[i + 2], s = t[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (l = (15 & c) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && l < 1114112 && (h = l)
                }
                null === h ? (h = 65533, u = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), i += u
            }
            return function(t) {
                var e = t.length;
                if (e <= I) return String.fromCharCode.apply(String, t);
                for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += I));
                return n
            }(r)
        }
        e.Buffer = l, e.SlowBuffer = function(t) {
            return +t != t && (t = 0), l.alloc(+t)
        }, e.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(), e.kMaxLength = o(), l.poolSize = 8192, l._augment = function(t) {
            return t.__proto__ = l.prototype, t
        }, l.from = function(t, e, n) {
            return c(null, t, e, n)
        }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
            value: null,
            configurable: !0
        })), l.alloc = function(t, e, n) {
            return function(t, e, n, r) {
                return h(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e)
            }(null, t, e, n)
        }, l.allocUnsafe = function(t) {
            return u(null, t)
        }, l.allocUnsafeSlow = function(t) {
            return u(null, t)
        }, l.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }, l.compare = function(t, e) {
            if (!l.isBuffer(t) || !l.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var n = t.length, r = e.length, i = 0, a = Math.min(n, r); i < a; ++i)
                if (t[i] !== e[i]) {
                    n = t[i], r = e[i];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }, l.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function(t, e) {
            if (!a(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return l.alloc(0);
            var n;
            if (void 0 === e)
                for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = l.allocUnsafe(e),
                i = 0;
            for (n = 0; n < t.length; ++n) {
                var o = t[n];
                if (!l.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(r, i), i += o.length
            }
            return r
        }, l.byteLength = p, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
            return this
        }, l.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
            return this
        }, l.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
            return this
        }, l.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : function(t, e, n) {
                var r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return T(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return E(this, e, n);
                    case "ascii":
                        return C(this, e, n);
                    case "latin1":
                    case "binary":
                        return A(this, e, n);
                    case "base64":
                        return M(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return P(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }.apply(this, arguments)
        }, l.prototype.equals = function(t) {
            if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === l.compare(this, t)
        }, l.prototype.inspect = function() {
            var t = "",
                n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
        }, l.prototype.compare = function(t, e, n, r, i) {
            if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0;
            for (var a = i - r, o = n - e, s = Math.min(a, o), c = this.slice(r, i), h = t.slice(e, n), u = 0; u < s; ++u)
                if (c[u] !== h[u]) {
                    a = c[u], o = h[u];
                    break
                }
            return a < o ? -1 : o < a ? 1 : 0
        }, l.prototype.includes = function(t, e, n) {
            return -1 !== this.indexOf(t, e, n)
        }, l.prototype.indexOf = function(t, e, n) {
            return y(this, t, e, n, !0)
        }, l.prototype.lastIndexOf = function(t, e, n) {
            return y(this, t, e, n, !1)
        }, l.prototype.write = function(t, e, n, r) {
            if (void 0 === e) r = "utf8", n = this.length, e = 0;
            else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var i = this.length - e;
            if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var a = !1;;) switch (r) {
                case "hex":
                    return g(this, t, e, n);
                case "utf8":
                case "utf-8":
                    return x(this, t, e, n);
                case "ascii":
                    return w(this, t, e, n);
                case "latin1":
                case "binary":
                    return b(this, t, e, n);
                case "base64":
                    return S(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return k(this, t, e, n);
                default:
                    if (a) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), a = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var I = 4096;

        function C(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
            return r
        }

        function A(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
            return r
        }

        function T(t, e, n) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = "", a = e; a < n; ++a) i += H(t[a]);
            return i
        }

        function P(t, e, n) {
            for (var r = t.slice(e, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
            return i
        }

        function O(t, e, n) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function B(t, e, n, r, i, a) {
            if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < a) throw new RangeError('"value" argument is out of bounds');
            if (n + r > t.length) throw new RangeError("Index out of range")
        }

        function _(t, e, n, r) {
            e < 0 && (e = 65535 + e + 1);
            for (var i = 0, a = Math.min(t.length - n, 2); i < a; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }

        function R(t, e, n, r) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var i = 0, a = Math.min(t.length - n, 4); i < a; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
        }

        function L(t, e, n, r, i, a) {
            if (n + r > t.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function D(t, e, n, r, a) {
            return a || L(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
        }

        function U(t, e, n, r, a) {
            return a || L(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
        }
        l.prototype.slice = function(t, e) {
            var n, r = this.length;
            if (t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = l.prototype;
            else {
                var i = e - t;
                n = new l(i, void 0);
                for (var a = 0; a < i; ++a) n[a] = this[a + t]
            }
            return n
        }, l.prototype.readUIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || O(t, e, this.length);
            for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256);) r += this[t + a] * i;
            return r
        }, l.prototype.readUIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || O(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
            return r
        }, l.prototype.readUInt8 = function(t, e) {
            return e || O(t, 1, this.length), this[t]
        }, l.prototype.readUInt16LE = function(t, e) {
            return e || O(t, 2, this.length), this[t] | this[t + 1] << 8
        }, l.prototype.readUInt16BE = function(t, e) {
            return e || O(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, l.prototype.readUInt32LE = function(t, e) {
            return e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, l.prototype.readUInt32BE = function(t, e) {
            return e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, l.prototype.readIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || O(t, e, this.length);
            for (var r = this[t], i = 1, a = 0; ++a < e && (i *= 256);) r += this[t + a] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
        }, l.prototype.readIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || O(t, e, this.length);
            for (var r = e, i = 1, a = this[t + --r]; r > 0 && (i *= 256);) a += this[t + --r] * i;
            return a >= (i *= 128) && (a -= Math.pow(2, 8 * e)), a
        }, l.prototype.readInt8 = function(t, e) {
            return e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, l.prototype.readInt16LE = function(t, e) {
            e || O(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt16BE = function(t, e) {
            e || O(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt32LE = function(t, e) {
            return e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, l.prototype.readInt32BE = function(t, e) {
            return e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, l.prototype.readFloatLE = function(t, e) {
            return e || O(t, 4, this.length), i.read(this, t, !0, 23, 4)
        }, l.prototype.readFloatBE = function(t, e) {
            return e || O(t, 4, this.length), i.read(this, t, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(t, e) {
            return e || O(t, 8, this.length), i.read(this, t, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(t, e) {
            return e || O(t, 8, this.length), i.read(this, t, !1, 52, 8)
        }, l.prototype.writeUIntLE = function(t, e, n, r) {
            t = +t, e |= 0, n |= 0, r || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
                a = 0;
            for (this[e] = 255 & t; ++a < n && (i *= 256);) this[e + a] = t / i & 255;
            return e + n
        }, l.prototype.writeUIntBE = function(t, e, n, r) {
            t = +t, e |= 0, n |= 0, r || B(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
                a = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) this[e + i] = t / a & 255;
            return e + n
        }, l.prototype.writeUInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, l.prototype.writeUInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : _(this, t, e, !0), e + 2
        }, l.prototype.writeUInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : _(this, t, e, !1), e + 2
        }, l.prototype.writeUInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : R(this, t, e, !0), e + 4
        }, l.prototype.writeUInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4
        }, l.prototype.writeIntLE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                B(this, t, e, n, i - 1, -i)
            }
            var a = 0,
                o = 1,
                s = 0;
            for (this[e] = 255 & t; ++a < n && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + a - 1] && (s = 1), this[e + a] = (t / o >> 0) - s & 255;
            return e + n
        }, l.prototype.writeIntBE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                B(this, t, e, n, i - 1, -i)
            }
            var a = n - 1,
                o = 1,
                s = 0;
            for (this[e + a] = 255 & t; --a >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + a + 1] && (s = 1), this[e + a] = (t / o >> 0) - s & 255;
            return e + n
        }, l.prototype.writeInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, l.prototype.writeInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : _(this, t, e, !0), e + 2
        }, l.prototype.writeInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : _(this, t, e, !1), e + 2
        }, l.prototype.writeInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : R(this, t, e, !0), e + 4
        }, l.prototype.writeInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || B(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4
        }, l.prototype.writeFloatLE = function(t, e, n) {
            return D(this, t, e, !0, n)
        }, l.prototype.writeFloatBE = function(t, e, n) {
            return D(this, t, e, !1, n)
        }, l.prototype.writeDoubleLE = function(t, e, n) {
            return U(this, t, e, !0, n)
        }, l.prototype.writeDoubleBE = function(t, e, n) {
            return U(this, t, e, !1, n)
        }, l.prototype.copy = function(t, e, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
            var i, a = r - n;
            if (this === t && n < e && e < r)
                for (i = a - 1; i >= 0; --i) t[i + e] = this[i + n];
            else if (a < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < a; ++i) t[i + e] = this[i + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + a), e);
            return a
        }, l.prototype.fill = function(t, e, n, r) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                    var i = t.charCodeAt(0);
                    i < 256 && (t = i)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
            if (n <= e) return this;
            var a;
            if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                for (a = e; a < n; ++a) this[a] = t;
            else {
                var o = l.isBuffer(t) ? t : Y(new l(t, r).toString()),
                    s = o.length;
                for (a = 0; a < n - e; ++a) this[a + e] = o[a % s]
            }
            return this
        };
        var j = /[^+\/0-9A-Za-z-_]/g;

        function H(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function Y(t, e) {
            var n;
            e = e || 1 / 0;
            for (var r = t.length, i = null, a = [], o = 0; o < r; ++o) {
                if ((n = t.charCodeAt(o)) > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        if (o + 1 === r) {
                            (e -= 3) > -1 && a.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && a.push(239, 191, 189), i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else i && (e -= 3) > -1 && a.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((e -= 1) < 0) break;
                    a.push(n)
                } else if (n < 2048) {
                    if ((e -= 2) < 0) break;
                    a.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((e -= 3) < 0) break;
                    a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return a
        }

        function W(t) {
            return r.toByteArray(function(t) {
                if ((t = function(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(j, "")).length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }(t))
        }

        function N(t, e, n, r) {
            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
            return i
        }
    }).call(this, n(13))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e) {
    for (var n = e.uint8 = new Array(256), r = 0; r <= 255; r++) n[r] = i(r);

    function i(t) {
        return function(e) {
            var n = e.reserve(1);
            e.buffer[n] = t
        }
    }
}, function(t, e, n) {
    e.FlexDecoder = a, e.FlexEncoder = o;
    var r = n(0),
        i = "BUFFER_SHORTAGE";

    function a() {
        if (!(this instanceof a)) return new a
    }

    function o() {
        if (!(this instanceof o)) return new o
    }

    function s() {
        throw new Error("method not implemented: write()")
    }

    function l() {
        throw new Error("method not implemented: fetch()")
    }

    function c() {
        return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
    }

    function h(t) {
        (this.buffers || (this.buffers = [])).push(t)
    }

    function u() {
        return (this.buffers || (this.buffers = [])).shift()
    }

    function f(t) {
        return function(e) {
            for (var n in t) e[n] = t[n];
            return e
        }
    }
    a.mixin = f({
        bufferish: r,
        write: function(t) {
            var e = this.offset ? r.prototype.slice.call(this.buffer, this.offset) : this.buffer;
            this.buffer = e ? t ? this.bufferish.concat([e, t]) : e : t, this.offset = 0
        },
        fetch: l,
        flush: function() {
            for (; this.offset < this.buffer.length;) {
                var t, e = this.offset;
                try {
                    t = this.fetch()
                } catch (t) {
                    if (t && t.message != i) throw t;
                    this.offset = e;
                    break
                }
                this.push(t)
            }
        },
        push: h,
        pull: u,
        read: c,
        reserve: function(t) {
            var e = this.offset,
                n = e + t;
            if (n > this.buffer.length) throw new Error(i);
            return this.offset = n, e
        },
        offset: 0
    }), a.mixin(a.prototype), o.mixin = f({
        bufferish: r,
        write: s,
        fetch: function() {
            var t = this.start;
            if (t < this.offset) {
                var e = this.start = this.offset;
                return r.prototype.slice.call(this.buffer, t, e)
            }
        },
        flush: function() {
            for (; this.start < this.offset;) {
                var t = this.fetch();
                t && this.push(t)
            }
        },
        push: h,
        pull: function() {
            var t = this.buffers || (this.buffers = []),
                e = t.length > 1 ? this.bufferish.concat(t) : t[0];
            return t.length = 0, e
        },
        read: c,
        reserve: function(t) {
            var e = 0 | t;
            if (this.buffer) {
                var n = this.buffer.length,
                    r = 0 | this.offset,
                    i = r + e;
                if (i < n) return this.offset = i, r;
                this.flush(), t = Math.max(t, Math.min(2 * n, this.maxBufferSize))
            }
            return t = Math.max(t, this.minBufferSize), this.buffer = this.bufferish.alloc(t), this.start = 0, this.offset = e, 0
        },
        send: function(t) {
            var e = t.length;
            if (e > this.minBufferSize) this.flush(), this.push(t);
            else {
                var n = this.reserve(e);
                r.prototype.copy.call(t, this.buffer, n)
            }
        },
        maxBufferSize: 65536,
        minBufferSize: 2048,
        offset: 0,
        start: 0
    }), o.mixin(o.prototype)
}, function(t, e, n) {
    e.decode = function(t, e) {
        var n = new r(e);
        return n.write(t), n.read()
    };
    var r = n(17).DecodeBuffer
}, function(t, e, n) {
    e.DecodeBuffer = i;
    var r = n(8).preset;

    function i(t) {
        if (!(this instanceof i)) return new i(t);
        if (t && (this.options = t, t.codec)) {
            var e = this.codec = t.codec;
            e.bufferish && (this.bufferish = e.bufferish)
        }
    }
    n(15).FlexDecoder.mixin(i.prototype), i.prototype.codec = r, i.prototype.fetch = function() {
        return this.codec.decode(this)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(7),
        a = i.Uint64BE,
        o = i.Int64BE;
    e.getReadFormat = function(t) {
        var e = s.hasArrayBuffer && t && t.binarraybuffer,
            n = t && t.int64;
        return {
            map: c && t && t.usemap ? f : u,
            array: d,
            str: p,
            bin: e ? y : m,
            ext: v,
            uint8: g,
            uint16: w,
            uint32: S,
            uint64: M(8, n ? C : E),
            int8: x,
            int16: b,
            int32: k,
            int64: M(8, n ? A : I),
            float32: M(4, T),
            float64: M(8, P)
        }
    }, e.readUint8 = g;
    var s = n(0),
        l = n(6),
        c = "undefined" != typeof Map,
        h = !0;

    function u(t, e) {
        var n, r = {},
            i = new Array(e),
            a = new Array(e),
            o = t.codec.decode;
        for (n = 0; n < e; n++) i[n] = o(t), a[n] = o(t);
        for (n = 0; n < e; n++) r[i[n]] = a[n];
        return r
    }

    function f(t, e) {
        var n, r = new Map,
            i = new Array(e),
            a = new Array(e),
            o = t.codec.decode;
        for (n = 0; n < e; n++) i[n] = o(t), a[n] = o(t);
        for (n = 0; n < e; n++) r.set(i[n], a[n]);
        return r
    }

    function d(t, e) {
        for (var n = new Array(e), r = t.codec.decode, i = 0; i < e; i++) n[i] = r(t);
        return n
    }

    function p(t, e) {
        var n = t.reserve(e),
            r = n + e;
        return l.toString.call(t.buffer, "utf-8", n, r)
    }

    function m(t, e) {
        var n = t.reserve(e),
            r = n + e,
            i = l.slice.call(t.buffer, n, r);
        return s.from(i)
    }

    function y(t, e) {
        var n = t.reserve(e),
            r = n + e,
            i = l.slice.call(t.buffer, n, r);
        return s.Uint8Array.from(i).buffer
    }

    function v(t, e) {
        var n = t.reserve(e + 1),
            r = t.buffer[n++],
            i = n + e,
            a = t.codec.getExtUnpacker(r);
        if (!a) throw new Error("Invalid ext type: " + (r ? "0x" + r.toString(16) : r));
        return a(l.slice.call(t.buffer, n, i))
    }

    function g(t) {
        var e = t.reserve(1);
        return t.buffer[e]
    }

    function x(t) {
        var e = t.reserve(1),
            n = t.buffer[e];
        return 128 & n ? n - 256 : n
    }

    function w(t) {
        var e = t.reserve(2),
            n = t.buffer;
        return n[e++] << 8 | n[e]
    }

    function b(t) {
        var e = t.reserve(2),
            n = t.buffer,
            r = n[e++] << 8 | n[e];
        return 32768 & r ? r - 65536 : r
    }

    function S(t) {
        var e = t.reserve(4),
            n = t.buffer;
        return 16777216 * n[e++] + (n[e++] << 16) + (n[e++] << 8) + n[e]
    }

    function k(t) {
        var e = t.reserve(4),
            n = t.buffer;
        return n[e++] << 24 | n[e++] << 16 | n[e++] << 8 | n[e]
    }

    function M(t, e) {
        return function(n) {
            var r = n.reserve(t);
            return e.call(n.buffer, r, h)
        }
    }

    function E(t) {
        return new a(this, t).toNumber()
    }

    function I(t) {
        return new o(this, t).toNumber()
    }

    function C(t) {
        return new a(this, t)
    }

    function A(t) {
        return new o(this, t)
    }

    function T(t) {
        return r.read(this, t, !1, 23, 4)
    }

    function P(t) {
        return r.read(this, t, !1, 52, 8)
    }
}, function(t, e, n) {
    ! function(e) {
        t.exports = e;
        var n = "listeners",
            r = {
                on: function(t, e) {
                    return o(this, t).push(e), this
                },
                once: function(t, e) {
                    var n = this;
                    return r.originalListener = e, o(n, t).push(r), n;

                    function r() {
                        a.call(n, t, r), e.apply(this, arguments)
                    }
                },
                off: a,
                emit: function(t, e) {
                    var n = this,
                        r = o(n, t, !0);
                    if (!r) return !1;
                    var i = arguments.length;
                    if (1 === i) r.forEach(function(t) {
                        t.call(n)
                    });
                    else if (2 === i) r.forEach(function(t) {
                        t.call(n, e)
                    });
                    else {
                        var a = Array.prototype.slice.call(arguments, 1);
                        r.forEach(function(t) {
                            t.apply(n, a)
                        })
                    }
                    return !!r.length
                }
            };

        function i(t) {
            for (var e in r) t[e] = r[e];
            return t
        }

        function a(t, e) {
            var r;
            if (arguments.length) {
                if (e) {
                    if (r = o(this, t, !0)) {
                        if (!(r = r.filter(function(t) {
                                return t !== e && t.originalListener !== e
                            })).length) return a.call(this, t);
                        this[n][t] = r
                    }
                } else if ((r = this[n]) && (delete r[t], !Object.keys(r).length)) return a.call(this)
            } else delete this[n];
            return this
        }

        function o(t, e, r) {
            if (!r || t[n]) {
                var i = t[n] || (t[n] = {});
                return i[e] || (i[e] = [])
            }
        }
        i(e.prototype), e.mixin = i
    }(
        /**
         * event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
         *
         * @copyright Yusuke Kawasaki
         * @license MIT
         * @constructor
         * @see https://github.com/kawanet/event-lite
         * @see http://kawanet.github.io/event-lite/EventLite.html
         * @example
         * var EventLite = require("event-lite");
         *
         * function MyClass() {...}             // your class
         *
         * EventLite.mixin(MyClass.prototype);  // import event methods
         *
         * var obj = new MyClass();
         * obj.on("foo", function() {...});     // add event listener
         * obj.once("bar", function() {...});   // add one-time event listener
         * obj.emit("foo");                     // dispatch event
         * obj.emit("bar");                     // dispatch another event
         * obj.off("foo");                      // remove event listener
         */
        function t() {
            if (!(this instanceof t)) return new t
        })
}, function(t, e) {
    var n = {
        utf8: {
            stringToBytes: function(t) {
                return n.bin.stringToBytes(unescape(encodeURIComponent(t)))
            },
            bytesToString: function(t) {
                return decodeURIComponent(escape(n.bin.bytesToString(t)))
            }
        },
        bin: {
            stringToBytes: function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                return e
            },
            bytesToString: function(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
                return e.join("")
            }
        }
    };
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(9),
        i = n(22),
        a = n(23),
        o = new(n(39))("foes.io", 8080, i.maxPlayers, i.playerSpread, !1),
        s = null,
        l = !1;

    function c(t) {
        var e = Array.prototype.slice.call(arguments, 1),
            n = a.encode([t, e]);
        s.send(n)
    }

    function h() {
        return s && l
    }
    Math.lerpAngle = function(t, e, n) {
        var r = Math.abs(e - t),
            i = 2 * Math.PI;
        r > Math.PI && (t > e ? e += i : t += i);
        var a = e + (t - e) * n;
        return a >= 0 && a <= i ? a : a % i
    }, Number.prototype.round = function(t) {
        return +this.toFixed(t)
    }, CanvasRenderingContext2D.prototype.roundRect = function(t, e, n, r, i) {
        return n < 2 * i && (i = n / 2), r < 2 * i && (i = r / 2), i < 0 && (i = 0), this.beginPath(), this.moveTo(t + i, e), this.arcTo(t + n, e, t + n, e + r, i), this.arcTo(t + n, e + r, t, e + r, i), this.arcTo(t, e + r, t, e, i), this.arcTo(t, e, t + n, e, i), this.closePath(), this
    };
    var u, f, d, p, m, y, v, g, x = document.getElementById("mainCanvas"),
        w = x.getContext("2d"),
        b = n(50).obj,
        S = n(51),
        k = n(52).obj,
        M = n(53).data,
        E = n(54).data,
        I = n(55).data,
        C = n(56).data,
        A = n(57).list,
        T = n(58).obj,
        P = n(59).obj,
        O = n(60).TextManager,
        B = n(61).obj,
        _ = n(62).obj,
        R = n(63).obj,
        L = n(64).obj,
        D = n(65).obj,
        U = new(0, n(66).obj)(A, r, i),
        j = n(67).obj,
        H = (new(0, n(68).obj)(r), null),
        Y = 1,
        W = 0,
        N = 0,
        F = 0,
        X = 0,
        V = 1,
        q = 1,
        K = 0,
        z = 0,
        G = 0,
        Z = 0,
        $ = 0,
        J = 0,
        Q = {
            id: -1,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0
        },
        tt = {
            id: -1,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0
        },
        et = 0,
        nt = 0,
        rt = 0,
        it = !0,
        at = 0,
        ot = "#454545",
        st = "#ff5b5b",
        lt = {},
        ct = [],
        ht = [],
        ut = [],
        ft = ("true" == It("foes_nativeResolution") || void 0 == It("foes_nativeResolution") && Rt()) && window.devicePixelRatio || 1,
        dt = new P(ct, k, M, I, r, i),
        pt = new O,
        mt = [],
        yt = new _(i, r, B, mt, M),
        vt = [],
        gt = new L(i, r, vt, R),
        xt = "webkitSpeechRecognition" in window,
        wt = !1,
        bt = "";

    function St(t) {
        g && f && f.alive && (voiceDisplay.style.display = t ? "block" : "none", t && !wt ? (wt = !0, bt = "", g.start()) : g.stop())
    }
    xt && ((g = new webkitSpeechRecognition).continuous = !0, g.interimResults = !1, g.lang = "en-US", g.onresult = function(t) {
        f && f.alive && (bt = r.truncateText(t.results[0][0].transcript, i.chatMax)).length && h() && c("4", bt)
    }, g.onend = function() {
        wt = !1
    }, g.onerror = function(t) {
        St(!1)
    });
    var kt = !0;
    window.onload = function() {
        Wn()
    }, window.onblur = function() {
        kt = !1
    }, window.onfocus = function() {
        kt = !0, Ct = {}, h() && c("rk")
    };
    var Mt = "undefined" != typeof Storage;

    function Et(t, e) {
        !1 !== Mt && localStorage.setItem(t, e.toString())
    }

    function It(t) {
        return !1 !== Mt && localStorage.getItem(t) || null
    }
    var Ct = {};

    function At(t, e) {
        f && f.alive && h() && (e && !Ct[t] || !e && Ct[t]) && (Ct[t] = e, function(t, e) {
            return !(!xt || 86 != t) && (St(e), !0)
        }(t, e) || function(t, e) {
            return !(!e || 81 != t) && (Ft(1), !0)
        }(t, e) || function(t, e) {
            (p = S.keys.indexOf(t)) >= 0 && c("2", p, e)
        }(t, e) || !S.moveKeys[t] || function() {
            var t = 0,
                e = 0;
            for (var n in S.moveKeys) 1 == Ct[n] && (t += S.moveKeys[n].d[0], e += S.moveKeys[n].d[1]);
            0 == t && 0 == e ? Tt(void 0) : Tt(Math.atan2(e, t))
        }())
    }

    function Tt(t) {
        c("0", t)
    }
    window.addEventListener("keydown", function(t) {
        At(t.which || t.keyCode || 0, 1), _t(!1)
    }), window.addEventListener("keyup", function(t) {
        At(t.which || t.keyCode || 0, 0), _t(!1)
    }), n(69).attach(document.body);
    var Pt, Ot = 50,
        Bt = 60;

    function _t(t) {
        Pt = t, weaponDisplay.style.pointerEvents = t ? "all" : "none", ammoDisplay.style.pointerEvents = t ? "all" : "none"
    }

    function Rt() {
        return "true" == localStorage.usingCordova || void 0 != window.cordova
    }

    function Lt() {
        At(70, 1), setTimeout(function() {
            At(70, 0)
        }, 50)
    }

    function Dt(t) {
        t.preventDefault(), t.stopPropagation(), _t(!0);
        for (var e = 0; e < t.changedTouches.length; e++) {
            var n = t.changedTouches[e];
            n.identifier == Q.id ? (Q.id = -1, f.vehicle ? Ut() : Tt(void 0)) : n.identifier == tt.id && (tt.id = -1, f.vehicle ? Ut() : Wt(0))
        }
    }

    function Ut() {
        var t = 0,
            e = 0; - 1 != Q.id && (e = (Q.currentY - Q.startY) / Bt), -1 != tt.id && (t = (tt.currentX - tt.startX) / Bt), t *= Math.cos(Math.PI / 4), e *= Math.sin(Math.PI / 4), Tt(0 == t && 0 == e ? void 0 : Math.atan2(e, t))
    }
    _t(!1), window.setUsingTouch = _t, document.addEventListener("touchstart", function(t) {
        _t(!0)
    }, !0), x.addEventListener("touchmove", function(t) {
        t.preventDefault(), t.stopPropagation(), _t(!0);
        for (var e = Ot, n = 0; n < t.changedTouches.length; n++) {
            var r = t.changedTouches[n];
            if (r.identifier == Q.id)
                if (Q.currentX = r.pageX, Q.currentY = r.pageY, f.vehicle) Ut();
                else {
                    var i = Q.currentX - Q.startX,
                        a = Q.currentY - Q.startY,
                        o = Math.atan2(a, i),
                        s = Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
                    Tt(o);
                    var l = s > e;
                    At(S.keys[0], l ? 1 : 0)
                }
            else if (r.identifier == tt.id)
                if (tt.currentX = r.pageX, tt.currentY = r.pageY, f.vehicle) Ut();
                else {
                    i = tt.currentX - tt.startX, a = tt.currentY - tt.startY;
                    $ = i / Bt * kn / 2 + kn / 2, J = a / Bt * kn / 2 + Mn / 2, Wt((s = Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))) > e ? 1 : 0)
                }
        }
    }, !1), x.addEventListener("touchstart", function(t) {
        t.preventDefault(), t.stopPropagation(), _t(!0);
        for (var e = 0; e < t.changedTouches.length; e++) {
            var n = t.changedTouches[e];
            Math.sqrt(Math.pow(n.pageX - kn / 2, 2) + Math.pow(n.pageY - Mn / 2, 2)) < 60 ? Lt() : n.pageX < document.body.scrollWidth / 2 && -1 == Q.id ? (Q.id = n.identifier, Q.startX = Q.currentX = n.pageX, Q.startY = Q.currentY = n.pageY) : n.pageX > document.body.scrollWidth / 2 && -1 == tt.id && (tt.id = n.identifier, tt.startX = tt.currentX = n.pageX, tt.startY = tt.currentY = n.pageY)
        }
    }, !1), x.addEventListener("touchend", Dt, !1), x.addEventListener("touchcancel", Dt, !1), x.addEventListener("touchleave", Dt, !1);
    var jt = !1,
        Ht = 0,
        Yt = 0;

    function Wt(t) {
        f && h() && Ht != t && (Ht = t, t ? c("1", r.fixTo(et, 2), 1) : c("1", null, 0))
    }

    function Nt(t) {
        f && f.alive && ((t = window.event || t).preventDefault(), Ft(Math.max(-1, Math.min(1, t.wheelDelta || -t.detail))))
    }

    function Ft(t) {
        (Yt += t) >= f.weapons.length ? Yt = 0 : Yt < 0 && (Yt = f.weapons.length - 1), jt = !0
    }
    window.addEventListener("mousemove", function(t) {
        t.preventDefault(), t.stopPropagation(), $ = t.clientX, J = t.clientY, mn && (hoverDisplay.style.left = $ + 20 + "px", hoverDisplay.style.top = J + "px")
    }, !1), x.addEventListener("mousedown", function() {
        Wt(1)
    }, !1), x.addEventListener("mouseup", function(t) {
        t.preventDefault(), Wt(0)
    }, !1), x.addEventListener ? (x.addEventListener("mousewheel", Nt, !1), x.addEventListener("DOMMouseScroll", Nt, !1)) : x.attachEvent("onmousewheel", Nt);
    var Xt = new D(i, r);

    function Vt(t, e, n) {
        p = dt.findBySid(e), d && Xt.playAt(Xt.IDList[t], p.x, p.y, n || 1.3)
    }

    function qt(t) {
        void 0 == t && (t = !Xt.active), Xt.active = t, Xt.toggleMute("menu", !t), soundSetting.innerHTML = t ? "<i class='material-icons' style='color:#fff;font-size:45px'>&#xE050;</i>" : "<i class='material-icons' style='color:#fff;font-size:45px'>&#xE04F;</i>", Et("foes_mus", t ? 1 : 0)
    }
    var Kt = [{
        name: "showBlood",
        display: "Show Blood",
        val: !0
    }, {
        name: "showLeaves",
        display: "Show Leaves",
        val: !0
    }, {
        name: "showParticles",
        display: "Show Particles",
        val: !0
    }, {
        name: "showChat",
        display: "Show Chat",
        val: !0
    }, {
        name: "showUI",
        display: "Show UI",
        val: !0
    }, {
        name: "nativeResolution",
        display: "Use native resolution (needs reload)",
        val: Rt(),
        onChange: function(t) {
            location.reload()
        }
    }];

    function zt(t) {
        return (t ? "✔" : "✖") + " "
    }
    Rt() && Kt.push({
        name: "aimAssist",
        display: "Aim assist (only on mobile)",
        val: Rt()
    });
    var Gt = !0;

    function Zt(t, e, n, a, o, s, l) {
        ct.length = 0,
            function() {
                for (var t = ht.length - 1; t >= 0; t--) ht[t].local && !Gt || ht.splice(t, 1)
            }(), Gt = !1, Ct = {}, Ht = 0, Yt = 0, ce = 0, ke = 0, (f = null) || (f = dt.addPlayer(0, t)), it && (it = !1, function() {
                for (var t = 2 * i.mapScale / i.areaCount, e = -i.mapScale, n = -i.mapScale, a = 0; a < i.areaCount; ++a) {
                    for (var o = 0; o < i.areaCount; ++o) {
                        for (var s = 0; s < i.rockCount + 1; ++s) {
                            var l = r.randInt(e, e + t),
                                c = r.randInt(n, n + t);
                            an(l, c, A[5].scale) && nn(new T, l, c, r.randFloat(-Math.PI, Math.PI), r.randInt(4, 6))
                        }
                        n += t
                    }
                    n = -i.mapScale, e += t
                }
            }()), f.init(e, n, a), rn(n, a), le(f.weaponIndex, f.scrollIndex), se(f.effects), oe(), fe(0), ae(f.stamina), f.alive = l, W = o, N = s, F = 0, X = 0, V = 1, q = 1, Y = 1, K = 0, Jt(null, 0, 0), Kt[4].val && (uiContainer.style.display = "block", sharedUI.style.display = "block"), spectateText.style.display = "block", playAgainButton.style.display = "none", gameOverMessage.style.display = "none", Tn(), Me(), Xt.stop("menu"), Xt.play("ambient", .2, !0), l ? Xt.play("horn", .1) : cn()
    }

    function $t(t) {
        darkener.style.display = "block", playAgainButton.style.display = "inline-block", spectateText.style.display = "none", deathMessage.style.display = "none", gameOverMessage.style.display = "block", gameOverMessage.innerHTML = t ? "VICTORY" : "GAME OVER", ln = 0, setTimeout(function() {
            ! function() {
                var t = ++Xn > 1,
                    e = Date.now() - Nn > Fn;
                t && e && (console.log("Showing"), window.admob && window.admob.requestInterstitialAd())
            }()
        }, 1e3)
    }

    function Jt(t, e, n) {
        null != t && (V = Y, q = t, K = 0), null != e && void 0 != e && (borderTimer.innerHTML = e > 0 ? "00:" + (e >= 10 ? e : "0" + e) : "00:00"), void 0 != n && (z = n)
    }

    function Qt(t) {
        playerCount.innerHTML = t + " Alive"
    }

    function te(t) {
        var e;
        e = t ? t == i.roundTimer ? "waiting for players" : "match starting in :" + Math.ceil(t / 1e3) : "match in progress", roundTimerMenu.innerHTML = e, roundTimerDisplay.innerHTML = e, roundTimerDisplay.style.display = t ? "block" : "none"
    }

    function ee(t, e) {
        var n = dt.findBySid(t);
        n && (n.health = e, e <= 0 && (n.visible = !1))
    }
    staminaHolder.width = 400, staminaHolder.height = 25;
    var ne = staminaHolder.getContext("2d"),
        re = 0,
        ie = 0;

    function ae(t) {
        if (f) {
            f.stamina = t;
            var e = !M[f.weaponIndex].melee || t >= M[f.weaponIndex].dmg * i.dmgToStam ? "#fff" : st;
            re == t && ie == e || (ie = e, re = t, ne.fillStyle = e, ne.clearRect(0, 0, 400, 25), ne.fillRect(0, 0, t / f.maxStamina * 400, 25))
        }
    }

    function oe(t, e) {
        f && (f.ammos[t] = e, ammoDisplay.innerHTML = e + " Ammo")
    }

    function se(t, e) {
        var n = "";
        if (f) {
            e && (f.effectTimers[e] = I[e].duration || 0), t && (f.effects = t);
            for (var r = 0; r < f.effects.length; ++r)(p = f.effects[r]) && (n += "<div class='effectIconG'><div id='pTimer" + p + "' class='pTimer'>" + f.effectTimers[p] + "s</div><img src='./images/sprites/effects/effect_" + p + ".png' class='effectIcon'/></div>")
        }
        effectsList.innerHTML = n
    }

    function le(t, e, n) {
        if (f) {
            p = M[t], f.weapons = n || f.weapons, f.weaponIndex = t, f.scrollIndex = e, ammoDisplay.style.display = p.ammo ? "block" : "none", p.melee || oe(f.scrollIndex, f.ammos[f.scrollIndex]);
            for (var r = "", i = 0; i < f.weapons.length; ++i)(p = M[f.weapons[i]]).iconScale, r += "<img class='weaponItem" + (f.scrollIndex == i ? " activeWpn" : "") + "' src='.././images/sprites/weapons/icons/weapon_" + f.weapons[i] + ".png'/>";
            weaponDisplay.innerHTML = r, ae(f.stamina)
        }
    }
    var ce = 0,
        he = ["ENEMY KILLED", "DOUBLE KILL", "TRIPLE KILL", "QUAD KILL", "PENTA KILL", "ULTRA KILL", "MEGA KILL", "OCTA KILL", "SUPER KILL", "DECA KILL", "SLAUGHTER", "GODLIKE"];

    function ue(t, e) {
        Xt.play("kill", 2), f && (e && (function(t, e) {
            kt && f && f.alive && (pt.animateDiv(killText, t, 100, 1e3), e && pt.animateDiv(killInfo, e, 50, 1e3))
        }(he[Math.min(ce, he.length - 1)], ce + 1 + " Kills"), Ne(Math.PI / 2, 3), ce++), f.sid == t && (f.alive = !1))
    }

    function fe(t) {
        killCount.innerHTML = t + (1 == t ? " Kill" : " Kills")
    }
    var de, pe = ["#fff", st, "#8ecc51"];

    function me(t, e, n, i) {
        kt && f && f.alive && pt.showText(t, e, 60, .18, 500, r.isString(n) ? n : Math.abs(n), pe[i || 0])
    }

    function ye(t, e) {
        Kt[3].val && (p = dt.findBySid(t)) && (p.chatCooldown = i.chatDuration, p.chatMsg = e, function(t, e, n) {
            if (de && Xt.active) {
                var a = r.getDistance(Xt.xListen, Xt.yListen, e, n);
                a <= i.voiceDistance && (speechSynthesis.cancel(), de.text = t, de.volume = .2 * Math.min(1, (i.voiceDistance - a) / i.voiceDistance), speechSynthesis.speak(de))
            }
        }(e, p.x, p.y))
    }

    function ve(t) {
        return (f != t || t.vehicle ? t.dir : et) - (t.animType && !t.vehicle && t.dirPlus || 0)
    }

    function ge(t, e, n, r) {
        w.save(), w.setTransform(1, 0, 0, 1, 0, 0), w.scale(ft, ft);
        var i = n - t,
            a = r - e,
            o = Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2)),
            s = Ot,
            l = Bt,
            c = o > s;
        if (f.vehicle) {
            var h = l * Math.cos(Math.PI / 4);
            if (w.lineWidth = 14, w.lineCap = "round", w.beginPath(), t < kn / 2 ? (w.moveTo(t, e - h), w.lineTo(t, e + h)) : (w.moveTo(t - h, e), w.lineTo(t + h, e)), w.strokeStyle = "rgba(255, 255, 255, 0.3)", w.stroke(), w.beginPath(), t < kn / 2) {
                var u = Math.min(Math.abs(a), h) * Math.sign(a);
                w.arc(t, e + u, 12, 0, 2 * Math.PI, !1)
            } else u = Math.min(Math.abs(i), h) * Math.sign(i), w.arc(t + u, e, 12, 0, 2 * Math.PI, !1);
            w.closePath(), w.fillStyle = "white", w.fill()
        } else {
            w.beginPath(), w.arc(t, e, l, 0, 2 * Math.PI, !1), w.closePath(), w.fillStyle = c ? "rgba(255, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)", w.fill(), w.beginPath(), w.arc(t, e, s, 0, 2 * Math.PI, !1), w.closePath(), w.fillStyle = c ? "rgba(255, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)", w.fill();
            var d = i,
                p = a,
                m = Math.sqrt(Math.pow(d, 2) + Math.pow(p, 2)),
                y = m > l ? m / l : 1;
            d /= y, p /= y, w.beginPath(), w.arc(t + d, e + p, .5 * l, 0, 2 * Math.PI, !1), w.closePath(), w.fillStyle = "white", w.fill()
        }
        w.restore()
    }

    function xe(t, e, n) {
        w.beginPath(), w.arc(t, e, n, 0, 2 * Math.PI, !1), w.closePath(), w.fill()
    }
    "speechSynthesis" in window && ((de = new SpeechSynthesisUtterance).pitch = 1.1, speechSynthesis.onvoiceschanged = function() {
        de.voice = window.speechSynthesis.getVoices()[6]
    });
    var we = {};
    minimap.width = minimap.height = 160;
    var be = minimap.getContext("2d");
    be.fillStyle = st, be.lineWidth = 3;
    var Se, ke = 0;

    function Me() {
        if (f) {
            be.clearRect(0, 0, minimap.width, minimap.height);
            for (var t = 0; t < U.objects.length; ++t) {
                p = U.objects[t];
                var e = we[p.type];
                if (e || (e = Ee(".././images/sprites/map/" + p.type + ".png"), we[p.type] = e), e.isLoaded) {
                    var n = p.w / (2 * i.mapScale) * minimap.width,
                        r = p.h / (2 * i.mapScale) * minimap.height;
                    be.drawImage(e, (p.x + i.mapScale) / (2 * i.mapScale) * minimap.width - n, (p.y + i.mapScale) / (2 * i.mapScale) * minimap.height - r, 2 * n, 2 * r)
                }
            }
            if (be.beginPath(), be.arc((f.x + i.mapScale) / (2 * i.mapScale) * minimap.width, (f.y + i.mapScale) / (2 * i.mapScale) * minimap.height, 3.5, 0, 2 * Math.PI, !1), be.closePath(), be.fill(), Y < 1) {
                var a = (W * (1 - i.mapShrinks[z]) + i.mapScale) / (2 * i.mapScale) * minimap.width,
                    o = (N * (1 - i.mapShrinks[z]) + i.mapScale) / (2 * i.mapScale) * minimap.height;
                if (i.mapShrinks[z]) {
                    be.strokeStyle = "#fff";
                    var s = minimap.width / 2 * i.mapShrinks[z];
                    be.beginPath(), be.rect(a - s, o - s, 2 * s, 2 * s), be.closePath(), be.stroke()
                }
                a = (F + i.mapScale) / (2 * i.mapScale) * minimap.width, o = (X + i.mapScale) / (2 * i.mapScale) * minimap.height, be.strokeStyle = st, s = minimap.width / 2 * Y, be.beginPath(), be.rect(a - s, o - s, 2 * s, 2 * s), be.closePath(), be.stroke()
            }
        }
    }

    function Ee(t) {
        var e = new Image;
        return e.onload = function() {
            this.isLoaded = !0, this.onload = null
        }, e.src = t, e
    }
    var Ie = {},
        Ce = {},
        Ae = {},
        Te = {};

    function Pe(t, e, n) {
        (e = e || w).rotate(ve(t)), t.vehicle || ((Oe = Ae[0]) || (Oe = Ee(".././images/sprites/player/shoe_0.png"), Ae[0] = Oe), Oe.isLoaded && (e.save(), e.rotate(t.animType && t.dirPlus || 0), e.drawImage(Oe, 4 + t.stepOffset - i.footScale, -i.footOffset - i.footScale, 2 * i.footScale, 2 * i.footScale), e.drawImage(Oe, 4 - t.stepOffset - i.footScale, i.footOffset - i.footScale, 2 * i.footScale, 2 * i.footScale), e.restore()));
        var r = t.vehicle ? 0 : t.weaponIndex;
        e.save(), t.animType || e.translate(2.7 * -t.dirPlus, 0), n || !M[r].melee || M[r].renderAtop || _e(r), (Oe = Ie[M[r].stance + "_" + t.shirtIndex]) || (Oe = Ee(".././images/sprites/player/arms_" + t.shirtIndex + "_" + M[r].stance + ".png"), Ie[M[r].stance + "_" + t.shirtIndex] = Oe), Oe.isLoaded && e.drawImage(Oe, i.armOffset - i.armScale, -i.armScale, 2 * i.armScale, 2 * i.armScale), n || M[r].melee && !M[r].renderAtop || _e(r), e.restore(), t.animType && !t.vehicle && e.rotate(i.headTilt * (t.dirPlus || 0)), t.backpackIndex > 0 && ((Oe = Te[t.backpackIndex]) || (Oe = Ee(".././images/sprites/backpacks/pack_" + (t.backpackIndex - 1) + ".png"), Te[t.backpackIndex] = Oe), Oe.isLoaded && e.drawImage(Oe, -i.backScale - i.backOffset, -i.backScale, 2 * i.backScale, 2 * i.backScale)), Se || (Se = Ee(".././images/sprites/player/head_1.png")), Se.isLoaded && e.drawImage(Se, -t.scale, -t.scale, 2 * t.scale, 2 * t.scale), (Oe = Ce[t.hatIndex]) || (Oe = Ee(".././images/sprites/hats/hat_" + t.hatIndex + ".png"), Ce[t.hatIndex] = Oe), Oe.isLoaded && e.drawImage(Oe, -t.scale + (E[t.hatIndex].xOff || 0), -t.scale, 2 * t.scale, 2 * t.scale)
    }
    var Oe, Be = {};

    function _e(t, e) {
        p = M[t], (Oe = Be[t]) || (Oe = Ee(".././images/sprites/weapons/weapon_" + t + ".png"), Be[t] = Oe), Oe.isLoaded && (w.save(), e || w.translate(p.xOff, p.yOff), p.melee || w.rotate(-Math.PI / 2), w.drawImage(Oe, -Oe.width * p.scale, -Oe.height * p.scale, Oe.width * p.scale * 2, Oe.height * p.scale * 2), w.restore())
    }

    function Re(t, e, n, r) {
        return t + (r = r || n) >= 0 && t - r <= Dn && e + n >= 0 && e - n <= Un
    }
    var Le = {};

    function De(t, e, n, r, i) {
        for (var a = 0; a < r.length; ++a)(!(p = r[a]).layer && 0 == t || t == p.layer) && (p.update && p.update(m), p.recycle && p.recycle(e, n), je(p, e, n, i))
    }

    function Ue(t) {
        (p = Qe(t)) && (p.wiggleCounter = 500)
    }

    function je(t, e, n, r) {
        if (t.active && Re(t.x - e, t.y - n, t.scale, t.scale))
            if (t.skipRender) t.skipRender = !1;
            else {
                if (w.save(), void 0 != t.alpha && (w.globalAlpha = t.alpha), w.translate(t.x + (t.xWiggle || 0) - e, t.y + (t.yWiggle || 0) - n), w.rotate(t.dir), t.isWeapon) _e(t.typeIndex, !0);
                else {
                    var i = p.scale * (p.wMlt || 1);
                    if (t.src) {
                        if ((Oe = Le[t.src]) || (Oe = Ee(".././images/sprites/" + t.src + ".png"), Le[t.src] = Oe), Oe.isLoaded) {
                            var a = +(t.rPad || 0);
                            w.drawImage(Oe, -(t.getWidth ? t.getWidth() : t.scale) - a - (t.xOff || 0), -i - a, 2 * (t.getWidth ? t.getWidth() : t.scale) + 2 * a, 2 * i + 2 * a)
                        }
                    } else w.fillRect(-p.scale, -i, 2 * p.scale, 2 * i)
                }
                w.restore()
            }
        else r && (t.active = !1)
    }
    var He = 0,
        Ye = 0,
        We = 0;

    function Ne(t, e) {
        Ye += e * Math.cos(t), We += e * Math.sin(t)
    }

    function Fe(t, e, n, r, i, a, o) {
        kt && ((p = yt.add(t, e, n, r, a - i, null)).sid = o, p.rangeMinus = i, p.deathCallback = o ? Xe : Ve)
    }

    function Xe(t) {
        Ke(6, t.x, t.y, 0)
    }

    function Ve(t) {}

    function qe(t, e) {
        for (var n = 0; n < mt.length; ++n) mt[n].sid == t && (mt[n].maxRange = e - mt[n].rangeMinus, mt[n].sid = 0, mt[n].deathCallback = Ve)
    }

    function Ke(t, e, n, r) {
        kt && Kt[2].val && gt.add(t, e, n, r, Kt)
    }

    function ze(t, e) {
        var n = dt.addPlayer(0, t);
        n.init({
            name: e[0]
        }, e[1], e[2]), n.maxHealth = e[3], n.health = e[4], n.shirtIndex = e[5], n.hatIndex = e[6], n.level = e[7], n.visible = !1
    }

    function Ge(t) {
        dt.removePlayer(dt.findBySid(t))
    }

    function Ze(t, e, n) {
        f && (f.interact = e), dt.updatePlayers(t)
    }
    var $e = [{
        type: 1,
        angle: i.hitArc,
        playSound: !0,
        ratio: .1
    }, {
        type: 0,
        angle: i.hitArc,
        playSound: !0,
        ratio: .02
    }, {
        type: 1,
        angle: .6 * Math.PI,
        index: 1
    }, {
        type: 0,
        angle: i.hitArc,
        playSound: !0,
        ratio: .04
    }];

    function Je(t, e, n) {
        if (p = dt.findBySid(t)) {
            var r = $e[n],
                i = M[p.weaponIndex];
            r.playSound && i.sound && Xt.playAt(i.sound, p.x, p.y, .4), p.startAnimation(e, r.type, r.angle, r.ratio, r.index)
        }
    }

    function Qe(t) {
        for (var e = 0; e < ht.length; ++e)
            if (ht[e].sid == t) return ht[e];
        return null
    }

    function tn(t) {
        (p = Qe(t)) && (p.active = !1)
    }

    function en(t, e) {
        if (f) {
            if (e)
                for (var n = 0; n < e.length;)(p = Qe(e[n])) && (p.dt = 0, p.x1 = p.x, p.y1 = p.y, p.x2 = e[n + 1], p.y2 = e[n + 2], p.d1 = p.dir, p.d2 = e[n + 3], p.interpolate = !0), n += 4;
            if (t)
                for (n = 0; n < t.length;) A[t[n]].dynamic ? (nn(Qe(t[n + 1]) || new T(r, i), t[n + 2], t[n + 3], t[n + 4], t[n], t[n + 5], t[n + 1]), n += 6) : (nn(new T(r, i), t[n + 1], t[n + 2], t[n + 3], t[n]), n += 4)
        }
    }

    function nn(t, e, n, r, i, a, o) {
        t.init(e, n, r.round(2), i), t.src = A[t.index].src + (A[t.index].chngMap ? "_" + at : ""), t.layer = A[t.index].layer, t.local = A[t.index].local, t.isWeapon = A[t.index].isWeapon, t.isPickup = A[t.index].isPickup, t.scale = A[t.index].scale, t.width = A[t.index].width, t.rPad = A[t.index].rPad, t.typeIndex = a || 0, t.interpolate = !1, void 0 !== o && (t.sid = o), ht.indexOf(t) < 0 && ht.push(t)
    }

    function rn(t, e) {
        if (!ut.length)
            for (var n = 0; n < i.recycleObjects; ++n) ut.push(new j(r, i));
        var a = -i.maxScreenWidth / 2,
            o = i.maxScreenWidth / ut.length;
        for (n = 0; n < ut.length; ++n) ut[n].init(t + a + r.randInt(0, o), r.randInt(-i.maxScreenHeight / 2, i.maxScreenHeight / 2), 30, r.randInt(0, 1)), a += o
    }

    function an(t, e, n) {
        for (var r = 0; r < U.objects.length; ++r)
            if (t + n >= (p = U.objects[r]).x - p.w && t - n <= p.x + p.w && e + n >= p.y - p.h && e - n <= p.y + p.h) return !1;
        return !0
    }
    nn(new T, -850, -400, 0, 0), nn(new T, -800, 250, 1, 1), nn(new T, 1e3, 100, 1, 3), nn(new T, -1050, -50, 1, 3), nn(new T, 660, -310, .5, 0), nn(new T, 0, 380, 1, 0), nn(new T, -280, 340, 1, 4), nn(new T, 350, -520, 1, 4), nn(new T, -380, -540, .2, 4), nn(new T, -600, -280, 1, 5), nn(new T, -580, 0, 1, 4), nn(new T, 800, 220, 1, 4), nn(new T, 250, -300, 1, 6), nn(new T, 200, 300, 1, 8), nn(new T, 900, -100, 1, 8), nn(new T, 900, 400, 1.35, 16), nn(new T, 0, -550, -Math.PI / 1.8, 16), nn(new T, -450, 400, 1, 18), rn(0);
    var on = ["st", "nd", "rd", "th"],
        sn = 9999,
        ln = 9999;

    function cn(t, e, n) {
        if (Xt.stop("menu"), uiContainer.style.display = "none", spectateContainer.style.display = "block", e) sharedUI.style.display = "block", Tn();
        else {
            try {
                factorem.refreshAds([1], !0)
            } catch (t) {}
            rankCount.innerHTML = t ? "#" + t : "", tokenCount.innerHTML = n ? "+" + n + " tokens" : "No reward", t && (matchOverText.innerHTML = "You finished " + t + on[Math.min(t - 1, on.length - 1)]), t > 2 && function(t) {
                deathMessage.innerHTML = "YOU DIED", deathMessage.style.display = t ? "block" : "none", deathMessage.style.fontSize = "0px", sn = t ? 0 : 9999, setTimeout(function() {
                    deathMessage.style.display = "none"
                }, i.deathFadeout)
            }(t)
        }
    }
    var hn = 0,
        un = [function() {
            return "<div class='infoHeader'>Customize</div><div class='menuSelector' onclick='showSelectScreen(0, this)'>Headgear</div><div class='menuSelector' onclick='showSelectScreen(1, this)'>Clothing</div>"
        }, function() {
            var t = "<div class='infoHeader'>Servers</div><div class='infoText'>",
                e = 0;
            for (var n in o.servers) {
                for (var r = o.servers[n], i = 0, a = 0; a < r.length; a++)
                    for (var s = 0; s < r[a].games.length; s++) i += r[a].games[s].playerCount;
                e += i;
                var l = n.startsWith("vultr:") ? n.slice(6) : n,
                    c = o.regionInfo[l].name;
                t += "<b>" + (c + " - " + i + " players") + "</b>";
                for (a = 0; a < r.length; a++) {
                    var h = r[a];
                    for (s = 0; s < h.games.length; s++) {
                        var u = h.games[s],
                            f = o.server && o.server.region == h.region && o.server.index == h.index && o.gameIndex == s,
                            d = h.region + ":" + h.index + ":" + s,
                            p = c + " " + (h.index + 1) + " - " + u.playerCount + " players";
                        t += "<div class='" + (f ? "selectedMenuSelector" : "subMenuSelector") + "' onclick='switchServer(\"" + d + "\")'>" + (f ? "&#x25B6; " : "") + p + "</div>"
                    }
                }
                t += "<br/>"
            }
            return (t += "<b>" + e + " total players</b>") + "</div>"
        }, function() {
            return u ? "<div class='infoHeader'>Account</div><div class='accItem'>If you leave a game in progress your stats won't be saved</div><div class='accItem'><b>Name </b> " + u.name + "</div><div class='accItem'><b>Level </b> " + u.level + "</div><div class='accItem'><b>Tokens </b> " + u.tokens + "</div><div class='accItem'><b>Most Kills </b> " + u.maxKills + "</div><div class='accItem'><b>Kills </b> " + u.kills + "</div><div class='accItem'><b>Deaths </b> " + u.deaths + "</div><div class='accItem'><b>KDR </b> " + (u.kills / u.deaths).round(2) + "</div><div class='accItem'><b>Games </b> " + u.games + "</div><div class='accItem'><b>Wins </b> " + u.wins + "</div><div class='menuButton accButton' style='margin-top:10px' onclick='logoutAcc()'>Logout</div>" : "<div class='infoHeader'>Login</div><div id='accResp' style='display:none'></div><input type='text' id='accName' class='accInput' maxlength='" + i.maxNameLength + "' placeholder='Username' value='" + (It("foes_username") || "") + "' ontouchend='touchPrompt(event, \"Enter username:\")'></input><input type='text' id='accEmail' class='accInput' maxlength='" + i.maxEmailLength + "'placeholder='Email' ontouchend='touchPrompt(event, \"Enter email:\")'></input><input type='password' id='accPass' class='accInput' maxlength='" + i.maxPassLength + "'placeholder='Password' ontouchend='touchPrompt(event, \"Enter password:\")'></input><div class='menuButton accButton' style='margin-bottom:10px' onclick='loginAcc()'>Login</div><div class='menuButton accButton' onclick='registerAcc()'>Register</div>"
        }, function() {
            for (var t = "<div class='infoHeader'>How to Play</div><div class='infoText'>The last player alive wins</br>", e = Pt ? pn.touch : pn.desktop, n = 0; n < e.length; n++) {
                var r = e[n];
                t += "<b>" + r[0] + "</b> " + r[1] + "</br>"
            }
            return (t += "<span id='createContainerMobile'>Created by <a href='https://yendis.ch/'>Yendis</a></span>") + "</div>"
        }, function() {
            for (var t = "<div class='infoHeader'>Settings</div>", e = 0; e < Kt.length; ++e) t += "<div class='menuSelector' id='settingButton" + e + "' onclick='toggleSetting(" + e + ")'>" + zt(Kt[e].val) + Kt[e].display + "</div>";
            return t
        }];

    function fn(t, e) {
        hn = t, infoCard.innerHTML = "<div class='menuButton infoBack' onclick='hideInfoScreen()'>Back</div>" + un[t](), e || (infoCardParent.classList.toggle("submenuShowing", !0), buttonCardParent.classList.toggle("submenuShowing", !0))
    }

    function dn(t) {
        for (var e = [], n = 0; n < t.length; ++n) e.push({
            index: n,
            rarity: t[n].rarity
        });
        return e.sort(r.orderByRarity), e
    }
    var pn = {
            desktop: [
                ["Movement:", "W,A,S,D"],
                ["Sprint:", "Shift"],
                ["Aim:", "Mouse"],
                ["Interact:", "F"],
                ["Attack:", "Left Mouse or E"],
                ["Toggle Weapon:", "Scroll or Q"],
                ["Drop Weapon:", "C"],
                ["Voice to Text Chat:", "V"]
            ],
            touch: [
                ["Movement:", "Left control"],
                ["Sprint:", "Drag left control to edge"],
                ["Aim:", "Right control"],
                ["Attack:", "Drag right control to edge"],
                ["Interact:", "Touch center of screen"],
                ["Toggle Weapon:", "Touch weapon box in bottom left"],
                ["Drop Weapon:", "Touch ammo display in bottom right"]
            ]
        },
        mn = !1;

    function yn(t, e) {
        void 0 != t ? (mn = !0, hoverDisplay.innerHTML = vn(t, e), hoverDisplay.style.display = "block") : (mn = !1, hoverDisplay.style.display = "none")
    }

    function vn(t, e, n) {
        var r = "";
        1 == t ? (p = C[e], r = "player/arms_" + e + "_0") : (p = E[e], r = "hats/hat_" + e);
        var a = i.rarityCols[p.rarity];
        n && "#ffffff" == a && (a = "#000000");
        var o = "<img class='hoverImg' src='./images/sprites/" + r + ".png'/><div class='hoverInfo'>";
        return o += "<div class='hoverTitle' style='color:" + a + "'>" + p.name, (o += "<div class='" + (n ? "hoverDescDark" : "hoverDescLight") + "'>" + i.rarityNames[p.rarity] + "</div>") + "</div></div>"
    }
    var gn, xn, wn = ["Ranged", "Melee", "Item"];

    function bn(t) {
        xn = t, Et("foes_shirt", t), yn()
    }

    function Sn(t) {
        gn = t, Et("foes_hat", t), yn()
    }
    var kn, Mn, En, In = ["twitter_sh"],
        Cn = {};

    function An(t) {
        uiContainer.style.display = "none", sharedUI.style.display = "none", deathMessage.style.display = "none", spectateContainer.style.display = "none", mainMenuContainer.style.display = t ? "block" : "none", roundTimerMenu.style.display = t ? "block" : "none", createContainer.style.display = t ? "block" : "none", shareContainer.style.display = t ? "block" : "none", shareLink.style.display = Rt() && t ? "block" : "none", linksContainer.style.display = t ? "block" : "none", settingsContainer.style.display = t ? "block" : "none", t && (Tn(), Xt.stop("ambient"), Xt.play("menu", .1, !0)), On()
    }

    function Tn(t, e) {
        loadingContainer.style.display = t ? "block" : "none", t && (An(), loadingText.innerHTML = t, loadingSubtext.innerHTML = e, loadingSubtext.style.display = e ? "block" : "none"), On()
    }

    function Pn(t) {
        reloadButton.style.display = t ? "block" : "none"
    }

    function On() {
        darkener.style.display = "block" != mainMenuContainer.style.display && "block" != loadingContainer.style.display ? "none" : "block"
    }

    function Bn(t) {
        u && t && u.setData(t), 2 == hn && fn(2)
    }

    function _n(t) {
        try {
            accResp.innerHTML = t, accResp.style.display = "block"
        } catch (t) {}
    }

    function Rn(t, e) {
        h() && (t >= 0 && _n("Please Wait..."), c("a", t, e))
    }

    function Ln(t, e, n, r, i) {
        t ? _n(t) : (u = new b(e, n), Et("foes_username", n), Bn(r), i && Et("foes_token", i))
    }
    var Dn = i.maxScreenWidth,
        Un = i.maxScreenHeight;

    function jn() {
        kn = Math.round(window.innerWidth), Mn = Math.round(window.innerHeight);
        var t = Math.max(kn / Dn, Mn / Un) * ft;
        x.width = kn * ft, x.height = Mn * ft, x.style.width = kn + "px", x.style.height = Mn + "px", w.setTransform(t, 0, 0, t, (kn * ft - Dn * t) / 2, (Mn * ft - Un * t) / 2), En = (Mn + kn) / (Dn + Un), document.getElementById("mainMenuContainer").style.transform = "perspective(1px) translate(-50%, -50%) scale(" + En * i.cZoom + ")"
    }

    function Hn() {
        y = Date.now(), m = y - v, v = y, l && function(t) {
            if (sn < 110) {
                sn += .1 * t;
                var e = Math.min(Math.round(sn), 110);
                deathMessage.style.fontSize = e + "px", deathMessage.style.lineHeight = 1.3 * e + "px"
            }
            if (f)
                for (var n = 0; n < f.effects.length; ++n) f.effects[n] && f.effectTimers[f.effects[n]] && (f.effectTimers[f.effects[n]] -= t / 1e3, document.getElementById("pTimer" + f.effects[n]).innerHTML = Math.max(0, Math.ceil(f.effectTimers[f.effects[n]])) + "s");
            for (ln < 180 && (ln += .15 * t, gameOverMessage.style.fontSize = Math.min(Math.round(ln), 180) + "px"), function(t) {
                    kt && (He -= t) <= 0 && (He = r.randInt(1e3, 4e3), Kt[1].val && gt.getCount("screen") < i.screenParticles && gt.add(r.randInt(3, 4), r.randInt(G - Dn / 2, G + Dn / 2), Z - Un / 2, Math.PI / 2 * r.randFloat(.7, .85)))
                }(t), n = 0; n < ct.length; ++n)
                if ((d = ct[n]) && d.visible)
                    if (d.oldX = d.x, d.oldY = d.y, d.forcePos) d.x = d.x2, d.x1 = d.x2, d.y = d.y2, d.y1 = d.y2, d.dir = d.d2, d.d1 = d.d2, d.dt = 0, d.stopAnimation();
                    else {
                        d.dt += t;
                        var a = Math.min(1.5, d.dt / (1.2 * i.serverTickrate));
                        d.x = d.x1 + (d.x2 - d.x1) * a, d.y = d.y1 + (d.y2 - d.y1) * a, d.dir = Math.lerpAngle(d.d2, d.d1, Math.min(1, a)) || 0, d.animate(t)
                    }
            if ((ke -= 1) <= 0 && (ke = 25, Me()), w.globalAlpha = 1, w.fillStyle = i.mapColors[at], w.fillRect(0, 0, Dn, Un), et = Math.atan2(J - Mn / 2, $ - kn / 2) || 0, "true" == It("foes_aimAssist") && Rt() && f && f.alive && !f.vehicle) {
                var o = window.as || localStorage.as || .125 * Math.PI,
                    s = void 0,
                    h = void 0;
                for (n = 0; n < ct.length; ++n)
                    if ((d = ct[n]) != f && d.visible && d.alive) {
                        var m = Math.sqrt(Math.pow(d.y - f.y, 2) + Math.pow(d.x - f.x, 2)),
                            v = Math.atan2(d.y - f.y, d.x - f.x);
                        Math.abs(r.getAngleDist(et, v)) < o && (void 0 == s || m < s) && (s = m, h = v)
                    }
                void 0 != h && (et = h)
            }
            f && f.alive && y - nt >= (Ht ? i.sendRateDown : i.sendRate) && (nt = y, jt && (jt = !1, c("3", Yt)), c("1", r.fixTo(et, 2)));
            var g = (rt = r.getDistance(kn / 2, Mn / 2, $, J)) * i.mouseSen * Math.cos(et),
                x = rt * i.mouseSen * Math.sin(et);
            f && void 0 != f.x && (G = f.x + g), f && void 0 != f.y && (Z = f.y + x);
            var b = G - Dn / 2 - Ye,
                S = Z - Un / 2 - We;
            for (Ye && (Ye = 0), We && (We = 0), Xt.xListen = G, Xt.yListen = Z, De(0, b, S, ut), Re(-b - (i.mapScale + 3e3), -S - (i.mapScale + 3e3), 200) && ((p = lt[1]) || (p = Ee(".././images/shrine/pep.png"), lt[1] = p), p.isLoaded && w.drawImage(p, -b - 200 - (i.mapScale + 3e3), -S - 200 - (i.mapScale + 3e3), 400, 400)), De(-1, b, S, ht), De(-1, b, S, vt, !0), De(0, b, S, ht), De(1, b, S, ht), w.fillStyle = "rgba(0,0,0,0.08)", n = 0; n < ct.length; ++n)(d = ct[n]).visible && d.alive && (w.save(), w.translate(d.x - b, d.y - S), w.rotate(ve(d)), xe(9, 0, 1.3 * d.scale), w.restore());
            for (De(0, b, S, mt), n = 0; n < ct.length; ++n)
                if ((d = ct[n]).visible && d.alive && (w.save(), w.translate(d.x - b, d.y - S), Pe(d), w.restore(), !d.vehicle && (d.stepCounter -= Math.min(r.getDistance(d.oldX, d.oldY, d.x, d.y), 1.5 * i.stepCounter), d.stepOffset = (d.stepCounter / i.stepCounter - .5) * i.stepAnim * d.stepAnimDir, d.stepCounter <= 0))) {
                    d.stepIndex = 0, d.stepAnimDir *= -1;
                    for (var k = 0; k < U.objects.length; ++k)
                        if (p = U.objects[k], d.x >= p.x - p.w && d.x <= p.x + p.w && d.y >= p.y - p.h && d.y <= p.y + p.h) {
                            d.stepIndex = p.stepIndex, p.stepIndex;
                            break
                        }
                    d.stepCounter += i.stepCounter, Xt.playAt("step_" + (d.stepIndex + r.randInt(0, 1)), d.x, d.y, .065)
                }
            De(0, b, S, vt, !0), De(2, b, S, ht), De(1, b, S, vt, !0), Y > q && ((Y = V + (K += t) / 200 * (q - V)) <= q && (Y = q), F = W * (1 - Y), X = N * (1 - Y));
            var E = i.mapScale * Math.max(0, Y);
            if (f) {
                if (w.fillStyle = "#d90000", w.globalAlpha = .18, b <= F - E && w.fillRect(0, 0, F - b - E, Un), F + E - b <= Dn && w.fillRect(F + E - b, 0, Dn - E + b - F, Un), S <= X - E) {
                    var I = Math.max(F - b - E, 0),
                        C = Math.min(2 * E, F + E - b);
                    w.fillRect(I, 0, C, X - S - E)
                }
                X + E - S <= Un && (I = Math.max(F - b - E, 0), C = Math.min(2 * E, F + E - b), w.fillRect(I, X + E - S, C, Un - E + S - X))
            }
            for (w.strokeStyle = ot, w.globalAlpha = 1, w.textBaseline = "middle", w.lineWidth = 10, w.lineJoin = "round", n = 0; n < ct.length; ++n)
                if (d = ct[n], Kt[4].val && l && d.showStats && d.visible && d.alive) {
                    w.font = "30px GameFont", w.textAlign = "center", w.fillStyle = "#fff";
                    var T = d.name;
                    w.strokeText(T, d.x - b, d.y - S - d.scale - i.nameY), w.fillText(T, d.x - b, d.y - S - d.scale - i.nameY), (d.level || d == f && u) && (C = w.measureText(T).width / 2 + 15, w.font = "50px GameFont", w.textAlign = "left", w.strokeText(d.level || u.level, d.x - b + C, d.y - S - d.scale - i.nameY), w.fillText(d.level || u.level, d.x - b + C, d.y - S - d.scale - i.nameY)), w.fillStyle = ot, w.roundRect(d.x - b - i.hpWid - i.hpPad, d.y - S + d.scale - i.hpHei + i.nameY - i.hpPad, 2 * i.hpWid + 2 * i.hpPad, 2 * i.hpHei + 2 * i.hpPad, 6), w.fill(), w.fillStyle = d == f ? "#8ecc51" : "#cc5151", w.fillRect(d.x - b - i.hpWid, d.y - S + d.scale - i.hpHei + i.nameY, 2 * i.hpWid * (d.health / d.maxHealth), 2 * i.hpHei)
                }
            w.strokeStyle = ot, f && f.alive && pt.update(t, w, b, S);
            var P = void 0;
            if (f && f.alive && Kt[4].val && (f.interact && f.interact.isWeapon || "none" != infoDisplay.style.display && (infoDisplay.style.display = "none"), f.interact)) {
                for (p = null, n = 0; n < ht.length; ++n)
                    if (ht[n].sid == f.interact) {
                        p = ht[n];
                        break
                    }
                if (p && p.active && (P = p, w.font = "30px GameFont", w.fillStyle = "#fff", T = Pt ? "" : "press F", w.strokeText(T, p.x - b, p.y - S + p.getScale() + 30), w.fillText(T, p.x - b, p.y - S + p.getScale() + 30), p.isWeapon || p.isPickup)) {
                    "block" != infoDisplay.style.display && (infoDisplay.style.display = "block");
                    var O = p.typeIndex + "" + p.isWeapon;
                    O != H && (H = O, infoDisplay.innerHTML = p.isWeapon ? function(t) {
                        var e = "<span style='color:" + i.rarityCols[t.rarity] + "'>" + t.name + "</span>";
                        return (e += "<div class='infoDSub'>" + wn[t.melee ? 1 : t.use ? 2 : 0] + "</div>") + "<div class='infoDSub'>" + (t.desc || Math.round(1e3 / Math.max(i.serverTickrate, Math.min(1e3, t.reload)) * t.dmg) + (t.bCount ? " x" + t.bCount : "") + " DPS") + "</div>"
                    }(M[p.typeIndex]) : function(t) {
                        return "<span style='color:" + i.rarityCols[0] + "'>" + t.name + "</span><div class='infoDSub'>" + t.desc + "</div>"
                    }(A[p.index]))
                }
            }
            for (interactButton.style.display = Pt && (P || f && f.vehicle) ? "block" : "none", f && f.vehicle ? interactButton.innerText = "exit vehicle" : void 0 != P && (P.isWeapon ? interactButton.innerText = "pickup weapon" : P.isPickup ? interactButton.innerText = "pickup item" : P.src.startsWith("vehicles/") ? interactButton.innerText = "enter vehicle" : P.src.startsWith("crates/") ? interactButton.innerText = "pickup crate" : (console.warn("Unkown interaction type.", P), interactButton.innerText = "interact")), n = 0; n < ct.length; ++n)
                if (d = ct[n], l && d.visible && d.alive && d.chatCooldown > 0) {
                    d.chatCooldown -= t, w.font = "35px GameFont", w.textAlign = "left", C = w.measureText(d.chatMsg).width, I = d.x + d.scale + i.chatOffset - b;
                    var B = d.y - S;
                    w.fillStyle = "rgba(0,0,0,0.2)", w.fillRect(I, B - 17.5 - i.chatPad, C + 2 * i.chatPad, 35 + 2 * i.chatPad), w.fillStyle = "#fff", w.fillText(d.chatMsg, I + i.chatPad, B)
                }
            f && f.alive && (-1 !== Q.id && ge(Q.startX, Q.startY, Q.currentX, Q.currentY), -1 !== tt.id && ge(tt.startX, tt.startY, tt.currentX, tt.currentY))
        }(m), requestAnimFrame(Hn)
    }
    window.addEventListener("resize", jn), jn();
    var Yn = 0;

    function Wn() {
        ++Yn >= 2 && An(!0)
    }
    var Nn = 0,
        Fn = 12e4,
        Xn = 0,
        Vn = [];
    for (var qn in console.verbose = function() {}, console) ! function(t) {
        var e = console[t];
        console[t] = function() {
            Vn.push({
                fn: t,
                args: Array.prototype.slice.call(arguments)
            }), e.apply(this, arguments)
        }
    }(qn);

    function Kn(t) {
        var e = "";
        for (var n in e += t ? "Please keep waiting or contact us on <a href='https://discord.gg/2UYUS3f'>Discord</a> or " : "Please contact us on <a href='https://discord.gg/2UYUS3f'>Discord</a> or ", e += "<a href='https://www.reddit.com/r/foesIO/'>Reddit</a> for support.<br/>", e += "Make sure to copy the data below and include it in your error report:<br/>", e += "<textarea id='loadingError' editable readonly onclick='this.focus();this.select()'>", e += "### User agent data ###\n", navigator) "function" != typeof navigator[n] && (e += n + ": " + navigator[n] + "\n");
        e += "\n", e += "### Local storage ###\n";
        for (var r = 0; r < localStorage.length; r++) e += (n = localStorage.key(r)) + ": " + localStorage.getItem(n) + "\n";
        for (var n in localStorage) "function" != typeof localStorage[n] && (e += n + ": " + navigator[n] + "\n");
        return e += "\n", e += "### Log ###\n", (e += function() {
            for (var t = "", e = 0; e < Vn.length; e++) {
                for (var n = Vn[e], r = "", i = 0; i < n.args.length; i++) {
                    var a = n.args[i];
                    r += "string" == typeof a || "number" == typeof a ? a : JSON.stringify(a), i != n.args.length - 1 && (r += " • ")
                }
                t += n.fn + ": " + (r || "<no message>") + "\n"
            }
            return t
        }()) + "</textarea>"
    }
    window.fetchLog = function() {
        return Vn
    }, setTimeout(function() {
        zn || (Tn("Still loading...?", Kn()), Pn(!0))
    }, 3e4);
    var zn = !1;
    ! function() {
        zn = !0,
            function() {
                for (var t = 0; t < Kt.length; ++t) {
                    var e = It("foes_" + Kt[t].name);
                    Kt[t].val = void 0 != e ? "true" == e : Kt[t].val
                }
            }(), void 0 != window.admob && window.admob.setOptions({
                publisherId: "ca-app-pub-4505182558467475~9149480998",
                interstitialAdId: "ca-app-pub-4505182558467475/5013304175"
            }), window.admob, Rt() && (document.getElementById("downloadButtonContainer").classList.add("cordova"), document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"), document.getElementById("versionLink").style.display = "none", document.getElementById("adParent").style.display = "none", document.getElementById("inGameAd").style.display = "none"),
            function() {
                for (var t = 0; t < 4; ++t) Le["/bullets/bullet_" + t] = Ee(".././images/sprites/bullets/bullet_" + t + ".png")
            }(), fn(3, !0), Xt.play("menu", .1, !0);
        var t = It("foes_mus");
        null == t && (t = 1), qt(1 == t ? 1 : 0),
            function() {
                for (var t = 0; t < In.length; ++t) Cn[In[t]] = It("foes_" + In[t])
            }(), bn(It("foes_shirt") || 0), Sn(It("foes_hat") || 0), nameInput.value = It("foes_name") || "", o.start(function(t, e, n) {
                shareLinkText.innerText = location.href.split("//")[1],
                    function(t, e) {
                        if (!s) {
                            var n = {
                                    enter: Zt,
                                    a: Ln,
                                    ua: Bn,
                                    0: Ze,
                                    1: ze,
                                    2: Ge,
                                    3: Jt,
                                    4: ee,
                                    5: ae,
                                    6: ue,
                                    7: $t,
                                    8: te,
                                    9: en,
                                    20: tn,
                                    10: Qt,
                                    11: Je,
                                    12: le,
                                    13: oe,
                                    14: me,
                                    15: cn,
                                    16: Ne,
                                    17: Fe,
                                    18: qe,
                                    19: Ke,
                                    21: fe,
                                    22: se,
                                    23: Ue,
                                    s: Vt,
                                    c: ye
                                },
                                r = "https:" == location.protocol ? "wss:" : "ws:";
                            try {
                                var i = !1,
                                    o = r + t;
                                console.verbose("Connecting to address", o), (s = new WebSocket(o)).binaryType = "arraybuffer", s.onmessage = function(t) {
                                    var e = new Uint8Array(t.data),
                                        r = a.decode(e),
                                        i = r[0];
                                    e = r[1], n[i].apply(void 0, e)
                                }, s.onopen = function() {
                                    e()
                                }, s.onclose = function() {
                                    i || (console.error("Disconnected", arguments), e("Disconnected"))
                                }, s.onerror = function(t) {
                                    s.readyState != WebSocket.OPEN && (i = !0, console.error("Socket error", arguments), e("Socket error", Kn()))
                                }
                            } catch (t) {
                                console.log("error caught", t)
                            }
                        }
                    }("//" + t + ":8443/?gameIndex=" + n, function(t, e) {
                        t ? (l = !1, Tn(t, e), Pn(!0)) : (l = !0, Wn(), function() {
                            var t = It("foes_token");
                            t && Rn(1, [null, null, t])
                        }())
                    })
            }), window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }, Hn()
    }(), window.enterGame = function() {
        h() && (Et("foes_name", nameInput.value), Tn("Loading..."), c("enter", {
            name: nameInput.value,
            custom: [xn, gn]
        }))
    }, window.shareGame = function(t) {
        Et("foes_" + In[0], 1), Cn[In[0]] = 1, window.open("https://www.youtube.com/channel/UCo-hjA9tDF5Sdfnp6eQD0XA?sub_confirmation=1")
    }, window.toggleSetting = function(t) {
        Kt[t].val = !Kt[t].val, document.getElementById("settingButton" + t).innerHTML = zt(Kt[t].val) + Kt[t].display, Et("foes_" + Kt[t].name, Kt[t].val), void 0 != Kt[t].onChange && Kt[t].onChange(Kt[t].val)
    }, window.showLeaderboard = function() {
        window.open("http://foes.wiki/accounts/leaderboard.html", "_blank")
    }, window.showInfoScreen = fn, window.hideInfoScreen = function() {
        infoCardParent.classList.toggle("submenuShowing", !1), buttonCardParent.classList.toggle("submenuShowing", !1)
    }, window.showSelectScreen = function(t, e) {
        var n = "<div class='menuButton accButton' onclick='showInfoScreen(0)'>Back</div><div class='infoHeader'>" + e.innerHTML + "</div>";
        if (0 == t)
            for (var r = dn(E), a = 0; a < r.length; ++a) {
                var o = r[a].index;
                E[o].unlock && !Cn[E[o].unlock] || (n += Pt ? "<div class='menuSelector' onclick='showInfoScreen(0);selectHat(" + o + ")'>" + vn(0, o, !0) + "</div>" : "<div class='menuSelector' onmouseover='hoverObj(0," + o + ")' onmouseout='hoverObj()' style='color:" + (E[o].rarity ? i.rarityCols[E[o].rarity] : "#353535") + "' onclick='showInfoScreen(0);selectHat(" + o + ")'>" + E[o].name + "</div>")
            } else if (1 == t)
                for (r = dn(C), a = 0; a < r.length; ++a) o = r[a].index, C[o].unlock && !Cn[C[o].unlock] || (n += Pt ? "<div class='menuSelector' onclick='showInfoScreen(0);selectShirt(" + o + ")'>" + vn(1, o, !0) + "</div>" : "<div class='menuSelector' onmouseover='hoverObj(1," + o + ")' onmouseout='hoverObj()' style='color:" + (C[o].rarity ? i.rarityCols[C[o].rarity] : "#353535") + "' onclick='showInfoScreen(0);selectShirt(" + o + ")'>" + C[o].name + "</div>");
        infoCard.innerHTML = n
    }, window.selectHat = Sn, window.selectShirt = bn, window.toggleMenu = An, window.switchServer = function(t) {
        t.startsWith("vultr:") && (t = t.slice(6)), o.switchServer(...t.split(":"))
    }, window.toggleSound = qt, window.hoverObj = yn, window.registerAcc = function() {
        Rn(0, [accName.value, accEmail.value, accPass.value])
    }, window.loginAcc = function() {
        Rn(1, [accName.value, accPass.value, null])
    }, window.logoutAcc = function() {
        Rn(-1), !1 === Mt && localStorage.removeItem("foes_token"), u = null, Bn()
    }, window.incrementWeapon = Ft, window.dropWeapon = function() {
        At(67, 1), setTimeout(function() {
            At(67, 0)
        }, 50)
    }, window.touchPrompt = function(t, e) {
        t.preventDefault();
        var n = prompt(e, t.target.value); - 1 != t.target.maxLength && (n = n.slice(0, t.target.maxLength)), t.target.value = n
    }, window.triggerInteract = Lt, window.addEventListener("keydown", function(t) {
        84 == t.keyCode && cn(3, !1, 10)
    })
}, function(t, e) {
    t.exports.openPorts = 10, t.exports.serverTickrate = 100, t.exports.visionBuffer = 160, t.exports.maxPlayers = 30, t.exports.playerSpread = 3, t.exports.hardMaxPlayers = 40, t.exports.sendRate = 10, t.exports.sendRateDown = 1e3 / 30, t.exports.mouseSen = .2, t.exports.moveKeys = ["up", "down", "left", "right"], t.exports.cZoom = 1.65, t.exports.maxScreenWidth = 1408 * t.exports.cZoom, t.exports.maxScreenHeight = 792 * t.exports.cZoom, t.exports.hearDistance = t.exports.maxScreenWidth / 2, t.exports.voiceDistance = t.exports.maxScreenWidth / 2, t.exports.stepCounter = 220, t.exports.maxSteps = 2, t.exports.volumeMult = 3, t.exports.rarityCols = ["#ffffff", "#71ad53", "#5f9ad2", "#c037cd", "#f0d52e", "#f1484d"], t.exports.rarityNames = ["common", "uncommon", "rare", "epic", "legendary", "exotic"], t.exports.hpPad = 5, t.exports.hpWid = 50, t.exports.hpHei = 4, t.exports.deathFadeout = 3e3, t.exports.startStamina = 1e3, t.exports.startHealth = 1e3, t.exports.borderDmg = 200, t.exports.killStreakTimer = 5e3, t.exports.minVelocityDmg = 100, t.exports.roundTimer = 25e3, t.exports.dmgToStam = .3, t.exports.staminaRegen = 45, t.exports.staminaDelay = 500, t.exports.sprintCost = 15, t.exports.noStamMlt = .5, t.exports.playerSpeed = .0033, t.exports.sprintSpeed = 1.45, t.exports.dashCost = 200, t.exports.dashCountdown = 400, t.exports.dashSpeedRed = .993, t.exports.dashSpeed = .0065, t.exports.wiggleCount = 10, t.exports.headTilt = .85, t.exports.hitArc = .95 * Math.PI, t.exports.stepAnim = 22, t.exports.bOffset = 1.2, t.exports.bulletSpeed = 4.5, t.exports.bulletLayer = 1, t.exports.bulletScale = 85, t.exports.rangeMlt = 1.2, t.exports.shieldAngle = Math.PI / 3, t.exports.weaponSwapTime = 150, t.exports.backScale = 45, t.exports.backOffset = 10, t.exports.tokenRewards = [30, 10, 5], t.exports.tokenPerKill = 10, t.exports.xpPerKill = 100, t.exports.roundXP = 1500, t.exports.chatMax = 20, t.exports.chatCooldown = 2e3, t.exports.chatDuration = 2e3, t.exports.chatPad = 8, t.exports.chatOffset = 15, t.exports.interactRange = 50, t.exports.maxNameLength = 16, t.exports.maxPassLength = 30, t.exports.maxEmailLength = 40, t.exports.nameY = 30, t.exports.playerScale = 45, t.exports.armScale = 52, t.exports.armOffset = 40, t.exports.footOffset = 20, t.exports.footScale = 35, t.exports.buildingTileScale = 165, t.exports.screenParticles = 3, t.exports.recycleObjects = 12, t.exports.mapColors = ["#768F5A", "#fff"], t.exports.borderPad = 10, t.exports.spawnPad = 100, t.exports.mapScale = 12e3, t.exports.treeCount = 7, t.exports.rockCount = 1, t.exports.bushCount = 1, t.exports.flowerCount = 2, t.exports.areaCount = 10, t.exports.gridSize = 48, t.exports.gridCol = Math.ceil(e.mapScale / (e.maxScreenWidth / 2)), t.exports.mapShrinkTimer = 2e4, t.exports.mapShrinks = [.9, .7, .5, .3, .09], t.exports.mapShrinkSpeed = 12e-6
}, function(t, e, n) {
    e.encode = n(10).encode, e.decode = n(16).decode, e.Encoder = n(35).Encoder, e.Decoder = n(36).Decoder, e.createCodec = n(37).createCodec, e.codec = n(38).codec
}, function(t, e, n) {
    (function(e) {
        function n(t) {
            return t && t.isBuffer && t
        }
        t.exports = n(void 0 !== e && e) || n(this.Buffer) || n("undefined" != typeof window && window.Buffer) || this.Buffer
    }).call(this, n(12).Buffer)
}, function(t, e, n) {
    "use strict";
    e.byteLength = function(t) {
        var e = c(t),
            n = e[0],
            r = e[1];
        return 3 * (n + r) / 4 - r
    }, e.toByteArray = function(t) {
        var e, n, r = c(t),
            o = r[0],
            s = r[1],
            l = new a(3 * (o + s) / 4 - s),
            h = 0,
            u = s > 0 ? o - 4 : o;
        for (n = 0; n < u; n += 4) e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)], l[h++] = e >> 16 & 255, l[h++] = e >> 8 & 255, l[h++] = 255 & e;
        return 2 === s && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4, l[h++] = 255 & e), 1 === s && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2, l[h++] = e >> 8 & 255, l[h++] = 255 & e), l
    }, e.fromByteArray = function(t) {
        for (var e, n = t.length, i = n % 3, a = [], o = 0, s = n - i; o < s; o += 16383) a.push(u(t, o, o + 16383 > s ? s : o + 16383));
        return 1 === i ? (e = t[n - 1], a.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], a.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), a.join("")
    };
    for (var r = [], i = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = o.length; s < l; ++s) r[s] = o[s], i[o.charCodeAt(s)] = s;

    function c(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
    }

    function h(t) {
        return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
    }

    function u(t, e, n) {
        for (var r, i = [], a = e; a < n; a += 3) r = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), i.push(h(r));
        return i.join("")
    }
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
}, function(t, e, n) {
    var r = n(0);

    function i(t) {
        return new Array(t)
    }(e = t.exports = i(0)).alloc = i, e.concat = r.concat, e.from = function(t) {
        if (!r.isBuffer(t) && r.isView(t)) t = r.Uint8Array.from(t);
        else if (r.isArrayBuffer(t)) t = new Uint8Array(t);
        else {
            if ("string" == typeof t) return r.from.call(e, t);
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number')
        }
        return Array.prototype.slice.call(t)
    }
}, function(t, e, n) {
    var r = n(0),
        i = r.global;

    function a(t) {
        return new i(t)
    }(e = t.exports = r.hasBuffer ? a(0) : []).alloc = r.hasBuffer && i.alloc || a, e.concat = r.concat, e.from = function(t) {
        if (!r.isBuffer(t) && r.isView(t)) t = r.Uint8Array.from(t);
        else if (r.isArrayBuffer(t)) t = new Uint8Array(t);
        else {
            if ("string" == typeof t) return r.from.call(e, t);
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number')
        }
        return i.from && 1 !== i.from.length ? i.from(t) : new i(t)
    }
}, function(t, e, n) {
    var r = n(0);

    function i(t) {
        return new Uint8Array(t)
    }(e = t.exports = r.hasArrayBuffer ? i(0) : []).alloc = i, e.concat = r.concat, e.from = function(t) {
        if (r.isView(t)) {
            var n = t.byteOffset,
                i = t.byteLength;
            (t = t.buffer).byteLength !== i && (t.slice ? t = t.slice(n, n + i) : (t = new Uint8Array(t)).byteLength !== i && (t = Array.prototype.slice.call(t, n, n + i)))
        } else {
            if ("string" == typeof t) return r.from.call(e, t);
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number')
        }
        return new Uint8Array(t)
    }
}, function(t, e) {
    e.copy = function(t, e, n, r) {
        var i;
        n || (n = 0), r || 0 === r || (r = this.length), e || (e = 0);
        var a = r - n;
        if (t === this && n < e && e < r)
            for (i = a - 1; i >= 0; i--) t[i + e] = this[i + n];
        else
            for (i = 0; i < a; i++) t[i + e] = this[i + n];
        return a
    }, e.toString = function(t, e, n) {
        var r = 0 | e;
        n || (n = this.length);
        for (var i = "", a = 0; r < n;)(a = this[r++]) < 128 ? i += String.fromCharCode(a) : (192 == (224 & a) ? a = (31 & a) << 6 | 63 & this[r++] : 224 == (240 & a) ? a = (15 & a) << 12 | (63 & this[r++]) << 6 | 63 & this[r++] : 240 == (248 & a) && (a = (7 & a) << 18 | (63 & this[r++]) << 12 | (63 & this[r++]) << 6 | 63 & this[r++]), a >= 65536 ? (a -= 65536, i += String.fromCharCode(55296 + (a >>> 10), 56320 + (1023 & a))) : i += String.fromCharCode(a));
        return i
    }, e.write = function(t, e) {
        for (var n = e || (e |= 0), r = t.length, i = 0, a = 0; a < r;)(i = t.charCodeAt(a++)) < 128 ? this[n++] = i : i < 2048 ? (this[n++] = 192 | i >>> 6, this[n++] = 128 | 63 & i) : i < 55296 || i > 57343 ? (this[n++] = 224 | i >>> 12, this[n++] = 128 | i >>> 6 & 63, this[n++] = 128 | 63 & i) : (i = 65536 + (i - 55296 << 10 | t.charCodeAt(a++) - 56320), this[n++] = 240 | i >>> 18, this[n++] = 128 | i >>> 12 & 63, this[n++] = 128 | i >>> 6 & 63, this[n++] = 128 | 63 & i);
        return n - e
    }
}, function(t, e, n) {
    e.setExtPackers = function(t) {
        t.addExtPacker(14, Error, [u, l]), t.addExtPacker(1, EvalError, [u, l]), t.addExtPacker(2, RangeError, [u, l]), t.addExtPacker(3, ReferenceError, [u, l]), t.addExtPacker(4, SyntaxError, [u, l]), t.addExtPacker(5, TypeError, [u, l]), t.addExtPacker(6, URIError, [u, l]), t.addExtPacker(10, RegExp, [h, l]), t.addExtPacker(11, Boolean, [c, l]), t.addExtPacker(12, String, [c, l]), t.addExtPacker(13, Date, [Number, l]), t.addExtPacker(15, Number, [c, l]), "undefined" != typeof Uint8Array && (t.addExtPacker(17, Int8Array, o), t.addExtPacker(18, Uint8Array, o), t.addExtPacker(19, Int16Array, o), t.addExtPacker(20, Uint16Array, o), t.addExtPacker(21, Int32Array, o), t.addExtPacker(22, Uint32Array, o), t.addExtPacker(23, Float32Array, o), "undefined" != typeof Float64Array && t.addExtPacker(24, Float64Array, o), "undefined" != typeof Uint8ClampedArray && t.addExtPacker(25, Uint8ClampedArray, o), t.addExtPacker(26, ArrayBuffer, o), t.addExtPacker(29, DataView, o)), i.hasBuffer && t.addExtPacker(27, a, i.from)
    };
    var r, i = n(0),
        a = i.global,
        o = i.Uint8Array.from,
        s = {
            name: 1,
            message: 1,
            stack: 1,
            columnNumber: 1,
            fileName: 1,
            lineNumber: 1
        };

    function l(t) {
        return r || (r = n(10).encode), r(t)
    }

    function c(t) {
        return t.valueOf()
    }

    function h(t) {
        (t = RegExp.prototype.toString.call(t).split("/")).shift();
        var e = [t.pop()];
        return e.unshift(t.join("/")), e
    }

    function u(t) {
        var e = {};
        for (var n in s) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(7),
        a = i.Uint64BE,
        o = i.Int64BE,
        s = n(0),
        l = n(6),
        c = n(32),
        h = n(14).uint8,
        u = n(4).ExtBuffer,
        f = "undefined" != typeof Uint8Array,
        d = "undefined" != typeof Map,
        p = [];
    p[1] = 212, p[2] = 213, p[4] = 214, p[8] = 215, p[16] = 216, e.getWriteType = function(t) {
        var e = c.getWriteToken(t),
            n = t && t.useraw,
            i = f && t && t.binarraybuffer,
            m = i ? s.isArrayBuffer : s.isBuffer,
            y = i ? function(t, e) {
                w(t, new Uint8Array(e))
            } : w,
            v = d && t && t.usemap ? function(t, n) {
                if (!(n instanceof Map)) return b(t, n);
                var r = n.size;
                e[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](t, r);
                var i = t.codec.encode;
                n.forEach(function(e, n, r) {
                    i(t, n), i(t, e)
                })
            } : b;
        return {
            boolean: function(t, n) {
                e[n ? 195 : 194](t, n)
            },
            function: x,
            number: function(t, n) {
                var r = 0 | n;
                n === r ? e[-32 <= r && r <= 127 ? 255 & r : 0 <= r ? r <= 255 ? 204 : r <= 65535 ? 205 : 206 : -128 <= r ? 208 : -32768 <= r ? 209 : 210](t, r) : e[203](t, n)
            },
            object: n ? function(t, n) {
                if (m(n)) return function(t, n) {
                    var r = n.length;
                    e[r < 32 ? 160 + r : r <= 65535 ? 218 : 219](t, r), t.send(n)
                }(t, n);
                g(t, n)
            } : g,
            string: function(t) {
                return function(n, r) {
                    var i = r.length,
                        a = 5 + 3 * i;
                    n.offset = n.reserve(a);
                    var o = n.buffer,
                        s = t(i),
                        c = n.offset + s;
                    i = l.write.call(o, r, c);
                    var h = t(i);
                    if (s !== h) {
                        var u = c + h - s,
                            f = c + i;
                        l.copy.call(o, o, u, c, f)
                    }
                    e[1 === h ? 160 + i : h <= 3 ? 215 + h : 219](n, i), n.offset += i
                }
            }(n ? function(t) {
                return t < 32 ? 1 : t <= 65535 ? 3 : 5
            } : function(t) {
                return t < 32 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5
            }),
            symbol: x,
            undefined: x
        };

        function g(t, n) {
            if (null === n) return x(t, n);
            if (m(n)) return y(t, n);
            if (r(n)) return function(t, n) {
                var r = n.length;
                e[r < 16 ? 144 + r : r <= 65535 ? 220 : 221](t, r);
                for (var i = t.codec.encode, a = 0; a < r; a++) i(t, n[a])
            }(t, n);
            if (a.isUint64BE(n)) return function(t, n) {
                e[207](t, n.toArray())
            }(t, n);
            if (o.isInt64BE(n)) return function(t, n) {
                e[211](t, n.toArray())
            }(t, n);
            var i = t.codec.getExtPacker(n);
            if (i && (n = i(n)), n instanceof u) return function(t, n) {
                var r = n.buffer,
                    i = r.length,
                    a = p[i] || (i < 255 ? 199 : i <= 65535 ? 200 : 201);
                e[a](t, i), h[n.type](t), t.send(r)
            }(t, n);
            v(t, n)
        }

        function x(t, n) {
            e[192](t, n)
        }

        function w(t, n) {
            var r = n.length;
            e[r < 255 ? 196 : r <= 65535 ? 197 : 198](t, r), t.send(n)
        }

        function b(t, n) {
            var r = Object.keys(n),
                i = r.length;
            e[i < 16 ? 128 + i : i <= 65535 ? 222 : 223](t, i);
            var a = t.codec.encode;
            r.forEach(function(e) {
                a(t, e), a(t, n[e])
            })
        }
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(7),
        a = i.Uint64BE,
        o = i.Int64BE,
        s = n(14).uint8,
        l = n(0),
        c = l.global,
        h = l.hasBuffer && "TYPED_ARRAY_SUPPORT" in c && !c.TYPED_ARRAY_SUPPORT,
        u = l.hasBuffer && c.prototype || {};

    function f() {
        var t = s.slice();
        return t[196] = d(196), t[197] = p(197), t[198] = m(198), t[199] = d(199), t[200] = p(200), t[201] = m(201), t[202] = y(202, 4, u.writeFloatBE || x, !0), t[203] = y(203, 8, u.writeDoubleBE || w, !0), t[204] = d(204), t[205] = p(205), t[206] = m(206), t[207] = y(207, 8, v), t[208] = d(208), t[209] = p(209), t[210] = m(210), t[211] = y(211, 8, g), t[217] = d(217), t[218] = p(218), t[219] = m(219), t[220] = p(220), t[221] = m(221), t[222] = p(222), t[223] = m(223), t
    }

    function d(t) {
        return function(e, n) {
            var r = e.reserve(2),
                i = e.buffer;
            i[r++] = t, i[r] = n
        }
    }

    function p(t) {
        return function(e, n) {
            var r = e.reserve(3),
                i = e.buffer;
            i[r++] = t, i[r++] = n >>> 8, i[r] = n
        }
    }

    function m(t) {
        return function(e, n) {
            var r = e.reserve(5),
                i = e.buffer;
            i[r++] = t, i[r++] = n >>> 24, i[r++] = n >>> 16, i[r++] = n >>> 8, i[r] = n
        }
    }

    function y(t, e, n, r) {
        return function(i, a) {
            var o = i.reserve(e + 1);
            i.buffer[o++] = t, n.call(i.buffer, a, o, r)
        }
    }

    function v(t, e) {
        new a(this, e, t)
    }

    function g(t, e) {
        new o(this, e, t)
    }

    function x(t, e) {
        r.write(this, t, e, !1, 23, 4)
    }

    function w(t, e) {
        r.write(this, t, e, !1, 52, 8)
    }
    e.getWriteToken = function(t) {
        return t && t.uint8array ? function() {
            var t = f();
            return t[202] = y(202, 4, x), t[203] = y(203, 8, w), t
        }() : h || l.hasBuffer && t && t.safe ? function() {
            var t = s.slice();
            return t[196] = y(196, 1, c.prototype.writeUInt8), t[197] = y(197, 2, c.prototype.writeUInt16BE), t[198] = y(198, 4, c.prototype.writeUInt32BE), t[199] = y(199, 1, c.prototype.writeUInt8), t[200] = y(200, 2, c.prototype.writeUInt16BE), t[201] = y(201, 4, c.prototype.writeUInt32BE), t[202] = y(202, 4, c.prototype.writeFloatBE), t[203] = y(203, 8, c.prototype.writeDoubleBE), t[204] = y(204, 1, c.prototype.writeUInt8), t[205] = y(205, 2, c.prototype.writeUInt16BE), t[206] = y(206, 4, c.prototype.writeUInt32BE), t[207] = y(207, 8, v), t[208] = y(208, 1, c.prototype.writeInt8), t[209] = y(209, 2, c.prototype.writeInt16BE), t[210] = y(210, 4, c.prototype.writeInt32BE), t[211] = y(211, 8, g), t[217] = y(217, 1, c.prototype.writeUInt8), t[218] = y(218, 2, c.prototype.writeUInt16BE), t[219] = y(219, 4, c.prototype.writeUInt32BE), t[220] = y(220, 2, c.prototype.writeUInt16BE), t[221] = y(221, 4, c.prototype.writeUInt32BE), t[222] = y(222, 2, c.prototype.writeUInt16BE), t[223] = y(223, 4, c.prototype.writeUInt32BE), t
        }() : f()
    }
}, function(t, e, n) {
    e.setExtUnpackers = function(t) {
        t.addExtUnpacker(14, [s, c(Error)]), t.addExtUnpacker(1, [s, c(EvalError)]), t.addExtUnpacker(2, [s, c(RangeError)]), t.addExtUnpacker(3, [s, c(ReferenceError)]), t.addExtUnpacker(4, [s, c(SyntaxError)]), t.addExtUnpacker(5, [s, c(TypeError)]), t.addExtUnpacker(6, [s, c(URIError)]), t.addExtUnpacker(10, [s, l]), t.addExtUnpacker(11, [s, h(Boolean)]), t.addExtUnpacker(12, [s, h(String)]), t.addExtUnpacker(13, [s, h(Date)]), t.addExtUnpacker(15, [s, h(Number)]), "undefined" != typeof Uint8Array && (t.addExtUnpacker(17, h(Int8Array)), t.addExtUnpacker(18, h(Uint8Array)), t.addExtUnpacker(19, [u, h(Int16Array)]), t.addExtUnpacker(20, [u, h(Uint16Array)]), t.addExtUnpacker(21, [u, h(Int32Array)]), t.addExtUnpacker(22, [u, h(Uint32Array)]), t.addExtUnpacker(23, [u, h(Float32Array)]), "undefined" != typeof Float64Array && t.addExtUnpacker(24, [u, h(Float64Array)]), "undefined" != typeof Uint8ClampedArray && t.addExtUnpacker(25, h(Uint8ClampedArray)), t.addExtUnpacker(26, u), t.addExtUnpacker(29, [u, h(DataView)])), i.hasBuffer && t.addExtUnpacker(27, h(a))
    };
    var r, i = n(0),
        a = i.global,
        o = {
            name: 1,
            message: 1,
            stack: 1,
            columnNumber: 1,
            fileName: 1,
            lineNumber: 1
        };

    function s(t) {
        return r || (r = n(16).decode), r(t)
    }

    function l(t) {
        return RegExp.apply(null, t)
    }

    function c(t) {
        return function(e) {
            var n = new t;
            for (var r in o) n[r] = e[r];
            return n
        }
    }

    function h(t) {
        return function(e) {
            return new t(e)
        }
    }

    function u(t) {
        return new Uint8Array(t).buffer
    }
}, function(t, e, n) {
    var r = n(18);

    function i(t) {
        var e, n = new Array(256);
        for (e = 0; e <= 127; e++) n[e] = a(e);
        for (e = 128; e <= 143; e++) n[e] = s(e - 128, t.map);
        for (e = 144; e <= 159; e++) n[e] = s(e - 144, t.array);
        for (e = 160; e <= 191; e++) n[e] = s(e - 160, t.str);
        for (n[192] = a(null), n[193] = null, n[194] = a(!1), n[195] = a(!0), n[196] = o(t.uint8, t.bin), n[197] = o(t.uint16, t.bin), n[198] = o(t.uint32, t.bin), n[199] = o(t.uint8, t.ext), n[200] = o(t.uint16, t.ext), n[201] = o(t.uint32, t.ext), n[202] = t.float32, n[203] = t.float64, n[204] = t.uint8, n[205] = t.uint16, n[206] = t.uint32, n[207] = t.uint64, n[208] = t.int8, n[209] = t.int16, n[210] = t.int32, n[211] = t.int64, n[212] = s(1, t.ext), n[213] = s(2, t.ext), n[214] = s(4, t.ext), n[215] = s(8, t.ext), n[216] = s(16, t.ext), n[217] = o(t.uint8, t.str), n[218] = o(t.uint16, t.str), n[219] = o(t.uint32, t.str), n[220] = o(t.uint16, t.array), n[221] = o(t.uint32, t.array), n[222] = o(t.uint16, t.map), n[223] = o(t.uint32, t.map), e = 224; e <= 255; e++) n[e] = a(e - 256);
        return n
    }

    function a(t) {
        return function() {
            return t
        }
    }

    function o(t, e) {
        return function(n) {
            var r = t(n);
            return e(n, r)
        }
    }

    function s(t, e) {
        return function(n) {
            return e(n, t)
        }
    }
    e.getReadToken = function(t) {
        var e = r.getReadFormat(t);
        return t && t.useraw ? function(t) {
            var e, n = i(t).slice();
            for (n[217] = n[196], n[218] = n[197], n[219] = n[198], e = 160; e <= 191; e++) n[e] = s(e - 160, t.bin);
            return n
        }(e) : i(e)
    }
}, function(t, e, n) {
    e.Encoder = a;
    var r = n(19),
        i = n(11).EncodeBuffer;

    function a(t) {
        if (!(this instanceof a)) return new a(t);
        i.call(this, t)
    }
    a.prototype = new i, r.mixin(a.prototype), a.prototype.encode = function(t) {
        this.write(t), this.emit("data", this.read())
    }, a.prototype.end = function(t) {
        arguments.length && this.encode(t), this.flush(), this.emit("end")
    }
}, function(t, e, n) {
    e.Decoder = a;
    var r = n(19),
        i = n(17).DecodeBuffer;

    function a(t) {
        if (!(this instanceof a)) return new a(t);
        i.call(this, t)
    }
    a.prototype = new i, r.mixin(a.prototype), a.prototype.decode = function(t) {
        arguments.length && this.write(t), this.flush()
    }, a.prototype.push = function(t) {
        this.emit("data", t)
    }, a.prototype.end = function(t) {
        this.decode(t), this.emit("end")
    }
}, function(t, e, n) {
    n(8), n(3), e.createCodec = n(2).createCodec
}, function(t, e, n) {
    n(8), n(3), e.codec = {
        preset: n(2).preset
    }
}, function(t, e, n) {
    var r = n(40),
        i = n(47);

    function a(t, e, n, r, i) {
        "localhost" == location.hostname && (window.location.hostname = "127.0.0.1"), this.debugLog = !1, this.baseUrl = t, this.lobbySize = n, this.devPort = e, this.lobbySpread = r, this.rawIPs = !!i, this.server = void 0, this.gameIndex = void 0, this.callback = void 0, this.errorCallback = void 0, this.processServers(vultr.servers)
    }
    a.prototype.regionInfo = {
        0: {
            name: "Local",
            latitude: 0,
            longitude: 0
        },
        1: {
            name: "New Jersey",
            latitude: 40.1393329,
            longitude: -75.8521818
        },
        2: {
            name: "Chicago",
            latitude: 41.8339037,
            longitude: -87.872238
        },
        3: {
            name: "Dallas",
            latitude: 32.8208751,
            longitude: -96.8714229
        },
        4: {
            name: "Seattle",
            latitude: 47.6149942,
            longitude: -122.4759879
        },
        5: {
            name: "Los Angeles",
            latitude: 34.0207504,
            longitude: -118.691914
        },
        6: {
            name: "Atlanta",
            latitude: 33.7676334,
            longitude: -84.5610332
        },
        7: {
            name: "Amsterdam",
            latitude: 52.3745287,
            longitude: 4.7581878
        },
        8: {
            name: "London",
            latitude: 51.5283063,
            longitude: -.382486
        },
        9: {
            name: "Frankfurt",
            latitude: 50.1211273,
            longitude: 8.496137
        },
        12: {
            name: "Silicon Valley",
            latitude: 37.4024714,
            longitude: -122.3219752
        },
        19: {
            name: "Sydney",
            latitude: -33.8479715,
            longitude: 150.651084
        },
        24: {
            name: "Paris",
            latitude: 48.8588376,
            longitude: 2.2773454
        },
        25: {
            name: "Tokyo",
            latitude: 35.6732615,
            longitude: 139.569959
        },
        39: {
            name: "Miami",
            latitude: 25.7823071,
            longitude: -80.3012156
        },
        40: {
            name: "Singapore",
            latitude: 1.3147268,
            longitude: 103.7065876
        }
    }, a.prototype.start = function(t, e) {
        this.callback = t, this.errorCallback = e;
        var n = this.parseServerQuery();
        n ? (this.log("Found server in query."), this.password = n[3], this.connect(n[0], n[1], n[2])) : (this.log("Pinging servers..."), this.pingServers())
    }, a.prototype.parseServerQuery = function() {
        var t = r.parse(location.href, !0),
            e = t.query.server;
        if ("string" == typeof e) {
            e.startsWith("vultr:") && (e = e.slice(6));
            var n = e.split(":");
            if (3 == n.length) return [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), t.query.password];
            this.errorCallback("Invalid number of server parameters in " + e)
        }
    }, a.prototype.findServer = function(t, e) {
        var n = this.servers[t];
        if (Array.isArray(n)) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                if (i.index == e) return i
            }
            console.warn("Could not find server in region " + t + " with index " + e + ".")
        } else this.errorCallback("No server list for region " + t)
    }, a.prototype.pingServers = function() {
        var t = this,
            e = [];
        for (var n in this.servers)
            if (this.servers.hasOwnProperty(n)) {
                var r = this.servers[n],
                    i = r[Math.floor(Math.random() * r.length)];
                void 0 != i ? function(r, i) {
                    var a = new XMLHttpRequest;
                    a.onreadystatechange = function(r) {
                        var a = r.target;
                        if (4 == a.readyState)
                            if (200 == a.status) {
                                for (var o = 0; o < e.length; o++) e[o].abort();
                                t.log("Connecting to region", i.region);
                                var s = t.seekServer(i.region);
                                t.connect(s[0], s[1], s[2])
                            } else console.warn("Error pinging " + i.ip + " in region " + n)
                    };
                    var o = "//" + t.serverAddress(i.ip, !0) + ":" + t.serverPort(i) + "/ping";
                    a.open("GET", o, !0), a.send(null), t.log("Pinging", o), e.push(a)
                }(0, i) : console.log("No target server for region " + n)
            }
    }, a.prototype.seekServer = function(t, e, n) {
        void 0 == n && (n = "random"), void 0 == e && (e = !1);
        const r = ["random"];
        var i = this.lobbySize,
            a = this.lobbySpread,
            o = this.servers[t].flatMap(function(t) {
                var e = 0;
                return t.games.map(function(n) {
                    var r = e++;
                    return {
                        region: t.region,
                        index: t.index * t.games.length + r,
                        gameIndex: r,
                        gameCount: t.games.length,
                        playerCount: n.playerCount,
                        isPrivate: n.isPrivate
                    }
                })
            }).filter(function(t) {
                return !t.isPrivate
            }).filter(function(t) {
                return !e || 0 == t.playerCount && t.gameIndex >= t.gameCount / 2
            }).filter(function(t) {
                return "random" == n || r[t.index % r.length].key == n
            }).sort(function(t, e) {
                return e.playerCount - t.playerCount
            }).filter(function(t) {
                return t.playerCount < i
            });
        if (e && o.reverse(), 0 != o.length) {
            var s = Math.min(a, o.length),
                l = Math.floor(Math.random() * s),
                c = o[l = Math.min(l, o.length - 1)],
                h = c.region,
                u = (l = Math.floor(c.index / c.gameCount), c.index % c.gameCount);
            return this.log("Found server."), [h, l, u]
        }
        this.errorCallback("No open servers.")
    }, a.prototype.connect = function(t, e, n) {
        if (!this.connected) {
            var r = this.findServer(t, e);
            void 0 != r ? (this.log("Connecting to server", r, "with game index", n), r.games[n].playerCount >= this.lobbySize ? this.errorCallback("Server is already full.") : (window.history.replaceState(document.title, document.title, this.generateHref(t, e, n, this.password)), this.server = r, this.gameIndex = n, this.log("Calling callback with address", this.serverAddress(r.ip), "on port", this.serverPort(r), "with game index", n), this.callback(this.serverAddress(r.ip), this.serverPort(r), n))) : this.errorCallback("Failed to find server for region " + t + " and index " + e)
        }
    }, a.prototype.switchServer = function(t, e, n, r) {
        this.switchingServers = !0, window.location.href = this.generateHref(t, e, n, r)
    }, a.prototype.generateHref = function(t, e, n, r) {
        var i = "/?server=" + t + ":" + e + ":" + n;
        return r && (i += "&password=" + encodeURIComponent(r)), i
    }, a.prototype.serverAddress = function(t, e) {
        return "127.0.0.1" == t || "7f000001" == t || "903d62ef5d1c2fecdcaeb5e7dd485eff" == t ? window.location.hostname : this.rawIPs ? e ? "ip_" + this.hashIP(t) + "." + this.baseUrl : t : "ip_" + t + "." + this.baseUrl
    }, a.prototype.serverPort = function(t) {
        return 0 == t.region ? this.devPort : location.protocol.startsWith("https") ? 443 : 80
    }, a.prototype.processServers = function(t) {
        for (var e = {}, n = 0; n < t.length; n++) {
            var r = t[n],
                i = e[r.region];
            void 0 == i && (i = [], e[r.region] = i), i.push(r)
        }
        for (var a in e) e[a] = e[a].sort(function(t, e) {
            return t.index - e.index
        });
        this.servers = e
    }, a.prototype.ipToHex = function(t) {
        return t.split(".").map(t => ("00" + parseInt(t).toString(16)).substr(-2)).join("").toLowerCase()
    }, a.prototype.hashIP = function(t) {
        return i(this.ipToHex(t))
    }, a.prototype.log = function() {
        return this.debugLog ? console.log.apply(void 0, arguments) : console.verbose ? console.verbose.apply(void 0, arguments) : void 0
    }, window.testVultrClient = function() {
        var t = 1;

        function e(e, n) {
            (e = `${e}`) == (n = `${n}`) ? console.log(`Assert ${t} passed.`): console.warn(`Assert ${t} failed. Expected ${n}, got ${e}.`), t++
        }
        var n = new a("test.io", -1, 5, 1, !1);
        n.errorCallback = function(t) {}, n.processServers(function(t) {
            var e = [];
            for (var n in t)
                for (var r = t[n], i = 0; i < r.length; i++) e.push({
                    ip: n + ":" + i,
                    scheme: "testing",
                    region: n,
                    index: i,
                    games: r[i].map(t => ({
                        playerCount: t,
                        isPrivate: !1
                    }))
                });
            return e
        }({
            1: [
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            2: [
                [5, 1, 0, 0],
                [0, 0, 0, 0]
            ],
            3: [
                [5, 0, 1, 5],
                [0, 0, 0, 0]
            ],
            4: [
                [5, 1, 1, 5],
                [1, 0, 0, 0]
            ],
            5: [
                [5, 1, 1, 5],
                [1, 0, 4, 0]
            ],
            6: [
                [5, 5, 5, 5],
                [2, 3, 1, 4]
            ],
            7: [
                [5, 5, 5, 5],
                [5, 5, 5, 5]
            ]
        })), e(n.seekServer(1, !1), [1, 0, 0]), e(n.seekServer(1, !0), [1, 1, 3]), e(n.seekServer(2, !1), [2, 0, 1]), e(n.seekServer(2, !0), [2, 1, 3]), e(n.seekServer(3, !1), [3, 0, 2]), e(n.seekServer(3, !0), [3, 1, 3]), e(n.seekServer(4, !1), [4, 0, 1]), e(n.seekServer(4, !0), [4, 1, 3]), e(n.seekServer(5, !1), [5, 1, 2]), e(n.seekServer(5, !0), [5, 1, 3]), e(n.seekServer(6, !1), [6, 1, 3]), e(n.seekServer(6, !0), void 0), e(n.seekServer(7, !1), void 0), e(n.seekServer(7, !0), void 0), console.log("Tests passed.")
    };
    var o = function(t, e) {
        return t.concat(e)
    };
    Array.prototype.flatMap = function(t) {
        return function(t, e) {
            return e.map(t).reduce(o, [])
        }(t, this)
    }, t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(41),
        i = n(43);

    function a() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    e.parse = x, e.resolve = function(t, e) {
        return x(t, !1, !0).resolve(e)
    }, e.resolveObject = function(t, e) {
        return t ? x(t, !1, !0).resolveObject(e) : e
    }, e.format = function(t) {
        return i.isString(t) && (t = x(t)), t instanceof a ? t.format() : a.prototype.format.call(t)
    }, e.Url = a;
    var o = /^([a-z0-9.+-]+:)/i,
        s = /:[0-9]*$/,
        l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        h = ["'"].concat(c),
        u = ["%", "/", "?", ";", "#"].concat(h),
        f = ["/", "?", "#"],
        d = /^[+a-z0-9A-Z_-]{0,63}$/,
        p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        m = {
            javascript: !0,
            "javascript:": !0
        },
        y = {
            javascript: !0,
            "javascript:": !0
        },
        v = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        g = n(44);

    function x(t, e, n) {
        if (t && i.isObject(t) && t instanceof a) return t;
        var r = new a;
        return r.parse(t, e, n), r
    }
    a.prototype.parse = function(t, e, n) {
        if (!i.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var a = t.indexOf("?"),
            s = -1 !== a && a < t.indexOf("#") ? "?" : "#",
            c = t.split(s);
        c[0] = c[0].replace(/\\/g, "/");
        var x = t = c.join(s);
        if (x = x.trim(), !n && 1 === t.split("#").length) {
            var w = l.exec(x);
            if (w) return this.path = x, this.href = x, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = e ? g.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var b = o.exec(x);
        if (b) {
            var S = (b = b[0]).toLowerCase();
            this.protocol = S, x = x.substr(b.length)
        }
        if (n || b || x.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var k = "//" === x.substr(0, 2);
            !k || b && y[b] || (x = x.substr(2), this.slashes = !0)
        }
        if (!y[b] && (k || b && !v[b])) {
            for (var M, E, I = -1, C = 0; C < f.length; C++) - 1 !== (A = x.indexOf(f[C])) && (-1 === I || A < I) && (I = A);
            for (-1 !== (E = -1 === I ? x.lastIndexOf("@") : x.lastIndexOf("@", I)) && (M = x.slice(0, E), x = x.slice(E + 1), this.auth = decodeURIComponent(M)), I = -1, C = 0; C < u.length; C++) {
                var A; - 1 !== (A = x.indexOf(u[C])) && (-1 === I || A < I) && (I = A)
            } - 1 === I && (I = x.length), this.host = x.slice(0, I), x = x.slice(I), this.parseHost(), this.hostname = this.hostname || "";
            var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!T)
                for (var P = this.hostname.split(/\./), O = (C = 0, P.length); C < O; C++) {
                    var B = P[C];
                    if (B && !B.match(d)) {
                        for (var _ = "", R = 0, L = B.length; R < L; R++) B.charCodeAt(R) > 127 ? _ += "x" : _ += B[R];
                        if (!_.match(d)) {
                            var D = P.slice(0, C),
                                U = P.slice(C + 1),
                                j = B.match(p);
                            j && (D.push(j[1]), U.unshift(j[2])), U.length && (x = "/" + U.join(".") + x), this.hostname = D.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), T || (this.hostname = r.toASCII(this.hostname));
            var H = this.port ? ":" + this.port : "",
                Y = this.hostname || "";
            this.host = Y + H, this.href += this.host, T && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== x[0] && (x = "/" + x))
        }
        if (!m[S])
            for (C = 0, O = h.length; C < O; C++) {
                var W = h[C];
                if (-1 !== x.indexOf(W)) {
                    var N = encodeURIComponent(W);
                    N === W && (N = escape(W)), x = x.split(W).join(N)
                }
            }
        var F = x.indexOf("#"); - 1 !== F && (this.hash = x.substr(F), x = x.slice(0, F));
        var X = x.indexOf("?");
        if (-1 !== X ? (this.search = x.substr(X), this.query = x.substr(X + 1), e && (this.query = g.parse(this.query)), x = x.slice(0, X)) : e && (this.search = "", this.query = {}), x && (this.pathname = x), v[S] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            H = this.pathname || "";
            var V = this.search || "";
            this.path = H + V
        }
        return this.href = this.format(), this
    }, a.prototype.format = function() {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            a = !1,
            o = "";
        this.host ? a = t + this.host : this.hostname && (a = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (a += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (o = g.stringify(this.query));
        var s = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || v[e]) && !1 !== a ? (a = "//" + (a || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : a || (a = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), e + a + (n = n.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t)
        })) + (s = s.replace("#", "%23")) + r
    }, a.prototype.resolve = function(t) {
        return this.resolveObject(x(t, !1, !0)).format()
    }, a.prototype.resolveObject = function(t) {
        if (i.isString(t)) {
            var e = new a;
            e.parse(t, !1, !0), t = e
        }
        for (var n = new a, r = Object.keys(this), o = 0; o < r.length; o++) {
            var s = r[o];
            n[s] = this[s]
        }
        if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;
        if (t.slashes && !t.protocol) {
            for (var l = Object.keys(t), c = 0; c < l.length; c++) {
                var h = l[c];
                "protocol" !== h && (n[h] = t[h])
            }
            return v[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (t.protocol && t.protocol !== n.protocol) {
            if (!v[t.protocol]) {
                for (var u = Object.keys(t), f = 0; f < u.length; f++) {
                    var d = u[f];
                    n[d] = t[d]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = t.protocol, t.host || y[t.protocol]) n.pathname = t.pathname;
            else {
                for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()););
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
            }
            if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                var m = n.pathname || "",
                    g = n.search || "";
                n.path = m + g
            }
            return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
        }
        var x = n.pathname && "/" === n.pathname.charAt(0),
            w = t.host || t.pathname && "/" === t.pathname.charAt(0),
            b = w || x || n.host && t.pathname,
            S = b,
            k = n.pathname && n.pathname.split("/") || [],
            M = (p = t.pathname && t.pathname.split("/") || [], n.protocol && !v[n.protocol]);
        if (M && (n.hostname = "", n.port = null, n.host && ("" === k[0] ? k[0] = n.host : k.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), b = b && ("" === p[0] || "" === k[0])), w) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, k = p;
        else if (p.length) k || (k = []), k.pop(), k = k.concat(p), n.search = t.search, n.query = t.query;
        else if (!i.isNullOrUndefined(t.search)) return M && (n.hostname = n.host = k.shift(), (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift())), n.search = t.search, n.query = t.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
        if (!k.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var E = k.slice(-1)[0], I = (n.host || t.host || k.length > 1) && ("." === E || ".." === E) || "" === E, C = 0, A = k.length; A >= 0; A--) "." === (E = k[A]) ? k.splice(A, 1) : ".." === E ? (k.splice(A, 1), C++) : C && (k.splice(A, 1), C--);
        if (!b && !S)
            for (; C--; C) k.unshift("..");
        !b || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), I && "/" !== k.join("/").substr(-1) && k.push("");
        var T, P = "" === k[0] || k[0] && "/" === k[0].charAt(0);
        return M && (n.hostname = n.host = P ? "" : k.length ? k.shift() : "", (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift())), (b = b || n.host && k.length) && !P && k.unshift(""), k.length ? n.pathname = k.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
    }, a.prototype.parseHost = function() {
        var t = this.host,
            e = s.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    }
}, function(t, e, n) {
    (function(t, r) {
        var i; /*! https://mths.be/punycode v1.4.1 by @mathias */
        ! function(a) {
            "object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType;
            var o = "object" == typeof r && r;
            o.global !== o && o.window !== o && o.self;
            var s, l = 2147483647,
                c = 36,
                h = 1,
                u = 26,
                f = 38,
                d = 700,
                p = 72,
                m = 128,
                y = "-",
                v = /^xn--/,
                g = /[^\x20-\x7E]/,
                x = /[\x2E\u3002\uFF0E\uFF61]/g,
                w = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                b = c - h,
                S = Math.floor,
                k = String.fromCharCode;

            function M(t) {
                throw new RangeError(w[t])
            }

            function E(t, e) {
                for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                return r
            }

            function I(t, e) {
                var n = t.split("@"),
                    r = "";
                return n.length > 1 && (r = n[0] + "@", t = n[1]), r + E((t = t.replace(x, ".")).split("."), e).join(".")
            }

            function C(t) {
                for (var e, n, r = [], i = 0, a = t.length; i < a;)(e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < a ? 56320 == (64512 & (n = t.charCodeAt(i++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--) : r.push(e);
                return r
            }

            function A(t) {
                return E(t, function(t) {
                    var e = "";
                    return t > 65535 && (e += k((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + k(t)
                }).join("")
            }

            function T(t) {
                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : c
            }

            function P(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function O(t, e, n) {
                var r = 0;
                for (t = n ? S(t / d) : t >> 1, t += S(t / e); t > b * u >> 1; r += c) t = S(t / b);
                return S(r + (b + 1) * t / (t + f))
            }

            function B(t) {
                var e, n, r, i, a, o, s, f, d, v, g = [],
                    x = t.length,
                    w = 0,
                    b = m,
                    k = p;
                for ((n = t.lastIndexOf(y)) < 0 && (n = 0), r = 0; r < n; ++r) t.charCodeAt(r) >= 128 && M("not-basic"), g.push(t.charCodeAt(r));
                for (i = n > 0 ? n + 1 : 0; i < x;) {
                    for (a = w, o = 1, s = c; i >= x && M("invalid-input"), ((f = T(t.charCodeAt(i++))) >= c || f > S((l - w) / o)) && M("overflow"), w += f * o, !(f < (d = s <= k ? h : s >= k + u ? u : s - k)); s += c) o > S(l / (v = c - d)) && M("overflow"), o *= v;
                    k = O(w - a, e = g.length + 1, 0 == a), S(w / e) > l - b && M("overflow"), b += S(w / e), w %= e, g.splice(w++, 0, b)
                }
                return A(g)
            }

            function _(t) {
                var e, n, r, i, a, o, s, f, d, v, g, x, w, b, E, I = [];
                for (x = (t = C(t)).length, e = m, n = 0, a = p, o = 0; o < x; ++o)(g = t[o]) < 128 && I.push(k(g));
                for (r = i = I.length, i && I.push(y); r < x;) {
                    for (s = l, o = 0; o < x; ++o)(g = t[o]) >= e && g < s && (s = g);
                    for (s - e > S((l - n) / (w = r + 1)) && M("overflow"), n += (s - e) * w, e = s, o = 0; o < x; ++o)
                        if ((g = t[o]) < e && ++n > l && M("overflow"), g == e) {
                            for (f = n, d = c; !(f < (v = d <= a ? h : d >= a + u ? u : d - a)); d += c) E = f - v, b = c - v, I.push(k(P(v + E % b, 0))), f = S(E / b);
                            I.push(k(P(f, 0))), a = O(n, w, r == i), n = 0, ++r
                        }++n, ++e
                }
                return I.join("")
            }
            s = {
                version: "1.4.1",
                ucs2: {
                    decode: C,
                    encode: A
                },
                decode: B,
                encode: _,
                toASCII: function(t) {
                    return I(t, function(t) {
                        return g.test(t) ? "xn--" + _(t) : t
                    })
                },
                toUnicode: function(t) {
                    return I(t, function(t) {
                        return v.test(t) ? B(t.slice(4).toLowerCase()) : t
                    })
                }
            }, void 0 === (i = function() {
                return s
            }.call(e, n, e, t)) || (t.exports = i)
        }()
    }).call(this, n(42)(t), n(13))
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = {
        isString: function(t) {
            return "string" == typeof t
        },
        isObject: function(t) {
            return "object" == typeof t && null !== t
        },
        isNull: function(t) {
            return null === t
        },
        isNullOrUndefined: function(t) {
            return null == t
        }
    }
}, function(t, e, n) {
    "use strict";
    e.decode = e.parse = n(45), e.encode = e.stringify = n(46)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, n, a) {
        e = e || "&", n = n || "=";
        var o = {};
        if ("string" != typeof t || 0 === t.length) return o;
        var s = /\+/g;
        t = t.split(e);
        var l = 1e3;
        a && "number" == typeof a.maxKeys && (l = a.maxKeys);
        var c = t.length;
        l > 0 && c > l && (c = l);
        for (var h = 0; h < c; ++h) {
            var u, f, d, p, m = t[h].replace(s, "%20"),
                y = m.indexOf(n);
            y >= 0 ? (u = m.substr(0, y), f = m.substr(y + 1)) : (u = m, f = ""), d = decodeURIComponent(u), p = decodeURIComponent(f), r(o, d) ? i(o[d]) ? o[d].push(p) : o[d] = [o[d], p] : o[d] = p
        }
        return o
    };
    var i = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = function(t) {
        switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
        }
    };
    t.exports = function(t, e, n, s) {
        return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? a(o(t), function(o) {
            var s = encodeURIComponent(r(o)) + n;
            return i(t[o]) ? a(t[o], function(t) {
                return s + encodeURIComponent(r(t))
            }).join(e) : s + encodeURIComponent(r(t[o]))
        }).join(e) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(t)) : ""
    };
    var i = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };

    function a(t, e) {
        if (t.map) return t.map(e);
        for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
        return n
    }
    var o = Object.keys || function(t) {
        var e = [];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
        return e
    }
}, function(t, e, n) {
    ! function() {
        var e = n(48),
            r = n(20).utf8,
            i = n(49),
            a = n(20).bin,
            o = function(t, n) {
                t.constructor == String ? t = n && "binary" === n.encoding ? a.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
                for (var s = e.bytesToWords(t), l = 8 * t.length, c = 1732584193, h = -271733879, u = -1732584194, f = 271733878, d = 0; d < s.length; d++) s[d] = 16711935 & (s[d] << 8 | s[d] >>> 24) | 4278255360 & (s[d] << 24 | s[d] >>> 8);
                s[l >>> 5] |= 128 << l % 32, s[14 + (l + 64 >>> 9 << 4)] = l;
                var p = o._ff,
                    m = o._gg,
                    y = o._hh,
                    v = o._ii;
                for (d = 0; d < s.length; d += 16) {
                    var g = c,
                        x = h,
                        w = u,
                        b = f;
                    h = v(h = v(h = v(h = v(h = y(h = y(h = y(h = y(h = m(h = m(h = m(h = m(h = p(h = p(h = p(h = p(h, u = p(u, f = p(f, c = p(c, h, u, f, s[d + 0], 7, -680876936), h, u, s[d + 1], 12, -389564586), c, h, s[d + 2], 17, 606105819), f, c, s[d + 3], 22, -1044525330), u = p(u, f = p(f, c = p(c, h, u, f, s[d + 4], 7, -176418897), h, u, s[d + 5], 12, 1200080426), c, h, s[d + 6], 17, -1473231341), f, c, s[d + 7], 22, -45705983), u = p(u, f = p(f, c = p(c, h, u, f, s[d + 8], 7, 1770035416), h, u, s[d + 9], 12, -1958414417), c, h, s[d + 10], 17, -42063), f, c, s[d + 11], 22, -1990404162), u = p(u, f = p(f, c = p(c, h, u, f, s[d + 12], 7, 1804603682), h, u, s[d + 13], 12, -40341101), c, h, s[d + 14], 17, -1502002290), f, c, s[d + 15], 22, 1236535329), u = m(u, f = m(f, c = m(c, h, u, f, s[d + 1], 5, -165796510), h, u, s[d + 6], 9, -1069501632), c, h, s[d + 11], 14, 643717713), f, c, s[d + 0], 20, -373897302), u = m(u, f = m(f, c = m(c, h, u, f, s[d + 5], 5, -701558691), h, u, s[d + 10], 9, 38016083), c, h, s[d + 15], 14, -660478335), f, c, s[d + 4], 20, -405537848), u = m(u, f = m(f, c = m(c, h, u, f, s[d + 9], 5, 568446438), h, u, s[d + 14], 9, -1019803690), c, h, s[d + 3], 14, -187363961), f, c, s[d + 8], 20, 1163531501), u = m(u, f = m(f, c = m(c, h, u, f, s[d + 13], 5, -1444681467), h, u, s[d + 2], 9, -51403784), c, h, s[d + 7], 14, 1735328473), f, c, s[d + 12], 20, -1926607734), u = y(u, f = y(f, c = y(c, h, u, f, s[d + 5], 4, -378558), h, u, s[d + 8], 11, -2022574463), c, h, s[d + 11], 16, 1839030562), f, c, s[d + 14], 23, -35309556), u = y(u, f = y(f, c = y(c, h, u, f, s[d + 1], 4, -1530992060), h, u, s[d + 4], 11, 1272893353), c, h, s[d + 7], 16, -155497632), f, c, s[d + 10], 23, -1094730640), u = y(u, f = y(f, c = y(c, h, u, f, s[d + 13], 4, 681279174), h, u, s[d + 0], 11, -358537222), c, h, s[d + 3], 16, -722521979), f, c, s[d + 6], 23, 76029189), u = y(u, f = y(f, c = y(c, h, u, f, s[d + 9], 4, -640364487), h, u, s[d + 12], 11, -421815835), c, h, s[d + 15], 16, 530742520), f, c, s[d + 2], 23, -995338651), u = v(u, f = v(f, c = v(c, h, u, f, s[d + 0], 6, -198630844), h, u, s[d + 7], 10, 1126891415), c, h, s[d + 14], 15, -1416354905), f, c, s[d + 5], 21, -57434055), u = v(u, f = v(f, c = v(c, h, u, f, s[d + 12], 6, 1700485571), h, u, s[d + 3], 10, -1894986606), c, h, s[d + 10], 15, -1051523), f, c, s[d + 1], 21, -2054922799), u = v(u, f = v(f, c = v(c, h, u, f, s[d + 8], 6, 1873313359), h, u, s[d + 15], 10, -30611744), c, h, s[d + 6], 15, -1560198380), f, c, s[d + 13], 21, 1309151649), u = v(u, f = v(f, c = v(c, h, u, f, s[d + 4], 6, -145523070), h, u, s[d + 11], 10, -1120210379), c, h, s[d + 2], 15, 718787259), f, c, s[d + 9], 21, -343485551), c = c + g >>> 0, h = h + x >>> 0, u = u + w >>> 0, f = f + b >>> 0
                }
                return e.endian([c, h, u, f])
            };
        o._ff = function(t, e, n, r, i, a, o) {
            var s = t + (e & n | ~e & r) + (i >>> 0) + o;
            return (s << a | s >>> 32 - a) + e
        }, o._gg = function(t, e, n, r, i, a, o) {
            var s = t + (e & r | n & ~r) + (i >>> 0) + o;
            return (s << a | s >>> 32 - a) + e
        }, o._hh = function(t, e, n, r, i, a, o) {
            var s = t + (e ^ n ^ r) + (i >>> 0) + o;
            return (s << a | s >>> 32 - a) + e
        }, o._ii = function(t, e, n, r, i, a, o) {
            var s = t + (n ^ (e | ~r)) + (i >>> 0) + o;
            return (s << a | s >>> 32 - a) + e
        }, o._blocksize = 16, o._digestsize = 16, t.exports = function(t, n) {
            if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
            var r = e.wordsToBytes(o(t, n));
            return n && n.asBytes ? r : n && n.asString ? a.bytesToString(r) : e.bytesToHex(r)
        }
    }()
}, function(t, e) {
    ! function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = {
                rotl: function(t, e) {
                    return t << e | t >>> 32 - e
                },
                rotr: function(t, e) {
                    return t << 32 - e | t >>> e
                },
                endian: function(t) {
                    if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                    for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
                    return t
                },
                randomBytes: function(t) {
                    for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                    return e
                },
                bytesToWords: function(t) {
                    for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
                    return e
                },
                wordsToBytes: function(t) {
                    for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                    return e
                },
                bytesToHex: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
                    return e.join("")
                },
                hexToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
                    return e
                },
                bytesToBase64: function(t) {
                    for (var n = [], r = 0; r < t.length; r += 3)
                        for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], a = 0; a < 4; a++) 8 * r + 6 * a <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - a) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);
                    return n
                }
            };
        t.exports = n
    }()
}, function(t, e) {
    function n(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    t.exports = function(t) {
        return null != t && (n(t) || function(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
        }(t) || !!t._isBuffer)
    }
}, function(t, e) {
    t.exports.obj = function(t, e, n) {
        n = n || {}, this.id = t, this.name = e, this.kills = n.player_kills || 0, this.maxKills = n.player_max_kills || 0, this.deaths = n.player_deaths || 0, this.wins = n.player_wins || 0, this.games = n.player_games_played || 0, this.tokens = n.player_tokens || 0, this.xp = n.player_xp || 0, this.getLevel = function() {
            return Math.floor(Math.max(1, .08 * Math.sqrt(this.xp)))
        }, this.level = this.getLevel(), this.getData = function() {
            return [this.id, this.kills, this.wins, this.games, this.maxKills, this.deaths, this.tokens, this.xp]
        }, this.setData = function(t) {
            this.id = t[0], this.kills = t[1], this.wins = t[2], this.games = t[3], this.maxKills = t[4], this.deaths = t[5], this.tokens = t[6], this.xp = t[7], this.level = this.getLevel()
        }
    }
}, function(t, e) {
    t.exports.moveKeys = {
        87: {
            i: "up",
            d: [0, -1]
        },
        38: {
            i: "up",
            d: [0, -1]
        },
        83: {
            i: "down",
            d: [0, 1]
        },
        40: {
            i: "down",
            d: [0, 1]
        },
        65: {
            i: "left",
            d: [-1, 0]
        },
        37: {
            i: "left",
            d: [-1, 0]
        },
        68: {
            i: "right",
            d: [1, 0]
        },
        39: {
            i: "right",
            d: [1, 0]
        }
    }, t.exports.keys = [16, 69, 70, 67, 32], t.exports.actions = [function(t, e, n) {
        t.sprint = n
    }, function(t, e, n) {
        n ? (t.mouseDown = 1, t.tryAttack = !0) : t.mouseDown = 0
    }, function(t, e, n) {
        if (n)
            if (t.vehicle) {
                t.vehicle.resetVehicle();
                var r = t.vehicle.dir,
                    i = t.vehicle.getWidth() + t.scale;
                t.x += i * Math.cos(r), t.y += i * Math.sin(r), t.vehicle = null
            } else if (t.interact && t.interact.active && t.interact.interact) {
            var a = t.interact.interact(t, e);
            a > 0 && (t.interact.active = !1, e.disableObject(t.interact.sid)), a >= 0 && e.sendSound(t, 0, .7)
        }
        t.interact = null
    }, function(t, e, n) {
        n && e.dropWeapon(t)
    }, function(t, e, n) {
        t && t.alive
    }]
}, function(t, e) {
    t.exports.obj = function(t, e, n, r, i) {
        this.account = null, this.id = t, this.sentTo = [], this.loadedObjects = [], this.isPlayer = !0, this.lastSpectate = 0, this.projCounter = 0, this.mass = .1, this.init = function(t, n, r) {
            this.effects = [], this.effectTimers = {}, this.effectDoers = {}, this.stunned = !1, this.name = t.name, this.spectating = null, this.spectateIndex = 0, this.vehicle = null, this.active = !0, this.alive = !0, this.didShowStats = 1, this.showStats = 1, this.stepCounter = e.stepCounter, this.maxStamina = e.startStamina, this.stamina = this.maxStamina, this.staminaRegen = e.staminaRegen, this.staminaDelay = 0, this.maxHealth = e.startHealth, this.health = this.maxHealth, this.kills = 0, this.deaths = 0, this.x = n, this.y = r, this.oldX = n, this.oldY = r, this.dir = 0, this.stepOffset = 0, this.stepAnimDir = 1, this.backpackIndex = 0, this.interact = null, this.movDir = null, this.mouseDown = 0, this.xVel = 0, this.yVel = 0, this.scale = e.playerScale, this.spdMlt = 1, this.sprint = !1, this.dashCountdown = 0, this.dashSpd = 0, this.dashDir = null, this.chatCooldown = 0, this.loadedObjects.length = 0, this.sentTo.length = 0, this.sentTo.push(this.id), this.secCounter = 1e3, this.ammos = [0, 0, 0], this.weapons = [0, 0], this.weaponRefs = [], this.weaponIndex = 0, this.scrollIndex = 0, this.reload = 0, this.reloads = {}, this.swapTimer = 0, t.custom && (this.shirtIndex = t.custom[0], this.hatIndex = t.custom[1]), i && i.applyCollider(this)
        }, this.getScale = function() {
            return this.scale
        }, this.getWidth = function() {
            return this.scale
        }, this.pushData = function(t) {
            t.push(this.sid, Math.round(this.x), Math.round(this.y), this.dir.round(2), this.weaponIndex, this.showStats, this.vehicle ? 1 : 0, this.backpackIndex)
        }, this.getBigData = function() {
            return [this.name, Math.round(this.x), Math.round(this.y), Math.ceil(this.maxHealth), Math.ceil(this.health), this.shirtIndex, this.hatIndex, this.account ? this.account.level : 0]
        }, this.update = function(t, n, a, o, s, l) {
            if (this.alive) {
                if (this.chatCooldown > 0 && (this.chatCooldown -= t, this.chatCooldown <= 0 && (this.chatCooldown = 0)), this.didShowStats = this.showStats, this.showStats = 1, this.interact = null, this.oldX = this.x, this.oldY = this.y, this.reload > 0 && (this.reload -= t, this.reload <= 0 && (this.reload = 0, r.tryUse(this))), this.vehicle) {
                    if (!this.stunned) {
                        var c = 0,
                            h = -Math.sin(this.movDir) / Math.sin(Math.PI / 4),
                            u = Math.cos(this.movDir) / Math.cos(Math.PI / 4);
                        h < 0 && (h *= .65), ((c = this.vehicle.speed * t * h) < 0 && this.vehicle.vel > 0 || c > 0 && this.vehicle.vel < 0) && (this.vehicle.vel = 0), this.vehicle.vel += c, this.vehicle.dir += .0021 * this.vehicle.vel * u * t, this.vehicle.dir %= 2 * Math.PI, c && (this.vehicle.xVel += c * Math.cos(this.vehicle.dir - Math.PI / 2), this.vehicle.yVel += c * Math.sin(this.vehicle.dir - Math.PI / 2))
                    }
                    this.dir = this.vehicle.dir - Math.PI / 2, this.x = this.vehicle.x - this.vehicle.sitOffset * Math.cos(this.dir), this.y = this.vehicle.y - this.vehicle.sitOffset * Math.sin(this.dir), this.xVel = 0, this.yVel = 0, this.sprint = !1, this.tryAttack = !1, this.mouseDown = !1
                }
                if (this.alive) {
                    if (this.dashCountdown ? (null != this.movDir && (this.dashDir = this.movDir), this.dashCountdown -= t, this.dashCountdown <= 0 && (this.dashDir = null, this.dashCountdown = 0)) : this.sprint && null !== this.movDir && this.stamina > 0 ? r.changeStamina(this, -e.sprintCost) : (null !== this.movDir && (this.sprint = !1), this.staminaDelay > 0 ? (this.staminaDelay -= t, this.staminaDelay < 0 && (this.staminaDelay = 0)) : r.changeStamina(this, this.staminaRegen)), !this.vehicle) {
                        var f = r.getSpeedMult(this) * this.spdMlt;
                        c = this.dashCountdown ? this.dashSpd : e.playerSpeed, this.spdMlt = 1;
                        var d = 0,
                            p = 0;
                        null != this.dashDir ? (d = Math.cos(this.dashDir), p = Math.sin(this.dashDir)) : (d = null != this.movDir ? Math.cos(this.movDir) : 0, p = null != this.movDir ? Math.sin(this.movDir) : 0);
                        var m = Math.sqrt(d * d + p * p);
                        0 != m && (d /= m, p /= m), d && (this.xVel += d * f * c * t), p && (this.yVel += p * f * c * t), this.xVel && (this.x += this.xVel * t, this.xVel *= Math.pow(.99, t)), this.yVel && (this.y += this.yVel * t, this.yVel *= Math.pow(.99, t)), this.swapTimer && (this.swapTimer -= t, this.swapTimer <= 0 && (this.swapTimer = 0), this.tryAttack = this.mouseDown), this.swapTimer || r.tryAttack(this, n)
                    }
                    if (i.updateCollider(this), this.secCounter -= t, this.secCounter <= 0) {
                        this.secCounter = 1e3 - this.secCounter;
                        for (var y = this.effects.length - 1; y >= 0; --y) this.effectTimers[this.effects[y]] && (this.effectTimers[this.effects[y]] -= 1, this.effectTimers[this.effects[y]] <= 0 && r.removeEffect(this, this.effects[y]));
                        var v = e.mapScale * s;
                        (this.x - this.scale <= a - v || this.x + this.scale >= a + v || this.y - this.scale <= o - v || this.y + this.scale >= o + v) && r.changeHealth(this, null, -e.borderDmg, 0, !0)
                    }
                }
            }
        }, this.dash = function() {
            if (!this.vehicle && null !== this.movDir && this.stamina > 0 && this.dashCountdown <= 0) {
                var t = Math.min(1, this.stamina / e.dashCost);
                this.dashCountdown = e.dashCountdown * t, this.dashSpd = e.dashSpeed * t, r.changeStamina(this, -e.dashCost)
            }
        }, this.animate = function(t) {
            this.animTime && (this.animTime -= t, this.animTime <= 0 ? this.animTime = this.dirPlus = this.animRatio = this.animIndex = 0 : this.animIndex ? (this.animRatio -= t / (this.animSpeed * (1 - this.hitReturn)), this.dirPlus = n.lerp(0, this.targetAngle, Math.max(0, this.animRatio))) : (this.animRatio += t / (this.animSpeed * this.hitReturn), this.dirPlus = n.lerp(0, this.targetAngle, Math.min(1, this.animRatio)), this.animRatio >= 1 && (this.animRatio = this.animIndex = 1)))
        }, this.startAnimation = function(t, e, n, r, i) {
            this.animType = e, this.animTime = this.animSpeed = t, this.animRatio = this.animIndex = i || 0, this.targetAngle = n, this.hitReturn = r || 0
        }, this.stopAnimation = function() {
            this.animTime = this.dirPlus = 0
        }, this.doCollisions = function(t) {
            for (var e = 0; e < t.length; ++e)
                for (var n = 0; n < t[e].length; ++n) this.resolveCollision(t[e][n])
        }, this.resolveCollision = function(t) {
            if (i.checkCollision(this, t, !0) && (t.isPlayer || !t.interact || t.driver || (this.interact = t), t.cover && (this.didShowStats && (this.didShowStats = 0, r.sendSound(this, 2, 3.5, !0), t.wiggleCount = 0), t.wiggleCount--, t.wiggleCount <= 0 && (t.wiggleCount = e.wiggleCount, r.sendWiggle(t)), this.spdMlt = .5, this.showStats = 0), !t.isPlayer && t.moved)) {
                var a = n.getDistance(0, 0, t.xVel, t.yVel),
                    o = n.getDirection(this.x, this.y, t.x, t.y);
                this.xVel += a * Math.cos(o), this.yVel += a * Math.sin(o), (a *= t.mass / this.mass * 10) >= e.minVelocityDmg && r.changeHealth(this, t.driver ? r.findBySid(t.driver) : null, -a, t.dir)
            }
        }, this.followSpectating = function() {
            this.spectating && (this.x = this.spectating.x, this.y = this.spectating.y)
        }, this.canSee = function(t, n) {
            if (!t) return !1;
            n = n || t.scale;
            var r = Math.abs(t.x - this.x) - (t.getWidth ? t.getWidth(!0) : n) - e.maxScreenWidth * e.mouseSen - e.visionBuffer,
                i = Math.abs(t.y - this.y) - n - e.maxScreenHeight * e.mouseSen - e.visionBuffer;
            return r <= e.maxScreenWidth / 2 && i <= e.maxScreenHeight / 2
        }
    }
}, function(t, e) {
    t.exports.data = [{
        name: "Fists",
        sound: "whoosh_0",
        dontSpawn: !0,
        melee: !0,
        dmg: 150,
        reload: 500,
        spdMlt: 1,
        xOff: 0,
        yOff: 0,
        range: 30,
        scale: .3,
        stance: 0
    }, {
        name: "Hunting Rifle",
        sound: "sniper_0",
        type: 1,
        rarity: 2,
        dmg: 800,
        reload: 700,
        bSpd: 1.3,
        ammo: 8,
        spdMlt: 1,
        xOff: 61,
        yOff: 10,
        lOff: 100,
        sOff: 70,
        range: 1300,
        scale: .3,
        shell: 2,
        stance: 2
    }, {
        name: "Steel Axe",
        sound: "whoosh_0",
        type: 0,
        rarity: 0,
        melee: !0,
        dmg: 600,
        reload: 600,
        spdMlt: 1,
        xOff: 42,
        yOff: 20,
        range: 60,
        scale: .3,
        stance: 0
    }, {
        name: "Steel Hammer",
        sound: "whoosh_0",
        type: 0,
        rarity: 1,
        melee: !0,
        dmg: 900,
        reload: 1100,
        spdMlt: .8,
        xOff: 38,
        yOff: 20,
        range: 60,
        scale: .3,
        stance: 0
    }, {
        name: "Steel Sword",
        sound: "whoosh_0",
        type: 0,
        rarity: 0,
        melee: !0,
        dmg: 600,
        reload: 600,
        spdMlt: 1,
        xOff: 38,
        yOff: 47,
        range: 100,
        scale: .3,
        stance: 0
    }, {
        name: "Shotgun",
        sound: "shotgun_0",
        type: 0,
        rarity: 0,
        dmg: 240,
        reload: 700,
        bCount: 3,
        spread: .15,
        bSpd: 1,
        ammo: 10,
        spdMlt: 1,
        xOff: 61,
        yOff: 14,
        lOff: 90,
        sOff: 55,
        range: 1e3,
        scale: .3,
        shell: 1,
        stance: 2
    }, {
        name: "Submachine Gun",
        sound: "smg_0",
        type: 0,
        rarity: 0,
        dmg: 200,
        reload: 200,
        ammo: 30,
        spread: .08,
        spdMlt: 1,
        xOff: 61,
        yOff: 14,
        lOff: 100,
        sOff: 70,
        range: 1100,
        scale: .3,
        stance: 2
    }, {
        name: "Pistol",
        sound: "fire_1",
        type: 0,
        rarity: 0,
        dmg: 300,
        reload: 400,
        bSpd: 1,
        ammo: 20,
        spdMlt: 1.05,
        xOff: 72,
        yOff: 0,
        lOff: 80,
        sOff: 35,
        range: 1e3,
        scale: .3,
        stance: 1
    }, {
        name: "Crossbow",
        sound: "arrow_1",
        type: 0,
        rarity: 1,
        dmg: 960,
        reload: 1e3,
        bIndx: 1,
        bScl: .55,
        bSpd: .55,
        ammo: 4,
        spdMlt: 1,
        xOff: 50,
        yOff: 14,
        lOff: 80,
        range: 1100,
        scale: .3,
        shell: -1,
        stance: 2
    }, {
        name: "Wooden Shield",
        sound: "whoosh_0",
        type: 0,
        rarity: 0,
        shield: .1,
        melee: !0,
        renderAtop: !0,
        dmg: 250,
        reload: 500,
        spdMlt: .75,
        xOff: 50,
        yOff: 0,
        range: 30,
        scale: .3,
        stance: 3
    }, {
        name: "Knuckles",
        sound: "whoosh_0",
        type: 0,
        rarity: 0,
        melee: !0,
        renderAtop: !0,
        dmg: 350,
        reload: 300,
        spdMlt: 1,
        xOff: 40,
        yOff: 0,
        range: 30,
        scale: .21,
        stance: 0
    }, {
        name: "Assault Rifle",
        sound: "smg_0",
        type: 1,
        rarity: 3,
        dmg: 300,
        reload: 200,
        ammo: 20,
        spread: .05,
        spdMlt: .96,
        xOff: 61,
        yOff: 17,
        lOff: 105,
        sOff: 70,
        range: 1100,
        scale: .3,
        stance: 2
    }, {
        name: "LMG",
        sound: "fire_1",
        type: 1,
        rarity: 3,
        dmg: 160,
        reload: 90,
        ammo: 40,
        spread: .1,
        spdMlt: .85,
        xOff: 61,
        yOff: 17,
        lOff: 120,
        sOff: 100,
        range: 1e3,
        scale: .3,
        stance: 2
    }, {
        name: "Stun Gun",
        sound: "stun_1",
        type: 0,
        rarity: 2,
        dmg: 100,
        effect: 1,
        desc: "Applies stun",
        reload: 500,
        bIndx: 3,
        bSpd: .75,
        ammo: 2,
        spdMlt: 1,
        xOff: 72,
        yOff: 0,
        lOff: 80,
        sOff: 0,
        range: 900,
        scale: .3,
        stance: 1,
        shell: -1
    }, {
        name: "Based Stick",
        sound: "whoosh_0",
        dontSpawn: !0,
        rarity: 5,
        melee: !0,
        dmg: 500,
        reload: 600,
        spdMlt: 1,
        xOff: 38,
        yOff: 25,
        range: 100,
        scale: .3,
        stance: 0
    }, {
        name: "Silenced Pistol",
        sound: "silent_2",
        type: 1,
        rarity: 2,
        dmg: 400,
        reload: 500,
        bSpd: 1.2,
        ammo: 15,
        spdMlt: 1.05,
        xOff: 78,
        yOff: 0,
        lOff: 80,
        sOff: 40,
        range: 1e3,
        scale: .3,
        stance: 1
    }, {
        name: "Acid Bolter",
        sound: "plasma_1",
        dontSpawn: !0,
        rarity: 4,
        dmg: 400,
        reload: 200,
        ammo: 10,
        bIndx: 4,
        bSpd: .7,
        spdMlt: .9,
        xOff: 61,
        yOff: 17,
        lOff: 120,
        sOff: 60,
        range: 900,
        scale: .3,
        stance: 2,
        shell: -1
    }, {
        name: "Baseball Bat",
        sound: "whoosh_0",
        type: 0,
        rarity: 1,
        melee: !0,
        dmg: 480,
        reload: 500,
        spdMlt: 1,
        xOff: 38,
        yOff: 40,
        range: 100,
        scale: .3,
        stance: 0
    }, {
        name: "Combat Syringe",
        type: 0,
        sound: "needle",
        desc: "Restores health",
        rarity: 1,
        dontSpawn: !0,
        renderAtop: !0,
        reload: 800,
        use: function(t, e) {
            return t.health < t.maxHealth && (e.removeEffect(t, 1), e.changeHealth(t, null, 700), !0)
        },
        spdMlt: .6,
        xOff: 50,
        yOff: 0,
        scale: .3,
        stance: 1
    }, {
        name: "Bolt Action Sniper",
        sound: "sniper_0",
        type: 2,
        rarity: 4,
        dmg: 990,
        reload: 1200,
        bSpd: 1.35,
        ammo: 4,
        spdMlt: .9,
        xOff: 70,
        yOff: 15,
        lOff: 100,
        sOff: 70,
        range: 1500,
        scale: .3,
        shell: 2,
        stance: 2
    }, {
        name: "Revolver",
        sound: "sniper_0",
        type: 2,
        rarity: 4,
        dmg: 600,
        reload: 500,
        bSpd: 1.1,
        ammo: 6,
        spdMlt: 1,
        xOff: 68,
        yOff: 0,
        lOff: 80,
        sOff: 35,
        range: 1500,
        scale: .3,
        stance: 1
    }, {
        name: "Pump Action Shotgun",
        sound: "shotgun_0",
        type: 2,
        rarity: 3,
        dmg: 260,
        reload: 700,
        bCount: 4,
        spread: .16,
        bSpd: 1,
        ammo: 5,
        spdMlt: 1,
        xOff: 61,
        yOff: 14,
        lOff: 90,
        sOff: 55,
        range: 1e3,
        scale: .3,
        shell: 1,
        stance: 2
    }]
}, function(t, e) {
    t.exports.data = [{
        name: "Bommel Hat",
        rarity: 0
    }, {
        name: "Winter Cap",
        rarity: 0
    }, {
        name: "Cowboy Hat",
        rarity: 0
    }, {
        name: "Ranger Hat",
        rarity: 0
    }, {
        name: "Spec Ops Hat",
        rarity: 1
    }, {
        name: "Forester Cap",
        rarity: 1
    }, {
        name: "Operative Hat",
        rarity: 1
    }, {
        name: "Cloth Cap",
        rarity: 1
    }, {
        name: "Gentleman Hat",
        rarity: 3
    }, {
        name: "Pilot Helmet",
        rarity: 3
    }, {
        name: "Gas Mask",
        rarity: 4,
        xOff: 16
    }, {
        name: "Protective Mask",
        rarity: 3
    }, {
        name: "Military Beret",
        rarity: 3,
        xOff: -6
    }, {
        name: "Military Cap",
        rarity: 3
    }, {
        name: "Ushanka",
        rarity: 4
    }, {
        name: "Vetaran Helmet",
        rarity: 4
    }, {
        name: "Soldier Helmet",
        rarity: 4
    }, {
        name: "Ghillie Hood",
        rarity: 4
    }, {
        name: "Tera Helmet",
        rarity: 5
    }, {
        name: "Overlord Helmet",
        rarity: 5
    }, {
        name: "Voltage Helmet",
        rarity: 5
    }, {
        name: "Astro Helmet",
        unlock: "twitter_sh",
        rarity: 5
    }, {
        name: "Magneto Helmet",
        rarity: 5,
        xOff: 0
    }, {
        name: "Demon Helmet",
        rarity: 5,
        xOff: -3
    }, {
        name: "Crusher Helm",
        rarity: 4,
        xOff: 1
    }, {
        name: "Knight Helm",
        rarity: 4,
        xOff: 0
    }, {
        name: "Crusader Helm",
        rarity: 4
    }, {
        name: "Albino Helm",
        rarity: 3
    }, {
        name: "Barbarian Helm",
        rarity: 3
    }, {
        name: "Raider Helm",
        rarity: 3
    }, {
        name: "Commander Hat",
        rarity: 4
    }, {
        name: "Yuland Helm",
        rarity: 3
    }, {
        name: "Dragonslayer Helm",
        rarity: 3
    }, {
        name: "Welding Mask",
        rarity: 3
    }, {
        name: "Red Biker Helmet",
        rarity: 2
    }, {
        name: "Blue Biker Helmet",
        rarity: 2
    }, {
        name: "Brown Bike Helmet",
        rarity: 3
    }, {
        name: "Grey Bike Helmet",
        rarity: 3
    }, {
        name: "Police Hat",
        rarity: 4
    }, {
        name: "Captains Hat",
        rarity: 4
    }, {
        name: "Demolisher Helm",
        rarity: 4
    }, {
        name: "Love Band",
        rarity: 2
    }, {
        name: "Charm Hat",
        rarity: 4
    }, {
        name: "Spooky Hat",
        rarity: 5
    }]
}, function(t, e) {
    t.exports.data = [{}, {
        name: "Stun",
        text: "STUN",
        duration: 3,
        stun: 1
    }, {
        name: "Poison",
        text: "Poisoned",
        duration: 5,
        dmgPs: 100
    }]
}, function(t, e) {
    t.exports.data = [{
        name: "Cloth Shirt",
        rarity: 0
    }, {
        name: "Navy Shirt",
        rarity: 0
    }, {
        name: "Crew Shirt",
        rarity: 0
    }, {
        name: "Forester Shirt",
        rarity: 1
    }, {
        name: "Woodlands Camo",
        rarity: 2
    }, {
        name: "Arctic Camo",
        rarity: 2
    }, {
        name: "Spec Ops Gear",
        rarity: 3
    }, {
        name: "Paladin Armor",
        rarity: 5
    }, {
        name: "Voltage Armor",
        rarity: 5
    }, {
        name: "Tera Armor",
        rarity: 5
    }, {
        name: "Ghillie Suit",
        rarity: 4
    }, {
        name: "Astro Suit",
        unlock: "twitter_sh",
        rarity: 5
    }, {
        name: "Soldier Vest",
        rarity: 4
    }]
}, function(t, e) {
    t.exports.list = [{
        src: "tree/tree_0",
        layer: 2,
        scale: 200,
        colMlt: .5
    }, {
        src: "tree/tree_1",
        layer: 2,
        scale: 190,
        colMlt: .5
    }, {
        src: "tree/tree_2",
        layer: 2,
        scale: 160,
        colMlt: .5
    }, {
        src: "tree/tree_3",
        layer: 2,
        scale: 200,
        colMlt: .5
    }, {
        src: "stone/stone_1",
        layer: 0,
        scale: 64,
        local: !0
    }, {
        src: "stone/stone_2",
        layer: 0,
        scale: 40,
        local: !0
    }, {
        src: "stone/stone_3",
        layer: 0,
        scale: 32,
        local: !0
    }, {
        src: "flower/flower_0",
        layer: 0,
        scale: 28,
        noCol: !0
    }, {
        src: "flower/flower_1",
        layer: 0,
        scale: 30,
        noCol: !0
    }, {
        src: "crates/crate_0",
        layer: 0,
        scale: 60,
        noCol: !0
    }, {
        src: "crates/crate_1",
        layer: 0,
        scale: 58,
        noCol: !0,
        dynamic: !0,
        interact: function(t, e) {
            return e.roundTimer > 0 || !e.getWeapon(t.weaponIndex).ammo ? -1 : (e.changeAmmo(t, Math.ceil(.4 * e.getWeapon(t.weaponIndex).ammo)), 1)
        }
    }, {
        src: "crates/crate_3",
        layer: 0,
        scale: 60
    }, {
        src: "flower/flower_2",
        layer: 0,
        scale: 35,
        noCol: !0
    }, {
        src: "bush/bush_0",
        dynamic: !0,
        noCol: !0,
        layer: 2,
        scale: 95,
        colMlt: .05,
        cover: !0
    }, {
        src: "buildings/wall_1_0",
        colType: "rect",
        colPad: 5,
        layer: 2,
        scale: 188,
        width: 28
    }, {
        src: "roads/road_1",
        rPad: 1,
        layer: -1,
        scale: 330,
        allowObj: !0,
        noCol: !0
    }, {
        src: "vehicles/vehicle_3_0",
        layer: 1,
        colType: "rect",
        mass: 7.5,
        speed: .0012,
        colPad: -30,
        scale: 200,
        width: 122,
        sitOffset: 30,
        dynamic: !0,
        vehicle: !0,
        interact: function(t, e) {
            t.interact.driver || (t.interact.driver = t.sid, t.vehicle = t.interact)
        }
    }, {
        src: "buildings/floor_0",
        noCol: !0,
        allowObj: !0,
        layer: -1,
        scale: 430
    }, {
        src: "stone/stone_4",
        layer: 2,
        scale: 110,
        colMlt: .8
    }, {
        src: "camp/fire_0",
        layer: 0,
        scale: 90,
        colMlt: .8
    }, {
        src: "buildings/wall_0_0",
        colType: "rect",
        colPad: 7,
        layer: 2,
        scale: 165,
        width: 25
    }, {
        src: "buildings/floor_1",
        noCol: !0,
        allowObj: !0,
        layer: -1,
        scale: 460
    }, {
        src: "vehicles/vehicle_1_0",
        colType: "rect",
        layer: 2,
        colPad: -35,
        scale: 290,
        width: 140
    }, {
        src: "roads/road_0",
        rPad: 1,
        layer: -1,
        scale: 330,
        allowObj: !0,
        noCol: !0
    }, {
        src: "roads/road_2",
        rPad: 1,
        layer: -1,
        scale: 330,
        allowObj: !0,
        noCol: !0
    }, {
        src: "buildings/wall_2",
        colType: "rect",
        colPad: -20,
        layer: 0,
        scale: 210 * 1.1,
        width: 45 * 1.1
    }, {
        src: "crates/barrel_0",
        layer: 2,
        scale: 60
    }, {
        src: "crates/crate_4",
        colType: "rect",
        layer: 0,
        scale: 75,
        width: 50
    }, {
        src: "vehicles/vehicle_2_0",
        colType: "rect",
        layer: 2,
        colPad: -35,
        scale: 270,
        width: 162
    }, {
        src: "vehicles/vehicle_4_0",
        layer: 1,
        colType: "rect",
        mass: 3,
        speed: .0013,
        colPad: -30,
        scale: 140,
        width: 74,
        sitOffset: 0,
        dynamic: !0,
        vehicle: !0,
        interact: function(t, e) {
            t.interact.driver || (t.interact.driver = t.sid, t.vehicle = t.interact)
        }
    }, {
        src: "airport/pad_0",
        layer: -1,
        scale: 330,
        allowObj: !0,
        noCol: !0
    }, {
        src: "airport/road_0",
        rPad: 1,
        layer: -1,
        scale: 330,
        allowObj: !0,
        noCol: !0
    }, {
        src: "airport/road_1",
        rPad: 1,
        layer: -1,
        scale: 330,
        allowObj: !0,
        noCol: !0
    }, {
        src: "backpacks/pack_0",
        name: "Lvl 1 Backpack",
        desc: "Carry more items",
        layer: 0,
        scale: 50,
        noCol: !0,
        isPickup: !0,
        dynamic: !0,
        interact: function(t, e) {
            return t.backpackIndex ? -1 : (e.addPack(t, 1, 3), 1)
        }
    }, {
        src: "weapons/weapon_1",
        layer: 0,
        scale: 50,
        noCol: !0,
        isWeapon: !0,
        dynamic: !0,
        interact: function(t, e) {
            e.getWeapon(t.interact.typeIndex);
            var n = t.scrollIndex;
            return e.dropWeapon(t, t.interact.x, t.interact.y), e.changeAmmo(t, t.interact.typeValue, !0, n), e.addWeapon(t, n, t.interact.typeIndex), t.weaponRefs[n] = t.interact, 1
        }
    }]
}, function(t, e) {
    t.exports.obj = function(t, e) {
        this.init = function(t, e, n, r, i) {
            this.index = r, this.x = t, this.initX = t, this.xVel = 0, this.y = e, this.initY = e, this.yVel = 0, this.vel = 0, this.xWiggle = 0, this.yWiggle = 0, this.wiggleCount = 0, this.wiggleSpeed = .015, this.wiggleVal = 0, this.dir = n.round(2), this.initDir = this.dir, this.gridLocations = [], this.active = !0, this.moved = !1, this.local = i
        }, this.resetVehicle = function() {
            this.driver = null, this.vel = 0
        }, this.update = function(t) {
            if (this.active) {
                if (this.moved = !1, this.impact = 0, this.xVel && (this.moved = !0, this.x += this.xVel * t, this.xVel *= Math.pow(.9985, t), this.xVel >= -.01 && this.xVel <= .01 && (this.xVel = 0)), this.yVel && (this.moved = !0, this.y += this.yVel * t, this.yVel *= Math.pow(.9985, t), this.yVel >= -.01 && this.yVel <= .01 && (this.yVel = 0)), this.vel && (this.vel *= Math.pow(.9985, t), this.vel >= -.01 && this.vel <= .01 && (this.vel = 0)), this.interpolate) {
                    this.dt += t;
                    var n = Math.min(1.5, this.dt / (1.2 * e.serverTickrate));
                    this.x = this.x1 + (this.x2 - this.x1) * n, this.y = this.y1 + (this.y2 - this.y1) * n, this.dir = Math.lerpAngle(this.d2, this.d1, Math.min(1, n)) || 0
                }
                this.wiggleCounter && (this.wiggleVal += this.wiggleSpeed * t, this.wiggleVal >= 1 ? (this.wiggleSpeed *= -1, this.wiggleVal = 1) : this.wiggleVal <= -1 && (this.wiggleSpeed *= -1, this.wiggleVal = -1), this.xWiggle = 1.5 * this.wiggleVal, this.wiggleCounter -= t, this.wiggleCounter <= 0 && (this.wiggleCounter = 0))
            }
        }, this.getColMlt = function(t) {
            return t ? 1 : this.colMlt || 1
        }, this.getColPad = function(t) {
            return t ? 0 : this.colPad || 0
        }, this.getScale = function(t) {
            return this.scale * this.getColMlt(t) + this.getColPad(t)
        }, this.getWidth = function(t) {
            return (this.width || this.scale) * this.getColMlt(t) + this.getColPad(t)
        }, this.pushData = function(t) {
            this.dynamic ? t.push(this.index, this.sid, Math.round(this.x), Math.round(this.y), this.dir, this.typeIndex) : t.push(this.index, Math.round(this.x), Math.round(this.y), this.dir)
        }
    }
}, function(t, e) {
    t.exports.obj = function(t, e, n, r, i, a, o, s, l) {
        var c, h;
        this.aliveCount = 0, this.roundTimer = a.roundTimer, this.projectileManager = {}, this.checkName = function(t) {
            var e = "unknown";
            return i.isString(t) && t.length <= a.maxNameLength && (t = t.replace(/<|>/g, "").replace(/[^\x00-\x7F]/g, "")).replace(/\s/g, "").length > 0 && (e = t), e
        }, this.updateAccount = function(t, e) {
            if (t.account) {
                t.account.kills += t.kills, t.kills > t.account.maxKills && (t.account.maxKills = t.kills), t.account.deaths += t.deaths, t.account.wins += 1 == e ? 1 : 0, t.account.games++, t.account.xp += Math.round(a.roundXP / e + t.kills * a.xpPerKill), t.account.level = t.account.getLevel();
                var n = Math.round(1 / e * (t.kills * a.tokenPerKill));
                t.account.tokens += n;
                var r = t.account.getData();
                return l(t.id, "ua", r), accounts.call(2, r), n
            }
            return 0
        }, this.addPlayer = function(n, r) {
            var o = new e(n, a, i, this, s);
            return o.sid = r || this.generateSID(), t.push(o), o
        }, this.removePlayer = function(e) {
            if (e) {
                this.updateSpectators(e), e.vehicle && e.vehicle.resetVehicle();
                var n = t.indexOf(e);
                n >= 0 && t.splice(n, 1);
                for (var r = 0; r < t.length; ++r)(n = t[r].sentTo.indexOf(e.id)) >= 0 && t[r].sentTo.splice(n, 1);
                this.updatePlayerCount()
            }
        }, this.clearPlayers = function() {
            for (var e = 0; e < t.length; ++e) {
                if (t[e].alive) {
                    var n = this.updateAccount(t[e], 1);
                    this.showEndScreen(t[e], this.aliveCount, n)
                }
                l(t[e].id, "7", t[e].alive), t[e].active = !1, t[e].alive = !1, t[e].spectating = null
            }
            this.aliveCount = 0
        }, this.updatePlayerCount = function() {
            for (var e = 0, n = 0; n < t.length; ++n) t[n].alive && e++;
            for (this.aliveCount = e, n = 0; n < t.length; ++n) t[n].active && l && l(t[n].id, "10", this.aliveCount);
            this.aliveCount <= 1 && o && o()
        }, this.hidePlayers = function() {
            for (var e = 0; e < t.length; ++e) t[e].forcePos = !t[e].visible, t[e].visible = !1
        }, this.removeEffect = function(t, e) {
            var n = t.effects.indexOf(e);
            n >= 0 && (t.effects.splice(n, 1), t.effectTimers[e] = 0, t.effectDoers[e] = 0, r[e].stun && (t.stunned = 0), l(t.id, "22", t.effects))
        }, this.addEffect = function(t, e, n) {
            this.roundTimer > 0 || (t.effects.indexOf(n) < 0 && t.effects.push(n), e && (t.effectDoers[n] = e), t.effectTimers[n] = r[n].duration, t.stunned = r[n].stun, r[n].text && (l(t.id, "14", Math.round(t.x), Math.round(t.y), r[n].text, 1), e && l(e.id, "14", Math.round(t.x), Math.round(t.y), r[n].text)), l(t.id, "22", t.effects, n))
        }, this.getSpeedMult = function(t) {
            return (t.sprint && null !== t.movDir && !t.dashCountdown ? a.sprintSpeed : 1) * (n[t.weaponIndex].spdMlt || 1) * (t.stunned ? .3 : 1)
        }, this.addPack = function(t, e, n) {
            if (t.backpackIndex = e, t.weapons.length < n) {
                for (var r = 0; r < n - t.weapons.length; ++r) t.weapons.push(0);
                l(t.id, "12", t.weaponIndex, t.scrollIndex, t.weapons)
            }
        }, this.getWeapon = function(t) {
            return n[t]
        }, this.addWeapon = function(t, e, n) {
            t.weapons[e] = n, t.scrollIndex == e && this.swapWeapon(t, n), l(t.id, "12", t.weaponIndex, t.scrollIndex, t.weapons)
        }, this.dropWeapon = function(t, e, n) {
            var r = t.weaponRefs[t.scrollIndex];
            r && (this.moveObject(r, void 0 != e ? e : t.x, void 0 != n ? n : t.y), r.typeValue = t.ammos[t.scrollIndex], r.active = !0, this.removeWeapon(t, t.scrollIndex))
        }, this.removeWeapon = function(t, e) {
            t.weapons[e] = 0, t.ammos[e] = 0, t.weaponRefs[e] = 0, t.scrollIndex == e && (t.weaponIndex = 0), l(t.id, "12", t.weaponIndex, e, t.weapons)
        }, this.swapWeapon = function(t, e) {
            (t.weaponIndex || e) && (t.swapTimer = a.weaponSwapTime, t.vehicle || this.sendAnimation(t, a.weaponSwapTime, 2)), t.weaponIndex = e, t.reload = 0
        }, this.getAmmo = function(t) {
            return n[t].ammo || 0
        }, this.changeAmmo = function(t, e, n, r) {
            r = void 0 != r ? r : t.scrollIndex, this.roundTimer > 0 && e < 0 || (n ? t.ammos[r] = e : t.ammos[r] += e, t.ammos[r] <= 0 && (t.ammos[r] = 0), l(t.id, "13", r, t.ammos[r]), !n && e > 0 && l(t.id, "14", Math.round(t.x), Math.round(t.y), "+" + e, 0))
        }, this.disableObject = function(e) {
            for (var n, r = 0; r < t.length; ++r)(n = t[r].loadedObjects.indexOf(e)) >= 0 && (t[r].active && l(t[r].id, "20", e), t[r].loadedObjects.splice(n, 1))
        }, this.moveObject = function(t, e, n) {
            t && (t.x = Math.round(e), t.y = Math.round(n), s.udateObjectGrid(t), this.disableObject(t.sid))
        }, this.screenShake = function(t, e, n) {
            l(t.id, "16", void 0 != e ? e.round(1) : 0, n)
        }, this.changeHealth = function(t, e, r, o, s) {
            var c = r < 0,
                h = !(r > 0 && this.health >= this.maxHealth);
            if (this.roundTimer > 0 && (r = 0), r <= 0 && this.screenShake(t, o, 8), r < 0 && !s && n[t.weaponIndex].shield && i.getAngleDist(t.dir + Math.PI, o) <= a.shieldAngle) {
                var u = r * n[t.weaponIndex].shield,
                    f = t.stamina + (r - u);
                this.changeStamina(t, r - u), r = f <= 0 ? f : 0, r += u
            }
            t.health += r, t.health <= 0 ? (r -= t.health, t.health = 0, this.killPlayer(t, e)) : t.health > t.maxHealth && (r -= t.health - t.maxHealth, t.health = t.maxHealth);
            for (var d = 0; d < t.sentTo.length; ++d) r && l(t.sentTo[d], "4", t.sid, Math.ceil(t.health));
            if (c && (this.sendSound(t, 1, .3, !0), this.sendParticle(t, 5)), h && (c || r > 0)) {
                var p = Math.round(t.x + i.randInt(-40, 40)),
                    m = Math.round(t.y + i.randInt(0, 25));
                e && l(e.id, "14", p, m, Math.round(r), 0), l(t.id, "14", p, m, Math.round(r), c ? 1 : 2)
            }
        }, this.changeStamina = function(t, e) {
            e < 0 && (t.staminaDelay = a.staminaDelay), e > 0 && t.stamina == t.maxStamina || e < 0 && 0 == t.stamina || (t.stamina += e, t.stamina <= 0 ? t.stamina = 0 : t.stamina >= t.maxStamina && (t.stamina = t.maxStamina), l(t.id, "5", Math.floor(t.stamina)))
        }, this.tryUse = function(t) {
            (h = n[t.weaponIndex]).use && h.use(t, this) && this.removeWeapon(t, t.scrollIndex)
        }, this.tryAttack = function(e, r) {
            if (h = n[e.weaponIndex], !e.stunned && e.tryAttack && !e.reload && (!e.reloads[e.weaponIndex] || r - e.reloads[e.weaponIndex] >= h.reload))
                if (h.use) this.sendAnimation(e, h.reload, 3), e.reload = h.reload, e.reloads[e.weaponIndex] = r;
                else if (h.melee) {
                var o = e.stamina >= h.dmg * a.dmgToStam ? 1 : a.noStamMlt;
                this.changeStamina(e, -h.dmg * a.dmgToStam), this.sendAnimation(e, h.reload, 0), e.reload = h.reload, e.reloads[e.weaponIndex] = r;
                for (var s = 0; s < t.length; ++s)
                    if ((c = t[s]).alive && e != c && i.getDistance(c.x, c.y, e.x, e.y) < c.scale + e.scale + h.range) {
                        var l = i.getDirection(c.x, c.y, e.x, e.y);
                        i.getAngleDist(l, e.dir) <= .82 * a.hitArc && this.changeHealth(c, e, -h.dmg * o, l)
                    }
            } else if (e.ammos[e.scrollIndex] >= 1) {
                this.sendAnimation(e, h.reload, 1), this.changeAmmo(e, -1), e.reload = h.reload, e.reloads[e.weaponIndex] = r, this.screenShake(e, e.dir + Math.PI, 8);
                var u = n[e.weaponIndex],
                    f = e.oldX + (u.lOff || 0) * a.bOffset * Math.cos(e.dir) + u.yOff * Math.cos(e.dir + Math.PI / 2),
                    d = e.oldY + (u.lOff || 0) * a.bOffset * Math.sin(e.dir) + u.yOff * Math.sin(e.dir + Math.PI / 2),
                    p = (e.dir + Math.PI / 2 + i.randFloat(-.02, .02)).round(2);
                if (-1 != u.shell) {
                    var m = Math.round(f - (u.sOff || 0) * Math.cos(e.dir)),
                        y = Math.round(d - (u.sOff || 0) * Math.sin(e.dir));
                    this.sendParticle(e, u.shell || 0, m, y, p)
                }
                for (s = 0; s < (u.bCount || 1); ++s) this.projectileManager.add(e.weaponIndex, f, d, e.dir + (u.spread ? i.randFloat(-u.spread, u.spread) : 0), Math.round(u.range * a.rangeMlt), e)
            }
            e.tryAttack = e.mouseDown
        }, this.sendParticle = function(e, n, r, i, a) {
            for (var o = 0; o < t.length; ++o) t[o].canSee(e) && l(t[o].id, "19", n, Math.round(r || e.x), Math.round(i || e.y), a || 0)
        }, this.sendAnimation = function(e, n, r) {
            for (var i = 0; i < t.length; ++i) t[i].active && t[i].canSee(e) && l(t[i].id, "11", e.sid, n, r)
        }, this.sendChat = function(e, n) {
            for (var r = 0; r < t.length; ++r) t[r].active && t[r].canSee(e) && l(t[r].id, "c", e.sid, n)
        }, this.sendWiggle = function(e) {
            for (var n = 0; n < t.length; ++n) t[n].active && t[n].canSee(e) && l(t[n].id, "23", e.sid)
        }, this.sendSound = function(e, n, r, i) {
            if (i)
                for (var a = 0; a < t.length; ++a) t[a].active && t[a].canSee(e) && l(t[a].id, "s", n, e.sid, r || 0);
            else l(e.id, "s", n, e.sid, r || 0)
        }, this.killPlayer = function(e, n) {
            n && (n.kills++, l(n.id, "21", n.kills)), e.vehicle && e.vehicle.resetVehicle(), this.dropWeapon(e), e.deaths++, e.alive = !1, e.spectating = n || this.getSpectate(e), this.updateSpectators(e, n);
            for (var r = 0; r < t.length; ++r) t[r].active && l(t[r].id, "6", e.sid, n == t[r] && this.aliveCount > 2 ? 1 : 0);
            var i = this.aliveCount,
                a = this.updateAccount(e, this.aliveCount);
            this.updatePlayerCount(), this.showEndScreen(e, i, a)
        }, this.showEndScreen = function(t, e, n) {
            l(t.id, "15", e, 0, n)
        }, this.updateSpectators = function(e, n) {
            for (var r = 0; r < t.length; ++r) t[r].active && t[r].spectating == e && t[r] != e && (t[r].spectating = n || this.getSpectate(t[r]))
        }, this.getSpectate = function(e) {
            e.spectateIndex++, e.spectateIndex >= t.length && (e.spectateIndex = 0);
            for (var n = 0; !t[e.spectateIndex].alive && n <= t.length;) n++, e.spectateIndex++, e.spectateIndex >= t.length && (e.spectateIndex = 0);
            return t[e.spectateIndex].alive ? t[e.spectateIndex] : null
        }, this.updatePlayers = function(t) {
            if (this.hidePlayers(), t) {
                Date.now();
                for (var e = 0; e < t.length;)(c = this.findBySid(t[e])) && (c.x1 = c.x, c.y1 = c.y, c.x2 = t[e + 1], c.y2 = t[e + 2], c.movDir = i.getDirection(c.x1, c.y1, c.x2, c.y2), c.d1 = c.dir || 0, c.d2 = t[e + 3], c.weaponIndex = t[e + 4], c.showStats = t[e + 5], c.vehicle = t[e + 6], c.backpackIndex = t[e + 7], c.dt = 0, c.visible = !0), e += 8
            }
        }, this.findBySid = function(e) {
            for (var n = 0; n < t.length; ++n)
                if (t[n].sid == e) return t[n];
            return null
        }, this.generateSID = function() {
            for (var e = 0, n = !0; n;) {
                n = !1, e++;
                for (var r = 0; r < t.length; ++r)
                    if (t[r].sid == e) {
                        n = !0;
                        break
                    }
            }
            return e
        }
    }
}, function(t, e) {
    t.exports.AnimText = function() {
        this.init = function(t, e, n, r, i, a, o) {
            this.x = t, this.y = e, this.color = o, this.scale = n, this.startScale = this.scale, this.maxScale = 2 * n, this.scaleSpeed = .95, this.speed = r, this.life = i, this.text = a
        }, this.update = function(t) {
            this.life && (this.life -= t, this.y -= this.speed * t, this.scale += this.scaleSpeed * t, this.scale >= this.maxScale ? (this.scale = this.maxScale, this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale, this.scaleSpeed = 0), this.life <= 0 && (this.life = 0))
        }, this.render = function(t, e, n) {
            t.fillStyle = this.color, t.font = this.scale + "px GameFont", this.skipOffset ? (t.strokeText(this.text, this.x, this.y), t.fillText(this.text, this.x, this.y)) : (t.strokeText(this.text, this.x - e, this.y - n), t.fillText(this.text, this.x - e, this.y - n))
        }
    }, t.exports.TextManager = function() {
        var e;
        this.texts = [], this.divs = [], this.update = function(t, n, r, i) {
            n.textBaseline = "middle", n.textAlign = "center", n.globalAlpha = 1;
            for (var a = 0; a < this.texts.length; ++a) this.texts[a].life && (this.texts[a].update(t), this.texts[a].render(n, r, i));
            for (a = this.divs.length - 1; a >= 0; --a)(e = this.divs[a]).scale += e.scalePlus * t, e.scale >= e.maxScale ? (e.scale = e.maxScale, e.scalePlus *= -1) : e.scale <= e.minScale && (e.scale = e.minScale), e.style.fontSize = e.scale + "px", e.life -= t, e.life <= 0 && (e.style.display = "none", this.divs.splice(a, 1))
        }, this.animateDiv = function(t, e, n, r) {
            this.divs.indexOf(t) < 0 && this.divs.push(t), t.style.display = "block", t.style.fontSize = n + "px", t.scalePlus = .4, t.scale = n, t.minScale = n, t.maxScale = 1.4 * n, t.innerHTML = e, t.life = r
        }, this.showText = function(e, n, r, i, a, o, s, l, c) {
            for (var h, u = 0; u < this.texts.length; ++u)
                if (!this.texts[u].life) {
                    h = this.texts[u];
                    break
                }
            h || (h = new t.exports.AnimText, this.texts.push(h)), h.init(e, n, r, i, a, o, s), h.type = c || "default", h.skipOffset = l
        }, this.hideByType = function(t) {
            for (var e = 0; e < this.texts.length; ++e) this.texts[e].type == t && (this.texts[e].life = 0)
        }
    }
}, function(t, e) {
    t.exports.obj = function(t, e, n, r, i) {
        var a, o, s = [];
        this.sentTo = [], this.init = function(t, e, n, r, a, o, s, l) {
            this.index = t, this.x = e, this.startX = e, this.y = n, this.startY = n, this.dir = r, this.speed = a, this.dmg = o, this.wMlt = .625, this.maxRange = s, this.range = 0, this.owner = l, i && (this.sentTo.length = 0), this.skipMov = !0, this.skipRender = !0, this.active = !0, this.deathCallback = null
        }, this.update = function(l, c) {
            if (this.active) {
                o = this.speed * l;
                var h = this.skipMov;
                if (this.skipMov ? this.skipMov = !1 : (this.x += o * Math.cos(this.dir), this.y += o * Math.sin(this.dir), this.range += o, this.range >= this.maxRange && (this.range -= this.maxRange, this.x -= this.range * Math.cos(this.dir), this.y -= this.range * Math.sin(this.dir), o = 0, this.deathCallback && this.deathCallback(this), this.active = !1)), i) {
                    var u = h ? this.owner.x : this.x,
                        f = h ? this.owner.y : this.y,
                        d = this.x + o * Math.cos(this.dir),
                        p = this.y + o * Math.sin(this.dir);
                    s.length = 0;
                    for (var m = 0; m < c.length; ++m)(a = c[m]).alive && a != this.owner && e.lineInRect(u, f, d, p, a) && s.push(a);
                    for (var y = r.getGridArrays(u, f, e.getDistance(u, f, d, p)), v = 0; v < y.length; ++v)
                        for (var g = 0; g < y[v].length; ++g)(a = y[v][g]).layer >= t.bulletLayer && !a.cover && s.indexOf(a) < 0 && e.lineInRect(u, f, d, p, a) && s.push(a);
                    if (s.length > 0) {
                        var x = null,
                            w = null,
                            b = null;
                        for (m = 0; m < s.length; ++m)
                            for (var S = e.lineInRect(u, f, d, p, s[m], !0), k = 0; k < S.length; k += 2) b = e.getDistance(this.startX, this.startY, S[k], S[k + 1]), (null == w || b < w) && (w = b, x = s[m]);
                        if (x || (x = s[0]), x.isPlayer && (this.dmg ? n.changeHealth(x, this.owner, -this.dmg, this.dir) : i(x.id, "16", this.dir.round(1), 8), this.effect && n.addEffect(x, this.owner, this.effect)), this.active = !1, this.maxRange = w, !h)
                            for (m = 0; m < c.length; ++m) this.sentTo.indexOf(c[m].id) >= 0 && i(c[m].id, "18", this.sid, this.maxRange)
                    }
                    for (m = 0; m < c.length; ++m) a = c[m], this.sentTo.indexOf(a.id) < 0 && a.canSee(this, o) && (this.sentTo.push(a.id), i(a.id, "17", this.index, Math.round(this.x), Math.round(this.y), this.dir.round(2), Math.floor(this.range), Math.floor(this.maxRange), this.active ? this.sid : 0))
                }
            }
        }
    }
}, function(t, e) {
    t.exports.obj = function(t, e, n, r, i, a, o, s) {
        this.add = function(l, c, h, u, f, d) {
            for (var p = null, m = 0; m < r.length; ++m)
                if (!r[m].active) {
                    p = r[m];
                    break
                }
            return p || ((p = new n(t, e, o, a, s)).sid = r.length + 1, r.push(p)), p.init(l, c, h, u, t.bulletSpeed * (i[l].bSpd || 1), i[l].dmg, f, d), p.src = "/bullets/bullet_" + (i[l].bIndx || 0), p.scale = t.bulletScale * (i[l].bScl || 1), p.effect = i[l].effect, p
        }
    }
}, function(t, e) {
    t.exports.obj = function(t, e) {
        this.init = function(t, e, n, r, i, a, o, s, l) {
            this.index = t, this.scale = a, this.x = e, this.y = n, this.vel = r, this.dir = i, this.rot = i, this.spin = o, this.life = s, this.fade = l, this.alpha = 1, this.active = !0
        }, this.update = function(t) {
            if (this.active) {
                if (this.x += this.vel * t * Math.cos(this.rot), this.y += this.vel * t * Math.sin(this.rot), this.scaleSpd) {
                    var e = this.scaleSpd * t;
                    this.scale += e, this.x += e / 2 * Math.cos(this.rot), this.y += e / 2 * Math.sin(this.rot)
                }
                this.dir += this.spin * t, this.life > 0 && (this.life -= t, this.fade && this.life <= this.fade && (this.alpha = Math.max(0, this.life / this.fade)), this.life <= 0 && (this.active = !1))
            }
        }
    }
}, function(t, e, n) {
    var r = n(9);
    t.exports.data = [{
        src: "/particles/particle_0",
        life: [500, 600],
        vels: [.15, .2],
        dirs: [-.15, .15],
        scale: 15,
        spins: [.005, .009]
    }, {
        src: "/particles/particle_1",
        life: [500, 600],
        vels: [.15, .2],
        dirs: [-.15, .15],
        scale: 15,
        spins: [.005, .009]
    }, {
        src: "/particles/particle_2",
        life: [500, 600],
        vels: [.15, .2],
        dirs: [-.15, .15],
        scale: 15,
        spins: [.005, .009]
    }, {
        src: "/particles/particle_3",
        layer: 1,
        nameType: "screen",
        vels: [.1, .2],
        scale: 44,
        spins: [.001, .002]
    }, {
        src: "/particles/particle_4",
        layer: 1,
        nameType: "screen",
        vels: [.1, .2],
        scale: 44,
        spins: [.001, .002]
    }, {
        src: "/particles/particle_6",
        setting: 0,
        layer: -1,
        life: [5e3, 6e3],
        fade: 500,
        dirs: [0, Math.PI],
        scales: [60, 70]
    }, {
        src: "/particles/particle_7",
        layer: -1,
        life: [2e3, 2100],
        fade: 500,
        dirs: [0, Math.PI],
        scales: [28, 35]
    }, {
        srcs: ["/particles/particle_8", "/particles/particle_9"],
        layer: 0,
        scaleSpd: [.15, .2],
        life: [100, 100],
        fade: 50,
        scales: [35, 40]
    }], e.fetchRand = function(t) {
        return t ? r.randFloat(t[0], t[1]) : 0
    }, e.obj = function(t, n, r, i) {
        var a, o;
        this.add = function(s, l, c, h, u) {
            if (a = null, void 0 == (o = e.data[s]).setting || u[o.setting].val) {
                for (var f = 0; f < r.length; ++f)
                    if (!r[f].active) {
                        a = r[f];
                        break
                    }
                a || (a = new i(t, n), r.push(a)), o = e.data[s], a.init(s, l, c, e.fetchRand(o.vels), h + e.fetchRand(o.dirs), e.fetchRand(o.scales) || o.scale, e.fetchRand(o.spins), e.fetchRand(o.life), o.fade || 0), a.scaleSpd = e.fetchRand(o.scaleSpd) || 0, a.layer = o.layer || 0, a.nameType = o.nameType || "default", a.composite = o.composite || null, a.src = o.src || o.srcs[n.randInt(0, o.srcs.length - 1)]
            }
        }, this.getCount = function(t) {
            for (var e = 0, n = 0; n < r.length; ++n) r[n].active && r[n].nameType == t && e++;
            return e
        }
    }
}, function(t, e) {
    t.exports.obj = function(t, e) {
        var n;
        this.xListen = 0, this.yListen = 0, this.sounds = [], this.IDList = ["equip_2", "hit_0", "bush"], this.active = !0, this.play = function(e, r, i) {
            r && this.active && ((n = this.sounds[e]) || (n = new Howl({
                src: ".././sound/" + e + ".mp3"
            }), this.sounds[e] = n), i && n.isPlaying || (n.isPlaying = !0, n.play(), n.volume((r || 1) * t.volumeMult), n.loop(i)))
        }, this.playAt = function(n, r, i, a) {
            a && (a = Math.min(1, a));
            var o = e.getDistance(this.xListen, this.yListen, r, i);
            if (o <= t.hearDistance) {
                var s = Math.min(1, (t.hearDistance - o) / t.hearDistance);
                this.play(n, s * (a || 1))
            }
        }, this.toggleMute = function(t, e) {
            (n = this.sounds[t]) && n.mute(e)
        }, this.stop = function(t) {
            (n = this.sounds[t]) && (n.stop(), n.isPlaying = !1)
        }
    }
}, function(t, e) {
    t.exports.obj = function(t, e, n) {
        var r = t[21].scale;
        this.indexes = [23, 15, 24], this.rScale = t[this.indexes[1]].scale, this.airPortX = 6e3, this.airPortY = -7e3, this.crossY = 0;
        var i = 2 * this.rScale;
        this.crossX = -Math.ceil(3e3 / i) * i, this.baseX = 3e3, this.baseY = 4500, this.objects = [], this.roads = [], this.gameObjects = [{
            i: 16,
            r: Math.PI / 2,
            x: this.baseX - 450,
            y: this.baseY + 500
        }, {
            i: 16,
            r: -Math.PI / 2,
            x: this.baseX + 400,
            y: this.baseY - 500
        }, {
            i: 22,
            x: this.baseX + 520,
            y: this.baseY + 370
        }, {
            i: 22,
            x: this.baseX + 150,
            y: this.baseY + 370
        }, {
            i: 28,
            x: this.baseX - 500,
            y: this.baseY
        }], this.objects.push({
            type: "road",
            noVehicle: !0,
            roadTiles: [32, 31],
            weaponTypes: [0, 1, 2],
            stepIndex: 2,
            itemCount: 3,
            weaponCount: 6,
            wt: 1,
            ht: 10,
            x: this.airPortX + 2 * this.rScale + 100,
            y: this.airPortY
        }), this.objects.push({
            type: "road",
            noVehicle: !0,
            roadTiles: [30, 30],
            weaponTypes: [0, 1],
            stepIndex: 2,
            itemCount: 1,
            weaponCount: 0,
            wt: 1,
            ht: 1,
            x: this.airPortX,
            y: this.airPortY
        }), this.objects.push({
            type: "house",
            baseIndex: 17,
            walls: [1, 1, 1, 1],
            clutter: [26, 26, 26],
            weaponTypes: [1, 2],
            wi: 25,
            packCount: 3,
            stepIndex: 4,
            itemCount: 4,
            weaponCount: 6,
            wt: 2,
            ht: 2,
            x: this.baseX,
            y: this.baseY
        }), this.addHouse = function(t, e, n, r) {
            this.objects.push({
                type: "house",
                baseIndex: 21,
                walls: n || [1, 1, 1, 1],
                weaponTypes: [0, 1],
                wi: r,
                packCount: 1,
                stepIndex: 2,
                itemCount: 1,
                weaponCount: 2,
                wt: 1,
                ht: 1,
                x: t,
                y: e
            })
        };
        var a = Math.ceil(n.mapScale / this.rScale);
        this.objects.push({
            type: "road",
            roadTiles: [15, 24, 23],
            weaponTypes: [0],
            stepIndex: 2,
            itemCount: 11,
            weaponCount: 8,
            wt: a,
            ht: 1,
            x: 0,
            y: this.crossY
        }, {
            type: "road",
            roadTiles: [15, 24, 23],
            weaponTypes: [0],
            stepIndex: 2,
            itemCount: 11,
            weaponCount: 8,
            wt: 1,
            ht: a,
            x: this.crossX,
            y: 0
        });
        var o = this.rScale + 80;
        this.addHouse(this.airPortX - 135, this.airPortY + 900), this.addHouse(n.mapScale - 1500, n.mapScale - 1e3), this.addHouse(1e3 - n.mapScale, n.mapScale - 1e3), this.addHouse(n.mapScale - 800, this.crossY - o - r), this.addHouse(n.mapScale - 800, this.crossY + o + r), this.addHouse(this.crossX + o + r, this.crossY - o - r), this.addHouse(this.crossX + 2100, this.crossY - o - r), this.addHouse(this.crossX + o + r, this.crossY - 2200), this.addHouse(this.crossX - o - r, this.crossY - o - r), this.addHouse(this.crossX - 2200, this.crossY - o - r), this.addHouse(this.crossX - o - r, this.crossY + o + r), this.addHouse(this.crossX - o - r, this.crossY + 2200), this.addHouse(this.crossX + o + r, this.crossY + o + r), this.addHouse(this.crossX - o - r, -n.mapScale + r + 500);
        for (var s = 0; s < this.objects.length; ++s) {
            var l = t[this.objects[s].baseIndex || this.objects[s].roadTiles[0]].scale;
            this.objects[s].w = l * this.objects[s].wt, this.objects[s].h = l * this.objects[s].ht
        }
    }
}, function(t, e) {
    t.exports.obj = function(t, e) {
        this.init = function(t, e, n, r) {
            this.x = t, this.y = e, this.scale = n, this.src = "ground/ground_" + r, this.active = !0
        }, this.recycle = function(t, n) {
            this.x - t < 0 ? this.x += e.maxScreenWidth : this.x - t > e.maxScreenWidth && (this.x -= e.maxScreenWidth), this.y - n < 0 ? this.y += e.maxScreenHeight : this.y - n > e.maxScreenHeight && (this.y -= e.maxScreenHeight)
        }
    }
}, function(t, e) {
    t.exports.obj = function(t) {
        this.getTweet = function() {
            return "Check out this new .io Battle Royale game https://foes.io"
        }
    }
}, function(t, e, n) {
    var r;
    ! function() {
        "use strict";
        /**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */
        function i(t, e) {
            var n;
            if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !i.notNeeded(t)) {
                for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = 0, s = r.length; a < s; a++) this[r[a]] = l(this[r[a]], this);
                o && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
                    var i = Node.prototype.removeEventListener;
                    "click" === e ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r)
                }, t.addEventListener = function(e, n, r) {
                    var i = Node.prototype.addEventListener;
                    "click" === e ? i.call(t, e, n.hijacked || (n.hijacked = function(t) {
                        t.propagationStopped || n(t)
                    }), r) : i.call(t, e, n, r)
                }), "function" == typeof t.onclick && (n = t.onclick, t.addEventListener("click", function(t) {
                    n(t)
                }, !1), t.onclick = null)
            }

            function l(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }
        var a = navigator.userAgent.indexOf("Windows Phone") >= 0,
            o = navigator.userAgent.indexOf("Android") > 0 && !a,
            s = /iP(ad|hone|od)/.test(navigator.userAgent) && !a,
            l = s && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            c = s && /OS [6-7]_\d/.test(navigator.userAgent),
            h = navigator.userAgent.indexOf("BB10") > 0;
        i.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (s && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, i.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !o;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, i.prototype.sendClick = function(t, e) {
            var n, r;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), r = e.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
        }, i.prototype.determineEventType = function(t) {
            return o && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, i.prototype.focus = function(t) {
            var e;
            s && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, i.prototype.updateScrollParent = function(t) {
            var e, n;
            if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
                n = t;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        e = n, t.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, i.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, i.prototype.onTouchStart = function(t) {
            var e, n, r;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], s) {
                if ((r = window.getSelection()).rangeCount && !r.isCollapsed) return !0;
                if (!l) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, i.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
        }, i.prototype.onTouchMove = function(t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, i.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, i.prototype.onTouchEnd = function(t) {
            var e, n, r, i, a, h = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, c && (a = t.changedTouches[0], (h = document.elementFromPoint(a.pageX - window.pageXOffset, a.pageY - window.pageYOffset) || h).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (r = h.tagName.toLowerCase())) {
                if (e = this.findControl(h)) {
                    if (this.focus(h), o) return !1;
                    h = e
                }
            } else if (this.needsFocus(h)) return t.timeStamp - n > 100 || s && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(h), this.sendClick(h, t), s && "select" === r || (this.targetElement = null, t.preventDefault()), !1);
            return !(!s || l || !(i = h.fastClickScrollParent) || i.fastClickLastScrollTop === i.scrollTop) || (this.needsClick(h) || (t.preventDefault(), this.sendClick(h, t)), !1)
        }, i.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, i.prototype.onMouse = function(t) {
            return !(this.targetElement && !t.forwardedTouchEvent && t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), 1))
        }, i.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
        }, i.prototype.destroy = function() {
            var t = this.layer;
            o && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, i.notNeeded = function(t) {
            var e, n, r;
            if (void 0 === window.ontouchstart) return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!o) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (h && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || !!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || "none" === t.style.touchAction || "manipulation" === t.style.touchAction
        }, i.attach = function(t, e) {
            return new i(t, e)
        }, void 0 === (r = function() {
            return i
        }.call(e, n, e, t)) || (t.exports = r)
    }()
}]);