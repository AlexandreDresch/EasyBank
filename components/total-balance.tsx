import AnimatedCounter from "./animated-counter";
import DoughnutChart from "./doughnut-chart";

export default function TotalBalance({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceProps) {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          {totalBanks} Bank {totalBanks > 1 ? "Accounts" : "Account"}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
}
