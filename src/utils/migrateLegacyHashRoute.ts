export function migrateLegacyHashRoute() {
  const legacyPath = window.location.hash.match(/^#(\/.*)$/)?.[1]

  if (!legacyPath) {
    return
  }

  window.history.replaceState(null, '', legacyPath)
}
