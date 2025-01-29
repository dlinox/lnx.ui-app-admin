import { h } from "vue";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import { renderIcon } from "@/core/utils/icon.utils";
import type { IconName } from "../constans/icons.constants";

export interface MenuItemDTO {
  type?: "group" | "item";
  label: string;
  key: string;
  route: string;
  iconName?: IconName;
  params?: Record<string, string>;
  children?: MenuOption[];
}

export const menuItem = (params: MenuItemDTO): MenuOption => ({
  label: () =>
    h(
      RouterLink,
      {
        to: {
          name: params.route,
          params: params.params || {},
        },
        exact: true,
      },
      {
        default: () => params.label,
      }
    ),
  key: params.key,
  icon: params.iconName ? renderIcon(params.iconName) : undefined,
  children: params.children,
  type: params.children ?? "item",
});
