export default function EditTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      ></input>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      ></input>
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
}