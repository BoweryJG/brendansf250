export interface Section {
  id: string;
  title: string;
  content: SectionContent[];
}

export type ContentItem = 
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt: string }
  | { type: 'divider' };

export type SectionContent = 
  | ContentItem
  | { 
      type: 'subsection'; 
      title: string; 
      content: ContentItem[] 
    };

const vehicleSpecifications: Section = {
  id: 'specifications',
  title: 'Vehicle Specifications',
  content: [
    {
      type: 'heading',
      level: 2,
      text: '1997 Ford F250 7.3L Powerstroke Diesel Specifications'
    },
    {
      type: 'subsection',
      title: 'Engine',
      content: [
        {
          type: 'list',
          items: [
            'Engine: 7.3L (444 cu in) Power Stroke V8 Diesel',
            'Engine Code: DIT (Direct Injection Turbocharged)',
            'Horsepower: 210 hp @ 3,000 rpm',
            'Torque: 425 lb-ft @ 2,000 rpm',
            'Compression Ratio: 17.5:1',
            'Bore x Stroke: 4.11 in x 4.18 in',
            'Valvetrain: OHV, 2 valves per cylinder',
            'Turbocharger: Garrett TP38 single turbocharger',
            'Injection System: HEUI (Hydraulic Electronic Unit Injector)'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Drivetrain',
      content: [
        {
          type: 'list',
          items: [
            'Transmission Options: E4OD 4-speed automatic or ZF S5-47 5-speed manual',
            'Transfer Case (4WD models): BW1356 or BW1345',
            'Axle Ratios: 3.55:1 or 4.10:1'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Capacities',
      content: [
        {
          type: 'list',
          items: [
            'Fuel Tank: 19 gallons (standard) or 38 gallons (optional)',
            'Engine Oil: 15 quarts (with filter change)',
            'Transmission Fluid: 17 quarts (E4OD automatic)',
            'Coolant: 27.5 quarts',
            'Front Differential: 5.5 pints',
            'Rear Differential: 6.5 pints'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Dimensions',
      content: [
        {
          type: 'list',
          items: [
            'Wheelbase: 133.0 in (Regular Cab), 155.0 in (SuperCab)',
            'Length: 220.8 in',
            'Width: 79.1 in',
            'Height: 73.5 in',
            'Ground Clearance: 7.2 in'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Weights',
      content: [
        {
          type: 'list',
          items: [
            'Curb Weight: Approximately 5,500-6,500 lbs (depending on configuration)',
            'GVWR: 8,800 lbs',
            'Maximum Towing Capacity: Up to 13,000 lbs (properly equipped)'
          ]
        }
      ]
    }
  ]
};

const maintenanceSchedules: Section = {
  id: 'maintenance',
  title: 'Maintenance Schedules',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Regular Service Intervals'
    },
    {
      type: 'paragraph',
      text: 'As a handy guy with mechanical experience, you\'ll appreciate having a clear maintenance schedule. Here\'s the recommended service intervals for your 1997 F250 7.3L Powerstroke:'
    },
    {
      type: 'subsection',
      title: 'Every 3,000-5,000 Miles (or 3-6 Months)',
      content: [
        {
          type: 'list',
          items: [
            'Engine oil and filter change\n  - Recommended oil: 15W-40 diesel-rated oil (Motorcraft, Rotella, or equivalent)\n  - Oil capacity: 15 quarts with filter\n  - Filter: Motorcraft FL-1995 or equivalent',
            'Check all fluid levels',
            'Inspect air filter',
            'Check tire pressure and condition',
            'Inspect battery connections',
            'Check for any fluid leaks'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Every 10,000 Miles (or 12 Months)',
      content: [
        {
          type: 'list',
          items: [
            'Fuel filter replacement\n  - Fuel filter: Motorcraft FD-4596 or equivalent',
            'Rotate tires',
            'Lubricate steering linkage, driveshaft, U-joints, and ball joints',
            'Inspect brake system',
            'Check glow plug system',
            'Inspect exhaust system',
            'Check and adjust drive belts'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Every 30,000 Miles (or 24 Months)',
      content: [
        {
          type: 'list',
          items: [
            'Transmission service (fluid and filter change)\n  - E4OD transmission fluid capacity: 17 quarts\n  - Recommended fluid: Mercon V',
            'Transfer case fluid change (if 4WD)',
            'Differential fluid change (front and rear)',
            'Replace air filter',
            'Inspect suspension components',
            'Coolant flush and replacement\n  - Capacity: 27.5 quarts\n  - Use Ford-approved extended-life coolant',
            'Inspect and clean battery terminals',
            'Check and adjust valve clearance if necessary'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Every 60,000 Miles (or 48 Months)',
      content: [
        {
          type: 'list',
          items: [
            'Inspect and service turbocharger',
            'Replace fuel return lines if showing signs of deterioration',
            'Inspect and clean injectors if necessary',
            'Check and replace glow plugs if needed',
            'Inspect and service HPOP (High Pressure Oil Pump)',
            'Inspect and service IPR (Injection Pressure Regulator)',
            'Check and service ICP (Injection Control Pressure) sensor'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Every 100,000 Miles',
      content: [
        {
          type: 'list',
          items: [
            'Major engine inspection',
            'Timing gear inspection',
            'Valve cover gasket replacement',
            'Inspect and service water pump',
            'Replace all hoses and belts if not done already'
          ]
        }
      ]
    },
    {
      type: 'heading',
      level: 2,
      text: 'Fluid Specifications'
    },
    {
      type: 'subsection',
      title: 'Engine Oil',
      content: [
        {
          type: 'list',
          items: [
            'Type: 15W-40 diesel-rated oil (API CJ-4 or better)',
            'Capacity: 15 quarts (with filter)',
            'Recommended brands: Motorcraft, Shell Rotella, Valvoline Premium Blue, Mobil Delvac'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Transmission Fluid',
      content: [
        {
          type: 'list',
          items: [
            'Type: Mercon V (automatic) or Synthetic 75W-90 (manual)',
            'Capacity: 17 quarts (E4OD automatic)'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Coolant',
      content: [
        {
          type: 'list',
          items: [
            'Type: Ford-approved extended-life coolant',
            'Capacity: 27.5 quarts'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Power Steering Fluid',
      content: [
        {
          type: 'list',
          items: [
            'Type: Mercon ATF',
            'Check regularly and maintain at proper level'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Brake Fluid',
      content: [
        {
          type: 'list',
          items: [
            'Type: DOT 3 or DOT 4',
            'Replace every 2 years regardless of mileage'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Differential Fluid',
      content: [
        {
          type: 'list',
          items: [
            'Type: 80W-90 gear oil',
            'Front differential capacity: 5.5 pints',
            'Rear differential capacity: 6.5 pints'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Transfer Case Fluid (4WD models)',
      content: [
        {
          type: 'list',
          items: [
            'Type: Mercon ATF',
            'Capacity: Approximately 2 quarts'
          ]
        }
      ]
    }
  ]
};

// Create placeholder data for the remaining sections
const systemsOverview: Section = {
  id: 'systems',
  title: 'Systems Overview',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Engine Systems'
    },
    {
      type: 'paragraph',
      text: 'The 7.3L Powerstroke is a 444 cubic inch, direct-injection, turbocharged V8 diesel engine. It uses a Hydraulic Electronic Unit Injection (HEUI) system, which uses engine oil pressure to actuate the fuel injectors.'
    },
    {
      type: 'subsection',
      title: 'Key Components',
      content: [
        {
          type: 'list',
          items: [
            'Block and Heads: Cast iron block and heads for durability',
            'Injection System: HEUI (Hydraulic Electronic Unit Injector)',
            'High Pressure Oil Pump (HPOP): Provides oil pressure to the injectors',
            'Injection Control Pressure (ICP) Sensor: Monitors oil pressure to the injectors',
            'Injection Pressure Regulator (IPR): Controls oil pressure to the injectors',
            'PCM (Powertrain Control Module): Engine computer that controls timing and fuel delivery',
            'Turbocharger: Garrett TP38 single turbocharger',
            'Intercooler: Air-to-air charge air cooler',
            'Glow Plug System: Aids in cold starting'
          ]
        }
      ]
    }
  ]
};

const troubleshooting: Section = {
  id: 'troubleshooting',
  title: 'Common Issues & Troubleshooting',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Engine Diagnostics'
    },
    {
      type: 'subsection',
      title: 'No Start or Hard Starting',
      content: [
        {
          type: 'paragraph',
          text: 'One of the most common issues with the 7.3L Powerstroke is hard starting, especially in cold weather.'
        },
        {
          type: 'list',
          items: [
            'Symptoms: Engine cranks but won\'t start, especially in cold weather',
            'Possible Causes:\n  - Glow plug system failure\n  - Fuel filter restriction\n  - Low fuel pressure\n  - ICP sensor failure\n  - IPR valve failure\n  - Clogged fuel filter\n  - Air in fuel system\n  - Weak batteries',
            'Diagnostic Steps:\n  - Check glow plug operation with a test light\n  - Check fuel pressure at the filter housing\n  - Inspect fuel filter for contamination\n  - Check ICP sensor reading with a scan tool\n  - Test battery voltage (should be 12.6V or higher)',
            'Solutions:\n  - Replace failed glow plugs or relay\n  - Replace fuel filter and bleed air from system\n  - Replace ICP sensor if faulty\n  - Replace IPR valve if faulty\n  - Replace weak batteries'
          ]
        }
      ]
    }
  ]
};

const repairProcedures: Section = {
  id: 'repair',
  title: 'Repair Procedures',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Oil Change Procedure'
    },
    {
      type: 'subsection',
      title: 'Tools Needed',
      content: [
        {
          type: 'list',
          items: [
            '15mm socket or wrench',
            'Oil filter wrench',
            'Oil drain pan (5+ gallon capacity)',
            'Funnel',
            'Shop rags'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Parts Needed',
      content: [
        {
          type: 'list',
          items: [
            '15 quarts of 15W-40 diesel-rated oil',
            'Oil filter (Motorcraft FL-1995 or equivalent)',
            'Drain plug washer (if required)'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Procedure',
      content: [
        {
          type: 'list',
          items: [
            '1. Warm up the engine to operating temperature',
            '2. Position drain pan under oil pan drain plug',
            '3. Remove drain plug with 15mm socket',
            '4. Allow oil to drain completely (may take 10-15 minutes due to large capacity)',
            '5. While oil is draining, remove oil filter using filter wrench',
            '6. Clean filter mounting surface on engine',
            '7. Apply thin film of clean oil to new filter gasket',
            '8. Install new filter (hand-tight plus 1/4 turn)',
            '9. Reinstall drain plug with new washer if needed (tighten to 25-30 ft-lbs)',
            '10. Fill engine with 14 quarts of oil initially',
            '11. Start engine and check for leaks',
            '12. Shut off engine and wait 5 minutes',
            '13. Check oil level and add remaining oil as needed to bring to "FULL" mark'
          ]
        }
      ]
    }
  ]
};

const performanceUpgrades: Section = {
  id: 'upgrades',
  title: 'Performance Upgrades',
  content: [
    {
      type: 'paragraph',
      text: 'If you\'re interested in improving the performance of your 7.3L Powerstroke, here are some popular upgrades that offer good returns on investment:'
    },
    {
      type: 'subsection',
      title: 'Air Intake Upgrades',
      content: [
        {
          type: 'list',
          items: [
            'Cold Air Intake\n  - Increases airflow to the engine\n  - Typically adds 5-15 horsepower\n  - Relatively easy installation\n  - Recommended brands: K&N, AFE, Banks Power',
            'High-Flow Air Filter\n  - Less restrictive than stock filter\n  - Washable and reusable\n  - Minimal power gains but improved efficiency\n  - Recommended brands: K&N, AFE, AMSOIL'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Exhaust System Upgrades',
      content: [
        {
          type: 'list',
          items: [
            '4-inch Exhaust System\n  - Reduces back pressure\n  - Typically adds 10-20 horsepower and 20-30 lb-ft of torque\n  - Improved fuel economy\n  - Deeper exhaust note\n  - Recommended brands: MBRP, Diamond Eye, Banks Power',
            'High-Flow Up-Pipes\n  - Replaces restrictive stock up-pipes\n  - Reduces turbo lag\n  - Improves exhaust flow\n  - Often includes bellowed sections to prevent cracking\n  - Recommended brands: Bellowed Up-Pipes, Diamond Eye, XDP'
          ]
        }
      ]
    }
  ]
};

const referenceMaterials: Section = {
  id: 'reference',
  title: 'Reference Materials',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Torque Specifications'
    },
    {
      type: 'subsection',
      title: 'Engine',
      content: [
        {
          type: 'list',
          items: [
            'Main cap bolts: 65 ft-lbs + 90° turn',
            'Connecting rod bolts: 45 ft-lbs',
            'Cylinder head bolts: 65 ft-lbs + 90° turn',
            'Rocker arm bolts: 20-25 ft-lbs',
            'Oil pan drain plug: 25-30 ft-lbs',
            'Valve cover bolts: 8-10 ft-lbs',
            'Glow plugs: 15 ft-lbs',
            'Harmonic balancer bolt: 100 ft-lbs + 90° turn',
            'Flywheel bolts: 75 ft-lbs'
          ]
        }
      ]
    },
    {
      type: 'subsection',
      title: 'Drivetrain',
      content: [
        {
          type: 'list',
          items: [
            'Transmission pan bolts: 8-10 ft-lbs',
            'Driveshaft U-joint straps: 15-20 ft-lbs',
            'Transfer case mounting bolts: 35-45 ft-lbs',
            'Differential cover bolts: 30-35 ft-lbs',
            'Differential fill/drain plugs: 15-25 ft-lbs'
          ]
        }
      ]
    },
    {
      type: 'heading',
      level: 2,
      text: 'Diagnostic Trouble Codes'
    },
    {
      type: 'paragraph',
      text: 'Here are some common diagnostic trouble codes (DTCs) for the 7.3L Powerstroke and their meanings:'
    },
    {
      type: 'list',
      items: [
        'P0380: Glow Plug Circuit Malfunction',
        'P0381: Glow Plug Indicator Circuit Malfunction',
        'P0470: Exhaust Pressure Sensor Malfunction',
        'P0471: Exhaust Pressure Sensor Range/Performance',
        'P0472: Exhaust Pressure Sensor Low Input',
        'P0473: Exhaust Pressure Sensor High Input',
        'P0478: Exhaust Temperature Too High',
        'P0480: Fan Control Circuit Malfunction',
        'P1211: ABS/TCS Control Unit Failure',
        'P1280: Injection Control Pressure Out of Range (Low)',
        'P1281: Injection Control Pressure Out of Range (High)'
      ]
    }
  ]
};

export const guideData: Section[] = [
  vehicleSpecifications,
  maintenanceSchedules,
  systemsOverview,
  troubleshooting,
  repairProcedures,
  performanceUpgrades,
  referenceMaterials
];

// Helper function to find a section by ID
export const getSectionById = (id: string): Section | undefined => {
  return guideData.find(section => section.id === id);
};
