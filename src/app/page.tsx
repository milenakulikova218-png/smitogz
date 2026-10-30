import Image from "next/image";

export default function Home() {
  return (
    <>
     {/* Шапка */}
      <header className="bg-white py-3">
      <p className="text-2xl font-bold">BOXPACK</p>
      </header>

      {/* Первый экран */}
      <section className="bg-[#1a2a52] py-16 text-white">
      <h1 className="text-5xl font-bold">Фулфилмент</h1>
      </section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-[10px] bg-[#f0f0f0] p-5">
          <p className="text-xs font-bold">ШАГ 1</p>
          <h3 className="mt-2 text-xs">Оставляете заявку</h3>
        </div>

        <div className="rounded-[10px] bg-[#f0f0f0] p-5">
          <p className="text-xs font-bold">ШАГ 2</p>
          <h3 className="mt-2 text-xs">Получаете расчет</h3>
        </div>
        {/* ...остальные шаги по аналогии */}
      </div>
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold">Заголовок</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        ...карточки...
      </div>
      <p className="text-[#1a2a52] text-[14px] mt-[18px]">Текст</p>
      <div className="bg-[#f8f8f8] rounded-[10px] w-[266px]" />
    </>
  );
}
