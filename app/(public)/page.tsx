import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button"
import NeonButton from "../components/NeonButton";

export default function SignIn() {
  return (
    <>

      <div className="w-full h-screen bg-zinc-950 flex items-center justify-center">
        <Card className="w-1/3 h-4/5">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
            <Button variant="outline">Button</Button>
          </CardFooter>
        </Card>
        <NeonButton label="Conectar Sistema" />
      </div>


    </>

  );
}
