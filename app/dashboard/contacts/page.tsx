import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <h1 className="text-3xl font-semibold mb-4">Contacts</h1>
      <p className="text-muted-foreground mb-6">No contacts yet. Add your first contact to get started.</p>
      <Button asChild>
        <Link href="/dashboard/contacts/new">Add Contact</Link>
      </Button>
    </div>
  );
}