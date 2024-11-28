import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Network, Database, BarChart3, PieChart, LineChart } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    name: 'Cloud Hosting',
    description: 'Scalable cloud solutions for your business',
    icon: 'Cloud'
  },
  {
    id: '2',
    name: 'Network Management',
    description: 'Comprehensive network solutions',
    icon: 'Network'
  },
  {
    id: '3',
    name: 'Database Services',
    description: 'Secure and efficient data management',
    icon: 'Database'
  }
];

const getIcon = (iconName: string) => {
  const icons = {
    Cloud,
    Network,
    Database,
    BarChart3,
    PieChart,
    LineChart
  };
  return icons[iconName as keyof typeof icons];
};

export const RightMenu: React.FC = () => {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      className="w-80 h-full bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-4 overflow-y-auto"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-4">IT Services</h2>
          <div className="space-y-3">
            {services.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 bg-white/50 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Analytics Dashboard</h2>
          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-2">User Interactions</h3>
              <div className="h-32 flex items-center justify-center">
                <BarChart3 className="w-full h-full text-indigo-600 opacity-50" />
              </div>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Response Times</h3>
              <div className="h-32 flex items-center justify-center">
                <LineChart className="w-full h-full text-indigo-600 opacity-50" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};