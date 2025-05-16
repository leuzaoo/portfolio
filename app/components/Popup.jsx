"use client";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Popup({ title }) {
  const { t } = useTranslation();
  return (
    <div>
      <Popover isLazy placement="bottom-start" gutter={8}>
        <PopoverTrigger>
          <Button className="static rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-5 py-3 text-sm">
            {t("Technologies")}
          </Button>
        </PopoverTrigger>

        <Portal>
          <PopoverContent className="right-8 max-w-xs rounded-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            <PopoverHeader className="flex justify-between gap-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text px-4 py-6 font-semibold text-transparent">
              {title}
              <PopoverCloseButton className="text-white" />
            </PopoverHeader>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
}
