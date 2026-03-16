import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-bg-blush rounded-lg p-8 text-center hover:shadow-lg transition">
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-bg-primary" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
