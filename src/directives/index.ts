import { App, DirectiveBinding } from "vue";

const boldDirective = {
  name: "bold",
  directive: (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.value) {
      el.style.fontWeight = binding.value;
    } else {
      el.style.fontWeight = "bold";
    }
  }
};

export function globalDirectiveRegister(app: App) {
  app.directive(boldDirective.name, boldDirective.directive);
}
