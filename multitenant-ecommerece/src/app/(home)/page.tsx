import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant={"elevated"}>Submit</Button>
      <Input placeholder="Type your email..." />
      <Progress value={50} />
      <Textarea placeholder="Type your message here..." />
      <Checkbox />
    </div>
  );
}
