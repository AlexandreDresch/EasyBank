import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankTabItem from "./bank-tab-item";
import BankInfo from "./bank-info";
import TransactionsTable from "./transactions-table";
import Pagination from "./pagination";

export default function RecentTransactions({
  accounts,
  appwriteItemId,
  page,
  transactions,
}: RecentTransactionsProps) {
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const indexOfLastTransaction = page * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Transactions</h2>

        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem
                account={account}
                appwriteItemId={appwriteItemId}
                key={account.id}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account: Account) => (
          <TabsContent
            key={account.id}
            value={account.appwriteItemId}
            className="space-y-4"
          >
            <BankInfo
              account={account}
              type="full"
              appwriteItemId={appwriteItemId}
              key={account.id}
            />

            <TransactionsTable transactions={currentTransactions} />

            <Pagination totalPages={totalPages} page={page} />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
