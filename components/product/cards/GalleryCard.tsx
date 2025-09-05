
import React from 'react';
import Image from 'next/image';
import { LargeCard } from '@/components/ui/card-variants';
import { motion } from "framer-motion";
interface GalleryCardProps {
  gallery: string[];
  productName: string;
}

export const GalleryCard: React.FC<{ gallery: string[]; productName: string }> = ({
  gallery,
  productName,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="rounded-2xl bg-white shadow-lg p-5"
  >
    <h3 className="text-lg font-semibold mb-3">🖼 Gallery</h3>
    <div className="grid grid-cols-2 gap-3">
      {gallery.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-lg shadow-sm"
        >
          <Image
            src={img}
            alt={`${productName} image ${i + 1}`}
            width={200}
            height={200}
            className="w-full h-40 object-cover"
          />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// export const GalleryCard: React.FC<GalleryCardProps> = ({ gallery, productName }) => (
//   <LargeCard title="Gallery">
//     <div className="grid grid-cols-2 gap-2">
//       {gallery.map((img, index) => (
//         <Image
//           key={index}
//           src={img}
//           alt={`${productName} gallery image ${index + 1}`}
//           width={150}
//           height={100}
//           className="rounded-md object-cover"
//         />
//       ))}
//     </div>
//   </LargeCard>
// );
