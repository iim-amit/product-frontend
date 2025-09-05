import React from 'react';
//import { MediumCard } from '@/components/ui/card-variants';
import { Nutrition } from '@/data/types';
import { motion } from "framer-motion";

// interface NutritionCardProps {
//   nutrition: Nutrition;
// }

export const NutritionCard: React.FC<{ nutrition: Nutrition }> = ({ nutrition }) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="rounded-2xl bg-gradient-to-r from-orange-50 to-amber-100 shadow-md p-5"
  >
    <h3 className="text-lg font-semibold mb-3">🥗 Nutrition</h3>
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(nutrition).map(([key, value]) => (
        <div key={key} className="flex flex-col items-start">
          <span className="text-sm font-medium capitalize">{key}</span>
          <span className="px-2 py-1 mt-1 text-sm rounded-md bg-white shadow-sm">
            {value}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

// export const NutritionCard: React.FC<NutritionCardProps> = ({ nutrition }) => (
//   <MediumCard title="Nutrition">
//     <div className="space-y-2">
//       {Object.entries(nutrition).map(([key, value]) => (
//         <p key={key}>
//           <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
//         </p>
//       ))}
//     </div>
//   </MediumCard>
// );