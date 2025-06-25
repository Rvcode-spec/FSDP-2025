export default function Login() {
  return (
    <div className="p-4 bg-white border rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-2">Login</h2>
      <input placeholder="Email" className="border p-2 block mb-2 w-full"/>
      <input placeholder="Password" type="password" className="border p-2 block mb-2 w-full"/>
      <button className="bg-purple-700 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
