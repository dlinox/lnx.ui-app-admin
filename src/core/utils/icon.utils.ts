import { h } from "vue";
import { NIcon } from "naive-ui";
import { type IconName } from "@/core/constans/icons.constants";

export const renderIcon = (iconName: IconName, color: string = "inherit") => {
  return () =>
    h(
      NIcon,
      {
        color: color,
      },
      {
        default: () =>
          h("svg", { class: "lnx-icon" }, [
            h("use", {
              "xlink:href": `/resources/icons/sprite.svg#icon-${iconName}`,
            }),
          ]),
      }
    );
};
