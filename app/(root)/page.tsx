import Header from "@/components/header";
import TotalBalance from "@/components/total-balance";

export default function Home() {
  const loggedIn = { firstName: "John" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.5}
          />
        </header>
      </div>
    </section>
  );
}
