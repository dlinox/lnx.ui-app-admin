import { useAuthStore } from "@/app/store/auth.stores";

export function usePermission() {
  const authStore = useAuthStore();
  const stringPermissions = authStore.authState.permissions;
  const role = authStore.authState.user?.role;
  const authPermissions: string[] = stringPermissions.split("|");

  function hasPermission(requiredPermissions: string[]): boolean {
    if (role === "super") return true;

    if (requiredPermissions && Array.isArray(requiredPermissions)) {
      if (requiredPermissions.length > 0) {
        return authPermissions.some((permission) =>
          requiredPermissions.includes(permission)
        );
      }
    } else {
      throw new Error(
        `El parámetro 'requiredPermissions' debe ser un Array! Por ejemplo: ['admin', 'editor']`
      );
    }

    return false;
  }

  return { hasPermission };
}
