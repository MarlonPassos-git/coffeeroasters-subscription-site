export function lockBodyScroll(isLocked: boolean): void {
  if (isLocked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

}