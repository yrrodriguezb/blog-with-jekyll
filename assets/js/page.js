var page = {
  controls: {
    btn_go_up: null,
    navMenu: null,
    navbar_burgers: null,
    intervalId: null
  },
  events: {
    refsControls: function () {
      page.controls.btn_go_up = document.getElementById("btn-go-up");
      page.controls.navMenu = document.getElementById("navMenu");
      page.controls.navbar_burgers = document.querySelectorAll('.navbar-burger');
      page.controls.intervalId = 0;
    },
    refsEvents: function () {
      page.controls.btn_go_up.onclick = page.methods.go_up;
      window.onscroll = page.methods.onscroll;
      page.methods.burgerIsActive();
    }
  },
  pollyfills: {
    forEach: function () {
      if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback) {
          for (var i = 0; i < this.length; i++) {
            callback(this[i], i, this)
          }
        }
      }

      if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
      }
    },
    querySelectorAll: function () {
      if (!window.document.querySelectorAll) {
        document.querySelectorAll = document.body.querySelectorAll = Object.querySelectorAll = function querySelectorAllPolyfill(r, c, i, j, a) {
          var d=document, 
              s=d.createStyleSheet();
          a = d.all;
          c = [];
          r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
          for (i = r.length; i--;) {
            s.addRule(r[i], 'k:v');
            for (j = a.length; j--;) {
              a[j].currentStyle.k && c.push(a[j]);
            }
            s.removeRule(0);
          }
          return c;
        };
      }
    },
    load: function () {
      page.pollyfills.forEach();
      page.pollyfills.querySelectorAll();
    }
  },
  methods: {
    go_up: function () {
      page.controls.intervalId = setInterval(page.methods.scrollTo, 16.66);
    },
    onscroll: function () {
      var scrollY = window.scrollY || window.pageYOffset
      var show = scrollY > 100;

      page.controls.btn_go_up.style.display = show ? "inline" : "none";
    },
    scrollTo: function () {
      var scrollY = window.scrollY || window.pageYOffset;

      if (scrollY === 0)
        clearInterval(page.controls.intervalId);

      window.scroll(0, scrollY - 100);
    },
    burgerIsActive: function () {
      var burgers = page.controls.navbar_burgers;
      
      if (burgers.length > 0) {
        burgers.forEach(function (el) {
          el.onclick = (function () {
            var $target = page.controls.navMenu;

            if (el.className.indexOf("is-active") > -1) {
              el.className = el.className.replace(" is-active", "");
              $target.className = $target.className.replace(" is-active", "");
            } else {
              el.className += " is-active";
              $target.className += " is-active";
            }
          });
        });
      }
    }
  },
  onload: function () {
    page.pollyfills.load();
    page.events.refsControls();
    page.events.refsEvents();
  }
};

page.onload();