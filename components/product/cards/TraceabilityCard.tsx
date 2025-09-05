
import React from 'react';
import { MediumCard } from '@/components/ui/card-variants';
import { Traceability } from '@/data/types';
import { motion } from "framer-motion";
import { CheckCircle2, Star, MapPin, Package } from "lucide-react";
interface TraceabilityCardProps {
  traceability: Traceability;
}

// export const TraceabilityCard: React.FC<TraceabilityCardProps> = ({ traceability }) => (
//   <MediumCard title="Traceability">
//     <div className="space-y-2">
//       {Object.entries(traceability).map(([key, value]) => (
//         <p key={key}>
//           <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
//         </p>
//       ))}
//     </div>
//   </MediumCard>
// );

export const TraceabilityCard: React.FC<{ traceability: Traceability }> = ({ traceability }) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 shadow-md p-5"
  >
    <h3 className="text-lg font-semibold mb-3">📦 Traceability</h3>
    <div className="space-y-3">
      <p className="flex items-center gap-2">
        <MapPin size={16} className="text-indigo-500" />
        <span>
          <strong>Origin:</strong> {traceability.origin}
        </span>
      </p>
      <p className="flex items-center gap-2">
        <Package size={16} className="text-indigo-500" />
        <span>
          <strong>Batch ID:</strong> {traceability.batchId}
        </span>
      </p>
      <p>
        <strong>Processed At:</strong> {traceability.processedAt}
      </p>
    </div>
  </motion.div>
);

