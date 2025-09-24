import useUser from "./useUser";
import { useState } from "react";
import useUpdateuser from "./useUpdateuser";

export default function AupdateUseracount() {
  const {
    user: {
      email,
      user_metadata: { full_name: currentUsername, avatar: userAvatar },
    },
  } = useUser();

  const [full_name, setfullname] = useState(currentUsername);
  const [avatar, setavatar_url] = useState(null);
  const { Updatingdata, isLoading } = useUpdateuser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!full_name) return;
    Updatingdata({ full_name, avatar });
  }

  return (
    <form
      className="w-[50%] mx-auto  bg-emerald-600 backdrop-blur-md rounded-2xl shadow-lg p-8 text-white"
      onSubmit={handleSubmit}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-28 h-28 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center shadow-md">
          {/* Preview avatar if selected */}
          {avatar ? (
            <img
              src={userAvatar}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">No Avatar</span>
          )}
        </div>
        <label className="mt-4 text-sm font-medium text-gray-300 cursor-pointer bg-gray-800/60 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
          Upload Avatar
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setavatar_url(e.target.files[0])}
            className="hidden"
          />
        </label>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block mb-1 text-sm text-gray-300">Email</label>
        <input
          value={email}
          disabled
          className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-2 text-gray-400 cursor-not-allowed"
        />
      </div>

      {/* Full name */}
      <div className="mb-6">
        <label className="block mb-1 text-sm text-gray-300">
          Update your full name
        </label>
        <input
          type="text"
          value={full_name}
          onChange={(e) => setfullname(e.target.value)}
          className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Updating..." : "Save Changes"}
      </button>
    </form>
  );
}
