import { describe, it, expect } from "vitest";
import { evaluateTriage } from "./triage";

const base = { familyHistory: false, redFlagCholestasis: false };

describe("evaluateTriage", () => {
  it("classifica alta suspeição com 3 critérios (sem história familiar)", () => {
    const r = evaluateTriage({ ...base, selected: ["cholestasis", "cardiac", "ocular"] });
    expect(r.count).toBe(3);
    expect(r.threshold).toBe(3);
    expect(r.level).toBe("high");
    expect(r.referral).toBe(true);
  });

  it("com história familiar, 2 critérios já são alta suspeição", () => {
    const r = evaluateTriage({
      ...base,
      familyHistory: true,
      selected: ["cholestasis", "cardiac"],
    });
    expect(r.threshold).toBe(2);
    expect(r.level).toBe("high");
    expect(r.referral).toBe(true);
  });

  it("2 critérios sem história familiar é suspeição moderada", () => {
    const r = evaluateTriage({ ...base, selected: ["cardiac", "ocular"] });
    expect(r.level).toBe("moderate");
    expect(r.referral).toBe(false);
  });

  it("nenhum critério e sem red flag é suspeição baixa", () => {
    const r = evaluateTriage({ ...base, selected: [] });
    expect(r.level).toBe("low");
    expect(r.referral).toBe(false);
  });

  it("red flag (colestase persistente/ductopenia) força encaminhamento mesmo sem critérios", () => {
    const r = evaluateTriage({ ...base, selected: [], redFlagCholestasis: true });
    expect(r.level).toBe("moderate");
    expect(r.referral).toBe(true);
  });

  it("ignora ids duplicados e inválidos na contagem", () => {
    const r = evaluateTriage({
      ...base,
      selected: ["cholestasis", "cholestasis", "inexistente"],
    });
    expect(r.count).toBe(1);
  });

  it("emite alerta de atresia biliar em lactente <= 6 meses com colestase", () => {
    const r = evaluateTriage({ ...base, selected: ["cholestasis"], ageMonths: 3 });
    expect(r.differentialAlert).toBeDefined();
  });

  it("não emite alerta de diferencial sem colestase/red flag", () => {
    const r = evaluateTriage({ ...base, selected: ["cardiac"], ageMonths: 3 });
    expect(r.differentialAlert).toBeUndefined();
  });
});
