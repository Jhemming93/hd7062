export default function Footer() {
  const disclaimer =
    "*The estimates provided by this tool are intended for informational purposes only and should not be considered as guarantees. While we strive to provide accurate and up-to-date estimates, they may not reflect the final costs or outcomes.";
  const checkPage = () => {};
  return (
    <footer className="bg-gray-100">
      <div className="flex sm:container mx-auto" style={{ maxWidth: 1024 }}>
        <div className="flex p-2">
          <p className="pl-1 self-center text-lrg font-bold" id="disclaimer">
            {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
