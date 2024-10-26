"use client";

import { FC, ReactNode } from "react";
import { useUserStore } from "../utils/user.store";
import { useWatchWagmiAccount } from "../utils/watchWagmiAccount";
import { Button, Card, Flex, Typography } from "antd";
import { WalletCards } from "lucide-react";
import { useLoginLogout } from "./useLoginLogout";

const { Title, Paragraph } = Typography;

const LoginGuard: FC<{ children: ReactNode }> = ({ children }) => {
  useWatchWagmiAccount();
  const { isInitialized, isConnected } = useUserStore();
  const { login } = useLoginLogout();
  if (!isInitialized) {
    return <p className="text-center text-lg">Initializing...</p>;
  }

  if (!isConnected) {
    return (
      <Flex
        justify="center"
        align="center"
        className="h-full"
      >
        <Card className="w-96 outline outline-gray-100 hover:outline-2 bg-blue-d-2 text-blue-l-4 mb-16">
          <Title
            level={3}
            className=" text-blue-l-4"
          >
            Please Login with Your Wallet
          </Title>
          <Paragraph className=" text-blue-l-4">
            To continue, please connect your wallet. This allows you to access
            your account and interact with our platform.
          </Paragraph>
          <Button
            type="primary"
            icon={<WalletCards />}
            size="large"
            onClick={login}
            style={{ width: "100%" }}
          >
            Connect Wallet
          </Button>
        </Card>
      </Flex>
    );
  }

  return <>{children}</>;
};

export default LoginGuard;
