import PasswordForm from './components/PasswordForm';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Red Section - One fifth of screen */}
      <div className="relative flex h-[20vh] items-start justify-center bg-[#DC143C] pt-8 sm:pt-12">
        {/* White Rounded Banner */}
        <div className="rounded-2xl bg-white px-6 py-3 sm:px-8 sm:py-4">
          <h1 className="text-xl font-bold uppercase tracking-wide text-black sm:text-2xl md:text-3xl">
            LA GALA DEL AÑO
          </h1>
        </div>
      </div>

      {/* White Triangle Section with Emblem */}
      <div className="relative -mt-1 flex flex-col items-center bg-white">
        {/* Black Horizontal Line */}
        <div className="h-1 w-full bg-black"></div>
        
        {/* White Triangle - Smaller */}
        <div className="relative -mt-1 h-16 w-full overflow-hidden sm:h-20">
          <div className="absolute left-1/2 top-0 h-full w-[200%] -translate-x-1/2 bg-white" 
               style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
          </div>
        </div>

        {/* Emblem Container - Philip Morris Logo Image - Shifted Down */}
        <div className="relative -mt-6 flex flex-col items-center sm:-mt-8">
          <img
            src="/logo-philip-morris.jpg"
            alt="Philip Morris Logo"
            className="h-auto w-auto max-w-[200px] object-contain sm:max-w-[250px]"
          />
        </div>
      </div>

      {/* Password Input Section */}
      <div className="flex flex-col items-center justify-center bg-white py-2">
        <PasswordForm />
      </div>

      {/* Bottom Section with Large EC31 Text with Black Box */}
      <div className="flex items-center justify-center bg-white pb-4 pt-2 sm:pb-6 sm:pt-4">
        <h2 className="font-serif text-6xl font-bold text-black sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="rounded-lg border-4 border-black px-4 py-2 sm:px-6 sm:py-4">
            EC31
          </span>
        </h2>
      </div>
    </div>
  );
}
