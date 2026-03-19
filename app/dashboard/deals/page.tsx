import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DealsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <h1 className="text-3xl font-semibold mb-4">Deals</h1>
      <p className="text-muted-foreground mb-6">
        No deals yet. Add a deal to track your sales pipeline.
      </p>
      <Button asChild>
        <Link href="/dashboard/deals/new">Add Deal</Link>
      </Button>
    </div>
  );
}