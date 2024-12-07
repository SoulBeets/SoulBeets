import { create } from 'zustand'

const supports = ["en", "zh"]

const translation = {
  "en": {
    "bottom-home": "Home",
    "bottom-category": "Category",
    "bottom-statistics": "Statistics",
    "bottom-settings": "Settings",

    "home-library": "Songs",
    "home-cloud": "Cloud",
    "home-local": "Local"
  },
  "zh": {
    "bottom-home": "主页",
    "bottom-category": "分类",
    "bottom-statistics": "统计",
    "bottom-settings": "设置",

    "home-library": "曲库",
    "home-cloud": "云端",
    "home-local": "本地"
  }
}

const useI18nStore = create((set, get) => ({
  i18n: "en",
  translate: (key) => translation[get().i18n][key],
  setI18n: (i18n) => set({ i18n })
}))

export default useI18nStore