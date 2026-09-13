import { useState } from "react";

export default function CalculatorForm({
  onCalculate,
  showDob = true,
  showRelationshipType = true,
  name1Label = "Name 1",
  name2Label = "Name 2",
  buttonLabel = "Calculate",
}) {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [dob1, setDob1] = useState("");
  const [dob2, setDob2] = useState("");
  const [relationshipType, setRelationshipType] = useState("Crush");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name1.trim() || !name2.trim()) {
      setError("Please enter both names to calculate a result.");
      return;
    }
    setError("");
    onCalculate({ name1: name1.trim(), name2: name2.trim(), dob1, dob2, relationshipType });
  }

  return (
    <form onSubmit={handleSubmit} className="calculator-card rounded-soft p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name1" className="block text-sm font-medium text-ink mb-1.5">
            {name1Label}
          </label>
          <input
            id="name1"
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="e.g. Aisha"
            maxLength={40}
            required
            className="w-full border border-gray-200 rounded-soft px-4 py-2.5 text-sm focus:border-rose-400 outline-none"
          />
        </div>
        <div>
          <label htmlFor="name2" className="block text-sm font-medium text-ink mb-1.5">
            {name2Label}
          </label>
          <input
            id="name2"
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="e.g. Zain"
            maxLength={40}
            required
            className="w-full border border-gray-200 rounded-soft px-4 py-2.5 text-sm focus:border-rose-400 outline-none"
          />
        </div>
      </div>

      {showDob && (
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="dob1" className="block text-sm font-medium text-ink mb-1.5">
              Date of Birth 1 <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="dob1"
              type="date"
              value={dob1}
              onChange={(e) => setDob1(e.target.value)}
              className="w-full border border-gray-200 rounded-soft px-4 py-2.5 text-sm focus:border-rose-400 outline-none"
            />
          </div>
          <div>
            <label htmlFor="dob2" className="block text-sm font-medium text-ink mb-1.5">
              Date of Birth 2 <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="dob2"
              type="date"
              value={dob2}
              onChange={(e) => setDob2(e.target.value)}
              className="w-full border border-gray-200 rounded-soft px-4 py-2.5 text-sm focus:border-rose-400 outline-none"
            />
          </div>
        </div>
      )}

      {showRelationshipType && (
        <div>
          <label htmlFor="relationshipType" className="block text-sm font-medium text-ink mb-1.5">
            Relationship Type
          </label>
          <select
            id="relationshipType"
            value={relationshipType}
            onChange={(e) => setRelationshipType(e.target.value)}
            className="w-full border border-gray-200 rounded-soft px-4 py-2.5 text-sm focus:border-rose-400 outline-none bg-white"
          >
            <option>Crush</option>
            <option>Couple</option>
            <option>Best Friends</option>
            <option>Sister/Brother</option>
            <option>Other</option>
          </select>
        </div>
      )}

      {error && <p className="text-sm text-rose-600">{error}</p>}

      <button
        type="submit"
        className="w-full bg-rose-600 text-white font-medium rounded-soft py-3 hover:bg-rose-700 transition-colors"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
