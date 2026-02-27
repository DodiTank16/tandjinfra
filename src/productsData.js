import {
  boundaryWallImages,
  bricksWallImages,
  heavyDutyPrecastBoundaryWallImages,
  rccPrestressedWallImages,
  rccWallImages,
  hollowCoreSlabBoundaryWallImages,
  precastUDrainImages,
  precastManholeImages,
  rccHumePipeImages,
  chamberManholeCoverImages,
  rccHalfRoundImages,
  cableTrenchImages,
  saucerDrainImages,
  boxCulvertImages,
  frictionSlabCrashBarrierImages,
  reWallImages,
  precastBeamImages,
  railwaySleepersImages,
  routeMarkerImages,
  boundaryMarkerImages,
  mileStoneImages,
  bollardImages,
  crashBarrierImages,
  fencingPoleImages,
  paverBlockImages,
  gardenCurbStoneImages,
  benchImages,
  decorativeWallImages,
  chainLinkImages,
  barbedWireFencingImages,
  weldedWireMeshFencingImages,
  pebStructureImages,
  mouldForPrecastProductImages,
  msSignboardImages,
  barricadingBoardImages,
  safetyBarrierImages,
  reflectiveMarkerImages,
  warningMarkerImages,
  kmMarkerImages,
  directionMarkerImages,
  aerialMarkerImages,
  industrialShedImages,
  commercialShedImages,
  parkingShedImages,
  onePieceCastingWallImages,
} from "./productsImages";

export const categories = [
  {
    id: "precast-prestressed",
    name: "PRECAST & Pre-Stressed product",
    subCategories: [
      {
        id: "boundary-wall",
        name: "Boundary Wall",
      },
      {
        id: "drainage-solutions",
        name: "Drainage Solutions / Drains & Utility Ducts",
      },
      {
        id: "bridge-structure",
        name: "RCC Precast Structure for Bridge & Structure Work",
      },
      {
        id: "safety-demarcation",
        name: "Safety & Demarcation",
      },
      {
        id: "decorative-items",
        name: "Decorative Items (Precast)",
      },
    ],
  },
  {
    id: "fabricated-products",
    name: "Fabricated Products",
    subCategories: [
      {
        id: "security-fence",
        name: "Security Fence",
      },
      {
        id: "structure-work",
        name: "Structure Work",
      },
      {
        id: "safety",
        name: "Safety",
      },
    ],
  },
  {
    id: "demarcation",
    name: "Demarcation (Pole Marker)",
    subCategories: [
      {
        id: "warning-marker",
        name: "Warning Marker",
      },
      {
        id: "km-marker",
        name: "KM Marker",
      },
      {
        id: "direction-marker",
        name: "Direction Marker",
      },
      {
        id: "aerial-marker",
        name: "Aerial Marker",
      },
    ],
  },
  {
    id: "shed",
    name: "Shed",
    subCategories: [
      {
        id: "industrial-shed",
        name: "Industrial Shed",
      },
      {
        id: "commercial-shed",
        name: "Commercial Shed",
      },
      {
        id: "parking-shed",
        name: "Parking Shed",
      },
    ],
  },
];

