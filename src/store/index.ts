import { useUserStore } from "./useUserStore";

export const store = {
  install() {
    useUserStore();
  }
};
