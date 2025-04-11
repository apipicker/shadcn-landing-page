import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; 
import { useLangDispatch, useLangState } from "@/context/lang/context";

export function ModeLang() {
  const { set } = useLangDispatch();
  const state = useLangState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ghost"
        >
          <span  style={{fontSize: 28}}>
          {state?.lang==='en'?'🇬🇧':'🇮🇹'}
          </span>
          {/* <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
          {/* <Moon className="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
          <span className="sr-only">Choice languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => set("it")}>
          {state?.menu?.languages?.it}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => set("en")}>
        {state?.menu?.languages?.en}
        </DropdownMenuItem> 
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
