(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.flexible = factory());
}(this, function () { 'use strict';

  /**
   * flexible
   * @see https://github.com/amfe/lib-flexible
   * @param designWidth 设计师起稿宽度
   * @param pxPerRem 每个1rem多少px
   */
  function flexible() {
    var designWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 750;
    var pxPerRem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1; // adjust body font size

    function setBodyFontSize() {
      if (document.body) {
        document.body.style.fontSize = 12 * dpr + 'px';
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize);
      }
    }

    setBodyFontSize(); // set 1rem = viewWidth / (10)

    function setRemUnit() {
      var rem = docEl.clientWidth / (designWidth / pxPerRem);
      docEl.style.fontSize = rem + 'px';
    }

    setRemUnit(); // reset rem unit on page resize

    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        setRemUnit();
      }
    }); // detect 0.5px supports

    if (dpr >= 2) {
      var fakeBody = document.createElement('body');
      var testElement = document.createElement('div');
      testElement.style.border = '.5px solid transparent';
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);

      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
      }

      docEl.removeChild(fakeBody);
    }
  }

  return flexible;

}));