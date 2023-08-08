"use client";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

export default function Popup({ title }) {
  return (
    <div>
      <Popover isLazy>
        <PopoverTrigger>
          <Button className="static bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-3 text-sm rounded-lg">
            Tecnologias
          </Button>
        </PopoverTrigger>
        <PopoverContent className="right-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 text-white max-w-xs rounded-lg">
          <PopoverHeader className="flex gap-8 justify-between px-4 py-6 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {title}
            <PopoverCloseButton className="text-white" />
          </PopoverHeader>
          {/* <PopoverBody className="px-4 pb-2 text-blue-400 underline">
                  Acessar Repositório
                </PopoverBody> */}
        </PopoverContent>
      </Popover>
    </div>
  );
}
