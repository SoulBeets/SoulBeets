import { create } from 'zustand'

const supports = ["en", "zh"]

const translation = {
  "en": {
    "bottom-library": "Songs",
    "bottom-category": "Category",
    "bottom-statistics": "Statistics",
    "bottom-settings": "Settings"
  },
  "zh": {
    "bottom-library": "曲库",
    "bottom-category": "分类",
    "bottom-statistics": "统计",
    "bottom-settings": "设置"
  }
}

const useI18nStore = create((set, get) => ({
  i18n: "en",
  translate: (key) => translation[get().i18n][key],
  setI18n: (i18n) => set({ i18n })
}))

export default useI18nStore