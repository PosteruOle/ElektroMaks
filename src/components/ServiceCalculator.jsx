
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog.jsx';
import { useLanguage } from '@/hooks/useLanguage.js';
import { useToast } from '@/hooks/use-toast.js';

const ServiceCalculator = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState([]);
  const [showQuote, setShowQuote] = useState(false);

  const services = [
    { id: 'installation', name: t.calculator.servicesList.installation, price: 50 },
    { id: 'repair', name: t.calculator.servicesList.repair, price: 30 },
    { id: 'inspection', name: t.calculator.servicesList.inspection, price: 25 },
    { id: 'wiring', name: t.calculator.servicesList.wiring, price: 40 },
    { id: 'emergency', name: t.calculator.servicesList.emergency, price: 60 },
    { id: 'general', name: t.calculator.servicesList.general, price: 35 }
  ];

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  const handleGetQuote = () => {
    if (selectedServices.length === 0) {
      toast({
        title: t.calculator.noServices,
        variant: "destructive"
      });
      return;
    }
    setShowQuote(true);
  };

  const totalPrice = calculateTotal();

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>{t.calculator.selectServices}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    id={service.id}
                    checked={selectedServices.includes(service.id)}
                    onCheckedChange={() => handleServiceToggle(service.id)}
                    className="transition-all duration-200"
                  />
                  <label
                    htmlFor={service.id}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {service.name}
                  </label>
                </div>
                <span className="text-sm font-semibold text-primary">€{service.price}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-semibold">{t.calculator.totalPrice}</span>
            <span className="text-3xl font-bold text-primary">€{totalPrice}</span>
          </div>
          <Button 
            onClick={handleGetQuote}
            className="w-full transition-all duration-200 active:scale-98"
            size="lg"
          >
            {t.calculator.getQuote}
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showQuote} onOpenChange={setShowQuote}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t.calculator.quoteSummary}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <span className="text-sm font-semibold text-muted-foreground mb-3 block">
                {t.calculator.selectedServices}
              </span>
              <div className="space-y-2">
                {selectedServices.map(serviceId => {
                  const service = services.find(s => s.id === serviceId);
                  return (
                    <div key={serviceId} className="flex justify-between items-center p-3 rounded-lg bg-muted">
                      <span className="text-sm">{service?.name}</span>
                      <span className="text-sm font-semibold">€{service?.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{t.calculator.totalPrice}</span>
                <span className="text-2xl font-bold text-primary">€{totalPrice}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              onClick={() => setShowQuote(false)}
              variant="outline"
              className="transition-all duration-200"
            >
              {t.calculator.close}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceCalculator;
