import type { MetaFunction } from "@remix-run/node";
import { observer } from "mobx-react";
import { store } from "../../store/store";

export const meta: MetaFunction = () => {
  return [
    { title: "Observer HOC" },
    { name: "description", content: "Observer HOC" },
  ];
};

export default observer(function ObserverPage() {
  const {
    count,
    submodel: { title },
  } = store;

  return (
    <div className="App">
      <h1>This page uses an observer HOC</h1>
      <p>Open up React DevTools and you'll see that the `ObserverPage` component is not memoized with React Compiler</p>
      <p>
        {count}: {title}
      </p>
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => store.increment()} 
          className="px-4 py-2 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition-colors"
        >
          +
        </button>
        <button 
          onClick={() => store.decrement()} 
          className="px-4 py-2 text-white font-semibold rounded-md bg-red-500 hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <button
          onClick={() => store.changeNonObservedProperty()}
          className="px-4 py-2 text-white font-semibold rounded-md bg-purple-500 hover:bg-purple-600 transition-colors"
        >
          We do not observe the property this changes
        </button>
        <button
          onClick={() => store.submodel.randomize()}
          className="px-4 py-2 text-white font-semibold rounded-md bg-green-500 hover:bg-green-600 transition-colors"
        >
          Randomize string
        </button>
      </div>
    </div>
  );
});