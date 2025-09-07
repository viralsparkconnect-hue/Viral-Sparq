export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-green-600">Success ✅</h1>
      <p className="mt-4 text-lg">Your payment was successful!</p>
      <a
        href="/"
        className="mt-6 btn bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}
