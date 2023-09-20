import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PanelLeftInactiveIcon,
  Plus,
  PlusCircle,
  PlusIcon,
  PlusSquareIcon,
  SearchXIcon,
  ShieldX,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row justify-between space-x-5">
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>New Journal Entry 🚨</CardTitle>

                <CardDescription>
                  Add your daily journal entry now
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  “Your journal will stand as a chronicle of your growth, your
                  hopes, your fears, your dreams, your ambitions, your sorrows,
                  your serendipities.” — Kathleen Adams
                </p>
              </CardContent>
              <CardFooter>
                <Button>
                  <PlusCircle />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Streak 🔥</CardTitle>
                <CardDescription>
                  Dont lose your daily streak, what are you waiting for?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>21 Days</p>
              </CardContent>
              <CardFooter>
                <p>Lets keep this show on the road</p>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Mood 😆</CardTitle>
                <CardDescription>
                  Heres how you have been feeling over the past 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className=" flex flex-row justify-between space-x-5">
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Habits ✅</CardTitle>
                <CardDescription>
                  Keeping good habits and breaking bad ones, thats the name of
                  the game
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Daily Challenge 🤔</CardTitle>
                <CardDescription>
                  Maybe you're just not up for a challenge ...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>100 push ups in 5 minutes ** +100 XP **</p>
              </CardContent>
              <CardFooter>
                <Button>Upload Challenge</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Past Entries 🔮</CardTitle>
                <CardDescription>
                  The book of your life, search past entries now
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
