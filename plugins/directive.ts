import DOMPurify from "dompurify";

const injectSanitized = (el: HTMLElement, { value }: { value: string }) => {
  el.innerHTML = DOMPurify.sanitize(value);
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("safeHtml", {
    mounted: injectSanitized,
    updated: injectSanitized,
  });
});
