import { App, DirectiveBinding } from "vue";

const boldDirective = {
  name: "bold",
  main: (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.value) {
      el.style.fontWeight = binding.value;
    } else {
      el.style.fontWeight = "bold";
    }
  }
};

export const directives = {
  install(app: App) {
    app.directive(boldDirective.name, boldDirective.main);
  }
};
