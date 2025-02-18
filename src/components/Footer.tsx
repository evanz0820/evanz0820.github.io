export default function Footer() {
    return (
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Evan Zhang. All rights reserved.</p>
        </div>
      </footer>
    )
  }