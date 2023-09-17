
import CardSimple from "./CardSimple";
function Cards() {

    return (
      <>
        <section className="p-2">
          <h1 className="text-xl font-semibold">Cards</h1>
        </section>
        <section className="p-2">
          <h2 className="text-slate-600 mb-3 mt-5">Basic Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <CardSimple/>
          </div>
        </section>
        <section className="p-2">
          <h2 className="text-slate-600 mb-3 mt-5">Basic Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <CardSimple/>
          </div>
        </section>
      </>
    );

  }

export default Cards