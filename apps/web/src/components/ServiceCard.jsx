
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card.jsx';
import { Check } from 'lucide-react';

const ServiceCard = ({ title, description, benefits, image, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
        <div className={`${!isEven ? 'md:order-2' : ''}`}>
          {image && (
            <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>

        <div className={`${!isEven ? 'md:order-1' : ''}`}>
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="text-base">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
