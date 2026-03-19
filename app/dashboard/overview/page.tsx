export default function OverviewPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-semibold mb-4">Overview</h1>
      <p className="text-muted-foreground mb-4">
        View your CRM activity and recent updates at a glance.
      </p>
      <div className="w-full max-w-xl border rounded-lg bg-card p-6">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-muted-foreground">No recent activity yet. Add contacts or deals to populate your dashboard.</span>
        </div>
      </div>
    </div>
  );
}