"use client";

import { FC } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { SunIcon, MoonIcon, ComputerIcon } from "lucide-react";

import { useTheme } from "next-themes";

interface ChangeThemeProps {}

export const ChangeTheme: FC<ChangeThemeProps> = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-very-dark-blue-lm dark:text-white"
          variant="ghost"
        >
          {theme === "light" && <SunIcon className="size-5" />}
          {theme === "dark" && <MoonIcon className="size-5" />}
          {theme === "system" && <ComputerIcon className="size-5" />}
          <span className="capitalize text-xs font-semibold">{theme} Mode</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="font-semibold"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="font-semibold"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="font-semibold"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
