import useUser from "./useUser";
import { useState } from "react";
import useUpdateuser from "./useUpdateuser";

export default function AupdateUseracount() {
  const {
    user: {
      email,
      user_metadata: { full_name: currentUsername },
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
    <form className="max-w-md mx-auto mt-40" onSubmit={handleSubmit}>
      {/* Email */}
      <div className="mb-5">
        <input value={email} disabled className="border-b-2 w-full" />
        <label>Email address</label>
      </div>

      {/* Full name */}
      <div className="mb-5">
        <input
          type="text"
          value={full_name}
          onChange={(e) => setfullname(e.target.value)}
          className="border-b-2 w-full"
        />
        <label>Update your full name</label>
      </div>

      {/* Avatar */}
      <div className="mb-5">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setavatar_url(e.target.files[0])}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#E43636] px-5 py-2 rounded text-white"
      >
        {isLoading ? "Updating..." : "Submit"}
      </button>
    </form>
  );
}
