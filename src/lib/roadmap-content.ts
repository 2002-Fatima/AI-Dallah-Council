export const roadmapStageOrder = [
  "validate",
  "explore",
  "prototype",
  "pilot",
  "build",
] as const;

export const capabilityOrder = [
  "operations",
  "analytics",
  "ai",
  "compliance",
  "payments",
  "customerExperience",
] as const;

export type RoadmapStageKey = (typeof roadmapStageOrder)[number];
export type CapabilityKey = (typeof capabilityOrder)[number];
