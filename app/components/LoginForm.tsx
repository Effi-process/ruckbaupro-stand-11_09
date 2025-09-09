'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from './Icon';

interface LoginFormProps {
  type: 'customer' | 'employee';
  onSuccess: () => void;
}

export default function LoginForm({ type, onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulierte Authentifizierung - In der Praxis würde hier eine echte API-Anfrage stehen
    setTimeout(() => {
      if (type === 'customer') {
        if (email === 'kunde@asbestsanierung.de' && password === 'kunde123') {
          localStorage.setItem('customerAuth', 'true');
          onSuccess();
        } else {
          setError('Ungültige Anmeldedaten. Verwenden Sie: kunde@asbestsanierung.de / kunde123');
        }
      } else {
        if (email === 'mitarbeiter@asbestsanierung.de' && password === 'team123') {
          localStorage.setItem('employeeAuth', 'true');
          onSuccess();
        } else {
          setError('Ungültige Anmeldedaten. Verwenden Sie: mitarbeiter@asbestsanierung.de / team123');
        }
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/5 via-transparent to-[#0052A3]/5" />
      
      <div className="relative w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-2xl shadow-lg mb-4">
            <Icon name={type === 'customer' ? 'user' : 'users'} size={40} color="white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {type === 'customer' ? 'Kundenportal' : 'Mitarbeiterbereich'}
          </h1>
          <p className="text-gray-600 mt-2">
            {type === 'customer' 
              ? 'Melden Sie sich an, um Ihre Projekte zu verwalten' 
              : 'Zugang zum internen Kontrollzentrum'}
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                  placeholder="ihre.email@beispiel.de"
                  required
                />
                <Icon name="mail" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Passwort
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <Icon name="lock" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} />
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-[#0066CC] border-gray-300 rounded focus:ring-[#0066CC]" />
                <span className="ml-2 text-sm text-gray-600">Angemeldet bleiben</span>
              </label>
              <a href="#" className="text-sm text-[#0066CC] hover:text-[#0052A3]">
                Passwort vergessen?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Anmeldung läuft...
                </span>
              ) : (
                'Anmelden'
              )}
            </button>

            {/* Alternative Actions */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                {type === 'customer' ? 'Noch kein Kunde?' : 'Benötigen Sie Hilfe?'}
              </p>
              <a href="/kontakt" className="text-[#0066CC] hover:text-[#0052A3] font-medium text-sm">
                {type === 'customer' ? 'Kontaktieren Sie uns' : 'IT-Support kontaktieren'}
              </a>
            </div>
          </form>
        </div>

        {/* Security Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <Icon name="shield-check" size={16} />
            <span>Sichere 256-Bit SSL-Verschlüsselung</span>
          </div>
        </div>
      </div>
    </div>
  );
}