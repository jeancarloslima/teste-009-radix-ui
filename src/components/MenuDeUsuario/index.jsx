import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function MenuDeUsuario() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none">
          <span className="font-bold text-gray-700">SB</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] rounded-md bg-white p-2 shadow-xl border border-gray-100 z-50 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md outline-none cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white">
            Meu Perfil
          </DropdownMenu.Item>

          <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-gray-700 rounded-md outline-none cursor-pointer data-[highlighted]:bg-blue-500 data-[highlighted]:text-white">
            Configurações
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-gray-200 my-2" />

          <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm text-red-600 rounded-md outline-none cursor-pointer data-[highlighted]:bg-red-500 data-[highlighted]:text-white">
            Sair
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
