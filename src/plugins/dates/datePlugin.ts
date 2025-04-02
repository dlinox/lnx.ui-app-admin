import { type App } from "vue";

const datePlugin = {
  install(app: App) {
    app.config.globalProperties.$formatDate = (dateString: string): string => {
      const fecha = new Date(dateString);
      const formato = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "long",
      }).format(fecha);
      return formato.replace(" ", " de ");
    };
  },
};

export default datePlugin;
