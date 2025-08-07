// This is a server action.
'use server';

/**
 * @fileOverview Dynamic slogan generation flow for marketing engagement.
 *
 * This file exports:
 * - `generateSlogan`: A function that generates a slogan based on product categories and user behavior.
 * - `SloganInput`: The input type for the `generateSlogan` function.
 * - `SloganOutput`: The output type for the `generateSlogan` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SloganInputSchema = z.object({
  productCategory: z
    .string()
    .describe('The category of the product being displayed.'),
  userBrowsingHistory: z
    .string()
    .describe(
      'A brief summary of the users recent browsing history on the website.'
    ),
});
export type SloganInput = z.infer<typeof SloganInputSchema>;

const SloganOutputSchema = z.object({
  slogan: z.string().describe('A catchy slogan for the product.'),
});
export type SloganOutput = z.infer<typeof SloganOutputSchema>;

export async function generateSlogan(input: SloganInput): Promise<SloganOutput> {
  return generateSloganFlow(input);
}

const sloganPrompt = ai.definePrompt({
  name: 'sloganPrompt',
  input: {schema: SloganInputSchema},
  output: {schema: SloganOutputSchema},
  prompt: `You are a marketing expert specializing in creating catchy slogans.

  Generate a slogan for a product based on its category and the user's browsing history.

  Product Category: {{{productCategory}}}
  User Browsing History: {{{userBrowsingHistory}}}

  Slogan:`,
});

const generateSloganFlow = ai.defineFlow(
  {
    name: 'generateSloganFlow',
    inputSchema: SloganInputSchema,
    outputSchema: SloganOutputSchema,
  },
  async input => {
    const {output} = await sloganPrompt(input);
    return output!;
  }
);
