new Vue({
  el: "#app",
  data: {
    message1: "HelloWorld",
    number: 3,
    ok: true,
    message2: "helloworld",
    html1: "<strong>OkazakiRui</strong>",
    url1: "https://www.google.com/",
    attribute1: "href",
    url2: "https://twitter.com/",
    yahooObject: {
      href: "https://www.yahoo.co.jp/",
      id: 666,
    },
    clickCount: 0,
    MousePositionX: 0,
    MousePositionY: 0,
    copyTextColor: "visibility:hidden",
    buttonclick: "click",
    HelloName: "名無し",
  },
  computed: {
    lessThanThreeComputed: function () {
      console.log("computed");
      return this.clickCount > 3 ? "3より上" : "3より下";
    },
  },
  methods: {
    reverseMessage: function () {
      this.message1 = this.message1.split("").reverse().join("");
    },
    hello: function () {
      this.message2 = "Hello Vue.js";
      return "Hello";
    },
    countDown: function () {
      this.clickCount--;
    },
    changeMousePosition: function (e) {
      this.MousePositionX = e.clientX;
      this.MousePositionY = e.clientY;
    },
    copyText: function (e, color) {
      if (e.target.outerText === "この文章をコピーしてください") {
        this.copyTextColor = "color:" + color;
      }
    },
    stopMousePosition: function (e) {
      e.stopPropagation();
    },
    stopSiteMove: function (e) {
      e.preventDefault();
    },
    myAlert: function () {
      alert("アラート！");
    },
    lessThanThreeMethods: function () {
      console.log("methods");
      return this.clickCount > 3 ? "3より上" : "3より下";
    },
  },
});
