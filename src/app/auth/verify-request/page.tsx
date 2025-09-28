export default function VerifyRequest() {
  return (
    <div className="min-h-screen bg-grid" style={{backgroundColor: '#f8fafc'}}>
      {/* Top colorful bar with title */}
      <div className="w-full" style={{
        background: 'linear-gradient(90deg, #60a5fa 0%, #7c3aed 50%, #ec4899 100%)',
        boxShadow: '0 10px 30px rgba(76, 29, 149, 0.25)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{ width: '32px', height: '32px', color: '#4f46e5' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            DepoOutline
          </h1>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h2>
            <p className="text-gray-600">
              A sign-in link has been sent to your email address. Click the link to sign in to your account.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Check your spam folder if you don't see the email in your inbox.
            </p>
          </div>

          <a
            href="/auth/signin"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            ← Back to sign in
          </a>
        </div>
      </div>
    </div>
  );
}
