import { Dialog } from "radix-ui";

export default function ReviewModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-full h-10 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300">
          + Add Review
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl z-50">
          <Dialog.Title className="text-xl font-bold mb-4 text-gray-800">
            Escreva sua review
          </Dialog.Title>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="review-input"
                className="text-sm font-medium text-gray-700"
              >
                Sua opinião
              </label>
              <textarea
                id="review-input"
                className="p-3 border rounded-md min-h-30 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ex: A forma como o diretor usou os efeitos práticos..."
              />
            </div>

            <div className="flex gap-2 justify-end mt-2">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancelar
                </button>
              </Dialog.Close>

              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
              >
                Salvar
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
