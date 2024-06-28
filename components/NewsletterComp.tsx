"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { sendGAEvent } from "@next/third-parties/google";
import { addMemberToAudience } from "@/app/actions";
import { useToast } from "./ui/use-toast";

const NewsletterComp = () => {
  const { toast } = useToast();
  const [newsletter, setNewsletter] = useState("");

  return (
    <Card className="p-4 bg-muted dark:bg-card space-y-4">
      <h2>Subscribe to my Newsletter</h2>
      <span className="block mb-2">
        Join my newsletter to stay updated about the latest I am working on and
        to share resources.
      </span>

      <div className="flex flex-col md:flex-row gap-2">
        <Input
          type="email"
          placeholder="yourname@example.com"
          className="p-4"
          value={newsletter}
          onChange={(e) => setNewsletter(e.target.value)}
        />
        <Button
          onClick={async () => {
            console.log("email value is: " + newsletter);
            const response = await addMemberToAudience(newsletter);
            if (response.success) {
              toast({
                title: "Subcsribed 🎉",
                description: "Thank you for subscribing to my newsletter!",
              });
              setNewsletter("");
            } else {
              toast({
                title: "Error ❌",
                description: "Could not subscribe to newsletter.",
                variant: "destructive",
              });
            }
          }}
        >
          Subscribe
        </Button>
      </div>
    </Card>
  );
};

export default NewsletterComp;
