
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8">This page is under construction as we migrate to React.</p>
            <Link to="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}
