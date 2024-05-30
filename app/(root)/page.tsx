import Header from "@/components/header";
import RightSidebar from "@/components/right-sidebar";
import TotalBalance from "@/components/total-balance";

export default function Home() {
  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
  } as User;
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

      <RightSidebar
        user={loggedIn}
        banks={[{ currentBalance: 578 }, { currentBalance: 1000 }]}
        transactions={[]}
      />
    </section>
  );
}
