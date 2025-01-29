import { ref, onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

export default function useWindowWidth(): { windowWidth: Ref<number> } {
  const windowWidth = ref<number>(window.innerWidth);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { windowWidth };
}
