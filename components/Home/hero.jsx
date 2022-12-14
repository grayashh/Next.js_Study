import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center z-2">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Grayash
          <br />
          Develop Portfolio
        </h1>
        <p className="mb-8 leading-relaxed">
          π¨βπ MJU Convergence Software Data Technology (2022.03 ~ ) <br />
          π» Beyond Coding(2022.02 ~ )
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">νλ‘μ νΈ λ³΄λ¬κ°κΈ°</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
