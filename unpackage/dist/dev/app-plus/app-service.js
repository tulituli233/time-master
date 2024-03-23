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
    const reg2 = /^[0-9]*$/g;
    return typeof val === "number" || reg2.test(val) ? val + "px" : val;
  };
  const _sfc_main$y = {
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
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$h], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  const ON_LOAD = "onLoad";
  const ON_UNLOAD = "onUnload";
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
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  var LunarCalendarExports = {};
  var LunarCalendar$1 = {
    get exports() {
      return LunarCalendarExports;
    },
    set exports(v) {
      LunarCalendarExports = v;
    }
  };
  (function(module, exports) {
    (function() {
      var extend = function(o, c) {
        if (o && c && typeof c == "object") {
          for (var p in c) {
            o[p] = c[p];
          }
        }
        return o;
      };
      var creatLenArr = function(year, month, len, start) {
        var arr = [];
        start = start || 0;
        if (len < 1)
          return arr;
        var k = start;
        for (var i = 0; i < len; i++) {
          arr.push({ year, month, day: k });
          k++;
        }
        return arr;
      };
      var errorCode = {
        //错误码列表
        100: "输入的年份超过了可查询范围，仅支持1891至2100年",
        101: "参数输入错误，请查阅文档"
      };
      var cache = null;
      var cacheUtil = {
        //cache管理工具
        current: "",
        setCurrent: function(year) {
          if (this.current != year) {
            this.current = year;
            this.clear();
          }
        },
        set: function(key2, value) {
          if (!cache)
            cache = {};
          cache[key2] = value;
          return cache[key2];
        },
        get: function(key2) {
          if (!cache)
            cache = {};
          return cache[key2];
        },
        clear: function() {
          cache = null;
        }
      };
      var formateDayD4 = function(month, day) {
        month = month + 1;
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        return "d" + month + day;
      };
      var minYear = 1890;
      var maxYear = 2100;
      var DATA = {
        heavenlyStems: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
        //天干
        earthlyBranches: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
        //地支
        zodiac: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
        //对应地支十二生肖
        solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
        //二十四节气
        monthCn: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        dateCn: ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十", "卅一"]
      };
      var worktime = {};
      worktime.y2013 = { "d0101": 2, "d0102": 2, "d0103": 2, "d0105": 1, "d0106": 1, "d0209": 2, "d0210": 2, "d0211": 2, "d0212": 2, "d0213": 2, "d0214": 2, "d0215": 2, "d0216": 1, "d0217": 1, "d0404": 2, "d0405": 2, "d0406": 2, "d0407": 1, "d0427": 1, "d0428": 1, "d0429": 2, "d0430": 2, "d0501": 2, "d0608": 1, "d0609": 1, "d0610": 2, "d0611": 2, "d0612": 2, "d0919": 2, "d0920": 2, "d0921": 2, "d0922": 1, "d0929": 1, "d1001": 2, "d1002": 2, "d1003": 2, "d1004": 2, "d1005": 2, "d1006": 2, "d1007": 2, "d1012": 1 };
      worktime.y2014 = { "d0101": 2, "d0126": 1, "d0131": 2, "d0201": 2, "d0202": 2, "d0203": 2, "d0204": 2, "d0205": 2, "d0206": 2, "d0208": 1, "d0405": 2, "d0407": 2, "d0501": 2, "d0502": 2, "d0503": 2, "d0504": 1, "d0602": 2, "d0908": 2, "d0928": 1, "d1001": 2, "d1002": 2, "d1003": 2, "d1004": 2, "d1005": 2, "d1006": 2, "d1007": 2, "d1011": 1 };
      var solarFestival = {
        "d0101": "元旦节",
        "d0202": "世界湿地日",
        "d0210": "国际气象节",
        "d0214": "情人节",
        "d0301": "国际海豹日",
        "d0303": "全国爱耳日",
        "d0305": "学雷锋纪念日",
        "d0308": "妇女节",
        "d0312": "植树节 孙中山逝世纪念日",
        "d0314": "国际警察日",
        "d0315": "消费者权益日",
        "d0317": "中国国医节 国际航海日",
        "d0321": "世界森林日 消除种族歧视国际日 世界儿歌日",
        "d0322": "世界水日",
        "d0323": "世界气象日",
        "d0324": "世界防治结核病日",
        "d0325": "全国中小学生安全教育日",
        "d0330": "巴勒斯坦国土日",
        "d0401": "愚人节 全国爱国卫生运动月(四月) 税收宣传月(四月)",
        "d0407": "世界卫生日",
        "d0422": "世界地球日",
        "d0423": "世界图书和版权日",
        "d0424": "亚非新闻工作者日",
        "d0501": "劳动节",
        "d0504": "青年节",
        "d0505": "碘缺乏病防治日",
        "d0508": "世界红十字日",
        "d0512": "国际护士节",
        "d0515": "国际家庭日",
        "d0517": "世界电信日",
        "d0518": "国际博物馆日",
        "d0520": "全国学生营养日",
        "d0522": "国际生物多样性日",
        "d0523": "国际牛奶日",
        "d0531": "世界无烟日",
        "d0601": "国际儿童节",
        "d0605": "世界环境日",
        "d0606": "全国爱眼日",
        "d0617": "防治荒漠化和干旱日",
        "d0623": "国际奥林匹克日",
        "d0625": "全国土地日",
        "d0626": "国际禁毒日",
        "d0701": "香港回归纪念日 中共诞辰 世界建筑日",
        "d0702": "国际体育记者日",
        "d0707": "抗日战争纪念日",
        "d0711": "世界人口日",
        "d0730": "非洲妇女日",
        "d0801": "建军节",
        "d0808": "中国男子节(爸爸节)",
        "d0815": "抗日战争胜利纪念",
        "d0908": "国际扫盲日 国际新闻工作者日",
        "d0909": "毛泽东逝世纪念",
        "d0910": "中国教师节",
        "d0914": "世界清洁地球日",
        "d0916": "国际臭氧层保护日",
        "d0918": "九一八事变纪念日",
        "d0920": "国际爱牙日",
        "d0927": "世界旅游日",
        "d0928": "孔子诞辰",
        "d1001": "国庆节 世界音乐日 国际老人节",
        "d1002": "国际和平与民主自由斗争日",
        "d1004": "世界动物日",
        "d1006": "老人节",
        "d1008": "全国高血压日 世界视觉日",
        "d1009": "世界邮政日 万国邮联日",
        "d1010": "辛亥革命纪念日 世界精神卫生日",
        "d1013": "世界保健日 国际教师节",
        "d1014": "世界标准日",
        "d1015": "国际盲人节(白手杖节)",
        "d1016": "世界粮食日",
        "d1017": "世界消除贫困日",
        "d1022": "世界传统医药日",
        "d1024": "联合国日 世界发展信息日",
        "d1031": "世界勤俭日",
        "d1107": "十月社会主义革命纪念日",
        "d1108": "中国记者日",
        "d1109": "全国消防安全宣传教育日",
        "d1110": "世界青年节",
        "d1111": "国际科学与和平周(本日所属的一周)",
        "d1112": "孙中山诞辰纪念日",
        "d1114": "世界糖尿病日",
        "d1117": "国际大学生节 世界学生节",
        "d1121": "世界问候日 世界电视日",
        "d1129": "国际声援巴勒斯坦人民国际日",
        "d1201": "世界艾滋病日",
        "d1203": "世界残疾人日",
        "d1205": "国际经济和社会发展志愿人员日",
        "d1208": "国际儿童电视日",
        "d1209": "世界足球日",
        "d1210": "世界人权日",
        "d1212": "西安事变纪念日",
        "d1213": "南京大屠杀(1937年)纪念日！紧记血泪史！",
        "d1220": "澳门回归纪念",
        "d1221": "国际篮球日",
        "d1224": "平安夜",
        "d1225": "圣诞节",
        "d1226": "毛泽东诞辰纪念"
      };
      var lunarFestival = {
        "d0101": "春节",
        "d0115": "元宵节",
        "d0202": "龙抬头节",
        "d0323": "妈祖生辰",
        "d0505": "端午节",
        "d0707": "七夕情人节",
        "d0715": "中元节",
        "d0815": "中秋节",
        "d0909": "重阳节",
        "d1015": "下元节",
        "d1208": "腊八节",
        "d1223": "小年",
        "d0100": "除夕"
      };
      var lunarInfo = [[2, 1, 21, 22184], [0, 2, 9, 21936], [6, 1, 30, 9656], [0, 2, 17, 9584], [0, 2, 6, 21168], [5, 1, 26, 43344], [0, 2, 13, 59728], [0, 2, 2, 27296], [3, 1, 22, 44368], [0, 2, 10, 43856], [8, 1, 30, 19304], [0, 2, 19, 19168], [0, 2, 8, 42352], [5, 1, 29, 21096], [0, 2, 16, 53856], [0, 2, 4, 55632], [4, 1, 25, 27304], [0, 2, 13, 22176], [0, 2, 2, 39632], [2, 1, 22, 19176], [0, 2, 10, 19168], [6, 1, 30, 42200], [0, 2, 18, 42192], [0, 2, 6, 53840], [5, 1, 26, 54568], [0, 2, 14, 46400], [0, 2, 3, 54944], [2, 1, 23, 38608], [0, 2, 11, 38320], [7, 2, 1, 18872], [0, 2, 20, 18800], [0, 2, 8, 42160], [5, 1, 28, 45656], [0, 2, 16, 27216], [0, 2, 5, 27968], [4, 1, 24, 44456], [0, 2, 13, 11104], [0, 2, 2, 38256], [2, 1, 23, 18808], [0, 2, 10, 18800], [6, 1, 30, 25776], [0, 2, 17, 54432], [0, 2, 6, 59984], [5, 1, 26, 27976], [0, 2, 14, 23248], [0, 2, 4, 11104], [3, 1, 24, 37744], [0, 2, 11, 37600], [7, 1, 31, 51560], [0, 2, 19, 51536], [0, 2, 8, 54432], [6, 1, 27, 55888], [0, 2, 15, 46416], [0, 2, 5, 22176], [4, 1, 25, 43736], [0, 2, 13, 9680], [0, 2, 2, 37584], [2, 1, 22, 51544], [0, 2, 10, 43344], [7, 1, 29, 46248], [0, 2, 17, 27808], [0, 2, 6, 46416], [5, 1, 27, 21928], [0, 2, 14, 19872], [0, 2, 3, 42416], [3, 1, 24, 21176], [0, 2, 12, 21168], [8, 1, 31, 43344], [0, 2, 18, 59728], [0, 2, 8, 27296], [6, 1, 28, 44368], [0, 2, 15, 43856], [0, 2, 5, 19296], [4, 1, 25, 42352], [0, 2, 13, 42352], [0, 2, 2, 21088], [3, 1, 21, 59696], [0, 2, 9, 55632], [7, 1, 30, 23208], [0, 2, 17, 22176], [0, 2, 6, 38608], [5, 1, 27, 19176], [0, 2, 15, 19152], [0, 2, 3, 42192], [4, 1, 23, 53864], [0, 2, 11, 53840], [8, 1, 31, 54568], [0, 2, 18, 46400], [0, 2, 7, 46752], [6, 1, 28, 38608], [0, 2, 16, 38320], [0, 2, 5, 18864], [4, 1, 25, 42168], [0, 2, 13, 42160], [10, 2, 2, 45656], [0, 2, 20, 27216], [0, 2, 9, 27968], [6, 1, 29, 44448], [0, 2, 17, 43872], [0, 2, 6, 38256], [5, 1, 27, 18808], [0, 2, 15, 18800], [0, 2, 4, 25776], [3, 1, 23, 27216], [0, 2, 10, 59984], [8, 1, 31, 27432], [0, 2, 19, 23232], [0, 2, 7, 43872], [5, 1, 28, 37736], [0, 2, 16, 37600], [0, 2, 5, 51552], [4, 1, 24, 54440], [0, 2, 12, 54432], [0, 2, 1, 55888], [2, 1, 22, 23208], [0, 2, 9, 22176], [7, 1, 29, 43736], [0, 2, 18, 9680], [0, 2, 7, 37584], [5, 1, 26, 51544], [0, 2, 14, 43344], [0, 2, 3, 46240], [4, 1, 23, 46416], [0, 2, 10, 44368], [9, 1, 31, 21928], [0, 2, 19, 19360], [0, 2, 8, 42416], [6, 1, 28, 21176], [0, 2, 16, 21168], [0, 2, 5, 43312], [4, 1, 25, 29864], [0, 2, 12, 27296], [0, 2, 1, 44368], [2, 1, 22, 19880], [0, 2, 10, 19296], [6, 1, 29, 42352], [0, 2, 17, 42208], [0, 2, 6, 53856], [5, 1, 26, 59696], [0, 2, 13, 54576], [0, 2, 3, 23200], [3, 1, 23, 27472], [0, 2, 11, 38608], [11, 1, 31, 19176], [0, 2, 19, 19152], [0, 2, 8, 42192], [6, 1, 28, 53848], [0, 2, 15, 53840], [0, 2, 4, 54560], [5, 1, 24, 55968], [0, 2, 12, 46496], [0, 2, 1, 22224], [2, 1, 22, 19160], [0, 2, 10, 18864], [7, 1, 30, 42168], [0, 2, 17, 42160], [0, 2, 6, 43600], [5, 1, 26, 46376], [0, 2, 14, 27936], [0, 2, 2, 44448], [3, 1, 23, 21936], [0, 2, 11, 37744], [8, 2, 1, 18808], [0, 2, 19, 18800], [0, 2, 8, 25776], [6, 1, 28, 27216], [0, 2, 15, 59984], [0, 2, 4, 27424], [4, 1, 24, 43872], [0, 2, 12, 43744], [0, 2, 2, 37600], [3, 1, 21, 51568], [0, 2, 9, 51552], [7, 1, 29, 54440], [0, 2, 17, 54432], [0, 2, 5, 55888], [5, 1, 26, 23208], [0, 2, 14, 22176], [0, 2, 3, 42704], [4, 1, 23, 21224], [0, 2, 11, 21200], [8, 1, 31, 43352], [0, 2, 19, 43344], [0, 2, 7, 46240], [6, 1, 27, 46416], [0, 2, 15, 44368], [0, 2, 5, 21920], [4, 1, 24, 42448], [0, 2, 12, 42416], [0, 2, 2, 21168], [3, 1, 22, 43320], [0, 2, 9, 26928], [7, 1, 29, 29336], [0, 2, 17, 27296], [0, 2, 6, 44368], [5, 1, 26, 19880], [0, 2, 14, 19296], [0, 2, 3, 42352], [4, 1, 24, 21104], [0, 2, 10, 53856], [8, 1, 30, 59696], [0, 2, 18, 54560], [0, 2, 7, 55968], [6, 1, 27, 27472], [0, 2, 15, 22224], [0, 2, 5, 19168], [4, 1, 25, 42216], [0, 2, 12, 42192], [0, 2, 1, 53584], [2, 1, 21, 55592], [0, 2, 9, 54560]];
      var termInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
      function getLunarLeapYear(year) {
        var yearData = lunarInfo[year - minYear];
        return yearData[0];
      }
      function getLunarYearDays(year) {
        var yearData = lunarInfo[year - minYear];
        var leapMonth = yearData[0];
        var monthData = yearData[3].toString(2);
        var monthDataArr = monthData.split("");
        for (var i = 0; i < 16 - monthDataArr.length; i++) {
          monthDataArr.unshift(0);
        }
        var len = leapMonth ? 13 : 12;
        var yearDays = 0;
        var monthDays = [];
        for (var i = 0; i < len; i++) {
          if (monthDataArr[i] == 0) {
            yearDays += 29;
            monthDays.push(29);
          } else {
            yearDays += 30;
            monthDays.push(30);
          }
        }
        return {
          yearDays,
          monthDays
        };
      }
      function getLunarDateByBetween(year, between) {
        var lunarYearDays = getLunarYearDays(year);
        var end = between > 0 ? between : lunarYearDays.yearDays - Math.abs(between);
        var monthDays = lunarYearDays.monthDays;
        var tempDays = 0;
        var month = 0;
        for (var i = 0; i < monthDays.length; i++) {
          tempDays += monthDays[i];
          if (tempDays > end) {
            month = i;
            tempDays = tempDays - monthDays[i];
            break;
          }
        }
        return [year, month, end - tempDays + 1];
      }
      function getLunarByBetween(year, month, day) {
        var yearData = lunarInfo[year - minYear];
        var zenMonth = yearData[1];
        var zenDay = yearData[2];
        var between = getDaysBetweenSolar(year, zenMonth - 1, zenDay, year, month, day);
        if (between == 0) {
          return [year, 0, 1];
        } else {
          var lunarYear = between > 0 ? year : year - 1;
          return getLunarDateByBetween(lunarYear, between);
        }
      }
      function getDaysBetweenSolar(year, month, day, year1, month1, day1) {
        var date = new Date(year, month, day).getTime();
        var date1 = new Date(year1, month1, day1).getTime();
        return (date1 - date) / 864e5;
      }
      function getDaysBetweenZheng(year, month, day) {
        var lunarYearDays = getLunarYearDays(year);
        var monthDays = lunarYearDays.monthDays;
        var days = 0;
        for (var i = 0; i < monthDays.length; i++) {
          if (i < month) {
            days += monthDays[i];
          } else {
            break;
          }
        }
        return days + day - 1;
      }
      function getTerm(y, n) {
        var offDate = new Date(315569259747e-1 * (y - 1890) + termInfo[n] * 6e4 + Date.UTC(1890, 0, 5, 16, 2, 31));
        return offDate.getUTCDate();
      }
      function getYearTerm(year) {
        var res = {};
        var month = 0;
        for (var i = 0; i < 24; i++) {
          var day = getTerm(year, i);
          if (i % 2 == 0)
            month++;
          res[formateDayD4(month - 1, day)] = DATA.solarTerm[i];
        }
        return res;
      }
      function getYearZodiac(year) {
        var num = year - 1890 + 25;
        return DATA.zodiac[num % 12];
      }
      function cyclical(num) {
        return DATA.heavenlyStems[num % 10] + DATA.earthlyBranches[num % 12];
      }
      function getLunarYearName(year, offset) {
        offset = offset || 0;
        return cyclical(year - 1890 + 25 + offset);
      }
      function getLunarMonthName(year, month, offset) {
        offset = offset || 0;
        return cyclical((year - 1890) * 12 + month + 12 + offset);
      }
      function getLunarDayName(year, month, day) {
        var dayCyclical = Date.UTC(year, month, day) / 864e5 + 29219 + 18;
        return cyclical(dayCyclical);
      }
      function getSolarMonthDays(year, month) {
        var monthDays = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return monthDays[month];
      }
      function isLeapYear(year) {
        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
      }
      function formateDate(year, month, day, _minYear) {
        var argsLen = arguments.length;
        var now = /* @__PURE__ */ new Date();
        year = argsLen ? parseInt(year, 10) : now.getFullYear();
        month = argsLen ? parseInt(month - 1, 10) : now.getMonth();
        day = argsLen ? parseInt(day, 10) || now.getDate() : now.getDate();
        if (year < (_minYear ? _minYear : minYear + 1) || year > maxYear)
          return { error: 100, msg: errorCode[100] };
        return {
          year,
          month,
          day
        };
      }
      function lunarToSolar(_year, _month, _day) {
        var inputDate = formateDate(_year, _month, _day);
        if (inputDate.error)
          return inputDate;
        var year = inputDate.year;
        var month = inputDate.month;
        var day = inputDate.day;
        var between = getDaysBetweenZheng(year, month, day);
        var yearData = lunarInfo[year - minYear];
        var zenMonth = yearData[1];
        var zenDay = yearData[2];
        var offDate = new Date(year, zenMonth - 1, zenDay).getTime() + between * 864e5;
        offDate = new Date(offDate);
        return {
          year: offDate.getFullYear(),
          month: offDate.getMonth() + 1,
          day: offDate.getDate()
        };
      }
      function solarToLunar(_year, _month, _day) {
        var inputDate = formateDate(_year, _month, _day, minYear);
        if (inputDate.error)
          return inputDate;
        var year = inputDate.year;
        var month = inputDate.month;
        var day = inputDate.day;
        cacheUtil.setCurrent(year);
        var term2 = cacheUtil.get("term2") ? cacheUtil.get("term2") : cacheUtil.set("term2", getTerm(year, 2));
        var termList = cacheUtil.get("termList") ? cacheUtil.get("termList") : cacheUtil.set("termList", getYearTerm(year));
        var firstTerm = getTerm(year, month * 2);
        var GanZhiYear = month > 1 || month == 1 && day >= term2 ? year + 1 : year;
        var GanZhiMonth = day >= firstTerm ? month + 1 : month;
        var lunarDate = getLunarByBetween(year, month, day);
        var lunarLeapMonth = getLunarLeapYear(lunarDate[0]);
        var lunarMonthName = "";
        if (lunarLeapMonth > 0 && lunarLeapMonth == lunarDate[1]) {
          lunarMonthName = "闰" + DATA.monthCn[lunarDate[1] - 1] + "月";
        } else if (lunarLeapMonth > 0 && lunarDate[1] > lunarLeapMonth) {
          lunarMonthName = DATA.monthCn[lunarDate[1] - 1] + "月";
        } else {
          lunarMonthName = DATA.monthCn[lunarDate[1]] + "月";
        }
        var lunarFtv = "";
        var lunarMonthDays = getLunarYearDays(lunarDate[0]).monthDays;
        if (lunarDate[1] == lunarMonthDays.length - 1 && lunarDate[2] == lunarMonthDays[lunarMonthDays.length - 1]) {
          lunarFtv = lunarFestival["d0100"];
        } else if (lunarLeapMonth > 0 && lunarDate[1] > lunarLeapMonth) {
          lunarFtv = lunarFestival[formateDayD4(lunarDate[1] - 1, lunarDate[2])];
        } else {
          lunarFtv = lunarFestival[formateDayD4(lunarDate[1], lunarDate[2])];
        }
        var res = {
          zodiac: getYearZodiac(GanZhiYear),
          GanZhiYear: getLunarYearName(GanZhiYear),
          GanZhiMonth: getLunarMonthName(year, GanZhiMonth),
          GanZhiDay: getLunarDayName(year, month, day),
          //放假安排：0无特殊安排，1工作，2放假
          worktime: worktime["y" + year] && worktime["y" + year][formateDayD4(month, day)] ? worktime["y" + year][formateDayD4(month, day)] : 0,
          term: termList[formateDayD4(month, day)],
          lunarYear: lunarDate[0],
          lunarMonth: lunarDate[1] + 1,
          lunarDay: lunarDate[2],
          lunarMonthName,
          lunarDayName: DATA.dateCn[lunarDate[2] - 1],
          lunarLeapMonth,
          solarFestival: solarFestival[formateDayD4(month, day)],
          lunarFestival: lunarFtv
        };
        return res;
      }
      function calendar(_year, _month, fill) {
        var inputDate = formateDate(_year, _month);
        if (inputDate.error)
          return inputDate;
        var year = inputDate.year;
        var month = inputDate.month;
        var calendarData = solarCalendar(year, month + 1, fill);
        for (var i = 0; i < calendarData.monthData.length; i++) {
          var cData = calendarData.monthData[i];
          var lunarData = solarToLunar(cData.year, cData.month, cData.day);
          extend(calendarData.monthData[i], lunarData);
        }
        return calendarData;
      }
      function solarCalendar(_year, _month, fill) {
        var inputDate = formateDate(_year, _month);
        if (inputDate.error)
          return inputDate;
        var year = inputDate.year;
        var month = inputDate.month;
        var firstDate = new Date(year, month, 1);
        var preMonthDays, preMonthData, nextMonthData;
        var res = {
          firstDay: firstDate.getDay(),
          //该月1号星期几
          monthDays: getSolarMonthDays(year, month),
          //该月天数
          monthData: []
        };
        res.monthData = creatLenArr(year, month + 1, res.monthDays, 1);
        if (fill) {
          if (res.firstDay > 0) {
            var preYear = month - 1 < 0 ? year - 1 : year;
            var preMonth = month - 1 < 0 ? 11 : month - 1;
            preMonthDays = getSolarMonthDays(preYear, preMonth);
            preMonthData = creatLenArr(preYear, preMonth + 1, res.firstDay, preMonthDays - res.firstDay + 1);
            res.monthData = preMonthData.concat(res.monthData);
          }
          if (7 * 6 - res.monthData.length != 0) {
            var nextYear = month + 1 > 11 ? year + 1 : year;
            var nextMonth = month + 1 > 11 ? 0 : month + 1;
            var fillLen = 7 * 6 - res.monthData.length;
            nextMonthData = creatLenArr(nextYear, nextMonth + 1, fillLen, 1);
            res.monthData = res.monthData.concat(nextMonthData);
          }
        }
        return res;
      }
      function setWorktime(workData) {
        extend(worktime, workData);
      }
      var LunarCalendar2 = {
        solarToLunar,
        lunarToSolar,
        calendar,
        solarCalendar,
        setWorktime,
        getSolarMonthDays
      };
      {
        module.exports = LunarCalendar2;
      }
    })();
  })(LunarCalendar$1);
  const LunarCalendar = LunarCalendarExports;
  const navTo = (url) => {
    formatAppLog("log", "at utils/utils.js:5", "url", url);
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
  function formatDate(date) {
    date = new Date(date);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  }
  function formatDateTime(date) {
    date = new Date(date);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    const formattedTime = date.toLocaleTimeString("en-US", { hour12: false });
    return `${formattedDate} ${formattedTime}`;
  }
  function formatDateToMonth(date) {
    date = new Date(date);
    const monthNames = [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ];
    return monthNames[date.getMonth()];
  }
  function formatDateToDay(date) {
    return ("0" + new Date(date).getDate()).slice(-2);
  }
  function formatDateToTime(date) {
    const hours = ("0" + new Date(date).getHours()).slice(-2);
    const minutes = ("0" + new Date(date).getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }
  function formatDateLunar(date) {
    date = new Date(date);
    const lunarDate = LunarCalendar.solarToLunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
    return `(${lunarDate.lunarMonthName}${lunarDate.lunarDayName})`;
  }
  const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    formatDate,
    formatDateLunar,
    formatDateTime,
    formatDateToDay,
    formatDateToMonth,
    formatDateToTime,
    getWeek,
    navTo,
    timestampToTime
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$x = {
    __name: "index",
    setup(__props2) {
      const list = vue.ref([
        {
          title: "备忘录",
          unicode: "icon-biaoqian",
          url: "/subPackages/memos/index/index",
          color: "#1baf59",
          desc: "记事本"
        },
        {
          title: "记账",
          unicode: "icon-jizhang",
          url: "/subPackages/expenses/index/index",
          color: "#7e7cea",
          desc: "本月：收入5000，支出3000，结余2000"
        },
        {
          title: "日记",
          unicode: "icon-rijix",
          url: "/subPackages/diary/index/index",
          color: "#4c8bf0",
          desc: "今天是个好日子，明天也是个好日子"
        },
        {
          title: "纪念日倒数",
          unicode: "icon-jinianriyingxiao",
          url: "/subPackages/countdowns/index/index",
          color: "#f75e3c",
          desc: "2024年2月24日，距离2024年3月1日还有5天"
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
          unicode: "icon-shui",
          url: "/subPackages/water/index/index",
          color: "#00b5ff",
          desc: "今日：0/1700ml"
        },
        {
          title: "小说",
          unicode: "icon-xuexi",
          url: "/subPackages/book/index/index",
          color: "#ce9178",
          desc: "已读：1章，未读：5章"
        },
        {
          title: "课程表",
          unicode: "icon-kechengbiao",
          url: "/pages/note/index",
          color: "#ff4962",
          desc: "小初高大学课程表"
        },
        {
          title: "习惯打卡",
          unicode: "icon-a-rilidaka",
          url: "/subPackages/test/NumericKeypad/index",
          color: "#7e7de8",
          desc: "习惯成自然"
        }
      ]);
      const linkTo = (url) => {
        if (url !== "/pages/note/index") {
          navTo(url);
        } else {
          uni.switchTab({
            url: "/pages/note/index"
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(list.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  onClick: ($event) => linkTo(item.url),
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
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "E:/HBuilderProjects/time-master/pages/index/index.vue"]]);
  const _imports_0 = "/static/head.png";
  const _sfc_main$w = {
    __name: "index",
    setup(__props2) {
      const userInfo = vue.ref(null);
      vue.onMounted(() => {
        userInfo.value = uni.getStorageSync("userInfo");
        formatAppLog("log", "at pages/mine/index.vue:46", "userInfo", userInfo.value);
        formatAppLog("log", "at pages/mine/index.vue:47", "userInfo", userInfo.value.Username);
      });
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
          url: "/subPackages/mine/setting/index"
        }
      ]);
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("view", { class: "head" }, [
                vue.createElementVNode("image", { src: _imports_0 })
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              userInfo.value ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "name"
                },
                vue.toDisplayString(userInfo.value.Username || userInfo.value.Phone || "昵称"),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true),
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
                  key: item.unicode,
                  onClick: ($event) => vue.unref(navTo)(item.url)
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
  const PagesMineIndex = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "E:/HBuilderProjects/time-master/pages/mine/index.vue"]]);
  const _sfc_main$v = {
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
      _onClick(index2) {
        if (this.currentIndex !== index2) {
          this.currentIndex = index2;
          this.$emit("clickItem", {
            currentIndex: index2
          });
        }
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
          vue.renderList($props.values, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass([[
                $props.styleType === "text" ? "" : "segmented-control__item--button",
                index2 === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
                index2 === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
                index2 === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
              ], "segmented-control__item"]),
              key: index2,
              style: vue.normalizeStyle({ backgroundColor: index2 === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index2 === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
              onClick: ($event) => $options._onClick(index2)
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  {
                    style: vue.normalizeStyle({ color: index2 === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
                    class: vue.normalizeClass(["segmented-control__text", $props.styleType === "text" && index2 === $data.currentIndex ? "segmented-control__item--text" : ""])
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
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$g], ["__scopeId", "data-v-86aa1171"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
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
      appTouchEnd(e, index2, item, position) {
        const {
          clientX
        } = e.changedTouches[0];
        let diff = Math.abs(this.clientX - clientX);
        let time = (/* @__PURE__ */ new Date()).getTime() - this.timestamp;
        if (diff < 40 && time < 300) {
          this.$emit("click", {
            content: item,
            index: index2,
            position
          });
        }
      },
      onClickForPC(index2, item, position) {
        return;
      }
    }
  };
  const mpwxs = mpMixins;
  let bindIngXMixins = {};
  let otherMixins = {};
  const block0$1 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxsswipe");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxsswipe"] = "afd46426";
  };
  const block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("renderswipe");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["renderswipe"] = "5a1e922e";
  };
  const _sfc_main$u = {
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
          this.swipeaction.children.forEach((item, index2) => {
            if (item === this) {
              this.swipeaction.children.splice(index2, 1);
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
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
                  vue.renderList($props.leftOptions, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index2,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args), ["stop"])),
                      onTouchend: vue.withModifiers(($event) => _ctx.appTouchEnd($event, index2, item, "left"), ["stop"]),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index2, item, "left"), ["stop"])
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
                  vue.renderList($props.rightOptions, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index2,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args), ["stop"])),
                      onTouchend: vue.withModifiers(($event) => _ctx.appTouchEnd($event, index2, item, "right"), ["stop"]),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index2, item, "right"), ["stop"])
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
  if (typeof block0$1 === "function")
    block0$1(_sfc_main$u);
  if (typeof block1 === "function")
    block1(_sfc_main$u);
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$f], ["__scopeId", "data-v-8ff2a577"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
  const _sfc_main$t = {
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
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$e], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue"]]);
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
        const index2 = Math.floor(i / 7);
        if (!weeks[index2]) {
          weeks[index2] = new Array(7);
        }
        weeks[index2][i % 7] = calendarDays[i];
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
  const _sfc_main$s = {
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
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
  const calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$d], ["__scopeId", "data-v-3c762a01"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar-item.vue"]]);
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
        tokens = parse$1(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse$1(format, [startDelimiter, endDelimiter]) {
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
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
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
      index2++;
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
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
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
  const { t: t$3 } = initVueI18n(i18nMessages);
  const _sfc_main$r = {
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
        return t$3("uni-datetime-picker.selectTime");
      },
      okText() {
        return t$3("uni-datetime-picker.ok");
      },
      clearText() {
        return t$3("uni-datetime-picker.clear");
      },
      cancelText() {
        return t$3("uni-datetime-picker.cancel");
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
                  vue.renderList($options.years, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index2
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
                  vue.renderList($options.months, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index2
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
                  vue.renderList($options.days, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index2
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
                  vue.renderList($options.hours, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index2
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
                  vue.renderList($options.minutes, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index2
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
                  vue.renderList($options.seconds, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "uni-datetime-picker-item",
                      key: index2
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
  const TimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$c], ["__scopeId", "data-v-1d532b70"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/time-picker.vue"]]);
  const { t: t$2 } = initVueI18n(i18nMessages);
  const _sfc_main$q = {
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
        return t$2("uni-datetime-picker.selectDate");
      },
      startDateText() {
        return this.startPlaceholder || t$2("uni-datetime-picker.startDate");
      },
      endDateText() {
        return this.endPlaceholder || t$2("uni-datetime-picker.endDate");
      },
      okText() {
        return t$2("uni-datetime-picker.ok");
      },
      yearText() {
        return t$2("uni-datetime-picker.year");
      },
      monthText() {
        return t$2("uni-datetime-picker.month");
      },
      MONText() {
        return t$2("uni-calender.MON");
      },
      TUEText() {
        return t$2("uni-calender.TUE");
      },
      WEDText() {
        return t$2("uni-calender.WED");
      },
      THUText() {
        return t$2("uni-calender.THU");
      },
      FRIText() {
        return t$2("uni-calender.FRI");
      },
      SATText() {
        return t$2("uni-calender.SAT");
      },
      SUNText() {
        return t$2("uni-calender.SUN");
      },
      confirmText() {
        return t$2("uni-calender.confirm");
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
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
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
  const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$b], ["__scopeId", "data-v-1d379219"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar.vue"]]);
  const _sfc_main$p = {
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
          windowWidth: windowWidth2
        } = uni.getSystemInfoSync();
        this.isPhone = windowWidth2 <= 500;
        this.windowWidth = windowWidth2;
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
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
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$a], ["__scopeId", "data-v-9802168a"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue"]]);
  class MPAnimation {
    constructor(options2, _this) {
      this.options = options2;
      this.animation = uni.createAnimation({
        ...options2
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config2 = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config2
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config: config2
        } = obj;
        this._animateRun(styles, config2).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config2 = {}) {
      this.animation.step(config2);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$o = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config2 = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config2);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$9], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$n = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth: windowWidth2,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth2;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:279", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$8], ["__scopeId", "data-v-4dd3c44b"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const BASE_URL = "http://192.168.0.104:3838/";
  uni.setStorageSync("BASE_URL", BASE_URL);
  const DEFAULT_HEADERS = {
    "Content-Type": "application/json"
  };
  const request = (options2) => {
    const requestOptions = {
      ...options2,
      url: `${BASE_URL}${options2.url}`,
      header: {
        ...DEFAULT_HEADERS,
        ...options2.header
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
  const apiGetUserTasks = (userID) => {
    return request({
      url: `tasks/list?userID=${userID}`,
      method: "GET"
    });
  };
  const apiAddTask = (task) => {
    return request({
      url: `tasks/add`,
      method: "POST",
      data: task
    });
  };
  const apiUpdateTask = (task) => {
    return request({
      url: `tasks/update`,
      method: "POST",
      data: task
    });
  };
  const _sfc_main$m = {
    __name: "index",
    setup(__props2) {
      vue.useCssVars((_ctx) => ({
        "fbfe11c7-popupBottom + 'px'": popupBottom.value + "px"
      }));
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      const popupBottom = vue.ref(0);
      let tasks = vue.ref([]);
      onShow(() => {
        getTasks();
        uni.onKeyboardHeightChange((res) => {
          formatAppLog("log", "at pages/note/index.vue:110", "键盘高度变化----", res.height);
          if (res.height === 0) {
            popupBottom.value = 0;
          } else {
            popupBottom.value = 100;
          }
        });
      });
      const getTasks = () => {
        apiGetUserTasks(getApp().globalData.userInfo.UserID).then((res) => {
          tasks.value = res.data;
          formatAppLog("log", "at pages/note/index.vue:122", "tasks", tasks);
        });
      };
      const current = vue.ref(0);
      const items = ["全部", "工作", "生活"];
      const styleType = "button";
      const activeColor = "#1baf59";
      const onClickItem = (e) => {
        current.value = e.currentIndex;
      };
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
      const bindClick = (e, note) => {
        if (e.index === 0) {
          updateTaskStatus(note, { Priority: 1 });
        } else if (e.index === 1) {
          updateTaskStatus(note, { Status: 3 });
        } else if (e.index === 2) {
          updateTaskStatus(note, { Status: 2 });
        }
      };
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
            currPlanList = handleData(tasks.value);
            break;
          case 1:
            currPlanList = handleData(tasks.value.filter((item) => {
              return item.Type === 0;
            }));
            break;
          case 2:
            currPlanList = handleData(tasks.value.filter((item) => {
              return item.Type === 1;
            }));
            break;
        }
        return currPlanList;
      });
      const handleData = (list) => {
        let cateList = modelCateList;
        let today = formatDate(/* @__PURE__ */ new Date());
        list.forEach((item) => {
          const date = new Date(formatDate(item.DueDate));
          const todayTime = new Date(today);
          const diff = date - todayTime;
          if (item.Priority === 1 && item.Status === 0) {
            cateList.value[0].plans.push(item);
          } else if (diff < 0 && item.Status === 0) {
            cateList.value[1].plans.push(item);
          } else if (diff === 0 && item.Status === 0) {
            cateList.value[2].plans.push(item);
          } else if (diff >= 1 * 24 * 60 * 60 * 1e3 && diff <= 2 * 24 * 60 * 60 * 1e3 && item.Status === 0) {
            cateList.value[3].plans.push(item);
          } else if (diff <= 7 * 24 * 60 * 60 * 1e3 && item.Status === 0) {
            cateList.value[4].plans.push(item);
          } else if (diff > 7 * 24 * 60 * 60 * 1e3 && item.Status === 0) {
            cateList.value[5].plans.push(item);
          } else if (item.Status === 1) {
            cateList.value[6].plans.push(item);
          } else if (item.Status === 3) {
            cateList.value[7].plans.push(item);
          }
        });
        formatAppLog("log", "at pages/note/index.vue:269", "cateList", cateList);
        return cateList.value;
      };
      const clearPlans = () => {
        modelCateList.value.forEach((item) => {
          item.plans = [];
        });
      };
      const planTitle = vue.ref("");
      const planDate = vue.ref(formatDateTime(/* @__PURE__ */ new Date()));
      formatAppLog("log", "at pages/note/index.vue:280", "planDate", planDate.value);
      let typeList = [
        {
          name: "工作",
          icon: "icon-gongzuo",
          color: "#76c681"
        },
        {
          name: "生活",
          icon: "icon-zhufang",
          color: "#13bceb"
        }
      ];
      const statusIcon = (status) => {
        switch (status) {
          case 0:
            return "icon-quan";
          case 1:
            return "icon-duigou";
          case 3:
            return "icon-cuo";
          default:
            return "icon-quan";
        }
      };
      const updateTaskStatus = (item, params = {}) => {
        const data2 = {
          TaskID: item.TaskID,
          ...params
        };
        apiUpdateTask(data2).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            Object.assign(item, params);
          }
        });
      };
      const updateStatus = (item) => {
        const newStatus = item.Status === 0 ? 1 : 0;
        updateTaskStatus(item, { Status: newStatus });
      };
      const popupRef = vue.ref(null);
      const selectedType = vue.ref(0);
      const isEdit = vue.ref(false);
      const addOrEdit = () => {
        if (isEdit.value) {
          updatePlan();
        } else {
          addPlan();
        }
      };
      const openAddPopup = () => {
        isEdit.value = false;
        popupRef.value.open("bottom");
        planTitle.value = "";
        planDate.value = formatDateTime(/* @__PURE__ */ new Date());
      };
      const addPlan = () => {
        let plan = {
          UserId: getApp().globalData.userInfo.UserID,
          Title: planTitle.value,
          DueDate: planDate.value,
          Type: selectedType.value
        };
        let errMsg = "";
        if (!plan.Title) {
          errMsg = "请填写计划标题";
        } else if (!plan.DueDate) {
          errMsg = "请选择计划日期";
        }
        if (errMsg) {
          uni.showToast({
            icon: "error",
            title: errMsg
          });
          return;
        }
        formatAppLog("log", "at pages/note/index.vue:370", "plan", plan);
        apiAddTask(plan).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            getTasks();
            popupRef.value.close();
          }
        });
      };
      const editTask = (item) => {
        isEdit.value = true;
        editTaskID.value = item.TaskID;
        planTitle.value = item.Title;
        planDate.value = item.DueDate;
        selectedType.value = item.Type;
        popupRef.value.open("bottom");
      };
      const editTaskID = vue.ref(0);
      const updatePlan = () => {
        let plan = {
          TaskID: editTaskID.value,
          Title: planTitle.value,
          DueDate: formatDateTime(new Date(planDate.value)),
          Type: selectedType.value
        };
        let errMsg = "";
        if (!plan.Title) {
          errMsg = "请填写计划标题";
        } else if (!plan.DueDate) {
          errMsg = "请选择计划日期";
        }
        if (errMsg) {
          uni.showToast({
            icon: "error",
            title: errMsg
          });
          return;
        }
        apiUpdateTask(plan).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            getTasks();
            popupRef.value.close();
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_0$1);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_swipe_action_item = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action-item"), __easycom_2$2);
        const _component_uni_swipe_action = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action"), __easycom_3);
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_1$1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
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
                    vue.renderList(vue.unref(newPlanList), (item, index2) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          class: vue.normalizeClass(["plan-item", index2 === 0 ? "first" : ""]),
                          key: index2
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
                                      key: item1.TaskID
                                    }, [
                                      vue.createVNode(
                                        _component_uni_swipe_action,
                                        null,
                                        {
                                          default: vue.withCtx(() => [
                                            vue.createVNode(_component_uni_swipe_action_item, {
                                              "right-options": options2.value,
                                              onClick: ($event) => bindClick($event, item1)
                                            }, {
                                              default: vue.withCtx(() => [
                                                vue.createElementVNode("view", { class: "content-box" }, [
                                                  vue.createElementVNode("view", {
                                                    class: "box-left",
                                                    onClick: ($event) => updateStatus(item1)
                                                  }, [
                                                    vue.createVNode(_component_uni_icons, {
                                                      "custom-prefix": "iconfont",
                                                      type: statusIcon(item1.Status),
                                                      size: "20",
                                                      color: "#4c8bf0"
                                                    }, null, 8, ["type"])
                                                  ], 8, ["onClick"]),
                                                  vue.createElementVNode("view", {
                                                    class: "box-right",
                                                    onClick: ($event) => editTask(item1)
                                                  }, [
                                                    vue.createElementVNode("view", { class: "plan-title" }, [
                                                      vue.createElementVNode(
                                                        "text",
                                                        { class: "title" },
                                                        vue.toDisplayString(item1.Title),
                                                        1
                                                        /* TEXT */
                                                      )
                                                    ]),
                                                    vue.createElementVNode("view", { class: "plan-desc" }, [
                                                      vue.createElementVNode(
                                                        "text",
                                                        { class: "desc" },
                                                        vue.toDisplayString(vue.unref(formatDateTime)(item1.DueDate)),
                                                        1
                                                        /* TEXT */
                                                      )
                                                    ])
                                                  ], 8, ["onClick"])
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
              vue.createElementVNode("button", {
                class: "win-service",
                onClick: openAddPopup
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ]),
          vue.createCommentVNode(" 添加弹窗 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "popupRef",
              ref: popupRef,
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "popup-content" }, [
                  vue.createElementVNode("view", { class: "input-box" }, [
                    vue.withDirectives(vue.createElementVNode(
                      "input",
                      {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => planTitle.value = $event),
                        placeholder: "把事情记录下来吧~"
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vModelText, planTitle.value]
                    ]),
                    vue.createElementVNode("view", { class: "btn" }, [
                      vue.createVNode(_component_uni_icons, {
                        "custom-prefix": "iconfont",
                        type: "icon-send",
                        size: "30",
                        color: "#4c8bf0",
                        onClick: addOrEdit
                      })
                    ])
                  ]),
                  vue.createCommentVNode(" 属性 "),
                  vue.createElementVNode("view", { class: "attr" }, [
                    vue.createElementVNode("view", { class: "date" }, [
                      vue.createVNode(_component_uni_datetime_picker, {
                        class: "no-border",
                        type: "datetime",
                        modelValue: planDate.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => planDate.value = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("view", { class: "type-list" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(vue.unref(typeList), (item, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "type-box",
                            style: vue.normalizeStyle({ border: selectedType.value === index2 ? "5rpx solid " + item.color : "none" }),
                            key: index2,
                            onClick: ($event) => selectedType.value = index2
                          }, [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "type",
                                style: vue.normalizeStyle({ backgroundColor: item.color })
                              },
                              [
                                vue.createVNode(_component_uni_icons, {
                                  "custom-prefix": "iconfont",
                                  type: item.icon,
                                  size: "20",
                                  color: "#fff"
                                }, null, 8, ["type"])
                              ],
                              4
                              /* STYLE */
                            )
                          ], 12, ["onClick"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesNoteIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "E:/HBuilderProjects/time-master/pages/note/index.vue"]]);
  const _sfc_main$l = {
    __name: "index",
    setup(__props2) {
      vue.useCssVars((_ctx) => ({
        "d8d50c43-popupBottom + 'px'": popupBottom.value + "px"
      }));
      const previewDays = 31;
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      const todayX = vue.ref("600rpx");
      const todayY = vue.ref("850rpx");
      let tasks = vue.ref([]);
      const getTasks = () => {
        return new Promise((resolve, reject) => {
          apiGetUserTasks(getApp().globalData.userInfo.UserID).then((res) => {
            tasks.value = res.data;
            formatAppLog("log", "at pages/plan/index.vue:98", "tasks", tasks.value);
            filterPlans(previewDays, tasks, dayPlan);
            resolve();
          }).catch((error) => {
            reject(error);
          });
        });
      };
      const popupBottom = vue.ref(0);
      onShow(async () => {
        await getTasks();
        uni.onKeyboardHeightChange((res) => {
          formatAppLog("log", "at pages/plan/index.vue:112", "键盘高度变化----", res.height);
          if (res.height === 0) {
            popupBottom.value = 0;
          } else {
            popupBottom.value = 100;
          }
        });
      });
      const currDate = vue.ref(timestampToTime((/* @__PURE__ */ new Date()).getTime()));
      const currWeek = vue.ref(getWeek((/* @__PURE__ */ new Date()).getTime()));
      const initializeDayPlanArray = (days) => {
        const dayPlanArray = Array(days).fill().map((_, index2) => {
          const currentDate = /* @__PURE__ */ new Date();
          currentDate.setDate(currentDate.getDate() - (Math.floor(days / 2) - index2));
          return { date: currentDate.toISOString().split("T")[0], plans: [] };
        });
        return dayPlanArray;
      };
      const dayPlan = vue.ref(initializeDayPlanArray(previewDays));
      const filterPlans = (days, tasks2, dayPlan2) => {
        dayPlan2.value = initializeDayPlanArray(days);
        tasks2.value.forEach((task) => {
          const taskDate = new Date(formatDate(task.DueDate));
          const firstDate = new Date(formatDate(dayPlan2.value[0].date));
          const diffTime = Math.abs(firstDate - taskDate);
          const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
          if (diffDays <= days) {
            const index2 = diffDays;
            dayPlan2.value[index2].plans.push(task);
          }
        });
      };
      const todayIndex = Math.ceil(previewDays / 2 - 1);
      let currentIndex = vue.ref(todayIndex);
      const swiperChange = (e) => {
        currDate.value = timestampToTime(dayPlan.value[e.detail.current].date);
        currWeek.value = getWeek(dayPlan.value[e.detail.current].date);
        planDate.value = currDate.value;
        currentIndex.value = e.detail.current;
      };
      const planTitle = vue.ref("");
      const planDate = vue.ref(formatDateTime(currDate.value));
      let typeList = [
        {
          name: "工作",
          icon: "icon-gongzuo",
          color: "#76c681"
        },
        {
          name: "生活",
          icon: "icon-zhufang",
          color: "#13bceb"
        }
      ];
      const statusIcon = (status) => {
        switch (status) {
          case 0:
            return "icon-quan";
          case 1:
            return "icon-duigou";
          case 3:
            return "icon-cuo";
          default:
            return "icon-quan";
        }
      };
      const updateTaskStatus = (item, newStatus) => {
        apiUpdateTask({
          TaskID: item.TaskID,
          Status: newStatus
        }).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            item.Status = newStatus;
          }
        });
      };
      const updateStatus = (item) => {
        const newStatus = item.Status === 0 ? 1 : 0;
        updateTaskStatus(item, newStatus);
      };
      const selectedType = vue.ref(0);
      const popupRef = vue.ref(null);
      const isEdit = vue.ref(false);
      const addOrEdit = () => {
        if (isEdit.value) {
          updatePlan();
        } else {
          addPlan();
        }
      };
      const openAddPopup = () => {
        isEdit.value = false;
        popupRef.value.open("bottom");
        planTitle.value = "";
        planDate.value = formatDateTime(/* @__PURE__ */ new Date());
      };
      const addPlan = () => {
        let plan = {
          UserId: getApp().globalData.userInfo.UserID,
          Title: planTitle.value,
          DueDate: planDate.value,
          Type: selectedType.value
        };
        let errMsg = "";
        if (!plan.Title) {
          errMsg = "请填写计划标题";
        } else if (!plan.DueDate) {
          errMsg = "请选择计划日期";
        }
        if (errMsg) {
          uni.showToast({
            icon: "error",
            title: errMsg
          });
          return;
        }
        formatAppLog("log", "at pages/plan/index.vue:251", "plan", plan);
        apiAddTask(plan).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            getTasks();
            popupRef.value.close();
          }
        });
      };
      const editTask = (item) => {
        isEdit.value = true;
        editTaskID.value = item.TaskID;
        planTitle.value = item.Title;
        planDate.value = item.DueDate;
        selectedType.value = item.Type;
        popupRef.value.open("bottom");
      };
      const editTaskID = vue.ref(0);
      const updatePlan = () => {
        let plan = {
          TaskID: editTaskID.value,
          Title: planTitle.value,
          DueDate: formatDateTime(new Date(planDate.value)),
          Type: selectedType.value
        };
        let errMsg = "";
        if (!plan.Title) {
          errMsg = "请填写计划标题";
        } else if (!plan.DueDate) {
          errMsg = "请选择计划日期";
        }
        if (errMsg) {
          uni.showToast({
            icon: "error",
            title: errMsg
          });
          return;
        }
        apiUpdateTask(plan).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            getTasks();
            popupRef.value.close();
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_1$1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
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
                vue.renderList(dayPlan.value, (item) => {
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
                            key: item1.TaskID
                          }, [
                            vue.createElementVNode("view", {
                              class: "box-left",
                              onClick: ($event) => updateStatus(item1)
                            }, [
                              vue.createVNode(_component_uni_icons, {
                                "custom-prefix": "iconfont",
                                type: statusIcon(item1.Status),
                                size: "20",
                                color: "#4c8bf0"
                              }, null, 8, ["type"])
                            ], 8, ["onClick"]),
                            vue.createElementVNode("view", {
                              class: "box-right",
                              onClick: ($event) => editTask(item1)
                            }, [
                              vue.createElementVNode("view", { class: "plan-title" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "title" },
                                  vue.toDisplayString(item1.Title),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              vue.createElementVNode("view", { class: "plan-desc" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "desc" },
                                  vue.toDisplayString(vue.unref(formatDateTime)(item1.DueDate)),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ], 8, ["onClick"])
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
              vue.createElementVNode("button", {
                class: "win-service",
                onClick: openAddPopup
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ]),
          vue.createCommentVNode(" 今天小浮窗 "),
          vue.createElementVNode("movable-area", { class: "movableArea" }, [
            vue.createElementVNode("movable-view", {
              class: "movableView",
              direction: "all",
              x: todayX.value,
              y: todayY.value,
              "out-of-bounds": false
            }, [
              vue.createElementVNode("button", {
                class: "win-service",
                onClick: _cache[0] || (_cache[0] = ($event) => vue.isRef(currentIndex) ? currentIndex.value = vue.unref(todayIndex) : currentIndex = vue.unref(todayIndex))
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "today-icon",
                  "custom-prefix": "iconfont",
                  type: "icon-jinri",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ]),
          vue.createCommentVNode(" 添加弹窗 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "popupRef",
              ref: popupRef,
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "popup-content" }, [
                  vue.createElementVNode("view", { class: "input-box" }, [
                    vue.withDirectives(vue.createElementVNode(
                      "input",
                      {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => planTitle.value = $event),
                        placeholder: "把事情记录下来吧~"
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vModelText, planTitle.value]
                    ]),
                    vue.createElementVNode("view", { class: "btn" }, [
                      vue.createVNode(_component_uni_icons, {
                        "custom-prefix": "iconfont",
                        type: "icon-send",
                        size: "30",
                        color: "#4c8bf0",
                        onClick: addOrEdit
                      })
                    ])
                  ]),
                  vue.createCommentVNode(" 属性 "),
                  vue.createElementVNode("view", { class: "attr" }, [
                    vue.createElementVNode("view", { class: "date" }, [
                      vue.createVNode(_component_uni_datetime_picker, {
                        class: "no-border",
                        type: "datetime",
                        modelValue: planDate.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => planDate.value = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    vue.createElementVNode("view", { class: "type-list" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(vue.unref(typeList), (item, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "type-box",
                            style: vue.normalizeStyle({ border: selectedType.value === index2 ? "5rpx solid " + item.color : "none" }),
                            key: index2,
                            onClick: ($event) => selectedType.value = index2
                          }, [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "type",
                                style: vue.normalizeStyle({ backgroundColor: item.color })
                              },
                              [
                                vue.createVNode(_component_uni_icons, {
                                  "custom-prefix": "iconfont",
                                  type: item.icon,
                                  size: "20",
                                  color: "#fff"
                                }, null, 8, ["type"])
                              ],
                              4
                              /* STYLE */
                            )
                          ], 12, ["onClick"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesPlanIndex = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "E:/HBuilderProjects/time-master/pages/plan/index.vue"]]);
  const apiLogin = (credentials) => {
    return request({
      url: `users/login`,
      method: "POST",
      data: credentials
    });
  };
  const apiRegister = (userData) => {
    return request({
      url: `users/reguster`,
      method: "POST",
      data: userData
    });
  };
  const _sfc_main$k = {
    __name: "index",
    setup(__props2) {
      const isRegister = vue.ref(false);
      const phone = vue.ref("");
      const password = vue.ref("");
      const passwordType = vue.ref("password");
      const switchPasswordType = () => {
        passwordType.value = passwordType.value === "password" ? "text" : "password";
      };
      const isValidLoginParams = (params) => {
        let errorMessage = "";
        if (!params.Phone) {
          errorMessage = "请输入手机号";
        } else if (!params.Password) {
          errorMessage = "请输入密码";
        } else if (!/^1[3-9]\d{9}$/.test(params.Phone)) {
          errorMessage = "手机号格式错误";
        } else if (!/^[0-9A-Za-z]{6,18}$/.test(params.Password)) {
          errorMessage = "密码至少6到18位的数字或字母";
        }
        return {
          isValid: !errorMessage,
          errorMessage
        };
      };
      const login = () => {
        const params = {
          Phone: phone.value,
          Password: password.value
        };
        const result = isValidLoginParams(params);
        if (!result.isValid) {
          uni.showToast({
            icon: "error",
            title: result.errorMessage
          });
          return;
        }
        apiLogin(params).then((res) => {
          formatAppLog("log", "at subPackages/login/index/index.vue:122", "res", res);
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            formatAppLog("log", "at subPackages/login/index/index.vue:129", "res", res);
            uni.setStorageSync("userInfo", res.data);
            getApp().globalData.userInfo = res.data;
            uni.setStorageSync("token", res.data.token);
            uni.switchTab({ url: "/pages/index/index" });
          }
        }).catch((err) => {
          formatAppLog("log", "at subPackages/login/index/index.vue:136", "err", err);
        });
      };
      const newPassword = vue.ref("");
      const newPasswordType = vue.ref("password");
      const switchNewPasswordType = () => {
        newPasswordType.value = newPasswordType.value === "password" ? "text" : "password";
      };
      const confirmPassword = vue.ref("");
      const confirmPasswordType = vue.ref("password");
      const switchConfirmPasswordType = () => {
        confirmPasswordType.value = confirmPasswordType.value === "password" ? "text" : "password";
      };
      const isValid = (obj) => {
        let errorMessage = "";
        if (!obj.phone) {
          errorMessage = "请输入手机号";
        } else if (!obj.newPassword) {
          errorMessage = "请输入密码";
        } else if (!obj.confirmPassword) {
          errorMessage = "请再次输入密码";
        } else if (obj.newPassword !== obj.confirmPassword) {
          errorMessage = "两次密码不一致";
        } else if (!/^1[3-9]\d{9}$/.test(obj.phone)) {
          errorMessage = "手机号格式错误";
        } else if (!/^[0-9A-Za-z]{6,18}$/.test(obj.newPassword) || !/^[0-9A-Za-z]{6,18}$/.test(obj.confirmPassword)) {
          errorMessage = "密码至少6到18位的数字或字母";
        }
        return {
          isValid: !errorMessage,
          errorMessage
        };
      };
      const register = () => {
        const obj = {
          phone: phone.value,
          newPassword: newPassword.value,
          confirmPassword: confirmPassword.value
        };
        const result = isValid(obj);
        if (!result.isValid) {
          uni.showToast({
            icon: "error",
            title: result.errorMessage
          });
          return;
        }
        apiRegister({ Phone: obj.phone, Password: obj.newPassword }).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              icon: "none",
              title: res.msg
            });
            isRegister.value = false;
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          !isRegister.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            id: "login"
          }, [
            vue.createElementVNode("view", { class: "top" }, [
              vue.createElementVNode("view", { class: "welcome" }, " Welcome "),
              vue.createElementVNode("view", { class: "tip" }, " 欢迎使用时间管家 ")
            ]),
            vue.createElementVNode("view", { class: "middle" }, [
              vue.createElementVNode("view", { class: "input-box" }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    class: "input",
                    type: "text",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => phone.value = $event),
                    "placeholder-style": "color:#ccc",
                    placeholder: "请输入手机号"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, phone.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "input-box" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "input",
                  type: passwordType.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
                  "placeholder-style": "color:#ccc",
                  placeholder: "请输入密码"
                }, null, 8, ["type"]), [
                  [vue.vModelDynamic, password.value]
                ]),
                vue.createElementVNode("view", {
                  class: "icon",
                  onClick: switchPasswordType
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: passwordType.value === "password" ? "eye-slash-filled" : "eye-filled",
                    size: "24",
                    color: "#fff"
                  }, null, 8, ["type"])
                ])
              ]),
              vue.createElementVNode("view", { class: "register" }, [
                vue.createElementVNode("view", {
                  class: "register-text",
                  onClick: _cache[2] || (_cache[2] = ($event) => isRegister.value = true)
                }, " 注册 ")
              ]),
              vue.createElementVNode("view", { class: "login" }, [
                vue.createElementVNode("view", {
                  class: "login-btn",
                  onClick: _cache[3] || (_cache[3] = ($event) => login())
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "arrow-right",
                    size: "40",
                    color: "#fff"
                  })
                ])
              ])
            ])
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            id: "register"
          }, [
            vue.createElementVNode("view", {
              class: "back",
              onClick: _cache[5] || (_cache[5] = ($event) => isRegister.value = false)
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "arrow-left",
                size: "30",
                color: "#fff",
                onClick: _cache[4] || (_cache[4] = ($event) => isRegister.value = false)
              })
            ]),
            vue.createElementVNode("view", { class: "top" }, [
              vue.createElementVNode("view", { class: "title" }, " 填写注册信息 ")
            ]),
            vue.createElementVNode("view", { class: "middle" }, [
              vue.createElementVNode("view", { class: "input-box" }, [
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    class: "input",
                    type: "text",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => phone.value = $event),
                    "placeholder-style": "color:#ccc",
                    placeholder: "请输入手机号"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vModelText, phone.value]
                ])
              ]),
              vue.createElementVNode("view", { class: "input-box" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "input",
                  type: newPasswordType.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => newPassword.value = $event),
                  "placeholder-style": "color:#ccc",
                  placeholder: "请输入密码"
                }, null, 8, ["type"]), [
                  [vue.vModelDynamic, newPassword.value]
                ]),
                vue.createElementVNode("view", {
                  class: "icon",
                  onClick: switchNewPasswordType
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: newPasswordType.value === "password" ? "eye-slash-filled" : "eye-filled",
                    size: "24",
                    color: "#fff"
                  }, null, 8, ["type"])
                ])
              ]),
              vue.createElementVNode("view", { class: "input-box" }, [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "input",
                  type: confirmPasswordType.value,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => confirmPassword.value = $event),
                  "placeholder-style": "color:#ccc",
                  placeholder: "请再次输入密码"
                }, null, 8, ["type"]), [
                  [vue.vModelDynamic, confirmPassword.value]
                ]),
                vue.createElementVNode("view", {
                  class: "icon",
                  onClick: switchConfirmPasswordType
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: confirmPasswordType.value === "password" ? "eye-slash-filled" : "eye-filled",
                    size: "24",
                    color: "#fff"
                  }, null, 8, ["type"])
                ])
              ]),
              vue.createElementVNode("view", { class: "register" }, [
                vue.createElementVNode("view", {
                  class: "register-btn",
                  onClick: _cache[9] || (_cache[9] = ($event) => register())
                }, " 注册 ")
              ])
            ])
          ]))
        ]);
      };
    }
  };
  const SubPackagesLoginIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-680a29cd"], ["__file", "E:/HBuilderProjects/time-master/subPackages/login/index/index.vue"]]);
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
  const apiGetAllExpensesCategory = () => {
    return request({
      url: `expenses/allCate`,
      method: "GET"
    });
  };
  const _sfc_main$j = {
    __name: "index",
    setup(__props2) {
      vue.useCssVars((_ctx) => ({
        "90b61557-themeColor": themeColor.value
      }));
      const themeColor = vue.ref("#1baf59");
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      onLoad(() => {
        getExpenseCate2();
        formatAppLog("log", "at subPackages/expenses/index/index.vue:118", "getApp().globalData.userInfo", getApp().globalData.userInfo);
      });
      onShow(() => {
        getExpenses();
      });
      let expenseCateList2 = vue.ref([]);
      const getExpenseCate2 = () => {
        apiGetAllExpensesCategory().then((res) => {
          expenseCateList2.value = res.data;
          formatAppLog("log", "at subPackages/expenses/index/index.vue:127", "expenseCateList------", expenseCateList2.value);
        });
      };
      let accountList = vue.ref([]);
      const getExpenses = () => {
        apiGetUserExpenses(getApp().globalData.userInfo.UserID).then((res) => {
          accountList.value = res.data;
          formatAppLog("log", "at subPackages/expenses/index/index.vue:135", "accountList-------", accountList.value);
        });
      };
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
      function formatDate2(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric"
        });
      }
      const groupedExpenses = vue.computed(() => {
        const grouped = {};
        accountList.value.forEach((expense) => {
          const dateKey = formatDate2(expense.Date);
          if (!grouped[dateKey]) {
            grouped[dateKey] = [];
          }
          grouped[dateKey].push(expense);
        });
        formatAppLog("log", "at subPackages/expenses/index/index.vue:170", "grouped", grouped);
        return grouped;
      });
      const getCategoryInfo = (expense) => {
        let cate = expenseCateList2.value.find((cate2) => {
          if (cate2.CategoryID == expense.Category) {
            return cate2;
          }
        });
        formatAppLog("log", "at subPackages/expenses/index/index.vue:181", "cate", cate);
        return cate;
      };
      const addExpense2 = () => {
        uni.navigateTo({
          url: "/subPackages/expenses/add/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "fixed-box" }, [
            vue.createElementVNode("view", { class: "top" }, [
              vue.createElementVNode("view", { class: "date" }, [
                vue.createElementVNode("view", { class: "top-title" }, "2024年"),
                vue.createElementVNode("view", { class: "month" }, "3月")
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
              vue.renderList(vue.unref(groupedExpenses), (expenses, date, index2) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: vue.normalizeClass(["account-item", index2 === 0 ? "first" : ""]),
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
                                  style: vue.normalizeStyle({ backgroundColor: getCategoryInfo(expense).CategoryColor })
                                },
                                [
                                  vue.createVNode(_component_uni_icons, {
                                    "custom-prefix": "iconfont",
                                    type: getCategoryInfo(expense).CategoryIcon,
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
                                    vue.toDisplayString(getCategoryInfo(expense).CategoryName),
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
  const SubPackagesExpensesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "E:/HBuilderProjects/time-master/subPackages/expenses/index/index.vue"]]);
  const _sfc_main$i = {
    __name: "index",
    setup(__props) {
      onLoad(() => {
        getExpenseCate();
      });
      let expenseCateList = vue.ref([]);
      const getExpenseCate = () => {
        apiGetAllExpensesCategory().then((res) => {
          expenseCateList.value = res.data;
          formatAppLog("log", "at subPackages/expenses/add/index.vue:72", "expenseCateList", expenseCateList.value);
        });
      };
      const incomeCate = vue.computed(() => {
        return expenseCateList.value.filter((cate) => {
          return cate.CategoryType === 1;
        });
      });
      const expenseCate = vue.computed(() => {
        return expenseCateList.value.filter((cate) => {
          return cate.CategoryType === 2;
        });
      });
      const tabs = ["支出", "收入", "转账"];
      const activeTab = vue.ref(0);
      const selectTab = (index2) => {
        activeTab.value = index2;
      };
      const selectedExpenseCateID = vue.ref(1);
      const selectedIncomeCateID = vue.ref(1);
      const selectCate = (cateID) => {
        if (activeTab.value === 0) {
          selectedExpenseCateID.value = cateID;
        } else {
          selectedIncomeCateID.value = cateID;
        }
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
      const dateValue = vue.ref(formatDateTime(/* @__PURE__ */ new Date()));
      const selectDate = (e) => {
        formatAppLog("log", "at subPackages/expenses/add/index.vue:138", "选择日期", e);
      };
      const addExpense = async () => {
        let Amount = activeTab.value === 0 ? -inputValue.value : inputValue.value;
        let Category = activeTab.value === 0 ? selectedExpenseCateID.value : selectedIncomeCateID.value;
        let expense = {
          UserID: getApp().globalData.userInfo.UserID,
          Amount,
          Category,
          Date: dateValue.value,
          Note: noteValue.value
        };
        let errMsg = "";
        if (!expense.Amount) {
          errMsg = "请输入金额";
        } else if (!expense.Date) {
          errMsg = "请选择日期";
        }
        if (errMsg) {
          uni.showToast({
            icon: "error",
            title: errMsg
          });
          return;
        }
        formatAppLog("log", "at subPackages/expenses/add/index.vue:164", "expense", expense);
        let res = await apiAddExpense(expense);
        if (res.code === 0) {
          uni.showToast({
            title: res.msg
          });
        } else {
          uni.showToast({
            title: res.msg
          });
        }
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createCommentVNode(" tabbar选择栏 "),
          vue.createElementVNode("view", { class: "tabbar" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(tabs, (tab, index2) => {
                return vue.createElementVNode("view", {
                  class: vue.normalizeClass(["tab", { "active": activeTab.value === index2 }]),
                  key: index2,
                  onClick: ($event) => selectTab(index2)
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
              vue.renderList(vue.unref(incomeCate), (cate, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "select-item",
                  key: index2,
                  onClick: ($event) => selectCate(cate.CategoryID)
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "icon",
                      style: vue.normalizeStyle({ border: selectedExpenseCateID.value === cate.CategoryID ? `5rpx solid ${cate.CategoryColor}` : "none" })
                    },
                    [
                      vue.createElementVNode(
                        "view",
                        {
                          class: "padding",
                          style: vue.normalizeStyle({ backgroundColor: cate.CategoryColor })
                        },
                        [
                          vue.createVNode(_component_uni_icons, {
                            "custom-prefix": "iconfont",
                            type: cate.CategoryIcon,
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
                    vue.toDisplayString(cate.CategoryName),
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
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(expenseCate), (cate, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "select-item",
                  key: index2,
                  onClick: ($event) => selectCate(cate.CategoryID)
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "icon",
                      style: vue.normalizeStyle({ border: selectedIncomeCateID.value === cate.CategoryID ? `5rpx solid ${cate.CategoryColor}` : "none" })
                    },
                    [
                      vue.createElementVNode(
                        "view",
                        {
                          class: "padding",
                          style: vue.normalizeStyle({ backgroundColor: cate.CategoryColor })
                        },
                        [
                          vue.createVNode(_component_uni_icons, {
                            "custom-prefix": "iconfont",
                            type: cate.CategoryIcon,
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
                    vue.toDisplayString(cate.CategoryName),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true),
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
  const SubPackagesExpensesAddIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "E:/HBuilderProjects/time-master/subPackages/expenses/add/index.vue"]]);
  const _sfc_main$h = {
    __name: "index",
    setup(__props2) {
      const handleLogout = () => {
        uni.removeStorageSync("token");
        uni.removeStorageSync("userInfo");
        uni.reLaunch({
          url: "/subPackages/login/index/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: handleLogout
          }, "退出登录")
        ]);
      };
    }
  };
  const SubPackagesMineSettingIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-db9de88e"], ["__file", "E:/HBuilderProjects/time-master/subPackages/mine/setting/index.vue"]]);
  const apiGetUserMemos = (userID) => {
    return request({
      url: `memos/list?userID=${userID}`,
      method: "GET"
    });
  };
  const apiAddMemo = (memo) => {
    return request({
      url: `memos/add`,
      method: "POST",
      data: memo
    });
  };
  const apiUpdateMemo = (memo) => {
    return request({
      url: `memos/update`,
      method: "POST",
      data: memo
    });
  };
  const apiDeleteMemo = (memoID) => {
    return request({
      url: `memos/delete?MemoID=${memoID}`,
      method: "GET"
    });
  };
  const _sfc_main$g = {
    __name: "index",
    setup(__props2) {
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      let memos = vue.ref([]);
      onShow(() => {
        getMemos();
      });
      const getMemos = () => {
        apiGetUserMemos(getApp().globalData.userInfo.UserID).then((res) => {
          memos.value = res.data;
          formatAppLog("log", "at subPackages/memos/index/index.vue:70", "memos", memos);
        });
      };
      const current = vue.ref(0);
      const items = ["全部", "工作", "生活"];
      const styleType = "button";
      const activeColor = "#1baf59";
      const onClickItem = (e) => {
        current.value = e.currentIndex;
      };
      let newPlanList = vue.computed(() => {
        let currPlanList = [];
        switch (current.value) {
          case 0:
            currPlanList = memos.value;
            break;
          case 1:
            currPlanList = memos.value.filter((item) => {
              return item.Type === 0;
            });
            break;
          case 2:
            currPlanList = memos.value.filter((item) => {
              return item.Type === 1;
            });
            break;
        }
        return currPlanList;
      });
      const editMemo = (memo) => {
        navTo(`/subPackages/memos/add/index?isEdit=true&memo=${JSON.stringify(memo)}`);
      };
      const popupRef = vue.ref(null);
      const activeMemo = vue.ref(null);
      const openPopup = (memo) => {
        activeMemo.value = memo;
        popupRef.value.open("bottom");
        uni.vibrateShort();
      };
      const deleteMemo = () => {
        apiDeleteMemo(activeMemo.value.MemoID).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            popupRef.value.close();
            getMemos();
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_0$1);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
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
                vue.createElementVNode("view", { class: "note-list" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(newPlanList), (item, index2) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass({ "note-item": true, "top": index2 < 3, "middle": index2 % 3 == 1 }),
                        key: item.MemoID,
                        onClick: ($event) => editMemo(item),
                        onLongpress: ($event) => openPopup(item)
                      }, [
                        vue.createElementVNode(
                          "view",
                          { class: "note-title" },
                          vue.toDisplayString(item.Title),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("view", {
                          class: "note-content",
                          innerHTML: item.Content
                        }, null, 8, ["innerHTML"]),
                        vue.createElementVNode(
                          "view",
                          { class: "note-time" },
                          vue.toDisplayString(vue.unref(formatDate)(item.CreatedDate)),
                          1
                          /* TEXT */
                        )
                      ], 42, ["onClick", "onLongpress"]);
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
              vue.createElementVNode("button", {
                class: "win-service",
                onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(navTo)(`/subPackages/memos/add/index?type=${current.value}`))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ]),
          vue.createCommentVNode(" 更多功能 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "popupRef",
              ref: popupRef,
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "popup-list" }, [
                  vue.createElementVNode("view", {
                    class: "popup-item",
                    onClick: deleteMemo
                  }, [
                    vue.createElementVNode("view", { class: "popup-icon" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "trash",
                        size: "30",
                        color: "#999"
                      })
                    ]),
                    vue.createElementVNode("view", { class: "popup-text" }, " 删除 ")
                  ]),
                  vue.createElementVNode("view", {
                    class: "popup-close",
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$refs.popupRef.close())
                  }, "取消")
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const SubPackagesMemosIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-65dcb35f"], ["__file", "E:/HBuilderProjects/time-master/subPackages/memos/index/index.vue"]]);
  const config$1 = {
    // 信任的标签（保持标签名不变）
    trustTags: makeMap("card,a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
    // 块级标签（转为 div，其他的非信任标签转为 span）
    blockTags: makeMap("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
    // 行内标签
    inlineTags: makeMap("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong,sub,sup"),
    // 要移除的标签
    ignoreTags: makeMap("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
    // 自闭合的标签
    voidTags: makeMap("card,area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
    // html 实体
    entities: {
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      ensp: " ",
      emsp: " ",
      nbsp: " ",
      semi: ";",
      ndash: "–",
      mdash: "—",
      middot: "·",
      lsquo: "‘",
      rsquo: "’",
      ldquo: "“",
      rdquo: "”",
      bull: "•",
      hellip: "…",
      larr: "←",
      uarr: "↑",
      rarr: "→",
      darr: "↓"
    },
    // 默认的标签样式
    tagStyle: {
      address: "font-style:italic",
      big: "display:inline;font-size:1.2em",
      caption: "display:table-caption;text-align:center",
      center: "text-align:center",
      cite: "font-style:italic",
      dd: "margin-left:40px",
      mark: "background-color:yellow",
      pre: "font-family:monospace;white-space:pre",
      s: "text-decoration:line-through",
      small: "display:inline;font-size:0.8em",
      strike: "text-decoration:line-through",
      u: "text-decoration:underline"
    },
    // svg 大小写对照表
    svgDict: {
      animatetransform: "animateTransform",
      lineargradient: "linearGradient",
      viewbox: "viewBox",
      attributename: "attributeName",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      foreignobject: "foreignObject"
    }
  };
  const tagSelector = {};
  const {
    windowWidth
  } = uni.getSystemInfoSync();
  const blankChar = makeMap(" ,\r,\n,	,\f");
  let idIndex = 0;
  config$1.ignoreTags.iframe = void 0;
  config$1.trustTags.iframe = true;
  config$1.ignoreTags.embed = void 0;
  config$1.trustTags.embed = true;
  function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = list.length; i--; ) {
      map[list[i]] = true;
    }
    return map;
  }
  function decodeEntity(str, amp) {
    let i = str.indexOf("&");
    while (i !== -1) {
      const j = str.indexOf(";", i + 3);
      let code;
      if (j === -1)
        break;
      if (str[i + 1] === "#") {
        code = parseInt((str[i + 2] === "x" ? "0" : "") + str.substring(i + 2, j));
        if (!isNaN(code)) {
          str = str.substr(0, i) + String.fromCharCode(code) + str.substr(j + 1);
        }
      } else {
        code = str.substring(i + 1, j);
        if (config$1.entities[code] || code === "amp" && amp) {
          str = str.substr(0, i) + (config$1.entities[code] || "&") + str.substr(j + 1);
        }
      }
      i = str.indexOf("&", i + 1);
    }
    return str;
  }
  function mergeNodes(nodes) {
    let i = nodes.length - 1;
    for (let j = i; j >= -1; j--) {
      if (j === -1 || nodes[j].c || !nodes[j].name || nodes[j].name !== "div" && nodes[j].name !== "p" && nodes[j].name[0] !== "h" || (nodes[j].attrs.style || "").includes("inline")) {
        if (i - j >= 5) {
          nodes.splice(j + 1, i - j, {
            name: "div",
            attrs: {},
            children: nodes.slice(j + 1, i + 1)
          });
        }
        i = j - 1;
      }
    }
  }
  function Parser$1(vm) {
    this.options = vm || {};
    this.tagStyle = Object.assign({}, config$1.tagStyle, this.options.tagStyle);
    this.imgList = vm.imgList || [];
    this.imgList._unloadimgs = 0;
    this.plugins = vm.plugins || [];
    this.attrs = /* @__PURE__ */ Object.create(null);
    this.stack = [];
    this.nodes = [];
    this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
  }
  Parser$1.prototype.parse = function(content) {
    for (let i = this.plugins.length; i--; ) {
      if (this.plugins[i].onUpdate) {
        content = this.plugins[i].onUpdate(content, config$1) || content;
      }
    }
    new Lexer$1(this).parse(content);
    while (this.stack.length) {
      this.popNode();
    }
    if (this.nodes.length > 50) {
      mergeNodes(this.nodes);
    }
    return this.nodes;
  };
  Parser$1.prototype.expose = function() {
    for (let i = this.stack.length; i--; ) {
      const item = this.stack[i];
      if (item.c || item.name === "a" || item.name === "video" || item.name === "audio")
        return;
      item.c = 1;
    }
  };
  Parser$1.prototype.hook = function(node2) {
    for (let i = this.plugins.length; i--; ) {
      if (this.plugins[i].onParse && this.plugins[i].onParse(node2, this) === false) {
        return false;
      }
    }
    return true;
  };
  Parser$1.prototype.getUrl = function(url) {
    const domain = this.options.domain;
    if (url[0] === "/") {
      if (url[1] === "/") {
        url = (domain ? domain.split("://")[0] : "http") + ":" + url;
      } else if (domain) {
        url = domain + url;
      } else {
        url = plus.io.convertLocalFileSystemURL(url);
      }
    } else if (!url.includes("data:") && !url.includes("://")) {
      if (domain) {
        url = domain + "/" + url;
      } else {
        url = plus.io.convertLocalFileSystemURL(url);
      }
    }
    return url;
  };
  Parser$1.prototype.parseStyle = function(node2) {
    const attrs = node2.attrs;
    const list = (this.tagStyle[node2.name] || "").split(";").concat((attrs.style || "").split(";"));
    const styleObj = {};
    let tmp = "";
    if (attrs.id && !this.xml) {
      if (this.options.useAnchor) {
        this.expose();
      } else if (node2.name !== "img" && node2.name !== "a" && node2.name !== "video" && node2.name !== "audio") {
        attrs.id = void 0;
      }
    }
    if (attrs.width) {
      styleObj.width = parseFloat(attrs.width) + (attrs.width.includes("%") ? "%" : "px");
      attrs.width = void 0;
    }
    if (attrs.height) {
      styleObj.height = parseFloat(attrs.height) + (attrs.height.includes("%") ? "%" : "px");
      attrs.height = void 0;
    }
    for (let i = 0, len = list.length; i < len; i++) {
      const info = list[i].split(":");
      if (info.length < 2)
        continue;
      const key2 = info.shift().trim().toLowerCase();
      let value = info.join(":").trim();
      if (value[0] === "-" && value.lastIndexOf("-") > 0 || value.includes("safe")) {
        tmp += `;${key2}:${value}`;
      } else if (!styleObj[key2] || value.includes("import") || !styleObj[key2].includes("import")) {
        if (value.includes("url")) {
          let j = value.indexOf("(") + 1;
          if (j) {
            while (value[j] === '"' || value[j] === "'" || blankChar[value[j]]) {
              j++;
            }
            value = value.substr(0, j) + this.getUrl(value.substr(j));
          }
        } else if (value.includes("rpx")) {
          value = value.replace(/[0-9.]+\s*rpx/g, ($) => parseFloat($) * windowWidth / 750 + "px");
        }
        styleObj[key2] = value;
      }
    }
    node2.attrs.style = tmp;
    return styleObj;
  };
  Parser$1.prototype.onTagName = function(name) {
    this.tagName = this.xml ? name : name.toLowerCase();
    if (this.tagName === "svg") {
      this.xml = (this.xml || 0) + 1;
      config$1.ignoreTags.style = void 0;
    }
  };
  Parser$1.prototype.onAttrName = function(name) {
    name = this.xml ? name : name.toLowerCase();
    if (name.substr(0, 5) === "data-") {
      if (name === "data-src" && !this.attrs.src) {
        this.attrName = "src";
      } else if (this.tagName === "img" || this.tagName === "a") {
        this.attrName = name;
      } else {
        this.attrName = void 0;
      }
    } else {
      this.attrName = name;
      this.attrs[name] = "T";
    }
  };
  Parser$1.prototype.onAttrVal = function(val) {
    const name = this.attrName || "";
    if (name === "style" || name === "href") {
      this.attrs[name] = decodeEntity(val, true);
    } else if (name.includes("src")) {
      this.attrs[name] = this.getUrl(decodeEntity(val, true));
    } else if (name) {
      this.attrs[name] = val;
    }
  };
  Parser$1.prototype.onOpenTag = function(selfClose) {
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.name = this.tagName;
    node2.attrs = this.attrs;
    if (this.options.nodes.length) {
      node2.type = "node";
    }
    this.attrs = /* @__PURE__ */ Object.create(null);
    const attrs = node2.attrs;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    const close = this.xml ? selfClose : config$1.voidTags[node2.name];
    if (tagSelector[node2.name]) {
      attrs.class = tagSelector[node2.name] + (attrs.class ? " " + attrs.class : "");
    }
    if (node2.name === "embed") {
      this.expose();
    }
    if (node2.name === "video" || node2.name === "audio") {
      if (node2.name === "video" && !attrs.id) {
        attrs.id = "v" + idIndex++;
      }
      if (!attrs.controls && !attrs.autoplay) {
        attrs.controls = "T";
      }
      node2.src = [];
      if (attrs.src) {
        node2.src.push(attrs.src);
        attrs.src = void 0;
      }
      this.expose();
    }
    if (close) {
      if (!this.hook(node2) || config$1.ignoreTags[node2.name]) {
        if (node2.name === "base" && !this.options.domain) {
          this.options.domain = attrs.href;
        } else if (node2.name === "source" && parent && (parent.name === "video" || parent.name === "audio") && attrs.src) {
          parent.src.push(attrs.src);
        }
        return;
      }
      const styleObj = this.parseStyle(node2);
      if (node2.name === "img") {
        if (attrs.src) {
          if (attrs.src.includes("webp")) {
            node2.webp = "T";
          }
          if (attrs.src.includes("data:") && !attrs["original-src"]) {
            attrs.ignore = "T";
          }
          if (!attrs.ignore || node2.webp || attrs.src.includes("cloud://")) {
            for (let i = this.stack.length; i--; ) {
              const item = this.stack[i];
              if (item.name === "a") {
                node2.a = item.attrs;
              }
              if (item.name === "table" && !node2.webp && !attrs.src.includes("cloud://")) {
                if (!styleObj.display || styleObj.display.includes("inline")) {
                  node2.t = "inline-block";
                } else {
                  node2.t = styleObj.display;
                }
                styleObj.display = void 0;
              }
              item.c = 1;
            }
            attrs.i = this.imgList.length.toString();
            let src = attrs["original-src"] || attrs.src;
            this.imgList.push(src);
            if (!node2.t) {
              this.imgList._unloadimgs += 1;
            }
            if (this.options.lazyLoad) {
              attrs["data-src"] = attrs.src;
              attrs.src = void 0;
            }
          }
        }
        if (styleObj.display === "inline") {
          styleObj.display = "";
        }
        if (attrs.ignore) {
          styleObj["max-width"] = styleObj["max-width"] || "100%";
          attrs.style += ";-webkit-touch-callout:none";
        }
        if (parseInt(styleObj.width) > windowWidth) {
          styleObj.height = void 0;
        }
        if (!isNaN(parseInt(styleObj.width))) {
          node2.w = "T";
        }
        if (!isNaN(parseInt(styleObj.height)) && (!styleObj.height.includes("%") || parent && (parent.attrs.style || "").includes("height"))) {
          node2.h = "T";
        }
        if (node2.w && node2.h && styleObj["object-fit"]) {
          if (styleObj["object-fit"] === "contain") {
            node2.m = "aspectFit";
          } else if (styleObj["object-fit"] === "cover") {
            node2.m = "aspectFill";
          }
        }
      } else if (node2.name === "svg") {
        siblings.push(node2);
        this.stack.push(node2);
        this.popNode();
        return;
      }
      for (const key2 in styleObj) {
        if (styleObj[key2]) {
          attrs.style += `;${key2}:${styleObj[key2].replace(" !important", "")}`;
        }
      }
      attrs.style = attrs.style.substr(1) || void 0;
    } else {
      if ((node2.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) && this.pre !== 2) {
        this.pre = node2.pre = 1;
      }
      node2.children = [];
      this.stack.push(node2);
    }
    siblings.push(node2);
  };
  Parser$1.prototype.onCloseTag = function(name) {
    name = this.xml ? name : name.toLowerCase();
    let i;
    for (i = this.stack.length; i--; ) {
      if (this.stack[i].name === name)
        break;
    }
    if (i !== -1) {
      while (this.stack.length > i) {
        this.popNode();
      }
    } else if (name === "p" || name === "br") {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push({
        name,
        attrs: {
          class: tagSelector[name] || "",
          style: this.tagStyle[name] || ""
        }
      });
    }
  };
  Parser$1.prototype.popNode = function() {
    const editable = this.options.editable;
    const node2 = this.stack.pop();
    let attrs = node2.attrs;
    const children = node2.children;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    if (!this.hook(node2) || config$1.ignoreTags[node2.name]) {
      if (node2.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
        uni.setNavigationBarTitle({
          title: children[0].text
        });
      }
      siblings.pop();
      return;
    }
    if (node2.pre && this.pre !== 2) {
      this.pre = node2.pre = void 0;
      for (let i = this.stack.length; i--; ) {
        if (this.stack[i].pre) {
          this.pre = 1;
        }
      }
    }
    const styleObj = {};
    if (node2.name === "svg") {
      if (this.xml > 1) {
        this.xml--;
        return;
      }
      let src = "";
      const style = attrs.style;
      attrs.style = "";
      attrs.xmlns = "http://www.w3.org/2000/svg";
      (function traversal(node3) {
        if (node3.type === "text") {
          src += node3.text;
          return;
        }
        const name = config$1.svgDict[node3.name] || node3.name;
        if (name === "foreignObject") {
          for (const child of node3.children || []) {
            if (child.attrs && !child.attrs.xmlns) {
              child.attrs.xmlns = "http://www.w3.org/1999/xhtml";
              break;
            }
          }
        }
        src += "<" + name;
        for (const item in node3.attrs) {
          const val = node3.attrs[item];
          if (val) {
            src += ` ${config$1.svgDict[item] || item}="${val}"`;
          }
        }
        if (!node3.children) {
          src += "/>";
        } else {
          src += ">";
          for (let i = 0; i < node3.children.length; i++) {
            traversal(node3.children[i]);
          }
          src += "</" + name + ">";
        }
      })(node2);
      node2.name = "img";
      node2.attrs = {
        src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
        style,
        ignore: "T"
      };
      node2.children = void 0;
      this.xml = false;
      config$1.ignoreTags.style = true;
      return;
    }
    if (attrs.align) {
      if (node2.name === "table") {
        if (attrs.align === "center") {
          styleObj["margin-inline-start"] = styleObj["margin-inline-end"] = "auto";
        } else {
          styleObj.float = attrs.align;
        }
      } else {
        styleObj["text-align"] = attrs.align;
      }
      attrs.align = void 0;
    }
    if (attrs.dir) {
      styleObj.direction = attrs.dir;
      attrs.dir = void 0;
    }
    if (node2.name === "font") {
      if (attrs.color) {
        styleObj.color = attrs.color;
        attrs.color = void 0;
      }
      if (attrs.face) {
        styleObj["font-family"] = attrs.face;
        attrs.face = void 0;
      }
      if (attrs.size) {
        let size = parseInt(attrs.size);
        if (!isNaN(size)) {
          if (size < 1) {
            size = 1;
          } else if (size > 7) {
            size = 7;
          }
          styleObj["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][size - 1];
        }
        attrs.size = void 0;
      }
    }
    if ((attrs.class || "").includes("align-center")) {
      styleObj["text-align"] = "center";
    }
    Object.assign(styleObj, this.parseStyle(node2));
    if (node2.name !== "table" && parseInt(styleObj.width) > windowWidth) {
      styleObj["max-width"] = "100%";
      styleObj["box-sizing"] = "border-box";
    }
    if (config$1.blockTags[node2.name]) {
      if (!editable) {
        node2.name = "div";
      }
    } else if (!config$1.trustTags[node2.name] && !this.xml) {
      node2.name = "span";
    }
    if (node2.name === "a" || node2.name === "ad" || node2.name === "iframe") {
      this.expose();
    } else if (node2.name === "video") {
      if ((styleObj.height || "").includes("auto")) {
        styleObj.height = void 0;
      }
      let str = '<video style="width:100%;height:100%"';
      if (editable) {
        attrs.controls = "";
      }
      for (const item in attrs) {
        if (attrs[item]) {
          str += " " + item + '="' + attrs[item] + '"';
        }
      }
      if (this.options.pauseVideo) {
        str += ` onplay="this.dispatchEvent(new CustomEvent('vplay',{bubbles:!0}));for(var e=document.getElementsByTagName('video'),t=0;t<e.length;t++)e[t]!=this&&e[t].pause()"`;
      }
      str += ">";
      for (let i = 0; i < node2.src.length; i++) {
        str += '<source src="' + node2.src[i] + '">';
      }
      str += "</video>";
      node2.html = str;
    } else if ((node2.name === "ul" || node2.name === "ol") && (node2.c || editable)) {
      const types = {
        a: "lower-alpha",
        A: "upper-alpha",
        i: "lower-roman",
        I: "upper-roman"
      };
      if (types[attrs.type]) {
        attrs.style += ";list-style-type:" + types[attrs.type];
        attrs.type = void 0;
      }
      for (let i = children.length; i--; ) {
        if (children[i].name === "li") {
          children[i].c = 1;
        }
      }
    } else if (node2.name === "table") {
      let padding = parseFloat(attrs.cellpadding);
      let spacing = parseFloat(attrs.cellspacing);
      const border = parseFloat(attrs.border);
      const bordercolor = styleObj["border-color"];
      const borderstyle = styleObj["border-style"];
      if (node2.c || editable) {
        if (isNaN(padding)) {
          padding = 2;
        }
        if (isNaN(spacing)) {
          spacing = 2;
        }
      }
      if (border) {
        attrs.style += `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}`;
      }
      if (node2.flag && (node2.c || editable)) {
        styleObj.display = "grid";
        if (styleObj["border-collapse"] === "collapse") {
          styleObj["border-collapse"] = void 0;
          spacing = 0;
        }
        if (spacing) {
          styleObj["grid-gap"] = spacing + "px";
          styleObj.padding = spacing + "px";
        } else if (border) {
          attrs.style += ";border-left:0;border-top:0";
        }
        const width = [];
        const trList = [];
        const cells = [];
        const map = {};
        (function traversal(nodes) {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].name === "tr") {
              trList.push(nodes[i]);
            } else if (nodes[i].name === "colgroup") {
              let colI = 1;
              for (const col of nodes[i].children || []) {
                if (col.name === "col") {
                  const style = col.attrs.style || "";
                  const start = style.indexOf("width") ? style.indexOf(";width") : 0;
                  if (start !== -1) {
                    let end = style.indexOf(";", start + 6);
                    if (end === -1) {
                      end = style.length;
                    }
                    width[colI] = style.substring(start ? start + 7 : 6, end);
                  }
                  colI += 1;
                }
              }
            } else {
              traversal(nodes[i].children || []);
            }
          }
        })(children);
        for (let row = 1; row <= trList.length; row++) {
          let col = 1;
          for (let j = 0; j < trList[row - 1].children.length; j++) {
            const td = trList[row - 1].children[j];
            if (td.name === "td" || td.name === "th") {
              while (map[row + "." + col]) {
                col++;
              }
              if (editable) {
                td.r = row;
              }
              let style = td.attrs.style || "";
              let start = style.indexOf("width") ? style.indexOf(";width") : 0;
              if (start !== -1) {
                let end = style.indexOf(";", start + 6);
                if (end === -1) {
                  end = style.length;
                }
                if (!td.attrs.colspan) {
                  width[col] = style.substring(start ? start + 7 : 6, end);
                }
                style = style.substr(0, start) + style.substr(end);
              }
              style += ";display:flex";
              start = style.indexOf("vertical-align");
              if (start !== -1) {
                const val = style.substr(start + 15, 10);
                if (val.includes("middle")) {
                  style += ";align-items:center";
                } else if (val.includes("bottom")) {
                  style += ";align-items:flex-end";
                }
              } else {
                style += ";align-items:center";
              }
              start = style.indexOf("text-align");
              if (start !== -1) {
                const val = style.substr(start + 11, 10);
                if (val.includes("center")) {
                  style += ";justify-content: center";
                } else if (val.includes("right")) {
                  style += ";justify-content: right";
                }
              }
              style = (border ? `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}` + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? `;padding:${padding}px` : "") + ";" + style;
              if (td.attrs.colspan) {
                style += `;grid-column-start:${col};grid-column-end:${col + parseInt(td.attrs.colspan)}`;
                if (!td.attrs.rowspan) {
                  style += `;grid-row-start:${row};grid-row-end:${row + 1}`;
                }
                col += parseInt(td.attrs.colspan) - 1;
              }
              if (td.attrs.rowspan) {
                style += `;grid-row-start:${row};grid-row-end:${row + parseInt(td.attrs.rowspan)}`;
                if (!td.attrs.colspan) {
                  style += `;grid-column-start:${col};grid-column-end:${col + 1}`;
                }
                for (let rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                  for (let colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                    map[row + rowspan + "." + (col - colspan)] = 1;
                  }
                }
              }
              if (style) {
                td.attrs.style = style;
              }
              cells.push(td);
              col++;
            }
          }
          if (row === 1) {
            let temp = "";
            for (let i = 1; i < col; i++) {
              temp += (width[i] ? width[i] : "auto") + " ";
            }
            styleObj["grid-template-columns"] = temp;
          }
        }
        node2.children = cells;
      } else {
        if (node2.c || editable) {
          styleObj.display = "table";
        }
        if (!isNaN(spacing)) {
          styleObj["border-spacing"] = spacing + "px";
        }
        if (border || padding) {
          (function traversal(nodes) {
            for (let i = 0; i < nodes.length; i++) {
              const td = nodes[i];
              if (td.name === "th" || td.name === "td") {
                if (border) {
                  td.attrs.style = `border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"};${td.attrs.style || ""}`;
                }
                if (padding) {
                  td.attrs.style = `padding:${padding}px;${td.attrs.style || ""}`;
                }
              } else if (td.children) {
                traversal(td.children);
              }
            }
          })(children);
        }
      }
      if (this.options.scrollTable && !(attrs.style || "").includes("inline")) {
        const table = Object.assign({}, node2);
        node2.name = "div";
        node2.attrs = {
          style: "overflow:auto"
        };
        node2.children = [table];
        attrs = table.attrs;
      }
    } else if ((node2.name === "td" || node2.name === "th") && (attrs.colspan || attrs.rowspan)) {
      for (let i = this.stack.length; i--; ) {
        if (this.stack[i].name === "table") {
          this.stack[i].flag = 1;
          break;
        }
      }
    } else if (node2.name === "ruby") {
      node2.name = "span";
      for (let i = 0; i < children.length - 1; i++) {
        if (children[i].type === "text" && children[i + 1].name === "rt") {
          children[i] = {
            name: "div",
            attrs: {
              style: "display:inline-block;text-align:center"
            },
            children: [{
              name: "div",
              attrs: {
                style: "font-size:50%;" + (children[i + 1].attrs.style || "")
              },
              children: children[i + 1].children
            }, children[i]]
          };
          children.splice(i + 1, 1);
        }
      }
    } else if (!editable && node2.c) {
      (function traversal(node3) {
        node3.c = 2;
        for (let i = node3.children.length; i--; ) {
          const child = node3.children[i];
          if (child.name && (config$1.inlineTags[child.name] || (child.attrs.style || "").includes("inline") && child.children) && !child.c) {
            traversal(child);
          }
          if (!child.c || child.name === "table") {
            node3.c = 1;
          }
        }
      })(node2);
    }
    if ((styleObj.display || "").includes("flex") && !(node2.c || editable)) {
      for (let i = children.length; i--; ) {
        const item = children[i];
        if (item.f) {
          item.attrs.style = (item.attrs.style || "") + item.f;
          item.f = void 0;
        }
      }
    }
    const flex = parent && ((parent.attrs.style || "").includes("flex") || (parent.attrs.style || "").includes("grid")) && !node2.c;
    if (flex) {
      node2.f = ";max-width:100%";
    }
    if (children.length >= 50 && (node2.c || editable) && !(styleObj.display || "").includes("flex")) {
      mergeNodes(children);
    }
    for (const key2 in styleObj) {
      if (styleObj[key2]) {
        const val = `;${key2}:${styleObj[key2].replace(" !important", "")}`;
        if (flex && (key2.includes("flex") && key2 !== "flex-direction" || key2 === "align-self" || key2.includes("grid") || styleObj[key2][0] === "-" || key2.includes("width") && val.includes("%"))) {
          node2.f += val;
          if (key2 === "width") {
            attrs.style += ";width:100%";
          }
        } else {
          attrs.style += val;
        }
      }
    }
    attrs.style = attrs.style.substr(1) || void 0;
  };
  Parser$1.prototype.onText = function(text) {
    if (!this.pre) {
      let trim = "";
      let flag;
      for (let i = 0, len = text.length; i < len; i++) {
        if (!blankChar[text[i]]) {
          trim += text[i];
        } else {
          if (trim[trim.length - 1] !== " ") {
            trim += " ";
          }
          if (text[i] === "\n" && !flag) {
            flag = true;
          }
        }
      }
      if (trim === " ") {
        if (flag)
          return;
        else {
          const parent = this.stack[this.stack.length - 1];
          if (parent && parent.name[0] === "t")
            return;
        }
      }
      text = trim;
    }
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.type = "text";
    node2.text = decodeEntity(text);
    if (this.hook(node2)) {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push(node2);
    }
  };
  function Lexer$1(handler) {
    this.handler = handler;
  }
  Lexer$1.prototype.parse = function(content) {
    this.content = content || "";
    this.i = 0;
    this.start = 0;
    this.state = this.text;
    for (let len = this.content.length; this.i !== -1 && this.i < len; ) {
      this.state();
    }
  };
  Lexer$1.prototype.checkClose = function(method) {
    const selfClose = this.content[this.i] === "/";
    if (this.content[this.i] === ">" || selfClose && this.content[this.i + 1] === ">") {
      if (method) {
        this.handler[method](this.content.substring(this.start, this.i));
      }
      this.i += selfClose ? 2 : 1;
      this.start = this.i;
      this.handler.onOpenTag(selfClose);
      if (this.handler.tagName === "script") {
        this.i = this.content.indexOf("</", this.i);
        if (this.i !== -1) {
          this.i += 2;
          this.start = this.i;
        }
        this.state = this.endTag;
      } else {
        this.state = this.text;
      }
      return true;
    }
    return false;
  };
  Lexer$1.prototype.text = function() {
    this.i = this.content.indexOf("<", this.i);
    if (this.i === -1) {
      if (this.start < this.content.length) {
        this.handler.onText(this.content.substring(this.start, this.content.length));
      }
      return;
    }
    const c = this.content[this.i + 1];
    if (c >= "a" && c <= "z" || c >= "A" && c <= "Z") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      this.start = ++this.i;
      this.state = this.tagName;
    } else if (c === "/" || c === "!" || c === "?") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      const next = this.content[this.i + 2];
      if (c === "/" && (next >= "a" && next <= "z" || next >= "A" && next <= "Z")) {
        this.i += 2;
        this.start = this.i;
        this.state = this.endTag;
        return;
      }
      let end = "-->";
      if (c !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
        end = ">";
      }
      this.i = this.content.indexOf(end, this.i);
      if (this.i !== -1) {
        this.i += end.length;
        this.start = this.i;
      }
    } else {
      this.i++;
    }
  };
  Lexer$1.prototype.tagName = function() {
    if (blankChar[this.content[this.i]]) {
      this.handler.onTagName(this.content.substring(this.start, this.i));
      while (blankChar[this.content[++this.i]])
        ;
      if (this.i < this.content.length && !this.checkClose()) {
        this.start = this.i;
        this.state = this.attrName;
      }
    } else if (!this.checkClose("onTagName")) {
      this.i++;
    }
  };
  Lexer$1.prototype.attrName = function() {
    let c = this.content[this.i];
    if (blankChar[c] || c === "=") {
      this.handler.onAttrName(this.content.substring(this.start, this.i));
      let needVal = c === "=";
      const len = this.content.length;
      while (++this.i < len) {
        c = this.content[this.i];
        if (!blankChar[c]) {
          if (this.checkClose())
            return;
          if (needVal) {
            this.start = this.i;
            this.state = this.attrVal;
            return;
          }
          if (this.content[this.i] === "=") {
            needVal = true;
          } else {
            this.start = this.i;
            this.state = this.attrName;
            return;
          }
        }
      }
    } else if (!this.checkClose("onAttrName")) {
      this.i++;
    }
  };
  Lexer$1.prototype.attrVal = function() {
    const c = this.content[this.i];
    const len = this.content.length;
    if (c === '"' || c === "'") {
      this.start = ++this.i;
      this.i = this.content.indexOf(c, this.i);
      if (this.i === -1)
        return;
      this.handler.onAttrVal(this.content.substring(this.start, this.i));
    } else {
      for (; this.i < len; this.i++) {
        if (blankChar[this.content[this.i]]) {
          this.handler.onAttrVal(this.content.substring(this.start, this.i));
          break;
        } else if (this.checkClose("onAttrVal"))
          return;
      }
    }
    while (blankChar[this.content[++this.i]])
      ;
    if (this.i < len && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  };
  Lexer$1.prototype.endTag = function() {
    const c = this.content[this.i];
    if (blankChar[c] || c === ">" || c === "/") {
      this.handler.onCloseTag(this.content.substring(this.start, this.i));
      if (c !== ">") {
        this.i = this.content.indexOf(">", this.i);
        if (this.i === -1)
          return;
      }
      this.start = ++this.i;
      this.state = this.text;
    } else {
      this.i++;
    }
  };
  const _sfc_main$f = {
    props: {
      mode: {
        type: Boolean,
        default: false
      },
      src: String,
      title: String,
      desc: String,
      url: String,
      color: String,
      bgcolor: String,
      border: String
    },
    data() {
      return {};
    },
    computed: {
      customStyle() {
        return {
          "background-color": this.bgColor || "#a4d0ff",
          border: this.border || "1px solid #FFF",
          color: this.color || "#000"
        };
      }
    },
    methods: {
      onClick(e) {
        if (this.url && this.url.trim().length > 6 && !this.mode) {
          uni.navigateTo({ url: this.url });
        }
        this.$emit("click", e);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "card",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      style: vue.normalizeStyle([$options.customStyle]),
      "data-i": _ctx.$attrs["data-i"]
    }, [
      vue.createElementVNode("image", {
        class: "card-img",
        mode: "aspectFill",
        src: $props.src
      }, null, 8, ["src"]),
      !!$props.desc ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "text-wrap text-wrap-width"
      }, [
        vue.createElementVNode(
          "view",
          { class: "title one-t" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          { class: "desc one-t" },
          vue.toDisplayString($props.desc),
          1
          /* TEXT */
        )
      ])) : (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "text-wrap-width title more-t"
        },
        vue.toDisplayString($props.title),
        1
        /* TEXT */
      )),
      vue.createElementVNode("image", {
        class: "card-icon",
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAABCFBMVEUAAAC/v7+qqqqZmZmLi6KJnZ2ImZmHlpaGlKGMjJmSkp6Li5eQkJuKlZ+Pj5mOjpeJkpuNjZ6IkJmHj5eLi5uKkpmGjZqJj5uLi5eIjpmIjZiKj5qKj5mJjpiHjJqJjZaGj5iKj5eIjJmKjpqHi5eGjZeIi5eHjZiIi5eHjJiIjpaHjJeIjZiGjJeIjZiGjJaGjJeIi5aGjJeHi5eHi5aHjJeHjJaHjJeGi5eHjJaHjJeGi5aGi5aHjJeHjJaGjJeGjJeHjJaHi5eGi5eHjJaHjJeGjJaGjJeHi5aHjJeHjJeHi5aGjJeHi5aGjJaHi5eGjJaHi5eHjJaGi5eGi5aHjJeGi5aGi5apAvjmAAAAV3RSTlMABAYKCw0PERMUFRYXGBkbHB0eICEjJiksLS8wMjQ1ODk7PD9ATFZXWFlaW1xdXl+Hi6msu7/Dx8vMzs/R0tTV19na3N3f4uTn6evs7e7v8PHy9PX7/P18cCTXAAABEklEQVRo3u2YWU5CQRQFn4qCM4LzhIoDAorzrIgCigiCimf/O/Gj3UIlmJxaQFXSea/T90aRMcYYY4zpG0ZPu9cZMnAi6SsLBjqS9LnJBcqSpC53Sjs/kqSPNaxwGAqtFbrQXKILjQW68DpPF17m6EI9TRdqM3TheZouVCbpQnkcK5RC4T5BF27jdOFqhC5cDtOFixhdOB+iC2cDdOEoggttLrDbk6QW5/+WJB1T/r1e+FAHWT/2q/35scsiF/w3cdZ/R13Y+8H/MMb6Hycgfz74n6ZYfzXJ+mspyF8I/vos68cep0X4eV2EB4SD4H9bZP3vy+yTtL3KjrGddXgQ34BXCVvwMmT7P69zjDHGGGP6gF83lHISOctsKQAAAABJRU5ErkJggg=="
      })
    ], 12, ["data-i"]);
  }
  const myCard = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$7], ["__scopeId", "data-v-69a90445"], ["__file", "E:/HBuilderProjects/time-master/uni-app/components/mp-html/card/card.vue"]]);
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("handler");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["handler"] = "3052a0dc";
  };
  function getTop(e) {
    let top;
    top = e.touches[0].pageY;
    if (top - e.currentTarget.offsetTop < 150 || top < 600) {
      top = e.currentTarget.offsetTop;
    }
    if (top < 30) {
      top += 70;
    }
    return top - 30;
  }
  const _sfc_main$e = {
    name: "node",
    options: {},
    data() {
      return {
        ctrl: {}
      };
    },
    props: {
      name: String,
      attrs: {
        type: Object,
        default() {
          return {};
        }
      },
      childs: Array,
      opts: Array
    },
    components: {
      myCard
    },
    mounted() {
      this.$nextTick(() => {
        for (this.root = this.$parent; this.root.$options.name !== "mp-html"; this.root = this.root.$parent)
          ;
      });
      if (this.opts[0]) {
        let i;
        for (i = this.childs.length; i--; ) {
          if (this.childs[i].name === "img")
            break;
        }
        if (i !== -1) {
          this.observer = uni.createIntersectionObserver(this).relativeToViewport({
            top: 500,
            bottom: 500
          });
          this.observer.observe("._img", (res) => {
            if (res.intersectionRatio) {
              this.$set(this.ctrl, "load", 1);
              this.observer.disconnect();
            }
          });
        }
      }
    },
    beforeDestroy() {
      if (this.root && this.root._edit === this) {
        this.root._edit = void 0;
      }
      if (this.observer) {
        this.observer.disconnect();
      }
    },
    methods: {
      editStart(e) {
        if (this.opts[5]) {
          const i = e.currentTarget.dataset.i;
          if (!this.ctrl["e" + i]) {
            this.$set(this.ctrl, "e" + i, 1);
            setTimeout(() => {
              this.root._mask.push(() => this.$set(this.ctrl, "e" + i, 0));
            }, 50);
            this.root._edit = this;
            this.i = i;
            this.cursor = this.childs[i].text.length;
          } else {
            this.root._mask.pop();
            this.root._maskTap();
            this.$set(this.ctrl, "e" + i, 2);
            setTimeout(() => {
              this.$set(this.ctrl, "e" + i, 3);
            }, 50);
          }
        }
      },
      editInput(e) {
        const i = e.target.dataset.i;
        const value = e.detail.value.replace(/ {2,}/, ($) => {
          let res = " ";
          for (let i2 = 1; i2 < $.length; i2++) {
            res += " ";
          }
          return res;
        });
        this.root._editVal(`${this.opts[7]}.${i}.text`, this.childs[i].text, value);
        this.cursor = e.detail.cursor;
      },
      editEnd(e) {
        const i = e.target.dataset.i;
        this.$set(this.ctrl, "e" + i, 0);
        this.root._setData(`${this.opts[7]}.${i}.text`, e.detail.value.replace(/ {2}/g, "  "));
        if (e.detail.cursor !== void 0) {
          this.cursor = e.detail.cursor;
        }
      },
      insert(node2) {
        setTimeout(() => {
          const childs = this.childs.slice(0);
          if (!childs[this.i]) {
            childs.push(node2);
          } else if (childs[this.i].text) {
            const text = childs[this.i].text;
            if (node2.type === "text") {
              if (this.cursor) {
                childs[this.i].text = text.substring(0, this.cursor) + node2.text + text.substring(this.cursor);
              } else {
                childs[this.i].text += node2.text;
              }
            } else {
              const list = [];
              if (this.cursor) {
                list.push({
                  type: "text",
                  text: text.substring(0, this.cursor)
                });
              }
              list.push(node2);
              if (this.cursor < text.length) {
                list.push({
                  type: "text",
                  text: text.substring(this.cursor)
                });
              }
              childs.splice(this.i, 1, ...list);
            }
          } else {
            childs.splice(parseInt(this.i) + 1, 0, node2);
          }
          this.root._editVal(this.opts[7], this.childs, childs, true);
          this.i = parseInt(this.i) + 1;
        }, 200);
      },
      remove(i) {
        const arr = this.childs.slice(0);
        const delEle = arr.splice(i, 1)[0];
        if (delEle.name === "img" || delEle.name === "video" || delEle.name === "audio") {
          let src = delEle.attrs.src;
          if (delEle.src) {
            src = delEle.src.length === 1 ? delEle.src[0] : delEle.src;
          }
          this.root.$emit("remove", {
            type: delEle.name,
            src
          });
        }
        this.root._edit = void 0;
        this.root._maskTap();
        this.root._editVal(this.opts[7], this.childs, arr, true);
      },
      nodeTap(e) {
        if (this.opts[5]) {
          if (this.root._lock)
            return;
          this.root._lock = true;
          setTimeout(() => {
            this.root._lock = false;
          }, 50);
          if (this.ctrl["e" + this.i] === 3)
            return;
          this.root._maskTap();
          this.root._edit = this;
          let start = this.opts[7].lastIndexOf("children.");
          if (start !== -1) {
            start += 9;
          } else {
            start = 6;
          }
          const i = parseInt(this.opts[7].substring(start, this.opts[7].lastIndexOf(".children")));
          let parent = this.$parent;
          while (parent && parent.$options.name !== "node") {
            parent = parent.$parent;
          }
          if (!parent || this.opts[7].length - parent.opts[7].length > 15)
            return;
          this.$set(this.ctrl, "root", 1);
          this.root._mask.push(() => this.$set(this.ctrl, "root", 0));
          if (this.childs.length === 1 && this.childs[0].type === "text" && !this.ctrl.e0) {
            this.$set(this.ctrl, "e0", 1);
            this.root._mask.push(() => this.$set(this.ctrl, "e0", 0));
            this.i = 0;
            this.cursor = this.childs[0].text.length;
          }
          const items = this.root._getItem(parent.childs[i], i !== 0, i !== parent.childs.length - 1);
          this.root._tooltip({
            top: getTop(e),
            items,
            success: (tapIndex) => {
              if (items[tapIndex] === "大小") {
                const style = parent.childs[i].attrs.style || "";
                let value = style.match(/;font-size:([0-9]+)px/);
                if (value) {
                  value = parseInt(value[1]);
                } else {
                  value = 16;
                }
                this.root._slider({
                  min: 10,
                  max: 30,
                  value,
                  top: getTop(e),
                  changing: (val) => {
                    if (Math.abs(val - value) > 2) {
                      parent.changeStyle("font-size", i, val + "px", value + "px");
                      value = e.detail.value;
                    }
                  },
                  change: (val) => {
                    if (val !== value) {
                      parent.changeStyle("font-size", i, val + "px", value + "px");
                    }
                    this.root._editVal(`${parent.opts[7]}.${i}.attrs.style`, style, parent.childs[i].attrs.style);
                  }
                });
              } else if (items[tapIndex] === "颜色") {
                const items2 = this.root._getItem("color");
                this.root._color({
                  top: getTop(e),
                  items: items2,
                  success: (tapIndex2) => {
                    const style = parent.childs[i].attrs.style || "";
                    const value = style.match(/;color:([^;]+)/);
                    parent.changeStyle("color", i, items2[tapIndex2], value ? value[1] : void 0);
                    this.root._editVal(`${parent.opts[7]}.${i}.attrs.style`, style, parent.childs[i].attrs.style);
                  }
                });
              } else if (items[tapIndex] === "上移" || items[tapIndex] === "下移") {
                const arr = parent.childs.slice(0);
                const item = arr[i];
                if (items[tapIndex] === "上移") {
                  arr[i] = arr[i - 1];
                  arr[i - 1] = item;
                } else {
                  arr[i] = arr[i + 1];
                  arr[i + 1] = item;
                }
                this.root._editVal(parent.opts[7], parent.childs, arr, true);
              } else if (items[tapIndex] === "删除") {
                parent.remove(i);
              } else {
                const style = parent.childs[i].attrs.style || "";
                let newStyle = "";
                const item = items[tapIndex];
                let name;
                let value;
                if (item === "斜体") {
                  name = "font-style";
                  value = "italic";
                } else if (item === "粗体") {
                  name = "font-weight";
                  value = "bold";
                } else if (item === "下划线") {
                  name = "text-decoration";
                  value = "underline";
                } else if (item === "居中") {
                  name = "text-align";
                  value = "center";
                } else if (item === "缩进") {
                  name = "text-indent";
                  value = "2em";
                }
                if (style.includes(name + ":")) {
                  newStyle = style.replace(new RegExp(name + ":[^;]+"), "");
                } else {
                  newStyle = style + ";" + name + ":" + value;
                }
                this.root._editVal(`${parent.opts[7]}.${i}.attrs.style`, style, newStyle, true);
              }
            }
          });
        }
      },
      mediaTap(e, index2) {
        if (this.opts[5]) {
          const i = e.target.dataset.i || index2;
          const node2 = this.childs[i];
          const items = this.root._getItem(node2);
          this.root._maskTap();
          this.root._edit = this;
          this.i = i;
          this.root._tooltip({
            top: e.currentTarget.offsetTop - 30,
            items,
            success: (tapIndex) => {
              switch (items[tapIndex]) {
                case "封面":
                  this.root.getSrc("img", node2.attrs.poster || "").then((url) => {
                    this.root._editVal(`${this.opts[7]}.${i}.attrs.poster`, node2.attrs.poster, url instanceof Array ? url[0] : url, true);
                  }).catch(() => {
                  });
                  break;
                case "删除":
                  this.remove(i);
                  break;
                case "循环":
                case "不循环":
                  this.root._setData(`${this.opts[7]}.${i}.attrs.loop`, !node2.attrs.loop);
                  uni.showToast({
                    title: "成功"
                  });
                  break;
                case "自动播放":
                case "不自动播放":
                  this.root._setData(`${this.opts[7]}.${i}.attrs.autoplay`, !node2.attrs.autoplay);
                  uni.showToast({
                    title: "成功"
                  });
                  break;
              }
            }
          });
          this.root._lock = true;
          setTimeout(() => {
            this.root._lock = false;
          }, 50);
        }
      },
      changeStyle(name, i, value, oldVal) {
        let style = this.childs[i].attrs.style || "";
        if (style.includes(";" + name + ":" + oldVal)) {
          style = style.replace(";" + name + ":" + oldVal, ";" + name + ":" + value);
        } else {
          style += ";" + name + ":" + value;
        }
        this.root._setData(`${this.opts[7]}.${i}.attrs.style`, style);
      },
      /**
       * @description 播放视频事件
       * @param {Event} e
       */
      play(e) {
        this.root.$emit("play");
      },
      /**
       * @description 图片点击事件
       * @param {Event} e
       */
      imgTap(e) {
        if (!this.opts[5]) {
          const node2 = this.childs[e.currentTarget.dataset.i];
          if (node2.a) {
            this.linkTap(node2.a);
            return;
          }
          if (node2.attrs.ignore)
            return;
          node2.attrs.src = node2.attrs.src || node2.attrs["data-src"];
          this.root.$emit("imgtap", node2.attrs);
          if (this.root.previewImg) {
            uni.previewImage({
              current: parseInt(node2.attrs.i),
              urls: this.root.imgList
            });
          }
        } else {
          const i = e.currentTarget.dataset.i;
          const node2 = this.childs[i];
          const items = this.root._getItem(node2);
          const parser = new Parser$1(this.root);
          this.root._edit = this;
          this.i = i;
          this.root._maskTap();
          this.$set(this.ctrl, "e" + i, 1);
          this.root._mask.push(() => this.$set(this.ctrl, "e" + i, 0));
          this.root._tooltip({
            top: getTop(e),
            items,
            success: (tapIndex) => {
              if (items[tapIndex] === "换图") {
                this.root.getSrc("img", node2.attrs.src || "").then((url) => {
                  this.root._editVal(this.opts[7] + "." + i + ".attrs.src", node2.attrs.src, parser.getUrl(url instanceof Array ? url[0] : url), true);
                }).catch(() => {
                });
              } else if (items[tapIndex] === "宽度") {
                const style = node2.attrs.style || "";
                let value = style.match(/max-width:([0-9]+)%/);
                if (value) {
                  value = parseInt(value[1]);
                } else {
                  value = 100;
                }
                this.root._slider({
                  min: 0,
                  max: 100,
                  value,
                  top: getTop(e),
                  changing: (val) => {
                    if (Math.abs(val - value) > 5) {
                      this.changeStyle("max-width", i, val + "%", value + "%");
                      value = val;
                    }
                  },
                  change: (val) => {
                    if (val !== value) {
                      this.changeStyle("max-width", i, val + "%", value + "%");
                      value = val;
                    }
                    this.root._editVal(this.opts[7] + "." + i + ".attrs.style", style, this.childs[i].attrs.style);
                  }
                });
              } else if (items[tapIndex] === "超链接") {
                this.root.getSrc("link", node2.a ? node2.a.href : "").then((url) => {
                  if (node2.a) {
                    this.root._editVal(this.opts[7] + "." + i + ".a.href", node2.a.href, parser.getUrl(url), true);
                  } else {
                    const link = {
                      name: "a",
                      attrs: {
                        href: parser.getUrl(url)
                      },
                      children: [node2]
                    };
                    node2.a = link.attrs;
                    this.root._editVal(this.opts[7] + "." + i, node2, link, true);
                  }
                  wx.showToast({
                    title: "成功"
                  });
                }).catch(() => {
                });
              } else if (items[tapIndex] === "预览图") {
                this.root.getSrc("img", node2.attrs["original-src"] || "").then((url) => {
                  this.root._editVal(this.opts[7] + "." + i + ".attrs.original-src", node2.attrs["original-src"], parser.getUrl(url instanceof Array ? url[0] : url), true);
                  uni.showToast({
                    title: "成功"
                  });
                }).catch(() => {
                });
              } else if (items[tapIndex] === "删除") {
                this.remove(i);
              } else {
                this.root._setData(this.opts[7] + "." + i + ".attrs.ignore", !node2.attrs.ignore);
                uni.showToast({
                  title: "成功"
                });
              }
            }
          });
          this.root._lock = true;
          setTimeout(() => {
            this.root._lock = false;
          }, 50);
        }
      },
      /**
       * @description 图片长按
       */
      imgLongTap(e) {
        const attrs = this.childs[e.currentTarget.dataset.i].attrs;
        if (this.opts[3] && !attrs.ignore) {
          uni.showActionSheet({
            itemList: ["保存图片"],
            success: () => {
              const save = (path) => {
                uni.saveImageToPhotosAlbum({
                  filePath: path,
                  success() {
                    uni.showToast({
                      title: "保存成功"
                    });
                  }
                });
              };
              if (this.root.imgList[attrs.i].startsWith("http")) {
                uni.downloadFile({
                  url: this.root.imgList[attrs.i],
                  success: (res) => save(res.tempFilePath)
                });
              } else {
                save(this.root.imgList[attrs.i]);
              }
            }
          });
        }
      },
      /**
       * @description 图片加载完成事件
       * @param {Event} e
       */
      imgLoad(e) {
        const i = e.currentTarget.dataset.i;
        if (!this.childs[i].w) {
          this.$set(this.ctrl, i, e.detail.width);
          if (this.opts[5]) {
            const path = this.opts[7] + "." + i + ".attrs.";
            if (e.detail.width < 150)
              this.root._setData(path + "ignore", "T");
            this.root._setData(path + "width", e.detail.width.toString());
          }
        } else if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {
          this.$set(this.ctrl, i, 1);
        }
        this.checkReady();
      },
      /**
       * @description 检查是否所有图片加载完毕
       */
      checkReady() {
        if (this.root && !this.root.lazyLoad) {
          this.root._unloadimgs -= 1;
          if (!this.root._unloadimgs) {
            setTimeout(() => {
              this.root.getRect().then((rect) => {
                this.root.$emit("ready", rect);
              }).catch(() => {
                this.root.$emit("ready", {});
              });
            }, 350);
          }
        }
      },
      /**
       * @description 链接点击事件
       * @param {Event} e
       */
      linkTap(e) {
        if (!this.opts[5]) {
          const node2 = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {};
          const attrs = node2.attrs || e;
          const href = attrs.href;
          this.root.$emit("linktap", Object.assign({
            innerText: this.root.getText(node2.children || [])
            // 链接内的文本内容
          }, attrs));
          if (href) {
            if (href[0] === "#") {
              this.root.navigateTo(href.substring(1)).catch(() => {
              });
            } else if (href.split("?")[0].includes("://")) {
              if (this.root.copyLink) {
                plus.runtime.openWeb(href);
              }
            } else {
              uni.navigateTo({
                url: href,
                fail() {
                  uni.switchTab({
                    url: href,
                    fail() {
                    }
                  });
                }
              });
            }
          }
        } else {
          const i = e.currentTarget.dataset.i;
          const node2 = this.childs[i];
          const items = this.root._getItem(node2);
          this.root._tooltip({
            top: getTop(e),
            items,
            success: (tapIndex) => {
              if (items[tapIndex] === "更换链接") {
                this.root.getSrc("link", node2.attrs.href).then((url) => {
                  this.root._editVal(this.opts[7] + "." + i + ".attrs.href", node2.attrs.href, url, true);
                  uni.showToast({
                    title: "成功"
                  });
                }).catch(() => {
                });
              } else {
                this.remove(i);
              }
            }
          });
        }
      },
      /**
       * @description 错误事件
       * @param {Event} e
       */
      mediaError(e) {
        const i = e.currentTarget.dataset.i;
        const node2 = this.childs[i];
        if (node2.name === "video" || node2.name === "audio") {
          let index2 = (this.ctrl[i] || 0) + 1;
          if (index2 > node2.src.length) {
            index2 = 0;
          }
          if (index2 < node2.src.length) {
            this.$set(this.ctrl, i, index2);
            return;
          }
        } else if (node2.name === "img") {
          if (this.opts[2]) {
            this.$set(this.ctrl, i, -1);
          }
          this.checkReady();
        }
        if (this.root) {
          this.root.$emit("error", {
            source: node2.name,
            attrs: node2.attrs,
            errMsg: e.detail.errMsg
          });
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node", true);
    const _component_my_card = vue.resolveComponent("my-card");
    return vue.openBlock(), vue.createElementBlock("view", {
      onClick: _cache[12] || (_cache[12] = (...args) => $options.nodeTap && $options.nodeTap(...args)),
      id: $props.attrs.id,
      class: vue.normalizeClass("_block _" + $props.name + " " + $props.attrs.class),
      style: vue.normalizeStyle(($data.ctrl.root ? "border:1px solid black;padding:5px;display:block;" : "") + $props.attrs.style)
    }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.childs, (n, i) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: i },
            [
              vue.createCommentVNode(" 图片 "),
              vue.createCommentVNode(" 占位图 "),
              n.name === "img" && !n.t && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                class: "_img",
                style: vue.normalizeStyle(n.attrs.style),
                src: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1],
                mode: "widthFix"
              }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 显示图片 "),
              vue.createCommentVNode(" 表格中的图片，使用 rich-text 防止大小不正确 "),
              n.name === "img" && n.t ? (vue.openBlock(), vue.createElementBlock("rich-text", {
                key: 1,
                style: vue.normalizeStyle("display:" + n.t),
                nodes: [{ attrs: { style: n.attrs.style || "", src: n.attrs.src }, name: "img" }],
                "data-i": i,
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"]))
              }, null, 12, ["nodes", "data-i"])) : n.name === "img" ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 2,
                id: n.attrs.id,
                class: vue.normalizeClass("_img " + n.attrs.class),
                style: vue.normalizeStyle(($data.ctrl["e" + i] ? "border:1px dashed black;padding:3px;" : "") + ($data.ctrl[i] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i] || 1) + "px;" + n.attrs.style),
                src: n.attrs.src || ($data.ctrl.load ? n.attrs["data-src"] : ""),
                mode: !n.h ? "widthFix" : !n.w ? "heightFix" : n.m || "",
                "data-i": i,
                onLoad: _cache[1] || (_cache[1] = (...args) => $options.imgLoad && $options.imgLoad(...args)),
                onError: _cache[2] || (_cache[2] = (...args) => $options.mediaError && $options.mediaError(...args)),
                onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"])),
                onLongpress: _cache[4] || (_cache[4] = (...args) => $options.imgLongTap && $options.imgLongTap(...args))
              }, null, 46, ["id", "src", "mode", "data-i"])) : n.type === "text" && !$data.ctrl["e" + i] ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 3 },
                [
                  vue.createCommentVNode(" 文本 "),
                  vue.createElementVNode("text", {
                    "data-i": i,
                    "user-select": $props.opts[4],
                    decode: !$props.opts[5],
                    onClick: _cache[5] || (_cache[5] = (...args) => $options.editStart && $options.editStart(...args))
                  }, [
                    vue.createTextVNode(
                      vue.toDisplayString(n.text) + " ",
                      1
                      /* TEXT */
                    ),
                    !n.text ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 0,
                        style: { "color": "gray" }
                      },
                      vue.toDisplayString($props.opts[6] || "请输入"),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ], 8, ["data-i", "user-select", "decode"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : n.type === "text" && $data.ctrl["e" + i] === 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 4,
                "data-i": i,
                style: { "border": "1px dashed black", "min-width": "50px", "width": "auto", "padding": "5px", "display": "block" },
                onClick: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.editStart && $options.editStart(...args), ["stop"]))
              }, [
                vue.createTextVNode(
                  vue.toDisplayString(n.text) + " ",
                  1
                  /* TEXT */
                ),
                !n.text ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    style: { "color": "gray" }
                  },
                  vue.toDisplayString($props.opts[6] || "请输入"),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ], 8, ["data-i"])) : n.type === "text" ? (vue.openBlock(), vue.createElementBlock("textarea", {
                key: 5,
                style: { "border": "1px dashed black", "min-width": "50px", "width": "auto", "padding": "5px" },
                "auto-height": "",
                maxlength: "-1",
                focus: $data.ctrl["e" + i] === 3,
                value: n.text,
                "data-i": i,
                onInput: _cache[7] || (_cache[7] = (...args) => $options.editInput && $options.editInput(...args)),
                onBlur: _cache[8] || (_cache[8] = (...args) => $options.editEnd && $options.editEnd(...args))
              }, null, 40, ["focus", "value", "data-i"])) : n.name === "br" ? (vue.openBlock(), vue.createElementBlock("text", { key: 6 }, "\\n")) : n.name === "a" ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 7 },
                [
                  vue.createCommentVNode(" 链接 "),
                  vue.createElementVNode("view", {
                    id: n.attrs.id,
                    class: vue.normalizeClass((n.attrs.href ? "_a " : "") + n.attrs.class),
                    "hover-class": "_hover",
                    style: vue.normalizeStyle("display:inline;" + n.attrs.style),
                    "data-i": i,
                    onClick: _cache[9] || (_cache[9] = vue.withModifiers((...args) => $options.linkTap && $options.linkTap(...args), ["stop"]))
                  }, [
                    vue.createVNode(_component_node, {
                      name: "span",
                      childs: n.children,
                      opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6], $props.opts[7] + "." + i + ".children"],
                      style: { "display": "inherit" }
                    }, null, 8, ["childs", "opts"])
                  ], 14, ["id", "data-i"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : n.html ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 8 },
                [
                  vue.createCommentVNode(" 视频 "),
                  vue.createElementVNode("view", {
                    "data-i": i,
                    onClick: _cache[10] || (_cache[10] = (...args) => $options.mediaTap && $options.mediaTap(...args)),
                    id: n.attrs.id,
                    class: vue.normalizeClass("_video " + n.attrs.class),
                    style: vue.normalizeStyle(n.attrs.style),
                    innerHTML: n.html,
                    onVplay: _cache[11] || (_cache[11] = vue.withModifiers((...args) => $options.play && $options.play(...args), ["stop"]))
                  }, null, 46, ["data-i", "id", "innerHTML"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : n.name === "iframe" ? (vue.openBlock(), vue.createElementBlock("iframe", {
                key: 9,
                style: vue.normalizeStyle(n.attrs.style),
                allowfullscreen: n.attrs.allowfullscreen,
                frameborder: n.attrs.frameborder,
                src: n.attrs.src
              }, null, 12, ["allowfullscreen", "frameborder", "src"])) : n.name === "embed" ? (vue.openBlock(), vue.createElementBlock("embed", {
                key: 10,
                style: vue.normalizeStyle(n.attrs.style),
                src: n.attrs.src
              }, null, 12, ["src"])) : n.name === "table" && (n.c || $props.opts[5]) || n.name === "li" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 11,
                id: n.attrs.id,
                class: vue.normalizeClass("_" + n.name + " " + n.attrs.class),
                style: vue.normalizeStyle(n.attrs.style)
              }, [
                n.name === "li" ? (vue.openBlock(), vue.createBlock(_component_node, {
                  key: 0,
                  childs: n.children,
                  opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6], $props.opts[7] + "." + i + ".children"]
                }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  vue.renderList(n.children, (tbody, x) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: x,
                        class: vue.normalizeClass("_" + tbody.name + " " + tbody.attrs.class),
                        style: vue.normalizeStyle(tbody.attrs.style)
                      },
                      [
                        tbody.name === "td" || tbody.name === "th" ? (vue.openBlock(), vue.createBlock(_component_node, {
                          key: 0,
                          childs: tbody.children,
                          opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6], $props.opts[7] + "." + i + ".children." + x + ".children"]
                        }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          { key: 1 },
                          vue.renderList(tbody.children, (tr, y) => {
                            return vue.openBlock(), vue.createElementBlock(
                              vue.Fragment,
                              { key: y },
                              [
                                tr.name === "td" || tr.name === "th" ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 0,
                                    class: vue.normalizeClass("_" + tr.name + " " + tr.attrs.class),
                                    style: vue.normalizeStyle(tr.attrs.style)
                                  },
                                  [
                                    vue.createVNode(_component_node, {
                                      childs: tr.children,
                                      opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6], $props.opts[7] + "." + i + ".children." + x + ".children." + y + ".children"]
                                    }, null, 8, ["childs", "opts"])
                                  ],
                                  6
                                  /* CLASS, STYLE */
                                )) : (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 1,
                                    class: vue.normalizeClass("_" + tr.name + " " + tr.attrs.class),
                                    style: vue.normalizeStyle(tr.attrs.style)
                                  },
                                  [
                                    (vue.openBlock(true), vue.createElementBlock(
                                      vue.Fragment,
                                      null,
                                      vue.renderList(tr.children, (td, z) => {
                                        return vue.openBlock(), vue.createElementBlock(
                                          "view",
                                          {
                                            key: z,
                                            class: vue.normalizeClass("_" + td.name + " " + td.attrs.class),
                                            style: vue.normalizeStyle(td.attrs.style)
                                          },
                                          [
                                            vue.createVNode(_component_node, {
                                              childs: td.children,
                                              opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6], $props.opts[7] + "." + i + ".children." + x + ".children." + y + ".children." + z + ".children"]
                                            }, null, 8, ["childs", "opts"])
                                          ],
                                          6
                                          /* CLASS, STYLE */
                                        );
                                      }),
                                      128
                                      /* KEYED_FRAGMENT */
                                    ))
                                  ],
                                  6
                                  /* CLASS, STYLE */
                                ))
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 14, ["id"])) : n.name == "card" ? (vue.openBlock(), vue.createBlock(_component_my_card, {
                key: 12,
                onClick: ($event) => $options.mediaTap($event, i),
                class: vue.normalizeClass(n.attrs.class),
                style: vue.normalizeStyle(n.attrs.style),
                mode: $props.opts[5],
                src: n.attrs.src,
                title: n.attrs.title,
                desc: n.attrs.desc,
                url: n.attrs.url,
                color: n.attrs.color,
                bgcolor: n.attrs.bgcolor,
                border: n.attrs.border,
                name: n.attrs.name,
                "data-i": i,
                "data-source": "card"
              }, null, 8, ["onClick", "class", "style", "mode", "src", "title", "desc", "url", "color", "bgcolor", "border", "name", "data-i"])) : !$props.opts[5] && !n.c ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 13 },
                [
                  vue.createCommentVNode(" 富文本 "),
                  vue.createElementVNode("rich-text", {
                    id: n.attrs.id,
                    style: vue.normalizeStyle("display:inline;" + n.f),
                    preview: false,
                    selectable: $props.opts[4],
                    "user-select": $props.opts[4],
                    nodes: [n]
                  }, null, 12, ["id", "selectable", "user-select", "nodes"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : n.c === 2 ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 14 },
                [
                  vue.createCommentVNode(" 继续递归 "),
                  vue.createElementVNode("view", {
                    id: n.attrs.id,
                    class: vue.normalizeClass("_block _" + n.name + " " + n.attrs.class),
                    style: vue.normalizeStyle(n.f + ";" + n.attrs.style)
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(n.children, (n2, j) => {
                        return vue.openBlock(), vue.createBlock(_component_node, {
                          key: j,
                          style: vue.normalizeStyle(n2.f),
                          name: n2.name,
                          attrs: n2.attrs,
                          childs: n2.children,
                          opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6], $props.opts[7] + "." + i + ".children." + j + ".children"]
                        }, null, 8, ["style", "name", "attrs", "childs", "opts"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ], 14, ["id"])
                ],
                2112
                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
              )) : (vue.openBlock(), vue.createBlock(_component_node, {
                key: 15,
                style: vue.normalizeStyle(n.f),
                name: n.name,
                attrs: n.attrs,
                childs: n.children,
                opts: [$props.opts[0], $props.opts[1], $props.opts[2], $props.opts[3], $props.opts[4], $props.opts[5], $props.opts[6], $props.opts[7] + "." + i + ".children"]
              }, null, 8, ["style", "name", "attrs", "childs", "opts"]))
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ], 14, ["id"]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$e);
  const node = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$6], ["__scopeId", "data-v-52cead80"], ["__file", "E:/HBuilderProjects/time-master/uni-app/components/mp-html/node/node.vue"]]);
  /*!
   * marked - a markdown parser
   * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
   * https://github.com/markedjs/marked
   */
  function t$1() {
    function i(e2, t3) {
      for (var n2 = 0; n2 < t3.length; n2++) {
        var r2 = t3[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
      }
    }
    function s(e2, t3) {
      (null == t3 || t3 > e2.length) && (t3 = e2.length);
      for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++)
        r2[n2] = e2[n2];
      return r2;
    }
    function p(e2, t3) {
      var n2;
      if ("undefined" != typeof Symbol && null != e2[Symbol.iterator])
        return (n2 = e2[Symbol.iterator]()).next.bind(n2);
      if (Array.isArray(e2) || (n2 = function(e3, t4) {
        if (e3) {
          if ("string" == typeof e3)
            return s(e3, t4);
          var n3 = Object.prototype.toString.call(e3).slice(8, -1);
          return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? s(e3, t4) : void 0;
        }
      }(e2)) || t3 && e2 && "number" == typeof e2.length) {
        n2 && (e2 = n2);
        var r2 = 0;
        return function() {
          return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function n(e2) {
      return c[e2];
    }
    var e, t2 = (function(t3) {
      function e2() {
        return { baseUrl: null, breaks: false, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
      }
      t3.exports = { defaults: e2(), getDefaults: e2, changeDefaults: function(e3) {
        t3.exports.defaults = e3;
      } };
    }(e = { exports: {} }), e.exports), r = (t2.defaults, t2.getDefaults, t2.changeDefaults, /[&<>"']/), l = /[&<>"']/g, a = /[<>"']|&(?!#?\w+;)/, o = /[<>"']|&(?!#?\w+;)/g, c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    var u = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function h(e2) {
      return e2.replace(u, function(e3, t3) {
        return "colon" === (t3 = t3.toLowerCase()) ? ":" : "#" === t3.charAt(0) ? "x" === t3.charAt(1) ? String.fromCharCode(parseInt(t3.substring(2), 16)) : String.fromCharCode(+t3.substring(1)) : "";
      });
    }
    var g = /(^|[^\[])\^/g;
    var f = /[^\w:]/g, d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    var k = {}, b = /^[^:]+:\/*[^/]*$/, m = /^([^:]+:)[\s\S]*$/, x = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function w(e2, t3) {
      k[" " + e2] || (b.test(e2) ? k[" " + e2] = e2 + "/" : k[" " + e2] = v(e2, "/", true));
      var n2 = -1 === (e2 = k[" " + e2]).indexOf(":");
      return "//" === t3.substring(0, 2) ? n2 ? t3 : e2.replace(m, "$1") + t3 : "/" === t3.charAt(0) ? n2 ? t3 : e2.replace(x, "$1") + t3 : e2 + t3;
    }
    function v(e2, t3, n2) {
      var r2 = e2.length;
      if (0 === r2)
        return "";
      for (var i2 = 0; i2 < r2; ) {
        var s2 = e2.charAt(r2 - i2 - 1);
        if (s2 !== t3 || n2) {
          if (s2 === t3 || !n2)
            break;
          i2++;
        } else
          i2++;
      }
      return e2.substr(0, r2 - i2);
    }
    var _ = function(e2, t3) {
      if (t3) {
        if (r.test(e2))
          return e2.replace(l, n);
      } else if (a.test(e2))
        return e2.replace(o, n);
      return e2;
    }, y = h, z = function(n2, e2) {
      n2 = n2.source || n2, e2 = e2 || "";
      var r2 = { replace: function(e3, t3) {
        return t3 = (t3 = t3.source || t3).replace(g, "$1"), n2 = n2.replace(e3, t3), r2;
      }, getRegex: function() {
        return new RegExp(n2, e2);
      } };
      return r2;
    }, S = function(e2, t3, n2) {
      if (e2) {
        var r2;
        try {
          r2 = decodeURIComponent(h(n2)).replace(f, "").toLowerCase();
        } catch (e3) {
          return null;
        }
        if (0 === r2.indexOf("javascript:") || 0 === r2.indexOf("vbscript:") || 0 === r2.indexOf("data:"))
          return null;
      }
      t3 && !d.test(n2) && (n2 = w(t3, n2));
      try {
        n2 = encodeURI(n2).replace(/%25/g, "%");
      } catch (e3) {
        return null;
      }
      return n2;
    }, $ = { exec: function() {
    } }, A = function(e2) {
      for (var t3, n2, r2 = 1; r2 < arguments.length; r2++)
        for (n2 in t3 = arguments[r2])
          Object.prototype.hasOwnProperty.call(t3, n2) && (e2[n2] = t3[n2]);
      return e2;
    }, R = function(e2, t3) {
      var n2 = e2.replace(/\|/g, function(e3, t4, n3) {
        for (var r3 = false, i2 = t4; 0 <= --i2 && "\\" === n3[i2]; )
          r3 = !r3;
        return r3 ? "|" : " |";
      }).split(/ \|/), r2 = 0;
      if (n2.length > t3)
        n2.splice(t3);
      else
        for (; n2.length < t3; )
          n2.push("");
      for (; r2 < n2.length; r2++)
        n2[r2] = n2[r2].trim().replace(/\\\|/g, "|");
      return n2;
    }, T = function(e2, t3) {
      if (-1 === e2.indexOf(t3[1]))
        return -1;
      for (var n2 = e2.length, r2 = 0, i2 = 0; i2 < n2; i2++)
        if ("\\" === e2[i2])
          i2++;
        else if (e2[i2] === t3[0])
          r2++;
        else if (e2[i2] === t3[1] && --r2 < 0)
          return i2;
      return -1;
    }, I = function(e2) {
      e2 && e2.sanitize && !e2.silent && formatAppLog("warn", "at uni-app/components/mp-html/markdown/marked.min.js:6", "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }, Z = function(e2, t3) {
      if (t3 < 1)
        return "";
      for (var n2 = ""; 1 < t3; )
        1 & t3 && (n2 += e2), t3 >>= 1, e2 += e2;
      return n2 + e2;
    }, q = t2.defaults, O = v, C = R, U = _, j = T;
    function E(e2, t3, n2) {
      var r2 = t3.href, i2 = t3.title ? U(t3.title) : null, t3 = e2[1].replace(/\\([\[\]])/g, "$1");
      return "!" !== e2[0].charAt(0) ? { type: "link", raw: n2, href: r2, title: i2, text: t3 } : { type: "image", raw: n2, href: r2, title: i2, text: U(t3) };
    }
    var D = function() {
      function e2(e3) {
        this.options = e3 || q;
      }
      var t3 = e2.prototype;
      return t3.space = function(e3) {
        e3 = this.rules.block.newline.exec(e3);
        if (e3)
          return 1 < e3[0].length ? { type: "space", raw: e3[0] } : { raw: "\n" };
      }, t3.code = function(e3, t4) {
        e3 = this.rules.block.code.exec(e3);
        if (e3) {
          t4 = t4[t4.length - 1];
          if (t4 && "paragraph" === t4.type)
            return { raw: e3[0], text: e3[0].trimRight() };
          t4 = e3[0].replace(/^ {4}/gm, "");
          return { type: "code", raw: e3[0], codeBlockStyle: "indented", text: this.options.pedantic ? t4 : O(t4, "\n") };
        }
      }, t3.fences = function(e3) {
        var t4 = this.rules.block.fences.exec(e3);
        if (t4) {
          var n2 = t4[0], e3 = function(e4, t5) {
            if (null === (e4 = e4.match(/^(\s+)(?:```)/)))
              return t5;
            var n3 = e4[1];
            return t5.split("\n").map(function(e5) {
              var t6 = e5.match(/^\s+/);
              return null !== t6 && t6[0].length >= n3.length ? e5.slice(n3.length) : e5;
            }).join("\n");
          }(n2, t4[3] || "");
          return { type: "code", raw: n2, lang: t4[2] && t4[2].trim(), text: e3 };
        }
      }, t3.heading = function(e3) {
        e3 = this.rules.block.heading.exec(e3);
        if (e3)
          return { type: "heading", raw: e3[0], depth: e3[1].length, text: e3[2] };
      }, t3.nptable = function(e3) {
        e3 = this.rules.block.nptable.exec(e3);
        if (e3) {
          var t4 = { type: "table", header: C(e3[1].replace(/^ *| *\| *$/g, "")), align: e3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: e3[3] ? e3[3].replace(/\n$/, "").split("\n") : [], raw: e3[0] };
          if (t4.header.length === t4.align.length) {
            for (var n2 = t4.align.length, r2 = 0; r2 < n2; r2++)
              /^ *-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "right" : /^ *:-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "center" : /^ *:-+ *$/.test(t4.align[r2]) ? t4.align[r2] = "left" : t4.align[r2] = null;
            for (n2 = t4.cells.length, r2 = 0; r2 < n2; r2++)
              t4.cells[r2] = C(t4.cells[r2], t4.header.length);
            return t4;
          }
        }
      }, t3.hr = function(e3) {
        e3 = this.rules.block.hr.exec(e3);
        if (e3)
          return { type: "hr", raw: e3[0] };
      }, t3.blockquote = function(e3) {
        var t4 = this.rules.block.blockquote.exec(e3);
        if (t4) {
          e3 = t4[0].replace(/^ *> ?/gm, "");
          return { type: "blockquote", raw: t4[0], text: e3 };
        }
      }, t3.list = function(e3) {
        e3 = this.rules.block.list.exec(e3);
        if (e3) {
          for (var t4, n2, r2, i2, s2, l2 = e3[0], a2 = e3[2], o2 = 1 < a2.length, c2 = { type: "list", raw: l2, ordered: o2, start: o2 ? +a2.slice(0, -1) : "", loose: false, items: [] }, u2 = e3[0].match(this.rules.block.item), p2 = false, h2 = u2.length, g2 = this.rules.block.listItemStart.exec(u2[0]), f2 = 0; f2 < h2; f2++) {
            if (l2 = t4 = u2[f2], f2 !== h2 - 1) {
              if ((r2 = this.rules.block.listItemStart.exec(u2[f2 + 1]))[1].length > g2[0].length || 3 < r2[1].length) {
                u2.splice(f2, 2, u2[f2] + "\n" + u2[f2 + 1]), f2--, h2--;
                continue;
              }
              (!this.options.pedantic || this.options.smartLists ? r2[2][r2[2].length - 1] !== a2[a2.length - 1] : o2 == (1 === r2[2].length)) && (n2 = u2.slice(f2 + 1).join("\n"), c2.raw = c2.raw.substring(0, c2.raw.length - n2.length), f2 = h2 - 1), g2 = r2;
            }
            r2 = t4.length, ~(t4 = t4.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") && (r2 -= t4.length, t4 = this.options.pedantic ? t4.replace(/^ {1,4}/gm, "") : t4.replace(new RegExp("^ {1," + r2 + "}", "gm"), "")), r2 = p2 || /\n\n(?!\s*$)/.test(t4), f2 !== h2 - 1 && (p2 = "\n" === t4.charAt(t4.length - 1), r2 = r2 || p2), r2 && (c2.loose = true), this.options.gfm && (s2 = void 0, (i2 = /^\[[ xX]\] /.test(t4)) && (s2 = " " !== t4[1], t4 = t4.replace(/^\[[ xX]\] +/, ""))), c2.items.push({ type: "list_item", raw: l2, task: i2, checked: s2, loose: r2, text: t4 });
          }
          return c2;
        }
      }, t3.html = function(e3) {
        e3 = this.rules.block.html.exec(e3);
        if (e3)
          return { type: this.options.sanitize ? "paragraph" : "html", raw: e3[0], pre: !this.options.sanitizer && ("pre" === e3[1] || "script" === e3[1] || "style" === e3[1]), text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : U(e3[0]) : e3[0] };
      }, t3.def = function(e3) {
        e3 = this.rules.block.def.exec(e3);
        if (e3)
          return e3[3] && (e3[3] = e3[3].substring(1, e3[3].length - 1)), { tag: e3[1].toLowerCase().replace(/\s+/g, " "), raw: e3[0], href: e3[2], title: e3[3] };
      }, t3.table = function(e3) {
        e3 = this.rules.block.table.exec(e3);
        if (e3) {
          var t4 = { type: "table", header: C(e3[1].replace(/^ *| *\| *$/g, "")), align: e3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: e3[3] ? e3[3].replace(/\n$/, "").split("\n") : [] };
          if (t4.header.length === t4.align.length) {
            t4.raw = e3[0];
            for (var n2 = t4.align.length, r2 = 0; r2 < n2; r2++)
              /^ *-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "right" : /^ *:-+: *$/.test(t4.align[r2]) ? t4.align[r2] = "center" : /^ *:-+ *$/.test(t4.align[r2]) ? t4.align[r2] = "left" : t4.align[r2] = null;
            for (n2 = t4.cells.length, r2 = 0; r2 < n2; r2++)
              t4.cells[r2] = C(t4.cells[r2].replace(/^ *\| *| *\| *$/g, ""), t4.header.length);
            return t4;
          }
        }
      }, t3.lheading = function(e3) {
        e3 = this.rules.block.lheading.exec(e3);
        if (e3)
          return { type: "heading", raw: e3[0], depth: "=" === e3[2].charAt(0) ? 1 : 2, text: e3[1] };
      }, t3.paragraph = function(e3) {
        e3 = this.rules.block.paragraph.exec(e3);
        if (e3)
          return { type: "paragraph", raw: e3[0], text: "\n" === e3[1].charAt(e3[1].length - 1) ? e3[1].slice(0, -1) : e3[1] };
      }, t3.text = function(e3, t4) {
        e3 = this.rules.block.text.exec(e3);
        if (e3) {
          t4 = t4[t4.length - 1];
          return t4 && "text" === t4.type ? { raw: e3[0], text: e3[0] } : { type: "text", raw: e3[0], text: e3[0] };
        }
      }, t3.escape = function(e3) {
        e3 = this.rules.inline.escape.exec(e3);
        if (e3)
          return { type: "escape", raw: e3[0], text: U(e3[1]) };
      }, t3.tag = function(e3, t4, n2) {
        e3 = this.rules.inline.tag.exec(e3);
        if (e3)
          return !t4 && /^<a /i.test(e3[0]) ? t4 = true : t4 && /^<\/a>/i.test(e3[0]) && (t4 = false), !n2 && /^<(pre|code|kbd|script)(\s|>)/i.test(e3[0]) ? n2 = true : n2 && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e3[0]) && (n2 = false), { type: this.options.sanitize ? "text" : "html", raw: e3[0], inLink: t4, inRawBlock: n2, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : U(e3[0]) : e3[0] };
      }, t3.link = function(e3) {
        var t4 = this.rules.inline.link.exec(e3);
        if (t4) {
          e3 = j(t4[2], "()");
          -1 < e3 && (r2 = (0 === t4[0].indexOf("!") ? 5 : 4) + t4[1].length + e3, t4[2] = t4[2].substring(0, e3), t4[0] = t4[0].substring(0, r2).trim(), t4[3] = "");
          var n2, e3 = t4[2], r2 = "";
          return r2 = this.options.pedantic ? (n2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(e3), n2 ? (e3 = n2[1], n2[3]) : "") : t4[3] ? t4[3].slice(1, -1) : "", E(t4, { href: (e3 = e3.trim().replace(/^<([\s\S]*)>$/, "$1")) && e3.replace(this.rules.inline._escapes, "$1"), title: r2 && r2.replace(this.rules.inline._escapes, "$1") }, t4[0]);
        }
      }, t3.reflink = function(e3, t4) {
        if ((n2 = this.rules.inline.reflink.exec(e3)) || (n2 = this.rules.inline.nolink.exec(e3))) {
          e3 = (n2[2] || n2[1]).replace(/\s+/g, " ");
          if ((e3 = t4[e3.toLowerCase()]) && e3.href)
            return E(n2, e3, n2[0]);
          var n2 = n2[0].charAt(0);
          return { type: "text", raw: n2, text: n2 };
        }
      }, t3.strong = function(e3, t4, n2) {
        void 0 === n2 && (n2 = "");
        var r2 = this.rules.inline.strong.start.exec(e3);
        if (r2 && (!r2[1] || r2[1] && ("" === n2 || this.rules.inline.punctuation.exec(n2)))) {
          t4 = t4.slice(-1 * e3.length);
          var i2, s2 = "**" === r2[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
          for (s2.lastIndex = 0; null != (r2 = s2.exec(t4)); )
            if (i2 = this.rules.inline.strong.middle.exec(t4.slice(0, r2.index + 3)))
              return { type: "strong", raw: e3.slice(0, i2[0].length), text: e3.slice(2, i2[0].length - 2) };
        }
      }, t3.em = function(e3, t4, n2) {
        void 0 === n2 && (n2 = "");
        var r2 = this.rules.inline.em.start.exec(e3);
        if (r2 && (!r2[1] || r2[1] && ("" === n2 || this.rules.inline.punctuation.exec(n2)))) {
          t4 = t4.slice(-1 * e3.length);
          var i2, s2 = "*" === r2[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
          for (s2.lastIndex = 0; null != (r2 = s2.exec(t4)); )
            if (i2 = this.rules.inline.em.middle.exec(t4.slice(0, r2.index + 2)))
              return { type: "em", raw: e3.slice(0, i2[0].length), text: e3.slice(1, i2[0].length - 1) };
        }
      }, t3.codespan = function(e3) {
        var t4 = this.rules.inline.code.exec(e3);
        if (t4) {
          var n2 = t4[2].replace(/\n/g, " "), r2 = /[^ ]/.test(n2), e3 = n2.startsWith(" ") && n2.endsWith(" ");
          return r2 && e3 && (n2 = n2.substring(1, n2.length - 1)), n2 = U(n2, true), { type: "codespan", raw: t4[0], text: n2 };
        }
      }, t3.br = function(e3) {
        e3 = this.rules.inline.br.exec(e3);
        if (e3)
          return { type: "br", raw: e3[0] };
      }, t3.del = function(e3) {
        e3 = this.rules.inline.del.exec(e3);
        if (e3)
          return { type: "del", raw: e3[0], text: e3[2] };
      }, t3.autolink = function(e3, t4) {
        e3 = this.rules.inline.autolink.exec(e3);
        if (e3) {
          var n2, t4 = "@" === e3[2] ? "mailto:" + (n2 = U(this.options.mangle ? t4(e3[1]) : e3[1])) : n2 = U(e3[1]);
          return { type: "link", raw: e3[0], text: n2, href: t4, tokens: [{ type: "text", raw: n2, text: n2 }] };
        }
      }, t3.url = function(e3, t4) {
        var n2, r2, i2, s2;
        if (n2 = this.rules.inline.url.exec(e3)) {
          if ("@" === n2[2])
            i2 = "mailto:" + (r2 = U(this.options.mangle ? t4(n2[0]) : n2[0]));
          else {
            for (; s2 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0], s2 !== n2[0]; )
              ;
            r2 = U(n2[0]), i2 = "www." === n2[1] ? "http://" + r2 : r2;
          }
          return { type: "link", raw: n2[0], text: r2, href: i2, tokens: [{ type: "text", raw: r2, text: r2 }] };
        }
      }, t3.inlineText = function(e3, t4, n2) {
        e3 = this.rules.inline.text.exec(e3);
        if (e3) {
          n2 = t4 ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e3[0]) : U(e3[0]) : e3[0] : U(this.options.smartypants ? n2(e3[0]) : e3[0]);
          return { type: "text", raw: e3[0], text: n2 };
        }
      }, e2;
    }(), R = $, T = z, $ = A, z = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/, html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))", def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, nptable: R, table: R, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
    z.def = T(z.def).replace("label", z._label).replace("title", z._title).getRegex(), z.bullet = /(?:[*+-]|\d{1,9}[.)])/, z.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, z.item = T(z.item, "gm").replace(/bull/g, z.bullet).getRegex(), z.listItemStart = T(/^( *)(bull)/).replace("bull", z.bullet).getRegex(), z.list = T(z.list).replace(/bull/g, z.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + z.def.source + ")").getRegex(), z._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", z._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, z.html = T(z.html, "i").replace("comment", z._comment).replace("tag", z._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), z.paragraph = T(z._paragraph).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.blockquote = T(z.blockquote).replace("paragraph", z.paragraph).getRegex(), z.normal = $({}, z), z.gfm = $({}, z.normal, { nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)", table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), z.gfm.nptable = T(z.gfm.nptable).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.gfm.table = T(z.gfm.table).replace("hr", z.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", z._tag).getRegex(), z.pedantic = $({}, z.normal, { html: T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", z._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/, fences: R, paragraph: T(z.normal._paragraph).replace("hr", z.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", z.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
    R = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: R, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", strong: { start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/, middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/, endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/ }, em: { start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/, middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/, endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/, endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: R, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\s*punctuation])/, _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~" };
    R.punctuation = T(R.punctuation).replace(/punctuation/g, R._punctuation).getRegex(), R._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", R._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", R._comment = T(z._comment).replace("(?:-->|$)", "-->").getRegex(), R.em.start = T(R.em.start).replace(/punctuation/g, R._punctuation).getRegex(), R.em.middle = T(R.em.middle).replace(/punctuation/g, R._punctuation).replace(/overlapSkip/g, R._overlapSkip).getRegex(), R.em.endAst = T(R.em.endAst, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.em.endUnd = T(R.em.endUnd, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.strong.start = T(R.strong.start).replace(/punctuation/g, R._punctuation).getRegex(), R.strong.middle = T(R.strong.middle).replace(/punctuation/g, R._punctuation).replace(/overlapSkip/g, R._overlapSkip).getRegex(), R.strong.endAst = T(R.strong.endAst, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.strong.endUnd = T(R.strong.endUnd, "g").replace(/punctuation/g, R._punctuation).getRegex(), R.blockSkip = T(R._blockSkip, "g").getRegex(), R.overlapSkip = T(R._overlapSkip, "g").getRegex(), R._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, R._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, R._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, R.autolink = T(R.autolink).replace("scheme", R._scheme).replace("email", R._email).getRegex(), R._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, R.tag = T(R.tag).replace("comment", R._comment).replace("attribute", R._attribute).getRegex(), R._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, R._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, R._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, R.link = T(R.link).replace("label", R._label).replace("href", R._href).replace("title", R._title).getRegex(), R.reflink = T(R.reflink).replace("label", R._label).getRegex(), R.reflinkSearch = T(R.reflinkSearch, "g").replace("reflink", R.reflink).replace("nolink", R.nolink).getRegex(), R.normal = $({}, R), R.pedantic = $({}, R.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: T(/^!?\[(label)\]\((.*?)\)/).replace("label", R._label).getRegex(), reflink: T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", R._label).getRegex() }), R.gfm = $({}, R.normal, { escape: T(R.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/ }), R.gfm.url = T(R.gfm.url, "i").replace("email", R.gfm._extended_email).getRegex(), R.breaks = $({}, R.gfm, { br: T(R.br).replace("{2,}", "*").getRegex(), text: T(R.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
    var R = { block: z, inline: R }, P = t2.defaults, L = R.block, N = R.inline, B = Z;
    function F(e2) {
      return e2.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
    }
    function M(e2) {
      for (var t3, n2 = "", r2 = e2.length, i2 = 0; i2 < r2; i2++)
        t3 = e2.charCodeAt(i2), 0.5 < Math.random() && (t3 = "x" + t3.toString(16)), n2 += "&#" + t3 + ";";
      return n2;
    }
    var W = function() {
      function n2(e3) {
        this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e3 || P, this.options.tokenizer = this.options.tokenizer || new D(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
        e3 = { block: L.normal, inline: N.normal };
        this.options.pedantic ? (e3.block = L.pedantic, e3.inline = N.pedantic) : this.options.gfm && (e3.block = L.gfm, this.options.breaks ? e3.inline = N.breaks : e3.inline = N.gfm), this.tokenizer.rules = e3;
      }
      n2.lex = function(e3, t4) {
        return new n2(t4).lex(e3);
      }, n2.lexInline = function(e3, t4) {
        return new n2(t4).inlineTokens(e3);
      };
      var e2, t3, r2 = n2.prototype;
      return r2.lex = function(e3) {
        return e3 = e3.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e3, this.tokens, true), this.inline(this.tokens), this.tokens;
      }, r2.blockTokens = function(e3, t4, n3) {
        var r3, i2, s2, l2;
        for (void 0 === t4 && (t4 = []), void 0 === n3 && (n3 = true), e3 = e3.replace(/^ +$/gm, ""); e3; )
          if (r3 = this.tokenizer.space(e3))
            e3 = e3.substring(r3.raw.length), r3.type && t4.push(r3);
          else if (r3 = this.tokenizer.code(e3, t4))
            e3 = e3.substring(r3.raw.length), r3.type ? t4.push(r3) : ((l2 = t4[t4.length - 1]).raw += "\n" + r3.raw, l2.text += "\n" + r3.text);
          else if (r3 = this.tokenizer.fences(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.heading(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.nptable(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.hr(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.blockquote(e3))
            e3 = e3.substring(r3.raw.length), r3.tokens = this.blockTokens(r3.text, [], n3), t4.push(r3);
          else if (r3 = this.tokenizer.list(e3)) {
            for (e3 = e3.substring(r3.raw.length), s2 = r3.items.length, i2 = 0; i2 < s2; i2++)
              r3.items[i2].tokens = this.blockTokens(r3.items[i2].text, [], false);
            t4.push(r3);
          } else if (r3 = this.tokenizer.html(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (n3 && (r3 = this.tokenizer.def(e3)))
            e3 = e3.substring(r3.raw.length), this.tokens.links[r3.tag] || (this.tokens.links[r3.tag] = { href: r3.href, title: r3.title });
          else if (r3 = this.tokenizer.table(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.lheading(e3))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (n3 && (r3 = this.tokenizer.paragraph(e3)))
            e3 = e3.substring(r3.raw.length), t4.push(r3);
          else if (r3 = this.tokenizer.text(e3, t4))
            e3 = e3.substring(r3.raw.length), r3.type ? t4.push(r3) : ((l2 = t4[t4.length - 1]).raw += "\n" + r3.raw, l2.text += "\n" + r3.text);
          else if (e3) {
            var a2 = "Infinite loop on byte: " + e3.charCodeAt(0);
            if (this.options.silent) {
              formatAppLog("error", "at uni-app/components/mp-html/markdown/marked.min.js:6", a2);
              break;
            }
            throw new Error(a2);
          }
        return t4;
      }, r2.inline = function(e3) {
        for (var t4, n3, r3, i2, s2, l2 = e3.length, a2 = 0; a2 < l2; a2++)
          switch ((s2 = e3[a2]).type) {
            case "paragraph":
            case "text":
            case "heading":
              s2.tokens = [], this.inlineTokens(s2.text, s2.tokens);
              break;
            case "table":
              for (s2.tokens = { header: [], cells: [] }, r3 = s2.header.length, t4 = 0; t4 < r3; t4++)
                s2.tokens.header[t4] = [], this.inlineTokens(s2.header[t4], s2.tokens.header[t4]);
              for (r3 = s2.cells.length, t4 = 0; t4 < r3; t4++)
                for (i2 = s2.cells[t4], s2.tokens.cells[t4] = [], n3 = 0; n3 < i2.length; n3++)
                  s2.tokens.cells[t4][n3] = [], this.inlineTokens(i2[n3], s2.tokens.cells[t4][n3]);
              break;
            case "blockquote":
              this.inline(s2.tokens);
              break;
            case "list":
              for (r3 = s2.items.length, t4 = 0; t4 < r3; t4++)
                this.inline(s2.items[t4].tokens);
          }
        return e3;
      }, r2.inlineTokens = function(e3, t4, n3, r3) {
        var i2;
        void 0 === t4 && (t4 = []), void 0 === n3 && (n3 = false), void 0 === r3 && (r3 = false);
        var s2, l2, a2, o2 = e3;
        if (this.tokens.links) {
          var c2 = Object.keys(this.tokens.links);
          if (0 < c2.length)
            for (; null != (s2 = this.tokenizer.rules.inline.reflinkSearch.exec(o2)); )
              c2.includes(s2[0].slice(s2[0].lastIndexOf("[") + 1, -1)) && (o2 = o2.slice(0, s2.index) + "[" + B("a", s2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (s2 = this.tokenizer.rules.inline.blockSkip.exec(o2)); )
          o2 = o2.slice(0, s2.index) + "[" + B("a", s2[0].length - 2) + "]" + o2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; e3; )
          if (l2 || (a2 = ""), l2 = false, i2 = this.tokenizer.escape(e3))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (i2 = this.tokenizer.tag(e3, n3, r3))
            e3 = e3.substring(i2.raw.length), n3 = i2.inLink, r3 = i2.inRawBlock, t4.push(i2);
          else if (i2 = this.tokenizer.link(e3))
            e3 = e3.substring(i2.raw.length), "link" === i2.type && (i2.tokens = this.inlineTokens(i2.text, [], true, r3)), t4.push(i2);
          else if (i2 = this.tokenizer.reflink(e3, this.tokens.links))
            e3 = e3.substring(i2.raw.length), "link" === i2.type && (i2.tokens = this.inlineTokens(i2.text, [], true, r3)), t4.push(i2);
          else if (i2 = this.tokenizer.strong(e3, o2, a2))
            e3 = e3.substring(i2.raw.length), i2.tokens = this.inlineTokens(i2.text, [], n3, r3), t4.push(i2);
          else if (i2 = this.tokenizer.em(e3, o2, a2))
            e3 = e3.substring(i2.raw.length), i2.tokens = this.inlineTokens(i2.text, [], n3, r3), t4.push(i2);
          else if (i2 = this.tokenizer.codespan(e3))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (i2 = this.tokenizer.br(e3))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (i2 = this.tokenizer.del(e3))
            e3 = e3.substring(i2.raw.length), i2.tokens = this.inlineTokens(i2.text, [], n3, r3), t4.push(i2);
          else if (i2 = this.tokenizer.autolink(e3, M))
            e3 = e3.substring(i2.raw.length), t4.push(i2);
          else if (n3 || !(i2 = this.tokenizer.url(e3, M))) {
            if (i2 = this.tokenizer.inlineText(e3, r3, F))
              e3 = e3.substring(i2.raw.length), a2 = i2.raw.slice(-1), l2 = true, t4.push(i2);
            else if (e3) {
              var u2 = "Infinite loop on byte: " + e3.charCodeAt(0);
              if (this.options.silent) {
                formatAppLog("error", "at uni-app/components/mp-html/markdown/marked.min.js:6", u2);
                break;
              }
              throw new Error(u2);
            }
          } else
            e3 = e3.substring(i2.raw.length), t4.push(i2);
        return t4;
      }, e2 = n2, t3 = [{ key: "rules", get: function() {
        return { block: L, inline: N };
      } }], (r2 = null) && i(e2.prototype, r2), t3 && i(e2, t3), n2;
    }(), X = t2.defaults, G = S, V = _, H = function() {
      function e2(e3) {
        this.options = e3 || X;
      }
      var t3 = e2.prototype;
      return t3.code = function(e3, t4, n2) {
        var r2 = (t4 || "").match(/\S*/)[0];
        return !this.options.highlight || null != (t4 = this.options.highlight(e3, r2)) && t4 !== e3 && (n2 = true, e3 = t4), r2 ? '<pre><code class="' + this.options.langPrefix + V(r2, true) + '">' + (n2 ? e3 : V(e3, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? e3 : V(e3, true)) + "</code></pre>\n";
      }, t3.blockquote = function(e3) {
        return "<blockquote>\n" + e3 + "</blockquote>\n";
      }, t3.html = function(e3) {
        return e3;
      }, t3.heading = function(e3, t4, n2, r2) {
        return this.options.headerIds ? "<h" + t4 + ' id="' + this.options.headerPrefix + r2.slug(n2) + '">' + e3 + "</h" + t4 + ">\n" : "<h" + t4 + ">" + e3 + "</h" + t4 + ">\n";
      }, t3.hr = function() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }, t3.list = function(e3, t4, n2) {
        var r2 = t4 ? "ol" : "ul";
        return "<" + r2 + (t4 && 1 !== n2 ? ' start="' + n2 + '"' : "") + ">\n" + e3 + "</" + r2 + ">\n";
      }, t3.listitem = function(e3) {
        return "<li>" + e3 + "</li>\n";
      }, t3.checkbox = function(e3) {
        return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }, t3.paragraph = function(e3) {
        return "<p>" + e3 + "</p>\n";
      }, t3.table = function(e3, t4) {
        return "<table>\n<thead>\n" + e3 + "</thead>\n" + (t4 = t4 && "<tbody>" + t4 + "</tbody>") + "</table>\n";
      }, t3.tablerow = function(e3) {
        return "<tr>\n" + e3 + "</tr>\n";
      }, t3.tablecell = function(e3, t4) {
        var n2 = t4.header ? "th" : "td";
        return (t4.align ? "<" + n2 + ' align="' + t4.align + '">' : "<" + n2 + ">") + e3 + "</" + n2 + ">\n";
      }, t3.strong = function(e3) {
        return "<strong>" + e3 + "</strong>";
      }, t3.em = function(e3) {
        return "<em>" + e3 + "</em>";
      }, t3.codespan = function(e3) {
        return "<code>" + e3 + "</code>";
      }, t3.br = function() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }, t3.del = function(e3) {
        return "<del>" + e3 + "</del>";
      }, t3.link = function(e3, t4, n2) {
        if (null === (e3 = G(this.options.sanitize, this.options.baseUrl, e3)))
          return n2;
        e3 = '<a href="' + V(e3) + '"';
        return t4 && (e3 += ' title="' + t4 + '"'), e3 += ">" + n2 + "</a>";
      }, t3.image = function(e3, t4, n2) {
        if (null === (e3 = G(this.options.sanitize, this.options.baseUrl, e3)))
          return n2;
        n2 = '<img src="' + e3 + '" alt="' + n2 + '"';
        return t4 && (n2 += ' title="' + t4 + '"'), n2 += this.options.xhtml ? "/>" : ">";
      }, t3.text = function(e3) {
        return e3;
      }, e2;
    }(), J = function() {
      function e2() {
      }
      var t3 = e2.prototype;
      return t3.strong = function(e3) {
        return e3;
      }, t3.em = function(e3) {
        return e3;
      }, t3.codespan = function(e3) {
        return e3;
      }, t3.del = function(e3) {
        return e3;
      }, t3.html = function(e3) {
        return e3;
      }, t3.text = function(e3) {
        return e3;
      }, t3.link = function(e3, t4, n2) {
        return "" + n2;
      }, t3.image = function(e3, t4, n2) {
        return "" + n2;
      }, t3.br = function() {
        return "";
      }, e2;
    }(), K = function() {
      function e2() {
        this.seen = {};
      }
      var t3 = e2.prototype;
      return t3.serialize = function(e3) {
        return e3.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
      }, t3.getNextSafeSlug = function(e3, t4) {
        var n2 = e3, r2 = 0;
        if (this.seen.hasOwnProperty(n2))
          for (r2 = this.seen[e3]; n2 = e3 + "-" + ++r2, this.seen.hasOwnProperty(n2); )
            ;
        return t4 || (this.seen[e3] = r2, this.seen[n2] = 0), n2;
      }, t3.slug = function(e3, t4) {
        void 0 === t4 && (t4 = {});
        var n2 = this.serialize(e3);
        return this.getNextSafeSlug(n2, t4.dryrun);
      }, e2;
    }(), Q = t2.defaults, Y = y, ee = function() {
      function n2(e3) {
        this.options = e3 || Q, this.options.renderer = this.options.renderer || new H(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new J(), this.slugger = new K();
      }
      n2.parse = function(e3, t3) {
        return new n2(t3).parse(e3);
      }, n2.parseInline = function(e3, t3) {
        return new n2(t3).parseInline(e3);
      };
      var e2 = n2.prototype;
      return e2.parse = function(e3, t3) {
        void 0 === t3 && (t3 = true);
        for (var n3, r2, i2, s2, l2, a2, o2, c2, u2, p2, h2, g2, f2, d2, k2, b2 = "", m2 = e3.length, x2 = 0; x2 < m2; x2++)
          switch ((c2 = e3[x2]).type) {
            case "space":
              continue;
            case "hr":
              b2 += this.renderer.hr();
              continue;
            case "heading":
              b2 += this.renderer.heading(this.parseInline(c2.tokens), c2.depth, Y(this.parseInline(c2.tokens, this.textRenderer)), this.slugger);
              continue;
            case "code":
              b2 += this.renderer.code(c2.text, c2.lang, c2.escaped);
              continue;
            case "table":
              for (a2 = u2 = "", i2 = c2.header.length, n3 = 0; n3 < i2; n3++)
                a2 += this.renderer.tablecell(this.parseInline(c2.tokens.header[n3]), { header: true, align: c2.align[n3] });
              for (u2 += this.renderer.tablerow(a2), o2 = "", i2 = c2.cells.length, n3 = 0; n3 < i2; n3++) {
                for (a2 = "", s2 = (l2 = c2.tokens.cells[n3]).length, r2 = 0; r2 < s2; r2++)
                  a2 += this.renderer.tablecell(this.parseInline(l2[r2]), { header: false, align: c2.align[r2] });
                o2 += this.renderer.tablerow(a2);
              }
              b2 += this.renderer.table(u2, o2);
              continue;
            case "blockquote":
              o2 = this.parse(c2.tokens), b2 += this.renderer.blockquote(o2);
              continue;
            case "list":
              for (u2 = c2.ordered, w2 = c2.start, p2 = c2.loose, i2 = c2.items.length, o2 = "", n3 = 0; n3 < i2; n3++)
                f2 = (g2 = c2.items[n3]).checked, d2 = g2.task, h2 = "", g2.task && (k2 = this.renderer.checkbox(f2), p2 ? 0 < g2.tokens.length && "text" === g2.tokens[0].type ? (g2.tokens[0].text = k2 + " " + g2.tokens[0].text, g2.tokens[0].tokens && 0 < g2.tokens[0].tokens.length && "text" === g2.tokens[0].tokens[0].type && (g2.tokens[0].tokens[0].text = k2 + " " + g2.tokens[0].tokens[0].text)) : g2.tokens.unshift({ type: "text", text: k2 }) : h2 += k2), h2 += this.parse(g2.tokens, p2), o2 += this.renderer.listitem(h2, d2, f2);
              b2 += this.renderer.list(o2, u2, w2);
              continue;
            case "html":
              b2 += this.renderer.html(c2.text);
              continue;
            case "paragraph":
              b2 += this.renderer.paragraph(this.parseInline(c2.tokens));
              continue;
            case "text":
              for (o2 = c2.tokens ? this.parseInline(c2.tokens) : c2.text; x2 + 1 < m2 && "text" === e3[x2 + 1].type; )
                o2 += "\n" + ((c2 = e3[++x2]).tokens ? this.parseInline(c2.tokens) : c2.text);
              b2 += t3 ? this.renderer.paragraph(o2) : o2;
              continue;
            default:
              var w2 = 'Token with "' + c2.type + '" type was not found.';
              if (this.options.silent)
                return void formatAppLog("error", "at uni-app/components/mp-html/markdown/marked.min.js:6", w2);
              throw new Error(w2);
          }
        return b2;
      }, e2.parseInline = function(e3, t3) {
        t3 = t3 || this.renderer;
        for (var n3, r2 = "", i2 = e3.length, s2 = 0; s2 < i2; s2++)
          switch ((n3 = e3[s2]).type) {
            case "escape":
              r2 += t3.text(n3.text);
              break;
            case "html":
              r2 += t3.html(n3.text);
              break;
            case "link":
              r2 += t3.link(n3.href, n3.title, this.parseInline(n3.tokens, t3));
              break;
            case "image":
              r2 += t3.image(n3.href, n3.title, n3.text);
              break;
            case "strong":
              r2 += t3.strong(this.parseInline(n3.tokens, t3));
              break;
            case "em":
              r2 += t3.em(this.parseInline(n3.tokens, t3));
              break;
            case "codespan":
              r2 += t3.codespan(n3.text);
              break;
            case "br":
              r2 += t3.br();
              break;
            case "del":
              r2 += t3.del(this.parseInline(n3.tokens, t3));
              break;
            case "text":
              r2 += t3.text(n3.text);
              break;
            default:
              var l2 = 'Token with "' + n3.type + '" type was not found.';
              if (this.options.silent)
                return void formatAppLog("error", "at uni-app/components/mp-html/markdown/marked.min.js:6", l2);
              throw new Error(l2);
          }
        return r2;
      }, n2;
    }(), te = A, ne = I, re = _, _ = t2.getDefaults, ie = t2.changeDefaults, t2 = t2.defaults;
    function se(e2, n2, r2) {
      if (null == e2)
        throw new Error("marked(): input parameter is undefined or null");
      if ("string" != typeof e2)
        throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
      if ("function" == typeof n2 && (r2 = n2, n2 = null), n2 = te({}, se.defaults, n2 || {}), ne(n2), r2) {
        var i2, s2 = n2.highlight;
        try {
          i2 = W.lex(e2, n2);
        } catch (e3) {
          return r2(e3);
        }
        var l2 = function(t4) {
          var e3;
          if (!t4)
            try {
              e3 = ee.parse(i2, n2);
            } catch (e4) {
              t4 = e4;
            }
          return n2.highlight = s2, t4 ? r2(t4) : r2(null, e3);
        };
        if (!s2 || s2.length < 3)
          return l2();
        if (delete n2.highlight, !i2.length)
          return l2();
        var a2 = 0;
        return se.walkTokens(i2, function(n3) {
          "code" === n3.type && (a2++, setTimeout(function() {
            s2(n3.text, n3.lang, function(e3, t4) {
              return e3 ? l2(e3) : (null != t4 && t4 !== n3.text && (n3.text = t4, n3.escaped = true), void (0 === --a2 && l2()));
            });
          }, 0));
        }), void (0 === a2 && l2());
      }
      try {
        var t3 = W.lex(e2, n2);
        return n2.walkTokens && se.walkTokens(t3, n2.walkTokens), ee.parse(t3, n2);
      } catch (e3) {
        if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", n2.silent)
          return "<p>An error occurred:</p><pre>" + re(e3.message + "", true) + "</pre>";
        throw e3;
      }
    }
    return se.options = se.setOptions = function(e2) {
      return te(se.defaults, e2), ie(se.defaults), se;
    }, se.getDefaults = _, se.defaults = t2, se.use = function(a2) {
      var t3, n2 = te({}, a2);
      a2.renderer && function() {
        var e2, l2 = se.defaults.renderer || new H();
        for (e2 in a2.renderer)
          !function(i2) {
            var s2 = l2[i2];
            l2[i2] = function() {
              for (var e3 = arguments.length, t4 = new Array(e3), n3 = 0; n3 < e3; n3++)
                t4[n3] = arguments[n3];
              var r2 = a2.renderer[i2].apply(l2, t4);
              return false === r2 && (r2 = s2.apply(l2, t4)), r2;
            };
          }(e2);
        n2.renderer = l2;
      }(), a2.tokenizer && function() {
        var e2, l2 = se.defaults.tokenizer || new D();
        for (e2 in a2.tokenizer)
          !function(i2) {
            var s2 = l2[i2];
            l2[i2] = function() {
              for (var e3 = arguments.length, t4 = new Array(e3), n3 = 0; n3 < e3; n3++)
                t4[n3] = arguments[n3];
              var r2 = a2.tokenizer[i2].apply(l2, t4);
              return false === r2 && (r2 = s2.apply(l2, t4)), r2;
            };
          }(e2);
        n2.tokenizer = l2;
      }(), a2.walkTokens && (t3 = se.defaults.walkTokens, n2.walkTokens = function(e2) {
        a2.walkTokens(e2), t3 && t3(e2);
      }), se.setOptions(n2);
    }, se.walkTokens = function(e2, t3) {
      for (var n2, r2 = p(e2); !(n2 = r2()).done; ) {
        var i2 = n2.value;
        switch (t3(i2), i2.type) {
          case "table":
            for (var s2 = p(i2.tokens.header); !(l2 = s2()).done; ) {
              var l2 = l2.value;
              se.walkTokens(l2, t3);
            }
            for (var a2, o2 = p(i2.tokens.cells); !(a2 = o2()).done; )
              for (var c2 = p(a2.value); !(u2 = c2()).done; ) {
                var u2 = u2.value;
                se.walkTokens(u2, t3);
              }
            break;
          case "list":
            se.walkTokens(i2.items, t3);
            break;
          default:
            i2.tokens && se.walkTokens(i2.tokens, t3);
        }
      }
    }, se.parseInline = function(e2, t3) {
      if (null == e2)
        throw new Error("marked.parseInline(): input parameter is undefined or null");
      if ("string" != typeof e2)
        throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e2) + ", string expected");
      t3 = te({}, se.defaults, t3 || {}), ne(t3);
      try {
        var n2 = W.lexInline(e2, t3);
        return t3.walkTokens && se.walkTokens(n2, t3.walkTokens), ee.parseInline(n2, t3);
      } catch (e3) {
        if (e3.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
          return "<p>An error occurred:</p><pre>" + re(e3.message + "", true) + "</pre>";
        throw e3;
      }
    }, se.Parser = ee, se.parser = ee.parse, se.Renderer = H, se.TextRenderer = J, se.Lexer = W, se.lexer = W.lex, se.Tokenizer = D, se.Slugger = K, se.parse = se;
  }
  const marked = t$1();
  let index = 0;
  function Markdown(vm) {
    this.vm = vm;
    vm._ids = {};
  }
  Markdown.prototype.onUpdate = function(content) {
    if (this.vm.markdown) {
      return marked(content);
    }
  };
  Markdown.prototype.onParse = function(node2, vm) {
    if (vm.options.markdown) {
      if (vm.options.useAnchor && node2.attrs && /[\u4e00-\u9fa5]/.test(node2.attrs.id)) {
        const id = "t" + index++;
        this.vm._ids[node2.attrs.id] = id;
        node2.attrs.id = id;
      }
      if (node2.name === "p" || node2.name === "table" || node2.name === "tr" || node2.name === "th" || node2.name === "td" || node2.name === "blockquote" || node2.name === "pre" || node2.name === "code") {
        node2.attrs.class = `md-${node2.name} ${node2.attrs.class || ""}`;
      }
    }
  };
  const reg = /\[(\S+?)\]/g;
  const data$1 = {
    笑脸: "😄",
    生病: "😷",
    破涕为笑: "😂",
    吐舌: "😝",
    脸红: "😳",
    恐惧: "😱",
    失望: "😔",
    无语: "😒",
    眨眼: "😉",
    酷: "😎",
    哭: "😭",
    痴迷: "😍",
    吻: "😘",
    思考: "🤔",
    困惑: "😕",
    颠倒: "🙃",
    钱: "🤑",
    惊讶: "😲",
    白眼: "🙄",
    叹气: "😤",
    睡觉: "😴",
    书呆子: "🤓",
    愤怒: "😡",
    面无表情: "😑",
    张嘴: "😮",
    量体温: "🤒",
    呕吐: "🤮",
    光环: "😇",
    幽灵: "👻",
    外星人: "👽",
    机器人: "🤖",
    捂眼镜: "🙈",
    捂耳朵: "🙉",
    捂嘴: "🙊",
    婴儿: "👶",
    男孩: "👦",
    女孩: "👧",
    男人: "👨",
    女人: "👩",
    老人: "👴",
    老妇人: "👵",
    警察: "👮",
    王子: "🤴",
    公主: "🤴",
    举手: "🙋",
    跑步: "🏃",
    家庭: "👪",
    眼睛: "👀",
    鼻子: "👃",
    耳朵: "👂",
    舌头: "👅",
    嘴: "👄",
    心: "❤️",
    心碎: "💔",
    雪人: "☃️",
    情书: "💌",
    大便: "💩",
    闹钟: "⏰",
    眼镜: "👓",
    雨伞: "☂️",
    音乐: "🎵",
    话筒: "🎤",
    游戏机: "🎮",
    喇叭: "📢",
    耳机: "🎧",
    礼物: "🎁",
    电话: "📞",
    电脑: "💻",
    打印机: "🖨️",
    手电筒: "🔦",
    灯泡: "💡",
    书本: "📖",
    信封: "✉️",
    药丸: "💊",
    口红: "💄",
    手机: "📱",
    相机: "📷",
    电视: "📺",
    中: "🀄",
    垃圾桶: "🚮",
    厕所: "🚾",
    感叹号: "❗",
    禁: "🈲",
    可: "🉑",
    彩虹: "🌈",
    旋风: "🌀",
    雷电: "⚡",
    雪花: "❄️",
    星星: "⭐",
    水滴: "💧",
    玫瑰: "🌹",
    加油: "💪",
    左: "👈",
    右: "👉",
    上: "👆",
    下: "👇",
    手掌: "🖐️",
    好的: "👌",
    好: "👍",
    差: "👎",
    胜利: "✌",
    拳头: "👊",
    挥手: "👋",
    鼓掌: "👏",
    猴子: "🐒",
    狗: "🐶",
    狼: "🐺",
    猫: "🐱",
    老虎: "🐯",
    马: "🐎",
    独角兽: "🦄",
    斑马: "🦓",
    鹿: "🦌",
    牛: "🐮",
    猪: "🐷",
    羊: "🐏",
    长颈鹿: "🦒",
    大象: "🐘",
    老鼠: "🐭",
    蝙蝠: "🦇",
    刺猬: "🦔",
    熊猫: "🐼",
    鸽子: "🕊️",
    鸭子: "🦆",
    兔子: "🐇",
    老鹰: "🦅",
    青蛙: "🐸",
    蛇: "🐍",
    龙: "🐉",
    鲸鱼: "🐳",
    海豚: "🐬",
    足球: "⚽",
    棒球: "⚾",
    篮球: "🏀",
    排球: "🏐",
    橄榄球: "🏉",
    网球: "🎾",
    骰子: "🎲",
    鸡腿: "🍗",
    蛋糕: "🎂",
    啤酒: "🍺",
    饺子: "🥟",
    汉堡: "🍔",
    薯条: "🍟",
    意大利面: "🍝",
    干杯: "🥂",
    筷子: "🥢",
    糖果: "🍬",
    奶瓶: "🍼",
    爆米花: "🍿",
    邮局: "🏤",
    医院: "🏥",
    银行: "🏦",
    酒店: "🏨",
    学校: "🏫",
    城堡: "🏰",
    火车: "🚂",
    高铁: "🚄",
    地铁: "🚇",
    公交: "🚌",
    救护车: "🚑",
    消防车: "🚒",
    警车: "🚓",
    出租车: "🚕",
    汽车: "🚗",
    货车: "🚛",
    自行车: "🚲",
    摩托: "🛵",
    红绿灯: "🚥",
    帆船: "⛵",
    游轮: "🛳️",
    轮船: "⛴️",
    飞机: "✈️",
    直升机: "🚁",
    缆车: "🚠",
    警告: "⚠️",
    禁止: "⛔"
  };
  function Emoji() {
  }
  Emoji.prototype.onUpdate = function(content) {
    return content.replace(reg, ($, $1) => {
      if (data$1[$1])
        return data$1[$1];
      return $;
    });
  };
  Emoji.prototype.onGetContent = function(content) {
    for (const item in data$1) {
      content = content.replace(new RegExp(data$1[item], "g"), "[" + item + "]");
    }
    return content;
  };
  /*! PrismJS 1.22.0
  https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript */
  var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function(u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, M = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function e2(n2) {
      return n2 instanceof W ? new W(n2.type, e2(n2.content), n2.alias) : Array.isArray(n2) ? n2.map(e2) : n2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e2) {
      return Object.prototype.toString.call(e2).slice(8, -1);
    }, objId: function(e2) {
      return e2.__id || Object.defineProperty(e2, "__id", { value: ++n }), e2.__id;
    }, clone: function t3(e2, r2) {
      var a, n2;
      switch (r2 = r2 || {}, M.util.type(e2)) {
        case "Object":
          if (n2 = M.util.objId(e2), r2[n2])
            return r2[n2];
          for (var i2 in a = {}, r2[n2] = a, e2)
            e2.hasOwnProperty(i2) && (a[i2] = t3(e2[i2], r2));
          return a;
        case "Array":
          return n2 = M.util.objId(e2), r2[n2] ? r2[n2] : (a = [], r2[n2] = a, e2.forEach(function(e3, n3) {
            a[n3] = t3(e3, r2);
          }), a);
        default:
          return e2;
      }
    }, getLanguage: function(e2) {
      for (; e2 && !c.test(e2.className); )
        e2 = e2.parentElement;
      return e2 ? (e2.className.match(c) || [, "none"])[1].toLowerCase() : "none";
    }, currentScript: function() {
      if ("undefined" == typeof document)
        return null;
      if ("currentScript" in document)
        return document.currentScript;
      try {
        throw new Error();
      } catch (e2) {
        var n2 = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e2.stack) || [])[1];
        if (n2) {
          var t3 = document.getElementsByTagName("script");
          for (var r2 in t3)
            if (t3[r2].src == n2)
              return t3[r2];
        }
        return null;
      }
    }, isActive: function(e2, n2, t3) {
      for (var r2 = "no-" + n2; e2; ) {
        var a = e2.classList;
        if (a.contains(n2))
          return true;
        if (a.contains(r2))
          return false;
        e2 = e2.parentElement;
      }
      return !!t3;
    } }, languages: { extend: function(e2, n2) {
      var t3 = M.util.clone(M.languages[e2]);
      for (var r2 in n2)
        t3[r2] = n2[r2];
      return t3;
    }, insertBefore: function(t3, e2, n2, r2) {
      var a = (r2 = r2 || M.languages)[t3], i2 = {};
      for (var l in a)
        if (a.hasOwnProperty(l)) {
          if (l == e2)
            for (var o in n2)
              n2.hasOwnProperty(o) && (i2[o] = n2[o]);
          n2.hasOwnProperty(l) || (i2[l] = a[l]);
        }
      var s = r2[t3];
      return r2[t3] = i2, M.languages.DFS(M.languages, function(e3, n3) {
        n3 === s && e3 != t3 && (this[e3] = i2);
      }), i2;
    }, DFS: function e2(n2, t3, r2, a) {
      a = a || {};
      var i2 = M.util.objId;
      for (var l in n2)
        if (n2.hasOwnProperty(l)) {
          t3.call(n2, l, n2[l], r2 || l);
          var o = n2[l], s = M.util.type(o);
          "Object" !== s || a[i2(o)] ? "Array" !== s || a[i2(o)] || (a[i2(o)] = true, e2(o, t3, l, a)) : (a[i2(o)] = true, e2(o, t3, null, a));
        }
    } }, plugins: {}, highlightAll: function(e2, n2) {
      M.highlightAllUnder(document, e2, n2);
    }, highlightAllUnder: function(e2, n2, t3) {
      var r2 = { callback: t3, container: e2, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
      M.hooks.run("before-highlightall", r2), r2.elements = Array.prototype.slice.apply(r2.container.querySelectorAll(r2.selector)), M.hooks.run("before-all-elements-highlight", r2);
      for (var a, i2 = 0; a = r2.elements[i2++]; )
        M.highlightElement(a, true === n2, r2.callback);
    }, highlightElement: function(e2, n2, t3) {
      var r2 = M.util.getLanguage(e2), a = M.languages[r2];
      e2.className = e2.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r2;
      var i2 = e2.parentElement;
      i2 && "pre" === i2.nodeName.toLowerCase() && (i2.className = i2.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r2);
      var l = { element: e2, language: r2, grammar: a, code: e2.textContent };
      function o(e3) {
        l.highlightedCode = e3, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t3 && t3.call(l.element);
      }
      if (M.hooks.run("before-sanity-check", l), !l.code)
        return M.hooks.run("complete", l), void (t3 && t3.call(l.element));
      if (M.hooks.run("before-highlight", l), l.grammar)
        if (n2 && u.Worker) {
          var s = new Worker(M.filename);
          s.onmessage = function(e3) {
            o(e3.data);
          }, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: true }));
        } else
          o(M.highlight(l.code, l.grammar, l.language));
      else
        o(M.util.encode(l.code));
    }, highlight: function(e2, n2, t3) {
      var r2 = { code: e2, grammar: n2, language: t3 };
      return M.hooks.run("before-tokenize", r2), r2.tokens = M.tokenize(r2.code, r2.grammar), M.hooks.run("after-tokenize", r2), W.stringify(M.util.encode(r2.tokens), r2.language);
    }, tokenize: function(e2, n2) {
      var t3 = n2.rest;
      if (t3) {
        for (var r2 in t3)
          n2[r2] = t3[r2];
        delete n2.rest;
      }
      var a = new i();
      return I(a, a.head, e2), function e3(n3, t4, r3, a2, i2, l) {
        for (var o in r3)
          if (r3.hasOwnProperty(o) && r3[o]) {
            var s = r3[o];
            s = Array.isArray(s) ? s : [s];
            for (var u2 = 0; u2 < s.length; ++u2) {
              if (l && l.cause == o + "," + u2)
                return;
              var c2 = s[u2], g = c2.inside, f = !!c2.lookbehind, h = !!c2.greedy, d = 0, v = c2.alias;
              if (h && !c2.pattern.global) {
                var p = c2.pattern.toString().match(/[imsuy]*$/)[0];
                c2.pattern = RegExp(c2.pattern.source, p + "g");
              }
              for (var m = c2.pattern || c2, y = a2.next, k = i2; y !== t4.tail && !(l && k >= l.reach); k += y.value.length, y = y.next) {
                var b = y.value;
                if (t4.length > n3.length)
                  return;
                if (!(b instanceof W)) {
                  var x = 1;
                  if (h && y != t4.tail.prev) {
                    m.lastIndex = k;
                    var w = m.exec(n3);
                    if (!w)
                      break;
                    var A = w.index + (f && w[1] ? w[1].length : 0), P = w.index + w[0].length, S = k;
                    for (S += y.value.length; S <= A; )
                      y = y.next, S += y.value.length;
                    if (S -= y.value.length, k = S, y.value instanceof W)
                      continue;
                    for (var E = y; E !== t4.tail && (S < P || "string" == typeof E.value); E = E.next)
                      x++, S += E.value.length;
                    x--, b = n3.slice(k, S), w.index -= k;
                  } else {
                    m.lastIndex = 0;
                    var w = m.exec(b);
                  }
                  if (w) {
                    f && (d = w[1] ? w[1].length : 0);
                    var A = w.index + d, O = w[0].slice(d), P = A + O.length, L = b.slice(0, A), N = b.slice(P), j = k + b.length;
                    l && j > l.reach && (l.reach = j);
                    var C = y.prev;
                    L && (C = I(t4, C, L), k += L.length), z(t4, C, x);
                    var _ = new W(o, g ? M.tokenize(O, g) : O, v, O);
                    y = I(t4, C, _), N && I(t4, y, N), 1 < x && e3(n3, t4, r3, y.prev, k, { cause: o + "," + u2, reach: j });
                  }
                }
              }
            }
          }
      }(e2, a, n2, a.head, 0), function(e3) {
        var n3 = [], t4 = e3.head.next;
        for (; t4 !== e3.tail; )
          n3.push(t4.value), t4 = t4.next;
        return n3;
      }(a);
    }, hooks: { all: {}, add: function(e2, n2) {
      var t3 = M.hooks.all;
      t3[e2] = t3[e2] || [], t3[e2].push(n2);
    }, run: function(e2, n2) {
      var t3 = M.hooks.all[e2];
      if (t3 && t3.length)
        for (var r2, a = 0; r2 = t3[a++]; )
          r2(n2);
    } }, Token: W };
    function W(e2, n2, t3, r2) {
      this.type = e2, this.content = n2, this.alias = t3, this.length = 0 | (r2 || "").length;
    }
    function i() {
      var e2 = { value: null, prev: null, next: null }, n2 = { value: null, prev: e2, next: null };
      e2.next = n2, this.head = e2, this.tail = n2, this.length = 0;
    }
    function I(e2, n2, t3) {
      var r2 = n2.next, a = { value: t3, prev: n2, next: r2 };
      return n2.next = a, r2.prev = a, e2.length++, a;
    }
    function z(e2, n2, t3) {
      for (var r2 = n2.next, a = 0; a < t3 && r2 !== e2.tail; a++)
        r2 = r2.next;
      (n2.next = r2).prev = n2, e2.length -= a;
    }
    if (u.Prism = M, W.stringify = function n2(e2, t3) {
      if ("string" == typeof e2)
        return e2;
      if (Array.isArray(e2)) {
        var r2 = "";
        return e2.forEach(function(e3) {
          r2 += n2(e3, t3);
        }), r2;
      }
      var a = { type: e2.type, content: n2(e2.content, t3), tag: "span", classes: ["token", e2.type], attributes: {}, language: t3 }, i2 = e2.alias;
      i2 && (Array.isArray(i2) ? Array.prototype.push.apply(a.classes, i2) : a.classes.push(i2)), M.hooks.run("wrap", a);
      var l = "";
      for (var o in a.attributes)
        l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
      return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";
    }, !u.document)
      return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function(e2) {
        var n2 = JSON.parse(e2.data), t3 = n2.language, r2 = n2.code, a = n2.immediateClose;
        u.postMessage(M.highlight(r2, M.languages[t3], t3)), a && u.close();
      }, false)), M;
    var e = M.util.currentScript();
    function t2() {
      M.manual || M.highlightAll();
    }
    if (e && (M.filename = e.src, e.hasAttribute("data-manual") && (M.manual = true)), !M.manual) {
      var r = document.readyState;
      "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t2) : window.requestAnimationFrame ? window.requestAnimationFrame(t2) : window.setTimeout(t2, 16);
    }
    return M;
  }(_self);
  "undefined" != typeof global && (global.Prism = Prism);
  Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: true, inside: { "internal-subset": { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: true, greedy: true, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: true }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/, name: /[^\s<>'"]+/ } }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: true, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(a, e) {
    var s = {};
    s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: true, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
    n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
    var t2 = {};
    t2[a] = { pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
      return a;
    }), "i"), lookbehind: true, greedy: true, inside: n }, Prism.languages.insertBefore("markup", "cdata", t2);
  } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
  !function(e) {
    var t2 = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: true, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: true } } }, url: { pattern: RegExp("\\burl\\((?:" + t2.source + `|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`, "i"), greedy: true, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t2.source + "$"), alias: "url" } } }, selector: RegExp(`[^{}\\s](?:[^{};"']|` + t2.source + ")*?(?=\\s*\\{)"), string: { pattern: t2, greedy: true }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css;
    var s = e.languages.markup;
    s && (s.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i, lookbehind: true, inside: { "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { style: { pattern: /(["'])[\s\S]+(?=["']$)/, lookbehind: true, alias: "language-css", inside: e.languages.css }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, "attr-name": /^style/i } } }, s.tag));
  }(Prism);
  Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
  Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: true, greedy: true, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: true, alias: "language-regex", inside: Prism.languages.regex }, "regex-flags": /[a-z]+$/, "regex-delimiter": /^\/|\/$/ } }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: true, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: true, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
  function Highlight(vm) {
    this.vm = vm;
  }
  Highlight.prototype.onParse = function(node2, vm) {
    if (node2.name === "pre") {
      if (vm.options.editable) {
        node2.attrs.class = (node2.attrs.class || "") + " hl-pre";
        return;
      }
      let i;
      for (i = node2.children.length; i--; ) {
        if (node2.children[i].name === "code")
          break;
      }
      if (i === -1)
        return;
      const code = node2.children[i];
      let className = code.attrs.class + " " + node2.attrs.class;
      i = className.indexOf("language-");
      if (i === -1) {
        i = className.indexOf("lang-");
        if (i === -1) {
          className = "language-text";
          i = 9;
        } else {
          i += 5;
        }
      } else {
        i += 9;
      }
      let j;
      for (j = i; j < className.length; j++) {
        if (className[j] === " ")
          break;
      }
      const lang = className.substring(i, j);
      if (code.children.length) {
        const text = this.vm.getText(code.children).replace(/&amp;/g, "&");
        if (!text)
          return;
        if (node2.c) {
          node2.c = void 0;
        }
        if (Prism.languages[lang]) {
          code.children = new Parser$1(this.vm).parse(
            // 加一层 pre 保留空白符
            "<pre>" + Prism.highlight(text, Prism.languages[lang], lang).replace(/token /g, "hl-") + "</pre>"
          )[0].children;
        }
        node2.attrs.class = "hl-pre";
        code.attrs.class = "hl-code";
      }
    }
  };
  function t() {
    return function(e) {
      var t2 = {};
      function r(n) {
        if (t2[n])
          return t2[n].exports;
        var a = t2[n] = { i: n, l: false, exports: {} };
        return e[n].call(a.exports, a, a.exports, r), a.l = true, a.exports;
      }
      return r.m = e, r.c = t2, r.d = function(e2, t3, n) {
        r.o(e2, t3) || Object.defineProperty(e2, t3, { enumerable: true, get: n });
      }, r.r = function(e2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, r.t = function(e2, t3) {
        if (1 & t3 && (e2 = r(e2)), 8 & t3)
          return e2;
        if (4 & t3 && "object" == typeof e2 && e2 && e2.__esModule)
          return e2;
        var n = /* @__PURE__ */ Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t3 && "string" != typeof e2)
          for (var a in e2)
            r.d(n, a, function(t4) {
              return e2[t4];
            }.bind(null, a));
        return n;
      }, r.n = function(e2) {
        var t3 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return r.d(t3, "a", t3), t3;
      }, r.o = function(e2, t3) {
        return Object.prototype.hasOwnProperty.call(e2, t3);
      }, r.p = "", r(r.s = 0);
    }([function(e, t2, r) {
      var n = this && this.__assign || function() {
        return (n = Object.assign || function(e2) {
          for (var t3, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
            for (var a2 in t3 = arguments[r2])
              Object.prototype.hasOwnProperty.call(t3, a2) && (e2[a2] = t3[a2]);
          return e2;
        }).apply(this, arguments);
      }, a = this && this.__importDefault || function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      };
      Object.defineProperty(t2, "__esModule", { value: true }), t2.createClass = void 0;
      var i = a(r(1));
      r(2);
      var o = /([A-Z])/g, s = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, l = /[&><"']/g;
      function h(e2) {
        return String(e2).replace(l, function(e3) {
          return s[e3];
        });
      }
      var c = function(e2) {
        return "data:image/svg+xml," + encodeURIComponent(e2.replace(/\s+/g, " "));
      };
      t2.createClass = function(e2) {
        var t3;
        return null !== (t3 = null == e2 ? void 0 : e2.filter(function(e3) {
          return e3;
        }).join(" ")) && void 0 !== t3 ? t3 : "";
      };
      var m = function(e2, r2) {
        return e2.map(function(e3) {
          var n2, a2 = r2;
          (null === (n2 = null == e3 ? void 0 : e3.style) || void 0 === n2 ? void 0 : n2.color) && (a2 = e3.style.color);
          var s2 = void 0;
          e3 instanceof i.default.__domTree.Span && (s2 = "span"), e3 instanceof i.default.__domTree.Anchor && (s2 = "anchor"), e3 instanceof i.default.__domTree.LineNode && (s2 = "line"), e3 instanceof i.default.__domTree.PathNode && (s2 = "path"), e3 instanceof i.default.__domTree.SvgNode && (s2 = "svg", a2 && (e3.attributes.fill = a2)), e3 instanceof i.default.__domTree.SymbolNode && (s2 = "text");
          var l2 = e3.children && e3.children.length > 0 ? m(e3.children, a2) : [];
          return s2 ? function(e4, r3, n3) {
            var a3 = false;
            r3.classes && r3.classes.length > 0 && (a3 = true);
            var i2, s3 = h((0, t2.createClass)(r3.classes)), l3 = "";
            for (var m2 in "text" === e4 && r3.italic > 0 && (l3 += "margin-right:" + r3.italic + "em;"), r3.style)
              r3.style.hasOwnProperty(m2) && (l3 += "".concat((i2 = m2, i2.replace(o, "-$1").toLowerCase()), ":").concat(r3.style[m2], ";"));
            l3 && (a3 = true);
            for (var p in r3.attributes)
              r3.attributes.hasOwnProperty(p) && h(r3.attributes[p]);
            if ("span" === e4)
              return { name: "span", attrs: { class: s3 + " katex-span", style: l3 }, children: n3 };
            if ("text" === e4) {
              var d = h(r3.text);
              return a3 ? { name: "span", attrs: { class: s3, style: l3 }, children: [{ type: "text", text: d }] } : { type: "text", text: d };
            }
            if ("svg" === e4) {
              var f = r3.toMarkup();
              return { name: "img", attrs: { src: c(f), class: "katex-svg" } };
            }
            return null;
          }(s2, e3, l2) : l2;
        }).reduce(function(e3, t3) {
          return Array.isArray(t3) ? e3.push.apply(e3, t3) : e3.push(t3), e3;
        }, []).filter(function(e3) {
          return !!e3;
        });
      };
      t2.default = function(e2, t3) {
        void 0 === t3 && (t3 = {});
        try {
          var r2 = i.default.__renderToDomTree(e2, n(n({}, t3), { output: "html" }));
          return m([r2]);
        } catch (e3) {
          return [{ name: "span", attrs: { style: "color:red;" }, children: [{ type: "text", text: e3.message }] }];
        }
      };
    }, function(e, t2, r) {
      var n;
      n = function() {
        return function() {
          var e2 = { d: function(t4, r3) {
            for (var n3 in r3)
              e2.o(r3, n3) && !e2.o(t4, n3) && Object.defineProperty(t4, n3, { enumerable: true, get: r3[n3] });
          }, o: function(e3, t4) {
            return Object.prototype.hasOwnProperty.call(e3, t4);
          } }, t3 = {};
          e2.d(t3, { default: function() {
            return Fn;
          } });
          var r2 = function e3(t4, r3) {
            this.position = void 0;
            var n3, a2 = "KaTeX parse error: " + t4, i2 = r3 && r3.loc;
            if (i2 && i2.start <= i2.end) {
              var o2 = i2.lexer.input;
              n3 = i2.start;
              var s2 = i2.end;
              n3 === o2.length ? a2 += " at end of input: " : a2 += " at position " + (n3 + 1) + ": ";
              var l2 = o2.slice(n3, s2).replace(/[^]/g, "$&̲");
              a2 += (n3 > 15 ? "…" + o2.slice(n3 - 15, n3) : o2.slice(0, n3)) + l2 + (s2 + 15 < o2.length ? o2.slice(s2, s2 + 15) + "…" : o2.slice(s2));
            }
            var h2 = new Error(a2);
            return h2.name = "ParseError", h2.__proto__ = e3.prototype, h2.position = n3, h2;
          };
          r2.prototype.__proto__ = Error.prototype;
          var n2 = r2, a = /([A-Z])/g, i = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;" }, o = /[&><"']/g, s = function e3(t4) {
            return "ordgroup" === t4.type || "color" === t4.type ? 1 === t4.body.length ? e3(t4.body[0]) : t4 : "font" === t4.type ? e3(t4.body) : t4;
          }, l = { contains: function(e3, t4) {
            return -1 !== e3.indexOf(t4);
          }, deflt: function(e3, t4) {
            return void 0 === e3 ? t4 : e3;
          }, escape: function(e3) {
            return String(e3).replace(o, function(e4) {
              return i[e4];
            });
          }, hyphenate: function(e3) {
            return e3.replace(a, "-$1").toLowerCase();
          }, getBaseElem: s, isCharacterBox: function(e3) {
            var t4 = s(e3);
            return "mathord" === t4.type || "textord" === t4.type || "atom" === t4.type;
          }, protocolFromUrl: function(e3) {
            var t4 = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e3);
            return null != t4 ? t4[1] : "_relative";
          } }, h = { displayMode: { type: "boolean", description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.", cli: "-d, --display-mode" }, output: { type: { enum: ["htmlAndMathml", "html", "mathml"] }, description: "Determines the markup language of the output.", cli: "-F, --format <type>" }, leqno: { type: "boolean", description: "Render display math in leqno style (left-justified tags)." }, fleqn: { type: "boolean", description: "Render display math flush left." }, throwOnError: { type: "boolean", default: true, cli: "-t, --no-throw-on-error", cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error." }, errorColor: { type: "string", default: "#cc0000", cli: "-c, --error-color <color>", cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.", cliProcessor: function(e3) {
            return "#" + e3;
          } }, macros: { type: "object", cli: "-m, --macro <def>", cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).", cliDefault: [], cliProcessor: function(e3, t4) {
            return t4.push(e3), t4;
          } }, minRuleThickness: { type: "number", description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.", processor: function(e3) {
            return Math.max(0, e3);
          }, cli: "--min-rule-thickness <size>", cliProcessor: parseFloat }, colorIsTextColor: { type: "boolean", description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.", cli: "-b, --color-is-text-color" }, strict: { type: [{ enum: ["warn", "ignore", "error"] }, "boolean", "function"], description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.", cli: "-S, --strict", cliDefault: false }, trust: { type: ["boolean", "function"], description: "Trust the input, enabling all HTML features such as \\url.", cli: "-T, --trust" }, maxSize: { type: "number", default: 1 / 0, description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large", processor: function(e3) {
            return Math.max(0, e3);
          }, cli: "-s, --max-size <n>", cliProcessor: parseInt }, maxExpand: { type: "number", default: 1e3, description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.", processor: function(e3) {
            return Math.max(0, e3);
          }, cli: "-e, --max-expand <n>", cliProcessor: function(e3) {
            return "Infinity" === e3 ? 1 / 0 : parseInt(e3);
          } }, globalGroup: { type: "boolean", cli: false } };
          function c(e3) {
            if (e3.default)
              return e3.default;
            var t4 = e3.type, r3 = Array.isArray(t4) ? t4[0] : t4;
            if ("string" != typeof r3)
              return r3.enum[0];
            switch (r3) {
              case "boolean":
                return false;
              case "string":
                return "";
              case "number":
                return 0;
              case "object":
                return {};
            }
          }
          var m = function() {
            function e3(e4) {
              for (var t5 in this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e4 = e4 || {}, h)
                if (h.hasOwnProperty(t5)) {
                  var r3 = h[t5];
                  this[t5] = void 0 !== e4[t5] ? r3.processor ? r3.processor(e4[t5]) : e4[t5] : c(r3);
                }
            }
            var t4 = e3.prototype;
            return t4.reportNonstrict = function(e4, t5, r3) {
              var a2 = this.strict;
              if ("function" == typeof a2 && (a2 = a2(e4, t5, r3)), a2 && "ignore" !== a2) {
                if (true === a2 || "error" === a2)
                  throw new n2("LaTeX-incompatible input and strict mode is set to 'error': " + t5 + " [" + e4 + "]", r3);
                "warn" === a2 ? "undefined" != typeof console && formatAppLog("warn", "at uni-app/components/mp-html/latex/katex.min.js:1", "LaTeX-incompatible input and strict mode is set to 'warn': " + t5 + " [" + e4 + "]") : "undefined" != typeof console && formatAppLog("warn", "at uni-app/components/mp-html/latex/katex.min.js:1", "LaTeX-incompatible input and strict mode is set to unrecognized '" + a2 + "': " + t5 + " [" + e4 + "]");
              }
            }, t4.useStrictBehavior = function(e4, t5, r3) {
              var n3 = this.strict;
              if ("function" == typeof n3)
                try {
                  n3 = n3(e4, t5, r3);
                } catch (e5) {
                  n3 = "error";
                }
              return !(!n3 || "ignore" === n3 || true !== n3 && "error" !== n3 && ("warn" === n3 ? ("undefined" != typeof console && formatAppLog("warn", "at uni-app/components/mp-html/latex/katex.min.js:1", "LaTeX-incompatible input and strict mode is set to 'warn': " + t5 + " [" + e4 + "]"), 1) : ("undefined" != typeof console && formatAppLog("warn", "at uni-app/components/mp-html/latex/katex.min.js:1", "LaTeX-incompatible input and strict mode is set to unrecognized '" + n3 + "': " + t5 + " [" + e4 + "]"), 1)));
            }, t4.isTrusted = function(e4) {
              e4.url && !e4.protocol && (e4.protocol = l.protocolFromUrl(e4.url));
              var t5 = "function" == typeof this.trust ? this.trust(e4) : this.trust;
              return Boolean(t5);
            }, e3;
          }(), u = function() {
            function e3(e4, t5, r3) {
              this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e4, this.size = t5, this.cramped = r3;
            }
            var t4 = e3.prototype;
            return t4.sup = function() {
              return p[d[this.id]];
            }, t4.sub = function() {
              return p[f[this.id]];
            }, t4.fracNum = function() {
              return p[g[this.id]];
            }, t4.fracDen = function() {
              return p[v[this.id]];
            }, t4.cramp = function() {
              return p[y[this.id]];
            }, t4.text = function() {
              return p[b[this.id]];
            }, t4.isTight = function() {
              return this.size >= 2;
            }, e3;
          }(), p = [new u(0, 0, false), new u(1, 0, true), new u(2, 1, false), new u(3, 1, true), new u(4, 2, false), new u(5, 2, true), new u(6, 3, false), new u(7, 3, true)], d = [4, 5, 4, 5, 6, 7, 6, 7], f = [5, 5, 5, 5, 7, 7, 7, 7], g = [2, 3, 4, 5, 6, 7, 6, 7], v = [3, 3, 5, 5, 7, 7, 7, 7], y = [1, 1, 3, 3, 5, 5, 7, 7], b = [0, 1, 2, 3, 2, 3, 2, 3], x = { DISPLAY: p[0], TEXT: p[2], SCRIPT: p[4], SCRIPTSCRIPT: p[6] }, w = [{ name: "latin", blocks: [[256, 591], [768, 879]] }, { name: "cyrillic", blocks: [[1024, 1279]] }, { name: "armenian", blocks: [[1328, 1423]] }, { name: "brahmic", blocks: [[2304, 4255]] }, { name: "georgian", blocks: [[4256, 4351]] }, { name: "cjk", blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: "hangul", blocks: [[44032, 55215]] }], k = [];
          function S(e3) {
            for (var t4 = 0; t4 < k.length; t4 += 2)
              if (e3 >= k[t4] && e3 <= k[t4 + 1])
                return true;
            return false;
          }
          w.forEach(function(e3) {
            return e3.blocks.forEach(function(e4) {
              return k.push.apply(k, e4);
            });
          });
          var M = { doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z", doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z", leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z", leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z", leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z", leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z", leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z", leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z", leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z", leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z", leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z", lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z", leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z", leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z", leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z", longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z", midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z", midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z", oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z", oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z", oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z", oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z", rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z", rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z", rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z", rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z", rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z", rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z", rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z", rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z", rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z", righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z", rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z", rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z", twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z", twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z", tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z", tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z", tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z", tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z", vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z", widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z", widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z", widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z", widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z", widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z", widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z", baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z", rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z", baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z", rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z", shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z", shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z" }, z = function() {
            function e3(e4) {
              this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e4, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
            }
            var t4 = e3.prototype;
            return t4.hasClass = function(e4) {
              return l.contains(this.classes, e4);
            }, t4.toNode = function() {
              for (var e4 = document.createDocumentFragment(), t5 = 0; t5 < this.children.length; t5++)
                e4.appendChild(this.children[t5].toNode());
              return e4;
            }, t4.toMarkup = function() {
              for (var e4 = "", t5 = 0; t5 < this.children.length; t5++)
                e4 += this.children[t5].toMarkup();
              return e4;
            }, t4.toText = function() {
              var e4 = function(e5) {
                return e5.toText();
              };
              return this.children.map(e4).join("");
            }, e3;
          }(), A = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, T = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, B = { "Å": "A", "Ð": "D", "Þ": "o", "å": "a", "ð": "d", "þ": "o", "А": "A", "Б": "B", "В": "B", "Г": "F", "Д": "A", "Е": "E", "Ж": "K", "З": "3", "И": "N", "Й": "N", "К": "K", "Л": "N", "М": "M", "Н": "H", "О": "O", "П": "N", "Р": "P", "С": "C", "Т": "T", "У": "y", "Ф": "O", "Х": "X", "Ц": "U", "Ч": "h", "Ш": "W", "Щ": "W", "Ъ": "B", "Ы": "X", "Ь": "B", "Э": "3", "Ю": "X", "Я": "R", "а": "a", "б": "b", "в": "a", "г": "r", "д": "y", "е": "e", "ж": "m", "з": "e", "и": "n", "й": "n", "к": "n", "л": "n", "м": "m", "н": "n", "о": "o", "п": "n", "р": "p", "с": "c", "т": "o", "у": "y", "ф": "b", "х": "x", "ц": "n", "ч": "n", "ш": "w", "щ": "w", "ъ": "a", "ы": "m", "ь": "a", "э": "e", "ю": "m", "я": "r" };
          function C(e3, t4, r3) {
            if (!A[t4])
              throw new Error("Font metrics not found for font: " + t4 + ".");
            var n3 = e3.charCodeAt(0), a2 = A[t4][n3];
            if (!a2 && e3[0] in B && (n3 = B[e3[0]].charCodeAt(0), a2 = A[t4][n3]), a2 || "text" !== r3 || S(n3) && (a2 = A[t4][77]), a2)
              return { depth: a2[0], height: a2[1], italic: a2[2], skew: a2[3], width: a2[4] };
          }
          var N = {}, q = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], I = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], O = function(e3, t4) {
            return t4.size < 2 ? e3 : q[e3 - 1][t4.size - 1];
          }, R = function() {
            function e3(t5) {
              this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t5.style, this.color = t5.color, this.size = t5.size || e3.BASESIZE, this.textSize = t5.textSize || this.size, this.phantom = !!t5.phantom, this.font = t5.font || "", this.fontFamily = t5.fontFamily || "", this.fontWeight = t5.fontWeight || "", this.fontShape = t5.fontShape || "", this.sizeMultiplier = I[this.size - 1], this.maxSize = t5.maxSize, this.minRuleThickness = t5.minRuleThickness, this._fontMetrics = void 0;
            }
            var t4 = e3.prototype;
            return t4.extend = function(t5) {
              var r3 = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this.font, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
              for (var n3 in t5)
                t5.hasOwnProperty(n3) && (r3[n3] = t5[n3]);
              return new e3(r3);
            }, t4.havingStyle = function(e4) {
              return this.style === e4 ? this : this.extend({ style: e4, size: O(this.textSize, e4) });
            }, t4.havingCrampedStyle = function() {
              return this.havingStyle(this.style.cramp());
            }, t4.havingSize = function(e4) {
              return this.size === e4 && this.textSize === e4 ? this : this.extend({ style: this.style.text(), size: e4, textSize: e4, sizeMultiplier: I[e4 - 1] });
            }, t4.havingBaseStyle = function(t5) {
              t5 = t5 || this.style.text();
              var r3 = O(e3.BASESIZE, t5);
              return this.size === r3 && this.textSize === e3.BASESIZE && this.style === t5 ? this : this.extend({ style: t5, size: r3 });
            }, t4.havingBaseSizing = function() {
              var e4;
              switch (this.style.id) {
                case 4:
                case 5:
                  e4 = 3;
                  break;
                case 6:
                case 7:
                  e4 = 1;
                  break;
                default:
                  e4 = 6;
              }
              return this.extend({ style: this.style.text(), size: e4 });
            }, t4.withColor = function(e4) {
              return this.extend({ color: e4 });
            }, t4.withPhantom = function() {
              return this.extend({ phantom: true });
            }, t4.withFont = function(e4) {
              return this.extend({ font: e4 });
            }, t4.withTextFontFamily = function(e4) {
              return this.extend({ fontFamily: e4, font: "" });
            }, t4.withTextFontWeight = function(e4) {
              return this.extend({ fontWeight: e4, font: "" });
            }, t4.withTextFontShape = function(e4) {
              return this.extend({ fontShape: e4, font: "" });
            }, t4.sizingClasses = function(e4) {
              return e4.size !== this.size ? ["sizing", "reset-size" + e4.size, "size" + this.size] : [];
            }, t4.baseSizingClasses = function() {
              return this.size !== e3.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e3.BASESIZE] : [];
            }, t4.fontMetrics = function() {
              return this._fontMetrics || (this._fontMetrics = function(e4) {
                var t5;
                if (!N[t5 = e4 >= 5 ? 0 : e4 >= 3 ? 1 : 2]) {
                  var r3 = N[t5] = { cssEmPerMu: T.quad[t5] / 18 };
                  for (var n3 in T)
                    T.hasOwnProperty(n3) && (r3[n3] = T[n3][t5]);
                }
                return N[t5];
              }(this.size)), this._fontMetrics;
            }, t4.getColor = function() {
              return this.phantom ? "transparent" : this.color;
            }, e3;
          }();
          R.BASESIZE = 6;
          var H = R, E = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 1.00375, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 1.00375 }, L = { ex: true, em: true, mu: true }, D = function(e3) {
            return "string" != typeof e3 && (e3 = e3.unit), e3 in E || e3 in L || "ex" === e3;
          }, P = function(e3, t4) {
            var r3;
            if (e3.unit in E)
              r3 = E[e3.unit] / t4.fontMetrics().ptPerEm / t4.sizeMultiplier;
            else if ("mu" === e3.unit)
              r3 = t4.fontMetrics().cssEmPerMu;
            else {
              var a2;
              if (a2 = t4.style.isTight() ? t4.havingStyle(t4.style.text()) : t4, "ex" === e3.unit)
                r3 = a2.fontMetrics().xHeight;
              else {
                if ("em" !== e3.unit)
                  throw new n2("Invalid unit: '" + e3.unit + "'");
                r3 = a2.fontMetrics().quad;
              }
              a2 !== t4 && (r3 *= a2.sizeMultiplier / t4.sizeMultiplier);
            }
            return Math.min(e3.number * r3, t4.maxSize);
          }, F = function(e3) {
            return +e3.toFixed(4) + "em";
          }, V = function(e3) {
            return e3.filter(function(e4) {
              return e4;
            }).join(" ");
          }, G = function(e3, t4, r3) {
            if (this.classes = e3 || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r3 || {}, t4) {
              t4.style.isTight() && this.classes.push("mtight");
              var n3 = t4.getColor();
              n3 && (this.style.color = n3);
            }
          }, U = function(e3) {
            var t4 = document.createElement(e3);
            for (var r3 in t4.className = V(this.classes), this.style)
              this.style.hasOwnProperty(r3) && (t4.style[r3] = this.style[r3]);
            for (var n3 in this.attributes)
              this.attributes.hasOwnProperty(n3) && t4.setAttribute(n3, this.attributes[n3]);
            for (var a2 = 0; a2 < this.children.length; a2++)
              t4.appendChild(this.children[a2].toNode());
            return t4;
          }, _ = function(e3) {
            var t4 = "<" + e3;
            this.classes.length && (t4 += ' class="' + l.escape(V(this.classes)) + '"');
            var r3 = "";
            for (var n3 in this.style)
              this.style.hasOwnProperty(n3) && (r3 += l.hyphenate(n3) + ":" + this.style[n3] + ";");
            for (var a2 in r3 && (t4 += ' style="' + l.escape(r3) + '"'), this.attributes)
              this.attributes.hasOwnProperty(a2) && (t4 += " " + a2 + '="' + l.escape(this.attributes[a2]) + '"');
            t4 += ">";
            for (var i2 = 0; i2 < this.children.length; i2++)
              t4 += this.children[i2].toMarkup();
            return t4 += "</" + e3 + ">";
          }, Y = function() {
            function e3(e4, t5, r3, n3) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, G.call(this, e4, r3, n3), this.children = t5 || [];
            }
            var t4 = e3.prototype;
            return t4.setAttribute = function(e4, t5) {
              this.attributes[e4] = t5;
            }, t4.hasClass = function(e4) {
              return l.contains(this.classes, e4);
            }, t4.toNode = function() {
              return U.call(this, "span");
            }, t4.toMarkup = function() {
              return _.call(this, "span");
            }, e3;
          }(), X = function() {
            function e3(e4, t5, r3, n3) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, G.call(this, t5, n3), this.children = r3 || [], this.setAttribute("href", e4);
            }
            var t4 = e3.prototype;
            return t4.setAttribute = function(e4, t5) {
              this.attributes[e4] = t5;
            }, t4.hasClass = function(e4) {
              return l.contains(this.classes, e4);
            }, t4.toNode = function() {
              return U.call(this, "a");
            }, t4.toMarkup = function() {
              return _.call(this, "a");
            }, e3;
          }(), W = function() {
            function e3(e4, t5, r3) {
              this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t5, this.src = e4, this.classes = ["mord"], this.style = r3;
            }
            var t4 = e3.prototype;
            return t4.hasClass = function(e4) {
              return l.contains(this.classes, e4);
            }, t4.toNode = function() {
              var e4 = document.createElement("img");
              for (var t5 in e4.src = this.src, e4.alt = this.alt, e4.className = "mord", this.style)
                this.style.hasOwnProperty(t5) && (e4.style[t5] = this.style[t5]);
              return e4;
            }, t4.toMarkup = function() {
              var e4 = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", t5 = "";
              for (var r3 in this.style)
                this.style.hasOwnProperty(r3) && (t5 += l.hyphenate(r3) + ":" + this.style[r3] + ";");
              return t5 && (e4 += ' style="' + l.escape(t5) + '"'), e4 += "'/>";
            }, e3;
          }(), j = { "î": "ı̂", "ï": "ı̈", "í": "ı́", "ì": "ı̀" }, $ = function() {
            function e3(e4, t5, r3, n3, a2, i2, o2, s2) {
              this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e4, this.height = t5 || 0, this.depth = r3 || 0, this.italic = n3 || 0, this.skew = a2 || 0, this.width = i2 || 0, this.classes = o2 || [], this.style = s2 || {}, this.maxFontSize = 0;
              var l2 = function(e5) {
                for (var t6 = 0; t6 < w.length; t6++)
                  for (var r4 = w[t6], n4 = 0; n4 < r4.blocks.length; n4++) {
                    var a3 = r4.blocks[n4];
                    if (e5 >= a3[0] && e5 <= a3[1])
                      return r4.name;
                  }
                return null;
              }(this.text.charCodeAt(0));
              l2 && this.classes.push(l2 + "_fallback"), /[îïíì]/.test(this.text) && (this.text = j[this.text]);
            }
            var t4 = e3.prototype;
            return t4.hasClass = function(e4) {
              return l.contains(this.classes, e4);
            }, t4.toNode = function() {
              var e4 = document.createTextNode(this.text), t5 = null;
              for (var r3 in this.italic > 0 && ((t5 = document.createElement("span")).style.marginRight = F(this.italic)), this.classes.length > 0 && ((t5 = t5 || document.createElement("span")).className = V(this.classes)), this.style)
                this.style.hasOwnProperty(r3) && ((t5 = t5 || document.createElement("span")).style[r3] = this.style[r3]);
              return t5 ? (t5.appendChild(e4), t5) : e4;
            }, t4.toMarkup = function() {
              var e4 = false, t5 = "<span";
              this.classes.length && (e4 = true, t5 += ' class="', t5 += l.escape(V(this.classes)), t5 += '"');
              var r3 = "";
              for (var n3 in this.italic > 0 && (r3 += "margin-right:" + this.italic + "em;"), this.style)
                this.style.hasOwnProperty(n3) && (r3 += l.hyphenate(n3) + ":" + this.style[n3] + ";");
              r3 && (e4 = true, t5 += ' style="' + l.escape(r3) + '"');
              var a2 = l.escape(this.text);
              return e4 ? (t5 += ">", t5 += a2, t5 += "</span>") : a2;
            }, e3;
          }(), Z = function() {
            function e3(e4, t5) {
              this.children = void 0, this.attributes = void 0, this.children = e4 || [], this.attributes = t5 || {};
            }
            var t4 = e3.prototype;
            return t4.toNode = function() {
              var e4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              for (var t5 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, t5) && e4.setAttribute(t5, this.attributes[t5]);
              for (var r3 = 0; r3 < this.children.length; r3++)
                e4.appendChild(this.children[r3].toNode());
              return e4;
            }, t4.toMarkup = function() {
              var e4 = '<svg xmlns="http://www.w3.org/2000/svg"';
              for (var t5 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, t5) && (e4 += " " + t5 + "='" + this.attributes[t5] + "'");
              e4 += ">";
              for (var r3 = 0; r3 < this.children.length; r3++)
                e4 += this.children[r3].toMarkup();
              return e4 += "</svg>";
            }, e3;
          }(), K = function() {
            function e3(e4, t5) {
              this.pathName = void 0, this.alternate = void 0, this.pathName = e4, this.alternate = t5;
            }
            var t4 = e3.prototype;
            return t4.toNode = function() {
              var e4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
              return this.alternate ? e4.setAttribute("d", this.alternate) : e4.setAttribute("d", M[this.pathName]), e4;
            }, t4.toMarkup = function() {
              return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + M[this.pathName] + "'/>";
            }, e3;
          }(), J = function() {
            function e3(e4) {
              this.attributes = void 0, this.attributes = e4 || {};
            }
            var t4 = e3.prototype;
            return t4.toNode = function() {
              var e4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
              for (var t5 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, t5) && e4.setAttribute(t5, this.attributes[t5]);
              return e4;
            }, t4.toMarkup = function() {
              var e4 = "<line";
              for (var t5 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, t5) && (e4 += " " + t5 + "='" + this.attributes[t5] + "'");
              return e4 += "/>";
            }, e3;
          }();
          function Q(e3) {
            if (e3 instanceof $)
              return e3;
            throw new Error("Expected symbolNode but got " + String(e3) + ".");
          }
          var ee = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, te = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 }, re = { math: {}, text: {} }, ne = re;
          function ae(e3, t4, r3, n3, a2, i2) {
            re[e3][a2] = { font: t4, group: r3, replace: n3 }, i2 && n3 && (re[e3][n3] = re[e3][a2]);
          }
          var ie = "math", oe = "main", se = "ams", le = "accent-token", he = "bin", ce = "mathord", me = "op-token", ue = "rel", pe = "textord";
          ae(ie, oe, ue, "≡", "\\equiv", true), ae(ie, oe, ue, "≺", "\\prec", true), ae(ie, oe, ue, "≻", "\\succ", true), ae(ie, oe, ue, "∼", "\\sim", true), ae(ie, oe, ue, "⊥", "\\perp"), ae(ie, oe, ue, "⪯", "\\preceq", true), ae(ie, oe, ue, "⪰", "\\succeq", true), ae(ie, oe, ue, "≃", "\\simeq", true), ae(ie, oe, ue, "∣", "\\mid", true), ae(ie, oe, ue, "≪", "\\ll", true), ae(ie, oe, ue, "≫", "\\gg", true), ae(ie, oe, ue, "≍", "\\asymp", true), ae(ie, oe, ue, "∥", "\\parallel"), ae(ie, oe, ue, "⋈", "\\bowtie", true), ae(ie, oe, ue, "⌣", "\\smile", true), ae(ie, oe, ue, "⊑", "\\sqsubseteq", true), ae(ie, oe, ue, "⊒", "\\sqsupseteq", true), ae(ie, oe, ue, "≐", "\\doteq", true), ae(ie, oe, ue, "⌢", "\\frown", true), ae(ie, oe, ue, "∋", "\\ni", true), ae(ie, oe, ue, "∝", "\\propto", true), ae(ie, oe, ue, "⊢", "\\vdash", true), ae(ie, oe, ue, "⊣", "\\dashv", true), ae(ie, oe, ue, "∋", "\\owns"), ae(ie, oe, "punct", ".", "\\ldotp"), ae(ie, oe, "punct", "⋅", "\\cdotp"), ae(ie, oe, pe, "#", "\\#"), ae("text", oe, pe, "#", "\\#"), ae(ie, oe, pe, "&", "\\&"), ae("text", oe, pe, "&", "\\&"), ae(ie, oe, pe, "ℵ", "\\aleph", true), ae(ie, oe, pe, "∀", "\\forall", true), ae(ie, oe, pe, "ℏ", "\\hbar", true), ae(ie, oe, pe, "∃", "\\exists", true), ae(ie, oe, pe, "∇", "\\nabla", true), ae(ie, oe, pe, "♭", "\\flat", true), ae(ie, oe, pe, "ℓ", "\\ell", true), ae(ie, oe, pe, "♮", "\\natural", true), ae(ie, oe, pe, "♣", "\\clubsuit", true), ae(ie, oe, pe, "℘", "\\wp", true), ae(ie, oe, pe, "♯", "\\sharp", true), ae(ie, oe, pe, "♢", "\\diamondsuit", true), ae(ie, oe, pe, "ℜ", "\\Re", true), ae(ie, oe, pe, "♡", "\\heartsuit", true), ae(ie, oe, pe, "ℑ", "\\Im", true), ae(ie, oe, pe, "♠", "\\spadesuit", true), ae(ie, oe, pe, "§", "\\S", true), ae("text", oe, pe, "§", "\\S"), ae(ie, oe, pe, "¶", "\\P", true), ae("text", oe, pe, "¶", "\\P"), ae(ie, oe, pe, "†", "\\dag"), ae("text", oe, pe, "†", "\\dag"), ae("text", oe, pe, "†", "\\textdagger"), ae(ie, oe, pe, "‡", "\\ddag"), ae("text", oe, pe, "‡", "\\ddag"), ae("text", oe, pe, "‡", "\\textdaggerdbl"), ae(ie, oe, "close", "⎱", "\\rmoustache", true), ae(ie, oe, "open", "⎰", "\\lmoustache", true), ae(ie, oe, "close", "⟯", "\\rgroup", true), ae(ie, oe, "open", "⟮", "\\lgroup", true), ae(ie, oe, he, "∓", "\\mp", true), ae(ie, oe, he, "⊖", "\\ominus", true), ae(ie, oe, he, "⊎", "\\uplus", true), ae(ie, oe, he, "⊓", "\\sqcap", true), ae(ie, oe, he, "∗", "\\ast"), ae(ie, oe, he, "⊔", "\\sqcup", true), ae(ie, oe, he, "◯", "\\bigcirc", true), ae(ie, oe, he, "∙", "\\bullet", true), ae(ie, oe, he, "‡", "\\ddagger"), ae(ie, oe, he, "≀", "\\wr", true), ae(ie, oe, he, "⨿", "\\amalg"), ae(ie, oe, he, "&", "\\And"), ae(ie, oe, ue, "⟵", "\\longleftarrow", true), ae(ie, oe, ue, "⇐", "\\Leftarrow", true), ae(ie, oe, ue, "⟸", "\\Longleftarrow", true), ae(ie, oe, ue, "⟶", "\\longrightarrow", true), ae(ie, oe, ue, "⇒", "\\Rightarrow", true), ae(ie, oe, ue, "⟹", "\\Longrightarrow", true), ae(ie, oe, ue, "↔", "\\leftrightarrow", true), ae(ie, oe, ue, "⟷", "\\longleftrightarrow", true), ae(ie, oe, ue, "⇔", "\\Leftrightarrow", true), ae(ie, oe, ue, "⟺", "\\Longleftrightarrow", true), ae(ie, oe, ue, "↦", "\\mapsto", true), ae(ie, oe, ue, "⟼", "\\longmapsto", true), ae(ie, oe, ue, "↗", "\\nearrow", true), ae(ie, oe, ue, "↩", "\\hookleftarrow", true), ae(ie, oe, ue, "↪", "\\hookrightarrow", true), ae(ie, oe, ue, "↘", "\\searrow", true), ae(ie, oe, ue, "↼", "\\leftharpoonup", true), ae(ie, oe, ue, "⇀", "\\rightharpoonup", true), ae(ie, oe, ue, "↙", "\\swarrow", true), ae(ie, oe, ue, "↽", "\\leftharpoondown", true), ae(ie, oe, ue, "⇁", "\\rightharpoondown", true), ae(ie, oe, ue, "↖", "\\nwarrow", true), ae(ie, oe, ue, "⇌", "\\rightleftharpoons", true), ae(ie, se, ue, "≮", "\\nless", true), ae(ie, se, ue, "", "\\@nleqslant"), ae(ie, se, ue, "", "\\@nleqq"), ae(ie, se, ue, "⪇", "\\lneq", true), ae(ie, se, ue, "≨", "\\lneqq", true), ae(ie, se, ue, "", "\\@lvertneqq"), ae(ie, se, ue, "⋦", "\\lnsim", true), ae(ie, se, ue, "⪉", "\\lnapprox", true), ae(ie, se, ue, "⊀", "\\nprec", true), ae(ie, se, ue, "⋠", "\\npreceq", true), ae(ie, se, ue, "⋨", "\\precnsim", true), ae(ie, se, ue, "⪹", "\\precnapprox", true), ae(ie, se, ue, "≁", "\\nsim", true), ae(ie, se, ue, "", "\\@nshortmid"), ae(ie, se, ue, "∤", "\\nmid", true), ae(ie, se, ue, "⊬", "\\nvdash", true), ae(ie, se, ue, "⊭", "\\nvDash", true), ae(ie, se, ue, "⋪", "\\ntriangleleft"), ae(ie, se, ue, "⋬", "\\ntrianglelefteq", true), ae(ie, se, ue, "⊊", "\\subsetneq", true), ae(ie, se, ue, "", "\\@varsubsetneq"), ae(ie, se, ue, "⫋", "\\subsetneqq", true), ae(ie, se, ue, "", "\\@varsubsetneqq"), ae(ie, se, ue, "≯", "\\ngtr", true), ae(ie, se, ue, "", "\\@ngeqslant"), ae(ie, se, ue, "", "\\@ngeqq"), ae(ie, se, ue, "⪈", "\\gneq", true), ae(ie, se, ue, "≩", "\\gneqq", true), ae(ie, se, ue, "", "\\@gvertneqq"), ae(ie, se, ue, "⋧", "\\gnsim", true), ae(ie, se, ue, "⪊", "\\gnapprox", true), ae(ie, se, ue, "⊁", "\\nsucc", true), ae(ie, se, ue, "⋡", "\\nsucceq", true), ae(ie, se, ue, "⋩", "\\succnsim", true), ae(ie, se, ue, "⪺", "\\succnapprox", true), ae(ie, se, ue, "≆", "\\ncong", true), ae(ie, se, ue, "", "\\@nshortparallel"), ae(ie, se, ue, "∦", "\\nparallel", true), ae(ie, se, ue, "⊯", "\\nVDash", true), ae(ie, se, ue, "⋫", "\\ntriangleright"), ae(ie, se, ue, "⋭", "\\ntrianglerighteq", true), ae(ie, se, ue, "", "\\@nsupseteqq"), ae(ie, se, ue, "⊋", "\\supsetneq", true), ae(ie, se, ue, "", "\\@varsupsetneq"), ae(ie, se, ue, "⫌", "\\supsetneqq", true), ae(ie, se, ue, "", "\\@varsupsetneqq"), ae(ie, se, ue, "⊮", "\\nVdash", true), ae(ie, se, ue, "⪵", "\\precneqq", true), ae(ie, se, ue, "⪶", "\\succneqq", true), ae(ie, se, ue, "", "\\@nsubseteqq"), ae(ie, se, he, "⊴", "\\unlhd"), ae(ie, se, he, "⊵", "\\unrhd"), ae(ie, se, ue, "↚", "\\nleftarrow", true), ae(ie, se, ue, "↛", "\\nrightarrow", true), ae(ie, se, ue, "⇍", "\\nLeftarrow", true), ae(ie, se, ue, "⇏", "\\nRightarrow", true), ae(ie, se, ue, "↮", "\\nleftrightarrow", true), ae(ie, se, ue, "⇎", "\\nLeftrightarrow", true), ae(ie, se, ue, "△", "\\vartriangle"), ae(ie, se, pe, "ℏ", "\\hslash"), ae(ie, se, pe, "▽", "\\triangledown"), ae(ie, se, pe, "◊", "\\lozenge"), ae(ie, se, pe, "Ⓢ", "\\circledS"), ae(ie, se, pe, "®", "\\circledR"), ae("text", se, pe, "®", "\\circledR"), ae(ie, se, pe, "∡", "\\measuredangle", true), ae(ie, se, pe, "∄", "\\nexists"), ae(ie, se, pe, "℧", "\\mho"), ae(ie, se, pe, "Ⅎ", "\\Finv", true), ae(ie, se, pe, "⅁", "\\Game", true), ae(ie, se, pe, "‵", "\\backprime"), ae(ie, se, pe, "▲", "\\blacktriangle"), ae(ie, se, pe, "▼", "\\blacktriangledown"), ae(ie, se, pe, "■", "\\blacksquare"), ae(ie, se, pe, "⧫", "\\blacklozenge"), ae(ie, se, pe, "★", "\\bigstar"), ae(ie, se, pe, "∢", "\\sphericalangle", true), ae(ie, se, pe, "∁", "\\complement", true), ae(ie, se, pe, "ð", "\\eth", true), ae("text", oe, pe, "ð", "ð"), ae(ie, se, pe, "╱", "\\diagup"), ae(ie, se, pe, "╲", "\\diagdown"), ae(ie, se, pe, "□", "\\square"), ae(ie, se, pe, "□", "\\Box"), ae(ie, se, pe, "◊", "\\Diamond"), ae(ie, se, pe, "¥", "\\yen", true), ae("text", se, pe, "¥", "\\yen", true), ae(ie, se, pe, "✓", "\\checkmark", true), ae("text", se, pe, "✓", "\\checkmark"), ae(ie, se, pe, "ℶ", "\\beth", true), ae(ie, se, pe, "ℸ", "\\daleth", true), ae(ie, se, pe, "ℷ", "\\gimel", true), ae(ie, se, pe, "ϝ", "\\digamma", true), ae(ie, se, pe, "ϰ", "\\varkappa"), ae(ie, se, "open", "┌", "\\@ulcorner", true), ae(ie, se, "close", "┐", "\\@urcorner", true), ae(ie, se, "open", "└", "\\@llcorner", true), ae(ie, se, "close", "┘", "\\@lrcorner", true), ae(ie, se, ue, "≦", "\\leqq", true), ae(ie, se, ue, "⩽", "\\leqslant", true), ae(ie, se, ue, "⪕", "\\eqslantless", true), ae(ie, se, ue, "≲", "\\lesssim", true), ae(ie, se, ue, "⪅", "\\lessapprox", true), ae(ie, se, ue, "≊", "\\approxeq", true), ae(ie, se, he, "⋖", "\\lessdot"), ae(ie, se, ue, "⋘", "\\lll", true), ae(ie, se, ue, "≶", "\\lessgtr", true), ae(ie, se, ue, "⋚", "\\lesseqgtr", true), ae(ie, se, ue, "⪋", "\\lesseqqgtr", true), ae(ie, se, ue, "≑", "\\doteqdot"), ae(ie, se, ue, "≓", "\\risingdotseq", true), ae(ie, se, ue, "≒", "\\fallingdotseq", true), ae(ie, se, ue, "∽", "\\backsim", true), ae(ie, se, ue, "⋍", "\\backsimeq", true), ae(ie, se, ue, "⫅", "\\subseteqq", true), ae(ie, se, ue, "⋐", "\\Subset", true), ae(ie, se, ue, "⊏", "\\sqsubset", true), ae(ie, se, ue, "≼", "\\preccurlyeq", true), ae(ie, se, ue, "⋞", "\\curlyeqprec", true), ae(ie, se, ue, "≾", "\\precsim", true), ae(ie, se, ue, "⪷", "\\precapprox", true), ae(ie, se, ue, "⊲", "\\vartriangleleft"), ae(ie, se, ue, "⊴", "\\trianglelefteq"), ae(ie, se, ue, "⊨", "\\vDash", true), ae(ie, se, ue, "⊪", "\\Vvdash", true), ae(ie, se, ue, "⌣", "\\smallsmile"), ae(ie, se, ue, "⌢", "\\smallfrown"), ae(ie, se, ue, "≏", "\\bumpeq", true), ae(ie, se, ue, "≎", "\\Bumpeq", true), ae(ie, se, ue, "≧", "\\geqq", true), ae(ie, se, ue, "⩾", "\\geqslant", true), ae(ie, se, ue, "⪖", "\\eqslantgtr", true), ae(ie, se, ue, "≳", "\\gtrsim", true), ae(ie, se, ue, "⪆", "\\gtrapprox", true), ae(ie, se, he, "⋗", "\\gtrdot"), ae(ie, se, ue, "⋙", "\\ggg", true), ae(ie, se, ue, "≷", "\\gtrless", true), ae(ie, se, ue, "⋛", "\\gtreqless", true), ae(ie, se, ue, "⪌", "\\gtreqqless", true), ae(ie, se, ue, "≖", "\\eqcirc", true), ae(ie, se, ue, "≗", "\\circeq", true), ae(ie, se, ue, "≜", "\\triangleq", true), ae(ie, se, ue, "∼", "\\thicksim"), ae(ie, se, ue, "≈", "\\thickapprox"), ae(ie, se, ue, "⫆", "\\supseteqq", true), ae(ie, se, ue, "⋑", "\\Supset", true), ae(ie, se, ue, "⊐", "\\sqsupset", true), ae(ie, se, ue, "≽", "\\succcurlyeq", true), ae(ie, se, ue, "⋟", "\\curlyeqsucc", true), ae(ie, se, ue, "≿", "\\succsim", true), ae(ie, se, ue, "⪸", "\\succapprox", true), ae(ie, se, ue, "⊳", "\\vartriangleright"), ae(ie, se, ue, "⊵", "\\trianglerighteq"), ae(ie, se, ue, "⊩", "\\Vdash", true), ae(ie, se, ue, "∣", "\\shortmid"), ae(ie, se, ue, "∥", "\\shortparallel"), ae(ie, se, ue, "≬", "\\between", true), ae(ie, se, ue, "⋔", "\\pitchfork", true), ae(ie, se, ue, "∝", "\\varpropto"), ae(ie, se, ue, "◀", "\\blacktriangleleft"), ae(ie, se, ue, "∴", "\\therefore", true), ae(ie, se, ue, "∍", "\\backepsilon"), ae(ie, se, ue, "▶", "\\blacktriangleright"), ae(ie, se, ue, "∵", "\\because", true), ae(ie, se, ue, "⋘", "\\llless"), ae(ie, se, ue, "⋙", "\\gggtr"), ae(ie, se, he, "⊲", "\\lhd"), ae(ie, se, he, "⊳", "\\rhd"), ae(ie, se, ue, "≂", "\\eqsim", true), ae(ie, oe, ue, "⋈", "\\Join"), ae(ie, se, ue, "≑", "\\Doteq", true), ae(ie, se, he, "∔", "\\dotplus", true), ae(ie, se, he, "∖", "\\smallsetminus"), ae(ie, se, he, "⋒", "\\Cap", true), ae(ie, se, he, "⋓", "\\Cup", true), ae(ie, se, he, "⩞", "\\doublebarwedge", true), ae(ie, se, he, "⊟", "\\boxminus", true), ae(ie, se, he, "⊞", "\\boxplus", true), ae(ie, se, he, "⋇", "\\divideontimes", true), ae(ie, se, he, "⋉", "\\ltimes", true), ae(ie, se, he, "⋊", "\\rtimes", true), ae(ie, se, he, "⋋", "\\leftthreetimes", true), ae(ie, se, he, "⋌", "\\rightthreetimes", true), ae(ie, se, he, "⋏", "\\curlywedge", true), ae(ie, se, he, "⋎", "\\curlyvee", true), ae(ie, se, he, "⊝", "\\circleddash", true), ae(ie, se, he, "⊛", "\\circledast", true), ae(ie, se, he, "⋅", "\\centerdot"), ae(ie, se, he, "⊺", "\\intercal", true), ae(ie, se, he, "⋒", "\\doublecap"), ae(ie, se, he, "⋓", "\\doublecup"), ae(ie, se, he, "⊠", "\\boxtimes", true), ae(ie, se, ue, "⇢", "\\dashrightarrow", true), ae(ie, se, ue, "⇠", "\\dashleftarrow", true), ae(ie, se, ue, "⇇", "\\leftleftarrows", true), ae(ie, se, ue, "⇆", "\\leftrightarrows", true), ae(ie, se, ue, "⇚", "\\Lleftarrow", true), ae(ie, se, ue, "↞", "\\twoheadleftarrow", true), ae(ie, se, ue, "↢", "\\leftarrowtail", true), ae(ie, se, ue, "↫", "\\looparrowleft", true), ae(ie, se, ue, "⇋", "\\leftrightharpoons", true), ae(ie, se, ue, "↶", "\\curvearrowleft", true), ae(ie, se, ue, "↺", "\\circlearrowleft", true), ae(ie, se, ue, "↰", "\\Lsh", true), ae(ie, se, ue, "⇈", "\\upuparrows", true), ae(ie, se, ue, "↿", "\\upharpoonleft", true), ae(ie, se, ue, "⇃", "\\downharpoonleft", true), ae(ie, oe, ue, "⊶", "\\origof", true), ae(ie, oe, ue, "⊷", "\\imageof", true), ae(ie, se, ue, "⊸", "\\multimap", true), ae(ie, se, ue, "↭", "\\leftrightsquigarrow", true), ae(ie, se, ue, "⇉", "\\rightrightarrows", true), ae(ie, se, ue, "⇄", "\\rightleftarrows", true), ae(ie, se, ue, "↠", "\\twoheadrightarrow", true), ae(ie, se, ue, "↣", "\\rightarrowtail", true), ae(ie, se, ue, "↬", "\\looparrowright", true), ae(ie, se, ue, "↷", "\\curvearrowright", true), ae(ie, se, ue, "↻", "\\circlearrowright", true), ae(ie, se, ue, "↱", "\\Rsh", true), ae(ie, se, ue, "⇊", "\\downdownarrows", true), ae(ie, se, ue, "↾", "\\upharpoonright", true), ae(ie, se, ue, "⇂", "\\downharpoonright", true), ae(ie, se, ue, "⇝", "\\rightsquigarrow", true), ae(ie, se, ue, "⇝", "\\leadsto"), ae(ie, se, ue, "⇛", "\\Rrightarrow", true), ae(ie, se, ue, "↾", "\\restriction"), ae(ie, oe, pe, "‘", "`"), ae(ie, oe, pe, "$", "\\$"), ae("text", oe, pe, "$", "\\$"), ae("text", oe, pe, "$", "\\textdollar"), ae(ie, oe, pe, "%", "\\%"), ae("text", oe, pe, "%", "\\%"), ae(ie, oe, pe, "_", "\\_"), ae("text", oe, pe, "_", "\\_"), ae("text", oe, pe, "_", "\\textunderscore"), ae(ie, oe, pe, "∠", "\\angle", true), ae(ie, oe, pe, "∞", "\\infty", true), ae(ie, oe, pe, "′", "\\prime"), ae(ie, oe, pe, "△", "\\triangle"), ae(ie, oe, pe, "Γ", "\\Gamma", true), ae(ie, oe, pe, "Δ", "\\Delta", true), ae(ie, oe, pe, "Θ", "\\Theta", true), ae(ie, oe, pe, "Λ", "\\Lambda", true), ae(ie, oe, pe, "Ξ", "\\Xi", true), ae(ie, oe, pe, "Π", "\\Pi", true), ae(ie, oe, pe, "Σ", "\\Sigma", true), ae(ie, oe, pe, "Υ", "\\Upsilon", true), ae(ie, oe, pe, "Φ", "\\Phi", true), ae(ie, oe, pe, "Ψ", "\\Psi", true), ae(ie, oe, pe, "Ω", "\\Omega", true), ae(ie, oe, pe, "A", "Α"), ae(ie, oe, pe, "B", "Β"), ae(ie, oe, pe, "E", "Ε"), ae(ie, oe, pe, "Z", "Ζ"), ae(ie, oe, pe, "H", "Η"), ae(ie, oe, pe, "I", "Ι"), ae(ie, oe, pe, "K", "Κ"), ae(ie, oe, pe, "M", "Μ"), ae(ie, oe, pe, "N", "Ν"), ae(ie, oe, pe, "O", "Ο"), ae(ie, oe, pe, "P", "Ρ"), ae(ie, oe, pe, "T", "Τ"), ae(ie, oe, pe, "X", "Χ"), ae(ie, oe, pe, "¬", "\\neg", true), ae(ie, oe, pe, "¬", "\\lnot"), ae(ie, oe, pe, "⊤", "\\top"), ae(ie, oe, pe, "⊥", "\\bot"), ae(ie, oe, pe, "∅", "\\emptyset"), ae(ie, se, pe, "∅", "\\varnothing"), ae(ie, oe, ce, "α", "\\alpha", true), ae(ie, oe, ce, "β", "\\beta", true), ae(ie, oe, ce, "γ", "\\gamma", true), ae(ie, oe, ce, "δ", "\\delta", true), ae(ie, oe, ce, "ϵ", "\\epsilon", true), ae(ie, oe, ce, "ζ", "\\zeta", true), ae(ie, oe, ce, "η", "\\eta", true), ae(ie, oe, ce, "θ", "\\theta", true), ae(ie, oe, ce, "ι", "\\iota", true), ae(ie, oe, ce, "κ", "\\kappa", true), ae(ie, oe, ce, "λ", "\\lambda", true), ae(ie, oe, ce, "μ", "\\mu", true), ae(ie, oe, ce, "ν", "\\nu", true), ae(ie, oe, ce, "ξ", "\\xi", true), ae(ie, oe, ce, "ο", "\\omicron", true), ae(ie, oe, ce, "π", "\\pi", true), ae(ie, oe, ce, "ρ", "\\rho", true), ae(ie, oe, ce, "σ", "\\sigma", true), ae(ie, oe, ce, "τ", "\\tau", true), ae(ie, oe, ce, "υ", "\\upsilon", true), ae(ie, oe, ce, "ϕ", "\\phi", true), ae(ie, oe, ce, "χ", "\\chi", true), ae(ie, oe, ce, "ψ", "\\psi", true), ae(ie, oe, ce, "ω", "\\omega", true), ae(ie, oe, ce, "ε", "\\varepsilon", true), ae(ie, oe, ce, "ϑ", "\\vartheta", true), ae(ie, oe, ce, "ϖ", "\\varpi", true), ae(ie, oe, ce, "ϱ", "\\varrho", true), ae(ie, oe, ce, "ς", "\\varsigma", true), ae(ie, oe, ce, "φ", "\\varphi", true), ae(ie, oe, he, "∗", "*", true), ae(ie, oe, he, "+", "+"), ae(ie, oe, he, "−", "-", true), ae(ie, oe, he, "⋅", "\\cdot", true), ae(ie, oe, he, "∘", "\\circ", true), ae(ie, oe, he, "÷", "\\div", true), ae(ie, oe, he, "±", "\\pm", true), ae(ie, oe, he, "×", "\\times", true), ae(ie, oe, he, "∩", "\\cap", true), ae(ie, oe, he, "∪", "\\cup", true), ae(ie, oe, he, "∖", "\\setminus", true), ae(ie, oe, he, "∧", "\\land"), ae(ie, oe, he, "∨", "\\lor"), ae(ie, oe, he, "∧", "\\wedge", true), ae(ie, oe, he, "∨", "\\vee", true), ae(ie, oe, pe, "√", "\\surd"), ae(ie, oe, "open", "⟨", "\\langle", true), ae(ie, oe, "open", "∣", "\\lvert"), ae(ie, oe, "open", "∥", "\\lVert"), ae(ie, oe, "close", "?", "?"), ae(ie, oe, "close", "!", "!"), ae(ie, oe, "close", "⟩", "\\rangle", true), ae(ie, oe, "close", "∣", "\\rvert"), ae(ie, oe, "close", "∥", "\\rVert"), ae(ie, oe, ue, "=", "="), ae(ie, oe, ue, ":", ":"), ae(ie, oe, ue, "≈", "\\approx", true), ae(ie, oe, ue, "≅", "\\cong", true), ae(ie, oe, ue, "≥", "\\ge"), ae(ie, oe, ue, "≥", "\\geq", true), ae(ie, oe, ue, "←", "\\gets"), ae(ie, oe, ue, ">", "\\gt", true), ae(ie, oe, ue, "∈", "\\in", true), ae(ie, oe, ue, "", "\\@not"), ae(ie, oe, ue, "⊂", "\\subset", true), ae(ie, oe, ue, "⊃", "\\supset", true), ae(ie, oe, ue, "⊆", "\\subseteq", true), ae(ie, oe, ue, "⊇", "\\supseteq", true), ae(ie, se, ue, "⊈", "\\nsubseteq", true), ae(ie, se, ue, "⊉", "\\nsupseteq", true), ae(ie, oe, ue, "⊨", "\\models"), ae(ie, oe, ue, "←", "\\leftarrow", true), ae(ie, oe, ue, "≤", "\\le"), ae(ie, oe, ue, "≤", "\\leq", true), ae(ie, oe, ue, "<", "\\lt", true), ae(ie, oe, ue, "→", "\\rightarrow", true), ae(ie, oe, ue, "→", "\\to"), ae(ie, se, ue, "≱", "\\ngeq", true), ae(ie, se, ue, "≰", "\\nleq", true), ae(ie, oe, "spacing", " ", "\\ "), ae(ie, oe, "spacing", " ", "\\space"), ae(ie, oe, "spacing", " ", "\\nobreakspace"), ae("text", oe, "spacing", " ", "\\ "), ae("text", oe, "spacing", " ", " "), ae("text", oe, "spacing", " ", "\\space"), ae("text", oe, "spacing", " ", "\\nobreakspace"), ae(ie, oe, "spacing", null, "\\nobreak"), ae(ie, oe, "spacing", null, "\\allowbreak"), ae(ie, oe, "punct", ",", ","), ae(ie, oe, "punct", ";", ";"), ae(ie, se, he, "⊼", "\\barwedge", true), ae(ie, se, he, "⊻", "\\veebar", true), ae(ie, oe, he, "⊙", "\\odot", true), ae(ie, oe, he, "⊕", "\\oplus", true), ae(ie, oe, he, "⊗", "\\otimes", true), ae(ie, oe, pe, "∂", "\\partial", true), ae(ie, oe, he, "⊘", "\\oslash", true), ae(ie, se, he, "⊚", "\\circledcirc", true), ae(ie, se, he, "⊡", "\\boxdot", true), ae(ie, oe, he, "△", "\\bigtriangleup"), ae(ie, oe, he, "▽", "\\bigtriangledown"), ae(ie, oe, he, "†", "\\dagger"), ae(ie, oe, he, "⋄", "\\diamond"), ae(ie, oe, he, "⋆", "\\star"), ae(ie, oe, he, "◃", "\\triangleleft"), ae(ie, oe, he, "▹", "\\triangleright"), ae(ie, oe, "open", "{", "\\{"), ae("text", oe, pe, "{", "\\{"), ae("text", oe, pe, "{", "\\textbraceleft"), ae(ie, oe, "close", "}", "\\}"), ae("text", oe, pe, "}", "\\}"), ae("text", oe, pe, "}", "\\textbraceright"), ae(ie, oe, "open", "{", "\\lbrace"), ae(ie, oe, "close", "}", "\\rbrace"), ae(ie, oe, "open", "[", "\\lbrack", true), ae("text", oe, pe, "[", "\\lbrack", true), ae(ie, oe, "close", "]", "\\rbrack", true), ae("text", oe, pe, "]", "\\rbrack", true), ae(ie, oe, "open", "(", "\\lparen", true), ae(ie, oe, "close", ")", "\\rparen", true), ae("text", oe, pe, "<", "\\textless", true), ae("text", oe, pe, ">", "\\textgreater", true), ae(ie, oe, "open", "⌊", "\\lfloor", true), ae(ie, oe, "close", "⌋", "\\rfloor", true), ae(ie, oe, "open", "⌈", "\\lceil", true), ae(ie, oe, "close", "⌉", "\\rceil", true), ae(ie, oe, pe, "\\", "\\backslash"), ae(ie, oe, pe, "∣", "|"), ae(ie, oe, pe, "∣", "\\vert"), ae("text", oe, pe, "|", "\\textbar", true), ae(ie, oe, pe, "∥", "\\|"), ae(ie, oe, pe, "∥", "\\Vert"), ae("text", oe, pe, "∥", "\\textbardbl"), ae("text", oe, pe, "~", "\\textasciitilde"), ae("text", oe, pe, "\\", "\\textbackslash"), ae("text", oe, pe, "^", "\\textasciicircum"), ae(ie, oe, ue, "↑", "\\uparrow", true), ae(ie, oe, ue, "⇑", "\\Uparrow", true), ae(ie, oe, ue, "↓", "\\downarrow", true), ae(ie, oe, ue, "⇓", "\\Downarrow", true), ae(ie, oe, ue, "↕", "\\updownarrow", true), ae(ie, oe, ue, "⇕", "\\Updownarrow", true), ae(ie, oe, me, "∐", "\\coprod"), ae(ie, oe, me, "⋁", "\\bigvee"), ae(ie, oe, me, "⋀", "\\bigwedge"), ae(ie, oe, me, "⨄", "\\biguplus"), ae(ie, oe, me, "⋂", "\\bigcap"), ae(ie, oe, me, "⋃", "\\bigcup"), ae(ie, oe, me, "∫", "\\int"), ae(ie, oe, me, "∫", "\\intop"), ae(ie, oe, me, "∬", "\\iint"), ae(ie, oe, me, "∭", "\\iiint"), ae(ie, oe, me, "∏", "\\prod"), ae(ie, oe, me, "∑", "\\sum"), ae(ie, oe, me, "⨂", "\\bigotimes"), ae(ie, oe, me, "⨁", "\\bigoplus"), ae(ie, oe, me, "⨀", "\\bigodot"), ae(ie, oe, me, "∮", "\\oint"), ae(ie, oe, me, "∯", "\\oiint"), ae(ie, oe, me, "∰", "\\oiiint"), ae(ie, oe, me, "⨆", "\\bigsqcup"), ae(ie, oe, me, "∫", "\\smallint"), ae("text", oe, "inner", "…", "\\textellipsis"), ae(ie, oe, "inner", "…", "\\mathellipsis"), ae("text", oe, "inner", "…", "\\ldots", true), ae(ie, oe, "inner", "…", "\\ldots", true), ae(ie, oe, "inner", "⋯", "\\@cdots", true), ae(ie, oe, "inner", "⋱", "\\ddots", true), ae(ie, oe, pe, "⋮", "\\varvdots"), ae(ie, oe, le, "ˊ", "\\acute"), ae(ie, oe, le, "ˋ", "\\grave"), ae(ie, oe, le, "¨", "\\ddot"), ae(ie, oe, le, "~", "\\tilde"), ae(ie, oe, le, "ˉ", "\\bar"), ae(ie, oe, le, "˘", "\\breve"), ae(ie, oe, le, "ˇ", "\\check"), ae(ie, oe, le, "^", "\\hat"), ae(ie, oe, le, "⃗", "\\vec"), ae(ie, oe, le, "˙", "\\dot"), ae(ie, oe, le, "˚", "\\mathring"), ae(ie, oe, ce, "", "\\@imath"), ae(ie, oe, ce, "", "\\@jmath"), ae(ie, oe, pe, "ı", "ı"), ae(ie, oe, pe, "ȷ", "ȷ"), ae("text", oe, pe, "ı", "\\i", true), ae("text", oe, pe, "ȷ", "\\j", true), ae("text", oe, pe, "ß", "\\ss", true), ae("text", oe, pe, "æ", "\\ae", true), ae("text", oe, pe, "œ", "\\oe", true), ae("text", oe, pe, "ø", "\\o", true), ae("text", oe, pe, "Æ", "\\AE", true), ae("text", oe, pe, "Œ", "\\OE", true), ae("text", oe, pe, "Ø", "\\O", true), ae("text", oe, le, "ˊ", "\\'"), ae("text", oe, le, "ˋ", "\\`"), ae("text", oe, le, "ˆ", "\\^"), ae("text", oe, le, "˜", "\\~"), ae("text", oe, le, "ˉ", "\\="), ae("text", oe, le, "˘", "\\u"), ae("text", oe, le, "˙", "\\."), ae("text", oe, le, "¸", "\\c"), ae("text", oe, le, "˚", "\\r"), ae("text", oe, le, "ˇ", "\\v"), ae("text", oe, le, "¨", '\\"'), ae("text", oe, le, "˝", "\\H"), ae("text", oe, le, "◯", "\\textcircled");
          var de = { "--": true, "---": true, "``": true, "''": true };
          ae("text", oe, pe, "–", "--", true), ae("text", oe, pe, "–", "\\textendash"), ae("text", oe, pe, "—", "---", true), ae("text", oe, pe, "—", "\\textemdash"), ae("text", oe, pe, "‘", "`", true), ae("text", oe, pe, "‘", "\\textquoteleft"), ae("text", oe, pe, "’", "'", true), ae("text", oe, pe, "’", "\\textquoteright"), ae("text", oe, pe, "“", "``", true), ae("text", oe, pe, "“", "\\textquotedblleft"), ae("text", oe, pe, "”", "''", true), ae("text", oe, pe, "”", "\\textquotedblright"), ae(ie, oe, pe, "°", "\\degree", true), ae("text", oe, pe, "°", "\\degree"), ae("text", oe, pe, "°", "\\textdegree", true), ae(ie, oe, pe, "£", "\\pounds"), ae(ie, oe, pe, "£", "\\mathsterling", true), ae("text", oe, pe, "£", "\\pounds"), ae("text", oe, pe, "£", "\\textsterling", true), ae(ie, se, pe, "✠", "\\maltese"), ae("text", se, pe, "✠", "\\maltese");
          for (var fe = 0; fe < '0123456789/@."'.length; fe++) {
            var ge = '0123456789/@."'.charAt(fe);
            ae(ie, oe, pe, ge, ge);
          }
          for (var ve = 0; ve < '0123456789!@*()-=+";:?/.,'.length; ve++) {
            var ye = '0123456789!@*()-=+";:?/.,'.charAt(ve);
            ae("text", oe, pe, ye, ye);
          }
          for (var be = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", xe = 0; xe < be.length; xe++) {
            var we = be.charAt(xe);
            ae(ie, oe, ce, we, we), ae("text", oe, pe, we, we);
          }
          ae(ie, se, pe, "C", "ℂ"), ae("text", se, pe, "C", "ℂ"), ae(ie, se, pe, "H", "ℍ"), ae("text", se, pe, "H", "ℍ"), ae(ie, se, pe, "N", "ℕ"), ae("text", se, pe, "N", "ℕ"), ae(ie, se, pe, "P", "ℙ"), ae("text", se, pe, "P", "ℙ"), ae(ie, se, pe, "Q", "ℚ"), ae("text", se, pe, "Q", "ℚ"), ae(ie, se, pe, "R", "ℝ"), ae("text", se, pe, "R", "ℝ"), ae(ie, se, pe, "Z", "ℤ"), ae("text", se, pe, "Z", "ℤ"), ae(ie, oe, ce, "h", "ℎ"), ae("text", oe, ce, "h", "ℎ");
          for (var ke = "", Se = 0; Se < be.length; Se++) {
            var Me = be.charAt(Se);
            ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56320 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56372 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56424 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56580 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56736 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56788 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56840 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56944 + Se)), ae("text", oe, pe, Me, ke), Se < 26 && (ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56632 + Se)), ae("text", oe, pe, Me, ke), ae(ie, oe, ce, Me, ke = String.fromCharCode(55349, 56476 + Se)), ae("text", oe, pe, Me, ke));
          }
          ae(ie, oe, ce, "k", ke = String.fromCharCode(55349, 56668)), ae("text", oe, pe, "k", ke);
          for (var ze = 0; ze < 10; ze++) {
            var Ae = ze.toString();
            ae(ie, oe, ce, Ae, ke = String.fromCharCode(55349, 57294 + ze)), ae("text", oe, pe, Ae, ke), ae(ie, oe, ce, Ae, ke = String.fromCharCode(55349, 57314 + ze)), ae("text", oe, pe, Ae, ke), ae(ie, oe, ce, Ae, ke = String.fromCharCode(55349, 57324 + ze)), ae("text", oe, pe, Ae, ke), ae(ie, oe, ce, Ae, ke = String.fromCharCode(55349, 57334 + ze)), ae("text", oe, pe, Ae, ke);
          }
          for (var Te = 0; Te < "ÐÞþ".length; Te++) {
            var Be = "ÐÞþ".charAt(Te);
            ae(ie, oe, ce, Be, Be), ae("text", oe, pe, Be, Be);
          }
          var Ce = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["", "", ""], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]], Ne = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]], qe = function(e3, t4, r3) {
            return ne[r3][e3] && ne[r3][e3].replace && (e3 = ne[r3][e3].replace), { value: e3, metrics: C(e3, t4, r3) };
          }, Ie = function(e3, t4, r3, n3, a2) {
            var i2, o2 = qe(e3, t4, r3), s2 = o2.metrics;
            if (e3 = o2.value, s2) {
              var l2 = s2.italic;
              ("text" === r3 || n3 && "mathit" === n3.font) && (l2 = 0), i2 = new $(e3, s2.height, s2.depth, l2, s2.skew, s2.width, a2);
            } else
              "undefined" != typeof console && formatAppLog("warn", "at uni-app/components/mp-html/latex/katex.min.js:1", "No character metrics for '" + e3 + "' in style '" + t4 + "' and mode '" + r3 + "'"), i2 = new $(e3, 0, 0, 0, 0, 0, a2);
            if (n3) {
              i2.maxFontSize = n3.sizeMultiplier, n3.style.isTight() && i2.classes.push("mtight");
              var h2 = n3.getColor();
              h2 && (i2.style.color = h2);
            }
            return i2;
          }, Oe = function(e3, t4) {
            if (V(e3.classes) !== V(t4.classes) || e3.skew !== t4.skew || e3.maxFontSize !== t4.maxFontSize)
              return false;
            if (1 === e3.classes.length) {
              var r3 = e3.classes[0];
              if ("mbin" === r3 || "mord" === r3)
                return false;
            }
            for (var n3 in e3.style)
              if (e3.style.hasOwnProperty(n3) && e3.style[n3] !== t4.style[n3])
                return false;
            for (var a2 in t4.style)
              if (t4.style.hasOwnProperty(a2) && e3.style[a2] !== t4.style[a2])
                return false;
            return true;
          }, Re = function(e3) {
            for (var t4 = 0, r3 = 0, n3 = 0, a2 = 0; a2 < e3.children.length; a2++) {
              var i2 = e3.children[a2];
              i2.height > t4 && (t4 = i2.height), i2.depth > r3 && (r3 = i2.depth), i2.maxFontSize > n3 && (n3 = i2.maxFontSize);
            }
            e3.height = t4, e3.depth = r3, e3.maxFontSize = n3;
          }, He = function(e3, t4, r3, n3) {
            var a2 = new Y(e3, t4, r3, n3);
            return Re(a2), a2;
          }, Ee = function(e3, t4, r3, n3) {
            return new Y(e3, t4, r3, n3);
          }, Le = function(e3) {
            var t4 = new z(e3);
            return Re(t4), t4;
          }, De = function(e3, t4, r3) {
            var n3 = "";
            switch (e3) {
              case "amsrm":
                n3 = "AMS";
                break;
              case "textrm":
                n3 = "Main";
                break;
              case "textsf":
                n3 = "SansSerif";
                break;
              case "texttt":
                n3 = "Typewriter";
                break;
              default:
                n3 = e3;
            }
            return n3 + "-" + ("textbf" === t4 && "textit" === r3 ? "BoldItalic" : "textbf" === t4 ? "Bold" : "textit" === t4 ? "Italic" : "Regular");
          }, Pe = { mathbf: { variant: "bold", fontName: "Main-Bold" }, mathrm: { variant: "normal", fontName: "Main-Regular" }, textit: { variant: "italic", fontName: "Main-Italic" }, mathit: { variant: "italic", fontName: "Main-Italic" }, mathnormal: { variant: "italic", fontName: "Math-Italic" }, mathbb: { variant: "double-struck", fontName: "AMS-Regular" }, mathcal: { variant: "script", fontName: "Caligraphic-Regular" }, mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" }, mathscr: { variant: "script", fontName: "Script-Regular" }, mathsf: { variant: "sans-serif", fontName: "SansSerif-Regular" }, mathtt: { variant: "monospace", fontName: "Typewriter-Regular" } }, Fe = { vec: ["vec", 0.471, 0.714], oiintSize1: ["oiintSize1", 0.957, 0.499], oiintSize2: ["oiintSize2", 1.472, 0.659], oiiintSize1: ["oiiintSize1", 1.304, 0.499], oiiintSize2: ["oiiintSize2", 1.98, 0.659] }, Ve = { fontMap: Pe, makeSymbol: Ie, mathsym: function(e3, t4, r3, n3) {
            return void 0 === n3 && (n3 = []), "boldsymbol" === r3.font && qe(e3, "Main-Bold", t4).metrics ? Ie(e3, "Main-Bold", t4, r3, n3.concat(["mathbf"])) : "\\" === e3 || "main" === ne[t4][e3].font ? Ie(e3, "Main-Regular", t4, r3, n3) : Ie(e3, "AMS-Regular", t4, r3, n3.concat(["amsrm"]));
          }, makeSpan: He, makeSvgSpan: Ee, makeLineSpan: function(e3, t4, r3) {
            var n3 = He([e3], [], t4);
            return n3.height = Math.max(r3 || t4.fontMetrics().defaultRuleThickness, t4.minRuleThickness), n3.style.borderBottomWidth = F(n3.height), n3.maxFontSize = 1, n3;
          }, makeAnchor: function(e3, t4, r3, n3) {
            var a2 = new X(e3, t4, r3, n3);
            return Re(a2), a2;
          }, makeFragment: Le, wrapFragment: function(e3, t4) {
            return e3 instanceof z ? He([], [e3], t4) : e3;
          }, makeVList: function(e3, t4) {
            for (var r3 = function(e4) {
              if ("individualShift" === e4.positionType) {
                for (var t5 = e4.children, r4 = [t5[0]], n4 = -t5[0].shift - t5[0].elem.depth, a3 = n4, i3 = 1; i3 < t5.length; i3++) {
                  var o3 = -t5[i3].shift - a3 - t5[i3].elem.depth, s3 = o3 - (t5[i3 - 1].elem.height + t5[i3 - 1].elem.depth);
                  a3 += o3, r4.push({ type: "kern", size: s3 }), r4.push(t5[i3]);
                }
                return { children: r4, depth: n4 };
              }
              var l3;
              if ("top" === e4.positionType) {
                for (var h3 = e4.positionData, c3 = 0; c3 < e4.children.length; c3++) {
                  var m3 = e4.children[c3];
                  h3 -= "kern" === m3.type ? m3.size : m3.elem.height + m3.elem.depth;
                }
                l3 = h3;
              } else if ("bottom" === e4.positionType)
                l3 = -e4.positionData;
              else {
                var u3 = e4.children[0];
                if ("elem" !== u3.type)
                  throw new Error('First child must have type "elem".');
                if ("shift" === e4.positionType)
                  l3 = -u3.elem.depth - e4.positionData;
                else {
                  if ("firstBaseline" !== e4.positionType)
                    throw new Error("Invalid positionType " + e4.positionType + ".");
                  l3 = -u3.elem.depth;
                }
              }
              return { children: e4.children, depth: l3 };
            }(e3), n3 = r3.children, a2 = r3.depth, i2 = 0, o2 = 0; o2 < n3.length; o2++) {
              var s2 = n3[o2];
              if ("elem" === s2.type) {
                var l2 = s2.elem;
                i2 = Math.max(i2, l2.maxFontSize, l2.height);
              }
            }
            i2 += 2;
            var h2 = He(["pstrut"], []);
            h2.style.height = F(i2);
            for (var c2 = [], m2 = a2, u2 = a2, p2 = a2, d2 = 0; d2 < n3.length; d2++) {
              var f2 = n3[d2];
              if ("kern" === f2.type)
                p2 += f2.size;
              else {
                var g2 = f2.elem, v2 = f2.wrapperClasses || [], y2 = f2.wrapperStyle || {}, b2 = He(v2, [h2, g2], void 0, y2);
                b2.style.top = F(-i2 - p2 - g2.depth), f2.marginLeft && (b2.style.marginLeft = f2.marginLeft), f2.marginRight && (b2.style.marginRight = f2.marginRight), c2.push(b2), p2 += g2.height + g2.depth;
              }
              m2 = Math.min(m2, p2), u2 = Math.max(u2, p2);
            }
            var x2, w2 = He(["vlist"], c2);
            if (w2.style.height = F(u2), m2 < 0) {
              var k2 = He([], []), S2 = He(["vlist"], [k2]);
              S2.style.height = F(-m2);
              var M2 = He(["vlist-s"], [new $("​")]);
              x2 = [He(["vlist-r"], [w2, M2]), He(["vlist-r"], [S2])];
            } else
              x2 = [He(["vlist-r"], [w2])];
            var z2 = He(["vlist-t"], x2);
            return 2 === x2.length && z2.classes.push("vlist-t2"), z2.height = u2, z2.depth = -m2, z2;
          }, makeOrd: function(e3, t4, r3) {
            var a2 = e3.mode, i2 = e3.text, o2 = ["mord"], s2 = "math" === a2 || "text" === a2 && t4.font, l2 = s2 ? t4.font : t4.fontFamily;
            if (55349 === i2.charCodeAt(0)) {
              var h2 = function(e4, t5) {
                var r4 = 1024 * (e4.charCodeAt(0) - 55296) + (e4.charCodeAt(1) - 56320) + 65536, a3 = "math" === t5 ? 0 : 1;
                if (119808 <= r4 && r4 < 120484) {
                  var i3 = Math.floor((r4 - 119808) / 26);
                  return [Ce[i3][2], Ce[i3][a3]];
                }
                if (120782 <= r4 && r4 <= 120831) {
                  var o3 = Math.floor((r4 - 120782) / 10);
                  return [Ne[o3][2], Ne[o3][a3]];
                }
                if (120485 === r4 || 120486 === r4)
                  return [Ce[0][2], Ce[0][a3]];
                if (120486 < r4 && r4 < 120782)
                  return ["", ""];
                throw new n2("Unsupported character: " + e4);
              }(i2, a2), c2 = h2[0], m2 = h2[1];
              return Ie(i2, c2, a2, t4, o2.concat(m2));
            }
            if (l2) {
              var u2, p2;
              if ("boldsymbol" === l2) {
                var d2 = function(e4, t5, r4, n3, a3) {
                  return "textord" !== a3 && qe(e4, "Math-BoldItalic", t5).metrics ? { fontName: "Math-BoldItalic", fontClass: "boldsymbol" } : { fontName: "Main-Bold", fontClass: "mathbf" };
                }(i2, a2, 0, 0, r3);
                u2 = d2.fontName, p2 = [d2.fontClass];
              } else
                s2 ? (u2 = Pe[l2].fontName, p2 = [l2]) : (u2 = De(l2, t4.fontWeight, t4.fontShape), p2 = [l2, t4.fontWeight, t4.fontShape]);
              if (qe(i2, u2, a2).metrics)
                return Ie(i2, u2, a2, t4, o2.concat(p2));
              if (de.hasOwnProperty(i2) && "Typewriter" === u2.substr(0, 10)) {
                for (var f2 = [], g2 = 0; g2 < i2.length; g2++)
                  f2.push(Ie(i2[g2], u2, a2, t4, o2.concat(p2)));
                return Le(f2);
              }
            }
            if ("mathord" === r3)
              return Ie(i2, "Math-Italic", a2, t4, o2.concat(["mathnormal"]));
            if ("textord" === r3) {
              var v2 = ne[a2][i2] && ne[a2][i2].font;
              if ("ams" === v2) {
                var y2 = De("amsrm", t4.fontWeight, t4.fontShape);
                return Ie(i2, y2, a2, t4, o2.concat("amsrm", t4.fontWeight, t4.fontShape));
              }
              if ("main" !== v2 && v2) {
                var b2 = De(v2, t4.fontWeight, t4.fontShape);
                return Ie(i2, b2, a2, t4, o2.concat(b2, t4.fontWeight, t4.fontShape));
              }
              var x2 = De("textrm", t4.fontWeight, t4.fontShape);
              return Ie(i2, x2, a2, t4, o2.concat(t4.fontWeight, t4.fontShape));
            }
            throw new Error("unexpected type: " + r3 + " in makeOrd");
          }, makeGlue: function(e3, t4) {
            var r3 = He(["mspace"], [], t4), n3 = P(e3, t4);
            return r3.style.marginRight = F(n3), r3;
          }, staticSvg: function(e3, t4) {
            var r3 = Fe[e3], n3 = r3[0], a2 = r3[1], i2 = r3[2], o2 = new K(n3), s2 = new Z([o2], { width: F(a2), height: F(i2), style: "width:" + F(a2), viewBox: "0 0 " + 1e3 * a2 + " " + 1e3 * i2, preserveAspectRatio: "xMinYMin" }), l2 = Ee(["overlay"], [s2], t4);
            return l2.height = i2, l2.style.height = F(i2), l2.style.width = F(a2), l2;
          }, svgData: Fe, tryCombineChars: function(e3) {
            for (var t4 = 0; t4 < e3.length - 1; t4++) {
              var r3 = e3[t4], n3 = e3[t4 + 1];
              r3 instanceof $ && n3 instanceof $ && Oe(r3, n3) && (r3.text += n3.text, r3.height = Math.max(r3.height, n3.height), r3.depth = Math.max(r3.depth, n3.depth), r3.italic = n3.italic, e3.splice(t4 + 1, 1), t4--);
            }
            return e3;
          } }, Ge = { number: 3, unit: "mu" }, Ue = { number: 4, unit: "mu" }, _e = { number: 5, unit: "mu" }, Ye = { mord: { mop: Ge, mbin: Ue, mrel: _e, minner: Ge }, mop: { mord: Ge, mop: Ge, mrel: _e, minner: Ge }, mbin: { mord: Ue, mop: Ue, mopen: Ue, minner: Ue }, mrel: { mord: _e, mop: _e, mopen: _e, minner: _e }, mopen: {}, mclose: { mop: Ge, mbin: Ue, mrel: _e, minner: Ge }, mpunct: { mord: Ge, mop: Ge, mrel: _e, mopen: Ge, mclose: Ge, mpunct: Ge, minner: Ge }, minner: { mord: Ge, mop: Ge, mbin: Ue, mrel: _e, mopen: Ge, mpunct: Ge, minner: Ge } }, Xe = { mord: { mop: Ge }, mop: { mord: Ge, mop: Ge }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: Ge }, mpunct: {}, minner: { mop: Ge } }, We = {}, je = {}, $e = {};
          function Ze(e3) {
            for (var t4 = e3.type, r3 = e3.names, n3 = e3.props, a2 = e3.handler, i2 = e3.htmlBuilder, o2 = e3.mathmlBuilder, s2 = { type: t4, numArgs: n3.numArgs, argTypes: n3.argTypes, allowedInArgument: !!n3.allowedInArgument, allowedInText: !!n3.allowedInText, allowedInMath: void 0 === n3.allowedInMath || n3.allowedInMath, numOptionalArgs: n3.numOptionalArgs || 0, infix: !!n3.infix, primitive: !!n3.primitive, handler: a2 }, l2 = 0; l2 < r3.length; ++l2)
              We[r3[l2]] = s2;
            t4 && (i2 && (je[t4] = i2), o2 && ($e[t4] = o2));
          }
          function Ke(e3) {
            Ze({ type: e3.type, names: [], props: { numArgs: 0 }, handler: function() {
              throw new Error("Should never be called.");
            }, htmlBuilder: e3.htmlBuilder, mathmlBuilder: e3.mathmlBuilder });
          }
          var Je = function(e3) {
            return "ordgroup" === e3.type && 1 === e3.body.length ? e3.body[0] : e3;
          }, Qe = function(e3) {
            return "ordgroup" === e3.type ? e3.body : [e3];
          }, et = Ve.makeSpan, tt = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], rt = ["rightmost", "mrel", "mclose", "mpunct"], nt = { display: x.DISPLAY, text: x.TEXT, script: x.SCRIPT, scriptscript: x.SCRIPTSCRIPT }, at = { mord: "mord", mop: "mop", mbin: "mbin", mrel: "mrel", mopen: "mopen", mclose: "mclose", mpunct: "mpunct", minner: "minner" }, it = function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = [null, null]);
            for (var a2 = [], i2 = 0; i2 < e3.length; i2++) {
              var o2 = ct(e3[i2], t4);
              if (o2 instanceof z) {
                var s2 = o2.children;
                a2.push.apply(a2, s2);
              } else
                a2.push(o2);
            }
            if (Ve.tryCombineChars(a2), !r3)
              return a2;
            var h2 = t4;
            if (1 === e3.length) {
              var c2 = e3[0];
              "sizing" === c2.type ? h2 = t4.havingSize(c2.size) : "styling" === c2.type && (h2 = t4.havingStyle(nt[c2.style]));
            }
            var m2 = et([n3[0] || "leftmost"], [], t4), u2 = et([n3[1] || "rightmost"], [], t4), p2 = "root" === r3;
            return ot(a2, function(e4, t5) {
              var r4 = t5.classes[0], n4 = e4.classes[0];
              "mbin" === r4 && l.contains(rt, n4) ? t5.classes[0] = "mord" : "mbin" === n4 && l.contains(tt, r4) && (e4.classes[0] = "mord");
            }, { node: m2 }, u2, p2), ot(a2, function(e4, t5) {
              var r4 = lt(t5), n4 = lt(e4), a3 = r4 && n4 ? e4.hasClass("mtight") ? Xe[r4][n4] : Ye[r4][n4] : null;
              if (a3)
                return Ve.makeGlue(a3, h2);
            }, { node: m2 }, u2, p2), a2;
          }, ot = function e3(t4, r3, n3, a2, i2) {
            a2 && t4.push(a2);
            for (var o2 = 0; o2 < t4.length; o2++) {
              var s2 = t4[o2], l2 = st(s2);
              if (l2)
                e3(l2.children, r3, n3, null, i2);
              else {
                var h2 = !s2.hasClass("mspace");
                if (h2) {
                  var c2 = r3(s2, n3.node);
                  c2 && (n3.insertAfter ? n3.insertAfter(c2) : (t4.unshift(c2), o2++));
                }
                h2 ? n3.node = s2 : i2 && s2.hasClass("newline") && (n3.node = et(["leftmost"])), n3.insertAfter = function(e4) {
                  return function(r4) {
                    t4.splice(e4 + 1, 0, r4), o2++;
                  };
                }(o2);
              }
            }
            a2 && t4.pop();
          }, st = function(e3) {
            return e3 instanceof z || e3 instanceof X || e3 instanceof Y && e3.hasClass("enclosing") ? e3 : null;
          }, lt = function(e3, t4) {
            return e3 ? (t4 && (e3 = function e4(t5, r3) {
              var n3 = st(t5);
              if (n3) {
                var a2 = n3.children;
                if (a2.length) {
                  if ("right" === r3)
                    return e4(a2[a2.length - 1], "right");
                  if ("left" === r3)
                    return e4(a2[0], "left");
                }
              }
              return t5;
            }(e3, t4)), at[e3.classes[0]] || null) : null;
          }, ht = function(e3, t4) {
            var r3 = ["nulldelimiter"].concat(e3.baseSizingClasses());
            return et(t4.concat(r3));
          }, ct = function(e3, t4, r3) {
            if (!e3)
              return et();
            if (je[e3.type]) {
              var a2 = je[e3.type](e3, t4);
              if (r3 && t4.size !== r3.size) {
                a2 = et(t4.sizingClasses(r3), [a2], t4);
                var i2 = t4.sizeMultiplier / r3.sizeMultiplier;
                a2.height *= i2, a2.depth *= i2;
              }
              return a2;
            }
            throw new n2("Got group of unknown type: '" + e3.type + "'");
          };
          function mt(e3, t4) {
            var r3 = et(["base"], e3, t4), n3 = et(["strut"]);
            return n3.style.height = F(r3.height + r3.depth), r3.depth && (n3.style.verticalAlign = F(-r3.depth)), r3.children.unshift(n3), r3;
          }
          function ut(e3, t4) {
            var r3 = null;
            1 === e3.length && "tag" === e3[0].type && (r3 = e3[0].tag, e3 = e3[0].body);
            var n3, a2 = it(e3, t4, "root");
            2 === a2.length && a2[1].hasClass("tag") && (n3 = a2.pop());
            for (var i2, o2 = [], s2 = [], l2 = 0; l2 < a2.length; l2++)
              if (s2.push(a2[l2]), a2[l2].hasClass("mbin") || a2[l2].hasClass("mrel") || a2[l2].hasClass("allowbreak")) {
                for (var h2 = false; l2 < a2.length - 1 && a2[l2 + 1].hasClass("mspace") && !a2[l2 + 1].hasClass("newline"); )
                  l2++, s2.push(a2[l2]), a2[l2].hasClass("nobreak") && (h2 = true);
                h2 || (o2.push(mt(s2, t4)), s2 = []);
              } else
                a2[l2].hasClass("newline") && (s2.pop(), s2.length > 0 && (o2.push(mt(s2, t4)), s2 = []), o2.push(a2[l2]));
            s2.length > 0 && o2.push(mt(s2, t4)), r3 ? ((i2 = mt(it(r3, t4, true))).classes = ["tag"], o2.push(i2)) : n3 && o2.push(n3);
            var c2 = et(["katex-html"], o2);
            if (c2.setAttribute("aria-hidden", "true"), i2) {
              var m2 = i2.children[0];
              m2.style.height = F(c2.height + c2.depth), c2.depth && (m2.style.verticalAlign = F(-c2.depth));
            }
            return c2;
          }
          function pt(e3) {
            return new z(e3);
          }
          var dt = function() {
            function e3(e4, t5, r3) {
              this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e4, this.attributes = {}, this.children = t5 || [], this.classes = r3 || [];
            }
            var t4 = e3.prototype;
            return t4.setAttribute = function(e4, t5) {
              this.attributes[e4] = t5;
            }, t4.getAttribute = function(e4) {
              return this.attributes[e4];
            }, t4.toNode = function() {
              var e4 = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
              for (var t5 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, t5) && e4.setAttribute(t5, this.attributes[t5]);
              this.classes.length > 0 && (e4.className = V(this.classes));
              for (var r3 = 0; r3 < this.children.length; r3++)
                e4.appendChild(this.children[r3].toNode());
              return e4;
            }, t4.toMarkup = function() {
              var e4 = "<" + this.type;
              for (var t5 in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, t5) && (e4 += " " + t5 + '="', e4 += l.escape(this.attributes[t5]), e4 += '"');
              this.classes.length > 0 && (e4 += ' class ="' + l.escape(V(this.classes)) + '"'), e4 += ">";
              for (var r3 = 0; r3 < this.children.length; r3++)
                e4 += this.children[r3].toMarkup();
              return e4 += "</" + this.type + ">";
            }, t4.toText = function() {
              return this.children.map(function(e4) {
                return e4.toText();
              }).join("");
            }, e3;
          }(), ft = function() {
            function e3(e4) {
              this.text = void 0, this.text = e4;
            }
            var t4 = e3.prototype;
            return t4.toNode = function() {
              return document.createTextNode(this.text);
            }, t4.toMarkup = function() {
              return l.escape(this.toText());
            }, t4.toText = function() {
              return this.text;
            }, e3;
          }(), gt = { MathNode: dt, TextNode: ft, SpaceNode: function() {
            function e3(e4) {
              this.width = void 0, this.character = void 0, this.width = e4, this.character = e4 >= 0.05555 && e4 <= 0.05556 ? " " : e4 >= 0.1666 && e4 <= 0.1667 ? " " : e4 >= 0.2222 && e4 <= 0.2223 ? " " : e4 >= 0.2777 && e4 <= 0.2778 ? "  " : e4 >= -0.05556 && e4 <= -0.05555 ? " ⁣" : e4 >= -0.1667 && e4 <= -0.1666 ? " ⁣" : e4 >= -0.2223 && e4 <= -0.2222 ? " ⁣" : e4 >= -0.2778 && e4 <= -0.2777 ? " ⁣" : null;
            }
            var t4 = e3.prototype;
            return t4.toNode = function() {
              if (this.character)
                return document.createTextNode(this.character);
              var e4 = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
              return e4.setAttribute("width", F(this.width)), e4;
            }, t4.toMarkup = function() {
              return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + F(this.width) + '"/>';
            }, t4.toText = function() {
              return this.character ? this.character : " ";
            }, e3;
          }(), newDocumentFragment: pt }, vt = function(e3, t4, r3) {
            return !ne[t4][e3] || !ne[t4][e3].replace || 55349 === e3.charCodeAt(0) || de.hasOwnProperty(e3) && r3 && (r3.fontFamily && "tt" === r3.fontFamily.substr(4, 2) || r3.font && "tt" === r3.font.substr(4, 2)) || (e3 = ne[t4][e3].replace), new gt.TextNode(e3);
          }, yt = function(e3) {
            return 1 === e3.length ? e3[0] : new gt.MathNode("mrow", e3);
          }, bt = function(e3, t4) {
            if ("texttt" === t4.fontFamily)
              return "monospace";
            if ("textsf" === t4.fontFamily)
              return "textit" === t4.fontShape && "textbf" === t4.fontWeight ? "sans-serif-bold-italic" : "textit" === t4.fontShape ? "sans-serif-italic" : "textbf" === t4.fontWeight ? "bold-sans-serif" : "sans-serif";
            if ("textit" === t4.fontShape && "textbf" === t4.fontWeight)
              return "bold-italic";
            if ("textit" === t4.fontShape)
              return "italic";
            if ("textbf" === t4.fontWeight)
              return "bold";
            var r3 = t4.font;
            if (!r3 || "mathnormal" === r3)
              return null;
            var n3 = e3.mode;
            if ("mathit" === r3)
              return "italic";
            if ("boldsymbol" === r3)
              return "textord" === e3.type ? "bold" : "bold-italic";
            if ("mathbf" === r3)
              return "bold";
            if ("mathbb" === r3)
              return "double-struck";
            if ("mathfrak" === r3)
              return "fraktur";
            if ("mathscr" === r3 || "mathcal" === r3)
              return "script";
            if ("mathsf" === r3)
              return "sans-serif";
            if ("mathtt" === r3)
              return "monospace";
            var a2 = e3.text;
            return l.contains(["\\imath", "\\jmath"], a2) ? null : (ne[n3][a2] && ne[n3][a2].replace && (a2 = ne[n3][a2].replace), C(a2, Ve.fontMap[r3].fontName, n3) ? Ve.fontMap[r3].variant : null);
          }, xt = function(e3, t4, r3) {
            if (1 === e3.length) {
              var n3 = kt(e3[0], t4);
              return r3 && n3 instanceof dt && "mo" === n3.type && (n3.setAttribute("lspace", "0em"), n3.setAttribute("rspace", "0em")), [n3];
            }
            for (var a2, i2 = [], o2 = 0; o2 < e3.length; o2++) {
              var s2 = kt(e3[o2], t4);
              if (s2 instanceof dt && a2 instanceof dt) {
                if ("mtext" === s2.type && "mtext" === a2.type && s2.getAttribute("mathvariant") === a2.getAttribute("mathvariant")) {
                  var l2;
                  (l2 = a2.children).push.apply(l2, s2.children);
                  continue;
                }
                if ("mn" === s2.type && "mn" === a2.type) {
                  var h2;
                  (h2 = a2.children).push.apply(h2, s2.children);
                  continue;
                }
                if ("mi" === s2.type && 1 === s2.children.length && "mn" === a2.type) {
                  var c2 = s2.children[0];
                  if (c2 instanceof ft && "." === c2.text) {
                    var m2;
                    (m2 = a2.children).push.apply(m2, s2.children);
                    continue;
                  }
                } else if ("mi" === a2.type && 1 === a2.children.length) {
                  var u2 = a2.children[0];
                  if (u2 instanceof ft && "̸" === u2.text && ("mo" === s2.type || "mi" === s2.type || "mn" === s2.type)) {
                    var p2 = s2.children[0];
                    p2 instanceof ft && p2.text.length > 0 && (p2.text = p2.text.slice(0, 1) + "̸" + p2.text.slice(1), i2.pop());
                  }
                }
              }
              i2.push(s2), a2 = s2;
            }
            return i2;
          }, wt = function(e3, t4, r3) {
            return yt(xt(e3, t4, r3));
          }, kt = function(e3, t4) {
            if (!e3)
              return new gt.MathNode("mrow");
            if ($e[e3.type])
              return $e[e3.type](e3, t4);
            throw new n2("Got group of unknown type: '" + e3.type + "'");
          };
          function St(e3, t4, r3, n3, a2) {
            var i2, o2 = xt(e3, r3);
            i2 = 1 === o2.length && o2[0] instanceof dt && l.contains(["mrow", "mtable"], o2[0].type) ? o2[0] : new gt.MathNode("mrow", o2);
            var s2 = new gt.MathNode("annotation", [new gt.TextNode(t4)]);
            s2.setAttribute("encoding", "application/x-tex");
            var h2 = new gt.MathNode("semantics", [i2, s2]), c2 = new gt.MathNode("math", [h2]);
            c2.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n3 && c2.setAttribute("display", "block");
            var m2 = a2 ? "katex" : "katex-mathml";
            return Ve.makeSpan([m2], [c2]);
          }
          var Mt = function(e3) {
            return new H({ style: e3.displayMode ? x.DISPLAY : x.TEXT, maxSize: e3.maxSize, minRuleThickness: e3.minRuleThickness });
          }, zt = function(e3, t4) {
            if (t4.displayMode) {
              var r3 = ["katex-display"];
              t4.leqno && r3.push("leqno"), t4.fleqn && r3.push("fleqn"), e3 = Ve.makeSpan(r3, [e3]);
            }
            return e3;
          }, At = { widehat: "^", widecheck: "ˇ", widetilde: "~", utilde: "~", overleftarrow: "←", underleftarrow: "←", xleftarrow: "←", overrightarrow: "→", underrightarrow: "→", xrightarrow: "→", underbrace: "⏟", overbrace: "⏞", overgroup: "⏠", undergroup: "⏡", overleftrightarrow: "↔", underleftrightarrow: "↔", xleftrightarrow: "↔", Overrightarrow: "⇒", xRightarrow: "⇒", overleftharpoon: "↼", xleftharpoonup: "↼", overrightharpoon: "⇀", xrightharpoonup: "⇀", xLeftarrow: "⇐", xLeftrightarrow: "⇔", xhookleftarrow: "↩", xhookrightarrow: "↪", xmapsto: "↦", xrightharpoondown: "⇁", xleftharpoondown: "↽", xrightleftharpoons: "⇌", xleftrightharpoons: "⇋", xtwoheadleftarrow: "↞", xtwoheadrightarrow: "↠", xlongequal: "=", xtofrom: "⇄", xrightleftarrows: "⇄", xrightequilibrium: "⇌", xleftequilibrium: "⇋", "\\cdrightarrow": "→", "\\cdleftarrow": "←", "\\cdlongequal": "=" }, Tt = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, Bt = function(e3, t4, r3, n3, a2) {
            var i2, o2 = e3.height + e3.depth + r3 + n3;
            if (/fbox|color|angl/.test(t4)) {
              if (i2 = Ve.makeSpan(["stretchy", t4], [], a2), "fbox" === t4) {
                var s2 = a2.color && a2.getColor();
                s2 && (i2.style.borderColor = s2);
              }
            } else {
              var l2 = [];
              /^[bx]cancel$/.test(t4) && l2.push(new J({ x1: "0", y1: "0", x2: "100%", y2: "100%", "stroke-width": "0.046em" })), /^x?cancel$/.test(t4) && l2.push(new J({ x1: "0", y1: "100%", x2: "100%", y2: "0", "stroke-width": "0.046em" }));
              var h2 = new Z(l2, { width: "100%", height: F(o2) });
              i2 = Ve.makeSvgSpan([], [h2], a2);
            }
            return i2.height = o2, i2.style.height = F(o2), i2;
          }, Ct = function(e3) {
            var t4 = new gt.MathNode("mo", [new gt.TextNode(At[e3.replace(/^\\/, "")])]);
            return t4.setAttribute("stretchy", "true"), t4;
          }, Nt = function(e3, t4) {
            var r3 = function() {
              var r4 = 4e5, n4 = e3.label.substr(1);
              if (l.contains(["widehat", "widecheck", "widetilde", "utilde"], n4)) {
                var a3, i3, o2, s2 = "ordgroup" === (d2 = e3.base).type ? d2.body.length : 1;
                if (s2 > 5)
                  "widehat" === n4 || "widecheck" === n4 ? (a3 = 420, r4 = 2364, o2 = 0.42, i3 = n4 + "4") : (a3 = 312, r4 = 2340, o2 = 0.34, i3 = "tilde4");
                else {
                  var h2 = [1, 1, 2, 2, 3, 3][s2];
                  "widehat" === n4 || "widecheck" === n4 ? (r4 = [0, 1062, 2364, 2364, 2364][h2], a3 = [0, 239, 300, 360, 420][h2], o2 = [0, 0.24, 0.3, 0.3, 0.36, 0.42][h2], i3 = n4 + h2) : (r4 = [0, 600, 1033, 2339, 2340][h2], a3 = [0, 260, 286, 306, 312][h2], o2 = [0, 0.26, 0.286, 0.3, 0.306, 0.34][h2], i3 = "tilde" + h2);
                }
                var c2 = new K(i3), m2 = new Z([c2], { width: "100%", height: F(o2), viewBox: "0 0 " + r4 + " " + a3, preserveAspectRatio: "none" });
                return { span: Ve.makeSvgSpan([], [m2], t4), minWidth: 0, height: o2 };
              }
              var u2, p2, d2, f2 = [], g2 = Tt[n4], v2 = g2[0], y2 = g2[1], b2 = g2[2], x2 = b2 / 1e3, w2 = v2.length;
              if (1 === w2)
                u2 = ["hide-tail"], p2 = [g2[3]];
              else if (2 === w2)
                u2 = ["halfarrow-left", "halfarrow-right"], p2 = ["xMinYMin", "xMaxYMin"];
              else {
                if (3 !== w2)
                  throw new Error("Correct katexImagesData or update code here to support\n                    " + w2 + " children.");
                u2 = ["brace-left", "brace-center", "brace-right"], p2 = ["xMinYMin", "xMidYMin", "xMaxYMin"];
              }
              for (var k2 = 0; k2 < w2; k2++) {
                var S2 = new K(v2[k2]), M2 = new Z([S2], { width: "400em", height: F(x2), viewBox: "0 0 " + r4 + " " + b2, preserveAspectRatio: p2[k2] + " slice" }), z2 = Ve.makeSvgSpan([u2[k2]], [M2], t4);
                if (1 === w2)
                  return { span: z2, minWidth: y2, height: x2 };
                z2.style.height = F(x2), f2.push(z2);
              }
              return { span: Ve.makeSpan(["stretchy"], f2, t4), minWidth: y2, height: x2 };
            }(), n3 = r3.span, a2 = r3.minWidth, i2 = r3.height;
            return n3.height = i2, n3.style.height = F(i2), a2 > 0 && (n3.style.minWidth = F(a2)), n3;
          };
          function qt(e3, t4) {
            if (!e3 || e3.type !== t4)
              throw new Error("Expected node of type " + t4 + ", but got " + (e3 ? "node of type " + e3.type : String(e3)));
            return e3;
          }
          function It(e3) {
            var t4 = Ot(e3);
            if (!t4)
              throw new Error("Expected node of symbol group type, but got " + (e3 ? "node of type " + e3.type : String(e3)));
            return t4;
          }
          function Ot(e3) {
            return e3 && ("atom" === e3.type || te.hasOwnProperty(e3.type)) ? e3 : null;
          }
          var Rt = function(e3, t4) {
            var r3, n3, a2;
            e3 && "supsub" === e3.type ? (r3 = (n3 = qt(e3.base, "accent")).base, e3.base = r3, a2 = function(e4) {
              if (e4 instanceof Y)
                return e4;
              throw new Error("Expected span<HtmlDomNode> but got " + String(e4) + ".");
            }(ct(e3, t4)), e3.base = n3) : r3 = (n3 = qt(e3, "accent")).base;
            var i2 = ct(r3, t4.havingCrampedStyle()), o2 = 0;
            if (n3.isShifty && l.isCharacterBox(r3)) {
              var s2 = l.getBaseElem(r3);
              o2 = Q(ct(s2, t4.havingCrampedStyle())).skew;
            }
            var h2, c2 = "\\c" === n3.label, m2 = c2 ? i2.height + i2.depth : Math.min(i2.height, t4.fontMetrics().xHeight);
            if (n3.isStretchy)
              h2 = Nt(n3, t4), h2 = Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: i2 }, { type: "elem", elem: h2, wrapperClasses: ["svg-align"], wrapperStyle: o2 > 0 ? { width: "calc(100% - " + F(2 * o2) + ")", marginLeft: F(2 * o2) } : void 0 }] }, t4);
            else {
              var u2, p2;
              "\\vec" === n3.label ? (u2 = Ve.staticSvg("vec", t4), p2 = Ve.svgData.vec[1]) : ((u2 = Q(u2 = Ve.makeOrd({ mode: n3.mode, text: n3.label }, t4, "textord"))).italic = 0, p2 = u2.width, c2 && (m2 += u2.depth)), h2 = Ve.makeSpan(["accent-body"], [u2]);
              var d2 = "\\textcircled" === n3.label;
              d2 && (h2.classes.push("accent-full"), m2 = i2.height);
              var f2 = o2;
              d2 || (f2 -= p2 / 2), h2.style.left = F(f2), "\\textcircled" === n3.label && (h2.style.top = ".2em"), h2 = Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: i2 }, { type: "kern", size: -m2 }, { type: "elem", elem: h2 }] }, t4);
            }
            var g2 = Ve.makeSpan(["mord", "accent"], [h2], t4);
            return a2 ? (a2.children[0] = g2, a2.height = Math.max(g2.height, a2.height), a2.classes[0] = "mord", a2) : g2;
          }, Ht = function(e3, t4) {
            var r3 = e3.isStretchy ? Ct(e3.label) : new gt.MathNode("mo", [vt(e3.label, e3.mode)]), n3 = new gt.MathNode("mover", [kt(e3.base, t4), r3]);
            return n3.setAttribute("accent", "true"), n3;
          }, Et = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function(e3) {
            return "\\" + e3;
          }).join("|"));
          Ze({ type: "accent", names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = Je(t4[0]), n3 = !Et.test(e3.funcName), a2 = !n3 || "\\widehat" === e3.funcName || "\\widetilde" === e3.funcName || "\\widecheck" === e3.funcName;
            return { type: "accent", mode: e3.parser.mode, label: e3.funcName, isStretchy: n3, isShifty: a2, base: r3 };
          }, htmlBuilder: Rt, mathmlBuilder: Ht }), Ze({ type: "accent", names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: ["primitive"] }, handler: function(e3, t4) {
            var r3 = t4[0], n3 = e3.parser.mode;
            return "math" === n3 && (e3.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e3.funcName + " works only in text mode"), n3 = "text"), { type: "accent", mode: n3, label: e3.funcName, isStretchy: false, isShifty: true, base: r3 };
          }, htmlBuilder: Rt, mathmlBuilder: Ht }), Ze({ type: "accentUnder", names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = t4[0];
            return { type: "accentUnder", mode: r3.mode, label: n3, base: a2 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = ct(e3.base, t4), n3 = Nt(e3, t4), a2 = "\\utilde" === e3.label ? 0.12 : 0, i2 = Ve.makeVList({ positionType: "top", positionData: r3.height, children: [{ type: "elem", elem: n3, wrapperClasses: ["svg-align"] }, { type: "kern", size: a2 }, { type: "elem", elem: r3 }] }, t4);
            return Ve.makeSpan(["mord", "accentunder"], [i2], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = Ct(e3.label), n3 = new gt.MathNode("munder", [kt(e3.base, t4), r3]);
            return n3.setAttribute("accentunder", "true"), n3;
          } });
          var Lt = function(e3) {
            var t4 = new gt.MathNode("mpadded", e3 ? [e3] : []);
            return t4.setAttribute("width", "+0.6em"), t4.setAttribute("lspace", "0.3em"), t4;
          };
          Ze({ type: "xArrow", names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e3, t4, r3) {
            var n3 = e3.parser, a2 = e3.funcName;
            return { type: "xArrow", mode: n3.mode, label: a2, body: t4[0], below: r3[0] };
          }, htmlBuilder: function(e3, t4) {
            var r3, n3 = t4.style, a2 = t4.havingStyle(n3.sup()), i2 = Ve.wrapFragment(ct(e3.body, a2, t4), t4), o2 = "\\x" === e3.label.slice(0, 2) ? "x" : "cd";
            i2.classes.push(o2 + "-arrow-pad"), e3.below && (a2 = t4.havingStyle(n3.sub()), (r3 = Ve.wrapFragment(ct(e3.below, a2, t4), t4)).classes.push(o2 + "-arrow-pad"));
            var s2, l2 = Nt(e3, t4), h2 = -t4.fontMetrics().axisHeight + 0.5 * l2.height, c2 = -t4.fontMetrics().axisHeight - 0.5 * l2.height - 0.111;
            if ((i2.depth > 0.25 || "\\xleftequilibrium" === e3.label) && (c2 -= i2.depth), r3) {
              var m2 = -t4.fontMetrics().axisHeight + r3.height + 0.5 * l2.height + 0.111;
              s2 = Ve.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: i2, shift: c2 }, { type: "elem", elem: l2, shift: h2 }, { type: "elem", elem: r3, shift: m2 }] }, t4);
            } else
              s2 = Ve.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: i2, shift: c2 }, { type: "elem", elem: l2, shift: h2 }] }, t4);
            return s2.children[0].children[0].children[1].classes.push("svg-align"), Ve.makeSpan(["mrel", "x-arrow"], [s2], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3, n3 = Ct(e3.label);
            if (n3.setAttribute("minsize", "x" === e3.label.charAt(0) ? "1.75em" : "3.0em"), e3.body) {
              var a2 = Lt(kt(e3.body, t4));
              if (e3.below) {
                var i2 = Lt(kt(e3.below, t4));
                r3 = new gt.MathNode("munderover", [n3, i2, a2]);
              } else
                r3 = new gt.MathNode("mover", [n3, a2]);
            } else if (e3.below) {
              var o2 = Lt(kt(e3.below, t4));
              r3 = new gt.MathNode("munder", [n3, o2]);
            } else
              r3 = Lt(), r3 = new gt.MathNode("mover", [n3, r3]);
            return r3;
          } });
          var Dt = { ">": "\\\\cdrightarrow", "<": "\\\\cdleftarrow", "=": "\\\\cdlongequal", A: "\\uparrow", V: "\\downarrow", "|": "\\Vert", ".": "no arrow" }, Pt = function(e3) {
            return "textord" === e3.type && "@" === e3.text;
          };
          function Ft(e3, t4, r3) {
            var n3 = Dt[e3];
            switch (n3) {
              case "\\\\cdrightarrow":
              case "\\\\cdleftarrow":
                return r3.callFunction(n3, [t4[0]], [t4[1]]);
              case "\\uparrow":
              case "\\downarrow":
                var a2 = { type: "atom", text: n3, mode: "math", family: "rel" }, i2 = { type: "ordgroup", mode: "math", body: [r3.callFunction("\\\\cdleft", [t4[0]], []), r3.callFunction("\\Big", [a2], []), r3.callFunction("\\\\cdright", [t4[1]], [])] };
                return r3.callFunction("\\\\cdparent", [i2], []);
              case "\\\\cdlongequal":
                return r3.callFunction("\\\\cdlongequal", [], []);
              case "\\Vert":
                return r3.callFunction("\\Big", [{ type: "textord", text: "\\Vert", mode: "math" }], []);
              default:
                return { type: "textord", text: " ", mode: "math" };
            }
          }
          Ze({ type: "cdlabel", names: ["\\\\cdleft", "\\\\cdright"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName;
            return { type: "cdlabel", mode: r3.mode, side: n3.slice(4), label: t4[0] };
          }, htmlBuilder: function(e3, t4) {
            var r3 = t4.havingStyle(t4.style.sup()), n3 = Ve.wrapFragment(ct(e3.label, r3, t4), t4);
            return n3.classes.push("cd-label-" + e3.side), n3.style.bottom = F(0.8 - n3.depth), n3.height = 0, n3.depth = 0, n3;
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mrow", [kt(e3.label, t4)]);
            return (r3 = new gt.MathNode("mpadded", [r3])).setAttribute("width", "0"), "left" === e3.side && r3.setAttribute("lspace", "-1width"), r3.setAttribute("voffset", "0.7em"), (r3 = new gt.MathNode("mstyle", [r3])).setAttribute("displaystyle", "false"), r3.setAttribute("scriptlevel", "1"), r3;
          } }), Ze({ type: "cdlabelparent", names: ["\\\\cdparent"], props: { numArgs: 1 }, handler: function(e3, t4) {
            return { type: "cdlabelparent", mode: e3.parser.mode, fragment: t4[0] };
          }, htmlBuilder: function(e3, t4) {
            var r3 = Ve.wrapFragment(ct(e3.fragment, t4), t4);
            return r3.classes.push("cd-vert-arrow"), r3;
          }, mathmlBuilder: function(e3, t4) {
            return new gt.MathNode("mrow", [kt(e3.fragment, t4)]);
          } }), Ze({ type: "textord", names: ["\\@char"], props: { numArgs: 1, allowedInText: true }, handler: function(e3, t4) {
            for (var r3 = e3.parser, a2 = qt(t4[0], "ordgroup").body, i2 = "", o2 = 0; o2 < a2.length; o2++)
              i2 += qt(a2[o2], "textord").text;
            var s2, l2 = parseInt(i2);
            if (isNaN(l2))
              throw new n2("\\@char has non-numeric argument " + i2);
            if (l2 < 0 || l2 >= 1114111)
              throw new n2("\\@char with invalid code point " + i2);
            return l2 <= 65535 ? s2 = String.fromCharCode(l2) : (l2 -= 65536, s2 = String.fromCharCode(55296 + (l2 >> 10), 56320 + (1023 & l2))), { type: "textord", mode: r3.mode, text: s2 };
          } });
          var Vt = function(e3, t4) {
            var r3 = it(e3.body, t4.withColor(e3.color), false);
            return Ve.makeFragment(r3);
          }, Gt = function(e3, t4) {
            var r3 = xt(e3.body, t4.withColor(e3.color)), n3 = new gt.MathNode("mstyle", r3);
            return n3.setAttribute("mathcolor", e3.color), n3;
          };
          Ze({ type: "color", names: ["\\textcolor"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "original"] }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = qt(t4[0], "color-token").color, a2 = t4[1];
            return { type: "color", mode: r3.mode, color: n3, body: Qe(a2) };
          }, htmlBuilder: Vt, mathmlBuilder: Gt }), Ze({ type: "color", names: ["\\color"], props: { numArgs: 1, allowedInText: true, argTypes: ["color"] }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.breakOnTokenText, a2 = qt(t4[0], "color-token").color;
            r3.gullet.macros.set("\\current@color", a2);
            var i2 = r3.parseExpression(true, n3);
            return { type: "color", mode: r3.mode, color: a2, body: i2 };
          }, htmlBuilder: Vt, mathmlBuilder: Gt }), Ze({ type: "cr", names: ["\\\\"], props: { numArgs: 0, numOptionalArgs: 1, argTypes: ["size"], allowedInText: true }, handler: function(e3, t4, r3) {
            var n3 = e3.parser, a2 = r3[0], i2 = !n3.settings.displayMode || !n3.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
            return { type: "cr", mode: n3.mode, newLine: i2, size: a2 && qt(a2, "size").value };
          }, htmlBuilder: function(e3, t4) {
            var r3 = Ve.makeSpan(["mspace"], [], t4);
            return e3.newLine && (r3.classes.push("newline"), e3.size && (r3.style.marginTop = F(P(e3.size, t4)))), r3;
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mspace");
            return e3.newLine && (r3.setAttribute("linebreak", "newline"), e3.size && r3.setAttribute("height", F(P(e3.size, t4)))), r3;
          } });
          var Ut = { "\\global": "\\global", "\\long": "\\\\globallong", "\\\\globallong": "\\\\globallong", "\\def": "\\gdef", "\\gdef": "\\gdef", "\\edef": "\\xdef", "\\xdef": "\\xdef", "\\let": "\\\\globallet", "\\futurelet": "\\\\globalfuture" }, _t = function(e3) {
            var t4 = e3.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(t4))
              throw new n2("Expected a control sequence", e3);
            return t4;
          }, Yt = function(e3, t4, r3, n3) {
            var a2 = e3.gullet.macros.get(r3.text);
            null == a2 && (r3.noexpand = true, a2 = { tokens: [r3], numArgs: 0, unexpandable: !e3.gullet.isExpandable(r3.text) }), e3.gullet.macros.set(t4, a2, n3);
          };
          Ze({ type: "internal", names: ["\\global", "\\long", "\\\\globallong"], props: { numArgs: 0, allowedInText: true }, handler: function(e3) {
            var t4 = e3.parser, r3 = e3.funcName;
            t4.consumeSpaces();
            var a2 = t4.fetch();
            if (Ut[a2.text])
              return "\\global" !== r3 && "\\\\globallong" !== r3 || (a2.text = Ut[a2.text]), qt(t4.parseFunction(), "internal");
            throw new n2("Invalid token after macro prefix", a2);
          } }), Ze({ type: "internal", names: ["\\def", "\\gdef", "\\edef", "\\xdef"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e3) {
            var t4 = e3.parser, r3 = e3.funcName, a2 = t4.gullet.popToken(), i2 = a2.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(i2))
              throw new n2("Expected a control sequence", a2);
            for (var o2, s2 = 0, l2 = [[]]; "{" !== t4.gullet.future().text; )
              if ("#" === (a2 = t4.gullet.popToken()).text) {
                if ("{" === t4.gullet.future().text) {
                  o2 = t4.gullet.future(), l2[s2].push("{");
                  break;
                }
                if (a2 = t4.gullet.popToken(), !/^[1-9]$/.test(a2.text))
                  throw new n2('Invalid argument number "' + a2.text + '"');
                if (parseInt(a2.text) !== s2 + 1)
                  throw new n2('Argument number "' + a2.text + '" out of order');
                s2++, l2.push([]);
              } else {
                if ("EOF" === a2.text)
                  throw new n2("Expected a macro definition");
                l2[s2].push(a2.text);
              }
            var h2 = t4.gullet.consumeArg().tokens;
            return o2 && h2.unshift(o2), "\\edef" !== r3 && "\\xdef" !== r3 || (h2 = t4.gullet.expandTokens(h2)).reverse(), t4.gullet.macros.set(i2, { tokens: h2, numArgs: s2, delimiters: l2 }, r3 === Ut[r3]), { type: "internal", mode: t4.mode };
          } }), Ze({ type: "internal", names: ["\\let", "\\\\globallet"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e3) {
            var t4 = e3.parser, r3 = e3.funcName, n3 = _t(t4.gullet.popToken());
            t4.gullet.consumeSpaces();
            var a2 = function(e4) {
              var t5 = e4.gullet.popToken();
              return "=" === t5.text && " " === (t5 = e4.gullet.popToken()).text && (t5 = e4.gullet.popToken()), t5;
            }(t4);
            return Yt(t4, n3, a2, "\\\\globallet" === r3), { type: "internal", mode: t4.mode };
          } }), Ze({ type: "internal", names: ["\\futurelet", "\\\\globalfuture"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e3) {
            var t4 = e3.parser, r3 = e3.funcName, n3 = _t(t4.gullet.popToken()), a2 = t4.gullet.popToken(), i2 = t4.gullet.popToken();
            return Yt(t4, n3, i2, "\\\\globalfuture" === r3), t4.gullet.pushToken(i2), t4.gullet.pushToken(a2), { type: "internal", mode: t4.mode };
          } });
          var Xt = function(e3, t4, r3) {
            var n3 = C(ne.math[e3] && ne.math[e3].replace || e3, t4, r3);
            if (!n3)
              throw new Error("Unsupported symbol " + e3 + " and font size " + t4 + ".");
            return n3;
          }, Wt = function(e3, t4, r3, n3) {
            var a2 = r3.havingBaseStyle(t4), i2 = Ve.makeSpan(n3.concat(a2.sizingClasses(r3)), [e3], r3), o2 = a2.sizeMultiplier / r3.sizeMultiplier;
            return i2.height *= o2, i2.depth *= o2, i2.maxFontSize = a2.sizeMultiplier, i2;
          }, jt = function(e3, t4, r3) {
            var n3 = t4.havingBaseStyle(r3), a2 = (1 - t4.sizeMultiplier / n3.sizeMultiplier) * t4.fontMetrics().axisHeight;
            e3.classes.push("delimcenter"), e3.style.top = F(a2), e3.height -= a2, e3.depth += a2;
          }, $t = function(e3, t4, r3, n3, a2, i2) {
            var o2 = function(e4, t5, r4, n4) {
              return Ve.makeSymbol(e4, "Size" + t5 + "-Regular", r4, n4);
            }(e3, t4, a2, n3), s2 = Wt(Ve.makeSpan(["delimsizing", "size" + t4], [o2], n3), x.TEXT, n3, i2);
            return r3 && jt(s2, n3, x.TEXT), s2;
          }, Zt = function(e3, t4, r3) {
            var n3;
            return n3 = "Size1-Regular" === t4 ? "delim-size1" : "delim-size4", { type: "elem", elem: Ve.makeSpan(["delimsizinginner", n3], [Ve.makeSpan([], [Ve.makeSymbol(e3, t4, r3)])]) };
          }, Kt = function(e3, t4, r3) {
            var n3 = A["Size4-Regular"][e3.charCodeAt(0)] ? A["Size4-Regular"][e3.charCodeAt(0)][4] : A["Size1-Regular"][e3.charCodeAt(0)][4], a2 = new K("inner", function(e4, t5) {
              switch (e4) {
                case "⎜":
                  return "M291 0 H417 V" + t5 + " H291z M291 0 H417 V" + t5 + " H291z";
                case "∣":
                  return "M145 0 H188 V" + t5 + " H145z M145 0 H188 V" + t5 + " H145z";
                case "∥":
                  return "M145 0 H188 V" + t5 + " H145z M145 0 H188 V" + t5 + " H145zM367 0 H410 V" + t5 + " H367z M367 0 H410 V" + t5 + " H367z";
                case "⎟":
                  return "M457 0 H583 V" + t5 + " H457z M457 0 H583 V" + t5 + " H457z";
                case "⎢":
                  return "M319 0 H403 V" + t5 + " H319z M319 0 H403 V" + t5 + " H319z";
                case "⎥":
                  return "M263 0 H347 V" + t5 + " H263z M263 0 H347 V" + t5 + " H263z";
                case "⎪":
                  return "M384 0 H504 V" + t5 + " H384z M384 0 H504 V" + t5 + " H384z";
                case "⏐":
                  return "M312 0 H355 V" + t5 + " H312z M312 0 H355 V" + t5 + " H312z";
                case "‖":
                  return "M257 0 H300 V" + t5 + " H257z M257 0 H300 V" + t5 + " H257zM478 0 H521 V" + t5 + " H478z M478 0 H521 V" + t5 + " H478z";
                default:
                  return "";
              }
            }(e3, Math.round(1e3 * t4))), i2 = new Z([a2], { width: F(n3), height: F(t4), style: "width:" + F(n3), viewBox: "0 0 " + 1e3 * n3 + " " + Math.round(1e3 * t4), preserveAspectRatio: "xMinYMin" }), o2 = Ve.makeSvgSpan([], [i2], r3);
            return o2.height = t4, o2.style.height = F(t4), o2.style.width = F(n3), { type: "elem", elem: o2 };
          }, Jt = { type: "kern", size: -8e-3 }, Qt = ["|", "\\lvert", "\\rvert", "\\vert"], er = ["\\|", "\\lVert", "\\rVert", "\\Vert"], tr = function(e3, t4, r3, n3, a2, i2) {
            var o2, s2, h2, c2;
            o2 = h2 = c2 = e3, s2 = null;
            var m2 = "Size1-Regular";
            "\\uparrow" === e3 ? h2 = c2 = "⏐" : "\\Uparrow" === e3 ? h2 = c2 = "‖" : "\\downarrow" === e3 ? o2 = h2 = "⏐" : "\\Downarrow" === e3 ? o2 = h2 = "‖" : "\\updownarrow" === e3 ? (o2 = "\\uparrow", h2 = "⏐", c2 = "\\downarrow") : "\\Updownarrow" === e3 ? (o2 = "\\Uparrow", h2 = "‖", c2 = "\\Downarrow") : l.contains(Qt, e3) ? h2 = "∣" : l.contains(er, e3) ? h2 = "∥" : "[" === e3 || "\\lbrack" === e3 ? (o2 = "⎡", h2 = "⎢", c2 = "⎣", m2 = "Size4-Regular") : "]" === e3 || "\\rbrack" === e3 ? (o2 = "⎤", h2 = "⎥", c2 = "⎦", m2 = "Size4-Regular") : "\\lfloor" === e3 || "⌊" === e3 ? (h2 = o2 = "⎢", c2 = "⎣", m2 = "Size4-Regular") : "\\lceil" === e3 || "⌈" === e3 ? (o2 = "⎡", h2 = c2 = "⎢", m2 = "Size4-Regular") : "\\rfloor" === e3 || "⌋" === e3 ? (h2 = o2 = "⎥", c2 = "⎦", m2 = "Size4-Regular") : "\\rceil" === e3 || "⌉" === e3 ? (o2 = "⎤", h2 = c2 = "⎥", m2 = "Size4-Regular") : "(" === e3 || "\\lparen" === e3 ? (o2 = "⎛", h2 = "⎜", c2 = "⎝", m2 = "Size4-Regular") : ")" === e3 || "\\rparen" === e3 ? (o2 = "⎞", h2 = "⎟", c2 = "⎠", m2 = "Size4-Regular") : "\\{" === e3 || "\\lbrace" === e3 ? (o2 = "⎧", s2 = "⎨", c2 = "⎩", h2 = "⎪", m2 = "Size4-Regular") : "\\}" === e3 || "\\rbrace" === e3 ? (o2 = "⎫", s2 = "⎬", c2 = "⎭", h2 = "⎪", m2 = "Size4-Regular") : "\\lgroup" === e3 || "⟮" === e3 ? (o2 = "⎧", c2 = "⎩", h2 = "⎪", m2 = "Size4-Regular") : "\\rgroup" === e3 || "⟯" === e3 ? (o2 = "⎫", c2 = "⎭", h2 = "⎪", m2 = "Size4-Regular") : "\\lmoustache" === e3 || "⎰" === e3 ? (o2 = "⎧", c2 = "⎭", h2 = "⎪", m2 = "Size4-Regular") : "\\rmoustache" !== e3 && "⎱" !== e3 || (o2 = "⎫", c2 = "⎩", h2 = "⎪", m2 = "Size4-Regular");
            var u2 = Xt(o2, m2, a2), p2 = u2.height + u2.depth, d2 = Xt(h2, m2, a2), f2 = d2.height + d2.depth, g2 = Xt(c2, m2, a2), v2 = g2.height + g2.depth, y2 = 0, b2 = 1;
            if (null !== s2) {
              var w2 = Xt(s2, m2, a2);
              y2 = w2.height + w2.depth, b2 = 2;
            }
            var k2 = p2 + v2 + y2, S2 = k2 + Math.max(0, Math.ceil((t4 - k2) / (b2 * f2))) * b2 * f2, M2 = n3.fontMetrics().axisHeight;
            r3 && (M2 *= n3.sizeMultiplier);
            var z2 = S2 / 2 - M2, A2 = [];
            if (A2.push(Zt(c2, m2, a2)), A2.push(Jt), null === s2) {
              var T2 = S2 - p2 - v2 + 0.016;
              A2.push(Kt(h2, T2, n3));
            } else {
              var B2 = (S2 - p2 - v2 - y2) / 2 + 0.016;
              A2.push(Kt(h2, B2, n3)), A2.push(Jt), A2.push(Zt(s2, m2, a2)), A2.push(Jt), A2.push(Kt(h2, B2, n3));
            }
            A2.push(Jt), A2.push(Zt(o2, m2, a2));
            var C2 = n3.havingBaseStyle(x.TEXT), N2 = Ve.makeVList({ positionType: "bottom", positionData: z2, children: A2 }, C2);
            return Wt(Ve.makeSpan(["delimsizing", "mult"], [N2], C2), x.TEXT, n3, i2);
          }, rr = function(e3, t4, r3, n3, a2) {
            var i2 = function(e4, t5, r4) {
              t5 *= 1e3;
              var n4 = "";
              switch (e4) {
                case "sqrtMain":
                  n4 = function(e5, t6) {
                    return "M95," + (622 + e5 + t6) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + e5 / 2.075 + " -" + e5 + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + e5) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + e5) + " " + t6 + "h400000v" + (40 + e5) + "h-400000z";
                  }(t5, 80);
                  break;
                case "sqrtSize1":
                  n4 = function(e5, t6) {
                    return "M263," + (601 + e5 + t6) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + e5 / 2.084 + " -" + e5 + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + e5) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + e5) + " " + t6 + "h400000v" + (40 + e5) + "h-400000z";
                  }(t5, 80);
                  break;
                case "sqrtSize2":
                  n4 = function(e5, t6) {
                    return "M983 " + (10 + e5 + t6) + "\nl" + e5 / 3.13 + " -" + e5 + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + e5) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + e5) + " " + t6 + "h400000v" + (40 + e5) + "h-400000z";
                  }(t5, 80);
                  break;
                case "sqrtSize3":
                  n4 = function(e5, t6) {
                    return "M424," + (2398 + e5 + t6) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + e5 / 4.223 + " -" + e5 + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + e5) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + e5) + " " + t6 + "\nh400000v" + (40 + e5) + "h-400000z";
                  }(t5, 80);
                  break;
                case "sqrtSize4":
                  n4 = function(e5, t6) {
                    return "M473," + (2713 + e5 + t6) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + e5 / 5.298 + " -" + e5 + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + e5) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + e5) + " " + t6 + "h400000v" + (40 + e5) + "H1017.7z";
                  }(t5, 80);
                  break;
                case "sqrtTall":
                  n4 = function(e5, t6, r5) {
                    return "M702 " + (e5 + t6) + "H400000" + (40 + e5) + "\nH742v" + (r5 - 54 - t6 - e5) + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + t6 + "H400000v" + (40 + e5) + "H742z";
                  }(t5, 80, r4);
              }
              return n4;
            }(e3, n3, r3), o2 = new K(e3, i2), s2 = new Z([o2], { width: "400em", height: F(t4), viewBox: "0 0 400000 " + r3, preserveAspectRatio: "xMinYMin slice" });
            return Ve.makeSvgSpan(["hide-tail"], [s2], a2);
          }, nr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], ar = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], ir = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], or = [0, 1.2, 1.8, 2.4, 3], sr = [{ type: "small", style: x.SCRIPTSCRIPT }, { type: "small", style: x.SCRIPT }, { type: "small", style: x.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], lr = [{ type: "small", style: x.SCRIPTSCRIPT }, { type: "small", style: x.SCRIPT }, { type: "small", style: x.TEXT }, { type: "stack" }], hr = [{ type: "small", style: x.SCRIPTSCRIPT }, { type: "small", style: x.SCRIPT }, { type: "small", style: x.TEXT }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }], cr = function(e3) {
            if ("small" === e3.type)
              return "Main-Regular";
            if ("large" === e3.type)
              return "Size" + e3.size + "-Regular";
            if ("stack" === e3.type)
              return "Size4-Regular";
            throw new Error("Add support for delim type '" + e3.type + "' here.");
          }, mr = function(e3, t4, r3, n3) {
            for (var a2 = Math.min(2, 3 - n3.style.size); a2 < r3.length && "stack" !== r3[a2].type; a2++) {
              var i2 = Xt(e3, cr(r3[a2]), "math"), o2 = i2.height + i2.depth;
              if ("small" === r3[a2].type && (o2 *= n3.havingBaseStyle(r3[a2].style).sizeMultiplier), o2 > t4)
                return r3[a2];
            }
            return r3[r3.length - 1];
          }, ur = function(e3, t4, r3, n3, a2, i2) {
            var o2;
            "<" === e3 || "\\lt" === e3 || "⟨" === e3 ? e3 = "\\langle" : ">" !== e3 && "\\gt" !== e3 && "⟩" !== e3 || (e3 = "\\rangle"), o2 = l.contains(ir, e3) ? sr : l.contains(nr, e3) ? hr : lr;
            var s2 = mr(e3, t4, o2, n3);
            return "small" === s2.type ? function(e4, t5, r4, n4, a3, i3) {
              var o3 = Ve.makeSymbol(e4, "Main-Regular", a3, n4), s3 = Wt(o3, t5, n4, i3);
              return r4 && jt(s3, n4, t5), s3;
            }(e3, s2.style, r3, n3, a2, i2) : "large" === s2.type ? $t(e3, s2.size, r3, n3, a2, i2) : tr(e3, t4, r3, n3, a2, i2);
          }, pr = { sqrtImage: function(e3, t4) {
            var r3, n3, a2 = t4.havingBaseSizing(), i2 = mr("\\surd", e3 * a2.sizeMultiplier, hr, a2), o2 = a2.sizeMultiplier, s2 = Math.max(0, t4.minRuleThickness - t4.fontMetrics().sqrtRuleThickness), l2 = 0, h2 = 0, c2 = 0;
            return "small" === i2.type ? (e3 < 1 ? o2 = 1 : e3 < 1.4 && (o2 = 0.7), h2 = (1 + s2) / o2, (r3 = rr("sqrtMain", l2 = (1 + s2 + 0.08) / o2, c2 = 1e3 + 1e3 * s2 + 80, s2, t4)).style.minWidth = "0.853em", n3 = 0.833 / o2) : "large" === i2.type ? (c2 = 1080 * or[i2.size], h2 = (or[i2.size] + s2) / o2, l2 = (or[i2.size] + s2 + 0.08) / o2, (r3 = rr("sqrtSize" + i2.size, l2, c2, s2, t4)).style.minWidth = "1.02em", n3 = 1 / o2) : (l2 = e3 + s2 + 0.08, h2 = e3 + s2, c2 = Math.floor(1e3 * e3 + s2) + 80, (r3 = rr("sqrtTall", l2, c2, s2, t4)).style.minWidth = "0.742em", n3 = 1.056), r3.height = h2, r3.style.height = F(l2), { span: r3, advanceWidth: n3, ruleWidth: (t4.fontMetrics().sqrtRuleThickness + s2) * o2 };
          }, sizedDelim: function(e3, t4, r3, a2, i2) {
            if ("<" === e3 || "\\lt" === e3 || "⟨" === e3 ? e3 = "\\langle" : ">" !== e3 && "\\gt" !== e3 && "⟩" !== e3 || (e3 = "\\rangle"), l.contains(nr, e3) || l.contains(ir, e3))
              return $t(e3, t4, false, r3, a2, i2);
            if (l.contains(ar, e3))
              return tr(e3, or[t4], false, r3, a2, i2);
            throw new n2("Illegal delimiter: '" + e3 + "'");
          }, sizeToMaxHeight: or, customSizedDelim: ur, leftRightDelim: function(e3, t4, r3, n3, a2, i2) {
            var o2 = n3.fontMetrics().axisHeight * n3.sizeMultiplier, s2 = 5 / n3.fontMetrics().ptPerEm, l2 = Math.max(t4 - o2, r3 + o2), h2 = Math.max(l2 / 500 * 901, 2 * l2 - s2);
            return ur(e3, h2, true, n3, a2, i2);
          } }, dr = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } }, fr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
          function gr(e3, t4) {
            var r3 = Ot(e3);
            if (r3 && l.contains(fr, r3.text))
              return r3;
            throw new n2(r3 ? "Invalid delimiter '" + r3.text + "' after '" + t4.funcName + "'" : "Invalid delimiter type '" + e3.type + "'", e3);
          }
          function vr(e3) {
            if (!e3.body)
              throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
          }
          Ze({ type: "delimsizing", names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], props: { numArgs: 1, argTypes: ["primitive"] }, handler: function(e3, t4) {
            var r3 = gr(t4[0], e3);
            return { type: "delimsizing", mode: e3.parser.mode, size: dr[e3.funcName].size, mclass: dr[e3.funcName].mclass, delim: r3.text };
          }, htmlBuilder: function(e3, t4) {
            return "." === e3.delim ? Ve.makeSpan([e3.mclass]) : pr.sizedDelim(e3.delim, e3.size, t4, e3.mode, [e3.mclass]);
          }, mathmlBuilder: function(e3) {
            var t4 = [];
            "." !== e3.delim && t4.push(vt(e3.delim, e3.mode));
            var r3 = new gt.MathNode("mo", t4);
            "mopen" === e3.mclass || "mclose" === e3.mclass ? r3.setAttribute("fence", "true") : r3.setAttribute("fence", "false"), r3.setAttribute("stretchy", "true");
            var n3 = F(pr.sizeToMaxHeight[e3.size]);
            return r3.setAttribute("minsize", n3), r3.setAttribute("maxsize", n3), r3;
          } }), Ze({ type: "leftright-right", names: ["\\right"], props: { numArgs: 1, primitive: true }, handler: function(e3, t4) {
            var r3 = e3.parser.gullet.macros.get("\\current@color");
            if (r3 && "string" != typeof r3)
              throw new n2("\\current@color set to non-string in \\right");
            return { type: "leftright-right", mode: e3.parser.mode, delim: gr(t4[0], e3).text, color: r3 };
          } }), Ze({ type: "leftright", names: ["\\left"], props: { numArgs: 1, primitive: true }, handler: function(e3, t4) {
            var r3 = gr(t4[0], e3), n3 = e3.parser;
            ++n3.leftrightDepth;
            var a2 = n3.parseExpression(false);
            --n3.leftrightDepth, n3.expect("\\right", false);
            var i2 = qt(n3.parseFunction(), "leftright-right");
            return { type: "leftright", mode: n3.mode, body: a2, left: r3.text, right: i2.delim, rightColor: i2.color };
          }, htmlBuilder: function(e3, t4) {
            vr(e3);
            for (var r3, n3, a2 = it(e3.body, t4, true, ["mopen", "mclose"]), i2 = 0, o2 = 0, s2 = false, l2 = 0; l2 < a2.length; l2++)
              a2[l2].isMiddle ? s2 = true : (i2 = Math.max(a2[l2].height, i2), o2 = Math.max(a2[l2].depth, o2));
            if (i2 *= t4.sizeMultiplier, o2 *= t4.sizeMultiplier, r3 = "." === e3.left ? ht(t4, ["mopen"]) : pr.leftRightDelim(e3.left, i2, o2, t4, e3.mode, ["mopen"]), a2.unshift(r3), s2)
              for (var h2 = 1; h2 < a2.length; h2++) {
                var c2 = a2[h2].isMiddle;
                c2 && (a2[h2] = pr.leftRightDelim(c2.delim, i2, o2, c2.options, e3.mode, []));
              }
            if ("." === e3.right)
              n3 = ht(t4, ["mclose"]);
            else {
              var m2 = e3.rightColor ? t4.withColor(e3.rightColor) : t4;
              n3 = pr.leftRightDelim(e3.right, i2, o2, m2, e3.mode, ["mclose"]);
            }
            return a2.push(n3), Ve.makeSpan(["minner"], a2, t4);
          }, mathmlBuilder: function(e3, t4) {
            vr(e3);
            var r3 = xt(e3.body, t4);
            if ("." !== e3.left) {
              var n3 = new gt.MathNode("mo", [vt(e3.left, e3.mode)]);
              n3.setAttribute("fence", "true"), r3.unshift(n3);
            }
            if ("." !== e3.right) {
              var a2 = new gt.MathNode("mo", [vt(e3.right, e3.mode)]);
              a2.setAttribute("fence", "true"), e3.rightColor && a2.setAttribute("mathcolor", e3.rightColor), r3.push(a2);
            }
            return yt(r3);
          } }), Ze({ type: "middle", names: ["\\middle"], props: { numArgs: 1, primitive: true }, handler: function(e3, t4) {
            var r3 = gr(t4[0], e3);
            if (!e3.parser.leftrightDepth)
              throw new n2("\\middle without preceding \\left", r3);
            return { type: "middle", mode: e3.parser.mode, delim: r3.text };
          }, htmlBuilder: function(e3, t4) {
            var r3;
            if ("." === e3.delim)
              r3 = ht(t4, []);
            else {
              r3 = pr.sizedDelim(e3.delim, 1, t4, e3.mode, []);
              var n3 = { delim: e3.delim, options: t4 };
              r3.isMiddle = n3;
            }
            return r3;
          }, mathmlBuilder: function(e3, t4) {
            var r3 = "\\vert" === e3.delim || "|" === e3.delim ? vt("|", "text") : vt(e3.delim, e3.mode), n3 = new gt.MathNode("mo", [r3]);
            return n3.setAttribute("fence", "true"), n3.setAttribute("lspace", "0.05em"), n3.setAttribute("rspace", "0.05em"), n3;
          } });
          var yr = function(e3, t4) {
            var r3, n3, a2, i2 = Ve.wrapFragment(ct(e3.body, t4), t4), o2 = e3.label.substr(1), s2 = t4.sizeMultiplier, h2 = 0, c2 = l.isCharacterBox(e3.body);
            if ("sout" === o2)
              (r3 = Ve.makeSpan(["stretchy", "sout"])).height = t4.fontMetrics().defaultRuleThickness / s2, h2 = -0.5 * t4.fontMetrics().xHeight;
            else if ("phase" === o2) {
              var m2 = P({ number: 0.6, unit: "pt" }, t4), u2 = P({ number: 0.35, unit: "ex" }, t4);
              s2 /= t4.havingBaseSizing().sizeMultiplier;
              var p2 = i2.height + i2.depth + m2 + u2;
              i2.style.paddingLeft = F(p2 / 2 + m2);
              var d2 = Math.floor(1e3 * p2 * s2), f2 = "M400000 " + (n3 = d2) + " H0 L" + n3 / 2 + " 0 l65 45 L145 " + (n3 - 80) + " H400000z", g2 = new Z([new K("phase", f2)], { width: "400em", height: F(d2 / 1e3), viewBox: "0 0 400000 " + d2, preserveAspectRatio: "xMinYMin slice" });
              (r3 = Ve.makeSvgSpan(["hide-tail"], [g2], t4)).style.height = F(p2), h2 = i2.depth + m2 + u2;
            } else {
              /cancel/.test(o2) ? c2 || i2.classes.push("cancel-pad") : "angl" === o2 ? i2.classes.push("anglpad") : i2.classes.push("boxpad");
              var v2 = 0, y2 = 0, b2 = 0;
              /box/.test(o2) ? (b2 = Math.max(t4.fontMetrics().fboxrule, t4.minRuleThickness), y2 = v2 = t4.fontMetrics().fboxsep + ("colorbox" === o2 ? 0 : b2)) : "angl" === o2 ? (v2 = 4 * (b2 = Math.max(t4.fontMetrics().defaultRuleThickness, t4.minRuleThickness)), y2 = Math.max(0, 0.25 - i2.depth)) : y2 = v2 = c2 ? 0.2 : 0, r3 = Bt(i2, o2, v2, y2, t4), /fbox|boxed|fcolorbox/.test(o2) ? (r3.style.borderStyle = "solid", r3.style.borderWidth = F(b2)) : "angl" === o2 && 0.049 !== b2 && (r3.style.borderTopWidth = F(b2), r3.style.borderRightWidth = F(b2)), h2 = i2.depth + y2, e3.backgroundColor && (r3.style.backgroundColor = e3.backgroundColor, e3.borderColor && (r3.style.borderColor = e3.borderColor));
            }
            if (e3.backgroundColor)
              a2 = Ve.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: r3, shift: h2 }, { type: "elem", elem: i2, shift: 0 }] }, t4);
            else {
              var x2 = /cancel|phase/.test(o2) ? ["svg-align"] : [];
              a2 = Ve.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: i2, shift: 0 }, { type: "elem", elem: r3, shift: h2, wrapperClasses: x2 }] }, t4);
            }
            return /cancel/.test(o2) && (a2.height = i2.height, a2.depth = i2.depth), /cancel/.test(o2) && !c2 ? Ve.makeSpan(["mord", "cancel-lap"], [a2], t4) : Ve.makeSpan(["mord"], [a2], t4);
          }, br = function(e3, t4) {
            var r3 = 0, n3 = new gt.MathNode(e3.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [kt(e3.body, t4)]);
            switch (e3.label) {
              case "\\cancel":
                n3.setAttribute("notation", "updiagonalstrike");
                break;
              case "\\bcancel":
                n3.setAttribute("notation", "downdiagonalstrike");
                break;
              case "\\phase":
                n3.setAttribute("notation", "phasorangle");
                break;
              case "\\sout":
                n3.setAttribute("notation", "horizontalstrike");
                break;
              case "\\fbox":
                n3.setAttribute("notation", "box");
                break;
              case "\\angl":
                n3.setAttribute("notation", "actuarial");
                break;
              case "\\fcolorbox":
              case "\\colorbox":
                if (r3 = t4.fontMetrics().fboxsep * t4.fontMetrics().ptPerEm, n3.setAttribute("width", "+" + 2 * r3 + "pt"), n3.setAttribute("height", "+" + 2 * r3 + "pt"), n3.setAttribute("lspace", r3 + "pt"), n3.setAttribute("voffset", r3 + "pt"), "\\fcolorbox" === e3.label) {
                  var a2 = Math.max(t4.fontMetrics().fboxrule, t4.minRuleThickness);
                  n3.setAttribute("style", "border: " + a2 + "em solid " + String(e3.borderColor));
                }
                break;
              case "\\xcancel":
                n3.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
            }
            return e3.backgroundColor && n3.setAttribute("mathbackground", e3.backgroundColor), n3;
          };
          Ze({ type: "enclose", names: ["\\colorbox"], props: { numArgs: 2, allowedInText: true, argTypes: ["color", "text"] }, handler: function(e3, t4, r3) {
            var n3 = e3.parser, a2 = e3.funcName, i2 = qt(t4[0], "color-token").color, o2 = t4[1];
            return { type: "enclose", mode: n3.mode, label: a2, backgroundColor: i2, body: o2 };
          }, htmlBuilder: yr, mathmlBuilder: br }), Ze({ type: "enclose", names: ["\\fcolorbox"], props: { numArgs: 3, allowedInText: true, argTypes: ["color", "color", "text"] }, handler: function(e3, t4, r3) {
            var n3 = e3.parser, a2 = e3.funcName, i2 = qt(t4[0], "color-token").color, o2 = qt(t4[1], "color-token").color, s2 = t4[2];
            return { type: "enclose", mode: n3.mode, label: a2, backgroundColor: o2, borderColor: i2, body: s2 };
          }, htmlBuilder: yr, mathmlBuilder: br }), Ze({ type: "enclose", names: ["\\fbox"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: true }, handler: function(e3, t4) {
            return { type: "enclose", mode: e3.parser.mode, label: "\\fbox", body: t4[0] };
          } }), Ze({ type: "enclose", names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = t4[0];
            return { type: "enclose", mode: r3.mode, label: n3, body: a2 };
          }, htmlBuilder: yr, mathmlBuilder: br }), Ze({ type: "enclose", names: ["\\angl"], props: { numArgs: 1, argTypes: ["hbox"], allowedInText: false }, handler: function(e3, t4) {
            return { type: "enclose", mode: e3.parser.mode, label: "\\angl", body: t4[0] };
          } });
          var xr = {};
          function wr(e3) {
            for (var t4 = e3.type, r3 = e3.names, n3 = e3.props, a2 = e3.handler, i2 = e3.htmlBuilder, o2 = e3.mathmlBuilder, s2 = { type: t4, numArgs: n3.numArgs || 0, allowedInText: false, numOptionalArgs: 0, handler: a2 }, l2 = 0; l2 < r3.length; ++l2)
              xr[r3[l2]] = s2;
            i2 && (je[t4] = i2), o2 && ($e[t4] = o2);
          }
          var kr = {};
          function Sr(e3, t4) {
            kr[e3] = t4;
          }
          var Mr = function() {
            function e3(e4, t4, r3) {
              this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e4, this.start = t4, this.end = r3;
            }
            return e3.range = function(t4, r3) {
              return r3 ? t4 && t4.loc && r3.loc && t4.loc.lexer === r3.loc.lexer ? new e3(t4.loc.lexer, t4.loc.start, r3.loc.end) : null : t4 && t4.loc;
            }, e3;
          }(), zr = function() {
            function e3(e4, t4) {
              this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e4, this.loc = t4;
            }
            return e3.prototype.range = function(t4, r3) {
              return new e3(r3, Mr.range(this, t4));
            }, e3;
          }();
          function Ar(e3) {
            var t4 = [];
            e3.consumeSpaces();
            for (var r3 = e3.fetch().text; "\\hline" === r3 || "\\hdashline" === r3; )
              e3.consume(), t4.push("\\hdashline" === r3), e3.consumeSpaces(), r3 = e3.fetch().text;
            return t4;
          }
          var Tr = function(e3) {
            if (!e3.parser.settings.displayMode)
              throw new n2("{" + e3.envName + "} can be used only in display mode.");
          };
          function Br(e3) {
            if (-1 === e3.indexOf("ed"))
              return -1 === e3.indexOf("*");
          }
          function Cr(e3, t4, r3) {
            var a2 = t4.hskipBeforeAndAfter, i2 = t4.addJot, o2 = t4.cols, s2 = t4.arraystretch, l2 = t4.colSeparationType, h2 = t4.autoTag, c2 = t4.singleRow, m2 = t4.emptySingleRow, u2 = t4.maxNumCols, p2 = t4.leqno;
            if (e3.gullet.beginGroup(), c2 || e3.gullet.macros.set("\\cr", "\\\\\\relax"), !s2) {
              var d2 = e3.gullet.expandMacroAsText("\\arraystretch");
              if (null == d2)
                s2 = 1;
              else if (!(s2 = parseFloat(d2)) || s2 < 0)
                throw new n2("Invalid \\arraystretch: " + d2);
            }
            e3.gullet.beginGroup();
            var f2 = [], g2 = [f2], v2 = [], y2 = [], b2 = null != h2 ? [] : void 0;
            function x2() {
              h2 && e3.gullet.macros.set("\\@eqnsw", "1", true);
            }
            function w2() {
              b2 && (e3.gullet.macros.get("\\df@tag") ? (b2.push(e3.subparse([new zr("\\df@tag")])), e3.gullet.macros.set("\\df@tag", void 0, true)) : b2.push(Boolean(h2) && "1" === e3.gullet.macros.get("\\@eqnsw")));
            }
            for (x2(), y2.push(Ar(e3)); ; ) {
              var k2 = e3.parseExpression(false, c2 ? "\\end" : "\\\\");
              e3.gullet.endGroup(), e3.gullet.beginGroup(), k2 = { type: "ordgroup", mode: e3.mode, body: k2 }, r3 && (k2 = { type: "styling", mode: e3.mode, style: r3, body: [k2] }), f2.push(k2);
              var S2 = e3.fetch().text;
              if ("&" === S2) {
                if (u2 && f2.length === u2) {
                  if (c2 || l2)
                    throw new n2("Too many tab characters: &", e3.nextToken);
                  e3.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
                }
                e3.consume();
              } else {
                if ("\\end" === S2) {
                  w2(), 1 === f2.length && "styling" === k2.type && 0 === k2.body[0].body.length && (g2.length > 1 || !m2) && g2.pop(), y2.length < g2.length + 1 && y2.push([]);
                  break;
                }
                if ("\\\\" !== S2)
                  throw new n2("Expected & or \\\\ or \\cr or \\end", e3.nextToken);
                e3.consume();
                var M2 = void 0;
                " " !== e3.gullet.future().text && (M2 = e3.parseSizeGroup(true)), v2.push(M2 ? M2.value : null), w2(), y2.push(Ar(e3)), f2 = [], g2.push(f2), x2();
              }
            }
            return e3.gullet.endGroup(), e3.gullet.endGroup(), { type: "array", mode: e3.mode, addJot: i2, arraystretch: s2, body: g2, cols: o2, rowGaps: v2, hskipBeforeAndAfter: a2, hLinesBeforeRow: y2, colSeparationType: l2, tags: b2, leqno: p2 };
          }
          function Nr(e3) {
            return "d" === e3.substr(0, 1) ? "display" : "text";
          }
          var qr = function(e3, t4) {
            var r3, a2, i2 = e3.body.length, o2 = e3.hLinesBeforeRow, s2 = 0, h2 = new Array(i2), c2 = [], m2 = Math.max(t4.fontMetrics().arrayRuleWidth, t4.minRuleThickness), u2 = 1 / t4.fontMetrics().ptPerEm, p2 = 5 * u2;
            e3.colSeparationType && "small" === e3.colSeparationType && (p2 = t4.havingStyle(x.SCRIPT).sizeMultiplier / t4.sizeMultiplier * 0.2778);
            var d2 = "CD" === e3.colSeparationType ? P({ number: 3, unit: "ex" }, t4) : 12 * u2, f2 = 3 * u2, g2 = e3.arraystretch * d2, v2 = 0.7 * g2, y2 = 0.3 * g2, b2 = 0;
            function w2(e4) {
              for (var t5 = 0; t5 < e4.length; ++t5)
                t5 > 0 && (b2 += 0.25), c2.push({ pos: b2, isDashed: e4[t5] });
            }
            for (w2(o2[0]), r3 = 0; r3 < e3.body.length; ++r3) {
              var k2 = e3.body[r3], S2 = v2, M2 = y2;
              s2 < k2.length && (s2 = k2.length);
              var z2 = new Array(k2.length);
              for (a2 = 0; a2 < k2.length; ++a2) {
                var A2 = ct(k2[a2], t4);
                M2 < A2.depth && (M2 = A2.depth), S2 < A2.height && (S2 = A2.height), z2[a2] = A2;
              }
              var T2 = e3.rowGaps[r3], B2 = 0;
              T2 && (B2 = P(T2, t4)) > 0 && (M2 < (B2 += y2) && (M2 = B2), B2 = 0), e3.addJot && (M2 += f2), z2.height = S2, z2.depth = M2, b2 += S2, z2.pos = b2, b2 += M2 + B2, h2[r3] = z2, w2(o2[r3 + 1]);
            }
            var C2, N2, q2 = b2 / 2 + t4.fontMetrics().axisHeight, I2 = e3.cols || [], O2 = [], R2 = [];
            if (e3.tags && e3.tags.some(function(e4) {
              return e4;
            }))
              for (r3 = 0; r3 < i2; ++r3) {
                var H2 = h2[r3], E2 = H2.pos - q2, L2 = e3.tags[r3], D2 = void 0;
                (D2 = true === L2 ? Ve.makeSpan(["eqn-num"], [], t4) : false === L2 ? Ve.makeSpan([], [], t4) : Ve.makeSpan([], it(L2, t4, true), t4)).depth = H2.depth, D2.height = H2.height, R2.push({ type: "elem", elem: D2, shift: E2 });
              }
            for (a2 = 0, N2 = 0; a2 < s2 || N2 < I2.length; ++a2, ++N2) {
              for (var V2 = I2[N2] || {}, G2 = true; "separator" === V2.type; ) {
                if (G2 || ((C2 = Ve.makeSpan(["arraycolsep"], [])).style.width = F(t4.fontMetrics().doubleRuleSep), O2.push(C2)), "|" !== V2.separator && ":" !== V2.separator)
                  throw new n2("Invalid separator type: " + V2.separator);
                var U2 = "|" === V2.separator ? "solid" : "dashed", _2 = Ve.makeSpan(["vertical-separator"], [], t4);
                _2.style.height = F(b2), _2.style.borderRightWidth = F(m2), _2.style.borderRightStyle = U2, _2.style.margin = "0 " + F(-m2 / 2);
                var Y2 = b2 - q2;
                Y2 && (_2.style.verticalAlign = F(-Y2)), O2.push(_2), V2 = I2[++N2] || {}, G2 = false;
              }
              if (!(a2 >= s2)) {
                var X2 = void 0;
                (a2 > 0 || e3.hskipBeforeAndAfter) && 0 !== (X2 = l.deflt(V2.pregap, p2)) && ((C2 = Ve.makeSpan(["arraycolsep"], [])).style.width = F(X2), O2.push(C2));
                var W2 = [];
                for (r3 = 0; r3 < i2; ++r3) {
                  var j2 = h2[r3], $2 = j2[a2];
                  if ($2) {
                    var Z2 = j2.pos - q2;
                    $2.depth = j2.depth, $2.height = j2.height, W2.push({ type: "elem", elem: $2, shift: Z2 });
                  }
                }
                W2 = Ve.makeVList({ positionType: "individualShift", children: W2 }, t4), W2 = Ve.makeSpan(["col-align-" + (V2.align || "c")], [W2]), O2.push(W2), (a2 < s2 - 1 || e3.hskipBeforeAndAfter) && 0 !== (X2 = l.deflt(V2.postgap, p2)) && ((C2 = Ve.makeSpan(["arraycolsep"], [])).style.width = F(X2), O2.push(C2));
              }
            }
            if (h2 = Ve.makeSpan(["mtable"], O2), c2.length > 0) {
              for (var K2 = Ve.makeLineSpan("hline", t4, m2), J2 = Ve.makeLineSpan("hdashline", t4, m2), Q2 = [{ type: "elem", elem: h2, shift: 0 }]; c2.length > 0; ) {
                var ee2 = c2.pop(), te2 = ee2.pos - q2;
                ee2.isDashed ? Q2.push({ type: "elem", elem: J2, shift: te2 }) : Q2.push({ type: "elem", elem: K2, shift: te2 });
              }
              h2 = Ve.makeVList({ positionType: "individualShift", children: Q2 }, t4);
            }
            if (0 === R2.length)
              return Ve.makeSpan(["mord"], [h2], t4);
            var re2 = Ve.makeVList({ positionType: "individualShift", children: R2 }, t4);
            return re2 = Ve.makeSpan(["tag"], [re2], t4), Ve.makeFragment([h2, re2]);
          }, Ir = { c: "center ", l: "left ", r: "right " }, Or = function(e3, t4) {
            for (var r3 = [], n3 = new gt.MathNode("mtd", [], ["mtr-glue"]), a2 = new gt.MathNode("mtd", [], ["mml-eqn-num"]), i2 = 0; i2 < e3.body.length; i2++) {
              for (var o2 = e3.body[i2], s2 = [], l2 = 0; l2 < o2.length; l2++)
                s2.push(new gt.MathNode("mtd", [kt(o2[l2], t4)]));
              e3.tags && e3.tags[i2] && (s2.unshift(n3), s2.push(n3), e3.leqno ? s2.unshift(a2) : s2.push(a2)), r3.push(new gt.MathNode("mtr", s2));
            }
            var h2 = new gt.MathNode("mtable", r3), c2 = 0.5 === e3.arraystretch ? 0.1 : 0.16 + e3.arraystretch - 1 + (e3.addJot ? 0.09 : 0);
            h2.setAttribute("rowspacing", F(c2));
            var m2 = "", u2 = "";
            if (e3.cols && e3.cols.length > 0) {
              var p2 = e3.cols, d2 = "", f2 = false, g2 = 0, v2 = p2.length;
              "separator" === p2[0].type && (m2 += "top ", g2 = 1), "separator" === p2[p2.length - 1].type && (m2 += "bottom ", v2 -= 1);
              for (var y2 = g2; y2 < v2; y2++)
                "align" === p2[y2].type ? (u2 += Ir[p2[y2].align], f2 && (d2 += "none "), f2 = true) : "separator" === p2[y2].type && f2 && (d2 += "|" === p2[y2].separator ? "solid " : "dashed ", f2 = false);
              h2.setAttribute("columnalign", u2.trim()), /[sd]/.test(d2) && h2.setAttribute("columnlines", d2.trim());
            }
            if ("align" === e3.colSeparationType) {
              for (var b2 = e3.cols || [], x2 = "", w2 = 1; w2 < b2.length; w2++)
                x2 += w2 % 2 ? "0em " : "1em ";
              h2.setAttribute("columnspacing", x2.trim());
            } else
              "alignat" === e3.colSeparationType || "gather" === e3.colSeparationType ? h2.setAttribute("columnspacing", "0em") : "small" === e3.colSeparationType ? h2.setAttribute("columnspacing", "0.2778em") : "CD" === e3.colSeparationType ? h2.setAttribute("columnspacing", "0.5em") : h2.setAttribute("columnspacing", "1em");
            var k2 = "", S2 = e3.hLinesBeforeRow;
            m2 += S2[0].length > 0 ? "left " : "", m2 += S2[S2.length - 1].length > 0 ? "right " : "";
            for (var M2 = 1; M2 < S2.length - 1; M2++)
              k2 += 0 === S2[M2].length ? "none " : S2[M2][0] ? "dashed " : "solid ";
            return /[sd]/.test(k2) && h2.setAttribute("rowlines", k2.trim()), "" !== m2 && (h2 = new gt.MathNode("menclose", [h2])).setAttribute("notation", m2.trim()), e3.arraystretch && e3.arraystretch < 1 && (h2 = new gt.MathNode("mstyle", [h2])).setAttribute("scriptlevel", "1"), h2;
          }, Rr = function(e3, t4) {
            -1 === e3.envName.indexOf("ed") && Tr(e3);
            var r3, a2 = [], i2 = e3.envName.indexOf("at") > -1 ? "alignat" : "align", o2 = "split" === e3.envName, s2 = Cr(e3.parser, { cols: a2, addJot: true, autoTag: o2 ? void 0 : Br(e3.envName), emptySingleRow: true, colSeparationType: i2, maxNumCols: o2 ? 2 : void 0, leqno: e3.parser.settings.leqno }, "display"), l2 = 0, h2 = { type: "ordgroup", mode: e3.mode, body: [] };
            if (t4[0] && "ordgroup" === t4[0].type) {
              for (var c2 = "", m2 = 0; m2 < t4[0].body.length; m2++)
                c2 += qt(t4[0].body[m2], "textord").text;
              r3 = Number(c2), l2 = 2 * r3;
            }
            var u2 = !l2;
            s2.body.forEach(function(e4) {
              for (var t5 = 1; t5 < e4.length; t5 += 2) {
                var a3 = qt(e4[t5], "styling");
                qt(a3.body[0], "ordgroup").body.unshift(h2);
              }
              if (u2)
                l2 < e4.length && (l2 = e4.length);
              else {
                var i3 = e4.length / 2;
                if (r3 < i3)
                  throw new n2("Too many math in a row: expected " + r3 + ", but got " + i3, e4[0]);
              }
            });
            for (var p2 = 0; p2 < l2; ++p2) {
              var d2 = "r", f2 = 0;
              p2 % 2 == 1 ? d2 = "l" : p2 > 0 && u2 && (f2 = 1), a2[p2] = { type: "align", align: d2, pregap: f2, postgap: 0 };
            }
            return s2.colSeparationType = u2 ? "align" : "alignat", s2;
          };
          wr({ type: "array", names: ["array", "darray"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = (Ot(t4[0]) ? [t4[0]] : qt(t4[0], "ordgroup").body).map(function(e4) {
              var t5 = It(e4).text;
              if (-1 !== "lcr".indexOf(t5))
                return { type: "align", align: t5 };
              if ("|" === t5)
                return { type: "separator", separator: "|" };
              if (":" === t5)
                return { type: "separator", separator: ":" };
              throw new n2("Unknown column alignment: " + t5, e4);
            }), a2 = { cols: r3, hskipBeforeAndAfter: true, maxNumCols: r3.length };
            return Cr(e3.parser, a2, Nr(e3.envName));
          }, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], props: { numArgs: 0 }, handler: function(e3) {
            var t4 = { matrix: null, pmatrix: ["(", ")"], bmatrix: ["[", "]"], Bmatrix: ["\\{", "\\}"], vmatrix: ["|", "|"], Vmatrix: ["\\Vert", "\\Vert"] }[e3.envName.replace("*", "")], r3 = "c", a2 = { hskipBeforeAndAfter: false, cols: [{ type: "align", align: r3 }] };
            if ("*" === e3.envName.charAt(e3.envName.length - 1)) {
              var i2 = e3.parser;
              if (i2.consumeSpaces(), "[" === i2.fetch().text) {
                if (i2.consume(), i2.consumeSpaces(), r3 = i2.fetch().text, -1 === "lcr".indexOf(r3))
                  throw new n2("Expected l or c or r", i2.nextToken);
                i2.consume(), i2.consumeSpaces(), i2.expect("]"), i2.consume(), a2.cols = [{ type: "align", align: r3 }];
              }
            }
            var o2 = Cr(e3.parser, a2, Nr(e3.envName)), s2 = Math.max.apply(Math, [0].concat(o2.body.map(function(e4) {
              return e4.length;
            })));
            return o2.cols = new Array(s2).fill({ type: "align", align: r3 }), t4 ? { type: "leftright", mode: e3.mode, body: [o2], left: t4[0], right: t4[1], rightColor: void 0 } : o2;
          }, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["smallmatrix"], props: { numArgs: 0 }, handler: function(e3) {
            var t4 = Cr(e3.parser, { arraystretch: 0.5 }, "script");
            return t4.colSeparationType = "small", t4;
          }, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["subarray"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = (Ot(t4[0]) ? [t4[0]] : qt(t4[0], "ordgroup").body).map(function(e4) {
              var t5 = It(e4).text;
              if (-1 !== "lc".indexOf(t5))
                return { type: "align", align: t5 };
              throw new n2("Unknown column alignment: " + t5, e4);
            });
            if (r3.length > 1)
              throw new n2("{subarray} can contain only one column");
            var a2 = { cols: r3, hskipBeforeAndAfter: false, arraystretch: 0.5 };
            if ((a2 = Cr(e3.parser, a2, "script")).body.length > 0 && a2.body[0].length > 1)
              throw new n2("{subarray} can contain only one column");
            return a2;
          }, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["cases", "dcases", "rcases", "drcases"], props: { numArgs: 0 }, handler: function(e3) {
            var t4 = Cr(e3.parser, { arraystretch: 1.2, cols: [{ type: "align", align: "l", pregap: 0, postgap: 1 }, { type: "align", align: "l", pregap: 0, postgap: 0 }] }, Nr(e3.envName));
            return { type: "leftright", mode: e3.mode, body: [t4], left: e3.envName.indexOf("r") > -1 ? "." : "\\{", right: e3.envName.indexOf("r") > -1 ? "\\}" : ".", rightColor: void 0 };
          }, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["align", "align*", "aligned", "split"], props: { numArgs: 0 }, handler: Rr, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["gathered", "gather", "gather*"], props: { numArgs: 0 }, handler: function(e3) {
            l.contains(["gather", "gather*"], e3.envName) && Tr(e3);
            var t4 = { cols: [{ type: "align", align: "c" }], addJot: true, colSeparationType: "gather", autoTag: Br(e3.envName), emptySingleRow: true, leqno: e3.parser.settings.leqno };
            return Cr(e3.parser, t4, "display");
          }, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["alignat", "alignat*", "alignedat"], props: { numArgs: 1 }, handler: Rr, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["equation", "equation*"], props: { numArgs: 0 }, handler: function(e3) {
            Tr(e3);
            var t4 = { autoTag: Br(e3.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: e3.parser.settings.leqno };
            return Cr(e3.parser, t4, "display");
          }, htmlBuilder: qr, mathmlBuilder: Or }), wr({ type: "array", names: ["CD"], props: { numArgs: 0 }, handler: function(e3) {
            return Tr(e3), function(e4) {
              var t4 = [];
              for (e4.gullet.beginGroup(), e4.gullet.macros.set("\\cr", "\\\\\\relax"), e4.gullet.beginGroup(); ; ) {
                t4.push(e4.parseExpression(false, "\\\\")), e4.gullet.endGroup(), e4.gullet.beginGroup();
                var r3 = e4.fetch().text;
                if ("&" !== r3 && "\\\\" !== r3) {
                  if ("\\end" === r3) {
                    0 === t4[t4.length - 1].length && t4.pop();
                    break;
                  }
                  throw new n2("Expected \\\\ or \\cr or \\end", e4.nextToken);
                }
                e4.consume();
              }
              for (var a2, i2, o2 = [], s2 = [o2], l2 = 0; l2 < t4.length; l2++) {
                for (var h2 = t4[l2], c2 = { type: "styling", body: [], mode: "math", style: "display" }, m2 = 0; m2 < h2.length; m2++)
                  if (Pt(h2[m2])) {
                    o2.push(c2);
                    var u2 = It(h2[m2 += 1]).text, p2 = new Array(2);
                    if (p2[0] = { type: "ordgroup", mode: "math", body: [] }, p2[1] = { type: "ordgroup", mode: "math", body: [] }, "=|.".indexOf(u2) > -1)
                      ;
                    else {
                      if (!("<>AV".indexOf(u2) > -1))
                        throw new n2('Expected one of "<>AV=|." after @', h2[m2]);
                      for (var d2 = 0; d2 < 2; d2++) {
                        for (var f2 = true, g2 = m2 + 1; g2 < h2.length; g2++) {
                          if (a2 = h2[g2], i2 = u2, ("mathord" === a2.type || "atom" === a2.type) && a2.text === i2) {
                            f2 = false, m2 = g2;
                            break;
                          }
                          if (Pt(h2[g2]))
                            throw new n2("Missing a " + u2 + " character to complete a CD arrow.", h2[g2]);
                          p2[d2].body.push(h2[g2]);
                        }
                        if (f2)
                          throw new n2("Missing a " + u2 + " character to complete a CD arrow.", h2[m2]);
                      }
                    }
                    var v2 = { type: "styling", body: [Ft(u2, p2, e4)], mode: "math", style: "display" };
                    o2.push(v2), c2 = { type: "styling", body: [], mode: "math", style: "display" };
                  } else
                    c2.body.push(h2[m2]);
                l2 % 2 == 0 ? o2.push(c2) : o2.shift(), o2 = [], s2.push(o2);
              }
              return e4.gullet.endGroup(), e4.gullet.endGroup(), { type: "array", mode: "math", body: s2, arraystretch: 1, addJot: true, rowGaps: [null], cols: new Array(s2[0].length).fill({ type: "align", align: "c", pregap: 0.25, postgap: 0.25 }), colSeparationType: "CD", hLinesBeforeRow: new Array(s2.length + 1).fill([]) };
            }(e3.parser);
          }, htmlBuilder: qr, mathmlBuilder: Or }), Sr("\\nonumber", "\\gdef\\@eqnsw{0}"), Sr("\\notag", "\\nonumber"), Ze({ type: "text", names: ["\\hline", "\\hdashline"], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler: function(e3, t4) {
            throw new n2(e3.funcName + " valid only within array environment");
          } });
          var Hr = xr;
          Ze({ type: "environment", names: ["\\begin", "\\end"], props: { numArgs: 1, argTypes: ["text"] }, handler: function(e3, t4) {
            var r3 = e3.parser, a2 = e3.funcName, i2 = t4[0];
            if ("ordgroup" !== i2.type)
              throw new n2("Invalid environment name", i2);
            for (var o2 = "", s2 = 0; s2 < i2.body.length; ++s2)
              o2 += qt(i2.body[s2], "textord").text;
            if ("\\begin" === a2) {
              if (!Hr.hasOwnProperty(o2))
                throw new n2("No such environment: " + o2, i2);
              var l2 = Hr[o2], h2 = r3.parseArguments("\\begin{" + o2 + "}", l2), c2 = h2.args, m2 = h2.optArgs, u2 = { mode: r3.mode, envName: o2, parser: r3 }, p2 = l2.handler(u2, c2, m2);
              r3.expect("\\end", false);
              var d2 = r3.nextToken, f2 = qt(r3.parseFunction(), "environment");
              if (f2.name !== o2)
                throw new n2("Mismatch: \\begin{" + o2 + "} matched by \\end{" + f2.name + "}", d2);
              return p2;
            }
            return { type: "environment", mode: r3.mode, name: o2, nameGroup: i2 };
          } });
          var Er = Ve.makeSpan;
          function Lr(e3, t4) {
            var r3 = it(e3.body, t4, true);
            return Er([e3.mclass], r3, t4);
          }
          function Dr(e3, t4) {
            var r3, n3 = xt(e3.body, t4);
            return "minner" === e3.mclass ? r3 = new gt.MathNode("mpadded", n3) : "mord" === e3.mclass ? e3.isCharacterBox ? (r3 = n3[0]).type = "mi" : r3 = new gt.MathNode("mi", n3) : (e3.isCharacterBox ? (r3 = n3[0]).type = "mo" : r3 = new gt.MathNode("mo", n3), "mbin" === e3.mclass ? (r3.attributes.lspace = "0.22em", r3.attributes.rspace = "0.22em") : "mpunct" === e3.mclass ? (r3.attributes.lspace = "0em", r3.attributes.rspace = "0.17em") : "mopen" === e3.mclass || "mclose" === e3.mclass ? (r3.attributes.lspace = "0em", r3.attributes.rspace = "0em") : "minner" === e3.mclass && (r3.attributes.lspace = "0.0556em", r3.attributes.width = "+0.1111em")), r3;
          }
          Ze({ type: "mclass", names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], props: { numArgs: 1, primitive: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = t4[0];
            return { type: "mclass", mode: r3.mode, mclass: "m" + n3.substr(5), body: Qe(a2), isCharacterBox: l.isCharacterBox(a2) };
          }, htmlBuilder: Lr, mathmlBuilder: Dr });
          var Pr = function(e3) {
            var t4 = "ordgroup" === e3.type && e3.body.length ? e3.body[0] : e3;
            return "atom" !== t4.type || "bin" !== t4.family && "rel" !== t4.family ? "mord" : "m" + t4.family;
          };
          Ze({ type: "mclass", names: ["\\@binrel"], props: { numArgs: 2 }, handler: function(e3, t4) {
            return { type: "mclass", mode: e3.parser.mode, mclass: Pr(t4[0]), body: Qe(t4[1]), isCharacterBox: l.isCharacterBox(t4[1]) };
          } }), Ze({ type: "mclass", names: ["\\stackrel", "\\overset", "\\underset"], props: { numArgs: 2 }, handler: function(e3, t4) {
            var r3, n3 = e3.parser, a2 = e3.funcName, i2 = t4[1], o2 = t4[0];
            r3 = "\\stackrel" !== a2 ? Pr(i2) : "mrel";
            var s2 = { type: "op", mode: i2.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: "\\stackrel" !== a2, body: Qe(i2) }, h2 = { type: "supsub", mode: o2.mode, base: s2, sup: "\\underset" === a2 ? null : o2, sub: "\\underset" === a2 ? o2 : null };
            return { type: "mclass", mode: n3.mode, mclass: r3, body: [h2], isCharacterBox: l.isCharacterBox(h2) };
          }, htmlBuilder: Lr, mathmlBuilder: Dr });
          var Fr = function(e3, t4) {
            var r3 = e3.font, n3 = t4.withFont(r3);
            return ct(e3.body, n3);
          }, Vr = function(e3, t4) {
            var r3 = e3.font, n3 = t4.withFont(r3);
            return kt(e3.body, n3);
          }, Gr = { "\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol" };
          Ze({ type: "font", names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], props: { numArgs: 1, allowedInArgument: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = Je(t4[0]), i2 = n3;
            return i2 in Gr && (i2 = Gr[i2]), { type: "font", mode: r3.mode, font: i2.slice(1), body: a2 };
          }, htmlBuilder: Fr, mathmlBuilder: Vr }), Ze({ type: "mclass", names: ["\\boldsymbol", "\\bm"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = t4[0], a2 = l.isCharacterBox(n3);
            return { type: "mclass", mode: r3.mode, mclass: Pr(n3), body: [{ type: "font", mode: r3.mode, font: "boldsymbol", body: n3 }], isCharacterBox: a2 };
          } }), Ze({ type: "font", names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"], props: { numArgs: 0, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = e3.breakOnTokenText, i2 = r3.mode, o2 = r3.parseExpression(true, a2);
            return { type: "font", mode: i2, font: "math" + n3.slice(1), body: { type: "ordgroup", mode: r3.mode, body: o2 } };
          }, htmlBuilder: Fr, mathmlBuilder: Vr });
          var Ur = function(e3, t4) {
            var r3 = t4;
            return "display" === e3 ? r3 = r3.id >= x.SCRIPT.id ? r3.text() : x.DISPLAY : "text" === e3 && r3.size === x.DISPLAY.size ? r3 = x.TEXT : "script" === e3 ? r3 = x.SCRIPT : "scriptscript" === e3 && (r3 = x.SCRIPTSCRIPT), r3;
          }, _r = function(e3, t4) {
            var r3, n3 = Ur(e3.size, t4.style), a2 = n3.fracNum(), i2 = n3.fracDen();
            r3 = t4.havingStyle(a2);
            var o2 = ct(e3.numer, r3, t4);
            if (e3.continued) {
              var s2 = 8.5 / t4.fontMetrics().ptPerEm, l2 = 3.5 / t4.fontMetrics().ptPerEm;
              o2.height = o2.height < s2 ? s2 : o2.height, o2.depth = o2.depth < l2 ? l2 : o2.depth;
            }
            r3 = t4.havingStyle(i2);
            var h2, c2, m2, u2, p2, d2, f2, g2, v2, y2, b2 = ct(e3.denom, r3, t4);
            if (e3.hasBarLine ? (e3.barSize ? (c2 = P(e3.barSize, t4), h2 = Ve.makeLineSpan("frac-line", t4, c2)) : h2 = Ve.makeLineSpan("frac-line", t4), c2 = h2.height, m2 = h2.height) : (h2 = null, c2 = 0, m2 = t4.fontMetrics().defaultRuleThickness), n3.size === x.DISPLAY.size || "display" === e3.size ? (u2 = t4.fontMetrics().num1, p2 = c2 > 0 ? 3 * m2 : 7 * m2, d2 = t4.fontMetrics().denom1) : (c2 > 0 ? (u2 = t4.fontMetrics().num2, p2 = m2) : (u2 = t4.fontMetrics().num3, p2 = 3 * m2), d2 = t4.fontMetrics().denom2), h2) {
              var w2 = t4.fontMetrics().axisHeight;
              u2 - o2.depth - (w2 + 0.5 * c2) < p2 && (u2 += p2 - (u2 - o2.depth - (w2 + 0.5 * c2))), w2 - 0.5 * c2 - (b2.height - d2) < p2 && (d2 += p2 - (w2 - 0.5 * c2 - (b2.height - d2)));
              var k2 = -(w2 - 0.5 * c2);
              f2 = Ve.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: b2, shift: d2 }, { type: "elem", elem: h2, shift: k2 }, { type: "elem", elem: o2, shift: -u2 }] }, t4);
            } else {
              var S2 = u2 - o2.depth - (b2.height - d2);
              S2 < p2 && (u2 += 0.5 * (p2 - S2), d2 += 0.5 * (p2 - S2)), f2 = Ve.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: b2, shift: d2 }, { type: "elem", elem: o2, shift: -u2 }] }, t4);
            }
            return r3 = t4.havingStyle(n3), f2.height *= r3.sizeMultiplier / t4.sizeMultiplier, f2.depth *= r3.sizeMultiplier / t4.sizeMultiplier, g2 = n3.size === x.DISPLAY.size ? t4.fontMetrics().delim1 : n3.size === x.SCRIPTSCRIPT.size ? t4.havingStyle(x.SCRIPT).fontMetrics().delim2 : t4.fontMetrics().delim2, v2 = null == e3.leftDelim ? ht(t4, ["mopen"]) : pr.customSizedDelim(e3.leftDelim, g2, true, t4.havingStyle(n3), e3.mode, ["mopen"]), y2 = e3.continued ? Ve.makeSpan([]) : null == e3.rightDelim ? ht(t4, ["mclose"]) : pr.customSizedDelim(e3.rightDelim, g2, true, t4.havingStyle(n3), e3.mode, ["mclose"]), Ve.makeSpan(["mord"].concat(r3.sizingClasses(t4)), [v2, Ve.makeSpan(["mfrac"], [f2]), y2], t4);
          }, Yr = function(e3, t4) {
            var r3 = new gt.MathNode("mfrac", [kt(e3.numer, t4), kt(e3.denom, t4)]);
            if (e3.hasBarLine) {
              if (e3.barSize) {
                var n3 = P(e3.barSize, t4);
                r3.setAttribute("linethickness", F(n3));
              }
            } else
              r3.setAttribute("linethickness", "0px");
            var a2 = Ur(e3.size, t4.style);
            if (a2.size !== t4.style.size) {
              r3 = new gt.MathNode("mstyle", [r3]);
              var i2 = a2.size === x.DISPLAY.size ? "true" : "false";
              r3.setAttribute("displaystyle", i2), r3.setAttribute("scriptlevel", "0");
            }
            if (null != e3.leftDelim || null != e3.rightDelim) {
              var o2 = [];
              if (null != e3.leftDelim) {
                var s2 = new gt.MathNode("mo", [new gt.TextNode(e3.leftDelim.replace("\\", ""))]);
                s2.setAttribute("fence", "true"), o2.push(s2);
              }
              if (o2.push(r3), null != e3.rightDelim) {
                var l2 = new gt.MathNode("mo", [new gt.TextNode(e3.rightDelim.replace("\\", ""))]);
                l2.setAttribute("fence", "true"), o2.push(l2);
              }
              return yt(o2);
            }
            return r3;
          };
          Ze({ type: "genfrac", names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"], props: { numArgs: 2, allowedInArgument: true }, handler: function(e3, t4) {
            var r3, n3 = e3.parser, a2 = e3.funcName, i2 = t4[0], o2 = t4[1], s2 = null, l2 = null, h2 = "auto";
            switch (a2) {
              case "\\dfrac":
              case "\\frac":
              case "\\tfrac":
                r3 = true;
                break;
              case "\\\\atopfrac":
                r3 = false;
                break;
              case "\\dbinom":
              case "\\binom":
              case "\\tbinom":
                r3 = false, s2 = "(", l2 = ")";
                break;
              case "\\\\bracefrac":
                r3 = false, s2 = "\\{", l2 = "\\}";
                break;
              case "\\\\brackfrac":
                r3 = false, s2 = "[", l2 = "]";
                break;
              default:
                throw new Error("Unrecognized genfrac command");
            }
            switch (a2) {
              case "\\dfrac":
              case "\\dbinom":
                h2 = "display";
                break;
              case "\\tfrac":
              case "\\tbinom":
                h2 = "text";
            }
            return { type: "genfrac", mode: n3.mode, continued: false, numer: i2, denom: o2, hasBarLine: r3, leftDelim: s2, rightDelim: l2, size: h2, barSize: null };
          }, htmlBuilder: _r, mathmlBuilder: Yr }), Ze({ type: "genfrac", names: ["\\cfrac"], props: { numArgs: 2 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = (e3.funcName, t4[0]), a2 = t4[1];
            return { type: "genfrac", mode: r3.mode, continued: true, numer: n3, denom: a2, hasBarLine: true, leftDelim: null, rightDelim: null, size: "display", barSize: null };
          } }), Ze({ type: "infix", names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"], props: { numArgs: 0, infix: true }, handler: function(e3) {
            var t4, r3 = e3.parser, n3 = e3.funcName, a2 = e3.token;
            switch (n3) {
              case "\\over":
                t4 = "\\frac";
                break;
              case "\\choose":
                t4 = "\\binom";
                break;
              case "\\atop":
                t4 = "\\\\atopfrac";
                break;
              case "\\brace":
                t4 = "\\\\bracefrac";
                break;
              case "\\brack":
                t4 = "\\\\brackfrac";
                break;
              default:
                throw new Error("Unrecognized infix genfrac command");
            }
            return { type: "infix", mode: r3.mode, replaceWith: t4, token: a2 };
          } });
          var Xr = ["display", "text", "script", "scriptscript"], Wr = function(e3) {
            var t4 = null;
            return e3.length > 0 && (t4 = "." === (t4 = e3) ? null : t4), t4;
          };
          Ze({ type: "genfrac", names: ["\\genfrac"], props: { numArgs: 6, allowedInArgument: true, argTypes: ["math", "math", "size", "text", "math", "math"] }, handler: function(e3, t4) {
            var r3, n3 = e3.parser, a2 = t4[4], i2 = t4[5], o2 = Je(t4[0]), s2 = "atom" === o2.type && "open" === o2.family ? Wr(o2.text) : null, l2 = Je(t4[1]), h2 = "atom" === l2.type && "close" === l2.family ? Wr(l2.text) : null, c2 = qt(t4[2], "size"), m2 = null;
            r3 = !!c2.isBlank || (m2 = c2.value).number > 0;
            var u2 = "auto", p2 = t4[3];
            if ("ordgroup" === p2.type) {
              if (p2.body.length > 0) {
                var d2 = qt(p2.body[0], "textord");
                u2 = Xr[Number(d2.text)];
              }
            } else
              p2 = qt(p2, "textord"), u2 = Xr[Number(p2.text)];
            return { type: "genfrac", mode: n3.mode, numer: a2, denom: i2, continued: false, hasBarLine: r3, barSize: m2, leftDelim: s2, rightDelim: h2, size: u2 };
          }, htmlBuilder: _r, mathmlBuilder: Yr }), Ze({ type: "infix", names: ["\\above"], props: { numArgs: 1, argTypes: ["size"], infix: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = (e3.funcName, e3.token);
            return { type: "infix", mode: r3.mode, replaceWith: "\\\\abovefrac", size: qt(t4[0], "size").value, token: n3 };
          } }), Ze({ type: "genfrac", names: ["\\\\abovefrac"], props: { numArgs: 3, argTypes: ["math", "size", "math"] }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = (e3.funcName, t4[0]), a2 = function(e4) {
              if (!e4)
                throw new Error("Expected non-null, but got " + String(e4));
              return e4;
            }(qt(t4[1], "infix").size), i2 = t4[2], o2 = a2.number > 0;
            return { type: "genfrac", mode: r3.mode, numer: n3, denom: i2, continued: false, hasBarLine: o2, barSize: a2, leftDelim: null, rightDelim: null, size: "auto" };
          }, htmlBuilder: _r, mathmlBuilder: Yr });
          var jr = function(e3, t4) {
            var r3, n3, a2 = t4.style;
            "supsub" === e3.type ? (r3 = e3.sup ? ct(e3.sup, t4.havingStyle(a2.sup()), t4) : ct(e3.sub, t4.havingStyle(a2.sub()), t4), n3 = qt(e3.base, "horizBrace")) : n3 = qt(e3, "horizBrace");
            var i2, o2 = ct(n3.base, t4.havingBaseStyle(x.DISPLAY)), s2 = Nt(n3, t4);
            if (n3.isOver ? (i2 = Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: o2 }, { type: "kern", size: 0.1 }, { type: "elem", elem: s2 }] }, t4)).children[0].children[0].children[1].classes.push("svg-align") : (i2 = Ve.makeVList({ positionType: "bottom", positionData: o2.depth + 0.1 + s2.height, children: [{ type: "elem", elem: s2 }, { type: "kern", size: 0.1 }, { type: "elem", elem: o2 }] }, t4)).children[0].children[0].children[0].classes.push("svg-align"), r3) {
              var l2 = Ve.makeSpan(["mord", n3.isOver ? "mover" : "munder"], [i2], t4);
              i2 = n3.isOver ? Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: l2 }, { type: "kern", size: 0.2 }, { type: "elem", elem: r3 }] }, t4) : Ve.makeVList({ positionType: "bottom", positionData: l2.depth + 0.2 + r3.height + r3.depth, children: [{ type: "elem", elem: r3 }, { type: "kern", size: 0.2 }, { type: "elem", elem: l2 }] }, t4);
            }
            return Ve.makeSpan(["mord", n3.isOver ? "mover" : "munder"], [i2], t4);
          };
          Ze({ type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName;
            return { type: "horizBrace", mode: r3.mode, label: n3, isOver: /^\\over/.test(n3), base: t4[0] };
          }, htmlBuilder: jr, mathmlBuilder: function(e3, t4) {
            var r3 = Ct(e3.label);
            return new gt.MathNode(e3.isOver ? "mover" : "munder", [kt(e3.base, t4), r3]);
          } }), Ze({ type: "href", names: ["\\href"], props: { numArgs: 2, argTypes: ["url", "original"], allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = t4[1], a2 = qt(t4[0], "url").url;
            return r3.settings.isTrusted({ command: "\\href", url: a2 }) ? { type: "href", mode: r3.mode, href: a2, body: Qe(n3) } : r3.formatUnsupportedCmd("\\href");
          }, htmlBuilder: function(e3, t4) {
            var r3 = it(e3.body, t4, false);
            return Ve.makeAnchor(e3.href, [], r3, t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = wt(e3.body, t4);
            return r3 instanceof dt || (r3 = new dt("mrow", [r3])), r3.setAttribute("href", e3.href), r3;
          } }), Ze({ type: "href", names: ["\\url"], props: { numArgs: 1, argTypes: ["url"], allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = qt(t4[0], "url").url;
            if (!r3.settings.isTrusted({ command: "\\url", url: n3 }))
              return r3.formatUnsupportedCmd("\\url");
            for (var a2 = [], i2 = 0; i2 < n3.length; i2++) {
              var o2 = n3[i2];
              "~" === o2 && (o2 = "\\textasciitilde"), a2.push({ type: "textord", mode: "text", text: o2 });
            }
            var s2 = { type: "text", mode: r3.mode, font: "\\texttt", body: a2 };
            return { type: "href", mode: r3.mode, href: n3, body: Qe(s2) };
          } }), Ze({ type: "hbox", names: ["\\hbox"], props: { numArgs: 1, argTypes: ["text"], allowedInText: true, primitive: true }, handler: function(e3, t4) {
            return { type: "hbox", mode: e3.parser.mode, body: Qe(t4[0]) };
          }, htmlBuilder: function(e3, t4) {
            var r3 = it(e3.body, t4, false);
            return Ve.makeFragment(r3);
          }, mathmlBuilder: function(e3, t4) {
            return new gt.MathNode("mrow", xt(e3.body, t4));
          } }), Ze({ type: "html", names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"], props: { numArgs: 2, argTypes: ["raw", "original"], allowedInText: true }, handler: function(e3, t4) {
            var r3, a2 = e3.parser, i2 = e3.funcName, o2 = (e3.token, qt(t4[0], "raw").string), s2 = t4[1];
            a2.settings.strict && a2.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
            var l2 = {};
            switch (i2) {
              case "\\htmlClass":
                l2.class = o2, r3 = { command: "\\htmlClass", class: o2 };
                break;
              case "\\htmlId":
                l2.id = o2, r3 = { command: "\\htmlId", id: o2 };
                break;
              case "\\htmlStyle":
                l2.style = o2, r3 = { command: "\\htmlStyle", style: o2 };
                break;
              case "\\htmlData":
                for (var h2 = o2.split(","), c2 = 0; c2 < h2.length; c2++) {
                  var m2 = h2[c2].split("=");
                  if (2 !== m2.length)
                    throw new n2("Error parsing key-value for \\htmlData");
                  l2["data-" + m2[0].trim()] = m2[1].trim();
                }
                r3 = { command: "\\htmlData", attributes: l2 };
                break;
              default:
                throw new Error("Unrecognized html command");
            }
            return a2.settings.isTrusted(r3) ? { type: "html", mode: a2.mode, attributes: l2, body: Qe(s2) } : a2.formatUnsupportedCmd(i2);
          }, htmlBuilder: function(e3, t4) {
            var r3 = it(e3.body, t4, false), n3 = ["enclosing"];
            e3.attributes.class && n3.push.apply(n3, e3.attributes.class.trim().split(/\s+/));
            var a2 = Ve.makeSpan(n3, r3, t4);
            for (var i2 in e3.attributes)
              "class" !== i2 && e3.attributes.hasOwnProperty(i2) && a2.setAttribute(i2, e3.attributes[i2]);
            return a2;
          }, mathmlBuilder: function(e3, t4) {
            return wt(e3.body, t4);
          } }), Ze({ type: "htmlmathml", names: ["\\html@mathml"], props: { numArgs: 2, allowedInText: true }, handler: function(e3, t4) {
            return { type: "htmlmathml", mode: e3.parser.mode, html: Qe(t4[0]), mathml: Qe(t4[1]) };
          }, htmlBuilder: function(e3, t4) {
            var r3 = it(e3.html, t4, false);
            return Ve.makeFragment(r3);
          }, mathmlBuilder: function(e3, t4) {
            return wt(e3.mathml, t4);
          } });
          var $r = function(e3) {
            if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e3))
              return { number: +e3, unit: "bp" };
            var t4 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e3);
            if (!t4)
              throw new n2("Invalid size: '" + e3 + "' in \\includegraphics");
            var r3 = { number: +(t4[1] + t4[2]), unit: t4[3] };
            if (!D(r3))
              throw new n2("Invalid unit: '" + r3.unit + "' in \\includegraphics.");
            return r3;
          };
          Ze({ type: "includegraphics", names: ["\\includegraphics"], props: { numArgs: 1, numOptionalArgs: 1, argTypes: ["raw", "url"], allowedInText: false }, handler: function(e3, t4, r3) {
            var a2 = e3.parser, i2 = { number: 0, unit: "em" }, o2 = { number: 0.9, unit: "em" }, s2 = { number: 0, unit: "em" }, l2 = "";
            if (r3[0])
              for (var h2 = qt(r3[0], "raw").string.split(","), c2 = 0; c2 < h2.length; c2++) {
                var m2 = h2[c2].split("=");
                if (2 === m2.length) {
                  var u2 = m2[1].trim();
                  switch (m2[0].trim()) {
                    case "alt":
                      l2 = u2;
                      break;
                    case "width":
                      i2 = $r(u2);
                      break;
                    case "height":
                      o2 = $r(u2);
                      break;
                    case "totalheight":
                      s2 = $r(u2);
                      break;
                    default:
                      throw new n2("Invalid key: '" + m2[0] + "' in \\includegraphics.");
                  }
                }
              }
            var p2 = qt(t4[0], "url").url;
            return "" === l2 && (l2 = (l2 = (l2 = p2).replace(/^.*[\\/]/, "")).substring(0, l2.lastIndexOf("."))), a2.settings.isTrusted({ command: "\\includegraphics", url: p2 }) ? { type: "includegraphics", mode: a2.mode, alt: l2, width: i2, height: o2, totalheight: s2, src: p2 } : a2.formatUnsupportedCmd("\\includegraphics");
          }, htmlBuilder: function(e3, t4) {
            var r3 = P(e3.height, t4), n3 = 0;
            e3.totalheight.number > 0 && (n3 = P(e3.totalheight, t4) - r3);
            var a2 = 0;
            e3.width.number > 0 && (a2 = P(e3.width, t4));
            var i2 = { height: F(r3 + n3) };
            a2 > 0 && (i2.width = F(a2)), n3 > 0 && (i2.verticalAlign = F(-n3));
            var o2 = new W(e3.src, e3.alt, i2);
            return o2.height = r3, o2.depth = n3, o2;
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mglyph", []);
            r3.setAttribute("alt", e3.alt);
            var n3 = P(e3.height, t4), a2 = 0;
            if (e3.totalheight.number > 0 && (a2 = P(e3.totalheight, t4) - n3, r3.setAttribute("valign", F(-a2))), r3.setAttribute("height", F(n3 + a2)), e3.width.number > 0) {
              var i2 = P(e3.width, t4);
              r3.setAttribute("width", F(i2));
            }
            return r3.setAttribute("src", e3.src), r3;
          } }), Ze({ type: "kern", names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"], props: { numArgs: 1, argTypes: ["size"], primitive: true, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = qt(t4[0], "size");
            if (r3.settings.strict) {
              var i2 = "m" === n3[1], o2 = "mu" === a2.value.unit;
              i2 ? (o2 || r3.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n3 + " supports only mu units, not " + a2.value.unit + " units"), "math" !== r3.mode && r3.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n3 + " works only in math mode")) : o2 && r3.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n3 + " doesn't support mu units");
            }
            return { type: "kern", mode: r3.mode, dimension: a2.value };
          }, htmlBuilder: function(e3, t4) {
            return Ve.makeGlue(e3.dimension, t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = P(e3.dimension, t4);
            return new gt.SpaceNode(r3);
          } }), Ze({ type: "lap", names: ["\\mathllap", "\\mathrlap", "\\mathclap"], props: { numArgs: 1, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = t4[0];
            return { type: "lap", mode: r3.mode, alignment: n3.slice(5), body: a2 };
          }, htmlBuilder: function(e3, t4) {
            var r3;
            "clap" === e3.alignment ? (r3 = Ve.makeSpan([], [ct(e3.body, t4)]), r3 = Ve.makeSpan(["inner"], [r3], t4)) : r3 = Ve.makeSpan(["inner"], [ct(e3.body, t4)]);
            var n3 = Ve.makeSpan(["fix"], []), a2 = Ve.makeSpan([e3.alignment], [r3, n3], t4), i2 = Ve.makeSpan(["strut"]);
            return i2.style.height = F(a2.height + a2.depth), a2.depth && (i2.style.verticalAlign = F(-a2.depth)), a2.children.unshift(i2), a2 = Ve.makeSpan(["thinbox"], [a2], t4), Ve.makeSpan(["mord", "vbox"], [a2], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mpadded", [kt(e3.body, t4)]);
            if ("rlap" !== e3.alignment) {
              var n3 = "llap" === e3.alignment ? "-1" : "-0.5";
              r3.setAttribute("lspace", n3 + "width");
            }
            return r3.setAttribute("width", "0px"), r3;
          } }), Ze({ type: "styling", names: ["\\(", "$"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function(e3, t4) {
            var r3 = e3.funcName, n3 = e3.parser, a2 = n3.mode;
            n3.switchMode("math");
            var i2 = "\\(" === r3 ? "\\)" : "$", o2 = n3.parseExpression(false, i2);
            return n3.expect(i2), n3.switchMode(a2), { type: "styling", mode: n3.mode, style: "text", body: o2 };
          } }), Ze({ type: "text", names: ["\\)", "\\]"], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler: function(e3, t4) {
            throw new n2("Mismatched " + e3.funcName);
          } });
          var Zr = function(e3, t4) {
            switch (t4.style.size) {
              case x.DISPLAY.size:
                return e3.display;
              case x.TEXT.size:
                return e3.text;
              case x.SCRIPT.size:
                return e3.script;
              case x.SCRIPTSCRIPT.size:
                return e3.scriptscript;
              default:
                return e3.text;
            }
          };
          Ze({ type: "mathchoice", names: ["\\mathchoice"], props: { numArgs: 4, primitive: true }, handler: function(e3, t4) {
            return { type: "mathchoice", mode: e3.parser.mode, display: Qe(t4[0]), text: Qe(t4[1]), script: Qe(t4[2]), scriptscript: Qe(t4[3]) };
          }, htmlBuilder: function(e3, t4) {
            var r3 = Zr(e3, t4), n3 = it(r3, t4, false);
            return Ve.makeFragment(n3);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = Zr(e3, t4);
            return wt(r3, t4);
          } });
          var Kr = function(e3, t4, r3, n3, a2, i2, o2) {
            e3 = Ve.makeSpan([], [e3]);
            var s2, h2, c2, m2 = r3 && l.isCharacterBox(r3);
            if (t4) {
              var u2 = ct(t4, n3.havingStyle(a2.sup()), n3);
              h2 = { elem: u2, kern: Math.max(n3.fontMetrics().bigOpSpacing1, n3.fontMetrics().bigOpSpacing3 - u2.depth) };
            }
            if (r3) {
              var p2 = ct(r3, n3.havingStyle(a2.sub()), n3);
              s2 = { elem: p2, kern: Math.max(n3.fontMetrics().bigOpSpacing2, n3.fontMetrics().bigOpSpacing4 - p2.height) };
            }
            if (h2 && s2) {
              var d2 = n3.fontMetrics().bigOpSpacing5 + s2.elem.height + s2.elem.depth + s2.kern + e3.depth + o2;
              c2 = Ve.makeVList({ positionType: "bottom", positionData: d2, children: [{ type: "kern", size: n3.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: s2.elem, marginLeft: F(-i2) }, { type: "kern", size: s2.kern }, { type: "elem", elem: e3 }, { type: "kern", size: h2.kern }, { type: "elem", elem: h2.elem, marginLeft: F(i2) }, { type: "kern", size: n3.fontMetrics().bigOpSpacing5 }] }, n3);
            } else if (s2) {
              var f2 = e3.height - o2;
              c2 = Ve.makeVList({ positionType: "top", positionData: f2, children: [{ type: "kern", size: n3.fontMetrics().bigOpSpacing5 }, { type: "elem", elem: s2.elem, marginLeft: F(-i2) }, { type: "kern", size: s2.kern }, { type: "elem", elem: e3 }] }, n3);
            } else {
              if (!h2)
                return e3;
              var g2 = e3.depth + o2;
              c2 = Ve.makeVList({ positionType: "bottom", positionData: g2, children: [{ type: "elem", elem: e3 }, { type: "kern", size: h2.kern }, { type: "elem", elem: h2.elem, marginLeft: F(i2) }, { type: "kern", size: n3.fontMetrics().bigOpSpacing5 }] }, n3);
            }
            var v2 = [c2];
            if (s2 && 0 !== i2 && !m2) {
              var y2 = Ve.makeSpan(["mspace"], [], n3);
              y2.style.marginRight = F(i2), v2.unshift(y2);
            }
            return Ve.makeSpan(["mop", "op-limits"], v2, n3);
          }, Jr = ["\\smallint"], Qr = function(e3, t4) {
            var r3, n3, a2, i2 = false;
            "supsub" === e3.type ? (r3 = e3.sup, n3 = e3.sub, a2 = qt(e3.base, "op"), i2 = true) : a2 = qt(e3, "op");
            var o2, s2 = t4.style, h2 = false;
            if (s2.size === x.DISPLAY.size && a2.symbol && !l.contains(Jr, a2.name) && (h2 = true), a2.symbol) {
              var c2 = h2 ? "Size2-Regular" : "Size1-Regular", m2 = "";
              if ("\\oiint" !== a2.name && "\\oiiint" !== a2.name || (m2 = a2.name.substr(1), a2.name = "oiint" === m2 ? "\\iint" : "\\iiint"), o2 = Ve.makeSymbol(a2.name, c2, "math", t4, ["mop", "op-symbol", h2 ? "large-op" : "small-op"]), m2.length > 0) {
                var u2 = o2.italic, p2 = Ve.staticSvg(m2 + "Size" + (h2 ? "2" : "1"), t4);
                o2 = Ve.makeVList({ positionType: "individualShift", children: [{ type: "elem", elem: o2, shift: 0 }, { type: "elem", elem: p2, shift: h2 ? 0.08 : 0 }] }, t4), a2.name = "\\" + m2, o2.classes.unshift("mop"), o2.italic = u2;
              }
            } else if (a2.body) {
              var d2 = it(a2.body, t4, true);
              1 === d2.length && d2[0] instanceof $ ? (o2 = d2[0]).classes[0] = "mop" : o2 = Ve.makeSpan(["mop"], d2, t4);
            } else {
              for (var f2 = [], g2 = 1; g2 < a2.name.length; g2++)
                f2.push(Ve.mathsym(a2.name[g2], a2.mode, t4));
              o2 = Ve.makeSpan(["mop"], f2, t4);
            }
            var v2 = 0, y2 = 0;
            return (o2 instanceof $ || "\\oiint" === a2.name || "\\oiiint" === a2.name) && !a2.suppressBaseShift && (v2 = (o2.height - o2.depth) / 2 - t4.fontMetrics().axisHeight, y2 = o2.italic), i2 ? Kr(o2, r3, n3, t4, s2, y2, v2) : (v2 && (o2.style.position = "relative", o2.style.top = F(v2)), o2);
          }, en2 = function(e3, t4) {
            var r3;
            if (e3.symbol)
              r3 = new dt("mo", [vt(e3.name, e3.mode)]), l.contains(Jr, e3.name) && r3.setAttribute("largeop", "false");
            else if (e3.body)
              r3 = new dt("mo", xt(e3.body, t4));
            else {
              r3 = new dt("mi", [new ft(e3.name.slice(1))]);
              var n3 = new dt("mo", [vt("⁡", "text")]);
              r3 = e3.parentIsSupSub ? new dt("mrow", [r3, n3]) : pt([r3, n3]);
            }
            return r3;
          }, tn = { "∏": "\\prod", "∐": "\\coprod", "∑": "\\sum", "⋀": "\\bigwedge", "⋁": "\\bigvee", "⋂": "\\bigcap", "⋃": "\\bigcup", "⨀": "\\bigodot", "⨁": "\\bigoplus", "⨂": "\\bigotimes", "⨄": "\\biguplus", "⨆": "\\bigsqcup" };
          Ze({ type: "op", names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"], props: { numArgs: 0 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName;
            return 1 === n3.length && (n3 = tn[n3]), { type: "op", mode: r3.mode, limits: true, parentIsSupSub: false, symbol: true, name: n3 };
          }, htmlBuilder: Qr, mathmlBuilder: en2 }), Ze({ type: "op", names: ["\\mathop"], props: { numArgs: 1, primitive: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = t4[0];
            return { type: "op", mode: r3.mode, limits: false, parentIsSupSub: false, symbol: false, body: Qe(n3) };
          }, htmlBuilder: Qr, mathmlBuilder: en2 });
          var rn = { "∫": "\\int", "∬": "\\iint", "∭": "\\iiint", "∮": "\\oint", "∯": "\\oiint", "∰": "\\oiiint" };
          Ze({ type: "op", names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], props: { numArgs: 0 }, handler: function(e3) {
            var t4 = e3.parser, r3 = e3.funcName;
            return { type: "op", mode: t4.mode, limits: false, parentIsSupSub: false, symbol: false, name: r3 };
          }, htmlBuilder: Qr, mathmlBuilder: en2 }), Ze({ type: "op", names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], props: { numArgs: 0 }, handler: function(e3) {
            var t4 = e3.parser, r3 = e3.funcName;
            return { type: "op", mode: t4.mode, limits: true, parentIsSupSub: false, symbol: false, name: r3 };
          }, htmlBuilder: Qr, mathmlBuilder: en2 }), Ze({ type: "op", names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"], props: { numArgs: 0 }, handler: function(e3) {
            var t4 = e3.parser, r3 = e3.funcName;
            return 1 === r3.length && (r3 = rn[r3]), { type: "op", mode: t4.mode, limits: false, parentIsSupSub: false, symbol: true, name: r3 };
          }, htmlBuilder: Qr, mathmlBuilder: en2 });
          var nn = function(e3, t4) {
            var r3, n3, a2, i2, o2 = false;
            if ("supsub" === e3.type ? (r3 = e3.sup, n3 = e3.sub, a2 = qt(e3.base, "operatorname"), o2 = true) : a2 = qt(e3, "operatorname"), a2.body.length > 0) {
              for (var s2 = a2.body.map(function(e4) {
                var t5 = e4.text;
                return "string" == typeof t5 ? { type: "textord", mode: e4.mode, text: t5 } : e4;
              }), l2 = it(s2, t4.withFont("mathrm"), true), h2 = 0; h2 < l2.length; h2++) {
                var c2 = l2[h2];
                c2 instanceof $ && (c2.text = c2.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
              }
              i2 = Ve.makeSpan(["mop"], l2, t4);
            } else
              i2 = Ve.makeSpan(["mop"], [], t4);
            return o2 ? Kr(i2, r3, n3, t4, t4.style, 0, 0) : i2;
          };
          function an(e3, t4, r3) {
            for (var n3 = it(e3, t4, false), a2 = t4.sizeMultiplier / r3.sizeMultiplier, i2 = 0; i2 < n3.length; i2++) {
              var o2 = n3[i2].classes.indexOf("sizing");
              o2 < 0 ? Array.prototype.push.apply(n3[i2].classes, t4.sizingClasses(r3)) : n3[i2].classes[o2 + 1] === "reset-size" + t4.size && (n3[i2].classes[o2 + 1] = "reset-size" + r3.size), n3[i2].height *= a2, n3[i2].depth *= a2;
            }
            return Ve.makeFragment(n3);
          }
          Ze({ type: "operatorname", names: ["\\operatorname@", "\\operatornamewithlimits"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = t4[0];
            return { type: "operatorname", mode: r3.mode, body: Qe(a2), alwaysHandleSupSub: "\\operatornamewithlimits" === n3, limits: false, parentIsSupSub: false };
          }, htmlBuilder: nn, mathmlBuilder: function(e3, t4) {
            for (var r3 = xt(e3.body, t4.withFont("mathrm")), n3 = true, a2 = 0; a2 < r3.length; a2++) {
              var i2 = r3[a2];
              if (i2 instanceof gt.SpaceNode)
                ;
              else if (i2 instanceof gt.MathNode)
                switch (i2.type) {
                  case "mi":
                  case "mn":
                  case "ms":
                  case "mspace":
                  case "mtext":
                    break;
                  case "mo":
                    var o2 = i2.children[0];
                    1 === i2.children.length && o2 instanceof gt.TextNode ? o2.text = o2.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n3 = false;
                    break;
                  default:
                    n3 = false;
                }
              else
                n3 = false;
            }
            if (n3) {
              var s2 = r3.map(function(e4) {
                return e4.toText();
              }).join("");
              r3 = [new gt.TextNode(s2)];
            }
            var l2 = new gt.MathNode("mi", r3);
            l2.setAttribute("mathvariant", "normal");
            var h2 = new gt.MathNode("mo", [vt("⁡", "text")]);
            return e3.parentIsSupSub ? new gt.MathNode("mrow", [l2, h2]) : gt.newDocumentFragment([l2, h2]);
          } }), Sr("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), Ke({ type: "ordgroup", htmlBuilder: function(e3, t4) {
            return e3.semisimple ? Ve.makeFragment(it(e3.body, t4, false)) : Ve.makeSpan(["mord"], it(e3.body, t4, true), t4);
          }, mathmlBuilder: function(e3, t4) {
            return wt(e3.body, t4, true);
          } }), Ze({ type: "overline", names: ["\\overline"], props: { numArgs: 1 }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = t4[0];
            return { type: "overline", mode: r3.mode, body: n3 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = ct(e3.body, t4.havingCrampedStyle()), n3 = Ve.makeLineSpan("overline-line", t4), a2 = t4.fontMetrics().defaultRuleThickness, i2 = Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r3 }, { type: "kern", size: 3 * a2 }, { type: "elem", elem: n3 }, { type: "kern", size: a2 }] }, t4);
            return Ve.makeSpan(["mord", "overline"], [i2], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mo", [new gt.TextNode("‾")]);
            r3.setAttribute("stretchy", "true");
            var n3 = new gt.MathNode("mover", [kt(e3.body, t4), r3]);
            return n3.setAttribute("accent", "true"), n3;
          } }), Ze({ type: "phantom", names: ["\\phantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = t4[0];
            return { type: "phantom", mode: r3.mode, body: Qe(n3) };
          }, htmlBuilder: function(e3, t4) {
            var r3 = it(e3.body, t4.withPhantom(), false);
            return Ve.makeFragment(r3);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = xt(e3.body, t4);
            return new gt.MathNode("mphantom", r3);
          } }), Ze({ type: "hphantom", names: ["\\hphantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = t4[0];
            return { type: "hphantom", mode: r3.mode, body: n3 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = Ve.makeSpan([], [ct(e3.body, t4.withPhantom())]);
            if (r3.height = 0, r3.depth = 0, r3.children)
              for (var n3 = 0; n3 < r3.children.length; n3++)
                r3.children[n3].height = 0, r3.children[n3].depth = 0;
            return r3 = Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r3 }] }, t4), Ve.makeSpan(["mord"], [r3], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = xt(Qe(e3.body), t4), n3 = new gt.MathNode("mphantom", r3), a2 = new gt.MathNode("mpadded", [n3]);
            return a2.setAttribute("height", "0px"), a2.setAttribute("depth", "0px"), a2;
          } }), Ze({ type: "vphantom", names: ["\\vphantom"], props: { numArgs: 1, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = t4[0];
            return { type: "vphantom", mode: r3.mode, body: n3 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = Ve.makeSpan(["inner"], [ct(e3.body, t4.withPhantom())]), n3 = Ve.makeSpan(["fix"], []);
            return Ve.makeSpan(["mord", "rlap"], [r3, n3], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = xt(Qe(e3.body), t4), n3 = new gt.MathNode("mphantom", r3), a2 = new gt.MathNode("mpadded", [n3]);
            return a2.setAttribute("width", "0px"), a2;
          } }), Ze({ type: "raisebox", names: ["\\raisebox"], props: { numArgs: 2, argTypes: ["size", "hbox"], allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = qt(t4[0], "size").value, a2 = t4[1];
            return { type: "raisebox", mode: r3.mode, dy: n3, body: a2 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = ct(e3.body, t4), n3 = P(e3.dy, t4);
            return Ve.makeVList({ positionType: "shift", positionData: -n3, children: [{ type: "elem", elem: r3 }] }, t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mpadded", [kt(e3.body, t4)]), n3 = e3.dy.number + e3.dy.unit;
            return r3.setAttribute("voffset", n3), r3;
          } }), Ze({ type: "internal", names: ["\\relax"], props: { numArgs: 0, allowedInText: true }, handler: function(e3) {
            return { type: "internal", mode: e3.parser.mode };
          } }), Ze({ type: "rule", names: ["\\rule"], props: { numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"] }, handler: function(e3, t4, r3) {
            var n3 = e3.parser, a2 = r3[0], i2 = qt(t4[0], "size"), o2 = qt(t4[1], "size");
            return { type: "rule", mode: n3.mode, shift: a2 && qt(a2, "size").value, width: i2.value, height: o2.value };
          }, htmlBuilder: function(e3, t4) {
            var r3 = Ve.makeSpan(["mord", "rule"], [], t4), n3 = P(e3.width, t4), a2 = P(e3.height, t4), i2 = e3.shift ? P(e3.shift, t4) : 0;
            return r3.style.borderRightWidth = F(n3), r3.style.borderTopWidth = F(a2), r3.style.bottom = F(i2), r3.width = n3, r3.height = a2 + i2, r3.depth = -i2, r3.maxFontSize = 1.125 * a2 * t4.sizeMultiplier, r3;
          }, mathmlBuilder: function(e3, t4) {
            var r3 = P(e3.width, t4), n3 = P(e3.height, t4), a2 = e3.shift ? P(e3.shift, t4) : 0, i2 = t4.color && t4.getColor() || "black", o2 = new gt.MathNode("mspace");
            o2.setAttribute("mathbackground", i2), o2.setAttribute("width", F(r3)), o2.setAttribute("height", F(n3));
            var s2 = new gt.MathNode("mpadded", [o2]);
            return a2 >= 0 ? s2.setAttribute("height", F(a2)) : (s2.setAttribute("height", F(a2)), s2.setAttribute("depth", F(-a2))), s2.setAttribute("voffset", F(a2)), s2;
          } });
          var on = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
          Ze({ type: "sizing", names: on, props: { numArgs: 0, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.breakOnTokenText, n3 = e3.funcName, a2 = e3.parser, i2 = a2.parseExpression(false, r3);
            return { type: "sizing", mode: a2.mode, size: on.indexOf(n3) + 1, body: i2 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = t4.havingSize(e3.size);
            return an(e3.body, r3, t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = t4.havingSize(e3.size), n3 = xt(e3.body, r3), a2 = new gt.MathNode("mstyle", n3);
            return a2.setAttribute("mathsize", F(r3.sizeMultiplier)), a2;
          } }), Ze({ type: "smash", names: ["\\smash"], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: function(e3, t4, r3) {
            var n3 = e3.parser, a2 = false, i2 = false, o2 = r3[0] && qt(r3[0], "ordgroup");
            if (o2)
              for (var s2 = "", l2 = 0; l2 < o2.body.length; ++l2)
                if ("t" === (s2 = o2.body[l2].text))
                  a2 = true;
                else {
                  if ("b" !== s2) {
                    a2 = false, i2 = false;
                    break;
                  }
                  i2 = true;
                }
            else
              a2 = true, i2 = true;
            var h2 = t4[0];
            return { type: "smash", mode: n3.mode, body: h2, smashHeight: a2, smashDepth: i2 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = Ve.makeSpan([], [ct(e3.body, t4)]);
            if (!e3.smashHeight && !e3.smashDepth)
              return r3;
            if (e3.smashHeight && (r3.height = 0, r3.children))
              for (var n3 = 0; n3 < r3.children.length; n3++)
                r3.children[n3].height = 0;
            if (e3.smashDepth && (r3.depth = 0, r3.children))
              for (var a2 = 0; a2 < r3.children.length; a2++)
                r3.children[a2].depth = 0;
            var i2 = Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r3 }] }, t4);
            return Ve.makeSpan(["mord"], [i2], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mpadded", [kt(e3.body, t4)]);
            return e3.smashHeight && r3.setAttribute("height", "0px"), e3.smashDepth && r3.setAttribute("depth", "0px"), r3;
          } }), Ze({ type: "sqrt", names: ["\\sqrt"], props: { numArgs: 1, numOptionalArgs: 1 }, handler: function(e3, t4, r3) {
            var n3 = e3.parser, a2 = r3[0], i2 = t4[0];
            return { type: "sqrt", mode: n3.mode, body: i2, index: a2 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = ct(e3.body, t4.havingCrampedStyle());
            0 === r3.height && (r3.height = t4.fontMetrics().xHeight), r3 = Ve.wrapFragment(r3, t4);
            var n3 = t4.fontMetrics().defaultRuleThickness, a2 = n3;
            t4.style.id < x.TEXT.id && (a2 = t4.fontMetrics().xHeight);
            var i2 = n3 + a2 / 4, o2 = r3.height + r3.depth + i2 + n3, s2 = pr.sqrtImage(o2, t4), l2 = s2.span, h2 = s2.ruleWidth, c2 = s2.advanceWidth, m2 = l2.height - h2;
            m2 > r3.height + r3.depth + i2 && (i2 = (i2 + m2 - r3.height - r3.depth) / 2);
            var u2 = l2.height - r3.height - i2 - h2;
            r3.style.paddingLeft = F(c2);
            var p2 = Ve.makeVList({ positionType: "firstBaseline", children: [{ type: "elem", elem: r3, wrapperClasses: ["svg-align"] }, { type: "kern", size: -(r3.height + u2) }, { type: "elem", elem: l2 }, { type: "kern", size: h2 }] }, t4);
            if (e3.index) {
              var d2 = t4.havingStyle(x.SCRIPTSCRIPT), f2 = ct(e3.index, d2, t4), g2 = 0.6 * (p2.height - p2.depth), v2 = Ve.makeVList({ positionType: "shift", positionData: -g2, children: [{ type: "elem", elem: f2 }] }, t4), y2 = Ve.makeSpan(["root"], [v2]);
              return Ve.makeSpan(["mord", "sqrt"], [y2, p2], t4);
            }
            return Ve.makeSpan(["mord", "sqrt"], [p2], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = e3.body, n3 = e3.index;
            return n3 ? new gt.MathNode("mroot", [kt(r3, t4), kt(n3, t4)]) : new gt.MathNode("msqrt", [kt(r3, t4)]);
          } });
          var sn = { display: x.DISPLAY, text: x.TEXT, script: x.SCRIPT, scriptscript: x.SCRIPTSCRIPT };
          Ze({ type: "styling", names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], props: { numArgs: 0, allowedInText: true, primitive: true }, handler: function(e3, t4) {
            var r3 = e3.breakOnTokenText, n3 = e3.funcName, a2 = e3.parser, i2 = a2.parseExpression(true, r3), o2 = n3.slice(1, n3.length - 5);
            return { type: "styling", mode: a2.mode, style: o2, body: i2 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = sn[e3.style], n3 = t4.havingStyle(r3).withFont("");
            return an(e3.body, n3, t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = sn[e3.style], n3 = t4.havingStyle(r3), a2 = xt(e3.body, n3), i2 = new gt.MathNode("mstyle", a2), o2 = { display: ["0", "true"], text: ["0", "false"], script: ["1", "false"], scriptscript: ["2", "false"] }[e3.style];
            return i2.setAttribute("scriptlevel", o2[0]), i2.setAttribute("displaystyle", o2[1]), i2;
          } });
          var ln = function(e3, t4) {
            var r3 = e3.base;
            return r3 ? "op" === r3.type ? r3.limits && (t4.style.size === x.DISPLAY.size || r3.alwaysHandleSupSub) ? Qr : null : "operatorname" === r3.type ? r3.alwaysHandleSupSub && (t4.style.size === x.DISPLAY.size || r3.limits) ? nn : null : "accent" === r3.type ? l.isCharacterBox(r3.base) ? Rt : null : "horizBrace" === r3.type && !e3.sub === r3.isOver ? jr : null : null;
          };
          Ke({ type: "supsub", htmlBuilder: function(e3, t4) {
            var r3 = ln(e3, t4);
            if (r3)
              return r3(e3, t4);
            var n3, a2, i2, o2 = e3.base, s2 = e3.sup, h2 = e3.sub, c2 = ct(o2, t4), m2 = t4.fontMetrics(), u2 = 0, p2 = 0, d2 = o2 && l.isCharacterBox(o2);
            if (s2) {
              var f2 = t4.havingStyle(t4.style.sup());
              n3 = ct(s2, f2, t4), d2 || (u2 = c2.height - f2.fontMetrics().supDrop * f2.sizeMultiplier / t4.sizeMultiplier);
            }
            if (h2) {
              var g2 = t4.havingStyle(t4.style.sub());
              a2 = ct(h2, g2, t4), d2 || (p2 = c2.depth + g2.fontMetrics().subDrop * g2.sizeMultiplier / t4.sizeMultiplier);
            }
            i2 = t4.style === x.DISPLAY ? m2.sup1 : t4.style.cramped ? m2.sup3 : m2.sup2;
            var v2, y2 = t4.sizeMultiplier, b2 = F(0.5 / m2.ptPerEm / y2), w2 = null;
            if (a2) {
              var k2 = e3.base && "op" === e3.base.type && e3.base.name && ("\\oiint" === e3.base.name || "\\oiiint" === e3.base.name);
              (c2 instanceof $ || k2) && (w2 = F(-c2.italic));
            }
            if (n3 && a2) {
              u2 = Math.max(u2, i2, n3.depth + 0.25 * m2.xHeight), p2 = Math.max(p2, m2.sub2);
              var S2 = 4 * m2.defaultRuleThickness;
              if (u2 - n3.depth - (a2.height - p2) < S2) {
                p2 = S2 - (u2 - n3.depth) + a2.height;
                var M2 = 0.8 * m2.xHeight - (u2 - n3.depth);
                M2 > 0 && (u2 += M2, p2 -= M2);
              }
              var z2 = [{ type: "elem", elem: a2, shift: p2, marginRight: b2, marginLeft: w2 }, { type: "elem", elem: n3, shift: -u2, marginRight: b2 }];
              v2 = Ve.makeVList({ positionType: "individualShift", children: z2 }, t4);
            } else if (a2) {
              p2 = Math.max(p2, m2.sub1, a2.height - 0.8 * m2.xHeight);
              var A2 = [{ type: "elem", elem: a2, marginLeft: w2, marginRight: b2 }];
              v2 = Ve.makeVList({ positionType: "shift", positionData: p2, children: A2 }, t4);
            } else {
              if (!n3)
                throw new Error("supsub must have either sup or sub.");
              u2 = Math.max(u2, i2, n3.depth + 0.25 * m2.xHeight), v2 = Ve.makeVList({ positionType: "shift", positionData: -u2, children: [{ type: "elem", elem: n3, marginRight: b2 }] }, t4);
            }
            var T2 = lt(c2, "right") || "mord";
            return Ve.makeSpan([T2], [c2, Ve.makeSpan(["msupsub"], [v2])], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3, n3 = false;
            e3.base && "horizBrace" === e3.base.type && !!e3.sup === e3.base.isOver && (n3 = true, r3 = e3.base.isOver), !e3.base || "op" !== e3.base.type && "operatorname" !== e3.base.type || (e3.base.parentIsSupSub = true);
            var a2, i2 = [kt(e3.base, t4)];
            if (e3.sub && i2.push(kt(e3.sub, t4)), e3.sup && i2.push(kt(e3.sup, t4)), n3)
              a2 = r3 ? "mover" : "munder";
            else if (e3.sub)
              if (e3.sup) {
                var o2 = e3.base;
                a2 = o2 && "op" === o2.type && o2.limits && t4.style === x.DISPLAY || o2 && "operatorname" === o2.type && o2.alwaysHandleSupSub && (t4.style === x.DISPLAY || o2.limits) ? "munderover" : "msubsup";
              } else {
                var s2 = e3.base;
                a2 = s2 && "op" === s2.type && s2.limits && (t4.style === x.DISPLAY || s2.alwaysHandleSupSub) || s2 && "operatorname" === s2.type && s2.alwaysHandleSupSub && (s2.limits || t4.style === x.DISPLAY) ? "munder" : "msub";
              }
            else {
              var l2 = e3.base;
              a2 = l2 && "op" === l2.type && l2.limits && (t4.style === x.DISPLAY || l2.alwaysHandleSupSub) || l2 && "operatorname" === l2.type && l2.alwaysHandleSupSub && (l2.limits || t4.style === x.DISPLAY) ? "mover" : "msup";
            }
            return new gt.MathNode(a2, i2);
          } }), Ke({ type: "atom", htmlBuilder: function(e3, t4) {
            return Ve.mathsym(e3.text, e3.mode, t4, ["m" + e3.family]);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mo", [vt(e3.text, e3.mode)]);
            if ("bin" === e3.family) {
              var n3 = bt(e3, t4);
              "bold-italic" === n3 && r3.setAttribute("mathvariant", n3);
            } else
              "punct" === e3.family ? r3.setAttribute("separator", "true") : "open" !== e3.family && "close" !== e3.family || r3.setAttribute("stretchy", "false");
            return r3;
          } });
          var hn = { mi: "italic", mn: "normal", mtext: "normal" };
          Ke({ type: "mathord", htmlBuilder: function(e3, t4) {
            return Ve.makeOrd(e3, t4, "mathord");
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mi", [vt(e3.text, e3.mode, t4)]), n3 = bt(e3, t4) || "italic";
            return n3 !== hn[r3.type] && r3.setAttribute("mathvariant", n3), r3;
          } }), Ke({ type: "textord", htmlBuilder: function(e3, t4) {
            return Ve.makeOrd(e3, t4, "textord");
          }, mathmlBuilder: function(e3, t4) {
            var r3, n3 = vt(e3.text, e3.mode, t4), a2 = bt(e3, t4) || "normal";
            return r3 = "text" === e3.mode ? new gt.MathNode("mtext", [n3]) : /[0-9]/.test(e3.text) ? new gt.MathNode("mn", [n3]) : "\\prime" === e3.text ? new gt.MathNode("mo", [n3]) : new gt.MathNode("mi", [n3]), a2 !== hn[r3.type] && r3.setAttribute("mathvariant", a2), r3;
          } });
          var cn = { "\\nobreak": "nobreak", "\\allowbreak": "allowbreak" }, mn = { " ": {}, "\\ ": {}, "~": { className: "nobreak" }, "\\space": {}, "\\nobreakspace": { className: "nobreak" } };
          Ke({ type: "spacing", htmlBuilder: function(e3, t4) {
            if (mn.hasOwnProperty(e3.text)) {
              var r3 = mn[e3.text].className || "";
              if ("text" === e3.mode) {
                var a2 = Ve.makeOrd(e3, t4, "textord");
                return a2.classes.push(r3), a2;
              }
              return Ve.makeSpan(["mspace", r3], [Ve.mathsym(e3.text, e3.mode, t4)], t4);
            }
            if (cn.hasOwnProperty(e3.text))
              return Ve.makeSpan(["mspace", cn[e3.text]], [], t4);
            throw new n2('Unknown type of space "' + e3.text + '"');
          }, mathmlBuilder: function(e3, t4) {
            if (!mn.hasOwnProperty(e3.text)) {
              if (cn.hasOwnProperty(e3.text))
                return new gt.MathNode("mspace");
              throw new n2('Unknown type of space "' + e3.text + '"');
            }
            return new gt.MathNode("mtext", [new gt.TextNode(" ")]);
          } });
          var un = function() {
            var e3 = new gt.MathNode("mtd", []);
            return e3.setAttribute("width", "50%"), e3;
          };
          Ke({ type: "tag", mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mtable", [new gt.MathNode("mtr", [un(), new gt.MathNode("mtd", [wt(e3.body, t4)]), un(), new gt.MathNode("mtd", [wt(e3.tag, t4)])])]);
            return r3.setAttribute("width", "100%"), r3;
          } });
          var pn = { "\\text": void 0, "\\textrm": "textrm", "\\textsf": "textsf", "\\texttt": "texttt", "\\textnormal": "textrm" }, dn = { "\\textbf": "textbf", "\\textmd": "textmd" }, fn = { "\\textit": "textit", "\\textup": "textup" }, gn = function(e3, t4) {
            var r3 = e3.font;
            return r3 ? pn[r3] ? t4.withTextFontFamily(pn[r3]) : dn[r3] ? t4.withTextFontWeight(dn[r3]) : t4.withTextFontShape(fn[r3]) : t4;
          };
          Ze({ type: "text", names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"], props: { numArgs: 1, argTypes: ["text"], allowedInArgument: true, allowedInText: true }, handler: function(e3, t4) {
            var r3 = e3.parser, n3 = e3.funcName, a2 = t4[0];
            return { type: "text", mode: r3.mode, body: Qe(a2), font: n3 };
          }, htmlBuilder: function(e3, t4) {
            var r3 = gn(e3, t4), n3 = it(e3.body, r3, true);
            return Ve.makeSpan(["mord", "text"], n3, r3);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = gn(e3, t4);
            return wt(e3.body, r3);
          } }), Ze({ type: "underline", names: ["\\underline"], props: { numArgs: 1, allowedInText: true }, handler: function(e3, t4) {
            return { type: "underline", mode: e3.parser.mode, body: t4[0] };
          }, htmlBuilder: function(e3, t4) {
            var r3 = ct(e3.body, t4), n3 = Ve.makeLineSpan("underline-line", t4), a2 = t4.fontMetrics().defaultRuleThickness, i2 = Ve.makeVList({ positionType: "top", positionData: r3.height, children: [{ type: "kern", size: a2 }, { type: "elem", elem: n3 }, { type: "kern", size: 3 * a2 }, { type: "elem", elem: r3 }] }, t4);
            return Ve.makeSpan(["mord", "underline"], [i2], t4);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.MathNode("mo", [new gt.TextNode("‾")]);
            r3.setAttribute("stretchy", "true");
            var n3 = new gt.MathNode("munder", [kt(e3.body, t4), r3]);
            return n3.setAttribute("accentunder", "true"), n3;
          } }), Ze({ type: "vcenter", names: ["\\vcenter"], props: { numArgs: 1, argTypes: ["original"], allowedInText: false }, handler: function(e3, t4) {
            return { type: "vcenter", mode: e3.parser.mode, body: t4[0] };
          }, htmlBuilder: function(e3, t4) {
            var r3 = ct(e3.body, t4), n3 = t4.fontMetrics().axisHeight, a2 = 0.5 * (r3.height - n3 - (r3.depth + n3));
            return Ve.makeVList({ positionType: "shift", positionData: a2, children: [{ type: "elem", elem: r3 }] }, t4);
          }, mathmlBuilder: function(e3, t4) {
            return new gt.MathNode("mpadded", [kt(e3.body, t4)], ["vcenter"]);
          } }), Ze({ type: "verb", names: ["\\verb"], props: { numArgs: 0, allowedInText: true }, handler: function(e3, t4, r3) {
            throw new n2("\\verb ended by end of line instead of matching delimiter");
          }, htmlBuilder: function(e3, t4) {
            for (var r3 = vn(e3), n3 = [], a2 = t4.havingStyle(t4.style.text()), i2 = 0; i2 < r3.length; i2++) {
              var o2 = r3[i2];
              "~" === o2 && (o2 = "\\textasciitilde"), n3.push(Ve.makeSymbol(o2, "Typewriter-Regular", e3.mode, a2, ["mord", "texttt"]));
            }
            return Ve.makeSpan(["mord", "text"].concat(a2.sizingClasses(t4)), Ve.tryCombineChars(n3), a2);
          }, mathmlBuilder: function(e3, t4) {
            var r3 = new gt.TextNode(vn(e3)), n3 = new gt.MathNode("mtext", [r3]);
            return n3.setAttribute("mathvariant", "monospace"), n3;
          } });
          var vn = function(e3) {
            return e3.body.replace(/ /g, e3.star ? "␣" : " ");
          }, yn = We, bn = new RegExp("[̀-ͯ]+$"), xn = function() {
            function e3(e4, t5) {
              this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e4, this.settings = t5, this.tokenRegex = new RegExp("([ \r\n	]+)|\\\\(\n|[ \r	]+\n?)[ \r	]*|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\uD800-\uDBFF][\uDC00-\uDFFF][̀-ͯ]*|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5|(\\\\[a-zA-Z@]+)[ \r\n	]*|\\\\[^\uD800-\uDFFF])", "g"), this.catcodes = { "%": 14, "~": 13 };
            }
            var t4 = e3.prototype;
            return t4.setCatcode = function(e4, t5) {
              this.catcodes[e4] = t5;
            }, t4.lex = function() {
              var e4 = this.input, t5 = this.tokenRegex.lastIndex;
              if (t5 === e4.length)
                return new zr("EOF", new Mr(this, t5, t5));
              var r3 = this.tokenRegex.exec(e4);
              if (null === r3 || r3.index !== t5)
                throw new n2("Unexpected character: '" + e4[t5] + "'", new zr(e4[t5], new Mr(this, t5, t5 + 1)));
              var a2 = r3[6] || r3[3] || (r3[2] ? "\\ " : " ");
              if (14 === this.catcodes[a2]) {
                var i2 = e4.indexOf("\n", this.tokenRegex.lastIndex);
                return -1 === i2 ? (this.tokenRegex.lastIndex = e4.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i2 + 1, this.lex();
              }
              return new zr(a2, new Mr(this, t5, this.tokenRegex.lastIndex));
            }, e3;
          }(), wn = function() {
            function e3(e4, t5) {
              void 0 === e4 && (e4 = {}), void 0 === t5 && (t5 = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t5, this.builtins = e4, this.undefStack = [];
            }
            var t4 = e3.prototype;
            return t4.beginGroup = function() {
              this.undefStack.push({});
            }, t4.endGroup = function() {
              if (0 === this.undefStack.length)
                throw new n2("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
              var e4 = this.undefStack.pop();
              for (var t5 in e4)
                e4.hasOwnProperty(t5) && (null == e4[t5] ? delete this.current[t5] : this.current[t5] = e4[t5]);
            }, t4.endGroups = function() {
              for (; this.undefStack.length > 0; )
                this.endGroup();
            }, t4.has = function(e4) {
              return this.current.hasOwnProperty(e4) || this.builtins.hasOwnProperty(e4);
            }, t4.get = function(e4) {
              return this.current.hasOwnProperty(e4) ? this.current[e4] : this.builtins[e4];
            }, t4.set = function(e4, t5, r3) {
              if (void 0 === r3 && (r3 = false), r3) {
                for (var n3 = 0; n3 < this.undefStack.length; n3++)
                  delete this.undefStack[n3][e4];
                this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e4] = t5);
              } else {
                var a2 = this.undefStack[this.undefStack.length - 1];
                a2 && !a2.hasOwnProperty(e4) && (a2[e4] = this.current[e4]);
              }
              null == t5 ? delete this.current[e4] : this.current[e4] = t5;
            }, e3;
          }(), kn = kr;
          Sr("\\noexpand", function(e3) {
            var t4 = e3.popToken();
            return e3.isExpandable(t4.text) && (t4.noexpand = true, t4.treatAsRelax = true), { tokens: [t4], numArgs: 0 };
          }), Sr("\\expandafter", function(e3) {
            var t4 = e3.popToken();
            return e3.expandOnce(true), { tokens: [t4], numArgs: 0 };
          }), Sr("\\@firstoftwo", function(e3) {
            return { tokens: e3.consumeArgs(2)[0], numArgs: 0 };
          }), Sr("\\@secondoftwo", function(e3) {
            return { tokens: e3.consumeArgs(2)[1], numArgs: 0 };
          }), Sr("\\@ifnextchar", function(e3) {
            var t4 = e3.consumeArgs(3);
            e3.consumeSpaces();
            var r3 = e3.future();
            return 1 === t4[0].length && t4[0][0].text === r3.text ? { tokens: t4[1], numArgs: 0 } : { tokens: t4[2], numArgs: 0 };
          }), Sr("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), Sr("\\TextOrMath", function(e3) {
            var t4 = e3.consumeArgs(2);
            return "text" === e3.mode ? { tokens: t4[0], numArgs: 0 } : { tokens: t4[1], numArgs: 0 };
          });
          var Sn = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
          Sr("\\char", function(e3) {
            var t4, r3 = e3.popToken(), a2 = "";
            if ("'" === r3.text)
              t4 = 8, r3 = e3.popToken();
            else if ('"' === r3.text)
              t4 = 16, r3 = e3.popToken();
            else if ("`" === r3.text)
              if ("\\" === (r3 = e3.popToken()).text[0])
                a2 = r3.text.charCodeAt(1);
              else {
                if ("EOF" === r3.text)
                  throw new n2("\\char` missing argument");
                a2 = r3.text.charCodeAt(0);
              }
            else
              t4 = 10;
            if (t4) {
              if (null == (a2 = Sn[r3.text]) || a2 >= t4)
                throw new n2("Invalid base-" + t4 + " digit " + r3.text);
              for (var i2; null != (i2 = Sn[e3.future().text]) && i2 < t4; )
                a2 *= t4, a2 += i2, e3.popToken();
            }
            return "\\@char{" + a2 + "}";
          });
          var Mn = function(e3, t4, r3) {
            var a2 = e3.consumeArg().tokens;
            if (1 !== a2.length)
              throw new n2("\\newcommand's first argument must be a macro name");
            var i2 = a2[0].text, o2 = e3.isDefined(i2);
            if (o2 && !t4)
              throw new n2("\\newcommand{" + i2 + "} attempting to redefine " + i2 + "; use \\renewcommand");
            if (!o2 && !r3)
              throw new n2("\\renewcommand{" + i2 + "} when command " + i2 + " does not yet exist; use \\newcommand");
            var s2 = 0;
            if (1 === (a2 = e3.consumeArg().tokens).length && "[" === a2[0].text) {
              for (var l2 = "", h2 = e3.expandNextToken(); "]" !== h2.text && "EOF" !== h2.text; )
                l2 += h2.text, h2 = e3.expandNextToken();
              if (!l2.match(/^\s*[0-9]+\s*$/))
                throw new n2("Invalid number of arguments: " + l2);
              s2 = parseInt(l2), a2 = e3.consumeArg().tokens;
            }
            return e3.macros.set(i2, { tokens: a2, numArgs: s2 }), "";
          };
          Sr("\\newcommand", function(e3) {
            return Mn(e3, false, true);
          }), Sr("\\renewcommand", function(e3) {
            return Mn(e3, true, false);
          }), Sr("\\providecommand", function(e3) {
            return Mn(e3, true, true);
          }), Sr("\\message", function(e3) {
            var t4 = e3.consumeArgs(1)[0];
            return formatAppLog("log", "at uni-app/components/mp-html/latex/katex.min.js:1", t4.reverse().map(function(e4) {
              return e4.text;
            }).join("")), "";
          }), Sr("\\errmessage", function(e3) {
            var t4 = e3.consumeArgs(1)[0];
            return formatAppLog("error", "at uni-app/components/mp-html/latex/katex.min.js:1", t4.reverse().map(function(e4) {
              return e4.text;
            }).join("")), "";
          }), Sr("\\show", function(e3) {
            var t4 = e3.popToken(), r3 = t4.text;
            return formatAppLog("log", "at uni-app/components/mp-html/latex/katex.min.js:1", t4, e3.macros.get(r3), yn[r3], ne.math[r3], ne.text[r3]), "";
          }), Sr("\\bgroup", "{"), Sr("\\egroup", "}"), Sr("~", "\\nobreakspace"), Sr("\\lq", "`"), Sr("\\rq", "'"), Sr("\\aa", "\\r a"), Sr("\\AA", "\\r A"), Sr("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), Sr("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), Sr("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), Sr("ℬ", "\\mathscr{B}"), Sr("ℰ", "\\mathscr{E}"), Sr("ℱ", "\\mathscr{F}"), Sr("ℋ", "\\mathscr{H}"), Sr("ℐ", "\\mathscr{I}"), Sr("ℒ", "\\mathscr{L}"), Sr("ℳ", "\\mathscr{M}"), Sr("ℛ", "\\mathscr{R}"), Sr("ℭ", "\\mathfrak{C}"), Sr("ℌ", "\\mathfrak{H}"), Sr("ℨ", "\\mathfrak{Z}"), Sr("\\Bbbk", "\\Bbb{k}"), Sr("·", "\\cdotp"), Sr("\\llap", "\\mathllap{\\textrm{#1}}"), Sr("\\rlap", "\\mathrlap{\\textrm{#1}}"), Sr("\\clap", "\\mathclap{\\textrm{#1}}"), Sr("\\mathstrut", "\\vphantom{(}"), Sr("\\underbar", "\\underline{\\text{#1}}"), Sr("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), Sr("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), Sr("\\ne", "\\neq"), Sr("≠", "\\neq"), Sr("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), Sr("∉", "\\notin"), Sr("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), Sr("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), Sr("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), Sr("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), Sr("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), Sr("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), Sr("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), Sr("⟂", "\\perp"), Sr("‼", "\\mathclose{!\\mkern-0.8mu!}"), Sr("∌", "\\notni"), Sr("⌜", "\\ulcorner"), Sr("⌝", "\\urcorner"), Sr("⌞", "\\llcorner"), Sr("⌟", "\\lrcorner"), Sr("©", "\\copyright"), Sr("®", "\\textregistered"), Sr("️", "\\textregistered"), Sr("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), Sr("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), Sr("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), Sr("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), Sr("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), Sr("⋮", "\\vdots"), Sr("\\varGamma", "\\mathit{\\Gamma}"), Sr("\\varDelta", "\\mathit{\\Delta}"), Sr("\\varTheta", "\\mathit{\\Theta}"), Sr("\\varLambda", "\\mathit{\\Lambda}"), Sr("\\varXi", "\\mathit{\\Xi}"), Sr("\\varPi", "\\mathit{\\Pi}"), Sr("\\varSigma", "\\mathit{\\Sigma}"), Sr("\\varUpsilon", "\\mathit{\\Upsilon}"), Sr("\\varPhi", "\\mathit{\\Phi}"), Sr("\\varPsi", "\\mathit{\\Psi}"), Sr("\\varOmega", "\\mathit{\\Omega}"), Sr("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), Sr("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), Sr("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), Sr("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), Sr("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), Sr("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
          var zn = { ",": "\\dotsc", "\\not": "\\dotsb", "+": "\\dotsb", "=": "\\dotsb", "<": "\\dotsb", ">": "\\dotsb", "-": "\\dotsb", "*": "\\dotsb", ":": "\\dotsb", "\\DOTSB": "\\dotsb", "\\coprod": "\\dotsb", "\\bigvee": "\\dotsb", "\\bigwedge": "\\dotsb", "\\biguplus": "\\dotsb", "\\bigcap": "\\dotsb", "\\bigcup": "\\dotsb", "\\prod": "\\dotsb", "\\sum": "\\dotsb", "\\bigotimes": "\\dotsb", "\\bigoplus": "\\dotsb", "\\bigodot": "\\dotsb", "\\bigsqcup": "\\dotsb", "\\And": "\\dotsb", "\\longrightarrow": "\\dotsb", "\\Longrightarrow": "\\dotsb", "\\longleftarrow": "\\dotsb", "\\Longleftarrow": "\\dotsb", "\\longleftrightarrow": "\\dotsb", "\\Longleftrightarrow": "\\dotsb", "\\mapsto": "\\dotsb", "\\longmapsto": "\\dotsb", "\\hookrightarrow": "\\dotsb", "\\doteq": "\\dotsb", "\\mathbin": "\\dotsb", "\\mathrel": "\\dotsb", "\\relbar": "\\dotsb", "\\Relbar": "\\dotsb", "\\xrightarrow": "\\dotsb", "\\xleftarrow": "\\dotsb", "\\DOTSI": "\\dotsi", "\\int": "\\dotsi", "\\oint": "\\dotsi", "\\iint": "\\dotsi", "\\iiint": "\\dotsi", "\\iiiint": "\\dotsi", "\\idotsint": "\\dotsi", "\\DOTSX": "\\dotsx" };
          Sr("\\dots", function(e3) {
            var t4 = "\\dotso", r3 = e3.expandAfterFuture().text;
            return r3 in zn ? t4 = zn[r3] : ("\\not" === r3.substr(0, 4) || r3 in ne.math && l.contains(["bin", "rel"], ne.math[r3].group)) && (t4 = "\\dotsb"), t4;
          });
          var An = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
          Sr("\\dotso", function(e3) {
            return e3.future().text in An ? "\\ldots\\," : "\\ldots";
          }), Sr("\\dotsc", function(e3) {
            var t4 = e3.future().text;
            return t4 in An && "," !== t4 ? "\\ldots\\," : "\\ldots";
          }), Sr("\\cdots", function(e3) {
            return e3.future().text in An ? "\\@cdots\\," : "\\@cdots";
          }), Sr("\\dotsb", "\\cdots"), Sr("\\dotsm", "\\cdots"), Sr("\\dotsi", "\\!\\cdots"), Sr("\\dotsx", "\\ldots\\,"), Sr("\\DOTSI", "\\relax"), Sr("\\DOTSB", "\\relax"), Sr("\\DOTSX", "\\relax"), Sr("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), Sr("\\,", "\\tmspace+{3mu}{.1667em}"), Sr("\\thinspace", "\\,"), Sr("\\>", "\\mskip{4mu}"), Sr("\\:", "\\tmspace+{4mu}{.2222em}"), Sr("\\medspace", "\\:"), Sr("\\;", "\\tmspace+{5mu}{.2777em}"), Sr("\\thickspace", "\\;"), Sr("\\!", "\\tmspace-{3mu}{.1667em}"), Sr("\\negthinspace", "\\!"), Sr("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), Sr("\\negthickspace", "\\tmspace-{5mu}{.277em}"), Sr("\\enspace", "\\kern.5em "), Sr("\\enskip", "\\hskip.5em\\relax"), Sr("\\quad", "\\hskip1em\\relax"), Sr("\\qquad", "\\hskip2em\\relax"), Sr("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), Sr("\\tag@paren", "\\tag@literal{({#1})}"), Sr("\\tag@literal", function(e3) {
            if (e3.macros.get("\\df@tag"))
              throw new n2("Multiple \\tag");
            return "\\gdef\\df@tag{\\text{#1}}";
          }), Sr("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), Sr("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), Sr("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), Sr("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), Sr("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"), Sr("\\newline", "\\\\\\relax"), Sr("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
          var Tn = F(A["Main-Regular"]["T".charCodeAt(0)][1] - 0.7 * A["Main-Regular"]["A".charCodeAt(0)][1]);
          Sr("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + Tn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}"), Sr("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + Tn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}"), Sr("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), Sr("\\@hspace", "\\hskip #1\\relax"), Sr("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), Sr("\\ordinarycolon", ":"), Sr("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), Sr("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), Sr("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), Sr("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), Sr("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), Sr("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), Sr("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), Sr("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), Sr("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), Sr("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), Sr("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), Sr("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), Sr("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), Sr("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), Sr("∷", "\\dblcolon"), Sr("∹", "\\eqcolon"), Sr("≔", "\\coloneqq"), Sr("≕", "\\eqqcolon"), Sr("⩴", "\\Coloneqq"), Sr("\\ratio", "\\vcentcolon"), Sr("\\coloncolon", "\\dblcolon"), Sr("\\colonequals", "\\coloneqq"), Sr("\\coloncolonequals", "\\Coloneqq"), Sr("\\equalscolon", "\\eqqcolon"), Sr("\\equalscoloncolon", "\\Eqqcolon"), Sr("\\colonminus", "\\coloneq"), Sr("\\coloncolonminus", "\\Coloneq"), Sr("\\minuscolon", "\\eqcolon"), Sr("\\minuscoloncolon", "\\Eqcolon"), Sr("\\coloncolonapprox", "\\Colonapprox"), Sr("\\coloncolonsim", "\\Colonsim"), Sr("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), Sr("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), Sr("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), Sr("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), Sr("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), Sr("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), Sr("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), Sr("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), Sr("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), Sr("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), Sr("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), Sr("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), Sr("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), Sr("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), Sr("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), Sr("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), Sr("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), Sr("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), Sr("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), Sr("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), Sr("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), Sr("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), Sr("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), Sr("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), Sr("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), Sr("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), Sr("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), Sr("\\imath", "\\html@mathml{\\@imath}{ı}"), Sr("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), Sr("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), Sr("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), Sr("⟦", "\\llbracket"), Sr("⟧", "\\rrbracket"), Sr("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), Sr("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), Sr("⦃", "\\lBrace"), Sr("⦄", "\\rBrace"), Sr("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), Sr("⦵", "\\minuso"), Sr("\\darr", "\\downarrow"), Sr("\\dArr", "\\Downarrow"), Sr("\\Darr", "\\Downarrow"), Sr("\\lang", "\\langle"), Sr("\\rang", "\\rangle"), Sr("\\uarr", "\\uparrow"), Sr("\\uArr", "\\Uparrow"), Sr("\\Uarr", "\\Uparrow"), Sr("\\N", "\\mathbb{N}"), Sr("\\R", "\\mathbb{R}"), Sr("\\Z", "\\mathbb{Z}"), Sr("\\alef", "\\aleph"), Sr("\\alefsym", "\\aleph"), Sr("\\Alpha", "\\mathrm{A}"), Sr("\\Beta", "\\mathrm{B}"), Sr("\\bull", "\\bullet"), Sr("\\Chi", "\\mathrm{X}"), Sr("\\clubs", "\\clubsuit"), Sr("\\cnums", "\\mathbb{C}"), Sr("\\Complex", "\\mathbb{C}"), Sr("\\Dagger", "\\ddagger"), Sr("\\diamonds", "\\diamondsuit"), Sr("\\empty", "\\emptyset"), Sr("\\Epsilon", "\\mathrm{E}"), Sr("\\Eta", "\\mathrm{H}"), Sr("\\exist", "\\exists"), Sr("\\harr", "\\leftrightarrow"), Sr("\\hArr", "\\Leftrightarrow"), Sr("\\Harr", "\\Leftrightarrow"), Sr("\\hearts", "\\heartsuit"), Sr("\\image", "\\Im"), Sr("\\infin", "\\infty"), Sr("\\Iota", "\\mathrm{I}"), Sr("\\isin", "\\in"), Sr("\\Kappa", "\\mathrm{K}"), Sr("\\larr", "\\leftarrow"), Sr("\\lArr", "\\Leftarrow"), Sr("\\Larr", "\\Leftarrow"), Sr("\\lrarr", "\\leftrightarrow"), Sr("\\lrArr", "\\Leftrightarrow"), Sr("\\Lrarr", "\\Leftrightarrow"), Sr("\\Mu", "\\mathrm{M}"), Sr("\\natnums", "\\mathbb{N}"), Sr("\\Nu", "\\mathrm{N}"), Sr("\\Omicron", "\\mathrm{O}"), Sr("\\plusmn", "\\pm"), Sr("\\rarr", "\\rightarrow"), Sr("\\rArr", "\\Rightarrow"), Sr("\\Rarr", "\\Rightarrow"), Sr("\\real", "\\Re"), Sr("\\reals", "\\mathbb{R}"), Sr("\\Reals", "\\mathbb{R}"), Sr("\\Rho", "\\mathrm{P}"), Sr("\\sdot", "\\cdot"), Sr("\\sect", "\\S"), Sr("\\spades", "\\spadesuit"), Sr("\\sub", "\\subset"), Sr("\\sube", "\\subseteq"), Sr("\\supe", "\\supseteq"), Sr("\\Tau", "\\mathrm{T}"), Sr("\\thetasym", "\\vartheta"), Sr("\\weierp", "\\wp"), Sr("\\Zeta", "\\mathrm{Z}"), Sr("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), Sr("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), Sr("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), Sr("\\bra", "\\mathinner{\\langle{#1}|}"), Sr("\\ket", "\\mathinner{|{#1}\\rangle}"), Sr("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), Sr("\\Bra", "\\left\\langle#1\\right|"), Sr("\\Ket", "\\left|#1\\right\\rangle");
          var Bn = function(e3) {
            return function(t4) {
              var r3 = t4.consumeArg().tokens, n3 = t4.consumeArg().tokens, a2 = t4.consumeArg().tokens, i2 = t4.consumeArg().tokens, o2 = t4.macros.get("|"), s2 = t4.macros.get("\\|");
              t4.macros.beginGroup();
              var l2 = function(t5) {
                return function(r4) {
                  e3 && (r4.macros.set("|", o2), a2.length && r4.macros.set("\\|", s2));
                  var i3 = t5;
                  return !t5 && a2.length && "|" === r4.future().text && (r4.popToken(), i3 = true), { tokens: i3 ? a2 : n3, numArgs: 0 };
                };
              };
              t4.macros.set("|", l2(false)), a2.length && t4.macros.set("\\|", l2(true));
              var h2 = t4.consumeArg().tokens, c2 = t4.expandTokens([].concat(i2, h2, r3));
              return t4.macros.endGroup(), { tokens: c2.reverse(), numArgs: 0 };
            };
          };
          Sr("\\bra@ket", Bn(false)), Sr("\\bra@set", Bn(true)), Sr("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), Sr("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), Sr("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), Sr("\\angln", "{\\angl n}"), Sr("\\blue", "\\textcolor{##6495ed}{#1}"), Sr("\\orange", "\\textcolor{##ffa500}{#1}"), Sr("\\pink", "\\textcolor{##ff00af}{#1}"), Sr("\\red", "\\textcolor{##df0030}{#1}"), Sr("\\green", "\\textcolor{##28ae7b}{#1}"), Sr("\\gray", "\\textcolor{gray}{#1}"), Sr("\\purple", "\\textcolor{##9d38bd}{#1}"), Sr("\\blueA", "\\textcolor{##ccfaff}{#1}"), Sr("\\blueB", "\\textcolor{##80f6ff}{#1}"), Sr("\\blueC", "\\textcolor{##63d9ea}{#1}"), Sr("\\blueD", "\\textcolor{##11accd}{#1}"), Sr("\\blueE", "\\textcolor{##0c7f99}{#1}"), Sr("\\tealA", "\\textcolor{##94fff5}{#1}"), Sr("\\tealB", "\\textcolor{##26edd5}{#1}"), Sr("\\tealC", "\\textcolor{##01d1c1}{#1}"), Sr("\\tealD", "\\textcolor{##01a995}{#1}"), Sr("\\tealE", "\\textcolor{##208170}{#1}"), Sr("\\greenA", "\\textcolor{##b6ffb0}{#1}"), Sr("\\greenB", "\\textcolor{##8af281}{#1}"), Sr("\\greenC", "\\textcolor{##74cf70}{#1}"), Sr("\\greenD", "\\textcolor{##1fab54}{#1}"), Sr("\\greenE", "\\textcolor{##0d923f}{#1}"), Sr("\\goldA", "\\textcolor{##ffd0a9}{#1}"), Sr("\\goldB", "\\textcolor{##ffbb71}{#1}"), Sr("\\goldC", "\\textcolor{##ff9c39}{#1}"), Sr("\\goldD", "\\textcolor{##e07d10}{#1}"), Sr("\\goldE", "\\textcolor{##a75a05}{#1}"), Sr("\\redA", "\\textcolor{##fca9a9}{#1}"), Sr("\\redB", "\\textcolor{##ff8482}{#1}"), Sr("\\redC", "\\textcolor{##f9685d}{#1}"), Sr("\\redD", "\\textcolor{##e84d39}{#1}"), Sr("\\redE", "\\textcolor{##bc2612}{#1}"), Sr("\\maroonA", "\\textcolor{##ffbde0}{#1}"), Sr("\\maroonB", "\\textcolor{##ff92c6}{#1}"), Sr("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), Sr("\\maroonD", "\\textcolor{##ca337c}{#1}"), Sr("\\maroonE", "\\textcolor{##9e034e}{#1}"), Sr("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), Sr("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), Sr("\\purpleC", "\\textcolor{##aa87ff}{#1}"), Sr("\\purpleD", "\\textcolor{##7854ab}{#1}"), Sr("\\purpleE", "\\textcolor{##543b78}{#1}"), Sr("\\mintA", "\\textcolor{##f5f9e8}{#1}"), Sr("\\mintB", "\\textcolor{##edf2df}{#1}"), Sr("\\mintC", "\\textcolor{##e0e5cc}{#1}"), Sr("\\grayA", "\\textcolor{##f6f7f7}{#1}"), Sr("\\grayB", "\\textcolor{##f0f1f2}{#1}"), Sr("\\grayC", "\\textcolor{##e3e5e6}{#1}"), Sr("\\grayD", "\\textcolor{##d6d8da}{#1}"), Sr("\\grayE", "\\textcolor{##babec2}{#1}"), Sr("\\grayF", "\\textcolor{##888d93}{#1}"), Sr("\\grayG", "\\textcolor{##626569}{#1}"), Sr("\\grayH", "\\textcolor{##3b3e40}{#1}"), Sr("\\grayI", "\\textcolor{##21242c}{#1}"), Sr("\\kaBlue", "\\textcolor{##314453}{#1}"), Sr("\\kaGreen", "\\textcolor{##71B307}{#1}");
          var Cn = { "^": true, _: true, "\\limits": true, "\\nolimits": true }, Nn = function() {
            function e3(e4, t5, r3) {
              this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t5, this.expansionCount = 0, this.feed(e4), this.macros = new wn(kn, t5.macros), this.mode = r3, this.stack = [];
            }
            var t4 = e3.prototype;
            return t4.feed = function(e4) {
              this.lexer = new xn(e4, this.settings);
            }, t4.switchMode = function(e4) {
              this.mode = e4;
            }, t4.beginGroup = function() {
              this.macros.beginGroup();
            }, t4.endGroup = function() {
              this.macros.endGroup();
            }, t4.endGroups = function() {
              this.macros.endGroups();
            }, t4.future = function() {
              return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
            }, t4.popToken = function() {
              return this.future(), this.stack.pop();
            }, t4.pushToken = function(e4) {
              this.stack.push(e4);
            }, t4.pushTokens = function(e4) {
              var t5;
              (t5 = this.stack).push.apply(t5, e4);
            }, t4.scanArgument = function(e4) {
              var t5, r3, n3;
              if (e4) {
                if (this.consumeSpaces(), "[" !== this.future().text)
                  return null;
                t5 = this.popToken();
                var a2 = this.consumeArg(["]"]);
                n3 = a2.tokens, r3 = a2.end;
              } else {
                var i2 = this.consumeArg();
                n3 = i2.tokens, t5 = i2.start, r3 = i2.end;
              }
              return this.pushToken(new zr("EOF", r3.loc)), this.pushTokens(n3), t5.range(r3, "");
            }, t4.consumeSpaces = function() {
              for (; " " === this.future().text; )
                this.stack.pop();
            }, t4.consumeArg = function(e4) {
              var t5 = [], r3 = e4 && e4.length > 0;
              r3 || this.consumeSpaces();
              var a2, i2 = this.future(), o2 = 0, s2 = 0;
              do {
                if (a2 = this.popToken(), t5.push(a2), "{" === a2.text)
                  ++o2;
                else if ("}" === a2.text) {
                  if (-1 == --o2)
                    throw new n2("Extra }", a2);
                } else if ("EOF" === a2.text)
                  throw new n2("Unexpected end of input in a macro argument, expected '" + (e4 && r3 ? e4[s2] : "}") + "'", a2);
                if (e4 && r3)
                  if ((0 === o2 || 1 === o2 && "{" === e4[s2]) && a2.text === e4[s2]) {
                    if (++s2 === e4.length) {
                      t5.splice(-s2, s2);
                      break;
                    }
                  } else
                    s2 = 0;
              } while (0 !== o2 || r3);
              return "{" === i2.text && "}" === t5[t5.length - 1].text && (t5.pop(), t5.shift()), t5.reverse(), { tokens: t5, start: i2, end: a2 };
            }, t4.consumeArgs = function(e4, t5) {
              if (t5) {
                if (t5.length !== e4 + 1)
                  throw new n2("The length of delimiters doesn't match the number of args!");
                for (var r3 = t5[0], a2 = 0; a2 < r3.length; a2++) {
                  var i2 = this.popToken();
                  if (r3[a2] !== i2.text)
                    throw new n2("Use of the macro doesn't match its definition", i2);
                }
              }
              for (var o2 = [], s2 = 0; s2 < e4; s2++)
                o2.push(this.consumeArg(t5 && t5[s2 + 1]).tokens);
              return o2;
            }, t4.expandOnce = function(e4) {
              var t5 = this.popToken(), r3 = t5.text, a2 = t5.noexpand ? null : this._getExpansion(r3);
              if (null == a2 || e4 && a2.unexpandable) {
                if (e4 && null == a2 && "\\" === r3[0] && !this.isDefined(r3))
                  throw new n2("Undefined control sequence: " + r3);
                return this.pushToken(t5), t5;
              }
              if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
                throw new n2("Too many expansions: infinite loop or need to increase maxExpand setting");
              var i2 = a2.tokens, o2 = this.consumeArgs(a2.numArgs, a2.delimiters);
              if (a2.numArgs)
                for (var s2 = (i2 = i2.slice()).length - 1; s2 >= 0; --s2) {
                  var l2 = i2[s2];
                  if ("#" === l2.text) {
                    if (0 === s2)
                      throw new n2("Incomplete placeholder at end of macro body", l2);
                    if ("#" === (l2 = i2[--s2]).text)
                      i2.splice(s2 + 1, 1);
                    else {
                      if (!/^[1-9]$/.test(l2.text))
                        throw new n2("Not a valid argument number", l2);
                      var h2;
                      (h2 = i2).splice.apply(h2, [s2, 2].concat(o2[+l2.text - 1]));
                    }
                  }
                }
              return this.pushTokens(i2), i2;
            }, t4.expandAfterFuture = function() {
              return this.expandOnce(), this.future();
            }, t4.expandNextToken = function() {
              for (; ; ) {
                var e4 = this.expandOnce();
                if (e4 instanceof zr)
                  return e4.treatAsRelax && (e4.text = "\\relax"), this.stack.pop();
              }
              throw new Error();
            }, t4.expandMacro = function(e4) {
              return this.macros.has(e4) ? this.expandTokens([new zr(e4)]) : void 0;
            }, t4.expandTokens = function(e4) {
              var t5 = [], r3 = this.stack.length;
              for (this.pushTokens(e4); this.stack.length > r3; ) {
                var n3 = this.expandOnce(true);
                n3 instanceof zr && (n3.treatAsRelax && (n3.noexpand = false, n3.treatAsRelax = false), t5.push(this.stack.pop()));
              }
              return t5;
            }, t4.expandMacroAsText = function(e4) {
              var t5 = this.expandMacro(e4);
              return t5 ? t5.map(function(e5) {
                return e5.text;
              }).join("") : t5;
            }, t4._getExpansion = function(e4) {
              var t5 = this.macros.get(e4);
              if (null == t5)
                return t5;
              if (1 === e4.length) {
                var r3 = this.lexer.catcodes[e4];
                if (null != r3 && 13 !== r3)
                  return;
              }
              var n3 = "function" == typeof t5 ? t5(this) : t5;
              if ("string" == typeof n3) {
                var a2 = 0;
                if (-1 !== n3.indexOf("#"))
                  for (var i2 = n3.replace(/##/g, ""); -1 !== i2.indexOf("#" + (a2 + 1)); )
                    ++a2;
                for (var o2 = new xn(n3, this.settings), s2 = [], l2 = o2.lex(); "EOF" !== l2.text; )
                  s2.push(l2), l2 = o2.lex();
                return s2.reverse(), { tokens: s2, numArgs: a2 };
              }
              return n3;
            }, t4.isDefined = function(e4) {
              return this.macros.has(e4) || yn.hasOwnProperty(e4) || ne.math.hasOwnProperty(e4) || ne.text.hasOwnProperty(e4) || Cn.hasOwnProperty(e4);
            }, t4.isExpandable = function(e4) {
              var t5 = this.macros.get(e4);
              return null != t5 ? "string" == typeof t5 || "function" == typeof t5 || !t5.unexpandable : yn.hasOwnProperty(e4) && !yn[e4].primitive;
            }, e3;
          }(), qn = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, In = Object.freeze({ "₊": "+", "₋": "-", "₌": "=", "₍": "(", "₎": ")", "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9", "ₐ": "a", "ₑ": "e", "ₕ": "h", "ᵢ": "i", "ⱼ": "j", "ₖ": "k", "ₗ": "l", "ₘ": "m", "ₙ": "n", "ₒ": "o", "ₚ": "p", "ᵣ": "r", "ₛ": "s", "ₜ": "t", "ᵤ": "u", "ᵥ": "v", "ₓ": "x", "ᵦ": "β", "ᵧ": "γ", "ᵨ": "ρ", "ᵩ": "ϕ", "ᵪ": "χ", "⁺": "+", "⁻": "-", "⁼": "=", "⁽": "(", "⁾": ")", "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "ᴬ": "A", "ᴮ": "B", "ᴰ": "D", "ᴱ": "E", "ᴳ": "G", "ᴴ": "H", "ᴵ": "I", "ᴶ": "J", "ᴷ": "K", "ᴸ": "L", "ᴹ": "M", "ᴺ": "N", "ᴼ": "O", "ᴾ": "P", "ᴿ": "R", "ᵀ": "T", "ᵁ": "U", "ⱽ": "V", "ᵂ": "W", "ᵃ": "a", "ᵇ": "b", "ᶜ": "c", "ᵈ": "d", "ᵉ": "e", "ᶠ": "f", "ᵍ": "g", "ʰ": "h", "ⁱ": "i", "ʲ": "j", "ᵏ": "k", "ˡ": "l", "ᵐ": "m", "ⁿ": "n", "ᵒ": "o", "ᵖ": "p", "ʳ": "r", "ˢ": "s", "ᵗ": "t", "ᵘ": "u", "ᵛ": "v", "ʷ": "w", "ˣ": "x", "ʸ": "y", "ᶻ": "z", "ᵝ": "β", "ᵞ": "γ", "ᵟ": "δ", "ᵠ": "ϕ", "ᵡ": "χ", "ᶿ": "θ" }), On = { "́": { text: "\\'", math: "\\acute" }, "̀": { text: "\\`", math: "\\grave" }, "̈": { text: '\\"', math: "\\ddot" }, "̃": { text: "\\~", math: "\\tilde" }, "̄": { text: "\\=", math: "\\bar" }, "̆": { text: "\\u", math: "\\breve" }, "̌": { text: "\\v", math: "\\check" }, "̂": { text: "\\^", math: "\\hat" }, "̇": { text: "\\.", math: "\\dot" }, "̊": { text: "\\r", math: "\\mathring" }, "̋": { text: "\\H" }, "̧": { text: "\\c" } }, Rn = { "á": "á", "à": "à", "ä": "ä", "ǟ": "ǟ", "ã": "ã", "ā": "ā", "ă": "ă", "ắ": "ắ", "ằ": "ằ", "ẵ": "ẵ", "ǎ": "ǎ", "â": "â", "ấ": "ấ", "ầ": "ầ", "ẫ": "ẫ", "ȧ": "ȧ", "ǡ": "ǡ", "å": "å", "ǻ": "ǻ", "ḃ": "ḃ", "ć": "ć", "ḉ": "ḉ", "č": "č", "ĉ": "ĉ", "ċ": "ċ", "ç": "ç", "ď": "ď", "ḋ": "ḋ", "ḑ": "ḑ", "é": "é", "è": "è", "ë": "ë", "ẽ": "ẽ", "ē": "ē", "ḗ": "ḗ", "ḕ": "ḕ", "ĕ": "ĕ", "ḝ": "ḝ", "ě": "ě", "ê": "ê", "ế": "ế", "ề": "ề", "ễ": "ễ", "ė": "ė", "ȩ": "ȩ", "ḟ": "ḟ", "ǵ": "ǵ", "ḡ": "ḡ", "ğ": "ğ", "ǧ": "ǧ", "ĝ": "ĝ", "ġ": "ġ", "ģ": "ģ", "ḧ": "ḧ", "ȟ": "ȟ", "ĥ": "ĥ", "ḣ": "ḣ", "ḩ": "ḩ", "í": "í", "ì": "ì", "ï": "ï", "ḯ": "ḯ", "ĩ": "ĩ", "ī": "ī", "ĭ": "ĭ", "ǐ": "ǐ", "î": "î", "ǰ": "ǰ", "ĵ": "ĵ", "ḱ": "ḱ", "ǩ": "ǩ", "ķ": "ķ", "ĺ": "ĺ", "ľ": "ľ", "ļ": "ļ", "ḿ": "ḿ", "ṁ": "ṁ", "ń": "ń", "ǹ": "ǹ", "ñ": "ñ", "ň": "ň", "ṅ": "ṅ", "ņ": "ņ", "ó": "ó", "ò": "ò", "ö": "ö", "ȫ": "ȫ", "õ": "õ", "ṍ": "ṍ", "ṏ": "ṏ", "ȭ": "ȭ", "ō": "ō", "ṓ": "ṓ", "ṑ": "ṑ", "ŏ": "ŏ", "ǒ": "ǒ", "ô": "ô", "ố": "ố", "ồ": "ồ", "ỗ": "ỗ", "ȯ": "ȯ", "ȱ": "ȱ", "ő": "ő", "ṕ": "ṕ", "ṗ": "ṗ", "ŕ": "ŕ", "ř": "ř", "ṙ": "ṙ", "ŗ": "ŗ", "ś": "ś", "ṥ": "ṥ", "š": "š", "ṧ": "ṧ", "ŝ": "ŝ", "ṡ": "ṡ", "ş": "ş", "ẗ": "ẗ", "ť": "ť", "ṫ": "ṫ", "ţ": "ţ", "ú": "ú", "ù": "ù", "ü": "ü", "ǘ": "ǘ", "ǜ": "ǜ", "ǖ": "ǖ", "ǚ": "ǚ", "ũ": "ũ", "ṹ": "ṹ", "ū": "ū", "ṻ": "ṻ", "ŭ": "ŭ", "ǔ": "ǔ", "û": "û", "ů": "ů", "ű": "ű", "ṽ": "ṽ", "ẃ": "ẃ", "ẁ": "ẁ", "ẅ": "ẅ", "ŵ": "ŵ", "ẇ": "ẇ", "ẘ": "ẘ", "ẍ": "ẍ", "ẋ": "ẋ", "ý": "ý", "ỳ": "ỳ", "ÿ": "ÿ", "ỹ": "ỹ", "ȳ": "ȳ", "ŷ": "ŷ", "ẏ": "ẏ", "ẙ": "ẙ", "ź": "ź", "ž": "ž", "ẑ": "ẑ", "ż": "ż", "Á": "Á", "À": "À", "Ä": "Ä", "Ǟ": "Ǟ", "Ã": "Ã", "Ā": "Ā", "Ă": "Ă", "Ắ": "Ắ", "Ằ": "Ằ", "Ẵ": "Ẵ", "Ǎ": "Ǎ", "Â": "Â", "Ấ": "Ấ", "Ầ": "Ầ", "Ẫ": "Ẫ", "Ȧ": "Ȧ", "Ǡ": "Ǡ", "Å": "Å", "Ǻ": "Ǻ", "Ḃ": "Ḃ", "Ć": "Ć", "Ḉ": "Ḉ", "Č": "Č", "Ĉ": "Ĉ", "Ċ": "Ċ", "Ç": "Ç", "Ď": "Ď", "Ḋ": "Ḋ", "Ḑ": "Ḑ", "É": "É", "È": "È", "Ë": "Ë", "Ẽ": "Ẽ", "Ē": "Ē", "Ḗ": "Ḗ", "Ḕ": "Ḕ", "Ĕ": "Ĕ", "Ḝ": "Ḝ", "Ě": "Ě", "Ê": "Ê", "Ế": "Ế", "Ề": "Ề", "Ễ": "Ễ", "Ė": "Ė", "Ȩ": "Ȩ", "Ḟ": "Ḟ", "Ǵ": "Ǵ", "Ḡ": "Ḡ", "Ğ": "Ğ", "Ǧ": "Ǧ", "Ĝ": "Ĝ", "Ġ": "Ġ", "Ģ": "Ģ", "Ḧ": "Ḧ", "Ȟ": "Ȟ", "Ĥ": "Ĥ", "Ḣ": "Ḣ", "Ḩ": "Ḩ", "Í": "Í", "Ì": "Ì", "Ï": "Ï", "Ḯ": "Ḯ", "Ĩ": "Ĩ", "Ī": "Ī", "Ĭ": "Ĭ", "Ǐ": "Ǐ", "Î": "Î", "İ": "İ", "Ĵ": "Ĵ", "Ḱ": "Ḱ", "Ǩ": "Ǩ", "Ķ": "Ķ", "Ĺ": "Ĺ", "Ľ": "Ľ", "Ļ": "Ļ", "Ḿ": "Ḿ", "Ṁ": "Ṁ", "Ń": "Ń", "Ǹ": "Ǹ", "Ñ": "Ñ", "Ň": "Ň", "Ṅ": "Ṅ", "Ņ": "Ņ", "Ó": "Ó", "Ò": "Ò", "Ö": "Ö", "Ȫ": "Ȫ", "Õ": "Õ", "Ṍ": "Ṍ", "Ṏ": "Ṏ", "Ȭ": "Ȭ", "Ō": "Ō", "Ṓ": "Ṓ", "Ṑ": "Ṑ", "Ŏ": "Ŏ", "Ǒ": "Ǒ", "Ô": "Ô", "Ố": "Ố", "Ồ": "Ồ", "Ỗ": "Ỗ", "Ȯ": "Ȯ", "Ȱ": "Ȱ", "Ő": "Ő", "Ṕ": "Ṕ", "Ṗ": "Ṗ", "Ŕ": "Ŕ", "Ř": "Ř", "Ṙ": "Ṙ", "Ŗ": "Ŗ", "Ś": "Ś", "Ṥ": "Ṥ", "Š": "Š", "Ṧ": "Ṧ", "Ŝ": "Ŝ", "Ṡ": "Ṡ", "Ş": "Ş", "Ť": "Ť", "Ṫ": "Ṫ", "Ţ": "Ţ", "Ú": "Ú", "Ù": "Ù", "Ü": "Ü", "Ǘ": "Ǘ", "Ǜ": "Ǜ", "Ǖ": "Ǖ", "Ǚ": "Ǚ", "Ũ": "Ũ", "Ṹ": "Ṹ", "Ū": "Ū", "Ṻ": "Ṻ", "Ŭ": "Ŭ", "Ǔ": "Ǔ", "Û": "Û", "Ů": "Ů", "Ű": "Ű", "Ṽ": "Ṽ", "Ẃ": "Ẃ", "Ẁ": "Ẁ", "Ẅ": "Ẅ", "Ŵ": "Ŵ", "Ẇ": "Ẇ", "Ẍ": "Ẍ", "Ẋ": "Ẋ", "Ý": "Ý", "Ỳ": "Ỳ", "Ÿ": "Ÿ", "Ỹ": "Ỹ", "Ȳ": "Ȳ", "Ŷ": "Ŷ", "Ẏ": "Ẏ", "Ź": "Ź", "Ž": "Ž", "Ẑ": "Ẑ", "Ż": "Ż", "ά": "ά", "ὰ": "ὰ", "ᾱ": "ᾱ", "ᾰ": "ᾰ", "έ": "έ", "ὲ": "ὲ", "ή": "ή", "ὴ": "ὴ", "ί": "ί", "ὶ": "ὶ", "ϊ": "ϊ", "ΐ": "ΐ", "ῒ": "ῒ", "ῑ": "ῑ", "ῐ": "ῐ", "ό": "ό", "ὸ": "ὸ", "ύ": "ύ", "ὺ": "ὺ", "ϋ": "ϋ", "ΰ": "ΰ", "ῢ": "ῢ", "ῡ": "ῡ", "ῠ": "ῠ", "ώ": "ώ", "ὼ": "ὼ", "Ύ": "Ύ", "Ὺ": "Ὺ", "Ϋ": "Ϋ", "Ῡ": "Ῡ", "Ῠ": "Ῠ", "Ώ": "Ώ", "Ὼ": "Ὼ" }, Hn = function() {
            function e3(e4, t5) {
              this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Nn(e4, t5, this.mode), this.settings = t5, this.leftrightDepth = 0;
            }
            var t4 = e3.prototype;
            return t4.expect = function(e4, t5) {
              if (void 0 === t5 && (t5 = true), this.fetch().text !== e4)
                throw new n2("Expected '" + e4 + "', got '" + this.fetch().text + "'", this.fetch());
              t5 && this.consume();
            }, t4.consume = function() {
              this.nextToken = null;
            }, t4.fetch = function() {
              return null == this.nextToken && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
            }, t4.switchMode = function(e4) {
              this.mode = e4, this.gullet.switchMode(e4);
            }, t4.parse = function() {
              this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
              try {
                var e4 = this.parseExpression(false);
                return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e4;
              } finally {
                this.gullet.endGroups();
              }
            }, t4.subparse = function(e4) {
              var t5 = this.nextToken;
              this.consume(), this.gullet.pushToken(new zr("}")), this.gullet.pushTokens(e4);
              var r3 = this.parseExpression(false);
              return this.expect("}"), this.nextToken = t5, r3;
            }, t4.parseExpression = function(t5, r3) {
              for (var n3 = []; ; ) {
                "math" === this.mode && this.consumeSpaces();
                var a2 = this.fetch();
                if (-1 !== e3.endOfExpression.indexOf(a2.text))
                  break;
                if (r3 && a2.text === r3)
                  break;
                if (t5 && yn[a2.text] && yn[a2.text].infix)
                  break;
                var i2 = this.parseAtom(r3);
                if (!i2)
                  break;
                "internal" !== i2.type && n3.push(i2);
              }
              return "text" === this.mode && this.formLigatures(n3), this.handleInfixNodes(n3);
            }, t4.handleInfixNodes = function(e4) {
              for (var t5, r3 = -1, a2 = 0; a2 < e4.length; a2++)
                if ("infix" === e4[a2].type) {
                  if (-1 !== r3)
                    throw new n2("only one infix operator per group", e4[a2].token);
                  r3 = a2, t5 = e4[a2].replaceWith;
                }
              if (-1 !== r3 && t5) {
                var i2, o2, s2 = e4.slice(0, r3), l2 = e4.slice(r3 + 1);
                return i2 = 1 === s2.length && "ordgroup" === s2[0].type ? s2[0] : { type: "ordgroup", mode: this.mode, body: s2 }, o2 = 1 === l2.length && "ordgroup" === l2[0].type ? l2[0] : { type: "ordgroup", mode: this.mode, body: l2 }, ["\\\\abovefrac" === t5 ? this.callFunction(t5, [i2, e4[r3], o2], []) : this.callFunction(t5, [i2, o2], [])];
              }
              return e4;
            }, t4.handleSupSubscript = function(e4) {
              var t5 = this.fetch(), r3 = t5.text;
              this.consume(), this.consumeSpaces();
              var a2 = this.parseGroup(e4);
              if (!a2)
                throw new n2("Expected group after '" + r3 + "'", t5);
              return a2;
            }, t4.formatUnsupportedCmd = function(e4) {
              for (var t5 = [], r3 = 0; r3 < e4.length; r3++)
                t5.push({ type: "textord", mode: "text", text: e4[r3] });
              var n3 = { type: "text", mode: this.mode, body: t5 };
              return { type: "color", mode: this.mode, color: this.settings.errorColor, body: [n3] };
            }, t4.parseAtom = function(t5) {
              var r3, a2, i2 = this.parseGroup("atom", t5);
              if ("text" === this.mode)
                return i2;
              for (; ; ) {
                this.consumeSpaces();
                var o2 = this.fetch();
                if ("\\limits" === o2.text || "\\nolimits" === o2.text) {
                  if (i2 && "op" === i2.type) {
                    var s2 = "\\limits" === o2.text;
                    i2.limits = s2, i2.alwaysHandleSupSub = true;
                  } else {
                    if (!i2 || "operatorname" !== i2.type)
                      throw new n2("Limit controls must follow a math operator", o2);
                    i2.alwaysHandleSupSub && (i2.limits = "\\limits" === o2.text);
                  }
                  this.consume();
                } else if ("^" === o2.text) {
                  if (r3)
                    throw new n2("Double superscript", o2);
                  r3 = this.handleSupSubscript("superscript");
                } else if ("_" === o2.text) {
                  if (a2)
                    throw new n2("Double subscript", o2);
                  a2 = this.handleSupSubscript("subscript");
                } else if ("'" === o2.text) {
                  if (r3)
                    throw new n2("Double superscript", o2);
                  var l2 = { type: "textord", mode: this.mode, text: "\\prime" }, h2 = [l2];
                  for (this.consume(); "'" === this.fetch().text; )
                    h2.push(l2), this.consume();
                  "^" === this.fetch().text && h2.push(this.handleSupSubscript("superscript")), r3 = { type: "ordgroup", mode: this.mode, body: h2 };
                } else {
                  if (!In[o2.text])
                    break;
                  var c2 = In[o2.text], m2 = qn.test(o2.text);
                  for (this.consume(); ; ) {
                    var u2 = this.fetch().text;
                    if (!In[u2])
                      break;
                    if (qn.test(u2) !== m2)
                      break;
                    this.consume(), c2 += In[u2];
                  }
                  var p2 = new e3(c2, this.settings).parse();
                  m2 ? a2 = { type: "ordgroup", mode: "math", body: p2 } : r3 = { type: "ordgroup", mode: "math", body: p2 };
                }
              }
              return r3 || a2 ? { type: "supsub", mode: this.mode, base: i2, sup: r3, sub: a2 } : i2;
            }, t4.parseFunction = function(e4, t5) {
              var r3 = this.fetch(), a2 = r3.text, i2 = yn[a2];
              if (!i2)
                return null;
              if (this.consume(), t5 && "atom" !== t5 && !i2.allowedInArgument)
                throw new n2("Got function '" + a2 + "' with no arguments" + (t5 ? " as " + t5 : ""), r3);
              if ("text" === this.mode && !i2.allowedInText)
                throw new n2("Can't use function '" + a2 + "' in text mode", r3);
              if ("math" === this.mode && false === i2.allowedInMath)
                throw new n2("Can't use function '" + a2 + "' in math mode", r3);
              var o2 = this.parseArguments(a2, i2), s2 = o2.args, l2 = o2.optArgs;
              return this.callFunction(a2, s2, l2, r3, e4);
            }, t4.callFunction = function(e4, t5, r3, a2, i2) {
              var o2 = { funcName: e4, parser: this, token: a2, breakOnTokenText: i2 }, s2 = yn[e4];
              if (s2 && s2.handler)
                return s2.handler(o2, t5, r3);
              throw new n2("No function handler for " + e4);
            }, t4.parseArguments = function(e4, t5) {
              var r3 = t5.numArgs + t5.numOptionalArgs;
              if (0 === r3)
                return { args: [], optArgs: [] };
              for (var a2 = [], i2 = [], o2 = 0; o2 < r3; o2++) {
                var s2 = t5.argTypes && t5.argTypes[o2], l2 = o2 < t5.numOptionalArgs;
                (t5.primitive && null == s2 || "sqrt" === t5.type && 1 === o2 && null == i2[0]) && (s2 = "primitive");
                var h2 = this.parseGroupOfType("argument to '" + e4 + "'", s2, l2);
                if (l2)
                  i2.push(h2);
                else {
                  if (null == h2)
                    throw new n2("Null argument, please report this as a bug");
                  a2.push(h2);
                }
              }
              return { args: a2, optArgs: i2 };
            }, t4.parseGroupOfType = function(e4, t5, r3) {
              switch (t5) {
                case "color":
                  return this.parseColorGroup(r3);
                case "size":
                  return this.parseSizeGroup(r3);
                case "url":
                  return this.parseUrlGroup(r3);
                case "math":
                case "text":
                  return this.parseArgumentGroup(r3, t5);
                case "hbox":
                  var a2 = this.parseArgumentGroup(r3, "text");
                  return null != a2 ? { type: "styling", mode: a2.mode, body: [a2], style: "text" } : null;
                case "raw":
                  var i2 = this.parseStringGroup("raw", r3);
                  return null != i2 ? { type: "raw", mode: "text", string: i2.text } : null;
                case "primitive":
                  if (r3)
                    throw new n2("A primitive argument cannot be optional");
                  var o2 = this.parseGroup(e4);
                  if (null == o2)
                    throw new n2("Expected group as " + e4, this.fetch());
                  return o2;
                case "original":
                case null:
                case void 0:
                  return this.parseArgumentGroup(r3);
                default:
                  throw new n2("Unknown group type as " + e4, this.fetch());
              }
            }, t4.consumeSpaces = function() {
              for (; " " === this.fetch().text; )
                this.consume();
            }, t4.parseStringGroup = function(e4, t5) {
              var r3 = this.gullet.scanArgument(t5);
              if (null == r3)
                return null;
              for (var n3, a2 = ""; "EOF" !== (n3 = this.fetch()).text; )
                a2 += n3.text, this.consume();
              return this.consume(), r3.text = a2, r3;
            }, t4.parseRegexGroup = function(e4, t5) {
              for (var r3, a2 = this.fetch(), i2 = a2, o2 = ""; "EOF" !== (r3 = this.fetch()).text && e4.test(o2 + r3.text); )
                o2 += (i2 = r3).text, this.consume();
              if ("" === o2)
                throw new n2("Invalid " + t5 + ": '" + a2.text + "'", a2);
              return a2.range(i2, o2);
            }, t4.parseColorGroup = function(e4) {
              var t5 = this.parseStringGroup("color", e4);
              if (null == t5)
                return null;
              var r3 = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t5.text);
              if (!r3)
                throw new n2("Invalid color: '" + t5.text + "'", t5);
              var a2 = r3[0];
              return /^[0-9a-f]{6}$/i.test(a2) && (a2 = "#" + a2), { type: "color-token", mode: this.mode, color: a2 };
            }, t4.parseSizeGroup = function(e4) {
              var t5, r3 = false;
              if (this.gullet.consumeSpaces(), !(t5 = e4 || "{" === this.gullet.future().text ? this.parseStringGroup("size", e4) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size")))
                return null;
              e4 || 0 !== t5.text.length || (t5.text = "0pt", r3 = true);
              var a2 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t5.text);
              if (!a2)
                throw new n2("Invalid size: '" + t5.text + "'", t5);
              var i2 = { number: +(a2[1] + a2[2]), unit: a2[3] };
              if (!D(i2))
                throw new n2("Invalid unit: '" + i2.unit + "'", t5);
              return { type: "size", mode: this.mode, value: i2, isBlank: r3 };
            }, t4.parseUrlGroup = function(e4) {
              this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
              var t5 = this.parseStringGroup("url", e4);
              if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), null == t5)
                return null;
              var r3 = t5.text.replace(/\\([#$%&~_^{}])/g, "$1");
              return { type: "url", mode: this.mode, url: r3 };
            }, t4.parseArgumentGroup = function(e4, t5) {
              var r3 = this.gullet.scanArgument(e4);
              if (null == r3)
                return null;
              var n3 = this.mode;
              t5 && this.switchMode(t5), this.gullet.beginGroup();
              var a2 = this.parseExpression(false, "EOF");
              this.expect("EOF"), this.gullet.endGroup();
              var i2 = { type: "ordgroup", mode: this.mode, loc: r3.loc, body: a2 };
              return t5 && this.switchMode(n3), i2;
            }, t4.parseGroup = function(e4, t5) {
              var r3, a2 = this.fetch(), i2 = a2.text;
              if ("{" === i2 || "\\begingroup" === i2) {
                this.consume();
                var o2 = "{" === i2 ? "}" : "\\endgroup";
                this.gullet.beginGroup();
                var s2 = this.parseExpression(false, o2), l2 = this.fetch();
                this.expect(o2), this.gullet.endGroup(), r3 = { type: "ordgroup", mode: this.mode, loc: Mr.range(a2, l2), body: s2, semisimple: "\\begingroup" === i2 || void 0 };
              } else if (null == (r3 = this.parseFunction(t5, e4) || this.parseSymbol()) && "\\" === i2[0] && !Cn.hasOwnProperty(i2)) {
                if (this.settings.throwOnError)
                  throw new n2("Undefined control sequence: " + i2, a2);
                r3 = this.formatUnsupportedCmd(i2), this.consume();
              }
              return r3;
            }, t4.formLigatures = function(e4) {
              for (var t5 = e4.length - 1, r3 = 0; r3 < t5; ++r3) {
                var n3 = e4[r3], a2 = n3.text;
                "-" === a2 && "-" === e4[r3 + 1].text && (r3 + 1 < t5 && "-" === e4[r3 + 2].text ? (e4.splice(r3, 3, { type: "textord", mode: "text", loc: Mr.range(n3, e4[r3 + 2]), text: "---" }), t5 -= 2) : (e4.splice(r3, 2, { type: "textord", mode: "text", loc: Mr.range(n3, e4[r3 + 1]), text: "--" }), t5 -= 1)), "'" !== a2 && "`" !== a2 || e4[r3 + 1].text !== a2 || (e4.splice(r3, 2, { type: "textord", mode: "text", loc: Mr.range(n3, e4[r3 + 1]), text: a2 + a2 }), t5 -= 1);
              }
            }, t4.parseSymbol = function() {
              var e4 = this.fetch(), t5 = e4.text;
              if (/^\\verb[^a-zA-Z]/.test(t5)) {
                this.consume();
                var r3 = t5.slice(5), a2 = "*" === r3.charAt(0);
                if (a2 && (r3 = r3.slice(1)), r3.length < 2 || r3.charAt(0) !== r3.slice(-1))
                  throw new n2("\\verb assertion failed --\n                    please report what input caused this bug");
                return { type: "verb", mode: "text", body: r3 = r3.slice(1, -1), star: a2 };
              }
              Rn.hasOwnProperty(t5[0]) && !ne[this.mode][t5[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t5[0] + '" used in math mode', e4), t5 = Rn[t5[0]] + t5.substr(1));
              var i2, o2 = bn.exec(t5);
              if (o2 && ("i" === (t5 = t5.substring(0, o2.index)) ? t5 = "ı" : "j" === t5 && (t5 = "ȷ")), ne[this.mode][t5]) {
                this.settings.strict && "math" === this.mode && "ÐÞþ".indexOf(t5) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t5[0] + '" used in math mode', e4);
                var s2, l2 = ne[this.mode][t5].group, h2 = Mr.range(e4);
                if (ee.hasOwnProperty(l2)) {
                  var c2 = l2;
                  s2 = { type: "atom", mode: this.mode, family: c2, loc: h2, text: t5 };
                } else
                  s2 = { type: l2, mode: this.mode, loc: h2, text: t5 };
                i2 = s2;
              } else {
                if (!(t5.charCodeAt(0) >= 128))
                  return null;
                this.settings.strict && (S(t5.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t5[0] + '" used in math mode', e4) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t5[0] + '" (' + t5.charCodeAt(0) + ")", e4)), i2 = { type: "textord", mode: "text", loc: Mr.range(e4), text: t5 };
              }
              if (this.consume(), o2)
                for (var m2 = 0; m2 < o2[0].length; m2++) {
                  var u2 = o2[0][m2];
                  if (!On[u2])
                    throw new n2("Unknown accent ' " + u2 + "'", e4);
                  var p2 = On[u2][this.mode] || On[u2].text;
                  if (!p2)
                    throw new n2("Accent " + u2 + " unsupported in " + this.mode + " mode", e4);
                  i2 = { type: "accent", mode: this.mode, loc: Mr.range(e4), label: p2, isStretchy: false, isShifty: true, base: i2 };
                }
              return i2;
            }, e3;
          }();
          Hn.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
          var En = function(e3, t4) {
            if (!("string" == typeof e3 || e3 instanceof String))
              throw new TypeError("KaTeX can only parse string typed expression");
            var r3 = new Hn(e3, t4);
            delete r3.gullet.macros.current["\\df@tag"];
            var a2 = r3.parse();
            if (delete r3.gullet.macros.current["\\current@color"], delete r3.gullet.macros.current["\\color"], r3.gullet.macros.get("\\df@tag")) {
              if (!t4.displayMode)
                throw new n2("\\tag works only in display equations");
              a2 = [{ type: "tag", mode: "text", body: a2, tag: r3.subparse([new zr("\\df@tag")]) }];
            }
            return a2;
          }, Ln = function(e3, t4, r3) {
            t4.textContent = "";
            var n3 = Pn(e3, r3).toNode();
            t4.appendChild(n3);
          };
          "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && formatAppLog("warn", "at uni-app/components/mp-html/latex/katex.min.js:1", "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Ln = function() {
            throw new n2("KaTeX doesn't work in quirks mode.");
          });
          var Dn = function(e3, t4, r3) {
            if (r3.throwOnError || !(e3 instanceof n2))
              throw e3;
            var a2 = Ve.makeSpan(["katex-error"], [new $(t4)]);
            return a2.setAttribute("title", e3.toString()), a2.setAttribute("style", "color:" + r3.errorColor), a2;
          }, Pn = function(e3, t4) {
            var r3 = new m(t4);
            try {
              return function(e4, t5, r4) {
                var n3, a2 = Mt(r4);
                if ("mathml" === r4.output)
                  return St(e4, t5, a2, r4.displayMode, true);
                if ("html" === r4.output) {
                  var i2 = ut(e4, a2);
                  n3 = Ve.makeSpan(["katex"], [i2]);
                } else {
                  var o2 = St(e4, t5, a2, r4.displayMode, false), s2 = ut(e4, a2);
                  n3 = Ve.makeSpan(["katex"], [o2, s2]);
                }
                return zt(n3, r4);
              }(En(e3, r3), e3, r3);
            } catch (t5) {
              return Dn(t5, e3, r3);
            }
          }, Fn = { version: "0.16.0", render: Ln, renderToString: function(e3, t4) {
            return Pn(e3, t4).toMarkup();
          }, ParseError: n2, SETTINGS_SCHEMA: h, __parse: function(e3, t4) {
            var r3 = new m(t4);
            return En(e3, r3);
          }, __renderToDomTree: Pn, __renderToHTMLTree: function(e3, t4) {
            var r3 = new m(t4);
            try {
              return function(e4, t5, r4) {
                var n3 = ut(e4, Mt(r4)), a2 = Ve.makeSpan(["katex"], [n3]);
                return zt(a2, r4);
              }(En(e3, r3), 0, r3);
            } catch (t5) {
              return Dn(t5, e3, r3);
            }
          }, __setFontMetrics: function(e3, t4) {
            A[e3] = t4;
          }, __defineSymbol: ae, __defineMacro: Sr, __domTree: { Span: Y, Anchor: X, SymbolNode: $, SvgNode: Z, PathNode: K, LineNode: J } };
          return t3 = t3.default;
        }();
      }, e.exports = n();
    }, function(e, t2, r) {
    }]);
  }
  const parse = t();
  function Latex() {
  }
  Latex.prototype.onParse = function(node2, vm) {
    if (!vm.options.editable && node2.type === "text" && /\$(.+?)\$/.test(node2.text)) {
      delete node2.type;
      node2.name = "span";
      node2.attrs = {};
      node2.children = node2.text.split("$").map((str, index2) => {
        if ((index2 + 1) % 2 === 0) {
          return {
            name: "span",
            attrs: {},
            f: "display:inline-block",
            children: parse.default(str)
          };
        }
        return {
          type: "text",
          text: str
        };
      }).filter((node3) => node3.name || node3.text);
      delete node2.text;
    }
  };
  function Search(vm) {
    vm.search = function(key2, anchor, style = "background-color:yellow") {
      const res = [];
      const stack = [];
      (function traversal(nodes) {
        for (let i = 0; i < nodes.length; i++) {
          let node2 = nodes[i];
          if (node2.type === "text" && key2) {
            const text = node2.text;
            const arr = text.split(key2);
            if (arr.length > 1) {
              node2 = {
                name: "span",
                attrs: {},
                type: "node",
                c: 1,
                s: 1,
                children: []
              };
              vm.$set(nodes, i, node2);
              for (let j = 0; j < arr.length; j++) {
                if (arr[j]) {
                  node2.children.push({
                    type: "text",
                    text: arr[j]
                  });
                }
                if (j !== arr.length - 1) {
                  node2.children.push({
                    name: "span",
                    attrs: {
                      id: anchor ? "search" + (res.length + 1) : void 0,
                      // 用于锚点的 id
                      style
                    },
                    c: 1,
                    children: [{
                      type: "text",
                      text: key2 instanceof RegExp ? key2.exec(text)[0] : key2
                    }]
                  });
                  res.push(node2.children[node2.children.length - 1].attrs);
                }
              }
              if (key2 instanceof RegExp) {
                key2.exec(text);
              }
              if (anchor) {
                for (let l = stack.length; l--; ) {
                  if (stack[l].c) {
                    break;
                  } else {
                    vm.$set(stack[l], "c", 1);
                  }
                }
              }
            }
          } else if (node2.s) {
            let text = "";
            for (let k = 0; k < node2.children.length; k++) {
              const child = node2.children[k];
              if (child.text) {
                text += child.text;
              } else {
                text += child.children[0].text;
              }
            }
            vm.$set(nodes, i, {
              type: "text",
              text
            });
            if (key2 && (key2 instanceof RegExp ? key2.test(text) : text.includes(key2))) {
              i--;
            }
          } else if (node2.children) {
            stack.push(node2);
            traversal(node2.children);
            stack.pop();
          }
        }
      })(vm.nodes);
      return new Promise(function(resolve) {
        setTimeout(() => {
          resolve({
            num: res.length,
            // 结果数量
            /**
             * @description 高亮某一个结果
             * @param {number} i 第几个
             * @param {string} hlstyle 高亮的样式
             */
            highlight(i, hlstyle = "background-color:#FF9632") {
              if (i < 1 || i > res.length)
                return;
              if (this.last) {
                res[this.last - 1].style = style;
              }
              this.last = i;
              res[i - 1].style = hlstyle;
            },
            /**
             * @description 跳转到搜索结果
             * @param {number} i 第几个
             * @param {number} offset 偏移量
             */
            jump: anchor ? (i, offset) => {
              if (i > 0 && i <= res.length) {
                vm.navigateTo("search" + i, offset);
              }
            } : void 0
          });
        }, 200);
      });
    };
  }
  const blank = {
    " ": true,
    "\n": true,
    "	": true,
    "\r": true,
    "\f": true
  };
  function Parser() {
    this.styles = [];
    this.selectors = [];
  }
  Parser.prototype.parse = function(content) {
    new Lexer(this).parse(content);
    return this.styles;
  };
  Parser.prototype.onSelector = function(name) {
    if (name.includes("[") || name.includes("*") || name.includes("@"))
      return;
    const selector = {};
    if (name.includes(":")) {
      const info = name.split(":");
      const pseudo = info.pop();
      if (pseudo === "before" || pseudo === "after") {
        selector.pseudo = pseudo;
        name = info[0];
      } else
        return;
    }
    function splitItem(str) {
      const arr = [];
      let i, start;
      for (i = 1, start = 0; i < str.length; i++) {
        if (str[i] === "." || str[i] === "#") {
          arr.push(str.substring(start, i));
          start = i;
        }
      }
      if (!arr.length) {
        return str;
      } else {
        arr.push(str.substring(start, i));
        return arr;
      }
    }
    if (name.includes(" ")) {
      selector.list = [];
      const list = name.split(" ");
      for (let i = 0; i < list.length; i++) {
        if (list[i].length) {
          const arr = list[i].split(">");
          for (let j = 0; j < arr.length; j++) {
            selector.list.push(splitItem(arr[j]));
            if (j < arr.length - 1) {
              selector.list.push(">");
            }
          }
        }
      }
    } else {
      selector.key = splitItem(name);
    }
    this.selectors.push(selector);
  };
  Parser.prototype.onContent = function(content) {
    for (let i = 0; i < this.selectors.length; i++) {
      this.selectors[i].style = content;
    }
    this.styles = this.styles.concat(this.selectors);
    this.selectors = [];
  };
  function Lexer(handler) {
    this.selector = "";
    this.style = "";
    this.handler = handler;
  }
  Lexer.prototype.parse = function(content) {
    this.i = 0;
    this.content = content;
    this.state = this.blank;
    for (let len = content.length; this.i < len; this.i++) {
      this.state(content[this.i]);
    }
  };
  Lexer.prototype.comment = function() {
    this.i = this.content.indexOf("*/", this.i) + 1;
    if (!this.i) {
      this.i = this.content.length;
    }
  };
  Lexer.prototype.blank = function(c) {
    if (!blank[c]) {
      if (c === "/" && this.content[this.i + 1] === "*") {
        this.comment();
        return;
      }
      this.selector += c;
      this.state = this.name;
    }
  };
  Lexer.prototype.name = function(c) {
    if (c === "/" && this.content[this.i + 1] === "*") {
      this.comment();
      return;
    }
    if (c === "{" || c === "," || c === ";") {
      this.handler.onSelector(this.selector.trimEnd());
      this.selector = "";
      if (c !== "{") {
        while (blank[this.content[++this.i]])
          ;
      }
      if (this.content[this.i] === "{") {
        this.floor = 1;
        this.state = this.val;
      } else {
        this.selector += this.content[this.i];
      }
    } else if (blank[c]) {
      this.selector += " ";
    } else {
      this.selector += c;
    }
  };
  Lexer.prototype.val = function(c) {
    if (c === "/" && this.content[this.i + 1] === "*") {
      this.comment();
      return;
    }
    if (c === "{") {
      this.floor++;
    } else if (c === "}") {
      this.floor--;
      if (!this.floor) {
        this.handler.onContent(this.style);
        this.style = "";
        this.state = this.blank;
        return;
      }
    }
    this.style += c;
  };
  function Style() {
    this.styles = [];
  }
  Style.prototype.onParse = function(node2, vm) {
    if (node2.name === "style" && node2.children.length && node2.children[0].type === "text") {
      this.styles = this.styles.concat(new Parser().parse(node2.children[0].text));
    } else if (node2.name) {
      let matched = ["", "", "", ""];
      for (let i = 0, len = this.styles.length; i < len; i++) {
        const item = this.styles[i];
        let res = match(node2, item.key || item.list[item.list.length - 1]);
        let j;
        if (res) {
          if (!item.key) {
            j = item.list.length - 2;
            for (let k = vm.stack.length; j >= 0 && k--; ) {
              if (item.list[j] === ">") {
                if (j < 1 || j > item.list.length - 2)
                  break;
                if (match(vm.stack[k], item.list[j - 1])) {
                  j -= 2;
                } else {
                  j++;
                }
              } else if (match(vm.stack[k], item.list[j])) {
                j--;
              }
            }
            res = 4;
          }
          if (item.key || j < 0) {
            if (item.pseudo && node2.children) {
              let text;
              item.style = item.style.replace(/content:([^;]+)/, (_, $1) => {
                text = $1.replace(/['"]/g, "").replace(/attr\((.+?)\)/, (_2, $12) => node2.attrs[$12.trim()] || "").replace(/\\(\w{4})/, (_2, $12) => String.fromCharCode(parseInt($12, 16)));
                return "";
              });
              const pseudo = {
                name: "span",
                attrs: {
                  style: item.style
                },
                children: [{
                  type: "text",
                  text
                }]
              };
              if (item.pseudo === "before") {
                node2.children.unshift(pseudo);
              } else {
                node2.children.push(pseudo);
              }
            } else {
              matched[res - 1] += item.style + (item.style[item.style.length - 1] === ";" ? "" : ";");
            }
          }
        }
      }
      matched = matched.join("");
      if (matched.length > 2) {
        node2.attrs.style = matched + (node2.attrs.style || "");
      }
    }
  };
  function match(node2, keys) {
    function matchItem(key2) {
      if (key2[0] === "#") {
        if (node2.attrs.id && node2.attrs.id.trim() === key2.substr(1))
          return 3;
      } else if (key2[0] === ".") {
        key2 = key2.substr(1);
        const selectors = (node2.attrs.class || "").split(" ");
        for (let i = 0; i < selectors.length; i++) {
          if (selectors[i].trim() === key2)
            return 2;
        }
      } else if (node2.name === key2) {
        return 1;
      }
      return 0;
    }
    if (keys instanceof Array) {
      let res = 0;
      for (let j = 0; j < keys.length; j++) {
        const tmp = matchItem(keys[j]);
        if (!tmp)
          return 0;
        if (tmp > res) {
          res = tmp;
        }
      }
      return res;
    }
    return matchItem(keys);
  }
  const data = {
    name: "imgcache",
    prefix: "imgcache_"
  };
  function ImgCache(vm) {
    this.vm = vm;
    this.i = 0;
    vm.imgCache = {
      get list() {
        return uni.getStorageInfoSync().keys.filter((key2) => key2.startsWith(data.prefix)).map((key2) => key2.split(data.prefix)[1]);
      },
      get(url) {
        return uni.getStorageSync(data.prefix + url);
      },
      delete(url) {
        const path = uni.getStorageSync(data.prefix + url);
        if (!path)
          return false;
        plus.io.resolveLocalFileSystemURL(path, (entry) => {
          entry.remove();
        });
        uni.removeStorageSync(data.prefix + url);
        return true;
      },
      async add(url) {
        const filename = await download(url);
        if (filename) {
          uni.setStorageSync(data.prefix + url, filename);
          return "file://" + plus.io.convertLocalFileSystemURL(filename);
        }
        return null;
      },
      clear() {
        uni.getStorageInfoSync().keys.filter((key2) => key2.startsWith(data.prefix)).forEach((key2) => {
          uni.removeStorageSync(key2);
        });
        plus.io.resolveLocalFileSystemURL(`_doc/${data.name}/`, (entry) => {
          entry.removeRecursively(
            (entry2) => {
              formatAppLog("log", "at uni-app/components/mp-html/img-cache/index.js:46", `${data.name}缓存删除成功`, entry2);
            },
            (e) => {
              formatAppLog("log", "at uni-app/components/mp-html/img-cache/index.js:49", `${data.name}缓存删除失败`, e);
            }
          );
        });
      }
    };
  }
  ImgCache.prototype.onParse = function(node2, parser) {
    if (this.vm.ImgCache && node2.name === "img" && node2.attrs.src && /^https?:\/\//.test(node2.attrs.src)) {
      const src = node2.attrs.src;
      node2.attrs.src = "";
      node2.attrs.i = this.vm.imgList.length + this.i++;
      parser.expose();
      async function getUrl(path) {
        if (await resolveFile(path))
          return path;
        const filename = await download(src);
        filename && uni.setStorageSync(data.prefix + src, filename);
        return filename;
      }
      uni.getStorage({
        key: data.prefix + src,
        success: async (res) => {
          const path = await getUrl(res.data);
          const url = path ? "file://" + plus.io.convertLocalFileSystemURL(path) : src;
          node2.attrs.src = url;
          this.vm.imgList[node2.attrs.i] = path || src;
        },
        fail: async () => {
          const path = await getUrl();
          const url = path ? "file://" + plus.io.convertLocalFileSystemURL(path) : src;
          node2.attrs.src = url;
          this.vm.imgList[node2.attrs.i] = path || src;
        }
      });
    }
  };
  const taskQueue = /* @__PURE__ */ new Set();
  function download(url) {
    return new Promise((resolve) => {
      if (taskQueue.has(url))
        return;
      taskQueue.add(url);
      const suffix = /.+\.(jpg|jpeg|png|bmp|gif|webp)/.exec(url);
      const name = `${makeid(8)}_${Date.now()}${suffix ? "." + suffix[1] : ""}`;
      const task = plus.downloader.createDownload(
        url,
        { filename: `_doc/${data.name}/${name}` },
        (download2, status) => {
          taskQueue.delete(url);
          resolve(status === 200 ? download2.filename : null);
        }
      );
      task.start();
    });
  }
  function resolveFile(url) {
    return new Promise((resolve) => {
      plus.io.resolveLocalFileSystemURL(url, resolve, () => resolve(null));
    });
  }
  function makeid(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  function Card(vm) {
  }
  const config = {
    // 普通标签的菜单项
    node: ["大小", "颜色", "斜体", "粗体", "下划线", "居中", "缩进", "上移", "下移", "删除"],
    // 可以设置的文字颜色，此项可以添加 css 颜色
    color: ["red", "yellow", "blue", "green", "gray", "white", "black"],
    // 图片的菜单项
    img: ["换图", "宽度", "超链接", "预览图", "禁用预览", "上移", "下移", "删除"],
    // 链接的菜单项
    link: ["更换链接", "上移", "下移", "删除"],
    // 音视频的菜单项
    media: ["封面", "循环", "自动播放", "上移", "下移", "删除"],
    // 卡片的菜单项
    card: ["上移", "下移", "删除"]
  };
  function Editable(vm) {
    this.vm = vm;
    this.editHistory = [];
    this.editI = -1;
    vm._mask = [];
    vm._setData = function(path, val) {
      const paths = path.split(".");
      let target = vm;
      for (let i = 0; i < paths.length - 1; i++) {
        target = target[paths[i]];
      }
      vm.$set(target, paths.pop(), val);
    };
    const move = (num) => {
      setTimeout(() => {
        const item = this.editHistory[this.editI + num];
        if (item) {
          this.editI += num;
          vm._setData(item.key, item.value);
        }
      }, 200);
    };
    vm.undo = () => move(-1);
    vm.redo = () => move(1);
    vm._editVal = (path, oldVal, newVal, set) => {
      while (this.editI < this.editHistory.length - 1) {
        this.editHistory.pop();
      }
      while (this.editHistory.length > 30) {
        this.editHistory.pop();
        this.editI--;
      }
      const last = this.editHistory[this.editHistory.length - 1];
      if (!last || last.key !== path) {
        if (last) {
          this.editHistory.pop();
          this.editI--;
        }
        this.editHistory.push({
          key: path,
          value: oldVal
        });
        this.editI++;
      }
      this.editHistory.push({
        key: path,
        value: newVal
      });
      this.editI++;
      if (set) {
        vm._setData(path, newVal);
      }
    };
    vm._getItem = function(node2, up, down) {
      let items;
      let i;
      if (node2 === "color") {
        return config.color;
      }
      if (node2.name === "img") {
        items = config.img.slice(0);
        if (!vm.getSrc) {
          i = items.indexOf("换图");
          if (i !== -1) {
            items.splice(i, 1);
          }
          i = items.indexOf("超链接");
          if (i !== -1) {
            items.splice(i, 1);
          }
          i = items.indexOf("预览图");
          if (i !== -1) {
            items.splice(i, 1);
          }
        }
        i = items.indexOf("禁用预览");
        if (i !== -1 && node2.attrs.ignore) {
          items[i] = "启用预览";
        }
      } else if (node2.name === "a") {
        items = config.link.slice(0);
        if (!vm.getSrc) {
          i = items.indexOf("更换链接");
          if (i !== -1) {
            items.splice(i, 1);
          }
        }
      } else if (node2.name === "video" || node2.name === "audio") {
        items = config.media.slice(0);
        i = items.indexOf("封面");
        if (!vm.getSrc && i !== -1) {
          items.splice(i, 1);
        }
        i = items.indexOf("循环");
        if (node2.attrs.loop && i !== -1) {
          items[i] = "不循环";
        }
        i = items.indexOf("自动播放");
        if (node2.attrs.autoplay && i !== -1) {
          items[i] = "不自动播放";
        }
      } else if (node2.name === "card") {
        items = config.card.slice(0);
      } else {
        items = config.node.slice(0);
      }
      if (!up) {
        i = items.indexOf("上移");
        if (i !== -1) {
          items.splice(i, 1);
        }
      }
      if (!down) {
        i = items.indexOf("下移");
        if (i !== -1) {
          items.splice(i, 1);
        }
      }
      return items;
    };
    vm._tooltip = function(obj) {
      vm.$set(vm, "tooltip", {
        top: obj.top,
        items: obj.items
      });
      vm._tooltipcb = obj.success;
    };
    vm._slider = function(obj) {
      vm.$set(vm, "slider", {
        min: obj.min,
        max: obj.max,
        value: obj.value,
        top: obj.top
      });
      vm._slideringcb = obj.changing;
      vm._slidercb = obj.change;
    };
    vm._color = function(obj) {
      vm.$set(vm, "color", {
        items: obj.items,
        top: obj.top
      });
      vm._colorcb = obj.success;
    };
    vm._maskTap = function() {
      while (vm._mask.length) {
        vm._mask.pop()();
      }
      if (vm.tooltip) {
        vm.$set(vm, "tooltip", null);
      }
      if (vm.slider) {
        vm.$set(vm, "slider", null);
      }
      if (vm.color) {
        vm.$set(vm, "color", null);
      }
    };
    function insert(node2) {
      if (vm._edit) {
        vm._edit.insert(node2);
      } else {
        const nodes = vm.nodes.slice(0);
        nodes.push(node2);
        vm._editVal("nodes", vm.nodes, nodes, true);
      }
    }
    vm.insertHtml = (html) => {
      this.inserting = true;
      const arr = new Parser$1(vm).parse(html);
      this.inserting = void 0;
      for (let i = 0; i < arr.length; i++) {
        insert(arr[i]);
      }
    };
    vm.insertImg = function() {
      vm.getSrc && vm.getSrc("img").then((src) => {
        if (typeof src === "string") {
          src = [src];
        }
        const parser = new Parser$1(vm);
        for (let i = 0; i < src.length; i++) {
          insert({
            name: "img",
            attrs: {
              src: parser.getUrl(src[i])
            }
          });
        }
      }).catch(() => {
      });
    };
    vm.insertLink = function() {
      vm.getSrc && vm.getSrc("link").then((url) => {
        insert({
          name: "a",
          attrs: {
            href: url
          },
          children: [{
            type: "text",
            text: url
          }]
        });
      }).catch(() => {
      });
    };
    vm.insertTable = function(rows, cols) {
      const table = {
        name: "table",
        attrs: {
          style: "display:table;width:100%;margin:10px 0;text-align:center;border-spacing:0;border-collapse:collapse;border:1px solid gray"
        },
        children: []
      };
      for (let i = 0; i < rows; i++) {
        const tr = {
          name: "tr",
          attrs: {},
          children: []
        };
        for (let j = 0; j < cols; j++) {
          tr.children.push({
            name: "td",
            attrs: {
              style: "padding:2px;border:1px solid gray"
            },
            children: [{
              type: "text",
              text: ""
            }]
          });
        }
        table.children.push(tr);
      }
      insert(table);
    };
    function insertMedia(node2) {
      if (typeof node2.src === "string") {
        node2.src = [node2.src];
      }
      const parser = new Parser$1(vm);
      for (let i = 0; i < node2.src.length; i++) {
        node2.src[i] = parser.getUrl(node2.src[i]);
      }
      insert({
        name: "div",
        attrs: {
          style: "text-align:center"
        },
        children: [node2]
      });
    }
    vm.insertVideo = function() {
      vm.getSrc && vm.getSrc("video").then((src) => {
        insertMedia({
          name: "video",
          attrs: {
            controls: "T"
          },
          children: [],
          src,
          html: `<video src="${src}" style="width:100%;height:100%"></video>`
        });
      }).catch(() => {
      });
    };
    vm.insertAudio = function() {
      vm.getSrc && vm.getSrc("audio").then((attrs) => {
        let src;
        if (attrs.src) {
          src = attrs.src;
          attrs.src = void 0;
        } else {
          src = attrs;
          attrs = {};
        }
        attrs.controls = "T";
        insertMedia({
          name: "audio",
          attrs,
          children: [],
          src
        });
      }).catch(() => {
      });
    };
    vm.insertText = function() {
      insert({
        name: "p",
        attrs: {},
        children: [{
          type: "text",
          text: ""
        }]
      });
    };
    vm.clear = function() {
      vm._maskTap();
      vm._edit = void 0;
      vm.$set(vm, "nodes", [{
        name: "p",
        attrs: {},
        children: [{
          type: "text",
          text: ""
        }]
      }]);
    };
    vm.getContent = function() {
      let html = "";
      (function traversal(nodes, table) {
        for (let i = 0; i < nodes.length; i++) {
          let item = nodes[i];
          if (item.type === "text") {
            html += item.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\xa0/g, "&nbsp;");
          } else {
            if (item.name === "img") {
              item.attrs.i = "";
              if ((item.attrs.src || "").includes("data:image/svg+xml;utf8,")) {
                html += item.attrs.src.substr(24).replace(/%23/g, "#").replace("<svg", '<svg style="' + (item.attrs.style || "") + '"');
                continue;
              }
            } else if (item.name === "video" || item.name === "audio") {
              item = JSON.parse(JSON.stringify(item));
              if (item.src.length > 1) {
                item.children = [];
                for (let j = 0; j < item.src.length; j++) {
                  item.children.push({
                    name: "source",
                    attrs: {
                      src: item.src[j]
                    }
                  });
                }
              } else {
                item.attrs.src = item.src[0];
              }
            } else if (item.name === "div" && (item.attrs.style || "").includes("overflow:auto") && (item.children[0] || {}).name === "table") {
              item = item.children[0];
            }
            if (item.name === "table") {
              item = JSON.parse(JSON.stringify(item));
              table = item.attrs;
              if ((item.attrs.style || "").includes("display:grid")) {
                item.attrs.style = item.attrs.style.split("display:grid")[0];
                const children = [{
                  name: "tr",
                  attrs: {},
                  children: []
                }];
                for (let j = 0; j < item.children.length; j++) {
                  item.children[j].attrs.style = item.children[j].attrs.style.replace(/grid-[^;]+;*/g, "");
                  if (item.children[j].r !== children.length) {
                    children.push({
                      name: "tr",
                      attrs: {},
                      children: [item.children[j]]
                    });
                  } else {
                    children[children.length - 1].children.push(item.children[j]);
                  }
                }
                item.children = children;
              }
            }
            html += "<" + item.name;
            for (const attr in item.attrs) {
              let val = item.attrs[attr];
              if (!val)
                continue;
              if (val === "T" || val === true) {
                html += " " + attr;
                continue;
              } else if (item.name[0] === "t" && attr === "style" && table) {
                val = val.replace(/;*display:table[^;]*/, "");
                if (table.border) {
                  val = val.replace(/border[^;]+;*/g, ($) => $.includes("collapse") ? $ : "");
                }
                if (table.cellpadding) {
                  val = val.replace(/padding[^;]+;*/g, "");
                }
                if (!val)
                  continue;
              }
              html += " " + attr + '="' + val.replace(/"/g, "&quot;") + '"';
            }
            html += ">";
            if (item.children) {
              traversal(item.children, table);
              html += "</" + item.name + ">";
            }
          }
        }
      })(vm.nodes);
      for (let i = vm.plugins.length; i--; ) {
        if (vm.plugins[i].onGetContent) {
          html = vm.plugins[i].onGetContent(html) || html;
        }
      }
      return html;
    };
  }
  Editable.prototype.onUpdate = function(content, config2) {
    if (this.vm.editable) {
      this.vm._maskTap();
      config2.entities.amp = "&";
      if (!this.inserting) {
        this.vm._edit = void 0;
        if (!content) {
          setTimeout(() => {
            this.vm.$set(this.vm, "nodes", [{
              name: "p",
              attrs: {},
              children: [{
                type: "text",
                text: ""
              }]
            }]);
          }, 0);
        }
      }
    }
  };
  Editable.prototype.onParse = function(node2) {
    if (this.vm.editable && (node2.name === "td" || node2.name === "th") && !this.vm.getText(node2.children)) {
      node2.children.push({
        type: "text",
        text: ""
      });
    }
  };
  const plugins = [Markdown, Emoji, Highlight, Latex, Search, Style, ImgCache, Card, Editable];
  const _sfc_main$d = {
    name: "mp-html",
    data() {
      return {
        tooltip: null,
        slider: null,
        color: null,
        nodes: []
      };
    },
    props: {
      editable: Boolean,
      placeholder: String,
      ImgCache: Boolean,
      markdown: Boolean,
      containerStyle: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      copyLink: {
        type: [Boolean, String],
        default: true
      },
      domain: String,
      errorImg: {
        type: String,
        default: ""
      },
      lazyLoad: {
        type: [Boolean, String],
        default: false
      },
      loadingImg: {
        type: String,
        default: ""
      },
      pauseVideo: {
        type: [Boolean, String],
        default: true
      },
      previewImg: {
        type: [Boolean, String],
        default: true
      },
      scrollTable: [Boolean, String],
      selectable: [Boolean, String],
      setTitle: {
        type: [Boolean, String],
        default: true
      },
      showImgMenu: {
        type: [Boolean, String],
        default: true
      },
      tagStyle: Object,
      useAnchor: [Boolean, Number]
    },
    emits: ["load", "ready", "imgtap", "linktap", "play", "error"],
    components: {
      node
    },
    watch: {
      editable(val) {
        this.setContent(val ? this.content : this.getContent());
        if (!val)
          this._maskTap();
      },
      content(content) {
        this.setContent(content);
      }
    },
    created() {
      this.plugins = [];
      for (let i = plugins.length; i--; ) {
        this.plugins.push(new plugins[i](this));
      }
    },
    mounted() {
      if ((this.content || this.editable) && !this.nodes.length) {
        this.setContent(this.content);
      }
    },
    beforeDestroy() {
      this._hook("onDetached");
    },
    methods: {
      _containTap() {
        if (!this._lock && !this.slider && !this.color) {
          this._edit = void 0;
          this._maskTap();
        }
      },
      _tooltipTap(e) {
        this._tooltipcb(e.currentTarget.dataset.i);
        this.$set(this, "tooltip", null);
      },
      _sliderChanging(e) {
        this._slideringcb(e.detail.value);
      },
      _sliderChange(e) {
        this._slidercb(e.detail.value);
      },
      _colorTap(e) {
        this._colorcb(e.currentTarget.dataset.i);
        this.$set(this, "color", null);
      },
      /**
       * @description 将锚点跳转的范围限定在一个 scroll-view 内
       * @param {Object} page scroll-view 所在页面的示例
       * @param {String} selector scroll-view 的选择器
       * @param {String} scrollTop scroll-view scroll-top 属性绑定的变量名
       */
      in(page, selector, scrollTop) {
        if (page && selector && scrollTop) {
          this._in = {
            page,
            selector,
            scrollTop
          };
        }
      },
      /**
       * @description 锚点跳转
       * @param {String} id 要跳转的锚点 id
       * @param {Number} offset 跳转位置的偏移量
       * @returns {Promise}
       */
      navigateTo(id, offset) {
        id = this._ids[decodeURI(id)] || id;
        return new Promise((resolve, reject) => {
          if (!this.useAnchor) {
            reject(Error("Anchor is disabled"));
            return;
          }
          offset = offset || parseInt(this.useAnchor) || 0;
          let deep = " ";
          const selector = uni.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "._root") + (id ? `${deep}#${id}` : "")).boundingClientRect();
          if (this._in) {
            selector.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect();
          } else {
            selector.selectViewport().scrollOffset();
          }
          selector.exec((res) => {
            if (!res[0]) {
              reject(Error("Label not found"));
              return;
            }
            const scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;
            if (this._in) {
              this._in.page[this._in.scrollTop] = scrollTop;
            } else {
              uni.pageScrollTo({
                scrollTop,
                duration: 300
              });
            }
            resolve();
          });
        });
      },
      /**
       * @description 获取文本内容
       * @return {String}
       */
      getText(nodes) {
        let text = "";
        (function traversal(nodes2) {
          for (let i = 0; i < nodes2.length; i++) {
            const node2 = nodes2[i];
            if (node2.type === "text") {
              text += node2.text.replace(/&amp;/g, "&");
            } else if (node2.name === "br") {
              text += "\n";
            } else {
              const isBlock = node2.name === "p" || node2.name === "div" || node2.name === "tr" || node2.name === "li" || node2.name[0] === "h" && node2.name[1] > "0" && node2.name[1] < "7";
              if (isBlock && text && text[text.length - 1] !== "\n") {
                text += "\n";
              }
              if (node2.children) {
                traversal(node2.children);
              }
              if (isBlock && text[text.length - 1] !== "\n") {
                text += "\n";
              } else if (node2.name === "td" || node2.name === "th") {
                text += "	";
              }
            }
          }
        })(nodes || this.nodes);
        return text;
      },
      /**
       * @description 获取内容大小和位置
       * @return {Promise}
       */
      getRect() {
        return new Promise((resolve, reject) => {
          uni.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res) => res[0] ? resolve(res[0]) : reject(Error("Root label not found")));
        });
      },
      /**
       * @description 暂停播放媒体
       */
      pauseMedia() {
        for (let i = (this._videos || []).length; i--; ) {
          this._videos[i].pause();
        }
        const command = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].pause()';
        let page = this.$parent;
        while (!page.$scope)
          page = page.$parent;
        page.$scope.$getAppWebview().evalJS(command);
      },
      /**
       * @description 设置媒体播放速率
       * @param {Number} rate 播放速率
       */
      setPlaybackRate(rate) {
        this.playbackRate = rate;
        for (let i = (this._videos || []).length; i--; ) {
          this._videos[i].playbackRate(rate);
        }
        const command = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].playbackRate=' + rate;
        let page = this.$parent;
        while (!page.$scope)
          page = page.$parent;
        page.$scope.$getAppWebview().evalJS(command);
      },
      /**
       * @description 设置内容
       * @param {String} content html 内容
       * @param {Boolean} append 是否在尾部追加
       */
      setContent(content, append) {
        if (!append || !this.imgList) {
          this.imgList = [];
        }
        const nodes = new Parser$1(this).parse(content);
        this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
        this._videos = [];
        this.$nextTick(() => {
          this._hook("onLoad");
          this.$emit("load");
        });
        if (this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
          let height = 0;
          const callback = (rect) => {
            if (!rect || !rect.height)
              rect = {};
            if (rect.height === height) {
              this.$emit("ready", rect);
            } else {
              height = rect.height;
              setTimeout(() => {
                this.getRect().then(callback).catch(callback);
              }, 350);
            }
          };
          this.getRect().then(callback).catch(callback);
        } else {
          if (!this.imgList._unloadimgs) {
            this.getRect().then((rect) => {
              this.$emit("ready", rect);
            }).catch(() => {
              this.$emit("ready", {});
            });
          }
        }
      },
      /**
       * @description 调用插件钩子函数
       */
      _hook(name) {
        for (let i = plugins.length; i--; ) {
          if (this.plugins[i][name]) {
            this.plugins[i][name]();
          }
        }
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        id: "_root",
        class: vue.normalizeClass(($props.selectable ? "_select " : "") + "_root"),
        style: vue.normalizeStyle(($props.editable ? "min-height:200px;" : "") + $props.containerStyle),
        onClick: _cache[4] || (_cache[4] = (...args) => $options._containTap && $options._containTap(...args))
      },
      [
        !$data.nodes[0] ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_node, {
          key: 1,
          childs: $data.nodes,
          opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.selectable, $props.editable, $props.placeholder, "nodes"],
          name: "span"
        }, null, 8, ["childs", "opts"])),
        $data.tooltip ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 2,
            class: "_tooltip_contain",
            style: vue.normalizeStyle("top:" + $data.tooltip.top + "px")
          },
          [
            vue.createElementVNode("view", { class: "_tooltip" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.tooltip.items, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index2,
                    class: "_tooltip_item",
                    "data-i": index2,
                    onClick: _cache[0] || (_cache[0] = (...args) => $options._tooltipTap && $options._tooltipTap(...args))
                  }, vue.toDisplayString(item), 9, ["data-i"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        $data.slider ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 3,
            class: "_slider",
            style: vue.normalizeStyle("top:" + $data.slider.top + "px")
          },
          [
            vue.createElementVNode("slider", {
              value: $data.slider.value,
              min: $data.slider.min,
              max: $data.slider.max,
              "handle-size": "14",
              "block-size": "14",
              "show-value": "",
              activeColor: "white",
              style: { "padding": "3px" },
              onChanging: _cache[1] || (_cache[1] = (...args) => $options._sliderChanging && $options._sliderChanging(...args)),
              onChange: _cache[2] || (_cache[2] = (...args) => $options._sliderChange && $options._sliderChange(...args))
            }, null, 40, ["value", "min", "max"])
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        $data.color ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 4,
            class: "_tooltip_contain",
            style: vue.normalizeStyle("top:" + $data.color.top + "px")
          },
          [
            vue.createElementVNode("view", {
              class: "_tooltip",
              style: { "overflow-y": "hidden" }
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.color.items, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index2,
                    class: "_color_item",
                    style: vue.normalizeStyle("background-color:" + item),
                    "data-i": index2,
                    onClick: _cache[3] || (_cache[3] = (...args) => $options._colorTap && $options._colorTap(...args))
                  }, null, 12, ["data-i"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const mpHtml = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$5], ["__scopeId", "data-v-436c2b7f"], ["__file", "E:/HBuilderProjects/time-master/uni-app/components/mp-html/mp-html.vue"]]);
  function upload$1(src, type) {
    return new Promise((resolve, reject) => {
      formatAppLog("log", "at subPackages/memos/add/index.vue:98", "上传", type === "img" ? "图片" : "视频", "：", src);
      resolve(src);
    });
  }
  function remove$1(src) {
    formatAppLog("log", "at subPackages/memos/add/index.vue:116", "删除图片：", src);
  }
  const __default__$1 = {
    data() {
      return {
        content: "<div>Hello World!</div>",
        keyboardHeight: 0,
        modal: null,
        dialog: false,
        editable: true,
        // 预设的标签样式
        tagStyle: {
          table: "box-sizing:border-box;border-top:1px solid #dfe2e5;border-left:1px solid #dfe2e5",
          th: "border-right:1px solid #dfe2e5;border-bottom:1px solid #dfe2e5",
          td: "border-right:1px solid #dfe2e5;border-bottom:1px solid #dfe2e5",
          li: "margin:5px 0"
        },
        rows: 1,
        cols: 1,
        // 用于插入的 emoji 表情
        emojis: [
          ["😄", "😷", "😂", "😝", "😳", "😱", "😔", "😒", "😉"],
          ["😎", "😭", "😍", "😘", "🤔", "😕", "🙃", "🤑", "😲"],
          ["🙄", "😤", "😴", "🤓", "😡", "😑", "😮", "🤒", "🤮"]
        ],
        // 用于插入的 html 模板
        templates: [
          '<section style="text-align: center; margin: 0px auto;"><section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;"><span style="font-size: 18px; color: #595959;">标题</span></section></section>',
          '<div style="width: 100%; box-sizing: border-box; border-radius: 5px; background-color: #f6f6f6; padding: 10px; margin: 10px 0"><div>卡片</div><div style="font-size: 12px; color: gray">正文</div></div>',
          '<div style="border: 1px solid gray; box-shadow: 3px 3px 0px #cfcfce; padding: 10px; margin: 10px 0">段落</div>'
        ],
        memo: null,
        memoTitle: "",
        type: 0,
        // 0代表工作，1代表生活
        isEdit: false
        // 是否为编辑模式
      };
    },
    components: {
      mpHtml
    },
    onLoad(e) {
      this.isEdit = e.isEdit ? true : false;
      if (this.isEdit) {
        let memo = JSON.parse(e.memo);
        this.memo = memo;
        this.memoTitle = memo.Title;
        this.content = memo.Content;
        this.type = memo.Type;
      } else {
        this.type = e.type == 2 ? 1 : 0;
      }
    },
    onReady() {
      uni.onKeyboardHeightChange((res) => {
        formatAppLog("log", "at subPackages/memos/add/index.vue:172", "键盘高度变化----", res.height);
        this.keyboardHeight = res.height;
      });
      this.$refs.article.getSrc = (type, value) => {
        return new Promise((resolve, reject) => {
          if (type === "img" || type === "video") {
            uni.showActionSheet({
              itemList: ["本地选取", "远程链接"],
              success: (res) => {
                if (res.tapIndex === 0) {
                  if (type === "img") {
                    uni.chooseImage({
                      count: value === void 0 ? 9 : 1,
                      // 2.2.0 版本起插入图片时支持多张（修改图片链接时仅限一张）
                      success: (res2) => {
                        uni.showLoading({
                          title: "上传中"
                        });
                        (async () => {
                          const arr = [];
                          for (let item of res2.tempFilePaths) {
                            const src = await upload$1(item, type);
                            arr.push(src);
                          }
                          return arr;
                        })().then((res3) => {
                          uni.hideLoading();
                          resolve(res3);
                        });
                      },
                      fail: reject
                    });
                  } else {
                    uni.chooseVideo({
                      success: (res2) => {
                        uni.showLoading({
                          title: "上传中"
                        });
                        upload$1(res2.tempFilePath, type).then((res3) => {
                          uni.hideLoading();
                          resolve(res3);
                        });
                      },
                      fail: reject
                    });
                  }
                } else {
                  this.callback = {
                    resolve,
                    reject
                  };
                  this.$set(this, "modal", {
                    title: (type === "img" ? "图片" : "视频") + "链接",
                    value
                  });
                }
              }
            });
          } else {
            this.callback = {
              resolve,
              reject
            };
            let title;
            if (type === "audio") {
              title = "音频链接";
            } else if (type === "link") {
              title = "链接地址";
            }
            this.$set(this, "modal", {
              title,
              value
            });
          }
        });
      };
    },
    methods: {
      // 删除图片/视频/音频标签事件
      remove(e) {
        remove$1(e.src);
      },
      // 处理模态框
      modalInput(e) {
        this.value = e.detail.value;
      },
      modalConfirm() {
        this.callback.resolve(this.value || this.modal.value || "");
        this.$set(this, "modal", null);
      },
      modalCancel() {
        this.callback.reject();
        this.$set(this, "modal", null);
      },
      pickerChange(e) {
        this.$set(this, e.currentTarget.dataset.type, parseInt(e.detail.value) + 1);
      },
      // 处理底部弹窗
      openDialog(e) {
        this.checkEditable().then(() => {
          this.$set(this, "dialog", e.currentTarget.dataset.type);
        }).catch(() => {
        });
      },
      closeDialog() {
        this.$set(this, "dialog", false);
      },
      // 检查是否可编辑
      checkEditable() {
        return new Promise((resolve, reject) => {
          if (this.editable) {
            resolve();
          } else {
            uni.showModal({
              content: "需要继续编辑吗？",
              success: (res) => {
                if (res.confirm) {
                  this.save();
                  resolve();
                } else {
                  reject();
                }
              }
            });
          }
        });
      },
      // 调用编辑器接口
      edit(e) {
        this.checkEditable().then(() => {
          this.$refs.article[e.currentTarget.dataset.method](e.currentTarget.dataset.param);
        });
      },
      // 插入 head 系列标签
      insertHead() {
        this.checkEditable().then(() => {
          uni.showActionSheet({
            itemList: ["大标题", "中标题", "小标题"],
            success: (res) => {
              let tagName = ["h1", "h3", "h5"][res.tapIndex];
              this.$refs.article.insertHtml(`<${tagName}>标题</${tagName}>`);
            }
          });
        }).catch(() => {
        });
      },
      // 插入表格
      insertTable() {
        this.checkEditable().then(() => {
          this.$set(this, "modal", {
            title: "插入表格"
          });
          this.callback = {
            resolve: () => {
              this.$refs.article.insertTable(this.rows, this.cols);
            },
            reject: () => {
            }
          };
        }).catch(() => {
        });
      },
      // 插入代码
      insertCode() {
        this.checkEditable().then(() => {
          uni.showActionSheet({
            itemList: ["css", "javascript", "json"],
            success: (res) => {
              const lan = ["css", "javascript", "json"][res.tapIndex];
              this.$refs.article.insertHtml(`<pre><code class="language-${lan}">${lan} code</code></pre>`);
            }
          });
        }).catch(() => {
        });
      },
      // 插入 emoji
      insertEmoji(e) {
        this.$refs.article.insertHtml(e.currentTarget.dataset.emoji);
        this.closeDialog();
      },
      // 清空编辑器内容
      clear() {
        uni.showModal({
          title: "确认",
          content: "确定清空内容吗？",
          success: (res) => {
            if (res.confirm)
              this.$refs.article.clear();
          }
        });
      },
      // 加载内容
      load() {
        this.checkEditable().then(() => {
          uni.showModal({
            title: "提示",
            content: "导入内容将覆盖现有内容，是否继续？",
            success: (res) => {
              if (res.confirm) {
                if (!uni.chooseMessageFile) {
                  return uni.showModal({
                    title: "失败",
                    content: "暂时无法使用此功能",
                    showCancel: false
                  });
                }
                uni.chooseMessageFile({
                  count: 1,
                  type: "file",
                  extension: ["txt", "html"],
                  success: (res2) => {
                    const content = uni.getFileSystemManager().readFileSync(res2.tempFiles[0].path, "utf8");
                    this.$refs.article.setContent(content);
                  }
                });
              }
            }
          });
        }).catch(() => {
        });
      },
      // 保存备忘录
      saveMemo(memo) {
        formatAppLog("log", "at subPackages/memos/add/index.vue:424", "this.isEdit", this.isEdit);
        if (this.isEdit)
          memo.MemoID = this.memo.MemoID;
        const api = this.isEdit ? apiUpdateMemo : apiAddMemo;
        api(memo).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            formatAppLog("log", "at subPackages/memos/add/index.vue:437", "memo", res);
            uni.navigateBack();
          }
        });
      },
      // 保存编辑器内容
      save() {
        setTimeout(() => {
          if (this.editable) {
            var content = this.$refs.article.getContent();
            let memo = {
              UserID: getApp().globalData.userInfo.UserID,
              Title: this.memoTitle,
              Content: content,
              Type: this.type
            };
            let errMsg = "";
            if (!memo.Title) {
              errMsg = "请填写备忘录标题";
            }
            if (errMsg) {
              uni.showToast({
                icon: "error",
                title: errMsg
              });
              return;
            }
            formatAppLog("log", "at subPackages/memos/add/index.vue:464", "memo", memo);
            this.saveMemo(memo);
          } else {
            this.editable = true;
          }
        }, 50);
      }
    }
  };
  const __injectCSSVars__$1 = () => {
    vue.useCssVars((_ctx) => ({
      "e94f147e-keyboardHeight + 'px'": _ctx.keyboardHeight + "px"
    }));
  };
  const __setup__$1 = __default__$1.setup;
  __default__$1.setup = __setup__$1 ? (props, ctx) => {
    __injectCSSVars__$1();
    return __setup__$1(props, ctx);
  } : __injectCSSVars__$1;
  const _sfc_main$c = __default__$1;
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mp_html = vue.resolveComponent("mp-html");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "editor_toolbox" }, [
        vue.createElementVNode("view", { style: { "display": "flex" } }, [
          vue.createElementVNode("i", {
            class: "iconfont icon-undo",
            "data-method": "undo",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-redo",
            "data-method": "redo",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-img",
            "data-method": "insertImg",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-video",
            "data-method": "insertVideo",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-link",
            "data-method": "insertLink",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-text",
            "data-method": "insertText",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-line",
            "data-method": "insertHtml",
            "data-param": "<hr style='margin:10px 0'/>",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-heading",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.insertHead && $options.insertHead(...args))
          })
        ]),
        vue.createElementVNode("view", { style: { "display": "flex" } }, [
          vue.createElementVNode("i", {
            class: "iconfont icon-quote",
            "data-method": "insertHtml",
            "data-param": "<blockquote style='padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5'>引用</blockquote>",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-table",
            onClick: _cache[9] || (_cache[9] = (...args) => $options.insertTable && $options.insertTable(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-code",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.insertCode && $options.insertCode(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-emoji",
            "data-type": "emoji",
            onClick: _cache[11] || (_cache[11] = (...args) => $options.openDialog && $options.openDialog(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-template",
            "data-type": "template",
            onClick: _cache[12] || (_cache[12] = (...args) => $options.openDialog && $options.openDialog(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-clear",
            onClick: _cache[13] || (_cache[13] = (...args) => $options.clear && $options.clear(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-load",
            onClick: _cache[14] || (_cache[14] = (...args) => $options.load && $options.load(...args))
          }),
          vue.createElementVNode(
            "i",
            {
              class: vue.normalizeClass("iconfont icon-" + ($data.editable ? "save" : "edit")),
              onClick: _cache[15] || (_cache[15] = (...args) => $options.save && $options.save(...args))
            },
            null,
            2
            /* CLASS */
          )
        ])
      ]),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("view", { class: "memo-title" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "memo-title-input",
              type: "text",
              placeholder: "标题",
              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.memoTitle = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.memoTitle]
          ])
        ]),
        vue.createVNode(_component_mp_html, {
          ref: "article",
          "container-style": "padding:20px;min-height:calc(100vh - 130px)",
          content: $data.content,
          domain: "https://mp-html.oss-cn-hangzhou.aliyuncs.com",
          "tag-style": $data.tagStyle,
          editable: $data.editable,
          onRemove: $options.remove
        }, null, 8, ["content", "tag-style", "editable", "onRemove"])
      ]),
      $data.modal ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createElementVNode("view", { class: "mask" }),
          vue.createElementVNode("view", { class: "modal" }, [
            vue.createElementVNode(
              "view",
              { class: "modal_title" },
              vue.toDisplayString($data.modal.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "modal_body" }, [
              $data.modal.title == "插入表格" ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                [
                  vue.createElementVNode(
                    "picker",
                    {
                      class: "modal_picker",
                      range: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                      "data-type": "rows",
                      onChange: _cache[17] || (_cache[17] = (...args) => $options.pickerChange && $options.pickerChange(...args))
                    },
                    vue.toDisplayString($data.rows),
                    33
                    /* TEXT, HYDRATE_EVENTS */
                  ),
                  vue.createTextVNode("行 "),
                  vue.createElementVNode(
                    "picker",
                    {
                      class: "modal_picker",
                      range: [1, 2, 3, 4, 5],
                      "data-type": "cols",
                      onChange: _cache[18] || (_cache[18] = (...args) => $options.pickerChange && $options.pickerChange(...args))
                    },
                    vue.toDisplayString($data.cols),
                    33
                    /* TEXT, HYDRATE_EVENTS */
                  ),
                  vue.createTextVNode("列 ")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (vue.openBlock(), vue.createElementBlock("input", {
                key: 1,
                class: "modal_input",
                value: $data.modal.value,
                maxlength: "-1",
                "auto-focus": "",
                onInput: _cache[19] || (_cache[19] = (...args) => $options.modalInput && $options.modalInput(...args))
              }, null, 40, ["value"]))
            ]),
            vue.createElementVNode("view", { class: "modal_foot" }, [
              vue.createElementVNode("view", {
                class: "modal_button",
                onClick: _cache[20] || (_cache[20] = (...args) => $options.modalCancel && $options.modalCancel(...args))
              }, "取消"),
              vue.createElementVNode("view", {
                class: "modal_button",
                style: { "color": "#576b95", "border-left": "1px solid rgba(0,0,0,.1)" },
                onClick: _cache[21] || (_cache[21] = (...args) => $options.modalConfirm && $options.modalConfirm(...args))
              }, "确定 ")
            ])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 底部弹窗 "),
      $data.dialog ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "fadeIn"
      }, [
        vue.createElementVNode("view", {
          class: "mask",
          onClick: _cache[22] || (_cache[22] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }),
        vue.createElementVNode("view", { class: "weui-half-screen-dialog" }, [
          vue.createElementVNode("view", { class: "weui-half-screen-dialog__hd" }, [
            vue.createElementVNode("view", {
              class: "weui-half-screen-dialog__hd__side",
              onClick: _cache[23] || (_cache[23] = (...args) => $options.closeDialog && $options.closeDialog(...args))
            }, [
              vue.createElementVNode("view", { class: "weui-icon-btn" }, [
                vue.createElementVNode("i", { class: "weui-icon-close-thin" })
              ])
            ]),
            vue.createElementVNode("view", { class: "weui-half-screen-dialog__hd__main" }, [
              vue.createElementVNode(
                "strong",
                { class: "weui-half-screen-dialog__title" },
                "插入" + vue.toDisplayString($data.dialog == "emoji" ? "表情" : "模板"),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode(
            "view",
            {
              class: "weui-half-screen-dialog__bd",
              style: vue.normalizeStyle("height:" + ($data.dialog == "emoji" ? "105" : "150") + "px; padding-bottom: 30px;")
            },
            [
              $data.dialog == "emoji" ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                vue.renderList($data.emojis, (line, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", { style: { "display": "flex", "font-size": "20px", "line-height": "35px" } }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(line, (item, index3) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          style: { "flex": "1" },
                          "data-emoji": item,
                          onClick: _cache[24] || (_cache[24] = (...args) => $options.insertEmoji && $options.insertEmoji(...args))
                        }, vue.toDisplayString(item), 9, ["data-emoji"]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true),
              $data.dialog == "template" ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 1 },
                vue.renderList($data.templates, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    onClick: _cache[26] || (_cache[26] = (...args) => $options.closeDialog && $options.closeDialog(...args))
                  }, [
                    vue.createElementVNode("rich-text", {
                      nodes: item,
                      "data-method": "insertHtml",
                      "data-param": item,
                      onClick: _cache[25] || (_cache[25] = (...args) => $options.edit && $options.edit(...args))
                    }, null, 8, ["nodes", "data-param"]),
                    vue.createElementVNode("view", { style: { "border-top": "1px dashed gray", "width": "80%", "height": "0", "margin": "20px auto" } })
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const SubPackagesMemosAddIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$4], ["__file", "E:/HBuilderProjects/time-master/subPackages/memos/add/index.vue"]]);
  const _sfc_main$b = {
    name: "UniNumberBox",
    emits: ["change", "input", "update:modelValue", "blur", "focus"],
    props: {
      value: {
        type: [Number, String],
        default: 1
      },
      modelValue: {
        type: [Number, String],
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      background: {
        type: String,
        default: "#f5f5f5"
      },
      color: {
        type: String,
        default: "#333"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 40
      }
    },
    data() {
      return {
        inputValue: 0
      };
    },
    watch: {
      value(val) {
        this.inputValue = +val;
      },
      modelValue(val) {
        this.inputValue = +val;
      }
    },
    computed: {
      widthWithPx() {
        return this.width + "px";
      }
    },
    created() {
      if (this.value === 1) {
        this.inputValue = +this.modelValue;
      }
      if (this.modelValue === 1) {
        this.inputValue = +this.value;
      }
    },
    methods: {
      _calcValue(type) {
        if (this.disabled) {
          return;
        }
        const scale = this._getDecimalScale();
        let value = this.inputValue * scale;
        let step = this.step * scale;
        if (type === "minus") {
          value -= step;
          if (value < this.min * scale) {
            return;
          }
          if (value > this.max * scale) {
            value = this.max * scale;
          }
        }
        if (type === "plus") {
          value += step;
          if (value > this.max * scale) {
            return;
          }
          if (value < this.min * scale) {
            value = this.min * scale;
          }
        }
        this.inputValue = (value / scale).toFixed(String(scale).length - 1);
        this.$emit("input", +this.inputValue);
        this.$emit("update:modelValue", +this.inputValue);
        this.$emit("change", +this.inputValue);
      },
      _getDecimalScale() {
        let scale = 1;
        if (~~this.step !== this.step) {
          scale = Math.pow(10, String(this.step).split(".")[1].length);
        }
        return scale;
      },
      _onBlur(event) {
        this.$emit("blur", event);
        let value = event.detail.value;
        if (isNaN(value)) {
          this.inputValue = this.min;
          return;
        }
        value = +value;
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
        const scale = this._getDecimalScale();
        this.inputValue = value.toFixed(String(scale).length - 1);
        this.$emit("input", +this.inputValue);
        this.$emit("update:modelValue", +this.inputValue);
        this.$emit("change", +this.inputValue);
      },
      _onFocus(event) {
        this.$emit("focus", event);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-numbox" }, [
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = ($event) => $options._calcValue("minus")),
          class: "uni-numbox__minus uni-numbox-btns",
          style: vue.normalizeStyle({ background: $props.background })
        },
        [
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue <= $props.min || $props.disabled }]),
              style: vue.normalizeStyle({ color: $props.color })
            },
            "-",
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      ),
      vue.withDirectives(vue.createElementVNode("input", {
        disabled: $props.disabled,
        onFocus: _cache[1] || (_cache[1] = (...args) => $options._onFocus && $options._onFocus(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => $options._onBlur && $options._onBlur(...args)),
        class: "uni-numbox__value",
        type: $props.step < 1 ? "digit" : "number",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event),
        style: vue.normalizeStyle({ background: $props.background, color: $props.color, width: $options.widthWithPx })
      }, null, 44, ["disabled", "type"]), [
        [vue.vModelDynamic, $data.inputValue]
      ]),
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[4] || (_cache[4] = ($event) => $options._calcValue("plus")),
          class: "uni-numbox__plus uni-numbox-btns",
          style: vue.normalizeStyle({ background: $props.background })
        },
        [
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue >= $props.max || $props.disabled }]),
              style: vue.normalizeStyle({ color: $props.color })
            },
            "+",
            6
            /* CLASS, STYLE */
          )
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$3], ["__scopeId", "data-v-7ae2ee72"], ["__file", "E:/HBuilderProjects/time-master/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue"]]);
  const apiAddWaterRecord = (record) => {
    return request({
      url: `water/add`,
      method: "POST",
      data: record
    });
  };
  const apiGetUserWaterRecords = (userID) => {
    return request({
      url: `water/list?userID=${userID}`,
      method: "GET"
    });
  };
  const apiGetAllWaterTypes = () => {
    return request({
      url: `water/allTypes`,
      method: "GET"
    });
  };
  const _sfc_main$a = {
    __name: "index",
    setup(__props2) {
      onLoad(() => {
        getAllWaterTypes();
      });
      let waterTypes = vue.ref([]);
      const getAllWaterTypes = () => {
        apiGetAllWaterTypes().then((res) => {
          waterTypes.value = res.data;
          formatAppLog("log", "at subPackages/water/index/index.vue:145", "waterTypes", waterTypes.value);
        });
      };
      let waterRecords = vue.ref([]);
      onShow(() => {
        getWaterRecords();
      });
      const getWaterRecords = () => {
        apiGetUserWaterRecords(getApp().globalData.userInfo.UserID).then((res) => {
          waterRecords.value = res.data;
          formatAppLog("log", "at subPackages/water/index/index.vue:157", "waterRecords", waterRecords.value);
        });
      };
      const percent = vue.computed(() => {
        return Math.floor(consumedWater.value / targetWater.value * 100 + 15).toFixed(0);
      });
      const tips = vue.ref("每天都要喝水哦");
      const targetWater = vue.ref(2e3);
      const consumedWater = vue.computed(() => {
        let sum = 0;
        waterRecords.value.forEach((item) => {
          sum += item.Amount;
        });
        return sum;
      });
      const popupRef = vue.ref(null);
      const swiperList = vue.computed(() => {
        const arr = [];
        for (let i = 0; i < waterTypes.value.length; i += 10) {
          arr.push(waterTypes.value.slice(i, i + 10));
        }
        formatAppLog("log", "at subPackages/water/index/index.vue:181", "arr", arr);
        return arr;
      });
      const currentWaterType = vue.ref(1);
      const selectWater = (WaterID) => {
        currentWaterType.value = WaterID;
        formatAppLog("log", "at subPackages/water/index/index.vue:188", "currentWaterType", currentWaterType.value);
      };
      const keypadLayout2 = [
        [1, 2, 3, "date"],
        [4, 5, 6, "DEL"],
        [7, 8, 9, "AC"],
        ["", 0, "", "完成"]
      ];
      const quickKeys = ["100", "200", "250", "500"];
      const inputValue2 = vue.ref("");
      const getTime2 = () => {
        const date = /* @__PURE__ */ new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
      };
      const handleKeyPress2 = (key2) => {
        if (key2 === "DEL") {
          inputValue2.value = inputValue2.value.slice(0, -1);
        } else if (key2 === "AC") {
          inputValue2.value = "";
        } else if (key2 === "完成") {
          addWater();
        } else if (key2 === "date") {
          formatAppLog("log", "at subPackages/water/index/index.vue:215", "timePicker.value", timePicker.value);
        } else {
          inputValue2.value += key2;
        }
      };
      const timePicker = vue.ref(null);
      const waterTime = vue.ref(getTime2());
      const bindTimeChange = (e) => {
        waterTime.value = e.detail.value;
      };
      const openWaterPopup = () => {
        inputValue2.value = "";
        waterTime.value = getTime2();
        currentWaterType.value = 1;
        popupRef.value.open("bottom");
      };
      const addWater = () => {
        let water = {
          UserID: getApp().globalData.userInfo.UserID,
          WaterID: currentWaterType.value,
          DateTime: formatDateTime(convertToTodayTime(waterTime.value)),
          Amount: inputValue2.value
        };
        let errMsg = "";
        if (!water.Amount) {
          errMsg = "请输入饮水量";
        }
        if (errMsg) {
          uni.showToast({
            icon: "error",
            title: errMsg
          });
          return;
        }
        formatAppLog("log", "at subPackages/water/index/index.vue:251", "water", water);
        apiAddWaterRecord(water).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            getWaterRecords();
            popupRef.value.close();
          }
        });
      };
      const convertToTodayTime = (timeString) => {
        const today = /* @__PURE__ */ new Date();
        const [hours, minutes] = timeString.split(":").map(Number);
        today.setHours(hours);
        today.setMinutes(minutes);
        today.setSeconds(0);
        today.setMilliseconds(0);
        return today;
      };
      const getWaterObject = (WaterID) => {
        return waterTypes.value.find((item) => item.WaterID === WaterID);
      };
      const setTargetRef = vue.ref(null);
      const targetWaterTemp = vue.ref(1700);
      const setTarget = () => {
        targetWater.value = targetWaterTemp.value;
        setTargetRef.value.close();
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        const _component_uni_number_box = resolveEasycom(vue.resolveDynamicComponent("uni-number-box"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createCommentVNode(" 已喝水量的百分比 "),
          vue.createElementVNode("view", { class: "water" }, [
            vue.createElementVNode(
              "view",
              { class: "water-percent" },
              vue.toDisplayString(vue.unref(percent)),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "percent" }, " % ")
          ]),
          vue.createCommentVNode(" 温馨提示 "),
          vue.createElementVNode(
            "view",
            { class: "tips" },
            vue.toDisplayString(tips.value),
            1
            /* TEXT */
          ),
          vue.createCommentVNode(" 已喝(ml)、目标(ml)、剩余(ml) "),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", {
              class: "info-item",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$refs.recordPopupRef.open("bottom"))
            }, [
              vue.createElementVNode("view", { class: "label" }, "已喝(ml)"),
              vue.createElementVNode(
                "view",
                { class: "value" },
                vue.toDisplayString(vue.unref(consumedWater)),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", {
              class: "info-item",
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$refs.setTargetRef.open("bottom"))
            }, [
              vue.createElementVNode("view", { class: "label" }, "目标(ml)"),
              vue.createElementVNode(
                "view",
                { class: "value" },
                vue.toDisplayString(targetWater.value),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("view", { class: "label" }, "剩余(ml)"),
              vue.createElementVNode(
                "view",
                { class: "value" },
                vue.toDisplayString(targetWater.value - vue.unref(consumedWater)),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 喝水 "),
          vue.createElementVNode("view", { class: "water-btn" }, [
            vue.createVNode(_component_uni_icons, {
              "custom-prefix": "iconfont",
              type: "icon-water",
              size: "50",
              color: "#00b7ff",
              onClick: openWaterPopup
            })
          ]),
          vue.createCommentVNode(" 水位 "),
          vue.createElementVNode(
            "view",
            {
              class: "water-level",
              style: vue.normalizeStyle({ height: vue.unref(percent) + "%" })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createCommentVNode(" 弹出层 "),
          vue.createVNode(
            _component_uni_popup,
            {
              class: "popup",
              ref_key: "popupRef",
              ref: popupRef,
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "popup-content" }, [
                  vue.createElementVNode("view", { class: "popup-header" }, [
                    vue.createElementVNode("view", { class: "title" }, "添加饮水")
                  ]),
                  vue.createElementVNode("view", { class: "popup-swiper" }, [
                    vue.createElementVNode("swiper", {
                      "indicator-dots": true,
                      autoplay: false
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(vue.unref(swiperList), (item, index2) => {
                          return vue.openBlock(), vue.createElementBlock("swiper-item", {
                            class: "swiper-page",
                            key: index2
                          }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(item, (item1, index3) => {
                                return vue.openBlock(), vue.createElementBlock("view", {
                                  class: "water-item",
                                  key: index3,
                                  onClick: ($event) => selectWater(item1.WaterID)
                                }, [
                                  vue.createElementVNode(
                                    "view",
                                    {
                                      class: vue.normalizeClass(["water-icon", currentWaterType.value == item1.WaterID ? "active" : ""])
                                    },
                                    [
                                      vue.createVNode(_component_uni_icons, {
                                        "custom-prefix": "iconfont",
                                        type: item1.WaterIcon,
                                        size: "50",
                                        color: "#00b7ff"
                                      }, null, 8, ["type"])
                                    ],
                                    2
                                    /* CLASS */
                                  ),
                                  vue.createElementVNode(
                                    "view",
                                    { class: "water-name" },
                                    vue.toDisplayString(item1.WaterName),
                                    1
                                    /* TEXT */
                                  )
                                ], 8, ["onClick"]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "numeric-keypad" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "display" },
                      vue.toDisplayString(inputValue2.value),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "quick-keypad" }, [
                      (vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(quickKeys, (keyNum, index2) => {
                          return vue.createElementVNode("view", {
                            class: "key",
                            key: index2,
                            onClick: ($event) => inputValue2.value = keyNum
                          }, vue.toDisplayString(keyNum) + "ml ", 9, ["onClick"]);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]),
                    vue.createElementVNode("table", null, [
                      (vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(keypadLayout2, (row, rowIndex) => {
                          return vue.createElementVNode("tr", { key: rowIndex }, [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(row, (key2, keyIndex) => {
                                return vue.openBlock(), vue.createElementBlock("td", {
                                  key: keyIndex,
                                  onClick: ($event) => handleKeyPress2(key2)
                                }, [
                                  key2 != "date" ? (vue.openBlock(), vue.createElementBlock(
                                    "view",
                                    { key: 0 },
                                    vue.toDisplayString(key2),
                                    1
                                    /* TEXT */
                                  )) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                                    vue.createCommentVNode(" 时间选择器 "),
                                    vue.createElementVNode("picker", {
                                      ref_for: true,
                                      ref_key: "timePicker",
                                      ref: timePicker,
                                      mode: "time",
                                      value: waterTime.value,
                                      onChange: bindTimeChange
                                    }, [
                                      vue.createElementVNode(
                                        "view",
                                        { class: "uni-input" },
                                        vue.toDisplayString(waterTime.value),
                                        1
                                        /* TEXT */
                                      )
                                    ], 40, ["value"])
                                  ]))
                                ], 8, ["onClick"]);
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
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          vue.createCommentVNode(" 饮水记录弹出层 "),
          vue.createVNode(
            _component_uni_popup,
            {
              class: "record-popup",
              ref: "recordPopupRef",
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "record-popup-content" }, [
                  vue.createElementVNode("view", { class: "record-header" }, [
                    vue.createElementVNode("view", { class: "title" }, "饮水记录")
                  ]),
                  vue.unref(waterRecords).length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "record-list"
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(vue.unref(waterRecords), (item, index2) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "record-item",
                          key: index2
                        }, [
                          vue.createElementVNode("view", { class: "record-icon" }, [
                            vue.createVNode(_component_uni_icons, {
                              "custom-prefix": "iconfont",
                              type: getWaterObject(item.WaterID).WaterIcon,
                              size: "40",
                              color: "#00b7ff"
                            }, null, 8, ["type"])
                          ]),
                          vue.createElementVNode(
                            "view",
                            { class: "record-date" },
                            vue.toDisplayString(getTime2(item.DateTime)),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "view",
                            { class: "record-water" },
                            vue.toDisplayString(getWaterObject(item.WaterID).WaterName),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "view",
                            { class: "record-amount" },
                            vue.toDisplayString(item.Amount) + "ml ",
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "record-empty"
                  }, " 今天还没有喝水哦 "))
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          vue.createCommentVNode(" 设置饮水目标 "),
          vue.createVNode(
            _component_uni_popup,
            {
              class: "set-target",
              ref_key: "setTargetRef",
              ref: setTargetRef,
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "set-target-content" }, [
                  vue.createElementVNode("view", { class: "set-target-header" }, [
                    vue.createElementVNode("view", { class: "title" }, "设置饮水目标")
                  ]),
                  vue.createElementVNode("view", { class: "set-target-input" }, [
                    vue.createVNode(_component_uni_number_box, {
                      width: 100,
                      value: targetWaterTemp.value,
                      step: 100
                    }, null, 8, ["value"])
                  ]),
                  vue.createElementVNode("view", { class: "set-target-btn" }, [
                    vue.createElementVNode("view", {
                      class: "btn",
                      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$refs.setTargetRef.close())
                    }, "取消"),
                    vue.createElementVNode("view", {
                      class: "btn btn-primary",
                      onClick: _cache[3] || (_cache[3] = ($event) => setTarget())
                    }, "确定")
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const SubPackagesWaterIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "E:/HBuilderProjects/time-master/subPackages/water/index/index.vue"]]);
  const apiGetUserDiaries = (userID) => {
    return request({
      url: `diary/list?userID=${userID}`,
      method: "GET"
    });
  };
  const apiAddDiary = (diary) => {
    return request({
      url: `diary/add`,
      method: "POST",
      data: diary
    });
  };
  const apiUpdateDiary = (diary) => {
    return request({
      url: `diary/update`,
      method: "POST",
      data: diary
    });
  };
  const apiDeleteDiary = (diaryID) => {
    return request({
      url: `diary/delete?DiaryID=${diaryID}`,
      method: "GET"
    });
  };
  const _sfc_main$9 = {
    __name: "index",
    setup(__props2) {
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      let diaries = vue.ref([]);
      onShow(() => {
        getDiaries();
      });
      const getDiaries = () => {
        apiGetUserDiaries(getApp().globalData.userInfo.UserID).then((res) => {
          diaries.value = res.data;
          formatAppLog("log", "at subPackages/diary/index/index.vue:66", "diaries", diaries.value);
        });
      };
      const editDiary = (item) => {
        navTo(`/subPackages/diary/add/index?isEdit=true&diary=${JSON.stringify(item)}`);
      };
      const popupRef = vue.ref(null);
      const activeDiary = vue.ref(null);
      const openPopup = (diary) => {
        activeDiary.value = diary;
        popupRef.value.open("bottom");
        uni.vibrateShort();
      };
      const deleteDiary = () => {
        apiDeleteDiary(activeDiary.value.DiaryID).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            popupRef.value.close();
            getDiaries();
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "diary-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(diaries), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "diary-item",
                  key: item.DiaryID,
                  onClick: ($event) => editDiary(item),
                  onLongpress: ($event) => openPopup(item)
                }, [
                  vue.createElementVNode("view", { class: "diary-left" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "month" },
                      vue.toDisplayString(vue.unref(formatDateToMonth)(item.Date)),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "day" },
                      vue.toDisplayString(vue.unref(formatDateToDay)(item.Date)),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "time" },
                      vue.toDisplayString(vue.unref(formatDateToTime)(item.Date)),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "diary-right" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "title" },
                      vue.toDisplayString(item.Title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", {
                      class: "diary-content",
                      innerHTML: item.Content
                    }, null, 8, ["innerHTML"])
                  ])
                ], 40, ["onClick", "onLongpress"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
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
              vue.createElementVNode("button", {
                class: "win-service",
                onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(navTo)(`/subPackages/diary/add/index`))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ]),
          vue.createCommentVNode(" 更多功能 "),
          vue.createVNode(
            _component_uni_popup,
            {
              ref_key: "popupRef",
              ref: popupRef,
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "popup-list" }, [
                  vue.createElementVNode("view", {
                    class: "popup-item",
                    onClick: deleteDiary
                  }, [
                    vue.createElementVNode("view", { class: "popup-icon" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "trash",
                        size: "30",
                        color: "#999"
                      })
                    ]),
                    vue.createElementVNode("view", { class: "popup-text" }, " 删除 ")
                  ]),
                  vue.createElementVNode("view", {
                    class: "popup-close",
                    onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$refs.popupRef.close())
                  }, "取消")
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const SubPackagesDiaryIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "E:/HBuilderProjects/time-master/subPackages/diary/index/index.vue"]]);
  function upload(src, type) {
    return new Promise((resolve, reject) => {
      formatAppLog("log", "at subPackages/diary/add/index.vue:98", "上传", type === "img" ? "图片" : "视频", "：", src);
      resolve(src);
    });
  }
  function remove(src) {
    formatAppLog("log", "at subPackages/diary/add/index.vue:116", "删除图片：", src);
  }
  const __default__ = {
    data() {
      return {
        content: "<div>Hello World!</div>",
        keyboardHeight: 0,
        modal: null,
        dialog: false,
        editable: true,
        // 预设的标签样式
        tagStyle: {
          table: "box-sizing:border-box;border-top:1px solid #dfe2e5;border-left:1px solid #dfe2e5",
          th: "border-right:1px solid #dfe2e5;border-bottom:1px solid #dfe2e5",
          td: "border-right:1px solid #dfe2e5;border-bottom:1px solid #dfe2e5",
          li: "margin:5px 0"
        },
        rows: 1,
        cols: 1,
        // 用于插入的 emoji 表情
        emojis: [
          ["😄", "😷", "😂", "😝", "😳", "😱", "😔", "😒", "😉"],
          ["😎", "😭", "😍", "😘", "🤔", "😕", "🙃", "🤑", "😲"],
          ["🙄", "😤", "😴", "🤓", "😡", "😑", "😮", "🤒", "🤮"]
        ],
        // 用于插入的 html 模板
        templates: [
          '<section style="text-align: center; margin: 0px auto;"><section style="border-radius: 4px; border: 1px solid #757576; display: inline-block; padding: 5px 20px;"><span style="font-size: 18px; color: #595959;">标题</span></section></section>',
          '<div style="width: 100%; box-sizing: border-box; border-radius: 5px; background-color: #f6f6f6; padding: 10px; margin: 10px 0"><div>卡片</div><div style="font-size: 12px; color: gray">正文</div></div>',
          '<div style="border: 1px solid gray; box-shadow: 3px 3px 0px #cfcfce; padding: 10px; margin: 10px 0">段落</div>'
        ],
        diaryTitle: "",
        diary: "",
        isEdit: false
        // 是否为编辑模式
      };
    },
    components: {
      mpHtml
    },
    onLoad(e) {
      this.isEdit = e.isEdit ? true : false;
      if (this.isEdit) {
        let diary = JSON.parse(e.diary);
        this.diary = diary;
        this.diaryTitle = diary.Title;
        this.content = diary.Content;
        this.type = diary.Type;
      }
    },
    onReady() {
      uni.onKeyboardHeightChange((res) => {
        formatAppLog("log", "at subPackages/diary/add/index.vue:169", "键盘高度变化----", res.height);
        this.keyboardHeight = res.height;
      });
      this.$refs.article.getSrc = (type, value) => {
        return new Promise((resolve, reject) => {
          if (type === "img" || type === "video") {
            uni.showActionSheet({
              itemList: ["本地选取", "远程链接"],
              success: (res) => {
                if (res.tapIndex === 0) {
                  if (type === "img") {
                    uni.chooseImage({
                      count: value === void 0 ? 9 : 1,
                      // 2.2.0 版本起插入图片时支持多张（修改图片链接时仅限一张）
                      success: (res2) => {
                        uni.showLoading({
                          title: "上传中"
                        });
                        (async () => {
                          const arr = [];
                          for (let item of res2.tempFilePaths) {
                            const src = await upload(item, type);
                            arr.push(src);
                          }
                          return arr;
                        })().then((res3) => {
                          uni.hideLoading();
                          resolve(res3);
                        });
                      },
                      fail: reject
                    });
                  } else {
                    uni.chooseVideo({
                      success: (res2) => {
                        uni.showLoading({
                          title: "上传中"
                        });
                        upload(res2.tempFilePath, type).then((res3) => {
                          uni.hideLoading();
                          resolve(res3);
                        });
                      },
                      fail: reject
                    });
                  }
                } else {
                  this.callback = {
                    resolve,
                    reject
                  };
                  this.$set(this, "modal", {
                    title: (type === "img" ? "图片" : "视频") + "链接",
                    value
                  });
                }
              }
            });
          } else {
            this.callback = {
              resolve,
              reject
            };
            let title;
            if (type === "audio") {
              title = "音频链接";
            } else if (type === "link") {
              title = "链接地址";
            }
            this.$set(this, "modal", {
              title,
              value
            });
          }
        });
      };
    },
    methods: {
      // 删除图片/视频/音频标签事件
      remove(e) {
        remove(e.src);
      },
      // 处理模态框
      modalInput(e) {
        this.value = e.detail.value;
      },
      modalConfirm() {
        this.callback.resolve(this.value || this.modal.value || "");
        this.$set(this, "modal", null);
      },
      modalCancel() {
        this.callback.reject();
        this.$set(this, "modal", null);
      },
      pickerChange(e) {
        this.$set(this, e.currentTarget.dataset.type, parseInt(e.detail.value) + 1);
      },
      // 处理底部弹窗
      openDialog(e) {
        this.checkEditable().then(() => {
          this.$set(this, "dialog", e.currentTarget.dataset.type);
        }).catch(() => {
        });
      },
      closeDialog() {
        this.$set(this, "dialog", false);
      },
      // 检查是否可编辑
      checkEditable() {
        return new Promise((resolve, reject) => {
          if (this.editable) {
            resolve();
          } else {
            uni.showModal({
              content: "需要继续编辑吗？",
              success: (res) => {
                if (res.confirm) {
                  this.save();
                  resolve();
                } else {
                  reject();
                }
              }
            });
          }
        });
      },
      // 调用编辑器接口
      edit(e) {
        this.checkEditable().then(() => {
          this.$refs.article[e.currentTarget.dataset.method](e.currentTarget.dataset.param);
        });
      },
      // 插入 head 系列标签
      insertHead() {
        this.checkEditable().then(() => {
          uni.showActionSheet({
            itemList: ["大标题", "中标题", "小标题"],
            success: (res) => {
              let tagName = ["h1", "h3", "h5"][res.tapIndex];
              this.$refs.article.insertHtml(`<${tagName}>标题</${tagName}>`);
            }
          });
        }).catch(() => {
        });
      },
      // 插入表格
      insertTable() {
        this.checkEditable().then(() => {
          this.$set(this, "modal", {
            title: "插入表格"
          });
          this.callback = {
            resolve: () => {
              this.$refs.article.insertTable(this.rows, this.cols);
            },
            reject: () => {
            }
          };
        }).catch(() => {
        });
      },
      // 插入代码
      insertCode() {
        this.checkEditable().then(() => {
          uni.showActionSheet({
            itemList: ["css", "javascript", "json"],
            success: (res) => {
              const lan = ["css", "javascript", "json"][res.tapIndex];
              this.$refs.article.insertHtml(`<pre><code class="language-${lan}">${lan} code</code></pre>`);
            }
          });
        }).catch(() => {
        });
      },
      // 插入 emoji
      insertEmoji(e) {
        this.$refs.article.insertHtml(e.currentTarget.dataset.emoji);
        this.closeDialog();
      },
      // 清空编辑器内容
      clear() {
        uni.showModal({
          title: "确认",
          content: "确定清空内容吗？",
          success: (res) => {
            if (res.confirm)
              this.$refs.article.clear();
          }
        });
      },
      // 加载内容
      load() {
        this.checkEditable().then(() => {
          uni.showModal({
            title: "提示",
            content: "导入内容将覆盖现有内容，是否继续？",
            success: (res) => {
              if (res.confirm) {
                if (!uni.chooseMessageFile) {
                  return uni.showModal({
                    title: "失败",
                    content: "暂时无法使用此功能",
                    showCancel: false
                  });
                }
                uni.chooseMessageFile({
                  count: 1,
                  type: "file",
                  extension: ["txt", "html"],
                  success: (res2) => {
                    const content = uni.getFileSystemManager().readFileSync(res2.tempFiles[0].path, "utf8");
                    this.$refs.article.setContent(content);
                  }
                });
              }
            }
          });
        }).catch(() => {
        });
      },
      // 保存备忘录
      saveDiary(diary) {
        if (this.isEdit)
          diary.DiaryID = this.diary.DiaryID;
        let api = this.editable ? apiUpdateDiary : apiAddDiary;
        api(diary).then((res) => {
          formatAppLog("log", "at subPackages/diary/add/index.vue:424", "res", res);
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            uni.navigateBack();
          }
        });
      },
      // 保存编辑器内容
      save() {
        setTimeout(() => {
          if (this.editable) {
            var content = this.$refs.article.getContent();
            let diary = {
              UserID: getApp().globalData.userInfo.UserID,
              Title: this.diaryTitle,
              Content: content
            };
            let errMsg = "";
            if (!diary.Title) {
              errMsg = "请填写日记标题";
            }
            if (errMsg) {
              uni.showToast({
                icon: "error",
                title: errMsg
              });
              return;
            }
            formatAppLog("log", "at subPackages/diary/add/index.vue:459", "diary", diary);
            this.saveDiary(diary);
          } else {
            this.editable = true;
          }
        }, 50);
      }
    }
  };
  const __injectCSSVars__ = () => {
    vue.useCssVars((_ctx) => ({
      "88c4bb6c-keyboardHeight + 'px'": _ctx.keyboardHeight + "px"
    }));
  };
  const __setup__ = __default__.setup;
  __default__.setup = __setup__ ? (props, ctx) => {
    __injectCSSVars__();
    return __setup__(props, ctx);
  } : __injectCSSVars__;
  const _sfc_main$8 = __default__;
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_mp_html = vue.resolveComponent("mp-html");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "editor_toolbox" }, [
        vue.createElementVNode("view", { style: { "display": "flex" } }, [
          vue.createElementVNode("i", {
            class: "iconfont icon-undo",
            "data-method": "undo",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-redo",
            "data-method": "redo",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-img",
            "data-method": "insertImg",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-video",
            "data-method": "insertVideo",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-link",
            "data-method": "insertLink",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-text",
            "data-method": "insertText",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-line",
            "data-method": "insertHtml",
            "data-param": "<hr style='margin:10px 0'/>",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-heading",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.insertHead && $options.insertHead(...args))
          })
        ]),
        vue.createElementVNode("view", { style: { "display": "flex" } }, [
          vue.createElementVNode("i", {
            class: "iconfont icon-quote",
            "data-method": "insertHtml",
            "data-param": "<blockquote style='padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5'>引用</blockquote>",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.edit && $options.edit(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-table",
            onClick: _cache[9] || (_cache[9] = (...args) => $options.insertTable && $options.insertTable(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-code",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.insertCode && $options.insertCode(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-emoji",
            "data-type": "emoji",
            onClick: _cache[11] || (_cache[11] = (...args) => $options.openDialog && $options.openDialog(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-template",
            "data-type": "template",
            onClick: _cache[12] || (_cache[12] = (...args) => $options.openDialog && $options.openDialog(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-clear",
            onClick: _cache[13] || (_cache[13] = (...args) => $options.clear && $options.clear(...args))
          }),
          vue.createElementVNode("i", {
            class: "iconfont icon-load",
            onClick: _cache[14] || (_cache[14] = (...args) => $options.load && $options.load(...args))
          }),
          vue.createElementVNode(
            "i",
            {
              class: vue.normalizeClass("iconfont icon-" + ($data.editable ? "save" : "edit")),
              onClick: _cache[15] || (_cache[15] = (...args) => $options.save && $options.save(...args))
            },
            null,
            2
            /* CLASS */
          )
        ])
      ]),
      vue.createElementVNode("view", null, [
        vue.createElementVNode("view", { class: "memo-title" }, [
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "memo-title-input",
              type: "text",
              placeholder: "标题",
              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.diaryTitle = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.diaryTitle]
          ])
        ]),
        vue.createVNode(_component_mp_html, {
          ref: "article",
          "container-style": "padding:20px;min-height:calc(100vh - 130px)",
          content: $data.content,
          domain: "https://mp-html.oss-cn-hangzhou.aliyuncs.com",
          "tag-style": $data.tagStyle,
          editable: $data.editable,
          onRemove: $options.remove
        }, null, 8, ["content", "tag-style", "editable", "onRemove"])
      ]),
      $data.modal ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        [
          vue.createElementVNode("view", { class: "mask" }),
          vue.createElementVNode("view", { class: "modal" }, [
            vue.createElementVNode(
              "view",
              { class: "modal_title" },
              vue.toDisplayString($data.modal.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "modal_body" }, [
              $data.modal.title == "插入表格" ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                [
                  vue.createElementVNode(
                    "picker",
                    {
                      class: "modal_picker",
                      range: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                      "data-type": "rows",
                      onChange: _cache[17] || (_cache[17] = (...args) => $options.pickerChange && $options.pickerChange(...args))
                    },
                    vue.toDisplayString($data.rows),
                    33
                    /* TEXT, HYDRATE_EVENTS */
                  ),
                  vue.createTextVNode("行 "),
                  vue.createElementVNode(
                    "picker",
                    {
                      class: "modal_picker",
                      range: [1, 2, 3, 4, 5],
                      "data-type": "cols",
                      onChange: _cache[18] || (_cache[18] = (...args) => $options.pickerChange && $options.pickerChange(...args))
                    },
                    vue.toDisplayString($data.cols),
                    33
                    /* TEXT, HYDRATE_EVENTS */
                  ),
                  vue.createTextVNode("列 ")
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (vue.openBlock(), vue.createElementBlock("input", {
                key: 1,
                class: "modal_input",
                value: $data.modal.value,
                maxlength: "-1",
                "auto-focus": "",
                onInput: _cache[19] || (_cache[19] = (...args) => $options.modalInput && $options.modalInput(...args))
              }, null, 40, ["value"]))
            ]),
            vue.createElementVNode("view", { class: "modal_foot" }, [
              vue.createElementVNode("view", {
                class: "modal_button",
                onClick: _cache[20] || (_cache[20] = (...args) => $options.modalCancel && $options.modalCancel(...args))
              }, "取消"),
              vue.createElementVNode("view", {
                class: "modal_button",
                style: { "color": "#576b95", "border-left": "1px solid rgba(0,0,0,.1)" },
                onClick: _cache[21] || (_cache[21] = (...args) => $options.modalConfirm && $options.modalConfirm(...args))
              }, "确定 ")
            ])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 底部弹窗 "),
      $data.dialog ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "fadeIn"
      }, [
        vue.createElementVNode("view", {
          class: "mask",
          onClick: _cache[22] || (_cache[22] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }),
        vue.createElementVNode("view", { class: "weui-half-screen-dialog" }, [
          vue.createElementVNode("view", { class: "weui-half-screen-dialog__hd" }, [
            vue.createElementVNode("view", {
              class: "weui-half-screen-dialog__hd__side",
              onClick: _cache[23] || (_cache[23] = (...args) => $options.closeDialog && $options.closeDialog(...args))
            }, [
              vue.createElementVNode("view", { class: "weui-icon-btn" }, [
                vue.createElementVNode("i", { class: "weui-icon-close-thin" })
              ])
            ]),
            vue.createElementVNode("view", { class: "weui-half-screen-dialog__hd__main" }, [
              vue.createElementVNode(
                "strong",
                { class: "weui-half-screen-dialog__title" },
                "插入" + vue.toDisplayString($data.dialog == "emoji" ? "表情" : "模板"),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createElementVNode(
            "view",
            {
              class: "weui-half-screen-dialog__bd",
              style: vue.normalizeStyle("height:" + ($data.dialog == "emoji" ? "105" : "150") + "px; padding-bottom: 30px;")
            },
            [
              $data.dialog == "emoji" ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                vue.renderList($data.emojis, (line, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", { style: { "display": "flex", "font-size": "20px", "line-height": "35px" } }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(line, (item, index3) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          style: { "flex": "1" },
                          "data-emoji": item,
                          onClick: _cache[24] || (_cache[24] = (...args) => $options.insertEmoji && $options.insertEmoji(...args))
                        }, vue.toDisplayString(item), 9, ["data-emoji"]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true),
              $data.dialog == "template" ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 1 },
                vue.renderList($data.templates, (item, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    onClick: _cache[26] || (_cache[26] = (...args) => $options.closeDialog && $options.closeDialog(...args))
                  }, [
                    vue.createElementVNode("rich-text", {
                      nodes: item,
                      "data-method": "insertHtml",
                      "data-param": item,
                      onClick: _cache[25] || (_cache[25] = (...args) => $options.edit && $options.edit(...args))
                    }, null, 8, ["nodes", "data-param"]),
                    vue.createElementVNode("view", { style: { "border-top": "1px dashed gray", "width": "80%", "height": "0", "margin": "20px auto" } })
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const SubPackagesDiaryAddIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__file", "E:/HBuilderProjects/time-master/subPackages/diary/add/index.vue"]]);
  const apiGetUserCountdowns = (userID) => {
    return request({
      url: `countdown/list?userID=${userID}`,
      method: "GET"
    });
  };
  const apiAddCountdown = (countdown) => {
    return request({
      url: `countdown/add`,
      method: "POST",
      data: countdown
    });
  };
  const _sfc_main$7 = {
    __name: "index",
    setup(__props2) {
      const x = vue.ref("600rpx");
      const y = vue.ref("1000rpx");
      onShow(() => {
        getCountdowns();
      });
      const getCountdowns = () => {
        apiGetUserCountdowns(getApp().globalData.userInfo.UserID).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            countdownList.value = res.data;
            formatAppLog("log", "at subPackages/countdowns/index/index.vue:79", "countdownList", countdownList.value);
          }
        });
      };
      let countdownList = vue.ref([]);
      const getRemainingDays = (targetDate) => {
        const now = /* @__PURE__ */ new Date();
        const target = new Date(targetDate);
        const diff = target - now;
        return Math.ceil(diff / (1e3 * 60 * 60 * 24));
      };
      const addCountdownRef = vue.ref(null);
      const countdownName = vue.ref("");
      const countdownDate = vue.ref("");
      const addCountdown = () => {
        let countdown = {
          UserId: getApp().globalData.userInfo.UserID,
          Name: countdownName.value,
          TargetDate: countdownDate.value
        };
        let errMsg = "";
        if (!countdown.Name) {
          errMsg = "请输入倒计时名称";
        } else if (!countdown.TargetDate) {
          errMsg = "请选择目标日期";
        }
        if (errMsg) {
          uni.showToast({
            icon: "error",
            title: errMsg
          });
          return;
        }
        formatAppLog("log", "at subPackages/countdowns/index/index.vue:115", "countdown", countdown);
        apiAddCountdown(countdown).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            getCountdowns();
            addCountdownRef.value.close();
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_1$1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "countdown-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(countdownList), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "countdown-item",
                  key: item.CountdownID
                }, [
                  vue.createElementVNode("view", { class: "countdown-left" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "title" },
                      vue.toDisplayString(item.Name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "date" },
                      vue.toDisplayString(vue.unref(formatDate)(item.TargetDate)) + " " + vue.toDisplayString(vue.unref(formatDateLunar)(item.TargetDate)),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "countdown-right" }, [
                    getRemainingDays(item.TargetDate) > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "day-remaining"
                    }, [
                      vue.createTextVNode(" 还剩"),
                      vue.createElementVNode(
                        "text",
                        { class: "remaining" },
                        vue.toDisplayString(getRemainingDays(item.TargetDate)),
                        1
                        /* TEXT */
                      ),
                      vue.createTextVNode("天 ")
                    ])) : getRemainingDays(item.TargetDate) < 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "day-remaining"
                    }, [
                      vue.createTextVNode(" 已过"),
                      vue.createElementVNode(
                        "text",
                        { class: "remaining" },
                        vue.toDisplayString(Math.abs(getRemainingDays(item.TargetDate))),
                        1
                        /* TEXT */
                      ),
                      vue.createTextVNode("天 ")
                    ])) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "day-remaining"
                    }, [
                      vue.createElementVNode("text", { class: "today" }, "今天")
                    ]))
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
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
              vue.createElementVNode("button", {
                class: "win-service",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$refs.addCountdownRef.open("bottom"))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "plusempty",
                  size: "30",
                  color: "#fff"
                })
              ])
            ], 8, ["x", "y"])
          ]),
          vue.createCommentVNode(" 添加倒计时 "),
          vue.createVNode(
            _component_uni_popup,
            {
              class: "add-countdown",
              ref_key: "addCountdownRef",
              ref: addCountdownRef,
              "background-color": "#fff"
            },
            {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "add-countdown-content" }, [
                  vue.createElementVNode("view", { class: "add-countdown-header" }, [
                    vue.createElementVNode("view", { class: "title" }, "添加倒计时")
                  ]),
                  vue.createElementVNode("view", { class: "countdown-name" }, [
                    vue.withDirectives(vue.createElementVNode(
                      "input",
                      {
                        type: "text",
                        class: "name-input",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => countdownName.value = $event),
                        placeholder: "倒计时名称"
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vModelText, countdownName.value]
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "countdown-date" }, [
                    vue.createElementVNode("view", { class: "target" }, "目标日"),
                    vue.createVNode(_component_uni_datetime_picker, {
                      type: "date",
                      modelValue: countdownDate.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => countdownDate.value = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  vue.createElementVNode("view", { class: "add-countdown-input" }, [
                    vue.createElementVNode("view", {
                      class: "btn",
                      onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$refs.setTargetRef.close())
                    }, "取消"),
                    vue.createElementVNode("view", {
                      class: "btn btn-primary",
                      onClick: _cache[4] || (_cache[4] = ($event) => addCountdown())
                    }, "确定")
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const SubPackagesCountdownsIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-ef2a374b"], ["__file", "E:/HBuilderProjects/time-master/subPackages/countdowns/index/index.vue"]]);
  const getRootDir = () => {
    if (uni.getSystemInfoSync().platform !== "android") {
      plus.nativeUI.alert("这个组件只能在安卓下使用");
      return;
    }
    let environment = plus.android.importClass("android.os.Environment");
    if (environment.getExternalStorageState() !== environment.MEDIA_MOUNTED) {
      plus.nativeUI.alert("SD卡没有挂载");
    }
    let sdRoot = environment.getExternalStorageDirectory();
    formatAppLog("log", "at components/yt-uploads/files.js:17", "sdRoot", sdRoot);
    let sdRootList = plus.android.invoke(sdRoot, "listFiles");
    formatAppLog("log", "at components/yt-uploads/files.js:19", "sdRootList", sdRootList);
    let sdRootPathList = [];
    sdRootList.forEach((v) => {
      if (plus.android.invoke(v, "isHidden") == true) {
        return false;
      }
      let pathName = v.toString().split("/");
      if (plus.android.invoke(v, "isDirectory") === true) {
        sdRootPathList.push({
          isDirectory: true,
          path: v,
          pathName: pathName[pathName.length - 1]
        });
      } else {
        sdRootPathList.push({
          isDirectory: false,
          path: v,
          pathName: pathName[pathName.length - 1]
        });
      }
    });
    formatAppLog("log", "at components/yt-uploads/files.js:46", "sdRootPathList", sdRootPathList);
    return sdRootPathList;
  };
  const getSubDir = (path) => {
    try {
      if (plus.android.invoke(path, "isDirectory") !== true) {
        return null;
      }
      let pathList = plus.android.invoke(path, "listFiles");
      let subPathList = [];
      pathList.forEach((v) => {
        if (plus.android.invoke(v, "isHidden") == true) {
          return false;
        }
        let pathName = v.toString().split("/");
        if (plus.android.invoke(v, "isDirectory") === true) {
          subPathList.push({
            isDirectory: true,
            path: v,
            pathName: pathName[pathName.length - 1]
          });
        } else {
          subPathList.push({
            isDirectory: false,
            path: v,
            pathName: pathName[pathName.length - 1]
          });
        }
      });
      return subPathList;
    } catch (e) {
      return null;
    }
  };
  const files = {
    getRootDir,
    getSubDir
  };
  const _sfc_main$6 = {
    props: {
      autoclose: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        title: "Hello",
        flileList: [],
        treeList: ["root"],
        checkList: [],
        // 文件选择标记
        checkDataList: [],
        // 最终数据
        flag: 0,
        source: {
          file: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDklEQVRYR+3XwQnCQBAF0D+oZy3BDrQDXW8eEtwS7MAOjBWIHdhBQAVvbuwgJViCnhVGIqggq8xggh4218zuPj4bMkP48UM/Ph8fAena9WvMLEXG8WAvrb3XeQFp6lpUhwPQVW3IWI5iM9as8QM2bkKMuXQjZj4RUfNWr0T4AatdRkQ9MQCwACcE6mgRZQEMLshR50yLKA1gI5MVd0eLKBVQxK9FlA7QIioB+BAMLGxkJq8XuzLAK4KZ9zYe9CsBSD7XAAgJhARCAiGBkEBIQJfA2iUETCW/WWkNAzMbmUTWD2xdG2fOH72+9JQ3dcXcgAZ17dAcRIBnN6OcjN5BL8itNUff6/8eTr9MXrT8CtDv/iF3ze/VAAAAAElFTkSuQmCC",
          folder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA30lEQVRYR+2XsQ3CMBBF/0F6MkKYgBXikoIQTwCMwAhskg1cpKDDGSEjZITQgw5FIkgRUmQLi6Q4d5a+v5+fXNiEiQdNvD8EYF4GjLHxIsKBgXzsbhCj3mfqHOL+DAyY8lYTaONUzCjyTJ2csiOhD4ApbUqA9SoMAPEbgBctAEbDwEVnquiX/hfgvStHWOutarrpNACA0jtVCYAYEANiQAyIATEwNGBsjCU3RLTyfWf45Jn5jiclWqt2ANBNzNUmeOAI5tSn1DlLVCFC0T9GvgCciwIG5/UvCHgw5yox8AJDX48hEgn/egAAAABJRU5ErkJggg==",
          checked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABjElEQVRYR+3XwU3DMBQG4P+p5QwjlAnoBtS9IZRQb1A2KBNQJkBMQJkgokXihtMJyAiMUM4UfpSUlBLSYiuOKhC5JIdn+3tPtvIs2PIjW14fGwHRxHQaJG2RYdid2sbmcaWAKDJ70oQB0HaakBj1QnXqMqYccGcGQlzaTkTyWUR2s3hHRDlg/BCLyKE1ANAAhwI5cEX4AijMkaDJ2BXhDaADFad7xxXhFZCW3xXhHeCKqAVQhiBwpQM1KG7s2gBFBMmpDrudWgA2x/Uf8PcrQOJWBCfr9kOtFSBwowPVj8amL4LrMkRtgHzx/NhJA48QtIoILwAKzvDGXv6n/Lb4hh6iMoDAhQ7UMMt0YkbpOy37MvMfGpjKABAzNqD0sUpWy2vbPVUHLLqdGV+xr7Wa2WaeY/0AFrMlnEOlHy59o09AhvjIzLpp9Q2w+f98ifllgIkZCnDunOaGAavHeDWsvCG5Ny28MFn2+hUl6b0BO9LWR+rJqiH57GYcb0broHMk+dG1BlRM2nr41m/H78OTNzAWzjUaAAAAAElFTkSuQmCC"
        },
        isChoose: false
      };
    },
    onLoad() {
    },
    methods: {
      closeHandle() {
        this.treeList = ["root"];
        this.checkList = [];
        this.checkDataList = [];
        this.isChoose = false;
      },
      _autoClose() {
        if (this.autoclose !== true) {
          return;
        }
        this.checkList = [];
        this.checkDataList = [];
        this.isChoose = false;
      },
      okeyHandle() {
        this.$emit("selected", this.checkDataList);
        this.closeHandle();
      },
      choose() {
        formatAppLog("log", "at components/yt-uploads/yt-file-selector.vue:85", "choose");
        this.isChoose = true;
        this.flileList = files.getRootDir();
        formatAppLog("log", "at components/yt-uploads/yt-file-selector.vue:106", "this.flileList===", this.flileList);
      },
      backToPrevent() {
        let r = this.flag - 1;
        if (r === 0) {
          this.flileList = files.getRootDir();
          this.treeList = ["root"];
        } else {
          this.flileList = files.getSubDir(this.treeList[r]);
        }
        this.flag = r;
      },
      setOrDelSelectData(path, size) {
        let index2 = this.checkList.indexOf(path);
        if (index2 > -1) {
          this.$delete(this.checkList, index2);
          this.$delete(this.checkDataList, index2);
        } else {
          this.checkList.push(path);
          this.checkDataList.push({
            path: "file://" + path,
            size
          });
        }
      },
      showDir(isDir, path) {
        let _this = this;
        if (isDir) {
          this.treeList.push(path);
          this.flileList = files.getSubDir(path);
          this.flag += 1;
        } else {
          uni.getFileInfo({
            filePath: "file:///" + path.toString(),
            success(r) {
              _this.setOrDelSelectData(path.toString(), r.size);
            },
            fail(err) {
              formatAppLog("log", "at components/yt-uploads/yt-file-selector.vue:144", "err:", err);
            }
          });
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "yt-content" }, [
      $data.isChoose === true ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "file-select-container",
        onClick: _cache[4] || (_cache[4] = (...args) => $options._autoClose && $options._autoClose(...args))
      }, [
        vue.createElementVNode("view", {
          class: "file-select-wrap",
          onClick: _cache[3] || (_cache[3] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createElementVNode("view", { class: "file-select-header" }, [
            vue.createElementVNode("text", null, "文件选择")
          ]),
          vue.createElementVNode("scroll-view", {
            class: "s-f-scroll-view",
            "scroll-y": ""
          }, [
            vue.createElementVNode("view", null, [
              $data.treeList.length > 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.backToPrevent && $options.backToPrevent(...args), ["stop"])),
                class: "s-f-item"
              }, [
                vue.createElementVNode("view", { class: "s-f-item-path-name" }, [
                  vue.createElementVNode("image", {
                    class: "s-f-icon",
                    src: $data.source.folder
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", null, "上级目录")
                ])
              ])) : vue.createCommentVNode("v-if", true),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.flileList, (item, i) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    onClick: vue.withModifiers(($event) => $options.showDir(item.isDirectory, item.path), ["stop"]),
                    class: "s-f-item",
                    key: i
                  }, [
                    vue.createElementVNode("view", { class: "s-f-item-path-name" }, [
                      item.isDirectory ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 0,
                        class: "s-f-icon",
                        src: $data.source.folder
                      }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                      !item.isDirectory ? (vue.openBlock(), vue.createElementBlock("image", {
                        key: 1,
                        class: "s-f-icon",
                        src: $data.source.file
                      }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("view", { class: "s-f-text" }, [
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString(item.pathName),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    $data.checkList.indexOf(item.path.toString()) > -1 ? (vue.openBlock(), vue.createElementBlock("image", {
                      key: 0,
                      src: $data.source.checked,
                      class: "s-f-icon"
                    }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "file-select-footer" }, [
            vue.createElementVNode("view", {
              class: "s-f-btn s-f-cancel",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.closeHandle && $options.closeHandle(...args))
            }, "取消"),
            vue.createElementVNode("view", {
              class: "s-f-btn s-f-okey",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.okeyHandle && $options.okeyHandle(...args))
            }, "确定")
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const ytFileSelector = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1], ["__scopeId", "data-v-a6488321"], ["__file", "E:/HBuilderProjects/time-master/components/yt-uploads/yt-file-selector.vue"]]);
  let options = {
    // 选则图片或者视频 图片:0 视频:1
    type: 0,
    // 上传文件的key 后台根据这个key取得文件
    name: "file",
    // header请求头
    headers: {},
    // 额外的传输数据
    data: {},
    // 上传的地址
    host: "",
    // 选择数量
    count: 5,
    // 在上传之前调用
    beforeUpload: () => {
      return true;
    },
    // 创建成功钩子
    created: () => {
    },
    // 是否自动上传
    autoUpload: true
  };
  const _sfc_main$5 = {
    components: {
      ytFileSelector
    },
    props: {
      options: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    created() {
      this._uploadsinit();
      formatAppLog("log", "at components/yt-uploads/yt-uploads.vue:44", "yt-uploads created");
    },
    data() {
      return {
        loadingStaus: false,
        chooseList: [],
        uploadList: []
      };
    },
    computed: {
      opts() {
        if (this._type(this.options) === "object") {
          options = Object.assign(options, this.options);
        }
        return options;
      }
    },
    methods: {
      _selectedHandler(r) {
        this._success({
          "errMsg": "chooseImage:ok",
          "tempFiles": r
        });
      },
      // 初始化
      _uploadsinit() {
        if (this.opts.host === "") {
          throw new Error("props options[host] is not exist at uploads plugs");
        }
        this.opts.created(this);
      },
      _type(val) {
        return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
      },
      upload() {
        let before = this.opts.beforeUpload(this);
        if (!before) {
          return;
        }
        this._sendData();
      },
      select() {
        this._choose();
      },
      // 选择文件方法
      _choose() {
        switch (this.opts.type) {
          case 0:
            this._chooseImages();
            break;
          case 1:
            this._chooseVideos();
            break;
          default:
            this._chooseFiles();
        }
      },
      _chooseFiles() {
        this.$refs.fileSelector.choose();
      },
      // 选择图片
      _chooseImages() {
        let _this = this;
        uni.chooseImage({
          count: this.opts.count - 0,
          success(ret) {
            _this._success(ret);
          },
          fail(ret) {
            this.$emit("fail", { type: 0, data: ret.errMsg });
          }
        });
      },
      // 选择视频
      _chooseVideos() {
        let _this = this;
        uni.chooseVideo({
          count: this.count - this.chooseList.length,
          success(ret) {
            _this._success(ret);
          },
          fail(ret) {
            this.$emit("fail", { type: 0, data: ret.errMsg });
          }
        });
      },
      // 成功的方法
      _success(ret) {
        let _this = this;
        if (ret.errMsg === "chooseImage:ok") {
          let tmp = [];
          ret.tempFiles.forEach((o) => {
            tmp.push({
              state: 0,
              path: o.path,
              size: o.size
            });
          });
          _this.chooseList = tmp;
          if (_this.opts.autoUpload) {
            _this.upload();
            _this.$set(_this, "loadingStaus", true);
          }
          this.$emit("selected", _this.chooseList);
        } else {
          this.$emit("fail", { type: 0, data: ret.errMsg });
        }
      },
      _sendData() {
        let _this = this;
        _this.uploadList = [];
        if (_this.chooseList.length < 1) {
          this.$emit("fail", { type: 0, data: "还没有选择附件" });
          return;
        }
        let flag = 0;
        _this.chooseList.forEach((o, i) => {
          if (o.state === 0) {
            uni.uploadFile({
              url: this.opts.host,
              filePath: o.path,
              name: this.opts.name,
              header: this.opts.headers === null ? {} : this.opts.headers,
              formData: this.opts.data === null ? {} : this.opts.data,
              success(ret) {
                formatAppLog("log", "at components/yt-uploads/yt-uploads.vue:181", "success:", ret);
                if (_this._type(ret.data) === "string") {
                  _this.uploadList.push(JSON.parse(ret.data));
                } else {
                  _this.uploadList.push(ret.data);
                }
                _this.$emit("process", { index: flag, state: 1 });
                flag += 1;
                if (flag >= _this.chooseList.length) {
                  _this.$emit("success", _this.uploadList);
                  _this.chooseList = [];
                  _this.uploadList = [];
                  _this.$set(_this, "loadingStaus", false);
                }
              },
              fail(ret) {
                formatAppLog("log", "at components/yt-uploads/yt-uploads.vue:199", "fail:", ret);
                _this.$emit("process", { index: flag, state: 2 });
                if (_this._type(ret.data) === "string") {
                  _this.uploadList.push(JSON.parse(ret.data));
                } else {
                  _this.uploadList.push(ret.data);
                }
                flag += 1;
                if (flag >= _this.chooseList.length) {
                  _this.$emit("success", _this.uploadList);
                  _this.chooseList = [];
                  _this.uploadList = [];
                  _this.$set(_this, "loadingStaus", false);
                }
              }
            });
          } else {
            flag += 1;
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_yt_file_selector = vue.resolveComponent("yt-file-selector");
    return vue.openBlock(), vue.createElementBlock("view", { class: "yt-uploads" }, [
      vue.createVNode(_component_yt_file_selector, {
        ref: "fileSelector",
        autoclose: false,
        onSelected: $options._selectedHandler
      }, null, 8, ["onSelected"])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__scopeId", "data-v-be00ec14"], ["__file", "E:/HBuilderProjects/time-master/components/yt-uploads/yt-uploads.vue"]]);
  const apiGetNovels = () => {
    return request({
      url: "book/list",
      method: "GET"
    });
  };
  const apiGetNovelChapters = (novelID) => {
    return request({
      url: `book/chapters?NovelID=${novelID}`,
      method: "GET"
    });
  };
  const apiGetNovelChapter = (novelID, chapterNumber) => {
    return request({
      url: `book/chapter?NovelID=${novelID}&ChapterNumber=${chapterNumber}`,
      method: "GET"
    });
  };
  const apiUpdateNovelChapter = (data2) => {
    return request({
      url: `book/updateChapter`,
      method: "POST",
      data: data2
    });
  };
  const _sfc_main$4 = {
    __name: "index",
    setup(__props2) {
      onShow(() => {
        getNovels();
      });
      const novels = vue.ref([]);
      const getNovels = () => {
        apiGetNovels().then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            novels.value = res.data;
            formatAppLog("log", "at subPackages/book/index/index.vue:53", "novels", novels.value);
          }
          novels.value.push({});
        });
      };
      const baseUrl = uni.getStorageSync("BASE_URL");
      const options2 = vue.ref({
        type: 2,
        host: `${baseUrl}book/upload`
      });
      formatAppLog("log", "at subPackages/book/index/index.vue:64", "options", options2);
      const selectedHandler = (selectedData) => {
        formatAppLog("log", "at subPackages/book/index/index.vue:66", "Selected data:", selectedData);
      };
      const successHandler = (successData) => {
        formatAppLog("log", "at subPackages/book/index/index.vue:70", "Success data:", successData);
        let res = successData[0];
        if (res.code === 0 || !res.code) {
          uni.showToast({
            icon: "error",
            title: res.msg || "网络异常"
          });
        } else {
          uni.showToast({
            title: res.msg
          });
          getNovels();
        }
      };
      const failHandler = (error) => {
        formatAppLog("error", "at subPackages/book/index/index.vue:86", "Error:", error);
        uni.showToast({
          icon: "error",
          title: "fail上传失败"
        });
      };
      const processHandler = (progress) => {
        formatAppLog("log", "at subPackages/book/index/index.vue:94", "Upload progress:", progress);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_yt_uploads = resolveEasycom(vue.resolveDynamicComponent("yt-uploads"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "book-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(novels.value, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: vue.normalizeClass(["book-item", index2 % 3 == 1 ? "book-middle" : ""]),
                    key: index2
                  },
                  [
                    index2 != novels.value.length - 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      onClick: ($event) => vue.unref(navTo)(`/subPackages/book/read/index?id=${item.NovelID}&name=${item.Title}`)
                    }, [
                      vue.createElementVNode("view", { class: "book-img" }, [
                        vue.createElementVNode("view", { class: "book-pad" }, [
                          vue.createElementVNode(
                            "view",
                            { class: "book-text ellipsis" },
                            vue.toDisplayString(item.Title),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "book-info" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "book-title ellipsis" },
                          vue.toDisplayString(item.Title),
                          1
                          /* TEXT */
                        ),
                        vue.createCommentVNode(' <view class="book-plan">读到第1章</view> ')
                      ])
                    ], 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "book-add",
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$refs.uploads.select())
                    }, [
                      vue.createElementVNode("view", { class: "add-icon" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "plusempty",
                          size: "50",
                          color: "#ccc"
                        })
                      ]),
                      vue.createElementVNode("view", { class: "add-text" }, "上传本地书")
                    ]))
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createVNode(_component_yt_uploads, {
            ref: "uploads",
            options: options2.value,
            onSelected: selectedHandler,
            onSuccess: successHandler,
            onFail: failHandler,
            onProcess: processHandler
          }, null, 8, ["options"])
        ]);
      };
    }
  };
  const SubPackagesBookIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7b29b7df"], ["__file", "E:/HBuilderProjects/time-master/subPackages/book/index/index.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    setup(__props2) {
      const novelID = vue.ref(0);
      const novelName = vue.ref("");
      const novelHistory = vue.ref({});
      const readSetting = vue.ref({});
      const x = vue.ref("600rpx");
      const y = vue.ref("500rpx");
      onLoad((query) => {
        novelID.value = query.id;
        novelName.value = query.name;
        novelHistory.value = getNovelHistory();
        readSetting.value = uni.getStorageSync("readSetting") || {
          fontSizePercent: 30,
          brightnessPercent: 70,
          themeType: 1
        };
        init();
        getNovelChapters();
      });
      onShow(() => {
        plus.navigator.setFullscreen(true);
        uni.$on("updateOk", (newChapter) => {
          novelChapterArr.value[ccIndex.value].oldContent = newChapter;
          novelChapterArr.value[ccIndex.value].ChapterContent = newChapter.replace(/\r\n|\r|\n/g, "<br>").replace(/ {4}/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
        });
      });
      const getNovelHistory = () => {
        let novelHistoryArr = uni.getStorageSync("readHistory");
        if (novelHistoryArr) {
          let novelHistory2 = novelHistoryArr.find((item) => {
            return item.NovelID == novelID.value;
          });
          if (novelHistory2) {
            return novelHistory2;
          }
          novelHistory2 = {
            ChapterNumber: 1,
            Title: novelName.value,
            NovelID: novelID.value,
            ChapterProgress: 0
          };
          return novelHistory2;
        }
      };
      const init = async () => {
        let initChapterNumber = novelHistory.value.ChapterNumber;
        let chapter = await getNovelChapter(initChapterNumber);
        novelChapterArr.value.push(chapter);
        let chapter1 = await getNovelChapter(initChapterNumber + 1);
        novelChapterArr.value.push(chapter1);
      };
      const scrollToLastRead = (validHeight) => {
        setTimeout(() => {
          let st = validHeight * novelHistory.value.ChapterProgress;
          scrollTop.value = st;
          isInitialized.value = false;
        }, 100);
      };
      const getTotalHeight = () => {
        let totalHeight = 0;
        const promiseList = novelChapterArr.value.map((item, index2) => {
          return getElementHeightById(`novel-chapter-${index2}`).then((height) => {
            totalHeight += height;
            return totalHeight;
          });
        });
        return Promise.all(promiseList).then(() => totalHeight);
      };
      const preloadNextChapter = async () => {
        let chapter = await getNovelChapter(novelChapterArr.value[novelChapterArr.value.length - 1].ChapterNumber + 1);
        novelChapterArr.value.push(chapter);
      };
      const addStartEnd = () => {
        novelChapterArr.value.forEach(async (item, index2) => {
          if (!item.start && !item.end) {
            item.start = index2 > 0 ? novelChapterArr.value[index2 - 1].end : 0;
            let eleHeight = await getElementHeightById(`novel-chapter-${index2}`);
            item.end = item.start + eleHeight;
          }
        });
      };
      const novelChapters = vue.ref([]);
      const novelChapterArr = vue.ref([]);
      const getNovelChapters = () => {
        apiGetNovelChapters(novelID.value).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            novelChapters.value = res.data;
          }
        });
      };
      const isLoading = vue.ref(false);
      const getNovelChapter = (chapterNumber = 1, callback) => {
        return new Promise((resolve, reject) => {
          apiGetNovelChapter(novelID.value, chapterNumber).then((res) => {
            if (res.code === 0 || !res.code) {
              uni.showToast({
                icon: "error",
                title: res.msg || "网络异常"
              });
              reject(new Error("Error in API response"));
            } else {
              callback && callback();
              isLoading.value = false;
              let chapter = res.data[0];
              chapter.oldContent = chapter.ChapterContent;
              chapter.ChapterContent = chapter.ChapterContent.replace(/\r\n|\r|\n/g, "<br>").replace(/ {4}/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
              resolve(chapter);
            }
          }).catch((error) => {
            reject(error);
          });
        });
      };
      const updateBrightness = (e) => {
        readSetting.value.brightnessPercent = e.detail.value;
      };
      const fontSize = vue.computed(() => {
        return readSetting.value.fontSizePercent / 100 * 24 + 12;
      });
      const updateFontSize = (e) => {
        readSetting.value.fontSizePercent = e.detail.value;
      };
      const colorList = [
        { color: "#f8f8f8", type: 1 },
        { color: "#f7f0e6", type: 2 },
        { color: "#dff2dc", type: 3 }
      ];
      const goBack = () => {
        uni.navigateBack();
      };
      const showTab = vue.ref(false);
      const clickContent = () => {
        showTab.value = !showTab.value;
        showMenu.value = false;
        showSetting.value = false;
      };
      const showMenu = vue.ref(false);
      const openMenu = () => {
        showMenu.value = true;
      };
      const showSetting = vue.ref(false);
      const openSetting = () => {
        showSetting.value = true;
      };
      const theme = vue.computed(() => {
        switch (readSetting.value.themeType) {
          case 1:
            return "day-mode";
          case 2:
            return "brown-mode";
          case 3:
            return "green-mode";
          case 4:
            return "night-mode";
          default:
            return "day-mode";
        }
      });
      const switchTheme = (type) => {
        if (type === 4) {
          if (readSetting.value.themeType === 4) {
            readSetting.value.themeType = 1;
            return;
          }
        }
        readSetting.value.themeType = type;
        formatAppLog("log", "at subPackages/book/read/index.vue:283", "readSetting", readSetting.value);
      };
      const scrollTop = vue.ref(1);
      const goTop = vue.ref(false);
      const goToChapter = async (ChapterNumber) => {
        let chapter = await getNovelChapter(ChapterNumber, () => {
          showMenu.value = false;
          novelChapterArr.value = [];
          ccIndex.value = 0;
          ccProgress.value = 0;
          goTop.value = true;
          scrollTop.value = 0;
        });
        novelChapterArr.value.push(chapter);
      };
      const ccIndex = vue.ref(0);
      const ccProgress = vue.ref(0);
      const handleScroll = (e) => {
        if (goTop.value) {
          goTop.value = false;
          scrollTop.value = 1;
        }
        if (!novelChapterArr.value[novelChapterArr.value.length - 1].end) {
          addStartEnd();
        } else {
          ccIndex.value = currentChapter(e.detail.scrollTop);
          ccProgress.value = currentChapterProgress(e.detail.scrollTop, ccIndex.value);
          if (!isLoading.value && ccProgress.value > 0.5 && novelChapterArr.value.length === ccIndex.value + 1) {
            isLoading.value = true;
            preloadNextChapter();
          }
        }
      };
      const currentChapter = (scrollTop2) => {
        let currIndex = 0;
        novelChapterArr.value.forEach((item, index2) => {
          if (scrollTop2 >= item.start && scrollTop2 < item.end) {
            currIndex = index2;
          }
        });
        return currIndex;
      };
      const currentChapterProgress = (scrollTop2, currentChapterIndex) => {
        let progress = (scrollTop2 - novelChapterArr.value[currentChapterIndex].start) / (novelChapterArr.value[currentChapterIndex].end - novelChapterArr.value[currentChapterIndex].start);
        return progress;
      };
      const getElementHeightById = (elementId) => {
        return new Promise((resolve, reject) => {
          const query = uni.createSelectorQuery().in(this);
          query.select("#" + elementId).boundingClientRect((data2) => {
            if (data2) {
              const height = data2.height;
              resolve(height);
            } else {
              reject();
            }
          }).exec();
        });
      };
      const editChapter = () => {
        uni.setStorageSync("editChapter", novelChapterArr.value[ccIndex.value]);
        navTo(`/subPackages/book/edit/index?progress=${ccProgress.value}&themeColor=${theme.value}`);
      };
      const isInitialized = vue.ref(true);
      vue.onUpdated(async () => {
        if (isInitialized.value) {
          ccProgress.value = novelHistory.value ? novelHistory.value.ChapterProgress : 0;
          let totalHeight = await getTotalHeight();
          let eleHeight = await getElementHeightById(`novel-chapter-1`);
          scrollToLastRead(totalHeight - eleHeight);
        }
      });
      vue.onBeforeUnmount(() => {
        saveReadRecord();
        saveReadSetting();
      });
      onUnload(() => {
        plus.navigator.setFullscreen(false);
      });
      const saveReadSetting = () => {
        uni.setStorageSync("readSetting", readSetting.value);
      };
      const saveReadRecord = () => {
        let nHistory = {
          NovelID: novelID.value,
          NovelName: novelName.value,
          ChapterNumber: novelChapterArr.value[ccIndex.value].ChapterNumber,
          ChapterProgress: ccProgress.value
        };
        let readHistory = uni.getStorageSync("readHistory") || [];
        let index2 = readHistory.findIndex((item) => {
          return item.NovelID === nHistory.NovelID;
        });
        if (index2 > -1) {
          readHistory.splice(index2, 1);
          readHistory.push(nHistory);
        } else {
          readHistory.push(nHistory);
        }
        uni.setStorageSync("readHistory", readHistory);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(vue.unref(theme))
          },
          [
            vue.createElementVNode(
              "view",
              {
                class: "novel-reader",
                style: vue.normalizeStyle({ "opacity": readSetting.value.brightnessPercent / 100 })
              },
              [
                vue.createElementVNode("view", { class: "novel-header theme-bgc" }, [
                  vue.createElementVNode("view", {
                    class: "back",
                    onClick: goBack
                  }, [
                    vue.createVNode(_component_uni_icons, {
                      class: "theme-font",
                      type: "arrow-left",
                      size: "30"
                    })
                  ]),
                  novelChapterArr.value[ccIndex.value] ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "chapter-title ellipsis"
                    },
                    " 第" + vue.toDisplayString(novelChapterArr.value[ccIndex.value].ChapterNumber) + "章  " + vue.toDisplayString(novelChapterArr.value[ccIndex.value].ChapterTitle),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode(
                    "view",
                    { class: "chapter-progress" },
                    vue.toDisplayString((ccProgress.value * 100).toFixed(0)) + "%",
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: "novel-content",
                    style: vue.normalizeStyle({ "font-size": vue.unref(fontSize) + "px!important" }),
                    onClick: clickContent
                  },
                  [
                    vue.createElementVNode("scroll-view", {
                      style: { "height": "100vh" },
                      "scroll-y": "",
                      "scroll-top": scrollTop.value,
                      onScroll: handleScroll
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(novelChapterArr.value, (item, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "novel-chapter",
                            id: `novel-chapter-${index2}`,
                            key: index2,
                            innerHTML: item.ChapterContent
                          }, null, 8, ["id", "innerHTML"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 40, ["scroll-top"])
                  ],
                  4
                  /* STYLE */
                ),
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  { class: "navbar theme-bgc" },
                  [
                    vue.createElementVNode("view", {
                      onClick: openMenu,
                      class: "navbar-item"
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        class: "theme-font",
                        "custom-prefix": "iconfont",
                        type: "icon-catalog",
                        size: "30"
                      })
                    ]),
                    vue.createElementVNode("view", {
                      onClick: openSetting,
                      class: "navbar-item"
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        class: "theme-font",
                        "custom-prefix": "iconfont",
                        type: "icon-setup",
                        size: "30"
                      })
                    ]),
                    vue.createElementVNode("view", {
                      onClick: _cache[0] || (_cache[0] = ($event) => switchTheme(4)),
                      class: "navbar-item"
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        class: "theme-font",
                        "custom-prefix": "iconfont",
                        type: "icon-shuimian",
                        size: "30"
                      })
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, showTab.value]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  {
                    class: "sidebar-menu",
                    onClick: _cache[1] || (_cache[1] = ($event) => showMenu.value = false)
                  },
                  [
                    vue.createElementVNode("view", { class: "menu-left" }, [
                      vue.createElementVNode("view", { class: "menu-header theme-bgc-4" }, [
                        vue.createElementVNode(
                          "view",
                          { class: "novel-title ellipsis" },
                          vue.toDisplayString(novelName.value),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          { class: "chapter-num" },
                          "共" + vue.toDisplayString(novelChapters.value.length) + "章",
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("scroll-view", {
                        class: "chapter-list theme-bgc",
                        "scroll-y": ""
                      }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(novelChapters.value, (chapter) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "chapter-item ellipsis",
                              key: chapter.ChapterID
                            }, [
                              vue.createElementVNode("view", {
                                onClick: vue.withModifiers(($event) => goToChapter(chapter.ChapterNumber), ["stop"])
                              }, " 第" + vue.toDisplayString(chapter.ChapterNumber) + "章  " + vue.toDisplayString(chapter.ChapterTitle), 9, ["onClick"])
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, showMenu.value]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  { class: "sidebar-setting theme-bgc" },
                  [
                    vue.createElementVNode("view", { class: "setting-item" }, [
                      vue.createElementVNode("view", { class: "setting-icon" }, [
                        vue.createVNode(_component_uni_icons, {
                          class: "theme-font",
                          "custom-prefix": "iconfont",
                          type: "icon-liangdu-4",
                          size: "30"
                        })
                      ]),
                      vue.createElementVNode("input", {
                        class: "range-input",
                        type: "range",
                        value: readSetting.value.brightnessPercent,
                        onInput: updateBrightness
                      }, null, 40, ["value"]),
                      vue.createElementVNode("view", { class: "setting-icon" }, [
                        vue.createVNode(_component_uni_icons, {
                          class: "theme-font",
                          "custom-prefix": "iconfont",
                          type: "icon-liang-8",
                          size: "30"
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "setting-item" }, [
                      vue.createElementVNode("view", { class: "setting-icon" }, [
                        vue.createVNode(_component_uni_icons, {
                          class: "theme-font",
                          "custom-prefix": "iconfont",
                          type: "icon-ziti-jian",
                          size: "30"
                        })
                      ]),
                      vue.createElementVNode("input", {
                        class: "range-input",
                        type: "range",
                        value: readSetting.value.fontSizePercent,
                        onInput: updateFontSize
                      }, null, 40, ["value"]),
                      vue.createElementVNode("view", { class: "setting-icon" }, [
                        vue.createVNode(_component_uni_icons, {
                          class: "theme-font",
                          "custom-prefix": "iconfont",
                          type: "icon-ziti-jia",
                          size: "30"
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "bgc-setting" }, [
                      (vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(colorList, (item) => {
                          return vue.createElementVNode("view", {
                            class: "color-item",
                            style: vue.normalizeStyle({ "background-color": item.color }),
                            key: item.color,
                            onClick: ($event) => switchTheme(item.type)
                          }, null, 12, ["onClick"]);
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, showSetting.value]
                ])
              ],
              4
              /* STYLE */
            ),
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
                  class: "win-service theme-bgc",
                  onClick: editChapter
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "gear",
                    size: "30",
                    color: "#fff"
                  })
                ])
              ], 8, ["x", "y"])
            ])
          ],
          2
          /* CLASS */
        );
      };
    }
  };
  const SubPackagesBookReadIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-24f694c0"], ["__file", "E:/HBuilderProjects/time-master/subPackages/book/read/index.vue"]]);
  const _sfc_main$2 = {
    __name: "index",
    setup(__props2) {
      const x = vue.ref("600rpx");
      const y = vue.ref("500rpx");
      const windowHeight = vue.ref(0);
      const chapter = vue.ref({});
      const themeColor = vue.ref("day-mode");
      onLoad(async (query) => {
        let progress = query.progress;
        themeColor.value = query.themeColor;
        chapter.value = uni.getStorageSync("editChapter") || "";
        windowHeight.value = await getScreenHeight();
        formatAppLog("log", "at subPackages/book/edit/index.vue:33", "windowHeight", windowHeight.value);
        setTimeout(async () => {
          let eleHeight = await getElementHeightById("edit-textarea");
          formatAppLog("log", "at subPackages/book/edit/index.vue:36", "eleHeight", eleHeight);
          scrollTop.value = (eleHeight - windowHeight.value / 2) * progress - windowHeight.value / 3;
        }, 1e3);
      });
      const scrollTop = vue.ref(1);
      const getScreenHeight = () => {
        return new Promise((resolve, reject) => {
          uni.getSystemInfo({
            success: function(res) {
              resolve(res.windowHeight);
            }
          });
        });
      };
      const getElementHeightById = (elementId) => {
        return new Promise((resolve, reject) => {
          const query = uni.createSelectorQuery().in(this);
          query.select("#" + elementId).boundingClientRect((data2) => {
            if (data2) {
              const height = data2.height;
              resolve(height);
            } else {
              reject();
            }
          }).exec();
        });
      };
      const saveChapter = () => {
        formatAppLog("log", "at subPackages/book/edit/index.vue:69", "chapter", chapter.value);
        apiUpdateNovelChapter({
          ChapterID: chapter.value.ChapterID,
          ChapterContent: chapter.value.oldContent
        }).then((res) => {
          if (res.code === 0 || !res.code) {
            uni.showToast({
              icon: "error",
              title: res.msg || "网络异常"
            });
          } else {
            uni.showToast({
              title: res.msg
            });
            uni.$emit("updateOk", chapter.value.oldContent);
            uni.navigateBack();
          }
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(themeColor.value)
          },
          [
            vue.createElementVNode("scroll-view", {
              "scroll-y": "",
              class: "edit-scroll",
              "scroll-top": scrollTop.value
            }, [
              vue.withDirectives(vue.createElementVNode(
                "textarea",
                {
                  id: "edit-textarea",
                  class: "content-textarea",
                  style: vue.normalizeStyle({ "padding-bottom": windowHeight.value / 2 + "px" }),
                  cursor: 20,
                  "auto-height": "",
                  "adjust-position": false,
                  maxlength: "-1",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => chapter.value.oldContent = $event)
                },
                null,
                4
                /* STYLE */
              ), [
                [vue.vModelText, chapter.value.oldContent]
              ])
            ], 8, ["scroll-top"]),
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
                  class: "win-service theme-bgc",
                  onClick: saveChapter
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "cloud-upload",
                    size: "30",
                    color: "#fff"
                  })
                ])
              ], 8, ["x", "y"])
            ])
          ],
          2
          /* CLASS */
        );
      };
    }
  };
  const SubPackagesBookEditIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d2bf280f"], ["__file", "E:/HBuilderProjects/time-master/subPackages/book/edit/index.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props2) {
      const scrollTop = vue.ref(0);
      const handleScroll = (event) => {
        formatAppLog("log", "at subPackages/test/NumericKeypad/index.vue:14", event.detail.scrollTop);
        formatAppLog("log", "at subPackages/test/NumericKeypad/index.vue:15", "scrollTop", scrollTop.value);
        scrollTop.value = 1e3;
      };
      const setScrollTop = (value) => {
        formatAppLog("log", "at subPackages/test/NumericKeypad/index.vue:20", "setScrollTop", value);
        scrollTop.value = value;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("scroll-view", {
            class: "sv",
            "scroll-y": "",
            "scroll-top": scrollTop.value,
            onScroll: handleScroll
          }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(100, (item) => {
                return vue.createElementVNode(
                  "view",
                  { key: item },
                  vue.toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ], 40, ["scroll-top"]),
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = ($event) => setScrollTop(0))
          }, "回到顶部")
        ]);
      };
    }
  };
  const SubPackagesTestNumericKeypadIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe972938"], ["__file", "E:/HBuilderProjects/time-master/subPackages/test/NumericKeypad/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/mine/index", PagesMineIndex);
  __definePage("pages/note/index", PagesNoteIndex);
  __definePage("pages/plan/index", PagesPlanIndex);
  __definePage("subPackages/login/index/index", SubPackagesLoginIndexIndex);
  __definePage("subPackages/expenses/index/index", SubPackagesExpensesIndexIndex);
  __definePage("subPackages/expenses/add/index", SubPackagesExpensesAddIndex);
  __definePage("subPackages/mine/setting/index", SubPackagesMineSettingIndex);
  __definePage("subPackages/memos/index/index", SubPackagesMemosIndexIndex);
  __definePage("subPackages/memos/add/index", SubPackagesMemosAddIndex);
  __definePage("subPackages/water/index/index", SubPackagesWaterIndexIndex);
  __definePage("subPackages/diary/index/index", SubPackagesDiaryIndexIndex);
  __definePage("subPackages/diary/add/index", SubPackagesDiaryAddIndex);
  __definePage("subPackages/countdowns/index/index", SubPackagesCountdownsIndexIndex);
  __definePage("subPackages/book/index/index", SubPackagesBookIndexIndex);
  __definePage("subPackages/book/read/index", SubPackagesBookReadIndex);
  __definePage("subPackages/book/edit/index", SubPackagesBookEditIndex);
  __definePage("subPackages/test/NumericKeypad/index", SubPackagesTestNumericKeypadIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      const token = uni.getStorageSync("token");
      if (!token) {
        uni.navigateTo({ url: "/subPackages/login/index/index" });
      }
    },
    onShow: function() {
      getApp().globalData.userInfo = uni.getStorageSync("userInfo");
      formatAppLog("log", "at App.vue:12", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:15", "App Hide");
    },
    globalData: {
      // 定义全局变量
      userInfo: null
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
