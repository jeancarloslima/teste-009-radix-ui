import * as Accordion from "@radix-ui/react-accordion";

export function PerguntasFrequentes() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-[400px] rounded-md bg-white shadow-lg"
    >
      <Accordion.Item
        value="item-1"
        className="border-b border-gray-200 overflow-hidden"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            Qual é a política de reembolso?
            <svg
              className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="px-5 py-4 text-gray-600 text-sm data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          Você tem até 30 dias para solicitar o reembolso integral da sua
          compra, sem perguntas.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-5 py-4 text-left font-medium text-gray-900 hover:bg-gray-50">
            Vocês enviam para o exterior?
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="px-5 py-4 text-gray-600 text-sm">
          Sim, enviamos para mais de 50 países. Taxas de importação podem se
          aplicar.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
