import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Sparkles } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50">
      <div className="space-y-8 pb-12">
        {/* Header Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Overview
            </h1>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-full">
              <Sparkles size={12} className="text-indigo-600" />
              <span className="text-xs font-medium text-indigo-700">AI Powered</span>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            Track your finances with intelligent insights
          </p>
        </div>

        {/* Budget Progress - Premium Card */}
        <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <BudgetProgress
            initialBudget={budgetData?.budget}
            currentExpenses={budgetData?.currentExpenses || 0}
          />
        </div>

        {/* Dashboard Overview - Glass Card */}
        <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-sm">
          <DashboardOverview
            accounts={accounts}
            transactions={transactions || []}
          />
        </div>

        {/* Accounts Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Accounts
            </h2>
            <span className="text-sm text-slate-500">
              {accounts?.length || 0} {accounts?.length === 1 ? 'account' : 'accounts'}
            </span>
          </div>

          {/* Accounts Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Add Account Card - Minimal Dashed */}
            <CreateAccountDrawer>
              <Card className="group relative overflow-hidden border-2 border-dashed border-slate-200 hover:border-slate-300 bg-white/50 hover:bg-white/80 backdrop-blur-sm transition-all duration-300 cursor-pointer rounded-2xl">
                <CardContent className="flex flex-col items-center justify-center text-slate-400 group-hover:text-slate-600 h-48 transition-colors">
                  <div className="mb-3 p-4 rounded-full bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <Plus className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <p className="text-sm font-medium">Add New Account</p>
                  <p className="text-xs text-slate-400 mt-1">Get started with a new account</p>
                </CardContent>
              </Card>
            </CreateAccountDrawer>

            {/* Account Cards */}
            {accounts.length > 0 &&
              accounts?.map((account) => (
                <div 
                  key={account.id}
                  className="transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <AccountCard account={account} />
                </div>
              ))}
          </div>

          {/* Empty State */}
          {accounts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                No accounts yet
              </h3>
              <p className="text-sm text-slate-500 text-center max-w-sm mb-6">
                Create your first account to start tracking your expenses and get AI-powered insights
              </p>
              <CreateAccountDrawer>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                  <Plus size={16} strokeWidth={2} />
                  Create Account
                </button>
              </CreateAccountDrawer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}