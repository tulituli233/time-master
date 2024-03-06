if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key2, val] of props) {
      target[key2] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$f = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$7], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const _sfc_main$e = {
    __name: "index",
    setup(__props2) {
      const list = vue.ref([
        {
          title: "备忘录",
          unicode: "icon-biaoqian",
          url: "/pages/index/index",
          color: "#1baf59",
          desc: "记事本"
        },
        {
          title: "记账",
          unicode: "icon-jizhang",
          url: "/subPackages/jizhang/index/index",
          color: "#7e7cea",
          desc: "本月：收入5000，支出3000，结余2000"
        },
        {
          title: "日记",
          unicode: "icon-rijix",
          url: "/pages/note/index",
          color: "#4c8bf0",
          desc: "今天是个好日子，明天也是个好日子"
        },
        {
          title: "纪念日倒数",
          unicode: "icon-jinianriyingxiao",
          url: "/pages/note/index",
          color: "#f75e3c",
          desc: "2024年2月24日，距离2024年3月1日还有5天"
        },
        {
          title: "课程表",
          unicode: "icon-kechengbiao",
          url: "/pages/note/index",
          color: "#ff4962",
          desc: "小初高大学课程表"
        },
        {
          title: "事项",
          unicode: "icon-note",
          url: "/pages/note/index",
          color: "#ffa851",
          desc: "总数：2个，未完成：1个"
        },
        {
          title: "喝水",
          unicode: "icon-quan",
          url: "/pages/note/index",
          color: "#0fb9a0",
          desc: "今日：0/1700ml"
        },
        {
          title: "习惯打卡",
          unicode: "icon-a-rilidaka",
          url: "/pages/note/index",
          color: "#7e7de8",
          desc: "习惯成自然"
        }
      ]);
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(list.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  onClick: ($event) => _ctx.$utils.navTo(item.url),
                  key: item.title
                }, [
                  vue.createElementVNode("view", { class: "left" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: "icon",
                        style: vue.normalizeStyle({ backgroundColor: item.color })
                      },
                      [
                        vue.createVNode(_component_uni_icons, {
                          "custom-prefix": "iconfont",
                          type: item.unicode,
                          color: "#fff",
                          size: "30"
                        }, null, 8, ["type"])
                      ],
                      4
                      /* STYLE */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "desc" },
                      vue.toDisplayString(item.desc),
                      1
                      /* TEXT */
                    )
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "E:/HBuilderProjects/time-master/pages/index/index.vue"]]);
  const _sfc_main$d = {
    __name: "index",
    setup(__props2) {
      const middleList = vue.ref([
        {
          title: "自定义APP",
          unicode: "icon-shoujizhendong",
          color: "#f75e3c",
          url: "/pages/index/index"
        },
        {
          title: "应用管理",
          unicode: "icon-yingyong",
          color: "#1baf59",
          url: "/pages/index/index"
        },
        {
          title: "高级功能",
          unicode: "icon-gaojigongneng",
          color: "#7e7cea",
          url: "/pages/index/index"
        },
        {
          title: "桌面小组件",
          unicode: "icon-zhuomianzujianguanli",
          color: "#4c8bf0",
          url: "/pages/index/index"
        }
      ]);
      const list = vue.ref([
        {
          title: "我的消息",
          unicode: "icon-xiaoxi",
          url: "/pages/index/index"
        },
        {
          title: "帮助中心",
          unicode: "icon-bangzhu",
          url: "/pages/index/index"
        },
        {
          title: "设置",
          unicode: "icon-shezhi",
          url: "/pages/index/index"
        }
      ]);
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("view", { class: "head" }, [
                vue.createElementVNode("img", { src: "/static/head.png" })
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("text", { class: "name" }, "昵称"),
              vue.createElementVNode("text", { class: "desc" }, "用一句话让人记住你！")
            ])
          ]),
          vue.createElementVNode("view", { class: "middle" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(middleList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "item",
                  key: item.unicode
                }, [
                  vue.createElementVNode("div", { class: "mtop" }, [
                    vue.createVNode(_component_uni_icons, {
                      "custom-prefix": "iconfont",
                      type: item.unicode,
                      color: item.color,
                      size: "30"
                    }, null, 8, ["type", "color"])
                  ]),
                  vue.createElementVNode(
                    "div",
                    { class: "mbottom" },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "bottom" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(list.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "list-item",
                  key: item.unicode
                }, [
                  vue.createElementVNode("view", { class: "left" }, [
                    vue.createVNode(_component_uni_icons, {
                      "custom-prefix": "iconfont",
                      type: item.unicode,
                      size: "30"
                    }, null, 8, ["type"])
                  ]),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "arrow" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "right",
                        size: "30"
                      })
                    ])
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const PagesMineIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "E:/HBuilderProjects/time-master/pages/mine/index.vue"]]);
  const _sfc_main$c = {
    name: "UniSegmentedControl",
    emits: ["clickItem"],
    props: {
      current: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      activeColor: {
        type: String,
        default: "#2979FF"
      },
      styleType: {
        type: String,
        default: "button"
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      }
    },
    created() {
      this.currentIndex = this.current;
    },
    methods: {
      _onClick(index) {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.$emit("clickItem", {
            currentIndex: index
          });
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
        style: vue.normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor })
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.values, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass([[
                $props.styleType === "text" ? "" : "segmented-control__item--button",
                index === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
                index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
                index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
              ], "segmented-control__item"]),
              key: index,
              style: vue.normalizeStyle({ backgroundColor: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
              onClick: ($event) => $options._onClick(index)
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  {
                    style: vue.normalizeStyle({ color: index === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
                    class: vue.normalizeClass(["segmented-control__text", $props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""])
                  },
                  vue.toDisplayString(item),
                  7
                  /* TEXT, CLASS, STYLE */
                )
              ])
            ], 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$6], ["__scopeId", "data-v-86aa1171"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
  let mpMixins = {};
  mpMixins = {
    data() {
      return {
        is_show: "none"
      };
    },
    watch: {
      show(newVal) {
        this.is_show = this.show;
      }
    },
    created() {
      this.swipeaction = this.getSwipeAction();
      if (this.swipeaction && Array.isArray(this.swipeaction.children)) {
        this.swipeaction.children.push(this);
      }
    },
    mounted() {
      this.is_show = this.show;
    },
    methods: {
      // wxs 中调用
      closeSwipe(e) {
        if (this.autoClose && this.swipeaction) {
          this.swipeaction.closeOther(this);
        }
      },
      change(e) {
        this.$emit("change", e.open);
        if (this.is_show !== e.open) {
          this.is_show = e.open;
        }
      },
      appTouchStart(e) {
        const {
          clientX
        } = e.changedTouches[0];
        this.clientX = clientX;
        this.timestamp = (/* @__PURE__ */ new Date()).getTime();
      },
      appTouchEnd(e, index, item, position) {
        const {
          clientX
        } = e.changedTouches[0];
        let diff = Math.abs(this.clientX - clientX);
        let time = (/* @__PURE__ */ new Date()).getTime() - this.timestamp;
        if (diff < 40 && time < 300) {
          this.$emit("click", {
            content: item,
            index,
            position
          });
        }
      },
      onClickForPC(index, item, position) {
        return;
      }
    }
  };
  const mpwxs = mpMixins;
  let bindIngXMixins = {};
  let otherMixins = {};
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxsswipe");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxsswipe"] = "afd46426";
  };
  const block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("renderswipe");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["renderswipe"] = "5a1e922e";
  };
  const _sfc_main$b = {
    mixins: [mpwxs, bindIngXMixins, otherMixins],
    emits: ["click", "change"],
    props: {
      // 控制开关
      show: {
        type: String,
        default: "none"
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否自动关闭
      autoClose: {
        type: Boolean,
        default: true
      },
      // 滑动缺省距离
      threshold: {
        type: Number,
        default: 20
      },
      // 左侧按钮内容
      leftOptions: {
        type: Array,
        default() {
          return [];
        }
      },
      // 右侧按钮内容
      rightOptions: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    // TODO vue3
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    methods: {
      uninstall() {
        if (this.swipeaction) {
          this.swipeaction.children.forEach((item, index) => {
            if (item === this) {
              this.swipeaction.children.splice(index, 1);
            }
          });
        }
      },
      /**
       * 获取父元素实例
       */
      getSwipeAction(name = "uniSwipeAction") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 在微信小程序 app vue端 h5 使用wxs 实现"),
        vue.createElementVNode("view", { class: "uni-swipe" }, [
          vue.createElementVNode("view", {
            class: "uni-swipe_box",
            "change:prop": _ctx.wxsswipe.showWatch,
            prop: vue.wp(_ctx.is_show),
            "data-threshold": $props.threshold,
            "data-disabled": $props.disabled,
            onTouchstart: _cache[2] || (_cache[2] = (...args) => _ctx.wxsswipe.touchstart && _ctx.wxsswipe.touchstart(...args)),
            onTouchmove: _cache[3] || (_cache[3] = (...args) => _ctx.wxsswipe.touchmove && _ctx.wxsswipe.touchmove(...args)),
            onTouchend: _cache[4] || (_cache[4] = (...args) => _ctx.wxsswipe.touchend && _ctx.wxsswipe.touchend(...args))
          }, [
            vue.createCommentVNode(" 在微信小程序 app vue端 h5 使用wxs 实现"),
            vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--left" }, [
              vue.renderSlot(_ctx.$slots, "left", {}, () => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.leftOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args), ["stop"])),
                      onTouchend: vue.withModifiers(($event) => _ctx.appTouchEnd($event, index, item, "left"), ["stop"]),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "left"), ["stop"])
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-swipe_button-text",
                          style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        vue.toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 44, ["onTouchend", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], true)
            ]),
            vue.createElementVNode("view", { class: "uni-swipe_text--center" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--right" }, [
              vue.renderSlot(_ctx.$slots, "right", {}, () => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.rightOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args), ["stop"])),
                      onTouchend: vue.withModifiers(($event) => _ctx.appTouchEnd($event, index, item, "right"), ["stop"]),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "right"), ["stop"])
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-swipe_button-text",
                          style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        vue.toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 44, ["onTouchend", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], true)
            ])
          ], 40, ["change:prop", "prop", "data-threshold", "data-disabled"])
        ]),
        vue.createCommentVNode(" app nvue端 使用 bindingx "),
        vue.createCommentVNode(" 其他平台使用 js ，长列表性能可能会有影响")
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$b);
  if (typeof block1 === "function")
    block1(_sfc_main$b);
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$5], ["__scopeId", "data-v-8ff2a577"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
  const _sfc_main$a = {
    name: "uniSwipeAction",
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    methods: {
      // 公开给用户使用，重制组件样式
      resize() {
      },
      // 公开给用户使用，关闭全部 已经打开的组件
      closeAll() {
        this.children.forEach((vm) => {
          vm.is_show = "none";
        });
      },
      closeOther(vm) {
        if (this.openItem && this.openItem !== vm) {
          this.openItem.is_show = "none";
        }
        this.openItem = vm;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue"]]);
  const _sfc_main$9 = {
    __name: "index",
    setup(__props2) {
      const current = vue.ref(0);
      const items = ["全部", "工作", "生活"];
      const styleType = "button";
      const activeColor = "#1baf59";
      const onClickItem = (e) => {
        current.value = e.currentIndex;
      };
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      const options2 = vue.ref([
        {
          text: "置顶",
          style: {
            backgroundColor: "#007aff"
          }
        },
        {
          text: "失败",
          style: {
            backgroundColor: "#007aff"
          }
        },
        {
          text: "删除 ",
          style: {
            backgroundColor: "#F56C6C"
          }
        }
      ]);
      const bindClick = (e) => {
        formatAppLog("log", "at pages/note/index.vue:98", e);
      };
      const planList = [
        {
          planID: 1,
          status: 0,
          isTop: 0,
          type: 1,
          title: "吃饭",
          date: "2022-02-01"
        },
        {
          planID: 2,
          status: 0,
          isTop: 1,
          type: 1,
          title: "睡觉",
          date: "2022-02-02"
        },
        {
          planID: 3,
          status: 1,
          isTop: 0,
          type: 1,
          title: "学习",
          date: "2022-02-03"
        },
        {
          planID: 4,
          status: 3,
          isTop: 0,
          type: 1,
          title: "写代码",
          date: "2022-02-04"
        },
        {
          planID: 5,
          status: 0,
          isTop: 0,
          type: 2,
          title: "运动",
          date: "2022-03-05"
        },
        {
          planID: 6,
          status: 0,
          isTop: 0,
          type: 1,
          title: "看电影",
          date: "2024-02-27"
        },
        {
          planID: 7,
          status: 0,
          isTop: 0,
          type: 2,
          title: "跑步",
          date: "2024-02-28"
        },
        {
          planID: 8,
          status: 0,
          isTop: 0,
          type: 2,
          title: "打篮球",
          date: "2024-03-01"
        },
        {
          planID: 9,
          status: 0,
          isTop: 0,
          type: 2,
          title: "游泳",
          date: "2024-04-02"
        },
        {
          planID: 10,
          status: 0,
          isTop: 0,
          type: 2,
          title: "跳绳",
          date: "2024-02-26"
        }
      ];
      const modelCateList = vue.ref([
        {
          title: "置顶",
          isShow: true,
          plans: []
        },
        {
          title: "过去",
          isShow: true,
          plans: []
        },
        {
          title: "今天",
          isShow: true,
          plans: []
        },
        {
          title: "明后天",
          isShow: true,
          plans: []
        },
        {
          title: "7天内",
          isShow: true,
          plans: []
        },
        {
          title: "未来",
          isShow: true,
          plans: []
        },
        {
          title: "已完成",
          isShow: true,
          plans: []
        },
        {
          title: "已失败",
          isShow: true,
          plans: []
        }
      ]);
      let newPlanList = vue.computed(() => {
        let currPlanList = [];
        clearPlans();
        switch (current.value) {
          case 0:
            currPlanList = handleData(planList);
            formatAppLog("log", "at pages/note/index.vue:232", "all", currPlanList);
            break;
          case 1:
            currPlanList = handleData(planList.filter((item) => {
              return item.type === 1;
            }));
            formatAppLog("log", "at pages/note/index.vue:238", "work", currPlanList);
            break;
          case 2:
            currPlanList = handleData(planList.filter((item) => {
              return item.type === 2;
            }));
            formatAppLog("log", "at pages/note/index.vue:244", "life", currPlanList);
            break;
        }
        return currPlanList;
      });
      const handleData = (list) => {
        let cateList = modelCateList;
        list.forEach((item) => {
          const date = new Date(item.date);
          const today = /* @__PURE__ */ new Date();
          let todayString = "";
          let year = today.getFullYear();
          let month = today.getMonth() + 1;
          let day = today.getDate();
          month = month < 10 ? "0" + month : month;
          day = day < 10 ? "0" + day : day;
          todayString = year + "-" + month + "-" + day;
          const todayTime = new Date(todayString);
          const diff = date - todayTime;
          if (item.isTop === 1 && item.status === 0) {
            cateList.value[0].plans.push(item);
          } else if (diff < 0 && item.status === 0) {
            cateList.value[1].plans.push(item);
          } else if (diff === 0 && item.status === 0) {
            cateList.value[2].plans.push(item);
          } else if (diff >= 1 * 24 * 60 * 60 * 1e3 && diff <= 2 * 24 * 60 * 60 * 1e3 && item.status === 0) {
            cateList.value[3].plans.push(item);
          } else if (diff <= 7 * 24 * 60 * 60 * 1e3 && item.status === 0) {
            cateList.value[4].plans.push(item);
          } else if (diff > 7 * 24 * 60 * 60 * 1e3 && item.status === 0) {
            cateList.value[5].plans.push(item);
          } else if (item.status === 1) {
            cateList.value[6].plans.push(item);
          } else if (item.status === 3) {
            cateList.value[7].plans.push(item);
          }
        });
        formatAppLog("log", "at pages/note/index.vue:300", "cateList", cateList);
        return cateList.value;
      };
      const clearPlans = () => {
        modelCateList.value.forEach((item) => {
          item.plans = [];
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_0);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
        const _component_uni_swipe_action_item = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action-item"), __easycom_2);
        const _component_uni_swipe_action = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "select" }, [
            vue.createElementVNode("view", { class: "select-header" }, [
              vue.createElementVNode("view", { class: "uni-padding-wrap" }, [
                vue.createVNode(_component_uni_segmented_control, {
                  current: current.value,
                  values: items,
                  "style-type": styleType,
                  "active-color": activeColor,
                  onClickItem
                }, null, 8, ["current"])
              ])
            ]),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "plan-list" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(newPlanList), (item, index) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: vue.normalizeClass(["plan-item", index === 0 ? "first" : ""]),
                          key: index
                        },
                        [
                          item.plans && item.plans.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                            vue.createElementVNode("view", {
                              class: "plan-header",
                              onClick: ($event) => item.isShow = !item.isShow
                            }, [
                              vue.createElementVNode("view", { class: "header-title" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "title" },
                                  vue.toDisplayString(item.title),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              vue.createElementVNode("view", { class: "header-desc" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "plan-num" },
                                  vue.toDisplayString(item.plans.length),
                                  1
                                  /* TEXT */
                                ),
                                vue.createVNode(_component_uni_icons, {
                                  type: item.isShow ? "top" : "bottom",
                                  size: "20"
                                }, null, 8, ["type"])
                              ])
                            ], 8, ["onClick"]),
                            vue.withDirectives(vue.createElementVNode(
                              "view",
                              { class: "plan-body" },
                              [
                                (vue.openBlock(true), vue.createElementBlock(
                                  vue.Fragment,
                                  null,
                                  vue.renderList(item.plans, (item1) => {
                                    return vue.openBlock(), vue.createElementBlock("view", {
                                      class: "body-item",
                                      key: item1.planID
                                    }, [
                                      vue.createVNode(
                                        _component_uni_swipe_action,
                                        null,
                                        {
                                          default: vue.withCtx(() => [
                                            vue.createVNode(_component_uni_swipe_action_item, {
                                              "right-options": options2.value,
                                              onClick: ($event) => bindClick(item1.planID)
                                            }, {
                                              default: vue.withCtx(() => [
                                                vue.createElementVNode("view", { class: "content-box" }, [
                                                  vue.createElementVNode("view", { class: "box-left" }, [
                                                    vue.createElementVNode("checkbox", { value: "cb" })
                                                  ]),
                                                  vue.createElementVNode("view", { class: "box-right" }, [
                                                    vue.createElementVNode("view", { class: "plan-title" }, [
                                                      vue.createElementVNode(
                                                        "text",
                                                        { class: "title" },
                                                        vue.toDisplayString(item1.title),
                                                        1
                                                        /* TEXT */
                                                      )
                                                    ]),
                                                    vue.createElementVNode("view", { class: "plan-desc" }, [
                                                      vue.createElementVNode(
                                                        "text",
                                                        { class: "desc" },
                                                        vue.toDisplayString(item1.date),
                                                        1
                                                        /* TEXT */
                                                      )
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              _: 2
                                              /* DYNAMIC */
                                            }, 1032, ["right-options", "onClick"])
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        },
                                        1024
                                        /* DYNAMIC_SLOTS */
                                      )
                                    ]);
                                  }),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ],
                              512
                              /* NEED_PATCH */
                            ), [
                              [vue.vShow, item.isShow]
                            ])
                          ])) : vue.createCommentVNode("v-if", true)
                        ],
                        2
                        /* CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ])
          ]),
          vue.createCommentVNode(" 小浮窗 "),
          vue.createElementVNode("movable-area", { class: "movableArea" }, [
            vue.createElementVNode("movable-view", {
              class: "movableView",
              direction: "all",
              x: x.value,
              y: y.value,
              "out-of-bounds": false
            }, [
              vue.createElementVNode("button", { class: "win-service" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ])
        ]);
      };
    }
  };
  const PagesNoteIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "E:/HBuilderProjects/time-master/pages/note/index.vue"]]);
  const navTo = (url) => {
    formatAppLog("log", "at utils/utils.js:3", "url", url);
    uni.navigateTo({
      url
    });
  };
  const timestampToTime = (timestamp) => {
    let date = new Date(timestamp);
    let Y = date.getFullYear() + "-";
    let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return Y + M + D;
  };
  const getWeek = (date) => {
    let week = new Date(date).getDay() === 0 ? "周日" : "周" + "日一二三四五六".charAt(new Date(date).getDay());
    return week;
  };
  const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    getWeek,
    navTo,
    timestampToTime
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$8 = {
    __name: "index",
    setup(__props2) {
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      vue.onMounted(() => {
        const now = (/* @__PURE__ */ new Date()).getTime();
        const yesterday = new Date(now - 24 * 60 * 60 * 1e3);
        const tomorrow = new Date(now + 24 * 60 * 60 * 1e3);
        list.value.push(filterPlan(timestampToTime(yesterday)));
        list.value.push(filterPlan(timestampToTime(now)));
        list.value.push(filterPlan(timestampToTime(tomorrow)));
        formatAppLog("log", "at pages/plan/index.vue:54", list.value);
      });
      const planList = [
        {
          planID: 1,
          status: 0,
          isTop: 0,
          type: 1,
          title: "吃饭",
          date: "2022-02-01"
        },
        {
          planID: 2,
          status: 0,
          isTop: 1,
          type: 1,
          title: "睡觉",
          date: "2022-02-02"
        },
        {
          planID: 3,
          status: 1,
          isTop: 0,
          type: 1,
          title: "学习",
          date: "2022-02-03"
        },
        {
          planID: 4,
          status: 3,
          isTop: 0,
          type: 1,
          title: "写代码",
          date: "2022-02-04"
        },
        {
          planID: 5,
          status: 0,
          isTop: 0,
          type: 2,
          title: "运动",
          date: "2022-03-05"
        },
        {
          planID: 6,
          status: 0,
          isTop: 0,
          type: 1,
          title: "看电影",
          date: "2024-02-27"
        },
        {
          planID: 7,
          status: 0,
          isTop: 0,
          type: 2,
          title: "跑步",
          date: "2024-02-28"
        },
        {
          planID: 8,
          status: 0,
          isTop: 0,
          type: 2,
          title: "打篮球",
          date: "2024-03-01"
        },
        {
          planID: 9,
          status: 0,
          isTop: 0,
          type: 2,
          title: "游泳",
          date: "2024-04-02"
        },
        {
          planID: 10,
          status: 0,
          isTop: 0,
          type: 2,
          title: "跳绳",
          date: "2024-02-26"
        },
        {
          planID: 11,
          status: 0,
          isTop: 0,
          type: 2,
          title: "羽毛球",
          date: "2024-02-27"
        }
      ];
      const currDate = vue.ref(timestampToTime((/* @__PURE__ */ new Date()).getTime()));
      const currWeek = vue.ref(getWeek((/* @__PURE__ */ new Date()).getTime()));
      const list = vue.ref([]);
      const filterPlan = (date) => {
        let dayPlan = {
          date,
          plans: []
        };
        dayPlan.plans = planList.filter((item) => item.date === date);
        return dayPlan;
      };
      let currentIndex = vue.ref(1);
      const swiperChange = (e) => {
        currDate.value = timestampToTime(list.value[e.detail.current].date);
        currWeek.value = getWeek(list.value[e.detail.current].date);
        formatAppLog("log", "at pages/plan/index.vue:162", "currentIndex", currentIndex.value);
        formatAppLog("log", "at pages/plan/index.vue:163", "e", e.detail.current);
        if (currentIndex.value < e.detail.current && !list.value[e.detail.current + 1]) {
          list.value.push(filterPlan(timestampToTime(new Date(list.value[e.detail.current].date).getTime() + 24 * 60 * 60 * 1e3)));
          formatAppLog("log", "at pages/plan/index.vue:166", "push", list.value);
        } else if (currentIndex.value > e.detail.current && !list.value[e.detail.current - 1]) {
          list.value.unshift(filterPlan(timestampToTime(new Date(list.value[e.detail.current].date).getTime() - 24 * 60 * 60 * 1e3)));
          formatAppLog("log", "at pages/plan/index.vue:171", "unshift", list.value);
        }
        currentIndex.value = e.detail.current;
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "time" }, [
            vue.createElementVNode(
              "view",
              { class: "date" },
              vue.toDisplayString(currDate.value),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "week" },
              vue.toDisplayString(currWeek.value),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "swiper-box" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              "disable-programmatic-animation": "",
              current: vue.unref(currentIndex),
              onChange: swiperChange
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(list.value, (item) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    key: item.date
                  }, [
                    item.plans && item.plans.length ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "swiper-item"
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(item.plans, (item1) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "content-box",
                            key: item1.planID
                          }, [
                            vue.createElementVNode("view", { class: "box-left" }, [
                              vue.createElementVNode("checkbox", { value: "cb" })
                            ]),
                            vue.createElementVNode("view", { class: "box-right" }, [
                              vue.createElementVNode("view", { class: "plan-title" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "title" },
                                  vue.toDisplayString(item1.title),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              vue.createElementVNode("view", { class: "plan-desc" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "desc" },
                                  vue.toDisplayString(item1.date),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ])
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "swiper-item no-data"
                    }, "暂无数据"))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 40, ["current"])
          ]),
          vue.createCommentVNode(" 小浮窗 "),
          vue.createElementVNode("movable-area", { class: "movableArea" }, [
            vue.createElementVNode("movable-view", {
              class: "movableView",
              direction: "all",
              x: x.value,
              y: y.value,
              "out-of-bounds": false
            }, [
              vue.createElementVNode("button", { class: "win-service" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ])
        ]);
      };
    }
  };
  const PagesPlanIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "E:/HBuilderProjects/time-master/pages/plan/index.vue"]]);
  class CategoryManager {
    constructor() {
      this.categories = /* @__PURE__ */ new Map();
      this.nextId = 1;
    }
    addCategory(name, icon, color) {
      const category = { id: this.nextId, name, icon, color };
      this.categories.set(this.nextId, category);
      this.nextId++;
    }
    updateCategory(id, newName, newIcon, newColor) {
      const category = this.categories.get(id);
      if (category) {
        category.name = newName;
        category.icon = newIcon;
        category.color = newColor;
        this.categories.set(id, category);
      }
    }
    getCategory(id) {
      return this.categories.get(id);
    }
    getAllCategories() {
      return Array.from(this.categories.values());
    }
    deleteCategory(id) {
      this.categories.delete(id);
    }
  }
  const accountCateEnum = new CategoryManager();
  accountCateEnum.addCategory("餐饮", "icon-canyin", "#FF5733");
  accountCateEnum.addCategory("日用", "icon-riyongpin", "#3366FF");
  accountCateEnum.addCategory("交通", "icon-jiaotongyunshu", "#FFC300");
  accountCateEnum.addCategory("娱乐", "icon-yule", "#3366FF");
  accountCateEnum.addCategory("旅行", "icon-lvhang", "#3366FF");
  accountCateEnum.addCategory("购物", "icon-gouwuche", "#FF5733");
  accountCateEnum.addCategory("通讯", "icon-leitongxunfuwux", "#3366FF");
  accountCateEnum.addCategory("服饰", "icon-fushi", "#3366FF");
  accountCateEnum.addCategory("住房", "icon-zhufang", "#FFC300");
  accountCateEnum.addCategory("医疗", "icon-sharpicons_heart-cross", "#FFC300");
  accountCateEnum.addCategory("学习", "icon-xuexi", "#FF5733");
  accountCateEnum.addCategory("其他", "icon-qita", "#3366FF");
  const BASE_URL = "http://192.168.0.106:3838/";
  const DEFAULT_HEADERS = {
    "Content-Type": "application/json"
  };
  const request = (options) => {
    const requestOptions = {
      ...options,
      url: `${BASE_URL}${options.url}`,
      header: {
        ...DEFAULT_HEADERS,
        ...options.header
      }
    };
    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOptions,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  };
  const apiAddExpense = (expense) => {
    return request({
      url: `expenses/add`,
      method: "POST",
      data: expense
    });
  };
  const apiGetUserExpenses = (userID) => {
    return request({
      url: `expenses/list?userID=${userID}`,
      method: "GET"
    });
  };
  const _sfc_main$7 = {
    __name: "index",
    setup(__props2) {
      vue.useCssVars((_ctx) => ({
        "4464fa9b-themeColor": themeColor.value
      }));
      onShow(() => {
        getExpenses();
      });
      let accountList = vue.ref([]);
      const getExpenses = () => {
        apiGetUserExpenses(1).then((res) => {
          accountList.value = res.data;
          formatAppLog("log", "at subPackages/jizhang/index/index.vue:122", "accountList", accountList.value);
        });
      };
      const themeColor = vue.ref("#1baf59");
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      const incomesNum = (accountList2) => {
        return accountList2.reduce((sum, expense) => {
          return expense.Amount > 0 ? sum + expense.Amount : sum;
        }, 0);
      };
      const expensesNum = (accountList2) => {
        return accountList2.reduce((sum, expense) => {
          return expense.Amount < 0 ? sum + expense.Amount : sum;
        }, 0);
      };
      function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric"
        });
      }
      const groupedExpenses = vue.computed(() => {
        const grouped = {};
        accountList.value.forEach((expense) => {
          const dateKey = formatDate(expense.Date);
          if (!grouped[dateKey]) {
            grouped[dateKey] = [];
          }
          grouped[dateKey].push(expense);
        });
        formatAppLog("log", "at subPackages/jizhang/index/index.vue:203", "grouped", grouped);
        return grouped;
      });
      const getIconType = (category) => {
        return accountCateEnum.getCategory(category).icon || "icon-shoujizhendong";
      };
      const addExpense2 = () => {
        uni.navigateTo({
          url: "/subPackages/jizhang/add/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "fixed-box" }, [
            vue.createElementVNode("view", { class: "top" }, [
              vue.createElementVNode("view", { class: "date" }, [
                vue.createElementVNode("view", { class: "top-title" }, "2024年"),
                vue.createElementVNode("view", { class: "month" }, "2月")
              ]),
              vue.createElementVNode("view", { class: "money" }, [
                vue.createElementVNode("view", { class: "item" }, [
                  vue.createElementVNode("view", { class: "top-title" }, "收入"),
                  vue.createElementVNode(
                    "view",
                    { class: "num" },
                    vue.toDisplayString(incomesNum(vue.unref(accountList))),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "item" }, [
                  vue.createElementVNode("view", { class: "top-title" }, "支出"),
                  vue.createElementVNode(
                    "view",
                    { class: "num" },
                    vue.toDisplayString(expensesNum(vue.unref(accountList))),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]),
            vue.createCommentVNode(" 功能列表 "),
            vue.createElementVNode("view", { class: "function-box" }, [
              vue.createElementVNode("view", { class: "function-list" }, [
                vue.createElementVNode("view", { class: "function-item" }, [
                  vue.createElementVNode("view", { class: "icon" }, [
                    vue.createVNode(_component_uni_icons, {
                      "custom-prefix": "iconfont",
                      type: "icon-zichan",
                      size: "30",
                      color: themeColor.value
                    }, null, 8, ["color"])
                  ]),
                  vue.createElementVNode("view", { class: "title" }, "资产")
                ]),
                vue.createElementVNode("view", { class: "function-item" }, [
                  vue.createElementVNode("view", { class: "icon" }, [
                    vue.createVNode(_component_uni_icons, {
                      "custom-prefix": "iconfont",
                      type: "icon-tongji",
                      size: "30",
                      color: themeColor.value
                    }, null, 8, ["color"])
                  ]),
                  vue.createElementVNode("view", { class: "title" }, "统计")
                ]),
                vue.createElementVNode("view", { class: "function-item" }, [
                  vue.createElementVNode("view", { class: "icon" }, [
                    vue.createVNode(_component_uni_icons, {
                      "custom-prefix": "iconfont",
                      type: "icon-yusuan",
                      size: "30",
                      color: themeColor.value
                    }, null, 8, ["color"])
                  ]),
                  vue.createElementVNode("view", { class: "title" }, "预算")
                ]),
                vue.createElementVNode("view", { class: "function-item" }, [
                  vue.createElementVNode("view", { class: "icon" }, [
                    vue.createVNode(_component_uni_icons, {
                      "custom-prefix": "iconfont",
                      type: "icon-tongyongdaoru",
                      size: "30",
                      color: themeColor.value
                    }, null, 8, ["color"])
                  ]),
                  vue.createElementVNode("view", { class: "title" }, "导入")
                ])
              ])
            ])
          ]),
          vue.createCommentVNode(" 账目列表 "),
          vue.unref(groupedExpenses) && Object.keys(vue.unref(groupedExpenses)).length ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "account-list"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(groupedExpenses), (expenses, date, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: vue.normalizeClass(["account-item", index === 0 ? "first" : ""]),
                    key: date
                  },
                  [
                    vue.createElementVNode("view", { class: "plan-header" }, [
                      vue.createElementVNode("view", { class: "header-title" }, [
                        vue.createElementVNode("text", { class: "title" }, [
                          vue.createTextVNode(
                            vue.toDisplayString(date),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            { class: "week" },
                            vue.toDisplayString(vue.unref(getWeek)(date)),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "header-desc" }, [
                        vue.createElementVNode("text", { class: "plan-num" }, [
                          vue.createCommentVNode(" 正数相加 "),
                          vue.createElementVNode(
                            "text",
                            { class: "income" },
                            "收 " + vue.toDisplayString(incomesNum(expenses)),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            null,
                            "支 " + vue.toDisplayString(expensesNum(expenses)),
                            1
                            /* TEXT */
                          )
                        ])
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "plan-body" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(expenses, (expense) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "body-item",
                            key: expense.ExpenseID
                          }, [
                            vue.createElementVNode("view", { class: "content-box" }, [
                              vue.createElementVNode(
                                "view",
                                {
                                  class: "box-left",
                                  style: vue.normalizeStyle({ backgroundColor: vue.unref(accountCateEnum).getCategory(expense.Category).color })
                                },
                                [
                                  vue.createVNode(_component_uni_icons, {
                                    "custom-prefix": "iconfont",
                                    type: getIconType(expense.Category),
                                    color: "#fff",
                                    size: "24"
                                  }, null, 8, ["type"])
                                ],
                                4
                                /* STYLE */
                              ),
                              vue.createElementVNode("view", { class: "box-right" }, [
                                vue.createElementVNode("view", { class: "plan-title" }, [
                                  vue.createElementVNode(
                                    "text",
                                    { class: "title" },
                                    vue.toDisplayString(expense.Category),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                vue.createElementVNode("view", { class: "plan-desc" }, [
                                  vue.createElementVNode(
                                    "text",
                                    { class: "desc" },
                                    vue.toDisplayString(expense.Note),
                                    1
                                    /* TEXT */
                                  )
                                ])
                              ]),
                              vue.createElementVNode("view", { class: "box-last" }, [
                                vue.createElementVNode(
                                  "text",
                                  {
                                    class: vue.normalizeClass(["money", expense.Amount < 0 ? "red" : "green"])
                                  },
                                  vue.toDisplayString(expense.Amount),
                                  3
                                  /* TEXT, CLASS */
                                )
                              ])
                            ])
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "no-data"
          }, "暂无数据")),
          vue.createCommentVNode(" 小浮窗 "),
          vue.createElementVNode("movable-area", { class: "movableArea" }, [
            vue.createElementVNode("movable-view", {
              class: "movableView",
              direction: "all",
              x: x.value,
              y: y.value,
              "out-of-bounds": false
            }, [
              vue.createElementVNode("button", {
                class: "win-service",
                onClick: addExpense2
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ])
        ]);
      };
    }
  };
  const SubPackagesJizhangIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "E:/HBuilderProjects/time-master/subPackages/jizhang/index/index.vue"]]);
  let Calendar$1 = class Calendar {
    constructor({
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDateObj(/* @__PURE__ */ new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
      this.lastHover = false;
    }
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      const selectDate2 = this.getDateObj(date);
      this.getWeeks(selectDate2.fullDate);
    }
    /**
     * 清理多选状态
     */
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    setStartDate(startDate) {
      this.startDate = startDate;
    }
    setEndDate(endDate) {
      this.endDate = endDate;
    }
    getPreMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      const oldMonth = date.getMonth();
      date.setMonth(oldMonth - 1);
      const newMonth = date.getMonth();
      if (oldMonth !== 0 && newMonth - oldMonth === 0) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
    getNextMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      const oldMonth = date.getMonth();
      date.setMonth(oldMonth + 1);
      const newMonth = date.getMonth();
      if (newMonth - oldMonth > 1) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
    /**
     * 获取指定格式Date对象
     */
    getDateObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      return {
        fullDate: getDate(date),
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        date: addZero(date.getDate()),
        day: date.getDay()
      };
    }
    /**
     * 获取上一个月日期集合
     */
    getPreMonthDays(amount, dateObj) {
      const result = [];
      for (let i = amount - 1; i >= 0; i--) {
        const month = dateObj.month - 1;
        result.push({
          date: new Date(dateObj.year, month, -i).getDate(),
          month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取本月日期集合
     */
    getCurrentMonthDays(amount, dateObj) {
      const result = [];
      const fullDate = this.date.fullDate;
      for (let i = 1; i <= amount; i++) {
        const currentDate = `${dateObj.year}-${dateObj.month}-${addZero(i)}`;
        const isToday = fullDate === currentDate;
        const info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(currentDate, item.date)) {
            return item;
          }
        });
        if (this.startDate) {
          dateCompare(this.startDate, currentDate);
        }
        if (this.endDate) {
          dateCompare(currentDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let multiplesStatus = -1;
        if (this.range && multiples) {
          multiplesStatus = multiples.findIndex((item) => {
            return this.dateEqual(item, currentDate);
          });
        }
        const checked = multiplesStatus !== -1;
        result.push({
          fullDate: currentDate,
          year: dateObj.year,
          date: i,
          multiple: this.range ? checked : false,
          beforeMultiple: this.isLogicBefore(currentDate, this.multipleStatus.before, this.multipleStatus.after),
          afterMultiple: this.isLogicAfter(currentDate, this.multipleStatus.before, this.multipleStatus.after),
          month: dateObj.month,
          disable: this.startDate && !dateCompare(this.startDate, currentDate) || this.endDate && !dateCompare(
            currentDate,
            this.endDate
          ),
          isToday,
          userChecked: false,
          extraInfo: info
        });
      }
      return result;
    }
    /**
     * 获取下一个月日期集合
     */
    _getNextMonthDays(amount, dateObj) {
      const result = [];
      const month = dateObj.month + 1;
      for (let i = 1; i <= amount; i++) {
        result.push({
          date: i,
          month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取当前日期详情
     * @param {Object} date
     */
    getInfo(date) {
      if (!date) {
        date = /* @__PURE__ */ new Date();
      }
      return this.calendar.find((item) => item.fullDate === this.getDateObj(date).fullDate);
    }
    /**
     * 比较时间是否相等
     */
    dateEqual(before, after) {
      before = new Date(fixIosDateFormat(before));
      after = new Date(fixIosDateFormat(after));
      return before.valueOf() === after.valueOf();
    }
    /**
     *  比较真实起始日期
     */
    isLogicBefore(currentDate, before, after) {
      let logicBefore = before;
      if (before && after) {
        logicBefore = dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDate);
    }
    isLogicAfter(currentDate, before, after) {
      let logicAfter = after;
      if (before && after) {
        logicAfter = dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDate);
    }
    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae = end.split("-");
      var db = /* @__PURE__ */ new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = /* @__PURE__ */ new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDateObj(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
     *  获取多选状态
     */
    setMultiple(fullDate) {
      if (!this.range)
        return;
      let {
        before,
        after
      } = this.multipleStatus;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = "";
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.multipleStatus.after = void 0;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this.getWeeks(fullDate);
    }
    /**
     *  鼠标 hover 更新多选状态
     */
    setHoverMultiple(fullDate) {
      if (!this.range || this.lastHover)
        return;
      const {
        before
      } = this.multipleStatus;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this.getWeeks(fullDate);
    }
    /**
     * 更新默认值多选状态
     */
    setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this.getWeeks(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this.getWeeks(before);
        }
      }
    }
    /**
     * 获取每周数据
     * @param {Object} dateData
     */
    getWeeks(dateData) {
      const {
        year,
        month
      } = this.getDateObj(dateData);
      const preMonthDayAmount = new Date(year, month - 1, 1).getDay();
      const preMonthDays = this.getPreMonthDays(preMonthDayAmount, this.getDateObj(dateData));
      const currentMonthDayAmount = new Date(year, month, 0).getDate();
      const currentMonthDays = this.getCurrentMonthDays(currentMonthDayAmount, this.getDateObj(dateData));
      const nextMonthDayAmount = 42 - preMonthDayAmount - currentMonthDayAmount;
      const nextMonthDays = this._getNextMonthDays(nextMonthDayAmount, this.getDateObj(dateData));
      const calendarDays = [...preMonthDays, ...currentMonthDays, ...nextMonthDays];
      const weeks = new Array(6);
      for (let i = 0; i < calendarDays.length; i++) {
        const index = Math.floor(i / 7);
        if (!weeks[index]) {
          weeks[index] = new Array(7);
        }
        weeks[index][i % 7] = calendarDays[i];
      }
      this.calendar = calendarDays;
      this.weeks = weeks;
    }
  };
  function getDateTime(date, hideSecond) {
    return `${getDate(date)} ${getTime(date, hideSecond)}`;
  }
  function getDate(date) {
    date = fixIosDateFormat(date);
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${addZero(month)}-${addZero(day)}`;
  }
  function getTime(date, hideSecond) {
    date = fixIosDateFormat(date);
    date = new Date(date);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return hideSecond ? `${addZero(hour)}:${addZero(minute)}` : `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
  }
  function addZero(num) {
    if (num < 10) {
      num = `0${num}`;
    }
    return num;
  }
  function getDefaultSecond(hideSecond) {
    return hideSecond ? "00:00" : "00:00:00";
  }
  function dateCompare(startDate, endDate) {
    startDate = new Date(fixIosDateFormat(startDate));
    endDate = new Date(fixIosDateFormat(endDate));
    return startDate <= endDate;
  }
  function checkDate(date) {
    const dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
    return date.match(dateReg);
  }
  const dateTimeReg = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])( [0-5]?[0-9]:[0-5]?[0-9](:[0-5]?[0-9])?)?$/;
  function fixIosDateFormat(value) {
    if (typeof value === "string" && dateTimeReg.test(value)) {
      value = value.replace(/-/g, "/");
    }
    return value;
  }
  const _sfc_main$6 = {
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      checkHover: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      },
      handleMousemove(weeks) {
        this.$emit("handleMouse", weeks);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
          "uni-calendar-item--disable": $props.weeks.disable,
          "uni-calendar-item--before-checked-x": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked-x": $props.weeks.afterMultiple
        }]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
        onMouseenter: _cache[1] || (_cache[1] = ($event) => $options.handleMousemove($props.weeks))
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-calendar-item__weeks-box-item", {
              "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && ($props.calendar.userChecked || !$props.checkHover),
              "uni-calendar-item--checked-range-text": $props.checkHover,
              "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
              "uni-calendar-item--multiple": $props.weeks.multiple,
              "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
              "uni-calendar-item--disable": $props.weeks.disable
            }])
          },
          [
            $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-calendar-item__weeks-box-circle"
            })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "text",
              { class: "uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text" },
              vue.toDisplayString($props.weeks.date),
              1
              /* TEXT */
            )
          ],
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass({ "uni-calendar-item--today": $props.weeks.isToday })
          },
          null,
          2
          /* CLASS */
        )
      ],
      34
      /* CLASS, HYDRATE_EVENTS */
    );
  }
  const calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__scopeId", "data-v-3c762a01"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar-item.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key2) => hasOwnProperty.call(val, key2);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages && messages[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages && Object.keys(messages).length > 0) {
      locales = Object.keys(messages);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key2) => {
            if (!hasOwn(curMessages, key2)) {
              curMessages[key2] = message[key2];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key2, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key2)) {
        console.warn(`Cannot translate the value of keypath ${key2}. Use the value of keypath as default.`);
        return key2;
      }
      return this.formater.interpolate(message[key2], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages] = [
        messages,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages,
      watcher
    });
    let t2 = (key2, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key3, values2) {
          return i18n.t(key3, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key3, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key3, values2);
        };
      }
      return t2(key2, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key2, values) {
        return t2(key2, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-datetime-picker.selectDate": "select date",
    "uni-datetime-picker.selectTime": "select time",
    "uni-datetime-picker.selectDateTime": "select date and time",
    "uni-datetime-picker.startDate": "start date",
    "uni-datetime-picker.endDate": "end date",
    "uni-datetime-picker.startTime": "start time",
    "uni-datetime-picker.endTime": "end time",
    "uni-datetime-picker.ok": "ok",
    "uni-datetime-picker.clear": "clear",
    "uni-datetime-picker.cancel": "cancel",
    "uni-datetime-picker.year": "-",
    "uni-datetime-picker.month": "",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN",
    "uni-calender.confirm": "confirm"
  };
  const zhHans = {
    "uni-datetime-picker.selectDate": "选择日期",
    "uni-datetime-picker.selectTime": "选择时间",
    "uni-datetime-picker.selectDateTime": "选择日期时间",
    "uni-datetime-picker.startDate": "开始日期",
    "uni-datetime-picker.endDate": "结束日期",
    "uni-datetime-picker.startTime": "开始时间",
    "uni-datetime-picker.endTime": "结束时间",
    "uni-datetime-picker.ok": "确定",
    "uni-datetime-picker.clear": "清除",
    "uni-datetime-picker.cancel": "取消",
    "uni-datetime-picker.year": "年",
    "uni-datetime-picker.month": "月",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六",
    "uni-calender.confirm": "确认"
  };
  const zhHant = {
    "uni-datetime-picker.selectDate": "選擇日期",
    "uni-datetime-picker.selectTime": "選擇時間",
    "uni-datetime-picker.selectDateTime": "選擇日期時間",
    "uni-datetime-picker.startDate": "開始日期",
    "uni-datetime-picker.endDate": "結束日期",
    "uni-datetime-picker.startTime": "開始时间",
    "uni-datetime-picker.endTime": "結束时间",
    "uni-datetime-picker.ok": "確定",
    "uni-datetime-picker.clear": "清除",
    "uni-datetime-picker.cancel": "取消",
    "uni-datetime-picker.year": "年",
    "uni-datetime-picker.month": "月",
    "uni-calender.SUN": "日",
    "uni-calender.MON": "一",
    "uni-calender.TUE": "二",
    "uni-calender.WED": "三",
    "uni-calender.THU": "四",
    "uni-calender.FRI": "五",
    "uni-calender.SAT": "六",
    "uni-calender.confirm": "確認"
  };
  const i18nMessages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(i18nMessages);
  const _sfc_main$5 = {
    name: "UniDatetimePicker",
    data() {
      return {
        indicatorStyle: `height: 50px;`,
        visible: false,
        fixNvueBug: {},
        dateShow: true,
        timeShow: true,
        title: "日期和时间",
        // 输入框当前时间
        time: "",
        // 当前的年月日时分秒
        year: 1920,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        // 起始时间
        startYear: 1920,
        startMonth: 1,
        startDay: 1,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        // 结束时间
        endYear: 2120,
        endMonth: 12,
        endDay: 31,
        endHour: 23,
        endMinute: 59,
        endSecond: 59
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      hideSecond: {
        type: [Boolean, String],
        default: false
      }
    },
    watch: {
      modelValue: {
        handler(newVal) {
          if (newVal) {
            this.parseValue(fixIosDateFormat(newVal));
            this.initTime(false);
          } else {
            this.time = "";
            this.parseValue(Date.now());
          }
        },
        immediate: true
      },
      type: {
        handler(newValue) {
          if (newValue === "date") {
            this.dateShow = true;
            this.timeShow = false;
            this.title = "日期";
          } else if (newValue === "time") {
            this.dateShow = false;
            this.timeShow = true;
            this.title = "时间";
          } else {
            this.dateShow = true;
            this.timeShow = true;
            this.title = "日期和时间";
          }
        },
        immediate: true
      },
      start: {
        handler(newVal) {
          this.parseDatetimeRange(fixIosDateFormat(newVal), "start");
        },
        immediate: true
      },
      end: {
        handler(newVal) {
          this.parseDatetimeRange(fixIosDateFormat(newVal), "end");
        },
        immediate: true
      },
      // 月、日、时、分、秒可选范围变化后，检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      months(newVal) {
        this.checkValue("month", this.month, newVal);
      },
      days(newVal) {
        this.checkValue("day", this.day, newVal);
      },
      hours(newVal) {
        this.checkValue("hour", this.hour, newVal);
      },
      minutes(newVal) {
        this.checkValue("minute", this.minute, newVal);
      },
      seconds(newVal) {
        this.checkValue("second", this.second, newVal);
      }
    },
    computed: {
      // 当前年、月、日、时、分、秒选择范围
      years() {
        return this.getCurrentRange("year");
      },
      months() {
        return this.getCurrentRange("month");
      },
      days() {
        return this.getCurrentRange("day");
      },
      hours() {
        return this.getCurrentRange("hour");
      },
      minutes() {
        return this.getCurrentRange("minute");
      },
      seconds() {
        return this.getCurrentRange("second");
      },
      // picker 当前值数组
      ymd() {
        return [this.year - this.minYear, this.month - this.minMonth, this.day - this.minDay];
      },
      hms() {
        return [this.hour - this.minHour, this.minute - this.minMinute, this.second - this.minSecond];
      },
      // 当前 date 是 start
      currentDateIsStart() {
        return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay;
      },
      // 当前 date 是 end
      currentDateIsEnd() {
        return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay;
      },
      // 当前年、月、日、时、分、秒的最小值和最大值
      minYear() {
        return this.startYear;
      },
      maxYear() {
        return this.endYear;
      },
      minMonth() {
        if (this.year === this.startYear) {
          return this.startMonth;
        } else {
          return 1;
        }
      },
      maxMonth() {
        if (this.year === this.endYear) {
          return this.endMonth;
        } else {
          return 12;
        }
      },
      minDay() {
        if (this.year === this.startYear && this.month === this.startMonth) {
          return this.startDay;
        } else {
          return 1;
        }
      },
      maxDay() {
        if (this.year === this.endYear && this.month === this.endMonth) {
          return this.endDay;
        } else {
          return this.daysInMonth(this.year, this.month);
        }
      },
      minHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart) {
            return this.startHour;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          return this.startHour;
        }
      },
      maxHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd) {
            return this.endHour;
          } else {
            return 23;
          }
        }
        if (this.type === "time") {
          return this.endHour;
        }
      },
      minMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
      },
      maxMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
      },
      minSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
      },
      maxSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
      },
      /**
       * for i18n
       */
      selectTimeText() {
        return t$1("uni-datetime-picker.selectTime");
      },
      okText() {
        return t$1("uni-datetime-picker.ok");
      },
      clearText() {
        return t$1("uni-datetime-picker.clear");
      },
      cancelText() {
        return t$1("uni-datetime-picker.cancel");
      }
    },
    mounted() {
    },
    methods: {
      /**
       * @param {Object} item
       * 小于 10 在前面加个 0
       */
      lessThanTen(item) {
        return item < 10 ? "0" + item : item;
      },
      /**
       * 解析时分秒字符串，例如：00:00:00
       * @param {String} timeString
       */
      parseTimeType(timeString) {
        if (timeString) {
          let timeArr = timeString.split(":");
          this.hour = Number(timeArr[0]);
          this.minute = Number(timeArr[1]);
          this.second = Number(timeArr[2]);
        }
      },
      /**
       * 解析选择器初始值，类型可以是字符串、时间戳，例如：2000-10-02、'08:30:00'、 1610695109000
       * @param {String | Number} datetime
       */
      initPickerValue(datetime) {
        let defaultValue = null;
        if (datetime) {
          defaultValue = this.compareValueWithStartAndEnd(datetime, this.start, this.end);
        } else {
          defaultValue = Date.now();
          defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end);
        }
        this.parseValue(defaultValue);
      },
      /**
       * 初始值规则：
       * - 用户设置初始值 value
       * 	- 设置了起始时间 start、终止时间 end，并 start < value < end，初始值为 value， 否则初始值为 start
       * 	- 只设置了起始时间 start，并 start < value，初始值为 value，否则初始值为 start
       * 	- 只设置了终止时间 end，并 value < end，初始值为 value，否则初始值为 end
       * 	- 无起始终止时间，则初始值为 value
       * - 无初始值 value，则初始值为当前本地时间 Date.now()
       * @param {Object} value
       * @param {Object} dateBase
       */
      compareValueWithStartAndEnd(value, start, end) {
        let winner = null;
        value = this.superTimeStamp(value);
        start = this.superTimeStamp(start);
        end = this.superTimeStamp(end);
        if (start && end) {
          if (value < start) {
            winner = new Date(start);
          } else if (value > end) {
            winner = new Date(end);
          } else {
            winner = new Date(value);
          }
        } else if (start && !end) {
          winner = start <= value ? new Date(value) : new Date(start);
        } else if (!start && end) {
          winner = value <= end ? new Date(value) : new Date(end);
        } else {
          winner = new Date(value);
        }
        return winner;
      },
      /**
       * 转换为可比较的时间戳，接受日期、时分秒、时间戳
       * @param {Object} value
       */
      superTimeStamp(value) {
        let dateBase = "";
        if (this.type === "time" && value && typeof value === "string") {
          const now = /* @__PURE__ */ new Date();
          const year = now.getFullYear();
          const month = now.getMonth() + 1;
          const day = now.getDate();
          dateBase = year + "/" + month + "/" + day + " ";
        }
        if (Number(value)) {
          value = parseInt(value);
          dateBase = 0;
        }
        return this.createTimeStamp(dateBase + value);
      },
      /**
       * 解析默认值 value，字符串、时间戳
       * @param {Object} defaultTime
       */
      parseValue(value) {
        if (!value) {
          return;
        }
        if (this.type === "time" && typeof value === "string") {
          this.parseTimeType(value);
        } else {
          let defaultDate = null;
          defaultDate = new Date(value);
          if (this.type !== "time") {
            this.year = defaultDate.getFullYear();
            this.month = defaultDate.getMonth() + 1;
            this.day = defaultDate.getDate();
          }
          if (this.type !== "date") {
            this.hour = defaultDate.getHours();
            this.minute = defaultDate.getMinutes();
            this.second = defaultDate.getSeconds();
          }
        }
        if (this.hideSecond) {
          this.second = 0;
        }
      },
      /**
       * 解析可选择时间范围 start、end，年月日字符串、时间戳
       * @param {Object} defaultTime
       */
      parseDatetimeRange(point, pointType) {
        if (!point) {
          if (pointType === "start") {
            this.startYear = 1920;
            this.startMonth = 1;
            this.startDay = 1;
            this.startHour = 0;
            this.startMinute = 0;
            this.startSecond = 0;
          }
          if (pointType === "end") {
            this.endYear = 2120;
            this.endMonth = 12;
            this.endDay = 31;
            this.endHour = 23;
            this.endMinute = 59;
            this.endSecond = 59;
          }
          return;
        }
        if (this.type === "time") {
          const pointArr = point.split(":");
          this[pointType + "Hour"] = Number(pointArr[0]);
          this[pointType + "Minute"] = Number(pointArr[1]);
          this[pointType + "Second"] = Number(pointArr[2]);
        } else {
          if (!point) {
            pointType === "start" ? this.startYear = this.year - 60 : this.endYear = this.year + 60;
            return;
          }
          if (Number(point)) {
            point = parseInt(point);
          }
          const hasTime = /[0-9]:[0-9]/;
          if (this.type === "datetime" && pointType === "end" && typeof point === "string" && !hasTime.test(
            point
          )) {
            point = point + " 23:59:59";
          }
          const pointDate = new Date(point);
          this[pointType + "Year"] = pointDate.getFullYear();
          this[pointType + "Month"] = pointDate.getMonth() + 1;
          this[pointType + "Day"] = pointDate.getDate();
          if (this.type === "datetime") {
            this[pointType + "Hour"] = pointDate.getHours();
            this[pointType + "Minute"] = pointDate.getMinutes();
            this[pointType + "Second"] = pointDate.getSeconds();
          }
        }
      },
      // 获取 年、月、日、时、分、秒 当前可选范围
      getCurrentRange(value) {
        const range = [];
        for (let i = this["min" + this.capitalize(value)]; i <= this["max" + this.capitalize(value)]; i++) {
          range.push(i);
        }
        return range;
      },
      // 字符串首字母大写
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      // 检查当前值是否在范围内，不在则当前值重置为可选范围第一项
      checkValue(name, value, values) {
        if (values.indexOf(value) === -1) {
          this[name] = values[0];
        }
      },
      // 每个月的实际天数
      daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      },
      /**
       * 生成时间戳
       * @param {Object} time
       */
      createTimeStamp(time) {
        if (!time)
          return;
        if (typeof time === "number") {
          return time;
        } else {
          time = time.replace(/-/g, "/");
          if (this.type === "date") {
            time = time + " 00:00:00";
          }
          return Date.parse(time);
        }
      },
      /**
       * 生成日期或时间的字符串
       */
      createDomSting() {
        const yymmdd = this.year + "-" + this.lessThanTen(this.month) + "-" + this.lessThanTen(this.day);
        let hhmmss = this.lessThanTen(this.hour) + ":" + this.lessThanTen(this.minute);
        if (!this.hideSecond) {
          hhmmss = hhmmss + ":" + this.lessThanTen(this.second);
        }
        if (this.type === "date") {
          return yymmdd;
        } else if (this.type === "time") {
          return hhmmss;
        } else {
          return yymmdd + " " + hhmmss;
        }
      },
      /**
       * 初始化返回值，并抛出 change 事件
       */
      initTime(emit = true) {
        this.time = this.createDomSting();
        if (!emit)
          return;
        if (this.returnType === "timestamp" && this.type !== "time") {
          this.$emit("change", this.createTimeStamp(this.time));
          this.$emit("input", this.createTimeStamp(this.time));
          this.$emit("update:modelValue", this.createTimeStamp(this.time));
        } else {
          this.$emit("change", this.time);
          this.$emit("input", this.time);
          this.$emit("update:modelValue", this.time);
        }
      },
      /**
       * 用户选择日期或时间更新 data
       * @param {Object} e
       */
      bindDateChange(e) {
        const val = e.detail.value;
        this.year = this.years[val[0]];
        this.month = this.months[val[1]];
        this.day = this.days[val[2]];
      },
      bindTimeChange(e) {
        const val = e.detail.value;
        this.hour = this.hours[val[0]];
        this.minute = this.minutes[val[1]];
        this.second = this.seconds[val[2]];
      },
      /**
       * 初始化弹出层
       */
      initTimePicker() {
        if (this.disabled)
          return;
        const value = fixIosDateFormat(this.time);
        this.initPickerValue(value);
        this.visible = !this.visible;
      },
      /**
       * 触发或关闭弹框
       */
      tiggerTimePicker(e) {
        this.visible = !this.visible;
      },
      /**
       * 用户点击“清空”按钮，清空当前值
       */
      clearTime() {
        this.time = "";
        this.$emit("change", this.time);
        this.$emit("input", this.time);
        this.$emit("update:modelValue", this.time);
        this.tiggerTimePicker();
      },
      /**
       * 用户点击“确定”按钮
       */
      setTime() {
        this.initTime();
        this.tiggerTimePicker();
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-datetime-picker" }, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.initTimePicker && $options.initTimePicker(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-datetime-picker-timebox-pointer", { "uni-datetime-picker-disabled": $props.disabled, "uni-datetime-picker-timebox": $props.border }])
            },
            [
              vue.createElementVNode(
                "text",
                { class: "uni-datetime-picker-text" },
                vue.toDisplayString($data.time),
                1
                /* TEXT */
              ),
              !$data.time ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-datetime-picker-time"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-text" },
                  vue.toDisplayString($options.selectTimeText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], true)
      ]),
      $data.visible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        id: "mask",
        class: "uni-datetime-picker-mask",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.visible ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: vue.normalizeClass(["uni-datetime-picker-popup", [$data.dateShow && $data.timeShow ? "" : "fix-nvue-height"]]),
          style: vue.normalizeStyle($data.fixNvueBug)
        },
        [
          vue.createElementVNode("view", { class: "uni-title" }, [
            vue.createElementVNode(
              "text",
              { class: "uni-datetime-picker-text" },
              vue.toDisplayString($options.selectTimeText),
              1
              /* TEXT */
            )
          ]),
          $data.dateShow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-datetime-picker__container-box"
          }, [
            vue.createElementVNode("picker-view", {
              class: "uni-datetime-picker-view",
              "indicator-style": $data.indicatorStyle,
              value: $options.ymd,
              onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
            }, [
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.years, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.months, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.days, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ], 40, ["indicator-style", "value"]),
            vue.createCommentVNode(" 兼容 nvue 不支持伪类 "),
            vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-left" }, "-"),
            vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-right" }, "-")
          ])) : vue.createCommentVNode("v-if", true),
          $data.timeShow ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uni-datetime-picker__container-box"
          }, [
            vue.createElementVNode("picker-view", {
              class: vue.normalizeClass(["uni-datetime-picker-view", [$props.hideSecond ? "time-hide-second" : ""]]),
              "indicator-style": $data.indicatorStyle,
              value: $options.hms,
              onChange: _cache[3] || (_cache[3] = (...args) => $options.bindTimeChange && $options.bindTimeChange(...args))
            }, [
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.hours, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("picker-view-column", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.minutes, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.seconds, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "uni-datetime-picker-item" },
                        vue.toDisplayString($options.lessThanTen(item)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ], 42, ["indicator-style", "value"]),
            vue.createCommentVNode(" 兼容 nvue 不支持伪类 "),
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["uni-datetime-picker-sign", [$props.hideSecond ? "sign-center" : "sign-left"]])
              },
              ":",
              2
              /* CLASS */
            ),
            !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-datetime-picker-sign sign-right"
            }, ":")) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "uni-datetime-picker-btn" }, [
            vue.createElementVNode("view", {
              onClick: _cache[4] || (_cache[4] = (...args) => $options.clearTime && $options.clearTime(...args))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-datetime-picker-btn-text" },
                vue.toDisplayString($options.clearText),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "uni-datetime-picker-btn-group" }, [
              vue.createElementVNode("view", {
                class: "uni-datetime-picker-cancel",
                onClick: _cache[5] || (_cache[5] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-btn-text" },
                  vue.toDisplayString($options.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", {
                onClick: _cache[6] || (_cache[6] = (...args) => $options.setTime && $options.setTime(...args))
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-datetime-picker-btn-text" },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ],
        6
        /* CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const TimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__scopeId", "data-v-1d532b70"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/time-picker.vue"]]);
  const { t } = initVueI18n(i18nMessages);
  const _sfc_main$4 = {
    components: {
      calendarItem,
      timePicker: TimePicker
    },
    props: {
      date: {
        type: String,
        default: ""
      },
      defTime: {
        type: [String, Object],
        default: ""
      },
      selectableTimes: {
        type: [Object],
        default() {
          return {};
        }
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      hasTime: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      },
      checkHover: {
        type: Boolean,
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      pleStatus: {
        type: Object,
        default() {
          return {
            before: "",
            after: "",
            data: [],
            fulldate: ""
          };
        }
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: {},
        aniMaskShow: false,
        firstEnter: true,
        time: "",
        timeRange: {
          startTime: "",
          endTime: ""
        },
        tempSingleDate: "",
        tempRange: {
          before: "",
          after: ""
        }
      };
    },
    watch: {
      date: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.tempSingleDate = newVal;
            setTimeout(() => {
              this.init(newVal);
            }, 100);
          }
        }
      },
      defTime: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.time = newVal;
          } else {
            this.timeRange.startTime = newVal.start;
            this.timeRange.endTime = newVal.end;
          }
        }
      },
      startDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.setStartDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.setEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        if (!this.cale) {
          return;
        }
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      },
      pleStatus: {
        immediate: true,
        handler(newVal) {
          const {
            before,
            after,
            fulldate,
            which
          } = newVal;
          this.tempRange.before = before;
          this.tempRange.after = after;
          setTimeout(() => {
            if (fulldate) {
              this.cale.setHoverMultiple(fulldate);
              if (before && after) {
                this.cale.lastHover = true;
                if (this.rangeWithinMonth(after, before))
                  return;
                this.setDate(before);
              } else {
                this.cale.setMultiple(fulldate);
                this.setDate(this.nowDate.fullDate);
                this.calendar.fullDate = "";
                this.cale.lastHover = false;
              }
            } else {
              if (!this.cale) {
                return;
              }
              this.cale.setDefaultMultiple(before, after);
              if (which === "left" && before) {
                this.setDate(before);
                this.weeks = this.cale.weeks;
              } else if (after) {
                this.setDate(after);
                this.weeks = this.cale.weeks;
              }
              this.cale.lastHover = true;
            }
          }, 16);
        }
      }
    },
    computed: {
      timepickerStartTime() {
        const activeDate = this.range ? this.tempRange.before : this.calendar.fullDate;
        return activeDate === this.startDate ? this.selectableTimes.start : "";
      },
      timepickerEndTime() {
        const activeDate = this.range ? this.tempRange.after : this.calendar.fullDate;
        return activeDate === this.endDate ? this.selectableTimes.end : "";
      },
      /**
       * for i18n
       */
      selectDateText() {
        return t("uni-datetime-picker.selectDate");
      },
      startDateText() {
        return this.startPlaceholder || t("uni-datetime-picker.startDate");
      },
      endDateText() {
        return this.endPlaceholder || t("uni-datetime-picker.endDate");
      },
      okText() {
        return t("uni-datetime-picker.ok");
      },
      yearText() {
        return t("uni-datetime-picker.year");
      },
      monthText() {
        return t("uni-datetime-picker.month");
      },
      MONText() {
        return t("uni-calender.MON");
      },
      TUEText() {
        return t("uni-calender.TUE");
      },
      WEDText() {
        return t("uni-calender.WED");
      },
      THUText() {
        return t("uni-calender.THU");
      },
      FRIText() {
        return t("uni-calender.FRI");
      },
      SATText() {
        return t("uni-calender.SAT");
      },
      SUNText() {
        return t("uni-calender.SUN");
      },
      confirmText() {
        return t("uni-calender.confirm");
      }
    },
    created() {
      this.cale = new Calendar$1({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      leaveCale() {
        this.firstEnter = true;
      },
      handleMouse(weeks) {
        if (weeks.disable)
          return;
        if (this.cale.lastHover)
          return;
        let {
          before,
          after
        } = this.cale.multipleStatus;
        if (!before)
          return;
        this.calendar = weeks;
        this.cale.setHoverMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        if (this.firstEnter) {
          this.$emit("firstEnterCale", this.cale.multipleStatus);
          this.firstEnter = false;
        }
      },
      rangeWithinMonth(A, B) {
        const [yearA, monthA] = A.split("-");
        const [yearB, monthB] = B.split("-");
        return yearA === yearB && monthA === monthB;
      },
      // 蒙版点击事件
      maskClick() {
        this.close();
        this.$emit("maskClose");
      },
      clearCalender() {
        if (this.range) {
          this.timeRange.startTime = "";
          this.timeRange.endTime = "";
          this.tempRange.before = "";
          this.tempRange.after = "";
          this.cale.multipleStatus.before = "";
          this.cale.multipleStatus.after = "";
          this.cale.multipleStatus.data = [];
          this.cale.lastHover = false;
        } else {
          this.time = "";
          this.tempSingleDate = "";
        }
        this.calendar.fullDate = "";
        this.setDate(/* @__PURE__ */ new Date());
      },
      bindDateChange(e) {
        const value = e.detail.value + "-1";
        this.setDate(value);
      },
      /**
       * 初始化日期显示
       * @param {Object} date
       */
      init(date) {
        if (!this.cale) {
          return;
        }
        this.cale.setDate(date || /* @__PURE__ */ new Date());
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
        this.calendar = { ...this.nowDate };
        if (!date) {
          this.calendar.fullDate = "";
          if (this.defaultValue && !this.range) {
            const defaultDate = new Date(this.defaultValue);
            const fullDate = getDate(defaultDate);
            const year = defaultDate.getFullYear();
            const month = defaultDate.getMonth() + 1;
            const date2 = defaultDate.getDate();
            const day = defaultDate.getDay();
            this.calendar = {
              fullDate,
              year,
              month,
              date: date2,
              day
            }, this.tempSingleDate = fullDate;
            this.time = getTime(defaultDate, this.hideSecond);
          }
        }
      },
      /**
       * 打开日历弹窗
       */
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      /**
       * 关闭日历弹窗
       */
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      /**
       * 确认按钮
       */
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      /**
       * 变化触发
       */
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      /**
       * 选择月份触发
       */
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      /**
       * 派发事件
       * @param {Object} name
       */
      setEmit(name) {
        if (!this.range) {
          if (!this.calendar.fullDate) {
            this.calendar = this.cale.getInfo(/* @__PURE__ */ new Date());
            this.tempSingleDate = this.calendar.fullDate;
          }
          if (this.hasTime && !this.time) {
            this.time = getTime(/* @__PURE__ */ new Date(), this.hideSecond);
          }
        }
        let {
          year,
          month,
          date,
          fullDate,
          extraInfo
        } = this.calendar;
        this.$emit(name, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          time: this.time,
          timeRange: this.timeRange,
          fulldate: fullDate,
          extraInfo: extraInfo || {}
        });
      },
      /**
       * 选择天触发
       * @param {Object} weeks
       */
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.calendar.userChecked = true;
        this.cale.setMultiple(this.calendar.fullDate, true);
        this.weeks = this.cale.weeks;
        this.tempSingleDate = this.calendar.fullDate;
        const beforeDate = new Date(this.cale.multipleStatus.before).getTime();
        const afterDate = new Date(this.cale.multipleStatus.after).getTime();
        if (beforeDate > afterDate && afterDate) {
          this.tempRange.before = this.cale.multipleStatus.after;
          this.tempRange.after = this.cale.multipleStatus.before;
        } else {
          this.tempRange.before = this.cale.multipleStatus.before;
          this.tempRange.after = this.cale.multipleStatus.after;
        }
        this.change();
      },
      changeMonth(type) {
        let newDate;
        if (type === "pre") {
          newDate = this.cale.getPreMonthObj(this.nowDate.fullDate).fullDate;
        } else if (type === "next") {
          newDate = this.cale.getNextMonthObj(this.nowDate.fullDate).fullDate;
        }
        this.setDate(newDate);
        this.monthSwitch();
      },
      /**
       * 设置日期
       * @param {Object} date
       */
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-calendar",
        onMouseleave: _cache[9] || (_cache[9] = (...args) => $options.leaveCale && $options.leaveCale(...args))
      },
      [
        !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.maskClick && $options.maskClick(...args))
          },
          null,
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true),
        $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 1,
            class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow, "uni-calendar__content-mobile": $data.aniMaskShow }])
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-calendar__header", { "uni-calendar__header-mobile": !$props.insert }])
              },
              [
                vue.createElementVNode("view", {
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => $options.changeMonth("pre"), ["stop"]))
                }, [
                  vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
                ]),
                vue.createElementVNode("picker", {
                  mode: "date",
                  value: $props.date,
                  fields: "month",
                  onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__header-text" },
                    vue.toDisplayString(($data.nowDate.year || "") + $options.yearText + ($data.nowDate.month || "") + $options.monthText),
                    1
                    /* TEXT */
                  )
                ], 40, ["value"]),
                vue.createElementVNode("view", {
                  class: "uni-calendar__header-btn-box",
                  onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => $options.changeMonth("next"), ["stop"]))
                }, [
                  vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
                ]),
                !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "dialog-close",
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.maskClick && $options.maskClick(...args))
                }, [
                  vue.createElementVNode("view", {
                    class: "dialog-close-plus",
                    "data-id": "close"
                  }),
                  vue.createElementVNode("view", {
                    class: "dialog-close-plus dialog-close-rotate",
                    "data-id": "close"
                  })
                ])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode("view", { class: "uni-calendar__box" }, [
              $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-calendar__box-bg"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-calendar__box-bg-text" },
                  vue.toDisplayString($data.nowDate.month),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", {
                class: "uni-calendar__weeks",
                style: { "padding-bottom": "7px" }
              }, [
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.SUNText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.MONText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.TUEText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.WEDText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.THUText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.FRIText),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "uni-calendar__weeks-day-text" },
                    vue.toDisplayString($options.SATText),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.weeks, (item, weekIndex) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "uni-calendar__weeks",
                    key: weekIndex
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item, (weeks, weeksIndex) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "uni-calendar__weeks-item",
                          key: weeksIndex
                        }, [
                          vue.createVNode(_component_calendar_item, {
                            class: "uni-calendar-item--hook",
                            weeks,
                            calendar: $data.calendar,
                            selected: $props.selected,
                            checkHover: $props.range,
                            onChange: $options.choiceDate,
                            onHandleMouse: $options.handleMouse
                          }, null, 8, ["weeks", "calendar", "selected", "checkHover", "onChange", "onHandleMouse"])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            !$props.insert && !$props.range && $props.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-date-changed uni-calendar--fixed-top",
              style: { "padding": "0 80px" }
            }, [
              vue.createElementVNode(
                "view",
                { class: "uni-date-changed--time-date" },
                vue.toDisplayString($data.tempSingleDate ? $data.tempSingleDate : $options.selectDateText),
                1
                /* TEXT */
              ),
              vue.createVNode(_component_time_picker, {
                type: "time",
                start: $options.timepickerStartTime,
                end: $options.timepickerEndTime,
                modelValue: $data.time,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.time = $event),
                disabled: !$data.tempSingleDate,
                border: false,
                "hide-second": $props.hideSecond,
                class: "time-picker-style"
              }, null, 8, ["start", "end", "modelValue", "disabled", "hide-second"])
            ])) : vue.createCommentVNode("v-if", true),
            !$props.insert && $props.range && $props.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-date-changed uni-calendar--fixed-top"
            }, [
              vue.createElementVNode("view", { class: "uni-date-changed--time-start" }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-date-changed--time-date" },
                  vue.toDisplayString($data.tempRange.before ? $data.tempRange.before : $options.startDateText),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  start: $options.timepickerStartTime,
                  modelValue: $data.timeRange.startTime,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.timeRange.startTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.before,
                  class: "time-picker-style"
                }, null, 8, ["start", "modelValue", "hide-second", "disabled"])
              ]),
              vue.createElementVNode("view", { style: { "line-height": "50px" } }, [
                vue.createVNode(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999"
                })
              ]),
              vue.createElementVNode("view", { class: "uni-date-changed--time-end" }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-date-changed--time-date" },
                  vue.toDisplayString($data.tempRange.after ? $data.tempRange.after : $options.endDateText),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  end: $options.timepickerEndTime,
                  modelValue: $data.timeRange.endTime,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.timeRange.endTime = $event),
                  border: false,
                  "hide-second": $props.hideSecond,
                  disabled: !$data.tempRange.after,
                  class: "time-picker-style"
                }, null, 8, ["end", "modelValue", "hide-second", "disabled"])
              ])
            ])) : vue.createCommentVNode("v-if", true),
            !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "uni-date-changed uni-date-btn--ok"
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: "uni-datetime-picker--btn",
                  onClick: _cache[8] || (_cache[8] = (...args) => $options.confirm && $options.confirm(...args))
                },
                vue.toDisplayString($options.confirmText),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true)
      ],
      32
      /* HYDRATE_EVENTS */
    );
  }
  const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1], ["__scopeId", "data-v-1d379219"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar.vue"]]);
  const _sfc_main$3 = {
    name: "UniDatetimePicker",
    options: {
      virtualHost: true
    },
    components: {
      Calendar,
      TimePicker
    },
    data() {
      return {
        isRange: false,
        hasTime: false,
        displayValue: "",
        inputDate: "",
        calendarDate: "",
        pickerTime: "",
        calendarRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        displayRangeValue: {
          startDate: "",
          endDate: ""
        },
        tempRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        // 左右日历同步数据
        startMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        endMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        pickerVisible: false,
        pickerPositionStyle: null,
        isEmitValue: false,
        isPhone: false,
        isFirstShow: true,
        i18nT: () => {
        }
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number, Array, Date],
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, Date],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      placeholder: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      rangeSeparator: {
        type: String,
        default: "-"
      },
      border: {
        type: [Boolean],
        default: true
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      clearIcon: {
        type: [Boolean],
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      defaultValue: {
        type: [String, Object, Array],
        default: ""
      }
    },
    watch: {
      type: {
        immediate: true,
        handler(newVal) {
          this.hasTime = newVal.indexOf("time") !== -1;
          this.isRange = newVal.indexOf("range") !== -1;
        }
      },
      modelValue: {
        immediate: true,
        handler(newVal) {
          if (this.isEmitValue) {
            this.isEmitValue = false;
            return;
          }
          this.initPicker(newVal);
        }
      },
      start: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          this.calendarRange.startDate = getDate(newVal);
          if (this.hasTime) {
            this.calendarRange.startTime = getTime(newVal);
          }
        }
      },
      end: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          this.calendarRange.endDate = getDate(newVal);
          if (this.hasTime) {
            this.calendarRange.endTime = getTime(newVal, this.hideSecond);
          }
        }
      }
    },
    computed: {
      timepickerStartTime() {
        const activeDate = this.isRange ? this.tempRange.startDate : this.inputDate;
        return activeDate === this.calendarRange.startDate ? this.calendarRange.startTime : "";
      },
      timepickerEndTime() {
        const activeDate = this.isRange ? this.tempRange.endDate : this.inputDate;
        return activeDate === this.calendarRange.endDate ? this.calendarRange.endTime : "";
      },
      mobileCalendarTime() {
        const timeRange = {
          start: this.tempRange.startTime,
          end: this.tempRange.endTime
        };
        return this.isRange ? timeRange : this.pickerTime;
      },
      mobSelectableTime() {
        return {
          start: this.calendarRange.startTime,
          end: this.calendarRange.endTime
        };
      },
      datePopupWidth() {
        return this.isRange ? 653 : 301;
      },
      /**
       * for i18n
       */
      singlePlaceholderText() {
        return this.placeholder || (this.type === "date" ? this.selectDateText : this.selectDateTimeText);
      },
      startPlaceholderText() {
        return this.startPlaceholder || this.startDateText;
      },
      endPlaceholderText() {
        return this.endPlaceholder || this.endDateText;
      },
      selectDateText() {
        return this.i18nT("uni-datetime-picker.selectDate");
      },
      selectDateTimeText() {
        return this.i18nT("uni-datetime-picker.selectDateTime");
      },
      selectTimeText() {
        return this.i18nT("uni-datetime-picker.selectTime");
      },
      startDateText() {
        return this.startPlaceholder || this.i18nT("uni-datetime-picker.startDate");
      },
      startTimeText() {
        return this.i18nT("uni-datetime-picker.startTime");
      },
      endDateText() {
        return this.endPlaceholder || this.i18nT("uni-datetime-picker.endDate");
      },
      endTimeText() {
        return this.i18nT("uni-datetime-picker.endTime");
      },
      okText() {
        return this.i18nT("uni-datetime-picker.ok");
      },
      clearText() {
        return this.i18nT("uni-datetime-picker.clear");
      },
      showClearIcon() {
        return this.clearIcon && !this.disabled && (this.displayValue || this.displayRangeValue.startDate && this.displayRangeValue.endDate);
      }
    },
    created() {
      this.initI18nT();
      this.platform();
    },
    methods: {
      initI18nT() {
        const vueI18n = initVueI18n(i18nMessages);
        this.i18nT = vueI18n.t;
      },
      initPicker(newVal) {
        if (!newVal && !this.defaultValue || Array.isArray(newVal) && !newVal.length) {
          this.$nextTick(() => {
            this.clear(false);
          });
          return;
        }
        if (!Array.isArray(newVal) && !this.isRange) {
          if (newVal) {
            this.displayValue = this.inputDate = this.calendarDate = getDate(newVal);
            if (this.hasTime) {
              this.pickerTime = getTime(newVal, this.hideSecond);
              this.displayValue = `${this.displayValue} ${this.pickerTime}`;
            }
          } else if (this.defaultValue) {
            this.inputDate = this.calendarDate = getDate(this.defaultValue);
            if (this.hasTime) {
              this.pickerTime = getTime(this.defaultValue, this.hideSecond);
            }
          }
        } else {
          const [before, after] = newVal;
          if (!before && !after)
            return;
          const beforeDate = getDate(before);
          const beforeTime = getTime(before, this.hideSecond);
          const afterDate = getDate(after);
          const afterTime = getTime(after, this.hideSecond);
          const startDate = beforeDate;
          const endDate = afterDate;
          this.displayRangeValue.startDate = this.tempRange.startDate = startDate;
          this.displayRangeValue.endDate = this.tempRange.endDate = endDate;
          if (this.hasTime) {
            this.displayRangeValue.startDate = `${beforeDate} ${beforeTime}`;
            this.displayRangeValue.endDate = `${afterDate} ${afterTime}`;
            this.tempRange.startTime = beforeTime;
            this.tempRange.endTime = afterTime;
          }
          const defaultRange = {
            before: beforeDate,
            after: afterDate
          };
          this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
            which: "right"
          });
          this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
            which: "left"
          });
        }
      },
      updateLeftCale(e) {
        const left = this.$refs.left;
        left.cale.setHoverMultiple(e.after);
        left.setDate(this.$refs.left.nowDate.fullDate);
      },
      updateRightCale(e) {
        const right = this.$refs.right;
        right.cale.setHoverMultiple(e.after);
        right.setDate(this.$refs.right.nowDate.fullDate);
      },
      platform() {
        if (typeof navigator !== "undefined") {
          this.isPhone = navigator.userAgent.toLowerCase().indexOf("mobile") !== -1;
          return;
        }
        const {
          windowWidth
        } = uni.getSystemInfoSync();
        this.isPhone = windowWidth <= 500;
        this.windowWidth = windowWidth;
      },
      show() {
        this.$emit("show");
        if (this.disabled) {
          return;
        }
        this.platform();
        if (this.isPhone) {
          setTimeout(() => {
            this.$refs.mobile.open();
          }, 0);
          return;
        }
        this.pickerPositionStyle = {
          top: "10px"
        };
        const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor");
        dateEditor.boundingClientRect((rect) => {
          if (this.windowWidth - rect.left < this.datePopupWidth) {
            this.pickerPositionStyle.right = 0;
          }
        }).exec();
        setTimeout(() => {
          this.pickerVisible = !this.pickerVisible;
          if (!this.isPhone && this.isRange && this.isFirstShow) {
            this.isFirstShow = false;
            const {
              startDate,
              endDate
            } = this.calendarRange;
            if (startDate && endDate) {
              if (this.diffDate(startDate, endDate) < 30) {
                this.$refs.right.changeMonth("pre");
              }
            } else {
              if (this.isPhone) {
                this.$refs.right.cale.lastHover = false;
              }
            }
          }
        }, 50);
      },
      close() {
        setTimeout(() => {
          this.pickerVisible = false;
          this.$emit("maskClick", this.value);
          this.$refs.mobile && this.$refs.mobile.close();
        }, 20);
      },
      setEmit(value) {
        if (this.returnType === "timestamp" || this.returnType === "date") {
          if (!Array.isArray(value)) {
            if (!this.hasTime) {
              value = value + " 00:00:00";
            }
            value = this.createTimestamp(value);
            if (this.returnType === "date") {
              value = new Date(value);
            }
          } else {
            if (!this.hasTime) {
              value[0] = value[0] + " 00:00:00";
              value[1] = value[1] + " 00:00:00";
            }
            value[0] = this.createTimestamp(value[0]);
            value[1] = this.createTimestamp(value[1]);
            if (this.returnType === "date") {
              value[0] = new Date(value[0]);
              value[1] = new Date(value[1]);
            }
          }
        }
        this.$emit("update:modelValue", value);
        this.$emit("input", value);
        this.$emit("change", value);
        this.isEmitValue = true;
      },
      createTimestamp(date) {
        date = fixIosDateFormat(date);
        return Date.parse(new Date(date));
      },
      singleChange(e) {
        this.calendarDate = this.inputDate = e.fulldate;
        if (this.hasTime)
          return;
        this.confirmSingleChange();
      },
      confirmSingleChange() {
        if (!checkDate(this.inputDate)) {
          const now = /* @__PURE__ */ new Date();
          this.calendarDate = this.inputDate = getDate(now);
          this.pickerTime = getTime(now, this.hideSecond);
        }
        let startLaterInputDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = getDateTime(this.start, this.hideSecond);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !dateCompare(startDate, this.inputDate)) {
            startLaterInputDate = true;
            this.inputDate = startDate;
          }
        }
        let endEarlierInputDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = getDateTime(this.end, this.hideSecond);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !dateCompare(this.inputDate, endDate)) {
            endEarlierInputDate = true;
            this.inputDate = endDate;
          }
        }
        if (this.hasTime) {
          if (startLaterInputDate) {
            this.pickerTime = startTime || getDefaultSecond(this.hideSecond);
          }
          if (endEarlierInputDate) {
            this.pickerTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.pickerTime) {
            this.pickerTime = getTime(Date.now(), this.hideSecond);
          }
          this.displayValue = `${this.inputDate} ${this.pickerTime}`;
        } else {
          this.displayValue = this.inputDate;
        }
        this.setEmit(this.displayValue);
        this.pickerVisible = false;
      },
      leftChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj);
      },
      rightChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj);
      },
      mobileChange(e) {
        if (this.isRange) {
          const {
            before,
            after
          } = e.range;
          if (!before) {
            return;
          }
          this.handleStartAndEnd(before, after, true);
          if (this.hasTime) {
            const {
              startTime,
              endTime
            } = e.timeRange;
            this.tempRange.startTime = startTime;
            this.tempRange.endTime = endTime;
          }
          this.confirmRangeChange();
        } else {
          if (this.hasTime) {
            this.displayValue = e.fulldate + " " + e.time;
          } else {
            this.displayValue = e.fulldate;
          }
          this.setEmit(this.displayValue);
        }
        this.$refs.mobile.close();
      },
      rangeChange(before, after) {
        if (!(before && after))
          return;
        this.handleStartAndEnd(before, after, true);
        if (this.hasTime)
          return;
        this.confirmRangeChange();
      },
      confirmRangeChange() {
        if (!this.tempRange.startDate || !this.tempRange.endDate) {
          this.pickerVisible = false;
          return;
        }
        if (!checkDate(this.tempRange.startDate)) {
          this.tempRange.startDate = getDate(Date.now());
        }
        if (!checkDate(this.tempRange.endDate)) {
          this.tempRange.endDate = getDate(Date.now());
        }
        let start, end;
        let startDateLaterRangeStartDate = false;
        let startDateLaterRangeEndDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = getDateTime(this.start, this.hideSecond);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !dateCompare(this.start, this.tempRange.startDate)) {
            startDateLaterRangeStartDate = true;
            this.tempRange.startDate = startDate;
          }
          if (this.start && !dateCompare(this.start, this.tempRange.endDate)) {
            startDateLaterRangeEndDate = true;
            this.tempRange.endDate = startDate;
          }
        }
        let endDateEarlierRangeStartDate = false;
        let endDateEarlierRangeEndDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = getDateTime(this.end, this.hideSecond);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !dateCompare(this.tempRange.startDate, this.end)) {
            endDateEarlierRangeStartDate = true;
            this.tempRange.startDate = endDate;
          }
          if (this.end && !dateCompare(this.tempRange.endDate, this.end)) {
            endDateEarlierRangeEndDate = true;
            this.tempRange.endDate = endDate;
          }
        }
        if (!this.hasTime) {
          start = this.displayRangeValue.startDate = this.tempRange.startDate;
          end = this.displayRangeValue.endDate = this.tempRange.endDate;
        } else {
          if (startDateLaterRangeStartDate) {
            this.tempRange.startTime = startTime || getDefaultSecond(this.hideSecond);
          } else if (endDateEarlierRangeStartDate) {
            this.tempRange.startTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.tempRange.startTime) {
            this.tempRange.startTime = getTime(Date.now(), this.hideSecond);
          }
          if (startDateLaterRangeEndDate) {
            this.tempRange.endTime = startTime || getDefaultSecond(this.hideSecond);
          } else if (endDateEarlierRangeEndDate) {
            this.tempRange.endTime = endTime || getDefaultSecond(this.hideSecond);
          }
          if (!this.tempRange.endTime) {
            this.tempRange.endTime = getTime(Date.now(), this.hideSecond);
          }
          start = this.displayRangeValue.startDate = `${this.tempRange.startDate} ${this.tempRange.startTime}`;
          end = this.displayRangeValue.endDate = `${this.tempRange.endDate} ${this.tempRange.endTime}`;
        }
        if (!dateCompare(start, end)) {
          [start, end] = [end, start];
        }
        this.displayRangeValue.startDate = start;
        this.displayRangeValue.endDate = end;
        const displayRange = [start, end];
        this.setEmit(displayRange);
        this.pickerVisible = false;
      },
      handleStartAndEnd(before, after, temp = false) {
        if (!before)
          return;
        if (!after)
          after = before;
        const type = temp ? "tempRange" : "range";
        const isStartEarlierEnd = dateCompare(before, after);
        this[type].startDate = isStartEarlierEnd ? before : after;
        this[type].endDate = isStartEarlierEnd ? after : before;
      },
      /**
       * 比较时间大小
       */
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        return startDate <= endDate;
      },
      /**
       * 比较时间差
       */
      diffDate(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        const diff = (endDate - startDate) / (24 * 60 * 60 * 1e3);
        return Math.abs(diff);
      },
      clear(needEmit = true) {
        if (!this.isRange) {
          this.displayValue = "";
          this.inputDate = "";
          this.pickerTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.pcSingle && this.$refs.pcSingle.clearCalender();
          }
          if (needEmit) {
            this.$emit("change", "");
            this.$emit("input", "");
            this.$emit("update:modelValue", "");
          }
        } else {
          this.displayRangeValue.startDate = "";
          this.displayRangeValue.endDate = "";
          this.tempRange.startDate = "";
          this.tempRange.startTime = "";
          this.tempRange.endDate = "";
          this.tempRange.endTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.left && this.$refs.left.clearCalender();
            this.$refs.right && this.$refs.right.clearCalender();
            this.$refs.right && this.$refs.right.changeMonth("next");
          }
          if (needEmit) {
            this.$emit("change", []);
            this.$emit("input", []);
            this.$emit("update:modelValue", []);
          }
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_Calendar = vue.resolveComponent("Calendar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-date" }, [
      vue.createElementVNode("view", {
        class: "uni-date-editor",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.show && $options.show(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-date-editor--x", { "uni-date-editor--x__disabled": $props.disabled, "uni-date-x--border": $props.border }])
            },
            [
              !$data.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-date-x uni-date-single"
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon-calendar",
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input" },
                  vue.toDisplayString($data.displayValue || $options.singlePlaceholderText),
                  1
                  /* TEXT */
                )
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-date-x uni-date-range"
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon-calendar",
                  type: "calendar",
                  color: "#c0c4cc",
                  size: "22"
                }),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input text-center" },
                  vue.toDisplayString($data.displayRangeValue.startDate || $options.startPlaceholderText),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "range-separator" },
                  vue.toDisplayString($props.rangeSeparator),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "uni-date__x-input text-center" },
                  vue.toDisplayString($data.displayRangeValue.endDate || $options.endPlaceholderText),
                  1
                  /* TEXT */
                )
              ])),
              $options.showClearIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "uni-date__icon-clear",
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "clear",
                  color: "#c0c4cc",
                  size: "22"
                })
              ])) : vue.createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ], true)
      ]),
      vue.withDirectives(vue.createElementVNode(
        "view",
        {
          class: "uni-date-mask--pc",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.close && $options.close(...args))
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $data.pickerVisible]
      ]),
      !$data.isPhone ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          ref: "datePicker",
          class: "uni-date-picker__container"
        },
        [
          !$data.isRange ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "uni-date-single--x",
              style: vue.normalizeStyle($data.pickerPositionStyle)
            },
            [
              vue.createElementVNode("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-date-changed popup-x-header"
              }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "uni-date__input text-center",
                  type: "text",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputDate = $event),
                  placeholder: $options.selectDateText
                }, null, 8, ["placeholder"]), [
                  [vue.vModelText, $data.inputDate]
                ]),
                vue.createVNode(_component_time_picker, {
                  type: "time",
                  modelValue: $data.pickerTime,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.pickerTime = $event),
                  border: false,
                  disabled: !$data.inputDate,
                  start: $options.timepickerStartTime,
                  end: $options.timepickerEndTime,
                  hideSecond: $props.hideSecond,
                  style: { "width": "100%" }
                }, {
                  default: vue.withCtx(() => [
                    vue.withDirectives(vue.createElementVNode("input", {
                      class: "uni-date__input text-center",
                      type: "text",
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.pickerTime = $event),
                      placeholder: $options.selectTimeText,
                      disabled: !$data.inputDate
                    }, null, 8, ["placeholder", "disabled"]), [
                      [vue.vModelText, $data.pickerTime]
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue", "disabled", "start", "end", "hideSecond"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createVNode(_component_Calendar, {
                ref: "pcSingle",
                showMonth: false,
                "start-date": $data.calendarRange.startDate,
                "end-date": $data.calendarRange.endDate,
                date: $data.calendarDate,
                onChange: $options.singleChange,
                "default-value": $props.defaultValue,
                style: { "padding": "0 8px" }
              }, null, 8, ["start-date", "end-date", "date", "onChange", "default-value"]),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    class: "confirm-text",
                    onClick: _cache[6] || (_cache[6] = (...args) => $options.confirmSingleChange && $options.confirmSingleChange(...args))
                  },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )) : (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: "uni-date-range--x",
              style: vue.normalizeStyle($data.pickerPositionStyle)
            },
            [
              vue.createElementVNode("view", { class: "uni-popper__arrow" }),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "popup-x-header uni-date-changed"
              }, [
                vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.tempRange.startDate = $event),
                    placeholder: $options.startDateText
                  }, null, 8, ["placeholder"]), [
                    [vue.vModelText, $data.tempRange.startDate]
                  ]),
                  vue.createVNode(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.startTime,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.tempRange.startTime = $event),
                    start: $options.timepickerStartTime,
                    border: false,
                    disabled: !$data.tempRange.startDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: vue.withCtx(() => [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.tempRange.startTime = $event),
                        placeholder: $options.startTimeText,
                        disabled: !$data.tempRange.startDate
                      }, null, 8, ["placeholder", "disabled"]), [
                        [vue.vModelText, $data.tempRange.startTime]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "start", "disabled", "hideSecond"])
                ]),
                vue.createVNode(_component_uni_icons, {
                  type: "arrowthinright",
                  color: "#999",
                  style: { "line-height": "40px" }
                }),
                vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.tempRange.endDate = $event),
                    placeholder: $options.endDateText
                  }, null, 8, ["placeholder"]), [
                    [vue.vModelText, $data.tempRange.endDate]
                  ]),
                  vue.createVNode(_component_time_picker, {
                    type: "time",
                    modelValue: $data.tempRange.endTime,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.tempRange.endTime = $event),
                    end: $options.timepickerEndTime,
                    border: false,
                    disabled: !$data.tempRange.endDate,
                    hideSecond: $props.hideSecond
                  }, {
                    default: vue.withCtx(() => [
                      vue.withDirectives(vue.createElementVNode("input", {
                        class: "uni-date__input uni-date-range__input",
                        type: "text",
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.tempRange.endTime = $event),
                        placeholder: $options.endTimeText,
                        disabled: !$data.tempRange.endDate
                      }, null, 8, ["placeholder", "disabled"]), [
                        [vue.vModelText, $data.tempRange.endTime]
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "end", "disabled", "hideSecond"])
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "popup-x-body" }, [
                vue.createVNode(_component_Calendar, {
                  ref: "left",
                  showMonth: false,
                  "start-date": $data.calendarRange.startDate,
                  "end-date": $data.calendarRange.endDate,
                  range: true,
                  pleStatus: $data.endMultipleStatus,
                  onChange: $options.leftChange,
                  onFirstEnterCale: $options.updateRightCale,
                  style: { "padding": "0 8px" }
                }, null, 8, ["start-date", "end-date", "pleStatus", "onChange", "onFirstEnterCale"]),
                vue.createVNode(_component_Calendar, {
                  ref: "right",
                  showMonth: false,
                  "start-date": $data.calendarRange.startDate,
                  "end-date": $data.calendarRange.endDate,
                  range: true,
                  onChange: $options.rightChange,
                  pleStatus: $data.startMultipleStatus,
                  onFirstEnterCale: $options.updateLeftCale,
                  style: { "padding": "0 8px", "border-left": "1px solid #F1F1F1" }
                }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale"])
              ]),
              $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "popup-x-footer"
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    onClick: _cache[13] || (_cache[13] = (...args) => $options.clear && $options.clear(...args))
                  },
                  vue.toDisplayString($options.clearText),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  {
                    class: "confirm-text",
                    onClick: _cache[14] || (_cache[14] = (...args) => $options.confirmRangeChange && $options.confirmRangeChange(...args))
                  },
                  vue.toDisplayString($options.okText),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ))
        ],
        512
        /* NEED_PATCH */
      )), [
        [vue.vShow, $data.pickerVisible]
      ]) : vue.createCommentVNode("v-if", true),
      $data.isPhone ? (vue.openBlock(), vue.createBlock(_component_Calendar, {
        key: 1,
        ref: "mobile",
        clearDate: false,
        date: $data.calendarDate,
        defTime: $options.mobileCalendarTime,
        "start-date": $data.calendarRange.startDate,
        "end-date": $data.calendarRange.endDate,
        selectableTimes: $options.mobSelectableTime,
        startPlaceholder: $props.startPlaceholder,
        endPlaceholder: $props.endPlaceholder,
        "default-value": $props.defaultValue,
        pleStatus: $data.endMultipleStatus,
        showMonth: false,
        range: $data.isRange,
        hasTime: $data.hasTime,
        insert: false,
        hideSecond: $props.hideSecond,
        onConfirm: $options.mobileChange,
        onMaskClose: $options.close
      }, null, 8, ["date", "defTime", "start-date", "end-date", "selectableTimes", "startPlaceholder", "endPlaceholder", "default-value", "pleStatus", "range", "hasTime", "hideSecond", "onConfirm", "onMaskClose"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__scopeId", "data-v-9802168a"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue"]]);
  const _sfc_main$2 = {
    __name: "index",
    setup(__props) {
      const tabs = ["支出", "收入", "转账"];
      const activeTab = vue.ref(0);
      const selectTab = (index) => {
        activeTab.value = index;
      };
      const selectedCateID = vue.ref(1);
      const selectCate = (cateID) => {
        selectedCateID.value = cateID;
      };
      const keypadLayout = [
        [1, 2, 3, "+"],
        [4, 5, 6, "-"],
        [7, 8, 9, "完成"],
        [".", 0, "DEL", "="]
      ];
      const noteValue = vue.ref("");
      const inputValue = vue.ref("");
      const handleKeyPress = (key) => {
        if (key === "DEL") {
          inputValue.value = inputValue.value.slice(0, -1);
        } else if (key === "=") {
          inputValue.value = eval(inputValue.value);
        } else if (key === "完成") {
          addExpense();
        } else {
          inputValue.value += key;
        }
      };
      const dateValue = vue.ref("");
      const selectDate = (e) => {
        formatAppLog("log", "at subPackages/jizhang/add/index.vue:91", "选择日期", e);
      };
      const addExpense = async () => {
        let Amount = activeTab.value === 0 ? -inputValue.value : inputValue.value;
        let expense = {
          UserID: 1,
          Amount,
          Category: selectedCateID.value,
          Date: dateValue.value,
          Note: noteValue.value
        };
        formatAppLog("log", "at subPackages/jizhang/add/index.vue:102", "expense", expense);
        let res = await apiAddExpense(expense);
        formatAppLog("log", "at subPackages/jizhang/add/index.vue:104", "res", res);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createCommentVNode(" tabbar选择栏 "),
          vue.createElementVNode("view", { class: "tabbar" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(tabs, (tab, index) => {
                return vue.createElementVNode("view", {
                  class: vue.normalizeClass(["tab", { "active": activeTab.value === index }]),
                  key: index,
                  onClick: ($event) => selectTab(index)
                }, vue.toDisplayString(tab), 11, ["onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 分类选择 "),
          activeTab.value === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "select"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(accountCateEnum).getAllCategories(), (cate, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "select-item",
                  key: index,
                  onClick: ($event) => selectCate(cate.id)
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "icon",
                      style: vue.normalizeStyle({ border: selectedCateID.value === cate.id ? `5rpx solid ${cate.color}` : "none" })
                    },
                    [
                      vue.createElementVNode(
                        "view",
                        {
                          class: "padding",
                          style: vue.normalizeStyle({ backgroundColor: cate.color })
                        },
                        [
                          vue.createVNode(_component_uni_icons, {
                            "custom-prefix": "iconfont",
                            type: cate.icon,
                            color: "#fff",
                            size: "30"
                          }, null, 8, ["type"])
                        ],
                        4
                        /* STYLE */
                      )
                    ],
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "name" },
                    vue.toDisplayString(cate.name),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true),
          activeTab.value === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "select"
          }, "收入")) : vue.createCommentVNode("v-if", true),
          activeTab.value === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "select"
          }, "转账")) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 记账输入器固定在页面底部，互动包括备注添加、金额输入（数字键盘）、分类选择 "),
          vue.createElementVNode("view", { class: "numeric-keypad" }, [
            vue.createElementVNode("view", { class: "date" }, [
              vue.createVNode(_component_uni_datetime_picker, {
                class: "no-border",
                type: "datetime",
                modelValue: dateValue.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dateValue.value = $event),
                onChange: selectDate
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("view", { class: "display" }, [
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  class: "note",
                  type: "text",
                  placeholder: "添加备注",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => noteValue.value = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, noteValue.value]
              ]),
              vue.createElementVNode(
                "view",
                { class: "input" },
                vue.toDisplayString(inputValue.value),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("table", null, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(keypadLayout, (row, rowIndex) => {
                  return vue.createElementVNode("tr", { key: rowIndex }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(row, (key2, keyIndex) => {
                        return vue.openBlock(), vue.createElementBlock("td", {
                          key: keyIndex,
                          onClick: ($event) => handleKeyPress(key2)
                        }, vue.toDisplayString(key2), 9, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const SubPackagesJizhangAddIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "E:/HBuilderProjects/time-master/subPackages/jizhang/add/index.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props) {
      const keypadLayout = [
        [1, 2, 3, "+"],
        [4, 5, 6, "-"],
        [7, 8, 9, "完成"],
        [".", 0, "DEL", "="]
      ];
      const inputValue = vue.ref("");
      const handleKeyPress = (key) => {
        if (key === "DEL") {
          inputValue.value = inputValue.value.slice(0, -1);
        } else if (key === "=") {
          inputValue.value = eval(inputValue.value);
        } else if (key === "完成")
          ;
        else {
          inputValue.value += key;
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "numeric-keypad" }, [
          vue.createElementVNode(
            "div",
            { class: "display" },
            vue.toDisplayString(inputValue.value),
            1
            /* TEXT */
          ),
          vue.createElementVNode("table", null, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(keypadLayout, (row, rowIndex) => {
                return vue.createElementVNode("tr", { key: rowIndex }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(row, (key2, keyIndex) => {
                      return vue.openBlock(), vue.createElementBlock("td", {
                        key: keyIndex,
                        onClick: ($event) => handleKeyPress(key2)
                      }, vue.toDisplayString(key2), 9, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const SubPackagesTestNumericKeypadIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe972938"], ["__file", "E:/HBuilderProjects/time-master/subPackages/test/NumericKeypad/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/mine/index", PagesMineIndex);
  __definePage("pages/note/index", PagesNoteIndex);
  __definePage("pages/plan/index", PagesPlanIndex);
  __definePage("subPackages/jizhang/index/index", SubPackagesJizhangIndexIndex);
  __definePage("subPackages/jizhang/add/index", SubPackagesJizhangAddIndex);
  __definePage("subPackages/test/NumericKeypad/index", SubPackagesTestNumericKeypadIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/HBuilderProjects/time-master/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$utils = utils;
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
