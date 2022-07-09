!(function () {
        var e = document.querySelector(".post-body"),
            n = e.querySelectorAll("div > br, span > br, div > p, span > p"),
            t = Math.ceil(0.2 * n.length),
            l = Math.ceil(0.4 * n.length),
            k = Math.ceil(0.7 * n.length),
            o = document.querySelector("#Middle-Ad-Slot1 .widget-content"),
            i = document.querySelector("#Middle-Ad-Slot2 .widget-content"),
            g = document.querySelector("#Middle-Ad-Slot3 .widget-content"),
            r = document.querySelector("#top-Ad-Slots .widget-content"),
            d = document.querySelector("#Ad-Slots-below .widget-content"),
            c = document.getElementById("iklan1"),
            a = document.getElementById("iklan2"),
            v = document.getElementById("iklan3");

        function u(e, n) {
            n.parentNode.insertBefore(e, n.nextSibling);
        }
        null != r && "\n" != r.innerHTML && e.insertBefore(r, e.childNodes[0]),
            null != d && "\n" != d.innerHTML && e.appendChild(d),
            0 < n.length
                ? (null != o && "\n" != o.innerHTML && u(o, null !== c ? c : n[t]), null != i && "\n" != i.innerHTML && u(i, null !== a ? a : n[l]), null != g && "\n" != g.innerHTML && u(g, null !== v ? v : n[k]))
                : (o.parentNode.removeChild(o), i.parentNode.removeChild(i), g.parentNode.removeChild(g));
    })();
