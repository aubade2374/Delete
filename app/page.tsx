export default function LandingPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Qelvian AI</h1>
        <p className="text-xl text-gray-600 mb-8">Revolutionizing your workflow with advanced intelligence.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
            <p className="text-gray-600">Streamline your daily tasks with our cutting-edge AI automation tools.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
            <p className="text-gray-600">Gain deep insights from your data using our powerful predictive engine.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">Connect Qelvian AI with your favorite platforms effortlessly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-white">
        <p>&copy; {new Date().getFullYear()} Qelvian AI. All rights reserved.</p>
      </footer>
    </main>
  );
}
