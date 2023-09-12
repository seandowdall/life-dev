import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function JournalPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight pt-6 space-y-4">
          Daily Journal
        </h2>
        <div className="flex flex-row items-center space-x-2 pt-5">
          <Label htmlFor="freestyle">Freestyle</Label>
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Prompted</Label>
        </div>
        <div className="grid w-full gap-2 pt-5">
          <Textarea placeholder="Type your message here." />
          <Button>Add Journal Entry</Button>
        </div>
      </div>
    </div>
  );
}
