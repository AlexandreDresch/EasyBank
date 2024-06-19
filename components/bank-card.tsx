import { calculatePercentage, formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Copy from "./copy";
import ProgressBar from "./progress-bar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default function BankCard({
  account,
  userName,
  className,
  showBalance = true,
}: CreditCardProps) {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className={`bank-card ${className}`}
      >
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{account.name}</h1>

            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>

            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image
            src={"/icons/pay-pass.svg"}
            width={20}
            height={24}
            alt="PayPass Icon"
          />

          <Image
            src={"/icons/mastercard.svg"}
            width={45}
            height={32}
            alt="MasterCard Icon"
            className="ml-5"
          />
        </div>

        <Image
          src={"/lines.png"}
          width={316}
          height={190}
          alt="Lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {showBalance && (
        <div className="flex gap-1 p-1 px-2">
          <ProgressBar
            title={`Spent ${formatAmount(
              account?.currentBalance - account?.availableBalance
            )} of ${formatAmount(account.currentBalance)} available.`}
            value={calculatePercentage({
              currentBalance:
                account?.currentBalance - account?.availableBalance,
              availableBalance: account?.availableBalance,
            })}
            indicatorColor="bg-button"
          />

          <HoverCard>
            <HoverCardTrigger>
              <Copy title={account?.shareableId} />
            </HoverCardTrigger>
            <HoverCardContent className="text-sm max-w-36">
              Copy your key.
            </HoverCardContent>
          </HoverCard>
        </div>
      )}
    </div>
  );
}
