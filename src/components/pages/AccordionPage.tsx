import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export function AccordionPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Accordion</h2>
          <Badge>Layout</Badge>
        </div>
        <p className="text-muted-foreground">
          A vertically stacked set of interactive headings that reveal content
        </p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Single Open</CardTitle>
          <CardDescription>Only one item can be open at a time</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern and follows WCAG 2.1 Level AA guidelines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match your design system but can be customized.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with smooth transitions for opening and closing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Open</CardTitle>
          <CardDescription>Multiple items can be open simultaneously</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="feature-1">
              <AccordionTrigger>Feature One</AccordionTrigger>
              <AccordionContent>
                This is the content for feature one. Multiple items can be expanded at the same time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="feature-2">
              <AccordionTrigger>Feature Two</AccordionTrigger>
              <AccordionContent>
                This is the content for feature two. All items remain independent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="feature-3">
              <AccordionTrigger>Feature Three</AccordionTrigger>
              <AccordionContent>
                This is the content for feature three. Expand as many as needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FAQ Example</CardTitle>
          <CardDescription>Common use case for accordions</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>How long is the free trial?</AccordionTrigger>
              <AccordionContent>
                Our free trial lasts for 14 days with full access to all features. No credit card required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
              <AccordionContent>
                Yes, you can cancel your subscription at any time. No questions asked, no cancellation fees.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
