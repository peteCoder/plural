"use client";

import { Agency } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useForm } from 'react-hook-form';

import {zodResolver} from "@hookform/resolvers/zod"

import * as z from "zod";
import { Form, FormField, FormItem, FormLabel } from '../ui/form';

interface Props {
  data?: Partial<Agency>;
}

const AgencyDetails = ({ data } : Props) => {

  const { toast } = useToast();
  const router = useRouter()

  const [deletingAgency, setDeletingAgency] = useState(false);

  const FormSchema = z.object({
    name: z.string().min(2, {message: "Agency name must be at least two characters."}),
    agencyLogo: z.string().min(2, {message: "Agency Logo must be at least two characters."}),
    companyEmail: z.string().email({message: "Enter a valid email."}).min(2, {message: "Email must be at least two characters."}),
    companyPhone: z.string().min(2, {message: "Company Phone must be at least two characters."}),
    whiteLabel: z.boolean(),
    address: z.string().min(2, {message: "Address must be at least two characters."}),
    city: z.string().min(2, {message: "City must be at least two characters."}),
    zipCode: z.string().min(2, {message: "Zip Code must be at least two characters."}),
    state: z.string().min(2, {message: "State must be at least two characters."}),
    country: z.string().min(2, {message: "Country must be at least two characters."}),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      address: data?.address,
      city: data?.city,
      companyEmail: data?.companyEmail,
      agencyLogo: data?.agencyLogo,
      companyPhone: data?.companyPhone,
      country: data?.country,
      name: data?.name,
      state: data?.state,
      zipCode: data?.zipCode,
      whiteLabel: data?.whiteLabel || false,
    }
  });

  const formIsLoading = form.formState.isSubmitting;

  // Submit form Function
  const onSubmitAgencyForm = (values: z.infer<typeof FormSchema>) => {
    // Extract  the form values from here...
    const {} = values;
  }


  useEffect(() => {
    if (data) {
      form.reset(data)
    }
  }, [data])
  
  return (
    <AlertDialog>
      <Card>
        <CardHeader>
          <CardTitle>Agency Information</CardTitle>
          <CardDescription>
            Let's create an agency for your business. 
            You can edit agency settings later from the agency settings tab.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitAgencyForm)}
              className='space-y-4'
            >
              {/* Continue from here 2:26:26 */}
              <FormField 
                disabled={formIsLoading} 
                control={form.control}
                name="agencyLogo"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      Agency Logo
                    </FormLabel>

                  </FormItem>
                  
                )}
              >

              </FormField>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AlertDialog>
  )
}

export default AgencyDetails;