export const products = [
  // Boundary Wall
  {
    id: 1,
    name: "RCC Precast Boundary / Compound Wall",
    subCategory: "boundary-wall",
    image: boundaryWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 2,
    name: "RCC Prestressed Wall",
    subCategory: "boundary-wall",
    image: rccPrestressedWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 3,
    name: "Bricks Wall",
    subCategory: "boundary-wall",
    image: bricksWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 4,
    name: "Heavy Duty Precast Boundary Wall",
    subCategory: "boundary-wall",
    image: heavyDutyPrecastBoundaryWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 5,
    name: "One Piece Casting Wall",
    subCategory: "boundary-wall",
    image: onePieceCastingWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 6,
    name: "RCC Wall",
    subCategory: "boundary-wall",
    image: rccWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 7,
    name: "Hollow Core Slab Boundary Wall",
    subCategory: "boundary-wall",
    image: hollowCoreSlabBoundaryWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Drainage Solutions
  {
    id: 8,
    name: "Precast U Drain",
    subCategory: "drainage-solutions",
    image: precastUDrainImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 9,
    name: "Precast Manhole",
    subCategory: "drainage-solutions",
    image: precastManholeImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 10,
    name: "RCC & Hume Pipe",
    subCategory: "drainage-solutions",
    image: rccHumePipeImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 11,
    name: "Chamber / Manhole Cover",
    subCategory: "drainage-solutions",
    image: chamberManholeCoverImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 12,
    name: "RCC Half Round",
    subCategory: "drainage-solutions",
    image: rccHalfRoundImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 13,
    name: "Cable Trench",
    subCategory: "drainage-solutions",
    image: cableTrenchImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 14,
    name: "Saucer Drain",
    subCategory: "drainage-solutions",
    image: saucerDrainImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Bridge & Structure
  {
    id: 15,
    name: "Box Culvert",
    subCategory: "bridge-structure",
    image: boxCulvertImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 16,
    name: "Friction Slab / Crash Barrier",
    subCategory: "bridge-structure",
    image: frictionSlabCrashBarrierImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 17,
    name: "RE Wall",
    subCategory: "bridge-structure",
    image: reWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 18,
    name: "Precast Beam",
    subCategory: "bridge-structure",
    image: precastBeamImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 19,
    name: "Railway Sleepers",
    subCategory: "bridge-structure",
    image: railwaySleepersImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Safety & Demarcation
  {
    id: 20,
    name: "Route Marker",
    subCategory: "safety-demarcation",
    image: routeMarkerImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 21,
    name: "Boundary Marker",
    subCategory: "safety-demarcation",
    image: boundaryMarkerImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 22,
    name: "Mile Stone",
    subCategory: "safety-demarcation",
    image: mileStoneImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 23,
    name: "Bollard",
    subCategory: "safety-demarcation",
    image: bollardImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 24,
    name: "Crash Barrier",
    subCategory: "safety-demarcation",
    image: crashBarrierImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 25,
    name: "Fencing Pole",
    subCategory: "safety-demarcation",
    image: fencingPoleImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Decorative
  {
    id: 26,
    name: "Paver Block",
    subCategory: "decorative-items",
    image: paverBlockImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 27,
    name: "Garden Curb Stone",
    subCategory: "decorative-items",
    image: gardenCurbStoneImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 28,
    name: "Bench",
    subCategory: "decorative-items",
    image: benchImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 29,
    name: "Decorative Wall",
    subCategory: "decorative-items",
    image: decorativeWallImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Fabricated – Security Fence
  {
    id: 30,
    name: "Chain Link",
    subCategory: "security-fence",
    image: chainLinkImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 31,
    name: "Barbed Wire Fencing",
    subCategory: "security-fence",
    image: barbedWireFencingImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 32,
    name: "Welded Wire Mesh Fencing",
    subCategory: "security-fence",
    image: weldedWireMeshFencingImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Structure Work
  {
    id: 33,
    name: "PEB Structure",
    subCategory: "structure-work",
    image: pebStructureImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 34,
    name: "Mould for Precast Product",
    subCategory: "structure-work",
    image: mouldForPrecastProductImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Safety (MS)
  {
    id: 35,
    name: "MS Signboard",
    subCategory: "safety",
    image: msSignboardImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 36,
    name: "Barricading Board",
    subCategory: "safety",
    image: barricadingBoardImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 37,
    name: "Safety Barrier",
    subCategory: "safety",
    image: safetyBarrierImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 38,
    name: "Reflective Marker",
    subCategory: "safety",
    image: reflectiveMarkerImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Demarcation (Pole Marker)
  {
    id: 39,
    name: "Warning Marker",
    subCategory: "warning-marker",
    image: warningMarkerImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 40,
    name: "Km Marker",
    subCategory: "km-marker",
    image: kmMarkerImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 41,
    name: "Direction Marker",
    subCategory: "direction-marker",
    image: directionMarkerImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 42,
    name: "Aerial Marker",
    subCategory: "aerial-marker",
    image: aerialMarkerImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },

  // Shed
  {
    id: 43,
    name: "Industrial Shed",
    subCategory: "industrial-shed",
    image: industrialShedImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 44,
    name: "Commercial Shed",
    subCategory: "commercial-shed",
    image: commercialShedImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
  {
    id: 45,
    name: "Parking Shed",
    subCategory: "parking-shed",
    image: parkingShedImages,
    description:
      "High-strength RCC precast boundary wall suitable for industrial, residential and infrastructure projects.",
  },
];
