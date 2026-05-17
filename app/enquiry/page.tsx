import type { Metadata } from "next";

import { EnquiryView } from "./enquiry-view";

export const metadata: Metadata = {
  title: "Your Enquiry",
  description:
    "Review your workwear enquiry and send via WhatsApp. We'll confirm stock, sizes and freight.",
};

export default function EnquiryPage() {
  return <EnquiryView />;
}
