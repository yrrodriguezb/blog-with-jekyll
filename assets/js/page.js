var page = {
  controls: {
    btn_go_up: null,
    navbar_burgers: null
  },
  events: {
    refsControls: function () {
      page.controls.btn_go_up = document.getElementById("btn-go-up")
      page.controls.navbar_burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    },
    refsEvents: function () {
      page.pollyfills.load();
      page.controls.btn_go_up.onclick = page.methods.go_up;
      window.onscroll = page.methods.onscroll;
      page.methods.burgerIsActive();
    }
  },
  pollyfills: {
    easeInOutQuad: function () {
      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      };
    },
    forEach: function () {
      if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback) {
          for (var i = 0; i < this.length; i++) {
            callback(this[i], i, this)
          }
        }
      }
    },
    load: function () {
      page.pollyfills.easeInOutQuad();
      page.pollyfills.forEach();
    }
  },
  methods: {
    go_up: function () {
      page.methods.scrollTo();   
    },
    onscroll: function () {
      if (window.scrollY > 100) {
        page.controls.btn_go_up.style.display = "inline";
      } else {
        page.controls.btn_go_up.style.display = "none";
      }
    },
    scrollTo: function () {
      window.scrollTo(0, 0);
    },
    burgerIsActive: function () {
      var burgers = page.controls.navbar_burgers;

      if (burgers.length > 0) {
        burgers.forEach( el => {
          el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    },
  },
  onload: function () {
    page.events.refsControls();
    page.events.refsEvents();
  }
};

page.onload();