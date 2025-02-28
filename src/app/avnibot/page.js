import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_12fr_10px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-40 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 row-start-1 items-center m:items-start">
        <Image
          className="dark:invert"
          src="/avni.jpg"
          alt="Avni"
          width={300}
          height={100}
          priority
        />
        <p> <strong>Merhaba, ben AvniBot. Size nasıl yardımcı olabilirim? 🤔</strong></p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Kişsel sağlık ve güvenlik asistanınızım.
          </li>
          <li>Acil durumlarda beni çağırabilirsiniz...</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.112.gov.tr/cagri-merkezleri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Yaralandım... 🚑
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="http://www.engelsiz112.gov.tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yardım... 🆘
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.afad.gov.tr/afad-gonulluluk-projesi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Deigned by Ayşe Zehra KARAÖMEROĞLU
        </a>
      </footer>
    </div>
  );
}
