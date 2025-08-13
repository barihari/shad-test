"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function ComponentsGallery() {
  const [progress, setProgress] = useState(66);

  return (
    <main>
      <h1>Components</h1>
      <p>Gallery of UI components. Grid starts with 3 across.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>Variants</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Input + Label</CardTitle>
            <CardDescription>Text and Textarea</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input placeholder="Type here..." />
            <Textarea placeholder="Multi-line input..." />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Checkbox</CardTitle>
            <CardDescription>Simple state</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Checkbox id="c1" defaultChecked />
            <label htmlFor="c1">Accept terms</label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Radio Group</CardTitle>
            <CardDescription>Single select</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <RadioGroup defaultValue="a">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="a" id="ra" />
                <label htmlFor="ra">Option A</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="b" id="rb" />
                <label htmlFor="rb">Option B</label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Select</CardTitle>
            <CardDescription>Dropdown</CardDescription>
          </CardHeader>
          <CardContent>
            <Select defaultValue="apple">
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Pick one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="cherry">Cherry</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Two tabs</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="one">
              <TabsList>
                <TabsTrigger value="one">One</TabsTrigger>
                <TabsTrigger value="two">Two</TabsTrigger>
              </TabsList>
              <TabsContent value="one" className="pt-2">Tab One Content</TabsContent>
              <TabsContent value="two" className="pt-2">Tab Two Content</TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tooltip</CardTitle>
            <CardDescription>On hover</CardDescription>
          </CardHeader>
          <CardContent>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Tooltip content</TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dialog</CardTitle>
            <CardDescription>Modal window</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog title</DialogTitle>
                  <DialogDescription>Some description here.</DialogDescription>
                </DialogHeader>
                <div>Dialog content...</div>
                <DialogFooter>
                  <Button variant="outline">Close</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert Dialog</CardTitle>
            <CardDescription>Destructive action</CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>Toggle</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Switch id="s1" />
              <label htmlFor="s1">Enable feature</label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Slider</CardTitle>
            <CardDescription>Range</CardDescription>
          </CardHeader>
          <CardContent>
            <Slider defaultValue={[25, 75]} className="w-56" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
            <CardDescription>Value: {progress}%</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Progress value={progress} />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setProgress((v) => Math.max(0, v - 10))}>-10</Button>
              <Button size="sm" onClick={() => setProgress((v) => Math.min(100, v + 10))}>+10</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Separator</CardTitle>
            <CardDescription>Divide content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>Above</div>
              <Separator />
              <div>Below</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatar</CardTitle>
            <CardDescription>With fallback</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/vercel.svg" alt="Avatar" />
              <AvatarFallback>BH</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="" alt="Empty" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badge</CardTitle>
            <CardDescription>Variants</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Table</CardTitle>
            <CardDescription>Basic table</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Ada Lovelace</TableCell>
                  <TableCell>Mathematician</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Alan Turing</TableCell>
                  <TableCell>Computer Scientist</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}


