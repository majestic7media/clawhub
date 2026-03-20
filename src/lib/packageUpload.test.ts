/* @vitest-environment node */

import { describe, expect, it } from "vitest";
import { normalizePackageUploadPath } from "./packageUpload";

describe("normalizePackageUploadPath", () => {
  it("strips the picked folder prefix", () => {
    expect(normalizePackageUploadPath("my-plugin/package.json")).toBe("package.json");
    expect(normalizePackageUploadPath("my-plugin/src/index.ts")).toBe("src/index.ts");
  });

  it("keeps flat files unchanged", () => {
    expect(normalizePackageUploadPath("package.json")).toBe("package.json");
  });
});
