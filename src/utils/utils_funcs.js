export function addClassToBody(className) {
  if (className && typeof document !== "undefined") {
    document.body.classList.add(className);
    return () => document.body.classList.remove(className);
  }
}
