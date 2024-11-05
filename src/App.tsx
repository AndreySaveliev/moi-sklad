import Table from "./components/Table";

function App() {
  return (
    <section className="mx-auto mb-16 mt-20 max-w-[1829px] px-20 sm:mx-10 sm:mb-36 sm:px-0">
      <h1 className="mb-4 w-fit font-interDisp text-5xl font-bold text-white sm:text-2xl">
        User To-Do Table
      </h1>
      <p className="mb-14 font-inter text-base font-normal leading-4 text-white opacity-30 sm:mb-6 sm:text-xs">
        User task table for effective planning.
      </p>
      <Table />
    </section>
  );
}

export default App;
