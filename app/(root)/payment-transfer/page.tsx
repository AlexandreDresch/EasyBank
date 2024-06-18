import Header from "@/components/header";
import PaymentTransferForm from "@/components/payment-transfer-form";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function PaymentTransfer() {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });
  return (
    <section className="payment-transfer">
      <Header
        title="Payment Transfer"
        subtext="Please provide any specif details or notes related to the payment transfer."
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accounts?.data} />
      </section>
    </section>
  );
}
