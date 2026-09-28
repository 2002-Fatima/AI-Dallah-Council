export const demoSignalKeys = [
  "reservationPressure",
  "expectedDemand",
  "kitchenLoad",
  "customerWaitRisk",
] as const;

export const demoPerspectiveKeys = [
  "operations",
  "business",
  "customer",
] as const;

export type DemoSignalKey = (typeof demoSignalKeys)[number];
export type DemoPerspectiveKey = (typeof demoPerspectiveKeys)[number];

export const demoStageOrder = [
  "situation",
  "signals",
  "council",
  "synthesis",
  "recommendation",
] as const;

export type DemoStageKey = (typeof demoStageOrder)[number];
