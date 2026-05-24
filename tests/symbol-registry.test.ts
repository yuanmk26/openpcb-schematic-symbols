import { describe, expect, it } from "vitest";
import { getSymbolSpecById } from "../src";

describe("openpcb-schematic-symbols", () => {
  it("resolves known symbol specs", () => {
    expect(getSymbolSpecById("passive_resistor")?.id).toBe("passive_resistor");
    expect(getSymbolSpecById("passive_capacitor")?.id).toBe("passive_capacitor");
    expect(getSymbolSpecById("connector_header_1x4")?.id).toBe("connector_header_1x4");
  });

  it("returns undefined for unknown symbols", () => {
    expect(getSymbolSpecById("missing_symbol")).toBeUndefined();
  });
});
