"use client";
import { useState, FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import type { MenuProps } from "antd";
import { Button, Flex, Layout, Menu } from "antd";
import { useUserStore } from "@/utils/user.store";
import { useLoginLogout } from "./useLoginLogout";
import { WalletCards } from "lucide-react";

const { Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const NavBar: FC = () => {
  const { isConnected } = useUserStore();
  const { login, logout } = useLoginLogout();
  const [current, setCurrent] = useState("blockadamy");
  const pathname = usePathname();
  const items: MenuItem[] = [
    {
      label: (
        <Link
          href="/my-courses"
          className="text-Blue-l-1"
        >
          My Courses
        </Link>
      ),
      key: "my-course",
      // icon: <AppstoreOutlined />,
    },
    {
      label: (
        <Link
          href="/my-contents"
          className="text-Blue-l-1"
        >
          My Contents
        </Link>
      ),
      key: "my-contents",
    },
    {
      key: "about-me",
      label: (
        <Link
          href="/about-me"
          className="text-Blue-l-1"
        >
          About Me
        </Link>
      ),
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Header className="max-h-16 m-0 px-4 bg-gray-950">
      <Flex
        justify="space-between"
        align="center"
        gap={100}
      >
        <Link
          href="/"
          className="text-xl text-Blue-l-1 hover:transition-colors transform"
        >
          Blockademy
        </Link>
        <Menu
          className="w-full bg-transparent"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Button
          className="right-0"
          onClick={isConnected ? logout : login}
          type="text"
          icon={
            <WalletCards
              size={24}
              className="text-Blue-l-1 flex"
            />
          }
        />
      </Flex>
    </Header>
  );
};

export default NavBar;
