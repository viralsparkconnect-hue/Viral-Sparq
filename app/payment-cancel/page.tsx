export default function PaymentCancel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">Payment Cancelled ❌</h1>
      <p className="mt-4 text-lg">Something went wrong. Please try again.</p>
      <a
        href="/checkout"
        className="mt-6 btn bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
      >
        Try Again
      </a>
    </div>
  );
}
