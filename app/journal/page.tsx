import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight pt-12 space-y-4">
          Recent Journal Entries
        </h2>
        <div className="flex justify-center space-x-5 pb-20">
          <div className="w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>11/9/23</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Build a snake game in python! Easy lesson for beginners ...
                </p>
              </CardContent>
              <CardFooter>
                <Link href="">
                  <Button>View Entry</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>10/9/23</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Build a snake game in python! Easy lesson for beginners ...
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/courses/python-basics">
                  <Button>View Entry</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>9/9/23</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Build a snake game in python! Easy lesson for beginners ...
                </p>
              </CardContent>
              <CardFooter>
                <Button>View Entry</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
