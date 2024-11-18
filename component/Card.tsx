import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Avatar from "./Avatar"

export function CardComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>俺ちゃんさん</CardTitle>
        <CardDescription>Developer</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
            <Avatar />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        footer
      </CardFooter>
    </Card>
  )
}
