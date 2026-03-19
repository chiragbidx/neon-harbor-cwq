import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const firstName = user?.firstName || "there";

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <h1 className="text-3xl font-semibold mb-4">Welcome to LeadBase</h1>
      <p className="text-muted-foreground mb-6">
        Get started by adding your first contact or deal.
      </p>
      <div className="flex gap-4">
        <a href="/dashboard/contacts" className="bg-primary text-primary-foreground px-6 py-2 font-semibold rounded-lg hover:bg-primary/90 transition">
          Add Contact
        </a>
        <a href="/dashboard/deals" className="bg-secondary px-6 py-2 rounded-lg hover:bg-secondary/90 transition">
          Add Deal
        </a>
      </div>
    </div>
  );
}