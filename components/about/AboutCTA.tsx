import { Button } from '@/components/ui/button';

export default function AboutCTA() {
  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
      <p className="text-sm sm:text-base text-gray-600 mb-8">Get in touch today for a free consultation</p>
      <Button variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
        Contact Us Today
      </Button>
    </div>
  );
}
