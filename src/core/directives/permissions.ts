import { usePermission } from "@/core/composables/usePermission";
import { type Directive } from "vue";

const permission: Directive = {
  mounted(el: HTMLElement, binding: any) {
    const { value } = binding;
    const { hasPermission } = usePermission();

    if (value && Array.isArray(value)) {
      if (value.length > 0) {
        const hasAccess = hasPermission(value);

        if (!hasAccess) {
          el.parentNode && el.parentNode.removeChild(el);
        }
      }
    } else {
      throw new Error(
        `El valor de la directiva 'v-permission' debería ser un Array! Por ejemplo: v-permission="['admin', 'editor']"`
      );
    }
  },
};

export default permission;
