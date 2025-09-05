
import React from 'react';
import { SmallCard } from '@/components/ui/card-variants';

interface FeaturesCardProps {
  features: string[];
}

// export const FeaturesCard: React.FC<FeaturesCardProps> = ({ features }) => (
//   <SmallCard title="Features" className="bg-white">
//     <ul className="list-disc pl-4">
//       {features.map((feature, index) => (
//         <li key={index}>{feature}</li>
//       ))}
//     </ul>
//   </SmallCard>
// );
import { CheckCircle2, Star, MapPin, Package } from "lucide-react";

import { motion } from "framer-motion";
export const FeaturesCard: React.FC<{ features: string[] }> = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 shadow-md p-5"
  >
    <h3 className="text-lg font-semibold mb-3">✨ Features</h3>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-2 text-gray-700">
          <CheckCircle2 className="text-emerald-500" size={18} />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);