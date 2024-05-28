import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { sendGAEvent } from "@next/third-parties/google";

const NewsletterComp = () => {
  return (
    <Card className="p-4 space-y-4 bg-blue-100 dark:bg-neutral-900">
      <h2>Subscribe to my Newsletter</h2>
      <span className="block mb-2">
        Join my newsletter to stay updated about the latest I am working on and
        to share resources.
      </span>

      <div className="flex flex-col md:flex-row gap-2">
        <Input
          placeholder="yourname@example.com"
          className="p-4 bg-blue-50 dark:bg-neutral-800  text-lg"
        />
        <Button
          onClick={() => {
            sendGAEvent({ event: "newsletter_subscribe", value: "true" });
          }}
        >
          Subscribe
        </Button>
      </div>
    </Card>
  );
};

export default NewsletterComp;
