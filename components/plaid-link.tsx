import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import Image from "next/image";

export default function PlaidLink({ user, variant }: PlaidLinkProps) {
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      router.push("/");
    },
    [user, router]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          className="plaidlink-primary"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          variant="ghost"
          className="plaidlink-ghost"
          onClick={() => open()}
        >
          <Image
            src="/icons/connect-bank.svg"
            alt="Connect Bank"
            width={24}
            height={24}
          />
          <p className="sidebar-label">
            Connect Bank
          </p>
        </Button>
      ) : (
        <Button className="plaidlink-default sidebar-link" onClick={() => open()}>
          <Image
            src="/icons/connect-bank.svg"
            alt="Connect Bank"
            width={24}
            height={24}
          />
          <p className="sidebar-label">Connect Bank</p>
        </Button>
      )}
    </>
  );
}
