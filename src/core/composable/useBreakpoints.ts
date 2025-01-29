import { ref, onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

export default function useBreakpoints(): { screenSize: Ref<string> } {
  const screenSize = ref<string>("");

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      screenSize.value = "sm";
    } else if (width < 1024) {
      screenSize.value = "md";
    } else if (width < 1280) {
      screenSize.value = "lg";
    }
  };

  onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { screenSize };
}
