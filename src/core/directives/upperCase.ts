import { type Directive } from "vue";

const upperCase: Directive = {
  beforeMount(el) {
    el.addEventListener("input", (event: any) => {
      const value = event.target.value.toUpperCase();
      event.target.value = value;
      event.target.dispatchEvent(new Event("input"));
    });
  },
};

export default upperCase;
