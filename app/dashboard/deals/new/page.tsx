import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddDealPage() {
  return (
    <div className="max-w-lg mx-auto flex flex-col items-center h-full min-h-[60vh] pt-8">
      <h1 className="text-2xl font-semibold mb-4">Add Deal</h1>
      <p className="text-muted-foreground mb-6">
        Create a new deal to track your sales opportunities.
      </p>
      <div className="w-full border rounded-lg bg-card p-6">
        {/* Placeholder for deal form - coming next release */}
        <div className="flex flex-col items-center space-y-4">
          <span className="text-muted-foreground">Deal form coming soon.</span>
          <Button asChild variant="outline">
            <Link href="/dashboard/deals">Cancel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}