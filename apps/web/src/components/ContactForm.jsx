
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.jsx';
import { useToast } from '@/hooks/use-toast.js';
import { useLanguage } from '@/hooks/useLanguage.js';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(6, 'Phone number is required'),
    serviceType: z.string().min(1, 'Please select a service'),
    message: z.string().min(10, 'Message must be at least 10 characters')
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...data,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast({
        title: t.contact.successMessage,
        description: "We'll get back to you soon."
      });

      form.reset();
    } catch (error) {
      toast({
        title: t.contact.errorMessage,
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { value: 'installation', label: t.calculator.servicesList.installation },
    { value: 'repair', label: t.calculator.servicesList.repair },
    { value: 'inspection', label: t.calculator.servicesList.inspection },
    { value: 'wiring', label: t.calculator.servicesList.wiring },
    { value: 'emergency', label: t.calculator.servicesList.emergency },
    { value: 'general', label: t.calculator.servicesList.general }
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.contact.name}</FormLabel>
              <FormControl>
                <Input 
                  placeholder={t.contact.namePlaceholder} 
                  {...field}
                  className="transition-all duration-200 focus:ring-2 focus:ring-ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.contact.email}</FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  placeholder={t.contact.emailPlaceholder} 
                  {...field}
                  className="transition-all duration-200 focus:ring-2 focus:ring-ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.contact.phone}</FormLabel>
              <FormControl>
                <Input 
                  placeholder={t.contact.phonePlaceholder} 
                  {...field}
                  className="transition-all duration-200 focus:ring-2 focus:ring-ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.contact.serviceType}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-ring">
                    <SelectValue placeholder={t.contact.selectService} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.contact.message}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t.contact.messagePlaceholder}
                  className="min-h-[120px] transition-all duration-200 focus:ring-2 focus:ring-ring resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full transition-all duration-200 active:scale-98"
          disabled={isSubmitting}
        >
          {isSubmitting ? t.contact.sending : t.contact.submit}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
