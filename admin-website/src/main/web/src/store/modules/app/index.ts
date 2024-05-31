import { defineStore } from 'pinia';
import defaultSettings from '@/config/settings.json';
import { AppState } from './types';

const useAppStore = defineStore('app', {
  state: (): AppState => ({ ...defaultSettings }),

  getters: {
    appCurrentSetting(state: AppState): AppState {
      return state;
    },
    appDevice(state: AppState) {
      return state.device;
    },
  },

  actions: {
    // Update app settings
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },

    // updateStep
    updateStep(step: number) {
      this.step = step;
    },

    toggleDevice(device: string) {
      this.device = device;
    },
    toggleMenu(value: boolean) {
      this.hideMenu = value;
    },
    setthemeLightColors(themeLightColors: any) {
      this.themeLightColors = themeLightColors
    }
  },
});

export default useAppStore;
