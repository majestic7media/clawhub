export function normalizePackageUploadPath(path: string) {
  const trimmed = path.trim().replace(/^\/+|\/+$/g, "");
  if (!trimmed) return "";
  const parts = trimmed.split("/").filter(Boolean);
  if (parts.length <= 1) return parts[0] ?? "";
  return parts.slice(1).join("/");
}
