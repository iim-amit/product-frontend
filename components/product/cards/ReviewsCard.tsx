import React from 'react';
import { LargeCard } from '@/components/ui/card-variants';
import { Review } from '@/data/types';
import { Star } from 'lucide-react';

interface ReviewsCardProps {
  reviews: Review[];
}

// export const ReviewsCard: React.FC<ReviewsCardProps> = ({ reviews }) => (
//   <LargeCard title="Reviews">
//     <div className="space-y-4">
//       {reviews.map((review, index) => (
//         <div key={index} className="border-b pb-2">
//           <div className="flex items-center gap-2">
//             <span>{review.user}</span>
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
//                   size={16}
//                 />
//               ))}
//             </div>
//           </div>
//           <p>{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   </LargeCard>
// );


import { motion } from "framer-motion";

export const ReviewsCard: React.FC<{ reviews: Review[] }> = ({ reviews }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="rounded-2xl bg-gradient-to-b from-yellow-50 to-amber-100 shadow-md overflow-hidden"
  >
    {/* Header */}
    <div className="px-5 py-3 bg-gradient-to-r from-yellow-300 to-amber-400">
      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
        ⭐ Reviews
      </h3>
    </div>

    {/* Body */}
    <div className="p-5 space-y-4">
      {reviews.map((review, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-sm p-4 border relative"
        >
          {/* User row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-200 font-semibold">
                {review.user.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium">{review.user}</span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  className={`transition-transform ${
                    j < review.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Comment */}
          <p className="text-gray-700 italic">“{review.comment}”</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

